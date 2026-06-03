// ─── DATA ─────────────────────────────────────────────────────────────────────
let parcelas = [
  {
    id: 1, nombre: 'Parcela Norte A',
    ubicacion: 'Sahagún, León',
    lat: 42.371, lng: -5.030,
    superficie: 2.5, variedad: 'Agria',
    agricultor: 'Manuel García', proveedor: 'Semillas Castilla S.L.', siembra: '15/03/2026', finalizada: false,
    seguimientos: [
      { id: 1, fecha: '20/03/2026', estado: 'Brotación', comentario: 'Se aprecian los primeros brotes en la mitad norte. Suelo con buena humedad.', fotos: [] },
      { id: 2, fecha: '05/04/2026', estado: 'Crecimiento', comentario: 'Plantas de 15 cm aprox. Primer abonado. Sin incidencias.', fotos: ['demo'] },
      { id: 3, fecha: '28/04/2026', estado: 'Floración', comentario: 'Floración uniforme. Tratamiento preventivo contra mildiu.', fotos: ['demo','demo'] },
    ]
  },
  {
    id: 2, nombre: 'Finca El Pinar',
    ubicacion: 'Cistierna, León',
    lat: 42.800, lng: -5.131,
    superficie: 1.8, variedad: 'Jazzy',
    agricultor: 'Rosa Fernández', proveedor: 'AgroSemillas Norte', siembra: '22/03/2026', finalizada: false,
    seguimientos: [
      { id: 4, fecha: '28/03/2026', estado: 'Brotación', comentario: 'Emergencia desigual en zona sur. Posible compactación.', fotos: [] },
      { id: 5, fecha: '15/04/2026', estado: '⚠️ Incidencia', comentario: 'Síntomas de alternaria en hojas basales. Tratamiento con fungicida cúprico.', fotos: ['demo'] },
    ]
  },
  {
    id: 3, nombre: 'Los Llanos B',
    ubicacion: 'Almanza, León',
    lat: 42.660, lng: -4.981,
    superficie: 3.2, variedad: 'Soprano',
    agricultor: 'Juan Diez', proveedor: 'Semillas Castilla S.L.', siembra: '10/03/2026', finalizada: false,
    seguimientos: [
      { id: 6, fecha: '18/03/2026', estado: 'Brotación', comentario: 'Emergencia excelente y uniforme.', fotos: ['demo'] },
      { id: 7, fecha: '02/04/2026', estado: 'Crecimiento', comentario: 'Buen desarrollo vegetativo. Riego por aspersión puesto en marcha.', fotos: [] },
    ]
  },
  {
    id: 4, nombre: 'Vega del Río',
    ubicacion: 'Cea, León',
    lat: 42.461, lng: -5.020,
    superficie: 1.5, variedad: 'Lucinda',
    agricultor: 'Pedro Álvarez', proveedor: 'AgroSemillas Norte', siembra: '18/03/2026', finalizada: false,
    seguimientos: [
      { id: 8, fecha: '25/03/2026', estado: 'Brotación', comentario: 'Brotación uniforme en toda la parcela. Suelo bien preparado tras el laboreo de invierno.', fotos: [] },
      { id: 9, fecha: '10/04/2026', estado: 'Crecimiento', comentario: 'Plantas de 20 cm. Segundo riego realizado. Se aplica abono de fondo nitrogenado.', fotos: ['demo'] },
      { id: 10, fecha: '02/05/2026', estado: 'Floración', comentario: 'Inicio de floración. Aspecto general muy bueno, sin incidencias destacadas.', fotos: ['demo', 'demo'] },
    ]
  },
  {
    id: 5, nombre: 'El Barrero',
    ubicacion: 'Grajal de Campos, León',
    lat: 42.257, lng: -5.057,
    superficie: 2.8, variedad: 'Babylon',
    agricultor: 'Carmen López', proveedor: 'Semillas Castilla S.L.', siembra: '12/03/2026', finalizada: false,
    seguimientos: [
      { id: 11, fecha: '20/03/2026', estado: 'Brotación', comentario: 'Emergencia algo irregular en el extremo oeste. Se revisa la profundidad de siembra.', fotos: [] },
      { id: 12, fecha: '08/04/2026', estado: '⚠️ Incidencia', comentario: 'Presencia de pulgón en los brotes apicales. Tratamiento insecticida preventivo aplicado.', fotos: ['demo'] },
      { id: 13, fecha: '29/04/2026', estado: 'Crecimiento', comentario: 'Recuperación satisfactoria tras el tratamiento. Buen vigor vegetativo en toda la parcela.', fotos: ['demo'] },
    ]
  },
  {
    id: 6, nombre: 'Valdearcos Sur',
    ubicacion: 'Valdearcos de la Vega, León',
    lat: 42.320, lng: -5.112,
    superficie: 3.6, variedad: 'Agria',
    agricultor: 'Manuel García', proveedor: 'Semillas Castilla S.L.', siembra: '05/03/2025', finalizada: true,
    seguimientos: [
      { id: 14, fecha: '14/03/2025', estado: 'Brotación', comentario: 'Emergencia uniforme en toda la parcela. Condiciones de humedad óptimas.', fotos: ['demo'] },
      { id: 15, fecha: '01/04/2025', estado: 'Crecimiento', comentario: 'Plantas de 18 cm. Primer abonado de cobertera aplicado sin incidencias.', fotos: [] },
      { id: 16, fecha: '25/04/2025', estado: 'Floración', comentario: 'Floración completa. Tratamiento preventivo contra mildiu y alternaria realizado.', fotos: ['demo', 'demo'] },
      { id: 17, fecha: '18/07/2025', estado: 'Maduración', comentario: 'Recolección finalizada. Rendimiento estimado de 42 t/ha. Campaña muy satisfactoria.', fotos: ['demo'] },
    ]
  },
  {
    id: 7, nombre: 'Finca La Ermita',
    ubicacion: 'Joarilla de las Matas, León',
    lat: 42.348, lng: -4.952,
    superficie: 1.9, variedad: 'Jazzy',
    agricultor: 'Rosa Fernández', proveedor: 'AgroSemillas Norte', siembra: '18/03/2025', finalizada: true,
    seguimientos: [
      { id: 18, fecha: '27/03/2025', estado: 'Brotación', comentario: 'Brotación desigual en la zona norte. Se realiza resiembra puntual en los calveros detectados.', fotos: [] },
      { id: 19, fecha: '14/04/2025', estado: '⚠️ Incidencia', comentario: 'Ataque moderado de alternaria. Tratamiento con fungicida sistémico de contacto aplicado en dos pases.', fotos: ['demo'] },
      { id: 20, fecha: '10/05/2025', estado: 'Floración', comentario: 'Recuperación buena tras el tratamiento. Floración en curso con aspecto general correcto.', fotos: ['demo'] },
      { id: 21, fecha: '25/07/2025', estado: 'Maduración', comentario: 'Cosecha concluida. Rendimiento de 36 t/ha, algo por debajo de la media por la incidencia temprana.', fotos: [] },
    ]
  },
];
let nextId = 8;
let nextSegId = 22;
let currentParcelaId = null;
let editingSegId = null;
let currentFotos = [];
let pickedLat = null, pickedLng = null;
let isViewMode = false;
let viewMarker = null;
let currentTab = 'parcelas';

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function isDesktop() { return window.innerWidth >= 960; }

function showEmptyDetail() {
  document.getElementById('detail-content').innerHTML = `
    <div class="detail-empty">
      <div class="empty-icon">🌱</div>
      <p>Selecciona una parcela<br>para ver el detalle</p>
    </div>
  `;
}

// ─── LEAFLET MAP PICKER ────────────────────────────────────────────────────────
let mapPicker = null;
let geocodeTimer = null;

function openMap() {
  document.getElementById('overlay-map').classList.add('open');
  setTimeout(() => {
    if (!mapPicker) {
      mapPicker = L.map('map-picker', { zoomControl: true, attributionControl: false });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(mapPicker);
      mapPicker.setView([42.5, -5.0], 10);
      mapPicker.on('moveend', onMapMove);
    } else {
      mapPicker.invalidateSize();
    }
    if (pickedLat) mapPicker.setView([pickedLat, pickedLng], 14);
    onMapMove();
  }, 50);
}

function onMapMove() {
  if (isViewMode) return;
  const c = mapPicker.getCenter();
  pickedLat = c.lat;
  pickedLng = c.lng;
  reverseGeocode(c.lat, c.lng);
}

let lastGeocodeAddr = '';
function reverseGeocode(lat, lng) {
  clearTimeout(geocodeTimer);
  const el = document.getElementById('map-address-display');
  el.className = 'loading';
  el.textContent = 'Obteniendo dirección…';

  geocodeTimer = setTimeout(async () => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=es`,
        { headers: { 'Accept-Language': 'es' } }
      );
      const data = await res.json();
      const addr = data.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
      lastGeocodeAddr = addr;
      el.className = '';
      el.innerHTML = `📍 ${addr}`;
    } catch {
      lastGeocodeAddr = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
      el.className = '';
      el.textContent = lastGeocodeAddr;
    }
  }, 600);
}

function centerOnGPS() {
  if (!navigator.geolocation) { alert('Tu dispositivo no soporta geolocalización.'); return; }
  const el = document.getElementById('map-address-display');
  el.className = 'loading';
  el.textContent = 'Obteniendo tu posición…';
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;
    mapPicker.setView([lat, lng], 15);
  }, () => {
    el.className = '';
    el.textContent = 'No se pudo obtener la ubicación.';
  });
}

function confirmMapLocation() {
  if (!pickedLat) return;
  document.getElementById('f-ubicacion').value = lastGeocodeAddr || `${pickedLat.toFixed(5)}, ${pickedLng.toFixed(5)}`;
  const badge = document.getElementById('coords-badge');
  badge.textContent = `📡 ${pickedLat.toFixed(5)}, ${pickedLng.toFixed(5)}`;
  badge.classList.add('visible');
  closeMap();
}

function openViewMap(lat, lng, nombre) {
  isViewMode = true;
  const overlay = document.getElementById('overlay-map');
  overlay.classList.add('open', 'view-mode');
  document.getElementById('map-topbar').querySelector('span').textContent = nombre;
  setTimeout(() => {
    if (!mapPicker) {
      mapPicker = L.map('map-picker', { zoomControl: true, attributionControl: false });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(mapPicker);
      mapPicker.on('moveend', onMapMove);
    } else {
      mapPicker.invalidateSize();
    }
    if (viewMarker) { viewMarker.remove(); viewMarker = null; }
    mapPicker.setView([lat, lng], 14);
    viewMarker = L.circleMarker([lat, lng], { radius: 10, color: '#009A3C', fillColor: '#33B865', fillOpacity: 1, weight: 2 }).addTo(mapPicker);
    reverseGeocode(lat, lng);
  }, 50);
}

function closeMap() {
  isViewMode = false;
  if (viewMarker) { viewMarker.remove(); viewMarker = null; }
  document.getElementById('overlay-map').classList.remove('open', 'view-mode');
  document.getElementById('map-topbar').querySelector('span').textContent = 'Elige la ubicación';
}

// ─── MINI MAPS ────────────────────────────────────────────────────────────────
const miniMaps = {};

function initMiniMap(containerId, lat, lng) {
  if (miniMaps[containerId]) {
    miniMaps[containerId].invalidateSize();
    return;
  }
  const m = L.map(containerId, {
    zoomControl: false, attributionControl: false,
    dragging: false, scrollWheelZoom: false,
    doubleClickZoom: false, keyboard: false, touchZoom: false
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 17 }).addTo(m);
  m.setView([lat, lng], 13);
  L.circleMarker([lat, lng], { radius: 7, color: '#009A3C', fillColor: '#33B865', fillOpacity: 1, weight: 2 }).addTo(m);
  miniMaps[containerId] = m;
  setTimeout(() => m.invalidateSize(), 100);
  setTimeout(() => m.invalidateSize(), 400);
}

// ─── RENDER LISTA ─────────────────────────────────────────────────────────────
function renderList(list) {
  Object.keys(miniMaps).filter(k => k.startsWith('mini-')).forEach(k => {
    try { miniMaps[k].remove(); } catch(e) {}
    delete miniMaps[k];
  });
  const el = document.getElementById('parcelas-list');
  if (!list.length) {
    el.innerHTML = '<p style="text-align:center;color:var(--muted);margin-top:40px;">No hay parcelas aún.<br>Pulsa ＋ para añadir.</p>';
    return;
  }
  el.innerHTML = list.map(p => `
    <div class="parcela-card${p.id === currentParcelaId ? ' selected' : ''}" data-id="${p.id}" onclick="openDetail(${p.id})">
      ${p.lat ? `<div class="card-map" id="mini-${p.id}"></div>` : ''}
      <div class="card-header">
        <h3>${p.nombre}</h3>
        <span class="badge">${p.variedad}</span>
      </div>
      <div class="card-body">
        <div class="card-row"><div class="card-field"><span>📍</span> ${p.ubicacion}</div></div>
        <div class="card-row">
          <div class="card-field">Sup.<strong>${p.superficie} ha</strong></div>
          <div class="card-field">Agricultor<strong>${p.agricultor}</strong></div>
          <div class="card-field">Siembra<strong>${p.siembra || '—'}</strong></div>
        </div>
      </div>
      <div class="card-footer">
        <span>📷 ${p.seguimientos.reduce((a,s)=>a+s.fotos.length,0)} fotos</span>
        <span>💬 ${p.seguimientos.length} seguimientos</span>
        <span style="margin-left:auto;color:var(--green);font-weight:600;font-size:.75rem;">${lastDate(p)} →</span>
      </div>
    </div>
  `).join('');

  requestAnimationFrame(() => {
    list.forEach(p => {
      if (p.lat) initMiniMap(`mini-${p.id}`, p.lat, p.lng);
    });
  });
}

function lastDate(p) {
  if (!p.seguimientos.length) return 'Sin seguimiento';
  return 'Último: ' + p.seguimientos[p.seguimientos.length - 1].fecha;
}

function filterParcelas(q) {
  const lq = q.toLowerCase();
  renderList(parcelas.filter(p => !p.finalizada && (
    p.nombre.toLowerCase().includes(lq) ||
    p.variedad.toLowerCase().includes(lq) ||
    p.agricultor.toLowerCase().includes(lq) ||
    p.ubicacion.toLowerCase().includes(lq)
  )));
}

// ─── DETALLE ──────────────────────────────────────────────────────────────────
function openDetail(id) {
  currentParcelaId = id;
  const p = parcelas.find(x => x.id === id);

  const timeline = p.seguimientos.slice().reverse().map(s => `
    <div class="timeline-item">
      <div class="ti-header">
        <span class="ti-date">📅 ${s.fecha}</span>
        <span class="ti-author">${p.agricultor}</span>
      </div>
      ${s.fotos.length ? `
        <div class="ti-fotos">
          ${s.fotos.map(f => f === 'demo'
            ? `<div class="demo-foto"><span style="font-size:2rem">🌿</span><span>Foto</span></div>`
            : `<img src="${f}" onclick="openFoto(this.src)" />`
          ).join('')}
        </div>` : ''}
      <span class="ti-tag">${s.estado}</span>
      <div class="ti-comment">${s.comentario}</div>
      <div class="ti-actions">
        <button class="ti-btn ti-btn-edit" onclick="openEditSeguimiento(${p.id},${s.id})">✏️ Editar</button>
        <button class="ti-btn ti-btn-del"  onclick="deleteSeguimiento(${p.id},${s.id})">🗑️ Eliminar</button>
      </div>
    </div>
  `).join('');

  Object.keys(miniMaps).filter(k => k.startsWith('detail-map-')).forEach(k => {
    try { miniMaps[k].remove(); } catch(e) {}
    delete miniMaps[k];
  });

  document.getElementById('detail-content').innerHTML = `
    <div class="detail-hero"${p.finalizada ? ' style="background:#92400e"' : ''}>
      ${p.lat ? `<div class="detail-hero-map" id="detail-map-${p.id}"></div>` : ''}
      <div class="detail-hero-info">
        <div class="detail-hero-name">
          <h2>${p.nombre}</h2>
          ${p.lat ? `<button class="btn-ver-mapa" onclick="openViewMap(${p.lat},${p.lng},'${p.nombre.replace(/'/g,"\\'")}')">🗺️ Mapa</button>` : ''}
        </div>
        <p>📍 ${p.ubicacion}</p>
      </div>
    </div>
    <div class="info-grid">
      <div class="info-item"><div class="info-label">Variedad</div><div class="info-val">🥔 ${p.variedad}</div></div>
      <div class="info-item"><div class="info-label">Superficie</div><div class="info-val">📐 ${p.superficie} ha</div></div>
      <div class="info-item"><div class="info-label">Agricultor</div><div class="info-val">👤 ${p.agricultor}</div></div>
      <div class="info-item"><div class="info-label">Proveedor</div><div class="info-val">🏢 ${p.proveedor}</div></div>
      <div class="info-item"><div class="info-label">Siembra</div><div class="info-val">📆 ${p.siembra || '—'}</div></div>
      <div class="info-item"><div class="info-label">Seguimientos</div><div class="info-val">📊 ${p.seguimientos.length}</div></div>
    </div>
    ${!p.finalizada
      ? `<button class="btn btn-primary" onclick="openSeguimiento()" style="margin-bottom:8px;">📷 Añadir seguimiento</button>`
      : `<button class="btn-reactivar" onclick="reactivarParcela(${p.id})">↩ Reactivar parcela</button>`
    }
    <div class="section-title">Historial de seguimiento</div>
    <div class="timeline">${timeline || '<p style="color:var(--muted);text-align:center;padding:20px 0;">Sin seguimientos aún</p>'}</div>
    ${!p.finalizada
      ? `<button class="btn-finalizar" onclick="finalizarParcela(${p.id})" style="margin-top:8px;">📦 Finalizar campaña</button>`
      : ''
    }
  `;

  if (isDesktop()) {
    document.getElementById('screen-stats').classList.remove('active');
    document.getElementById('screen-detail').classList.add('active');
    document.querySelectorAll('.parcela-card').forEach(c => c.classList.remove('selected'));
    const card = document.querySelector(`.parcela-card[data-id="${id}"]`);
    if (card) card.classList.add('selected');
  } else {
    showScreen('screen-detail');
    document.getElementById('fab').style.display = 'none';
  }

  if (p.lat) {
    requestAnimationFrame(() => initMiniMap(`detail-map-${p.id}`, p.lat, p.lng));
  }
}

function goBack() {
  currentParcelaId = null;
  if (isDesktop()) {
    document.querySelectorAll('.parcela-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('screen-detail').classList.remove('active');
    showEmptyDetail();
    document.getElementById('screen-detail').classList.add('active');
  } else {
    if (currentTab === 'historico') {
      showScreen('screen-historico');
    } else {
      showScreen('screen-parcelas');
      document.getElementById('fab').style.display = 'flex';
    }
  }
}

// ─── TABS ─────────────────────────────────────────────────────────────────────
function switchTab(name, btn) {
  document.querySelectorAll('nav.bottom button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentTab = name;

  if (isDesktop()) {
    ['screen-stats', 'screen-historico', 'screen-detail'].forEach(id =>
      document.getElementById(id).classList.remove('active')
    );
    document.getElementById('screen-historico').classList.remove('desktop-left');
    document.getElementById('screen-parcelas').classList.remove('hidden-desktop');

    if (name === 'stats') {
      renderStats();
      document.getElementById('screen-stats').classList.add('active');
    } else if (name === 'historico') {
      renderHistorico();
      document.getElementById('screen-historico').classList.add('active', 'desktop-left');
      document.getElementById('screen-parcelas').classList.add('hidden-desktop');
      if (currentParcelaId) document.getElementById('screen-detail').classList.add('active');
    } else {
      const p = currentParcelaId ? parcelas.find(x => x.id === currentParcelaId) : null;
      if (p && !p.finalizada) {
        document.getElementById('screen-detail').classList.add('active');
      } else {
        currentParcelaId = null;
        showEmptyDetail();
        document.getElementById('screen-detail').classList.add('active');
      }
    }
  } else {
    if (name === 'stats') {
      goBack(); renderStats();
      showScreen('screen-stats');
      document.getElementById('fab').style.display = 'none';
    } else if (name === 'historico') {
      goBack(); renderHistorico();
      showScreen('screen-historico');
      document.getElementById('fab').style.display = 'none';
    } else {
      goBack();
    }
  }
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ─── STATS ────────────────────────────────────────────────────────────────────
function renderStats() {
  const totalHa = parcelas.reduce((a, p) => a + p.superficie, 0);
  const totalFotos = parcelas.reduce((a, p) => a + p.seguimientos.reduce((b,s) => b + s.fotos.length, 0), 0);
  const agricultores = new Set(parcelas.map(p => p.agricultor)).size;
  document.getElementById('s-parcelas').textContent = parcelas.length;
  document.getElementById('s-ha').textContent = totalHa.toFixed(1);
  document.getElementById('s-fotos').textContent = totalFotos;
  document.getElementById('s-agricultores').textContent = agricultores;

  const varMap = {};
  parcelas.forEach(p => { varMap[p.variedad] = (varMap[p.variedad] || 0) + p.superficie; });
  const maxVar = Math.max(...Object.values(varMap));
  document.getElementById('variety-bars').innerHTML = Object.entries(varMap)
    .sort((a,b) => b[1]-a[1])
    .map(([v,ha]) => `<div class="var-row"><div class="var-label"><span>${v}</span><span>${ha.toFixed(1)} ha</span></div><div class="bar-bg"><div class="bar-fill" style="width:${(ha/maxVar*100).toFixed(0)}%"></div></div></div>`).join('');

  const agMap = {};
  parcelas.forEach(p => { agMap[p.agricultor] = (agMap[p.agricultor] || 0) + p.superficie; });
  const maxAg = Math.max(...Object.values(agMap));
  document.getElementById('agricultor-bars').innerHTML = Object.entries(agMap)
    .sort((a,b) => b[1]-a[1])
    .map(([a,ha]) => `<div class="var-row"><div class="var-label"><span>${a}</span><span>${ha.toFixed(1)} ha</span></div><div class="bar-bg"><div class="bar-fill" style="width:${(ha/maxAg*100).toFixed(0)}%"></div></div></div>`).join('');
}

// ─── NUEVA PARCELA ────────────────────────────────────────────────────────────
function openNewParcela() {
  pickedLat = null; pickedLng = null;
  document.getElementById('coords-badge').classList.remove('visible');
  document.getElementById('overlay-parcela').classList.add('open');
}

function saveParcela(e) {
  e.preventDefault();
  const p = {
    id: nextId++,
    nombre: document.getElementById('f-nombre').value,
    ubicacion: document.getElementById('f-ubicacion').value,
    lat: pickedLat, lng: pickedLng,
    superficie: parseFloat(document.getElementById('f-superficie').value),
    variedad: document.getElementById('f-variedad').value,
    agricultor: document.getElementById('f-agricultor').value,
    proveedor: document.getElementById('f-proveedor').value,
    siembra: (() => { const v = document.getElementById('f-siembra').value; return v ? v.split('-').reverse().join('/') : '—'; })(),
    finalizada: false,
    seguimientos: []
  };
  parcelas.unshift(p);
  renderList(parcelas.filter(x => !x.finalizada));
  closeSheet('overlay-parcela');
  e.target.reset();
  document.getElementById('coords-badge').classList.remove('visible');
  pickedLat = null; pickedLng = null;
}

// ─── SEGUIMIENTO ──────────────────────────────────────────────────────────────
function renderFotosGrid() {
  document.getElementById('fotos-grid').innerHTML = currentFotos.map((f, i) => `
    <div class="foto-thumb">
      <img src="${f}" onclick="openFoto(this.src)" />
      <button type="button" class="foto-del" onclick="removeFoto(${i})">✕</button>
    </div>
  `).join('');
}

function removeFoto(idx) {
  currentFotos.splice(idx, 1);
  renderFotosGrid();
}

function addPhoto(input) {
  const files = Array.from(input.files);
  let loaded = 0;
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      currentFotos.push(e.target.result);
      loaded++;
      if (loaded === files.length) renderFotosGrid();
    };
    reader.readAsDataURL(file);
  });
  input.value = '';
}

function openSeguimiento() {
  editingSegId = null;
  currentFotos = [];
  renderFotosGrid();
  document.getElementById('seg-title').textContent = '📷 Añadir seguimiento';
  document.getElementById('f-estado').value = 'Normal';
  document.getElementById('f-comentario').value = '';
  document.getElementById('overlay-seguimiento').classList.add('open');
}

function openEditSeguimiento(parcelaId, segId) {
  const p = parcelas.find(x => x.id === parcelaId);
  const s = p.seguimientos.find(x => x.id === segId);
  currentParcelaId = parcelaId;
  editingSegId = segId;
  currentFotos = s.fotos.filter(f => f !== 'demo');
  renderFotosGrid();
  document.getElementById('seg-title').textContent = '✏️ Editar seguimiento';
  document.getElementById('f-estado').value = s.estado;
  document.getElementById('f-comentario').value = s.comentario;
  document.getElementById('overlay-seguimiento').classList.add('open');
}

function deleteSeguimiento(parcelaId, segId) {
  showConfirm({
    icon: '🗑️',
    title: '¿Eliminar seguimiento?',
    msg: 'Esta acción no se puede deshacer.',
    btnLabel: '🗑️ Eliminar',
    btnClass: 'btn btn-danger',
    onOk: () => {
      const p = parcelas.find(x => x.id === parcelaId);
      p.seguimientos = p.seguimientos.filter(s => s.id !== segId);
      openDetail(parcelaId);
    }
  });
}

function saveSeguimiento(e) {
  e.preventDefault();
  const p = parcelas.find(x => x.id === currentParcelaId);
  const estado = document.getElementById('f-estado').value;
  const comentario = document.getElementById('f-comentario').value || 'Sin comentario.';

  if (editingSegId !== null) {
    const s = p.seguimientos.find(x => x.id === editingSegId);
    s.estado = estado;
    s.comentario = comentario;
    s.fotos = currentFotos.length ? currentFotos : s.fotos;
  } else {
    const today = new Date();
    const fecha = `${String(today.getDate()).padStart(2,'0')}/${String(today.getMonth()+1).padStart(2,'0')}/${today.getFullYear()}`;
    p.seguimientos.push({ id: nextSegId++, fecha, estado, comentario, fotos: [...currentFotos] });
  }

  closeSheet('overlay-seguimiento');
  openDetail(currentParcelaId);
}

// ─── HISTÓRICO ────────────────────────────────────────────────────────────────
function renderHistorico() {
  const finalizadas = parcelas.filter(p => p.finalizada);
  const el = document.getElementById('historico-list');
  if (!finalizadas.length) {
    el.innerHTML = '<p style="text-align:center;color:var(--muted);margin-top:40px;">No hay parcelas finalizadas aún.</p>';
    return;
  }
  Object.keys(miniMaps).filter(k => k.startsWith('hist-mini-')).forEach(k => {
    try { miniMaps[k].remove(); } catch(e) {}
    delete miniMaps[k];
  });
  el.innerHTML = finalizadas.map(p => `
    <div class="parcela-card${p.id === currentParcelaId ? ' selected' : ''}" data-id="${p.id}" onclick="openDetail(${p.id})">
      ${p.lat ? `<div class="card-map" id="hist-mini-${p.id}"></div>` : ''}
      <div class="card-header" style="background:#92400e;">
        <h3>${p.nombre}</h3>
        <span class="badge-finalizada">Finalizada</span>
      </div>
      <div class="card-body">
        <div class="card-row"><div class="card-field"><span>📍</span> ${p.ubicacion}</div></div>
        <div class="card-row">
          <div class="card-field">Sup.<strong>${p.superficie} ha</strong></div>
          <div class="card-field">Agricultor<strong>${p.agricultor}</strong></div>
          <div class="card-field">Siembra<strong>${p.siembra || '—'}</strong></div>
        </div>
      </div>
      <div class="card-footer">
        <span>📷 ${p.seguimientos.reduce((a,s)=>a+s.fotos.length,0)} fotos</span>
        <span>💬 ${p.seguimientos.length} seguimientos</span>
        <span style="margin-left:auto;color:#92400e;font-weight:600;font-size:.75rem;">${lastDate(p)} →</span>
      </div>
    </div>
  `).join('');
  requestAnimationFrame(() => {
    finalizadas.forEach(p => { if (p.lat) initMiniMap(`hist-mini-${p.id}`, p.lat, p.lng); });
  });
}

function finalizarParcela(id) {
  showConfirm({
    icon: '📦',
    title: '¿Finalizar campaña?',
    msg: 'Esta parcela se moverá al Histórico.<br>Podrás reactivarla en cualquier momento.',
    btnLabel: '📦 Confirmar finalización',
    btnClass: 'btn-finalizar',
    onOk: () => {
      parcelas.find(x => x.id === id).finalizada = true;
      renderList(parcelas.filter(x => !x.finalizada));
      goBack();
    }
  });
}

function reactivarParcela(id) {
  parcelas.find(x => x.id === id).finalizada = false;
  renderHistorico();
  renderList(parcelas.filter(x => !x.finalizada));
  goBack();
}

// ─── UTILS ────────────────────────────────────────────────────────────────────
function openFoto(src) {
  document.getElementById('foto-grande').src = src;
  document.getElementById('overlay-foto').classList.add('open');
}
function closeFoto() {
  document.getElementById('overlay-foto').classList.remove('open');
  document.getElementById('foto-grande').src = '';
}

function showConfirm({ icon, title, msg, btnLabel, btnClass = 'btn btn-primary', onOk }) {
  document.getElementById('confirm-icon').textContent = icon;
  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-msg').innerHTML = msg;
  const btn = document.getElementById('confirm-ok');
  btn.textContent = btnLabel;
  btn.className = btnClass;
  btn.onclick = () => { closeSheet('overlay-confirm'); onOk(); };
  document.getElementById('overlay-confirm').classList.add('open');
}

function closeSheet(id) { document.getElementById(id).classList.remove('open'); }
function closeIfBg(e, id) { if (e.target.id === id) closeSheet(id); }

// ─── INIT ─────────────────────────────────────────────────────────────────────
renderList(parcelas.filter(p => !p.finalizada));
if (isDesktop()) {
  document.getElementById('screen-detail').classList.add('active');
  showEmptyDetail();
}