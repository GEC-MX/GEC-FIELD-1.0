/* GEC FIELD — Reporte diario en PDF para entrega al cliente.
   Genera el PDF directamente en el teléfono (sin internet y sin librerías externas). */
const PDF = (() => {
  const FW = {R:[278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584,761,556,556,222,556,333,1000,556,556,333,1000,667,333,1000,556,611,556,556,222,222,333,333,350,556,1000,333,1000,500,333,944,556,500,667,278,333,556,556,556,556,260,556,333,737,370,556,584,333,737,333,400,584,333,333,333,556,537,278,333,333,365,556,834,834,834,611,667,667,667,667,667,667,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,500,556,556,556,556,278,278,278,278,556,556,556,556,556,556,556,584,611,556,556,556,556,500,556,500],B:[278,333,474,556,556,889,722,238,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,333,333,584,584,584,611,975,722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611,333,278,333,584,556,333,556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500,389,280,389,584,761,556,556,278,556,500,1000,556,556,333,1000,667,333,1000,556,611,556,556,278,278,500,500,350,556,1000,333,1000,556,333,944,556,500,667,278,333,556,556,556,556,280,556,333,737,370,556,584,333,737,333,400,584,333,333,333,611,556,278,333,333,365,556,834,834,834,611,722,722,722,722,722,722,1000,722,667,667,667,667,278,278,278,278,722,722,778,778,778,778,778,584,778,722,722,722,722,667,667,611,556,556,556,556,556,556,889,556,556,556,556,556,278,278,278,278,611,611,611,611,611,611,611,584,611,611,611,611,611,556,611,556]};
  const CP = {0x20AC:128,0x201A:130,0x192:131,0x201E:132,0x2026:133,0x2020:134,0x2021:135,0x2C6:136,0x2030:137,0x160:138,0x2039:139,0x152:140,0x17D:142,
    0x2018:145,0x2019:146,0x201C:147,0x201D:148,0x2022:149,0x2013:150,0x2014:151,0x2DC:152,0x2122:153,0x161:154,0x203A:155,0x153:156,0x17E:158,0x178:159};
  // Texto a bytes Windows-1252 (acentos y ñ del español)
  function enc(s) {
    let o = '';
    for (const ch of String(s ?? '')) {
      const c = ch.codePointAt(0);
      if (c === 10 || c === 13 || c === 9) o += ' ';
      else if (c < 32) continue;
      else if (c < 128 || (c >= 160 && c < 256)) o += String.fromCharCode(c);
      else if (CP[c]) o += String.fromCharCode(CP[c]);
      else if (c === 0x2713 || c === 0x2714) o += 'x';
      else o += '?';
    }
    return o;
  }
  const esc = s => s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  function width(s, size, bold) {
    const t = enc(s), w = FW[bold ? 'B' : 'R']; let n = 0;
    for (let i = 0; i < t.length; i++) { const c = t.charCodeAt(i); n += w[c - 32] || 556; }
    return n * size / 1000;
  }
  function wrap(s, maxW, size, bold) {
    const out = [];
    String(s ?? '').split(/\n/).forEach(par => {
      const words = par.split(/ +/); let line = '';
      words.forEach(wd => {
        const t = line ? line + ' ' + wd : wd;
        if (width(t, size, bold) <= maxW || !line) {
          if (!line && width(wd, size, bold) > maxW) { // palabra muy larga: se corta
            let p = ''; for (const ch of wd) { if (width(p + ch, size, bold) > maxW) { out.push(p); p = ''; } p += ch; } line = p;
          } else line = t;
        } else { out.push(line); line = wd; }
      });
      out.push(line);
    });
    return out;
  }
  const rgb = h => { const n = parseInt(h.slice(1), 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255].map(v => +v.toFixed(3)).join(' '); };
  function jpegInfo(bin) {
    let i = 2;
    while (i < bin.length) {
      if (bin.charCodeAt(i) !== 0xFF) { i++; continue; }
      const m = bin.charCodeAt(i + 1), len = bin.charCodeAt(i + 2) * 256 + bin.charCodeAt(i + 3);
      if (m >= 0xC0 && m <= 0xCF && m !== 0xC4 && m !== 0xC8 && m !== 0xCC)
        return { h: bin.charCodeAt(i + 5) * 256 + bin.charCodeAt(i + 6), w: bin.charCodeAt(i + 7) * 256 + bin.charCodeAt(i + 8), c: bin.charCodeAt(i + 9) };
      i += 2 + len;
    }
    return null;
  }
  class Doc {
    constructor() { this.W = 612; this.H = 792; this.pages = []; this.imgs = []; }
    page() { this.cur = []; this.pages.push(this.cur); return this.pages.length; }
    on(n) { this.cur = this.pages[n - 1]; }
    Y(y) { return (this.H - y).toFixed(2); }
    text(x, y, s, o = {}) {
      const size = o.size || 9, b = !!o.bold, t = enc(s);
      let xx = x; const w = width(s, size, b);
      if (o.align === 'center') xx = x - w / 2; else if (o.align === 'right') xx = x - w;
      this.cur.push(`BT /${b ? 'F2' : 'F1'} ${size} Tf ${rgb(o.color || '#1B2533')} rg ${xx.toFixed(2)} ${this.Y(y)} Td (${esc(t)}) Tj ET`);
      return w;
    }
    rect(x, y, w, h, o = {}) {
      const p = [];
      if (o.fill) p.push(`${rgb(o.fill)} rg`);
      if (o.stroke) p.push(`${rgb(o.stroke)} RG ${o.lw || 0.6} w`);
      if (o.dash) p.push('[3 2] 0 d');
      p.push(`${x.toFixed(2)} ${(this.H - y - h).toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re ${o.fill && o.stroke ? 'B' : o.fill ? 'f' : 'S'}`);
      if (o.dash) p.push('[] 0 d');
      this.cur.push('q ' + p.join(' ') + ' Q');
    }
    line(x1, y1, x2, y2, color = '#D9DFE7', lw = 0.6) {
      this.cur.push(`q ${rgb(color)} RG ${lw} w 1 J ${x1.toFixed(2)} ${this.Y(y1)} m ${x2.toFixed(2)} ${this.Y(y2)} l S Q`);
    }
    fillPoly(pts, color) {
      this.cur.push(`q ${rgb(color)} rg ${pts.map((p, i) => `${p[0].toFixed(2)} ${this.Y(p[1])} ${i ? 'l' : 'm'}`).join(' ')} h f Q`);
    }
    poly(pts, color, lw = 1.4) {
      this.cur.push(`q ${rgb(color)} RG ${lw} w 1 J 1 j ${pts.map((p, i) => `${p[0].toFixed(2)} ${this.Y(p[1])} ${i ? 'l' : 'm'}`).join(' ')} S Q`);
    }
    image(dataURL, x, y, w, h) {
      const b64 = String(dataURL).split(',')[1]; if (!b64) return false;
      const bin = atob(b64), info = jpegInfo(bin); if (!info) return false;
      const id = this.imgs.length + 1; this.imgs.push({ bin, ...info });
      // ajusta la foto dentro del recuadro conservando proporción
      const r = Math.min(w / info.w, h / info.h), iw = info.w * r, ih = info.h * r;
      const ix = x + (w - iw) / 2, iy = y + (h - ih) / 2;
      this.cur.push(`q ${iw.toFixed(2)} 0 0 ${ih.toFixed(2)} ${ix.toFixed(2)} ${(this.H - iy - ih).toFixed(2)} cm /Im${id} Do Q`);
      return true;
    }
    blob() {
      const objs = []; const add = s => { objs.push(s); return objs.length; };
      add('<< /Type /Catalog /Pages 2 0 R >>');
      add(null); // páginas, se llena al final
      add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
      add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
      const imIds = this.imgs.map(im => add(`<< /Type /XObject /Subtype /Image /Width ${im.w} /Height ${im.h} /ColorSpace /${im.c === 1 ? 'DeviceGray' : im.c === 4 ? 'DeviceCMYK' : 'DeviceRGB'} /BitsPerComponent 8 /Filter /DCTDecode /Length ${im.bin.length} >>\nstream\n${im.bin}\nendstream`));
      const xo = imIds.map((id, i) => `/Im${i + 1} ${id} 0 R`).join(' ');
      const kids = [];
      this.pages.forEach(pg => {
        const c = pg.join('\n');
        const cid = add(`<< /Length ${c.length} >>\nstream\n${c}\nendstream`);
        kids.push(add(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${this.W} ${this.H}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> /XObject << ${xo} >> >> /Contents ${cid} 0 R >>`));
      });
      objs[1] = `<< /Type /Pages /Kids [${kids.map(k => k + ' 0 R').join(' ')}] /Count ${kids.length} >>`;
      let out = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n'; const off = [];
      objs.forEach((o, i) => { off.push(out.length); out += `${i + 1} 0 obj\n${o}\nendobj\n`; });
      const xref = out.length;
      out += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n${off.map(o => String(o).padStart(10, '0') + ' 00000 n \n').join('')}`;
      out += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R /Info << /Producer (GEC FIELD) >> >>\nstartxref\n${xref}\n%%EOF`;
      const bytes = new Uint8Array(out.length);
      for (let i = 0; i < out.length; i++) bytes[i] = out.charCodeAt(i) & 255;
      return new Blob([bytes], { type: 'application/pdf' });
    }
  }
  return { Doc, width, wrap };
})();

/* ---------- Reporte diario de supervisión ---------- */
const REPORTE_CODIGO = 'RDO-GEC-001';
function reporteJornadaPDF(j) {
  const C = { navy:'#0B2545', blue:'#13315C', acc:'#1D6FB8', sky:'#E3EEF8', gray:'#5B6878', lgray:'#8D99AE', line:'#D9DFE7', bg:'#F1F4F8', ok:'#1E8E5A', warn:'#B07800', bad:'#C0392B' };
  const c = contrato(j.contratoId), p = proyecto(c.proyectoId), ks = conceptosDe(c.id);
  const d = new PDF.Doc(), M = 36, CW = 540, TOP = 166, BOTTOM = 742;
  let y = TOP;
  const nuevaHoja = () => { d.page(); y = TOP; };
  const espacio = h => { if (y + h > BOTTOM) nuevaHoja(); };
  const i0 = j.inicio || {}, cie = j.cierre || {};
  const folio = j.folio || `RDO-${c.numero}`;
  const ff = f => f ? fmtFecha(f) : '—';

  // Título de sección
  function seccion(t) {
    espacio(78);
    d.rect(M, y, CW, 18, { fill: C.sky }); d.rect(M, y, 3.5, 18, { fill: C.navy });
    d.text(M + 10, y + 12.5, t.toUpperCase(), { size: 9, bold: true, color: C.navy });
    y += 26;
  }
  // Tabla con encabezado azul marino; se repite el encabezado al cambiar de hoja
  function tabla(cols, filas, o = {}) {
    const fs = o.size || 8, lh = fs + 2.6;
    const head = () => {
      d.rect(M, y, CW, 16, { fill: C.blue }); let x = M;
      cols.forEach(cl => { const tx = cl.align === 'right' ? x + cl.w - 5 : cl.align === 'center' ? x + cl.w / 2 : x + 5; d.text(tx, y + 11, cl.t, { size: 7.5, bold: true, color: '#FFFFFF', align: cl.align }); x += cl.w; });
      y += 16;
    };
    espacio(34); head();
    filas.forEach((f, ri) => {
      const ls = cols.map((cl, i) => PDF.wrap(f[i] ?? '', cl.w - 10, fs, cl.bold));
      const h = Math.max(...ls.map(l => l.length)) * lh + 7;
      if (y + h > BOTTOM) { nuevaHoja(); head(); }
      if (ri % 2) d.rect(M, y, CW, h, { fill: '#F6F8FB' });
      let x = M;
      cols.forEach((cl, i) => {
        const col = (o.color && o.color(f, i)) || '#1B2533';
        ls[i].forEach((ln, k) => { const tx = cl.align === 'right' ? x + cl.w - 5 : cl.align === 'center' ? x + cl.w / 2 : x + 5; d.text(tx, y + 10 + k * lh, ln, { size: fs, bold: cl.bold, color: col, align: cl.align }); });
        x += cl.w;
      });
      y += h; d.line(M, y, M + CW, y, C.line, 0.5);
    });
    y += 12;
  }
  function parrafo(t, o = {}) {
    const fs = o.size || 9, lh = fs + 3.4;
    PDF.wrap(t, CW - (o.indent || 0), fs).forEach(ln => { espacio(lh); d.text(M + (o.indent || 0), y + fs, ln, { size: fs, color: o.color || '#1B2533' }); y += lh; });
    y += 6;
  }
  function check(x, yy, ok) {
    if (ok) { d.rect(x, yy, 11, 11, { fill: C.ok }); d.poly([[x + 2.5, yy + 5.8], [x + 4.8, yy + 8.2], [x + 8.7, yy + 3]], '#FFFFFF', 1.5); }
    else { d.rect(x, yy, 11, 11, { stroke: C.lgray, lw: 0.8 }); d.line(x + 3, yy + 3, x + 8, yy + 8, C.bad, 1.2); d.line(x + 8, yy + 3, x + 3, yy + 8, C.bad, 1.2); }
  }

  nuevaHoja();
  // ---- 1. Datos generales
  seccion('1. Datos generales');
  const w2 = CW / 2, dat = [
    ['Planta', `${p.planta} — ${p.nombre}`], ['Contratista', c.contratista],
    ['Contrato', `${c.numero} — ${c.nombre}`], ['Frente de trabajo', j.frente || '—'],
    ['Horario', `${i0.horaInicio || '—'} a ${cie.horaFin || '—'} h (${horasJornada(j)} h)`], ['Clima', `${i0.clima || '—'}${i0.temp !== '' && i0.temp != null ? ` · ${i0.temp} °C` : ''}${i0.climaFuente === 'auto' ? ' (automático)' : ''}`],
    ['Supervisor GEC', S.supervisor || '—'], ['Fecha de la jornada', ff(j.fecha)]
  ];
  for (let i = 0; i < dat.length; i += 2) {
    espacio(26);
    [0, 1].forEach(k => { const it = dat[i + k]; if (!it) return; const x = M + k * w2;
      d.text(x, y + 7, it[0].toUpperCase(), { size: 6.5, bold: true, color: C.lgray });
      d.text(x, y + 19, PDF.wrap(it[1], w2 - 12, 9.5, true)[0], { size: 9.5, bold: true, color: C.navy }); });
    y += 26;
  }
  y += 4;

  // ---- 2. Indicadores
  seccion('2. Indicadores de la jornada');
  const hh = Math.round(totalPersonal(j) * horasJornada(j) * 10) / 10;
  const kpi = [[totalPersonal(j), 'Personal en sitio', C.acc], [hh, 'Horas-hombre', C.acc], [Object.values(j.avances || {}).filter(a => Number(a.hoy) > 0).length, 'Conceptos con avance', C.acc],
    [(j.fotos || []).length, 'Fotografías', C.acc], [(j.incidencias || []).length, 'Incidencias', (j.incidencias || []).length ? C.bad : C.ok], [(j.acuerdos || []).length, 'Acuerdos de campo', C.acc]];
  espacio(54); const kw = (CW - 5 * 6) / 6;
  kpi.forEach(([v, t, col], i) => { const x = M + i * (kw + 6);
    d.rect(x, y, kw, 48, { fill: C.bg }); d.rect(x, y, kw, 3, { fill: col });
    d.text(x + kw / 2, y + 27, String(v), { size: 17, bold: true, color: C.navy, align: 'center' });
    d.text(x + kw / 2, y + 40, t, { size: 6.8, color: C.gray, align: 'center' }); });
  y += 62;

  // Avance del contrato: ejecutado vs programado
  const real = avanceContrato(c.id), tot = ks.reduce((s, k) => s + k.dur, 0);
  const prog = tot ? Math.round(ks.reduce((s, k) => s + k.dur * programadoAl(k, j.fecha), 0) / tot * 10) / 10 : 0;
  const dif = Math.round((real - prog) * 10) / 10;
  espacio(60);
  d.text(M, y + 8, 'AVANCE DEL CONTRATO (ponderado por duración de cada concepto)', { size: 7, bold: true, color: C.lgray });
  y += 14;
  [['Programado', prog, '#9FB9D8'], ['Ejecutado', real, dif < -5 ? C.bad : C.acc]].forEach(([t, v, col]) => {
    d.text(M, y + 9, t, { size: 8.5, color: C.gray });
    d.rect(M + 70, y + 1, 400, 10, { fill: '#E4E9F0' }); d.rect(M + 70, y + 1, Math.max(0.5, 400 * Math.min(v, 100) / 100), 10, { fill: col });
    d.text(M + CW, y + 9.5, `${v}%`, { size: 9.5, bold: true, color: C.navy, align: 'right' }); y += 16;
  });
  d.text(M + 70, y + 9, `${dif >= 0 ? 'Adelantado' : 'Atrasado'} ${Math.abs(dif)}% respecto al programa al ${ff(j.fecha)}.`, { size: 8.5, bold: true, color: dif < -5 ? C.bad : dif < 0 ? C.warn : C.ok });
  y += 24;

  // ---- 3. Seguridad
  seccion('3. Seguridad — lista de verificación');
  const chk = [['epp', 'Personal con EPP completo'], ['permiso', 'Permisos de trabajo vigentes'], ['platica', 'Plática de seguridad impartida'], ['area', 'Área de trabajo delimitada y señalizada'], ['vpm', 'Reunión VPM']];
  for (let i = 0; i < chk.length; i += 2) {
    espacio(18);
    [0, 1].forEach(k => { const it = chk[i + k]; if (!it) return; const x = M + k * w2; const ok = !!(j.prep || {})[it[0]];
      check(x, y, ok); d.text(x + 17, y + 8.8, it[1], { size: 9 }); d.text(x + w2 - 14, y + 8.8, ok ? 'Sí' : 'No', { size: 8, bold: true, color: ok ? C.ok : C.bad, align: 'right' }); });
    y += 18;
  }
  y += 8;

  // ---- 4. Fuerza de trabajo
  seccion('4. Fuerza de trabajo del contratista');
  const per = (i0.personal || []).filter(x => Number(x.cantidad) > 0);
  if (per.length) tabla([{ t: 'Categoría', w: 380 }, { t: 'Personas', w: 160, align: 'right', bold: true }],
    [...per.map(x => [x.cat || 'Sin categoría', String(x.cantidad)]), ['TOTAL EN SITIO', String(totalPersonal(j))]]);
  else parrafo('Sin personal registrado.', { color: C.gray });

  // ---- 5. Actividades
  seccion('5. Actividades ejecutadas y avance');
  const acts = ks.filter(k => Number(j.avances?.[k.id]?.hoy) > 0);
  if (acts.length) tabla([{ t: 'Clave', w: 46, bold: true }, { t: 'Concepto', w: 196 }, { t: 'Cantidad', w: 70, align: 'right' }, { t: 'Avance día', w: 56, align: 'right', bold: true }, { t: 'Acumulado', w: 58, align: 'right' }, { t: 'Comentario', w: 114 }],
    acts.map(k => [k.clave, k.desc, `${k.cant.toLocaleString('es-MX')} ${k.unidad}`, `+${j.avances[k.id].hoy}%`, `${avanceConcepto(k)}%`, j.avances[k.id].com || '']));
  else parrafo('No se registró avance en conceptos del programa.', { color: C.gray });
  const subs = (j.sustituciones || []).filter(s => s.conceptoId);
  if (subs.length) {
    espacio(30); d.text(M, y + 7, 'SUSTITUCIONES DE LA JORNADA', { size: 7, bold: true, color: C.lgray }); y += 13;
    tabla([{ t: 'Concepto no ejecutado', w: 190 }, { t: 'Motivo', w: 120 }, { t: 'Actividad ejecutada en su lugar', w: 230 }],
      subs.map(s => { const k = ks.find(x => x.id === s.conceptoId); return [k ? `${k.clave} ${k.desc}` : '—', s.motivo || '—', s.nueva || '—']; }));
  }

  // ---- 6. Incidencias
  seccion('6. Incidencias');
  const inc = (j.incidencias || []).filter(x => x.tipo || x.desc);
  if (inc.length) tabla([{ t: '#', w: 22, align: 'center' }, { t: 'Tipo', w: 110, bold: true }, { t: 'Severidad', w: 62, align: 'center', bold: true }, { t: 'Descripción', w: 286 }, { t: 'Escala a PMO', w: 60, align: 'center' }],
    inc.map((x, i) => [String(i + 1), x.tipo || '—', x.sev || '—', x.desc || '', x.escalar ? 'Sí' : 'No']),
    { color: (f, i) => i === 2 ? ({ Alta: C.bad, Media: C.warn, Baja: C.ok })[f[2]] : null });
  else parrafo('Sin incidencias en la jornada.', { color: C.ok });

  // ---- 7. Acuerdos
  seccion('7. Acuerdos de campo');
  const ac = (j.acuerdos || []).filter(a => a.desc);
  if (ac.length) tabla([{ t: '#', w: 22, align: 'center' }, { t: 'Acuerdo', w: 300 }, { t: 'Responsable', w: 130 }, { t: 'Compromiso', w: 88, align: 'center' }],
    ac.map((a, i) => [String(i + 1), a.desc, a.resp || '—', ff(a.fecha)]));
  else parrafo('Sin acuerdos nuevos en la jornada.', { color: C.gray });

  // ---- 8. Nota de bitácora
  seccion('8. Nota de bitácora');
  parrafo(j.nota || generarNota(j), { size: 8.8 });
  if (cie.obs) { espacio(20); d.text(M, y + 7, 'OBSERVACIONES FINALES', { size: 7, bold: true, color: C.lgray }); y += 13; parrafo(cie.obs); }

  // ---- 9. Evidencia fotográfica
  const fotos = (j.fotos || []).filter(f => f.data);
  if (fotos.length) {
    seccion('9. Evidencia fotográfica');
    const fw = (CW - 14) / 2, fh = fw * 0.66;
    for (let i = 0; i < fotos.length; i += 2) {
      espacio(fh + 36);
      [0, 1].forEach(k => { const f = fotos[i + k]; if (!f) return; const x = M + k * (fw + 14);
        d.rect(x, y, fw, fh, { fill: C.bg }); d.image(f.data, x, y, fw, fh); d.rect(x, y, fw, fh, { stroke: C.line });
        const kc = ks.find(z => z.id === f.conceptoId);
        d.text(x, y + fh + 11, PDF.wrap(`Foto ${i + k + 1}${f.nombre ? ` · ${f.nombre}` : ''}${kc ? ` · ${kc.clave} ${kc.desc}` : ''}`, fw, 7.5, true)[0], { size: 7.5, bold: true, color: C.navy });
        d.text(x, y + fh + 22, PDF.wrap(f.pie || 'Sin descripción', fw, 7.5)[0], { size: 7.5, color: C.gray }); });
      y += fh + 34;
    }
  }

  // ---- Firmas
  espacio(96); y = Math.max(y + 10, BOTTOM - 86);
  d.text(M, y, 'FIRMAS DE CONFORMIDAD', { size: 7, bold: true, color: C.lgray });
  const fsw = (CW - 2 * 24) / 3;
  [['Supervisor GEC', S.supervisor || ''], ['Residente del contratista', c.contratista], [`Representante de ${p.cliente}`, '']].forEach(([t, n], i) => {
    const x = M + i * (fsw + 24);
    d.line(x, y + 50, x + fsw, y + 50, C.navy, 0.8);
    d.text(x + fsw / 2, y + 61, t, { size: 8, bold: true, color: C.navy, align: 'center' });
    if (n) d.text(x + fsw / 2, y + 71, PDF.wrap(n, fsw, 7.5)[0], { size: 7.5, color: C.gray, align: 'center' });
  });

  // ---- Encabezado GEC (SB-ERM-GEC-001) y pie en todas las hojas
  const N = d.pages.length, gen = new Date();
  const genTxt = `${gen.toLocaleDateString('es-MX')} ${gen.toTimeString().slice(0, 5)}`;
  for (let n = 1; n <= N; n++) {
    d.on(n);
    // fila de logos y título
    d.rect(M, 30, CW, 56, { stroke: C.line });
    d.rect(M + 6, 36, 110, 44, { stroke: '#C5CEDA', dash: true });
    d.text(M + 61, 61, 'LOGO DEL CLIENTE', { size: 6.5, color: '#AAB4C2', align: 'center', bold: true });
    d.text(M + CW / 2, 53, 'REPORTE DIARIO DE SUPERVISIÓN DE OBRA', { size: 12.5, bold: true, color: C.navy, align: 'center' });
    d.text(M + CW / 2, 67, `${REPORTE_CODIGO} · Rev. 0`, { size: 8, color: C.gray, align: 'center' });
    const lx = M + CW - 61;
    // logo oficial GEC (mismo trazo que icons/gec-logo.svg)
    { const k = 44 / 445, ox = lx - 925 * k / 2 - 40 * k, oy = 36 - 40 * k, P = a => a.map(([x, y]) => [ox + x * k, oy + y * k]);
      d.fillPoly(P([[55, 470], [503, 53], [950, 468], [506, 150]]), '#1E1E1E');
      [[[427, 345], [427, 325], [392, 325], [392, 467], [427, 467], [427, 402], [410, 402]],
       [[523, 325], [486, 325], [486, 467], [523, 467]], [[486, 396], [516, 396]],
       [[617, 345], [617, 325], [579, 325], [579, 467], [617, 467], [617, 447]]]
        .forEach(t => d.poly(P(t), '#1E1E1E', 1)); }
    // bloque gris de datos
    d.rect(M, 90, CW, 42, { fill: '#EEF1F5' });
    const cel = [['Contrato', c.numero], ['Fecha', ff(j.fecha)], ['Hora', `${i0.horaInicio || '—'} – ${cie.horaFin || '—'}`], ['Folio', folio],
      ['Proyecto', p.nombre], ['Cliente', p.cliente], ['Planta', p.planta], ['Hojas', `${n} de ${N}`]];
    const cw4 = CW / 4;
    cel.forEach(([t, v], i) => { const x = M + (i % 4) * cw4 + 8, yy = 90 + Math.floor(i / 4) * 21;
      d.text(x, yy + 8.5, t.toUpperCase(), { size: 5.8, bold: true, color: C.lgray });
      d.text(x, yy + 18, PDF.wrap(v, cw4 - 14, 8.2, true)[0], { size: 8.2, bold: true, color: C.navy }); });
    // barra Emisor / Receptor
    d.rect(M, 136, CW, 18, { fill: C.navy });
    d.text(M + 8, 148, `EMISOR: GEC · Supervisión técnica${S.supervisor ? ' — ' + S.supervisor : ''}`, { size: 7.5, bold: true, color: '#FFFFFF' });
    d.text(M + CW - 8, 148, `RECEPTOR: ${p.cliente} · ${p.planta}`, { size: 7.5, bold: true, color: '#FFFFFF', align: 'right' });
    // pie
    d.line(M, 756, M + CW, 756, C.line);
    d.text(M, 767, `Generado con GEC FIELD el ${genTxt} · ${folio}`, { size: 6.8, color: C.lgray });
    d.text(M + CW, 767, `Página ${n} de ${N}`, { size: 6.8, bold: true, color: C.gray, align: 'right' });
  }
  return { blob: d.blob(), nombre: `${folio}_${j.fecha}.pdf`.replace(/[^\w.\-]+/g, '_') };
}
