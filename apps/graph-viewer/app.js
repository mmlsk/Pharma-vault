/* Pharma-vault graph viewer - renders window.PV_GRAPH (built by scripts/build_graph_data.py). */
(() => {
  "use strict";
  const G = window.PV_GRAPH;
  if (!G) { document.getElementById("panel").textContent = "Brak graph-data.js - uruchom: make graph"; return; }

  const CL_COLORS = ["#4f98a3", "#6daa45", "#bb653b", "#a86fdf", "#dd6974", "#d19900", "#5591c7", "#9aa2b4"];
  const CL_PL = {
    "Nootropics": "Nootropiki", "Metabolic and Incretin Agents": "Metabolizm i inkretyny",
    "Growth Hormone and Peptide Agents": "GH i peptydy", "Androgens SARMs and PCT": "Androgeny, SARM, PCT",
    "Cardiovascular and Lipid Agents": "Sercowo-naczyniowe i lipidy", "Longevity and Experimental Compounds": "Longevity i eksperymentalne",
    "Ancillary Supplements and Topicals": "Suplementy pomocnicze", "General Pharmacology": "Farmakologia ogólna",
  };
  const KIND_PL = { hub: "Hub bezpieczeństwa", pathway: "Szlak", concept: "Koncepcja" };
  const C = G.compounds, GR = G.groups, CORE = G.core;
  C.forEach((c, i) => { c.i = i; c.c = GR[c.g].c; c.hay = [c.n, c.id, ...(c.a || []), ...((c.pk && c.pk.cyp) || [])].join(" ").toLowerCase(); });

  const $ = (id) => document.getElementById(id);
  const cv = $("cv"), ctx = cv.getContext("2d"), tip = $("tip");
  const state = { k: 1, tx: 0, ty: 0, sel: null, hover: null, clusters: new Set(G.clusters.map((_, i) => i)), pkOnly: false, cypOnly: false, hub: null };
  let W = 0, H = 0, dpr = 1, raf = 0;

  // ---------- filters
  const visible = (c) => state.clusters.has(c.c) && (!state.pkOnly || c.pk) && (!state.cypOnly || (c.pk && c.pk.cyp)) && (state.hub === null || c.l.includes(state.hub));
  function stats() {
    const vis = C.filter(visible).length;
    $("sAll").textContent = G.meta.substances.toLocaleString("pl");
    $("sVis").textContent = vis.toLocaleString("pl");
    $("sPk").textContent = G.meta.with_pk.toLocaleString("pl");
    $("sHl").textContent = C.filter((c) => c.pk && c.pk.hl).length.toLocaleString("pl");
  }

  // ---------- view
  function resize() {
    const r = cv.getBoundingClientRect(); dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; draw();
  }
  function fit() {
    if (!W || !H) return;
    const ext = G.meta.radius + Math.max(...GR.map((g) => g.r)) + 140;
    state.k = Math.min(W, H) / (2 * ext); state.tx = W / 2; state.ty = H / 2; draw();
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
      primary = css("--color-primary"), warn = css("--color-warning"), bg = css("--color-bg");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    const sel = state.sel, hubSel = sel && sel.type === "core" ? sel.i : state.hub;

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
      const linked = C.filter((c) => c.l.includes(hubSel) && visible(c));
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

    // compounds
    const baseR = Math.max(1.4, Math.min(5.5, 4 * Math.sqrt(k)));
    C.forEach((c) => {
      const [x, y] = toScreen(c.x, c.y);
      if (x < -10 || y < -10 || x > W + 10 || y > H + 10) return;
      const on = visible(c), hl = hubSel !== null && hubSel !== undefined && c.l.includes(hubSel);
      ctx.globalAlpha = on ? (hubSel !== null && hubSel !== undefined && !hl ? 0.18 : 1) : 0.07;
      ctx.fillStyle = CL_COLORS[c.c];
      ctx.beginPath(); ctx.arc(x, y, c.pk ? baseR : baseR * 0.7, 0, 7); ctx.fill();
      if (c.pk && c.pk.cyp && k > 0.9) { ctx.strokeStyle = warn; ctx.lineWidth = 1; ctx.stroke(); }
    });
    ctx.globalAlpha = 1;

    // compound labels (level of detail)
    ctx.textBaseline = "middle"; ctx.textAlign = "left";
    if (k >= 2.6) {
      ctx.font = `500 ${Math.min(13, 9 + k)}px ${css("--font-body")}`; ctx.fillStyle = muted;
      C.forEach((c) => {
        if (!visible(c)) return;
        const [x, y] = toScreen(c.x, c.y);
        if (x < 0 || y < 0 || x > W || y > H) return;
        const lab = c.n.length > 22 ? c.n.slice(0, 21) + "…" : c.n;
        ctx.fillText(lab, x + baseR + 3, y);
      });
    }

    // group + cluster labels
    ctx.textAlign = "center";
    if (k > 0.22) {
      GR.forEach((g) => {
        if (!state.clusters.has(g.c) || g.r * k < 18) return;
        const [x, y] = toScreen(g.x, g.y - g.r - 12 / k);
        ctx.font = `600 ${Math.min(14, 10 + k * 2)}px ${css("--font-body")}`;
        halo(g.label, x, y, text, bg);
      });
    }
    if (k < 0.2) G.clusters.forEach((cl, ci) => {
      const ext = G.meta.radius + Math.max(...GR.filter((g) => g.c === ci).map((g) => g.r)) + 70;
      const [x, y] = toScreen(Math.cos(cl.angle) * ext, Math.sin(cl.angle) * ext);
      ctx.font = `700 ${Math.max(12, Math.min(22, 26 * k))}px ${css("--font-display")}`;
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
      ctx.font = `600 ${Math.max(10, Math.min(14, 13 * Math.sqrt(k)))}px ${css("--font-body")}`;
      const words = n.name.split(" "), lines = [];
      words.forEach((w) => { const last = lines[lines.length - 1]; if (last && (last + " " + w).length <= 18) lines[lines.length - 1] = last + " " + w; else lines.push(w); });
      const lh = Math.max(11, Math.min(15, 14 * Math.sqrt(k)));
      lines.forEach((ln, li) => halo(ln, x, y + r + 9 + li * lh, active ? text : muted, bg));
    });

    // selected compound label always
    if (sel && sel.type === "compound") {
      const c = C[sel.i], [x, y] = toScreen(c.x, c.y);
      ctx.beginPath(); ctx.arc(x, y, baseR + 4, 0, 7); ctx.strokeStyle = text; ctx.lineWidth = 2; ctx.stroke();
      ctx.font = `600 13px ${css("--font-body")}`; ctx.textAlign = "left"; halo(c.n, x + baseR + 8, y, text, bg);
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
    if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch0 = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), k: state.k, tx: state.tx, ty: state.ty, cx: (a[0] + b[0]) / 2, cy: (a[1] + b[1]) / 2 }; }
    cv.classList.add("drag");
  });
  cv.addEventListener("pointermove", (e) => {
    if (ptrs.has(e.pointerId)) ptrs.set(e.pointerId, [e.offsetX, e.offsetY]);
    if (ptrs.size === 2 && pinch0) {
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
    if (ptrs.size === 0) {
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
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
  const rng = (a, u = "") => a ? `${a[0]}${a[1] ? "–" + a[1] : ""}${u ? " " + u : ""}` : null;
  function select(h, fly) {
    state.sel = h; const p = $("panel");
    if (!h) { p.innerHTML = '<p class="empty">Wybierz substancję, grupę albo hub, aby zobaczyć szczegóły.</p>'; history.replaceState(null, "", " "); draw(); return; }
    if (h.type === "compound") {
      const c = C[h.i]; p.innerHTML = compoundHtml(c); history.replaceState(null, "", "#" + c.id);
      if (fly) animateTo(c.x, c.y, Math.max(state.k, 3.2));
    } else if (h.type === "core") {
      const n = CORE[h.i], linked = C.filter((c) => c.l.includes(h.i));
      p.innerHTML = `<div class="label">${KIND_PL[n.kind]}</div><div class="title">${esc(n.name)}</div>
        <p class="muted">${linked.length.toLocaleString("pl")} powiązanych substancji (${linked.filter(visible).length.toLocaleString("pl")} widocznych przy obecnych filtrach).</p>
        <p class="note" style="margin:.5rem 0">Powiązania wynikają z reguł routingu w <code>generate_vault_notes.py</code> (triage grupy, regex cholinergiczny, substraty CYP) - nie są oceną ryzyka konkretnej substancji.</p>
        ${listHtml(linked.filter(visible))}`;
      if (fly) animateTo(n.x, n.y, Math.max(state.k, 0.9));
    } else {
      const g = GR[h.i], m = C.filter((c) => c.g === h.i);
      p.innerHTML = `<div class="label">Grupa · ${esc(CL_PL[G.clusters[g.c].name])}</div><div class="title">${esc(g.label)}</div>
        <p class="muted">${g.n} substancji · ${m.filter((c) => c.pk).length} z danymi PK</p>${listHtml(m.filter(visible))}`;
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
    const k = c.pk, g = GR[c.g];
    const rows = [];
    if (k) {
      if (k.hl || k.hlt) rows.push(["Okres półtrwania (t½)", rng(k.hl && [k.hl[0], k.hl[1]], k.hl && k.hl[2]) || "—", k.hlt]);
      if (k.pb || k.pbt) rows.push(["Wiązanie z białkami", rng(k.pb, "%") || "—", k.pbt]);
      if (k.ba || k.bat) rows.push(["Biodostępność", rng(k.ba, "%") || "—", k.bat]);
      if (k.met) rows.push(["Metabolizm", "", k.met]);
      if (k.cyp) rows.push(["Substrat CYP", k.cyp.join(", "), "rola inhibitora/induktora nieoceniana"]);
      if (k.ex !== undefined) rows.push(["Wydalanie", k.ren === true ? "głównie z moczem" : k.ren === false ? "głównie pozanerkowo" : "—", (k.fe !== undefined ? `fe (niezmieniona) ${k.fe}; ` : "") + (k.ex || "")]);
    }
    const obs = "obsidian://open?vault=vault&file=" + encodeURIComponent(c.f);
    return `<div class="label">${esc(CL_PL[G.clusters[c.c].name])} · ${esc(g.label)}</div>
      <div class="title">${esc(c.n)}</div>
      <div class="tags">${(c.t || []).map((t) => `<span class="tag warn">${esc(t)}</span>`).join("")}${c.ph ? `<span class="tag">ChEMBL faza ${c.ph}</span>` : ""}${k ? '<span class="tag">PK auto</span>' : ""}</div>
      ${c.d ? `<p class="muted" style="margin-bottom:.6rem">${esc(c.d)}${c.d.length >= 420 ? "…" : ""}</p>` : ""}
      ${c.m ? `<p class="muted"><b>Mechanizm (ChEMBL):</b> ${esc(c.m)}</p>` : ""}
      <div class="label" style="margin-top:1rem">Farmakokinetyka</div>
      ${rows.length ? `<table class="pk">${rows.map(([a, b, t]) => `<tr><th>${a}</th><td>${esc(b) || ""}${t ? `<span class="raw">${esc(t)}</span>` : ""}</td></tr>`).join("")}</table>
        <p class="note" style="margin-top:.4rem">Źródło: <a href="${esc(k.src)}" target="_blank" rel="noopener">Wikipedia - ${esc(k.title)} (wersja przypięta)</a></p>`
        : '<p class="empty">Brak dopasowanych danych PK w infoboksie Wikipedii.</p>'}
      <div class="label" style="margin-top:1rem">Powiązania</div>
      <div class="links">${c.l.map((li) => `<button data-core="${li}">${KIND_PL[CORE[li].kind]}: ${esc(CORE[li].name)}</button>`).join("")}</div>
      <div class="label" style="margin-top:1rem">Otwórz</div>
      <div class="links"><a href="${obs}">Notatka w Obsidianie ↗</a>${c.ch ? `<a href="https://www.ebi.ac.uk/chembl/compound_report_card/${esc(c.ch)}/" target="_blank" rel="noopener">ChEMBL ${esc(c.ch)} ↗</a>` : ""}</div>
      ${c.a ? `<p class="note" style="margin-top:.6rem">Aliasy: ${esc(c.a.join(", "))}</p>` : ""}
      <p class="note">ID: <code>${esc(c.id)}</code></p>`;
  }
  function wire(p) {
    p.querySelectorAll("[data-c]").forEach((b) => b.onclick = () => select({ type: "compound", i: +b.dataset.c }, true));
    p.querySelectorAll("[data-core]").forEach((b) => b.onclick = () => select({ type: "core", i: +b.dataset.core }, true));
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
    state.hub = hubSel.value === "" ? null : +hubSel.value; stats(); search();
    if (state.hub !== null) select({ type: "core", i: state.hub }); else select(null);
    fit();
  };
  $("pkOnly").onchange = (e) => { state.pkOnly = e.target.checked; stats(); search(); draw(); };
  $("cypOnly").onchange = (e) => { state.cypOnly = e.target.checked; stats(); search(); draw(); };
  const q = $("q"), res = $("results");
  function search() {
    const s = q.value.trim().toLowerCase();
    if (s.length < 2) { res.innerHTML = ""; return; }
    const hits = C.filter((c) => visible(c) && c.hay.includes(s))
      .sort((a, b) => (b.n.toLowerCase().startsWith(s) - a.n.toLowerCase().startsWith(s)) || a.n.length - b.n.length).slice(0, 40);
    res.innerHTML = hits.length ? hits.map((c) => `<button role="option" data-c="${c.i}"><span class="dot" style="background:${CL_COLORS[c.c]}"></span>${esc(c.n)}<small>${c.pk ? "PK" : ""}</small></button>`).join("")
      : '<p class="empty" style="padding:.4rem">Brak wyników przy obecnych filtrach.</p>';
    res.querySelectorAll("[data-c]").forEach((b) => b.onclick = () => select({ type: "compound", i: +b.dataset.c }, true));
  }
  q.addEventListener("input", search);
  q.addEventListener("keydown", (e) => { if (e.key === "Enter") { const b = res.querySelector("[data-c]"); if (b) b.click(); } });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") select(null); if (e.key === "/" && document.activeElement !== q) { e.preventDefault(); q.focus(); } });
  $("reset").onclick = () => fit();
  $("theme").onclick = () => { const r = document.documentElement; r.dataset.theme = r.dataset.theme === "dark" ? "light" : "dark"; draw(); };
  if (matchMedia("(prefers-color-scheme: light)").matches) document.documentElement.dataset.theme = "light";

  new ResizeObserver(resize).observe(cv);
  resize(); fit(); stats();
  const fromHash = decodeURIComponent(location.hash.slice(1));
  if (fromHash) { const c = C.find((x) => x.id === fromHash); if (c) setTimeout(() => select({ type: "compound", i: c.i }, true), 50); }
})();
