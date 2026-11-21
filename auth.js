/* GEC FIELD — Inicio de sesión con Microsoft (Entra ID)
   Flujo "código de autorización + PKCE" para aplicaciones de página única.
   No usa secretos: el Id. de aplicación y el Id. de directorio no son confidenciales. */
const Auth = (() => {
  const TENANT = 'bfb17f3b-e520-4f08-9dc5-a2db0e6b2487';
  const CLIENT = '259971ab-0227-458f-8d5a-8bc641e24331';
  const SCOPES = 'openid profile offline_access User.Read Sites.ReadWrite.All';
  const BASE = `https://login.microsoftonline.com/${TENANT}/oauth2/v2.0`;
  const KEY = 'gecfield.auth';
  const KEY_USER = 'gecfield.user';

  const b64url = bytes => btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const rand = (n = 48) => { const a = new Uint8Array(n); crypto.getRandomValues(a); return b64url(a); };
  async function challenge(v) { const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(v)); return b64url(new Uint8Array(d)); }
  const leer = k => { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } };
  const guardar = (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  function redirectUri() { return location.origin + location.pathname.replace(/index\.html$/, ''); }

  async function login() {
    const verifier = rand(64), state = rand(16);
    try { sessionStorage.setItem('gecfield.pkce', JSON.stringify({ verifier, state })); } catch (e) {}
    const p = new URLSearchParams({
      client_id: CLIENT, response_type: 'code', redirect_uri: redirectUri(), response_mode: 'query',
      scope: SCOPES, state, code_challenge: await challenge(verifier), code_challenge_method: 'S256', prompt: 'select_account'
    });
    location.href = `${BASE}/authorize?${p}`;
  }

  async function token(params) {
    const r = await fetch(`${BASE}/token`, {
      method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ client_id: CLIENT, scope: SCOPES, ...params })
    });
    const t = await r.json();
    if (!r.ok) throw new Error(t.error_description ? t.error_description.split('\r\n')[0] : 'No se pudo obtener acceso.');
    guardar(KEY, { at: t.access_token, rt: t.refresh_token, exp: Date.now() + (t.expires_in - 120) * 1000 });
    return t.access_token;
  }

  async function handleRedirect() {
    const q = new URLSearchParams(location.search);
    if (!q.has('code') && !q.has('error')) return false;
    let saved = {};
    try { saved = JSON.parse(sessionStorage.getItem('gecfield.pkce') || '{}'); sessionStorage.removeItem('gecfield.pkce'); } catch (e) {}
    history.replaceState(null, '', redirectUri());
    if (q.get('error')) throw new Error((q.get('error_description') || q.get('error')).split('\r\n')[0]);
    if (!saved.state || q.get('state') !== saved.state) throw new Error('La respuesta de Microsoft no coincide. Intenta de nuevo.');
    await token({ grant_type: 'authorization_code', code: q.get('code'), redirect_uri: redirectUri(), code_verifier: saved.verifier });
    await me();
    return true;
  }

  async function accessToken() {
    const a = leer(KEY);
    if (!a) throw new Error('Inicia sesión con tu cuenta de GEC.');
    if (Date.now() < a.exp) return a.at;
    if (!a.rt) throw new Error('La sesión expiró. Inicia sesión de nuevo.');
    try { return await token({ grant_type: 'refresh_token', refresh_token: a.rt }); }
    catch (e) { guardar(KEY, null); throw new Error('La sesión expiró. Inicia sesión de nuevo.'); }
  }

  async function graph(path, opts = {}) {
    const at = await accessToken();
    const r = await fetch(`https://graph.microsoft.com/v1.0${path}`, { ...opts, headers: { Authorization: `Bearer ${at}`, ...(opts.headers || {}) } });
    if (!r.ok) {
      let m = `Error ${r.status}`;
      try { const j = await r.json(); if (j.error && j.error.message) m = j.error.message; } catch (e) {}
      throw new Error(m);
    }
    return r.status === 204 ? null : r.json();
  }

  async function me() {
    const u = await graph('/me?$select=displayName,mail,userPrincipalName,jobTitle');
    guardar(KEY_USER, u);
    return u;
  }

  // Foto de perfil de Microsoft 365 (devuelve data URL o null si no tiene foto)
  async function photo() {
    const at = await accessToken();
    let r = await fetch('https://graph.microsoft.com/v1.0/me/photos/240x240/$value', { headers: { Authorization: `Bearer ${at}` } });
    if (!r.ok) r = await fetch('https://graph.microsoft.com/v1.0/me/photo/$value', { headers: { Authorization: `Bearer ${at}` } });
    if (!r.ok) return null;
    const b = await r.blob();
    return await new Promise(res => { const f = new FileReader(); f.onload = () => res(f.result); f.onerror = () => res(null); f.readAsDataURL(b); });
  }

  function logout() { guardar(KEY, null); guardar(KEY_USER, null); }
  const signedIn = () => !!leer(KEY);
  const user = () => leer(KEY_USER);

  return { login, logout, handleRedirect, graph, me, photo, signedIn, user, redirectUri };
})();
