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
  {id:'cal', nombre:'Inspección y liberación de calidad', pref:'CAL', carpeta:'Calidad', plantilla:'FMT-CAL-001.xlsx', ico:'✔'},
  {id:'nc',  nombre:'No conformidad', pref:'NC', carpeta:'No conformidades', plantilla:'FMT-NC-001.xlsx', ico:'⚠'},
  {id:'sc',  nombre:'Solicitud de cambio', pref:'SC', carpeta:'Solicitudes de cambio', plantilla:'FMT-SC-001.xlsx', ico:'⇄'},
  {id:'er',  nombre:'Entrega-recepción', pref:'ER', carpeta:'Entrega-recepción', plantilla:'SB-ERM-GEC-001.xlsx', ico:'⇩'}
];
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
let S = { contratoId:'c1', supervisor:'', frente:'', jornadas:[], formatos:[], planosOffline:{}, programas:{} };
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
    ${p.errores.length ? `<div class="proto" style="background:#FBE9E7;border-color:#EBC0BA;color:var(--bad)"><b>No se puede cargar. Corrige el archivo:</b><br>${p.errores.slice(0,12).map(esc).join('<br>')}${p.errores.length>12?`<br>… y ${p.errores.length-12} más`:''}</div>`
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
  const n = pendientes().length;
  $('#pendChip').innerHTML = n ? `<span class="chip pend">${n} por enviar</span>` : '';
}

function selectContrato(){
  return `<select data-action="pickContrato">${SEED.proyectos.map(p=>`<optgroup label="${esc(p.planta)} · ${esc(p.nombre)}">${SEED.contratos.filter(c=>c.proyectoId===p.id).map(c=>`<option value="${c.id}" ${c.id===S.contratoId?'selected':''}>${esc(c.numero)} — ${esc(c.nombre)}</option>`).join('')}</optgroup>`).join('')}</select>`;
}

function vHome(){
  const c = contrato(S.contratoId), p = proyecto(c.proyectoId);
  const av = avanceContrato(c.id);
  const borr = S.jornadas.find(j=>j.contratoId===c.id && j.estado==='borrador');
  const acs = acuerdosAbiertos(c.id);
  const pend = pendientes();
  const ult = S.jornadas.filter(j=>j.contratoId===c.id && j.estado!=='borrador').slice(-1)[0];
  return `
  ${cuentaHTML()}
  <div class="proto">Versión 1.0 de prueba: la información todavía se guarda solo en este teléfono y el envío a SharePoint está simulado. Toca el indicador <b>En línea</b> para simular que no hay señal.</div>
  <div class="card">
    <h3>Contrato</h3>
    ${selectContrato()}
    <div class="muted" style="margin-top:8px">${esc(p.planta)} · ${esc(p.nombre)}<br>${esc(c.contratista)}</div>
  </div>
  <div class="card">
    <h3>Avance del contrato</h3>
    <div class="row" style="align-items:flex-end"><div class="big">${av}%</div><div class="muted" style="text-align:right">ponderado por duración<br>de cada concepto</div></div>
    <div class="bar" style="margin-top:8px"><i style="width:${av}%"></i></div>
    ${ult?`<div class="muted" style="margin-top:8px">Última jornada: ${fmtFecha(ult.fecha)}</div>`:''}
  </div>
  ${borr
    ? `<button class="btn" data-action="resume" data-id="${borr.id}">Continuar jornada en curso · ${esc(STEPS[borr.paso||0])}</button>`
    : `<button class="btn" data-action="newJornada">＋ Iniciar jornada de hoy</button>`}
  <div style="height:12px"></div>
  <div class="card">
    <h3>Planos y formatos</h3>
    <div class="muted" style="margin-bottom:10px">Planos vigentes del contrato y formatos de calidad, no conformidades, solicitudes de cambio y entrega-recepción.</div>
    <div class="row"><button class="btn sec" data-action="go" data-v="planos">Ver planos</button><button class="btn sec" data-action="go" data-v="formatos">Abrir formatos</button></div>
  </div>
  <div class="card">
    <h3>Envío a SharePoint</h3>
    ${pend.length
      ? `<div class="muted" style="margin-bottom:10px">${pend.length} registro(s) guardado(s) en el teléfono, pendiente(s) de enviar.</div><button class="btn sec" data-action="syncNow">Enviar ahora</button>`
      : `<div class="muted">Todo enviado. No hay jornadas pendientes.</div>`}
  </div>
  <div class="card">
    <h3>Acuerdos de campo sin cumplir ${acs.length?`<span class="badge b-pend">${acs.length}</span>`:''}</h3>
    ${acs.length ? `<div class="list">${acs.map(a=>`<div><div style="font-weight:600">${esc(a.desc)}</div><div class="row" style="margin-top:6px"><div class="muted">${esc(a.resp||'Sin responsable')} · compromiso ${fmtFecha(a.fecha)||'—'}</div><button class="btn sm sec" style="flex:0" data-action="cumplir" data-j="${a.jornadaId}" data-a="${a.id}">Cumplido</button></div></div>`).join('')}</div>` : `<div class="muted">Sin acuerdos pendientes en este contrato.</div>`}
  </div>`;
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
    cuerpo = `<div class="card"><h3>Diagrama de barras</h3>
      <div class="muted" style="margin-bottom:8px;font-size:12px"><span style="display:inline-block;width:10px;height:10px;background:#C9DAEE;border-radius:2px"></span> programado &nbsp; <span style="display:inline-block;width:10px;height:10px;background:var(--blue);border-radius:2px"></span> ejecutado &nbsp; <span style="color:var(--bad)">│</span> hoy</div>
      <div style="position:relative;height:16px;margin-bottom:4px">${ticks.join('')}</div>
      ${filtrados.map(k=>{ const r=avanceConcepto(k), e=estadoProg(k); const l=pos(k.ini), w=pos(k.fin)+100/span-l; return `<div style="margin:10px 0">
        <div style="font-size:12px;display:flex;justify-content:space-between"><span><b class="clave">${esc(k.clave)}</b> ${esc(k.desc)}</span><span class="muted">${r}%</span></div>
        <div style="position:relative;height:16px;background:#F3F6F9;border-radius:4px;margin-top:3px">
          <div style="position:absolute;left:${l}%;width:${w}%;top:2px;bottom:2px;background:#C9DAEE;border-radius:3px;overflow:hidden"><div style="height:100%;width:${r}%;background:${e.key==='atr'?'var(--bad)':'var(--blue)'}"></div></div>
          <div style="position:absolute;left:${hoyP}%;top:-2px;bottom:-2px;width:2px;background:var(--bad)"></div>
        </div></div>`; }).join('')}
    </div>`;
  } else if(progVista==='semana'){
    const [lu, dom] = semanaActual();
    const sem = filtrados.filter(k=>k.ini<=dom && k.fin>=lu);
    cuerpo = `<div class="card"><h3>Esta semana · ${fmtFecha(lu)} al ${fmtFecha(dom)}</h3>
      ${sem.length?sem.map(k=>{ const r=avanceConcepto(k), meta=programadoAl(k,dom), e=estadoProg(k); return `<div class="concept">
        <div class="row"><span class="clave">${esc(k.clave)}</span><span style="flex:0;white-space:nowrap" class="badge ${e.c}">${e.t}</span></div>
        <div style="font-weight:600;margin:4px 0 6px">${esc(k.desc)}</div>
        <div class="kv"><span>Meta al domingo (programado)</span><b>${meta}%</b></div>
        <div class="kv"><span>Ejecutado a hoy</span><b>${r}%</b></div>
        <div class="kv"><span>Falta para la meta</span><b style="color:${meta-r>0?'var(--bad)':'var(--ok)'}">${Math.max(0,Math.round((meta-r)*10)/10)}%</b></div>
      </div>`;}).join(''):'<div class="empty">No hay conceptos programados esta semana.</div>'}
    </div>`;
  } else {
    cuerpo = filtrados.map(k=>{ const a=avanceConcepto(k), p=programadoAl(k,hoy()), e=estadoProg(k); return `<div class="concept">
      <div class="row"><span class="clave">${esc(k.clave)}</span><span style="flex:0;white-space:nowrap" class="badge ${e.c}">${e.t}</span></div>
      <div style="font-weight:600;margin:4px 0 2px">${esc(k.desc)}</div>
      <div class="muted">${k.cant.toLocaleString('es-MX')} ${esc(k.unidad)} · ${fmtFecha(k.ini)} al ${fmtFecha(k.fin)} (${k.dur} días)</div>
      <div style="margin-top:8px;font-size:12px" class="muted">Programado a hoy ${p}%</div>
      <div class="bar" style="background:#E4E9F0;height:6px"><i style="width:${p}%;background:#9FB9D8"></i></div>
      <div style="margin-top:6px;font-size:12px" class="muted">Ejecutado ${a}%</div>
      <div class="bar"><i style="width:${a}%;${e.key==='atr'?'background:var(--bad)':''}"></i></div>
    </div>`;}).join('') || '<div class="card"><div class="empty">Ningún concepto con ese estado.</div></div>';
  }
  const chip = (key,txt,n) => `<button class="btn sm ${progFiltro===key?'':'ghost'}" data-action="progFiltro" data-f="${key}">${txt}${n!=null?` (${n})`:''}</button>`;
  const seg = (v,txt) => `<button class="btn sm ${progVista===v?'':'ghost'}" style="flex:1" data-action="progVista" data-v="${v}">${txt}</button>`;
  return `<div class="card"><h3>Programa de obra</h3>${selectContrato()}
    <div class="sum" style="margin-top:12px">
      <div><b>${prog}%</b><span>Programado a hoy</span></div>
      <div><b>${real}%</b><span>Ejecutado</span></div>
    </div>
    <div style="margin-top:8px;padding:10px;border-radius:10px;background:${dif<-5?'#FBE9E7':dif<0?'#FFF1D2':'#DDF3E8'};font-size:13.5px"><b>${dif>=0?'Adelantado':'Atrasado'} ${Math.abs(dif)}%</b> respecto al programa (ponderado por duración).</div>
    <div class="row" style="margin-top:10px">
      <button class="btn ghost sm" data-action="abrirPrograma">📄 Ver archivo vigente</button>
      <button class="btn sec sm" data-action="pickPrograma">⬆ Cargar programa</button>
    </div>
    <div class="muted" style="margin-top:8px;font-size:12.5px">Vigente: <b>${(()=>{const r=revisionesDe(c.id); return r.length?`Rev. ${r[r.length-1].rev} · ${esc(r[r.length-1].archivo)} · cargado ${fmtFecha(isoLocal(r[r.length-1].cargado))}`:'Rev. 0 · programa inicial de ejemplo';})()}</b>
    ${revisionesDe(c.id).length?`<br>Revisiones anteriores: Rev. 0 (inicial)${revisionesDe(c.id).slice(0,-1).map(r=>`, Rev. ${r.rev}`).join('')}`:''}<br>Acepta la plantilla de Excel de GEC o un XML de Project.</div>
  </div>
  <div style="display:flex;gap:6px;margin-bottom:8px">${seg('lista','Lista')}${seg('gantt','Barras')}${seg('semana','Semana')}</div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">${chip('','Todos')}${chip('atr','Retrasados',cuenta('atr'))}${chip('eje','En tiempo',cuenta('eje'))}${chip('ini','Por iniciar',cuenta('ini'))}${chip('term','Terminados',cuenta('term'))}</div>
  ${cuerpo}`;
}

function vPlanos(){
  const c = contrato(S.contratoId), p = proyecto(c.proyectoId);
  const todos = PLANOS.filter(x=>x.contratoId===c.id);
  const discs = [...new Set(todos.map(x=>x.disc))];
  const q = planoFiltro.q.trim().toLowerCase();
  const xs = todos.filter(x=>(planoFiltro.obsoletos||!x.obsoleto) && (!planoFiltro.disc||x.disc===planoFiltro.disc) && (!q || (x.clave+' '+x.titulo).toLowerCase().includes(q)));
  const nOff = todos.filter(x=>S.planosOffline[x.id]).length;
  return `<div class="card"><h3>Planos del contrato</h3>${selectContrato()}
    <div class="muted" style="margin-top:8px">SharePoint › GEC FIELD › ${esc(p.planta)} › ${esc(p.nombre)} › ${esc(c.numero)} › Planos</div>
    <input type="search" id="planoQ" placeholder="Buscar por clave o nombre…" value="${esc(planoFiltro.q)}" style="margin-top:10px">
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px">
      <button class="btn sm ${planoFiltro.disc?'ghost':''}" data-action="planoDisc" data-d="">Todos</button>
      ${discs.map(d=>`<button class="btn sm ${planoFiltro.disc===d?'':'ghost'}" data-action="planoDisc" data-d="${esc(d)}">${esc(d)}</button>`).join('')}
    </div>
    <label class="check" style="text-transform:none;letter-spacing:0;font-size:14px;color:var(--text);font-weight:500;margin-top:6px"><input type="checkbox" data-action="planoObs" ${planoFiltro.obsoletos?'checked':''}> Mostrar revisiones anteriores</label>
    ${nOff?`<div class="muted">${nOff} plano(s) guardado(s) para ver sin señal.</div>`:''}
  </div>
  ${xs.length?xs.map(x=>`<div class="concept" data-action="verPlano" data-id="${x.id}" style="cursor:pointer;${x.obsoleto?'opacity:.6':''}">
    <div class="row"><span class="clave">${esc(x.clave)} · Rev. ${esc(x.rev)}</span><span style="flex:0;white-space:nowrap">${x.obsoleto?'<span class="badge b-borr">Sustituido</span>':'<span class="badge b-env">Vigente</span>'}</span></div>
    <div style="font-weight:600;margin:4px 0 2px">${esc(x.titulo)}</div>
    <div class="muted">${esc(x.disc)} · ${fmtFecha(x.fecha)} · PDF ${x.mb} MB ${S.planosOffline[x.id]?' · <b style="color:var(--ok)">✓ sin señal</b>':''}</div>
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
    ${vig?`<div class="proto">Esta revisión fue sustituida por la Rev. ${esc(vig.rev)} del ${fmtFecha(vig.fecha)}. No la uses para ejecutar.</div>`:''}
    ${planoSVG(x)}
    <div class="muted" style="margin:8px 0 12px;font-size:12px">Vista ilustrativa del prototipo. En la versión final aquí se abre el PDF real con zoom.</div>
    <button class="btn" data-action="abrirPlano" data-id="${x.id}">Abrir plano completo</button>
    <div style="height:8px"></div>
    <button class="btn ${off?'danger':'sec'}" data-action="offPlano" data-id="${x.id}">${off?'Quitar de "sin señal"':'⬇ Guardar para ver sin señal'}</button>
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
  return `<div class="card"><h3>Contrato y frente</h3>${selectContrato()}
    <label>Frente de trabajo</label><input type="text" data-k="frente" data-global="1" value="${esc(S.frente)}" placeholder="Ej. Eje A-C / Zona de andenes" list="frentes2">
    <datalist id="frentes2">${frentesUsados().map(f=>`<option value="${esc(f)}">`).join('')}</datalist>
    <div class="muted" style="margin-top:8px">Supervisor: <b>${esc(S.supervisor||'— (captúralo en tu primera jornada)')}</b></div>
  </div>
  <div class="card"><h3>Nuevo formato</h3>
    <div class="muted" style="margin-bottom:10px">Al tocar uno se crea una copia de la plantilla en la carpeta del contrato, ya llenada con proyecto, contrato, frente, supervisor, fecha, hora y folio, y se abre para completarla.</div>
    ${FORMATOS.map(f=>`<button class="btn ghost" style="justify-content:flex-start;margin-bottom:8px;text-align:left" data-action="askFormato" data-t="${f.id}"><span style="font-size:18px;width:24px">${f.ico}</span><span style="flex:1">${esc(f.nombre)}</span><span class="muted">›</span></button>`).join('')}
  </div>
  <div class="card"><h3>Formatos generados</h3>
    ${gen.length?`<div class="list">${gen.map(x=>{const f=FORMATOS.find(y=>y.id===x.tipo); return `<div><div class="row"><b>${esc(x.folio)}</b><span style="flex:0;white-space:nowrap">${x.estado==='creado'?'<span class="badge b-env">En SharePoint</span>':x.estado==='enviando'?'<span class="badge b-sending">Creando…</span>':'<span class="badge b-pend">Por crear</span>'}</span></div>
      <div class="muted">${esc(f.nombre)} · ${fmtFecha(x.fecha)} ${esc(x.hora)} · ${esc(x.frente)}</div>
      ${x.estado==='creado'?`<button class="btn sm sec" style="margin-top:6px" data-action="abrirFormato" data-id="${x.id}">Abrir en Excel</button>`:''}</div>`;}).join('')}</div>`
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
    <h3>${esc(f.nombre)}</h3>
    <div class="muted" style="margin-bottom:8px">Plantilla: ${esc(f.plantilla)}<br>Se guardará en: ${esc(rutaSP(c,f))}</div>
    <div style="max-height:40vh;overflow:auto;margin-bottom:12px">${datos.map(([k,v])=>`<div class="kv"><span>${k}</span><b style="text-align:right">${esc(v)}</b></div>`).join('')}</div>
    <div class="row"><button class="btn ghost" data-action="modalNo">Cancelar</button><button class="btn" data-action="genFormato" data-t="${tipo}">Generar y abrir</button></div>
  </div></div>`;
}

function estadoBadge(e){
  return {borrador:'<span class="badge b-borr">En captura</span>',pendiente:'<span class="badge b-pend">Por enviar</span>',enviando:'<span class="badge b-sending">Enviando…</span>',enviada:'<span class="badge b-env">Enviada</span>'}[e]||'';
}
function vJornadas(){
  const js = S.jornadas.slice().reverse();
  if(!js.length) return `<div class="card"><div class="empty">Aún no hay jornadas registradas.<br>Inicia la primera desde la pestaña Inicio.</div></div>`;
  return `<div class="card"><h3>Jornadas registradas</h3><div class="list">${js.map(j=>{const c=contrato(j.contratoId); return `<div data-action="openJornada" data-id="${j.id}" style="cursor:pointer"><div class="row"><b>${fmtFecha(j.fecha)}</b><span style="flex:0;white-space:nowrap">${estadoBadge(j.estado)}</span></div><div class="muted">${esc(c.numero)} — ${esc(c.nombre)}</div></div>`;}).join('')}</div></div>`;
}

function vDetalle(){
  const j = S.jornadas.find(x=>x.id===detailId); if(!j){ view='jornadas'; return vJornadas(); }
  const c = contrato(j.contratoId);
  const acts = conceptosDe(c.id).filter(k=>Number(j.avances?.[k.id]?.hoy)>0);
  return `<button class="btn ghost sm" data-action="go" data-v="jornadas">← Jornadas</button><div style="height:10px"></div>
  <div class="card"><div class="row"><h3 style="margin:0">${fmtFecha(j.fecha)}</h3><span style="flex:0;white-space:nowrap">${estadoBadge(j.estado)}</span></div>
    <div class="muted" style="margin-top:4px">${esc(c.numero)} — ${esc(c.nombre)}</div></div>
  ${j.estado==='borrador'
    ? `<button class="btn" data-action="resume" data-id="${j.id}">Continuar captura</button><div style="height:10px"></div><button class="btn danger" data-action="askDelete" data-id="${j.id}">Eliminar borrador</button>`
    : `<div class="card"><h3>Resumen</h3>${resumenHTML(j)}</div>
       <div class="card"><h3>Actividades</h3>${acts.length?acts.map(k=>`<div class="kv"><span>${esc(k.clave)} ${esc(k.desc)}</span><b>+${j.avances[k.id].hoy}%</b></div>`).join(''):'<div class="muted">Sin avance registrado.</div>'}</div>
       ${(j.fotos||[]).length?`<div class="card"><h3>Evidencia fotográfica</h3><div class="photos">${j.fotos.map(f=>`<div class="ph"><img src="${f.data}" alt=""><div class="muted">${esc(f.pie||'Sin descripción')}</div></div>`).join('')}</div></div>`:''}
       <div class="card"><h3>Nota de bitácora</h3><div class="nota">${esc(j.nota||'—')}</div></div>`}`;
}

function resumenHTML(j){
  const hh = Math.round(totalPersonal(j)*horasJornada(j)*10)/10;
  return `<div class="sum">
    <div><b>${totalPersonal(j)}</b><span>Personal en sitio</span></div>
    <div><b>${hh}</b><span>Horas-hombre</span></div>
    <div><b>${Object.values(j.avances||{}).filter(a=>Number(a.hoy)>0).length}</b><span>Conceptos con avance</span></div>
    <div><b>${(j.fotos||[]).length}</b><span>Fotografías</span></div>
    <div><b>${(j.incidencias||[]).length}</b><span>Incidencias</span></div>
    <div><b>${(j.acuerdos||[]).length}</b><span>Acuerdos de campo</span></div>
  </div>
  <div style="margin-top:10px">
    <div class="kv"><span>Horario</span><b>${esc(j.inicio?.horaInicio||'—')} a ${esc(j.cierre?.horaFin||(j.estado==='borrador'?ahora()+' (al cerrar)':'—'))}</b></div>
    <div class="kv"><span>Clima</span><b>${esc(j.inicio?.clima||'—')}${j.inicio?.temp?` · ${esc(j.inicio.temp)} °C`:''}</b></div>
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
  const items = [['epp','Personal con EPP completo'],['permiso','Permisos de trabajo vigentes'],['platica','Plática de seguridad impartida'],['area','Área de trabajo delimitada y señalizada'],['vpm','Reunión VPM']];
  return `<div class="card"><h3>Datos de la jornada</h3>
    <div class="muted">${esc(c.numero)} — ${esc(c.nombre)}<br>${esc(c.contratista)}</div>
    <label>Fecha</label><div class="auto">${fmtFecha(j.fecha)} <span class="tag">automática</span></div>
    <label>Supervisor GEC</label><input type="text" data-k="supervisor" data-global="1" value="${esc(S.supervisor)}" placeholder="Nombre del supervisor">
    <label>Frente de trabajo</label>${inp('frente','text','placeholder="Ej. Eje A-C / Zona de andenes" list="frentes"')}
    <datalist id="frentes">${frentesUsados().map(f=>`<option value="${esc(f)}">`).join('')}</datalist>
  </div>
  <div class="card"><h3>Lista de verificación</h3>
    ${items.map(([k,t])=>`<label class="check" style="text-transform:none;letter-spacing:0;font-size:14.5px;color:var(--text);font-weight:500;margin:0"><input type="checkbox" data-k="prep.${k}" ${j.prep?.[k]?'checked':''}> ${t}</label>`).join('')}
  </div>`;
}

function stepInicio(j){
  const ps = j.inicio?.personal || [];
  const i = j.inicio||{};
  const auto = i.climaFuente==='auto';
  let climaHTML;
  if(auto){
    climaHTML = `<div class="row"><div><label>Clima</label><div class="auto">${esc(i.clima)} <span class="tag">automático</span></div></div><div><label>Temperatura</label><div class="auto">${esc(i.temp)} °C</div></div></div>
      <div class="muted" style="margin-top:6px">Registrado a las ${esc(i.climaHora||'')} según la ubicación del teléfono.</div>`;
  } else if(climaBusy){
    climaHTML = `<label>Clima y temperatura</label><div class="auto">Obteniendo clima de la ubicación… </div>`;
  } else {
    climaHTML = `<div class="proto" style="margin:10px 0 0">No se pudo obtener el clima automáticamente (${esc(climaError||'sin señal o sin permiso de ubicación')}). Captúralo a mano o reintenta.</div>
      <div class="row"><div><label>Clima</label>${sel('inicio.clima', CLIMAS)}</div><div><label>Temperatura °C</label>${inp('inicio.temp','number','inputmode="decimal" placeholder="Ej. 18"')}</div></div>
      <button class="btn sec sm" style="margin-top:10px" data-action="retryClima">↻ Reintentar automático</button>`;
  }
  return `<div class="card"><h3>Condiciones iniciales</h3>
    <label>Hora de inicio</label><div class="auto">${esc(i.horaInicio||'—')} h <span class="tag">automática</span></div>
    ${climaHTML}
  </div>
  <div class="card"><h3>Fuerza de trabajo del contratista</h3>
    ${ps.map((p,i)=>`<div class="row" style="margin-bottom:8px"><div style="flex:2">${sel(`inicio.personal.${i}.cat`, CATEGORIAS, 'Categoría…')}</div><div style="flex:1">${inp(`inicio.personal.${i}.cantidad`,'number','inputmode="numeric" placeholder="Núm."')}</div><button class="btn sm danger" style="flex:0" data-action="delPersonal" data-i="${i}">✕</button></div>`).join('')}
    <button class="btn sec sm" data-action="addPersonal">＋ Agregar categoría</button>
    <div class="muted" style="margin-top:8px">Total en sitio: <b>${totalPersonal(j)}</b> personas</div>
  </div>`;
}

const enProg = (k,j) => (j.fecha>=k.ini && j.fecha<=k.fin) ? 1 : 0;
function stepActividades(j){
  const ks = conceptosDe(j.contratoId);
  const subs = j.sustituciones || [];
  return `<div class="muted" style="margin-bottom:10px">Registra el avance del día de cada concepto trabajado (en % del concepto).</div>
  ${ks.slice().sort((x,y)=>(enProg(y,j)-enProg(x,j))).map(k=>{ const a=avanceConcepto(k); const hoyV = j.avances?.[k.id]?.hoy; const act = Number(hoyV)>0; return `<div class="concept ${act?'act':''}">
    <div class="row"><span class="clave">${esc(k.clave)} ${enProg(k,j)?'<span class="badge b-sending" style="margin-left:4px">Programado hoy</span>':''}</span><span class="muted" style="text-align:right">acumulado ${a}%</span></div>
    <div style="font-weight:600;margin:3px 0 8px">${esc(k.desc)} <span class="muted">(${k.cant.toLocaleString('es-MX')} ${esc(k.unidad)})</span></div>
    <div class="bar" style="margin-bottom:10px"><i style="width:${a}%"></i></div>
    <div class="row"><div style="flex:1"><input type="number" inputmode="decimal" min="0" max="${Math.max(0,100-a+(Number(hoyV)||0))}" step="0.5" placeholder="Avance hoy %" data-k="avances.${k.id}.hoy" value="${esc(hoyV??'')}"></div>
    <div style="flex:2"><input type="text" placeholder="Comentario (opcional)" data-k="avances.${k.id}.com" value="${esc(j.avances?.[k.id]?.com??'')}"></div></div>
  </div>`;}).join('')}
  <div class="card"><h3>Sustitución de actividad (solo esta jornada)</h3>
    <div class="muted" style="margin-bottom:8px">Si un concepto programado no se pudo ejecutar hoy (interferencia, suministro, etc.), regístralo aquí. El concepto original conserva su avance y se ejecutará después.</div>
    ${subs.map((s,i)=>`<div class="item"><button class="x" data-action="delSub" data-i="${i}">✕</button>
      <label style="margin-top:0">Concepto que no se ejecutó</label>
      <select data-k="sustituciones.${i}.conceptoId"><option value="">Selecciona…</option>${ks.map(k=>`<option value="${k.id}" ${s.conceptoId===k.id?'selected':''}>${esc(k.clave)} ${esc(k.desc)}</option>`).join('')}</select>
      <label>Motivo</label>${sel(`sustituciones.${i}.motivo`, ['Interferencia con planta','Falta de suministro','Clima','Falta de frente de trabajo','Equipo descompuesto','Otro'])}
      <label>Actividad que se ejecutó en su lugar</label>${inp(`sustituciones.${i}.nueva`,'text','placeholder="Describe la actividad"')}
    </div>`).join('')}
    <button class="btn sec sm" data-action="addSub">＋ Registrar sustitución</button>
  </div>`;
}

function stepFotos(j){
  const ks = conceptosDe(j.contratoId);
  const fs = j.fotos || [];
  return `<div class="card"><h3>Evidencia fotográfica</h3>
    <div class="muted" style="margin-bottom:10px">Toma fotos o elígelas de la galería. Se reducen de tamaño para ahorrar datos al enviarlas.</div>
    <label class="btn sec" style="text-transform:none;letter-spacing:0;font-size:15px;margin:0">📷 Agregar fotografías<input type="file" accept="image/*" capture="environment" multiple data-action="addFotos" style="display:none"></label>
  </div>
  ${fs.length?`<div class="photos">${fs.map((f,i)=>`<div class="ph"><img src="${f.data}" alt=""><div>
     <input type="text" placeholder="Descripción" data-k="fotos.${i}.pie" value="${esc(f.pie||'')}">
     <select data-k="fotos.${i}.conceptoId"><option value="">Concepto…</option>${ks.map(k=>`<option value="${k.id}" ${f.conceptoId===k.id?'selected':''}>${esc(k.clave)} ${esc(k.desc)}</option>`).join('')}</select>
     <button class="btn danger sm" style="width:100%" data-action="delFoto" data-i="${i}">Quitar</button></div></div>`).join('')}</div>`
   :`<div class="empty">Aún no hay fotografías en esta jornada.</div>`}`;
}

function stepIncidencias(j){
  const xs = j.incidencias || [];
  return `${xs.map((x,i)=>`<div class="item"><button class="x" data-action="delInc" data-i="${i}">✕</button>
      <label style="margin-top:0">Tipo</label>${sel(`incidencias.${i}.tipo`, TIPOS_INC)}
      <label>Severidad</label>${sel(`incidencias.${i}.sev`, ['Baja','Media','Alta'])}
      <label>Descripción</label>${txt(`incidencias.${i}.desc`,'¿Qué pasó? ¿Dónde? ¿A quién afecta?')}
      <label class="check" style="text-transform:none;letter-spacing:0;font-size:14.5px;color:var(--text);font-weight:500;margin-top:6px"><input type="checkbox" data-k="incidencias.${i}.escalar" ${x.escalar?'checked':''}> Escalar a PMO (tema escalable)</label>
    </div>`).join('')}
  ${xs.length?'':'<div class="card"><div class="empty">Sin incidencias registradas. Si no hubo, continúa al siguiente paso.</div></div>'}
  <button class="btn sec" data-action="addInc">＋ Registrar incidencia</button>`;
}

function stepAcuerdos(j){
  const xs = j.acuerdos || [];
  const prev = acuerdosAbiertos(j.contratoId).filter(a=>a.jornadaId!==j.id);
  return `${prev.length?`<div class="card"><h3>Acuerdos anteriores sin cumplir</h3><div class="list">${prev.map(a=>`<div><div style="font-weight:600">${esc(a.desc)}</div><div class="row" style="margin-top:6px"><div class="muted">${esc(a.resp||'—')} · ${fmtFecha(a.fecha)||'—'}</div><button class="btn sm sec" style="flex:0" data-action="cumplir" data-j="${a.jornadaId}" data-a="${a.id}">Cumplido</button></div></div>`).join('')}</div></div>`:''}
  ${xs.map((a,i)=>`<div class="item"><button class="x" data-action="delAc" data-i="${i}">✕</button>
      <label style="margin-top:0">Acuerdo</label>${txt(`acuerdos.${i}.desc`,'Ej. El contratista reforzará la cuadrilla de fierreros a partir del lunes')}
      <div class="row"><div><label>Responsable</label>${inp(`acuerdos.${i}.resp`,'text','placeholder="Nombre / empresa"')}</div><div><label>Fecha compromiso</label>${inp(`acuerdos.${i}.fecha`,'date')}</div></div>
    </div>`).join('')}
  ${xs.length?'':'<div class="card"><div class="empty">Sin acuerdos nuevos en esta jornada.</div></div>'}
  <button class="btn sec" data-action="addAc">＋ Registrar acuerdo de campo</button>`;
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
  return `<div class="card"><h3>Nota de bitácora</h3>
    <div class="muted" style="margin-bottom:10px">Genera un borrador con lo capturado y edítalo antes de cerrar.</div>
    <button class="btn sec" data-action="genNota">${j.nota?'Volver a generar borrador':'Generar borrador'}</button>
    <label>Texto de la nota</label>
    <textarea data-k="nota" style="min-height:260px">${esc(j.nota||'')}</textarea>
  </div>`;
}

function stepCierre(j){
  return `<div class="card"><h3>Cierre</h3>
    <label>Hora de término</label><div class="auto">${esc(ahora())} h <span class="tag">se registra al cerrar</span></div>
    <label>Observaciones finales</label>${txt('cierre.obs','Comentarios generales de la jornada (opcional)')}
  </div>
  <div class="card"><h3>Resumen de la jornada</h3>${resumenHTML(j)}</div>
  <div class="muted" style="text-align:center;margin:6px 0">Al cerrar, la jornada queda guardada en el teléfono y se envía en cuanto haya señal.</div>`;
}

function vWizard(){
  const j = J(); if(!j){ view='home'; return vHome(); }
  const fns = [stepPrep, stepInicio, stepActividades, stepFotos, stepIncidencias, stepAcuerdos, stepNota, stepCierre];
  return `<div class="steps">${STEPS.map((_,i)=>`<i class="${i<step?'done':i===step?'cur':''}"></i>`).join('')}</div>
  <div class="stephead"><h2>${STEPS[step]}</h2><span class="muted">Paso ${step+1} de ${STEPS.length}</span></div>
  <div style="display:flex;gap:8px;margin-bottom:10px"><button class="btn ghost sm" data-action="wizPlanos">🗺 Planos</button><button class="btn ghost sm" data-action="wizFormatos">📄 Formatos</button></div>
  ${fns[step](j)}`;
}

/* ===================== RENDER ===================== */
const ICON = {
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
  prog:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h10M4 12h16M4 18h7"/></svg>',
  plano:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2z"/><path d="M9 3v16M15 5v16"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
  list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>'
};
function render(){
  header();
  const app = $('#app'), foot = $('#foot');
  const y = window.scrollY;
  if(view==='wizard'){
    app.innerHTML = vWizard();
    foot.innerHTML = `<div class="wizfoot"><div>
      <button class="btn ghost" data-action="${step===0?'exitWizard':'prev'}">${step===0?'Salir':'← Atrás'}</button>
      <button class="btn" data-action="${step===STEPS.length-1?'close':'next'}">${step===STEPS.length-1?'Cerrar jornada':'Siguiente →'}</button>
    </div></div>`;
  } else {
    app.innerHTML = view==='planos'?vPlanos(): view==='formatos'?vFormatos(): view==='programa'?vPrograma(): view==='jornadas'?vJornadas(): view==='detalle'?vDetalle(): vHome();
    const t = view==='detalle'?'jornadas':view;
    foot.innerHTML = `<nav class="tabs"><div>
      <button class="${t==='home'?'on':''}" data-action="go" data-v="home">${ICON.home}Inicio</button>
      <button class="${t==='programa'?'on':''}" data-action="go" data-v="programa">${ICON.prog}Programa</button>
      <button class="${t==='jornadas'?'on':''}" data-action="go" data-v="jornadas">${ICON.list}Jornadas</button>
      <button class="${t==='planos'?'on':''}" data-action="go" data-v="planos">${ICON.plano}Planos</button>
      <button class="${t==='formatos'?'on':''}" data-action="go" data-v="formatos">${ICON.doc}Formatos</button>
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
function obtenerClima(j){
  if(!j || climaBusy) return;
  climaBusy = true; climaError = ''; if(view==='wizard') renderKeep();
  const fin = (err)=>{ climaBusy=false; if(err) climaError=err; persist(); if(view==='wizard' && J()===j) renderKeep(); };
  if(!online()) return fin('sin señal');
  if(!('geolocation' in navigator)) return fin('el navegador no da la ubicación');
  const t = setTimeout(()=>fin('tiempo de espera agotado'), 15000);
  try{
    navigator.geolocation.getCurrentPosition(async pos=>{
      try{
        const {latitude:la, longitude:lo} = pos.coords;
        const r = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${la.toFixed(4)}&longitude=${lo.toFixed(4)}&current=temperature_2m,weather_code&timezone=auto`);
        const d = await r.json();
        clearTimeout(t);
        j.inicio.clima = WMO(d.current.weather_code);
        j.inicio.temp = Math.round(d.current.temperature_2m);
        j.inicio.climaFuente = 'auto'; j.inicio.climaHora = ahora();
        j.inicio.lat = +la.toFixed(5); j.inicio.lon = +lo.toFixed(5);
        fin();
      }catch(e){ clearTimeout(t); fin('no se pudo consultar el servicio de clima'); }
    }, ()=>{ clearTimeout(t); fin('sin permiso de ubicación'); }, {timeout:12000, maximumAge:600000});
  }catch(e){ clearTimeout(t); fin('ubicación no disponible'); }
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
function comprimir(file){
  return new Promise((res)=>{
    const r = new FileReader();
    r.onload = ()=>{
      const img = new Image();
      img.onload = ()=>{
        const max=1280; let w=img.width, h=img.height;
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
    if(k.startsWith('inicio.personal')) renderKeep();
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
    case 'logout': Auth.logout(); spPrueba=''; render(); toast('Sesión cerrada.'); break;
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
  if(!Auth.signedIn()) return `<div class="card"><h3>Cuenta</h3><div class="muted" style="margin-bottom:10px">Inicia sesión con tu cuenta de Microsoft de GEC.</div>
    <button class="btn" data-action="login">Iniciar sesión con Microsoft</button>
    <div class="muted" style="margin-top:8px;font-size:12px">Dirección de esta app: ${esc(Auth.redirectUri())}</div></div>`;
  const u = Auth.user() || {};
  return `<div class="card"><h3>Cuenta</h3>
    <div style="font-weight:600">${esc(u.displayName||'Conectado')}</div><div class="muted">${esc(u.mail||u.userPrincipalName||'')}</div>
    ${spPrueba?`<div class="muted" style="margin-top:8px">${esc(spPrueba)}</div>`:''}
    <div class="row" style="margin-top:10px"><button class="btn sec sm" data-action="probarSP">Probar SharePoint</button><button class="btn ghost sm" data-action="logout">Cerrar sesión</button></div></div>`;
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
    S.formatos = S.formatos || []; S.frente = S.frente || ''; S.planosOffline = S.planosOffline || {}; S.programas = S.programas || {};
    [...S.jornadas, ...S.formatos].forEach(j=>{ if(j.estado==='enviando') j.estado='pendiente'; });
  }
  if(!contrato(S.contratoId)) S.contratoId='c1';
  render();
  if(Auth.signedIn()) Auth.me().then(u=>{ if(u){ if(!S.supervisor) { S.supervisor=u.displayName||''; persist(); } render(); } }).catch(()=>{});
  if(!Store.db) toast('Este navegador no permite guardar datos: la captura se perderá al cerrar la página.');
  setTimeout(()=>sync(),800);
})();
