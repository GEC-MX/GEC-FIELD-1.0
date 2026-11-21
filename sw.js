/* GEC FIELD — trabajo sin señal: guarda la app en el teléfono.
   Cambia VERSION en cada publicación para que los teléfonos tomen la versión nueva. */
const VERSION = 'gecfield-v1.0.0';
const APP = ['./', './index.html', './app.js', './auth.js', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'];
const EXTERNOS = ['cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(APP)));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Nunca guardar en el teléfono el inicio de sesión ni los datos de Microsoft o del clima.
  if (/login\.microsoftonline\.com|graph\.microsoft\.com|api\.open-meteo\.com/.test(url.hostname)) return;

  // Pantallas de la app: primero la red (para tener lo más nuevo); sin señal, la copia guardada.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put('./index.html', c)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }

  // Archivos propios y librerías externas: la copia guardada, y se actualiza en segundo plano.
  if (url.origin === location.origin || EXTERNOS.includes(url.hostname)) {
    e.respondWith(caches.open(VERSION).then(async c => {
      const hit = await c.match(req);
      const red = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || red;
    }));
  }
});
