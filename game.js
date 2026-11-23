(() => {
'use strict';

/* ---------- constants ---------- */
const ROUNDS = 7, PREVIEW_MS = 3000, ANSWER_MS = 30000;
const EPOCH = '2026-11-20';            // Outlier #1
const TZ = 'Europe/London';            // the daily resets at midnight UK time
const HOME_URL = 'https://theaxiommaths.com';
const TIERS = {
  mode:    { name: 'Mode',       pts: 10,  emoji: '⬜', blurb: 'The answer everyone gives.' },
  cliche:  { name: 'Cliché',     pts: 15,  emoji: '🟨', blurb: 'Feels obscure. Everybody thinks of it.' },
  mean:    { name: 'Average',    pts: 30,  emoji: '🟩', blurb: 'Solidly in the middle of the curve.' },
  tail:    { name: 'In the Tail', pts: 60, emoji: '🟦', blurb: 'Genuinely uncommon. Nice.' },
  far:     { name: 'Far Tail',   pts: 85,  emoji: '🟪', blurb: 'Very few people go this far out.' },
  outlier: { name: 'Outlier',    pts: 100, emoji: '🟥', blurb: 'As far out on the curve as it gets.' },
  miss:    { name: 'Missed',     pts: 0,   emoji: '⬛', blurb: '' }
};
const BANDS = [
  { min: 0,   name: 'Inside the crowd', line: 'Plenty of curve left to explore.' },
  { min: 151, name: 'Drifting out',     line: 'Edging away from the mean.' },
  { min: 251, name: 'In the tail',      line: 'Properly unusual. Nice.' },
  { min: 351, name: 'Far tail',         line: 'Almost nobody thinks like this.' },
  { min: 450, name: 'Outlier',          line: 'Statistically, you should not exist.' }
];
const FAMOUS = new Set(['0','1','2','3','7','10','12','13','42','69','100','101','111','123','144','256','360','365','420','500','666','777','999','1000','1024','1729','2024','2025','2026','9999','10000']);

/* ---------- small helpers ---------- */
const $ = s => document.querySelector(s);
const store = {
  get(k, d) { try { const v = localStorage.getItem('outlier:' + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('outlier:' + k, JSON.stringify(v)); } catch {} }
};
const todayISO = () => new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
function dayNumber(iso) { const p = s => s.split('-').map(Number); const [a, b, c] = p(EPOCH), [x, y, z] = p(iso); return Math.round((Date.UTC(x, y - 1, z) - Date.UTC(a, b - 1, c)) / 864e5) + 1; }
function addDays(iso, n) { const [x, y, z] = iso.split('-').map(Number); return new Date(Date.UTC(x, y - 1, z + n)).toISOString().slice(0, 10); }
function msToMidnight() {
  const now = new Date(); const parts = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' }).formatToParts(now);
  const g = t => +parts.find(p => p.type === t).value; return ((24 - g('hour')) * 3600 - g('minute') * 60 - g('second')) * 1000;
}
function mulberry(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function shuffle(arr, r) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmtNum = s => s.length > 4 ? s.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : s;
const zOf = score => score / 175;

/* ---------- answer matching ---------- */
function norm(s) {
  return s.toLowerCase().replace(/#/g, ' sharp').replace(/¾/g, ' 3/4').replace(/½/g, ' 1/2').replace(/¼/g, ' 1/4').normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/\b([a-z])\s+(\d)/g, '$1$2')
    .replace(/[’'`]s\b/g, '').replace(/[’'`]/g, '').replace(/[–—-]/g, ' ')
    .replace(/[^a-z0-9πθαβγδεζηικλμνξορστυφχψωσ√+*^=. ]/g, ' ').replace(/\s+/g, ' ').trim();
}
function keyOf(s, strip) {
  let words = norm(s).split(' ').filter(Boolean);
  if (strip && strip.length) { const kept = words.filter(w => !strip.includes(w)); if (kept.length) words = kept; }
  return words.join(' ');
}
const singular = k => k.split(' ').map(w => w.length > 3 && w.endsWith('s') ? w.slice(0, -1) : w).join(' ');
function editDistance(a, b, cap) {
  if (Math.abs(a.length - b.length) > cap) return cap + 1;
  const d = []; for (let i = 0; i <= a.length; i++) { d[i] = [i]; }
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    let rowMin = Infinity;
    for (let j = 1; j <= b.length; j++) {
      const c = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + c);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      rowMin = Math.min(rowMin, d[i][j]);
    }
    if (rowMin > cap) return cap + 1;
  }
  return d[a.length][b.length];
}

function buildListPrompt(p) {
  const entries = [], index = new Map();
  const add = (raw, tier) => {
    const names = raw.split('|'); const e = { display: names[0], tier, note: tier === 'outlier' ? p.gemNote : '' }; entries.push(e);
    const keys = new Set();
    for (const n of names) { const k = keyOf(n, p.strip); if (k) { keys.add(k); keys.add(singular(k)); } }
    if (p.person) { const last = norm(names[0]).split(' ').pop(); if (last && last.length >= 3) keys.add(last); }
    for (const k of keys) if (!index.has(k)) index.set(k, e);
  };
  for (const t of ['outlier', 'mode', 'cliche', 'mean', 'tail', 'far']) {
    const list = t === 'outlier' ? [p.gem] : (p[t] || []);
    for (const raw of list) add(raw, t);
  }
  return { kind: 'list', id: p.id, text: p.text, hint: p.hint, entries, index, strip: p.strip,
    all: () => entries.map(e => ({ display: e.display, tier: e.tier })),
    gem: entries.find(e => e.tier === 'outlier'),
    match(input) {
      const k = keyOf(input, p.strip); if (!k) return null;
      const hit = index.get(k) || index.get(singular(k));
      if (hit) return { entry: hit, corrected: false };
      if (/\d/.test(k)) return null;   // never "correct" numbers: 1067 is not a typo for 1066
      const cap = k.length <= 3 ? 0 : k.length <= 7 ? 1 : 2; if (!cap) return null;
      let best = null, bd = cap + 1;
      for (const [key, e] of index) { const dist = editDistance(k, key, cap); if (dist < bd) { bd = dist; best = e; } }
      return best ? { entry: best, corrected: true } : null;
    }
  };
}

function parseNumber(input) {
  const s = input.replace(/[,\s_]/g, '').replace(/[×x]/g, '*').replace(/\*\*/g, '^');
  if (!/^[0-9+\-*^()]+$/.test(s)) return null;
  let i = 0;
  const peek = () => s[i];
  function atom() { if (peek() === '(') { i++; const v = expr(); if (s[i++] !== ')') throw 0; return v; } const m = /^\d+/.exec(s.slice(i)); if (!m) throw 0; i += m[0].length; return BigInt(m[0]); }
  function power() { let b = atom(); if (peek() === '^') { i++; const e = power(); if (e < 0n || e > 4096n) throw 0; b = b ** e; } return b; }
  function unary() { if (peek() === '-') { i++; return -unary(); } return power(); }
  function term() { let v = unary(); while (peek() === '*') { i++; v *= unary(); } return v; }
  function expr() { let v = term(); while (peek() === '+' || peek() === '-') { const op = s[i++]; const t = term(); v = op === '+' ? v + t : v - t; } return v; }
  try { const v = expr(); return i === s.length ? v.toString() : null; } catch { return null; }
}
function numberRarity(str, idx, n, cliche, allPal, salt) {
  if (cliche && cliche.includes(str)) return { tier: 'cliche', b: -1 };
  if (n > 6 && idx >= n - Math.max(1, Math.round(n * 0.03))) return { tier: 'cliche', b: -1 };   // "just go for the biggest"
  const f = n > 1 ? idx / (n - 1) : 0;
  let h = 2166136261; for (const c of salt + str) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
  let b = n > 12 ? 0.6 * f + 0.4 * ((h >>> 0) / 4294967296) : f;
  if (FAMOUS.has(str) || idx < Math.max(1, Math.round(n * 0.03))) return { tier: 'mode', b: b - 1 };
  if (!allPal && str.length >= 3 && str === [...str].reverse().join('')) b -= 0.25;
  if (str.length >= 2 && /^(\d)\1+$/.test(str)) b -= 0.4;
  if (/0$/.test(str)) b -= 0.25;
  if (str.length >= 3 && '0123456789'.includes(str)) b -= 0.3;
  const cut = n > 12 ? [0.2, 0.44, 0.63, 0.8] : [0.12, 0.42, 0.72, 0.93];
  return { tier: b < cut[0] ? 'mode' : b < cut[1] ? 'mean' : b < cut[2] ? 'tail' : b < cut[3] ? 'far' : 'outlier', b };
}
function buildNumberPrompt(tpl, r) {
  const made = tpl.make(r); const set = made.set; const pos = new Map(set.map((s, i) => [s, i]));
  const allPal = set.every(s => s === [...s].reverse().join(''));
  const tiers = new Map(); let top = null;
  set.forEach((s, i) => { const x = numberRarity(s, i, set.length, made.cliche, allPal, made.text); tiers.set(s, x.tier); if (x.tier !== 'cliche' && (!top || x.b > top.b)) top = { s, b: x.b }; });
  if (![...tiers.values()].includes('outlier') && top) tiers.set(top.s, 'outlier');
  const tierOf = s => tiers.get(s);
  const outliers = set.filter(s => tierOf(s) === 'outlier');
  const gemStr = outliers.length ? outliers[Math.floor(r() * outliers.length)] : set[set.length - 1];
  return { kind: 'number', id: tpl.id, text: made.text, count: set.length,
    all: () => set.map(s => ({ display: fmtNum(s), tier: tierOf(s) })),
    gem: { display: fmtNum(gemStr), tier: 'outlier', note: `One of the rarest of the ${set.length.toLocaleString('en-GB')} valid answers.` },
    match(input) { const v = parseNumber(input); if (v === null) return null; if (!pos.has(v)) return { invalidNumber: v };
      return { entry: { display: fmtNum(v), tier: tierOf(v), note: '' }, corrected: false }; } };
}

const LISTS = window.OUTLIER_LISTS.map(buildListPrompt);
const NUMS = window.OUTLIER_NUMBER_TEMPLATES;

/* The second question bank (data2.js) joins the Daily from Daily #5. Earlier dailies keep using the
   original 28 questions, so a daily never changes for someone who has already played it. */
const ORIGINAL_LISTS = 28, BANK2_FROM_DAY = 5;
function promptsForDay(day) {
  const listPer = 4, numPer = 3;
  const lists = day < BANK2_FROM_DAY ? LISTS.slice(0, ORIGINAL_LISTS) : LISTS;
  const lday = day < BANK2_FROM_DAY ? day : day - BANK2_FROM_DAY + 1;
  const lc = Math.floor(lists.length / listPer), nc = Math.floor(NUMS.length / numPer);
  const lCycle = Math.floor((lday - 1) / lc), nCycle = Math.floor((day - 1) / nc);
  const lp = shuffle(lists, mulberry((day < BANK2_FROM_DAY ? 9001 : 9137) + lCycle)), np = shuffle(NUMS, mulberry(7331 + nCycle));
  const li = ((lday - 1) % lc) * listPer, ni = ((day - 1) % nc) * numPer;
  const r = mulberry(day * 104729);
  const picked = lp.slice(li, li + listPer).concat(np.slice(ni, ni + numPer).map(t => buildNumberPrompt(t, r)));
  return shuffle(picked, mulberry(day * 31337));
}
function promptsRandom() {
  const avoid = new Set(store.get('lastUnlimited', []));
  const pool = a => { const f = a.filter(x => !avoid.has(x.id)); return f.length >= 4 ? f : a; };
  const r = Math.random;
  const picked = shuffle(pool(LISTS), r).slice(0, 4).concat(shuffle(pool(NUMS), r).slice(0, 3).map(t => buildNumberPrompt(t, r)));
  store.set('lastUnlimited', picked.map(p => p.id));
  return shuffle(picked, r);
}

/* ---------- bell curve ---------- */
const CURVE = { w: 700, h: 150, zmin: -3, zmax: 4.6 };
const xz = z => (z - CURVE.zmin) / (CURVE.zmax - CURVE.zmin) * CURVE.w;
const yz = z => CURVE.h - 14 - Math.exp(-z * z / 2) * (CURVE.h - 34);
function curveSVG(p) {
  let d = ''; for (let i = 0; i <= 160; i++) { const z = CURVE.zmin + (CURVE.zmax - CURVE.zmin) * i / 160; d += (i ? 'L' : 'M') + xz(z).toFixed(1) + ' ' + yz(z).toFixed(1); }
  const area = d + `L${CURVE.w} ${CURVE.h - 14}L0 ${CURVE.h - 14}Z`;
  let ticks = ''; for (let z = -3; z <= 4; z++) ticks += `<line x1="${xz(z)}" x2="${xz(z)}" y1="${CURVE.h - 14}" y2="${CURVE.h - 9}" class="tick"/><text x="${xz(z)}" y="${CURVE.h}" class="tl">${z === 0 ? 'μ' : (z > 0 ? '+' : '−') + Math.abs(z) + 'σ'}</text>`;
  return `<svg viewBox="0 0 ${CURVE.w} ${CURVE.h}" class="curve" aria-hidden="true">
    <defs><linearGradient id="${p}grad" x1="0" x2="1"><stop offset="0" stop-color="#e0344b"/><stop offset=".5" stop-color="#9b4dff"/><stop offset="1" stop-color="#3d7bff"/></linearGradient>
    <clipPath id="${p}cc"><rect id="${p}clip" class="cclip" x="0" y="0" width="${xz(0)}" height="${CURVE.h}"/></clipPath></defs>
    <path d="${area}" class="area"/><path d="${area}" fill="url(#${p}grad)" opacity=".55" clip-path="url(#${p}cc)"/>
    <path d="${d}" class="line"/>${ticks}
    <g id="${p}marker" class="marker" style="transform:translate(${xz(0)}px,0)"><line y1="8" y2="${CURVE.h - 14}" class="mline"/><circle id="${p}dot" cy="${yz(0)}" r="6" class="mdot"/><text y="10" class="mlab">YOU</text></g>
  </svg>`;
}
function placeMarker(p, score) {
  const z = Math.min(zOf(score), CURVE.zmax - 0.15); const x = xz(z);
  const m = $('#' + p + 'marker'), c = $('#' + p + 'clip'), dot = $('#' + p + 'dot'); if (!m) return;
  m.style.transform = `translate(${x}px,0)`; c.setAttribute('width', x); dot.setAttribute('cy', yz(z));
}
function moveMarker(score) {
  placeMarker('g', score);
  $('#zval').textContent = (zOf(score) >= 0 ? '+' : '') + zOf(score).toFixed(2) + 'σ';
}

/* ---------- game state ---------- */
let G = null, timer = null;

function startGame(mode) {
  clearInterval(timer);
  if (mode === 'daily') {
    const iso = todayISO(), day = dayNumber(iso), saved = store.get('daily:' + iso, null);
    G = { mode, iso, day, prompts: promptsForDay(day), round: 0, results: [], phase: 'preview' };
    if (saved && saved.done) return showEnd(saved.results);
    if (saved) {
      G.results = saved.results; G.round = saved.results.length;
      if (saved.deadline && Date.now() > saved.deadline && G.round < ROUNDS) { G.results.push(missFor(G.prompts[G.round])); G.round++; saveDaily(); }
      if (G.round >= ROUNDS) return finish();
    }
  } else {
    G = { mode, prompts: promptsRandom(), round: 0, results: [], phase: 'preview', game: store.get('unlimitedCount', 0) + 1 };
  }
  show('game'); $('#curvebox').innerHTML = curveSVG('g'); renderHeader(); moveMarker(scoreOf(G.results));
  $('#modelabel').textContent = G.mode === 'daily' ? `Daily #${G.day}` : `Unlimited #${G.game}`;
  nextRound();
}
const scoreOf = res => res.reduce((a, r) => a + TIERS[r.tier].pts, 0);
const missFor = p => ({ text: p.text, answer: null, tier: 'miss', gem: p.gem.display, gemNote: p.gem.note });
function saveDaily(extra) { if (G.mode !== 'daily') return; store.set('daily:' + G.iso, Object.assign({ results: G.results, done: false }, extra || {})); }

function renderHeader() {
  $('#dots').innerHTML = G.prompts.map((p, i) => { const r = G.results[i]; return `<span class="dot ${r ? 't-' + r.tier : i === G.round ? 'cur' : ''}"></span>`; }).join('');
  $('#score').textContent = scoreOf(G.results);
}

function nextRound() {
  if (G.round >= ROUNDS) return finish();
  const p = G.prompts[G.round]; G.pending = null;
  renderHeader();
  $('#roundlabel').textContent = `Question ${G.round + 1} of ${ROUNDS}`;
  $('#prompt').textContent = p.text;
  $('#kind').textContent = p.kind === 'number' ? 'Number answer · you can type sums like 2^10 or 7*13' : p.hint ? p.hint : 'Word answer';
  $('#reveal').hidden = true; $('#play').hidden = false;
  const inp = $('#answer'); inp.value = ''; inp.disabled = true; $('#go').disabled = true; setMsg('');
  inp.inputMode = p.kind === 'number' ? 'numeric' : 'text';
  G.phase = 'preview'; const t0 = Date.now();
  $('#clock').classList.add('ready'); setRing(1);
  clearInterval(timer);
  timer = setInterval(() => {
    const left = PREVIEW_MS - (Date.now() - t0);
    $('#clocknum').textContent = Math.max(1, Math.ceil(left / 1000));
    if (left <= 0) { clearInterval(timer); beginAnswering(); }
  }, 100);
  $('#clocknum').textContent = 3;
}
function beginAnswering() {
  G.phase = 'answering'; G.deadline = Date.now() + ANSWER_MS; saveDaily({ deadline: G.deadline });
  const inp = $('#answer'); inp.disabled = false; $('#go').disabled = false; inp.focus();
  $('#clock').classList.remove('ready');
  timer = setInterval(() => {
    const left = G.deadline - Date.now();
    setRing(Math.max(0, left / ANSWER_MS)); $('#clocknum').textContent = Math.max(0, Math.ceil(left / 1000));
    $('#clock').classList.toggle('low', left < 6000);
    if (left <= 0) { clearInterval(timer); timeUp(); }
  }, 100);
}
function setRing(f) { const c = $('#ring'); const L = 2 * Math.PI * 26; c.style.strokeDasharray = L; c.style.strokeDashoffset = L * (1 - f); }
function setMsg(t, cls) { const m = $('#msg'); m.textContent = t; m.className = 'msg ' + (cls || ''); }

function submit() {
  if (G.phase !== 'answering') return;
  const raw = $('#answer').value.trim(); if (!raw) return;
  const p = G.prompts[G.round];
  if (G.pending && raw === G.pending.display) return accept(G.pending, raw);
  const m = p.match(raw);
  if (!m) { setMsg(`“${raw}” isn't on the list. Try another.`, 'bad'); shake(); if ($('#clearwrong').checked) $('#answer').value = ''; G.pending = null; return; }
  if (m.invalidNumber !== undefined) { setMsg(`${fmtNum(m.invalidNumber)} doesn't fit. Try another.`, 'bad'); shake(); if ($('#clearwrong').checked) $('#answer').value = ''; return; }
  if (m.corrected && $('#confirmfix').checked) {
    G.pending = m.entry; $('#answer').value = m.entry.display;
    setMsg(`Did you mean “${m.entry.display}”? Press Enter again to lock it in, or edit it.`, 'warn'); return;
  }
  accept(m.entry, raw);
}
function shake() { const b = $('#answerrow'); b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); }
function accept(entry, raw) {
  clearInterval(timer); const p = G.prompts[G.round];
  const res = { text: p.text, raw, answer: entry.display, tier: entry.tier, note: entry.note, gem: p.gem.display, gemNote: p.gem.note };
  G.results.push(res); G.round++; saveDaily(); reveal(res);
}
function timeUp() { const p = G.prompts[G.round]; const res = missFor(p); G.results.push(res); G.round++; saveDaily(); reveal(res); }

function reveal(res) {
  G.phase = 'reveal'; renderHeader(); window.scrollTo({ top: 0, behavior: 'smooth' }); moveMarker(scoreOf(G.results));
  const t = TIERS[res.tier];
  $('#play').hidden = true; const box = $('#reveal'); box.hidden = false; box.className = 'reveal t-' + res.tier;
  box.innerHTML = res.tier === 'miss'
    ? `<div class="rtier">Time's up</div><p class="rsub">No answer this time. You'll see every possible answer at the end.</p>`
    : `<div class="remoji">${t.emoji}</div><div class="rtier">${t.name}</div><div class="rans">“${esc(res.answer)}”</div>
       <div class="rpts">+${t.pts} points</div><p class="rsub">${t.blurb}</p>${res.tier === 'outlier' && res.note ? `<p class="rnote">${esc(res.note)}</p>` : ''}`;
  box.innerHTML += `<button id="next" class="btn primary">${G.round >= ROUNDS ? 'See results' : 'Next question'} →</button>`;
  $('#next').onclick = () => nextRound(); $('#next').focus();
}

function finish() {
  clearInterval(timer);
  if (G.mode === 'daily') {
    saveDaily({ done: true });
    const st = store.get('stats', { played: 0, best: 0, total: 0, streak: 0, bestStreak: 0, last: null });
    if (st.last !== G.iso) {
      const s = scoreOf(G.results);
      st.streak = st.last === addDays(G.iso, -1) ? st.streak + 1 : 1; st.bestStreak = Math.max(st.bestStreak, st.streak);
      st.played++; st.total += s; st.best = Math.max(st.best, s); st.last = G.iso; store.set('stats', st);
    }
  } else {
    store.set('unlimitedCount', G.game); const ub = store.get('unlimitedBest', 0); store.set('unlimitedBest', Math.max(ub, scoreOf(G.results)));
  }
  showEnd(G.results);
}

function showEnd(results) {
  show('end'); const s = scoreOf(results); const band = [...BANDS].reverse().find(b => s >= b.min);
  $('#endtitle').textContent = G.mode === 'daily' ? `Daily #${G.day} complete` : `Unlimited #${G.game} complete`;
  $('#endscore').textContent = s; $('#endz').textContent = (zOf(s) >= 0 ? '+' : '') + zOf(s).toFixed(2) + 'σ from the mean';
  $('#endband').innerHTML = `<b>${band.name}.</b> ${band.line}`;
  $('#endcurve').innerHTML = curveSVG('e');
  setTimeout(() => placeMarker('e', s), 60);
  $('#rows').innerHTML = results.map((r, i) => { const t = TIERS[r.tier]; const p = G.prompts[i]; return `<li class="row t-${r.tier}">
      <div class="rq"><span class="rn">${i + 1}</span>${esc(r.text)}</div>
      <div class="ra"><span class="chip">${t.emoji} ${t.name}${t.pts ? ' · +' + t.pts : ''}</span> ${r.answer ? '“' + esc(r.answer) + '”' : '<i>no answer</i>'}</div>
      ${p && p.text === r.text ? allAnswersHTML(p, r) : ''}
    </li>`; }).join('');
  const share = shareText(results); $('#sharebox').textContent = share;
  $('#share').onclick = async () => { try { if (navigator.share && matchMedia('(pointer:coarse)').matches) await navigator.share({ text: share }); else { await navigator.clipboard.writeText(share); toast('Copied – paste it anywhere'); } } catch { toast('Select the text above to copy it'); } };
  $('#again').hidden = G.mode !== 'unlimited';
  $('#gotounlimited').hidden = G.mode !== 'daily';
  renderStats();
  if (G.mode === 'daily') tickCountdown();
}
function allAnswersHTML(p, r) {
  const all = p.all(); const order = ['outlier', 'far', 'tail', 'mean', 'cliche', 'mode'];
  const mine = r.answer; let html = '';
  for (const k of order) {
    const items = all.filter(a => a.tier === k); if (!items.length) continue;
    const t = TIERS[k];
    // long tiers show the first SHOW_FIRST answers, with a button for the rest (your own answer is always shown)
    const long = items.length > SHOW_FIRST + 5;
    html += `<div class="tiergroup t-${k}${long ? ' long' : ''}"><div class="tg-head">${t.emoji} ${t.name} <span>+${t.pts} · ${items.length.toLocaleString('en-GB')}</span></div>
      ${k === 'outlier' && p.kind === 'list' && p.gem.note ? `<p class="tg-note"><b>${esc(p.gem.display)}</b>: ${esc(p.gem.note)}</p>` : ''}
      <div class="tg-list">${items.map((a, i) => `<span class="ans${a.display === mine ? ' mine' : ''}${long && i >= SHOW_FIRST && a.display !== mine ? ' extra' : ''}" data-k="${esc(norm(a.display))}">${esc(a.display)}</span>`).join('')}</div>
      ${long ? `<button type="button" class="seemore">See all ${items.length.toLocaleString('en-GB')}</button>` : ''}</div>`;
  }
  const search = all.length > 12 ? `<div class="ansearchrow"><input type="search" class="ansearch" placeholder="Search all ${all.length.toLocaleString('en-GB')} answers" aria-label="Search the answers to this question"><span class="ancount" aria-live="polite"></span></div>` : '';
  return `<details class="every"><summary>Show every answer (${all.length.toLocaleString('en-GB')})</summary>${search}${html}</details>`;
}
const SHOW_FIRST = 30;
/* "See all" buttons and the answer search on the results screen */
$('#rows').addEventListener('click', e => {
  const b = e.target.closest('.seemore'); if (!b) return;
  const g = b.closest('.tiergroup'); const open = g.classList.toggle('expanded');
  b.textContent = open ? 'Show fewer' : `See all ${g.querySelectorAll('.ans').length.toLocaleString('en-GB')}`;
});
$('#rows').addEventListener('input', e => {
  const inp = e.target.closest('.ansearch'); if (!inp) return;
  const box = inp.closest('.every'); const q = norm(inp.value); let n = 0;
  box.classList.toggle('searching', !!q);
  box.querySelectorAll('.tiergroup').forEach(g => {
    let hits = 0;
    g.querySelectorAll('.ans').forEach(a => { const hit = !q || a.dataset.k.includes(q); a.classList.toggle('hit', !!q && hit); a.classList.toggle('miss', !hit); if (hit) hits++; });
    g.classList.toggle('nohits', !!q && !hits); n += hits;
  });
  box.querySelector('.ancount').textContent = q ? (n ? `${n.toLocaleString('en-GB')} found` : 'Not on the list') : '';
});
function shareText(results) {
  const s = scoreOf(results);
  const head = G.mode === 'daily' ? `Outlier #${G.day}` : 'Outlier Unlimited';
  return `${head} · ${s} pts · ${(zOf(s) >= 0 ? '+' : '') + zOf(s).toFixed(2)}σ\n${results.map(r => TIERS[r.tier].emoji).join('')}\n${location.href.split('?')[0].split('#')[0]}`;
}
function renderStats() {
  const st = store.get('stats', { played: 0, best: 0, total: 0, streak: 0, bestStreak: 0, last: null });
  const alive = st.last === todayISO() || st.last === addDays(todayISO(), -1);
  const html = `<div><b>${alive ? st.streak : 0}</b><span>streak</span></div><div><b>${st.bestStreak}</b><span>best streak</span></div><div><b>${st.played}</b><span>dailies</span></div><div><b>${st.played ? Math.round(st.total / st.played) : 0}</b><span>average</span></div><div><b>${st.best}</b><span>best</span></div><div><b>${store.get('unlimitedBest', 0)}</b><span>best unlimited</span></div>`;
  document.querySelectorAll('.stats').forEach(e => e.innerHTML = html);
}
function tickCountdown() {
  const el = $('#nextin'); if (!el) return;
  const f = () => { const ms = msToMidnight(); const h = Math.floor(ms / 36e5), m = Math.floor(ms % 36e5 / 6e4), s = Math.floor(ms % 6e4 / 1e3);
    el.textContent = `Next daily in ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`; };
  f(); clearInterval(G.cd); G.cd = setInterval(f, 1000);
}
function toast(t) { const e = $('#toast'); e.textContent = t; e.classList.add('on'); setTimeout(() => e.classList.remove('on'), 2200); }

/* ---------- screens ---------- */
function show(id) { for (const s of ['home', 'game', 'end']) $('#' + s).hidden = s !== id; window.scrollTo(0, 0); }
function renderHome() {
  clearInterval(timer); if (G && G.cd) clearInterval(G.cd);
  show('home'); const iso = todayISO(), day = dayNumber(iso), saved = store.get('daily:' + iso, null);
  $('#dailynum').textContent = `#${day}`;
  $('#dailystate').textContent = saved && saved.done ? `Done · ${scoreOf(saved.results)} pts · see results` : saved && saved.results.length ? `In progress · question ${saved.results.length + 1} of 7` : '7 questions · the same for everyone today';
  $('#unlimitedstate').textContent = `New questions every time · ${store.get('unlimitedCount', 0)} played`;
  renderStats();
}

/* ---------- wiring ---------- */
$('#playdaily').onclick = () => startGame('daily');
$('#playunlimited').onclick = () => startGame('unlimited');
$('#again').onclick = () => startGame('unlimited');
$('#gotounlimited').onclick = () => startGame('unlimited');
document.querySelectorAll('.homebtn').forEach(b => b.onclick = () => { if (G && G.phase === 'answering' && G.mode === 'unlimited' && !confirm('Leave this game?')) return; renderHome(); });
$('#form').onsubmit = e => { e.preventDefault(); submit(); };
$('#howbtn').onclick = () => $('#how').showModal();
$('#setbtn').onclick = () => $('#settings').showModal();
document.querySelectorAll('dialog .close').forEach(b => b.onclick = () => b.closest('dialog').close());
for (const id of ['confirmfix', 'clearwrong']) { const el = $('#' + id); el.checked = store.get('set:' + id, id === 'confirmfix'); el.onchange = () => store.set('set:' + id, el.checked); }
$('#tierlist').innerHTML = ['mode', 'cliche', 'mean', 'tail', 'far', 'outlier'].map(k => `<li class="t-${k}"><span>${TIERS[k].emoji} ${TIERS[k].name}</span><b>${TIERS[k].pts}</b><em>${TIERS[k].blurb}</em></li>`).join('');
document.querySelectorAll('.axiomlink').forEach(a => a.href = HOME_URL);
if (!store.get('seenHow', false)) { store.set('seenHow', true); $('#how').showModal(); }
renderHome();
window.OUTLIER_DEBUG = { promptsForDay, LISTS, NUMS, buildNumberPrompt, parseNumber };
})();
