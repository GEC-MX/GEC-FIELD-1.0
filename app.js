/* ===================== DATOS DE EJEMPLO ===================== */
const SEED = {
  proyectos:[
    {id:'p1',nombre:'Ampliación Almacén PT',planta:'Coatepec',cliente:'Nestlé México'},
    {id:'p2',nombre:'Nueva Línea de Envasado',planta:'Toluca',cliente:'Nestlé México'}
  ],
  contratos:[
    {id:'c1',proyectoId:'p1',numero:'GEC-COA-01',nombre:'Obra civil y cimentación',contratista:'Constructora Ejemplo, S.A. de C.V.'},
    {id:'c2',proyectoId:'p1',numero:'GEC-COA-02',nombre:'Estructura metálica',contratista:'Aceros Ejemplo, S.A. de C.V.'},
    {id:'c3',proyectoId:'p2',numero:'GEC-TOL-01',nombre:'Instalaciones eléctricas',contratista:'Electro Ejemplo, S.A. de C.V.'}
  ],
  conceptos:[
    {id:'k1',contratoId:'c1',clave:'01.01',desc:'Trazo y nivelación',unidad:'m²',cant:1200,ini:'2026-10-26',fin:'2026-10-28',dur:3,base:100},
    {id:'k2',contratoId:'c1',clave:'02.01',desc:'Excavación con equipo',unidad:'m³',cant:850,ini:'2026-10-29',fin:'2026-11-12',dur:15,base:60},
    {id:'k3',contratoId:'c1',clave:'03.01',desc:"Plantilla de concreto f'c=100",unidad:'m²',cant:900,ini:'2026-11-09',fin:'2026-11-16',dur:8,base:20},
    {id:'k4',contratoId:'c1',clave:'04.01',desc:'Acero de refuerzo en zapatas',unidad:'kg',cant:18500,ini:'2026-11-13',fin:'2026-11-27',dur:15,base:0},
    {id:'k5',contratoId:'c1',clave:'05.01',desc:"Concreto en zapatas f'c=250",unidad:'m³',cant:320,ini:'2026-11-23',fin:'2026-12-04',dur:12,base:0},
    {id:'k6',contratoId:'c2',clave:'01.01',desc:'Fabricación de columnas',unidad:'ton',cant:45,ini:'2026-11-02',fin:'2026-11-27',dur:26,base:40},
    {id:'k7',contratoId:'c2',clave:'02.01',desc:'Montaje de columnas',unidad:'ton',cant:45,ini:'2026-11-24',fin:'2026-12-10',dur:17,base:10},
    {id:'k8',contratoId:'c2',clave:'03.01',desc:'Montaje de armaduras',unidad:'ton',cant:60,ini:'2026-12-07',fin:'2026-12-24',dur:18,base:0},
    {id:'k9',contratoId:'c3',clave:'01.01',desc:'Canalización con tubo conduit',unidad:'m',cant:2400,ini:'2026-11-03',fin:'2026-11-21',dur:19,base:35},
    {id:'k10',contratoId:'c3',clave:'02.01',desc:'Cableado de fuerza',unidad:'m',cant:5200,ini:'2026-11-17',fin:'2026-12-12',dur:26,base:5},
    {id:'k11',contratoId:'c3',clave:'03.01',desc:'Montaje de tableros',unidad:'pza',cant:8,ini:'2026-12-08',fin:'2026-12-15',dur:8,base:0}
  ]
};
const PLANOS = [
  {id:'pl1',contratoId:'c1',clave:'A-101',titulo:'Planta arquitectónica general',disc:'Arquitectura',rev:'C',fecha:'2026-10-28',mb:3.2},
  {id:'pl2',contratoId:'c1',clave:'A-101',titulo:'Planta arquitectónica general',disc:'Arquitectura',rev:'B',fecha:'2026-09-15',mb:3.0,obsoleto:true},
  {id:'pl3',contratoId:'c1',clave:'E-201',titulo:'Planta de cimentación',disc:'Estructura',rev:'D',fecha:'2026-11-05',mb:4.1},
  {id:'pl4',contratoId:'c1',clave:'E-202',titulo:'Detalles de zapatas y dados',disc:'Estructura',rev:'B',fecha:'2026-10-30',mb:2.4},
  {id:'pl5',contratoId:'c1',clave:'C-301',titulo:'Trazo y niveles de terreno',disc:'Civil',rev:'A',fecha:'2026-09-02',mb:1.8},
  {id:'pl6',contratoId:'c2',clave:'E-401',titulo:'Planta de columnas y anclas',disc:'Estructura',rev:'C',fecha:'2026-10-20',mb:3.6},
  {id:'pl7',contratoId:'c2',clave:'E-402',titulo:'Armaduras de cubierta',disc:'Estructura',rev:'B',fecha:'2026-10-11',mb:5.0},
  {id:'pl8',contratoId:'c3',clave:'IE-101',titulo:'Diagrama unifilar',disc:'Instalación eléctrica',rev:'B',fecha:'2026-10-25',mb:1.2},
  {id:'pl9',contratoId:'c3',clave:'IE-102',titulo:'Canalizaciones de fuerza',disc:'Instalación eléctrica',rev:'C',fecha:'2026-11-08',mb:2.9}
];
const FORMATOS = [
  {id:'cal', nombre:'Inspección y liberación de calidad', pref:'CAL', carpeta:'Calidad', plantilla:'FMT-CAL-001.xlsx', ico:'shield', tono:'green'},
  {id:'nc',  nombre:'No conformidad', pref:'NC', carpeta:'No conformidades', plantilla:'FMT-NC-001.xlsx', ico:'alert', tono:'red'},
  {id:'sc',  nombre:'Solicitud de cambio', pref:'SC', carpeta:'Solicitudes de cambio', plantilla:'FMT-SC-001.xlsx', ico:'swap', tono:'amber'},
  {id:'er',  nombre:'Entrega-recepción', pref:'ER', carpeta:'Entrega-recepción', plantilla:'SB-ERM-GEC-001.xlsx', ico:'handover', tono:'navy'}
];
const STEP_IC = ['clipboard','sun','hardhat','camera','alert','chat','book','flag'];
const STEPS = ['Preparación','Inicio de jornada','Actividades','Evidencia fotográfica','Incidencias','Acuerdos de campo','Nota de bitácora','Cierre de jornada'];
const CLIMAS = ['Soleado','Parcialmente nublado','Nublado','Lluvia ligera','Lluvia fuerte','Viento fuerte'];
const CATEGORIAS = ['Oficial albañil','Ayudante general','Fierrero','Carpintero','Soldador','Montador','Electricista','Operador de equipo','Cabo / sobrestante'];
const TIPOS_INC = ['Seguridad','Calidad','Suministro de materiales','Interferencia con planta','Clima','Equipo / maquinaria','Otro'];

/* ===================== ALMACENAMIENTO LOCAL ===================== */
const Store = {
  db:null,
  async open(){
    try{
      this.db = await new Promise((res,rej)=>{
        const r = indexedDB.open('gecfield',1);
        r.onupgradeneeded = ()=> r.result.createObjectStore('kv');
        r.onsuccess = ()=> res(r.result);
        r.onerror = ()=> rej(r.error);
      });
    }catch(e){ this.db = null; }
  },
  async get(k){
    if(!this.db) return null;
    try{ return await new Promise((res,rej)=>{ const q=this.db.transaction('kv').objectStore('kv').get(k); q.onsuccess=()=>res(q.result); q.onerror=()=>rej(q.error); }); }
    catch(e){ return null; }
  },
  async set(k,v){
    if(!this.db) return false;
    try{ await new Promise((res,rej)=>{ const tx=this.db.transaction('kv','readwrite'); tx.objectStore('kv').put(v,k); tx.oncomplete=()=>res(); tx.onerror=()=>rej(tx.error); }); return true; }
    catch(e){ return false; }
  }
};

/* ===================== ESTADO ===================== */
let S = { contratoId:'c1', supervisor:'', frente:'', jornadas:[], formatos:[], planosOffline:{}, programas:{},
  perfil:{foto:'', fuente:''}, tema:{acento:'azul', portada:'gruas', portadaFoto:'', letra:'normal', saludo:true, modo:'auto'} };
/* ===================== PERSONALIZACIÓN ===================== */
const ACENTOS = {
  azul:   {n:'Azul GEC', a:'#1D6FB8', b:'#3A8DDE', h1:'#13315C', h2:'#1D6FB8'},
  marino: {n:'Marino',   a:'#13315C', b:'#2B5A94', h1:'#0B2545', h2:'#13315C'},
  acero:  {n:'Gris acero', a:'#4A6378', b:'#7189A0', h1:'#2C3E50', h2:'#4A6378'},
  cielo:  {n:'Cielo',    a:'#0E86C9', b:'#45B0E8', h1:'#0B4F7C', h2:'#0E86C9'}
};
const PORTADAS = [
  {id:'gruas', n:'Grúas', src:'icons/hero/gruas.svg'},
  {id:'estructura', n:'Estructura', src:'icons/hero/estructura.svg'},
  {id:'planos', n:'Planos', src:'icons/hero/planos.svg'},
  {id:'amanecer', n:'Amanecer', src:'icons/hero/amanecer.svg'},
  {id:'ninguna', n:'Sin imagen', src:''},
  {id:'propia', n:'Mi foto', src:''}
];
const OSCURO_TEL = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
if(OSCURO_TEL && OSCURO_TEL.addEventListener) OSCURO_TEL.addEventListener('change', ()=>{ if(S.tema.modo==='auto') aplicarTema(); });
function aplicarTema(){
  const t = S.tema, a = ACENTOS[t.acento] || ACENTOS.azul, r = document.documentElement.style;
  r.setProperty('--accent', a.a); r.setProperty('--accent2', a.b); r.setProperty('--h1', a.h1); r.setProperty('--h2', a.h2);
  document.body.classList.toggle('grande', t.letra==='grande');
  const oscuro = t.modo==='oscuro' || (t.modo==='auto' && OSCURO_TEL && OSCURO_TEL.matches);
  document.body.classList.toggle('dark', oscuro);
  const ms = document.getElementById('metaScheme'); if(ms) ms.setAttribute('content', oscuro?'only dark':'only light');
  const m = document.querySelector('meta[name="theme-color"]'); if(m) m.setAttribute('content', oscuro?'#0D1520':a.h1);
}
function portadaURL(){
  const t = S.tema;
  if(t.portada==='propia') return t.portadaFoto || '';
  return (PORTADAS.find(x=>x.id===t.portada)||{}).src || '';
}
function nombreUsuario(){ const u = Auth.signedIn() ? (Auth.user()||{}) : {}; return u.displayName || S.supervisor || ''; }
function iniciales(n){ return (n||'').split(' ').filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase() || ''; }
function avatar(cls=''){
  const f = S.perfil.foto, n = nombreUsuario();
  if(f) return `<span class="avatar ${cls}"><img src="${f}" alt=""></span>`;
  return `<span class="avatar ${cls}">${n?esc(iniciales(n)):ic('user')}</span>`;
}
async function fotoMicrosoft(manual){
  if(!Auth.signedIn() || !online()){ if(manual) toast('Necesitas señal e iniciar sesión con Microsoft.'); return; }
  try{
    const f = await Auth.photo();
    if(f){ S.perfil.foto = f; S.perfil.fuente = 'ms'; persist(); renderKeep(); if(manual) toast('Foto de Microsoft 365 aplicada.'); }
    else if(manual) toast('Tu cuenta de Microsoft no tiene foto. Puedes subir una desde el teléfono.');
  }catch(e){ if(manual) toast('No se pudo obtener la foto: '+e.message); }
}
let view = 'home', step = 0, curId = null, detailId = null;
let simOffline = false;
let planoFiltro = {q:'', disc:'', obsoletos:false};
let saveTimer = null;

const $ = s => document.querySelector(s);
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,7);
const hoy = () => { const d=new Date(); d.setMinutes(d.getMinutes()-d.getTimezoneOffset()); return d.toISOString().slice(0,10); };
const ahora = () => new Date().toTimeString().slice(0,5);
const isoLocal = t => { const d=new Date(t); return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10); };
const fmtFecha = f => { if(!f) return ''; const [y,m,d]=f.split('-'); const ms=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic']; return `${+d} ${ms[+m-1]} ${y}`; };
const online = () => navigator.onLine && !simOffline;
const contrato = id => SEED.contratos.find(c=>c.id===id);
const proyecto = id => SEED.proyectos.find(p=>p.id===id);
function revisionesDe(cid){ return (S.programas && S.programas[cid]) || []; }
const conceptosDe = cid => { const r = revisionesDe(cid); return r.length ? r[r.length-1].conceptos : SEED.conceptos.filter(k=>k.contratoId===cid); };
const J = () => S.jornadas.find(j=>j.id===curId);

function persist(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(()=> Store.set('state', S), 250);
}
function toast(msg){
  const t=$('#toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove('show'),2600);
}
function setPath(obj, path, val){
  const parts = path.split('.'); let o = obj;
  for(let i=0;i<parts.length-1;i++){ const p=parts[i]; if(o[p]==null) o[p] = /^\d+$/.test(parts[i+1]) ? [] : {}; o=o[p]; }
  o[parts[parts.length-1]] = val;
}
function getPath(obj, path){ return path.split('.').reduce((o,p)=> o==null?undefined:o[p], obj); }

/* ===================== ÍCONOS ===================== */
const CLOUD_UP = 'M7 15h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.2 6.1 4.5 4.5 0 0 0 7 15z';
const IP = {
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  cloudSun:'<path d="M10 2.5v1.5M4.2 4.7l1 1M2 10.5h1.5M15.8 4.7l-1 1"/><path d="M6.6 12.6A4 4 0 0 1 13.4 8"/><path d="M9 21h8.5a3.5 3.5 0 0 0 .4-6.98A5 5 0 0 0 8.3 13.3 4 4 0 0 0 9 21z"/>',
  cloud:'<path d="M7 19h10a4.5 4.5 0 0 0 .6-8.96A6.5 6.5 0 0 0 5.4 9.6 4.8 4.8 0 0 0 7 19z"/>',
  drizzle:`<path d="${CLOUD_UP}"/><path d="M8 18v1.5M12 19v1.5M16 18v1.5"/>`,
  rain:`<path d="${CLOUD_UP}"/><path d="M8.5 17.5l-1.5 4M12.5 17.5l-1.5 4M16.5 17.5l-1.5 4"/>`,
  storm:`<path d="${CLOUD_UP}"/><path d="M13 15l-2.5 4h3.5l-2.5 4"/>`,
  snow:`<path d="${CLOUD_UP}"/><path d="M8 19h.01M12 19h.01M16 19h.01M10 22h.01M14 22h.01"/>`,
  fog:'<path d="M4 8h16M3 12h18M5 16h14M8 20h8"/>',
  wind:'<path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8"/>',
  thermo:'<path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z"/><path d="M12 9v7"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
  hardhat:'<path d="M3 18h18M4 18v-2a8 8 0 0 1 16 0v2"/><path d="M10 8.5V5h4v3.5M8 16v-4M16 16v-4"/>',
  pin:'<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  clipboard:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3h6v3H9zM9 13l2 2 4-4"/>',
  camera:'<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.5"/>',
  alert:'<path d="M12 3.5L21.5 20h-19z"/><path d="M12 10v4M12 17h.01"/>',
  chat:'<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
  book:'<path d="M5 4h11a3 3 0 0 1 3 3v14H8a3 3 0 0 1-3-3z"/><path d="M5 18a3 3 0 0 1 3-3h11M9 8h6"/>',
  flag:'<path d="M5 21V4M5 4h12l-2.5 4L17 12H5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  upload:'<path d="M12 16V4M7 9l5-5 5 5M4 17v3h16v-3"/>',
  download:'<path d="M12 4v12M7 11l5 5 5-5M4 17v3h16v-3"/>',
  file:'<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  fileCheck:'<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M9 14l2 2 4-4"/>',
  swap:'<path d="M4 8h15l-3.5-3.5M20 16H5l3.5 3.5"/>',
  handover:'<path d="M3 7.5l9-4.5 9 4.5v9l-9 4.5-9-4.5z"/><path d="M3 7.5l9 4.5 9-4.5M12 12v9M7.5 5.2l9 4.6"/>',
  refresh:'<path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4"/>',
  wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><path d="M12 19.5h.01"/>',
  wifiOff:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><path d="M12 19.5h.01M3 3l18 18"/>',
  cloudUp:'<path d="M7 18a4.5 4.5 0 0 1-.8-8.9A6 6 0 0 1 17.5 10a4 4 0 0 1 0 8"/><path d="M12 12v8M9 15l3-3 3 3"/>',
  chart:'<path d="M4 4v16h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
  gantt:'<path d="M4 6h9M8 12h11M6 18h7"/>',
  map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
  list:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  home:'<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  building:'<path d="M4 21V5l8-3v19M12 8h8v13M3 21h18M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2"/>',
  chevR:'<path d="M9 6l6 6-6 6"/>',
  arrowL:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
  arrowR:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  play:'<path d="M7 4.5l12 7.5-12 7.5z"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  logout:'<path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  cone:'<path d="M9.5 4h5l4 15h-13z"/><path d="M3 19h18M7.8 11.5h8.4"/>',
  megaphone:'<path d="M3 10v4h4l9 5V5l-9 5z"/><path d="M19 9a4 4 0 0 1 0 6"/>',
  pen:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
  layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  hourglass:'<path d="M6 3h12M6 21h12M7 3v3a5 5 0 0 0 10 0V3M7 21v-3a5 5 0 0 1 10 0v3"/>',
  lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
  phone:'<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>'
};
const ic = (n, cls='') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IP[n]||''}</svg>`;
const hi = (n, tono='') => `<span class="hi ${tono}">${ic(n)}</span>`; // ícono en burbuja para títulos
const MS_LOGO = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="9.5" height="9.5" fill="#F25022"/><rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00"/><rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF"/><rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900"/></svg>';
// Ícono y color según el clima
function wx(clima){
  const c = (clima||'').toLowerCase();
  if(c.startsWith('soleado')) return {n:'sun', col:'#F2A900', bg:'#FFF4D6'};
  if(c.startsWith('parcial')) return {n:'cloudSun', col:'#D98E04', bg:'#FFF4D6'};
  if(c.startsWith('niebla')) return {n:'fog', col:'#7C8DA6', bg:'#EDF1F6'};
  if(c.startsWith('llovizna')) return {n:'drizzle', col:'#3A8DDE', bg:'#E3EEF8'};
  if(c.startsWith('lluvia')) return {n:'rain', col:'#1D6FB8', bg:'#E3EEF8'};
  if(c.startsWith('tormenta')) return {n:'storm', col:'#5B4BA0', bg:'#ECE9F7'};
  if(c.startsWith('nieve')) return {n:'snow', col:'#5FA0D8', bg:'#E8F3FC'};
  if(c.startsWith('viento')) return {n:'wind', col:'#4F7FAE', bg:'#E7EFF7'};
  if(c.startsWith('nublado')) return {n:'cloud', col:'#7C8DA6', bg:'#EDF1F6'};
  return {n:'cloudSun', col:'#8D99AE', bg:'#EDF1F6'};
}
const fechaLarga = () => { const t=new Date().toLocaleDateString('es-MX',{weekday:'long', day:'numeric', month:'long'}); return t.charAt(0).toUpperCase()+t.slice(1); };
const saludo = () => { const h=new Date().getHours(); return h<12?'Buenos días':h<19?'Buenas tardes':'Buenas noches'; };
// Anillo de avance (real y programado)
function anillo(real, prog, size=118){
  const r=48, C=2*Math.PI*r, rp=38, Cp=2*Math.PI*rp;
  return `<svg viewBox="0 0 120 120" width="${size}" height="${size}" aria-hidden="true">
    <circle cx="60" cy="60" r="${r}" fill="none" style="stroke:var(--track)" stroke-width="12"/>
    <circle cx="60" cy="60" r="${r}" fill="none" stroke="url(#gAv)" stroke-width="12" stroke-linecap="round" stroke-dasharray="${C*Math.min(real,100)/100} ${C}" transform="rotate(-90 60 60)"/>
    <circle cx="60" cy="60" r="${rp}" fill="none" style="stroke:var(--track2)" stroke-width="5"/>
    <circle cx="60" cy="60" r="${rp}" fill="none" stroke="#9FB9D8" stroke-width="5" stroke-linecap="round" stroke-dasharray="${Cp*Math.min(prog,100)/100} ${Cp}" transform="rotate(-90 60 60)"/>
    <defs><linearGradient id="gAv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3A8DDE"/><stop offset="1" stop-color="#0B2545"/></linearGradient></defs>
    <text x="60" y="62" text-anchor="middle" font-size="22" font-weight="700" style="fill:var(--ink)" font-family="Inter,system-ui,sans-serif">${real}%</text>
    <text x="60" y="78" text-anchor="middle" font-size="9.5" style="fill:var(--muted)" font-family="Inter,system-ui,sans-serif">ejecutado</text>
  </svg>`;
}


/* ===================== CARGA DE PROGRAMA (Excel GEC o XML de Project) ===================== */
let progPend = null;
function isoDe(v){
  if(v==null || v==='') return '';
  if(typeof v==='number'){ const d=new Date(Math.round((v-25569)*86400000)); return d.toISOString().slice(0,10); }
  if(v instanceof Date){ return new Date(v.getTime()-v.getTimezoneOffset()*60000).toISOString().slice(0,10); }
  const t=String(v).trim(); let m=t.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})$/);
  if(m) return `${m[3]}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`;
  m=t.match(/^(\d{4})-(\d{2})-(\d{2})/); return m ? m[0].slice(0,10) : '';
}
function asegurarXLSX(){
  if(typeof XLSX!=='undefined') return Promise.resolve();
  return new Promise((res,rej)=>{ const sc=document.createElement('script'); sc.src='https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    sc.onload=()=>res(); sc.onerror=()=>rej(new Error('No se pudo cargar el lector de Excel. Revisa tu conexión e inténtalo de nuevo.')); document.head.appendChild(sc); });
}
function leerExcel(buf){
  if(typeof XLSX==='undefined') throw new Error('No se pudo cargar el lector de Excel. Abre la app con señal e inténtalo de nuevo.');
  const wb = XLSX.read(buf, {type:'array'});
  const ws = wb.Sheets['Programa'] || wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, {header:1, raw:true, defval:''});
  const h = rows.findIndex(r=>String(r[0]).trim().toLowerCase()==='clave');
  if(h<0) throw new Error('No encontré la columna "Clave". Usa la plantilla de programa de GEC.');
  let rev='', contratoArch='';
  rows.slice(0,h).forEach(r=>r.forEach((c,i)=>{
    const t=String(c).trim().toLowerCase();
    if(t==='revisión'||t==='revision') rev=String(r[i+1]??'').trim();
    if(/^n(°|o\.?|úm\.?)\s*de contrato/.test(t)) contratoArch=String(r[i+1]??'').trim();
  }));
  const filas=[];
  for(let i=h+1;i<rows.length;i++){
    const r=rows[i], clave=String(r[0]??'').trim(); if(!clave) continue;
    let av = r[7]===''||r[7]==null ? null : Number(r[7]); if(av!=null && av<=1) av=av*100;
    filas.push({clave, desc:String(r[1]??'').trim(), unidad:String(r[2]??'').trim(), cant:Number(r[3])||0, ini:isoDe(r[4]), fin:isoDe(r[5]), avIni:av, obs:String(r[8]??'').trim(), fila:i+1});
  }
  return {rev, contratoArch, filas, fuente:'Excel'};
}
function leerXML(txt){
  const doc = new DOMParser().parseFromString(txt, 'application/xml');
  if(doc.getElementsByTagName('parsererror').length) throw new Error('El archivo XML no es válido.');
  const tasks=[...doc.getElementsByTagName('Task')];
  if(!tasks.length) throw new Error('El XML no trae actividades. En Project usa Archivo › Guardar como › Formato XML.');
  const g=(t,n)=>{ const e=[...t.children].find(x=>x.localName===n); return e?e.textContent.trim():''; };
  const filas = tasks.filter(t=>g(t,'Summary')!=='1' && g(t,'UID')!=='0' && g(t,'Name'))
    .map(t=>({clave:g(t,'WBS')||g(t,'OutlineNumber')||('ID'+g(t,'ID')), desc:g(t,'Name'), unidad:'', cant:0, ini:g(t,'Start').slice(0,10), fin:g(t,'Finish').slice(0,10), avIni:g(t,'PercentComplete')!==''?Number(g(t,'PercentComplete')):null, obs:g(t,'Milestone')==='1'?'Hito':'', fila:g(t,'ID')}));
  const nombre=[...doc.documentElement.children].find(x=>x.localName==='Name')?.textContent||'';
  const m=nombre.match(/rev\.?\s*(\d+)/i);
  return {rev:m?m[1]:'', contratoArch:'', filas, fuente:'Project (XML)'};
}
function analizarPrograma(cid, datos, archivo){
  const c = contrato(cid), prev = conceptosDe(cid), revs = revisionesDe(cid);
  const errores=[], avisos=[];
  const vistos = new Set();
  if(!datos.filas.length) errores.push('El archivo no trae conceptos.');
  datos.filas.forEach(f=>{
    const donde = `fila ${f.fila}`;
    if(/^ejemplo/i.test(f.desc)) errores.push(`${f.clave} (${donde}): es la fila de ejemplo de la plantilla; bórrala.`);
    if(!f.desc) errores.push(`${f.clave} (${donde}): falta el concepto.`);
    if(!f.ini || !f.fin) errores.push(`${f.clave} (${donde}): falta fecha de inicio o de fin.`);
    else if(f.fin < f.ini) errores.push(`${f.clave} (${donde}): la fecha de fin es anterior a la de inicio.`);
    if(vistos.has(f.clave)) errores.push(`La clave ${f.clave} está repetida.`); vistos.add(f.clave);
  });
  if(datos.contratoArch && datos.contratoArch!==c.numero) avisos.push(`El archivo dice contrato ${datos.contratoArch}, pero tienes seleccionado ${c.numero}.`);
  if(datos.fuente.startsWith('Project') && datos.filas.some(f=>!f.unidad)) avisos.push('Project no trae unidad ni cantidad: se conservan las del programa anterior cuando la clave coincide.');
  const conceptos = errores.length ? [] : datos.filas.map(f=>{
    const old = prev.find(k=>k.clave===f.clave);
    return {id: old?old.id:`${cid}:${f.clave}`, contratoId:cid, clave:f.clave, desc:f.desc, unidad:f.unidad||old?.unidad||'—', cant:f.cant||old?.cant||0,
      ini:f.ini, fin:f.fin, dur:Math.round((toD(f.fin)-toD(f.ini))/DIA)+1, base: old ? old.base : Math.max(0, Math.min(100, f.avIni||0)), obs:f.obs};
  });
  const nuevos = conceptos.filter(k=>!prev.some(p=>p.clave===k.clave));
  const cambian = conceptos.filter(k=>{ const p=prev.find(x=>x.clave===k.clave); return p && (p.ini!==k.ini || p.fin!==k.fin); });
  const retirados = prev.filter(p=>!conceptos.some(k=>k.clave===p.clave));
  if(retirados.length) avisos.push(`${retirados.length} concepto(s) del programa actual no vienen en el nuevo (${retirados.map(k=>k.clave).join(', ')}). Su avance capturado se conserva en el historial.`);
  const ultimaRev = revs.length ? Number(revs[revs.length-1].rev) : 0;
  let rev = datos.rev!=='' && !isNaN(Number(datos.rev)) ? Number(datos.rev) : ultimaRev+1;
  if(rev<=ultimaRev) avisos.push(`El archivo dice Rev. ${datos.rev}, pero ya existe la Rev. ${ultimaRev}. Se cargará como Rev. ${ultimaRev+1}.`), rev = ultimaRev+1;
  return {cid, archivo, fuente:datos.fuente, rev, conceptos, nuevos, cambian, retirados, errores, avisos};
}
function modalPrograma(){
  const p = progPend; if(!p) return;
  const c = contrato(p.cid);
  const rango = p.conceptos.length ? `${fmtFecha(p.conceptos.reduce((m,k)=>k.ini<m?k.ini:m,p.conceptos[0].ini))} al ${fmtFecha(p.conceptos.reduce((m,k)=>k.fin>m?k.fin:m,p.conceptos[0].fin))}` : '—';
  $('#modalRoot').innerHTML = `<div class="modal" data-action="modalBg"><div style="max-height:88vh;overflow:auto">
    <h3>Cargar programa · ${esc(c.numero)}</h3>
    <div class="muted" style="margin-bottom:10px">${esc(p.archivo)} · ${esc(p.fuente)}</div>
    ${p.errores.length ? `<div class="proto bad"><b>No se puede cargar. Corrige el archivo:</b><br>${p.errores.slice(0,12).map(esc).join('<br>')}${p.errores.length>12?`<br>… y ${p.errores.length-12} más`:''}</div>`
      : `<div class="sum" style="margin-bottom:10px">
          <div><b>${p.conceptos.length}</b><span>Conceptos</span></div>
          <div><b>Rev. ${p.rev}</b><span>Se cargará como</span></div>
          <div><b>${p.nuevos.length}</b><span>Nuevos</span></div>
          <div><b>${p.cambian.length}</b><span>Con fechas nuevas</span></div>
        </div>
        <div class="kv"><span>Periodo</span><b>${rango}</b></div>`}
    ${p.avisos.length ? `<div class="proto" style="margin-top:10px">${p.avisos.map(esc).join('<br>')}</div>` : ''}
    ${!p.errores.length ? `<div class="muted" style="margin:10px 0">El avance ya capturado se conserva en los conceptos con la misma clave. El programa anterior queda en el historial de revisiones.</div>` : ''}
    <div class="row" style="margin-top:10px"><button class="btn ghost" data-action="modalNo">Cancelar</button>${p.errores.length?'':`<button class="btn" data-action="confirmarPrograma">Cargar Rev. ${p.rev}</button>`}</div>
  </div></div>`;
}
async function cargarArchivoPrograma(file){
  try{
    const esXML = /\.xml$/i.test(file.name);
    if(/\.mpp$/i.test(file.name)) throw new Error('El archivo .mpp no se puede leer directo. En Project usa Archivo › Guardar como › Formato XML (*.xml).');
    if(!esXML && !/\.(xlsx|xls|xlsm)$/i.test(file.name)) throw new Error('Ese tipo de archivo no se puede cargar. Usa la plantilla de Excel de GEC (.xlsx) o un XML de Project (.xml).');
    if(!esXML) await asegurarXLSX();
    const datos = esXML ? leerXML(await file.text()) : leerExcel(await file.arrayBuffer());
    progPend = analizarPrograma(S.contratoId, datos, file.name);
    modalPrograma();
  }catch(e){
    $('#modalRoot').innerHTML = `<div class="modal" data-action="modalBg"><div><h3>No se pudo cargar</h3>
      <div class="muted" style="margin-bottom:14px">${esc(e.message || 'No se pudo leer el archivo.')}<br><br>Archivo: ${esc(file.name)}</div>
      <button class="btn" data-action="modalNo">Entendido</button></div></div>`;
  }
}

/* ===================== CÁLCULOS ===================== */
// Avance acumulado por concepto = avance base del programa + avances diarios de jornadas cerradas
function avanceConcepto(k){
  let a = k.base;
  S.jornadas.filter(j=>j.estado!=='borrador').forEach(j=>{ const v = j.avances?.[k.id]?.hoy; if(v) a += Number(v)||0; });
  return Math.min(100, Math.round(a*10)/10);
}
// Avance del contrato ponderado por la duración de cada concepto
function avanceContrato(cid){
  const ks = conceptosDe(cid); const tot = ks.reduce((s,k)=>s+k.dur,0);
  if(!tot) return 0;
  return Math.round(ks.reduce((s,k)=>s+k.dur*avanceConcepto(k),0)/tot*10)/10;
}
function totalPersonal(j){ return (j.inicio?.personal||[]).reduce((s,p)=>s+(Number(p.cantidad)||0),0); }
function horasJornada(j){
  const a=j.inicio?.horaInicio, b=j.cierre?.horaFin || (j.estado==='borrador'?ahora():''); if(!a||!b) return 0;
  const [h1,m1]=a.split(':').map(Number), [h2,m2]=b.split(':').map(Number);
  const h=((h2*60+m2)-(h1*60+m1))/60; return h>0?Math.round(h*10)/10:0;
}
function acuerdosAbiertos(cid){
  const out=[];
  S.jornadas.filter(j=>j.contratoId===cid && j.estado!=='borrador').forEach(j=>(j.acuerdos||[]).forEach(a=>{ if(!a.cumplido) out.push({...a, jornadaId:j.id, fecha:j.fecha}); }));
  return out;
}
function frentesUsados(){ return [...new Set([S.frente, ...S.jornadas.map(j=>j.frente), ...S.formatos.map(f=>f.frente)].filter(Boolean))]; }
const pendientes = () => [...S.jornadas, ...S.formatos].filter(j=>j.estado==='pendiente'||j.estado==='enviando');

/* ===================== SINCRONIZACIÓN (simulada) ===================== */
let syncing = false;
async function sync(manual){
  if(syncing) return;
  const p = [...S.jornadas, ...S.formatos].filter(j=>j.estado==='pendiente');
  if(!p.length){ if(manual) toast('No hay nada pendiente de enviar.'); return; }
  if(!online()){ if(manual) toast('Sin señal. Se enviará solo cuando regrese la conexión.'); return; }
  syncing = true;
  p.forEach(j=>j.estado='enviando'); render();
  for(const j of p){
    await new Promise(r=>setTimeout(r,900));
    if(!online()){ j.estado='pendiente'; continue; }
    if(j.tipo){ j.estado='creado'; j.creadoEn=new Date().toISOString(); } else { j.estado='enviada'; j.enviadaEn=new Date().toISOString(); }
    persist(); render();
  }
  syncing = false; persist(); render();
  const ok = p.filter(j=>j.estado==='enviada'||j.estado==='creado').length;
  if(ok) toast(`${ok} registro(s) enviado(s) a SharePoint.`);
}

/* ===================== VISTAS ===================== */
function header(){
  const on = online();
  $('#netChip').classList.toggle('off', !on);
  $('#netTxt').textContent = on ? 'En línea' : 'Sin señal';
  $('#netIc').innerHTML = ic(on?'wifi':'wifiOff');
  $('#meBtn').innerHTML = avatar('sm');
  const n = pendientes().length;
  $('#pendChip').innerHTML = n ? `<span class="chip pend">${ic('cloudUp')}${n}</span>` : '';
}

function selectContrato(){
  return `<div class="fi">${ic('building')}<select data-action="pickContrato">${SEED.proyectos.map(p=>`<optgroup label="${esc(p.planta)} · ${esc(p.nombre)}">${SEED.contratos.filter(c=>c.proyectoId===p.id).map(c=>`<option value="${c.id}" ${c.id===S.contratoId?'selected':''}>${esc(c.numero)} — ${esc(c.nombre)}</option>`).join('')}</optgroup>`).join('')}</select></div>`;
}

function climaHomeHTML(){
  const c = S.climaHoy;
  if(climaHomeBusy) return `<div class="wxchip">${ic('refresh','spin')}<span>Consultando clima…</span></div>`;
  if(!c) return `<button class="wxchip" data-action="climaHome">${ic('cloudSun')}<span>Ver clima de mi ubicación</span></button>`;
  const w = wx(c.clima);
  return `<button class="wxchip" data-action="climaHome" title="Tocar para actualizar"><span class="wxic" style="color:${w.col}">${ic(w.n)}</span><b>${esc(c.temp)}°</b><span>${esc(c.clima)}<small>a las ${esc(c.hora)}</small></span></button>`;
}

function vHome(){
  const c = contrato(S.contratoId), p = proyecto(c.proyectoId);
  const av = avanceContrato(c.id), prog = programadoContrato(c.id), dif = Math.round((av-prog)*10)/10;
  const borr = S.jornadas.find(j=>j.contratoId===c.id && j.estado==='borrador');
  const acs = acuerdosAbiertos(c.id);
  const pend = pendientes();
  const ult = S.jornadas.filter(j=>j.contratoId===c.id && j.estado!=='borrador').slice(-1)[0];
  const ks = conceptosDe(c.id);
  const nAtr = ks.filter(k=>estadoProg(k).key==='atr').length;
  const nom = nombreUsuario().split(' ')[0];
  const tile = (v, icono, txt, sub, tono) => `<button class="tile" data-action="go" data-v="${v}"><span class="hi ${tono}">${ic(icono)}</span><b>${txt}</b><small>${sub}</small></button>`;
  return `
  ${Auth.signedIn()?'':`<div class="signin">${ic('lock','xs')}<span>Sin sesión de Microsoft</span><button class="btn ms xs" data-action="login">${MS_LOGO}Iniciar sesión</button></div>`}
  <section class="hero ${portadaURL()?'img':''}" ${portadaURL()?`style="background-image:linear-gradient(180deg,rgba(11,37,69,.55) 0%,rgba(11,37,69,.25) 45%,rgba(11,37,69,.75) 100%),url('${portadaURL()}')"`:''}>
    <div class="hero-top">
      <div class="hola-wrap">${S.tema.saludo?`<button data-action="go" data-v="perfil" class="hero-av" aria-label="Mi perfil">${avatar()}</button>`:''}<div><div class="hola">${saludo()}${nom?`, ${esc(nom)}`:''}</div><div class="hoy">${ic('calendar')}<span>${esc(fechaLarga())}</span></div></div></div>
      <div class="clk">${ic('clock')}<span id="clk">${ahora()}</span></div>
    </div>
    ${climaHomeHTML()}
  </section>
  ${borr
    ? `<button class="cta" data-action="resume" data-id="${borr.id}"><span class="cta-ic">${ic('pen')}</span><span><b>Continuar jornada en curso</b><small>Paso ${(borr.paso||0)+1} de ${STEPS.length} · ${esc(STEPS[borr.paso||0])}</small></span>${ic('chevR')}</button>`
    : `<button class="cta" data-action="newJornada"><span class="cta-ic">${ic('play')}</span><span><b>Iniciar jornada de hoy</b><small>Diario de obra · ${esc(c.numero)}</small></span>${ic('chevR')}</button>`}
  <div class="card">
    <h3>${hi('building')}Contrato</h3>
    ${selectContrato()}
    <div class="meta">
      <span>${ic('pin')}${esc(p.planta)} · ${esc(p.nombre)}</span>
      <span>${ic('hardhat')}${esc(c.contratista)}</span>
    </div>
  </div>
  <div class="card">
    <h3>${hi('chart')}Avance del contrato</h3>
    <div class="avrow">
      ${anillo(av, prog)}
      <div class="avside">
        <div class="leg"><i style="background:linear-gradient(135deg,#3A8DDE,#0B2545)"></i>Ejecutado <b>${av}%</b></div>
        <div class="leg"><i style="background:#9FB9D8"></i>Programado <b>${prog}%</b></div>
        <div class="sem ${dif<-5?'bad':dif<0?'warn':'ok'}">${ic(dif<0?'alert':'check')}${dif>=0?'Adelantado':'Atrasado'} ${Math.abs(dif)}%</div>
        ${ult?`<div class="muted" style="font-size:12px">${ic('calendar','xs')} Última jornada: ${fmtFecha(ult.fecha)}</div>`:''}
      </div>
    </div>
  </div>
  <div class="tiles">
    ${tile('programa','gantt','Programa', nAtr?`<span style="color:var(--bad)">${nAtr} retrasado(s)</span>`:`${ks.length} conceptos`, '')}
    ${tile('jornadas','book','Jornadas', `${S.jornadas.filter(j=>j.contratoId===c.id).length} registradas`, 'navy')}
    ${tile('planos','map','Planos', `${PLANOS.filter(x=>x.contratoId===c.id && !x.obsoleto).length} vigentes`, 'teal')}
    ${tile('formatos','clipboard','Formatos', 'Calidad, NC, cambios', 'amber')}
  </div>
  <div class="card">
    <h3>${hi('cloudUp', pend.length?'amber':'green')}Envío a SharePoint</h3>
    ${pend.length
      ? `<div class="muted" style="margin-bottom:10px">${pend.length} registro(s) guardado(s) en el teléfono, pendiente(s) de enviar.</div><button class="btn sec" data-action="syncNow">${ic('upload')}Enviar ahora</button>`
      : `<div class="okline">${ic('check')}Todo enviado. No hay registros pendientes.</div>`}
  </div>
  <div class="card">
    <h3>${hi('chat', acs.length?'amber':'')}Acuerdos de campo sin cumplir ${acs.length?`<span class="badge b-pend">${acs.length}</span>`:''}</h3>
    ${acs.length ? `<div class="list">${acs.map(a=>`<div><div style="font-weight:600">${esc(a.desc)}</div><div class="row" style="margin-top:6px"><div class="muted">${ic('user','xs')} ${esc(a.resp||'Sin responsable')} · ${ic('calendar','xs')} ${fmtFecha(a.fecha)||'—'}</div><button class="btn sm sec" style="flex:0" data-action="cumplir" data-j="${a.jornadaId}" data-a="${a.id}">${ic('check')}Cumplido</button></div></div>`).join('')}</div>` : `<div class="okline">${ic('check')}Sin acuerdos pendientes en este contrato.</div>`}
  </div>
  <div class="proto">${ic('info','xs')} Versión 1.0 de prueba: la información todavía se guarda solo en este teléfono y el envío a SharePoint está simulado. Toca el indicador <b>En línea</b> para simular que no hay señal.</div>`;
}

function estadoConcepto(a){ return a>=100?'Terminado':a>0?'En ejecución':'Pendiente'; }
let progVista = 'lista', progFiltro = '';
const DIA = 86400000;
const toD = f => new Date(f+'T12:00:00');
function programadoAl(k, f){ // % programado a la fecha f (distribución lineal)
  const t = (toD(f)-toD(k.ini))/DIA + 1, tot = (toD(k.fin)-toD(k.ini))/DIA + 1;
  return Math.max(0, Math.min(100, Math.round(t/tot*1000)/10));
}
function estadoProg(k){
  const r = avanceConcepto(k), p = programadoAl(k, hoy());
  if(r>=100) return {t:'Terminado', c:'b-env', key:'term'};
  if(hoy()>k.fin) return {t:'Vencido', c:'b-bad', key:'atr'};
  if(r < p - 5) return {t:'Retrasado', c:'b-bad', key:'atr'};
  if(hoy()<k.ini && r===0) return {t:'Por iniciar', c:'b-borr', key:'ini'};
  return {t:'En tiempo', c:'b-sending', key:'eje'};
}
function programadoContrato(cid){
  const ks = conceptosDe(cid), tot = ks.reduce((s,k)=>s+k.dur,0);
  return tot ? Math.round(ks.reduce((s,k)=>s+k.dur*programadoAl(k,hoy()),0)/tot*10)/10 : 0;
}
function semanaActual(){ const d=toD(hoy()); const w=(d.getDay()+6)%7; const lu=new Date(d-w*DIA), do_=new Date(+lu+6*DIA); const f=x=>{x=new Date(x); x.setMinutes(x.getMinutes()-x.getTimezoneOffset()); return x.toISOString().slice(0,10);}; return [f(lu), f(do_)]; }
function vPrograma(){
  const c = contrato(S.contratoId);
  const ks = conceptosDe(c.id);
  const real = avanceContrato(c.id), prog = programadoContrato(c.id), dif = Math.round((real-prog)*10)/10;
  const cuenta = key => ks.filter(k=>estadoProg(k).key===key).length;
  const filtrados = ks.filter(k=>!progFiltro || estadoProg(k).key===progFiltro);
  let cuerpo = '';
  if(progVista==='gantt'){
    const ini = ks.reduce((m,k)=>k.ini<m?k.ini:m, ks[0].ini), fin = ks.reduce((m,k)=>k.fin>m?k.fin:m, ks[0].fin);
    const span = (toD(fin)-toD(ini))/DIA + 1;
    const pos = f => ((toD(f)-toD(ini))/DIA)/span*100;
    const hoyP = Math.max(0, Math.min(100, pos(hoy())));
    const paso = Math.max(7, Math.ceil(span/5/7)*7); const ticks=[]; for(let d=toD(ini); d<=toD(fin); d=new Date(+d+paso*DIA)){ const f=new Date(d); f.setMinutes(f.getMinutes()-f.getTimezoneOffset()); const iso=f.toISOString().slice(0,10); ticks.push(`<span style="position:absolute;left:${pos(iso)}%;font-size:10px;color:var(--muted)">${fmtFecha(iso).replace(/ \d{4}$/,'')}</span>`); }
    cuerpo = `<div class="card"><h3>${hi('gantt')}Diagrama de barras</h3>
      <div class="muted" style="margin-bottom:8px;font-size:12px"><span style="display:inline-block;width:10px;height:10px;background:#C9DAEE;border-radius:2px"></span> programado &nbsp; <span style="display:inline-block;width:10px;height:10px;background:var(--blue);border-radius:2px"></span> ejecutado &nbsp; <span style="color:var(--bad)">│</span> hoy</div>
      <div style="position:relative;height:16px;margin-bottom:4px">${ticks.join('')}</div>
      ${filtrados.map(k=>{ const r=avanceConcepto(k), e=estadoProg(k); const l=pos(k.ini), w=pos(k.fin)+100/span-l; return `<div style="margin:10px 0">
        <div style="font-size:12px;display:flex;justify-content:space-between"><span><b class="clave">${esc(k.clave)}</b> ${esc(k.desc)}</span><span class="muted">${r}%</span></div>
        <div style="position:relative;height:16px;background:var(--track2);border-radius:4px;margin-top:3px">
          <div style="position:absolute;left:${l}%;width:${w}%;top:2px;bottom:2px;background:#C9DAEE;border-radius:3px;overflow:hidden"><div style="height:100%;width:${r}%;background:${e.key==='atr'?'var(--bad)':'var(--blue)'}"></div></div>
          <div style="position:absolute;left:${hoyP}%;top:-2px;bottom:-2px;width:2px;background:var(--bad)"></div>
        </div></div>`; }).join('')}
    </div>`;
  } else if(progVista==='semana'){
    const [lu, dom] = semanaActual();
    const sem = filtrados.filter(k=>k.ini<=dom && k.fin>=lu);
    cuerpo = `<div class="card"><h3>${hi('calendar')}Esta semana · ${fmtFecha(lu)} al ${fmtFecha(dom)}</h3>
      ${sem.length?sem.map(k=>{ const r=avanceConcepto(k), meta=programadoAl(k,dom), e=estadoProg(k); return `<div class="concept">
        <div class="row"><span class="clave">${esc(k.clave)}</span><span style="flex:0;white-space:nowrap" class="badge ${e.c}">${e.t}</span></div>
        <div style="font-weight:600;margin:4px 0 6px">${esc(k.desc)}</div>
        <div class="kv"><span>${ic('flag','xs')} Meta al domingo (programado)</span><b>${meta}%</b></div>
        <div class="kv"><span>${ic('chart','xs')} Ejecutado a hoy</span><b>${r}%</b></div>
        <div class="kv"><span>Falta para la meta</span><b style="color:${meta-r>0?'var(--bad)':'var(--ok)'}">${Math.max(0,Math.round((meta-r)*10)/10)}%</b></div>
      </div>`;}).join(''):'<div class="empty">No hay conceptos programados esta semana.</div>'}
    </div>`;
  } else {
    cuerpo = filtrados.map(k=>{ const a=avanceConcepto(k), p=programadoAl(k,hoy()), e=estadoProg(k); return `<div class="concept">
      <div class="row"><span class="clave">${esc(k.clave)}</span><span style="flex:0;white-space:nowrap" class="badge ${e.c}">${e.t}</span></div>
      <div style="font-weight:600;margin:4px 0 2px">${esc(k.desc)}</div>
      <div class="muted">${ic('layers','xs')} ${k.cant.toLocaleString('es-MX')} ${esc(k.unidad)} &nbsp;${ic('calendar','xs')} ${fmtFecha(k.ini)} al ${fmtFecha(k.fin)} (${k.dur} días)</div>
      <div style="margin-top:8px;font-size:12px" class="muted">Programado a hoy ${p}%</div>
      <div class="bar" style="height:6px"><i style="width:${p}%;background:#9FB9D8"></i></div>
      <div style="margin-top:6px;font-size:12px" class="muted">Ejecutado ${a}%</div>
      <div class="bar"><i style="width:${a}%;${e.key==='atr'?'background:var(--bad)':''}"></i></div>
    </div>`;}).join('') || '<div class="card"><div class="empty">Ningún concepto con ese estado.</div></div>';
  }
  const chip = (key,txt,n) => `<button class="btn sm ${progFiltro===key?'':'ghost'}" data-action="progFiltro" data-f="${key}">${txt}${n!=null?` (${n})`:''}</button>`;
  const seg = (v,txt) => `<button class="btn sm ${progVista===v?'':'ghost'}" style="flex:1" data-action="progVista" data-v="${v}">${txt}</button>`;
  return `<div class="card"><h3>${hi('gantt')}Programa de obra</h3>${selectContrato()}
    <div class="sum" style="margin-top:12px">
      <div>${ic('calendar','sumic')}<b>${prog}%</b><span>Programado a hoy</span></div>
      <div>${ic('chart','sumic')}<b>${real}%</b><span>Ejecutado</span></div>
    </div>
    <div class="dif ${dif<-5?'bad':dif<0?'warn':'ok'}" style="margin-top:8px;padding:10px;border-radius:10px;font-size:13.5px;display:flex;gap:8px;align-items:center">${ic(dif<0?'alert':'check')}<span><b>${dif>=0?'Adelantado':'Atrasado'} ${Math.abs(dif)}%</b> respecto al programa (ponderado por duración).</span></div>
    <div class="row" style="margin-top:10px">
      <button class="btn ghost sm" data-action="abrirPrograma">${ic('file')}Archivo vigente</button>
      <button class="btn sec sm" data-action="pickPrograma">${ic('upload')}Cargar programa</button>
    </div>
    <div class="muted" style="margin-top:8px;font-size:12.5px">Vigente: <b>${(()=>{const r=revisionesDe(c.id); return r.length?`Rev. ${r[r.length-1].rev} · ${esc(r[r.length-1].archivo)} · cargado ${fmtFecha(isoLocal(r[r.length-1].cargado))}`:'Rev. 0 · programa inicial de ejemplo';})()}</b>
    ${revisionesDe(c.id).length?`<br>Revisiones anteriores: Rev. 0 (inicial)${revisionesDe(c.id).slice(0,-1).map(r=>`, Rev. ${r.rev}`).join('')}`:''}<br>Acepta la plantilla de Excel de GEC o un XML de Project.</div>
  </div>
  <div style="display:flex;gap:6px;margin-bottom:8px">${seg('lista',ic('list')+'Lista')}${seg('gantt',ic('gantt')+'Barras')}${seg('semana',ic('calendar')+'Semana')}</div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">${chip('','Todos')}${chip('atr','<i class="sd bad"></i>Retrasados',cuenta('atr'))}${chip('eje','<i class="sd blue"></i>En tiempo',cuenta('eje'))}${chip('ini','<i class="sd gray"></i>Por iniciar',cuenta('ini'))}${chip('term','<i class="sd ok"></i>Terminados',cuenta('term'))}</div>
  ${cuerpo}`;
}

function vPlanos(){
  const c = contrato(S.contratoId), p = proyecto(c.proyectoId);
  const todos = PLANOS.filter(x=>x.contratoId===c.id);
  const discs = [...new Set(todos.map(x=>x.disc))];
  const q = planoFiltro.q.trim().toLowerCase();
  const xs = todos.filter(x=>(planoFiltro.obsoletos||!x.obsoleto) && (!planoFiltro.disc||x.disc===planoFiltro.disc) && (!q || (x.clave+' '+x.titulo).toLowerCase().includes(q)));
  const nOff = todos.filter(x=>S.planosOffline[x.id]).length;
  return `<div class="card"><h3>${hi('map','teal')}Planos del contrato</h3>${selectContrato()}
    <div class="muted" style="margin-top:8px;font-size:12px">${ic('layers','xs')} SharePoint › GEC FIELD › ${esc(p.planta)} › ${esc(p.nombre)} › ${esc(c.numero)} › Planos</div>
    <div class="fi" style="margin-top:10px">${ic('search')}<input type="search" id="planoQ" placeholder="Buscar por clave o nombre…" value="${esc(planoFiltro.q)}"></div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px">
      <button class="btn sm ${planoFiltro.disc?'ghost':''}" data-action="planoDisc" data-d="">Todos</button>
      ${discs.map(d=>`<button class="btn sm ${planoFiltro.disc===d?'':'ghost'}" data-action="planoDisc" data-d="${esc(d)}">${esc(d)}</button>`).join('')}
    </div>
    <label class="check" style="text-transform:none;letter-spacing:0;font-size:14px;color:var(--text);font-weight:500;margin-top:6px"><input type="checkbox" data-action="planoObs" ${planoFiltro.obsoletos?'checked':''}> Mostrar revisiones anteriores</label>
    ${nOff?`<div class="muted">${ic('download','xs')} ${nOff} plano(s) guardado(s) para ver sin señal.</div>`:''}
  </div>
  ${xs.length?xs.map(x=>`<div class="concept lrow" data-action="verPlano" data-id="${x.id}" style="cursor:pointer;${x.obsoleto?'opacity:.6':''}">
    <span class="thumb">${ic('map')}<small>${esc(x.rev)}</small></span>
    <div style="flex:1;min-width:0">
    <div class="row"><span class="clave">${esc(x.clave)} · Rev. ${esc(x.rev)}</span><span style="flex:0;white-space:nowrap">${x.obsoleto?'<span class="badge b-borr">Sustituido</span>':'<span class="badge b-env">Vigente</span>'}</span></div>
    <div style="font-weight:600;margin:4px 0 2px">${esc(x.titulo)}</div>
    <div class="muted">${esc(x.disc)} · ${fmtFecha(x.fecha)} · PDF ${x.mb} MB ${S.planosOffline[x.id]?` · <b style="color:var(--ok)">${ic('download','xs')} sin señal</b>`:''}</div>
    </div>${ic('chevR','chev')}
  </div>`).join(''):'<div class="card"><div class="empty">No hay planos que coincidan.</div></div>'}`;
}
function planoSVG(x){
  // dibujo ilustrativo solo para el prototipo
  const g=[]; for(let i=0;i<=6;i++){ g.push(`<line x1="${30+i*50}" y1="20" x2="${30+i*50}" y2="200" stroke="#B8C4D4" stroke-dasharray="4 4"/>`,`<text x="${30+i*50}" y="14" font-size="9" text-anchor="middle" fill="#5B6878">${i+1}</text>`); }
  for(let j=0;j<=3;j++){ g.push(`<line x1="20" y1="${30+j*55}" x2="340" y2="${30+j*55}" stroke="#B8C4D4" stroke-dasharray="4 4"/>`,`<text x="10" y="${33+j*55}" font-size="9" fill="#5B6878">${'ABCD'[j]}</text>`); }
  for(let i=0;i<=6;i++) for(let j=0;j<=3;j++) g.push(`<rect x="${24+i*50}" y="${24+j*55}" width="12" height="12" fill="#13315C"/>`);
  return `<svg viewBox="0 0 360 250" style="width:100%;background:#fff;border:1px solid var(--line);border-radius:10px">${g.join('')}
    <rect x="200" y="210" width="150" height="34" fill="none" stroke="#0B2545"/><text x="206" y="224" font-size="9" font-weight="700" fill="#0B2545">${esc(x.clave)} Rev. ${esc(x.rev)}</text><text x="206" y="237" font-size="8" fill="#5B6878">${esc(x.titulo)}</text></svg>`;
}
function modalPlano(id){
  const x = PLANOS.find(p=>p.id===id); if(!x) return;
  const off = !!S.planosOffline[x.id];
  const vig = x.obsoleto ? PLANOS.find(p=>p.contratoId===x.contratoId && p.clave===x.clave && !p.obsoleto) : null;
  $('#modalRoot').innerHTML = `<div class="modal" data-action="modalBg"><div>
    <h3>${esc(x.clave)} · ${esc(x.titulo)}</h3>
    <div class="muted" style="margin-bottom:10px">${esc(x.disc)} · Rev. ${esc(x.rev)} · ${fmtFecha(x.fecha)} · PDF ${x.mb} MB</div>
    ${vig?`<div class="proto">${ic('alert','xs')} Esta revisión fue sustituida por la Rev. ${esc(vig.rev)} del ${fmtFecha(vig.fecha)}. No la uses para ejecutar.</div>`:''}
    ${planoSVG(x)}
    <div class="muted" style="margin:8px 0 12px;font-size:12px">Vista ilustrativa del prototipo. En la versión final aquí se abre el PDF real con zoom.</div>
    <button class="btn" data-action="abrirPlano" data-id="${x.id}">${ic('map')}Abrir plano completo</button>
    <div style="height:8px"></div>
    <button class="btn ${off?'danger':'sec'}" data-action="offPlano" data-id="${x.id}">${off?ic('trash')+'Quitar de "sin señal"':ic('download')+'Guardar para ver sin señal'}</button>
    <div style="height:8px"></div>
    <button class="btn ghost" data-action="modalNo">Cerrar</button>
  </div></div>`;
}
function rutaSP(c, f){ const p=proyecto(c.proyectoId); return `GEC FIELD › ${p.planta} › ${p.nombre} › ${c.numero} › ${f.carpeta}`; }
function siguienteFolio(cid, tipo){
  const c = contrato(cid), f = FORMATOS.find(x=>x.id===tipo);
  const n = S.formatos.filter(x=>x.contratoId===cid && x.tipo===tipo).length + 1;
  return `${f.pref}-${c.numero}-${String(n).padStart(3,'0')}`;
}
function vFormatos(){
  const c = contrato(S.contratoId), p = proyecto(c.proyectoId);
  const gen = S.formatos.filter(x=>x.contratoId===c.id).slice().reverse();
  return `<div class="card"><h3>${hi('building')}Contrato y frente</h3>${selectContrato()}
    <label>Frente de trabajo</label><div class="fi">${ic('pin')}<input type="text" data-k="frente" data-global="1" value="${esc(S.frente)}" placeholder="Ej. Eje A-C / Zona de andenes" list="frentes2"></div>
    <datalist id="frentes2">${frentesUsados().map(f=>`<option value="${esc(f)}">`).join('')}</datalist>
    <div class="muted" style="margin-top:8px">${ic('user','xs')} Supervisor: <b>${esc(S.supervisor||'— (captúralo en tu primera jornada)')}</b></div>
  </div>
  <div class="card"><h3>${hi('plus')}Nuevo formato</h3>
    <div class="muted" style="margin-bottom:10px">Al tocar uno se crea una copia de la plantilla en la carpeta del contrato, ya llenada con proyecto, contrato, frente, supervisor, fecha, hora y folio, y se abre para completarla.</div>
    <div class="ftiles">${FORMATOS.map(f=>`<button class="ftile" data-action="askFormato" data-t="${f.id}"><span class="hi ${f.tono}">${ic(f.ico)}</span><b>${esc(f.nombre)}</b><small>${esc(f.plantilla)}</small></button>`).join('')}</div>
  </div>
  <div class="card"><h3>${hi('file')}Formatos generados</h3>
    ${gen.length?`<div class="list">${gen.map(x=>{const f=FORMATOS.find(y=>y.id===x.tipo); return `<div class="lrow"><span class="hi ${f.tono}">${ic(f.ico)}</span><div style="flex:1;min-width:0"><div class="row"><b>${esc(x.folio)}</b><span style="flex:0;white-space:nowrap">${x.estado==='creado'?'<span class="badge b-env">En SharePoint</span>':x.estado==='enviando'?'<span class="badge b-sending">Creando…</span>':'<span class="badge b-pend">Por crear</span>'}</span></div>
      <div class="muted">${esc(f.nombre)} · ${fmtFecha(x.fecha)} ${esc(x.hora)} · ${esc(x.frente)}</div>
      ${x.estado==='creado'?`<button class="btn sm sec" style="margin-top:6px" data-action="abrirFormato" data-id="${x.id}">${ic('file')}Abrir en Excel</button>`:''}</div></div>`;}).join('')}</div>`
      :'<div class="empty">Aún no has generado formatos en este contrato.</div>'}
  </div>`;
}
function modalFormato(tipo){
  const c = contrato(S.contratoId), p = proyecto(c.proyectoId), f = FORMATOS.find(x=>x.id===tipo);
  if(!S.supervisor.trim()){ toast('Primero indica tu nombre de supervisor (en tu primera jornada).'); return; }
  if(!S.frente.trim()){ toast('Indica el frente de trabajo.'); return; }
  const folio = siguienteFolio(c.id, tipo);
  const datos = [['Folio',folio],['Proyecto',p.nombre],['Cliente',p.cliente],['Planta',p.planta],['Contrato',`${c.numero} — ${c.nombre}`],['Contratista',c.contratista],['Frente',S.frente],['Supervisor',S.supervisor],['Fecha',fmtFecha(hoy())],['Hora',ahora()]];
  $('#modalRoot').innerHTML = `<div class="modal" data-action="modalBg"><div>
    <h3 class="mh">${hi(f.ico, f.tono)}${esc(f.nombre)}</h3>
    <div class="muted" style="margin-bottom:8px">Plantilla: ${esc(f.plantilla)}<br>Se guardará en: ${esc(rutaSP(c,f))}</div>
    <div style="max-height:40vh;overflow:auto;margin-bottom:12px">${datos.map(([k,v])=>`<div class="kv"><span>${k}</span><b style="text-align:right">${esc(v)}</b></div>`).join('')}</div>
    <div class="row"><button class="btn ghost" data-action="modalNo">Cancelar</button><button class="btn" data-action="genFormato" data-t="${tipo}">${ic('fileCheck')}Generar y abrir</button></div>
  </div></div>`;
}

function estadoBadge(e){
  return {borrador:'<span class="badge b-borr"><i class="sd gray"></i>En captura</span>',pendiente:'<span class="badge b-pend"><i class="sd warn"></i>Por enviar</span>',enviando:'<span class="badge b-sending"><i class="sd blue"></i>Enviando…</span>',enviada:'<span class="badge b-env"><i class="sd ok"></i>Enviada</span>'}[e]||'';
}
function vPerfil(){
  const u = Auth.signedIn() ? (Auth.user()||{}) : null;
  const t = S.tema;
  const sw = Object.entries(ACENTOS).map(([k,a])=>`<button class="swatch ${t.acento===k?'on':''}" data-action="setAcento" data-v="${k}" aria-label="${a.n}"><i style="background:linear-gradient(135deg,${a.b},${a.h1})">${t.acento===k?ic('check'):''}</i><small>${a.n}</small></button>`).join('');
  const por = PORTADAS.map(x=>{
    const src = x.id==='propia' ? t.portadaFoto : x.src;
    const bg = src ? `background-image:url('${src}')` : '';
    if(x.id==='propia' && !t.portadaFoto) return `<label class="pthumb add ${t.portada==='propia'?'on':''}">${ic('camera')}<small>Mi foto</small><input type="file" accept="image/*" data-action="addPortada" style="display:none"></label>`;
    return `<button class="pthumb ${t.portada===x.id?'on':''} ${x.id==='ninguna'?'none':''}" style="${bg}" data-action="setPortada" data-v="${x.id}">${t.portada===x.id?`<span class="pk">${ic('check')}</span>`:''}<small>${x.n}</small></button>`;
  }).join('');
  return `<button class="btn ghost sm" data-action="go" data-v="home">${ic('arrowL')}Inicio</button><div style="height:10px"></div>
  <section class="pcard">
    <div class="pcover" ${portadaURL()?`style="background-image:url('${portadaURL()}')"`:''}></div>
    <div class="pbody">
      <label class="pav">${avatar('xl')}<span class="pcam">${ic('camera')}</span><input type="file" accept="image/*" data-action="addFotoPerfil" style="display:none"></label>
      <div class="pname">${esc(nombreUsuario()||'Supervisor GEC')}</div>
      ${u?`<div class="muted">${esc(u.jobTitle||'Supervisión GEC')}</div><div class="pmail">${MS_LOGO}${esc(u.mail||u.userPrincipalName||'')}</div>`:`<div class="muted">Sin sesión de Microsoft</div>`}
      <div class="prow">
        ${u?`<button class="btn sec xs" data-action="fotoMS">${MS_LOGO}Usar foto de Microsoft</button>`:''}
        ${S.perfil.foto?`<button class="btn ghost xs" data-action="quitarFotoPerfil">${ic('trash')}Quitar foto</button>`:''}
      </div>
    </div>
  </section>
  <div class="card"><h3>${hi('user')}Datos de supervisor</h3>
    <label style="margin-top:0">Nombre en jornadas y formatos</label><div class="fi">${ic('user')}<input type="text" data-k="supervisor" data-global="1" value="${esc(S.supervisor)}" placeholder="Nombre del supervisor"></div>
    <label>Frente habitual</label><div class="fi">${ic('pin')}<input type="text" data-k="frente" data-global="1" value="${esc(S.frente)}" placeholder="Ej. Eje A-C / Zona de andenes"></div>
  </div>
  <div class="card"><h3>${hi('sun','amber')}Personalización</h3>
    <label style="margin-top:0">Apariencia</label>
    <div class="seg3">${[['claro','sun','Claro'],['oscuro','moon','Oscuro'],['auto','phone','Como el teléfono']].map(([v,n,tx])=>`<button class="${(t.modo||'auto')===v?'on':''}" data-action="setModo" data-v="${v}">${ic(n)}${tx}</button>`).join('')}</div>
    <label>Color principal</label><div class="swatches">${sw}</div>
    <label>Imagen de portada</label><div class="pgrid">${por}</div>
    ${t.portadaFoto?`<button class="btn ghost xs" style="margin-top:8px" data-action="quitarPortada">${ic('trash')}Quitar mi foto de portada</button>`:''}
    <label>Tamaño de letra</label>
    <div class="seg2"><button class="${t.letra!=='grande'?'on':''}" data-action="setLetra" data-v="normal"><span style="font-size:14px">Aa</span> Normal</button><button class="${t.letra==='grande'?'on':''}" data-action="setLetra" data-v="grande"><span style="font-size:19px">Aa</span> Grande</button></div>
    <label class="tcheck ${t.saludo?'on':''}" style="margin-top:12px"><input type="checkbox" data-action="toggleSaludo" ${t.saludo?'checked':''}><span class="hi">${ic('user')}</span><span class="tt">Mostrar mi foto en la portada</span><span class="tk">${ic('check')}</span></label>
  </div>
  <div class="card"><h3>${hi('layers')}Cuenta Microsoft</h3>
    ${u?`${spPrueba?`<div class="muted" style="margin-bottom:8px">${esc(spPrueba)}</div>`:''}
      <div class="row"><button class="btn sec sm" data-action="probarSP">${ic('layers')}Probar SharePoint</button><button class="btn ghost sm" data-action="logout">${ic('logout')}Cerrar sesión</button></div>`
    :`<div class="muted" style="margin-bottom:10px">Inicia sesión para enviar a SharePoint y usar tu foto de Microsoft 365.</div>
      <button class="btn ms sm" data-action="login">${MS_LOGO}Iniciar sesión con Microsoft</button>
      <div class="muted" style="margin-top:8px;font-size:11.5px">Dirección de esta app: ${esc(Auth.redirectUri())}</div>`}
  </div>
  <div class="muted" style="text-align:center;font-size:12px;margin:4px 0 10px">GEC FIELD · versión 1.3</div>`;
}

function vJornadas(){
  const js = S.jornadas.slice().reverse();
  if(!js.length) return `<div class="card"><div class="empty"><span class="bigic">${ic('book')}</span>Aún no hay jornadas registradas.<br>Inicia la primera desde la pestaña Inicio.</div></div>`;
  const ms=['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
  return `<div class="card"><h3>${hi('book','navy')}Jornadas registradas</h3><div class="list">${js.map(j=>{const c=contrato(j.contratoId); const [,m,d]=j.fecha.split('-'); const w=wx(j.inicio?.clima); return `<div class="lrow" data-action="openJornada" data-id="${j.id}" style="cursor:pointer">
    <span class="datebox"><b>${+d}</b><small>${ms[+m-1]}</small></span>
    <div style="flex:1;min-width:0"><div class="row"><b>${esc(c.numero)}</b><span style="flex:0;white-space:nowrap">${estadoBadge(j.estado)}</span></div>
    <div class="muted" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(c.nombre)}</div>
    <div class="minis">${j.inicio?.clima?`<span style="color:${w.col}">${ic(w.n,'xs')}</span>${j.inicio.temp!==''&&j.inicio.temp!=null?esc(j.inicio.temp)+'°':''}`:''}<span>${ic('users','xs')}${totalPersonal(j)}</span><span>${ic('camera','xs')}${(j.fotos||[]).length}</span>${(j.incidencias||[]).length?`<span style="color:var(--bad)">${ic('alert','xs')}${j.incidencias.length}</span>`:''}</div></div>
    ${ic('chevR','chev')}</div>`;}).join('')}</div></div>`;
}

function vDetalle(){
  const j = S.jornadas.find(x=>x.id===detailId); if(!j){ view='jornadas'; return vJornadas(); }
  const c = contrato(j.contratoId);
  const acts = conceptosDe(c.id).filter(k=>Number(j.avances?.[k.id]?.hoy)>0);
  return `<button class="btn ghost sm" data-action="go" data-v="jornadas">${ic('arrowL')}Jornadas</button><div style="height:10px"></div>
  <div class="card"><div class="row"><h3 style="margin:0">${hi('calendar','navy')}${fmtFecha(j.fecha)}</h3><span style="flex:0;white-space:nowrap">${estadoBadge(j.estado)}</span></div>
    <div class="muted" style="margin-top:4px">${esc(c.numero)} — ${esc(c.nombre)}</div></div>
  ${j.estado==='borrador'
    ? `<button class="btn" data-action="resume" data-id="${j.id}">${ic('pen')}Continuar captura</button><div style="height:10px"></div><button class="btn danger" data-action="askDelete" data-id="${j.id}">${ic('trash')}Eliminar borrador</button>`
    : `<div class="card"><h3>${hi('chart')}Resumen</h3>${resumenHTML(j)}</div>
       <div class="card"><h3>${hi('hardhat')}Actividades</h3>${acts.length?acts.map(k=>`<div class="kv"><span>${esc(k.clave)} ${esc(k.desc)}</span><b>+${j.avances[k.id].hoy}%</b></div>`).join(''):'<div class="muted">Sin avance registrado.</div>'}</div>
       ${(j.fotos||[]).length?`<div class="card"><h3>${hi('camera')}Evidencia fotográfica</h3><div class="photos">${j.fotos.map(f=>`<div class="ph"><img src="${f.data}" alt=""><div class="muted">${esc(f.pie||'Sin descripción')}</div></div>`).join('')}</div></div>`:''}
       <div class="card"><h3>${hi('book')}Nota de bitácora</h3><div class="nota">${esc(j.nota||'—')}</div></div>`}`;
}

function resumenHTML(j){
  const hh = Math.round(totalPersonal(j)*horasJornada(j)*10)/10;
  const w = wx(j.inicio?.clima);
  return `<div class="strip">
    <div>${ic('clock')}<span><small>Horario</small><b>${esc(j.inicio?.horaInicio||'—')} – ${esc(j.cierre?.horaFin||(j.estado==='borrador'?ahora():'—'))}</b></span></div>
    <div><span style="color:${w.col}">${ic(w.n)}</span><span><small>Clima</small><b>${esc(j.inicio?.clima||'—')}${j.inicio?.temp!==''&&j.inicio?.temp!=null?` · ${esc(j.inicio.temp)}°`:''}</b></span></div>
  </div>
  <div class="sum s3">
    <div>${ic('users','sumic')}<b>${totalPersonal(j)}</b><span>Personal</span></div>
    <div>${ic('hourglass','sumic')}<b>${hh}</b><span>Horas-hombre</span></div>
    <div>${ic('hardhat','sumic')}<b>${Object.values(j.avances||{}).filter(a=>Number(a.hoy)>0).length}</b><span>Conceptos</span></div>
    <div>${ic('camera','sumic')}<b>${(j.fotos||[]).length}</b><span>Fotos</span></div>
    <div class="${(j.incidencias||[]).length?'red':''}">${ic('alert','sumic')}<b>${(j.incidencias||[]).length}</b><span>Incidencias</span></div>
    <div>${ic('chat','sumic')}<b>${(j.acuerdos||[]).length}</b><span>Acuerdos</span></div>
  </div>`;
}

/* ---------- Asistente de captura (wizard) ---------- */
function inp(path, type='text', attrs=''){
  const v = getPath(J(), path) ?? '';
  return `<input type="${type}" data-k="${path}" value="${esc(v)}" ${attrs}>`;
}
function sel(path, opts, ph='Selecciona…'){
  const v = getPath(J(), path) ?? '';
  return `<select data-k="${path}"><option value="">${ph}</option>${opts.map(o=>`<option ${o===v?'selected':''}>${esc(o)}</option>`).join('')}</select>`;
}
function txt(path, ph=''){
  return `<textarea data-k="${path}" placeholder="${esc(ph)}">${esc(getPath(J(), path)??'')}</textarea>`;
}

function stepPrep(j){
  const c = contrato(j.contratoId);
  const items = [['epp','Personal con EPP completo','hardhat'],['permiso','Permisos de trabajo vigentes','fileCheck'],['platica','Plática de seguridad impartida','megaphone'],['area','Área de trabajo delimitada y señalizada','cone'],['vpm','Reunión VPM','users']];
  const hechos = items.filter(([k])=>j.prep?.[k]).length;
  return `<div class="card"><h3>${hi('clipboard')}Datos de la jornada</h3>
    <div class="meta" style="margin-top:0"><span>${ic('building')}${esc(c.numero)} — ${esc(c.nombre)}</span><span>${ic('hardhat')}${esc(c.contratista)}</span></div>
    <div class="strip" style="margin-top:12px">
      <div>${ic('calendar')}<span><small>Fecha</small><b>${fmtFecha(j.fecha)}</b></span><span class="tag">auto</span></div>
    </div>
    <label>Supervisor GEC</label><div class="fi">${ic('user')}<input type="text" data-k="supervisor" data-global="1" value="${esc(S.supervisor)}" placeholder="Nombre del supervisor"></div>
    <label>Frente de trabajo</label><div class="fi">${ic('pin')}${inp('frente','text','placeholder="Ej. Eje A-C / Zona de andenes" list="frentes"')}</div>
    <datalist id="frentes">${frentesUsados().map(f=>`<option value="${esc(f)}">`).join('')}</datalist>
  </div>
  <div class="card"><h3>${hi('shield','green')}Lista de verificación <span class="badge ${hechos===items.length?'b-env':'b-borr'}" style="margin-left:auto">${hechos}/${items.length}</span></h3>
    ${items.map(([k,t,n])=>`<label class="tcheck ${j.prep?.[k]?'on':''}"><input type="checkbox" data-k="prep.${k}" ${j.prep?.[k]?'checked':''}><span class="hi">${ic(n)}</span><span class="tt">${t}</span><span class="tk">${ic('check')}</span></label>`).join('')}
  </div>`;
}

function stepInicio(j){
  const ps = j.inicio?.personal || [];
  const i = j.inicio||{};
  const auto = i.climaFuente==='auto';
  const w = wx(i.clima);
  let climaHTML;
  if(auto){
    climaHTML = `<div class="wxbig" style="background:${w.bg}">
        <span class="wxbig-ic" style="color:${w.col}">${ic(w.n)}</span>
        <div><div class="wxbig-t">${esc(i.temp)}°<small>C</small></div><div class="wxbig-d">${esc(i.clima)}</div></div>
        <span class="tag" style="margin-left:auto;align-self:flex-start">auto</span>
      </div>
      <div class="muted" style="margin-top:6px;font-size:12px">${ic('pin','xs')} Registrado a las ${esc(i.climaHora||'')} según la ubicación del teléfono.</div>`;
  } else if(climaBusy){
    climaHTML = `<div class="wxbig" style="background:var(--bg)"><span class="wxbig-ic" style="color:var(--gray)">${ic('refresh','spin')}</span><div class="wxbig-d">Obteniendo clima de la ubicación…</div></div>`;
  } else {
    climaHTML = `<div class="proto" style="margin:0 0 10px">${ic('alert','xs')} No se pudo obtener el clima automáticamente (${esc(climaError||'sin señal o sin permiso de ubicación')}). Elígelo abajo o reintenta.</div>
      <label style="margin-top:0">Clima</label>
      <div class="wxgrid">${CLIMAS.map(cl=>{ const x=wx(cl); return `<button class="wxopt ${i.clima===cl?'on':''}" data-action="pickClima" data-c="${esc(cl)}"><span style="color:${x.col}">${ic(x.n)}</span>${esc(cl)}</button>`; }).join('')}</div>
      <label>Temperatura °C</label><div class="fi">${ic('thermo')}${inp('inicio.temp','number','inputmode="decimal" placeholder="Ej. 18"')}</div>
      <button class="btn sec sm" style="margin-top:10px" data-action="retryClima">${ic('refresh')}Reintentar automático</button>`;
  }
  return `<div class="card"><h3>${hi('sun','amber')}Condiciones iniciales</h3>
    <div class="strip" style="margin-bottom:12px">
      <div>${ic('clock')}<span><small>Hora de inicio</small><b>${esc(i.horaInicio||'—')} h</b></span><span class="tag">auto</span></div>
      <div>${ic('calendar')}<span><small>Fecha</small><b>${fmtFecha(j.fecha)}</b></span></div>
    </div>
    ${climaHTML}
  </div>
  <div class="card"><h3>${hi('users')}Fuerza de trabajo del contratista</h3>
    ${ps.map((p,i)=>`<div class="row" style="margin-bottom:8px"><div style="flex:2"><div class="fi">${ic('hardhat')}${sel(`inicio.personal.${i}.cat`, CATEGORIAS, 'Categoría…')}</div></div><div style="flex:1">${inp(`inicio.personal.${i}.cantidad`,'number','inputmode="numeric" placeholder="Núm."')}</div><button class="btn sm danger" style="flex:0;padding:10px" data-action="delPersonal" data-i="${i}" aria-label="Quitar">${ic('trash')}</button></div>`).join('')}
    <button class="btn sec sm" data-action="addPersonal">${ic('plus')}Agregar categoría</button>
    <div class="total">${ic('users')}<span>Total en sitio</span><b>${totalPersonal(j)}</b><span>personas</span></div>
  </div>`;
}

const enProg = (k,j) => (j.fecha>=k.ini && j.fecha<=k.fin) ? 1 : 0;
function stepActividades(j){
  const ks = conceptosDe(j.contratoId);
  const subs = j.sustituciones || [];
  return `<div class="muted" style="margin-bottom:10px">Registra el avance del día de cada concepto trabajado (en % del concepto).</div>
  ${ks.slice().sort((x,y)=>(enProg(y,j)-enProg(x,j))).map(k=>{ const a=avanceConcepto(k); const hoyV = j.avances?.[k.id]?.hoy; const act = Number(hoyV)>0; return `<div class="concept ${act?'act':''}">
    <div class="row"><span class="clave">${esc(k.clave)} ${enProg(k,j)?`<span class="badge b-sending" style="margin-left:4px">${ic('calendar','xs')} Hoy</span>`:''}</span><span class="muted" style="text-align:right">acumulado ${a}%</span></div>
    <div style="font-weight:600;margin:3px 0 8px">${esc(k.desc)} <span class="muted">(${k.cant.toLocaleString('es-MX')} ${esc(k.unidad)})</span></div>
    <div class="bar" style="margin-bottom:10px"><i style="width:${a}%"></i></div>
    <div class="row"><div style="flex:1"><input type="number" inputmode="decimal" min="0" max="${Math.max(0,100-a+(Number(hoyV)||0))}" step="0.5" placeholder="Avance hoy %" data-k="avances.${k.id}.hoy" value="${esc(hoyV??'')}"></div>
    <div style="flex:2"><input type="text" placeholder="Comentario (opcional)" data-k="avances.${k.id}.com" value="${esc(j.avances?.[k.id]?.com??'')}"></div></div>
  </div>`;}).join('')}
  <div class="card"><h3>${hi('swap','amber')}Sustitución de actividad (solo esta jornada)</h3>
    <div class="muted" style="margin-bottom:8px">Si un concepto programado no se pudo ejecutar hoy (interferencia, suministro, etc.), regístralo aquí. El concepto original conserva su avance y se ejecutará después.</div>
    ${subs.map((s,i)=>`<div class="item"><button class="x" data-action="delSub" data-i="${i}">✕</button>
      <label style="margin-top:0">Concepto que no se ejecutó</label>
      <select data-k="sustituciones.${i}.conceptoId"><option value="">Selecciona…</option>${ks.map(k=>`<option value="${k.id}" ${s.conceptoId===k.id?'selected':''}>${esc(k.clave)} ${esc(k.desc)}</option>`).join('')}</select>
      <label>Motivo</label>${sel(`sustituciones.${i}.motivo`, ['Interferencia con planta','Falta de suministro','Clima','Falta de frente de trabajo','Equipo descompuesto','Otro'])}
      <label>Actividad que se ejecutó en su lugar</label>${inp(`sustituciones.${i}.nueva`,'text','placeholder="Describe la actividad"')}
    </div>`).join('')}
    <button class="btn sec sm" data-action="addSub">${ic('plus')}Registrar sustitución</button>
  </div>`;
}

function stepFotos(j){
  const ks = conceptosDe(j.contratoId);
  const fs = j.fotos || [];
  return `<div class="card"><h3>${hi('camera')}Evidencia fotográfica ${fs.length?`<span class="badge b-sending" style="margin-left:auto">${fs.length}</span>`:''}</h3>
    <label class="drop"><span class="hi">${ic('camera')}</span><b>Tomar o elegir fotografías</b><small>Se reducen de tamaño para ahorrar datos al enviarlas</small><input type="file" accept="image/*" capture="environment" multiple data-action="addFotos" style="display:none"></label>
  </div>
  ${fs.length?`<div class="photos">${fs.map((f,i)=>`<div class="ph"><img src="${f.data}" alt=""><div>
     <input type="text" placeholder="Descripción" data-k="fotos.${i}.pie" value="${esc(f.pie||'')}">
     <select data-k="fotos.${i}.conceptoId"><option value="">Concepto…</option>${ks.map(k=>`<option value="${k.id}" ${f.conceptoId===k.id?'selected':''}>${esc(k.clave)} ${esc(k.desc)}</option>`).join('')}</select>
     <button class="btn danger sm" style="width:100%" data-action="delFoto" data-i="${i}">${ic('trash')}Quitar</button></div></div>`).join('')}</div>`
   :`<div class="empty"><span class="bigic">${ic('camera')}</span>Aún no hay fotografías en esta jornada.</div>`}`;
}

function stepIncidencias(j){
  const xs = j.incidencias || [];
  return `${xs.map((x,i)=>`<div class="item sev-${({Alta:'a',Media:'m',Baja:'b'})[x.sev]||'n'}"><button class="x" data-action="delInc" data-i="${i}" aria-label="Quitar">${ic('trash')}</button>
      <div class="ihead">${hi('alert','red')}<b>Incidencia ${i+1}</b></div>
      <label>Tipo</label>${sel(`incidencias.${i}.tipo`, TIPOS_INC)}
      <label>Severidad</label><div class="segsev">${['Baja','Media','Alta'].map(v=>`<button class="${x.sev===v?'on':''} s-${v[0].toLowerCase()}" data-action="pickSev" data-i="${i}" data-v="${v}"><i class="sd"></i>${v}</button>`).join('')}</div>
      <label>Descripción</label>${txt(`incidencias.${i}.desc`,'¿Qué pasó? ¿Dónde? ¿A quién afecta?')}
      <label class="check" style="text-transform:none;letter-spacing:0;font-size:14.5px;color:var(--text);font-weight:500;margin-top:6px"><input type="checkbox" data-k="incidencias.${i}.escalar" ${x.escalar?'checked':''}> Escalar a PMO (tema escalable)</label>
    </div>`).join('')}
  ${xs.length?'':`<div class="card"><div class="empty"><span class="bigic" style="color:var(--ok)">${ic('shield')}</span>Sin incidencias registradas. Si no hubo, continúa al siguiente paso.</div></div>`}
  <button class="btn sec" data-action="addInc">${ic('plus')}Registrar incidencia</button>`;
}

function stepAcuerdos(j){
  const xs = j.acuerdos || [];
  const prev = acuerdosAbiertos(j.contratoId).filter(a=>a.jornadaId!==j.id);
  return `${prev.length?`<div class="card"><h3>${hi('chat','amber')}Acuerdos anteriores sin cumplir</h3><div class="list">${prev.map(a=>`<div><div style="font-weight:600">${esc(a.desc)}</div><div class="row" style="margin-top:6px"><div class="muted">${esc(a.resp||'—')} · ${fmtFecha(a.fecha)||'—'}</div><button class="btn sm sec" style="flex:0" data-action="cumplir" data-j="${a.jornadaId}" data-a="${a.id}">${ic('check')}Cumplido</button></div></div>`).join('')}</div></div>`:''}
  ${xs.map((a,i)=>`<div class="item"><button class="x" data-action="delAc" data-i="${i}" aria-label="Quitar">${ic('trash')}</button>
      <div class="ihead">${hi('chat')}<b>Acuerdo ${i+1}</b></div>
      <label>Acuerdo</label>${txt(`acuerdos.${i}.desc`,'Ej. El contratista reforzará la cuadrilla de fierreros a partir del lunes')}
      <div class="row"><div><label>Responsable</label><div class="fi">${ic('user')}${inp(`acuerdos.${i}.resp`,'text','placeholder="Nombre / empresa"')}</div></div><div><label>Compromiso</label>${inp(`acuerdos.${i}.fecha`,'date')}</div></div>
    </div>`).join('')}
  ${xs.length?'':`<div class="card"><div class="empty"><span class="bigic">${ic('chat')}</span>Sin acuerdos nuevos en esta jornada.</div></div>`}
  <button class="btn sec" data-action="addAc">${ic('plus')}Registrar acuerdo de campo</button>`;
}

function generarNota(j){
  const c = contrato(j.contratoId), p = proyecto(c.proyectoId);
  const ks = conceptosDe(c.id);
  const L = [];
  L.push(`NOTA DE BITÁCORA — ${fmtFecha(j.fecha)}`);
  L.push(`Proyecto ${p.nombre} (${p.planta}). Contrato ${c.numero} ${c.nombre}. Contratista: ${c.contratista}. Frente: ${j.frente||'—'}.`);
  L.push('');
  const i = j.inicio||{};
  L.push(`Se inician actividades a las ${i.horaInicio||'—'} h, clima ${ (i.clima||'sin registro').toLowerCase()}${i.temp?` con ${i.temp} °C`:''}.`);
  const ps = (i.personal||[]).filter(x=>Number(x.cantidad)>0);
  if(ps.length) L.push(`Personal del contratista en sitio: ${totalPersonal(j)} (${ps.map(x=>`${x.cantidad} ${(x.cat||'sin categoría').toLowerCase()}`).join(', ')}).`);
  const acts = ks.filter(k=>Number(j.avances?.[k.id]?.hoy)>0);
  if(acts.length){ L.push(''); L.push('Actividades ejecutadas:'); acts.forEach(k=>{ const a=j.avances[k.id]; L.push(`- ${k.clave} ${k.desc}: avance del día ${a.hoy}%${a.com?` (${a.com})`:''}.`); }); }
  const subs = (j.sustituciones||[]).filter(s=>s.conceptoId);
  if(subs.length){ L.push(''); L.push('Sustituciones de la jornada:'); subs.forEach(s=>{ const k=ks.find(x=>x.id===s.conceptoId); L.push(`- No se ejecutó ${k?k.clave+' '+k.desc:''} por ${ (s.motivo||'motivo no indicado').toLowerCase()}; en su lugar se realizó: ${s.nueva||'—'}. El concepto se reprogramará.`); }); }
  const inc = (j.incidencias||[]).filter(x=>x.tipo||x.desc);
  if(inc.length){ L.push(''); L.push('Incidencias:'); inc.forEach(x=>L.push(`- [${x.tipo||'Sin tipo'} · severidad ${ (x.sev||'—').toLowerCase()}] ${x.desc||''}${x.escalar?' — Se escala a PMO.':''}`)); }
  const ac = (j.acuerdos||[]).filter(a=>a.desc);
  if(ac.length){ L.push(''); L.push('Acuerdos de campo:'); ac.forEach(a=>L.push(`- ${a.desc} Responsable: ${a.resp||'—'}. Compromiso: ${fmtFecha(a.fecha)||'—'}.`)); }
  if((j.fotos||[]).length){ L.push(''); L.push(`Se integran ${j.fotos.length} fotografía(s) como evidencia.`); }
  L.push(''); L.push(`Supervisor GEC: ${S.supervisor||'—'}`);
  return L.join('\n');
}
function stepNota(j){
  return `<div class="card"><h3>${hi('book')}Nota de bitácora</h3>
    <div class="muted" style="margin-bottom:10px">Genera un borrador con lo capturado y edítalo antes de cerrar.</div>
    <button class="btn sec" data-action="genNota">${ic('refresh')}${j.nota?'Volver a generar borrador':'Generar borrador'}</button>
    <label>Texto de la nota</label>
    <textarea data-k="nota" style="min-height:260px">${esc(j.nota||'')}</textarea>
  </div>`;
}

function stepCierre(j){
  return `<div class="card"><h3>${hi('flag','navy')}Cierre</h3>
    <div class="strip"><div>${ic('clock')}<span><small>Hora de término</small><b>${esc(ahora())} h</b></span><span class="tag">al cerrar</span></div></div>
    <label>Observaciones finales</label>${txt('cierre.obs','Comentarios generales de la jornada (opcional)')}
  </div>
  <div class="card"><h3>${hi('chart')}Resumen de la jornada</h3>${resumenHTML(j)}</div>
  <div class="muted" style="text-align:center;margin:6px 0">${ic('cloudUp','xs')} Al cerrar, la jornada queda guardada en el teléfono y se envía en cuanto haya señal.</div>`;
}

function vWizard(){
  const j = J(); if(!j){ view='home'; return vHome(); }
  const fns = [stepPrep, stepInicio, stepActividades, stepFotos, stepIncidencias, stepAcuerdos, stepNota, stepCierre];
  return `<div class="stepper">${STEPS.map((t,i)=>`<span class="${i<step?'done':i===step?'cur':''}" title="${esc(t)}">${ic(i<step?'check':STEP_IC[i])}</span>`).join('')}</div>
  <div class="stephead"><h2>${hi(STEP_IC[step],'navy')}${STEPS[step]}</h2><span class="muted">${step+1} / ${STEPS.length}</span></div>
  <div style="display:flex;gap:8px;margin-bottom:12px"><button class="btn ghost sm" data-action="wizPlanos">${ic('map')}Planos</button><button class="btn ghost sm" data-action="wizFormatos">${ic('clipboard')}Formatos</button></div>
  ${fns[step](j)}`;
}

/* ===================== RENDER ===================== */
function render(){
  aplicarTema();
  header();
  const app = $('#app'), foot = $('#foot');
  const y = window.scrollY;
  if(view==='wizard'){
    app.innerHTML = vWizard();
    foot.innerHTML = `<div class="wizfoot"><div>
      <button class="btn ghost" data-action="${step===0?'exitWizard':'prev'}">${step===0?ic('x')+'Salir':ic('arrowL')+'Atrás'}</button>
      <button class="btn" data-action="${step===STEPS.length-1?'close':'next'}">${step===STEPS.length-1?ic('lock')+'Cerrar jornada':'Siguiente'+ic('arrowR')}</button>
    </div></div>`;
  } else {
    app.innerHTML = view==='planos'?vPlanos(): view==='formatos'?vFormatos(): view==='programa'?vPrograma(): view==='jornadas'?vJornadas(): view==='detalle'?vDetalle(): view==='perfil'?vPerfil(): vHome();
    const t = view==='detalle'?'jornadas':view;
    foot.innerHTML = `<nav class="tabs"><div>
      ${[['home','home','Inicio'],['programa','gantt','Programa'],['jornadas','book','Jornadas'],['planos','map','Planos'],['formatos','clipboard','Formatos']].map(([v,n,tx])=>`<button class="${t===v?'on':''}" data-action="go" data-v="${v}"><span class="tb">${ic(n)}</span>${tx}</button>`).join('')}
    </div></nav>`;
  }
  return y;
}
function renderKeep(){ const y=window.scrollY; render(); window.scrollTo(0,y); }
function go(v){ view=v; render(); window.scrollTo(0,0); }

/* ===================== CLIMA AUTOMÁTICO ===================== */
// Usa la ubicación del teléfono y el servicio gratuito Open-Meteo.
let climaBusy = false, climaError = '';
const WMO = c => c===0?'Soleado': c<=2?'Parcialmente nublado': c===3?'Nublado': (c===45||c===48)?'Niebla':
  (c>=51&&c<=57)?'Llovizna': (c===61||c===80)?'Lluvia ligera': (c>=63&&c<=67)||(c>=81&&c<=82)?'Lluvia fuerte':
  (c>=71&&c<=77)||(c>=85&&c<=86)?'Nieve / granizo': c>=95?'Tormenta eléctrica':'Nublado';
// Consulta el clima actual en la ubicación del teléfono. Devuelve {clima, temp, lat, lon}.
function consultarClima(){
  return new Promise((res, rej)=>{
    if(!online()) return rej(new Error('sin señal'));
    if(!('geolocation' in navigator)) return rej(new Error('el navegador no da la ubicación'));
    let listo = false;
    const t = setTimeout(()=>{ listo=true; rej(new Error('tiempo de espera agotado')); }, 15000);
    try{
      navigator.geolocation.getCurrentPosition(async pos=>{
        try{
          const {latitude:la, longitude:lo} = pos.coords;
          const r = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${la.toFixed(4)}&longitude=${lo.toFixed(4)}&current=temperature_2m,weather_code&timezone=auto`);
          const d = await r.json();
          clearTimeout(t); if(listo) return;
          res({clima:WMO(d.current.weather_code), temp:Math.round(d.current.temperature_2m), lat:+la.toFixed(5), lon:+lo.toFixed(5)});
        }catch(e){ clearTimeout(t); if(!listo) rej(new Error('no se pudo consultar el servicio de clima')); }
      }, ()=>{ clearTimeout(t); if(!listo) rej(new Error('sin permiso de ubicación')); }, {timeout:12000, maximumAge:600000});
    }catch(e){ clearTimeout(t); rej(new Error('ubicación no disponible')); }
  });
}
function obtenerClima(j){
  if(!j || climaBusy) return;
  climaBusy = true; climaError = ''; if(view==='wizard') renderKeep();
  consultarClima().then(c=>{
    j.inicio.clima = c.clima; j.inicio.temp = c.temp;
    j.inicio.climaFuente = 'auto'; j.inicio.climaHora = ahora();
    j.inicio.lat = c.lat; j.inicio.lon = c.lon;
    S.climaHoy = {clima:c.clima, temp:c.temp, hora:ahora(), t:Date.now()};
  }).catch(e=>{ climaError = e.message; })
  .finally(()=>{ climaBusy=false; persist(); if(view==='wizard' && J()===j) renderKeep(); });
}
// Clima de la pantalla de Inicio (se actualiza cada 30 min)
let climaHomeBusy = false;
function climaInicio(manual){
  const c = S.climaHoy;
  if(climaHomeBusy || (!manual && c && Date.now()-c.t < 30*60000)) return;
  climaHomeBusy = true; if(view==='home') renderKeep();
  consultarClima().then(r=>{ S.climaHoy = {clima:r.clima, temp:r.temp, hora:ahora(), t:Date.now()}; persist(); })
    .catch(e=>{ if(manual) toast('No se pudo obtener el clima: '+e.message+'.'); })
    .finally(()=>{ climaHomeBusy=false; if(view==='home') renderKeep(); });
}
// Solo consulta sola si el permiso de ubicación ya se dio; si no, espera a que el usuario toque.
function climaInicioSiHayPermiso(){
  try{
    if(navigator.permissions && navigator.permissions.query)
      navigator.permissions.query({name:'geolocation'}).then(p=>{ if(p.state==='granted') climaInicio(false); }).catch(()=>{});
  }catch(e){}
}

/* ===================== VALIDACIÓN ===================== */
function validar(j, s){
  if(s===0){ if(!j.fecha) return 'Indica la fecha de la jornada.'; if(!S.supervisor.trim()) return 'Indica el nombre del supervisor.'; if(!(j.frente||'').trim()) return 'Indica el frente de trabajo.'; }
  if(s===1){ if(!j.inicio?.horaInicio) return 'Indica la hora de inicio.'; if(climaBusy) return 'Espera un momento, se está obteniendo el clima.'; if(!j.inicio?.clima) return 'Selecciona el clima.'; }
  if(s===2){
    const conAv = Object.values(j.avances||{}).some(a=>Number(a.hoy)>0);
    const conSub = (j.sustituciones||[]).some(x=>x.conceptoId && x.nueva);
    if(!conAv && !conSub) return 'Registra avance en al menos un concepto o una sustitución.';
    for(const k of conceptosDe(j.contratoId)){
      const v = Number(j.avances?.[k.id]?.hoy)||0;
      if(v<0) return `El avance de ${k.clave} no puede ser negativo.`;
      const prev = avanceConcepto(k);
      if(prev + v > 100.0001) return `El avance de ${k.clave} superaría el 100% (acumulado ${prev}%).`;
    }
  }
  if(s===7){ if(!j.cierre?.horaFin) return 'No se registró la hora de término.'; if(!horasJornada(j)) return 'La hora de término debe ser posterior a la de inicio.'; }
  return null;
}

/* ===================== FOTOS ===================== */
function comprimir(file, max=1280){
  return new Promise((res)=>{
    const r = new FileReader();
    r.onload = ()=>{
      const img = new Image();
      img.onload = ()=>{
        let w=img.width, h=img.height;
        if(w>h && w>max){ h=Math.round(h*max/w); w=max; } else if(h>=w && h>max){ w=Math.round(w*max/h); h=max; }
        const cv=document.createElement('canvas'); cv.width=w; cv.height=h;
        cv.getContext('2d').drawImage(img,0,0,w,h);
        res(cv.toDataURL('image/jpeg',0.72));
      };
      img.onerror = ()=>res(null);
      img.src = r.result;
    };
    r.onerror = ()=>res(null);
    r.readAsDataURL(file);
  });
}

/* ===================== MODAL ===================== */
function modal(title, text, okTxt, onOk){
  $('#modalRoot').innerHTML = `<div class="modal" data-action="modalBg"><div>
    <h3>${esc(title)}</h3><div class="muted" style="margin-bottom:14px">${esc(text)}</div>
    <div class="row"><button class="btn ghost" data-action="modalNo">Cancelar</button><button class="btn" data-action="modalOk">${esc(okTxt)}</button></div>
  </div></div>`;
  modal._ok = onOk;
}
function closeModal(){ $('#modalRoot').innerHTML=''; modal._ok=null; }

/* ===================== EVENTOS ===================== */
document.addEventListener('input', e=>{
  const el = e.target;
  if(el.id==='planoQ'){ planoFiltro.q = el.value; const pos=el.selectionStart; renderKeep(); const n=$('#planoQ'); if(n){ n.focus(); n.setSelectionRange(pos,pos); } return; }
  const k = el.dataset.k; if(!k) return;
  const val = el.type==='checkbox' ? el.checked : el.value;
  if(el.dataset.global){ S[k]=val; persist(); return; }
  const j = J(); if(!j) return;
  setPath(j, k, val); if(k==='frente') S.frente = val; persist();
});
document.addEventListener('change', async e=>{
  const el = e.target;
  if(el.id==='progFile'){ const f=el.files[0]; if(f){ toast(`Leyendo ${f.name}…`); cargarArchivoPrograma(f); } return; }
  if(el.dataset.action==='planoObs'){ planoFiltro.obsoletos = el.checked; renderKeep(); return; }
  if(el.dataset.action==='pickContrato'){ S.contratoId=el.value; persist(); renderKeep(); return; }
  if(el.dataset.action==='addFotoPerfil' || el.dataset.action==='addPortada'){
    const f = el.files[0]; if(!f) return;
    const perfil = el.dataset.action==='addFotoPerfil';
    const d = await comprimir(f, perfil?320:1280);
    if(!d){ toast('No se pudo leer la imagen.'); return; }
    if(perfil){ S.perfil.foto = d; S.perfil.fuente = 'propia'; toast('Foto de perfil actualizada.'); }
    else { S.tema.portadaFoto = d; S.tema.portada = 'propia'; toast('Portada actualizada.'); }
    persist(); renderKeep(); return;
  }
  if(el.dataset.action==='toggleSaludo'){ S.tema.saludo = el.checked; persist(); renderKeep(); return; }
  if(el.dataset.action==='addFotos'){
    const j=J(); if(!j) return;
    const files=[...el.files]; if(!files.length) return;
    toast('Procesando fotografías…');
    j.fotos = j.fotos||[];
    for(const f of files){ const d=await comprimir(f); if(d) j.fotos.push({id:uid(),data:d,pie:'',conceptoId:''}); }
    persist(); renderKeep(); toast(`${files.length} foto(s) agregada(s).`);
    return;
  }
  const k = el.dataset.k;
  if(k && (el.tagName==='SELECT' || el.type==='checkbox' || el.type==='number')){
    // refresca totales visibles (personal, resumen) sin perder la captura
    if(k.startsWith('inicio.personal') || k.startsWith('prep.')) renderKeep();
  }
});

document.addEventListener('click', e=>{
  const el = e.target.closest('[data-action]'); if(!el) return;
  const a = el.dataset.action;
  if(el.tagName==='SELECT' || el.tagName==='INPUT') return;
  const j = J();
  switch(a){
    case 'go': go(el.dataset.v); break;
    case 'toggleNet':
      simOffline = !simOffline; render();
      toast(simOffline ? 'Modo sin señal (simulado). Todo se sigue guardando en el teléfono.' : 'Conexión recuperada. Enviando pendientes…');
      if(!simOffline) sync(); break;
    case 'syncNow': sync(true); break;
    case 'newJornada': {
      const nj = {id:uid(), contratoId:S.contratoId, fecha:hoy(), estado:'borrador', paso:0, creada:new Date().toISOString(),
        frente:S.frente||'', prep:{}, inicio:{horaInicio:'', clima:'', temp:'', personal:[{cat:'',cantidad:''}]}, avances:{}, sustituciones:[], fotos:[], incidencias:[], acuerdos:[], nota:'', cierre:{}};
      S.jornadas.push(nj); curId=nj.id; step=0; view='wizard'; persist(); render(); window.scrollTo(0,0); break;
    }
    case 'resume': curId=el.dataset.id; const r=J(); step=r.paso||0; S.contratoId=r.contratoId; view='wizard'; render(); window.scrollTo(0,0); break;
    case 'openJornada': detailId=el.dataset.id; go('detalle'); break;
    case 'exitWizard': toast('La jornada queda guardada como borrador.'); go('home'); break;
    case 'prev': step=Math.max(0,step-1); j.paso=step; persist(); render(); window.scrollTo(0,0); break;
    case 'next': {
      const err = validar(j, step); if(err){ toast(err); break; }
      step=Math.min(STEPS.length-1, step+1); j.paso=step;
      if(step===1){ if(!j.inicio.horaInicio) j.inicio.horaInicio = ahora(); if(j.inicio.climaFuente!=='auto') obtenerClima(j); }
      if(step===6 && !j.nota) j.nota = generarNota(j);
      persist(); render(); window.scrollTo(0,0); break;
    }
    case 'close': {
      j.cierre.horaFin = ahora();
      for(let s=0;s<STEPS.length;s++){ const err=validar(j,s); if(err){ step=s; j.paso=s; render(); window.scrollTo(0,0); toast(err); return; } }
      if(!j.nota) j.nota = generarNota(j);
      j.estado='pendiente'; j.cerrada=new Date().toISOString(); persist();
      view='home'; render(); window.scrollTo(0,0);
      toast(online() ? 'Jornada cerrada. Enviando…' : 'Jornada cerrada y guardada. Se enviará cuando haya señal.');
      setTimeout(()=>sync(),600); break;
    }
    case 'addPersonal': j.inicio.personal.push({cat:'',cantidad:''}); persist(); renderKeep(); break;
    case 'delPersonal': j.inicio.personal.splice(+el.dataset.i,1); persist(); renderKeep(); break;
    case 'addSub': j.sustituciones.push({conceptoId:'',motivo:'',nueva:''}); persist(); renderKeep(); break;
    case 'delSub': j.sustituciones.splice(+el.dataset.i,1); persist(); renderKeep(); break;
    case 'delFoto': j.fotos.splice(+el.dataset.i,1); persist(); renderKeep(); break;
    case 'addInc': j.incidencias.push({id:uid(),tipo:'',sev:'',desc:'',escalar:false}); persist(); renderKeep(); break;
    case 'delInc': j.incidencias.splice(+el.dataset.i,1); persist(); renderKeep(); break;
    case 'addAc': j.acuerdos.push({id:uid(),desc:'',resp:'',fecha:'',cumplido:false}); persist(); renderKeep(); break;
    case 'delAc': j.acuerdos.splice(+el.dataset.i,1); persist(); renderKeep(); break;
    case 'pickPrograma': { const f=$('#progFile'); f.value=''; f.click(); break; }
    case 'login': Auth.login(); break;
    case 'logout': Auth.logout(); spPrueba=''; if(S.perfil.fuente==='ms'){ S.perfil.foto=''; S.perfil.fuente=''; persist(); } render(); toast('Sesión cerrada.'); break;
    case 'recargar':
      navigator.serviceWorker.getRegistration().then(r=>{
        if(r && r.waiting){ navigator.serviceWorker.addEventListener('controllerchange', ()=>location.reload()); r.waiting.postMessage('skipWaiting'); }
        else location.reload();
      }).catch(()=>location.reload());
      break;
    case 'probarSP': {
      if(!online()){ toast('Necesitas señal para probar la conexión.'); break; }
      spPrueba='Probando conexión…'; renderKeep();
      Auth.graph('/sites/root?$select=displayName,webUrl').then(s=>{ spPrueba=`✓ SharePoint conectado: ${s.displayName||s.webUrl}`; renderKeep(); })
        .catch(e=>{ spPrueba='✗ '+e.message; renderKeep(); });
      break;
    }
    case 'progVista': progVista = el.dataset.v; renderKeep(); break;
    case 'progFiltro': progFiltro = el.dataset.f; renderKeep(); break;
    case 'abrirPrograma': { const r=revisionesDe(S.contratoId); toast(`Prototipo: en la versión final aquí se abre ${r.length?r[r.length-1].archivo:'el programa vigente'} desde la carpeta Programa del contrato en SharePoint.`); break; }
    case 'confirmarPrograma': {
      const p = progPend; if(!p || p.errores.length) break;
      S.programas[p.cid] = S.programas[p.cid] || [];
      S.programas[p.cid].push({rev:p.rev, archivo:p.archivo, fuente:p.fuente, cargado:new Date().toISOString(), conceptos:p.conceptos});
      progPend=null; persist(); closeModal(); renderKeep(); toast(`Programa Rev. ${p.rev} cargado (${p.conceptos.length} conceptos).`); break;
    }
    case 'wizPlanos': toast('La jornada queda guardada; puedes continuarla desde Inicio.'); go('planos'); break;
    case 'planoDisc': planoFiltro.disc = el.dataset.d; renderKeep(); break;
    case 'verPlano': modalPlano(el.dataset.id); break;
    case 'abrirPlano': {
      const x = PLANOS.find(p=>p.id===el.dataset.id);
      if(!online() && !S.planosOffline[x.id]) toast('Sin señal y este plano no está guardado en el teléfono.');
      else toast(`Prototipo: en la versión final aquí se abre ${x.clave}_Rev${x.rev}.pdf${online()?'':' (copia guardada en el teléfono)'}.`);
      break;
    }
    case 'offPlano': {
      const id = el.dataset.id;
      if(S.planosOffline[id]){ delete S.planosOffline[id]; toast('Se quitó la copia del teléfono.'); }
      else { if(!online()){ toast('Necesitas señal para descargar el plano.'); break; } S.planosOffline[id]=new Date().toISOString(); toast('Plano guardado para verlo sin señal.'); }
      persist(); modalPlano(id); renderKeep(); break;
    }
    case 'wizFormatos': toast('La jornada queda guardada; puedes continuarla desde Inicio.'); go('formatos'); break;
    case 'askFormato': modalFormato(el.dataset.t); break;
    case 'genFormato': {
      const tipo = el.dataset.t, c = contrato(S.contratoId), f = FORMATOS.find(x=>x.id===tipo);
      const reg = {id:uid(), tipo, contratoId:c.id, folio:siguienteFolio(c.id,tipo), frente:S.frente, supervisor:S.supervisor, fecha:hoy(), hora:ahora(), estado:'pendiente', ruta:rutaSP(c,f)};
      reg.archivo = `${reg.folio}_${reg.fecha}.xlsx`;
      S.formatos.push(reg); persist(); closeModal(); renderKeep();
      toast(online() ? `Creando ${reg.folio} en SharePoint…` : `${reg.folio} guardado. Se creará en SharePoint cuando haya señal.`);
      setTimeout(()=>sync(),500); break;
    }
    case 'abrirFormato': { const x=S.formatos.find(y=>y.id===el.dataset.id); toast(`Prototipo: en la versión final aquí se abre ${x?x.archivo:'el archivo'} en Excel.`); break; }
    case 'retryClima': obtenerClima(j); break;
    case 'climaHome': climaInicio(true); break;
    case 'setAcento': S.tema.acento = el.dataset.v; persist(); renderKeep(); break;
    case 'setPortada': S.tema.portada = el.dataset.v; persist(); renderKeep(); break;
    case 'quitarPortada': S.tema.portadaFoto = ''; if(S.tema.portada==='propia') S.tema.portada='gruas'; persist(); renderKeep(); break;
    case 'setModo': S.tema.modo = el.dataset.v; persist(); renderKeep(); break;
    case 'setLetra': S.tema.letra = el.dataset.v; persist(); renderKeep(); break;
    case 'fotoMS': fotoMicrosoft(true); break;
    case 'quitarFotoPerfil': S.perfil.foto=''; S.perfil.fuente=''; persist(); renderKeep(); toast('Foto quitada.'); break;
    case 'pickClima': j.inicio.clima = el.dataset.c; j.inicio.climaFuente = 'manual'; persist(); renderKeep(); break;
    case 'pickSev': { const x=j.incidencias[+el.dataset.i]; if(x){ x.sev=el.dataset.v; persist(); renderKeep(); } break; }
    case 'genNota': j.nota = generarNota(j); persist(); renderKeep(); toast('Borrador generado. Puedes editarlo.'); break;
    case 'cumplir': {
      const jj = S.jornadas.find(x=>x.id===el.dataset.j); const ac = jj?.acuerdos.find(x=>x.id===el.dataset.a);
      if(ac){ ac.cumplido=true; ac.cumplidoEn=new Date().toISOString(); if(jj.estado==='enviada') jj.estado='pendiente'; persist(); renderKeep(); toast('Acuerdo marcado como cumplido.'); sync(); }
      break;
    }
    case 'askDelete':
      modal('Eliminar borrador','Se borrará esta jornada en captura. Esta acción no se puede deshacer.','Eliminar', ()=>{
        S.jornadas = S.jornadas.filter(x=>x.id!==el.dataset.id); persist(); closeModal(); go('jornadas'); toast('Borrador eliminado.');
      }); break;
    case 'modalOk': modal._ok && modal._ok(); break;
    case 'modalNo': closeModal(); break;
    case 'modalBg': if(e.target===el) closeModal(); break;
  }
});
window.addEventListener('online', ()=>{ render(); sync(); });
window.addEventListener('offline', ()=>render());

/* ===================== CUENTA MICROSOFT ===================== */
let spPrueba = '';
function nuevaVersion(){
  $('#modalRoot').innerHTML = `<div class="modal"><div><h3>Hay una versión nueva</h3><div class="muted" style="margin-bottom:14px">Recarga para usar la versión más reciente de GEC FIELD. Lo que capturaste no se pierde.</div>
    <button class="btn" data-action="recargar">Recargar ahora</button><div style="height:8px"></div><button class="btn ghost" data-action="modalNo">Después</button></div></div>`;
}
function cuentaHTML(){
  if(!Auth.signedIn()) return `<div class="card"><h3>${hi('user')}Cuenta</h3><div class="muted" style="margin-bottom:10px">Inicia sesión con tu cuenta de Microsoft de GEC.</div>
    <button class="btn ms" data-action="login">${MS_LOGO}Iniciar sesión con Microsoft</button>
    <div class="muted" style="margin-top:8px;font-size:12px">Dirección de esta app: ${esc(Auth.redirectUri())}</div></div>`;
  const u = Auth.user() || {};
  const ini = (u.displayName||'?').split(' ').filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase();
  return `<div class="card"><h3>${hi('user')}Cuenta</h3>
    <div class="lrow"><span class="avatar">${esc(ini)}</span><div><div style="font-weight:600">${esc(u.displayName||'Conectado')}</div><div class="muted">${MS_LOGO} ${esc(u.mail||u.userPrincipalName||'')}</div></div></div>
    ${spPrueba?`<div class="muted" style="margin-top:8px">${esc(spPrueba)}</div>`:''}
    <div class="row" style="margin-top:10px"><button class="btn sec sm" data-action="probarSP">${ic('layers')}Probar SharePoint</button><button class="btn ghost sm" data-action="logout">${ic('logout')}Cerrar sesión</button></div></div>`;
}
/* ===================== ARRANQUE ===================== */
(async()=>{
  try{ await Auth.handleRedirect(); }catch(e){ setTimeout(()=>toast('Inicio de sesión: '+e.message),500); }
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').then(reg=>{
      reg.addEventListener('updatefound', ()=>{ const w=reg.installing; w && w.addEventListener('statechange', ()=>{ if(w.state==='installed' && navigator.serviceWorker.controller) nuevaVersion(); }); });
    }).catch(()=>{});
  }
  await Store.open();
  const saved = await Store.get('state');
  if(saved && Array.isArray(saved.jornadas)){
    S = Object.assign(S, saved);
    S.perfil = Object.assign({foto:'', fuente:''}, saved.perfil||{});
    S.tema = Object.assign({acento:'azul', portada:'gruas', portadaFoto:'', letra:'normal', saludo:true, modo:'auto'}, saved.tema||{});
    S.formatos = S.formatos || []; S.frente = S.frente || ''; S.planosOffline = S.planosOffline || {}; S.programas = S.programas || {};
    [...S.jornadas, ...S.formatos].forEach(j=>{ if(j.estado==='enviando') j.estado='pendiente'; });
  }
  if(!contrato(S.contratoId)) S.contratoId='c1';
  render();
  climaInicioSiHayPermiso();
  setInterval(()=>{ const c=$('#clk'); if(c) c.textContent=ahora(); }, 15000);
  if(Auth.signedIn()) Auth.me().then(u=>{ if(u){ if(!S.supervisor) { S.supervisor=u.displayName||''; persist(); } render(); if(!S.perfil.foto) fotoMicrosoft(false); } }).catch(()=>{});
  if(!Store.db) toast('Este navegador no permite guardar datos: la captura se perderá al cerrar la página.');
  setTimeout(()=>sync(),800);
})();
