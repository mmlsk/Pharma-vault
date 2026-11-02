/* Pharma-vault graph viewer - renders window.PV_GRAPH (built by scripts/build_graph_data.py). */
(() => {
  "use strict";
  const G = window.PV_GRAPH;
  if (!G) { document.getElementById("panel").textContent = "Brak graph-data.js - uruchom: make graph"; return; }

  const CL_COLORS = ["#4f98a3", "#6daa45", "#bb653b", "#a86fdf", "#dd6974", "#d19900", "#5591c7", "#9aa2b4", "#c2477e"];
  const CL_PL = {
    "Nootropics": "Nootropiki", "Metabolic and Incretin Agents": "Metabolizm i inkretyny",
    "Growth Hormone and Peptide Agents": "GH i peptydy", "Androgens SARMs and PCT": "Androgeny, SARM, PCT",
    "Cardiovascular and Lipid Agents": "Sercowo-naczyniowe i lipidy", "Longevity and Experimental Compounds": "Longevity i eksperymentalne",
    "Ancillary Supplements and Topicals": "Suplementy pomocnicze", "General Pharmacology": "Farmakologia ogólna",
    "Novel Psychoactive Substances": "NPS i dopalacze",
  };
  const IDS_PL = { catalogue: "katalog źródłowy", "curated-addition": "dodatek kuratorowany", "curated-identity": "decyzja kuratorska", "wikipedia-infobox": "infoboks Wikipedii", "chembl-name-match": "dokładna nazwa w ChEMBL" };
  const VER_TEST = {
    consistent: (c) => c.v && c.v.s === "consistent", discrepant: (c) => c.v && c.v.s === "discrepant",
    "no-label-value": (c) => c.v && c.v.s === "no-label-value", chembl: (c) => c.tg,
    "ema-consistent": (c) => c.ve && c.ve.s === "consistent", "ema-discrepant": (c) => c.ve && c.ve.s === "discrepant",
    both: (c) => c.v && c.v.s === "consistent" && c.ve && c.ve.s === "consistent",
    "id-ok": (c) => ["structure-confirmed", "curated", "inn-match-ema"].includes(c.ic),
    "id-check": (c) => ["connectivity-match", "formula-match", "conflict", "no-evidence"].includes(c.ic),
  };
  const IC_PL = { "structure-confirmed": "✅ InChIKey zgodny z PubChem", "connectivity-match": "⚠️ ten sam szkielet, inna stereochemia/izotopy",
    "formula-match": "≈ ten sam wzór sumaryczny, inny InChIKey (tautomer)", "inn-match-ema": "INN zgodny z produktem EMA (bez struktury)",
    "no-chembl-structure": "brak struktury małocząsteczkowej (biologik/mieszanina)", "no-evidence": "brak danych PubChem",
    conflict: "❌ konflikt z PubChem — do przeglądu", curated: "✍️ decyzja kuratorska" };
  const EMA_PL = { consistent: "zgodne z ChPL", discrepant: "rozbieżne z ChPL", "no-label-value": "ChPL bez wartości", "no-smpc-value": "ChPL bez wartości" };
  const VER_PL = { consistent: "zgodne z etykietą FDA", discrepant: "rozbieżne z etykietą FDA", "no-label-value": "etykieta bez wartości", "no-label": "brak etykiety FDA" };
  const T = G.targets || [];
  const byTarget = T.map(() => []);
  const KIND_PL = { hub: "Hub bezpieczeństwa", pathway: "Szlak", concept: "Koncepcja" };
  const C = G.compounds, GR = G.groups, CORE = G.core;
  const byCore = CORE.map(() => []), byGroup = GR.map(() => []);
  C.forEach((c, i) => {
    c.i = i; c.c = GR[c.g].c; byGroup[c.g].push(c); (c.tg || []).forEach((t) => byTarget[t].push(i)); (c.l || []).forEach((li) => byCore[li].push(c));
    c.hay = [c.n, c.id, ...(c.a || []), ...((c.pk && c.pk.cyp) || []), ...(c.tg || []).map((t) => T[t].n), ...(c.atc || []).map((a) => a[0])].join(" ").toLowerCase();
    if (c.pk && c.pk.hl) { const u = { min: 1 / 60, h: 1, d: 24, wk: 168 }[c.pk.hl[2]]; if (u) c.hlh = Math.sqrt(c.pk.hl[0] * (c.pk.hl[1] || c.pk.hl[0])) * u; }
  });
  // shared-target neighbours (computed once on demand)
  function neighbours(c) {
    if (c._nb) return c._nb;
    const score = new Map();
    (c.tg || []).forEach((t) => byTarget[t].forEach((o) => { if (o !== c.i) score.set(o, (score.get(o) || 0) + 1); }));
    c._nb = [...score.entries()].sort((a, b) => b[1] - a[1] || C[a[0]].n.localeCompare(C[b[0]].n)).map(([o, n]) => ({ i: o, n }));
    return c._nb;
  }

  const HUB_SEROTONIN = CORE.findIndex((n) => n.name === "Serotonin Toxicity");
  const HUB_RESPIRATORY = CORE.findIndex((n) => n.name === "Respiratory Depression and Fatal Overdose");
  const HUB_CARDIO = CORE.findIndex((n) => n.name === "Stimulant and Cardiovascular Load");
  const HUB_CHOLINERGIC = CORE.findIndex((n) => n.name === "Cholinergic Load");
  const HUB_HORMONAL = CORE.findIndex((n) => n.name === "Hormonal Axis Suppression");

  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

  const $ = (id) => document.getElementById(id);
  const cv = $("cv"), ctx = cv.getContext("2d"), tip = $("tip");
  const state = {
    k: 1, tx: 0, ty: 0, sel: null, hover: null,
    clusters: new Set(G.clusters.map((_, i) => i)),
    pkOnly: false, cypOnly: false, hub: null, ver: "",
    rel: true, hlBin: null, tab: "overview",
    stack: new Set(), stackOnly: false, stackDrawerOpen: false,
    sim: {
      horizon: "auto", // "auto", "24", "48", "168"
      compounds: {},   // { [idx]: { interval: 24, tHalf: 6.0, custom: false } }
      hoverT: null
    }
  };
  let W = 0, H = 0, dpr = 1, raf = 0;

  // ---------- Stack Builder & Interaction Checker
  function loadSavedStack() {
    try {
      const raw = localStorage.getItem("pv_stack");
      if (raw) {
        const ids = JSON.parse(raw);
        if (Array.isArray(ids)) {
          ids.forEach((id) => {
            const idx = C.findIndex((c) => c.id === id);
            if (idx >= 0) state.stack.add(idx);
          });
        }
      }
    } catch (_) {}
  }

  function saveStack() {
    try {
      const ids = [...state.stack].map((i) => C[i].id);
      localStorage.setItem("pv_stack", JSON.stringify(ids));
    } catch (_) {}
  }

  function toggleInStack(idx) {
    if (state.stack.has(idx)) {
      state.stack.delete(idx);
    } else {
      state.stack.add(idx);
    }
    saveStack();
    updateStackUI();
    if (state.sel && state.sel.type === "compound") select(state.sel);
    draw();
  }

  function toggleStackDrawer(open) {
    state.stackDrawerOpen = open !== undefined ? open : !state.stackDrawerOpen;
    const drawer = $("stackDrawer");
    if (drawer) {
      drawer.classList.toggle("open", state.stackDrawerOpen);
      const b = $("stackBtn");
      if (b) b.setAttribute("aria-expanded", String(state.stackDrawerOpen));
      if (state.stackDrawerOpen) updateStackUI();
    }
  }

  function analyzeStack(indices) {
    if (indices.length < 2) return { alerts: [], pairs: [], maxLevel: "ok" };
    const alerts = [];
    const pairs = [];
    const stackCompounds = indices.map((i) => C[i]);

    // 1. Serotonin Toxicity (Critical)
    if (HUB_SEROTONIN >= 0) {
      const hits = stackCompounds.filter((c) => c.l && c.l.includes(HUB_SEROTONIN));
      if (hits.length >= 2) {
        alerts.push({
          level: "crit",
          title: "🚨 Ryzyko zespołu serotoninowego",
          desc: `Substancje <b>${hits.map((c) => esc(c.n)).join("</b> i <b>")}</b> nasilają transmisję serotoninergiczną. Jednoczesne stosowanie stwarza bezpośrednie zagrożenie zagrażającym życiu zespołem serotoninowym (hipertermia, sztywność mięśniowa, drgawki).`,
          compounds: hits.map((c) => c.i),
        });
        for (let j = 0; j < hits.length; j++) {
          for (let k = j + 1; k < hits.length; k++) {
            pairs.push({ a: hits[j].i, b: hits[k].i, level: "crit" });
          }
        }
      }
    }

    // 2. Respiratory Depression (Critical)
    if (HUB_RESPIRATORY >= 0) {
      const hits = stackCompounds.filter((c) => c.l && c.l.includes(HUB_RESPIRATORY));
      if (hits.length >= 2) {
        alerts.push({
          level: "crit",
          title: "🚨 Ryzyko ciężkiej depresji oddechowej",
          desc: `Substancje <b>${hits.map((c) => esc(c.n)).join("</b> i <b>")}</b> wykazują hamujący wpływ na ośrodek oddechowy (np. opioidy, agonisty/modulatory GABA-A, sedatywy). Ich łączenie wielokrotnie zwiększa ryzyko śpiączki i zapaści oddechowej.`,
          compounds: hits.map((c) => c.i),
        });
        for (let j = 0; j < hits.length; j++) {
          for (let k = j + 1; k < hits.length; k++) {
            pairs.push({ a: hits[j].i, b: hits[k].i, level: "crit" });
          }
        }
      }
    }

    // 3. CYP Metabolism Overlaps (Moderate)
    const cypMap = new Map();
    stackCompounds.forEach((c) => {
      const cyps = (c.pk && c.pk.cyp) || [];
      cyps.forEach((enz) => {
        if (!cypMap.has(enz)) cypMap.set(enz, []);
        cypMap.get(enz).push(c);
      });
    });
    cypMap.forEach((hits, enz) => {
      if (hits.length >= 2) {
        alerts.push({
          level: "mod",
          title: `⚠️ Wąskie gardło CYP: izoenzym ${esc(enz)}`,
          desc: `Substancje <b>${hits.map((c) => esc(c.n)).join("</b> oraz <b>")}</b> są metabolizowane przez ten sam szlak enzymatyczny (${esc(enz)}). Może dojść do konkurencji metabolicznej, wydłużenia okresu półtrwania i nieprzewidywalnego wzrostu stężenia leku w surowicy.`,
          compounds: hits.map((c) => c.i),
        });
        for (let j = 0; j < hits.length; j++) {
          for (let k = j + 1; k < hits.length; k++) {
            pairs.push({ a: hits[j].i, b: hits[k].i, level: "mod" });
          }
        }
      }
    });

    // 4. Stimulant / Cardiovascular Load (Moderate)
    if (HUB_CARDIO >= 0) {
      const hits = stackCompounds.filter((c) => c.l && c.l.includes(HUB_CARDIO));
      if (hits.length >= 2) {
        alerts.push({
          level: "mod",
          title: "⚠️ Kumulacja obciążenia sercowo-naczyniowego",
          desc: `Substancje <b>${hits.map((c) => esc(c.n)).join("</b> i <b>")}</b> wykazują działanie stymulujące lub sympatykomimetyczne. Łączenie może prowadzić do nadmiernej tachykardii, skoków ciśnienia i obciążenia mięśnia sercowego.`,
          compounds: hits.map((c) => c.i),
        });
        for (let j = 0; j < hits.length; j++) {
          for (let k = j + 1; k < hits.length; k++) {
            pairs.push({ a: hits[j].i, b: hits[k].i, level: "mod" });
          }
        }
      }
    }

    // 5. Cholinergic Load (Moderate)
    if (HUB_CHOLINERGIC >= 0) {
      const hits = stackCompounds.filter((c) => c.l && c.l.includes(HUB_CHOLINERGIC));
      if (hits.length >= 2) {
        alerts.push({
          level: "mod",
          title: "⚠️ Zwiększone obciążenie cholinergiczne",
          desc: `Substancje <b>${hits.map((c) => esc(c.n)).join("</b> i <b>")}</b> nasilają transmisję acetylocholinową. Ryzyko objawów cholinergicznych (bóle brzucha, skurcze, bradykardia, zaburzenia nastroju).`,
          compounds: hits.map((c) => c.i),
        });
        for (let j = 0; j < hits.length; j++) {
          for (let k = j + 1; k < hits.length; k++) {
            pairs.push({ a: hits[j].i, b: hits[k].i, level: "mod" });
          }
        }
      }
    }

    // 6. Hormonal Suppression (Moderate)
    if (HUB_HORMONAL >= 0) {
      const hits = stackCompounds.filter((c) => c.l && c.l.includes(HUB_HORMONAL));
      if (hits.length >= 2) {
        alerts.push({
          level: "mod",
          title: "⚠️ Tłumienie osi podwzgórze-przysadka-gonady (HPG)",
          desc: `Substancje <b>${hits.map((c) => esc(c.n)).join("</b> i <b>")}</b> wywierają ujemne sprzężenie zwrotne na wydzielanie hormonów endogennych (LH, FSH, testosteron). Wymagają protokołów odblokowujących (PCT) i kontroli laboratoryjnej.`,
          compounds: hits.map((c) => c.i),
        });
        for (let j = 0; j < hits.length; j++) {
          for (let k = j + 1; k < hits.length; k++) {
            pairs.push({ a: hits[j].i, b: hits[k].i, level: "mod" });
          }
        }
      }
    }

    // 7. Shared ChEMBL Target (Informational)
    const targetMap = new Map();
    stackCompounds.forEach((c) => {
      (c.tg || []).forEach((t) => {
        if (!targetMap.has(t)) targetMap.set(t, []);
        targetMap.get(t).push(c);
      });
    });
    targetMap.forEach((hits, t) => {
      if (hits.length >= 2) {
        alerts.push({
          level: "info",
          title: `ℹ️ Wspólny cel molekularny: ${esc(T[t].n)}`,
          desc: `Substancje <b>${hits.map((c) => esc(c.n)).join("</b> oraz <b>")}</b> wiążą ten sam cel (${esc(T[t].n)}${T[t].ty ? " · " + esc(T[t].ty) : ""}). Wskazuje na redundancję mechanizmu lub sumowanie powinowactwa receptorowego.`,
          compounds: hits.map((c) => c.i),
        });
        for (let j = 0; j < hits.length; j++) {
          for (let k = j + 1; k < hits.length; k++) {
            pairs.push({ a: hits[j].i, b: hits[k].i, level: "info" });
          }
        }
      }
    });

    // 8. Shared ATC classification (Informational)
    const atcMap = new Map();
    stackCompounds.forEach((c) => {
      (c.atc || []).forEach(([code, name]) => {
        const code4 = code.slice(0, 4);
        if (!atcMap.has(code4)) atcMap.set(code4, { name: name || code4, compounds: [] });
        atcMap.get(code4).compounds.push(c);
      });
    });
    atcMap.forEach(({ name, compounds: hits }, code4) => {
      const uniqHits = [...new Set(hits)];
      if (uniqHits.length >= 2) {
        alerts.push({
          level: "info",
          title: `ℹ️ Ta sama klasa ATC (${esc(code4)})`,
          desc: `Substancje <b>${uniqHits.map((c) => esc(c.n)).join("</b> i <b>")}</b> należą do tej samej grupy terapeutycznej (<i>${esc(name)}</i>).`,
          compounds: uniqHits.map((c) => c.i),
        });
        for (let j = 0; j < uniqHits.length; j++) {
          for (let k = j + 1; k < uniqHits.length; k++) {
            pairs.push({ a: uniqHits[j].i, b: uniqHits[k].i, level: "info" });
          }
        }
      }
    });

    const maxLevel = alerts.some((a) => a.level === "crit")
      ? "crit"
      : alerts.some((a) => a.level === "mod")
      ? "mod"
      : alerts.some((a) => a.level === "info")
      ? "info"
      : "ok";

    return { alerts, pairs, maxLevel };
  }

  // ---------- Pharmacokinetic Simulator & Collision Window Engine
  function getCompoundTh(c) {
    if (state.sim.compounds[c.i] && state.sim.compounds[c.i].tHalf > 0) {
      return state.sim.compounds[c.i].tHalf;
    }
    return c.hlh || 4.0;
  }

  function getCompoundInterval(c) {
    if (state.sim.compounds[c.i] && state.sim.compounds[c.i].interval !== undefined) {
      return state.sim.compounds[c.i].interval;
    }
    return 24; // default 1x/day
  }

  function getCompoundTmax(c, th) {
    return Math.min(1.5, Math.max(0.4, th * 0.3));
  }

  function solveKa(ke, tMax) {
    if (tMax <= 0.05) return null;
    let ka = Math.max(ke * 1.5, 1.2 / tMax + ke);
    for (let i = 0; i < 6; i++) {
      const f = Math.log(ka / ke) - (ka - ke) * tMax;
      const df = 1 / ka - tMax;
      if (Math.abs(df) < 1e-6) break;
      const n = ka - f / df;
      ka = n <= ke ? (ka + ke) / 2 : n;
    }
    return Math.max(ka, ke * 1.05);
  }

  function singleDoseConc(t, ke, ka, tMax) {
    if (t < 0) return 0;
    if (!ka || tMax <= 0.05) return 100 * Math.exp(-ke * t);
    const cPeak = Math.exp(-ke * tMax) - Math.exp(-ka * tMax);
    if (cPeak <= 1e-5) return 100 * Math.exp(-ke * t);
    const val = Math.exp(-ke * t) - Math.exp(-ka * t);
    return Math.max(0, 100 * (val / cPeak));
  }

  function simulateCompoundCurve(ke, ka, tMax, interval, horizonHours, steps = 150) {
    const dt = horizonHours / steps;
    const curve = [];
    const tau = interval > 0 ? interval : 0;
    for (let s = 0; s <= steps; s++) {
      const t = s * dt;
      let totalC = 0;
      if (tau === 0) {
        totalC = singleDoseConc(t, ke, ka, tMax);
      } else {
        const numDoses = Math.floor(t / tau);
        for (let d = 0; d <= numDoses; d++) {
          totalC += singleDoseConc(t - d * tau, ke, ka, tMax);
        }
      }
      curve.push({ t, c: totalC });
    }
    return curve;
  }

  function computeCollisionWindows(indices, simCurves, horizonHours, alerts) {
    const relevantAlerts = (alerts || []).filter((a) => a.level === "crit" || a.level === "mod");
    if (!relevantAlerts.length || indices.length < 2) return [];

    const collidingPairs = new Map();
    relevantAlerts.forEach((a) => {
      for (let j = 0; j < a.compounds.length; j++) {
        for (let k = j + 1; k < a.compounds.length; k++) {
          const key = Math.min(a.compounds[j], a.compounds[k]) + "_" + Math.max(a.compounds[j], a.compounds[k]);
          if (!collidingPairs.has(key) || a.level === "crit") {
            collidingPairs.set(key, a.level);
          }
        }
      }
    });

    if (!collidingPairs.size) return [];
    const windows = [];
    const steps = simCurves[indices[0]] ? simCurves[indices[0]].length : 0;
    if (!steps) return [];

    collidingPairs.forEach((level, key) => {
      const [i1, i2] = key.split("_").map(Number);
      const c1 = simCurves[i1], c2 = simCurves[i2];
      if (!c1 || !c2) return;

      let inWindow = false;
      let startT = 0;
      for (let s = 0; s < steps; s++) {
        const t = c1[s].t;
        const active = c1[s].c >= 40 && c2[s].c >= 40;
        if (active && !inWindow) {
          inWindow = true;
          startT = t;
        } else if (!active && inWindow) {
          inWindow = false;
          windows.push({ start: startT, end: t, level, pair: [i1, i2] });
        }
      }
      if (inWindow) {
        windows.push({ start: startT, end: horizonHours, level, pair: [i1, i2] });
      }
    });

    windows.sort((a, b) => a.start - b.start);
    const merged = [];
    windows.forEach((w) => {
      if (!merged.length) {
        merged.push({ ...w });
      } else {
        const prev = merged[merged.length - 1];
        if (w.start <= prev.end + 0.5) {
          prev.end = Math.max(prev.end, w.end);
          if (w.level === "crit") prev.level = "crit";
        } else {
          merged.push({ ...w });
        }
      }
    });
    return merged;
  }

  function renderPKChart() {
    const cv = $("pkCv");
    if (!cv) return;
    const stackIndices = [...state.stack];
    if (!stackIndices.length) return;

    const stackCompounds = stackIndices.map((i) => C[i]);
    const maxTh = Math.max(...stackCompounds.map((c) => getCompoundTh(c)));
    let horizon = 24;
    if (state.sim.horizon === "24") horizon = 24;
    else if (state.sim.horizon === "48") horizon = 48;
    else if (state.sim.horizon === "168") horizon = 168;
    else {
      horizon = Math.min(168, Math.max(24, Math.ceil((maxTh * 3.5) / 12) * 12));
    }

    const simCurves = {};
    let maxC = 120;
    stackCompounds.forEach((c) => {
      const th = getCompoundTh(c);
      const ke = Math.LN2 / th;
      const tMax = getCompoundTmax(c, th);
      const ka = solveKa(ke, tMax);
      const interval = getCompoundInterval(c);
      const curve = simulateCompoundCurve(ke, ka, tMax, interval, horizon);
      simCurves[c.i] = curve;
      curve.forEach((pt) => { if (pt.c > maxC) maxC = pt.c; });
    });

    const res = analyzeStack(stackIndices);
    const windows = computeCollisionWindows(stackIndices, simCurves, horizon, res.alerts);

    const rect = cv.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = rect.width || 360;
    const h = rect.height || 180;
    cv.width = w * dpr;
    cv.height = h * dpr;
    const ctx = cv.getContext("2d");
    ctx.scale(dpr, dpr);

    const padL = 34, padR = 12, padT = 16, padB = 22;
    const pw = Math.max(10, w - padL - padR);
    const ph = Math.max(10, h - padT - padB);
    const yMax = maxC * 1.15;

    const toX = (t) => padL + (t / horizon) * pw;
    const toY = (cVal) => (padT + ph) - (cVal / yMax) * ph;

    ctx.clearRect(0, 0, w, h);

    // Horizontal grid lines
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    const ySteps = yMax > 220 ? [0, 100, 200] : [0, 50, 100];
    ySteps.forEach((yVal) => {
      const y = toY(yVal);
      ctx.strokeStyle = yVal === 100 ? "rgba(128,128,128,0.3)" : "rgba(128,128,128,0.12)";
      ctx.setLineDash(yVal === 100 ? [3, 3] : [2, 4]);
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + pw, y);
      ctx.stroke();
      ctx.fillStyle = "rgba(140,140,140,0.8)";
      ctx.fillText(yVal + "%", padL - 4, y);
    });

    // Vertical time grid lines
    ctx.setLineDash([2, 4]);
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    const tInterval = horizon <= 24 ? 6 : horizon <= 48 ? 12 : 24;
    for (let t = 0; t <= horizon; t += tInterval) {
      const x = toX(t);
      ctx.strokeStyle = "rgba(128,128,128,0.12)";
      ctx.beginPath();
      ctx.moveTo(x, padT);
      ctx.lineTo(x, padT + ph);
      ctx.stroke();
      ctx.fillStyle = "rgba(140,140,140,0.8)";
      ctx.fillText(t + "h", x, padT + ph + 4);
    }
    ctx.setLineDash([]);

    // Collision windows shading
    windows.forEach((win) => {
      const x1 = Math.max(padL, toX(win.start));
      const x2 = Math.min(padL + pw, toX(win.end));
      if (x2 > x1) {
        ctx.fillStyle = win.level === "crit" ? "rgba(221, 72, 72, 0.18)" : "rgba(187, 101, 59, 0.18)";
        ctx.fillRect(x1, padT, x2 - x1, ph);
        ctx.strokeStyle = win.level === "crit" ? "rgba(221, 72, 72, 0.6)" : "rgba(187, 101, 59, 0.6)";
        ctx.lineWidth = 1;
        ctx.strokeRect(x1, padT, x2 - x1, ph);

        ctx.fillStyle = win.level === "crit" ? "#dd4848" : "#bb653b";
        ctx.font = "bold 9px sans-serif";
        ctx.textAlign = "left";
        ctx.fillText("🚨 Kolizja", x1 + 3, padT + 3);
      }
    });

    // Concentration curves
    stackCompounds.forEach((c) => {
      const curve = simCurves[c.i];
      if (!curve || !curve.length) return;
      ctx.strokeStyle = CL_COLORS[c.c] || "#4f98a3";
      ctx.lineWidth = 2.0;
      ctx.beginPath();
      curve.forEach((pt, idx) => {
        const x = toX(pt.t);
        const y = toY(pt.c);
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    });

    // Hover crosshair and tooltip
    const hoverT = state.sim.hoverT;
    const tt = $("pkTooltip");
    if (hoverT !== null && hoverT >= 0 && hoverT <= horizon) {
      const hx = toX(hoverT);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.setLineDash([3, 3]);
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(hx, padT);
      ctx.lineTo(hx, padT + ph);
      ctx.stroke();
      ctx.setLineDash([]);

      const tooltipLines = [`<b>t = ${hoverT.toFixed(1)} h</b>`];
      stackCompounds.forEach((c) => {
        const curve = simCurves[c.i];
        if (!curve) return;
        const stepIdx = Math.min(curve.length - 1, Math.max(0, Math.round((hoverT / horizon) * (curve.length - 1))));
        const pt = curve[stepIdx];
        const hy = toY(pt.c);
        ctx.fillStyle = CL_COLORS[c.c] || "#4f98a3";
        ctx.beginPath();
        ctx.arc(hx, hy, 4, 0, 7);
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        tooltipLines.push(`<span style="color:${CL_COLORS[c.c]}">●</span> ${esc(c.n.slice(0, 16))}: <b>${Math.round(pt.c)}%</b>`);
      });

      if (tt) {
        tt.style.display = "block";
        tt.innerHTML = tooltipLines.join("<br>");
      }
    } else if (tt) {
      tt.style.display = "none";
    }
  }

  const PRESETS = {
    nootropic: {
      name: "Nootropowy klasyk",
      ids: ["caffeine-compound", "theanine-compound"],
    },
    serotonin: {
      name: "Ryzyko: Zespół serotoninowy",
      ids: ["sertraline-compound", "tramadol-compound"],
    },
    respiratory: {
      name: "Ryzyko: Depresja oddechowa",
      ids: ["morphine-compound", "diazepam-compound"],
    },
    cyp: {
      name: "Wąskie gardło CYP3A4",
      ids: ["quetiapine-compound", "clarithromycin-compound"],
    },
  };

  function loadPreset(key) {
    const p = PRESETS[key];
    if (!p) return;
    state.stack.clear();
    p.ids.forEach((id) => {
      const idx = C.findIndex((c) => c.id === id);
      if (idx >= 0) state.stack.add(idx);
    });
    saveStack();
    updateStackUI();
    if (state.sel && state.sel.type === "compound") select(state.sel);
    draw();
  }

  function updateStackUI() {
    const countBadge = $("stackCountBadge");
    if (countBadge) countBadge.textContent = state.stack.size;
    const pill = $("stackStatusPill");
    const body = $("stackBody");
    if (!body) return;

    if (state.stack.size === 0) {
      if (pill) { pill.className = "tag"; pill.textContent = "pusty"; }
      body.innerHTML = `
        <div style="text-align:center;padding:1.5rem 0.5rem;color:var(--color-text-muted)">
          <div style="font-size:2rem;margin-bottom:.5rem">🧪</div>
          <b style="color:var(--color-text);display:block;margin-bottom:.4rem">Twój stack jest pusty</b>
          <p style="font-size:var(--text-xs);line-height:1.45">Dodaj substancje do zestawu klikając przycisk <b>+ Dodaj do stacka</b> na karcie dowolnego leku lub przetestuj gotowy zestaw demonstracyjny:</p>
        </div>
        <div class="label">Zestawy demonstracyjne (kliknij)</div>
        <div style="display:grid;gap:6px">
          <button class="preset-btn" data-preset="nootropic" style="text-align:left;padding:.5rem .7rem;border-radius:var(--radius-md)">
            <b>Nootropowy klasyk</b> · Kofeina + L-Teanina<br>
            <small style="color:var(--color-success)">✓ Synergia pro-poznawcza, brak kolizji</small>
          </button>
          <button class="preset-btn" data-preset="serotonin" style="text-align:left;padding:.5rem .7rem;border-radius:var(--radius-md)">
            <b>🚨 Zespół serotoninowy</b> · Sertralina + Tramadol<br>
            <small style="color:var(--color-error)">Krytyczne nasilenie transmisji 5-HT</small>
          </button>
          <button class="preset-btn" data-preset="respiratory" style="text-align:left;padding:.5rem .7rem;border-radius:var(--radius-md)">
            <b>🚨 Depresja oddechowa</b> · Morfina + Diazepam<br>
            <small style="color:var(--color-error)">Opioid + modulator GABA-A</small>
          </button>
          <button class="preset-btn" data-preset="cyp" style="text-align:left;padding:.5rem .7rem;border-radius:var(--radius-md)">
            <b>⚠️ Wąskie gardło CYP3A4</b> · Kwetiapina + Klarytromycyna<br>
            <small style="color:var(--color-warning)">Konkurencja metaboliczna o izoenzym</small>
          </button>
        </div>`;
      wireStackBody();
      return;
    }

    const res = analyzeStack([...state.stack]);
    if (pill) {
      if (res.maxLevel === "crit") { pill.className = "tag warn"; pill.textContent = "🚨 Ryzyko krytyczne"; }
      else if (res.maxLevel === "mod") { pill.className = "tag warn"; pill.textContent = "⚠️ Umiarkowane ryzyko"; }
      else if (res.maxLevel === "info") { pill.className = "tag"; pill.textContent = "ℹ️ Redundancja"; }
      else { pill.className = "tag ok"; pill.textContent = "✓ Brak kolizji"; }
    }

    const chips = [...state.stack].map((i) => {
      const c = C[i];
      return `
        <div class="stack-chip">
          <div style="display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden">
            <span class="dot" style="background:${CL_COLORS[c.c]};width:8px;height:8px"></span>
            <button data-c="${c.i}" style="background:none;border:0;color:var(--color-text);font-weight:600;cursor:pointer;padding:0;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(c.n)}</button>
            <small style="color:var(--color-text-muted);white-space:nowrap">(${esc(GR[c.g].label)})</small>
          </div>
          <button class="del" data-remove="${c.i}" title="Usuń ze stacka">✕</button>
        </div>`;
    }).join("");

    let alertsHtml = "";
    if (state.stack.size < 2) {
      alertsHtml = '<p class="note" style="padding:.4rem 0">Dodaj przynajmniej drugą substancję, aby silnik przeanalizował możliwe interakcje.</p>';
    } else if (res.alerts.length === 0) {
      alertsHtml = '<div class="alert-box alert-ok"><b>✓ Brak wykrytych kolizji</b>Silnik nie znalazł w bazie danych bezpośrednich konfliktów (toksyczność serotoninowa, depresja oddechowa ani wspólne szlaki CYP) dla wybranego zestawu.</div>';
    } else {
      alertsHtml = `<div style="display:grid;gap:8px">${res.alerts.map((a) => `
        <div class="alert-box alert-${a.level}">
          <b>${esc(a.title)}</b>
          <div>${a.desc}</div>
        </div>`).join("")}</div>`;
    }

    // PK Simulator Section
    let pkSectionHtml = "";
    if (state.stack.size >= 1) {
      const curHorizon = state.sim.horizon || "auto";
      const stackList = [...state.stack].map((i) => C[i]);
      const simCurves = {};
      const maxTh = Math.max(...stackList.map((c) => getCompoundTh(c)));
      let horizonNum = 24;
      if (curHorizon === "24") horizonNum = 24;
      else if (curHorizon === "48") horizonNum = 48;
      else if (curHorizon === "168") horizonNum = 168;
      else horizonNum = Math.min(168, Math.max(24, Math.ceil((maxTh * 3.5) / 12) * 12));

      stackList.forEach((c) => {
        const th = getCompoundTh(c);
        const ke = Math.LN2 / th;
        const tMax = getCompoundTmax(c, th);
        const ka = solveKa(ke, tMax);
        const interval = getCompoundInterval(c);
        simCurves[c.i] = simulateCompoundCurve(ke, ka, tMax, interval, horizonNum);
      });

      const winList = computeCollisionWindows([...state.stack], simCurves, horizonNum, res.alerts);
      const winBanners = winList.map((w) => `
        <div class="alert-box ${w.level === 'crit' ? 'alert-crit' : 'alert-mod'}" style="padding:4px 8px;font-size:11px">
          <b>${w.level === 'crit' ? '🚨' : '⚠️'} Szczytowe Okno Kolizji: ${w.start.toFixed(1)} h – ${w.end.toFixed(1)} h</b>
          <span>W tym przedziale stężenia obu kolidujących leków przekraczają 40% Cmax.</span>
        </div>
      `).join("");

      const rowsHtml = stackList.map((c) => {
        const th = getCompoundTh(c);
        const ke = Math.LN2 / th;
        const curInterval = getCompoundInterval(c);
        const rac = curInterval > 0 ? (1 / (1 - Math.exp(-ke * curInterval))).toFixed(2) : "1.00";
        const tss = Math.round(5 * th);
        const hasDb = !!c.hlh;
        return `
          <div class="pk-row">
            <div style="display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden">
              <span class="dot" style="background:${CL_COLORS[c.c]};width:8px;height:8px"></span>
              <span style="font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(c.n)}">${esc(c.n)}</span>
            </div>
            <div style="display:flex;align-items:center;gap:4px">
              <select data-interval-for="${c.i}" aria-label="Interwał dawkowania dla ${esc(c.n)}">
                <option value="24" ${curInterval===24?'selected':''}>q24h (1x/d)</option>
                <option value="12" ${curInterval===12?'selected':''}>q12h (2x/d)</option>
                <option value="8" ${curInterval===8?'selected':''}>q8h (3x/d)</option>
                <option value="0" ${curInterval===0?'selected':''}>1x (bolus)</option>
              </select>
              <div style="display:flex;align-items:center;gap:2px">
                <input type="number" step="0.5" min="0.2" max="1000" data-thalf-for="${c.i}" value="${th.toFixed(1)}" aria-label="Okres półtrwania t1/2">
                <small style="color:var(--color-text-muted)">h${hasDb ? '' : '*'}</small>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:4px">
              <span class="pk-pill tag ok" title="Wskaźnik kumulacji w stanie stacjonarnym (Rac)">Rac: ${rac}×</span>
              <span class="pk-pill tag" title="Czas do osiągnięcia 97% stanu stacjonarnego (5x t1/2)">Css: ~${tss}h</span>
            </div>
          </div>`;
      }).join("");

      pkSectionHtml = `
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:.4rem">
          <div class="label" style="margin-bottom:0">Krzywe stężeń & kumulacja (PK)</div>
          <div style="display:flex;gap:3px">
            <button class="preset-btn ${curHorizon==='auto'?'active':''}" data-horizon="auto">Auto (${horizonNum}h)</button>
            <button class="preset-btn ${curHorizon==='24'?'active':''}" data-horizon="24">24h</button>
            <button class="preset-btn ${curHorizon==='48'?'active':''}" data-horizon="48">48h</button>
            <button class="preset-btn ${curHorizon==='168'?'active':''}" data-horizon="168">7d</button>
          </div>
        </div>
        <div class="pk-box">
          <div class="pk-chart-wrap">
            <canvas id="pkCv"></canvas>
            <div id="pkTooltip" class="pk-tooltip" style="display:none"></div>
          </div>
          ${winBanners}
          <div style="display:grid;gap:4px">${rowsHtml}</div>
        </div>`;
    }

    body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div class="label" style="margin-bottom:0">Substancje w stacku (${state.stack.size})</div>
      </div>
      <div style="display:grid;gap:5px">${chips}</div>
      <div class="label" style="margin-top:.4rem">Raport analizy farmakodynamicznej i CYP</div>
      ${alertsHtml}
      ${pkSectionHtml}
      <div class="label" style="margin-top:.6rem">Zestawy demonstracyjne</div>
      <div style="display:flex;gap:4px;flex-wrap:wrap">
        <button class="preset-btn" data-preset="nootropic">Kofeina + Teanina</button>
        <button class="preset-btn" data-preset="serotonin">Sertralina + Tramadol 🚨</button>
        <button class="preset-btn" data-preset="respiratory">Morfina + Diazepam 🚨</button>
        <button class="preset-btn" data-preset="cyp">CYP3A4 ⚠️</button>
      </div>`;
    wireStackBody();
  }

  function wireStackBody() {
    const body = $("stackBody");
    if (!body) return;
    body.querySelectorAll("[data-c]").forEach((b) => {
      b.onclick = () => select({ type: "compound", i: +b.dataset.c }, true);
    });
    body.querySelectorAll("[data-remove]").forEach((b) => {
      b.onclick = () => toggleInStack(+b.dataset.remove);
    });
    body.querySelectorAll("[data-preset]").forEach((b) => {
      b.onclick = () => loadPreset(b.dataset.preset);
    });
    body.querySelectorAll("[data-horizon]").forEach((b) => {
      b.onclick = () => {
        state.sim.horizon = b.dataset.horizon;
        updateStackUI();
      };
    });
    body.querySelectorAll("[data-interval-for]").forEach((sel) => {
      sel.onchange = () => {
        const idx = +sel.dataset.intervalFor;
        if (!state.sim.compounds[idx]) state.sim.compounds[idx] = {};
        state.sim.compounds[idx].interval = +sel.value;
        updateStackUI();
      };
    });
    body.querySelectorAll("[data-thalf-for]").forEach((inp) => {
      inp.onchange = () => {
        const idx = +inp.dataset.thalfFor;
        const val = parseFloat(inp.value);
        if (val > 0) {
          if (!state.sim.compounds[idx]) state.sim.compounds[idx] = {};
          state.sim.compounds[idx].tHalf = val;
          updateStackUI();
        }
      };
    });

    const pkCv = $("pkCv");
    if (pkCv) {
      pkCv.onmousemove = (e) => {
        const r = pkCv.getBoundingClientRect();
        const padL = 34, padR = 12;
        const pw = Math.max(10, r.width - padL - padR);
        const x = e.clientX - r.left;
        let horizon = 24;
        const stackCompounds = [...state.stack].map((i) => C[i]);
        const maxTh = Math.max(...stackCompounds.map((c) => getCompoundTh(c)));
        if (state.sim.horizon === "24") horizon = 24;
        else if (state.sim.horizon === "48") horizon = 48;
        else if (state.sim.horizon === "168") horizon = 168;
        else horizon = Math.min(168, Math.max(24, Math.ceil((maxTh * 3.5) / 12) * 12));

        const t = Math.max(0, Math.min(horizon, ((x - padL) / pw) * horizon));
        state.sim.hoverT = t;
        renderPKChart();
      };
      pkCv.onmouseleave = () => {
        state.sim.hoverT = null;
        renderPKChart();
      };
    }

    renderPKChart();
  }

  function exportStackToObsidian() {
    const list = [...state.stack].map((i) => C[i]);
    if (!list.length) return;
    const res = analyzeStack([...state.stack]);
    const names = list.map((c) => c.n).join(" + ");

    const simCurves = {};
    const maxTh = Math.max(...list.map((c) => getCompoundTh(c)));
    const horizon = Math.min(168, Math.max(24, Math.ceil((maxTh * 3.5) / 12) * 12));
    list.forEach((c) => {
      const th = getCompoundTh(c);
      const ke = Math.LN2 / th;
      const tMax = getCompoundTmax(c, th);
      const ka = solveKa(ke, tMax);
      const interval = getCompoundInterval(c);
      simCurves[c.i] = simulateCompoundCurve(ke, ka, tMax, interval, horizon);
    });
    const windows = computeCollisionWindows([...state.stack], simCurves, horizon, res.alerts);

    const pkRows = list.map((c) => {
      const th = getCompoundTh(c);
      const ke = Math.LN2 / th;
      const tMax = getCompoundTmax(c, th);
      const interval = getCompoundInterval(c);
      const rac = interval > 0 ? (1 / (1 - Math.exp(-ke * interval))).toFixed(2) : "1.00";
      const tss = Math.round(5 * th);
      const schedStr = interval === 0 ? "Pojedyncza dawka (bolus)" : `co ${interval} h (${24 / interval}x/d)`;
      return `| ${c.n} | ${th.toFixed(1)} h | ${tMax.toFixed(1)} h | ${schedStr} | ${rac}× | ~${tss} h |`;
    });

    const lines = [
      `# Raport analizy stacka: ${names}`,
      "",
      `> Data wygenerowania: ${new Date().toISOString().slice(0, 10)}`,
      "> Narzędzie: Pharma-vault Stack Builder & PK Simulator (v3.7)",
      "",
      "## 1. Wybrane substancje",
      "",
      ...list.map((c) => `- [[${c.f.split('/').pop().replace(/\.md$/, '')}|${c.n}]] (${GR[c.g].label})`),
      "",
      "## 2. Wyniki analizy interakcji farmakodynamicznych i CYP",
      "",
    ];
    if (!res.alerts.length) {
      lines.push("> [!success] Brak bezpośrednich kolizji", "> Silnik Pharma-vault nie wykrył bezpośrednich nakładań krytycznych hubów bezpieczeństwa ani konkurencji enzymatycznej CYP dla wybranego zestawu.", "");
    } else {
      res.alerts.forEach((a) => {
        const callout = a.level === "crit" ? "danger" : a.level === "mod" ? "warning" : "info";
        lines.push(`> [!${callout}] ${a.title}`, `> ${a.desc.replace(/<[^>]+>/g, '')}`, "");
      });
    }

    lines.push(
      "## 3. Parametry farmakokinetyczne i kumulacja (Steady State)",
      "",
      "| Substancja | t½ (eliminacja) | Tmax (szczyt) | Schemat dawkowania | Wskaźnik kumulacji (Rac) | Czas do Css (5×t½) |",
      "| :--- | :--- | :--- | :--- | :--- | :--- |",
      ...pkRows,
      ""
    );

    if (windows.length) {
      lines.push(
        "> [!danger] Wykryte Okna Kolizji (Collision Windows)",
        ...windows.map((w) => `> • **${w.start.toFixed(1)} h – ${w.end.toFixed(1)} h**: jednoczesne stężenia osoczowe $\\ge 40\\%$ dla kolidującej pary leków (${w.level === 'crit' ? 'poziom krytyczny' : 'poziom umiarkowany'}).`),
        ""
      );
    }

    lines.push(
      "## 4. Zastrzeżenie edukacyjne",
      "",
      "> [!warning] Materiał edukacyjny",
      "> Niniejszy raport opiera się na wyekstrahowanych automatycznie danych mechanistycznych ChEMBL, substratach CYP, hubach bezpieczeństwa oraz 1-kompartmentowym modelu farmakokinetycznym. Nie uwzględnia indywidualnego dawkowania, tolerancji, zmienności genetycznej ani chorób współistniejących. Nie stanowi porady lekarskiej.",
      ""
    );
    const md = lines.join("\n");
    const uri = `obsidian://new?vault=vault&name=${encodeURIComponent("Analiza stacka - " + names.slice(0, 50))}&content=${encodeURIComponent(md)}`;
    navigator.clipboard?.writeText(md);
    window.open(uri, "_blank");
    const btn = $("stackObsidianBtn");
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = "✓ Otwarto!";
      setTimeout(() => { btn.textContent = orig; }, 2000);
    }
  }

  function shareStackLink() {
    if (!state.stack.size) return;
    const ids = [...state.stack].map((i) => C[i].id).join(",");
    const url = `${location.origin}${location.pathname}#stack=${ids}`;
    history.replaceState(null, "", `#stack=${ids}`);
    navigator.clipboard?.writeText(url);
    const btn = $("stackShareBtn");
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = "✓ Skopiowano!";
      setTimeout(() => { btn.textContent = orig; }, 2000);
    }
  }

  // ---------- filters
  const HB = [-2, -1, 0, 1, 2, 3, 4]; // log10(hours) bin edges: 36 s … 10^4 h
  const binOf = (h) => Math.max(0, Math.min(HB.length - 2, Math.floor(Math.log10(h)) - HB[0]));
  const visible = (c) => (!state.stackOnly || state.stack.has(c.i)) && state.clusters.has(c.c) && (!state.pkOnly || c.pk) && (!state.cypOnly || (c.pk && c.pk.cyp)) && (state.hub === null || c.l.includes(state.hub))
    && (!state.ver || VER_TEST[state.ver](c)) && (state.hlBin === null || (c.hlh && binOf(c.hlh) === state.hlBin));
  function stats() {
    const vis = C.filter(visible).length;
    $("sAll").textContent = G.meta.substances.toLocaleString("pl");
    $("sVis").textContent = vis.toLocaleString("pl");
    $("sPk").textContent = G.meta.with_pk.toLocaleString("pl");
    $("sHl").textContent = C.filter((c) => c.pk && c.pk.hl).length.toLocaleString("pl");
    $("sTg").textContent = (G.meta.with_targets || 0).toLocaleString("pl");
    $("sFda").textContent = (G.meta.pk_fda_consistent || 0).toLocaleString("pl");
    $("sEma").textContent = (G.meta.pk_ema_consistent || 0).toLocaleString("pl");
    $("sId").textContent = (G.meta.identity_confirmed || 0).toLocaleString("pl");
    histogram();
    if (state.sel && state.sel.type !== "compound") select(state.sel);
  }
  // ---------- t½ histogram (log scale, visible compounds)
  function histogram() {
    const box = $("hist"); if (!box) return;
    const prev = state.hlBin; state.hlBin = null;
    const counts = HB.slice(0, -1).map(() => 0);
    C.forEach((c) => { if (c.hlh && visible(c)) counts[binOf(c.hlh)]++; });
    state.hlBin = prev;
    const mx = Math.max(1, ...counts), lab = ["<0,1 h", "0,1–1 h", "1–10 h", "10–100 h", "100–1000 h", ">1000 h"];
    box.innerHTML = counts.map((n, i) => `<button class="bar${state.hlBin === i ? " on" : ""}" data-bin="${i}" title="${lab[i]}: ${n} subst." aria-pressed="${state.hlBin === i}">
      <span style="height:${Math.round(4 + 56 * n / mx)}px"></span><b>${n}</b><small>${lab[i]}</small></button>`).join("");
    box.querySelectorAll("[data-bin]").forEach((b) => b.onclick = () => { const v = +b.dataset.bin; state.hlBin = state.hlBin === v ? null : v; stats(); search(); draw(); });
  }

  // ---------- view
  function resize() {
    const r = cv.getBoundingClientRect(); dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; draw();
  }
  const fitK = () => Math.min(W, H) / (2 * (G.meta.radius + Math.max(...GR.map((g) => g.r)) + 140));
  function fit() {
    if (!W || !H) return;
    state.k = fitK(); state.tx = W / 2; state.ty = H / 2; draw();
  }
  const toScreen = (x, y) => [x * state.k + state.tx, y * state.k + state.ty];
  const toWorld = (sx, sy) => [(sx - state.tx) / state.k, (sy - state.ty) / state.k];
  function animateTo(x, y, k) {
    const s0 = { ...state }, t0 = performance.now(), dur = 520;
    const tx1 = W / 2 - x * k, ty1 = H / 2 - y * k;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      state.k = clampK(s0.k + (k - s0.k) * e); state.tx = s0.tx + (tx1 - s0.tx) * e; state.ty = s0.ty + (ty1 - s0.ty) * e;
      draw(); if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

  // ---------- drawing
  function draw() { cancelAnimationFrame(raf); raf = requestAnimationFrame(render); }
  function render() {
    const k = state.k, text = css("--color-text"), muted = css("--color-text-muted"), faint = css("--color-text-faint"),
      primary = css("--color-primary"), warn = css("--color-warning"), bg = css("--color-bg"),
      err = css("--color-error") || "#dd6974", accent2 = css("--color-accent2") || "#c2477e",
      fBody = css("--font-body"), fDisp = css("--font-display");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    const sel = state.sel, hubSel = sel && sel.type === "core" ? sel.i : state.hub;
    const focus = sel && sel.type === "target" ? new Set(byTarget[sel.i]) : null;

    // group discs
    GR.forEach((g, gi) => {
      const [x, y] = toScreen(g.x, g.y), on = state.clusters.has(g.c);
      ctx.beginPath(); ctx.arc(x, y, Math.max(0.5, g.r * k), 0, 7);
      ctx.fillStyle = CL_COLORS[g.c] + (on ? "12" : "05"); ctx.fill();
      ctx.strokeStyle = CL_COLORS[g.c] + (sel && sel.type === "group" && sel.i === gi ? "cc" : on ? "40" : "15");
      ctx.lineWidth = sel && sel.type === "group" && sel.i === gi ? 2 : 1; ctx.stroke();
    });

    // core edges
    ctx.lineWidth = 1;
    G.coreEdges.forEach(([a, b]) => {
      const [x1, y1] = toScreen(CORE[a].x, CORE[a].y), [x2, y2] = toScreen(CORE[b].x, CORE[b].y);
      ctx.strokeStyle = (hubSel === a || hubSel === b) ? primary : faint + "66";
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    });

    // edges of focused core node (only when the set is small enough to be legible)
    if (hubSel !== null && hubSel !== undefined) {
      const linked = byCore[hubSel].filter(visible);
      if (linked.length <= 700) {
        const [hx, hy] = toScreen(CORE[hubSel].x, CORE[hubSel].y);
        ctx.strokeStyle = primary + "22"; ctx.beginPath();
        linked.forEach((c) => { const [x, y] = toScreen(c.x, c.y); ctx.moveTo(hx, hy); ctx.lineTo(x, y); });
        ctx.stroke();
      }
    }
    // edges of selected / hovered compound
    [sel && sel.type === "compound" ? C[sel.i] : null, state.hover].forEach((c, n) => {
      if (!c) return;
      const [x, y] = toScreen(c.x, c.y), [gx, gy] = toScreen(GR[c.g].x, GR[c.g].y);
      ctx.strokeStyle = n === 0 ? primary : muted; ctx.lineWidth = n === 0 ? 1.6 : 1;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(gx, gy);
      c.l.forEach((li) => { const [cx, cy] = toScreen(CORE[li].x, CORE[li].y); ctx.moveTo(x, y); ctx.lineTo(cx, cy); });
      ctx.stroke();
    });

    // shared-target edges of the selected compound / members of a selected target
    const selC = sel && sel.type === "compound" ? C[sel.i] : null;
    if (state.rel && selC && selC.tg) {
      const [x, y] = toScreen(selC.x, selC.y), nb = neighbours(selC).slice(0, 60);
      ctx.strokeStyle = accent2; ctx.lineWidth = 1.3; ctx.setLineDash([4, 3]); ctx.beginPath();
      nb.forEach(({ i }) => { const o = C[i]; if (!visible(o)) return; const [ox, oy] = toScreen(o.x, o.y); ctx.moveTo(x, y); ctx.quadraticCurveTo((x + ox) / 2 + (oy - y) * 0.15, (y + oy) / 2 - (ox - x) * 0.15, ox, oy); });
      ctx.stroke(); ctx.setLineDash([]);
    }
    if (focus && focus.size < 400) {
      const pts = [...focus].map((i) => C[i]).filter(visible);
      if (pts.length > 1) {
        const cx = pts.reduce((a, c) => a + c.x, 0) / pts.length, cy = pts.reduce((a, c) => a + c.y, 0) / pts.length;
        const [sx, sy] = toScreen(cx, cy); ctx.strokeStyle = accent2 + "99"; ctx.lineWidth = 1; ctx.beginPath();
        pts.forEach((c) => { const [x, y] = toScreen(c.x, c.y); ctx.moveTo(sx, sy); ctx.lineTo(x, y); }); ctx.stroke();
        ctx.beginPath(); ctx.arc(sx, sy, 7, 0, 7); ctx.fillStyle = accent2; ctx.fill();
      }
    }

    // stack interaction curves
    if (state.stack.size >= 2) {
      const res = analyzeStack([...state.stack]);
      res.pairs.forEach(({ a, b, level }) => {
        const ca = C[a], cb = C[b];
        if (!visible(ca) || !visible(cb)) return;
        const [x1, y1] = toScreen(ca.x, ca.y), [x2, y2] = toScreen(cb.x, cb.y);
        ctx.strokeStyle = level === "crit" ? "#dd4848" : level === "mod" ? "#bb653b" : "#a86fdf";
        ctx.lineWidth = level === "crit" ? 2.6 : 1.8;
        ctx.beginPath();
        const mx = (x1 + x2) / 2 + (y2 - y1) * 0.22, my = (y1 + y2) / 2 - (x2 - x1) * 0.22;
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(mx, my, x2, y2);
        ctx.stroke();
      });
    }

    // compounds
    const baseR = Math.max(1.4, Math.min(5.5, 4 * Math.sqrt(k)));
    C.forEach((c) => {
      const [x, y] = toScreen(c.x, c.y);
      if (x < -10 || y < -10 || x > W + 10 || y > H + 10) return;
      const on = visible(c), hl = hubSel !== null && hubSel !== undefined && c.l.includes(hubSel);
      ctx.globalAlpha = on ? (focus ? (focus.has(c.i) ? 1 : 0.15) : hubSel !== null && hubSel !== undefined && !hl ? 0.18 : 1) : 0.07;
      ctx.fillStyle = CL_COLORS[c.c];
      ctx.beginPath(); ctx.arc(x, y, c.pk ? baseR : baseR * 0.7, 0, 7); ctx.fill();
      if (c.pk && c.pk.cyp && k > 0.9) { ctx.strokeStyle = warn; ctx.lineWidth = 1; ctx.stroke(); }
      if (((c.v && c.v.s === "discrepant") || (c.ve && c.ve.s === "discrepant")) && k > 1.4) { ctx.strokeStyle = err; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(x, y, baseR + 2, 0, 7); ctx.stroke(); }
      if (state.stack.has(c.i)) {
        ctx.strokeStyle = "#d19900";
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.arc(x, y, baseR + 4.5, 0, 7);
        ctx.stroke();
      }
    });
    ctx.globalAlpha = 1;

    // compound labels (level of detail)
    ctx.textBaseline = "middle"; ctx.textAlign = "left";
    if (k >= 2.6) {
      ctx.font = `500 ${Math.min(13, 9 + k)}px ${fBody}`; ctx.fillStyle = muted;
      C.forEach((c) => {
        if (!visible(c)) return;
        const [x, y] = toScreen(c.x, c.y);
        if (x < 0 || y < 0 || x > W || y > H) return;
        const lab = c.n.length > 22 ? c.n.slice(0, 21) + "…" : c.n;
        ctx.fillText(lab, x + baseR + 3, y);
      });
    } else if (state.stack.size > 0) {
      ctx.font = `600 12px ${fBody}`;
      state.stack.forEach((i) => {
        const sc = C[i];
        if (!visible(sc)) return;
        const [sx, sy] = toScreen(sc.x, sc.y);
        if (sx < 0 || sy < 0 || sx > W || sy > H) return;
        halo(sc.n, sx + baseR + 6, sy, "#d19900", bg);
      });
    }

    // group + cluster labels
    ctx.textAlign = "center";
    if (k > 0.22) {
      GR.forEach((g) => {
        if (!state.clusters.has(g.c) || g.r * k < 18) return;
        const [x, y] = toScreen(g.x, g.y - g.r - 12 / k);
        ctx.font = `600 ${Math.min(14, 10 + k * 2)}px ${fBody}`;
        halo(g.label, x, y, text, bg);
      });
    }
    if (k < 0.2) G.clusters.forEach((cl, ci) => {
      const ext = G.meta.radius + Math.max(...GR.filter((g) => g.c === ci).map((g) => g.r)) + 70;
      const [x, y] = toScreen(Math.cos(cl.angle) * ext, Math.sin(cl.angle) * ext);
      ctx.font = `700 ${Math.max(12, Math.min(22, 26 * k))}px ${fDisp}`;
      ctx.globalAlpha = state.clusters.has(ci) ? 1 : 0.35;
      halo(CL_PL[cl.name] || cl.name, x, y, CL_COLORS[ci], bg); ctx.globalAlpha = 1;
    });

    // core nodes
    CORE.forEach((n, i) => {
      const [x, y] = toScreen(n.x, n.y), r = Math.max(6, 11 * Math.sqrt(k)), active = hubSel === i;
      ctx.beginPath();
      if (n.kind === "hub") { ctx.moveTo(x, y - r); ctx.lineTo(x + r, y); ctx.lineTo(x, y + r); ctx.lineTo(x - r, y); ctx.closePath(); }
      else ctx.arc(x, y, n.kind === "concept" ? r * 0.75 : r * 0.9, 0, 7);
      ctx.fillStyle = n.kind === "hub" ? warn : n.kind === "pathway" ? primary : faint;
      ctx.fill(); if (active) { ctx.strokeStyle = text; ctx.lineWidth = 2; ctx.stroke(); }
      ctx.font = `600 ${Math.max(10, Math.min(14, 13 * Math.sqrt(k)))}px ${fBody}`;
      const words = n.name.split(" "), lines = [];
      words.forEach((w) => { const last = lines[lines.length - 1]; if (last && (last + " " + w).length <= 18) lines[lines.length - 1] = last + " " + w; else lines.push(w); });
      const lh = Math.max(11, Math.min(15, 14 * Math.sqrt(k)));
      lines.forEach((ln, li) => halo(ln, x, y + r + 9 + li * lh, active ? text : muted, bg));
    });

    // selected compound label always
    if (sel && sel.type === "compound") {
      const c = C[sel.i], [x, y] = toScreen(c.x, c.y);
      ctx.beginPath(); ctx.arc(x, y, baseR + 4, 0, 7); ctx.strokeStyle = text; ctx.lineWidth = 2; ctx.stroke();
      ctx.font = `600 13px ${fBody}`; ctx.textAlign = "left"; halo(c.n, x + baseR + 8, y, text, bg);
    }
  }
  function halo(t, x, y, color, bg) {
    ctx.lineWidth = 4; ctx.strokeStyle = bg; ctx.lineJoin = "round"; ctx.strokeText(t, x, y);
    ctx.fillStyle = color; ctx.fillText(t, x, y);
  }

  // ---------- hit testing
  function hit(sx, sy) {
    const [wx, wy] = toWorld(sx, sy), rr = Math.max(8, 7 / state.k);
    for (let i = 0; i < CORE.length; i++) {
      const [x, y] = toScreen(CORE[i].x, CORE[i].y);
      if (Math.hypot(x - sx, y - sy) < Math.max(10, 12 * Math.sqrt(state.k))) return { type: "core", i };
    }
    let best = null, bd = Infinity;
    for (const c of C) {
      if (!visible(c)) continue;
      const d = Math.hypot(c.x - wx, c.y - wy);
      if (d < bd) { bd = d; best = c; }
    }
    if (best && bd * state.k < Math.max(7, 6 * Math.sqrt(state.k)) && bd < rr * 3) return { type: "compound", i: best.i };
    for (let i = 0; i < GR.length; i++) if (Math.hypot(GR[i].x - wx, GR[i].y - wy) < GR[i].r) return { type: "group", i };
    return null;
  }

  // ---------- pointer interaction (pan, wheel zoom, pinch)
  const ptrs = new Map(); let drag = null, moved = false, pinch0 = null;
  cv.addEventListener("pointerdown", (e) => {
    document.querySelector(".hint").style.display = "none";
    cv.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.offsetX, e.offsetY]); moved = false;
    if (ptrs.size === 1) drag = { x: e.offsetX, y: e.offsetY, tx: state.tx, ty: state.ty };
    if (ptrs.size === 2) { drag = null; moved = true; const [a, b] = [...ptrs.values()]; pinch0 = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), k: state.k, tx: state.tx, ty: state.ty, cx: (a[0] + b[0]) / 2, cy: (a[1] + b[1]) / 2 }; }
    cv.classList.add("drag");
  });
  cv.addEventListener("pointermove", (e) => {
    if (ptrs.has(e.pointerId)) ptrs.set(e.pointerId, [e.offsetX, e.offsetY]);
    if (ptrs.size === 2 && pinch0 && pinch0.d > 0) {
      const [a, b] = [...ptrs.values()], f = Math.hypot(a[0] - b[0], a[1] - b[1]) / pinch0.d;
      zoomAt(pinch0.cx, pinch0.cy, clampK(pinch0.k * f) / state.k); moved = true; return;
    }
    if (drag) {
      const dx = e.offsetX - drag.x, dy = e.offsetY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 3) moved = true;
      state.tx = drag.tx + dx; state.ty = drag.ty + dy; draw(); return;
    }
    const h = hit(e.offsetX, e.offsetY);
    const hc = h && h.type === "compound" ? C[h.i] : null;
    if (hc !== state.hover) { state.hover = hc; draw(); }
    if (h) {
      const label = h.type === "compound" ? `${C[h.i].n} · ${GR[C[h.i].g].label}` : h.type === "core" ? `${CORE[h.i].name} · ${KIND_PL[CORE[h.i].kind]}` : `${GR[h.i].label} · ${GR[h.i].n} subst.`;
      tip.textContent = label; tip.style.display = "block";
      tip.style.left = Math.min(e.offsetX + 14, W - tip.offsetWidth - 8) + "px"; tip.style.top = e.offsetY + 14 + "px";
      cv.style.cursor = "pointer";
    } else { tip.style.display = "none"; cv.style.cursor = ""; }
  });
  const end = (e) => {
    ptrs.delete(e.pointerId);
    if (ptrs.size < 2) pinch0 = null;
    if (ptrs.size === 1) {
      const [[px, py]] = ptrs.values();
      drag = { x: px, y: py, tx: state.tx, ty: state.ty };
    } else if (ptrs.size === 0) {
      cv.classList.remove("drag");
      if (drag && !moved) select(hit(e.offsetX, e.offsetY));
      drag = null;
    }
  };
  cv.addEventListener("pointerup", end); cv.addEventListener("pointercancel", end);
  cv.addEventListener("pointerleave", () => { tip.style.display = "none"; if (state.hover) { state.hover = null; draw(); } });
  const clampK = (k) => Math.max(0.08, Math.min(12, k));
  function zoomAt(sx, sy, f) {
    const nk = clampK(state.k * f); f = nk / state.k;
    state.tx = sx - (sx - state.tx) * f; state.ty = sy - (sy - state.ty) * f; state.k = nk; draw();
  }
  cv.addEventListener("wheel", (e) => { e.preventDefault(); zoomAt(e.offsetX, e.offsetY, Math.exp(-e.deltaY * 0.0015)); }, { passive: false });

  // ---------- selection & detail panel
  const rng = (a, u = "") => a ? `${a[0]}${a[1] ? "–" + a[1] : ""}${u ? " " + u : ""}` : null;
  function select(h, fly) {
    state.sel = h; const p = $("panel"), noHash = location.pathname + location.search;
    if (!h) { p.innerHTML = '<p class="empty">Wybierz substancję, grupę albo hub, aby zobaczyć szczegóły.</p>'; history.replaceState(null, "", noHash); draw(); return; }
    if (h.type === "compound") {
      const c = C[h.i]; p.innerHTML = compoundHtml(c); history.replaceState(null, "", "#" + c.id);
      if (fly) animateTo(c.x, c.y, Math.max(state.k, 3.2));
    } else if (h.type === "core") {
      const n = CORE[h.i], linked = byCore[h.i], vis = linked.filter(visible);
      p.innerHTML = `<div class="card-head"><div class="label" style="margin-bottom:0">${KIND_PL[n.kind]}</div><button class="card-close" id="cardClose" title="Zamknij szczegóły (Esc)" aria-label="Zamknij">✕</button></div>
        <div class="title">${esc(n.name)}</div>
        <p class="muted">${linked.length.toLocaleString("pl")} powiązanych substancji (${vis.length.toLocaleString("pl")} widocznych przy obecnych filtrach).</p>
        <p class="note" style="margin:.5rem 0">Powiązania wynikają z reguł routingu w <code>generate_vault_notes.py</code> (triage grupy, regex cholinergiczny, substraty CYP) — nie są oceną ryzyka konkretnej substancji.</p>
        ${listHtml(vis)}`;
      history.replaceState(null, "", noHash);
      if (fly) animateTo(n.x, n.y, Math.max(state.k, 0.9));
    } else if (h.type === "target") {
      const t = T[h.i], m = byTarget[h.i].map((i) => C[i]), vis = m.filter(visible);
      p.innerHTML = `<div class="card-head"><div class="label" style="margin-bottom:0">Cel molekularny (ChEMBL) · ${esc(t.ty || "")}</div><button class="card-close" id="cardClose" title="Zamknij szczegóły (Esc)" aria-label="Zamknij">✕</button></div>
        <div class="title">${esc(t.n)}</div>
        <p class="muted">${m.length} substancji z katalogu działa na ten cel wg kuratorowanych mechanizmów ChEMBL (${vis.length} widocznych przy obecnych filtrach).</p>
        <div class="links"><a href="https://www.ebi.ac.uk/chembl/target_report_card/${esc(t.id)}/" target="_blank" rel="noopener noreferrer">ChEMBL ${esc(t.id)} ↗</a></div>
        ${listHtml(vis)}`;
      history.replaceState(null, "", "#target=" + t.id);
      if (fly && m.length) { const cx = m.reduce((a, c) => a + c.x, 0) / m.length, cy = m.reduce((a, c) => a + c.y, 0) / m.length; animateTo(cx * 0.3, cy * 0.3, fitK() * 1.1); }
    } else {
      const g = GR[h.i], m = byGroup[h.i], vis = m.filter(visible);
      p.innerHTML = `<div class="card-head"><div class="label" style="margin-bottom:0">Grupa · ${esc(CL_PL[G.clusters[g.c].name])}</div><button class="card-close" id="cardClose" title="Zamknij szczegóły (Esc)" aria-label="Zamknij">✕</button></div>
        <div class="title">${esc(g.label)}</div>
        <p class="muted">${g.n} substancji · ${m.filter((c) => c.pk).length} z danymi PK (${vis.length} widocznych przy obecnych filtrach)</p>${listHtml(vis)}`;
      history.replaceState(null, "", noHash);
    }
    wire(p); draw();
  }
  function listHtml(list) {
    const top = list.slice().sort((a, b) => (!!b.pk - !!a.pk) || a.n.localeCompare(b.n)).slice(0, 80);
    return `<div class="links" style="margin-top:.6rem;max-height:46vh;overflow:auto">${top.map((c) =>
      `<button data-c="${c.i}"><span class="dot" style="background:${CL_COLORS[c.c]};width:8px;height:8px;margin-right:6px"></span>${esc(c.n)}</button>`).join("")}
      ${list.length > 80 ? `<span class="note">… oraz ${list.length - 80} kolejnych - zawęź filtrami lub wyszukiwarką.</span>` : ""}</div>`;
  }
  function compoundHtml(c) {
    const k = c.pk, g = GR[c.g], v = c.v, e = c.ve;
    const curTab = state.tab || "overview";

    const hasPk = !!k;
    let pkBadge = '<span class="tab-badge">—</span>';
    if (v && v.s === "consistent" && e && e.s === "consistent") pkBadge = '<span class="tab-badge" style="color:var(--color-success)">✓✓</span>';
    else if ((v && v.s === "discrepant") || (e && e.s === "discrepant")) pkBadge = (c.pka && c.pka.length) ? '<span class="tab-badge" style="color:var(--accent-gold)">≠ 💡</span>' : '<span class="tab-badge" style="color:var(--color-warning)">≠</span>';
    else if (v && v.s === "consistent") pkBadge = '<span class="tab-badge" style="color:var(--color-success)">✓ FDA</span>';
    else if (e && e.s === "consistent") pkBadge = '<span class="tab-badge" style="color:var(--color-success)">✓ EMA</span>';
    else if (hasPk) pkBadge = '<span class="tab-badge">✓</span>';

    const tgCount = (c.tg || []).length;
    const tgBadge = `<span class="tab-badge">${tgCount}</span>`;

    const warnCount = (c.bb ? 1 : 0) + (c.wd ? 1 : 0) + (c.ic === "conflict" ? 1 : 0);
    const safeCount = warnCount + (c.t ? c.t.length : 0);
    let safeBadge = `<span class="tab-badge">${safeCount || "—"}</span>`;
    if (warnCount > 0) safeBadge = '<span class="tab-badge" style="color:var(--color-warning)">⚠</span>';

    const obs = "obsidian://open?vault=vault&file=" + encodeURIComponent(c.f);

    let tabContent = "";
    if (curTab === "overview") {
      const propBoxes = c.pr ? `
        <div class="stat-grid">
          <div class="stat-box"><small>Masa cząst. (MW)</small><b>${c.pr[0] != null ? c.pr[0] + " g/mol" : "—"}</b></div>
          <div class="stat-box"><small>Lipofilowość (ALogP)</small><b>${c.pr[1] != null ? c.pr[1] : "—"}</b></div>
          <div class="stat-box"><small>Pow. polarna (PSA)</small><b>${c.pr[2] != null ? c.pr[2] + " Å²" : "—"}</b></div>
          <div class="stat-box"><small>Reguła Lipińskiego</small><b>${c.pr[3] != null ? (c.pr[3] === 0 ? "✓ 0 naruszeń" : c.pr[3] + " naruszeń") : "—"}</b></div>
        </div>` : "";

      const atcHtml = c.atc && c.atc.length ? `
        <div class="label" style="margin-top:.8rem">Klasyfikacja ATC</div>
        <div class="links">${c.atc.map(([code, desc]) => `<span style="font-size:var(--text-xs);color:var(--color-text)"><code style="font-weight:600;color:var(--color-primary)">${esc(code)}</code> · ${esc(desc)}</span>`).join("")}</div>` : "";

      const idHtml = (c.ids || c.ic || c.ch || c.fa) ? `
        <div class="label" style="margin-top:.8rem">Tożsamość i źródła</div>
        <table class="pk">
          ${c.fa ? `<tr><th>Pierwsza rejestracja</th><td>${esc(c.fa)}</td></tr>` : ""}
          ${c.mt ? `<tr><th>Typ cząsteczki</th><td>${esc(c.mt)}</td></tr>` : ""}
          ${c.ids ? `<tr><th>Identyfikacja ChEMBL</th><td>${esc(IDS_PL[c.ids] || c.ids)}${c.ic ? " · " + esc(IC_PL[c.ic] || c.ic) : ""}</td></tr>` : ""}
        </table>` : "";

      tabContent = `
        <div class="tab-panel">
          ${c.d ? `<p class="muted" style="line-height:1.45">${esc(c.d)}${c.d.length >= 420 ? "…" : ""}</p>` : '<p class="empty">Brak opisu podsumowującego.</p>'}
          ${propBoxes}
          ${atcHtml}
          ${idHtml}
          <div class="label" style="margin-top:.8rem">Otwórz i zbadaj</div>
          <div class="links">
            <a href="${obs}">Notatka w Obsidianie ↗</a>
            ${c.ch ? `<a href="https://www.ebi.ac.uk/chembl/compound_report_card/${esc(c.ch)}/" target="_blank" rel="noopener noreferrer">ChEMBL ${esc(c.ch)} ↗</a>` : ""}
            ${k && k.src ? `<a href="${esc(k.src)}" target="_blank" rel="noopener noreferrer">Wikipedia drug infobox ↗</a>` : ""}
          </div>
          ${c.a && c.a.length ? `<p class="note" style="margin-top:.4rem">Aliasy: ${esc(c.a.join(", "))}</p>` : ""}
          <p class="note">ID: <code>${esc(c.id)}</code></p>
        </div>`;
    } else if (curTab === "pk") {
      const rows = [];
      if (k) {
        if (k.hl || k.hlt) rows.push(["Okres półtrwania (t½)", rng(k.hl && [k.hl[0], k.hl[1]], k.hl && k.hl[2]) || "—", k.hlt]);
        if (k.pb || k.pbt) rows.push(["Wiązanie z białkami", rng(k.pb, "%") || "—", k.pbt]);
        if (k.ba || k.bat) rows.push(["Biodostępność", rng(k.ba, "%") || "—", k.bat]);
        if (k.met) rows.push(["Metabolizm", "", k.met]);
        if (k.cyp) rows.push(["Substrat CYP", k.cyp.join(", "), "rola inhibitora/induktora nieoceniana"]);
        if (k.ex !== undefined) rows.push(["Wydalanie", k.ren === true ? "głównie z moczem" : k.ren === false ? "głównie pozanerkowo" : "—", (k.fe !== undefined ? `fe (niezmieniona) ${k.fe}; ` : "") + (k.ex || "")]);
      }

      const vf = v && v.f ? Object.entries(v.f) : [];
      const verHtml = v ? `
        <div class="ver-card">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <b>Weryfikacja FDA (DailyMed)</b>
            <span class="tag ${v.s === 'consistent' ? 'ok' : v.s === 'discrepant' ? 'warn' : ''}">${esc(VER_PL[v.s] || v.s)}</span>
          </div>
          ${vf.length ? `<div style="margin-top:2px;color:var(--color-text-muted)">${vf.map(([f, [st, vals]]) =>
            `• ${f === "half-life" ? "t½" : "wiązanie z białkami"}: <b>${esc(VER_PL[st] || st)}</b>${vals.length ? ` (etykieta: ${vals.map((x) => (+x).toLocaleString("pl")).join(", ")}${f === "half-life" ? " h" : " %"})` : ""}`).join("<br>")}</div>` : ""}
          ${v.u ? `<div style="margin-top:4px"><a href="${esc(v.u)}" target="_blank" rel="noopener noreferrer">Otwórz etykietę DailyMed (wer. ${esc(v.et)}) ↗</a></div>` : ""}
        </div>` : '<div class="ver-card" style="opacity:.75"><b>Weryfikacja FDA (DailyMed)</b><span class="muted">Brak powiązanej etykiety FDA w bazie cross-check.</span></div>';

      const ef = e && e.f ? Object.entries(e.f) : [];
      const emaHtml = e ? `
        <div class="ver-card">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <b>ChPL / SmPC (EMA) · ${esc(e.p || "")}</b>
            <span class="tag ${e.s === 'consistent' ? 'ok' : e.s === 'discrepant' ? 'warn' : ''}">${esc(EMA_PL[e.s] || e.s)}</span>
          </div>
          ${ef.length ? `<div style="margin-top:2px;color:var(--color-text-muted)">${ef.map(([f, [st, vals]]) =>
            `• ${f === "half-life" ? "t½" : "wiązanie z białkami"}: <b>${esc(EMA_PL[st] || st)}</b>${vals.length ? ` (ChPL: ${vals.map((x) => (+x).toLocaleString("pl")).join(", ")}${f === "half-life" ? " h" : " %"})` : ""}`).join("<br>")}</div>` : ""}
          <div style="margin-top:4px">
            ${e.pl ? `<a href="${esc(e.pl)}" target="_blank" rel="noopener noreferrer">ChPL ${esc(e.p)} (PL PDF) ↗</a> · ` : ""}
            <a href="${esc(e.u)}" target="_blank" rel="noopener noreferrer">SmPC ${esc(e.p)} (EN PDF) ↗</a>
          </div>
        </div>` : '<div class="ver-card" style="opacity:.75"><b>ChPL / SmPC (EMA)</b><span class="muted">Brak dokumentacji EPAR/ChPL w bazie EMA.</span></div>';

      const pkaHtml = (c.pka && c.pka.length) ? `
        <div class="ver-card" style="border-left:3px solid var(--accent-gold);margin-top:.6rem">
          <div style="display:flex;align-items:center;gap:.4rem">
            <b>💡 Wyjaśnienie rozbieżności PK (decyzja kuratorska)</b>
          </div>
          <ul style="margin:.4rem 0 0 1.1rem;padding:0;font-size:0.85rem;color:var(--color-text-muted)">
            ${c.pka.map((a) => `<li style="margin-bottom:.2rem"><b style="color:var(--color-text)">${esc(a.c)}</b> (${esc(a.f)}): ${esc(a.e)}</li>`).join("")}
          </ul>
        </div>` : "";

      tabContent = `
        <div class="tab-panel">
          <div class="label">Parametry PK (Wikipedia)</div>
          ${rows.length ? `
            <table class="pk">${rows.map(([a, b, t]) => `<tr><th>${a}</th><td>${esc(b) || ""}${t ? `<span class="raw">${esc(t)}</span>` : ""}</td></tr>`).join("")}</table>
            ${k.src ? `<p class="note" style="margin-top:.4rem">Źródło infoboksu: <a href="${esc(k.src)}" target="_blank" rel="noopener noreferrer">Wikipedia — ${esc(k.title)} ↗</a></p>` : ""}`
            : '<p class="empty">Brak wyodrębnionych parametrów PK w infoboksie Wikipedii dla tej substancji.</p>'}
          <div class="label" style="margin-top:.8rem">Oficjalne etykiety rejestracyjne</div>
          ${verHtml}
          ${emaHtml}
          ${pkaHtml}
        </div>`;
    } else if (curTab === "targets") {
      const nb = neighbours(c).slice(0, 16);
      const targetsList = (c.tg && c.tg.length) ? `
        <div class="label">Cele molekularne (${c.tg.length})</div>
        <div class="links">${c.tg.map((t) => `<button data-t="${t}">◎ <b>${esc(T[t].n)}</b> <small style="color:var(--color-text-muted)">(${esc(T[t].ty || "target")} · ${byTarget[t].length} subst.)</small></button>`).join("")}</div>`
        : '<p class="empty">Brak celów molekularnych przypisanych w kuratorowanym profilu ChEMBL.</p>';

      const neighboursList = nb.length ? `
        <div class="label" style="margin-top:.8rem">Wspólne cele molekularne (${neighbours(c).length} substancji)</div>
        <div class="links">${nb.map(({ i, n }) =>
          `<button data-c="${i}"><span class="dot" style="background:${CL_COLORS[C[i].c]};width:8px;height:8px;margin-right:6px"></span>${esc(C[i].n)}${n > 1 ? ` <small style="color:var(--color-text-muted)">×${n} celów</small>` : ""}</button>`).join("")}</div>`
        : '<p class="note" style="margin-top:.6rem">Brak innych substancji w katalogu o nakładających się celach.</p>';

      tabContent = `
        <div class="tab-panel">
          ${c.m ? `<div class="card" style="padding:.6rem .8rem;background:var(--color-surface-offset)"><b style="font-size:var(--text-xs);color:var(--color-text-muted);display:block;margin-bottom:2px">MECHANIZM DZIAŁANIA (ChEMBL)</b><span style="font-size:var(--text-sm)">${esc(c.m)}</span></div>` : ""}
          ${targetsList}
          ${neighboursList}
        </div>`;
    } else if (curTab === "safety") {
      const warnBoxes = [];
      if (c.bb) warnBoxes.push('<div class="warnbox" style="margin-bottom:.5rem"><b>⚠️ Czarna ramka (Black Box Warning):</b> Oficjalne ostrzeżenie najwyższego stopnia w etykiecie leku dotyczące ciężkich działań niepożądanych lub zgonu.</div>');
      if (c.wd) warnBoxes.push('<div class="warnbox" style="margin-bottom:.5rem"><b>⚠️ Wycofany z obrotu:</b> Lek lub substancja wycofana z rynku z przyczyn toksyczności, braku skuteczności lub zagrożenia zdrowia.</div>');
      if (c.ic === "conflict") warnBoxes.push('<div class="warnbox" style="margin-bottom:.5rem"><b>⚠️ Rozbieżność identyfikacji:</b> Niezgodność chemiczna (InChIKey) między bazami — wymaga manualnej weryfikacji tożsamości.</div>');

      const tagsHtml = (c.t && c.t.length) ? `
        <div class="label" style="margin-top:${warnBoxes.length ? '.8rem' : '0'}">Profile ryzyka i tagi</div>
        <div class="tags">${c.t.map((t) => `<span class="tag warn">${esc(t)}</span>`).join("")}</div>`
        : '<p class="note">Brak flag ryzyka farmakologicznego.</p>';

      const hubsHtml = (c.l && c.l.length) ? `
        <div class="label" style="margin-top:.8rem">Powiązane huby bezpieczeństwa i szlaki</div>
        <div class="links">${c.l.map((li) => `<button data-core="${li}">${KIND_PL[CORE[li].kind]}: <b>${esc(CORE[li].name)}</b></button>`).join("")}</div>` : "";

      const cypHtml = (k && k.cyp && k.cyp.length) ? `
        <div class="label" style="margin-top:.8rem">Interakcje enzymatyczne CYP</div>
        <div class="ver-card">
          <div>Substrat izoenzymów: <b>${esc(k.cyp.join(", "))}</b></div>
          <span style="color:var(--color-text-muted)">Stosowanie w połączeniu z inhibitorami lub induktorami tego izoenzymu może drastycznie zmieniać stężenie leku we krwi.</span>
        </div>` : "";

      tabContent = `
        <div class="tab-panel">
          ${warnBoxes.join("")}
          ${tagsHtml}
          ${cypHtml}
          ${hubsHtml}
        </div>`;
    }

    const inStack = state.stack.has(c.i);
    const stackBtnHtml = `
      <button id="cardStackToggle" class="btn ${inStack ? 'btn-gold' : ''}" style="width:100%;margin:0.5rem 0;padding:6px 12px;font-size:var(--text-xs);display:flex;align-items:center;justify-content:center;gap:6px">
        <span>${inStack ? "✓ W Twoim stacku" : "+ Dodaj do stacka"}</span>
      </button>`;

    return `
      <div class="card-head">
        <div class="label" style="margin-bottom:0">${esc(CL_PL[G.clusters[c.c].name])} · ${esc(g.label)}</div>
        <button class="card-close" id="cardClose" title="Zamknij szczegóły (Esc)" aria-label="Zamknij szczegóły">✕</button>
      </div>
      <div class="title">${esc(c.n)}</div>
      <div class="tags">
        ${(c.t || []).map((t) => `<span class="tag warn">${esc(t)}</span>`).join("")}
        ${c.ph ? `<span class="tag">ChEMBL faza ${c.ph}</span>` : ""}
        ${k ? '<span class="tag">PK auto</span>' : ""}
        ${v && v.s === "consistent" ? '<span class="tag ok">PK ✓ FDA</span>' : ""}
        ${v && v.s === "discrepant" ? '<span class="tag warn">PK ≠ FDA</span>' : ""}
        ${e && e.s === "consistent" ? '<span class="tag ok">PK ✓ ChPL</span>' : ""}
        ${e && e.s === "discrepant" ? '<span class="tag warn">PK ≠ ChPL</span>' : ""}
        ${c.ic === "conflict" ? '<span class="tag warn">tożsamość?</span>' : ""}
      </div>
      ${stackBtnHtml}
      <div class="tab-bar" role="tablist" aria-label="Sekcje karty substancji">
        <button class="tab-btn ${curTab === 'overview' ? 'active' : ''}" data-tab="overview" role="tab" aria-selected="${curTab === 'overview'}">Przegląd</button>
        <button class="tab-btn ${curTab === 'pk' ? 'active' : ''} ${!hasPk ? 'dim' : ''}" data-tab="pk" role="tab" aria-selected="${curTab === 'pk'}">PK & Etykiety ${pkBadge}</button>
        <button class="tab-btn ${curTab === 'targets' ? 'active' : ''} ${!tgCount ? 'dim' : ''}" data-tab="targets" role="tab" aria-selected="${curTab === 'targets'}">Cele & MoA ${tgBadge}</button>
        <button class="tab-btn ${curTab === 'safety' ? 'active' : ''} ${!safeCount ? 'dim' : ''}" data-tab="safety" role="tab" aria-selected="${curTab === 'safety'}">Ryzyka ${safeBadge}</button>
      </div>
      ${tabContent}`;
  }
  function wire(p) {
    p.querySelectorAll("[data-c]").forEach((b) => b.onclick = () => select({ type: "compound", i: +b.dataset.c }, true));
    p.querySelectorAll("[data-core]").forEach((b) => b.onclick = () => select({ type: "core", i: +b.dataset.core }, true));
    p.querySelectorAll("[data-t]").forEach((b) => b.onclick = () => select({ type: "target", i: +b.dataset.t }, true));
    p.querySelectorAll("[data-tab]").forEach((b) => b.onclick = () => {
      state.tab = b.dataset.tab;
      if (state.sel && state.sel.type === "compound") {
        p.innerHTML = compoundHtml(C[state.sel.i]);
        wire(p);
      }
    });
    const stackToggle = p.querySelector("#cardStackToggle");
    if (stackToggle && state.sel && state.sel.type === "compound") {
      stackToggle.onclick = () => toggleInStack(state.sel.i);
    }
    const closeBtn = p.querySelector("#cardClose");
    if (closeBtn) closeBtn.onclick = () => select(null);
  }

  // ---------- sidebar controls
  const clBox = $("clusters");
  G.clusters.forEach((cl, ci) => {
    const n = C.filter((c) => c.c === ci).length, b = document.createElement("button");
    b.className = "cl"; b.setAttribute("aria-pressed", "true");
    b.innerHTML = `<span class="dot" style="background:${CL_COLORS[ci]}"></span><span>${esc(CL_PL[cl.name])}</span><span>${n}</span>`;
    b.onclick = (e) => {
      if (e.altKey || e.metaKey) { state.clusters = new Set([ci]); }
      else state.clusters.has(ci) ? state.clusters.delete(ci) : state.clusters.add(ci);
      clBox.querySelectorAll(".cl").forEach((x, xi) => { x.classList.toggle("off", !state.clusters.has(xi)); x.setAttribute("aria-pressed", state.clusters.has(xi)); });
      stats(); search(); draw();
    };
    b.title = "Kliknij: pokaż/ukryj · Alt/⌘+klik: tylko ten klaster";
    clBox.appendChild(b);
  });
  const hubSel = $("hub");
  ["hub", "pathway", "concept"].forEach((kind) => {
    const og = document.createElement("optgroup"); og.label = KIND_PL[kind];
    CORE.forEach((n, i) => { if (n.kind === kind && C.some((c) => c.l.includes(i))) { const o = document.createElement("option"); o.value = i; o.textContent = n.name; og.appendChild(o); } });
    if (og.children.length) hubSel.appendChild(og);
  });
  hubSel.onchange = () => {
    state.hub = hubSel.value === "" ? null : +hubSel.value;
    state.sel = null; stats(); search();
    select(state.hub !== null ? { type: "core", i: state.hub } : null);
    fit();
  };
  $("pkOnly").onchange = (e) => { state.pkOnly = e.target.checked; stats(); search(); draw(); };
  $("cypOnly").onchange = (e) => { state.cypOnly = e.target.checked; stats(); search(); draw(); };
  $("relOn").onchange = (e) => { state.rel = e.target.checked; draw(); };
  $("ver").onchange = (e) => { state.ver = e.target.value; stats(); search(); draw(); };
  const q = $("q"), res = $("results");
  function search() {
    const s = q.value.trim().toLowerCase();
    if (s.length < 2) { res.innerHTML = ""; return; }
    const hits = C.filter((c) => visible(c) && c.hay.includes(s))
      .sort((a, b) => (b.n.toLowerCase().startsWith(s) - a.n.toLowerCase().startsWith(s)) || a.n.length - b.n.length).slice(0, 40);
    const th = s.length >= 3 ? T.map((t, i) => [t, i]).filter(([t]) => (t.n || "").toLowerCase().includes(s)).slice(0, 6) : [];
    res.innerHTML = th.map(([t, i]) => `<button role="option" data-t="${i}"><span class="dot" style="background:var(--color-accent2)"></span>◎ ${esc(t.n)}<small>${byTarget[i].length} subst.</small></button>`).join("") + (hits.length ? hits.map((c) => `<button role="option" data-c="${c.i}"><span class="dot" style="background:${CL_COLORS[c.c]}"></span>${esc(c.n)}<small>${c.pk ? "PK" : ""}</small></button>`).join("")
      : (th.length ? "" : '<div role="option" aria-disabled="true" class="empty" style="padding:.4rem">Brak wyników przy obecnych filtrach.</div>'));
    res.querySelectorAll("[data-t]").forEach((b) => b.onclick = () => { select({ type: "target", i: +b.dataset.t }, true); res.innerHTML = ""; q.blur(); });
    res.querySelectorAll("[data-c]").forEach((b) => b.onclick = () => { select({ type: "compound", i: +b.dataset.c }, true); res.innerHTML = ""; q.blur(); });
  }
  q.addEventListener("input", search);
  q.addEventListener("keydown", (e) => { if (e.key === "Enter") { const b = res.querySelector("[data-c], [data-t]"); if (b) b.click(); } });

  // ---------- stack drawer toolbar & controls
  const stackBtn = $("stackBtn");
  if (stackBtn) stackBtn.onclick = () => toggleStackDrawer();
  const stackDrawerClose = $("stackDrawerClose");
  if (stackDrawerClose) stackDrawerClose.onclick = () => toggleStackDrawer(false);
  const stackFilterToggle = $("stackFilterToggle");
  if (stackFilterToggle) {
    stackFilterToggle.onclick = () => {
      state.stackOnly = !state.stackOnly;
      stackFilterToggle.setAttribute("aria-pressed", String(state.stackOnly));
      stackFilterToggle.classList.toggle("btn-gold", state.stackOnly);
      stats(); search(); draw();
    };
  }
  const stackShareBtn = $("stackShareBtn");
  if (stackShareBtn) stackShareBtn.onclick = shareStackLink;
  const stackObsidianBtn = $("stackObsidianBtn");
  if (stackObsidianBtn) stackObsidianBtn.onclick = exportStackToObsidian;
  const stackClearBtn = $("stackClearBtn");
  if (stackClearBtn) {
    stackClearBtn.onclick = () => {
      state.stack.clear();
      saveStack();
      updateStackUI();
      if (state.sel && state.sel.type === "compound") select(state.sel);
      draw();
    };
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (state.stackDrawerOpen) { toggleStackDrawer(false); return; }
      select(null);
      return;
    }
    const tag = document.activeElement ? document.activeElement.tagName : "";
    if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
    if (e.key === "s" || e.key === "S") {
      e.preventDefault();
      toggleStackDrawer();
      return;
    }
    if (e.key === "/") { e.preventDefault(); q.focus(); return; }
    if (state.sel && state.sel.type === "compound") {
      const tabs = ["overview", "pk", "targets", "safety"];
      if (e.key >= "1" && e.key <= "4") {
        const nextTab = tabs[+e.key - 1];
        if (nextTab && nextTab !== state.tab) {
          state.tab = nextTab;
          const p = $("panel");
          p.innerHTML = compoundHtml(C[state.sel.i]);
          wire(p);
        }
      }
    }
  });
  $("reset").onclick = () => fit();
  $("theme").onclick = () => { const r = document.documentElement; r.dataset.theme = r.dataset.theme === "dark" ? "light" : "dark"; $("theme").setAttribute("aria-pressed", r.dataset.theme === "light"); draw(); };
  if (matchMedia("(prefers-color-scheme: light)").matches) { document.documentElement.dataset.theme = "light"; $("theme").setAttribute("aria-pressed", "true"); }

  new ResizeObserver(resize).observe(cv);
  loadSavedStack();
  resize(); fit(); stats();
  const fromHash = decodeURIComponent(location.hash.slice(1));
  if (fromHash.startsWith("stack=")) {
    const ids = fromHash.slice(6).split(",").filter(Boolean);
    if (ids.length) {
      state.stack.clear();
      ids.forEach((id) => {
        const idx = C.findIndex((c) => c.id === id);
        if (idx >= 0) state.stack.add(idx);
      });
      saveStack();
      toggleStackDrawer(true);
    }
  } else if (fromHash.startsWith("target=")) {
    const ti = T.findIndex((t) => t.id === fromHash.slice(7));
    if (ti >= 0) setTimeout(() => select({ type: "target", i: ti }, true), 50);
  } else if (fromHash) {
    const c = C.find((x) => x.id === fromHash);
    if (c) setTimeout(() => select({ type: "compound", i: c.i }, true), 50);
  }
  updateStackUI();
})();
