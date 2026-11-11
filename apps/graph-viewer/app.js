/* Pharma-vault graph viewer - renders window.PV_GRAPH (built by scripts/build_graph_data.py). */
(() =>{
  "use strict";
  const G = window.PV_GRAPH;
  if (!G) { document.getElementById("panel").textContent = "Brak graph-data.js - uruchom: make graph"; return; }
  const stripEmojiStr = (s) => typeof s === "string" ? s.replace(/[\u{1F1E6}-\u{1F1FF}\u{1F300}-\u{1FAFF}\u{2700}-\u{27BF}\u{2600}-\u{26FF}\u{FE0F}]/gu, "").trim() : s;
  const cleanIcons = (o) => { if (Array.isArray(o)) o.forEach(cleanIcons); else if (o && typeof o === "object") { for (const k of Object.keys(o)) { if (k === "icon") o[k] = ""; else if (typeof o[k] === "string") o[k] = stripEmojiStr(o[k]); else if (typeof o[k] === "object") cleanIcons(o[k]); } } };
  cleanIcons(G.pathwaySystems); cleanIcons(G.foodItems); cleanIcons(G.foodInteractions);

  const CL_COLOR_FALLBACKS = ["#4f98a3", "#6daa45", "#bb653b", "#a86fdf", "#dd6974", "#d19900", "#5591c7", "#9aa2b4", "#c2477e"];
  const clusterColor = (i) =>getComputedStyle(document.documentElement).getPropertyValue(`--color-cluster-${i}`).trim() || CL_COLOR_FALLBACKS[i] || CL_COLOR_FALLBACKS[0];
  const CL_PL = {
    "Nootropics": "Nootropiki", "Metabolic and Incretin Agents": "Metabolizm i inkretyny",
    "Growth Hormone and Peptide Agents": "GH i peptydy", "Androgens SARMs and PCT": "Androgeny, SARM, PCT",
    "Cardiovascular and Lipid Agents": "Sercowo-naczyniowe i lipidy", "Longevity and Experimental Compounds": "Longevity i eksperymentalne",
    "Ancillary Supplements and Topicals": "Suplementy pomocnicze", "General Pharmacology": "Farmakologia ogólna",
    "Novel Psychoactive Substances": "NPS i dopalacze",
  };
  const IDS_PL = { catalogue: "katalog źródłowy", "curated-addition": "dodatek kuratorowany", "curated-identity": "decyzja kuratorska", "wikipedia-infobox": "infoboks Wikipedii", "chembl-name-match": "dokładna nazwa w ChEMBL" };
  const VER_TEST = {
    consistent: (c) =>c.v && c.v.s === "consistent", discrepant: (c) =>c.v && c.v.s === "discrepant",
    "no-label-value": (c) =>c.v && c.v.s === "no-label-value", chembl: (c) =>c.tg,
    "ema-consistent": (c) =>c.ve && c.ve.s === "consistent", "ema-discrepant": (c) =>c.ve && c.ve.s === "discrepant",
    both: (c) =>c.v && c.v.s === "consistent" && c.ve && c.ve.s === "consistent",
    "id-ok": (c) =>["structure-confirmed", "curated", "inn-match-ema"].includes(c.ic),
    "id-check": (c) =>["connectivity-match", "formula-match", "conflict", "no-evidence"].includes(c.ic),
  };
  const IC_PL = { "structure-confirmed": " InChIKey zgodny z PubChem", "connectivity-match": " ten sam szkielet, inna stereochemia/izotopy",
    "formula-match": "≈ ten sam wzór sumaryczny, inny InChIKey (tautomer)", "inn-match-ema": "INN zgodny z produktem EMA (bez struktury)",
    "no-chembl-structure": "brak struktury małocząsteczkowej (biologik/mieszanina)", "no-evidence": "brak danych PubChem",
    conflict: " konflikt z PubChem – do przeglądu", curated: " decyzja kuratorska" };
  const EMA_PL = { consistent: "zgodne z ChPL", discrepant: "rozbieżne z ChPL", "no-label-value": "ChPL bez wartości", "no-smpc-value": "ChPL bez wartości" };
  const VER_PL = { consistent: "zgodne z etykietą FDA", discrepant: "rozbieżne z etykietą FDA", "no-label-value": "etykieta bez wartości", "no-label": "brak etykiety FDA" };
  const T = G.targets || [];
  const byTarget = T.map(() =>[]);
  const KIND_PL = { hub: "Hub bezpieczeństwa", pathway: "Szlak", concept: "Koncepcja" };
  const C = G.compounds, GR = G.groups, CORE = G.core;
  const byCore = CORE.map(() =>[]), byGroup = GR.map(() =>[]);

  // Pathway systems ontology (v3.22.0)
  const PATHWAY_SYSTEMS = G.pathwaySystems || [];
  const pathwayById = new Map();
  const targetIdxById = new Map();
  T.forEach((t, i) =>targetIdxById.set(t.id, i));

  // spatial grid index for ultra-fast hit testing O(1)
  const GRID_CELL = 75;
  const spatialGrid = new Map();
  C.forEach((c, i) =>{
    c.i = i; c.c = GR[c.g].c; byGroup[c.g].push(c); (c.tg || []).forEach((t) =>byTarget[t].push(i)); (c.l || []).forEach((li) =>byCore[li].push(c));
    c.hay = [c.n, c.id, ...(c.a || []), ...((c.pk && c.pk.cyp) || []), ...(c.tg || []).map((t) =>T[t].n), ...(c.atc || []).map((a) =>a[0])].join("").toLowerCase();
    if (c.pk && c.pk.hl) { const u = { min: 1 / 60, h: 1, d: 24, wk: 168 }[c.pk.hl[2]]; if (u) c.hlh = Math.sqrt(c.pk.hl[0] * (c.pk.hl[1] || c.pk.hl[0])) * u; }
    const gx = Math.floor(c.x / GRID_CELL), gy = Math.floor(c.y / GRID_CELL);
    const gk = `${gx},${gy}`;
    let cell = spatialGrid.get(gk);
    if (!cell) { cell = []; spatialGrid.set(gk, cell); }
    cell.push(c);
  });

  PATHWAY_SYSTEMS.forEach((pw) =>{
    pathwayById.set(pw.id, pw);
    pw.targetIndices = new Set();
    (pw.target_ids || []).forEach((tid) =>{
      const ti = targetIdxById.get(tid);
      if (ti !== undefined) pw.targetIndices.add(ti);
    });
    pw.compoundIndices = new Set();
    pw.targetIndices.forEach((ti) =>{
      (byTarget[ti] || []).forEach((ci) =>pw.compoundIndices.add(ci));
    });
  });

  // DDI & Polypharmacy Risk Engine (v3.23.0)
  const DDI_RULES = G.ddiRules || {};
  const DDI_SPECIFIC_PAIRS = new Map();
  (DDI_RULES.specific_pair_rules || []).forEach((rule) =>{
    if (rule.compound_a && rule.compound_b) {
      DDI_SPECIFIC_PAIRS.set(`${rule.compound_a}::${rule.compound_b}`, rule);
      DDI_SPECIFIC_PAIRS.set(`${rule.compound_b}::${rule.compound_a}`, rule);
    }
  });

  // Food-Drug & Nutraceutical Interaction Engine (v3.30.0)
  const FOOD_INTERACTIONS = G.foodDrugInteractions || {};
  const FOOD_CATALOG = FOOD_INTERACTIONS.food_catalog || {};
  const FOOD_RULES = FOOD_INTERACTIONS.interaction_rules || [];

  function getFoodInteractionsForCompound(compound) {
    if (!compound || !FOOD_RULES || !FOOD_RULES.length) return [];
    const cid = compound.id;
    const cAtcList = (compound.atc || []).map((x) =>Array.isArray(x) ? x[0] : x);

    const matches = [];
    FOOD_RULES.forEach((rule) =>{
      const sel = rule.compound_selector || {};
      let isMatch = false;

      if (sel.exact_compounds && sel.exact_compounds.includes(cid)) {
        isMatch = true;
      }

      if (!isMatch && sel.atc_prefixes && cAtcList.length >0) {
        for (const pfx of sel.atc_prefixes) {
          if (cAtcList.some((code) =>typeof code === "string" && code.startsWith(pfx))) {
            isMatch = true;
            break;
          }
        }
      }

      if (isMatch) {
        matches.push(rule);
      }
    });

    return matches;
  }

  // Neuropharmacology & Receptor Affinity Engine (v3.24.0)
  const RECEPTOR_AFFINITIES = G.receptorAffinities || {};
  // Pharmacokinetics 2-Compartment Simulation Engine (v3.25.0)
  const PK_COMPARTMENT_MODELS = G.pkCompartmentModels || {};
  // Molecular Toxicology & Safety Engine (v3.26.0)
  const TOXICOLOGY_PROFILES = G.toxicologyProfiles || {};
  // shared-target neighbours (computed once on demand)
  function neighbours(c) {
    if (c._nb) return c._nb;
    const score = new Map();
    (c.tg || []).forEach((t) =>byTarget[t].forEach((o) =>{ if (o !== c.i) score.set(o, (score.get(o) || 0) + 1); }));
    c._nb = [...score.entries()].sort((a, b) =>b[1] - a[1] || C[a[0]].n.localeCompare(C[b[0]].n)).map(([o, n]) =>({ i: o, n }));
    return c._nb;
  }

  const HUB_SEROTONIN = CORE.findIndex((n) =>n.name === "Serotonin Toxicity");
  const HUB_RESPIRATORY = CORE.findIndex((n) =>n.name === "Respiratory Depression and Fatal Overdose");
  const HUB_CARDIO = CORE.findIndex((n) =>n.name === "Stimulant and Cardiovascular Load");
  const HUB_CHOLINERGIC = CORE.findIndex((n) =>n.name === "Cholinergic Load");
  const HUB_HORMONAL = CORE.findIndex((n) =>n.name === "Hormonal Axis Suppression");

  const esc = (s) =>String(s ?? "").replace(/[&<>"]/g, (m) =>({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

  const $ = (id) =>document.getElementById(id);
  const modalReturnFocus = new WeakMap();
  const modalParent = new WeakMap();
  let activeDialog = null;
  function openDialog(dialog) {
    if (!dialog) return;
    if (!dialog.classList.contains("open")) modalReturnFocus.set(dialog, document.activeElement);
    if (activeDialog && activeDialog !== dialog && activeDialog.classList.contains("open")) modalParent.set(dialog, activeDialog);
    dialog.classList.add("open");
    activeDialog = dialog;
    if (!dialog.hasAttribute("tabindex")) dialog.setAttribute("tabindex", "-1");
    requestAnimationFrame(() =>{
      if (activeDialog !== dialog) return;
      const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
        .find((el) =>el.getClientRects().length >0);
      (focusable || dialog).focus();
    });
  }
  function closeDialog(dialog) {
    if (!dialog) return;
    dialog.classList.remove("open");
    if (activeDialog !== dialog) return;
    const parent = modalParent.get(dialog);
    activeDialog = parent && parent.classList.contains("open") ? parent : null;
    const returnFocus = modalReturnFocus.get(dialog);
    if (returnFocus && returnFocus.isConnected && typeof returnFocus.focus === "function") returnFocus.focus();
  }
  document.addEventListener("keydown", (e) =>{
    if (e.key !== "Tab" || !activeDialog || !activeDialog.classList.contains("open")) return;
    const items = [...activeDialog.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      .filter((el) =>el.getClientRects().length >0);
    if (!items.length) { e.preventDefault(); activeDialog.focus(); return; }
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && (document.activeElement === first || !activeDialog.contains(document.activeElement))) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && (document.activeElement === last || !activeDialog.contains(document.activeElement))) {
      e.preventDefault(); first.focus();
    }
  }, true);
  const cv = $("cv"), ctx = cv.getContext("2d"), tip = $("tip");
  const state = {
    k: 1, tx: 0, ty: 0, sel: null, hover: null,
    clusters: new Set(G.clusters.map((_, i) =>i)),
    pkOnly: false, cypOnly: false, hub: null, ver: "",
    rel: true, hlBin: null, tab: "overview",
    stack: new Set(), stackOnly: false, stackDrawerOpen: false,
    stackTab: "pk", selectedMatrixPair: null,
    patientDiet: new Set(),
    adv: {
      cyp: "",
      ro5: "",
      prop: "",
      phase: ""
    },
    sim: {
      horizon: "auto", // "auto", "24", "48", "168"
      compounds: {},   // { [idx]: { interval: 24, tHalf: 6.0, custom: false } }
      hoverT: null
    },
    edgeFilters: {
      enabled: new Set(["PRODRUG_OF", "CONTRAINDICATION", "CYP_INTERACTION", "TARGET_SYNERGY", "TARGET_ANTAGONISM"]),
      globalMode: false,
      popoverOpen: false
    },
    evidenceCohort: null,
    pathway: {
      id: null,
      mode: "spotlight" // "spotlight" | "solo"
    }
  };
  let W = 0, H = 0, dpr = 1, raf = 0;

  // ---------- Chemical Structure Visualizer & LightBox
  let activeModalCompound = null;

  function getChemStructure(c) {
    if (c.ch) {
      return {
        url: `https://www.ebi.ac.uk/chembl/api/data/image/${encodeURIComponent(c.ch)}.svg`,
        type: "chembl",
        extUrl: `https://www.ebi.ac.uk/chembl/compound_report_card/${encodeURIComponent(c.ch)}/`,
        extLabel: `ChEMBL ${c.ch}`
      };
    }
    if (c.cid) {
      return {
        url: `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${encodeURIComponent(c.cid)}/PNG`,
        type: "pubchem",
        extUrl: `https://pubchem.ncbi.nlm.nih.gov/compound/${encodeURIComponent(c.cid)}`,
        extLabel: `PubChem CID ${c.cid}`
      };
    }
    return null;
  }

  function openChemLightBox(idx) {
    const c = C[idx];
    if (!c) return;
    activeModalCompound = c;
    const struct = getChemStructure(c);
    const box = $("chemLightBox");
    if (!box) return;

    $("chemModalTitle").textContent = `${c.n} – Wzór strukturalny 2D`;
    const imgWrap = $("chemModalImgWrap");
    if (struct) {
      imgWrap.innerHTML = `<img id="chemModalImg" src="${struct.url}" alt="Wzór strukturalny ${esc(c.n)}">`;
      const ext = $("chemModalExtLink");
      if (ext) {
        ext.href = struct.extUrl;
        ext.textContent = `${struct.extLabel} ↗`;
        ext.style.display = "inline-flex";
      }
    } else {
      imgWrap.innerHTML = `
        <div class="chem-placeholder">
          <span style="font-size:2.2rem"></span>
          <b>Brak płaskiego wzoru małocząsteczkowego</b>
          <span>Substancja sklasyfikowana jako makromolekuła biologiczna, polimer lub mieszanina naturalna.</span>
        </div>`;
      const ext = $("chemModalExtLink");
      if (ext) ext.style.display = "none";
    }

    const details = $("chemModalDetails");
    if (details) {
      const rows = [];
      if (c.mf) rows.push(`<div>Wzór sumaryczny: <b style="color:#000">${esc(c.mf)}</b></div>`);
      if (c.pr && c.pr[0]) rows.push(`<div>Masa cząsteczkowa (MW): <b>${c.pr[0]} g/mol</b></div>`);
      if (c.ik) rows.push(`<div>InChIKey: <code style="font-size:13px;background:#f5f5f5;padding:2px 4px;border-radius:3px">${esc(c.ik)}</code></div>`);
      if (c.mt) rows.push(`<div>Typ cząsteczki: <b>${esc(c.mt)}</b></div>`);
      details.innerHTML = rows.join("");
    }

    const copyBtn = $("chemModalCopyIk");
    if (copyBtn) {
      if (c.ik) {
        copyBtn.style.display = "inline-flex";
        copyBtn.textContent = " Kopiuj InChIKey";
        copyBtn.onclick = () =>{
          navigator.clipboard?.writeText(c.ik);
          copyBtn.textContent = "OK Skopiowano InChIKey!";
          setTimeout(() =>{ copyBtn.textContent = " Kopiuj InChIKey"; }, 2000);
        };
      } else {
        copyBtn.style.display = "none";
      }
    }

    openDialog(box);
  }

  function closeChemLightBox() {
    const box = $("chemLightBox");
    if (box) closeDialog(box);
    activeModalCompound = null;
  }

  // ---------- Drug Comparator (Head-to-Head Diff View)
  let activeComparatorIndices = null;

  function openComparator(indices) {
    let list = (indices && indices.length) ? indices : [...state.stack];
    if (!list.length) {
      if (state.sel && state.sel.type === "compound") list = [state.sel.i];
      else if (C.length >= 2) list = [0, 1];
    }
    if (list.length === 1) {
      const nb = neighbours(C[list[0]]);
      if (nb.length) list.push(nb[0].i);
      else list.push((list[0] + 1) % C.length);
    }
    activeComparatorIndices = list.slice(0, 4);
    const modal = $("comparatorModal");
    if (!modal) return;

    renderComparator(activeComparatorIndices);
    $("compCountBadge").textContent = `${activeComparatorIndices.length} substancje`;
    openDialog(modal);
  }

  function closeComparator() {
    const modal = $("comparatorModal");
    if (modal) closeDialog(modal);
    activeComparatorIndices = null;
  }

  function renderComparator(indices) {
    const body = $("comparatorBody");
    if (!body) return;
    const comps = indices.map((i) =>C[i]);

    const tgCounts = new Map();
    comps.forEach((c) =>{
      (c.tg || []).forEach((t) =>{
        tgCounts.set(t, (tgCounts.get(t) || 0) + 1);
      });
    });

    const cypCounts = new Map();
    comps.forEach((c) =>{
      const cy = (c.pk && c.pk.cyp) || [];
      cy.forEach((enz) =>{
        cypCounts.set(enz, (cypCounts.get(enz) || 0) + 1);
      });
    });

    const atcCounts = new Map();
    comps.forEach((c) =>{
      (c.atc || []).forEach(([code]) =>{
        const c4 = code.slice(0, 4);
        atcCounts.set(c4, (atcCounts.get(c4) || 0) + 1);
      });
    });

    const colHeaders = comps.map((c) =>{
      const struct = getChemStructure(c);
      const thumb = struct
        ? `<div style="height:110px;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:6px;padding:4px;border:1px solid var(--color-border);cursor:zoom-in" data-zoom-chem="${c.i}" title="Powiększ wzór 2D"><img src="${struct.url}" style="max-height:100%;max-width:100%;object-fit:contain" alt="${esc(c.n)}"></div>`
        : `<div style="height:80px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--color-surface-offset);border-radius:6px;border:1px solid var(--color-border);font-size:13px;color:var(--color-text-muted)"><span style="font-size:1.5rem"></span>${esc(c.mt || "Makromolekuła")}</div>`;
      return `
        <th class="comp-col-th">
          ${thumb}
          <div style="margin-top:6px;font-size:var(--text-sm);font-weight:700">${esc(c.n)}</div>
          <div style="font-size:13px;color:var(--color-text-muted)">${esc(GR[c.g].label)} · <span style="color:var(--color-cluster-${c.c})">●</span>${esc(CL_PL[G.clusters[c.c].name])}</div>
          <div style="margin-top:4px;font-size:13px">${c.mf ? `<code>${esc(c.mf)}</code>`: ""}${c.pr && c.pr[0] ? `· <b>${c.pr[0]} g/mol</b>`: ""}</div>
          ${c.ik ? `<div style="margin-top:4px"><button class="btn-copy" data-copy-ik="${esc(c.ik)}" title="Kopiuj InChIKey">InChIKey</button></div>`: ""}
        </th>`;
    }).join("");

    const row = (label, fn, isSection = false) =>{
      if (isSection) {
        return `<tr><th class="section-th" colspan="${comps.length + 1}">${esc(label)}</th></tr>`;
      }
      const cells = comps.map((c) =>fn(c)).join("");
      return `<tr><th style="background:var(--color-surface-2);font-weight:600;width:160px">${esc(label)}</th>${cells}</tr>`;
    };

    const html = `
      <table class="comp-table">
        <thead>
          <tr>
            <th style="background:var(--color-surface-offset);width:160px;vertical-align:bottom">Parametr</th>
            ${colHeaders}
          </tr>
        </thead>
        <tbody>
          ${row("WŁAŚCIWOŚCI FIZYKOCHEMICZNE (Ro5)", null, true)}
          ${row("Masa cząst. (MW)", (c) =>`<td>${c.pr && c.pr[0] != null ? `<b>${c.pr[0]}</b>g/mol`: "–"}</td>`)}
          ${row("Lipofilowość (ALogP)", (c) =>`<td>${c.pr && c.pr[1] != null ? `<b>${c.pr[1]}</b>`: "–"}</td>`)}
          ${row("Pow. polarna (PSA)", (c) =>`<td>${c.pr && c.pr[2] != null ? `<b>${c.pr[2]}</b>Å²`: "–"}</td>`)}
          ${row("Reguła Lipińskiego (Ro5)", (c) =>{
            const v = c.pr ? c.pr[3] : null;
            if (v == null) return "<td>–</td>";
            return `<td><span class="tag ${v === 0 ? 'ok' : 'warn'}">${v === 0 ? 'OK 0 naruszeń' : `${v} naruszeń`}</span></td>`;
          })}

          ${row("FARMAKOKINETYKA (PK)", null, true)}
          ${row("Okres półtrwania (t½)", (c) =>{
            const k = c.pk;
            const th = rng(k && k.hl && [k.hl[0], k.hl[1]], k && k.hl && k.hl[2]) || (c.hlh ? `${c.hlh.toFixed(1)} h`: "–");
            return `<td><b>${esc(th)}</b>${k && k.hlt ? `<br><small class="raw">${esc(k.hlt)}</small>`: ""}</td>`;
          })}
          ${row("Wiązanie z białkami (PB)", (c) =>`<td>${c.pk && c.pk.pb ? `<b>${rng(c.pk.pb, "%")}</b>`: "–"}</td>`)}
          ${row("Biodostępność (BA)", (c) =>`<td>${c.pk && c.pk.ba ? `<b>${rng(c.pk.ba, "%")}</b>`: "–"}</td>`)}
          ${row("Metabolizm", (c) =>`<td>${c.pk && c.pk.met ? esc(c.pk.met) : "–"}</td>`)}
          ${row("Wydalanie", (c) =>{
            const k = c.pk;
            if (!k) return "<td>–</td>";
            const ren = k.ren === true ? "Głównie z moczem" : k.ren === false ? "Głównie pozanerkowo" : "–";
            return `<td><b>${ren}</b>${k.ex ? `<br><small class="note">${esc(k.ex)}</small>`: ""}</td>`;
          })}
          ${row("Etykiety FDA & EMA", (c) =>{
            const v = c.v, e = c.ve;
            const badges = [];
            if (v && v.s === 'consistent') badges.push('<span class="tag ok">FDA OK</span>');
            else if (v && v.s === 'discrepant') badges.push('<span class="tag warn">FDA ≠</span>');
            if (e && e.s === 'consistent') badges.push('<span class="tag ok">ChPL OK</span>');
            else if (e && e.s === 'discrepant') badges.push('<span class="tag warn">ChPL ≠</span>');
            return `<td>${badges.join("") || '<span class="note">–</span>'}</td>`;
          })}

          ${row("ENZYMY METABOLICZNE (CYP)", null, true)}
          ${row("Substrat izoenzymów", (c) =>{
            const cy = (c.pk && c.pk.cyp) || [];
            if (!cy.length) return '<td><span class="note">Brak danych / nie metabolizowany</span></td>';
            const items = cy.map((enz) =>{
              const shared = cypCounts.get(enz) >= 2;
              return `<span class="comp-tag ${shared ? 'comp-diff-warn' : 'tag'}" title="${shared ? 'Wspólny enzym – wąskie gardło metaboliczne' : 'Izoenzym CYP'}">${shared ? ' ' : ''}${esc(enz)}</span>`;
            }).join("");
            return `<td>${items}</td>`;
          })}

          ${row("CELE MOLEKULARNE (ChEMBL)", null, true)}
          ${row("Mechanizm działania", (c) =>`<td><small style="line-height:1.4">${esc(c.m || "Brak opisu mechanizmu w ChEMBL")}</small></td>`)}
          ${row("Wiązane cele", (c) =>{
            const tgs = c.tg || [];
            if (!tgs.length) return '<td><span class="note">Brak celów ChEMBL</span></td>';
            const items = tgs.map((t) =>{
              const shared = tgCounts.get(t) >= 2;
              return `<span class="comp-tag ${shared ? 'comp-diff-same' : 'tag'}" style="${shared ? 'font-weight:700' : ''};cursor:pointer" data-t="${t}" title="Otwórz Deep-Dive celu ChEMBL">${shared ? 'OK ' : ''}◎ ${esc(T[t].n)}</span>`;
            }).join("");
            return `<td>${items}</td>`;
          })}
          ${row("Klasyfikacja ATC", (c) =>{
            const atcs = c.atc || [];
            if (!atcs.length) return '<td><span class="note">–</span></td>';
            const items = atcs.map(([code, name]) =>{
              const shared = atcCounts.get(code.slice(0, 4)) >= 2;
              return `<div style="font-size:13px;margin-bottom:2px" class="${shared ? 'comp-diff-same' : ''}"><code>${esc(code)}</code>${esc(name)}</div>`;
            }).join("");
            return `<td>${items}</td>`;
          })}

          ${row("BEZPIECZEŃSTWO & HUBY", null, true)}
          ${row("Ostrzeżenia najwyższego stopnia", (c) =>{
            const list = [];
            if (c.bb) list.push('<span class="tag warn">Black Box Warning</span>');
            if (c.wd) list.push('<span class="tag warn">Wycofany z rynku</span>');
            if (c.ic === 'conflict') list.push('<span class="tag warn">Rozbieżność tożsamości</span>');
            return `<td>${list.join("<br>") || '<span class="tag ok">Brak flag najwyższego ryzyka</span>'}</td>`;
          })}
          ${row("Krytyczne huby ryzyka", (c) =>{
            const hubs = (c.l || []).filter((li) =>CORE[li].kind === "hub").map((li) =>esc(CORE[li].name));
            return `<td>${hubs.length ? hubs.map((h) =>`<span class="tag warn" style="display:block;margin-bottom:2px">${h}</span>`).join("") : '<span class="note">–</span>'}</td>`;
          })}
        </tbody>
      </table>`;

    body.innerHTML = html;

    body.querySelectorAll("[data-zoom-chem]").forEach((el) =>{
      el.onclick = () =>openChemLightBox(+el.dataset.zoomChem);
    });
    body.querySelectorAll("[data-t]").forEach((el) =>{
      el.onclick = () =>openTargetModal(+el.dataset.t);
    });
    body.querySelectorAll("[data-copy-ik]").forEach((btn) =>{
      btn.onclick = (e) =>{
        e.stopPropagation();
        navigator.clipboard?.writeText(btn.dataset.copyIk);
        const orig = btn.textContent;
        btn.textContent = "OK Skopiowano!";
        setTimeout(() =>{ btn.textContent = orig; }, 1800);
      };
    });
  }

  function exportComparisonMarkdown(indices) {
    const list = (indices || activeComparatorIndices || [...state.stack]);
    if (!list.length) return "";
    const comps = list.map((i) =>C[i]);
    const names = comps.map((c) =>c.n).join("vs ");
    const lines = [
      `# Porównanie Head-to-Head: ${names}`,
      "",
      `>Data wygenerowania: ${new Date().toISOString().slice(0, 10)}`,
      ">Narzędzie: Pharma-vault Drug Comparator (v3.9)",
      "",
      "| Parametr | " + comps.map((c) =>`**${c.n}**`).join("| ") + " |",
      "| :--- | " + comps.map(() =>":---").join("| ") + " |",
      "| **Klaster** | " + comps.map((c) =>CL_PL[G.clusters[c.c].name]).join("| ") + " |",
      "| **Wzór chemiczny** | " + comps.map((c) =>c.mf || "–").join("| ") + " |",
      "| **Masa cząst. (MW)** | " + comps.map((c) =>(c.pr && c.pr[0] ? `${c.pr[0]} g/mol`: "–")).join("| ") + " |",
      "| **Lipofilowość (ALogP)** | " + comps.map((c) =>(c.pr && c.pr[1] != null ? c.pr[1] : "–")).join("| ") + " |",
      "| **Pow. polarna (PSA)** | " + comps.map((c) =>(c.pr && c.pr[2] != null ? `${c.pr[2]} Å²`: "–")).join("| ") + " |",
      "| **Reguła Lipińskiego** | " + comps.map((c) =>(c.pr ? `${c.pr[3]} naruszeń`: "–")).join("| ") + " |",
      "| **Okres półtrwania (t½)** | " + comps.map((c) =>(c.pk && c.pk.hl ? `${c.pk.hl[0]}${c.pk.hl[1] ? '–' + c.pk.hl[1] : ''} ${c.pk.hl[2] || 'h'}`: c.hlh ? `${c.hlh.toFixed(1)} h`: "–")).join("| ") + " |",
      "| **Wiązanie z białkami** | " + comps.map((c) =>(c.pk && c.pk.pb ? `${c.pk.pb[0]}%`: "–")).join("| ") + " |",
      "| **Substraty CYP** | " + comps.map((c) =>((c.pk && c.pk.cyp) ? c.pk.cyp.join(", ") : "–")).join("| ") + " |",
      "| **InChIKey** | " + comps.map((c) =>(c.ik ? `\`${c.ik}\``: "–")).join("| ") + " |",
      "| **Mechanizm (ChEMBL)** | " + comps.map((c) =>(c.m ? c.m.replace(/\|/g, "/") : "–")).join("| ") + " |",
      "",
      ">[!info] Raport wygenerowany automatycznie przez Pharma-vault Head-to-Head Comparator.",
      ""
    ];
    return lines.join("\n");
  }

  // ---------- Chemical Similarity & Analogs Explorer
  let activeAnalogsQuery = null;
  let activeAnalogsMode = "hybrid";
  let activeAnalogsSameCategory = false;

  function findCompoundAnalogs(queryC, mode = "hybrid", sameCategoryOnly = false, limit = 10) {
    if (!queryC) return [];
    const qPr = queryC.pr || [];
    const qIk = queryC.ik ? queryC.ik.slice(0, 14) : "";
    const qTg = queryC.tg || [];
    const qTgSet = new Set(qTg);
    const qMf = queryC.mf || "";

    const candidates = [];

    for (let i = 0; i < C.length; i++) {
      const cand = C[i];
      if (cand.i === queryC.i) continue;
      if (sameCategoryOnly && cand.g !== queryC.g) continue;

      // 1. Physicochemical score (Ro5)
      let sPhys = 25;
      const cPr = cand.pr;
      if (qPr.length >= 3 && cPr && cPr.length >= 3 && qPr[0] != null && cPr[0] != null) {
        const dMw = Math.abs(qPr[0] - cPr[0]) / 150.0;
        const dLogP = Math.abs((qPr[1] ?? 0) - (cPr[1] ?? 0)) / 1.5;
        const dPsa = Math.abs((qPr[2] ?? 0) - (cPr[2] ?? 0)) / 40.0;
        const dist = Math.sqrt(dMw * dMw + dLogP * dLogP + dPsa * dPsa);
        sPhys = Math.max(0, Math.min(100, Math.round(100 * Math.exp(-dist / 2.0))));
      }

      // 2. Chemical & Scaffold score (InChIKey & formula)
      let sChem = sPhys;
      const cIk = cand.ik ? cand.ik.slice(0, 14) : "";
      if (qIk && cIk) {
        if (qIk === cIk) {
          sChem = 100; // Exact scaffold match / stereoisomer / enantiomer
        } else {
          let match = 0;
          for (let k = 0; k < 14; k++) {
            if (qIk[k] === cIk[k]) match++;
          }
          const ikSim = Math.round((match / 14.0) * 100);
          let mfSim = 0;
          if (qMf && cand.mf) {
            if (qMf === cand.mf) mfSim = 95;
            else if (Math.abs(qMf.length - cand.mf.length) <= 2) mfSim = 50;
          }
          sChem = Math.max(ikSim, mfSim, Math.round(sPhys * 0.7));
        }
      } else if (qMf && cand.mf && qMf === cand.mf) {
        sChem = 90;
      }

      // 3. Pharmacological Target score (Jaccard similarity)
      let sTarget = 0;
      const cTg = cand.tg || [];
      const sharedTargets = cTg.filter((ti) =>qTgSet.has(ti));
      if (qTg.length >0 && cTg.length >0) {
        const unionSize = new Set([...qTg, ...cTg]).size;
        sTarget = unionSize >0 ? Math.round((sharedTargets.length / unionSize) * 100) : 0;
      } else if (queryC.m && cand.m) {
        const wordsA = queryC.m.toLowerCase().split(/\W+/).filter((w) =>w.length >3);
        const wordsB = cand.m.toLowerCase().split(/\W+/).filter((w) =>w.length >3);
        const sharedW = wordsA.filter((w) =>wordsB.includes(w));
        if (sharedW.length >0) sTarget = Math.min(60, sharedW.length * 20);
      }

      // 4. Mode-based Weighted Score
      let score = 0;
      if (mode === "structure") {
        score = Math.round(0.60 * sChem + 0.40 * sPhys);
      } else if (mode === "bioisostere") {
        score = Math.round(0.65 * sTarget + 0.35 * sPhys);
      } else {
        // hybrid
        score = Math.round(0.40 * sChem + 0.35 * sPhys + 0.25 * sTarget);
      }
      score = Math.min(100, Math.max(0, score));

      candidates.push({
        compound: cand,
        score,
        sChem,
        sPhys,
        sTarget,
        sharedTargets
      });
    }

    candidates.sort((a, b) =>b.score - a.score);
    return candidates.slice(0, limit);
  }

  function openAnalogsModal(cIdx, mode = "hybrid", sameCategory = false) {
    const c = typeof cIdx === "number" ? C[cIdx] : cIdx;
    if (!c) return;
    activeAnalogsQuery = c.i;
    activeAnalogsMode = mode;
    activeAnalogsSameCategory = sameCategory;

    const modal = $("analogsModal");
    if (!modal) return;

    const querySub = $("analogsQuerySubtitle");
    if (querySub) querySub.textContent = `Analogi dla: ${c.n}`;

    const modeGroup = $("analogModeGroup");
    if (modeGroup) {
      modeGroup.querySelectorAll("[data-analog-mode]").forEach((btn) =>{
        btn.classList.toggle("active", btn.dataset.analogMode === activeAnalogsMode);
      });
    }

    const check = $("analogsSameCategoryCheck");
    if (check) check.checked = activeAnalogsSameCategory;

    const qCol = $("analogsQueryCol");
    if (qCol) {
      const struct = getChemStructure(c);
      const pr = c.pr || [];
      const tgNames = (c.tg || []).slice(0, 4).map((ti) =>T[ti]?.n).filter(Boolean);
      qCol.innerHTML = `
        <div style="font-size:13px;text-transform:uppercase;letter-spacing:0.02em;color:var(--color-text-muted);font-weight:700">Cząsteczka bazowa</div>
        <div style="text-align:center;padding:6px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px">
          ${struct ? `<img src="${struct.url}" alt="${esc(c.n)}" style="max-width:140px;max-height:140px;object-fit:contain" loading="lazy" data-zoom-chem="${c.i}">`: `
            <div style="height:100px;display:flex;align-items:center;justify-content:center;color:var(--color-text-muted)">Brak 2D</div>
          `}
        </div>
        <b style="font-size:14px;color:var(--color-text)">${esc(c.n)}</b>
        <div style="font-size:13px;color:var(--color-text-muted)">${esc(CL_PL[G.clusters[c.c].name])} · ${esc(GR[c.g].label)}</div>
        <div style="display:grid;gap:3px;font-size:13px;margin-top:4px">
          <div>Wzór: <b>${esc(c.mf || "–")}</b></div>
          <div>Masa (MW): <b>${pr[0] != null ? pr[0] + " g/mol" : "–"}</b></div>
          <div>ALogP: <b>${pr[1] != null ? pr[1] : "–"}</b></div>
          <div>PSA: <b>${pr[2] != null ? pr[2] + " Å²" : "–"}</b></div>
          ${c.ik ? `<div>InChIKey: <code style="font-size:13px">${esc(c.ik.slice(0, 14))}…</code></div>`: ""}
        </div>
        ${tgNames.length ? `
          <div style="margin-top:6px;font-size:13px">
            <span style="color:var(--color-text-muted);font-weight:600">Główne cele:</span>
            <div style="display:flex;gap:3px;flex-wrap:wrap;margin-top:2px">
              ${tgNames.map((n) =>`<span class="tag ok" style="font-size:13px">◎ ${esc(n)}</span>`).join("")}
            </div>
          </div>
        `: ""}
      `;
    }

    const analogs = findCompoundAnalogs(c, activeAnalogsMode, activeAnalogsSameCategory, 12);
    const grid = $("analogsResultsGrid");
    if (grid) {
      if (!analogs.length) {
        grid.innerHTML = '<div style="color:var(--color-text-muted);padding:1rem">Nie znaleziono pasujących analogów w wybranych kryteriach.</div>';
      } else {
        grid.innerHTML = analogs.map((item) =>{
          const cand = item.compound;
          const struct = getChemStructure(cand);
          const pr = cand.pr || [];
          const qPr = c.pr || [];
          const dMw = qPr[0] != null && pr[0] != null ? (pr[0] - qPr[0]).toFixed(1) : null;
          const dLogP = qPr[1] != null && pr[1] != null ? (pr[1] - qPr[1]).toFixed(2) : null;
          const badgeCls = item.score >= 80 ? "similarity-high" : item.score >= 60 ? "similarity-mid" : "similarity-low";
          const inStack = state.stack.has(cand.i);

          const thumbHtml = struct
            ? `<img src="${struct.url}" alt="${esc(cand.n)}" style="width:48px;height:48px;object-fit:contain;cursor:pointer;flex-shrink:0" loading="lazy" data-zoom-chem="${cand.i}" title="Powiększ wzór 2D">`
            : `<span class="dot" style="background:var(--color-cluster-${cand.c});width:14px;height:14px;flex-shrink:0"></span>`;

          return `
            <div class="analog-card">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px">
                <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
                  ${thumbHtml}
                  <div style="min-width:0;overflow:hidden">
                    <button data-analog-select="${cand.i}" style="background:none;border:0;color:var(--color-text);font-weight:700;font-size:13px;cursor:pointer;padding:0;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block" title="${esc(cand.n)}">${esc(cand.n)}</button>
                    <small style="color:var(--color-text-muted);font-size:13px">${esc(GR[cand.g].label)}</small>
                  </div>
                </div>
                <span class="similarity-badge ${badgeCls}" title="Zgodność: ${item.score}% (Chemia: ${item.sChem}%, Ro5: ${item.sPhys}%, Cele: ${item.sTarget}%)">
                  ${item.score}%
                </span>
              </div>
              <div style="display:flex;gap:4px;flex-wrap:wrap;font-size:13px;margin-top:4px">
                <span class="tag">${cand.mf || "Brak wzoru"}</span>
                ${dMw != null ? `<span class="tag">ΔMW ${+dMw >= 0 ? '+' : ''}${dMw}</span>`: ""}
                ${dLogP != null ? `<span class="tag">ΔLogP ${+dLogP >= 0 ? '+' : ''}${dLogP}</span>`: ""}
                ${item.sharedTargets.length ? `<span class="tag ok">◎ ${item.sharedTargets.length} wsp. celów</span>`: ""}
              </div>
              <div style="display:flex;gap:4px;margin-top:6px">
                <button class="btn btn-gold" data-analog-compare="${cand.i}" style="flex:1;font-size:13px;padding:3px 6px" title="Porównaj head-to-head">Porównaj</button>
                <button class="btn ${inStack ? 'btn-gold' : ''}" data-analog-stack="${cand.i}" style="font-size:13px;padding:3px 6px" title="${inStack ? 'Usuń ze stacka' : 'Dodaj do stacka'}">
                  ${inStack ? 'OK W stacku' : '+ Stack'}
                </button>
                <button class="btn" data-analog-graph="${cand.i}" style="font-size:13px;padding:3px 6px" title="Pokaż w grafie">Graf</button>
              </div>
            </div>
          `;
        }).join("");
      }
    }

    wireAnalogsModal(c.i);
    openDialog(modal);
  }

  function closeAnalogsModal() {
    const modal = $("analogsModal");
    if (modal) closeDialog(modal);
    activeAnalogsQuery = null;
  }

  function wireAnalogsModal(queryIdx) {
    const modal = $("analogsModal");
    if (!modal) return;

    const closeBtn = $("analogsModalClose");
    if (closeBtn) closeBtn.onclick = closeAnalogsModal;

    modal.onclick = (e) =>{
      if (e.target === modal) closeAnalogsModal();
    };

    const modeGroup = $("analogModeGroup");
    if (modeGroup) {
      modeGroup.querySelectorAll("[data-analog-mode]").forEach((btn) =>{
        btn.onclick = () =>{
          openAnalogsModal(queryIdx, btn.dataset.analogMode, activeAnalogsSameCategory);
        };
      });
    }

    const check = $("analogsSameCategoryCheck");
    if (check) {
      check.onchange = () =>{
        openAnalogsModal(queryIdx, activeAnalogsMode, check.checked);
      };
    }

    modal.querySelectorAll("[data-analog-select]").forEach((b) =>{
      b.onclick = () =>{
        closeAnalogsModal();
        select({ type: "compound", i: +b.dataset.analogSelect }, true);
      };
    });

    modal.querySelectorAll("[data-analog-compare]").forEach((b) =>{
      b.onclick = () =>{
        const candIdx = +b.dataset.analogCompare;
        closeAnalogsModal();
        openComparator([queryIdx, candIdx]);
      };
    });

    modal.querySelectorAll("[data-analog-stack]").forEach((btn) =>{
      btn.onclick = (e) =>{
        e.stopPropagation();
        const candIdx = +btn.dataset.analogStack;
        toggleInStack(candIdx);
        const inStack = state.stack.has(candIdx);
        btn.textContent = inStack ? "OK W stacku" : "+ Stack";
        btn.classList.toggle("btn-gold", inStack);
      };
    });

    modal.querySelectorAll("[data-analog-graph]").forEach((b) =>{
      b.onclick = () =>{
        const candIdx = +b.dataset.analogGraph;
        closeAnalogsModal();
        select({ type: "compound", i: candIdx }, true);
      };
    });

    modal.querySelectorAll("[data-zoom-chem]").forEach((el) =>{
      el.onclick = () =>openChemLightBox(+el.dataset.zoomChem);
    });
  }

  // ---------- Target & Pathway Deep-Dive Explorer
  let activeModalTarget = null;

  function classifyTargetAction(c, targetName) {
    const m = (c.m || "").toLowerCase();
    const tLower = (targetName || "").toLowerCase();

    const tWords = tLower.split(/\s+/).filter((w) =>w.length >3);
    const mechParts = m.split("|");
    const relevantParts = mechParts.filter((part) =>
      tWords.length === 0 || tWords.some((w) =>part.includes(w))
    );
    const textToCheck = relevantParts.length ? relevantParts.join("") : m;

    if (textToCheck.includes("antagonist") || textToCheck.includes("inverse agonist") || textToCheck.includes("blocker") || textToCheck.includes("negative allosteric")) {
      return "antagonist";
    }
    if (textToCheck.includes("agonist") || textToCheck.includes("activator") || textToCheck.includes("positive allosteric") || textToCheck.includes("opener")) {
      return "agonist";
    }
    if (textToCheck.includes("inhibitor") || textToCheck.includes("reuptake inhibitor") || textToCheck.includes("inactivator")) {
      return "inhibitor";
    }
    return "other";
  }

  function openTargetModal(ti) {
    const t = T[ti];
    if (!t) return;
    activeModalTarget = ti;
    const modal = $("targetModal");
    if (!modal) return;

    const ligands = (byTarget[ti] || []).map((i) =>C[i]);
    const visLigands = ligands.filter(visible);

    const groups = {
      agonist: [],
      antagonist: [],
      inhibitor: [],
      other: []
    };

    ligands.forEach((c) =>{
      const act = classifyTargetAction(c, t.n);
      groups[act].push(c);
    });

    const phase4 = ligands.filter((c) =>c.ph === 4).length;
    const phase13 = ligands.filter((c) =>c.ph != null && c.ph >= 1 && c.ph <= 3).length;
    const phase0 = ligands.length - phase4 - phase13;

    const hubCounts = new Map();
    ligands.forEach((c) =>{
      (c.l || []).forEach((li) =>{
        if (CORE[li].kind === "hub") {
          hubCounts.set(CORE[li].name, (hubCounts.get(CORE[li].name) || 0) + 1);
        }
      });
    });

    const topHubs = [...hubCounts.entries()]
      .sort((a, b) =>b[1] - a[1])
      .slice(0, 4);

    const hubBadges = topHubs.map(([hName, count]) =>{
      const pct = Math.round((count / ligands.length) * 100);
      return `<span class="tag warn" title="${pct}% powiązanych leków należy do tego hubu">${esc(hName)} (${pct}%)</span>`;
    }).join("");

    const head = $("targetModalHead");
    if (head) {
      head.innerHTML = `
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem">
          <div>
            <div style="display:flex;align-items:center;gap:6px;font-size:13px;color:var(--color-text-muted)">
              <span>Cel molekularny ChEMBL</span>
              <span>·</span>
              <span class="tag" style="font-size:13px">${esc(t.ty || "Białko")}</span>
              <span>·</span>
              <a href="https://www.ebi.ac.uk/chembl/target_report_card/${esc(t.id)}/" target="_blank" rel="noopener noreferrer" style="color:var(--color-primary)">${esc(t.id)} ↗</a>
            </div>
            <div style="font-size:var(--text-lg);font-weight:700;font-family:var(--font-display);margin-top:2px">${esc(t.n)}</div>
          </div>
          <button class="card-close" id="targetModalClose" title="Zamknij (Esc)" aria-label="Zamknij eksplorator celu">×</button>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-top:4px;padding-top:6px;border-top:1px solid var(--color-border);font-size:13px">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span class="tag ok" style="font-weight:600">${ligands.length} substancji</span>
            <span style="color:var(--color-text-muted)">(${visLigands.length} widocznych na grafie)</span>
            <span style="color:var(--color-text-muted)">·</span>
            <span><b>${phase4}</b>zatwierdzonych (faza 4)</span>
            <span>·</span>
            <span><b>${phase13}</b>w badaniach (fazy 1–3)</span>
            ${phase0 ? `<span>· <b>${phase0}</b>badawczych</span>`: ""}
          </div>
          <div style="display:flex;gap:6px;align-items:center">
            <button class="btn" id="targetOpen3DBtn" data-target-id="${esc(t.id)}" style="font-size:var(--text-xs);padding:4px 10px" title="Otwórz strukturę 3D i architekturę kieszeni wiążącej">Struktura 3D</button>
            <button class="btn btn-gold" id="targetShowOnGraphBtn" style="font-size:var(--text-xs);padding:4px 10px">Pokaż na grafie</button>
          </div>
        </div>
        ${topHubs.length ? `
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:4px">
            <span style="font-size:13px;font-weight:600;color:var(--color-text-muted)">Profil ryzyka PD (huby):</span>
            ${hubBadges}
          </div>`: ""}
      `;
    }

    const renderCol = (title, icon, color, list, emptyMsg) =>{
      const cards = list.map((c) =>{
        const inStack = state.stack.has(c.i);
        const struct = getChemStructure(c);
        const thumbHtml = struct
          ? `<img src="${struct.url}" style="width:36px;height:36px;object-fit:contain;background:#fff;border-radius:4px;border:1px solid var(--color-border);cursor:zoom-in" data-zoom-chem="${c.i}" title="Powiększ wzór 2D" alt="${esc(c.n)}">`
          : `<span class="dot" style="background:var(--color-cluster-${c.c});width:12px;height:12px;flex-shrink:0"></span>`;

        return `
          <div class="target-drug-card">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
              <div style="display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden">
                ${thumbHtml}
                <div style="min-width:0;overflow:hidden">
                  <button data-c="${c.i}" style="background:none;border:0;color:var(--color-text);font-weight:700;font-size:13px;cursor:pointer;padding:0;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block" title="${esc(c.n)}">${esc(c.n)}</button>
                  <small style="color:var(--color-text-muted);font-size:13px">${esc(GR[c.g].label)}</small>
                </div>
              </div>
              <button class="btn-copy ${inStack ? 'ok' : ''}" data-target-stack-toggle="${c.i}" style="font-size:13px;padding:2px 6px;white-space:nowrap" title="${inStack ? 'Usuń ze stacka' : 'Dodaj do stacka'}">
                ${inStack ? 'OK W stacku' : '+ Stack'}
              </button>
            </div>
            <div style="display:flex;gap:4px;flex-wrap:wrap;font-size:13px;margin-top:2px">
              ${c.ph ? `<span class="tag">Faza ${c.ph}</span>`: '<span class="tag">Badawczy</span>'}
              ${c.pk ? '<span class="tag ok">PK</span>' : ''}
              ${c.pr ? `<span class="tag">${c.pr[0]} g/mol</span>`: ''}
            </div>
            ${c.m ? `<div style="font-size:13px;color:var(--color-text-muted);font-style:italic;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(c.m)}">${esc(c.m.replace(/\|/g, ', '))}</div>`: ''}
          </div>
        `;
      }).join("");

      return `
        <div class="target-action-col">
          <div class="target-action-col-head" style="color:${color}">
            <span>${icon} ${esc(title)}</span>
            <span class="tag" style="font-size:13px">${list.length}</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px">
            ${cards || `<span style="font-size:13px;color:var(--color-text-muted);padding:8px 4px">${emptyMsg}</span>`}
          </div>
        </div>
      `;
    };

    const body = $("targetModalBody");
    if (body) {
      body.innerHTML = `
        <div class="target-grid">
          ${renderCol("Aktywatory / Agoniści", "", "var(--color-success)", groups.agonist, "Brak zidentyfikowanych agonistów")}
          ${renderCol("Blokery / Antagoniści", "", "var(--color-error)", groups.antagonist, "Brak zidentyfikowanych antagonistów")}
          ${renderCol("Inhibitory / Blokery wychwytu", "", "var(--color-warning)", groups.inhibitor, "Brak zidentyfikowanych inhibitorów")}
          ${renderCol("Pozostałe ligandy", "", "var(--color-text-muted)", groups.other, "Brak innych ligandów")}
        </div>
      `;
    }

    wireTargetModal(ti);
    openDialog(modal);
  }

  function closeTargetModal() {
    const modal = $("targetModal");
    if (modal) closeDialog(modal);
    activeModalTarget = null;
  }

  function wireTargetModal(ti) {
    const modal = $("targetModal");
    if (!modal) return;

    const closeBtn = $("targetModalClose");
    if (closeBtn) closeBtn.onclick = closeTargetModal;
    const footClose = $("targetModalCloseFoot");
    if (footClose) footClose.onclick = closeTargetModal;

    modal.onclick = (e) =>{
      if (e.target === modal) closeTargetModal();
    };

    const graphBtn = $("targetShowOnGraphBtn");
    if (graphBtn) {
      graphBtn.onclick = () =>{
        closeTargetModal();
        select({ type: "target", i: ti }, true);
      };
    }
    const open3DBtn = $("targetOpen3DBtn");
    if (open3DBtn) {
      open3DBtn.onclick = () =>{
        closeTargetModal();
        openStruct3DModal(ti);
      };
    }

    modal.querySelectorAll("[data-c]").forEach((b) =>{
      b.onclick = () =>{
        closeTargetModal();
        select({ type: "compound", i: +b.dataset.c }, true);
      };
    });

    modal.querySelectorAll("[data-zoom-chem]").forEach((el) =>{
      el.onclick = () =>openChemLightBox(+el.dataset.zoomChem);
    });

    modal.querySelectorAll("[data-target-stack-toggle]").forEach((btn) =>{
      btn.onclick = (e) =>{
        e.stopPropagation();
        const cIdx = +btn.dataset.targetStackToggle;
        toggleInStack(cIdx);
        const inStack = state.stack.has(cIdx);
        btn.textContent = inStack ? "OK W stacku" : "+ Stack";
        btn.classList.toggle("ok", inStack);
      };
    });
  }

  // ---------- Semantic Pharmacological Typed Edges
  const TYPED_EDGE_CONFIG = {
    PRODRUG_OF: {
      label: "Prolek → Lek aktywny",
      color: "#44a282",
      dash: [],
      lineWidth: 2.2,
      directed: true,
      desc: "Biotransformacja proleku do czynnego metabolitu",
      shortLabel: "Prolek"
    },
    CONTRAINDICATION: {
      label: "Przeciwwskazanie / Ciężkie ryzyko",
      color: "#e5566f",
      dash: [6, 4],
      lineWidth: 2.4,
      directed: false,
      desc: "Krytyczne ryzyko powikłań zagrażających życiu",
      shortLabel: "Przeciwwskazanie"
    },
    CYP_INTERACTION: {
      label: "Hamowanie / Konkurencja CYP",
      color: "#d9a441",
      dash: [8, 3, 2, 3],
      lineWidth: 2.0,
      directed: true,
      desc: "Inhibitor zaburza klirens i eliminację substratu",
      shortLabel: "Interakcja CYP"
    },
    TARGET_SYNERGY: {
      label: "Synergia celów molekularnych",
      color: "#4a8ad6",
      dash: [3, 3],
      lineWidth: 1.8,
      directed: false,
      desc: "Zgodny kierunek modulacji tego samego celu ChEMBL",
      shortLabel: "Synergia"
    },
    TARGET_ANTAGONISM: {
      label: "Antagonizm / Odtrutka",
      color: "#5899e2",
      dash: [5, 5],
      lineWidth: 2.0,
      directed: false,
      desc: "Przeciwstawne działanie (agonista vs bloker/antagonista)",
      shortLabel: "Antagonizm"
    }
  };

  const compById = new Map();
  C.forEach((c) =>compById.set(c.id, c.i));

  const CURATED_TYPED_EDGES = (G.curatedTypedEdges && G.curatedTypedEdges.length) ? G.curatedTypedEdges : [
    ["lisdexamfetamine-compound", "dextroamphetamine-compound", "PRODRUG_OF", "Biotransformacja erytrocytarna do aktywnej d-amfetaminy"],
    ["codeine-compound", "morphine-compound", "PRODRUG_OF", "O-demetylacja przez CYP2D6 do aktywnej morfiny"]
  ];

  const allTypedEdges = [];
  const typedEdgesByComp = new Map();
  const edgeCounts = {
    PRODRUG_OF: 0,
    CONTRAINDICATION: 0,
    CYP_INTERACTION: 0,
    TARGET_SYNERGY: 0,
    TARGET_ANTAGONISM: 0
  };

  function addTypedEdge(fromIdx, toIdx, type, note) {
    if (fromIdx == null || toIdx == null || fromIdx === toIdx) return;
    const cfg = TYPED_EDGE_CONFIG[type];
    if (!cfg) return;

    const existing = (typedEdgesByComp.get(fromIdx) || []).find((e) =>e.other === toIdx && e.type === type);
    if (existing) return;

    const edgeObj = { from: fromIdx, to: toIdx, type, note };
    allTypedEdges.push(edgeObj);
    edgeCounts[type] = (edgeCounts[type] || 0) + 1;

    if (!typedEdgesByComp.has(fromIdx)) typedEdgesByComp.set(fromIdx, []);
    typedEdgesByComp.get(fromIdx).push({
      from: fromIdx, to: toIdx, other: toIdx, type, note, dir: cfg.directed ? "out" : "bi"
    });

    if (!typedEdgesByComp.has(toIdx)) typedEdgesByComp.set(toIdx, []);
    typedEdgesByComp.get(toIdx).push({
      from: fromIdx, to: toIdx, other: fromIdx, type, note, dir: cfg.directed ? "in" : "bi"
    });
  }

  function initTypedEdgesIndex() {
    CURATED_TYPED_EDGES.forEach(([fromId, toId, type, note]) =>{
      const fi = compById.get(fromId);
      const ti = compById.get(toId);
      if (fi != null && ti != null) {
        addTypedEdge(fi, ti, type, note);
      }
    });

    T.forEach((t, ti) =>{
      const ligands = byTarget[ti] || [];
      if (ligands.length < 2 || ligands.length >80) return;

      const classified = ligands.map((ci) =>({
        ci,
        act: classifyTargetAction(C[ci], t.n)
      }));

      for (let i = 0; i < classified.length; i++) {
        for (let j = i + 1; j < classified.length; j++) {
          const a = classified[i], b = classified[j];
          if (a.act === "other" && b.act === "other") continue;

          if ((a.act === "agonist" && b.act === "antagonist") || (a.act === "antagonist" && b.act === "agonist")) {
            addTypedEdge(a.ci, b.ci, "TARGET_ANTAGONISM", `Przeciwstawne działanie na celu: ${t.n}`);
          } else if ((a.act === "agonist" && b.act === "agonist") || (a.act === "antagonist" && b.act === "antagonist") || (a.act === "inhibitor" && b.act === "inhibitor")) {
            if (C[a.ci].c === C[b.ci].c || Math.hypot(C[a.ci].x - C[b.ci].x, C[a.ci].y - C[b.ci].y) < 1200) {
              addTypedEdge(a.ci, b.ci, "TARGET_SYNERGY", `Zbieżny wektor działania na celu: ${t.n}`);
            }
          }
        }
      }
    });
  }

  initTypedEdgesIndex();

  function getCompoundTypedEdges(c) {
    if (!c) return [];
    return typedEdgesByComp.get(c.i) || [];
  }

  function drawSingleTypedEdge(ctx, type, x1, y1, x2, y2, strong = false) {
    const cfg = TYPED_EDGE_CONFIG[type];
    if (!cfg) return;
    const color = semanticEdgeColor(type);
    ctx.save();
    ctx.strokeStyle = strong ? color : color + "bb";
    ctx.lineWidth = strong ? cfg.lineWidth + 1.0 : cfg.lineWidth;
    if (cfg.dash && cfg.dash.length >0) {
      ctx.setLineDash(cfg.dash);
    } else {
      ctx.setLineDash([]);
    }

    const dx = x2 - x1, dy = y2 - y1;
    const dist = Math.hypot(dx, dy);
    if (dist < 1) { ctx.restore(); return; }

    const curv = type === "PRODRUG_OF" ? 0.08 : type === "TARGET_SYNERGY" ? 0.16 : type === "CONTRAINDICATION" ? -0.14 : 0.12;
    const mx = (x1 + x2) / 2 + (y2 - y1) * curv;
    const my = (y1 + y2) / 2 - (x2 - x1) * curv;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(mx, my, x2, y2);
    ctx.stroke();

    if (cfg.directed) {
      ctx.setLineDash([]);
      const angle = Math.atan2(y2 - my, x2 - mx);
      const size = strong ? 11 : 8.5;
      const offset = 7;
      const ax = x2 - offset * Math.cos(angle);
      const ay = y2 - offset * Math.sin(angle);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(ax - size * Math.cos(angle - Math.PI / 6), ay - size * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(ax - size * Math.cos(angle + Math.PI / 6), ay - size * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fill();
    } else if (type === "TARGET_ANTAGONISM") {
      ctx.setLineDash([]);
      const angle = Math.atan2(y2 - my, x2 - mx);
      const offset = 7;
      const bx = x2 - offset * Math.cos(angle);
      const by = y2 - offset * Math.sin(angle);
      const pAngle = angle + Math.PI / 2;
      const barLen = strong ? 13 : 9;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(bx - (barLen / 2) * Math.cos(pAngle), by - (barLen / 2) * Math.sin(pAngle));
      ctx.lineTo(bx + (barLen / 2) * Math.cos(pAngle), by + (barLen / 2) * Math.sin(pAngle));
      ctx.stroke();
    }

    ctx.restore();
  }

  function toggleEdgesPopover(forceOpen) {
    const popover = $("edgesPopover");
    if (!popover) return;
    const nextState = forceOpen !== undefined ? forceOpen : !state.edgeFilters.popoverOpen;
    state.edgeFilters.popoverOpen = nextState;
    popover.style.display = nextState ? "flex" : "none";
    const btn = $("edgesBtn");
    if (btn) btn.setAttribute("aria-expanded", String(nextState));
    if (nextState) {
      renderEdgeFilterList();
    }
  }

  function renderEdgeFilterList() {
    const listEl = $("edgeFilterList");
    if (!listEl) return;
    const types = Object.keys(TYPED_EDGE_CONFIG);
    listEl.innerHTML = types.map((t) =>{
      const cfg = TYPED_EDGE_CONFIG[t];
      const on = state.edgeFilters.enabled.has(t);
      const count = edgeCounts[t] || 0;
      return `
        <div class="edge-filter-item">
          <label class="edge-filter-label">
            <input type="checkbox" data-edge-type="${t}" ${on ? "checked" : ""} />
            <span class="edge-color-dot ${cfg.directed ? 'directed' : ''}" style="background:${semanticEdgeColor(t)}"></span>
            <span>${esc(cfg.label)}</span>
          </label>
          <span class="edge-badge">${count}</span>
        </div>
      `;
    }).join("");

    listEl.querySelectorAll("[data-edge-type]").forEach((cb) =>{
      cb.onchange = () =>{
        const type = cb.dataset.edgeType;
        if (cb.checked) {
          state.edgeFilters.enabled.add(type);
        } else {
          state.edgeFilters.enabled.delete(type);
        }
        draw();
      };
    });

    const globalCheck = $("edgeGlobalModeCheck");
    if (globalCheck) {
      globalCheck.checked = state.edgeFilters.globalMode;
      globalCheck.onchange = () =>{
        state.edgeFilters.globalMode = globalCheck.checked;
        draw();
      };
    }
  }

  // ---------- Metabolite Tree & Prodrug Biotransformation Navigator
  let activeMetaboliteQuery = null;
  let activeMetaboliteSelectedNode = null;

  const METABOLITE_CASCADES = (G.metaboliteCascades && Object.keys(G.metaboliteCascades).length) ? G.metaboliteCascades : {
    "codeine-compound": {
      rootRole: "prodrug",
      notes: "Prolek opioidowy wymagający O-demetylacji przez CYP2D6 do aktywnej morfiny (ok. 10% dawki). Reszta eliminowana przez glukuronidację (CYP3A4 / UGT2B7).",
      phase1: [
        { id: "morphine-compound", name: "Morfina", enzyme: "CYP2D6", reaction: "O-demetylacja (10%)", activity: "active", desc: "Główny czynny metabolit odpowiadający za działanie przeciwbólowe (silny agonista receptorów µ-opioidowych).", tHalf: "2 - 4 h" },
        { id: null, name: "Norkodeina", enzyme: "CYP3A4", reaction: "N-demetylacja (10-20%)", activity: "inactive", desc: "Metabolit o znikomej aktywności opioidowej.", tHalf: "3 - 5 h" }
      ],
      phase2: [
        { parentId: "morphine-compound", id: null, name: "Morfino-6-glukuronid (M6G)", enzyme: "UGT2B7", reaction: "Glukuronidacja (60%)", activity: "active", desc: "Silnie aktywny metabolit o silniejszym powinowactwie do receptora MOR niż sama morfina.", tHalf: "3 - 5 h" }
      ]
    }
  };

  function parseMetabolismText(c) {
    if (!c || !c.pk) return null;
    const metText = c.pk.met || "";
    const cypList = c.pk.cyp || [];
    if (!metText && cypList.length === 0) return null;

    const foundCyps = new Set(cypList);
    const cypRegex = /\bCYP[0-9][A-Z][0-9]+\b/gi;
    let m;
    while ((m = cypRegex.exec(metText)) !== null) {
      foundCyps.add(m[0].toUpperCase());
    }

    const phase1 = [];
    if (foundCyps.size >0) {
      foundCyps.forEach((cyp) =>{
        phase1.push({
          id: null,
          name: `Metabolit oksydacyjny (${cyp})`,
          enzyme: cyp,
          reaction: "Oksydacja / Hydroksylacja Fazy I",
          activity: "active",
          desc: `Produkt biotransformacji przez izoenzym ${cyp} w mikrosomach wątrobowych.`,
          tHalf: "–"
        });
      });
    } else {
      phase1.push({
        id: null,
        name: "Metabolit wątrobowy Fazy I",
        enzyme: "Enzymy wątrobowe",
        reaction: "Modyfikacja funkcyjna",
        activity: "inactive",
        desc: metText || "Metabolizm wątrobowy pierwszego przejścia.",
        tHalf: "–"
      });
    }

    const phase2 = [];
    const hasGluc = /glucuronid|ugt/i.test(metText);
    const hasSulf = /sulfat|sult/i.test(metText);
    if (hasGluc) {
      phase2.push({
        parentId: null,
        id: null,
        name: `Koniugat glukuronidowy (${esc(c.n)})`,
        enzyme: "UGT (UDP-glukuronozylotransferaza)",
        reaction: "Glukuronidacja Fazy II",
        activity: "inactive",
        desc: "Polarny koniugat przygotowany do wydalenia z moczem lub żółcią.",
        tHalf: "–"
      });
    }
    if (hasSulf) {
      phase2.push({
        parentId: null,
        id: null,
        name: `Koniugat siarczanowy (${esc(c.n)})`,
        enzyme: "SULT (Sulfotransferaza)",
        reaction: "Sulfatacja Fazy II",
        activity: "inactive",
        desc: "Rozpuszczalny w wodzie metabolit siarczanowy.",
        tHalf: "–"
      });
    }
    if (phase2.length === 0) {
      phase2.push({
        parentId: null,
        id: null,
        name: `Koniugaty polarne i wydalanie`,
        enzyme: "Koniugacja / Nerki",
        reaction: "Eliminacja Fazy II",
        activity: "inactive",
        desc: "Koniugacja i wydalanie nerkowe / żółciowe.",
        tHalf: "–"
      });
    }

    return {
      rootRole: "active",
      notes: metText || `Biotransformacja wątrobowa przez izoenzymy: ${[...foundCyps].join(", ") || "niespecyficzne"}.`,
      phase1,
      phase2
    };
  }

  function getMetaboliteCascade(c) {
    if (!c) return null;
    let data = METABOLITE_CASCADES[c.id];
    if (!data) {
      data = parseMetabolismText(c);
    }
    if (!data) return null;

    const rootNode = {
      id: "root",
      cid: c.id,
      compound: c,
      name: c.n,
      phase: 0,
      activity: data.rootRole || "active",
      enzyme: "– (Związek macierzysty)",
      reaction: "Podanie pierwotne",
      desc: data.notes || c.d,
      tHalf: c.pk && c.pk.hl ? `${c.pk.hl[0]}${c.pk.hl[1] ? `- ${c.pk.hl[1]}`: ""} ${c.pk.hl[2] || "h"}`: (c.hlh ? `${c.hlh.toFixed(1)} h`: "–")
    };

    const phase1Nodes = (data.phase1 || []).map((p, idx) =>{
      const matchComp = p.id && compById.has(p.id) ? C[compById.get(p.id)] : null;
      return {
        id: `p1_${idx}`,
        cid: p.id,
        compound: matchComp,
        name: p.name,
        phase: 1,
        activity: p.activity || "active",
        enzyme: p.enzyme || "CYP450",
        reaction: p.reaction || "Biotransformacja",
        desc: p.desc || "",
        tHalf: p.tHalf || (matchComp && matchComp.hlh ? `${matchComp.hlh.toFixed(1)} h`: "–")
      };
    });

    const phase2Nodes = (data.phase2 || []).map((p, idx) =>{
      const matchComp = p.id && compById.has(p.id) ? C[compById.get(p.id)] : null;
      return {
        id: `p2_${idx}`,
        cid: p.id,
        parentId: p.parentId,
        compound: matchComp,
        name: p.name,
        phase: 2,
        activity: p.activity || "inactive",
        enzyme: p.enzyme || "UGT / Transferaza",
        reaction: p.reaction || "Koniugacja",
        desc: p.desc || "",
        tHalf: p.tHalf || "–"
      };
    });

    return {
      root: rootNode,
      phase1: phase1Nodes,
      phase2: phase2Nodes,
      notes: data.notes
    };
  }

  function renderMetaboliteTreeDOM(c, cascade) {
    const treeEl = $("metaTreeContainer");
    if (!treeEl) return;

    const getActivityBadge = (act) =>{
      const cls = act === "active" ? "activity-active" : act === "prodrug" ? "activity-prodrug" : act === "toxic" ? "activity-toxic" : "activity-inactive";
      const lbl = act === "active" ? " Aktywny" : act === "prodrug" ? " Prolek" : act === "toxic" ? " Toksyczny" : " Nieaktywny";
      return `<span class="meta-activity-badge ${cls}">${lbl}</span>`;
    };

    const renderCard = (node) =>{
      const isSel = (node.id === activeMetaboliteSelectedNode);
      const isCatalog = !!node.compound;
      return `
        <div class="meta-node-card ${isSel ? 'selected' : ''}" role="button" tabindex="0" data-meta-node="${esc(node.id)}">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px">
            <b style="font-size:13px;color:var(--color-text)">${esc(node.name)}</b>
            ${getActivityBadge(node.activity)}
          </div>
          ${node.enzyme && node.enzyme !== "–" ? `
            <div class="meta-connector">
              <span class="meta-enzyme-pill">${esc(node.enzyme)}</span>
              ${node.reaction ? `<span style="font-size:13px;color:var(--color-text-muted)">${esc(node.reaction)}</span>`: ""}
            </div>`: ""}
          <p style="font-size:13px;color:var(--color-text-muted);margin:0;line-height:1.35">${esc(node.desc || "Brak opisu.")}</p>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px;font-size:13px">
            <span style="color:var(--color-text-muted)">t½: <b>${esc(node.tHalf || "–")}</b></span>
            ${isCatalog ? '<span class="tag ok" style="font-size:13px">W katalogu OK</span>' : '<span class="tag" style="font-size:13px">Metabolit pośredni</span>'}
          </div>
        </div>
      `;
    };

    treeEl.innerHTML = `
      <div class="meta-phase-col">
        <div class="meta-phase-head">
          <span>Związek Macierzysty</span>
          <span class="tag" style="font-size:13px">Faza 0</span>
        </div>
        ${renderCard(cascade.root)}
      </div>

      <div class="meta-phase-col">
        <div class="meta-phase-head">
          <span>Faza I: Modyfikacje Funkcyjne</span>
          <span class="tag" style="font-size:13px">${cascade.phase1.length} szlaki</span>
        </div>
        ${cascade.phase1.length ? cascade.phase1.map(renderCard).join("") : '<div class="empty" style="padding:1rem">Brak szlaków Fazy I.</div>'}
      </div>

      <div class="meta-phase-col">
        <div class="meta-phase-head">
          <span>Faza II: Koniugacja & Eliminacja</span>
          <span class="tag" style="font-size:13px">${cascade.phase2.length} koniugaty</span>
        </div>
        ${cascade.phase2.length ? cascade.phase2.map(renderCard).join("") : '<div class="empty" style="padding:1rem">Brak szlaków Fazy II.</div>'}
      </div>
    `;

    treeEl.querySelectorAll("[data-meta-node]").forEach((card) =>{
      card.onclick = () =>{
        const nid = card.dataset.metaNode;
        activeMetaboliteSelectedNode = nid;
        treeEl.querySelectorAll(".meta-node-card").forEach((c) =>c.classList.toggle("selected", c.dataset.metaNode === nid));
        renderMetaboliteSidePanelDOM(c, cascade);
      };
    });
  }

  function renderMetaboliteSidePanelDOM(c, cascade) {
    const sideEl = $("metaSidePanel");
    if (!sideEl) return;

    let selNode = cascade.root.id === activeMetaboliteSelectedNode ? cascade.root : null;
    if (!selNode) selNode = cascade.phase1.find((n) =>n.id === activeMetaboliteSelectedNode);
    if (!selNode) selNode = cascade.phase2.find((n) =>n.id === activeMetaboliteSelectedNode);
    if (!selNode) selNode = cascade.root;

    const mComp = selNode.compound;
    const isRoot = (selNode === cascade.root);
    const struct = mComp ? getChemStructure(mComp) : (isRoot ? getChemStructure(c) : null);

    const getActivityBadge = (act) =>{
      const cls = act === "active" ? "activity-active" : act === "prodrug" ? "activity-prodrug" : act === "toxic" ? "activity-toxic" : "activity-inactive";
      const lbl = act === "active" ? " Aktywny farmakologicznie" : act === "prodrug" ? " Prekursor / Prolek" : act === "toxic" ? " Toksyczny intermediat" : " Nieaktywny metabolit";
      return `<span class="meta-activity-badge ${cls}">${lbl}</span>`;
    };

    let compTableHtml = "";
    if (mComp && !isRoot) {
      const dMW = (mComp.pr && c.pr) ? (mComp.pr[0] - c.pr[0]).toFixed(1) : "–";
      const dLogP = (mComp.pr && c.pr) ? (mComp.pr[1] - c.pr[1]).toFixed(2) : "–";
      const dPSA = (mComp.pr && c.pr) ? (mComp.pr[2] - c.pr[2]).toFixed(1) : "–";
      compTableHtml = `
        <div style="font-size:13px;font-weight:700;margin-top:6px;text-transform:uppercase;color:var(--color-text-muted)">Porównanie ze związkiem macierzystym:</div>
        <table class="meta-diff-table">
          <tr><th>Cecha</th><td><b>${esc(c.n)}</b></td><td><b>${esc(mComp.n)}</b>(Δ)</td></tr>
          <tr><th>Masa cząst.</th><td>${c.pr ? c.pr[0] : "–"}</td><td>${mComp.pr ? mComp.pr[0] : "–"} (${dMW >0 ? "+" + dMW : dMW})</td></tr>
          <tr><th>ALogP</th><td>${c.pr ? c.pr[1] : "–"}</td><td>${mComp.pr ? mComp.pr[1] : "–"} (${dLogP >0 ? "+" + dLogP : dLogP})</td></tr>
          <tr><th>PSA</th><td>${c.pr ? c.pr[2] + " Å²" : "–"}</td><td>${mComp.pr ? mComp.pr[2] + " Å²" : "–"} (${dPSA >0 ? "+" + dPSA : dPSA})</td></tr>
          <tr><th>t½</th><td>${cascade.root.tHalf}</td><td>${selNode.tHalf}</td></tr>
        </table>
      `;
    }

    let actionBtnsHtml = "";
    if (mComp && !isRoot) {
      const inStack = state.stack.has(mComp.i);
      actionBtnsHtml = `
        <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px">
          <button class="btn btn-gold" id="metaCompareBtn" style="font-size:13px;padding:6px 10px">Porównaj z prolekiem (Comparator)</button>
          <div style="display:flex;gap:6px">
            <button class="btn ${inStack ? 'btn-gold' : ''}" id="metaStackBtn" style="flex:1;font-size:13px;padding:6px">
              ${inStack ? "OK W stacku" : "+ Dodaj do stacka"}
            </button>
            <button class="btn" id="metaGraphBtn" style="flex:1;font-size:13px;padding:6px">Na grafie</button>
          </div>
        </div>
      `;
    }

    sideEl.innerHTML = `
      <div style="border-bottom:1px solid var(--color-border);padding-bottom:8px">
        <div style="font-size:13px;text-transform:uppercase;letter-spacing:0.02em;color:var(--color-text-muted)">Wybrany węzeł biotransformacji</div>
        <b style="font-size:14px;display:block;margin:2px 0 6px 0">${esc(selNode.name)}</b>
        ${getActivityBadge(selNode.activity)}
      </div>

      ${struct ? `
        <div class="chem-card" style="margin:4px 0">
          <div class="chem-card-preview" style="height:120px" data-zoom-chem="${mComp ? mComp.i : c.i}">
            <img src="${struct.url}" alt="${esc(selNode.name)}" loading="lazy">
          </div>
          <div class="chem-meta" style="font-size:13px">
            <span>${esc(mComp ? mComp.mf || "" : c.mf || "")}</span>
            <a href="${struct.extUrl}" target="_blank" rel="noopener noreferrer">${struct.extLabel} ↗</a>
          </div>
        </div>
      `: ""}

      <div style="font-size:13px">
        <div style="color:var(--color-text-muted);font-size:13px;text-transform:uppercase">Enzym & Szlak:</div>
        <b>${esc(selNode.enzyme)}</b>· <span>${esc(selNode.reaction)}</span>
      </div>

      <div style="font-size:13px">
        <div style="color:var(--color-text-muted);font-size:13px;text-transform:uppercase">Znaczenie kliniczne:</div>
        <p style="margin:2px 0;line-height:1.4">${esc(selNode.desc)}</p>
      </div>

      ${compTableHtml}
      ${actionBtnsHtml}
    `;

    const metaCompareBtn = sideEl.querySelector("#metaCompareBtn");
    if (metaCompareBtn && mComp) {
      metaCompareBtn.onclick = () =>{
        closeMetaboliteModal();
        openComparator([c.i, mComp.i]);
      };
    }
    const metaStackBtn = sideEl.querySelector("#metaStackBtn");
    if (metaStackBtn && mComp) {
      metaStackBtn.onclick = () =>{
        toggleInStack(mComp.i);
        const inStack = state.stack.has(mComp.i);
        metaStackBtn.textContent = inStack ? "OK W stacku" : "+ Dodaj do stacka";
        metaStackBtn.classList.toggle("btn-gold", inStack);
      };
    }
    const metaGraphBtn = sideEl.querySelector("#metaGraphBtn");
    if (metaGraphBtn && mComp) {
      metaGraphBtn.onclick = () =>{
        closeMetaboliteModal();
        select({ type: "compound", i: mComp.i }, true);
      };
    }
  }

  function openMetaboliteModal(cIdx, selectedNodeId = null) {
    const c = typeof cIdx === "number" ? C[cIdx] : cIdx;
    if (!c) return;

    const cascade = getMetaboliteCascade(c);
    if (!cascade) return;

    activeMetaboliteQuery = c.i;
    if (!selectedNodeId) {
      const firstActive = cascade.phase1.find((n) =>n.activity === "active") || cascade.phase1[0] || cascade.root;
      activeMetaboliteSelectedNode = firstActive ? firstActive.id : "root";
    } else {
      activeMetaboliteSelectedNode = selectedNodeId;
    }

    const modal = $("metaboliteModal");
    if (!modal) return;

    const subtitle = $("metaQuerySubtitle");
    if (subtitle) {
      const totalMet = cascade.phase1.length + cascade.phase2.length;
      subtitle.textContent = `${c.n} · ${totalMet} metabolitów`;
    }

    renderMetaboliteTreeDOM(c, cascade);
    renderMetaboliteSidePanelDOM(c, cascade);

    wireMetaboliteModal();
    openDialog(modal);
  }

  function closeMetaboliteModal() {
    const modal = $("metaboliteModal");
    if (modal) closeDialog(modal);
    activeMetaboliteQuery = null;
    activeMetaboliteSelectedNode = null;
    if (typeof syncWorkspaceModeToOpenModals === "function") syncWorkspaceModeToOpenModals();
  }

  function wireMetaboliteModal() {
    const modal = $("metaboliteModal");
    if (!modal) return;
    const closeBtn = $("metaboliteModalClose");
    if (closeBtn) closeBtn.onclick = closeMetaboliteModal;
    modal.onclick = (e) =>{
      if (e.target === modal) closeMetaboliteModal();
    };
  }

  // =========================================================================
  // ---------- Clinical Trials & Evidence Explorer (v3.18.0)
  // =========================================================================

  let activeEvidenceModalOpen = false;
  let evidenceFilterState = {
    phase: null,           // null | 4 | 3 | 2 | 1 | 0
    fda: null,             // null | 'consistent' | 'discrepant' | 'any'
    ema: null,             // null | 'consistent' | 'discrepant' | 'any'
    discrepantOnly: false, // boolean
    blackBox: false,       // boolean
    withdrawn: false,      // boolean
    ebmOnly: false,        // boolean
    decade: null,          // null | '<1960' | '1960s' | '1970s' | '1980s' | '1990s' | '2000s' | '2010s' | '2020+'
    query: ""              // string
  };
  let evidenceRenderLimit = 60;

  const EVIDENCE_DECADES = [
    { id: "<1960", label: "Do 1959" },
    { id: "1960s", label: "Lata 60." },
    { id: "1970s", label: "Lata 70." },
    { id: "1980s", label: "Lata 80." },
    { id: "1990s", label: "Lata 90." },
    { id: "2000s", label: "2000–2009" },
    { id: "2010s", label: "2010–2019" },
    { id: "2020+", label: "Od 2020" }
  ];

  function getCompoundApprovalDecade(year) {
    if (!year || typeof year !== "number") return null;
    if (year < 1960) return "<1960";
    if (year < 1970) return "1960s";
    if (year < 1980) return "1970s";
    if (year < 1990) return "1980s";
    if (year < 2000) return "1990s";
    if (year < 2010) return "2000s";
    if (year < 2020) return "2010s";
    return "2020+";
  }

  function computeEvidenceStats() {
    let p4 = 0, p3 = 0, p2 = 0, p1 = 0, p0 = 0;
    let fdaTotal = 0, fdaCons = 0, fdaDisc = 0;
    let emaTotal = 0, emaCons = 0, emaDisc = 0;
    let bbCount = 0, wdCount = 0;
    const decadeCounts = {};
    EVIDENCE_DECADES.forEach((d) =>{ decadeCounts[d.id] = 0; });

    for (let i = 0; i < C.length; i++) {
      const c = C[i];
      if (c.ph === 4) p4++;
      else if (c.ph === 3) p3++;
      else if (c.ph === 2) p2++;
      else if (c.ph === 1) p1++;
      else p0++;

      if (c.v) {
        fdaTotal++;
        if (c.v.s === "consistent") fdaCons++;
        else if (c.v.s === "discrepant") fdaDisc++;
      }
      if (c.ve) {
        emaTotal++;
        if (c.ve.s === "consistent") emaCons++;
        else if (c.ve.s === "discrepant") emaDisc++;
      }
      if (c.bb) bbCount++;
      if (c.wd) wdCount++;

      const dec = getCompoundApprovalDecade(c.fa);
      if (dec && decadeCounts[dec] !== undefined) {
        decadeCounts[dec]++;
      }
    }

    return {
      total: C.length,
      funnel: { p4, p3, p2, p1, p0 },
      regulatory: { fdaTotal, fdaCons, fdaDisc, emaTotal, emaCons, emaDisc, bbCount, wdCount },
      decades: decadeCounts
    };
  }

  function filterEvidenceCohort() {
    const q = evidenceFilterState.query.trim().toLowerCase();
    const res = [];

    for (let i = 0; i < C.length; i++) {
      const c = C[i];

      // Phase filter
      if (evidenceFilterState.phase !== null) {
        if (evidenceFilterState.phase === 0) {
          if (c.ph && c.ph >= 1) continue;
        } else {
          if (c.ph !== evidenceFilterState.phase) continue;
        }
      }

      // FDA filter
      if (evidenceFilterState.fda) {
        if (!c.v) continue;
        if (evidenceFilterState.fda !== "any" && c.v.s !== evidenceFilterState.fda) continue;
      }

      // EMA filter
      if (evidenceFilterState.ema) {
        if (!c.ve) continue;
        if (evidenceFilterState.ema !== "any" && c.ve.s !== evidenceFilterState.ema) continue;
      }

      // Discrepant only
      if (evidenceFilterState.discrepantOnly) {
        const isDisc = (c.v && c.v.s === "discrepant") || (c.ve && c.ve.s === "discrepant");
        if (!isDisc) continue;
      }

      // Black box
      if (evidenceFilterState.blackBox && !c.bb) continue;

      // Withdrawn
      if (evidenceFilterState.withdrawn && !c.wd) continue;

      // EBM only
      if (evidenceFilterState.ebmOnly && (!c.ebm || !c.ebm.length)) continue;

      // Decade
      if (evidenceFilterState.decade !== null) {
        const dec = getCompoundApprovalDecade(c.fa);
        if (dec !== evidenceFilterState.decade) continue;
      }

      // Search query
      if (q) {
        const matchName = c.n && c.n.toLowerCase().includes(q);
        const matchId = c.id && c.id.toLowerCase().includes(q);
        const matchHay = c.hay && c.hay.includes(q);
        const matchDesc = c.d && c.d.toLowerCase().includes(q);
        if (!matchName && !matchId && !matchHay && !matchDesc) continue;
      }

      res.push(c);
    }

    return res;
  }

  function updateEvidenceCohortIndicator() {
    const btn = $("evidenceCohortResetBtn");
    const lbl = $("evidenceCohortCountLabel");
    if (!btn || !lbl) return;
    if (state.evidenceCohort) {
      btn.style.display = "inline-flex";
      lbl.textContent = state.evidenceCohort.size.toLocaleString("pl");
    } else {
      btn.style.display = "none";
    }
  }

  function renderEvidenceKPIs(stats) {
    const kpiBar = $("evidenceKpiBar");
    if (!kpiBar) return;
    const fdaPct = Math.round((stats.regulatory.fdaCons / (stats.regulatory.fdaTotal || 1)) * 100);
    const emaPct = Math.round((stats.regulatory.emaCons / (stats.regulatory.emaTotal || 1)) * 100);
    const p4Pct = Math.round((stats.funnel.p4 / stats.total) * 100);

    kpiBar.innerHTML = `
      <div class="evidence-kpi-item">
        <small>Zatwierdzone (Faza 4)</small>
        <b>${stats.funnel.p4.toLocaleString("pl")} <span style="font-size:13px;color:var(--color-text-muted);font-weight:normal">(${p4Pct}%)</span></b>
      </div>
      <div class="evidence-kpi-item">
        <small>Etykiety DailyMed FDA</small>
        <b>${stats.regulatory.fdaTotal.toLocaleString("pl")} <span style="font-size:13px;color:var(--color-success);font-weight:normal">(${fdaPct}% OK)</span></b>
      </div>
      <div class="evidence-kpi-item">
        <small>Dokumentacja SmPC EMA</small>
        <b>${stats.regulatory.emaTotal.toLocaleString("pl")} <span style="font-size:13px;color:var(--color-success);font-weight:normal">(${emaPct}% OK)</span></b>
      </div>
      <div class="evidence-kpi-item">
        <small>Black Box Warning</small>
        <b style="color:var(--color-warning)">${stats.regulatory.bbCount.toLocaleString("pl")}</b>
      </div>
      <div class="evidence-kpi-item">
        <small>Leki wycofane</small>
        <b style="color:var(--color-error)">${stats.regulatory.wdCount.toLocaleString("pl")}</b>
      </div>
    `;
  }

  function renderEvidenceFunnel(stats) {
    const funnelEl = $("evidenceFunnel");
    if (!funnelEl) return;
    const stages = [
      { phase: 4, badge: "Faza 4", cls: "phase-4", name: "Zatwierdzone (Approved)", count: stats.funnel.p4, desc: "Leki w obrocie z pełną dokumentacją" },
      { phase: 3, badge: "Faza 3", cls: "phase-3", name: "Zaawansowane Badania", count: stats.funnel.p3, desc: "Duże próby kliniczne, faza rejestracyjna" },
      { phase: 2, badge: "Faza 2", cls: "phase-2", name: "Skuteczność (POC)", count: stats.funnel.p2, desc: "Dowód koncepcji & dawkowanie w chorych" },
      { phase: 1, badge: "Faza 1", cls: "phase-1", name: "Bezpieczeństwo & PK", count: stats.funnel.p1, desc: "Pierwsze podanie u ludzi, farmakokinetyka" },
      { phase: 0, badge: "Faza 0", cls: "phase-0", name: "Prekliniczne / Odkrycie", count: stats.funnel.p0, desc: "Ligandy eksperymentalne i badawcze" }
    ];

    funnelEl.innerHTML = stages.map((s) =>{
      const active = evidenceFilterState.phase === s.phase;
      const pct = ((s.count / stats.total) * 100).toFixed(1);
      return `
        <div class="evidence-funnel-card ${active ? 'active' : ''}" role="button" tabindex="0" data-ev-phase="${s.phase}">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span class="badge ${s.cls}">${s.badge}</span>
            <small style="font-size:13px;color:var(--color-text-muted)">${pct}%</small>
          </div>
          <div style="font-weight:700;font-size:13px;margin-top:2px">${s.name}</div>
          <div style="font-size:18px;font-weight:800;font-variant-numeric:tabular-nums;color:var(--color-primary)">${s.count.toLocaleString("pl")}</div>
          <div style="font-size:13px;color:var(--color-text-muted);line-height:1.3">${s.desc}</div>
        </div>
      `;
    }).join("");

    funnelEl.querySelectorAll("[data-ev-phase]").forEach((el) =>{
      el.onclick = () =>{
        const ph = +el.dataset.evPhase;
        evidenceFilterState.phase = (evidenceFilterState.phase === ph) ? null : ph;
        evidenceRenderLimit = 60;
        updateEvidenceModalUI();
      };
    });
  }

  function renderEvidenceTimelineBar(stats) {
    const bar = $("evidenceTimelineBar");
    if (!bar) return;

    bar.innerHTML = EVIDENCE_DECADES.map((d) =>{
      const cnt = stats.decades[d.id] || 0;
      const active = evidenceFilterState.decade === d.id;
      return `
        <button class="evidence-timeline-pill ${active ? 'active' : ''}" data-ev-decade="${d.id}">
          ${d.label} <small style="opacity:.8;font-weight:normal">(${cnt})</small>
        </button>
      `;
    }).join("");

    bar.querySelectorAll("[data-ev-decade]").forEach((el) =>{
      el.onclick = () =>{
        const dec = el.dataset.evDecade;
        evidenceFilterState.decade = (evidenceFilterState.decade === dec) ? null : dec;
        evidenceRenderLimit = 60;
        updateEvidenceModalUI();
      };
    });
  }

  function updateEvidenceAuditFilterButtons() {
    const fdaBtn = $("evFilterFdaBtn");
    if (fdaBtn) fdaBtn.classList.toggle("active", evidenceFilterState.fda !== null);
    const emaBtn = $("evFilterEmaBtn");
    if (emaBtn) emaBtn.classList.toggle("active", evidenceFilterState.ema !== null);
    const discBtn = $("evFilterDiscBtn");
    if (discBtn) discBtn.classList.toggle("active", evidenceFilterState.discrepantOnly);
    const bbBtn = $("evFilterBlackBoxBtn");
    if (bbBtn) bbBtn.classList.toggle("active", evidenceFilterState.blackBox);
    const wdBtn = $("evFilterWithdrawnBtn");
    if (wdBtn) wdBtn.classList.toggle("active", evidenceFilterState.withdrawn);
    const ebmBtn = $("evFilterEbmBtn");
    if (ebmBtn) ebmBtn.classList.toggle("active", evidenceFilterState.ebmOnly);
  }

  function renderEvidenceDrugCards(cohort) {
    const grid = $("evidenceGrid");
    const countEl = $("evidenceCohortCount");
    const summaryEl = $("evidenceCohortSummary");
    if (!grid) return;

    if (countEl) countEl.textContent = `Substancje w wybranej kohorcie (${cohort.length.toLocaleString("pl")})`;
    if (summaryEl) {
      const parts = [];
      if (evidenceFilterState.phase !== null) parts.push(evidenceFilterState.phase === 0 ? "Faza 0 (Prekliniczne)" : `Faza ${evidenceFilterState.phase}`);
      if (evidenceFilterState.fda) parts.push(`FDA: ${evidenceFilterState.fda}`);
      if (evidenceFilterState.ema) parts.push(`EMA: ${evidenceFilterState.ema}`);
      if (evidenceFilterState.discrepantOnly) parts.push("Rozbieżności etykiet");
      if (evidenceFilterState.blackBox) parts.push("Black Box");
      if (evidenceFilterState.withdrawn) parts.push("Wycofane");
      if (evidenceFilterState.ebmOnly) parts.push("Kluczowe Badania EBM");
      if (evidenceFilterState.decade) parts.push(`Dekada: ${evidenceFilterState.decade}`);
      if (evidenceFilterState.query) parts.push(`"${evidenceFilterState.query}"`);
      summaryEl.textContent = parts.length ? `Aktywne filtry: ${parts.join("· ")}`: "Wszystkie substancje";
    }

    if (!cohort.length) {
      grid.innerHTML = '<p class="empty" style="grid-column:1/-1;padding:2rem;text-align:center">Brak substancji spełniających wybrane kryteria dowodowe.</p>';
      return;
    }

    const visibleItems = cohort.slice(0, evidenceRenderLimit);
    grid.innerHTML = visibleItems.map((c) =>{
      const struct = getChemStructure(c);
      let phaseBadge = '<span class="evidence-badge-phase phase-0">Faza 0 / Badawcza</span>';
      if (c.ph === 4) phaseBadge = '<span class="evidence-badge-phase phase-4">Faza 4 · Approved</span>';
      else if (c.ph === 3) phaseBadge = '<span class="evidence-badge-phase phase-3">Faza 3 · Trial</span>';
      else if (c.ph === 2) phaseBadge = '<span class="evidence-badge-phase phase-2">Faza 2 · POC</span>';
      else if (c.ph === 1) phaseBadge = '<span class="evidence-badge-phase phase-1">Faza 1 · PK/Tox</span>';

      const regBadges = [];
      if (c.v) {
        if (c.v.s === "consistent") regBadges.push('<span class="tag ok" style="font-size:13px">OK FDA</span>');
        else if (c.v.s === "discrepant") regBadges.push('<span class="tag warn" style="font-size:13px">≠ FDA</span>');
        else regBadges.push('<span class="tag" style="font-size:13px">FDA</span>');
      }
      if (c.ve) {
        if (c.ve.s === "consistent") regBadges.push('<span class="tag ok" style="font-size:13px">OK EMA</span>');
        else if (c.ve.s === "discrepant") regBadges.push('<span class="tag warn" style="font-size:13px">≠ EMA</span>');
        else regBadges.push('<span class="tag" style="font-size:13px">EMA</span>');
      }
      if (c.bb) regBadges.push('<span class="tag warn" style="font-size:13px;font-weight:700">⬛ Black Box</span>');
      if (c.wd) regBadges.push('<span class="tag warn" style="font-size:13px;font-weight:700">Wycofany</span>');
      if (c.ebm && c.ebm.length) regBadges.push(`<span class="tag ok" style="font-size:13px;font-weight:600">EBM (${c.ebm.length})</span>`);

      const inStack = state.stack.has(c.i);
      const g = GR[c.g] || { label: "" };

      return `
        <div class="evidence-drug-card">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
            <div style="flex:1;min-width:0">
              <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:2px">
                ${phaseBadge}
                ${c.fa ? `<span class="muted" style="font-size:13px;font-weight:600">Rej. ${c.fa}</span>`: ""}
              </div>
              <b style="font-size:var(--text-sm);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${esc(c.n)}">${esc(c.n)}</b>
              <small class="muted" style="font-size:13px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(g.label || "")}</small>
            </div>
            ${struct ? `<button class="btn" data-zoom-chem="${c.i}" style="font-size:13px;padding:3px 6px;flex-shrink:0" title="Powiększ strukturę 2D">2D</button>`: ""}
          </div>
          ${regBadges.length ? `<div style="display:flex;flex-wrap:wrap;gap:4px">${regBadges.join("")}</div>`: ""}
          <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:auto;padding-top:6px;border-top:1px solid var(--color-border)">
            <button class="btn" data-ev-goto="${c.i}" style="font-size:13px;padding:3px 6px" title="Zaznacz substancję na grafie">Graf</button>
            <button class="btn ${inStack ? 'btn-gold' : ''}" data-ev-stack="${c.i}" style="font-size:13px;padding:3px 6px">${inStack ? 'OK Stack' : '+ Stack'}</button>
            <button class="btn" data-ev-compare="${c.i}" style="font-size:13px;padding:3px 6px" title="Porównaj">Porównaj</button>
            <button class="btn" data-ev-meta="${c.i}" style="font-size:13px;padding:3px 6px" title="Kaskada metabolitów">CYP</button>
            <button class="btn" data-ev-dossier="${c.i}" style="font-size:13px;padding:3px 6px" title="Kliniczna monografia (Dossier)">Dossier</button>
          </div>
        </div>
      `;
    }).join("");

    if (cohort.length >evidenceRenderLimit) {
      const moreBtn = document.createElement("button");
      moreBtn.className = "btn";
      moreBtn.style.gridColumn = "1/-1";
      moreBtn.style.margin = "12px auto";
      moreBtn.style.padding = "8px 24px";
      moreBtn.style.fontWeight = "600";
      moreBtn.textContent = `Pokaż kolejne 60 z ${cohort.length.toLocaleString("pl")} substancji...`;
      moreBtn.onclick = () =>{
        evidenceRenderLimit += 60;
        renderEvidenceDrugCards(cohort);
      };
      grid.appendChild(moreBtn);
    }

    grid.querySelectorAll("[data-ev-goto]").forEach((btn) =>{
      btn.onclick = () =>{
        const idx = +btn.dataset.evGoto;
        closeEvidenceModal();
        select({ type: "compound", i: idx }, true);
      };
    });
    grid.querySelectorAll("[data-ev-stack]").forEach((btn) =>{
      btn.onclick = () =>{
        const idx = +btn.dataset.evStack;
        toggleInStack(idx);
        renderEvidenceDrugCards(cohort);
      };
    });
    grid.querySelectorAll("[data-ev-compare]").forEach((btn) =>{
      btn.onclick = () =>{
        const idx = +btn.dataset.evCompare;
        const stackList = [...state.stack];
        if (stackList.length && !stackList.includes(idx)) {
          openComparator([idx, ...stackList]);
        } else {
          openComparator([idx]);
        }
      };
    });
    grid.querySelectorAll("[data-ev-meta]").forEach((btn) =>{
      btn.onclick = () =>{
        const idx = +btn.dataset.evMeta;
        openMetaboliteModal(idx);
      };
    });
    grid.querySelectorAll("[data-ev-dossier]").forEach((btn) =>{
      btn.onclick = () =>{
        const idx = +btn.dataset.evDossier;
        openDossierModal("single", idx);
      };
    });
    grid.querySelectorAll("[data-zoom-chem]").forEach((el) =>{
      el.onclick = () =>openChemLightBox(+el.dataset.zoomChem);
    });
  }

  function updateEvidenceModalUI() {
    const stats = computeEvidenceStats();
    renderEvidenceKPIs(stats);
    renderEvidenceFunnel(stats);
    renderEvidenceTimelineBar(stats);
    updateEvidenceAuditFilterButtons();
    const cohort = filterEvidenceCohort();
    renderEvidenceDrugCards(cohort);
  }

  function openEvidenceModal(initialFilter = null) {
    const modal = $("evidenceModal");
    if (!modal) return;

    if (initialFilter) {
      if (initialFilter.startsWith("phase:")) {
        const p = +initialFilter.slice(6);
        evidenceFilterState.phase = p;
      } else if (initialFilter === "fda:consistent") {
        evidenceFilterState.fda = "consistent";
      } else if (initialFilter === "fda:discrepant") {
        evidenceFilterState.fda = "discrepant";
      } else if (initialFilter === "ema:consistent") {
        evidenceFilterState.ema = "consistent";
      } else if (initialFilter === "ema:discrepant") {
        evidenceFilterState.ema = "discrepant";
      } else if (initialFilter === "blackbox") {
        evidenceFilterState.blackBox = true;
      } else if (initialFilter === "withdrawn") {
        evidenceFilterState.withdrawn = true;
      } else if (initialFilter === "ebm") {
        evidenceFilterState.ebmOnly = true;
      }
    }

    activeEvidenceModalOpen = true;
    evidenceRenderLimit = 60;
    updateEvidenceModalUI();
    wireEvidenceModal();
    openDialog(modal);
  }

  function closeEvidenceModal() {
    const modal = $("evidenceModal");
    if (modal) closeDialog(modal);
    activeEvidenceModalOpen = false;
    if (typeof syncWorkspaceModeToOpenModals === "function") syncWorkspaceModeToOpenModals();
  }

  function resetEvidenceFilters() {
    evidenceFilterState = {
      phase: null,
      fda: null,
      ema: null,
      discrepantOnly: false,
      blackBox: false,
      withdrawn: false,
      ebmOnly: false,
      decade: null,
      query: ""
    };
    const sInput = $("evidenceSearchInput");
    if (sInput) sInput.value = "";
    evidenceRenderLimit = 60;
    updateEvidenceModalUI();
  }

  function wireEvidenceModal() {
    const modal = $("evidenceModal");
    if (!modal) return;

    const closeBtn = $("evidenceModalClose");
    if (closeBtn) closeBtn.onclick = closeEvidenceModal;

    modal.onclick = (e) =>{
      if (e.target === modal) closeEvidenceModal();
    };

    const applyGraphBtn = $("evidenceApplyGraphBtn");
    if (applyGraphBtn) {
      applyGraphBtn.onclick = () =>{
        const cohort = filterEvidenceCohort();
        if (cohort.length) {
          state.evidenceCohort = new Set(cohort.map((c) =>c.i));
          closeEvidenceModal();
          stats();
          search();
          draw();
        }
      };
    }

    const resetBtn = $("evidenceResetFiltersBtn");
    if (resetBtn) resetBtn.onclick = resetEvidenceFilters;

    const sInput = $("evidenceSearchInput");
    if (sInput && !sInput._wired) {
      sInput._wired = true;
      sInput.oninput = () =>{
        evidenceFilterState.query = sInput.value;
        evidenceRenderLimit = 60;
        const cohort = filterEvidenceCohort();
        renderEvidenceDrugCards(cohort);
      };
    }

    const fdaBtn = $("evFilterFdaBtn");
    if (fdaBtn && !fdaBtn._wired) {
      fdaBtn._wired = true;
      fdaBtn.onclick = () =>{
        evidenceFilterState.fda = evidenceFilterState.fda ? null : "any";
        evidenceRenderLimit = 60;
        updateEvidenceModalUI();
      };
    }

    const emaBtn = $("evFilterEmaBtn");
    if (emaBtn && !emaBtn._wired) {
      emaBtn._wired = true;
      emaBtn.onclick = () =>{
        evidenceFilterState.ema = evidenceFilterState.ema ? null : "any";
        evidenceRenderLimit = 60;
        updateEvidenceModalUI();
      };
    }

    const discBtn = $("evFilterDiscBtn");
    if (discBtn && !discBtn._wired) {
      discBtn._wired = true;
      discBtn.onclick = () =>{
        evidenceFilterState.discrepantOnly = !evidenceFilterState.discrepantOnly;
        evidenceRenderLimit = 60;
        updateEvidenceModalUI();
      };
    }

    const bbBtn = $("evFilterBlackBoxBtn");
    if (bbBtn && !bbBtn._wired) {
      bbBtn._wired = true;
      bbBtn.onclick = () =>{
        evidenceFilterState.blackBox = !evidenceFilterState.blackBox;
        evidenceRenderLimit = 60;
        updateEvidenceModalUI();
      };
    }

    const wdBtn = $("evFilterWithdrawnBtn");
    if (wdBtn && !wdBtn._wired) {
      wdBtn._wired = true;
      wdBtn.onclick = () =>{
        evidenceFilterState.withdrawn = !evidenceFilterState.withdrawn;
        evidenceRenderLimit = 60;
        updateEvidenceModalUI();
      };
    }

    const ebmBtn = $("evFilterEbmBtn");
    if (ebmBtn && !ebmBtn._wired) {
      ebmBtn._wired = true;
      ebmBtn.onclick = () =>{
        evidenceFilterState.ebmOnly = !evidenceFilterState.ebmOnly;
        evidenceRenderLimit = 60;
        updateEvidenceModalUI();
      };
    }
  }

  // =========================================================================
  // ---------- Wskazania Kliniczne & Hierarchia ICD-10 / ICD-11
  // =========================================================================

  let activeIndicationsModalOpen = false;
  let activeIndicationsCode = null;

  function openIndicationsModal(initialCode = null) {
    const modal = $("indicationsModal");
    if (!modal) return;
    activeIndicationsModalOpen = true;
    activeIndicationsCode = initialCode || null;
    const sInput = $("indicationsSearchInput");
    if (sInput) {
      sInput.value = initialCode || "";
    }
    renderIndicationsTree(sInput ? sInput.value : "", activeIndicationsCode);
    wireIndicationsModal();
    openDialog(modal);
    if (initialCode) {
      setTimeout(() =>{
        const el = $("ind-card-" + initialCode);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }

  function closeIndicationsModal() {
    const modal = $("indicationsModal");
    if (modal) closeDialog(modal);
    activeIndicationsModalOpen = false;
    activeIndicationsCode = null;
    if (location.hash.startsWith("#/indications")) {
      location.hash = "#/graph";
    }
    if (typeof syncWorkspaceModeToOpenModals === "function") syncWorkspaceModeToOpenModals();
  }

  function renderIndicationsTree(query = "", highlightCode = null) {
    const container = $("indicationsTreeContainer");
    if (!container) return;

    const catalog = G.indicationsCatalog || {};
    const q = (query || "").trim().toLowerCase();

    // Group disease entries by chapter
    const chapters = new Map();
    let totalDiseases = 0;
    let totalRefs = 0;

    Object.values(catalog).forEach((disease) =>{
      const dCode = (disease.icd10_code || "").toLowerCase();
      const dName = (disease.icd10_name_pl || "").toLowerCase();
      const d11 = (disease.icd11_code || "").toLowerCase();
      const cList = disease.compounds || [];

      let matches = false;
      if (!q) {
        matches = true;
      } else if (dCode.includes(q) || dName.includes(q) || d11.includes(q)) {
        matches = true;
      } else {
        matches = cList.some((c) =>{
          const comp = compById.has(c.compound_id) ? C[compById.get(c.compound_id)] : null;
          return comp && (comp.n.toLowerCase().includes(q) || comp.id.toLowerCase().includes(q));
        });
      }

      if (matches) {
        const ch = disease.icd_chapter || "Inne wskazania";
        if (!chapters.has(ch)) chapters.set(ch, []);
        chapters.get(ch).push(disease);
        totalDiseases++;
        totalRefs += cList.length;
      }
    });

    if (totalDiseases === 0) {
      container.innerHTML = `
        <div style="text-align:center;padding:2rem;color:var(--color-text-muted)">
          <div style="font-size:24px;margin-bottom:8px"></div>
          <b>Nie znaleziono wskazań dla zapytania "${esc(query)}"</b>
          <p style="font-size:13px;margin-top:4px">Wpisz inną nazwę jednostki chorobowej, kod ICD-10 (np. F00, F90, G47) lub nazwę leku.</p>
        </div>`;
      return;
    }

    let html = `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;background:var(--color-surface-2);border-radius:6px;font-size:13px;color:var(--color-text-muted)">
        <span>Hierarchia jednostek: <b>${totalDiseases}</b>wskazań w <b>${chapters.size}</b>rozdziałach (powiązanych substancji: <b>${totalRefs}</b>)</span>
        <span>Standard: ICD-10 (CeZ PL) & ICD-11 (WHO)</span>
      </div>`;

    chapters.forEach((diseases, chapterName) =>{
      html += `
        <div class="indications-chapter" style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-md);overflow:hidden">
          <div style="padding:8px 12px;background:var(--color-surface-2);border-bottom:1px solid var(--color-border);display:flex;justify-content:space-between;align-items:center">
            <b style="font-size:13px;color:var(--color-text);text-transform:uppercase;letter-spacing:.02em">${esc(chapterName)}</b>
            <span class="tag" style="font-size:13px">${diseases.length} wskazań</span>
          </div>
          <div style="padding:10px;display:grid;gap:8px">
            ${diseases.map((d) =>{
              const isHighlight = highlightCode && d.icd10_code === highlightCode;
              return `
                <div class="disease-entry" id="ind-card-${esc(d.icd10_code)}" style="border:1px solid ${isHighlight ? 'var(--color-primary)' : 'var(--color-border)'};border-radius:6px;padding:8px 10px;background:${isHighlight ? 'color-mix(in oklab, var(--color-primary) 8%, var(--color-surface))' : 'var(--color-surface)'}">
                  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px">
                    <div>
                      <code style="font-weight:700;font-size:13px;color:var(--color-primary)">[ICD-10: ${esc(d.icd10_code)}]</code>
                      <b style="font-size:13px;color:var(--color-text);margin-left:6px">${esc(d.icd10_name_pl)}</b>
                      <span style="font-size:13px;color:var(--color-text-muted);margin-left:6px">· WHO ICD-11: <code>${esc(d.icd11_code || "–")}</code></span>
                    </div>
                    <button class="btn" data-ind-filter="${esc(d.icd10_code)}" style="font-size:13px;padding:2px 8px;background:var(--color-surface-2);color:var(--color-primary);border:1px solid var(--color-border)" title="Wyróżnij substancje dla tego wskazania na grafie 2D">Filtruj graf (${d.compounds.length})</button>
                  </div>
                  <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:6px">
                    ${(d.compounds || []).map((c) =>{
                      const comp = compById.has(c.compound_id) ? C[compById.get(c.compound_id)] : null;
                      const cName = comp ? comp.n : c.compound_id;
                      const statusTag = c.status === "registered"
                        ? '<span class="tag ok" style="font-size:13px;padding:1px 5px">OK ChPL</span>'
                        : c.status === "off-label"
                          ? '<span class="tag" style="font-size:13px;padding:1px 5px;color:var(--color-warning)">Off-label</span>'
                          : '<span class="tag" style="font-size:13px;padding:1px 5px">Badania</span>';
                      return `
                        <div style="display:flex;align-items:center;gap:4px;background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:4px;padding:3px 6px">
                          ${comp ? `<span class="dot" style="background:var(--color-cluster-${comp.c});width:8px;height:8px;border-radius:50%;display:inline-block"></span>`: ""}
                          <a href="javascript:void(0)" data-ind-compound="${comp ? comp.i : ''}" style="font-size:13px;font-weight:600;color:var(--color-text);text-decoration:none">${esc(cName)}</a>
                          ${statusTag}
                          ${comp ? `<button class="btn-copy" data-ind-stack="${comp.i}" title="Dodaj do stacku" style="font-size:13px;padding:0 4px">+</button>`: ""}
                        </div>
                      `;
                    }).join("")}
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;

    // Wire actions inside container
    container.querySelectorAll("[data-ind-compound]").forEach((btn) =>{
      btn.onclick = () =>{
        const idx = +btn.dataset.indCompound;
        if (!isNaN(idx)) {
          closeIndicationsModal();
          select({ type: "compound", i: idx }, true);
        }
      };
    });

    container.querySelectorAll("[data-ind-stack]").forEach((btn) =>{
      btn.onclick = (e) =>{
        e.stopPropagation();
        const idx = +btn.dataset.indStack;
        if (!isNaN(idx)) {
          toggleInStack(idx);
          btn.textContent = "OK";
          setTimeout(() =>{ btn.textContent = "+"; }, 1500);
        }
      };
    });

    container.querySelectorAll("[data-ind-filter]").forEach((btn) =>{
      btn.onclick = () =>{
        const code = btn.dataset.indFilter;
        const entry = catalog[code];
        if (entry && entry.compounds) {
          const indices = entry.compounds.map((c) =>compById.get(c.compound_id)).filter((i) =>i != null);
          if (indices.length) {
            state.evidenceCohort = new Set(indices);
            closeIndicationsModal();
            updateEvidenceCohortIndicator();
            stats();
            search();
            draw();
          }
        }
      };
    });
  }

  function wireIndicationsModal() {
    const modal = $("indicationsModal");
    if (!modal || modal._wired) return;
    modal._wired = true;

    const closeBtn = $("indicationsModalClose");
    if (closeBtn) closeBtn.onclick = closeIndicationsModal;

    modal.onclick = (e) =>{
      if (e.target === modal) closeIndicationsModal();
    };

    const sInput = $("indicationsSearchInput");
    if (sInput) {
      sInput.oninput = (e) =>{
        renderIndicationsTree(e.target.value);
      };
    }
  }

  // =========================================================================
  // ---------- 3D Molecular Pocket & Ligand-Receptor Complex Viewer (v3.19.0)
  // =========================================================================

  let activeStruct3DModalOpen = false;
  let activeStruct3DTarget = null;
  let struct3DRaf = null;

  const struct3DState = {
    targetId: "CHEMBL224",
    style: "cartoon",      // "cartoon" | "surface" | "sticks"
    showPocket: true,
    showLigand: true,
    rotX: 0.3,
    rotY: -0.45,
    rotZ: 0,
    zoom: 1.0,
    panX: 0,
    panY: 0,
    isDragging: false,
    dragButton: 0,
    lastMouseX: 0,
    lastMouseY: 0,
    autoRotate: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    selectedResidue: null
  };

  const TARGET_3D_CATALOG = (G.target3DCatalog && Object.keys(G.target3DCatalog).length) ? G.target3DCatalog : {
    "CHEMBL224": {
      id: "CHEMBL224",
      name: "5-hydroxytryptamine receptor 2A",
      gene: "HTR2A",
      pdb: "6WGT",
      res: "Cryo-EM 2.7 Å",
      uniprot: "P28223",
      ligand: "LSD",
      affinity: "Ki = 1.1 nM (Silny agonista)",
      class: "GPCR (Rodzina 5-HT2)",
      arch: "gpcr",
      pocket: [
        { r: "Asp155", pos: 155, role: "Mostek solny z naładowanym azotem dietyloamidu / piperydyny" }
      ]
    }
  };

  function resolveTarget3D(targetRef) {
    if (targetRef == null) return TARGET_3D_CATALOG["CHEMBL224"];
    if (typeof targetRef === "number") {
      const t = T[targetRef];
      if (!t) return TARGET_3D_CATALOG["CHEMBL224"];
      if (TARGET_3D_CATALOG[t.id]) return TARGET_3D_CATALOG[t.id];
      const byName = Object.values(TARGET_3D_CATALOG).find((x) =>x.name.toLowerCase() === (t.n || "").toLowerCase());
      if (byName) return byName;
      // Synthesize fallback entry for AlphaFold DB
      return {
        id: t.id,
        name: t.n || "Cel molekularny",
        gene: (t.n || "Target").split("")[0].toUpperCase(),
        pdb: "ALPHAFOLD",
        res: "Model predykcyjny AlphaFold v4",
        uniprot: t.id,
        ligand: "Kieszeń katalityczna / wiążąca",
        affinity: "Wiązanie ortosteryczne",
        class: t.ty || "Białko",
        arch: "gpcr",
        pocket: [
          { r: "Asp/Glu", pos: 120, role: "Kluczowa reszta kwasowa kieszeni wiążącej" },
          { r: "Trp/Phe", pos: 280, role: "Aromatyczne oddziaływanie pi-pi z ligandem" },
          { r: "Ser/Tyr", pos: 340, role: "Sieć wiązań wodorowych" }
        ]
      };
    }
    if (typeof targetRef === "string") {
      if (TARGET_3D_CATALOG[targetRef]) return TARGET_3D_CATALOG[targetRef];
      const byName = Object.values(TARGET_3D_CATALOG).find((x) =>
        x.name.toLowerCase() === targetRef.toLowerCase() || x.gene.toLowerCase() === targetRef.toLowerCase() || x.pdb.toLowerCase() === targetRef.toLowerCase()
      );
      if (byName) return byName;
    }
    return TARGET_3D_CATALOG["CHEMBL224"];
  }

  function generate3DStructureGeometry(targetInfo) {
    const arch = targetInfo.arch || "gpcr";
    const helices = [];
    const numHelices = arch === "gpcr" ? 7 : arch === "transporter" ? 8 : arch === "channel" ? 5 : 6;
    const rBundle = arch === "channel" ? 32 : 22;

    for (let i = 0; i < numHelices; i++) {
      const angle = (i / numHelices) * Math.PI * 2;
      const hx = Math.cos(angle) * rBundle;
      const hy = Math.sin(angle) * rBundle;
      const hue = (i * 45 + 160) % 360;
      helices.push({
        id: `Helix ${i + 1}`,
        x1: hx + Math.sin(i) * 2,
        y1: hy - 28,
        z1: -26 + Math.cos(i) * 4,
        x2: hx - Math.sin(i) * 2,
        y2: hy + 28,
        z2: 26 - Math.cos(i) * 4,
        radius: 3.6,
        color: `hsl(${hue}, 70%, 55%)`
      });
    }

    const pocketAtoms = (targetInfo.pocket || []).map((p, idx) =>{
      const ang = (idx / targetInfo.pocket.length) * Math.PI * 2;
      const px = Math.cos(ang) * 9.5;
      const py = Math.sin(ang) * 9.5;
      const pz = -2 + (idx % 3) * 3;
      return {
        r: p.r,
        role: p.role,
        x: px,
        y: py,
        z: pz,
        color: "#fbbf24"
      };
    });

    const ligandAtoms = [
      { elem: "N", x: 0.0, y: -0.8, z: 0.5, c: "#5899e2", r: 2.2 },
      { elem: "C", x: 1.8, y: -0.2, z: 0.2, c: "#44a282", r: 2.4 },
      { elem: "C", x: 2.6, y: 1.6, z: -0.1, c: "#44a282", r: 2.4 },
      { elem: "C", x: 1.4, y: 2.8, z: -0.3, c: "#44a282", r: 2.4 },
      { elem: "C", x: -0.4, y: 2.2, z: -0.1, c: "#44a282", r: 2.4 },
      { elem: "C", x: -1.0, y: 0.4, z: 0.3, c: "#44a282", r: 2.4 },
      { elem: "C", x: -2.8, y: -0.2, z: 0.6, c: "#44a282", r: 2.4 },
      { elem: "O", x: -3.6, y: -1.8, z: 0.8, c: "#e5566f", r: 2.3 },
      { elem: "C", x: 0.4, y: -2.6, z: 0.7, c: "#44a282", r: 2.4 },
      { elem: "C", x: 2.2, y: -2.8, z: 0.6, c: "#44a282", r: 2.4 }
    ];

    const ligandBonds = [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
      [5, 6], [6, 7], [0, 8], [8, 9]
    ];

    return { helices, pocketAtoms, ligandAtoms, ligandBonds };
  }

  function draw3DComplexCanvas() {
    const cv = $("struct3DCanvas");
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const width = cv.clientWidth || 700;
    const height = cv.clientHeight || 500;
    const dpr = window.devicePixelRatio || 1;

    if (cv.width !== width * dpr || cv.height !== height * dpr) {
      cv.width = width * dpr;
      cv.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const grad = ctx.createRadialGradient(width * 0.5, height * 0.45, 20, width * 0.5, height * 0.5, width * 0.7);
    grad.addColorStop(0, "#131b2e");
    grad.addColorStop(1, "#070a12");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    const targetInfo = resolveTarget3D(struct3DState.targetId);
    const geom = generate3DStructureGeometry(targetInfo);

    const cx = width * 0.5 + struct3DState.panX;
    const cy = height * 0.5 + struct3DState.panY;
    const scale = Math.min(width, height) * 0.016 * struct3DState.zoom;

    const cosX = Math.cos(struct3DState.rotX), sinX = Math.sin(struct3DState.rotX);
    const cosY = Math.cos(struct3DState.rotY), sinY = Math.sin(struct3DState.rotY);
    const cosZ = Math.cos(struct3DState.rotZ), sinZ = Math.sin(struct3DState.rotZ);

    function project(x, y, z) {
      let x1 = x * cosY - z * sinY;
      let z1 = x * sinY + z * cosY;
      let y2 = y * cosX - z1 * sinX;
      let z2 = y * sinX + z1 * cosX;
      let x3 = x1 * cosZ - y2 * sinZ;
      let y3 = x1 * sinZ + y2 * cosZ;
      const fov = 350;
      const pScale = fov / (fov + z2 * 1.5) * scale;
      return {
        px: cx + x3 * pScale,
        py: cy + y3 * pScale,
        pz: z2,
        scale: pScale
      };
    }

    const items = [];

    if (struct3DState.style === "cartoon" || struct3DState.style === "sticks") {
      geom.helices.forEach((h, hIdx) =>{
        const p1 = project(h.x1, h.y1, h.z1);
        const p2 = project(h.x2, h.y2, h.z2);
        const midZ = (p1.pz + p2.pz) * 0.5;

        items.push({
          type: "helix",
          z: midZ,
          draw: () =>{
            const hGrad = ctx.createLinearGradient(p1.px, p1.py, p2.px, p2.py);
            hGrad.addColorStop(0, h.color);
            hGrad.addColorStop(1, "color-mix(in oklab, " + h.color + " 40%, #000)");

            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.lineWidth = Math.max(3, (p1.scale + p2.scale) * 0.5 * (struct3DState.style === "sticks" ? 0.35 : 0.85));
            ctx.strokeStyle = hGrad;
            ctx.lineCap = "round";
            ctx.stroke();

            if (struct3DState.style === "cartoon") {
              const segs = 8;
              for (let s = 1; s < segs; s++) {
                const t = s / segs;
                const sx = p1.px + (p2.px - p1.px) * t;
                const sy = p1.py + (p2.py - p1.py) * t;
                const ribAngle = Math.atan2(p2.py - p1.py, p2.px - p1.px) + Math.PI / 2;
                const ribLen = Math.sin(t * Math.PI) * ctx.lineWidth * 0.6;
                ctx.beginPath();
                ctx.moveTo(sx - Math.cos(ribAngle) * ribLen, sy - Math.sin(ribAngle) * ribLen);
                ctx.lineTo(sx + Math.cos(ribAngle) * ribLen, sy + Math.sin(ribAngle) * ribLen);
                ctx.lineWidth = 1.5;
                ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
                ctx.stroke();
              }
            }
          }
        });
      });
    }

    if (struct3DState.style === "surface") {
      const surfPoints = geom.pocketAtoms.map((a) =>project(a.x * 1.5, a.y * 1.5, a.z * 1.5));
      const avgZ = surfPoints.reduce((acc, p) =>acc + p.pz, 0) / (surfPoints.length || 1);

      items.push({
        type: "surface",
        z: avgZ - 10,
        draw: () =>{
          ctx.beginPath();
          surfPoints.forEach((p, idx) =>{
            if (idx === 0) ctx.moveTo(p.px, p.py);
            else ctx.lineTo(p.px, p.py);
          });
          ctx.closePath();
          ctx.fillStyle = "rgba(14, 165, 233, 0.22)";
          ctx.fill();
          ctx.strokeStyle = "rgba(56, 189, 248, 0.6)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });
    }

    if (struct3DState.showPocket) {
      geom.pocketAtoms.forEach((pa, pIdx) =>{
        const p = project(pa.x, pa.y, pa.z);
        const isSelected = struct3DState.selectedResidue === pa.r;

        items.push({
          type: "pocket_atom",
          z: p.pz + 5,
          draw: () =>{
            ctx.beginPath();
            ctx.arc(p.px, p.py, Math.max(3.5, p.scale * (isSelected ? 1.4 : 0.9)), 0, Math.PI * 2);
            ctx.fillStyle = isSelected ? "#38bdf8" : "#d9a441";
            ctx.fill();
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = isSelected ? 2 : 1;
            ctx.stroke();

            const lp = project(0, 0, 0);
            ctx.beginPath();
            ctx.setLineDash([3, 3]);
            ctx.moveTo(p.px, p.py);
            ctx.lineTo(lp.px, lp.py);
            ctx.strokeStyle = isSelected ? "rgba(56, 189, 248, 0.9)" : "rgba(245, 158, 11, 0.4)";
            ctx.lineWidth = isSelected ? 2 : 1;
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.font = "bold 10px monospace";
            const textWidth = ctx.measureText(pa.r).width;
            ctx.fillStyle = isSelected ? "rgba(14, 165, 233, 0.9)" : "rgba(15, 23, 42, 0.85)";
            ctx.fillRect(p.px + 7, p.py - 12, textWidth + 8, 16);
            ctx.strokeStyle = isSelected ? "#fff" : "rgba(255, 255, 255, 0.25)";
            ctx.lineWidth = 1;
            ctx.strokeRect(p.px + 7, p.py - 12, textWidth + 8, 16);

            ctx.fillStyle = isSelected ? "#fff" : "#fbbf24";
            ctx.fillText(pa.r, p.px + 11, p.py);
          }
        });
      });
    }

    if (struct3DState.showLigand) {
      geom.ligandBonds.forEach(([i, j]) =>{
        const a1 = geom.ligandAtoms[i];
        const a2 = geom.ligandAtoms[j];
        const p1 = project(a1.x, a1.y, a1.z);
        const p2 = project(a2.x, a2.y, a2.z);
        const midZ = (p1.pz + p2.pz) * 0.5 + 8;

        items.push({
          type: "bond",
          z: midZ,
          draw: () =>{
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.lineWidth = Math.max(2, (p1.scale + p2.scale) * 0.45);
            ctx.strokeStyle = "#cbd5e1";
            ctx.lineCap = "round";
            ctx.stroke();
          }
        });
      });

      geom.ligandAtoms.forEach((la) =>{
        const p = project(la.x, la.y, la.z);

        items.push({
          type: "ligand_atom",
          z: p.pz + 10,
          draw: () =>{
            const rad = Math.max(3.5, p.scale * (la.r * 0.38));
            const aGrad = ctx.createRadialGradient(p.px - rad * 0.3, p.py - rad * 0.3, rad * 0.1, p.px, p.py, rad);
            aGrad.addColorStop(0, "#ffffff");
            aGrad.addColorStop(0.3, la.c);
            aGrad.addColorStop(1, "color-mix(in oklab, " + la.c + " 50%, #000)");

            ctx.beginPath();
            ctx.arc(p.px, p.py, rad, 0, Math.PI * 2);
            ctx.fillStyle = aGrad;
            ctx.fill();
            ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });
    }

    items.sort((a, b) =>a.z - b.z);
    items.forEach((item) =>item.draw());

    ctx.restore();
  }

  function start3DAnimationLoop() {
    if (struct3DRaf || !struct3DState.autoRotate) return;
    function loop() {
      if (!activeStruct3DModalOpen || !struct3DState.autoRotate || struct3DState.isDragging) {
        struct3DRaf = null;
        return;
      }
      struct3DState.rotY += 0.0035;
      draw3DComplexCanvas();
      struct3DRaf = requestAnimationFrame(loop);
    }
    struct3DRaf = requestAnimationFrame(loop);
  }

  function populate3DTargetSelector() {
    const sel = $("struct3DTargetSelect");
    if (!sel) return;

    const entries = Object.values(TARGET_3D_CATALOG);
    const groups = {};
    entries.forEach((e) =>{
      const cls = e.class || "Inne";
      if (!groups[cls]) groups[cls] = [];
      groups[cls].push(e);
    });

    sel.innerHTML = Object.entries(groups).map(([cls, items]) =>`
      <optgroup label="${esc(cls)}">
        ${items.map((it) =>`<option value="${esc(it.id)}" ${it.id === struct3DState.targetId ? "selected" : ""}>${esc(it.name)} (${esc(it.pdb)})</option>`).join("")}
      </optgroup>
    `).join("");

    sel.onchange = () =>{
      struct3DState.targetId = sel.value;
      struct3DState.selectedResidue = null;
      render3DSidebarDOM();
      draw3DComplexCanvas();
    };
  }

  function render3DSidebarDOM() {
    const sb = $("struct3DSidebar");
    const sub = $("struct3DSubtitle");
    if (!sb) return;

    const tInfo = resolveTarget3D(struct3DState.targetId);
    if (sub) {
      sub.textContent = `${tInfo.name} · ${tInfo.pdb} (${tInfo.res})`;
    }

    const tIdx = T.findIndex((x) =>x.id === tInfo.id || (x.n && x.n.toLowerCase() === tInfo.name.toLowerCase()));
    const ligands = tIdx >= 0 ? (byTarget[tIdx] || []).map((i) =>C[i]) : [];
    const ligandsSlice = ligands.slice(0, 10);

    const pocketHtml = (tInfo.pocket || []).map((p) =>{
      const isSelected = struct3DState.selectedResidue === p.r;
      return `
        <div class="struct-pocket-pill ${isSelected ? 'active' : ''}" data-pocket-r="${esc(p.r)}" style="display:flex;justify-content:space-between;align-items:flex-start;width:100%;margin-bottom:4px">
          <div>
            <b style="color:var(--color-primary)">${esc(p.r)}</b>
            <div style="font-size:13px;color:var(--color-text-muted);line-height:1.3;margin-top:2px">${esc(p.role)}</div>
          </div>
          <span class="struct-pill-tag">Kieszeń</span>
        </div>
      `;
    }).join("");

    const ligandsHtml = ligandsSlice.length ? `
      <div style="display:flex;flex-direction:column;gap:4px;margin-top:6px">
        ${ligandsSlice.map((c) =>{
          const inStack = state.stack.has(c.i);
          return `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:4px 6px;border-radius:4px;background:var(--color-surface);border:1px solid var(--color-border);font-size:13px">
              <span style="font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:180px" title="${esc(c.n)}">${esc(c.n)}</span>
              <div style="display:flex;gap:4px">
                <button class="btn" data-struct-goto="${c.i}" style="font-size:13px;padding:2px 5px">Graf</button>
                <button class="btn ${inStack ? 'btn-gold' : ''}" data-struct-stack="${c.i}" style="font-size:13px;padding:2px 5px">${inStack ? 'OK' : '+'}</button>
              </div>
            </div>
          `;
        }).join("")}
        ${ligands.length >10 ? `<small style="font-size:13px;color:var(--color-text-muted);text-align:center">+ ${ligands.length - 10} dalszych substancji</small>`: ""}
      </div>
    `: '<div style="font-size:13px;color:var(--color-text-muted)">Brak bezpośrednio powiązanych leków w katalogu.</div>';

    sb.innerHTML = `
      <div style="border-bottom:1px solid var(--color-border);padding-bottom:10px">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <b style="font-size:var(--text-base);font-family:var(--font-display)">${esc(tInfo.name)}</b>
          <span class="tag ok" style="font-size:13px">${esc(tInfo.gene || "TARGET")}</span>
        </div>
        <div style="font-size:13px;color:var(--color-text-muted);margin-top:2px">${esc(tInfo.class)} · ${esc(tInfo.id)}</div>
      </div>

      <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-md);padding:8px 10px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <small style="font-weight:700;text-transform:uppercase;color:var(--color-text-muted)">Holo-Struktura PDB</small>
          <a href="https://www.rcsb.org/structure/${esc(tInfo.pdb)}" target="_blank" rel="noopener noreferrer" style="font-size:13px;font-weight:700;color:var(--color-primary)">RCSB ${esc(tInfo.pdb)} ↗</a>
        </div>
        <div style="font-size:13px;font-weight:700;margin-top:2px;color:var(--color-text)">${esc(tInfo.res)}</div>
        <div style="font-size:13px;color:var(--color-text-muted);margin-top:2px">
          UniProt: <a href="https://www.uniprot.org/uniprotkb/${esc(tInfo.uniprot)}/entry" target="_blank" rel="noopener noreferrer">${esc(tInfo.uniprot)} ↗</a>· 
          AlphaFold: <a href="https://alphafold.ebi.ac.uk/entry/${esc(tInfo.uniprot)}" target="_blank" rel="noopener noreferrer">AF-${esc(tInfo.uniprot)} ↗</a>
        </div>
      </div>

      <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-md);padding:8px 10px">
        <small style="font-weight:700;text-transform:uppercase;color:var(--color-text-muted)">Ligand Krystalograficzny</small>
        <div style="font-size:13px;font-weight:800;color:var(--color-primary);margin-top:2px">${esc(tInfo.ligand)}</div>
        <div style="font-size:13px;color:var(--color-text-muted);margin-top:2px">${esc(tInfo.affinity)}</div>
      </div>

      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <small style="font-weight:700;text-transform:uppercase;color:var(--color-text-muted)">Reszty Kieszeni Wiążącej (${tInfo.pocket ? tInfo.pocket.length : 0})</small>
          <small style="font-size:13px;color:var(--color-text-muted)">Kliknij, aby wskazać</small>
        </div>
        <div style="max-height:160px;overflow-y:auto;padding-right:2px">
          ${pocketHtml}
        </div>
      </div>

      <div>
        <small style="font-weight:700;text-transform:uppercase;color:var(--color-text-muted)">Ligandy w Pharma-vault (${ligands.length})</small>
        ${ligandsHtml}
      </div>

      <div style="margin-top:auto;padding-top:8px;border-top:1px solid var(--color-border);display:flex;flex-direction:column;gap:6px">
        <a href="sidecar://biomolecular-structure-viewer" class="btn btn-gold" id="sidecarDirectLink" style="font-size:13px;text-align:center;text-decoration:none;display:block">
           Otwórz Mol* Sidecar (3D)
        </a>
        <small style="font-size:13px;color:var(--color-text-muted);text-align:center">Interaktywna eksploracja w panelu Mol* Biomolecular Viewer</small>
      </div>
    `;

    sb.querySelectorAll("[data-pocket-r]").forEach((el) =>{
      el.onclick = () =>{
        const rName = el.dataset.pocketR;
        struct3DState.selectedResidue = struct3DState.selectedResidue === rName ? null : rName;
        render3DSidebarDOM();
        draw3DComplexCanvas();
      };
    });

    sb.querySelectorAll("[data-struct-goto]").forEach((btn) =>{
      btn.onclick = () =>{
        const idx = +btn.dataset.structGoto;
        closeStruct3DModal();
        select({ type: "compound", i: idx }, true);
      };
    });

    sb.querySelectorAll("[data-struct-stack]").forEach((btn) =>{
      btn.onclick = () =>{
        const idx = +btn.dataset.structStack;
        toggleInStack(idx);
        render3DSidebarDOM();
      };
    });
  }

  function openStruct3DModal(targetRef = null, ligandRef = null) {
    const modal = $("struct3DModal");
    if (!modal) return;

    if (targetRef != null) {
      const resolved = resolveTarget3D(targetRef);
      struct3DState.targetId = resolved.id;
    }

    activeStruct3DModalOpen = true;
    populate3DTargetSelector();
    render3DSidebarDOM();

    wireStruct3DModal();
    openDialog(modal);

    const cv = $("struct3DCanvas");
    if (cv) {
      cv.width = cv.clientWidth || 700;
      cv.height = cv.clientHeight || 500;
    }
    draw3DComplexCanvas();
    start3DAnimationLoop();
  }

  function closeStruct3DModal() {
    const modal = $("struct3DModal");
    if (modal) closeDialog(modal);
    activeStruct3DModalOpen = false;
    if (struct3DRaf) {
      cancelAnimationFrame(struct3DRaf);
      struct3DRaf = null;
    }
    if (typeof syncWorkspaceModeToOpenModals === "function") syncWorkspaceModeToOpenModals();
  }

  function wireStruct3DModal() {
    const modal = $("struct3DModal");
    if (!modal || modal._wired) return;
    modal._wired = true;

    const closeBtn = $("struct3DModalClose");
    if (closeBtn) closeBtn.onclick = closeStruct3DModal;

    modal.onclick = (e) =>{
      if (e.target === modal) closeStruct3DModal();
    };

    const sidecarBtn = $("struct3DSidecarBtn");
    if (sidecarBtn) {
      sidecarBtn.onclick = () =>{
        window.location.href = "sidecar://biomolecular-structure-viewer";
      };
    }

    const cv = $("struct3DCanvas");
    if (cv) {
      cv.onmousedown = (e) =>{
        struct3DState.isDragging = true;
        struct3DState.dragButton = e.button;
        struct3DState.lastMouseX = e.clientX;
        struct3DState.lastMouseY = e.clientY;
        struct3DState.autoRotate = false;
      };

      window.addEventListener("mousemove", (e) =>{
        if (!struct3DState.isDragging || !activeStruct3DModalOpen) return;
        const dx = e.clientX - struct3DState.lastMouseX;
        const dy = e.clientY - struct3DState.lastMouseY;
        struct3DState.lastMouseX = e.clientX;
        struct3DState.lastMouseY = e.clientY;

        if (struct3DState.dragButton === 0) {
          struct3DState.rotY += dx * 0.009;
          struct3DState.rotX += dy * 0.009;
        } else if (struct3DState.dragButton === 2) {
          struct3DState.panX += dx;
          struct3DState.panY += dy;
        }
        draw3DComplexCanvas();
      });

      window.addEventListener("mouseup", () =>{
        struct3DState.isDragging = false;
      });

      cv.oncontextmenu = (e) =>e.preventDefault();

      cv.onwheel = (e) =>{
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.09 : 0.91;
        struct3DState.zoom = Math.max(0.35, Math.min(3.8, struct3DState.zoom * factor));
        draw3DComplexCanvas();
      };

      // Touch events for mobile/tablet
      let touchStartX = 0, touchStartY = 0;
      cv.ontouchstart = (e) =>{
        if (e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          struct3DState.isDragging = true;
          struct3DState.autoRotate = false;
        }
      };
      cv.ontouchmove = (e) =>{
        if (e.touches.length === 1 && struct3DState.isDragging) {
          const dx = e.touches[0].clientX - touchStartX;
          const dy = e.touches[0].clientY - touchStartY;
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          struct3DState.rotY += dx * 0.01;
          struct3DState.rotX += dy * 0.01;
          draw3DComplexCanvas();
        }
      };
      cv.ontouchend = () =>{
        struct3DState.isDragging = false;
      };
    }

    const styleBtns = modal.querySelectorAll("[data-struct-style]");
    styleBtns.forEach((btn) =>{
      btn.onclick = () =>{
        styleBtns.forEach((b) =>b.classList.remove("active"));
        btn.classList.add("active");
        struct3DState.style = btn.dataset.structStyle;
        draw3DComplexCanvas();
      };
    });

    const togglePocketBtn = $("struct3DTogglePocket");
    if (togglePocketBtn) {
      togglePocketBtn.onclick = () =>{
        struct3DState.showPocket = !struct3DState.showPocket;
        togglePocketBtn.classList.toggle("active", struct3DState.showPocket);
        draw3DComplexCanvas();
      };
    }

    const toggleLigandBtn = $("struct3DToggleLigand");
    if (toggleLigandBtn) {
      toggleLigandBtn.onclick = () =>{
        struct3DState.showLigand = !struct3DState.showLigand;
        toggleLigandBtn.classList.toggle("active", struct3DState.showLigand);
        draw3DComplexCanvas();
      };
    }

    const resetCamBtn = $("struct3DResetCamera");
    if (resetCamBtn) {
      resetCamBtn.onclick = () =>{
        struct3DState.rotX = 0.3;
        struct3DState.rotY = -0.45;
        struct3DState.rotZ = 0;
        struct3DState.zoom = 1.0;
        struct3DState.panX = 0;
        struct3DState.panY = 0;
        struct3DState.autoRotate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        draw3DComplexCanvas();
        start3DAnimationLoop();
      };
    }
  }

  // ---------- Clinical Dossier & Monograph Generator
  let activeDossierMode = null;
  let activeDossierTarget = null;

  function generateCompoundDossierHtml(c) {
    if (!c) return '<div class="dossier-warn">Brak danych substancji.</div>';
    const struct = getChemStructure(c);
    const dateStr = new Date().toISOString().slice(0, 10);
    const g = GR[c.g] || { label: "Nieznana" };
    const cl = G.clusters[c.c] ? CL_PL[G.clusters[c.c].name] : "Inne";
    const k = c.pk || {};
    const pr = c.pr || [];

    const targets = (c.tg || []).map((ti) =>{
      const t = T[ti];
      const act = classifyTargetAction(c, t ? t.n : "");
      return { t, act };
    });

    return `
      <div class="dossier-head-brand">
        <div>
          <div style="font-size:13px;text-transform:uppercase;letter-spacing:0.02em;color:#444">Pharma-vault Clinical Intelligence · Monografia Kliniczna</div>
          <h2 style="font-size:22px;font-weight:700;color:#111;margin-top:2px">${esc(c.n)}</h2>
          <div style="font-size:13px;color:#444;margin-top:2px">${esc(cl)} · ${esc(g.label)}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:13px;font-weight:700;color:#111">ARCHIWUM MONOGRAFII</div>
          <div style="font-size:13px;color:#444">ID: ${esc(c.id)} · Data: ${dateStr}</div>
          <div style="font-size:13px;color:#0d47a1;font-weight:600">Status: Walidacja laboratoryjna</div>
        </div>
      </div>

      <div class="dossier-section" style="display:grid;grid-template-columns:220px 1fr;gap:20px;align-items:start">
        <div class="dossier-struct-box" style="border:1px solid #eceef2;border-radius:6px;padding:12px;text-align:center;background:#fafafa">
          ${struct ? `<img src="${struct.url}" alt="${esc(c.n)}" style="max-width:190px;max-height:190px;object-fit:contain;mix-blend-mode:multiply" onerror="this.style.display='none'">`: `
            <div style="height:150px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#444;font-size:13px">
              <span style="font-size:32px"></span>
              <span style="margin-top:6px">${esc(c.mt || "Struktura niedostępna")}</span>
            </div>
          `}
          <div style="margin-top:8px;font-size:13px;font-weight:700;color:#333">${esc(c.mf || "–")}</div>
          <div style="font-size:13px;color:#444">${pr[0] != null ? pr[0] + " g/mol" : ""}</div>
        </div>
        <div>
          <div class="dossier-sec-title">Właściwości fizykochemiczne & Identyfikatory</div>
          <table class="dossier-table">
            <tbody>
              <tr><th style="width:38%">Wzór sumaryczny</th><td><b>${esc(c.mf || "–")}</b></td></tr>
              <tr><th>Masa cząsteczkowa (MW)</th><td>${pr[0] != null ? pr[0] + " g/mol" : "–"}</td></tr>
              <tr><th>Lipofilowość (ALogP)</th><td>${pr[1] != null ? pr[1] : "–"}</td></tr>
              <tr><th>Powierzchnia polarna (PSA)</th><td>${pr[2] != null ? pr[2] + " Å²" : "–"}</td></tr>
              <tr><th>Reguła 5 Lipińskiego (Ro5)</th><td>${pr[3] != null ? (pr[3] === 0 ? "OK 0 naruszeń (spełniona)" : `<span style="color:#d32f2f">${pr[3]} naruszeń</span>`) : "–"}</td></tr>
              <tr><th>InChIKey</th><td><span style="font-size:13px;font-variant-numeric:tabular-nums">${esc(c.ik || "–")}</span></td></tr>
              <tr><th>ChEMBL ID / PubChem CID</th><td>${esc(c.id)}${c.cid ? `/ CID: ${c.cid}`: ""}</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="dossier-section">
        <div class="dossier-sec-title">Status regulacyjny & Walidacja etykiet (FDA / EMA / ChPL)</div>
        <table class="dossier-table">
          <thead>
            <tr>
              <th style="width:25%">Źródło</th>
              <th style="width:20%">Status</th>
              <th>Szczegóły / Adnotacja kliniczna</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>ChEMBL Development</b></td>
              <td>${c.ph ? `Faza ${c.ph}`: "Faza przedkliniczna"}</td>
              <td>${c.ph === 4 ? "Lek zatwierdzony w obrocie (Approved)" : (c.ph ? "Faza badań klinicznych" : "Związek badawczy / ligand laboratoryjny")}</td>
            </tr>
            <tr>
              <td><b>FDA Label Verification</b></td>
              <td>${c.v ? (c.v.s === "consistent" ? '<span style="color:#2e7d32">OK Spójny (Consistent)</span>' : '<span style="color:#c62828">≠ Rozbieżny</span>') : "–"}</td>
              <td>${c.v && c.v.c ? esc(c.v.c) : "Brak zarejestrowanych rozbieżności z FDA"}</td>
            </tr>
            <tr>
              <td><b>EMA / ChPL Verification</b></td>
              <td>${c.ve ? (c.ve.s === "consistent" ? '<span style="color:#2e7d32">OK Spójny (Consistent)</span>' : '<span style="color:#c62828">≠ Rozbieżny</span>') : "–"}</td>
              <td>${c.ve && c.ve.c ? esc(c.ve.c) : "Brak zarejestrowanych rozbieżności z ChPL"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="dossier-section">
        <div class="dossier-sec-title">Mechanizm Działania (Mechanism of Action)</div>
        <div style="font-size:13px;line-height:1.6;color:#222;background:#fbfbfb;border:1px solid #eceef2;border-radius:6px;padding:10px 12px">
          ${c.m ? esc(c.m.replace(/\|/g, " · ")) : "Brak formalnego opisu mechanizmu działania w bazie."}
        </div>
      </div>

      <div class="dossier-section">
        <div class="dossier-sec-title">Profil Farmakokinetyczny (ADME)</div>
        <table class="dossier-table">
          <tbody>
            <tr><th style="width:28%">Okres półtrwania (T½)</th><td><b>${k.hl != null ? k.hl + " h" : "Brak danych"}</b></td></tr>
            <tr><th>Wiązanie z białkami osocza</th><td>${k.pb != null ? k.pb + " %" : "Brak danych"}</td></tr>
            <tr><th>Biodostępność doustna</th><td>${k.ba != null ? k.ba + " %" : "Brak danych"}</td></tr>
            <tr><th>Izoenzymy CYP (Metabolizm)</th><td>${k.cyp && k.cyp.length ? `<b>${esc(k.cyp.join(", "))}</b>`: "Brak danych o izoenzymach CYP"}</td></tr>
            <tr><th>Droga metabolizmu</th><td>${esc(k.met || "Brak szczegółów metabolizmu")}</td></tr>
            <tr><th>Wydalanie / Eliminacja</th><td>${esc(k.ren || k.ex || "Brak danych o eliminacji")}</td></tr>
          </tbody>
        </table>
      </div>

      <div class="dossier-section">
        <div class="dossier-sec-title">Molekularne Punkty Uchwytu (Cele Biologiczne & Receptory)</div>
        ${targets.length ? `
          <table class="dossier-table">
            <thead>
              <tr>
                <th style="width:45%">Nazwa celu molekularnego</th>
                <th style="width:25%">Klasa celu</th>
                <th style="width:30%">Typ oddziaływania</th>
              </tr>
            </thead>
            <tbody>
              ${targets.slice(0, 12).map(({ t, act }) =>{
                const actBadge = act === "agonist" ? '<span style="color:#2e7d32">Agonista / Aktywator</span>'
                  : act === "antagonist" ? '<span style="color:#c62828">Antagonista / Bloker</span>'
                  : act === "inhibitor" ? '<span style="color:#9a3412">Inhibitor</span>'
                  : '<span style="color:#444">Ligand</span>';
                return `
                  <tr>
                    <td><b>${esc(t ? t.n : "Nieznany cel")}</b></td>
                    <td>${esc(t ? t.k : "–")}</td>
                    <td>${actBadge}</td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
          ${targets.length >12 ? `<div style="font-size:13px;color:#444;margin-top:4px;font-style:italic">… oraz ${targets.length - 12} dalszych celów molekularnych.</div>`: ""}
        `: '<div style="font-size:13px;color:#444;padding:6px 0">Brak powiązanych celów molekularnych w grafie.</div>'}
      </div>

      ${(c.bb || c.wd || (c.t && c.t.length)) ? `
        <div class="dossier-section">
          <div class="dossier-sec-title">Ostrzeżenia Bezpieczeństwa & Flagi Toksykologiczne</div>
          ${c.bb ? `<div class="dossier-warn"><b>Black Box Warning (FDA / Boxed Warning):</b>Substancja objęta najwyższym ostrzeżeniem bezpieczeństwa.</div>`: ""}
          ${c.wd ? `<div class="dossier-warn"><b>Związek wycofany z rynku (Withdrawn):</b>Wycofany ze względów bezpieczeństwa lub toksyczności.</div>`: ""}
          ${c.t && c.t.length ? `
            <div style="margin-top:6px;font-size:13px">
              <b>Kluczowe ryzyka i przeciwwskazania:</b>${c.t.map((t) =>`<span style="background:#fff3e0;color:#9a3412;padding:2px 6px;border-radius:6px;margin:0 4px 4px 0;display:inline-block">${esc(t)}</span>`).join("")}
            </div>
          `: ""}
        </div>
      `: ""}

      <div style="margin-top:30px;padding-top:12px;border-top:1px solid #eceef2;display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#444">
        <div>Pharma-vault Clinical Intelligence Engine v3.13.0 · Wygenerowano: ${dateStr}</div>
        <div>Dokument informacyjno-badawczy · Nie stanowi porady lekarskiej</div>
      </div>
    `;
  }

  function generateStackDossierHtml(stackIndices) {
    const list = (stackIndices || []).map((i) =>C[i]).filter(Boolean);
    const dateStr = new Date().toISOString().slice(0, 10);
    if (!list.length) {
      return '<div class="dossier-warn">Brak wybranych substancji w stacku. Dodaj leki do zestawu, aby wygenerować dossier polipragmazji.</div>';
    }

    const { alerts, maxLevel } = analyzeStack(list.map((c) =>c.i));
    const risk = calculateStackRiskMetrics(list.map((c) =>c.i));

    return `
      <div class="dossier-head-brand">
        <div>
          <div style="font-size:13px;text-transform:uppercase;letter-spacing:0.02em;color:#444">Pharma-vault Clinical Intelligence · Raport Polipragmazji</div>
          <h2 style="font-size:22px;font-weight:700;color:#111;margin-top:2px">Dossier Terapii Złożonej (Stack ${list.length} leków)</h2>
          <div style="font-size:13px;color:#444;margin-top:2px">Analiza interakcji farmakodynamicznych, farmakokinetycznych (CYP) i bezpieczeństwa</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:13px;font-weight:700;color:#111">ARCHIWUM POLIPRAGMAZJI</div>
          <div style="font-size:13px;color:#444">Złożoność: ${list.length} substancji · Data: ${dateStr}</div>
          <div style="font-size:13px;font-weight:700;color:${risk.color}">
            Indeks Toksyczności: ${risk.totalScore}/100 (${risk.label})
          </div>
        </div>
      </div>

      <div class="dossier-section">
        <div class="dossier-sec-title">1. Skład Zestawu Terapeutycznego (${list.length} Substancji)</div>
        <table class="dossier-table">
          <thead>
            <tr>
              <th style="width:25%">Substancja</th>
              <th style="width:20%">Kategoria</th>
              <th style="width:12%">T½</th>
              <th style="width:18%">CYP Substrat</th>
              <th>Główny Mechanizm / Wskazanie</th>
            </tr>
          </thead>
          <tbody>
            ${list.map((c) =>{
              const k = c.pk || {};
              const g = GR[c.g] || { label: "–" };
              return `
                <tr>
                  <td><b>${esc(c.n)}</b></td>
                  <td>${esc(g.label)}</td>
                  <td>${k.hl != null ? k.hl + " h" : "–"}</td>
                  <td>${k.cyp && k.cyp.length ? `<b>${esc(k.cyp.join(", "))}</b>`: "–"}</td>
                  <td style="font-size:13px;color:#444">${esc(c.m ? c.m.split("|")[0] : "–")}</td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>

      <div class="dossier-section">
        <div class="dossier-sec-title">2. Indeks Toksyczności & Obciążenie Narządowe (Stack Risk Score: ${risk.totalScore}/100)</div>
        <div style="display:flex;align-items:center;justify-content:space-between;background:#f9f9f9;border:1px solid #eceef2;border-radius:6px;padding:8px 12px;margin-bottom:8px">
          <div>
            <b>Ocena ogólna:</b><span style="color:${risk.color};font-weight:700">${esc(risk.label)}</span>
            <div style="font-size:13px;color:#444">Wieloosiowy wskaźnik kumulacji ryzyka z karą za obciążenie wielonarządowe</div>
          </div>
          <div style="font-size:18px;font-weight:800;color:${risk.color};padding:4px 10px;border:1px solid ${risk.color};border-radius:6px;background:#fff">
            ${risk.totalScore} / 100
          </div>
        </div>
        <table class="dossier-table">
          <thead>
            <tr>
              <th style="width:25%">Układ / Oś narządowa</th>
              <th style="width:18%">Wskaźnik (%)</th>
              <th>Istota obciążenia klinicznego</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Sercowo-naczyniowa</b></td>
              <td><b>${risk.axes.cardio}%</b></td>
              <td>Wydłużenie QTc / arytmie komorowe (hERG), skoki ciśnienia tętniczego</td>
            </tr>
            <tr>
              <td><b>Wątrobowa / CYP</b></td>
              <td><b>${risk.axes.hepatic}%</b></td>
              <td>Wąskie gardła enzymów CYP, konkurencja metaboliczna, ryzyko krwawień</td>
            </tr>
            <tr>
              <td><b>OUN / Mózgowa</b></td>
              <td><b>${risk.axes.cns}%</b></td>
              <td>Depresja oddechowa, zespół serotoninowy, obniżenie progu drgawkowego</td>
            </tr>
            <tr>
              <td><b>Autonomiczna</b></td>
              <td><b>${risk.axes.autonomic}%</b></td>
              <td>Obciążenie antycholinergiczne (ACB), tachykardia, sedacja</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="dossier-section">
        <div class="dossier-sec-title">3. Wykryte Kolizje Farmakodynamiczne & Farmakokinetyczne (${alerts.length})</div>
        ${alerts.length ? alerts.map((a) =>`
          <div class="${a.level === 'crit' ? 'dossier-warn' : 'dossier-callout'}">
            <div style="font-weight:700;font-size:13px;margin-bottom:2px">${a.title}</div>
            <div style="font-size:13px;color:#333;line-height:1.4">${a.desc}</div>
          </div>
        `).join("") : `
          <div class="dossier-callout" style="border-left-color:#2e7d32;background:#f1f8e9">
            <b>OK Brak zidentyfikowanych krytycznych kolizji wielolekowych</b>w standardowych regułach Pharma-vault.
          </div>
        `}
      </div>

      <div class="dossier-section">
        <div class="dossier-sec-title">4. Pełna Macierz Interakcji Parowych (Pairwise Interactions N×N)</div>
        <table class="dossier-table">
          <thead>
            <tr>
              <th style="width:30%">Para substancji</th>
              <th style="width:15%">Poziom</th>
              <th>Istota interakcji / Wspólne szlaki</th>
            </tr>
          </thead>
          <tbody>
            ${(() =>{
              const rows = [];
              for (let i = 0; i < list.length; i++) {
                for (let j = i + 1; j < list.length; j++) {
                  const res = evaluatePairwiseInteraction(list[i], list[j]);
                  const badge = res.level === "danger" ? '<span style="color:#c62828;font-weight:700">Krytyczna</span>'
                    : res.level === "warn" ? '<span style="color:#f57f17;font-weight:700">Umiarkowana</span>'
                    : res.level === "synergy" ? '<span style="color:#2e7d32;font-weight:700">Synergia</span>' /* taste-skill-ignore */
                    : '<span style="color:#666">Brak kolizji</span>';
                  rows.push(`
                    <tr>
                      <td><b>${esc(list[i].n)}</b>+ <b>${esc(list[j].n)}</b></td>
                      <td>${badge}</td>
                      <td>
                        <div style="font-weight:600">${esc(res.title)}</div>
                        ${res.sharedCyps.length ? `<div style="font-size:13px;color:#555">Wspólne izoenzymy CYP: <b>${esc(res.sharedCyps.join(", "))}</b></div>`: ""}
                        ${res.sharedHubs.length ? `<div style="font-size:13px;color:#c62828">Wspólne węzły ryzyka: ${esc(res.sharedHubs.join(", "))}</div>`: ""}
                        ${res.sharedTargets.length ? `<div style="font-size:13px;color:#2e7d32">Wspólne cele molekularne: ${esc(res.sharedTargets.join(", "))}</div>`: ""}
                      </td>
                    </tr>
                  `);
                }
              }
              return rows.length ? rows.join("") : '<tr><td colspan="3" style="text-align:center;color:#777">Stack zawiera tylko 1 substancję – brak par do analizy.</td></tr>';
            })()}
          </tbody>
        </table>
      </div>

      <div class="dossier-section">
        <div class="dossier-sec-title">4. Zalecenia Monitorowania Klinicznego</div>
        <ul style="margin:4px 0 0 18px;padding:0;font-size:13px;line-height:1.6;color:#333">
          ${alerts.some((a) =>a.title && a.title.includes("serotonin")) ? `<li><b>Nadzór neurologiczny:</b>Regularna ocena objawów zespołu serotoninowego (klonusy, wzmożenie odruchów, hipertermia, pobudzenie psychoruchowe).</li>`: ""}
          ${alerts.some((a) =>a.title && a.title.includes("oddech")) ? `<li><b>Monitorowanie parametrów życiowych:</b>Monitorowanie wysycenia hemoglobiny tlenem (SpO2) oraz częstości oddechów w przypadku jednoczesnej sedacji.</li>`: ""}
          ${alerts.some((a) =>a.title && a.title.includes("CYP")) ? `<li><b>Kontrola metaboliczna i TDM:</b>Rozważenie terapeutycznego monitorowania stężenia leków (TDM) przy konkurencji o wspólne izoenzymy cytochromu P450.</li>`: ""}
          ${alerts.some((a) =>a.title && a.title.includes("sercowo")) ? `<li><b>Kontrola kardiologiczna:</b>Okresowe pomiary ciśnienia tętniczego, tętna oraz badanie EKG (ocena odstępu QTc).</li>`: ""}
          <li><b>Edukacja pacjenta:</b>Poinformowanie o konieczności natychmiastowego zgłaszania zawrotów głowy, niemiarowości serca, duszności lub nadmiernej senności.</li>
        </ul>
      </div>

      <div style="margin-top:30px;padding-top:12px;border-top:1px solid #eceef2;display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#444">
        <div>Pharma-vault Clinical Intelligence Engine v3.13.0 · Wygenerowano: ${dateStr}</div>
        <div>Dokument informacyjno-badawczy · Nie stanowi porady lekarskiej</div>
      </div>
    `;
  }

  function generateCompoundDossierMarkdown(c) {
    if (!c) return "# Błąd: Brak danych substancji";
    const dateStr = new Date().toISOString().slice(0, 10);
    const g = GR[c.g] || { label: "Nieznana" };
    const cl = G.clusters[c.c] ? CL_PL[G.clusters[c.c].name] : "Inne";
    const k = c.pk || {};
    const pr = c.pr || [];

    const lines = [
      `# Monografia Kliniczna: ${c.n}`,
      "",
      `>Dokument wygenerowany automatycznie przez Pharma-vault Clinical Intelligence Engine (${dateStr}).`,
      "",
      `**Klasyfikacja:** ${cl} · ${g.label}`,
      `**ChEMBL ID:** \`${c.id}\`${c.cid ? `· **PubChem CID:** \`${c.cid}\``: ""}`,
      c.ik ? `**InChIKey:** \`${c.ik}\``: "",
      "",
      "## 1. Właściwości fizykochemiczne",
      "| Parametr | Wartość |",
      "| :--- | :--- |",
      `| Wzór sumaryczny | ${c.mf || "–"} |`,
      `| Masa cząsteczkowa (MW) | ${pr[0] != null ? pr[0] + " g/mol" : "–"} |`,
      `| Lipofilowość (ALogP) | ${pr[1] != null ? pr[1] : "–"} |`,
      `| Polar Surface Area (PSA) | ${pr[2] != null ? pr[2] + " Å²" : "–"} |`,
      `| Reguła 5 Lipińskiego | ${pr[3] != null ? (pr[3] === 0 ? "Spełniona (0 naruszeń)" : `${pr[3]} naruszeń`) : "–"} |`,
      "",
      "## 2. Status regulacyjny i walidacja etykiet",
      "| Rejestr | Status | Adnotacja kliniczna |",
      "| :--- | :--- | :--- |",
      `| ChEMBL Development | ${c.ph ? `Faza ${c.ph}`: "Przedkliniczna"} | ${c.ph === 4 ? "Approved" : "Investigational"} |`,
      `| FDA Label | ${c.v ? (c.v.s === "consistent" ? "Zgodny" : "Rozbieżny") : "–"} | ${c.v && c.v.c ? c.v.c : "Brak uwag"} |`,
      `| EMA / ChPL Label | ${c.ve ? (c.ve.s === "consistent" ? "Zgodny" : "Rozbieżny") : "–"} | ${c.ve && c.ve.c ? c.ve.c : "Brak uwag"} |`,
      "",
      "## 3. Farmakokinetyka (ADME)",
      "| Parametr ADME | Wartość |",
      "| :--- | :--- |",
      `| Okres półtrwania (T½) | ${k.hl != null ? k.hl + " h" : "Brak danych"} |`,
      `| Wiązanie z białkami osocza | ${k.pb != null ? k.pb + " %" : "Brak danych"} |`,
      `| Biodostępność | ${k.ba != null ? k.ba + " %" : "Brak danych"} |`,
      `| Izoenzymy CYP | ${k.cyp && k.cyp.length ? k.cyp.join(", ") : "–"} |`,
      `| Droga metabolizmu | ${k.met || "Brak danych"} |`,
      `| Eliminacja / Wydalanie | ${k.ren || k.ex || "Brak danych"} |`,
      "",
      "## 4. Mechanizm Działania (MoA)",
      c.m ? c.m.replace(/\|/g, "\n- ") : "Brak zarejestrowanego mechanizmu.",
      "",
      "## 5. Cele Molekularne",
      (c.tg || []).map((ti) =>`- **${T[ti] ? T[ti].n : "Cel"}** (${T[ti] ? T[ti].k : "–"})`).join("\n") || "Brak bezpośrednich celów.",
      "",
      c.bb ? ">[!danger] **Black Box Warning:** Substancja objęta najwyższym ostrzeżeniem bezpieczeństwa FDA.\n" : "",
      c.wd ? ">[!warning] **Withdrawn:** Związek wycofany z rynku.\n" : "",
      "",
      "---",
      "*(Raport informacyjny wygenerowany przez Pharma-vault)*"
    ];
    return lines.filter((l) =>l !== "").join("\n");
  }

  function generateStackDossierMarkdown(stackIndices) {
    const list = (stackIndices || []).map((i) =>C[i]).filter(Boolean);
    const dateStr = new Date().toISOString().slice(0, 10);
    const { alerts } = analyzeStack(list.map((c) =>c.i));
    const risk = calculateStackRiskMetrics(list.map((c) =>c.i));

    const lines = [
      `# Raport Polipragmazji: Stack ${list.length} Substancji`,
      "",
      `>Wygenerowano przez Pharma-vault Clinical Intelligence Engine (${dateStr}).`,
      "",
      `**Stack Risk Score:** \`${risk.totalScore} / 100\`(${risk.label})`,
      "",
      "## 1. Skład Zestawu",
      "| Lek | Grupa | T½ | CYP | Wskazanie / Mechanizm |",
      "| :--- | :--- | :--- | :--- | :--- |",
      ...list.map((c) =>`| **${c.n}** | ${GR[c.g] ? GR[c.g].label : "–"} | ${c.pk && c.pk.hl != null ? c.pk.hl + " h" : "–"} | ${c.pk && c.pk.cyp ? c.pk.cyp.join(", ") : "–"} | ${c.m ? c.m.split("|")[0] : "–"} |`),
      "",
      "## 2. Indeks Toksyczności & Osie Narządowe",
      "| Oś narządowa | Wskaźnik obciążenia | Znaczenie kliniczne |",
      "| :--- | :--- | :--- |",
      `|  Sercowo-naczyniowa | **${risk.axes.cardio}%** | Arytmie (hERG / QTc), skoki ciśnienia, tachykardia |`,
      `|  Wątrobowa / CYP | **${risk.axes.hepatic}%** | Konkurencja o enzymy CYP, retencja leków, ryzyko krwawień |`,
      `|  OUN / Mózgowa | **${risk.axes.cns}%** | Depresja oddechowa, zespół serotoninowy, drgawki |`,
      `|  Autonomiczna | **${risk.axes.autonomic}%** | Zespół antycholinergiczny (ACB), sedacja |`,
      "",
      "## 3. Wykryte Kolizje i Alerty",
      ...(alerts.length ? alerts.map((a) =>`### ${a.title}\n${a.desc}\n`) : ["*Brak zidentyfikowanych krytycznych kolizji wielolekowych.*"]),
      "",
      "## 4. Macierz Parowa",
      "| Para leków | Poziom | Szczegóły |",
      "| :--- | :--- | :--- |"
    ];

    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const res = evaluatePairwiseInteraction(list[i], list[j]);
        lines.push(`| ${list[i].n} + ${list[j].n} | ${res.level.toUpperCase()} | ${res.title} |`);
      }
    }

    lines.push("", "---", "*(Dokument informacyjno-badawczy Pharma-vault)*");
    return lines.join("\n");
  }

  function openDossierModal(mode, target) {
    const modal = $("dossierModal");
    const sheet = $("dossierSheet");
    const subtitle = $("dossierSubtitle");
    if (!modal || !sheet) return;

    activeDossierMode = mode || "single";

    if (activeDossierMode === "stack") {
      const list = Array.isArray(target) ? target : [...state.stack];
      activeDossierTarget = list;
      if (subtitle) subtitle.textContent = `Raport Polipragmazji (${list.length} substancji)`;
      sheet.innerHTML = generateStackDossierHtml(list);
    } else {
      let c = null;
      if (typeof target === "number") c = C[target];
      else if (target && target.n) c = target;
      else if (state.sel && state.sel.type === "compound") c = C[state.sel.i];
      else if (state.stack.size >0) c = C[[...state.stack][0]];
      else c = C[0];

      activeDossierTarget = c ? c.i : 0;
      if (subtitle) subtitle.textContent = `Monografia: ${c ? c.n : ""}`;
      sheet.innerHTML = generateCompoundDossierHtml(c);
    }

    openDialog(modal);
  }

  function closeDossierModal() {
    const modal = $("dossierModal");
    if (modal) closeDialog(modal);
    activeDossierMode = null;
    activeDossierTarget = null;
    if (typeof syncWorkspaceModeToOpenModals === "function") syncWorkspaceModeToOpenModals();
  }

  // ---------- Stack Builder & Interaction Checker
  function loadSavedStack() {
    try {
      const raw = localStorage.getItem("pv_stack");
      if (raw) {
        const ids = JSON.parse(raw);
        if (Array.isArray(ids)) {
          ids.forEach((id) =>{
            const idx = C.findIndex((c) =>c.id === id);
            if (idx >= 0) state.stack.add(idx);
          });
        }
      }
    } catch (_) {}
  }

  function saveStack() {
    try {
      const ids = [...state.stack].map((i) =>C[i].id);
      localStorage.setItem("pv_stack", JSON.stringify(ids));
    } catch (_) {}
  }

  function toggleInStack(idx) {
    const c = C[idx];
    if (state.stack.has(idx)) {
      state.stack.delete(idx);
      if (typeof showToast === "function" && c) showToast(`Usunięto ${c.n} ze stacka`, "info");
    } else {
      state.stack.add(idx);
      if (typeof showToast === "function" && c) showToast(`Dodano ${c.n} do stacka (${state.stack.size} leków)`, "success");
    }
    saveStack();
    updateStackUI();
    if (state.sel && state.sel.type === "compound") select(state.sel);
    if (typeof updateBreadcrumbs === "function") updateBreadcrumbs(state.sel);
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
    if (typeof syncWorkspaceModeToOpenModals === "function") syncWorkspaceModeToOpenModals();
  }

  function analyzeStack(indices) {
    if (indices.length < 2) return { alerts: [], pairs: [], maxLevel: "ok" };
    const alerts = [];
    const pairs = [];
    const stackCompounds = indices.map((i) =>C[i]);

    // 1. Serotonin Toxicity (Critical)
    if (HUB_SEROTONIN >= 0) {
      const hits = stackCompounds.filter((c) =>c.l && c.l.includes(HUB_SEROTONIN));
      if (hits.length >= 2) {
        alerts.push({
          level: "crit",
          title: " Ryzyko zespołu serotoninowego",
          desc: `Substancje <b>${hits.map((c) =>esc(c.n)).join("</b>i <b>")}</b>nasilają transmisję serotoninergiczną. Jednoczesne stosowanie stwarza bezpośrednie zagrożenie zagrażającym życiu zespołem serotoninowym (hipertermia, sztywność mięśniowa, drgawki).`,
          compounds: hits.map((c) =>c.i),
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
      const hits = stackCompounds.filter((c) =>c.l && c.l.includes(HUB_RESPIRATORY));
      if (hits.length >= 2) {
        alerts.push({
          level: "crit",
          title: " Ryzyko ciężkiej depresji oddechowej",
          desc: `Substancje <b>${hits.map((c) =>esc(c.n)).join("</b>i <b>")}</b>wykazują hamujący wpływ na ośrodek oddechowy (np. opioidy, agonisty/modulatory GABA-A, sedatywy). Ich łączenie wielokrotnie zwiększa ryzyko śpiączki i zapaści oddechowej.`,
          compounds: hits.map((c) =>c.i),
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
    stackCompounds.forEach((c) =>{
      const cyps = (c.pk && c.pk.cyp) || [];
      cyps.forEach((enz) =>{
        if (!cypMap.has(enz)) cypMap.set(enz, []);
        cypMap.get(enz).push(c);
      });
    });
    cypMap.forEach((hits, enz) =>{
      if (hits.length >= 2) {
        alerts.push({
          level: "mod",
          title: `Wąskie gardło CYP: izoenzym ${esc(enz)}`,
          desc: `Substancje <b>${hits.map((c) =>esc(c.n)).join("</b>oraz <b>")}</b>są metabolizowane przez ten sam szlak enzymatyczny (${esc(enz)}). Może dojść do konkurencji metabolicznej, wydłużenia okresu półtrwania i nieprzewidywalnego wzrostu stężenia leku w surowicy.`,
          compounds: hits.map((c) =>c.i),
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
      const hits = stackCompounds.filter((c) =>c.l && c.l.includes(HUB_CARDIO));
      if (hits.length >= 2) {
        alerts.push({
          level: "mod",
          title: " Kumulacja obciążenia sercowo-naczyniowego",
          desc: `Substancje <b>${hits.map((c) =>esc(c.n)).join("</b>i <b>")}</b>wykazują działanie stymulujące lub sympatykomimetyczne. Łączenie może prowadzić do nadmiernej tachykardii, skoków ciśnienia i obciążenia mięśnia sercowego.`,
          compounds: hits.map((c) =>c.i),
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
      const hits = stackCompounds.filter((c) =>c.l && c.l.includes(HUB_CHOLINERGIC));
      if (hits.length >= 2) {
        alerts.push({
          level: "mod",
          title: " Zwiększone obciążenie cholinergiczne",
          desc: `Substancje <b>${hits.map((c) =>esc(c.n)).join("</b>i <b>")}</b>nasilają transmisję acetylocholinową. Ryzyko objawów cholinergicznych (bóle brzucha, skurcze, bradykardia, zaburzenia nastroju).`,
          compounds: hits.map((c) =>c.i),
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
      const hits = stackCompounds.filter((c) =>c.l && c.l.includes(HUB_HORMONAL));
      if (hits.length >= 2) {
        alerts.push({
          level: "mod",
          title: " Tłumienie osi podwzgórze-przysadka-gonady (HPG)",
          desc: `Substancje <b>${hits.map((c) =>esc(c.n)).join("</b>i <b>")}</b>wywierają ujemne sprzężenie zwrotne na wydzielanie hormonów endogennych (LH, FSH, testosteron). Wymagają protokołów odblokowujących (PCT) i kontroli laboratoryjnej.`,
          compounds: hits.map((c) =>c.i),
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
    stackCompounds.forEach((c) =>{
      (c.tg || []).forEach((t) =>{
        if (!targetMap.has(t)) targetMap.set(t, []);
        targetMap.get(t).push(c);
      });
    });
    targetMap.forEach((hits, t) =>{
      if (hits.length >= 2) {
        alerts.push({
          level: "info",
          title: `ℹ Wspólny cel molekularny: ${esc(T[t].n)}`,
          desc: `Substancje <b>${hits.map((c) =>esc(c.n)).join("</b>oraz <b>")}</b>wiążą ten sam cel (${esc(T[t].n)}${T[t].ty ? " · " + esc(T[t].ty) : ""}). Wskazuje na redundancję mechanizmu lub sumowanie powinowactwa receptorowego.`,
          compounds: hits.map((c) =>c.i),
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
    stackCompounds.forEach((c) =>{
      (c.atc || []).forEach(([code, name]) =>{
        const code4 = code.slice(0, 4);
        if (!atcMap.has(code4)) atcMap.set(code4, { name: name || code4, compounds: [] });
        atcMap.get(code4).compounds.push(c);
      });
    });
    atcMap.forEach(({ name, compounds: hits }, code4) =>{
      const uniqHits = [...new Set(hits)];
      if (uniqHits.length >= 2) {
        alerts.push({
          level: "info",
          title: `ℹ Ta sama klasa ATC (${esc(code4)})`,
          desc: `Substancje <b>${uniqHits.map((c) =>esc(c.n)).join("</b>i <b>")}</b>należą do tej samej grupy terapeutycznej (<i>${esc(name)}</i>).`,
          compounds: uniqHits.map((c) =>c.i),
        });
        for (let j = 0; j < uniqHits.length; j++) {
          for (let k = j + 1; k < uniqHits.length; k++) {
            pairs.push({ a: uniqHits[j].i, b: uniqHits[k].i, level: "info" });
          }
        }
      }
    });

    const maxLevel = alerts.some((a) =>a.level === "crit")
      ? "crit"
      : alerts.some((a) =>a.level === "mod")
      ? "mod"
      : alerts.some((a) =>a.level === "info")
      ? "info"
      : "ok";

    return { alerts, pairs, maxLevel };
  }

  // ---------- Pharmacokinetic Simulator & Collision Window Engine
  function getCompoundTh(c) {
    if (state.sim.compounds[c.i] && state.sim.compounds[c.i].tHalf >0) {
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
    const tau = interval >0 ? interval : 0;
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
    const relevantAlerts = (alerts || []).filter((a) =>a.level === "crit" || a.level === "mod");
    if (!relevantAlerts.length || indices.length < 2) return [];

    const collidingPairs = new Map();
    relevantAlerts.forEach((a) =>{
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

    collidingPairs.forEach((level, key) =>{
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

    windows.sort((a, b) =>a.start - b.start);
    const merged = [];
    windows.forEach((w) =>{
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

    const stackCompounds = stackIndices.map((i) =>C[i]);
    const maxTh = Math.max(...stackCompounds.map((c) =>getCompoundTh(c)));
    let horizon = 24;
    if (state.sim.horizon === "24") horizon = 24;
    else if (state.sim.horizon === "48") horizon = 48;
    else if (state.sim.horizon === "168") horizon = 168;
    else {
      horizon = Math.min(168, Math.max(24, Math.ceil((maxTh * 3.5) / 12) * 12));
    }

    const simCurves = {};
    let maxC = 120;
    stackCompounds.forEach((c) =>{
      const th = getCompoundTh(c);
      const ke = Math.LN2 / th;
      const tMax = getCompoundTmax(c, th);
      const ka = solveKa(ke, tMax);
      const interval = getCompoundInterval(c);
      const curve = simulateCompoundCurve(ke, ka, tMax, interval, horizon);
      simCurves[c.i] = curve;
      curve.forEach((pt) =>{ if (pt.c >maxC) maxC = pt.c; });
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

    const toX = (t) =>padL + (t / horizon) * pw;
    const toY = (cVal) =>(padT + ph) - (cVal / yMax) * ph;

    ctx.clearRect(0, 0, w, h);

    // Horizontal grid lines
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    const ySteps = yMax >220 ? [0, 100, 200] : [0, 50, 100];
    ySteps.forEach((yVal) =>{
      const y = toY(yVal);
      ctx.strokeStyle = yVal === 100 ? css("--color-chart-gridline") : `${css("--color-chart-gridline")}80`;
      ctx.setLineDash(yVal === 100 ? [3, 3] : [2, 4]);
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + pw, y);
      ctx.stroke();
      ctx.fillStyle = css("--color-chart-label");
      ctx.fillText(yVal + "%", padL - 4, y);
    });

    // Vertical time grid lines
    ctx.setLineDash([2, 4]);
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    const tInterval = horizon <= 24 ? 6 : horizon <= 48 ? 12 : 24;
    for (let t = 0; t <= horizon; t += tInterval) {
      const x = toX(t);
      ctx.strokeStyle = `${css("--color-chart-gridline")}80`;
      ctx.beginPath();
      ctx.moveTo(x, padT);
      ctx.lineTo(x, padT + ph);
      ctx.stroke();
      ctx.fillStyle = css("--color-chart-label");
      ctx.fillText(t + "h", x, padT + ph + 4);
    }
    ctx.setLineDash([]);

    // Collision windows shading
    windows.forEach((win) =>{
      const x1 = Math.max(padL, toX(win.start));
      const x2 = Math.min(padL + pw, toX(win.end));
      if (x2 >x1) {
        const riskColor = css(win.level === "crit" ? "--color-risk-critical" : "--color-risk-moderate");
        ctx.fillStyle = `${riskColor}2e`;
        ctx.fillRect(x1, padT, x2 - x1, ph);
        ctx.strokeStyle = `${riskColor}99`;
        ctx.lineWidth = 1;
        ctx.strokeRect(x1, padT, x2 - x1, ph);

        ctx.fillStyle = riskColor;
        ctx.font = "bold 9px sans-serif";
        ctx.textAlign = "left";
        ctx.fillText("Kolizja", x1 + 3, padT + 3);
      }
    });

    // Concentration curves
    stackCompounds.forEach((c) =>{
      const curve = simCurves[c.i];
      if (!curve || !curve.length) return;
      ctx.strokeStyle = clusterColor(c.c) || "#4f98a3";
      ctx.lineWidth = 2.0;
      ctx.beginPath();
      curve.forEach((pt, idx) =>{
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
      stackCompounds.forEach((c) =>{
        const curve = simCurves[c.i];
        if (!curve) return;
        const stepIdx = Math.min(curve.length - 1, Math.max(0, Math.round((hoverT / horizon) * (curve.length - 1))));
        const pt = curve[stepIdx];
        const hy = toY(pt.c);
        ctx.fillStyle = clusterColor(c.c) || "#4f98a3";
        ctx.beginPath();
        ctx.arc(hx, hy, 4, 0, 7);
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        tooltipLines.push(`<span style="color:var(--color-cluster-${c.c})">●</span>${esc(c.n.slice(0, 16))}: <b>${Math.round(pt.c)}%</b>`);
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
    p.ids.forEach((id) =>{
      const idx = C.findIndex((c) =>c.id === id);
      if (idx >= 0) state.stack.add(idx);
    });
    saveStack();
    updateStackUI();
    if (state.sel && state.sel.type === "compound") select(state.sel);
    draw();
  }

  // ---------- Pairwise Interaction Matrix (N x N)
  // ---------- Pairwise Interaction Matrix (N x N) & DDI Risk Engine (v3.23.0)
  function evaluatePairwiseInteraction(cA, cB) {
    if (cA.i === cB.i) {
      return {
        isDiag: true,
        level: "diag",
        icon: "●",
        title: cA.n,
        badge: "Substancja",
        vector: "diag",
        desc: `Pojedyncza substancja: ${esc(cA.n)} (${esc(GR[cA.g].label)})`,
        sharedCyps: (cA.pk && cA.pk.cyp) || [],
        sharedHubs: (cA.l || []).filter((li) =>CORE[li].kind === "hub").map((li) =>CORE[li].name),
        sharedTargets: (cA.tg || []).map((ti) =>T[ti].n),
        cA, cB
      };
    }

    const cypsA = (cA.pk && cA.pk.cyp) || [];
    const cypsB = (cB.pk && cB.pk.cyp) || [];
    const sharedCyps = cypsA.filter((x) =>cypsB.includes(x));

    const hubsA = (cA.l || []).filter((li) =>CORE[li].kind === "hub").map((li) =>CORE[li].name);
    const hubsB = (cB.l || []).filter((li) =>CORE[li].kind === "hub").map((li) =>CORE[li].name);
    const sharedHubs = hubsA.filter((x) =>hubsB.includes(x));

    const tgA = cA.tg || [];
    const tgB = cB.tg || [];
    const sharedTargets = tgA.filter((ti) =>tgB.includes(ti)).map((ti) =>T[ti].n);

    // 1. Check curated specific pair rules
    const pairKey = `${cA.id}::${cB.id}`;
    const specificRule = DDI_SPECIFIC_PAIRS.get(pairKey);
    if (specificRule) {
      const isCrit = specificRule.severity === "critical";
      const badges = {
        cyp: `${specificRule.enzyme || 'CYP'}`,
        qtc: " QTc",
        serotonin: " 5-HT",
        sedation: " OUN",
        anticholinergic: " ACB",
        triple_whammy: " Triple Whammy",
        bleeding: " Krwotok"
      };
      return {
        isDiag: false,
        level: isCrit ? "danger" : "warn",
        icon: isCrit ? "" : "",
        title: specificRule.title_pl,
        vector: specificRule.vector,
        badge: badges[specificRule.vector] || (isCrit ? " Kolizja" : " Uwaga"),
        description: specificRule.description_pl,
        clinicalConsequence: specificRule.clinical_consequence,
        monitoring: specificRule.monitoring_recommendation,
        sharedCyps,
        sharedHubs,
        sharedTargets,
        cA, cB
      };
    }

    // 2. Check general CYP enzyme profiles (Inhibitor + Substrate collision)
    const enzA = (DDI_RULES.enzyme_profiles && DDI_RULES.enzyme_profiles[cA.id]) || null;
    const enzB = (DDI_RULES.enzyme_profiles && DDI_RULES.enzyme_profiles[cB.id]) || null;
    let cypCollision = null;
    if (enzA && enzB) {
      (enzA.inhibits || []).forEach((inh) =>{
        if ((enzB.substrate_of || []).includes(inh.enzyme)) {
          cypCollision = { inhibitor: cA, substrate: cB, enzyme: inh.enzyme, potency: inh.potency };
        }
      });
      (enzB.inhibits || []).forEach((inh) =>{
        if ((enzA.substrate_of || []).includes(inh.enzyme)) {
          cypCollision = { inhibitor: cB, substrate: cA, enzyme: inh.enzyme, potency: inh.potency };
        }
      });
    }
    if (cypCollision) {
      const isStr = cypCollision.potency === "strong";
      return {
        isDiag: false,
        level: isStr ? "danger" : "warn",
        icon: isStr ? "" : "",
        title: `Inhibicja ${cypCollision.enzyme} (${cypCollision.inhibitor.n}  ${cypCollision.substrate.n})`,
        vector: "cyp",
        badge: `${cypCollision.enzyme}`,
        description: `${cypCollision.inhibitor.n} hamuje metabolizm ${cypCollision.substrate.n} przez ${cypCollision.enzyme}. Prowadzi to do podwyższenia stężenia i ryzyka toksyczności.`,
        clinicalConsequence: `Wzrost AUC i stężenia osoczowego ${cypCollision.substrate.n}; ryzyko przedawkowania względnego.`,
        monitoring: `Zalecane monitorowanie stężenia leku i ew. redukcja dawki substratu.`,
        sharedCyps, sharedHubs, sharedTargets, cA, cB
      };
    }

    // 3. Check Pharmacodynamic profiles
    const pdA = (DDI_RULES.pd_profiles && DDI_RULES.pd_profiles[cA.id]) || {};
    const pdB = (DDI_RULES.pd_profiles && DDI_RULES.pd_profiles[cB.id]) || {};

    // QTc / hERG prolongation
    if ((pdA.qtc_risk === "high" && pdB.qtc_risk === "high") ||
        (pdA.qtc_risk === "high" && pdB.qtc_risk === "moderate") ||
        (pdA.qtc_risk === "moderate" && pdB.qtc_risk === "high")) {
      return {
        isDiag: false,
        level: "danger",
        icon: "",
        title: "Wydłużenie Odstępu QTc (Kardiotoksyczność)",
        vector: "qtc",
        badge: " QTc",
        description: `Obie substancje (${cA.n} i ${cB.n}) blokują kanały potasowe hERG w miocytach serca.`,
        clinicalConsequence: "Ryzyko groźnych dla życia komorowych zaburzeń rytmu (Torsades de Pointes).",
        monitoring: "Wymagany wyjściowy i kontrolny zapis EKG (pomiar QTc); korekta elektrolitów K+, Mg2+.",
        sharedCyps, sharedHubs, sharedTargets, cA, cB
      };
    }

    // Serotonin toxicity
    if (pdA.serotonergic_potency === "high" && pdB.serotonergic_potency === "high") {
      return {
        isDiag: false,
        level: "danger",
        icon: "",
        title: "Ryzyko Zespołu Serotoninowego (Krytyczna Synergia)",
        vector: "serotonin",
        badge: " 5-HT",
        description: `Jednoczesna silna stymulacja przewodnictwa serotoninergicznego przez ${cA.n} oraz ${cB.n}.`,
        clinicalConsequence: "Zagrożenie hipertermią, miokloniami, sztywnością i niestabilnością autonomiczną.",
        monitoring: "Edukacja pacjenta w zakresie wczesnych objawów; unikać jednoczesnego stosowania.",
        sharedCyps, sharedHubs, sharedTargets, cA, cB
      };
    }

    // CNS / Respiratory Depression
    if (pdA.sedative_potency === "high" && pdB.sedative_potency === "high") {
      return {
        isDiag: false,
        level: "danger",
        icon: "",
        title: "Głęboka Depresja OUN & Ośrodka Oddechowego",
        vector: "sedation",
        badge: " OUN",
        description: `Synergistyczne hamowanie pnia mózgu i kory mózgowej przez ${cA.n} i ${cB.n}.`,
        clinicalConsequence: "Ryzyko bezdechu sennego, hipoksji, głębokiej sedacji i śpiączki.",
        monitoring: "Ścisły nadzór oddechowy; w razie konieczności dostępność odtrutek (nalokson/flumazenil).",
        sharedCyps, sharedHubs, sharedTargets, cA, cB
      };
    }

    // Anticholinergic Cognitive Burden
    const totalAcb = (pdA.acb_score || 0) + (pdB.acb_score || 0);
    if (totalAcb >= 4) {
      return {
        isDiag: false,
        level: "danger",
        icon: "",
        title: `Ciężkie Obciążenie Antycholinergiczne (ACB: ${totalAcb})`,
        vector: "anticholinergic",
        badge: `ACB ${totalAcb}`,
        description: `Kumulatywna blokada receptorów muskarynowych przez ${cA.n} (ACB ${pdA.acb_score || 0}) oraz ${cB.n} (ACB ${pdB.acb_score || 0}).`,
        clinicalConsequence: "Ryzyko majaczenia, zaburzeń poznawczych, tachykardii, ostrego zatrzymania moczu.",
        monitoring: "Szczególna ostrożność u osób w podeszłym wieku; rozważyć leki alternatywne.",
        sharedCyps, sharedHubs, sharedTargets, cA, cB
      };
    }

    // Bleeding risk
    if (pdA.bleeding_risk && pdB.bleeding_risk) {
      return {
        isDiag: false,
        level: "danger",
        icon: "",
        title: "Zwiększone Ryzyko Krwawień z Przewodu Pokarmowego",
        vector: "bleeding",
        badge: " Krwotok",
        description: `Skojarzenie leków o działaniu przeciwpłytkowym, przeciwkrzepliwym lub uszkadzającym błonę śluzową.`,
        clinicalConsequence: "Zwiększone ryzyko krwotoków, smolistych stolców i anemii pokrwotocznej.",
        monitoring: "Zalecana gastroprotekcja (IPP) oraz monitorowanie morfologii krwi.",
        sharedCyps, sharedHubs, sharedTargets, cA, cB
      };
    }

    // Triple Whammy / Renal
    if (pdA.nephrotoxic && pdB.nephrotoxic) {
      return {
        isDiag: false,
        level: "warn",
        icon: "",
        title: "Kumulatywna Nefrotoksyczność & Spadek Filtracji",
        vector: "triple_whammy",
        badge: " Nerki",
        description: `Obie substancje (${cA.n} i ${cB.n}) obciążają układ hemostazy kłębuszkowej lub kanalikowej.`,
        clinicalConsequence: "Ryzyko pogorszenia funkcji nerek, retencji płynów i hiperkaliemii.",
        monitoring: "Kontrola eGFR, kreatyniny i elektrolitów.",
        sharedCyps, sharedHubs, sharedTargets, cA, cB
      };
    }

    // 4. Fallback: Hubs, CYPs, Targets
    const critHubKeywords = ["seroton", "oddech", "cardio", "krążen", "sympath", "ciśnien", "drgaw", "qt"];
    const hasCritHub = sharedHubs.some((h) =>critHubKeywords.some((k) =>h.toLowerCase().includes(k)));

    let level = "clear";
    let icon = "";
    let title = "Brak znanych bezpośrednich kolizji";
    let badge = "OK Czysto";
    let vector = "clear";

    if (hasCritHub || sharedCyps.length >= 2) {
      level = "danger";
      icon = "";
      vector = hasCritHub ? "hub" : "cyp";
      badge = hasCritHub ? " Hub" : " CYP";
      title = hasCritHub
        ? `Krytyczna kumulacja ryzyka (${sharedHubs.join(", ")})`
        : `Wielokrotne wąskie gardło CYP (${sharedCyps.join(", ")})`;
    } else if (sharedCyps.length === 1 || sharedHubs.length >= 1) {
      level = "warn";
      icon = "";
      vector = sharedCyps.length === 1 ? "cyp" : "hub";
      badge = sharedCyps.length === 1 ? " CYP" : " Hub";
      title = sharedCyps.length === 1
        ? `Wspólny metabolizm przez ${sharedCyps[0]}`
        : `Nakładanie hubu ryzyka: ${sharedHubs.join(", ")}`;
    } else if (sharedTargets.length >0) {
      level = "synergy"; /* taste-skill-ignore */
      icon = "";
      vector = "target";
      badge = "◎ Cel";
      title = `Wspólny cel molekularny: ${sharedTargets[0]}${sharedTargets.length >1 ? `(+${sharedTargets.length - 1})`: ''}`;
    }

    return {
      isDiag: false,
      level,
      icon,
      title,
      badge,
      vector,
      description: title,
      clinicalConsequence: level === "danger" ? "Ryzyko kumulacji obciążeń narządowych." : "",
      monitoring: level === "danger" ? "Obserwacja stanu klinicznego pacjenta." : "",
      sharedCyps,
      sharedHubs,
      sharedTargets,
      cA, cB
    };
  }

  function buildMatrixHtml(stackList) {
    if (stackList.length < 2) {
      return `
        <div class="pk-box" style="text-align:center;padding:1.5rem 0.5rem;color:var(--color-text-muted)">
          <div style="font-size:1.6rem;margin-bottom:.3rem"></div>
          <b style="color:var(--color-text);font-size:var(--text-sm)">Macierz wymaga min. 2 substancji</b>
          <p style="font-size:13px;margin-top:4px">Dodaj kolejny lek do stacka, aby przeanalizować wszystkie relacje parowe N×N.</p>
        </div>`;
    }

    const n = stackList.length;
    let selectedPair = state.selectedMatrixPair;
    if (selectedPair) {
      const hasA = stackList.some((c) =>c.i === selectedPair[0]);
      const hasB = stackList.some((c) =>c.i === selectedPair[1]);
      if (!hasA || !hasB) selectedPair = null;
    }
    if (!selectedPair) {
      let bestPair = [stackList[0].i, stackList[1].i];
      let bestScore = -1;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const evalRes = evaluatePairwiseInteraction(stackList[i], stackList[j]);
          const score = evalRes.level === "danger" ? 3 : evalRes.level === "warn" ? 2 : evalRes.level === "synergy" ? 1 : 0; /* taste-skill-ignore */
          if (score >bestScore) {
            bestScore = score;
            bestPair = [stackList[i].i, stackList[j].i];
          }
        }
      }
      selectedPair = bestPair;
      state.selectedMatrixPair = selectedPair;
    }

    const colHeaders = stackList.map((c) =>{
      const shortName = c.n.length >8 ? c.n.slice(0, 7) + "…" : c.n;
      return `<th class="matrix-th" title="${esc(c.n)}"><span class="dot" style="background:var(--color-cluster-${c.c});display:inline-block;width:6px;height:6px;margin-right:2px"></span>${esc(shortName)}</th>`;
    }).join("");

    const rows = stackList.map((cA) =>{
      const shortName = cA.n.length >8 ? cA.n.slice(0, 7) + "…" : cA.n;
      const cells = stackList.map((cB) =>{
        const evalRes = evaluatePairwiseInteraction(cA, cB);
        const isSel = selectedPair && ((selectedPair[0] === cA.i && selectedPair[1] === cB.i) || (selectedPair[0] === cB.i && selectedPair[1] === cA.i));
        if (evalRes.isDiag) {
          return `<td class="matrix-cell cell-diag" title="${esc(cA.n)}">●</td>`;
        }
        return `<td class="matrix-cell cell-${evalRes.level} ${isSel ? 'selected' : ''}" role="button" tabindex="0" aria-label="${esc(cA.n)} i ${esc(cB.n)}: ${esc(evalRes.title)}" data-matrix-pair="${cA.i}-${cB.i}" title="${esc(cA.n)} ↔ ${esc(cB.n)}: ${esc(evalRes.title)}">${evalRes.icon}</td>`;
      }).join("");

      return `<tr><th class="matrix-th" style="text-align:right;padding-right:6px" title="${esc(cA.n)}">${esc(shortName)}</th>${cells}</tr>`;
    }).join("");

    const cA = C[selectedPair[0]];
    const cB = C[selectedPair[1]];
    const pairRes = evaluatePairwiseInteraction(cA, cB);

    let detailContent = "";
    if (pairRes.isDiag) {
      detailContent = `<div><b>${esc(cA.n)}</b>: profil substancji pojedynczej.</div>`;
    } else {
      const cypsHtml = pairRes.sharedCyps.length
        ? `<div><b style="color:var(--color-warning)">Wspólne enzymy CYP:</b>${pairRes.sharedCyps.map((c) =>`<span class="tag warn" style="font-weight:700">${esc(c)}</span>`).join("")} <small style="display:block;color:var(--color-text-muted);margin-top:2px">Konkurencja o metabolizm wątrobowy – ryzyko wzrostu stężeń.</small></div>`
        : `<div style="color:var(--color-text-muted)">Brak wspólnych izoenzymów CYP.</div>`;

      const hubsHtml = pairRes.sharedHubs.length
        ? `<div><b style="color:var(--color-error)">Wspólne huby ryzyka:</b>${pairRes.sharedHubs.map((h) =>`<span class="tag warn">${esc(h)}</span>`).join("")} <small style="display:block;color:var(--color-text-muted);margin-top:2px">Sumowanie obciążenia farmakodynamicznego układu.</small></div>`
        : `<div style="color:var(--color-text-muted)">Brak wspólnych krytycznych hubów ryzyka.</div>`;

      const targetsHtml = pairRes.sharedTargets.length
        ? `<div><b style="color:var(--color-success)">Wspólne cele molekularne:</b>${pairRes.sharedTargets.map((t) =>`<span class="tag ok">◎ ${esc(t)}</span>`).join("")}</div>`
        : "";

      detailContent = `
        <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--color-border);padding-bottom:4px">
          <b>${esc(cA.n)} <span style="color:var(--color-text-muted)">↔</span>${esc(cB.n)}</b>
          <span class="tag ${pairRes.level === 'danger' ? 'warn' : pairRes.level === 'warn' ? 'warn' : pairRes.level === 'synergy' ? 'ok' : ''}">${pairRes.icon} ${esc(pairRes.badge || pairRes.title)}</span> /* taste-skill-ignore */
        </div>
        ${pairRes.description && pairRes.description !== pairRes.title ? `<div style="font-size:13px;color:var(--color-text);margin-top:4px">${esc(pairRes.description)}</div>`: ''}
        ${pairRes.clinicalConsequence ? `<div style="font-size:13px;color:var(--color-error);margin-top:4px"><strong>Zagrożenie:</strong>${esc(pairRes.clinicalConsequence)}</div>`: ''}
        ${pairRes.monitoring ? `<div style="font-size:13px;color:var(--color-text-muted);background:var(--color-bg);padding:3px 6px;border-radius:4px;margin-top:4px"><strong>Zalecenie:</strong>${esc(pairRes.monitoring)}</div>`: ''}
        ${cypsHtml}
        ${hubsHtml}
        ${targetsHtml}
      `;
    }

    return `
      <div class="matrix-wrap">
        <table class="matrix-table">
          <thead>
            <tr>
              <th class="matrix-th"></th>
              ${colHeaders}
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
      <div class="matrix-detail-card" id="matrixDetailCard">
        ${detailContent}
      </div>
      <div style="font-size:13px;color:var(--color-text-muted);display:flex;gap:8px;justify-content:center;margin-top:6px">
        <span>Kolizja wysoka</span>
        <span>Ostrzeżenie</span>
        <span>Synergia</span>
        <span>Brak kolizji</span>
      </div>`;
  }

  // ---------- Polypharmacy & DDI Risk Engine (v3.23.0 - v3.30.0)
  function computePolypharmacyScore(stackList) {
    const activeDiet = state.patientDiet || new Set();
    if (!stackList || stackList.length === 0 || (stackList.length === 1 && activeDiet.size === 0)) {
      return {
        score: 0,
        status: "safe",
        statusText: "Bezpieczny Stack",
        summary: stackList && stackList.length === 1 ? "Dodaj leki lub zaznacz dietę" : "Brak wykrytych kolizji",
        color: "#34c759",
        vectors: { cyp: 0, qtc: 0, serotonin: 0, sedation: 0, anticholinergic: 0, renal_bleeding: 0, food: 0 },
        collisions: [],
        totalAcb: 0
      };
    }

    const collisions = [];
    const n = stackList.length;
    let maxCyp = 0, maxQtc = 0, maxSerotonin = 0, maxSedation = 0, totalAcb = 0, maxRenalBleed = 0, maxFood = 0;

    for (let i = 0; i < n; i++) {
      const cA = stackList[i];
      const pdA = (DDI_RULES.pd_profiles && DDI_RULES.pd_profiles[cA.id]) || {};
      totalAcb += (pdA.acb_score || 0);

      for (let j = i + 1; j < n; j++) {
        const cB = stackList[j];
        const res = evaluatePairwiseInteraction(cA, cB);
        if (res.level === "danger" || res.level === "warn") {
          collisions.push(res);
          if (res.vector === "cyp") maxCyp = Math.max(maxCyp, res.level === "danger" ? 100 : 60);
          if (res.vector === "qtc") maxQtc = Math.max(maxQtc, res.level === "danger" ? 100 : 50);
          if (res.vector === "serotonin") maxSerotonin = Math.max(maxSerotonin, res.level === "danger" ? 100 : 50);
          if (res.vector === "sedation") maxSedation = Math.max(maxSedation, res.level === "danger" ? 100 : 50);
          if (res.vector === "triple_whammy" || res.vector === "bleeding") maxRenalBleed = Math.max(maxRenalBleed, res.level === "danger" ? 100 : 50);
        }
      }
    }

    // Check Triple Whammy tri-therapy explicitly (NSAID + ACEI/ARB + Diuretic)
    const hasNsaid = stackList.some((c) =>c.id === "ibuprofen-compound" || (c.m && c.m.toLowerCase().includes("cox")));
    const hasAcei = stackList.some((c) =>c.id === "enalapril-compound" || (c.m && c.m.toLowerCase().includes("ace")));
    const hasDiuretic = stackList.some((c) =>c.id === "hydrochlorothiazide-compound" || c.id === "furosemide-compound" || (c.m && c.m.toLowerCase().includes("diuretic")));
    if (hasNsaid && hasAcei && hasDiuretic) {
      maxRenalBleed = 100;
    }

    // Check DILI & Teratogenicity risks from Toxicology Engine (v3.26.0)
    let mostDiliCount = 0;
    const teratogenCollisions = [];
    stackList.forEach((c) =>{
      const tox = getCompoundToxicologyProfile(c);
      if (tox) {
        if (tox.dili && tox.dili.dilirank === "Most-DILI-concern") {
          mostDiliCount++;
        }
        if (tox.pregnancy_lactation && (tox.pregnancy_lactation.fda_category === "X" || tox.pregnancy_lactation.black_box_teratogen)) {
          teratogenCollisions.push(c);
        }
      }
    });

    if (mostDiliCount >= 2) {
      collisions.push({
        id: "dili_stack_overload",
        level: "danger",
        vector: "dili",
        title_pl: `Skrajne Obciążenie Hepatotoksyczne (Most-DILI × ${mostDiliCount})`,
        description_pl: `Jednoczesne stosowanie ${mostDiliCount} leków o najwyższym stopniu ryzyka uszkodzenia wątroby (FDA Most-DILI-concern). Masywny wzrost ryzyka nekrozy i wejścia w strefę Hy's Law.`,
        clinical_consequence: "Piorunująca martwica wątroby, gwałtowny wzrost ALT >10x ULN i hiperbilirubinemia.",
        monitoring: "Oznaczenie panelu wątrobowego (ALT, AST, ALP, Bilirubina całkowita) przed i w trakcie terapii."
      });
      maxCyp = Math.max(maxCyp, 90);
    }

    if (teratogenCollisions.length >0) {
      collisions.push({
        id: "teratogen_stack_alert",
        level: "danger",
        vector: "teratogen",
        title_pl: " Bezwzględne Zagrożenie Teratogenne (Kategoria X / Czarna Skrzynka)",
        description_pl: `W stacku znajduje się lek o udokumentowanym, ciężkim działaniu teratogennym: ${teratogenCollisions.map((x) =>x.n).join(", ")}. Bezwzględne przeciwwskazanie u kobiet w ciąży.`,
        clinical_consequence: "Embriopatia, ciężkie wady wrodzone twarzoczaszki/OUN/serca lub obumarcie płodu.",
        monitoring: "Weryfikacja testu ciążowego beta-hCG, wdrożenie skutecznej antykoncepcji."
      });
    }

    // Transporter-mediated DDI vectors (v3.28.0)
    const pgpSubstrates = [];
    const pgpInhibitors = [];
    const oatpStatins = [];
    const oatpInhibitors = [];
    const oatSubstrates = [];
    const oatInhibitors = [];
    const octSubstrates = [];
    const octInhibitors = [];

    stackList.forEach((c) =>{
      const tp = getCompoundTransporterProfile(c);
      if (tp && tp.transporters) {
        const t = tp.transporters;
        if (t.pgp && t.pgp.role === "substrate" && (c.id === "loperamide-compound" || c.id === "digoxin-compound" || c.id === "dabigatran-compound" || c.id === "fexofenadine-compound")) {
          pgpSubstrates.push(c);
        }
        if (t.pgp && t.pgp.role === "inhibitor") {
          pgpInhibitors.push(c);
        }
        if (t.oatp1b1 && t.oatp1b1.role === "substrate" && (c.id.includes("statin") || c.n.toLowerCase().includes("statin"))) {
          oatpStatins.push(c);
        }
        if (t.oatp1b1 && t.oatp1b1.role === "inhibitor") {
          oatpInhibitors.push(c);
        }
        if (t.oat1_3 && t.oat1_3.role === "substrate" && (c.id === "methotrexate-compound" || c.id === "furosemide-compound" || c.id === "amoxicillin-compound")) {
          oatSubstrates.push(c);
        }
        if (t.oat1_3 && t.oat1_3.role === "inhibitor") {
          oatInhibitors.push(c);
        }
        if (t.oct2 && t.oct2.role === "substrate" && c.id === "metformin-compound") {
          octSubstrates.push(c);
        }
        if (t.oct2 && t.oct2.role === "inhibitor") {
          octInhibitors.push(c);
        }
      }
    });

    if (pgpSubstrates.length >0 && pgpInhibitors.length >0) {
      collisions.push({
        id: "transporter_pgp_efflux_overload",
        level: "danger",
        vector: "pgp_efflux",
        title_pl: `Przełamanie Efluksu P-gp (${pgpSubstrates.map(x=>x.n).join(", ")} + ${pgpInhibitors.map(x=>x.n).join(", ")})`,
        description_pl: `Zablokowanie pompy efluksowej P-gp (ABCB1) w barierze krew-mózg lub jelicie drastycznie zwiększa biodostępność i penetrację OUN wrażliwego substratu.`,
        clinical_consequence: "Ośrodkowa depresja oddechowa (paradoks loperamidu) lub zagrażająca życiu toksyczność digoksyny/dabigatranu.",
        monitoring: "Ścisłe monitorowanie stężenia leku, EKG, redukcja dawki substratu o 50% lub unikanie skojarzenia."
      });
      maxCyp = Math.max(maxCyp, 85);
    }

    if (oatpStatins.length >0 && oatpInhibitors.length >0) {
      collisions.push({
        id: "transporter_oatp_statin_myopathy",
        level: "danger",
        vector: "oatp_statin",
        title_pl: `Blokada Wychwytu Wątrobowego OATP1B1 (${oatpStatins.map(x=>x.n).join(", ")} + ${oatpInhibitors.map(x=>x.n).join(", ")})`,
        description_pl: `Inhibitor OATP1B1 (cyklosporyna, gemfibrozil) blokuje dokomórkowy transport statyn do hepatocytów, powodując 5-10× wzrost stężenia osoczowego.`,
        clinical_consequence: "Ostra miopatia, mioglobinuria i śmiertelna rabdomioliza z uszkodzeniem nerek.",
        monitoring: "Oznaczenie kinazy fosfokreatynowej (CPK), unikanie skojarzenia lub zmiana statyny."
      });
      maxCyp = Math.max(maxCyp, 90);
    }

    if (oatSubstrates.length >0 && oatInhibitors.length >0) {
      collisions.push({
        id: "transporter_oat_renal_toxicity",
        level: "danger",
        vector: "oat_renal",
        title_pl: `Zablokowanie Sekrecji Nerkowej OAT1/OAT3 (${oatSubstrates.map(x=>x.n).join(", ")} + ${oatInhibitors.map(x=>x.n).join(", ")})`,
        description_pl: `Inhibicja cewkowych transporterów anionów OAT1/3 (NLPZ, probenecyd) zatrzymuje nerkowe wydalanie leku.`,
        clinical_consequence: "Ciężka mielosupresja i nefrotoksyczność metotreksatu lub retencja kwasowa.",
        monitoring: "Monitorowanie morfologii krwi, klirensu kreatyniny i stężenia metotreksatu."
      });
      maxCyp = Math.max(maxCyp, 80);
    }

    if (octSubstrates.length >0 && octInhibitors.length >0) {
      collisions.push({
        id: "transporter_oct_metformin_lactate",
        level: "warning",
        vector: "oct_metformin",
        title_pl: `Zahamowanie Nerkowego Efluksu OCT2/MATE1 (${octSubstrates.map(x=>x.n).join(", ")} + ${octInhibitors.map(x=>x.n).join(", ")})`,
        description_pl: `Inhibitor OCT2 (cymetydyna, dolutegrawir) obniża nerkowy klirens metforminy o 30-50%.`,
        clinical_consequence: "Wzrost ryzyka kwasicy mleczanowej oraz fałszywy pozorny wzrost kreatyniny.",
        monitoring: "Kontrola gazometrii, mleczanów i czynności nerek; redukcja dawki metforminy."
      });
      maxCyp = Math.max(maxCyp, 70);
    }

    // Chemogenomics Shared Off-Target Overload (v3.29.0)
    const offtargetHits = {};
    stackList.forEach((c) =>{
      const otList = (c.cs && c.cs.ot) ? c.cs.ot : [];
      otList.forEach(([gene, score, flag]) =>{
        if (score >= 30) {
          if (!offtargetHits[gene]) offtargetHits[gene] = [];
          offtargetHits[gene].push({ c, score, flag });
        }
      });
    });

    Object.entries(offtargetHits).forEach(([gene, hits]) =>{
      if (hits.length >= 2) {
        const flag = hits[0].flag;
        const isHerg = gene === "KCNH2" || flag === "cardiotoxicity_qt";
        const is5ht2b = gene === "HTR2B" || flag === "valvulopathy_fibrosis";
        collisions.push({
          id: `chemspace_shared_offtarget_${gene.toLowerCase()}`,
          level: isHerg ? "danger" : "warning",
          vector: isHerg ? "herg_offtarget" : "chemspace_offtarget",
          title_pl: `Kumulatywne Ryzyko Off-Target: ${gene} (${hits.map(h =>h.c.n).join("+ ")})`,
          description_pl: `Predykcja chemogenomiczna wykazała zbieżne, wysokie prawdopodobieństwo interakcji off-target z celem ${gene} (score ≥30%) dla ${hits.length} cząsteczek w zestawie.`,
          clinical_consequence: isHerg ? "Wielokierunkowa blokada kanału potasowego hERG, gwałtowny wzrost ryzyka wydłużenia QTc i torsade de pointes (TdP)." : (is5ht2b ? "Sumaryczna stymulacja receptora 5-HT2B sprzyjająca mitogenezie fibroblastów i wadom zastawkowym serca." : "Niepożądana addytywna polifarmakologia na wspólnym receptorze poza zamierzonym celem."),
          monitoring: isHerg ? "Weryfikacja EKG (QTc) przed i po włączeniu leków, unikanie jednoczesnego stosowania." : "Okresowa kontrola echokardiograficzna lub monitorowanie objawów niepożądanych."
        });
        if (isHerg) maxQtc = Math.max(maxQtc, 80);
      }
    });

    // Food-Drug & Nutraceutical Interactions (v3.30.0)
    if (activeDiet.size >0 && FOOD_RULES && FOOD_RULES.length >0) {
      stackList.forEach((c) =>{
        const cRules = getFoodInteractionsForCompound(c);
        cRules.forEach((rule) =>{
          if (activeDiet.has(rule.food_id)) {
            const foodMeta = FOOD_CATALOG[rule.food_id] || {};
            const isContra = rule.severity === "contraindicated";
            const isSevere = rule.severity === "severe";
            const colLevel = (isContra || isSevere) ? "danger" : "warn";
            const colWeight = isContra ? 100 : (isSevere ? 80 : 50);
            maxFood = Math.max(maxFood, colWeight);

            collisions.push({
              id: `${rule.id}_${c.id}`,
              level: colLevel,
              vector: "food",
              badge: isContra ? "PRZECIWWSKAZANIE DIETETYCZNE" : (isSevere ? "CIĘŻKA INTERAKCJA DIETETYCZNA" : "OSTROŻNOŚĆ DIETETYCZNA"),
              icon: "" || "",
              title: `${"" || ""} ${c.n} + ${foodMeta.name_pl || rule.food_id}: ${rule.title_pl}`,
              description: rule.mechanism_pl,
              clinicalConsequence: rule.clinical_consequence,
              monitoring: rule.management,
              target_gene: rule.target_gene,
              pdb_id: rule.pdb_id,
              compound_id: c.id,
              isFoodInteraction: true
            });
          }
        });
      });
    }

    const acbVector = totalAcb >= 6 ? 100 : totalAcb >= 4 ? 75 : totalAcb >= 2 ? 40 : 0;
    const vectors = {
      cyp: maxCyp,
      qtc: maxQtc,
      serotonin: maxSerotonin,
      sedation: maxSedation,
      anticholinergic: acbVector,
      renal_bleeding: maxRenalBleed,
      food: maxFood
    };

    // Weighted composite risk score
    const rawScore = 0.18 * vectors.cyp +
                     0.22 * vectors.qtc +
                     0.22 * vectors.serotonin +
                     0.13 * vectors.sedation +
                     0.10 * vectors.anticholinergic +
                     0.05 * vectors.renal_bleeding +
                     0.10 * vectors.food;

    let score = Math.min(100, Math.round(rawScore));
    if (collisions.some((c) =>c.level === "danger") && score < 65) {
      score = 65;
    }

    let status = "safe";
    let statusText = "Bezpieczny Stack";
    let color = "#34c759";
    if (score >= 60) {
      status = "critical";
      statusText = "Krytyczne Ryzyko Polipragmazji";
      color = "#ff3b30";
    } else if (score >= 35) {
      status = "warning";
      statusText = "Istotne Ryzyko Interakcji";
      color = "#ff9500";
    } else if (score >0) {
      status = "caution";
      statusText = "Umiarkowane Interakcje";
      color = "#5ac8fa";
    }

    const critCount = collisions.filter((c) =>c.level === "danger").length;
    const warnCount = collisions.filter((c) =>c.level === "warn").length;
    const summary = collisions.length
      ? `${critCount ? `${critCount} kryt.`: ''}${critCount && warnCount ? ' • ' : ''}${warnCount ? `${warnCount} istotn.`: ''} kolizji (${collisions.slice(0, 2).map((c) =>c.badge).join(", ")})`
      : "Brak wykrytych bezpośrednich kolizji";

    return {
      score,
      status,
      statusText,
      summary,
      color,
      vectors,
      collisions,
      totalAcb
    };
  }

  function updatePolypharmacyShieldUI() {
    const shield = $("polypharmacyShield");
    if (!shield) return;

    const hasDiet = state.patientDiet && state.patientDiet.size >0;
    if (state.stack.size === 0 || (state.stack.size < 2 && !hasDiet)) {
      shield.classList.remove("active");
      return;
    }

    const stackList = [...state.stack].map((i) =>C[i]);
    const poly = computePolypharmacyScore(stackList);

    shield.classList.add("active");
    const gauge = $("shieldGauge");
    const scoreEl = $("shieldScore");
    const statusEl = $("shieldStatus");
    const summaryEl = $("shieldSummary");

    if (gauge) {
      gauge.style.color = poly.color;
      gauge.style.borderColor = poly.color;
    }
    if (scoreEl) {
      scoreEl.textContent = poly.score;
      scoreEl.style.color = poly.color;
    }
    if (statusEl) {
      statusEl.textContent = poly.statusText;
      statusEl.style.color = poly.color;
    }
    if (summaryEl) {
      summaryEl.textContent = poly.summary;
    }
  }

  function drawDdiCollisionEdges(ctx, stackList, k) {
    if (!stackList || stackList.length < 2) return;
    const n = stackList.length;

    for (let i = 0; i < n; i++) {
      const cA = stackList[i];
      for (let j = i + 1; j < n; j++) {
        const cB = stackList[j];
        const res = evaluatePairwiseInteraction(cA, cB);
        if (res.level !== "danger" && res.level !== "warn") continue;

        const [x1, y1] = toScreen(cA.x, cA.y);
        const [x2, y2] = toScreen(cB.x, cB.y);

        const dx = x2 - x1, dy = y2 - y1;
        const dist = Math.hypot(dx, dy);
        if (dist < 1) continue;

        // Curvature normal
        const nx = -dy / dist, ny = dx / dist;
        const curvature = Math.min(50, Math.max(25, dist * 0.2));
        const cx = (x1 + x2) / 2 + nx * curvature;
        const cy = (y1 + y2) / 2 + ny * curvature;

        const isDanger = res.level === "danger";
        const strokeCol = isDanger ? "#ff3b30" : "#ff9500";

        ctx.save();
        ctx.strokeStyle = strokeCol;
        ctx.lineWidth = isDanger ? 3.2 : 2.2;

        if (isDanger) {
          ctx.shadowColor = strokeCol;
          ctx.shadowBlur = 10;
        }

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(cx, cy, x2, y2);
        ctx.stroke();

        ctx.shadowBlur = 0;

        // Draw badge at mid-curve
        const badgeText = res.badge || (isDanger ? " DDI" : " DDI");
        ctx.font = `700 ${Math.max(10, Math.min(13, 11 * Math.sqrt(k)))}px ${css("--font-display")}`;
        const tm = ctx.measureText(badgeText);
        const bw = tm.width + 12;
        const bh = 18;

        ctx.fillStyle = css("--color-surface") || "#1e1e1e";
        ctx.strokeStyle = strokeCol;
        ctx.lineWidth = 1.5;

        // Rounded rect for badge
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(cx - bw / 2, cy - bh / 2, bw, bh, 4);
        } else {
          ctx.rect(cx - bw / 2, cy - bh / 2, bw, bh);
        }
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = strokeCol;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(badgeText, cx, cy + 0.5);

        ctx.restore();
      }
    }
  }

  function loadDdiPreset(presetKey) {
    const preset = (DDI_RULES.case_presets || {})[presetKey];
    if (!preset || !preset.compounds) return;

    state.stack.clear();
    preset.compounds.forEach((cid) =>{
      const idx = C.findIndex((c) =>c.id === cid);
      if (idx >= 0) state.stack.add(idx);
    });

    saveStack();
    updateStackUI();
    updatePolypharmacyShieldUI();
    draw();

    setTimeout(() =>{
      openDdiAuditInSplitPane();
    }, 50);
  }

  function openDdiAuditInSplitPane() {
    const stackList = [...state.stack].map((i) =>C[i]);
    const activeDiet = state.patientDiet || new Set();
    if (stackList.length === 0 || (stackList.length < 2 && activeDiet.size === 0)) {
      const dietPillsHtml = Object.entries(FOOD_CATALOG).map(([fid, f]) =>{
        const isSelected = activeDiet.has(fid);
        const bg = isSelected ? "var(--color-primary)" : "var(--color-surface)";
        const col = isSelected ? "#fff" : "var(--color-text)";
        const bdr = isSelected ? "var(--color-primary)" : "var(--color-border)";
        return `
          <button class="btn btn-sm" data-toggle-diet="${esc(fid)}" style="background:${bg};color:${col};border:1px solid ${bdr};font-size:13px;padding:3px 8px;border-radius:14px;cursor:pointer;display:inline-flex;align-items:center;gap:4px">
            <span>${"" || ''}</span>
            <span>${esc(f.name_pl || fid)}</span>
          </button>
        `;
      }).join("");

      openSplitPane("", "Tarcza Polipragmazji & Diety", "Wymaga co najmniej 2 leków lub leku i aktywnej diety", `
        <div style="text-align:center;padding:20px;color:var(--color-text-muted)">
          <div style="font-size:32px;margin-bottom:8px"></div>
          <b style="color:var(--color-text);font-size:14px">${stackList.length === 1 ? `W stacku: ${esc(stackList[0].n)}`: "Dodaj leki do stacka"}</b>
          <p style="font-size:13px;margin-top:6px">Dodaj co najmniej dwie substancje do analizy wielolekowej lub zaznacz dietę/suplementy pacjenta poniżej, aby zbadać interakcje żywieniowe:</p>
          <div style="margin:14px 0;padding:12px;background:var(--color-surface);border-radius:8px;border:1px solid var(--color-border);text-align:left">
            <div style="font-size:13px;font-weight:700;margin-bottom:8px;color:var(--color-text)">Wybierz dietę / nutraceutyki pacjenta:</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px">
              ${dietPillsHtml}
            </div>
          </div>
          <p style="font-size:13px;color:var(--color-text-muted)">Lub wczytaj gotowy preset kliniczny:</p>
          <div style="display:flex;gap:8px;justify-content:center;margin-top:8px;flex-wrap:wrap">
            <button class="btn btn-primary btn-sm" id="splitPresetTripleBtn">Triple Whammy (Nerki)</button>
            <button class="btn btn-danger btn-sm" id="splitPresetSerotoninBtn">Zespół Serotoninowy</button>
            <button class="btn btn-sm" id="splitPresetQtBtn">Koktajl QTc</button>
          </div>
        </div>
      `);
      const b1 = $("splitPresetTripleBtn");
      if (b1) b1.onclick = () =>loadDdiPreset("triple_whammy");
      const b2 = $("splitPresetSerotoninBtn");
      if (b2) b2.onclick = () =>loadDdiPreset("serotonin_storm");
      const b3 = $("splitPresetQtBtn");
      if (b3) b3.onclick = () =>loadDdiPreset("qt_cocktail");

      if (splitBody) {
        splitBody.querySelectorAll("[data-toggle-diet]").forEach((btn) =>{
          btn.onclick = () =>{
            const fid = btn.getAttribute("data-toggle-diet");
            if (state.patientDiet.has(fid)) state.patientDiet.delete(fid);
            else state.patientDiet.add(fid);
            updatePolypharmacyShieldUI();
            openDdiAuditInSplitPane();
          };
        });
      }
      return;
    }

    const poly = computePolypharmacyScore(stackList);

    const vectorLabels = {
      cyp: { name: "Metabolizm & Enzymy CYP450", icon: "" },
      qtc: { name: "Kardiotoksyczność (Odstęp QTc / hERG)", icon: "" },
      serotonin: { name: "Obciążenie Serotoninergiczne", icon: "" },
      sedation: { name: "Depresja OUN & Ośrodka Oddechowego", icon: "" },
      anticholinergic: { name: `Obciążenie Antycholinergiczne (ACB: ${poly.totalAcb})`, icon: "" },
      renal_bleeding: { name: "Nefrotoksyczność & Ryzyko Krwawień", icon: "" },
      food: { name: "Interakcje z Żywnością & Ziołami", icon: "" }
    };

    const vectorBarsHtml = Object.entries(poly.vectors).map(([k, val]) =>{
      const vInfo = vectorLabels[k] || { name: k, icon: "" };
      let barCol = "#34c759";
      if (val >= 70) barCol = "#ff3b30";
      else if (val >= 40) barCol = "#ff9500";
      else if (val >0) barCol = "#5ac8fa";

      return `
        <div style="margin-bottom:6px">
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:2px">
            <span>${vInfo.icon} <strong>${esc(vInfo.name)}</strong></span>
            <span style="font-weight:700;color:${barCol}">${val}%</span>
          </div>
          <div style="width:100%;height:6px;background:var(--color-border);border-radius:3px;overflow:hidden">
            <div style="width:100%;height:100%;background:${barCol};border-radius:3px;transform:scaleX(${val / 100});transform-origin:left;transition:transform 0.3s ease"></div>
          </div>
        </div>
      `;
    }).join("");

    const collisionsHtml = poly.collisions.length ? poly.collisions.map((col) =>`
      <div style="background:var(--color-surface);border-left:1px solid ${col.level === 'danger' ? '#ff3b30' : '#ff9500'};border-radius:0 6px 6px 0;padding:10px 12px;margin-bottom:8px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <div style="display:flex;align-items:center;gap:6px">
            <span style="font-size:14px">${col.icon}</span>
            <strong style="font-size:13px;color:var(--color-text)">${esc(col.title)}</strong>
          </div>
          <span class="badge" style="background:${col.level === 'danger' ? '#ff3b3022' : '#ff950022'};color:${col.level === 'danger' ? '#ff3b30' : '#ff9500'};border:1px solid ${col.level === 'danger' ? '#ff3b30' : '#ff9500'};font-size:13px">
            ${esc(col.badge)}
          </span>
        </div>
        <div style="font-size:13px;color:var(--color-text);margin-bottom:6px;line-height:1.4">
          ${esc(col.description || '')}
        </div>
        ${col.clinicalConsequence ? `
          <div style="font-size:13px;color:var(--color-error);margin-bottom:4px">
            <strong>Konsekwencja kliniczna:</strong>${esc(col.clinicalConsequence)}
          </div>
        `: ''}
        ${col.monitoring ? `
          <div style="font-size:13px;color:var(--color-text-muted);background:var(--color-bg);padding:4px 8px;border-radius:4px">
            <strong>Rekomendowane monitorowanie:</strong>${esc(col.monitoring)}
          </div>
        `: ''}
        ${col.pdb_id ? `
          <div style="margin-top:6px;display:flex;gap:8px;align-items:center">
            <button class="btn btn-sm btn-primary" data-fdi-pdb="${esc(col.pdb_id)}" data-fdi-cid="${esc(col.compound_id || '')}" style="font-size:13px;padding:2px 8px">
               Zobacz cel 3D: ${esc(col.target_gene || col.pdb_id)}
            </button>
            <a href="sidecar://biomolecular-structure-viewer?pdb=${esc(col.pdb_id)}" style="font-size:13px;color:var(--color-primary);text-decoration:none">
              Biomolecular Viewer ↗
            </a>
          </div>
        `: ''}
      </div>
    `).join("") : `
      <div style="padding:12px;background:var(--color-surface);border-radius:6px;font-size:13px;color:var(--color-text-muted);text-align:center">
        OK W badanym stacku nie zidentyfikowano bezpośrednich krytycznych kolizji PK ani PD.
      </div>
    `;

    const presetsList = Object.entries(DDI_RULES.case_presets || {}).map(([key, p]) =>`
      <button class="btn btn-sm" data-load-ddi-preset="${esc(key)}" style="margin:2px 4px 2px 0;font-size:13px" title="${esc(p.description)}">
         ${esc(p.title)}
      </button>
    `).join("");

    const dietPillsActiveHtml = Object.entries(FOOD_CATALOG).map(([fid, f]) =>{
      const isSelected = activeDiet.has(fid);
      const bg = isSelected ? "var(--color-primary)" : "var(--color-surface)";
      const col = isSelected ? "#fff" : "var(--color-text)";
      const bdr = isSelected ? "var(--color-primary)" : "var(--color-border)";
      return `
        <button class="btn btn-sm" data-toggle-diet="${esc(fid)}" style="background:${bg};color:${col};border:1px solid ${bdr};font-size:13px;padding:3px 8px;border-radius:14px;cursor:pointer;display:inline-flex;align-items:center;gap:4px;transition: opacity .15s ease" title="${esc(f.description_pl || '')}">
          <span>${"" || ''}</span>
          <span>${esc(f.name_pl || fid)}</span>
        </button>
      `;
    }).join("");

    const dietPanelHtml = `
      <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:10px 12px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <strong style="font-size:13px;display:flex;align-items:center;gap:5px;color:var(--color-text)">
            <span></span>Dieta & Suplementy Pacjenta (${activeDiet.size} aktywnych)
          </strong>
          ${activeDiet.size >0 ? `<button class="btn btn-sm btn-ghost" id="clearPatientDietBtn" style="font-size:13px;padding:1px 6px">Wyczyść dietę</button>`: ''}
        </div>
        <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:6px">
          Wybierz składniki diety lub nutraceutyki spożywane przez pacjenta, aby wykryć interakcje z lekami w stacku:
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:5px">
          ${dietPillsActiveHtml}
        </div>
      </div>
    `;

    const auditHtml = `
      <div style="display:flex;flex-direction:column;gap:14px">
        <div style="display:flex;align-items:center;gap:16px;background:var(--color-surface);padding:12px 16px;border-radius:8px;border:1px solid var(--color-border)">
          <div style="width:52px;height:52px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;border:3px solid ${poly.color};flex-shrink:0">
            <span style="font-size:18px;font-weight:800;color:${poly.color}">${poly.score}</span>
            <span style="font-size:13px;color:var(--color-text-muted)">/100</span>
          </div>
          <div>
            <div style="font-size:13px;font-weight:700;color:${poly.color};text-transform:uppercase;letter-spacing:0.02em">
              ${esc(poly.statusText)}
            </div>
            <div style="font-size:13px;color:var(--color-text-muted);margin-top:2px">
              Analiza ${stackList.length} substancji w stacku (${stackList.map(c =>c.n).join(", ")})
            </div>
          </div>
        </div>

        ${dietPanelHtml}

        <div>
          <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.02em;color:var(--color-text-muted);margin-bottom:8px">
             7-Wektorowy Profil Bezpieczeństwa
          </div>
          ${vectorBarsHtml}
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.02em;color:var(--color-text-muted);margin-bottom:8px">
             Zidentyfikowane Kolizje i Interakcje (${poly.collisions.length})
          </div>
          ${collisionsHtml}
        </div>

        <div style="padding-top:10px;border-top:1px solid var(--color-border)">
          <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.02em;color:var(--color-text-muted);margin-bottom:6px">
             Kliniczne Studia Przypadków (Presety edukacyjne)
          </div>
          <div style="display:flex;flex-wrap:wrap">
            ${presetsList}
          </div>
        </div>
      </div>
    `;

    openSplitPane("", "Audyt Ryzyka Polipragmazji & DDI", `${poly.statusText} • Wynik: ${poly.score}/100`, auditHtml);

    if (splitBody) {
      splitBody.querySelectorAll("[data-load-ddi-preset]").forEach((btn) =>{
        btn.onclick = () =>loadDdiPreset(btn.dataset.loadDdiPreset);
      });
      splitBody.querySelectorAll("[data-toggle-diet]").forEach((btn) =>{
        btn.onclick = () =>{
          const fid = btn.getAttribute("data-toggle-diet");
          if (state.patientDiet.has(fid)) state.patientDiet.delete(fid);
          else state.patientDiet.add(fid);
          updatePolypharmacyShieldUI();
          openDdiAuditInSplitPane();
        };
      });
      const clearDietBtn = splitBody.querySelector("#clearPatientDietBtn");
      if (clearDietBtn) {
        clearDietBtn.onclick = () =>{
          state.patientDiet.clear();
          updatePolypharmacyShieldUI();
          openDdiAuditInSplitPane();
        };
      }
      splitBody.querySelectorAll("[data-fdi-pdb]").forEach((btn) =>{
        btn.onclick = () =>{
          const pdb = btn.getAttribute("data-fdi-pdb");
          const cid = btn.getAttribute("data-fdi-cid");
          openStruct3DModal(pdb, cid);
        };
      });
    }
  }

  // ---------- Food-Drug & Nutraceutical Interaction Inspector (v3.30.0)
  function openFoodInteractionsSplitPane(c) {
    if (!c) return;
    const rules = getFoodInteractionsForCompound(c);
    const fHtml = rules.length ? rules.map((r) =>{
      const fMeta = FOOD_CATALOG[r.food_id] || {};
      const isContra = r.severity === "contraindicated";
      const isSevere = r.severity === "severe";
      const borderCol = isContra ? "#ff3b30" : (isSevere ? "#ff9500" : "#5ac8fa");
      const badgeText = isContra ? "BEZWZGLĘDNIE PRZECIWWSKAZANE" : (isSevere ? "CIĘŻKA INTERAKCJA" : "ZALECANA OSTROŻNOŚĆ");

      return `
        <div style="background:var(--color-surface);border-left:4px solid ${borderCol};border:1px solid var(--color-border);border-left-width:4px;border-radius:6px;padding:12px;margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:20px">${"" || ""}</span>
              <div>
                <strong style="font-size:13px;color:var(--color-text)">${esc(fMeta.name_pl || r.food_id)}</strong>
                <div style="font-size:13px;color:var(--color-text-muted)">${esc(r.title_pl)}</div>
              </div>
            </div>
            <span class="badge" style="background:${borderCol}22;color:${borderCol};border:1px solid ${borderCol};font-size:13px">
              ${badgeText}
            </span>
          </div>

          <div style="font-size:13px;color:var(--color-text);margin-bottom:8px;line-height:1.4">
            <b>Mechanizm:</b>${esc(r.mechanism_pl)}
          </div>

          <div style="font-size:13px;color:var(--color-error);margin-bottom:8px;background:var(--color-bg);padding:6px 8px;border-radius:4px">
            <strong>Skutek kliniczny:</strong>${esc(r.clinical_consequence)}
          </div>

          <div style="font-size:13px;color:var(--color-text);background:var(--color-surface-2);border-left:3px solid #34c759;padding:6px 8px;border-radius:4px;margin-bottom:8px">
            <strong>Postępowanie & Rekomendacja:</strong>${esc(r.management)}
          </div>

          ${r.pdb_id ? `
            <div style="display:flex;gap:8px;align-items:center;margin-top:6px">
              <button class="btn btn-sm btn-primary" data-fdi-pdb="${esc(r.pdb_id)}" data-fdi-cid="${esc(c.id)}" style="font-size:13px">
                 Zobacz Cel 3D: ${esc(r.target_gene || r.pdb_id)} (${esc(r.pdb_id)})
              </button>
              <a href="sidecar://biomolecular-structure-viewer?pdb=${esc(r.pdb_id)}" style="font-size:13px;color:var(--color-primary);text-decoration:none">
                Biomolecular Viewer ↗
              </a>
            </div>
          `: ''}
        </div>
      `;
    }).join("") : `
      <div style="text-align:center;padding:32px 16px;color:var(--color-text-muted)">
        <div style="font-size:32px;margin-bottom:8px"></div>
        <b style="color:var(--color-text)">Brak specyficznych interakcji z pożywieniem</b>
        <p style="font-size:13px;margin-top:4px">Dla substancji ${esc(c.n)} nie zidentyfikowano specyficznych przeciwwskazań dietetycznych ani interakcji z furanokumarynami, tyraminą czy kationami.</p>
      </div>
    `;

    openSplitPane("", `Interakcje Żywnościowe: ${c.n}`, "Analiza farmakokinetyki jelitowej, cytochromów P450 i transporterów", `
      <div style="display:flex;flex-direction:column;gap:12px">
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:10px 12px;font-size:13px;display:flex;justify-content:space-between;align-items:center">
          <div>
            <strong>Lek:</strong>${esc(c.n)} · <code>${esc(c.id)}</code>
            ${c.m ? `<div style="color:var(--color-text-muted);margin-top:2px">${esc(c.m)}</div>`: ''}
          </div>
          <button class="btn btn-sm" id="splitAddToDietStackBtn">
            ${state.stack.has(c.i) ? "OK W stacku" : " Dodaj do stacka"}
          </button>
        </div>
        ${fHtml}
      </div>
    `);

    const addBtn = $("splitAddToDietStackBtn");
    if (addBtn && !state.stack.has(c.i)) {
      addBtn.onclick = () =>{
        toggleInStack(c.i);
        addBtn.textContent = "OK W stacku";
      };
    }

    if (splitBody) {
      splitBody.querySelectorAll("[data-fdi-pdb]").forEach((btn) =>{
        btn.onclick = () =>{
          const pdb = btn.getAttribute("data-fdi-pdb");
          const cid = btn.getAttribute("data-fdi-cid");
          openStruct3DModal(pdb, cid);
        };
      });
    }
  }

  // ---------- Neuropharmacology & Receptor Affinity Engine (v3.24.0)
  const CANONICAL_CNS_AXES = [
    "D2", "D3", "DAT",
    "5-HT1A", "5-HT2A", "5-HT2C", "SERT",
    "alpha1A", "NET",
    "H1", "M1",
    "MOR", "KOR", "DOR",
    "GABA-A"
  ];

  function renderReceptorRadarSvg(affA, affB = null, width = 360, height = 300) {
    if (!affA && !affB) {
      return '<div style="color:var(--color-text-muted);font-size:13px;text-align:center;padding:20px">Brak danych powinowactwa receptorowego.</div>';
    }

    const mapA = new Map();
    if (affA && affA.profiles) {
      affA.profiles.forEach((p) =>mapA.set(p.target, p));
    }
    const mapB = new Map();
    if (affB && affB.profiles) {
      affB.profiles.forEach((p) =>mapB.set(p.target, p));
    }

    // Determine active axes from canonical list
    let axes = CANONICAL_CNS_AXES.filter((t) =>mapA.has(t) || mapB.has(t));
    [...mapA.keys(), ...mapB.keys()].forEach((t) =>{
      if (!axes.includes(t)) axes.push(t);
    });

    if (axes.length < 5) {
      const fallback = ["D2", "5-HT1A", "5-HT2A", "alpha1A", "H1", "M1"];
      fallback.forEach((t) =>{ if (!axes.includes(t)) axes.push(t); });
    }

    const N = axes.length;
    const cx = width / 2;
    const cy = (height / 2) + 6;
    const maxR = Math.min(width, height) * 0.36;

    const angleOf = (i) =>-Math.PI / 2 + (2 * Math.PI * i) / N;

    // Rings 6, 7, 8, 9, 10
    const rings = [6, 7, 8, 9, 10];
    const ringPolys = rings.map((lvl) =>{
      const scale = (lvl - 5.0) / 5.0;
      const r = scale * maxR;
      const pts = axes.map((_, i) =>{
        const a = angleOf(i);
        return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
      }).join("");
      const isPotent = lvl === 8;
      return `<polygon points="${pts}" fill="none" stroke="rgba(255,255,255,${isPotent ? '0.22' : '0.08'})" stroke-width="${isPotent ? '1.5' : '1'}" stroke-dasharray="${isPotent ? 'none' : '2,2'}" />`;
    }).join("");

    // Rays
    const rays = axes.map((_, i) =>{
      const a = angleOf(i);
      const x2 = (cx + maxR * Math.cos(a)).toFixed(1);
      const y2 = (cy + maxR * Math.sin(a)).toFixed(1);
      return `<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="rgba(255,255,255,0.12)" stroke-width="1" />`;
    }).join("");

    // Axis labels
    const axisLabels = axes.map((t, i) =>{
      const a = angleOf(i);
      const labelR = maxR + 15;
      const lx = cx + labelR * Math.cos(a);
      const ly = cy + labelR * Math.sin(a) + 3;
      const cos = Math.cos(a);
      let anchor = "middle";
      if (cos >0.3) anchor = "start";
      else if (cos < -0.3) anchor = "end";

      const hasPotentA = mapA.has(t) && (mapA.get(t).pki >= 8.0);
      const hasPotentB = mapB.has(t) && (mapB.get(t).pki >= 8.0);
      let textCol = "#8e8e93";
      if (hasPotentA) textCol = "#5ac8fa";
      else if (hasPotentB) textCol = "#ffd60a";

      return `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="${anchor}" fill="${textCol}" font-size="11" font-weight="700" font-family="system-ui, -apple-system, sans-serif">${esc(t)}</text>`;
    }).join("");

    // Scale markers along first axis
    const scaleMarkers = rings.map((lvl) =>{
      const scale = (lvl - 5.0) / 5.0;
      const r = scale * maxR;
      const sy = cy - r;
      const label = lvl === 6 ? "6 (1μM)" : (lvl === 8 ? "8 (10nM)" : (lvl === 10 ? "10 (0.1nM)" : `${lvl}`));
      return `<text x="${cx + 3}" y="${(sy - 2).toFixed(1)}" fill="#8e8e93" font-size="11" font-family="system-ui, -apple-system, sans-serif">${label}</text>`;
    }).join("");

    // Polygon A points
    let polyAHtml = "";
    if (affA) {
      const ptsA = [];
      const circlesA = [];
      axes.forEach((t, i) =>{
        const a = angleOf(i);
        const item = mapA.get(t);
        const pki = item ? item.pki : 5.0;
        const r = Math.max(0, Math.min(1, (pki - 5.0) / 5.0)) * maxR;
        const px = cx + r * Math.cos(a);
        const py = cy + r * Math.sin(a);
        ptsA.push(`${px.toFixed(1)},${py.toFixed(1)}`);
        const titleText = item ? `${t}: Ki = ${item.ki_nm} nM (pKi ${item.pki}) • ${item.action}`: `${t}: brak wiązania (>10 μM)`;
        circlesA.push(`<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="3" fill="#5ac8fa"><title>${esc(titleText)}</title></circle>`);
      });
      polyAHtml = `
        <polygon points="${ptsA.join(' ')}" fill="rgba(90, 200, 250, 0.25)" stroke="#5ac8fa" stroke-width="2.5" />
        ${circlesA.join("")}
      `;
    }

    // Polygon B points (compare)
    let polyBHtml = "";
    if (affB) {
      const ptsB = [];
      const circlesB = [];
      axes.forEach((t, i) =>{
        const a = angleOf(i);
        const item = mapB.get(t);
        const pki = item ? item.pki : 5.0;
        const r = Math.max(0, Math.min(1, (pki - 5.0) / 5.0)) * maxR;
        const px = cx + r * Math.cos(a);
        const py = cy + r * Math.sin(a);
        ptsB.push(`${px.toFixed(1)},${py.toFixed(1)}`);
        const titleText = item ? `${t}: Ki = ${item.ki_nm} nM (pKi ${item.pki}) • ${item.action}`: `${t}: brak wiązania (>10 μM)`;
        circlesB.push(`<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="3" fill="#ffd60a"><title>${esc(titleText)}</title></circle>`);
      });
      polyBHtml = `
        <polygon points="${ptsB.join(' ')}" fill="rgba(255, 214, 10, 0.25)" stroke="#ffd60a" stroke-width="2.5" />
        ${circlesB.join("")}
      `;
    }

    // Legend
    let legendHtml = "";
    if (affA || affB) {
      legendHtml = `
        <g transform="translate(10, 16)" font-size="11" font-family="system-ui, -apple-system, sans-serif">
          ${affA ? `<rect x="0" y="0" width="10" height="10" rx="2" fill="#5ac8fa" /><text x="14" y="9" fill="#5ac8fa" font-weight="700">${esc(affA.compound_id.replace('-compound',''))}</text>`: ""}
          ${affB ? `<rect x="${affA ? 110 : 0}" y="0" width="10" height="10" rx="2" fill="#ffd60a" /><text x="${affA ? 124 : 14}" y="9" fill="#ffd60a" font-weight="700">${esc(affB.compound_id.replace('-compound',''))}</text>`: ""}
        </g>
      `;
    }

    return `
      <svg viewBox="0 0 ${width} ${height}" style="width:100%;max-width:${width}px;height:auto;display:block;margin:0 auto;overflow:visible">
        ${legendHtml}
        ${ringPolys}
        ${rays}
        ${scaleMarkers}
        ${polyAHtml}
        ${polyBHtml}
        ${axisLabels}
      </svg>
    `;
  }

  function openReceptorRadarSplitPane(compoundIdA, compoundIdB = null) {
    let affA = RECEPTOR_AFFINITIES[compoundIdA];
    let compA = C.find((x) =>x.id === compoundIdA);
    if (!affA && !compA) {
      const firstKey = Object.keys(RECEPTOR_AFFINITIES)[0];
      if (firstKey) {
        compoundIdA = firstKey;
        affA = RECEPTOR_AFFINITIES[compoundIdA];
        compA = C.find((x) =>x.id === compoundIdA);
      }
    }

    const nameA = compA ? compA.n : (compoundIdA || "Nieznany lek");
    let affB = compoundIdB ? RECEPTOR_AFFINITIES[compoundIdB] : null;
    let compB = compoundIdB ? C.find((x) =>x.id === compoundIdB) : null;
    const nameB = compB ? compB.n : (compoundIdB || "");

    if (!affA) {
      openSplitPane("", "Radar Receptorowy OUN", nameA, `
        <div style="padding:20px;text-align:center;color:var(--color-text-muted)">
          <div style="font-size:32px;margin-bottom:8px"></div>
          <b style="color:var(--color-text);font-size:14px">${esc(nameA)}</b>
          <p style="font-size:13px;margin-top:6px">Ta substancja nie posiada jeszcze sprofilowanego panelu stałych dysocjacji Ki w kuratorowanym zbiorze OUN.</p>
          <p style="font-size:13px;margin-top:4px">Wybierz jedną ze sprofilowanych substancji neuropsychiatrycznych:</p>
          <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-top:12px">
            ${Object.keys(RECEPTOR_AFFINITIES).slice(0, 8).map((cid) =>{
              const cObj = C.find((x) =>x.id === cid);
              return `<button class="btn btn-sm" data-switch-radar="${esc(cid)}">${esc(cObj ? cObj.n : cid)}</button>`;
            }).join("")}
          </div>
        </div>
      `);
      if (splitBody) {
        splitBody.querySelectorAll("[data-switch-radar]").forEach((b) =>{
          b.onclick = () =>openReceptorRadarSplitPane(b.dataset.switchRadar);
        });
      }
      return;
    }

    const availableForCompare = Object.keys(RECEPTOR_AFFINITIES)
      .filter((id) =>id !== compoundIdA)
      .map((id) =>{
        const cObj = C.find((x) =>x.id === id);
        return { id, name: cObj ? cObj.n : id, cls: RECEPTOR_AFFINITIES[id].class || "" };
      })
      .sort((a, b) =>a.name.localeCompare(b.name));

    let kineticsHtml = "";
    if (affA.kinetic_class) {
      let badgeColor = "#34c759";
      let badgeTitle = "Fast-Off D2 (t½ < 10 s)";
      let badgeDesc = "Szybka dysocjacja od receptora D2. Zachowane fizjologiczne wyrzuty endogennej dopaminy, znikome ryzyko objawów pozapiramidowych (EPS) i hiperprolaktynemii.";
      if (affA.kinetic_class === "slow-off") {
        badgeColor = "#ff3b30";
        badgeTitle = "Slow-Off D2 (t½ >70 s)";
        badgeDesc = "Trwałe, uporczywe wiązanie z receptorem D2. Wysokie ryzyko objawów pozapiramidowych (EPS), akatyzji, dystonii i późnych dyskinez (TD).";
      } else if (affA.kinetic_class === "intermediate-off") {
        badgeColor = "#ff9500";
        badgeTitle = "Intermediate-Off D2";
        badgeDesc = "Pośredni profil kinetyki dysocjacji od receptora D2 z umiarkowanym profilem bezpieczeństwa pozapiramidowego.";
      } else if (affA.kinetic_class === "partial-agonist") {
        badgeColor = "#5ac8fa";
        badgeTitle = "Częściowy agonista (Stabilizator receptorowy)";
        badgeDesc = "Wiązanie o wysokim powinowactwie z umiarkowaną aktywnością wewnętrzną (intrinsic activity), zapobiega zarówno hipo- jak i hiperaktywacji szlaku.";
      } else if (affA.kinetic_class === "psychedelic-5ht2a") {
        badgeColor = "#52a2a8";
        badgeTitle = "Agonista 5-HT2A (Psychodelik / Enaktogen)";
        badgeDesc = "Aktywacja szlaku Gq/11 i beta-arestyny w neuronach piramidowych kory V warstwy, indukcja plastyczności synaptycznej.";
      } else if (affA.kinetic_class === "gabaa-positive-allosteric") {
        badgeColor = "#007aff";
        badgeTitle = "Pozytywny modulator allosteryczny (PAM GABA-A)";
        badgeDesc = "Zwiększa częstotliwość otwarcia kanału chlorkowego przy fizjologicznym stężeniu GABA, efekt anksjolityczno-sedatywny.";
      } else if (affA.kinetic_class === "reuptake-inhibitor") {
        badgeColor = "#34c759";
        badgeTitle = "Inhibitor wychwytu zwrotnego monoamin";
        badgeDesc = "Blokada transportera synaptycznego (SERT/NET/DAT), podwyższa stężenie monoamin w szczelinie synaptycznej.";
      } else if (affA.kinetic_class === "full-agonist") {
        badgeColor = "#ff2d55";
        badgeTitle = "Pełny agonista opioidowy (MOR)";
        badgeDesc = "Maksymalna aktywacja receptora mi-opioidowego, silna analgezja z ryzykiem depresji oddechowej i tolerancji.";
      }

      kineticsHtml = `
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-left:1px solid ${badgeColor};border-radius:6px;padding:8px 12px;margin-bottom:10px">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <strong style="font-size:13px;color:${badgeColor}">Kinetyka: ${badgeTitle}</strong>
            ${affA.generation ? `<span class="badge" style="font-size:13px">${esc(affA.generation)}</span>`: ""}
          </div>
          <div style="font-size:13px;color:var(--color-text-muted);margin-top:3px;line-height:1.35">
            ${badgeDesc}
          </div>
        </div>
      `;
    }

    let occupancyHtml = "";
    if (typeof affA.d2_occupancy_therapeutic_pct === "number") {
      const occ = affA.d2_occupancy_therapeutic_pct;
      let occColor = "#34c759";
      let occStatus = "W optymalnym oknie terapeutycznym D2 (60–80%)";
      if (occ < 60) {
        occColor = "#5ac8fa";
        occStatus = "Subterapeutyczna occupacja D2 (<60% - profil klozapino-podobny lub sedacja H1)";
      } else if (occ >80) {
        occColor = "#ff3b30";
        occStatus = "Przekroczony próg EPS (>80% - wysokie ryzyko akatyzji i parkinsonizmu polekowego)";
      }

      occupancyHtml = `
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 12px;margin-bottom:10px">
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px;margin-bottom:4px">
            <span><strong>Szacowana occupacja receptora D2 w OUN:</strong></span>
            <b style="color:${occColor};font-size:13px">${occ}%</b>
          </div>
          <div style="position:relative;width:100%;height:10px;background:var(--color-surface-offset);border-radius:5px;overflow:hidden;border:1px solid var(--color-border)">
            <div style="position:absolute;left:0;width:60%;height:100%;background:rgba(90, 200, 250, 0.15)" title="Occupacja <60%"></div>
            <div style="position:absolute;left:60%;width:20%;height:100%;background:rgba(52, 199, 89, 0.35);border-left:1px dashed #34c759;border-right:1px dashed #34c759" title="Okno terapeutyczne (60-80%)"></div>
            <div style="position:absolute;left:80%;width:20%;height:100%;background:rgba(255, 59, 48, 0.25)" title="Ryzyko EPS (>80%)"></div>
            <div style="position:absolute;left:${Math.min(99, Math.max(1, occ))}%;top:0;bottom:0;width:3px;background:${occColor};transform:translateX(-50%)"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--color-text-muted);margin-top:4px">
            <span>0%</span>
            <span style="color:#34c759;font-weight:600">60%–80% (Okno skuteczności)</span>
            <span style="color:#ff3b30;font-weight:600">&gt;80% (Próg EPS)</span>
            <span>100%</span>
          </div>
          <div style="font-size:13px;color:var(--color-text-muted);margin-top:4px">
            Status: <span style="color:${occColor};font-weight:600">${occStatus}</span>
          </div>
        </div>
      `;
    }

    let meltzerHtml = "";
    const mapA = new Map();
    (affA.profiles || []).forEach((p) =>mapA.set(p.target, p));
    if (mapA.has("5-HT2A") && mapA.has("D2")) {
      const ki5ht2a = Number(mapA.get("5-HT2A").ki_nm);
      const kiD2 = Number(mapA.get("D2").ki_nm);
      if (kiD2 > 0 && Number.isFinite(ki5ht2a) && ki5ht2a >= 0) {
        const meltzerRatio = ki5ht2a / kiD2;
        const isAtypical = meltzerRatio < 1.0;
        meltzerHtml = `
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 12px;margin-bottom:10px">
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px">
            <span><strong>Wskaźnik Atypowości Meltzera:</strong></span>
            <span class="badge" style="background:${isAtypical ? '#34c75922' : '#ff950022'};color:${isAtypical ? '#34c759' : '#ff9500'};border:1px solid ${isAtypical ? '#34c759' : '#ff9500'};font-weight:700">
              Ki(5-HT2A) / Ki(D2) = ${meltzerRatio.toFixed(3)}
            </span>
          </div>
          <div style="font-size:13px;color:var(--color-text-muted);margin-top:4px;line-height:1.35">
            ${isAtypical
              ? 'OK Wskaźnik < 1.0 – preferencja wiązania do receptora 5-HT2A względem D2 (profil atypowy II generacji, niska tendencja do wywoływania objawów pozapiramidowych).'
              : ' Wskaźnik >1.0 – dominacja blokady receptora dopaminowego D2 nad 5-HT2A (profil typowy I generacji, podwyższone ryzyko EPS).'}
          </div>
        </div>
      `;
      }
    }

    const radarSvg = renderReceptorRadarSvg(affA, affB, 360, 310);

    const mapB = new Map();
    if (affB && affB.profiles) {
      affB.profiles.forEach((p) =>mapB.set(p.target, p));
    }
    const allTargets = [...new Set([...mapA.keys(), ...mapB.keys()])].sort((a, b) =>{
      const pkiA1 = mapA.has(a) ? mapA.get(a).pki : 0;
      const pkiA2 = mapA.has(b) ? mapA.get(b).pki : 0;
      return pkiA2 - pkiA1;
    });

    const tableRows = allTargets.map((t) =>{
      const pA = mapA.get(t);
      const pB = mapB.get(t);

      let foldDiffHtml = "–";
      if (pA && pB) {
        if (pA.ki_nm < pB.ki_nm) {
          const fold = (pB.ki_nm / pA.ki_nm).toFixed(1);
          foldDiffHtml = `<span style="color:#5ac8fa;font-weight:600">A wiąże ${fold}× silniej</span>`;
        } else if (pB.ki_nm < pA.ki_nm) {
          const fold = (pA.ki_nm / pB.ki_nm).toFixed(1);
          foldDiffHtml = `<span style="color:#ffd60a;font-weight:600">B wiąże ${fold}× silniej</span>`;
        } else {
          foldDiffHtml = `<span style="color:var(--color-text-muted)">Równe</span>`;
        }
      }

      return `
        <tr style="border-bottom:1px solid var(--color-border);font-size:13px">
          <td style="padding:6px 8px;font-weight:700">${esc(t)}</td>
          <td style="padding:6px 8px;color:var(--color-text-muted)">${esc(pA ? pA.action : (pB ? pB.action : '–'))}</td>
          <td style="padding:6px 8px;font-weight:700;color:${pA && pA.pki >= 8 ? '#5ac8fa' : 'inherit'}">
            ${pA ? `${pA.ki_nm} nM <span style="font-size:13px;color:var(--color-text-muted)">(pKi ${pA.pki})</span>`: '<span style="color:var(--color-text-muted)">&gt;10 μM</span>'}
          </td>
          ${affB ? `
            <td style="padding:6px 8px;font-weight:700;color:${pB && pB.pki >= 8 ? '#ffd60a' : 'inherit'}">
              ${pB ? `${pB.ki_nm} nM <span style="font-size:13px;color:var(--color-text-muted)">(pKi ${pB.pki})</span>`: '<span style="color:var(--color-text-muted)">&gt;10 μM</span>'}
            </td>
            <td style="padding:6px 8px;font-size:13px">${foldDiffHtml}</td>
          `: ''}
        </tr>
      `;
    }).join("");

    const contentHtml = `
      <div style="display:flex;flex-direction:column;gap:12px">
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
          <div>
            <div style="font-size:13px;text-transform:uppercase;color:var(--color-text-muted);font-weight:700">Badana substancja (A)</div>
            <div style="font-size:14px;font-weight:800;color:#5ac8fa">${esc(nameA)}</div>
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <label for="radarCompareSelect" style="font-size:13px;color:var(--color-text-muted);font-weight:600">Porównaj (B):</label>
            <select id="radarCompareSelect" class="form-select" style="background:var(--color-bg);color:var(--color-text);border:1px solid var(--color-border);border-radius:4px;padding:4px 8px;font-size:13px;cursor:pointer">
              <option value="">– Brak (pojedynczy lek) –</option>
              ${availableForCompare.map((o) =>`
                <option value="${esc(o.id)}" ${compoundIdB === o.id ? "selected" : ""}>
                  ${esc(o.name)} (${esc(o.cls)})
                </option>
              `).join("")}
            </select>
          </div>
        </div>

        ${kineticsHtml}
        ${occupancyHtml}
        ${meltzerHtml}

        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:12px 8px;text-align:center">
          <div style="font-size:13px;font-weight:700;color:var(--color-text-muted);margin-bottom:6px;text-transform:uppercase;letter-spacing:0.02em">
             Wielokąt Powinowactwa Receptorowego OUN (Skala pKi 5.0 – 10.0+)
          </div>
          ${radarSvg}
          <div style="font-size:13px;color:var(--color-text-muted);margin-top:6px">
            Im dalej punkt od środka, tym wyższe powinowactwo ($pKi = 9 - \\log_{10}(K_i)$). Izolinia pKi=8 oznacza Ki=10 nM.
          </div>
        </div>

        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:10px 12px;overflow-x:auto">
          <div style="font-size:13px;font-weight:700;color:var(--color-text-muted);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.02em">
             Tabela Stałych Dysocjacji (Ki) & Selektywności
          </div>
          <table style="width:100%;border-collapse:collapse;text-align:left">
            <thead>
              <tr style="border-bottom:1px solid var(--color-border);font-size:13px;color:var(--color-text-muted);text-transform:uppercase">
                <th style="padding:4px 8px">Receptor</th>
                <th style="padding:4px 8px">Działanie</th>
                <th style="padding:4px 8px;color:#5ac8fa">Ki [A] (nM)</th>
                ${affB ? `<th style="padding:4px 8px;color:#ffd60a">Ki [B] (nM)</th><th style="padding:4px 8px">Krotność selektywności</th>`: ""}
              </tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </div>

        ${affA.notes_pl ? `
          <div style="background:var(--color-surface-offset);border-left:1px solid #5ac8fa;border-radius:0 6px 6px 0;padding:8px 12px;font-size:13px;line-height:1.4">
            <strong style="color:var(--color-text)">Komentarz neurofarmakologiczny [A]:</strong>${esc(affA.notes_pl)}
          </div>
        `: ""}
        ${affB && affB.notes_pl ? `
          <div style="background:var(--color-surface-offset);border-left:1px solid #ffd60a;border-radius:0 6px 6px 0;padding:8px 12px;font-size:13px;line-height:1.4">
            <strong style="color:var(--color-text)">Komentarz neurofarmakologiczny [B]:</strong>${esc(affB.notes_pl)}
          </div>
        `: ""}

        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:13px">
          <div>
            <div style="font-weight:700">Biomolecular Structure Viewer</div>
            <div style="font-size:13px;color:var(--color-text-muted)">Zbadaj trójwymiarową architekturę kieszeni wiążących w sidecarze</div>
          </div>
          <a href="sidecar://biomolecular-structure-viewer" class="btn btn-sm" style="font-size:13px">Otwórz Viewer ↗</a>
        </div>
      </div>
    `;

    openSplitPane("", "Radar Receptorowy & Kinetyka OUN", `${nameA}${compB ? `vs ${nameB}`: ""} • Profil Ki / pKi`, contentHtml);

    if (splitBody) {
      const selectCompare = splitBody.querySelector("#radarCompareSelect");
      if (selectCompare) {
        selectCompare.onchange = (e) =>{
          const newCompare = e.target.value || null;
          openReceptorRadarSplitPane(compoundIdA, newCompare);
        };
      }
    }

    const targetHash = compoundIdB
      ? `#/receptor-radar/${compoundIdA}?compare=${encodeURIComponent(compoundIdB)}`
      : `#/receptor-radar/${compoundIdA}`;
    if (location.hash !== targetHash) {
      history.replaceState(null, "", targetHash);
    }
  }

  // ---------- Pharmacokinetics 2-Compartment Simulation Engine (v3.25.0)
  const PK_SIM_PRESETS = {
    fentanyl_morphine: {
      title: "Redystrybucja alfa: Fentanyl vs Morfina",
      cidA: "fentanyl-compound",
      cidB: "morphine-compound",
      regimen: "single",
      scale: "linear",
      phenotype: "EM",
      egfr: 100,
      tau: 8,
      note: "Fentanyl wykazuje błyskawiczną fazę dystrybucji (alfa, t½=20 min) do tkanki tłuszczowej, przez co stężenie we krwi i w OUN spada znacznie szybciej niż Morfiny po pojedynczej dawce, mimo dłuższego terminalnego okresu półtrwania eliminacji (beta)."
    },
    metoprolol_cyp2d6: {
      title: "CYP2D6 Poor Metabolizer: Metoprolol",
      cidA: "metoprolol-compound",
      cidB: null,
      regimen: "steady_state",
      scale: "linear",
      phenotype: "PM",
      egfr: 100,
      tau: 12,
      note: "U pacjentów z fenotypem CYP2D6 PM (brak aktywnego enzymu) klirens metaboliczny spada o 70%, co powoduje ponad 3-krotny wzrost AUC (+250%) i ryzyko ciężkiej bradykardii przy standardowych dawkach."
    },
    digoxin_renal: {
      title: "Niewydolność nerek: Digoksyna (eGFR 25)",
      cidA: "digoxin-compound",
      cidB: null,
      regimen: "steady_state",
      scale: "linear",
      phenotype: "EM",
      egfr: 25,
      tau: 24,
      note: "Digoksyna w 75% zależy od filtracji kłębuszkowej (fe=0.75). Spadek eGFR do 25 ml/min wydłuża t½ z 36h do ponad 80h i potraja stężenie stacjonarne, drastycznie przekraczając wąskie okno terapeutyczne (ryzyko arytmii komorowych)."
    },
    diazepam_midazolam: {
      title: "Akumulacja Steady-State: Diazepam vs Midazolam",
      cidA: "diazepam-compound",
      cidB: "midazolam-compound",
      regimen: "steady_state",
      scale: "log",
      phenotype: "EM",
      egfr: 100,
      tau: 12,
      note: "Midazolam (krótki t½ ~2.5h) jest szybko eliminowany i nie kumuluje się między dawkami (Rac ~1.05). Diazepam (długi t½ ~40h) kumuluje się silnie (Rac >4.5), dając wysokie stężenie minimalne i przedłużoną sedację."
    }
  };

  let pkSimState = {
    cidA: "fentanyl-compound",
    cidB: null,
    regimen: "single", // "single" | "steady_state"
    scale: "linear",   // "linear" | "log"
    phenotype: "EM",   // "EM" | "PM" | "IM" | "UM"
    egfr: 100,         // 15 - 120
    tau: 12,           // 6, 8, 12, 24
    activePreset: null
  };

  function getCompoundCompartmentParams(c) {
    if (!c) return null;
    if (PK_COMPARTMENT_MODELS[c.id]) {
      const cur = PK_COMPARTMENT_MODELS[c.id];
      return { ...cur, name: c.n, is_estimated: false };
    }

    // Physicochemical QSAR Estimator for 2-compartment parameters
    const k = c.pk || {};
    let hl = (k.hl && k.hl[0]) ? parseFloat(k.hl[0]) : 8.0;
    if (isNaN(hl) || hl <= 0) hl = 8.0;
    const fb = (k.pb && k.pb[0]) ? parseFloat(k.pb[0]) : 50.0;
    const alogp = (c.pr && c.pr[1] !== undefined) ? parseFloat(c.pr[1]) : 1.5;
    const fe = (k.fe !== undefined) ? parseFloat(k.fe) : (k.ren === true ? 0.65 : 0.05);
    const primaryCyp = (k.cyp && k.cyp[0]) || "CYP3A4";

    const vc = Math.max(0.2, Math.min(2.5, 0.45 + 0.12 * Math.max(-1, alogp)));
    const vp = Math.max(0.3, Math.min(15.0, vc * (1.2 + 0.85 * Math.max(0, alogp))));
    const vss = vc + vp;
    const k10 = (Math.LN2 / hl) * (1.0 + Math.max(0, Math.min(0.35, alogp * 0.06)));
    const k12 = Math.max(0.15, Math.min(1.6, 0.35 * Math.max(0.5, alogp)));
    const k21 = k12 * (vc / vp);
    const ka = 1.6;

    const sumK = k12 + k21 + k10;
    const prodK = k21 * k10;
    const disc = Math.max(0, sumK * sumK - 4 * prodK);
    const sqrtDisc = Math.sqrt(disc);
    const alpha = (sumK + sqrtDisc) / 2.0;
    const beta = (sumK - sqrtDisc) / 2.0;
    const tHalfAlpha = Math.round((Math.LN2 / alpha) * 1000) / 1000;
    const tHalfBeta = Math.round((Math.LN2 / beta) * 100) / 100;
    const cl = Math.round(k10 * vc * 1000) / 1000;

    return {
      compound_id: c.id,
      name: c.n,
      vc_l_kg: Math.round(vc * 100) / 100,
      vp_l_kg: Math.round(vp * 100) / 100,
      vss_l_kg: Math.round(vss * 100) / 100,
      cl_l_h_kg: cl,
      k12_h: Math.round(k12 * 1000) / 1000,
      k21_h: Math.round(k21 * 1000) / 1000,
      k10_h: Math.round(k10 * 1000) / 1000,
      ka_h: ka,
      alpha_h: Math.round(alpha * 10000) / 10000,
      beta_h: Math.round(beta * 10000) / 10000,
      t_half_alpha_h: tHalfAlpha,
      t_half_beta_h: tHalfBeta,
      primary_cyp: primaryCyp,
      fm_cyp: 0.75,
      fe: Math.round(fe * 100) / 100,
      notes_pl: `Profil estymowany biofizycznie z t½=${hl}h, aLogP=${alogp.toFixed(2)}, wiązania z białkami ${fb}% i frakcji wydalania nerkowego fe=${fe}.`,
      is_estimated: true
    };
  }

  function compute2CompartmentSimulation(params, opts = {}) {
    if (!params) return null;
    const regimen = opts.regimen || "single";
    const phenotype = opts.phenotype || "EM";
    const egfr = typeof opts.egfr === "number" ? opts.egfr : 100;
    const tau = opts.tau || 12;

    const vc = params.vc_l_kg;
    const vp = params.vp_l_kg;
    const k12 = params.k12_h;
    const k21 = params.k21_h;
    const k10 = params.k10_h;
    const ka = params.ka_h || 1.6;
    const alpha = params.alpha_h;
    const beta = params.beta_h;

    const fe = params.fe !== undefined ? params.fe : 0.1;
    const fm = params.fm_cyp !== undefined ? params.fm_cyp : 0.75;
    const cypMultipliers = { EM: 1.0, PM: 0.28, IM: 0.65, UM: 2.1 };
    const cypMult = cypMultipliers[phenotype] || 1.0;
    const renalMult = Math.max(0.1, egfr / 100.0);

    const clTot = params.cl_l_h_kg || (k10 * vc);
    const clHepBase = clTot * (1.0 - fe);
    const clRenBase = clTot * fe;
    const clHepMod = clHepBase * ((1.0 - fm) + fm * cypMult);
    const clRenMod = clRenBase * renalMult;
    const clTotMod = clHepMod + clRenMod;
    const k10Mod = Math.max(0.001, k10 * (clTotMod / clTot));

    const sumKMod = k12 + k21 + k10Mod;
    const prodKMod = k21 * k10Mod;
    const discMod = Math.max(0, sumKMod * sumKMod - 4 * prodKMod);
    const sqrtDiscMod = Math.sqrt(discMod);
    const alphaMod = (sumKMod + sqrtDiscMod) / 2.0;
    const betaMod = (sumKMod - sqrtDiscMod) / 2.0;

    const effectiveHl = Math.max(params.t_half_beta_h, Math.LN2 / betaMod);
    const nDoses = regimen === "steady_state" ? 5 : 1;
    const horizonHours = opts.horizonHours || (regimen === "steady_state" ? tau * nDoses : Math.min(168, Math.max(12, Math.round(effectiveHl * 4.2))));

    function getCoeffs(a, b, k10_val, k12_val, k21_val, ka_val, vc_val, vp_val) {
      let safeKa = ka_val;
      if (Math.abs(safeKa - a) < 0.001) safeKa += 0.005;
      if (Math.abs(safeKa - b) < 0.001) safeKa += 0.005;
      const A = (safeKa / vc_val) * (k21_val - a) / ((safeKa - a) * (b - a));
      const B = (safeKa / vc_val) * (k21_val - b) / ((safeKa - b) * (a - b));
      return { A, B, safeKa };
    }

    const baseCoeff = getCoeffs(alpha, beta, k10, k12, k21, ka, vc, vp);
    const modCoeff = getCoeffs(alphaMod, betaMod, k10Mod, k12, k21, ka, vc, vp);

    function calcC1Single(t, cf, a, b) {
      if (t < 0) return 0.0;
      return Math.max(0, cf.A * Math.exp(-a * t) + cf.B * Math.exp(-b * t) - (cf.A + cf.B) * Math.exp(-cf.safeKa * t));
    }

    function calcC2Single(t, a, b, ka_val, k12_val, vp_val) {
      if (t < 0) return 0.0;
      let safeKa = ka_val;
      if (Math.abs(safeKa - a) < 0.001) safeKa += 0.005;
      if (Math.abs(safeKa - b) < 0.001) safeKa += 0.005;
      const t1 = Math.exp(-a * t) / ((b - a) * (safeKa - a));
      const t2 = Math.exp(-b * t) / ((a - b) * (safeKa - b));
      const t3 = Math.exp(-safeKa * t) / ((safeKa - a) * (safeKa - b));
      return Math.max(0, (k12_val * safeKa / vp_val) * (t1 + t2 + t3));
    }

    const step = horizonHours / 120.0;
    const timePoints = [];
    let maxBaseC1 = 0.0001;
    let tMaxBase = 0;

    for (let t = 0; t <= horizonHours + 0.001; t += step) {
      let c1Base = 0;
      let c2Base = 0;
      let c1Mod = 0;

      if (regimen === "single") {
        c1Base = calcC1Single(t, baseCoeff, alpha, beta);
        c2Base = calcC2Single(t, alpha, beta, ka, k12, vp);
        c1Mod = calcC1Single(t, modCoeff, alphaMod, betaMod);
      } else {
        const curDoseIdx = Math.floor(t / tau);
        for (let i = 0; i <= curDoseIdx; i++) {
          const dt = t - i * tau;
          c1Base += calcC1Single(dt, baseCoeff, alpha, beta);
          c2Base += calcC2Single(dt, alpha, beta, ka, k12, vp);
          c1Mod += calcC1Single(dt, modCoeff, alphaMod, betaMod);
        }
      }

      if (c1Base >maxBaseC1) {
        maxBaseC1 = c1Base;
        tMaxBase = t;
      }
      timePoints.push({ t, c1Base, c2Base, c1Mod });
    }

    const normPoints = timePoints.map((pt) =>({
      t: pt.t,
      c1Pct: Math.round((pt.c1Base / maxBaseC1) * 1000) / 10,
      c2Pct: Math.round((pt.c2Base / maxBaseC1) * 1000) / 10,
      c1ModPct: Math.round((pt.c1Mod / maxBaseC1) * 1000) / 10
    }));

    let aucBase = 0;
    let aucMod = 0;
    for (let i = 1; i < normPoints.length; i++) {
      const dt = normPoints[i].t - normPoints[i - 1].t;
      aucBase += 0.5 * (normPoints[i].c1Pct + normPoints[i - 1].c1Pct) * dt;
      aucMod += 0.5 * (normPoints[i].c1ModPct + normPoints[i - 1].c1ModPct) * dt;
    }

    const deltaAucPct = aucBase >0 ? Math.round(((aucMod / aucBase) - 1.0) * 100) : 0;
    const rac = Math.round((1.0 / (1.0 - Math.exp(-beta * tau))) * 100) / 100;
    const racMod = Math.round((1.0 / (1.0 - Math.exp(-betaMod * tau))) * 100) / 100;

    const maxC1ModPct = Math.max(...normPoints.map(p =>p.c1ModPct));
    const maxC1BasePct = Math.max(...normPoints.map(p =>p.c1Pct));

    return {
      params,
      regimen,
      phenotype,
      egfr,
      tau,
      horizonHours,
      points: normPoints,
      tMaxHours: Math.round(tMaxBase * 10) / 10,
      maxBasePct: Math.round(maxC1BasePct),
      maxModPct: Math.round(maxC1ModPct),
      aucBase: Math.round(aucBase),
      aucMod: Math.round(aucMod),
      deltaAucPct,
      rac,
      racMod,
      alphaMod: Math.round(alphaMod * 10000) / 10000,
      betaMod: Math.round(betaMod * 10000) / 10000,
      tHalfAlphaMod: Math.round((Math.LN2 / alphaMod) * 1000) / 1000,
      tHalfBetaMod: Math.round((Math.LN2 / betaMod) * 100) / 100,
      hasModification: phenotype !== "EM" || egfr !== 100
    };
  }

  let pkChartCounter = 0;

  function renderPkCurveSvg(simA, simB = null, opts = {}) {
    if (!simA || !simA.points || !simA.points.length) {
      return '<div style="color:var(--color-text-muted);font-size:13px;text-align:center;padding:20px">Brak danych farmakokinetycznych do symulacji.</div>';
    }

    const width = opts.width || 540;
    const height = opts.height || 260;
    const isLog = opts.isLog || false;
    const isMini = opts.isMini || false;

    const padL = isMini ? 32 : 55;
    const padR = isMini ? 12 : 25;
    const padT = isMini ? 10 : 25;
    const padB = isMini ? 22 : 36;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;

    const tMax = simA.horizonHours;

    let maxVal = Math.max(115, simA.maxBasePct, simA.hasModification ? simA.maxModPct : 100);
    if (simB && simB.points) {
      maxVal = Math.max(maxVal, simB.maxBasePct, simB.hasModification ? simB.maxModPct : 100);
    }
    maxVal = Math.min(600, Math.ceil(maxVal / 25) * 25);

    const logMin = 1.0;
    const logMax = Math.max(100, maxVal);

    function getX(t) {
      return padL + (t / tMax) * plotW;
    }

    function getY(val) {
      if (isLog) {
        const vSafe = Math.max(logMin, val);
        const ratio = (Math.log10(vSafe) - Math.log10(logMin)) / (Math.log10(logMax) - Math.log10(logMin));
        return padT + plotH - (Math.max(0, Math.min(1, ratio)) * plotH);
      }
      const ratio = val / maxVal;
      return padT + plotH - (Math.max(0, Math.min(1.2, ratio)) * plotH);
    }

    const xTicksCount = isMini ? 4 : 8;
    const xTicks = [];
    for (let i = 0; i <= xTicksCount; i++) {
      const t = Math.round((i / xTicksCount) * tMax);
      const x = getX(t);
      xTicks.push(`
        <line x1="${x.toFixed(1)}" y1="${padT}" x2="${x.toFixed(1)}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
        <text x="${x.toFixed(1)}" y="${padT + plotH + (isMini ? 12 : 16)}" text-anchor="middle" fill="#94969c" font-size="11" font-family="system-ui, -apple-system, sans-serif">${t}h</text>
      `);
    }

    let dosingLines = "";
    if (simA.regimen === "steady_state") {
      const tau = simA.tau;
      for (let dt = tau; dt < tMax; dt += tau) {
        const x = getX(dt);
        dosingLines += `
          <line x1="${x.toFixed(1)}" y1="${padT}" x2="${x.toFixed(1)}" y2="${padT + plotH}" stroke="rgba(90, 200, 250, 0.25)" stroke-width="1" stroke-dasharray="3,3" />
        `;
      }
    }

    const yTicks = [];
    if (isLog) {
      const logLevels = [1, 2, 5, 10, 25, 50, 100, 200, 400].filter(v =>v <= maxVal);
      logLevels.forEach((lvl) =>{
        const y = getY(lvl);
        yTicks.push(`
          <line x1="${padL}" y1="${y.toFixed(1)}" x2="${padL + plotW}" y2="${y.toFixed(1)}" stroke="rgba(255,255,255,${lvl === 100 ? '0.18' : '0.06'})" stroke-width="${lvl === 100 ? '1.5' : '1'}" stroke-dasharray="${lvl === 100 ? 'none' : '2,2'}" />
          <text x="${padL - (isMini ? 4 : 8)}" y="${(y + 3).toFixed(1)}" text-anchor="end" fill="${lvl === 100 ? '#5ac8fa' : '#94969c'}" font-size="11" font-family="system-ui, -apple-system, sans-serif">${lvl}%</text>
        `);
      });
    } else {
      const stepY = maxVal <= 150 ? 25 : (maxVal <= 300 ? 50 : 100);
      for (let val = 0; val <= maxVal; val += stepY) {
        const y = getY(val);
        yTicks.push(`
          <line x1="${padL}" y1="${y.toFixed(1)}" x2="${padL + plotW}" y2="${y.toFixed(1)}" stroke="rgba(255,255,255,${val === 100 ? '0.18' : '0.06'})" stroke-width="${val === 100 ? '1.5' : '1'}" stroke-dasharray="${val === 100 ? 'none' : '2,2'}" />
          <text x="${padL - (isMini ? 4 : 8)}" y="${(y + 3).toFixed(1)}" text-anchor="end" fill="${val === 100 ? '#5ac8fa' : '#94969c'}" font-size="11" font-family="system-ui, -apple-system, sans-serif">${val}%</text>
        `);
      }
    }

    function makePath(pts, key) {
      return pts.map((p, idx) =>`${idx === 0 ? 'M' : 'L'} ${getX(p.t).toFixed(1)} ${getY(p[key]).toFixed(1)}`).join(' ');
    }

    const pathC1Base = makePath(simA.points, "c1Pct");
    const pathC2Base = makePath(simA.points, "c2Pct");
    const pathC1Mod = simA.hasModification ? makePath(simA.points, "c1ModPct") : "";
    const areaC1Base = `${pathC1Base} L ${getX(tMax).toFixed(1)} ${padT + plotH} L ${padL} ${padT + plotH} Z`;

    let pathB = "";
    if (simB && simB.points) {
      pathB = makePath(simB.points, simB.hasModification ? "c1ModPct" : "c1Pct");
    }

    pkChartCounter++;
    const chartId = `pkChart_${pkChartCounter}`;

    return `
      <svg id="${chartId}" viewBox="0 0 ${width} ${height}" style="width:100%;max-width:${width}px;height:auto;display:block;margin:0 auto;overflow:visible;user-select:none">
        <defs>
          <linearGradient id="${chartId}_gradA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#5ac8fa" stop-opacity="0.32" />
            <stop offset="100%" stop-color="#5ac8fa" stop-opacity="0.02" />
          </linearGradient>
        </defs>

        <!-- Grid -->
        ${xTicks.join("")}
        ${yTicks.join("")}
        ${dosingLines}

        <!-- Axes lines -->
        <line x1="${padL}" y1="${padT + plotH}" x2="${padL + plotW}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" />
        <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" />

        <!-- Area under curve (AUC) -->
        <path d="${areaC1Base}" fill="url(#${chartId}_gradA)" />

        <!-- C2 Peripheral Tissue curve -->
        <path d="${pathC2Base}" fill="none" stroke="#ff9500" stroke-width="${isMini ? '1.2' : '1.8'}" stroke-dasharray="4,3" opacity="0.85" />

        <!-- C1 Central Plasma curve -->
        <path d="${pathC1Base}" fill="none" stroke="#5ac8fa" stroke-width="${isMini ? '1.8' : '2.5'}" />

        <!-- Modified curve (CYP / eGFR) -->
        ${simA.hasModification ? `
          <path d="${pathC1Mod}" fill="none" stroke="${simA.deltaAucPct >= 0 ? '#ff3b30' : '#52a2a8'}" stroke-width="${isMini ? '2.0' : '2.8'}" stroke-dasharray="${simA.phenotype === 'UM' ? '3,3' : 'none'}" />
        `: ""}

        <!-- Compared Drug B curve -->
        ${pathB ? `
          <path d="${pathB}" fill="none" stroke="#ffd60a" stroke-width="${isMini ? '1.8' : '2.5'}" />
        `: ""}

        <!-- Interactive Crosshair Tracker elements -->
        ${!isMini ? `
          <line id="${chartId}_vLine" x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.45)" stroke-width="1" stroke-dasharray="2,2" style="display:none;pointer-events:none" />
          <circle id="${chartId}_dotC1" cx="0" cy="0" r="4" fill="#5ac8fa" stroke="#fff" stroke-width="1.5" style="display:none;pointer-events:none" />
          <circle id="${chartId}_dotC2" cx="0" cy="0" r="3.5" fill="#ff9500" stroke="#fff" stroke-width="1" style="display:none;pointer-events:none" />
          <g id="${chartId}_tooltip" style="display:none;pointer-events:none">
            <rect id="${chartId}_tipBox" x="0" y="0" width="135" height="52" rx="4" fill="rgba(20,20,28,0.92)" stroke="var(--color-border)" stroke-width="1" />
            <text id="${chartId}_tipTextT" x="8" y="16" fill="#fff" font-size="11" font-weight="700" font-family="system-ui, -apple-system, sans-serif">t: 0h</text>
            <text id="${chartId}_tipTextC1" x="8" y="31" fill="#5ac8fa" font-size="11" font-family="system-ui, -apple-system, sans-serif">C1: 0%</text>
            <text id="${chartId}_tipTextC2" x="8" y="45" fill="#ff9500" font-size="11" font-family="system-ui, -apple-system, sans-serif">C2 (tkanki): 0%</text>
          </g>
          <rect x="${padL}" y="${padT}" width="${plotW}" height="${plotH}" fill="transparent" style="cursor:crosshair" id="${chartId}_hitbox" />
        `: ""}
      </svg>
    `;
  }

  function wirePkChartCrosshair(chartId, simData, isLog) {
    const svg = $(chartId);
    if (!svg) return;
    const hitbox = svg.querySelector(`#${chartId}_hitbox`);
    const vLine = svg.querySelector(`#${chartId}_vLine`);
    const dotC1 = svg.querySelector(`#${chartId}_dotC1`);
    const dotC2 = svg.querySelector(`#${chartId}_dotC2`);
    const tip = svg.querySelector(`#${chartId}_tooltip`);
    const tipT = svg.querySelector(`#${chartId}_tipTextT`);
    const tipC1 = svg.querySelector(`#${chartId}_tipTextC1`);
    const tipC2 = svg.querySelector(`#${chartId}_tipTextC2`);
    if (!hitbox || !vLine || !tip) return;

    const padL = 55;
    const padT = 25;
    const plotW = 540 - 55 - 25;
    const plotH = 260 - 25 - 36;
    const tMax = simData.horizonHours;

    let maxVal = Math.max(115, simData.maxBasePct, simData.hasModification ? simData.maxModPct : 100);
    maxVal = Math.min(600, Math.ceil(maxVal / 25) * 25);
    const logMin = 1.0;
    const logMax = Math.max(100, maxVal);

    function getY(val) {
      if (isLog) {
        const vSafe = Math.max(logMin, val);
        const ratio = (Math.log10(vSafe) - Math.log10(logMin)) / (Math.log10(logMax) - Math.log10(logMin));
        return padT + plotH - (Math.max(0, Math.min(1, ratio)) * plotH);
      }
      return padT + plotH - (Math.max(0, Math.min(1.2, val / maxVal)) * plotH);
    }

    hitbox.onmousemove = (e) =>{
      const rect = svg.getBoundingClientRect();
      const scaleX = 540 / rect.width;
      const mouseSvgX = (e.clientX - rect.left) * scaleX;
      const tRatio = Math.max(0, Math.min(1, (mouseSvgX - padL) / plotW));
      const curT = tRatio * tMax;

      let closest = simData.points[0];
      let minDiff = 999999;
      simData.points.forEach((pt) =>{
        const diff = Math.abs(pt.t - curT);
        if (diff < minDiff) {
          minDiff = diff;
          closest = pt;
        }
      });

      const ptX = padL + (closest.t / tMax) * plotW;
      const ptYC1 = getY(closest.c1Pct);
      const ptYC2 = getY(closest.c2Pct);

      vLine.setAttribute("x1", ptX);
      vLine.setAttribute("x2", ptX);
      vLine.style.display = "block";

      dotC1.setAttribute("cx", ptX);
      dotC1.setAttribute("cy", ptYC1);
      dotC1.style.display = "block";

      dotC2.setAttribute("cx", ptX);
      dotC2.setAttribute("cy", ptYC2);
      dotC2.style.display = "block";

      const tipX = ptX >370 ? ptX - 142 : ptX + 8;
      const tipY = Math.max(padT, Math.min(plotH, ptYC1 - 25));
      tip.setAttribute("transform", `translate(${tipX}, ${tipY})`);
      tipT.textContent = `t: ${closest.t.toFixed(1)}h`;
      tipC1.textContent = `C1 (krew): ${closest.c1Pct.toFixed(1)}%`;
      tipC2.textContent = `C2 (tkanki): ${closest.c2Pct.toFixed(1)}%`;
      tip.style.display = "block";
    };

    hitbox.onmouseleave = () =>{
      vLine.style.display = "none";
      dotC1.style.display = "none";
      dotC2.style.display = "none";
      tip.style.display = "none";
    };
  }

  function openPkSimulatorSplitPane(compoundIdA, compoundIdB = null, opts = {}) {
    if (compoundIdA) pkSimState.cidA = compoundIdA;
    if (compoundIdB !== undefined) pkSimState.cidB = compoundIdB;
    if (opts.regimen) pkSimState.regimen = opts.regimen;
    if (opts.scale) pkSimState.scale = opts.scale;
    if (opts.phenotype) pkSimState.phenotype = opts.phenotype;
    if (opts.egfr !== undefined && opts.egfr !== null) pkSimState.egfr = opts.egfr;
    if (opts.tau !== undefined && opts.tau !== null) pkSimState.tau = opts.tau;

    let compA = C.find((x) =>x.id === pkSimState.cidA);
    if (!compA) {
      compA = C.find((x) =>x.pk && x.pk.hl) || C[0];
      pkSimState.cidA = compA.id;
    }
    const paramsA = getCompoundCompartmentParams(compA);

    let compB = pkSimState.cidB ? C.find((x) =>x.id === pkSimState.cidB) : null;
    const paramsB = compB ? getCompoundCompartmentParams(compB) : null;

    const simA = compute2CompartmentSimulation(paramsA, {
      regimen: pkSimState.regimen,
      phenotype: pkSimState.phenotype,
      egfr: pkSimState.egfr,
      tau: pkSimState.tau
    });

    const simB = paramsB ? compute2CompartmentSimulation(paramsB, {
      regimen: pkSimState.regimen,
      phenotype: "EM",
      egfr: 100,
      tau: pkSimState.tau
    }) : null;

    const svgHtml = renderPkCurveSvg(simA, simB, { isLog: pkSimState.scale === "log" });

    const availableForCompare = C
      .filter((c) =>c.pk && (c.pk.hl || PK_COMPARTMENT_MODELS[c.id]) && c.id !== compA.id)
      .map((c) =>({ id: c.id, name: c.n, isCurated: !!PK_COMPARTMENT_MODELS[c.id] }))
      .sort((a, b) =>(b.isCurated - a.isCurated) || a.name.localeCompare(b.name));

    const presetsHtml = Object.entries(PK_SIM_PRESETS).map(([key, p]) =>`
      <button class="btn btn-sm ${pkSimState.activePreset === key ? 'btn-primary' : ''}" data-load-pk-preset="${esc(key)}" style="margin:2px 4px 2px 0;font-size:13px" title="${esc(p.note)}">
         ${esc(p.title)}
      </button>
    `).join("");

    const contentHtml = `
      <div style="display:flex;flex-direction:column;gap:12px">
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
          <div>
            <div style="font-size:13px;text-transform:uppercase;color:var(--color-text-muted);font-weight:700">Badana substancja (A)</div>
            <div style="font-size:14px;font-weight:800;color:#5ac8fa">${esc(compA.n)}</div>
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <label for="pkCompareSelect" style="font-size:13px;color:var(--color-text-muted);font-weight:600">Porównaj (B):</label>
            <select id="pkCompareSelect" class="form-select" style="background:var(--color-bg);color:var(--color-text);border:1px solid var(--color-border);border-radius:4px;padding:4px 8px;font-size:13px;cursor:pointer">
              <option value="">– Brak (pojedynczy lek) –</option>
              ${availableForCompare.slice(0, 50).map((o) =>`
                <option value="${esc(o.id)}" ${pkSimState.cidB === o.id ? "selected" : ""}>
                  ${o.isCurated ? " " : ""}${esc(o.name)}
                </option>
              `).join("")}
            </select>
          </div>
        </div>

        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:6px 10px;display:flex;align-items:center;gap:6px">
            <span style="font-size:13px;color:var(--color-text-muted);font-weight:600">Podanie:</span>
            <button class="btn btn-sm ${pkSimState.regimen === 'single' ? 'btn-primary' : ''}" id="pkRegimenSingleBtn" style="font-size:13px">Pojedyncza dawka</button>
            <button class="btn btn-sm ${pkSimState.regimen === 'steady_state' ? 'btn-primary' : ''}" id="pkRegimenSteadyBtn" style="font-size:13px">Steady-State (Wielokrotna)</button>
          </div>
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:6px 10px;display:flex;align-items:center;gap:6px">
            <span style="font-size:13px;color:var(--color-text-muted);font-weight:600">Oś stężenia:</span>
            <button class="btn btn-sm ${pkSimState.scale === 'linear' ? 'btn-primary' : ''}" id="pkScaleLinearBtn" style="font-size:13px">Liniowa (% Cmax)</button>
            <button class="btn btn-sm ${pkSimState.scale === 'log' ? 'btn-primary' : ''}" id="pkScaleLogBtn" style="font-size:13px">Półlogarytmiczna (Semi-log)</button>
          </div>
        </div>

        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:10px 12px">
          <div style="font-size:13px;font-weight:700;color:var(--color-text-muted);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.02em">
             Zmienność Osobnicza: Farmakogenomika CYP & Wydolność Nerek
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:12px;align-items:center">
            <div>
              <div style="font-size:13px;margin-bottom:4px;display:flex;justify-content:space-between">
                <span>Fenotyp enzymatyczny (Główny: <b>${esc(paramsA.primary_cyp || "CYP3A4")}</b>):</span>
                <span class="badge" style="font-size:13px">${pkSimState.phenotype}</span>
              </div>
              <div style="display:flex;gap:4px">
                <button class="btn btn-sm ${pkSimState.phenotype === 'EM' ? 'btn-primary' : ''}" data-pk-pheno="EM" style="flex:1;font-size:13px" title="Extensive Metabolizer (Typowy / Norma 1.0x)">EM (Norma)</button>
                <button class="btn btn-sm ${pkSimState.phenotype === 'PM' ? 'btn-danger' : ''}" data-pk-pheno="PM" style="flex:1;font-size:13px" title="Poor Metabolizer (Słaby metabolizm 0.28x - akumulacja)">PM (Słaby)</button>
                <button class="btn btn-sm ${pkSimState.phenotype === 'IM' ? 'btn-primary' : ''}" data-pk-pheno="IM" style="flex:1;font-size:13px" title="Intermediate Metabolizer (Pośredni 0.65x)">IM</button>
                <button class="btn btn-sm ${pkSimState.phenotype === 'UM' ? 'btn-primary' : ''}" data-pk-pheno="UM" style="flex:1;font-size:13px" title="Ultra-Rapid Metabolizer (Szybki 2.1x - spadek AUC)">UM</button>
              </div>
            </div>

            <div>
              <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
                <span>Wydolność nerek (eGFR):</span>
                <b style="color:${pkSimState.egfr < 60 ? '#ff3b30' : (pkSimState.egfr < 90 ? '#ff9500' : '#34c759')}">${pkSimState.egfr} ml/min</b>
              </div>
              <input type="range" id="pkEgfrRange" min="15" max="120" step="5" value="${pkSimState.egfr}" style="width:100%;cursor:pointer">
              <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--color-text-muted);margin-top:2px">
                <span>15 (PChN st. 4)</span>
                <span>60 (Umiarkowana)</span>
                <span>100 (Norma)</span>
                <span>120</span>
              </div>
            </div>

            ${pkSimState.regimen === 'steady_state' ? `
              <div>
                <div style="font-size:13px;margin-bottom:4px">Interwał dawkowania (&tau;): <b>co ${pkSimState.tau}h</b></div>
                <div style="display:flex;gap:4px">
                  <button class="btn btn-sm ${pkSimState.tau === 6 ? 'btn-primary' : ''}" data-pk-tau="6" style="flex:1;font-size:13px">co 6h</button>
                  <button class="btn btn-sm ${pkSimState.tau === 8 ? 'btn-primary' : ''}" data-pk-tau="8" style="flex:1;font-size:13px">co 8h</button>
                  <button class="btn btn-sm ${pkSimState.tau === 12 ? 'btn-primary' : ''}" data-pk-tau="12" style="flex:1;font-size:13px">co 12h</button>
                  <button class="btn btn-sm ${pkSimState.tau === 24 ? 'btn-primary' : ''}" data-pk-tau="24" style="flex:1;font-size:13px">co 24h</button>
                </div>
              </div>
            `: ""}
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(110px, 1fr));gap:6px">
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:6px 8px;text-align:center">
            <div style="font-size:13px;color:var(--color-text-muted);text-transform:uppercase">Tmax (Wchłanianie)</div>
            <div style="font-size:13px;font-weight:700;color:var(--color-text)">${simA.tMaxHours} h</div>
          </div>
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:6px 8px;text-align:center">
            <div style="font-size:13px;color:var(--color-text-muted);text-transform:uppercase">t½,&alpha; (Dystrybucja)</div>
            <div style="font-size:13px;font-weight:700;color:#ff9500">${paramsA.t_half_alpha_h} h</div>
          </div>
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:6px 8px;text-align:center">
            <div style="font-size:13px;color:var(--color-text-muted);text-transform:uppercase">t½,&beta; (Eliminacja)</div>
            <div style="font-size:13px;font-weight:700;color:#5ac8fa">${simA.hasModification ? `${simA.tHalfBetaMod} h`: `${paramsA.t_half_beta_h} h`}</div>
          </div>
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:6px 8px;text-align:center">
            <div style="font-size:13px;color:var(--color-text-muted);text-transform:uppercase">&Delta; AUC (Ekspozycja)</div>
            <div style="font-size:13px;font-weight:700;color:${simA.deltaAucPct >50 ? '#ff3b30' : (simA.deltaAucPct < -30 ? '#52a2a8' : '#34c759')}">
              ${simA.deltaAucPct >= 0 ? `+${simA.deltaAucPct}%`: `${simA.deltaAucPct}%`}
            </div>
          </div>
          ${pkSimState.regimen === 'steady_state' ? `
            <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:6px 8px;text-align:center">
              <div style="font-size:13px;color:var(--color-text-muted);text-transform:uppercase">Wskaźnik Rac</div>
              <div style="font-size:13px;font-weight:700;color:var(--color-text)">${simA.hasModification ? simA.racMod : simA.rac}×</div>
            </div>
          `: ""}
        </div>

        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:12px 8px;position:relative">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:13px;font-weight:700;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.02em">
               Krzywa Dynamiki Stężeń C(t) (${pkSimState.regimen === 'steady_state' ? 'Stan Stacjonarny' : 'Pojedyncza dawka'})
            </span>
            <div style="display:flex;gap:12px;font-size:13px">
              <span style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:3px;background:#5ac8fa;display:inline-block"></span>C1 Centralny (Krew)</span>
              <span style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:2px;background:#ff9500;border-bottom:1px dashed #ff9500;display:inline-block"></span>C2 Obwodowy (Tkanki)</span>
              ${simA.hasModification ? `<span style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:3px;background:${simA.deltaAucPct >= 0 ? '#ff3b30' : '#52a2a8'};display:inline-block"></span>Zmodyfikowana</span>`: ''}
              ${simB ? `<span style="display:flex;align-items:center;gap:4px"><span style="width:10px;height:3px;background:#ffd60a;display:inline-block"></span>Lek B (${esc(compB.n)})</span>`: ''}
            </div>
          </div>
          ${svgHtml}
          <div style="font-size:13px;color:var(--color-text-muted);margin-top:6px;text-align:center">
            Przesuwaj kursor po wykresie, aby śledzić stężenie w czasie. Skala znormalizowana (100% = Cmax dawki referencyjnej EM).
          </div>
        </div>

        <div style="padding-top:6px">
          <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.02em;color:var(--color-text-muted);margin-bottom:6px">
             Kliniczne Studia Przypadków PK (Presety edukacyjne)
          </div>
          <div style="display:flex;flex-wrap:wrap">
            ${presetsHtml}
          </div>
        </div>

        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 12px;overflow-x:auto">
          <div style="font-size:13px;font-weight:700;color:var(--color-text-muted);margin-bottom:6px;text-transform:uppercase;letter-spacing:0.02em">
             Mikrostałe Modelu 2-Kompartmentowego
          </div>
          <table style="width:100%;border-collapse:collapse;text-align:left;font-size:13px">
            <thead>
              <tr style="border-bottom:1px solid var(--color-border);color:var(--color-text-muted);font-size:13px;text-transform:uppercase">
                <th style="padding:4px 6px">Parametr</th>
                <th style="padding:4px 6px">Opis farmakokinetyczny</th>
                <th style="padding:4px 6px;color:#5ac8fa">${esc(compA.n)}</th>
                ${compB ? `<th style="padding:4px 6px;color:#ffd60a">${esc(compB.n)}</th>`: ''}
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid var(--color-border)">
                <td style="padding:4px 6px;font-weight:700">Vc / Vp (L/kg)</td>
                <td style="padding:4px 6px;color:var(--color-text-muted)">Objętość kompartmentu centralnego / obwodowego</td>
                <td style="padding:4px 6px">${paramsA.vc_l_kg} / ${paramsA.vp_l_kg}</td>
                ${compB ? `<td style="padding:4px 6px">${paramsB.vc_l_kg} / ${paramsB.vp_l_kg}</td>`: ''}
              </tr>
              <tr style="border-bottom:1px solid var(--color-border)">
                <td style="padding:4px 6px;font-weight:700">k12 / k21 (h⁻¹)</td>
                <td style="padding:4px 6px;color:var(--color-text-muted)">Stałe transferu międzykrwiowego i tkankowego</td>
                <td style="padding:4px 6px">${paramsA.k12_h} / ${paramsA.k21_h}</td>
                ${compB ? `<td style="padding:4px 6px">${paramsB.k12_h} / ${paramsB.k21_h}</td>`: ''}
              </tr>
              <tr style="border-bottom:1px solid var(--color-border)">
                <td style="padding:4px 6px;font-weight:700">k10 / CL (h⁻¹, L/h/kg)</td>
                <td style="padding:4px 6px;color:var(--color-text-muted)">Eliminacja całkowita z kompartmentu centralnego</td>
                <td style="padding:4px 6px">${paramsA.k10_h} / ${paramsA.cl_l_h_kg}</td>
                ${compB ? `<td style="padding:4px 6px">${paramsB.k10_h} / ${paramsB.cl_l_h_kg}</td>`: ''}
              </tr>
              <tr style="border-bottom:1px solid var(--color-border)">
                <td style="padding:4px 6px;font-weight:700">fe / Główny CYP</td>
                <td style="padding:4px 6px;color:var(--color-text-muted)">Frakcja nerkowa (fe) oraz szlak metaboliczny</td>
                <td style="padding:4px 6px">${paramsA.fe} / ${esc(paramsA.primary_cyp || "–")}</td>
                ${compB ? `<td style="padding:4px 6px">${paramsB.fe} / ${esc(paramsB.primary_cyp || "–")}</td>`: ''}
              </tr>
            </tbody>
          </table>
        </div>

        ${paramsA.notes_pl ? `
          <div style="background:var(--color-surface-offset);border-left:1px solid #5ac8fa;border-radius:0 6px 6px 0;padding:8px 12px;font-size:13px;line-height:1.4">
            <strong style="color:var(--color-text)">Komentarz farmakokinetyczny [A]:</strong>${esc(paramsA.notes_pl)}
          </div>
        `: ""}
        ${paramsB && paramsB.notes_pl ? `
          <div style="background:var(--color-surface-offset);border-left:1px solid #ffd60a;border-radius:0 6px 6px 0;padding:8px 12px;font-size:13px;line-height:1.4">
            <strong style="color:var(--color-text)">Komentarz farmakokinetyczny [B]:</strong>${esc(paramsB.notes_pl)}
          </div>
        `: ""}

        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;font-size:13px">
          <div>
            <div style="font-weight:700">Biomolecular Structure Viewer</div>
            <div style="font-size:13px;color:var(--color-text-muted)">Zbadaj architekturę 3D enzymów CYP oraz transporterów w Mol*</div>
          </div>
          <a href="sidecar://biomolecular-structure-viewer" class="btn btn-sm" style="font-size:13px">Otwórz Viewer ↗</a>
        </div>
      </div>
    `;

    openSplitPane("", "Symulator Farmakokinetyki 2-Kompartmentowej", `${compA.n}${compB ? `vs ${compB.n}`: ""} • Dynamika C(t)`, contentHtml);

    if (splitBody) {
      const svgEl = splitBody.querySelector("svg");
      if (svgEl && svgEl.id) {
        wirePkChartCrosshair(svgEl.id, simA, pkSimState.scale === "log");
      }

      const compSelect = splitBody.querySelector("#pkCompareSelect");
      if (compSelect) {
        compSelect.onchange = (e) =>{
          openPkSimulatorSplitPane(pkSimState.cidA, e.target.value || null);
        };
      }

      const regSingle = splitBody.querySelector("#pkRegimenSingleBtn");
      if (regSingle) {
        regSingle.onclick = () =>{
          pkSimState.regimen = "single";
          pkSimState.activePreset = null;
          openPkSimulatorSplitPane(pkSimState.cidA, pkSimState.cidB);
        };
      }
      const regSteady = splitBody.querySelector("#pkRegimenSteadyBtn");
      if (regSteady) {
        regSteady.onclick = () =>{
          pkSimState.regimen = "steady_state";
          pkSimState.activePreset = null;
          openPkSimulatorSplitPane(pkSimState.cidA, pkSimState.cidB);
        };
      }

      const scLinear = splitBody.querySelector("#pkScaleLinearBtn");
      if (scLinear) {
        scLinear.onclick = () =>{
          pkSimState.scale = "linear";
          openPkSimulatorSplitPane(pkSimState.cidA, pkSimState.cidB);
        };
      }
      const scLog = splitBody.querySelector("#pkScaleLogBtn");
      if (scLog) {
        scLog.onclick = () =>{
          pkSimState.scale = "log";
          openPkSimulatorSplitPane(pkSimState.cidA, pkSimState.cidB);
        };
      }

      splitBody.querySelectorAll("[data-pk-pheno]").forEach((btn) =>{
        btn.onclick = () =>{
          pkSimState.phenotype = btn.dataset.pkPheno;
          pkSimState.activePreset = null;
          openPkSimulatorSplitPane(pkSimState.cidA, pkSimState.cidB);
        };
      });

      splitBody.querySelectorAll("[data-pk-tau]").forEach((btn) =>{
        btn.onclick = () =>{
          pkSimState.tau = parseInt(btn.dataset.pkTau, 10);
          pkSimState.activePreset = null;
          openPkSimulatorSplitPane(pkSimState.cidA, pkSimState.cidB);
        };
      });

      const egfrRange = splitBody.querySelector("#pkEgfrRange");
      if (egfrRange) {
        egfrRange.oninput = (e) =>{
          pkSimState.egfr = parseInt(e.target.value, 10);
          pkSimState.activePreset = null;
          openPkSimulatorSplitPane(pkSimState.cidA, pkSimState.cidB);
        };
      }

      splitBody.querySelectorAll("[data-load-pk-preset]").forEach((btn) =>{
        btn.onclick = () =>{
          const pKey = btn.dataset.loadPkPreset;
          const preset = PK_SIM_PRESETS[pKey];
          if (!preset) return;
          pkSimState.cidA = preset.cidA;
          pkSimState.cidB = preset.cidB;
          pkSimState.regimen = preset.regimen;
          pkSimState.scale = preset.scale;
          pkSimState.phenotype = preset.phenotype;
          pkSimState.egfr = preset.egfr;
          pkSimState.tau = preset.tau;
          pkSimState.activePreset = pKey;
          openPkSimulatorSplitPane(pkSimState.cidA, pkSimState.cidB);
        };
      });
    }

    const targetHash = pkSimState.cidB
      ? `#/pk-simulator/${pkSimState.cidA}?compare=${encodeURIComponent(pkSimState.cidB)}&regimen=${pkSimState.regimen}&scale=${pkSimState.scale}&phenotype=${pkSimState.phenotype}&egfr=${pkSimState.egfr}&tau=${pkSimState.tau}`
      : `#/pk-simulator/${pkSimState.cidA}?regimen=${pkSimState.regimen}&scale=${pkSimState.scale}&phenotype=${pkSimState.phenotype}&egfr=${pkSimState.egfr}&tau=${pkSimState.tau}`;
    if (location.hash !== targetHash) {
      history.replaceState(null, "", targetHash);
    }
  }

  // ---------- Molecular Toxicology & Safety Engine (v3.26.0)
  const TOX_PRESETS = {
    paracetamol_napqi: {
      id: "paracetamol_napqi",
      name: "Paracetamol & NAPQI (Hepatotoksyczność)",
      cid: "acetaminophen-compound",
      exposure: 2.2,
      note: "Bioaktywacja do elektrofilowej chinonoiminy (NAPQI) wyczerpująca glutation; przy przedawkowaniu wejście w strefę Hy's Law (martwica wątroby)."
    },
    terfenadine_herg: {
      id: "terfenadine_herg",
      name: "Terfenadyna vs Feksofenadyna (hERG)",
      cid: "terfenadine-compound",
      exposure: 1.0,
      note: "Załamanie marginesu Redferna (<1.0) wywołujące Torsades de Pointes vs bezpieczny metabolit kwasowy (Feksofenadyna, margines >50x)."
    },
    valproate_teratogen: {
      id: "valproate_teratogen",
      name: "Kwas Walproinowy (Mitochondria & Teratogeneza)",
      cid: "valproate-compound",
      exposure: 1.0,
      note: "Hamowanie beta-oksydacji kwasów tłuszczowych oraz bezwzględna kategoria X (wady cewy nerwowej u 1-2% płodów, spina bifida)."
    },
    isotretinoin_ipledge: {
      id: "isotretinoin_ipledge",
      name: "Izotretynoina (Embriopatia Retinoidowa)",
      cid: "isotretinoin-compound",
      exposure: 1.0,
      note: "Ekstremalny teratogen (Kategoria X, wady twarzoczaszki, mikrocja, wady serca i OUN). Bezwzględny program kontroli iPLEDGE."
    },
    verapamil_cipa: {
      id: "verapamil_cipa",
      name: "Werapamil (Kompensacja CiPA vs Haloperydol)",
      cid: "verapamil-compound",
      exposure: 1.0,
      note: "Model CiPA: silna blokada hERG jest bezpiecznie kompensowana jednoczesną blokadą dokomorowych kanałów wapniowych Cav1.2 (brak TdP)."
    },
    augmentin_cholestasis: {
      id: "augmentin_cholestasis",
      name: "Augmentin (Kwas Klawulanowy & Cholestaza)",
      cid: "clavulanate-compound",
      exposure: 1.5,
      note: "Najczęstsza przyczyna polekowej żółtaczki cholestatycznej (ALP >4x ULN, uszkodzenie małych przewodzików żółciowych sprzężone z HLA)."
    }
  };

  const toxState = {
    cid: "acetaminophen-compound",
    exposure: 1.0,
    activePreset: "paracetamol_napqi"
  };

  function getCompoundToxicologyProfile(c) {
    if (!c) return null;
    const cur = TOXICOLOGY_PROFILES[c.id];
    if (cur) {
      return { ...cur, is_estimated: false };
    }

    const mw = (c.pr && c.pr[0]) || 300;
    const logp = (c.pr && c.pr[1]) || 1.5;
    const psa = (c.pr && c.pr[2]) || 60;
    const pb = (c.pk && c.pk.pb) ? (Array.isArray(c.pk.pb) ? c.pk.pb[0] : c.pk.pb) : 70;

    const ruleOfTwo = (logp >= 3.0 && mw >= 350);
    const dilirank = ruleOfTwo ? "Less-DILI-concern" : "No-DILI-concern";
    const diliPhenotype = logp >= 3.5 ? "mixed" : (ruleOfTwo ? "hepatocellular" : "none");
    const baselineAlt = 1.0;
    const toxicAlt = ruleOfTwo ? 3.5 : 1.2;
    const baselineBili = 0.6;
    const toxicBili = ruleOfTwo ? 1.4 : 0.8;

    const estHerg = Math.max(0.5, Math.pow(10, 3.5 - 0.5 * Math.max(0, logp)));
    const estCmax = 0.1;
    const redfernMargin = +(estHerg / estCmax).toFixed(1);
    const redfernClass = redfernMargin < 30 ? "Class 3 (Moderate TdP risk)" : "Class 5 (No TdP reported)";

    const alerts = [];
    const nameLower = (c.n || "").toLowerCase();
    if (nameLower.includes("fen") || nameLower.includes("ac")) {
      alerts.push({
        id: "aryl_precursor",
        name_pl: "Ugrupowanie arylowe (potencjalna bioaktywacja)",
        smarts_pattern: "c1ccccc1",
        hazard_type: "reactive_metabolite",
        description_pl: "Potencjalne utlenianie mikrosomalne cytochromu P450 do reaktywnych tlenków arenowych."
      });
    }

    const fdaCat = (c.bb || c.wd) ? "D" : "C";
    const estRid = +(Math.max(0.2, (100 - pb) * 0.1 * (400 / mw))).toFixed(1);

    return {
      compound_id: c.id,
      dili: {
        dilirank,
        phenotype: diliPhenotype,
        mechanism_pl: "Estymacja QSAR: profil oparty na deskryptorach fizykochemicznych (Rule-of-Two: aLogP/MW).",
        baseline_alt_fold: baselineAlt,
        toxic_alt_fold: toxicAlt,
        baseline_bili_fold: baselineBili,
        toxic_bili_fold: toxicBili,
        alp_elevation: diliPhenotype === "cholestatic" || diliPhenotype === "mixed",
        hy_law_risk: ruleOfTwo ? "moderate" : "low"
      },
      cardiotox: {
        herg_ic50_um: +estHerg.toFixed(2),
        cmax_therapeutic_um: estCmax,
        redfern_margin: redfernMargin,
        redfern_class: redfernClass,
        crediblemeds: "No known risk",
        cipa_compensation: "none_needed",
        mechanism_pl: "Estymacja fizykochemiczna: brak doniesień o istotnej blokadzie kanału hERG w dawkach terapeutycznych."
      },
      structural_alerts: alerts,
      pregnancy_lactation: {
        fda_category: fdaCat,
        pllr_pregnancy_pl: "Brak specyficznego rekordu kuratorowanego; zalecana ostrożność kliniczna i ocena stosunku korzyści do ryzyka.",
        pllr_lactation_pl: "Estymacja przenikania do mleka na podstawie masy cząsteczkowej i wiązania z białkami osocza.",
        rid_pct: estRid,
        rid_safe: estRid < 10,
        teratogenic_risk: fdaCat === "D" ? "moderate" : "low",
        black_box_teratogen: false
      },
      is_estimated: true
    };
  }

  function renderEdishChartSvg(profile, exposureMultiplier = 1.0, isMini = false, width = 540, height = 300) {
    if (!profile || !profile.dili) {
      return `<div class="empty" style="padding:1rem">Brak danych hepatotoksyczności dla tej substancji.</div>`;
    }
    const dili = profile.dili;
    const padL = isMini ? 35 : 55;
    const padR = isMini ? 10 : 20;
    const padT = isMini ? 16 : 25;
    const padB = isMini ? 25 : 42;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;

    // Log scales:
    // X (ALT): 0.2 to 50 ULN
    const minAlt = 0.2, maxAlt = 50.0;
    const logMinX = Math.log10(minAlt), logSpanX = Math.log10(maxAlt) - logMinX;
    const getX = (val) =>padL + Math.max(0, Math.min(plotW, ((Math.log10(Math.max(minAlt, val)) - logMinX) / logSpanX) * plotW));

    // Y (Bilirubin): 0.2 to 10 ULN
    const minBili = 0.2, maxBili = 10.0;
    const logMinY = Math.log10(minBili), logSpanY = Math.log10(maxBili) - logMinY;
    const getY = (val) =>padT + plotH - Math.max(0, Math.min(plotH, ((Math.log10(Math.max(minBili, val)) - logMinY) / logSpanY) * plotH));

    const cutX = getX(3.0); // 3x ULN cutoff
    const cutY = getY(2.0); // 2x ULN cutoff

    // Calculate current exposed point
    const exp = Math.max(0.5, Math.min(4.0, exposureMultiplier));
    const factor = (exp - 0.5) / 1.5;
    const curAlt = +(dili.baseline_alt_fold + (dili.toxic_alt_fold - dili.baseline_alt_fold) * factor).toFixed(2);
    const curBili = +(dili.baseline_bili_fold + (dili.toxic_bili_fold - dili.baseline_bili_fold) * factor).toFixed(2);
    const isHysLaw = curAlt >= 3.0 && curBili >= 2.0;

    const ptX = getX(curAlt);
    const ptY = getY(curBili);
    const baseX = getX(dili.baseline_alt_fold);
    const baseY = getY(dili.baseline_bili_fold);

    const markerColor = isHysLaw ? "#ff3b30" : (curAlt >= 3.0 ? "#ff9500" : (curBili >= 2.0 ? "#52a2a8" : "#34c759"));

    // Ticks
    const xTicks = [0.5, 1, 3, 10, 30];
    const yTicks = [0.5, 1, 2, 5, 10];

    const xGrid = xTicks.map((v) =>{
      const x = getX(v);
      const isCut = (v === 3);
      return `
        <line x1="${x}" y1="${padT}" x2="${x}" y2="${padT + plotH}" stroke="${isCut ? '#ff3b30' : 'var(--color-border)'}" stroke-width="${isCut ? 1.5 : 1}" stroke-dasharray="${isCut ? '4,3' : '2,2'}" opacity="${isCut ? 0.9 : 0.4}" />
        <text x="${x}" y="${padT + plotH + (isMini ? 12 : 16)}" text-anchor="middle" font-size="11" fill="${isCut ? '#ff3b30' : 'var(--color-text-muted)'}" font-weight="${isCut ? '700' : '400'}">${v}×</text>
      `;
    }).join("");

    const yGrid = yTicks.map((v) =>{
      const y = getY(v);
      const isCut = (v === 2);
      return `
        <line x1="${padL}" y1="${y}" x2="${padL + plotW}" y2="${y}" stroke="${isCut ? '#ff3b30' : 'var(--color-border)'}" stroke-width="${isCut ? 1.5 : 1}" stroke-dasharray="${isCut ? '4,3' : '2,2'}" opacity="${isCut ? 0.9 : 0.4}" />
        <text x="${padL - 6}" y="${y + 3}" text-anchor="end" font-size="11" fill="${isCut ? '#ff3b30' : 'var(--color-text-muted)'}" font-weight="${isCut ? '700' : '400'}">${v}×</text>
      `;
    }).join("");

    return `
      <svg viewBox="0 0 ${width} ${height}" class="pk-chart-svg" style="width:100%;max-width:${width}px;height:auto;display:block;margin:0 auto;background:var(--color-bg);border-radius:6px">
        <!-- Quadrant backgrounds -->
        <!-- Hy's Law: Top-Right -->
        <rect x="${cutX}" y="${padT}" width="${padL + plotW - cutX}" height="${cutY - padT}" fill="#ff3b30" fill-opacity="${isHysLaw ? 0.22 : 0.10}" />
        <!-- Hepatocellular: Bottom-Right -->
        <rect x="${cutX}" y="${cutY}" width="${padL + plotW - cutX}" height="${padT + plotH - cutY}" fill="#ff9500" fill-opacity="0.08" />
        <!-- Cholestatic: Top-Left -->
        <rect x="${padL}" y="${padT}" width="${cutX - padL}" height="${cutY - padT}" fill="#52a2a8" fill-opacity="0.08" />
        <!-- Normal: Bottom-Left -->
        <rect x="${padL}" y="${cutY}" width="${cutX - padL}" height="${padT + plotH - cutY}" fill="#34c759" fill-opacity="0.05" />

        ${xGrid}
        ${yGrid}

        <!-- Outer plot border -->
        <rect x="${padL}" y="${padT}" width="${plotW}" height="${plotH}" fill="none" stroke="var(--color-border)" stroke-width="1.2" />

        <!-- Quadrant labels -->
        ${!isMini ? `
          <text x="${padL + plotW - 8}" y="${padT + 14}" text-anchor="end" fill="#ff3b30" font-size="11" font-weight="700">KWADRANT HY'S LAW</text>
          <text x="${padL + plotW - 8}" y="${padT + 26}" text-anchor="end" fill="#ff3b30" font-size="11" opacity="0.8">ALT &ge; 3&times;, Bili &ge; 2&times; (Zagrożenie życia)</text>
          <text x="${padL + plotW - 8}" y="${padT + plotH - 8}" text-anchor="end" fill="#ff9500" font-size="11" font-weight="600">Odczyn Hepatocytarny (ALT)</text>
          <text x="${padL + 8}" y="${padT + 14}" text-anchor="start" fill="#52a2a8" font-size="11" font-weight="600">Cholestaza (Bilirubina/ALP)</text>
          <text x="${padL + 8}" y="${padT + plotH - 8}" text-anchor="start" fill="#34c759" font-size="11" font-weight="600">Norma / Tolerancja</text>

          <!-- Axis Titles -->
          <text x="${padL + plotW / 2}" y="${height - 6}" text-anchor="middle" font-size="11" fill="var(--color-text)" font-weight="600">Szczytowy Poziom ALT (&times; ULN)</text>
          <text transform="rotate(-90)" x="${-(padT + plotH / 2)}" y="16" text-anchor="middle" font-size="11" fill="var(--color-text)" font-weight="600">Szczytowa Bilirubina (&times; ULN)</text>
        `: `
          <text x="${padL + plotW - 4}" y="${padT + 12}" text-anchor="end" fill="#ff3b30" font-size="11" font-weight="700">Hy's Law</text>
        `}

        <!-- Trajectory track from baseline to exposed -->
        ${exp >0.6 ? `
          <line x1="${baseX}" y1="${baseY}" x2="${ptX}" y2="${ptY}" stroke="${markerColor}" stroke-width="2" stroke-dasharray="3,2" opacity="0.75" />
          <circle cx="${baseX}" cy="${baseY}" r="${isMini ? 2.5 : 3.5}" fill="var(--color-text-muted)" opacity="0.6" />
        `: ""}

        <!-- Glow ring if Hy's Law -->
        ${isHysLaw ? `
          <circle cx="${ptX}" cy="${ptY}" r="${isMini ? 8 : 13}" fill="none" stroke="#ff3b30" stroke-width="2" opacity="0.6">
            <animate attributeName="r" values="${isMini ? '6;12;6' : '10;18;10'}" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.1;0.8" dur="1.8s" repeatCount="indefinite" />
          </circle>
        `: ""}

        <!-- Current point marker -->
        <circle cx="${ptX}" cy="${ptY}" r="${isMini ? 4 : 6}" fill="${markerColor}" stroke="#ffffff" stroke-width="1.8" />

        ${!isMini ? `
          <!-- Value badge at current point -->
          <g transform="translate(${ptX >padL + plotW - 90 ? ptX - 85 : ptX + 8}, ${ptY < padT + 30 ? ptY + 18 : ptY - 8})">
            <rect width="84" height="26" rx="4" fill="var(--color-surface)" stroke="${markerColor}" stroke-width="1.2" opacity="0.95" />
            <text x="42" y="11" text-anchor="middle" font-size="11" fill="var(--color-text)" font-weight="700">ALT: ${curAlt}&times; ULN</text>
            <text x="42" y="22" text-anchor="middle" font-size="11" fill="var(--color-text-muted)">Bili: ${curBili}&times; ULN</text>
          </g>
        `: ""}
      </svg>
    `;
  }

  function renderRedfernMarginSvg(cardio, isMini = false, width = 500, height = 48) {
    if (!cardio || cardio.redfern_margin === undefined) {
      return `<div class="empty" style="padding:.5rem">Brak danych Redferna dla kanału hERG.</div>`;
    }
    const sm = cardio.redfern_margin;
    // Log scale from 0.1x to 1000x (range 4.0 log units)
    const logVal = Math.log10(Math.max(0.1, sm));
    const pct = Math.max(0, Math.min(1, (logVal - (-1.0)) / 4.0)) * 100;
    const isCav = cardio.cipa_compensation === "cav12_blockade";

    const zone30Pct = ((Math.log10(30) - (-1.0)) / 4.0) * 100; // ~61.9%
    const zone100Pct = ((Math.log10(100) - (-1.0)) / 4.0) * 100; // 75.0%

    return `
      <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px;margin-bottom:8px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span style="font-size:13px;font-weight:700">Margines Bezpieczeństwa Redferna (hERG IC50 / Cmax)</span>
          <span class="badge" style="font-size:13px;background:${sm < 30 && !isCav ? '#ff3b3022' : '#34c75922'};color:${sm < 30 && !isCav ? '#ff3b30' : '#34c759'}">
            ${cardio.redfern_class || (sm < 30 ? 'Klasa 1/2' : 'Klasa 5')}
          </span>
        </div>
        <div style="position:relative;height:18px;background:var(--color-bg);border-radius:9px;overflow:hidden;margin:6px 0;border:1px solid var(--color-border)">
          <div style="position:absolute;left:0;top:0;bottom:0;width:${zone30Pct}%;background:#ff3b30;opacity:0.6" title="Strefa Czerwona: SM < 30x (Wysokie ryzyko TdP)"></div>
          <div style="position:absolute;left:${zone30Pct}%;top:0;bottom:0;width:${zone100Pct - zone30Pct}%;background:#ff9500;opacity:0.6" title="Strefa Żółta: 30x <= SM < 100x (Monitoring QTc)"></div>
          <div style="position:absolute;left:${zone100Pct}%;top:0;bottom:0;right:0;background:#34c759;opacity:0.6" title="Strefa Zielona: SM >= 100x (Bezpieczna repolaryzacja)"></div>
          <!-- Marker -->
          <div style="position:absolute;left:${pct}%;top:0;bottom:0;width:3px;background:#ffffff;transform:translateX(-50%)"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:13px;color:var(--color-text-muted)">
          <span>0.1×</span>
          <span>1×</span>
          <span style="color:#ff3b30;font-weight:700">30× (Próg TdP)</span>
          <span style="color:#ff9500">100×</span>
          <span style="color:#34c759">1000×</span>
        </div>
        <div style="margin-top:6px;font-size:13px;color:var(--color-text)">
          Margines: <b>${sm}×</b>(hERG IC50: ${cardio.herg_ic50_um} &mu;M vs Cmax: ${cardio.cmax_therapeutic_um} &mu;M).
          CredibleMeds: <b style="color:${cardio.crediblemeds === 'Known risk' ? '#ff3b30' : (cardio.crediblemeds === 'Possible risk' ? '#ff9500' : 'var(--color-text)')}">${cardio.crediblemeds}</b>.
          ${isCav ? `<div style="margin-top:3px;color:#34c759;font-weight:600">Kompensacja CiPA: jednoczesna blokada Cav1.2 (skrócenie plateau) neutralizuje ryzyko arytmii komorowej!</div>`: ""}
        </div>
      </div>
    `;
  }

  function openToxicologySplitPane(compoundId, opts = {}) {
    if (compoundId) toxState.cid = compoundId;
    if (opts.exposure !== undefined) toxState.exposure = opts.exposure;
    if (opts.preset !== undefined) toxState.activePreset = opts.preset;

    let comp = C.find((x) =>x.id === toxState.cid);
    if (!comp) {
      comp = C.find((x) =>x.id === "acetaminophen-compound") || C[0];
      toxState.cid = comp.id;
    }

    const tox = getCompoundToxicologyProfile(comp);
    const pili = tox.dili;
    const cardio = tox.cardiotox;
    const preg = tox.pregnancy_lactation;
    const alerts = tox.structural_alerts || [];

    const edishSvg = renderEdishChartSvg(tox, toxState.exposure, false, 540, 300);
    const redfernHtml = renderRedfernMarginSvg(cardio, false, 540, 48);

    const exp = toxState.exposure;
    const factor = (exp - 0.5) / 1.5;
    const curAlt = +(pili.baseline_alt_fold + (pili.toxic_alt_fold - pili.baseline_alt_fold) * factor).toFixed(1);
    const curBili = +(pili.baseline_bili_fold + (pili.toxic_bili_fold - pili.baseline_bili_fold) * factor).toFixed(1);
    const isHysLaw = curAlt >= 3.0 && curBili >= 2.0;

    const presetsHtml = Object.entries(TOX_PRESETS).map(([k, p]) =>`
      <button class="btn btn-sm ${toxState.activePreset === k ? 'btn-primary' : ''}" data-load-tox-preset="${esc(k)}" style="margin:2px 4px 2px 0;font-size:13px" title="${esc(p.note)}">
        ${esc(p.name)}
      </button>
    `).join("");

    const availableCompounds = C
      .filter((c) =>TOXICOLOGY_PROFILES[c.id])
      .map((c) =>({ id: c.id, name: c.n }))
      .sort((a, b) =>a.name.localeCompare(b.name));

    const alertsHtml = alerts.length ? alerts.map((a) =>`
      <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px;margin-bottom:6px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px">
          <b style="font-size:13px;color:var(--color-warning)">${esc(a.name_pl)}</b>
          <span class="badge" style="font-size:13px">${esc(a.hazard_type)}</span>
        </div>
        <div style="font-size:13px;color:var(--color-text-muted);font-variant-numeric: tabular-nums;margin-bottom:4px">SMARTS: ${esc(a.smarts_pattern)}</div>
        <div style="font-size:13px;color:var(--color-text)">${esc(a.description_pl)}</div>
      </div>
    `).join("") : `<div class="empty" style="padding:.8rem">Brak wykrytych kanonicznych alertów toksykoforowych w strukturze.</div>`;

    const pregCat = preg.fda_category || "C";
    const pregColor = pregCat === "X" ? "var(--color-error)" : (pregCat === "D" ? "var(--color-warning)" : (pregCat === "C" ? "var(--color-warning)" : "var(--color-success)"));

    const html = `
      <div class="split-pane-content" style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <span style="font-size:18px;font-weight:700">Toksykologia Molekularna & Bezpieczeństwo</span>
              <span class="badge" style="font-size:13px;background:var(--color-surface-2);color:${pili.dilirank === 'Most-DILI-concern' ? 'var(--color-error)' : (pili.dilirank === 'Less-DILI-concern' ? 'var(--color-warning)' : 'var(--color-success)')};border:1px solid var(--color-border)">
                DILI: ${esc(pili.dilirank)}
              </span>
              <span class="badge" style="font-size:13px;background:var(--color-surface-2);color:${pregColor};border:1px solid var(--color-border)">
                Ciąża: Kat. ${esc(pregCat)}
              </span>
              ${tox.is_estimated ? `<span class="badge" style="font-size:13px">QSAR Estymator</span>`: `<span class="badge" style="font-size:13px">Baza Kuratorowana</span>`}
            </div>
            <div style="font-size:13px;color:var(--color-text-muted);margin-top:4px">
              Substancja: <b style="color:var(--color-text);font-size:13px">${esc(comp.n)}</b>· Analiza narządowa (Wątroba, Serce, Płód, Laktacja)
            </div>
          </div>
          <button class="btn btn-sm" id="toxSplitClose" style="font-size:13px;padding:3px 10px">× Zamknij</button>
        </div>

        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px">
          <div style="font-size:13px;font-weight:700;margin-bottom:6px">Scenariusze i Presety Kliniczne:</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px">
            ${presetsHtml}
          </div>
          <div style="margin-top:8px;display:flex;align-items:center;gap:8px">
            <span style="font-size:13px;color:var(--color-text-muted)">Wybierz inną substancję z bazy:</span>
            <select id="toxCompoundSelect" style="font-size:13px;padding:3px 6px;background:var(--color-bg);color:var(--color-text);border:1px solid var(--color-border);border-radius:4px">
              ${availableCompounds.map((ac) =>`<option value="${esc(ac.id)}" ${ac.id === comp.id ? 'selected' : ''}>${esc(ac.name)}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Section 1: DILI & eDISH -->
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:12px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <span style="font-size:13px;font-weight:700">Wykres eDISH (Evaluation of Drug-Induced Serious Hepatotoxicity)</span>
            <span style="font-size:13px;color:var(--color-text-muted)">Fenotyp: <b>${esc(pili.phenotype)}</b></span>
          </div>

          <div style="margin-bottom:10px;padding:8px 10px;border-radius:6px;background:var(--color-surface-2);border:1px solid var(--color-border)">
            <div style="font-size:13px;font-weight:700;color:${isHysLaw ? 'var(--color-error)' : (curAlt >= 3.0 ? 'var(--color-warning)' : 'var(--color-success)')}">
              ${isHysLaw ? " KRYTYCZNY ALARM: PRAWO HY'S LAW SPEŁNIONE (Zagrożenie Życia)" : (curAlt >= 3.0 ? " ODCZYN HEPATOCYTARNY: Wzrost transaminaz ALT bez hiperbilirubinemii" : " ZAKRES BEZPIECZNY: Parametry czynności wątroby w normie")}
            </div>
            <div style="font-size:13px;color:var(--color-text);margin-top:2px">
              Aktualna ekspozycja: ALT = <b>${curAlt}× ULN</b>(próg 3.0×) · Bilirubina = <b>${curBili}× ULN</b>(próg 2.0×).
              ${isHysLaw ? "Jednoczesny wzrost ALT &ge; 3x i Bilirubiny &ge; 2x bez cholestazy oznacza &gt;10% ryzyko śmiertelnej niewydolności wątroby." : ""}
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
            <span style="font-size:13px;white-space:nowrap">Mnożnik ekspozycji / podatności osobniczej:</span>
            <input type="range" id="toxExposureRange" min="0.5" max="4.0" step="0.1" value="${toxState.exposure}" style="flex:1;cursor:pointer">
            <b style="font-size:13px;width:45px">${toxState.exposure.toFixed(1)}×</b>
          </div>

          ${edishSvg}

          <div style="margin-top:8px;font-size:13px;color:var(--color-text-muted);line-height:1.4">
            <b>Mechanizm molekularny:</b>${esc(pili.mechanism_pl)}
          </div>
        </div>

        <!-- Section 2: Cardiotoxicity hERG & CiPA -->
        ${redfernHtml}

        <!-- Section 3: Structural Alerts ToxAlerts -->
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:12px">
          <div style="font-size:13px;font-weight:700;margin-bottom:6px">Alerty Strukturalne Toksykoforów (ToxAlerts)</div>
          ${alertsHtml}
        </div>

        <!-- Section 4: Pregnancy & Lactation -->
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:12px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:13px;font-weight:700">Ciąża, Teratogenność & Laktacja (FDA PLLR / RID)</span>
            <span class="badge" style="font-size:13px;background:var(--color-surface-2);color:${pregColor};border:1px solid var(--color-border)">Kategoria ${esc(pregCat)}</span>
          </div>
          ${preg.black_box_teratogen ? `
            <div style="background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:6px;padding:6px 10px;margin-bottom:8px;font-size:13px;color:var(--color-error);font-weight:700">
               CZARNA SKRZYNKA: BEZWZGLĘDNY TERATOGEN (Ryzyko ciężkich wad rozwojowych lub poronienia)
            </div>
          `: ""}
          <div style="font-size:13px;color:var(--color-text);margin-bottom:6px">
            <b>Ocena embriologiczna:</b>${esc(preg.pllr_pregnancy_pl)}
          </div>
          <div style="font-size:13px;color:var(--color-text);margin-bottom:8px">
            <b>Karmienie piersią:</b>${esc(preg.pllr_lactation_pl)}
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:3px">
              <span>Wskaźnik dawki u niemowlęcia (Relative Infant Dose – RID):</span>
              <b style="color:${preg.rid_pct < 10 ? '#34c759' : '#ff3b30'}">${preg.rid_pct}% ${preg.rid_pct < 10 ? '(Zgodny z laktacją < 10%)' : '(Zwiększona penetracja >10%)'}</b>
            </div>
            <div style="position:relative;height:8px;background:var(--color-bg);border-radius:4px;overflow:hidden;border:1px solid var(--color-border)">
              <div style="position:absolute;left:0;top:0;bottom:0;width:${Math.min(100, preg.rid_pct * 5)}%;background:${preg.rid_pct < 10 ? '#34c759' : '#ff3b30'}"></div>
            </div>
          </div>
        </div>

        <!-- 3D Biomolecular viewer integration -->
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:10px 12px;display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-size:13px;font-weight:700">Struktury 3D Kanałów & Receptorów</div>
            <div style="font-size:13px;color:var(--color-text-muted)">Eksploruj architekturę pora kanału hERG (KCNH2) i kieszeni wiążących leków.</div>
          </div>
          <a href="sidecar://biomolecular-structure-viewer" class="btn btn-sm btn-primary" style="font-size:13px;text-decoration:none">
            Otwórz Biomolecular Structure Viewer ↗
          </a>
        </div>
      </div>
    `;

    openContextSplitPane(`Toksykologia & Bezpieczeństwo · ${comp.n}`, html);

    const splitBody = $("contextSplitBody");
    if (splitBody) {
      const closeBtn = splitBody.querySelector("#toxSplitClose");
      if (closeBtn) closeBtn.onclick = closeContextSplitPane;

      splitBody.querySelectorAll("[data-load-tox-preset]").forEach((btn) =>{
        btn.onclick = () =>{
          const pKey = btn.dataset.loadToxPreset;
          const preset = TOX_PRESETS[pKey];
          if (!preset) return;
          toxState.cid = preset.cid;
          toxState.exposure = preset.exposure;
          toxState.activePreset = pKey;
          openToxicologySplitPane(toxState.cid);
        };
      });

      const compSelect = splitBody.querySelector("#toxCompoundSelect");
      if (compSelect) {
        compSelect.onchange = (e) =>{
          toxState.cid = e.target.value;
          toxState.activePreset = null;
          openToxicologySplitPane(toxState.cid);
        };
      }

      const expRange = splitBody.querySelector("#toxExposureRange");
      if (expRange) {
        expRange.oninput = (e) =>{
          toxState.exposure = parseFloat(e.target.value);
          toxState.activePreset = null;
          openToxicologySplitPane(toxState.cid);
        };
      }
    }

    const targetHash = `#/toxicology/${toxState.cid}?exposure=${toxState.exposure.toFixed(1)}${toxState.activePreset ? `&preset=${toxState.activePreset}`: ''}`;
    if (location.hash !== targetHash) {
      history.replaceState(null, "", targetHash);
    }
  }

  // ---------- Transporters & Blood-Brain Barrier (BBB) PBPK Engine (v3.28.0)
  const TRANSPORTER_PROFILES = (window.PV_GRAPH && window.PV_GRAPH.transporterProfiles) || {};

  const transState = {
    cid: "loperamide-compound",
    inhibitorRatio: 0.0,
    activePreset: null
  };

  let activeTransporterDockOpen = false;

  const TRANSPORTER_PRESETS = {
    loperamide_verapamil: {
      name: "Paradoks Loperamidu (+ Werapamil)",
      cid: "loperamide-compound",
      inhibitorRatio: 8.0,
      note: "Zablokowanie pompy efluksowej P-gp podnosi Kp,uu z 0.04 do 0.52, wyzwalając ośrodkową depresję oddechową."
    },
    statin_gemfibrozil: {
      name: "Simwastatyna + Gemfibrozil (OATP1B1)",
      cid: "simvastatin-compound",
      inhibitorRatio: 5.0,
      note: "Blokada sinusoidalnego wychwytu OATP1B1 przez gemfibrozil potraja AUC statyny, wywołując ostrą rabdomiolizę."
    },
    methotrexate_probenecid: {
      name: "Metotreksat + Probenecyd (OAT1/3)",
      cid: "methotrexate-compound",
      inhibitorRatio: 6.0,
      note: "Zablokowanie nerkowej sekrecji cewkowej OAT1/OAT3 opóźnia eliminację metotreksatu, wywołując ostrą mielotoksyczność."
    },
    metformin_cimetidine: {
      name: "Metformina + Cymetydyna (OCT2)",
      cid: "metformin-compound",
      inhibitorRatio: 4.0,
      note: "Zahamowanie cewkowego efluksu OCT2/MATE1 zmniejsza klirens nerkowy metforminy, podnosząc ryzyko kwasicy mleczanowej."
    },
    levodopa_lat1: {
      name: "Lewodopa (Influks LAT1)",
      cid: "levodopa-compound",
      inhibitorRatio: 0.0,
      note: "Hydrofilny aminokwas przenika BBB z wykorzystaniem nośnika LAT1 (SLC7A5), osiągając Kp,uu >1.0."
    },
    fexofenadine_ketoconazole: {
      name: "Feksofenadyna + Ketokonazol",
      cid: "fexofenadine-compound",
      inhibitorRatio: 5.0,
      note: "Zahamowanie jelitowego i mózgowego efluksu P-gp zwiększa wchłanianie i penetrację OUN leku przeciwhistaminowego II gen."
    }
  };

  function calculateClarkLogBB(logp, tpsa) {
    if (logp == null || tpsa == null) return -0.5;
    return +(0.152 * logp - 0.0148 * tpsa + 0.139).toFixed(2);
  }

  function calculateCnsMpo(mw, logp, tpsa, hbd, pka, clogd) {
    mw = mw || 350;
    logp = logp != null ? logp : 2.5;
    tpsa = tpsa != null ? tpsa : 60;
    hbd = hbd != null ? hbd : 1;
    pka = pka != null ? pka : 7.0;
    clogd = clogd != null ? clogd : (logp - 0.5);

    const t_mw = mw <= 360 ? 1 : (mw >= 500 ? 0 : 1 - (mw - 360) / 140);
    const t_logp = logp <= 3 ? 1 : (logp >= 5 ? 0 : 1 - (logp - 3) / 2);
    const t_clogd = clogd <= 2 ? 1 : (clogd >= 4 ? 0 : 1 - (clogd - 2) / 2);
    const t_tpsa = (tpsa >= 40 && tpsa <= 90) ? 1 : (tpsa < 20 || tpsa >120 ? 0 : (tpsa < 40 ? (tpsa - 20) / 20 : 1 - (tpsa - 90) / 30));
    const t_hbd = hbd <= 0.5 ? 1 : (hbd >= 3.5 ? 0 : 1 - (hbd - 0.5) / 3);
    const t_pka = pka <= 8 ? 1 : (pka >= 10 ? 0 : 1 - (pka - 8) / 2);

    const sum = t_mw + t_logp + t_clogd + t_tpsa + t_hbd + t_pka;
    return {
      score: +sum.toFixed(2),
      components: {
        mw: +t_mw.toFixed(2),
        logp: +t_logp.toFixed(2),
        clogd: +t_clogd.toFixed(2),
        tpsa: +t_tpsa.toFixed(2),
        hbd: +t_hbd.toFixed(2),
        pka: +t_pka.toFixed(2)
      }
    };
  }

  function simulatePgpEfflux(baselineKpUu, inhibitorRatio) {
    baselineKpUu = baselineKpUu || 0.05;
    inhibitorRatio = Math.max(0, inhibitorRatio || 0);
    const ratioEffluxToPass = (1.0 - baselineKpUu) / Math.max(0.001, baselineKpUu);
    const inhibitedEfflux = ratioEffluxToPass / (1.0 + inhibitorRatio);
    const kpUu = 1.0 / (1.0 + inhibitedEfflux);
    return +Math.min(1.0, Math.max(0.01, kpUu)).toFixed(2);
  }

  function getCompoundTransporterProfile(compound) {
    if (!compound) return null;
    const cid = compound.id || compound;
    if (TRANSPORTER_PROFILES[cid]) {
      return TRANSPORTER_PROFILES[cid];
    }
    const logp = compound.p != null ? compound.p : 2.0;
    const tpsa = compound.psa != null ? compound.psa : 65.0;
    const mw = compound.mw || 320.0;
    const clarkLogBb = calculateClarkLogBB(logp, tpsa);
    const cnsMpo = calculateCnsMpo(mw, logp, tpsa, 1, 7.0, logp - 0.5);
    const isPgpSubstrate = mw >400 && (logp >3.0 || tpsa >70);
    const baselineKpUu = isPgpSubstrate ? 0.08 : (clarkLogBb >0.3 ? 0.85 : (clarkLogBb >-1.0 ? 0.40 : 0.05));

    return {
      compound_id: cid,
      physicochem: { mw, logp, tpsa, hbd: 1, pka_base: 7.0, clogd: logp - 0.5 },
      cns_metrics: {
        logbb_clark: clarkLogBb,
        cns_mpo_score: cnsMpo.score,
        kp_uu_baseline: baselineKpUu,
        cns_penetration_class: clarkLogBb >0.3 ? "high" : (clarkLogBb < -1.0 ? "low" : (isPgpSubstrate ? "restricted_by_efflux" : "moderate")),
        summary_pl: `Wskaźnik Clarka logBB: ${clarkLogBb}. Pfizer CNS MPO: ${cnsMpo.score}/6.0. Estymacja QSAR na podstawie parametrów fizykochemicznych.`
      },
      transporters: {
        pgp: { role: isPgpSubstrate ? "substrate" : "none" },
        bcrp: { role: "none" },
        lat1: { role: "none" },
        oatp1b1: { role: "none" },
        oat1_3: { role: "none" },
        oct2: { role: "none" },
        bsep: { role: "none" },
        pept1: { role: "none" }
      },
      clinical_scenarios: [],
      is_estimated: true
    };
  }

  function renderBbbCrossSectionSvg(profile, inhibitorRatio = 0.0, isMini = false, width = 560, height = 270) {
    if (!profile) return `<div class="empty" style="padding:1rem">Brak profilu transporterów.</div>`;
    const cns = profile.cns_metrics || {};
    const tMap = profile.transporters || {};
    const pgpRole = (tMap.pgp && tMap.pgp.role) || "none";
    const lat1Role = (tMap.lat1 && tMap.lat1.role) || "none";
    const baselineKp = cns.kp_uu_baseline != null ? cns.kp_uu_baseline : 0.1;
    const currentKp = simulatePgpEfflux(baselineKp, inhibitorRatio);
    const isPgpSub = pgpRole === "substrate";
    const isInhibited = inhibitorRatio >0.2;
    const isOverload = currentKp >= 0.3 && isPgpSub;

    const lumenH = 75;
    const endoY = 75;
    const endoH = 105;
    const brainY = 180;
    const brainH = height - brainY;

    const plasmaParticles = [
      { x: 50, y: 30 }, { x: 120, y: 50 }, { x: 190, y: 25 }, { x: 270, y: 55 },
      { x: 340, y: 35 }, { x: 420, y: 48 }, { x: 490, y: 28 }
    ];

    const brainCount = Math.min(12, Math.max(1, Math.round(currentKp * 14)));
    const brainParticles = [];
    for (let i = 0; i < brainCount; i++) {
      brainParticles.push({
        x: 60 + (i * 38) % (width - 100),
        y: brainY + 22 + ((i * 17) % (brainH - 35))
      });
    }

    const pgpPumpX1 = 160;
    const pgpPumpX2 = 360;
    const lat1X = 260;
    const passiveX = 460;

    return `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="background:var(--color-bg);border-radius:6px;border:1px solid var(--color-border);font-family:system-ui,-apple-system,sans-serif;user-select:none;display:block">
        <defs>
          <linearGradient id="lumenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1e3a5f" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#1e3a5f" stop-opacity="0.15"/>
          </linearGradient>
          <linearGradient id="endoGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1e3a5f" stop-opacity="0.75"/>
            <stop offset="100%" stop-color="#1e3a5f" stop-opacity="0.90"/>
          </linearGradient>
          <linearGradient id="brainGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0a192f" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#050c18" stop-opacity="0.95"/>
          </linearGradient>
          <marker id="arrowUp" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 10 L 5 0 L 10 10 z" fill="#5899e2"/>
          </marker>
          <marker id="arrowDown" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 0 L 5 10 z" fill="#44a282"/>
          </marker>
          <marker id="arrowOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 0 L 5 10 z" fill="#d9a441"/>
          </marker>
        </defs>

        <!-- Luminal (Blood) Layer -->
        <rect x="0" y="0" width="${width}" height="${lumenH}" fill="url(#lumenGrad)"/>
        <text x="12" y="20" fill="#5899e2" font-size="11" font-weight="700">ŚWIATŁO KAPILARY (KREW / LUMEN)</text>
        <text x="12" y="36" fill="var(--color-text-muted)" font-size="11">Wolne stężenie osoczowe Cu,plasma · pH 7.40</text>
        ${inhibitorRatio >0 ? `
          <rect x="${width - 190}" y="8" width="180" height="24" rx="4" fill="var(--color-surface-2)" stroke="var(--color-border)" stroke-width="1"/>
          <text x="${width - 180}" y="24" fill="#d9a441" font-size="11" font-weight="700">Inhibitor P-gp: ${inhibitorRatio.toFixed(1)}× Ki</text>
        `: ""}

        <!-- Blood Particles -->
        ${plasmaParticles.map(p =>`
          <circle cx="${p.x}" cy="${p.y}" r="4" fill="#5899e2" opacity="0.85"/>
          <circle cx="${p.x}" cy="${p.y}" r="7" fill="#5899e2" opacity="0.2"/>
        `).join("")}

        <!-- Endothelial Layer (BBB Barrier) -->
        <rect x="0" y="${endoY}" width="${width}" height="${endoH}" fill="url(#endoGrad)"/>
        <line x1="0" y1="${endoY}" x2="${width}" y2="${endoY}" stroke="#5899e2" stroke-dasharray="3 3" opacity="0.6"/>
        <line x1="0" y1="${endoY + endoH}" x2="${width}" y2="${endoY + endoH}" stroke="#44a282" stroke-dasharray="3 3" opacity="0.6"/>

        <!-- Tight Junctions (Claudin-5 / Occludin) -->
        <g stroke="#d9a441" stroke-width="2.5" opacity="0.9">
          <line x1="80" y1="${endoY}" x2="80" y2="${endoY + endoH}"/>
          <line x1="80" y1="${endoY + 30}" x2="85" y2="${endoY + 35}"/>
          <line x1="80" y1="${endoY + 60}" x2="75" y2="${endoY + 65}"/>
          <line x1="80" y1="${endoY + 85}" x2="85" y2="${endoY + 90}"/>

          <line x1="430" y1="${endoY}" x2="430" y2="${endoY + endoH}"/>
          <line x1="430" y1="${endoY + 30}" x2="435" y2="${endoY + 35}"/>
          <line x1="430" y1="${endoY + 60}" x2="425" y2="${endoY + 65}"/>
          <line x1="430" y1="${endoY + 85}" x2="435" y2="${endoY + 90}"/>
        </g>
        <text x="86" y="${endoY + 18}" fill="#d9a441" font-size="11" font-weight="600">Claudin-5</text>

        <!-- P-gp Efflux Pumps (ABCB1) -->
        <g transform="translate(${pgpPumpX1}, ${endoY + 15})">
          <rect x="-18" y="0" width="36" height="70" rx="6" fill="#1e3a5f" stroke="#5899e2" stroke-width="2"/>
          <text x="0" y="24" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">P-gp</text>
          <text x="0" y="38" fill="#fff" font-size="11" text-anchor="middle">ABCB1</text>
          ${isPgpSub ? `
            <line x1="0" y1="60" x2="0" y2="-12" stroke="#5899e2" stroke-width="2.5" marker-end="url(#arrowUp)"/>
          `: ""}
          ${isInhibited ? `
            <circle cx="0" cy="50" r="10" fill="#d9a441" opacity="0.85"/>
            <text x="0" y="54" fill="#131217" font-size="11" font-weight="900" text-anchor="middle">×</text>
            <text x="0" y="86" fill="#d9a441" font-size="11" font-weight="700" text-anchor="middle">BLOKADA</text>
          `: `
            <text x="0" y="86" fill="#5899e2" font-size="11" font-weight="600" text-anchor="middle">Efluks</text>
          `}
        </g>

        <!-- BCRP Pump (ABCG2) -->
        <g transform="translate(${pgpPumpX2}, ${endoY + 15})">
          <rect x="-18" y="0" width="36" height="70" rx="6" fill="#1e3a5f" stroke="#5899e2" stroke-width="2"/>
          <text x="0" y="24" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">BCRP</text>
          <text x="0" y="38" fill="#fff" font-size="11" text-anchor="middle">ABCG2</text>
          ${isInhibited ? `
            <circle cx="0" cy="50" r="10" fill="#d9a441" opacity="0.85"/>
            <text x="0" y="54" fill="#131217" font-size="11" font-weight="900" text-anchor="middle">×</text>
          `: ""}
        </g>

        <!-- LAT1 Influx Carrier -->
        <g transform="translate(${lat1X}, ${endoY + 15})">
          <rect x="-18" y="0" width="36" height="70" rx="6" fill="#1b6b50" stroke="#44a282" stroke-width="2"/>
          <text x="0" y="24" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">LAT1</text>
          <text x="0" y="38" fill="#fff" font-size="11" text-anchor="middle">SLC7A5</text>
          ${lat1Role === 'substrate' ? `
            <line x1="0" y1="5" x2="0" y2="80" stroke="#44a282" stroke-width="2.5" marker-end="url(#arrowDown)"/>
            <text x="0" y="92" fill="#44a282" font-size="11" font-weight="700" text-anchor="middle">Influks</text>
          `: `
            <text x="0" y="92" fill="var(--color-text-muted)" font-size="11" text-anchor="middle">Brak</text>
          `}
        </g>

        <!-- Passive Transcellular Route -->
        <g transform="translate(${passiveX}, ${endoY + 18})">
          <line x1="0" y1="0" x2="0" y2="70" stroke="#d9a441" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#arrowOrange)"/>
          <text x="0" y="36" fill="#d9a441" font-size="11" font-weight="600" text-anchor="start" dx="8">Bierna dyfuzja</text>
        </g>

        <!-- Brain Parenchyma (Abluminal) -->
        <rect x="0" y="${brainY}" width="${width}" height="${brainH}" fill="url(#brainGrad)"/>

        <!-- Astrocyte End-feet Pads -->
        <g fill="#44a282" opacity="0.35">
          <path d="M 10 ${brainY} Q 30 ${brainY+16} 50 ${brainY} Z"/>
          <path d="M 60 ${brainY} Q 95 ${brainY+20} 130 ${brainY} Z"/>
          <path d="M 140 ${brainY} Q 185 ${brainY+18} 230 ${brainY} Z"/>
          <path d="M 240 ${brainY} Q 285 ${brainY+20} 330 ${brainY} Z"/>
          <path d="M 340 ${brainY} Q 385 ${brainY+16} 430 ${brainY} Z"/>
          <path d="M 440 ${brainY} Q 495 ${brainY+22} 550 ${brainY} Z"/>
        </g>
        <text x="12" y="${brainY + 18}" fill="#44a282" font-size="11" font-weight="700">PARENCHYMA MÓZGU (TKANKA OUN)</text>
        <text x="12" y="${brainY + 34}" fill="var(--color-text-muted)" font-size="11">Stopki astrocytarne (Glia limitans) · Cu,brain</text>

        <!-- Brain Drug Particles -->
        ${brainParticles.map(p =>`
          <circle cx="${p.x}" cy="${p.y}" r="${isOverload ? 5 : 3.5}" fill="${isOverload ? '#d9a441' : '#5899e2'}" opacity="0.9"/>
          <circle cx="${p.x}" cy="${p.y}" r="${isOverload ? 9 : 6}" fill="${isOverload ? '#d9a441' : '#5899e2'}" opacity="0.25"/>
        `).join("")}

        <!-- Kp,uu Gauge Overlay in Brain -->
        <g transform="translate(${width - 225}, ${brainY + 12})">
          <rect x="0" y="0" width="215" height="60" rx="6" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="1"/>
          <text x="10" y="16" fill="var(--color-text-muted)" font-size="11">Wolna Frakcja Mózgowa (Kp,uu):</text>
          <text x="10" y="38" fill="${isOverload ? '#d9a441' : (currentKp >0.3 ? '#44a282' : '#5899e2')}" font-size="18" font-weight="800">
            ${currentKp.toFixed(2)}
            <tspan font-size="11" font-weight="600" fill="var(--color-text)">(${(currentKp * 100).toFixed(0)}% Cu,pl)</tspan>
          </text>
          <text x="10" y="53" fill="${isOverload ? '#d9a441' : 'var(--color-text-muted)'}" font-size="11" font-weight="${isOverload ? '700' : '500'}">
            ${isOverload ? "Przełamanie efluksu (Toksyczność OUN)" : (currentKp >0.3 ? "Dobra penetracja terapeutyczna" : "Skuteczna ochrona barierowa")}
          </text>
        </g>
      </svg>
    `;
  }

  function renderCnsMpoRadarSvg(phys, cnsMpoScore, isMini = false, width = 270, height = 210) {
    phys = phys || {};
    const cns = calculateCnsMpo(phys.mw, phys.logp, phys.tpsa, phys.hbd, phys.pka_base, phys.clogd);
    const comps = cns.components;
    const cx = width / 2;
    const cy = height / 2 + 8;
    const r = Math.min(cx, cy) - 32;

    const axes = [
      { key: "mw", label: "MW", val: comps.mw },
      { key: "logp", label: "LogP", val: comps.logp },
      { key: "clogd", label: "LogD", val: comps.clogd },
      { key: "tpsa", label: "TPSA", val: comps.tpsa },
      { key: "hbd", label: "HBD", val: comps.hbd },
      { key: "pka", label: "pKa", val: comps.pka }
    ];

    const count = axes.length;
    const angleStep = (Math.PI * 2) / count;

    const rings = [0.25, 0.5, 0.75, 1.0];
    const ringPolygons = rings.map(scale =>{
      const pts = axes.map((_, i) =>{
        const a = i * angleStep - Math.PI / 2;
        return `${(cx + r * scale * Math.cos(a)).toFixed(1)},${(cy + r * scale * Math.sin(a)).toFixed(1)}`;
      }).join("");
      return `<polygon points="${pts}" fill="none" stroke="var(--color-border)" stroke-width="0.8" opacity="0.6"/>`;
    }).join("");

    const spokes = axes.map((ax, i) =>{
      const a = i * angleStep - Math.PI / 2;
      const x2 = cx + r * Math.cos(a);
      const y2 = cy + r * Math.sin(a);
      const lx = cx + (r + 14) * Math.cos(a);
      const ly = cy + (r + 14) * Math.sin(a);
      return `
        <line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="var(--color-border)" stroke-width="0.8"/>
        <text x="${lx}" y="${ly}" fill="var(--color-text)" font-size="11" font-weight="700" text-anchor="middle" dominant-baseline="central">${ax.label}</text>
      `;
    }).join("");

    const dataPoints = axes.map((ax, i) =>{
      const a = i * angleStep - Math.PI / 2;
      const dist = r * Math.max(0.05, ax.val);
      return `${(cx + dist * Math.cos(a)).toFixed(1)},${(cy + dist * Math.sin(a)).toFixed(1)}`;
    }).join("");

    const score = cns.score;
    const scoreColor = score >= 5.0 ? "#44a282" : (score >= 4.0 ? "#d9a441" : "#e5566f");

    return `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="background:var(--color-bg);border-radius:6px;border:1px solid var(--color-border);font-family:system-ui,-apple-system,sans-serif">
        <text x="10" y="16" fill="var(--color-text-muted)" font-size="11" font-weight="700">PFIZER CNS MPO</text>
        <text x="${width - 10}" y="16" fill="${scoreColor}" font-size="11" font-weight="800" text-anchor="end">Score: ${score} / 6.0</text>
        ${ringPolygons}
        ${spokes}
        <polygon points="${dataPoints}" fill="#5899e2" fill-opacity="0.35" stroke="#5899e2" stroke-width="2"/>
        ${axes.map((ax, i) =>{
          const a = i * angleStep - Math.PI / 2;
          const dist = r * Math.max(0.05, ax.val);
          const px = cx + dist * Math.cos(a);
          const py = cy + dist * Math.sin(a);
          return `<circle cx="${px}" cy="${py}" r="3" fill="#5899e2"/>`;
        }).join("")}
      </svg>
    `;
  }

  function renderTransporterAdmeMatrixSvg(profile, isMini = false, width = 560, height = 110) {
    if (!profile) return "";
    const t = profile.transporters || {};

    function badge(role, name) {
      const isSub = role === "substrate";
      const isInh = role === "inhibitor";
      const isInd = role === "inducer";
      const bg = isSub ? "#5899e2" : (isInh ? "#e5566f" : (isInd ? "#52a2a8" : "var(--color-text-muted)"));
      const label = isSub ? "Substrat" : (isInh ? "Inhibitor" : (isInd ? "Induktor" : "-"));
      return `
        <div style="background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:6px;padding:3px 6px;display:flex;justify-content:space-between;align-items:center;margin-bottom:3px;font-size:13px">
          <b style="color:var(--color-text)">${esc(name)}</b>
          <span style="color:${bg};font-weight:700">${label}</span>
        </div>
      `;
    }

    return `
      <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:6px;font-size:13px">
        <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:6px;padding:6px">
          <div style="font-weight:700;margin-bottom:4px;color:#5899e2;font-size:12px">Mózg (BBB)</div>
          ${badge(t.pgp && t.pgp.role, "P-gp (ABCB1)")}
          ${badge(t.bcrp && t.bcrp.role, "BCRP (ABCG2)")}
          ${badge(t.lat1 && t.lat1.role, "LAT1 (SLC7A5)")}
        </div>
        <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:6px;padding:6px">
          <div style="font-weight:700;margin-bottom:4px;color:#d9a441;font-size:12px">Wątroba (Hepato)</div>
          ${badge(t.oatp1b1 && t.oatp1b1.role, "OATP1B1 (SLC21)")}
          ${badge(t.bsep && t.bsep.role, "BSEP (ABCB11)")}
          ${badge(t.pgp && t.pgp.role, "P-gp kanalikowy")}
        </div>
        <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:6px;padding:6px">
          <div style="font-weight:700;margin-bottom:4px;color:#44a282;font-size:12px">Nerki (Cewki)</div>
          ${badge(t.oat1_3 && t.oat1_3.role, "OAT1 / OAT3")}
          ${badge(t.oct2 && t.oct2.role, "OCT2 (SLC22A2)")}
          ${badge(t.pgp && t.pgp.role, "MDR1 (Mocz)")}
        </div>
        <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:6px;padding:6px">
          <div style="font-weight:700;margin-bottom:4px;color:#52a2a8;font-size:12px">Jelita (Wchłanianie)</div>
          ${badge(t.pept1 && t.pept1.role, "PEPT1 (SLC15A1)")}
          ${badge(t.pgp && t.pgp.role, "P-gp enterocyt")}
          ${badge(t.bcrp && t.bcrp.role, "BCRP jelitowy")}
        </div>
      </div>
    `;
  }

  function openTransporterDock(compoundId, opts = {}) {
    activeTransporterDockOpen = true;
    if (compoundId) transState.cid = compoundId;
    if (opts.inhibitorRatio !== undefined) transState.inhibitorRatio = opts.inhibitorRatio;
    if (opts.preset !== undefined) transState.activePreset = opts.preset;

    let comp = C.find((x) =>x.id === transState.cid);
    if (!comp) {
      comp = C.find((x) =>x.id === "loperamide-compound") || C[0];
      transState.cid = comp.id;
    }

    const prof = getCompoundTransporterProfile(comp);
    const cns = prof.cns_metrics || {};
    const phys = prof.physicochem || {};
    const currentKp = simulatePgpEfflux(cns.kp_uu_baseline, transState.inhibitorRatio);

    const bbbSvg = renderBbbCrossSectionSvg(prof, transState.inhibitorRatio, false, 560, 270);
    const radarSvg = renderCnsMpoRadarSvg(phys, cns.cns_mpo_score, false, 250, 210);
    const matrixHtml = renderTransporterAdmeMatrixSvg(prof, false, 560, 110);

    const presetsHtml = Object.entries(TRANSPORTER_PRESETS).map(([k, p]) =>`
      <button class="btn btn-sm ${transState.activePreset === k ? 'btn-primary' : ''}" data-load-trans-preset="${esc(k)}" style="margin:2px 4px 2px 0;font-size:13px" title="${esc(p.note)}">
        ${esc(p.name)}
      </button>
    `).join("");

    const availableCompounds = C
      .filter((c) =>TRANSPORTER_PROFILES[c.id])
      .map((c) =>({ id: c.id, name: c.n }))
      .sort((a, b) =>a.name.localeCompare(b.name));

    const scenarios = prof.clinical_scenarios || [];
    const scenariosHtml = scenarios.length ? scenarios.map((s) =>`
      <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px;margin-bottom:6px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px">
          <b style="font-size:13px;color:var(--color-error)">${esc(s.transporter)} · Interakcja z ${esc(s.interacting_drug)}</b>
          <span class="badge" style="font-size:13px;background:var(--color-surface-2);color:var(--color-error)">${esc(s.severity)}</span>
        </div>
        <div style="font-size:13px;color:var(--color-text);line-height:1.4">${esc(s.mechanism_pl)}</div>
      </div>
    `).join("") : `<div class="empty" style="padding:.6rem">Brak specyficznych skojarzeń krytycznych w bazie transporterowej dla tej cząsteczki.</div>`;

    const logBb = cns.logbb_clark != null ? cns.logbb_clark : -0.5;
    const logBbBadgeColor = logBb >0.3 ? "var(--color-success)" : (logBb < -1.0 ? "var(--color-error)" : "var(--color-warning)");

    const html = `
      <div class="split-pane-content" style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <span style="font-size:18px;font-weight:700">Transportery Błonowe & Bariera Krew-Mózg (BBB)</span>
              <span class="badge" style="font-size:13px;background:var(--color-surface-2);color:${logBbBadgeColor};border:1px solid var(--color-border)">
                Clark logBB: ${logBb}
              </span>
              <span class="badge" style="font-size:13px;background:var(--color-surface-2);color:var(--color-primary);border:1px solid var(--color-border)">
                CNS MPO: ${cns.cns_mpo_score || '-'} / 6.0
              </span>
              <span class="badge" style="font-size:13px;background:var(--color-surface-2);color:#52a2a8;border:1px solid var(--color-border)">
                Kp,uu: ${currentKp}
              </span>
              ${prof.is_estimated ? `<span class="badge" style="font-size:13px">QSAR Estymator</span>`: `<span class="badge" style="font-size:13px">Baza Kuratorowana</span>`}
            </div>
            <div style="font-size:13px;color:var(--color-text-muted);margin-top:4px">
              Substancja: <b style="color:var(--color-text);font-size:13px">${esc(comp.n)}</b>· Fizjologiczny Model PBPK dla nadrodzin ABC i SLC
            </div>
          </div>
          <button class="btn btn-sm" id="transDockClose" style="font-size:13px;padding:3px 10px">× Zamknij</button>
        </div>

        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px">
          <div style="font-size:13px;font-weight:700;margin-bottom:6px">Scenariusze i Presety Kliniczne:</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px">
            ${presetsHtml}
          </div>
          <div style="margin-top:8px;display:flex;align-items:center;gap:8px">
            <span style="font-size:13px;color:var(--color-text-muted)">Wybierz inną substancję z bazy transporterów:</span>
            <select id="transCompoundSelect" style="font-size:13px;padding:3px 6px;background:var(--color-bg);color:var(--color-text);border:1px solid var(--color-border);border-radius:4px">
              ${availableCompounds.map((ac) =>`<option value="${esc(ac.id)}" ${ac.id === comp.id ? 'selected' : ''}>${esc(ac.name)}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Section 1: BBB Capillary & P-gp Efflux Simulator -->
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:12px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <span style="font-size:13px;font-weight:700">Przekrój Kapilary Mózgowej BBB & Symulator Efluksu P-gp</span>
            <span style="font-size:13px;color:var(--color-text-muted)">Penetracja OUN: <b>${esc(cns.cns_penetration_class || 'unknown')}</b></span>
          </div>

          <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
            <span style="font-size:13px;white-space:nowrap">Inhibicja pompy P-gp ([I] / Ki inhibitora):</span>
            <input type="range" id="transInhibitorRange" min="0" max="10" step="0.5" value="${transState.inhibitorRatio}" style="flex:1;cursor:pointer">
            <b style="font-size:13px;width:45px">${transState.inhibitorRatio.toFixed(1)}×</b>
          </div>

          ${bbbSvg}

          <div style="margin-top:8px;font-size:13px;color:var(--color-text-muted);line-height:1.4">
            <b>Podsumowanie fizjologiczne:</b>${esc(cns.summary_pl || "")}
          </div>
        </div>

        <!-- Section 2: CNS MPO Radar & Organ ADME Matrix -->
        <div style="display:grid;grid-template-columns:270px 1fr;gap:10px">
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:10px">
            <div style="font-size:13px;font-weight:700;margin-bottom:6px">Profil CNS MPO (Pfizer)</div>
            ${radarSvg}
            <div style="font-size:12px;color:var(--color-text-muted);margin-top:6px;line-height:1.3">
              Maks. 6 pkt. Progi: MW &le;360, CLogP &le;3, CLogD &le;2, TPSA 40-90, HBD &le;0.5, pKa &le;8.
            </div>
          </div>

          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:10px;display:flex;flex-direction:column;gap:10px">
            <div>
              <div style="font-size:13px;font-weight:700;margin-bottom:6px">Macierz Transporterów Narządowych (PBPK)</div>
              ${matrixHtml}
            </div>

            <div>
              <div style="font-size:13px;font-weight:700;margin-bottom:6px">Scenariusze Kliniczne & DDI Transporterów:</div>
              ${scenariosHtml}
            </div>
          </div>
        </div>

        <!-- Section 3: 3D Sidecar Link -->
        <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px">
          <div>
            <div style="font-size:13px;font-weight:700">Struktury 3D Transporterów Błonowych (P-gp, BCRP, OATP1B1, LAT1)</div>
            <div style="font-size:13px;color:var(--color-text-muted)">Zbadaj architekturę pora pompy P-gp (PDB: 6QEX) oraz kieszeni OATP1B1 (8H48) i LAT1 (6IRT) w Mol*.</div>
          </div>
          <a href="sidecar://biomolecular-structure-viewer" class="btn btn-sm btn-primary" style="font-size:13px;text-decoration:none">
            Otwórz Biomolecular Structure Viewer ↗
          </a>
        </div>
      </div>
    `;

    openSplitPane("", "Transportery Błonowe & Bariera Krew-Mózg (BBB)", `${comp.n} • Model PBPK & Efluks ABC/SLC`, html);

    const splitBody = $("splitPaneBody");
    if (splitBody) {
      const closeBtn = splitBody.querySelector("#transDockClose");
      if (closeBtn) {
        closeBtn.onclick = () =>{
          activeTransporterDockOpen = false;
          closeSplitPane();
        };
      }

      splitBody.querySelectorAll("[data-load-trans-preset]").forEach((btn) =>{
        btn.onclick = () =>{
          const pKey = btn.dataset.loadTransPreset;
          const preset = TRANSPORTER_PRESETS[pKey];
          if (!preset) return;
          transState.cid = preset.cid;
          transState.inhibitorRatio = preset.inhibitorRatio;
          transState.activePreset = pKey;
          openTransporterDock(transState.cid);
        };
      });

      const compSelect = splitBody.querySelector("#transCompoundSelect");
      if (compSelect) {
        compSelect.onchange = (e) =>{
          transState.cid = e.target.value;
          transState.activePreset = null;
          openTransporterDock(transState.cid);
        };
      }

      const inhRange = splitBody.querySelector("#transInhibitorRange");
      if (inhRange) {
        inhRange.oninput = (e) =>{
          transState.inhibitorRatio = parseFloat(e.target.value);
          transState.activePreset = null;
          openTransporterDock(transState.cid);
        };
      }
    }

    const targetHash = `#/transporters/${transState.cid}?inhibitor=${transState.inhibitorRatio.toFixed(1)}${transState.activePreset ? `&preset=${transState.activePreset}`: ''}`;
    if (location.hash !== targetHash) {
      history.replaceState(null, "", targetHash);
    }
  }

  function closeTransporterDock() {
    activeTransporterDockOpen = false;
    closeSplitPane();
  }

  // ---------- Chemogenomics & Chemical Space Engine (v3.29.0)
  const SCAFFOLD_DEFINITIONS = window.PV_GRAPH.scaffoldDefinitions || [];
  const SCAFFOLD_MAP = Object.fromEntries(SCAFFOLD_DEFINITIONS.map((s) =>[s.id, s]));

  let activeChemspaceModalOpen = false;
  let chemspaceState = {
    cid: "diazepam-compound",
    colorMode: "scaffold", // scaffold | cluster | safety
    filterText: "",
    zoom: 1.0,
    panX: 0,
    panY: 0,
    isDragging: false,
    startX: 0,
    startY: 0,
    hoveredCompound: null,
    activeScaffoldFilter: null
  };
  let chemspaceEventsWired = false;

  function renderBioisostereRadarSvg(c1, c2, width = 260, height = 180) {
    if (!c1 || !c2) return `<div class="empty">Brak danych do porównania bioizosterycznego</div>`;
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(cx, cy) - 24;

    const axes = [
      { label: "Tanimoto", key: "tanimoto" },
      { label: "Masa MW", key: "mw" },
      { label: "Lipofilność LogP", key: "logp" },
      { label: "Polarność PSA", key: "psa" },
      { label: "Wspólne Cele", key: "targets" }
    ];

    // Obliczamy wartości dla 5 osi (0.0 - 1.0)
    let sTanimoto = 0.5;
    if (c1.cs && c1.cs.an) {
      const match = c1.cs.an.find(([id]) =>id === c2.id);
      if (match) sTanimoto = match[1] / 100.0;
    }
    const pr1 = c1.pr || [300, 2, 50];
    const pr2 = c2.pr || [300, 2, 50];
    const dMw = Math.abs((pr1[0] || 300) - (pr2[0] || 300));
    const sMw = Math.max(0, 1.0 - dMw / 150.0);
    const dLogP = Math.abs((pr1[1] || 2) - (pr2[1] || 2));
    const sLogP = Math.max(0, 1.0 - dLogP / 2.0);
    const dPsa = Math.abs((pr1[2] || 50) - (pr2[2] || 50));
    const sPsa = Math.max(0, 1.0 - dPsa / 40.0);
    const tg1 = new Set(c1.tg || []);
    const tg2 = new Set(c2.tg || []);
    const interTg = [...tg1].filter(x =>tg2.has(x)).length;
    const unionTg = new Set([...tg1, ...tg2]).size;
    const sTg = unionTg >0 ? interTg / unionTg : (c1.m && c2.m && c1.m === c2.m ? 0.8 : 0.2);

    const values = [sTanimoto, sMw, sLogP, sPsa, sTg];
    const n = axes.length;

    // Współrzędne wielokąta
    const polyPoints = values.map((v, i) =>{
      const angle = -Math.PI / 2 + (2 * Math.PI * i) / n;
      const r = Math.max(0.1, Math.min(1.0, v)) * radius;
      return `${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`;
    }).join("");

    // Koncentryczne siatki
    const gridCircles = [0.25, 0.5, 0.75, 1.0].map((level) =>{
      const r = level * radius;
      const pts = Array.from({ length: n }).map((_, i) =>{
        const angle = -Math.PI / 2 + (2 * Math.PI * i) / n;
        return `${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`;
      }).join("");
      return `<polygon points="${pts}" fill="none" stroke="var(--color-border)" stroke-width="${level === 1.0 ? 1.2 : 0.7}" stroke-dasharray="${level < 1.0 ? '3 3' : 'none'}"/>`;
    }).join("");

    // Osi promieniowe i etykiety
    const axisLines = axes.map((ax, i) =>{
      const angle = -Math.PI / 2 + (2 * Math.PI * i) / n;
      const x2 = cx + radius * Math.cos(angle);
      const y2 = cy + radius * Math.sin(angle);
      const lx = cx + (radius + 14) * Math.cos(angle);
      const ly = cy + (radius + 14) * Math.sin(angle);
      const anchor = Math.abs(Math.cos(angle)) < 0.2 ? "middle" : (Math.cos(angle) >0 ? "start" : "end");
      return `
        <line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="var(--color-border)" stroke-width="0.8"/>
        <text x="${lx.toFixed(1)}" y="${(ly + 3).toFixed(1)}" fill="var(--color-text-muted)" font-size="11" font-weight="600" text-anchor="${anchor}">${ax.label}</text>
      `;
    }).join("");

    return `
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="overflow:visible">
        ${gridCircles}
        ${axisLines}
        <polygon points="${polyPoints}" fill="rgba(56, 189, 248, 0.35)" stroke="#38bdf8" stroke-width="2"/>
        ${values.map((v, i) =>{
          const angle = -Math.PI / 2 + (2 * Math.PI * i) / n;
          const r = Math.max(0.1, Math.min(1.0, v)) * radius;
          return `<circle cx="${(cx + r * Math.cos(angle)).toFixed(1)}" cy="${(cy + r * Math.sin(angle)).toFixed(1)}" r="3" fill="#38bdf8"/>`;
        }).join("")}
      </svg>
    `;
  }

  function renderChemspaceCanvas() {
    const canvas = $("chemspaceCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const container = $("chemspaceViewportContainer");
    if (container) {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      if (canvas.width !== Math.floor(rect.width * dpr) || canvas.height !== Math.floor(rect.height * dpr)) {
        canvas.width = Math.floor(rect.width * dpr);
        canvas.height = Math.floor(rect.height * dpr);
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
      }
    }

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    // Tło
    ctx.fillStyle = "#070a13";
    ctx.fillRect(0, 0, w, h);

    const midX = w / 2 + chemspaceState.panX;
    const midY = h / 2 + chemspaceState.panY;
    const zoom = chemspaceState.zoom;

    // Siatka i koncentryczne okręgi
    ctx.save();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
    ctx.lineWidth = 1;
    [150, 300, 450, 600].forEach((r) =>{
      ctx.beginPath();
      ctx.arc(midX, midY, r * zoom, 0, 2 * Math.PI);
      ctx.stroke();
    });
    ctx.restore();

    const selCompound = C.find((x) =>x.id === chemspaceState.cid);

    // Linie połączeń z top analogami
    if (selCompound && selCompound.cs && selCompound.cs.an) {
      const qx = midX + selCompound.cs.x * zoom;
      const qy = midY + selCompound.cs.y * zoom;

      // Okrąg chmury podobieństwa
      ctx.save();
      ctx.beginPath();
      ctx.arc(qx, qy, 65 * zoom, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(56, 189, 248, 0.06)";
      ctx.fill();
      ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
      ctx.setLineDash([4, 4]);
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.restore();

      selCompound.cs.an.forEach(([anId, score]) =>{
        const cand = C.find((x) =>x.id === anId);
        if (cand && cand.cs) {
          const ax = midX + cand.cs.x * zoom;
          const ay = midY + cand.cs.y * zoom;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(qx, qy);
          ctx.lineTo(ax, ay);
          ctx.strokeStyle = `rgba(56, 189, 248, ${Math.max(0.2, (score / 100) * 0.7)})`;
          ctx.lineWidth = Math.max(0.8, (score / 100) * 2.5);
          ctx.setLineDash([3, 3]);
          ctx.stroke();
          ctx.restore();
        }
      });
    }

    const filter = (chemspaceState.filterText || "").trim().toLowerCase();
    const scaffFilter = chemspaceState.activeScaffoldFilter;

    // Rysowanie wszystkich 2533 punktów
    for (let i = 0; i < C.length; i++) {
      const c = C[i];
      const cs = c.cs;
      const x = cs ? cs.x : (c.x || 0);
      const y = cs ? cs.y : (c.y || 0);
      const px = midX + x * zoom;
      const py = midY + y * zoom;

      // Sprawdzenie czy w granicach ekranu
      if (px < -20 || px >w + 20 || py < -20 || py >h + 20) continue;

      let color = "#94a3b8";
      if (chemspaceState.colorMode === "scaffold") {
        const sDef = cs ? SCAFFOLD_MAP[cs.s] : null;
        color = sDef ? sDef.color_hex : "#94a3b8";
      } else if (chemspaceState.colorMode === "cluster") {
        color = CL_COLORS[c.c] || "#94a3b8";
      } else if (chemspaceState.colorMode === "safety") {
        const otList = cs && cs.ot ? cs.ot : [];
        if (otList.some(([g, sc, fl]) =>fl === "cardiotoxicity_qt")) color = "#e5566f";
        else if (otList.some(([g, sc, fl]) =>fl === "valvulopathy_fibrosis")) color = "#d9a441";
        else if (otList.length >0) color = "#5899e2";
        else color = "#334155";
      }

      let alpha = 0.85;
      if (filter) {
        const match = c.n.toLowerCase().includes(filter) || c.id.toLowerCase().includes(filter) || (cs && cs.s.toLowerCase().includes(filter));
        alpha = match ? 1.0 : 0.12;
      } else if (scaffFilter) {
        alpha = (cs && cs.s === scaffFilter) ? 1.0 : 0.12;
      }

      const isSel = c.id === chemspaceState.cid;
      const isHov = chemspaceState.hoveredCompound && chemspaceState.hoveredCompound.id === c.id;

      let radius = isSel ? 6.5 : (isHov ? 5.5 : 3.2);

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, 2 * Math.PI);
      ctx.fill();

      if (isSel) {
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Pulsing glow
        ctx.beginPath();
        ctx.arc(px, py, radius + 4, 0, 2 * Math.PI);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.8)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } else if (isHov) {
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      ctx.restore();
    }

    ctx.restore();
  }

  function renderChemspaceLegend() {
    const el = $("chemspaceLegend");
    if (!el) return;
    if (chemspaceState.colorMode === "scaffold") {
      el.innerHTML = SCAFFOLD_DEFINITIONS.slice(0, 16).map((s) =>`
        <button class="tag ${chemspaceState.activeScaffoldFilter === s.id ? 'active' : ''}" data-filter-scaff="${esc(s.id)}" style="background:none;border:1px solid ${s.color_hex};color:var(--color-text);cursor:pointer;font-size:12px;padding:1px 6px">
          <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:${s.color_hex};margin-right:4px"></span>
          ${esc(s.name.split("")[0])}
        </button>
      `).join("") + (chemspaceState.activeScaffoldFilter ? `<button class="tag" id="chemspaceClearFilter" style="cursor:pointer;font-size:12px;color:#ff3b30">× Wyczyść filtr</button>`: '');
      el.querySelectorAll("[data-filter-scaff]").forEach((btn) =>{
        btn.onclick = () =>{
          const sid = btn.dataset.filterScaff;
          chemspaceState.activeScaffoldFilter = chemspaceState.activeScaffoldFilter === sid ? null : sid;
          renderChemspaceLegend();
          renderChemspaceCanvas();
        };
      });
      const clr = el.querySelector("#chemspaceClearFilter");
      if (clr) clr.onclick = () =>{
        chemspaceState.activeScaffoldFilter = null;
        renderChemspaceLegend();
        renderChemspaceCanvas();
      };
    } else if (chemspaceState.colorMode === "cluster") {
      el.innerHTML = G.clusters.map((cl, i) =>`
        <span style="font-size:12px;color:var(--color-text-muted);display:flex;align-items:center;gap:4px">
          <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:${CL_COLORS[i]}"></span>
          ${esc(CL_PL[cl.name] || cl.name)}
        </span>
      `).join("");
    } else {
      el.innerHTML = `
        <span style="font-size:12px;display:flex;align-items:center;gap:4px;color:#e5566f">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#e5566f"></span>hERG (QTc TdP)
        </span>
        <span style="font-size:12px;display:flex;align-items:center;gap:4px;color:#d9a441">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#d9a441"></span>5-HT2B (Zastawki)
        </span>
        <span style="font-size:12px;display:flex;align-items:center;gap:4px;color:#5899e2">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#5899e2"></span>Inne Cele Off-Target
        </span>
        <span style="font-size:12px;display:flex;align-items:center;gap:4px;color:#94969c">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#334155"></span>Brak Alerty Bezpieczeństwa
        </span>
      `;
    }
  }

  function openChemSpaceDock(compoundId) {
    const dock = $("chemspaceDock");
    if (!dock) return;
    chemspaceState.cid = compoundId || chemspaceState.cid || "diazepam-compound";
    const comp = C.find((x) =>x.id === chemspaceState.cid) || C[0];
    const cs = comp.cs || {};
    const scaffDef = SCAFFOLD_MAP[cs.s] || { name: "Pozostałe szkielety", family: "Inne", substructure_description: "Brak specyficznego rusztowania" };

    const topAnalogId = cs.an && cs.an.length ? cs.an[0][0] : null;
    const topAnalogComp = topAnalogId ? C.find(x =>x.id === topAnalogId) : null;
    const radarHtml = topAnalogComp ? renderBioisostereRadarSvg(comp, topAnalogComp, 260, 160) : "";

    const analogsListHtml = (cs.an || []).map(([anId, score]) =>{
      const cand = C.find((x) =>x.id === anId);
      if (!cand) return "";
      const isSameScaff = cand.cs && cand.cs.s === cs.s;
      return `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 8px;background:var(--color-bg);border:1px solid var(--color-border);border-radius:6px">
          <div>
            <div style="font-weight:700;font-size:13px;color:var(--color-text)">${esc(cand.n)}</div>
            <div style="font-size:12px;color:var(--color-text-muted)">
              ${isSameScaff ? '<span class="badge" style="font-size:12px;background:#5899e222;color:#5899e2">To samo rusztowanie</span>' : '<span style="font-size:12px">Inne rusztowanie</span>'}
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <b style="font-size:12px;color:#38bdf8">${score.toFixed(1)}%</b>
            <button class="btn btn-sm" data-select-chemspace-analog="${esc(cand.id)}" style="font-size:13px;padding:2px 6px">Wybierz</button>
          </div>
        </div>
      `;
    }).join("") || `<div class="empty">Brak analogów w bazie</div>`;

    const offtargetsHtml = (cs.ot || []).map(([gene, score, flag, pdb]) =>{
      const isHerg = gene === "KCNH2" || flag === "cardiotoxicity_qt";
      const is5ht2b = gene === "HTR2B" || flag === "valvulopathy_fibrosis";
      const badgeCol = isHerg ? "#e5566f" : (is5ht2b ? "#d9a441" : "#5899e2");
      const flagText = isHerg ? " Kardiotoksyczność (hERG / QTc)" : (is5ht2b ? " Wadotwórczość Zastawek (5-HT2B)" : "Interakcja Off-Target");
      return `
        <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">
            <b style="font-size:13px;color:${badgeCol}">${esc(gene)} · ${flagText}</b>
            <span class="badge" style="font-size:12px;background:var(--color-surface-2);color:${badgeCol}">${score.toFixed(0)}% ufności</span>
          </div>
          <div style="font-size:13px;color:var(--color-text-muted);margin-bottom:4px">
            Przeniesienie adnotacji fenotypowej na podstawie podobieństwa sąsiadów w przestrzeni chemicznej.
          </div>
          ${pdb ? `
            <a href="sidecar://biomolecular-structure-viewer" class="btn btn-sm" style="display:inline-flex;align-items:center;gap:4px;font-size:12px;padding:2px 8px;text-decoration:none;background:var(--color-surface);border:1px solid var(--color-border);color:var(--color-text)">
               Zbadaj kieszeń 3D PDB: <b>${esc(pdb)}</b>↗
            </a>
          `: ''}
        </div>
      `;
    }).join("") || `<div class="empty" style="font-size:13px;padding:6px">Brak wykrytych krytycznych celów off-target o wysokim prawdopodobieństwie.</div>`;

    dock.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start">
        <div>
          <div style="font-size:15px;font-weight:700;color:var(--color-text)">${esc(comp.n)}</div>
          <div style="font-size:13px;color:var(--color-text-muted)">${esc(comp.id)} · Grupa: ${esc(comp.g || "Inne")}</div>
        </div>
        <button class="btn btn-sm btn-primary" id="chemspaceOpenDossierBtn" style="font-size:13px;padding:3px 8px">Monografia ↗</button>
      </div>

      <!-- Rusztowanie Bemis-Murcko -->
      <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:6px;padding:10px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span style="font-size:13px;text-transform:uppercase;color:var(--color-text-muted);font-weight:700">Rusztowanie Bemis-Murcko</span>
          <span class="badge" style="background:var(--color-surface-2);color:var(--color-text);border:1px solid var(--color-border);font-size:13px">${esc(scaffDef.family || "Inne")}</span>
        </div>
        <div style="font-size:13px;font-weight:700;color:var(--color-text);margin-bottom:3px">${esc(scaffDef.name || "Szkielet alifatyczny")}</div>
        <div style="font-size:13px;color:var(--color-text-muted);line-height:1.4">${esc(scaffDef.substructure_description || "")}</div>
        ${scaffDef.pdb_target_id ? `
          <div style="margin-top:6px">
            <a href="sidecar://biomolecular-structure-viewer" style="font-size:12px;color:#38bdf8;text-decoration:none">
               Kompleks PDB farmakoforu: <b>${esc(scaffDef.pdb_target_id)}</b>↗
            </a>
          </div>
        `: ''}
      </div>

      <!-- Radar Bioizosteryczny -->
      ${topAnalogComp ? `
        <div style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:6px;padding:10px;display:flex;flex-direction:column;align-items:center">
          <div style="width:100%;display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:13px;text-transform:uppercase;color:var(--color-text-muted);font-weight:700">Radar Bioizosterii (vs ${esc(topAnalogComp.n)})</span>
            <span style="font-size:13px;color:#38bdf8;font-weight:700">${cs.an[0][1].toFixed(1)}%</span>
          </div>
          ${radarHtml}
        </div>
      `: ''}

      <!-- Analogi Tanimoto -->
      <div>
        <div style="font-size:13px;font-weight:700;margin-bottom:6px;color:var(--color-text)">Top Analogi Chemiczne (Tanimoto):</div>
        <div style="display:flex;flex-direction:column;gap:5px">
          ${analogsListHtml}
        </div>
      </div>

      <!-- Predykcja Celów Off-Target -->
      <div>
        <div style="font-size:13px;font-weight:700;margin-bottom:6px;color:var(--color-text)">Predykcja Celów Off-Target (Target Neighborhood):</div>
        <div style="display:flex;flex-direction:column;gap:6px">
          ${offtargetsHtml}
        </div>
      </div>
    `;

    const dosBtn = dock.querySelector("#chemspaceOpenDossierBtn");
    if (dosBtn) dosBtn.onclick = () =>{
      closeChemspaceModal();
      select({ type: "compound", i: comp.i }, true);
      setWorkspaceMode("dossier");
    };

    dock.querySelectorAll("[data-select-chemspace-analog]").forEach((btn) =>{
      btn.onclick = () =>{
        const aId = btn.dataset.selectChemspaceAnalog;
        chemspaceState.cid = aId;
        openChemSpaceDock(aId);
        renderChemspaceCanvas();
      };
    });
  }

  function wireChemspaceEvents() {
    if (chemspaceEventsWired) return;
    chemspaceEventsWired = true;

    const canvas = $("chemspaceCanvas");
    const container = $("chemspaceViewportContainer");
    const tooltip = $("chemspaceTooltip");
    const colorSelect = $("chemspaceColorSelect");
    const searchInput = $("chemspaceSearchInput");
    const resetZoomBtn = $("chemspaceResetZoomBtn");
    const closeBtn = $("chemspaceModalClose");

    if (closeBtn) closeBtn.onclick = closeChemspaceModal;

    if (colorSelect) {
      colorSelect.onchange = (e) =>{
        chemspaceState.colorMode = e.target.value;
        renderChemspaceLegend();
        renderChemspaceCanvas();
      };
    }

    if (searchInput) {
      searchInput.oninput = (e) =>{
        chemspaceState.filterText = e.target.value;
        renderChemspaceCanvas();
      };
    }

    if (resetZoomBtn) {
      resetZoomBtn.onclick = () =>{
        chemspaceState.zoom = 1.0;
        chemspaceState.panX = 0;
        chemspaceState.panY = 0;
        chemspaceState.filterText = "";
        chemspaceState.activeScaffoldFilter = null;
        if (searchInput) searchInput.value = "";
        renderChemspaceLegend();
        renderChemspaceCanvas();
      };
    }

    if (container && canvas) {
      container.addEventListener("wheel", (e) =>{
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.15 : 0.85;
        const newZoom = Math.max(0.3, Math.min(6.0, chemspaceState.zoom * factor));
        chemspaceState.zoom = newZoom;
        renderChemspaceCanvas();
      }, { passive: false });

      container.addEventListener("mousedown", (e) =>{
        if (e.button !== 0) return;
        chemspaceState.isDragging = true;
        chemspaceState.startX = e.clientX - chemspaceState.panX;
        chemspaceState.startY = e.clientY - chemspaceState.panY;
      });

      window.addEventListener("mousemove", (e) =>{
        if (!activeChemspaceModalOpen) return;
        if (chemspaceState.isDragging) {
          chemspaceState.panX = e.clientX - chemspaceState.startX;
          chemspaceState.panY = e.clientY - chemspaceState.startY;
          renderChemspaceCanvas();
          return;
        }

        // Hover detection
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        if (mx < 0 || mx >rect.width || my < 0 || my >rect.height) {
          if (tooltip) tooltip.style.display = "none";
          chemspaceState.hoveredCompound = null;
          return;
        }

        const midX = rect.width / 2 + chemspaceState.panX;
        const midY = rect.height / 2 + chemspaceState.panY;
        const zoom = chemspaceState.zoom;

        const worldX = (mx - midX) / zoom;
        const worldY = (my - midY) / zoom;

        let closest = null;
        let minDist = 12 / zoom;

        for (let i = 0; i < C.length; i++) {
          const c = C[i];
          const cs = c.cs;
          const cx = cs ? cs.x : (c.x || 0);
          const cy = cs ? cs.y : (c.y || 0);
          const dx = cx - worldX;
          const dy = cy - worldY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < minDist) {
            minDist = dist;
            closest = c;
          }
        }

        if (closest) {
          chemspaceState.hoveredCompound = closest;
          if (tooltip) {
            const cs = closest.cs || {};
            const sDef = SCAFFOLD_MAP[cs.s] || {};
            tooltip.style.display = "block";
            tooltip.style.left = `${Math.min(rect.width - 200, mx + 12)}px`;
            tooltip.style.top = `${Math.min(rect.height - 80, my + 12)}px`;
            tooltip.innerHTML = `
              <div style="font-weight:700;color:#fff">${esc(closest.n)}</div>
              <div style="color:#94a3b8;font-size:12px">${esc(sDef.name || "Inne")}</div>
              <div style="color:#38bdf8;font-size:13px;margin-top:2px">Kliknij, aby otworzyć profil</div>
            `;
          }
        } else {
          chemspaceState.hoveredCompound = null;
          if (tooltip) tooltip.style.display = "none";
        }
        renderChemspaceCanvas();
      });

      window.addEventListener("mouseup", () =>{
        chemspaceState.isDragging = false;
      });

      container.addEventListener("click", (e) =>{
        if (chemspaceState.hoveredCompound) {
          chemspaceState.cid = chemspaceState.hoveredCompound.id;
          openChemSpaceDock(chemspaceState.cid);
          renderChemspaceCanvas();
        }
      });
    }
  }

  function openChemspaceView(compoundId) {
    activeChemspaceModalOpen = true;
    const modal = $("chemspaceModal");
    if (!modal) return;
    openDialog(modal);
    wireChemspaceEvents();
    if (compoundId) chemspaceState.cid = compoundId;
    renderChemspaceLegend();
    openChemSpaceDock(chemspaceState.cid);
    setTimeout(() =>{
      renderChemspaceCanvas();
    }, 40);
  }

  function closeChemspaceModal() {
    activeChemspaceModalOpen = false;
    const modal = $("chemspaceModal");
    if (modal) closeDialog(modal);
    if (typeof syncWorkspaceModeToOpenModals === "function") syncWorkspaceModeToOpenModals();
  }


  // ---------- Hybrid Clinical Notes & Cases Engine (v3.24.0)
  const CANONICAL_NOTES = G.clinicalNotes || [];
  const NOTES_STORAGE_KEY = "pv_clinical_notes_v1";
  let activeNotesModalOpen = false;
  let notesEventsWired = false;
  let notesState = {
    selectedId: CANONICAL_NOTES.length ? CANONICAL_NOTES[0].id : null,
    categoryFilter: "all",
    searchQuery: "",
    isEditing: false,
    editingNew: false
  };

  const NOTE_CATEGORY_META = {
    case_study: { label: "Przypadek kliniczny", badgeBg: "rgba(229,86,111,0.14)", badgeCol: "var(--color-error)" },
    mechanism: { label: "Neurofarmakologia & Mechanizm", badgeBg: "rgba(88,153,226,0.14)", badgeCol: "var(--color-primary)" },
    ebm_review: { label: "Przegląd krytyczny & EBM", badgeBg: "rgba(68,162,130,0.14)", badgeCol: "var(--color-success)" },
    html_note: { label: "Notatka / Artefakt HTML", badgeBg: "rgba(217,164,65,0.14)", badgeCol: "var(--color-warning)" }
  };

  const NOTE_PROVENANCE_META = {
    "repo-curated": { label: "KANONICZNA (Repo HTML)", col: "var(--color-primary)" },
    "repo-resources": { label: "KANONICZNA (Resources)", col: "var(--color-success)" },
    "repo-vault": { label: "KANONICZNA (Obsidian Vault)", col: "var(--color-primary)" },
    "local-override": { label: "ZMODYFIKOWANA LOKALNIE", col: "var(--color-warning)" },
    "local-browser": { label: "LOKALNA (Przeglądarka)", col: "var(--color-warning)" }
  };

  const NOTE_HTML_TEMPLATES = {
    case_study: `<article class="pv-clinical-note">
  <div class="pv-case-banner pv-banner-critical">
    <div><strong>ALERT KLINICZNY:</strong> Podsumowanie kluczowej interakcji farmakokinetycznej / farmakodynamicznej w prezentowanym przypadku.</div>
  </div>
  <h3>1. Prezentacja kliniczna i oś czasu (Timeline)</h3>
  <p>Opis pacjenta, wywiad chorobowy (kody ICD-10: <code>F32.2</code>) oraz chronologia włączania leków.</p>
  <ul>
    <li><strong>Dzień −7:</strong> Włączenie leku A...</li>
    <li><strong>Dzień 0:</strong> Dołączenie leku B i wystąpienie objawów...</li>
  </ul>
  <h3>2. Analiza mechanizmu molekularnego i PK/PD</h3>
  <table>
    <thead>
      <tr><th>Zaangażowany lek</th><th>Szlak CYP / Transporter / Receptor</th><th>Skutek kliniczny</th></tr>
    </thead>
    <tbody>
      <tr><td>Nazwa leku (np. Fluoxetine)</td><td>Inhibicja CYP2D6 / SERT (<code>CHEMBL228</code>)</td><td>Wzrost AUC / blokada wychwytu zwrotnego</td></tr>
    </tbody>
  </table>
  <h3>3. Postępowanie terapeutyczne i wnioski</h3>
  <ol>
    <li>Natychmiastowa korekta schematu leczenia...</li>
    <li>Bezpieczna alternatywa farmakologiczna...</li>
  </ol>
</article>`,
    mechanism: `<article class="pv-clinical-note">
  <div class="pv-case-banner pv-banner-info">
    <div><strong>TEZA NEUROFARMAKOLOGICZNA:</strong> Główne prawo farmakodynamiczne lub kinetyczne omawiane w notatce.</div>
  </div>
  <h3>1. Architektura receptorowa i transdukcja sygnału</h3>
  <p>Analiza powinowactwa (Ki / pKi), selektywności podtypów receptorowych oraz przenikania przez barierę krew-mózg (BBB, <code>Kp,uu,brain</code>).</p>
  <h3>2. Porównanie przedstawicieli klasy</h3>
  <table>
    <thead>
      <tr><th>Substancja</th><th>Cel molekularny (ChEMBL)</th><th>Implikacja kliniczna</th></tr>
    </thead>
    <tbody>
      <tr><td>Clozapine</td><td><code>CHEMBL217</code> / <code>CHEMBL2096662</code></td><td>Szybka dysocjacja z D2, brak EPS</td></tr>
    </tbody>
  </table>
</article>`,
    ebm_review: `<article class="pv-clinical-note">
  <div class="pv-case-banner pv-banner-warning">
    <div><strong>OCENA KRYTYCZNA EBM:</strong> Weryfikacja dowodów klinicznych (RCT / Meta-analizy vs hipotezy przedkliniczne).</div>
  </div>
  <h3>1. Zestawienie twierdzeń i jakości dowodów</h3>
  <p>Synteza literatury i ocena stosunku korzyści do ryzyka.</p>
  <h3>2. Najważniejsze ryzyka i interakcje</h3>
  <ul>
    <li>Ryzyko polipragmazji i wąskich gardeł metabolicznych CYP450.</li>
  </ul>
</article>`
  };

  function loadLocalNotesStore() {
    try {
      const raw = localStorage.getItem(NOTES_STORAGE_KEY);
      if (!raw) return { custom: [], overrides: {} };
      const parsed = JSON.parse(raw);
      return {
        custom: Array.isArray(parsed.custom) ? parsed.custom : [],
        overrides: (parsed.overrides && typeof parsed.overrides === "object") ? parsed.overrides : {}
      };
    } catch (e) {
      return { custom: [], overrides: {} };
    }
  }

  function saveLocalNotesStore(store) {
    try {
      localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(store));
    } catch (e) {
      showToast("Błąd zapisu w localStorage (przekroczony limit pamięci)", "error");
    }
    updateNotesBadgeCount();
  }

  function getAllClinicalNotes() {
    const store = loadLocalNotesStore();
    const merged = [];
    CANONICAL_NOTES.forEach((cn) =>{
      if (store.overrides && store.overrides[cn.id]) {
        merged.push({
          ...cn,
          ...store.overrides[cn.id],
          id: cn.id,
          provenance: "local-override",
          hasCanonicalOriginal: true,
          canonicalProvenance: cn.provenance
        });
      } else {
        merged.push({ ...cn, hasCanonicalOriginal: true });
      }
    });
    (store.custom || []).forEach((ln) =>{
      merged.push({
        ...ln,
        provenance: ln.provenance || "local-browser",
        hasCanonicalOriginal: false
      });
    });
    return merged;
  }

  function updateNotesBadgeCount() {
    const badge = $("modeNotesBadge");
    if (badge) {
      const all = getAllClinicalNotes();
      badge.textContent = String(all.length);
    }
  }

  // Fast dictionary for compound & target name auto-linking
  const compoundLookupMap = new Map();
  C.forEach((c) =>{
    const baseName = c.n.split("(")[0].trim().toLowerCase();
    if (baseName.length >= 4) compoundLookupMap.set(baseName, c);
    compoundLookupMap.set(c.id.toLowerCase(), c);
    compoundLookupMap.set(c.id.replace(/-compound$/, "").toLowerCase(), c);
    (c.a || []).forEach((al) =>{
      const cleanAl = al.trim().toLowerCase();
      if (cleanAl.length >= 4 && !compoundLookupMap.has(cleanAl)) compoundLookupMap.set(cleanAl, c);
    });
  });

  // Polish clinical stem aliases -> canonical compound_id
  const PL_STEM_TO_CID = {
    "fluoksetyn": "fluoxetine-compound",
    "tramadol": "tramadol-compound",
    "moklobemid": "moclobemide-compound",
    "cyproheptadyn": "cyproheptadine-compound",
    "lewodop": "levodopa-compound",
    "oksybutynin": "oxybutynin-compound",
    "amitryptylin": "amitriptyline-compound",
    "kwetiapin": "quetiapine-compound",
    "rywastygmin": "rivastigmine-compound",
    "walproinian": "valproate-compound",
    "walproinow": "valproate-compound",
    "lamotrygin": "lamotrigine-compound",
    "karbamazepin": "carbamazepine-compound",
    "lewetiracetam": "levetiracetam-compound",
    "symwastatyn": "simvastatin-compound",
    "klarytromycyn": "clarithromycin-compound",
    "werapamil": "verapamil-compound",
    "rosuwastatyn": "rosuvastatin-compound",
    "loperamid": "loperamide-compound",
    "domperydon": "domperidone-compound",
    "feksofenadyn": "fexofenadine-compound",
    "cetiryzyn": "cetirizine-compound",
    "cetyryzyn": "cetirizine-compound",
    "modafinil": "modafinil-compound",
    "klozapin": "clozapine-compound",
    "arypiprazol": "aripiprazole-compound",
    "amisulpryd": "amisulpride-compound",
    "risperidon": "risperidone-compound",
    "rysperydon": "risperidone-compound",
    "haloperidol": "haloperidol-compound",
    "fenelzyn": "phenelzine-compound",
    "tranylcypromin": "tranylcypromine-compound",
    "tianeptyn": "tianeptine-compound",
    "metformin": "metformin-compound",
    "fluwoksamin": "fluvoxamine-compound",
    "klomipramin": "clomipramine-compound",
    "metylofenidat": "methylphenidate-compound",
    "bupropion": "bupropion-compound",
    "ketamin": "ketamine-compound",
    "acetylocystein": "acetylcysteine-compound",
    "diazepam": "diazepam-compound"
  };

  function resolveCompoundToken(token) {
    if (!token) return null;
    const t = token.trim().toLowerCase();
    if (compoundLookupMap.has(t)) return compoundLookupMap.get(t);
    for (const [stem, cid] of Object.entries(PL_STEM_TO_CID)) {
      if (t.startsWith(stem)) return compoundLookupMap.get(cid) || null;
    }
    return null;
  }

  function extractEntitiesFromNote(note) {
    if (!note) return { compounds: [], targets: [], icd: [] };
    const compSet = new Set();
    const targetSet = new Set();
    const icdSet = new Set();

    (note.compounds || []).forEach((cid) =>{
      const c = resolveCompoundToken(cid);
      if (c) compSet.add(c.i);
    });
    (note.targets || []).forEach((tid) =>{
      const ti = targetIdxById.get(tid.trim().toUpperCase());
      if (ti !== undefined) targetSet.add(ti);
    });
    (note.icd || []).forEach((code) =>{
      if (code && code.trim()) icdSet.add(code.trim().toUpperCase());
    });

    const plainText = (note.title + " " + (note.subtitle || "") + " " + (note.html || "").replace(/<[^>]+>/g, " "));
    const chemblMatches = plainText.match(/CHEMBL\d+/gi) || [];
    chemblMatches.forEach((m) =>{
      const ti = targetIdxById.get(m.toUpperCase());
      if (ti !== undefined) targetSet.add(ti);
    });

    const icdMatches = plainText.match(/\b[FGLMNIT]\d{2}(?:\.\d+)?\b/g) || [];
    icdMatches.forEach((m) =>icdSet.add(m));

    const lowerText = plainText.toLowerCase();
    for (const [stem, cid] of Object.entries(PL_STEM_TO_CID)) {
      if (lowerText.includes(stem)) {
        const c = compoundLookupMap.get(cid);
        if (c) compSet.add(c.i);
      }
    }

    return {
      compounds: [...compSet].map((i) =>C[i]).filter(Boolean),
      targets: [...targetSet].map((i) =>({ ...T[i], idx: i })).filter(Boolean),
      icd: [...icdSet]
    };
  }

  function getNotesForCompound(c) {
    if (!c) return [];
    const all = getAllClinicalNotes();
    return all.filter((n) =>{
      if ((n.compounds || []).includes(c.id)) return true;
      const ents = extractEntitiesFromNote(n);
      return ents.compounds.some((x) =>x.i === c.i);
    });
  }

  function prepareNoteHtmlForRender(rawHtml, entities) {
    if (!rawHtml) return "<p class='muted'>Brak treści notatki.</p>";
    let htmlStr = rawHtml.trim();

    // If user pasted Markdown without HTML tags, convert basic Markdown to HTML
    if (!/<[a-z][\s\S]*>/i.test(htmlStr)) {
      htmlStr = htmlStr
        .split(/\n\n+/)
        .map((blk) =>{
          const t = blk.trim();
          if (t.startsWith("### ")) return `<h4>${esc(t.slice(4))}</h4>`;
          if (t.startsWith("## ") || t.startsWith("# ")) return `<h3>${esc(t.replace(/^#+\s*/, ""))}</h3>`;
          return `<p>${esc(t).replace(/\n/g, "<br>")}</p>`;
        })
        .join("\n");
    }

    // Parse with DOMParser to safely strip <script> and turn entity mentions into interactive pills
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlStr, "text/html");
    doc.querySelectorAll("script, iframe, object, embed").forEach((el) =>el.remove());

    // Preserve any custom <style> blocks inside the note by scoping them to #notesReaderWrap
    let scopedStyles = "";
    doc.querySelectorAll("style").forEach((st) =>{
      const cssText = st.textContent || "";
      scopedStyles += `<style>${cssText.replace(/(^|\})\s*body\b/g, "$1 .notes-reader")}</style>`;
      st.remove();
    });

    // Build regex of compound names & ChEMBL IDs to highlight in text nodes
    const tokenTerms = [];
    (entities.compounds || []).forEach((c) =>{
      const en = c.n.split("(")[0].trim();
      if (en.length >= 4) tokenTerms.push({ term: en, type: "compound", val: String(c.i), label: en });
    });
    (entities.targets || []).forEach((t) =>{
      tokenTerms.push({ term: t.id, type: "target", val: String(t.idx), label: t.id });
    });

    if (tokenTerms.length) {
      tokenTerms.sort((a, b) =>b.term.length - a.term.length);
      const escapedTerms = tokenTerms.map((x) =>x.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      const rx = new RegExp(`\\b(${escapedTerms.join("|")})\\b`, "gi");

      const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT);
      const textNodes = [];
      let cur;
      while ((cur = walker.nextNode())) {
        const parentTag = cur.parentElement ? cur.parentElement.tagName : "";
        if (!["BUTTON", "A", "STYLE", "SCRIPT", "TEXTAREA"].includes(parentTag) && rx.test(cur.nodeValue)) {
          textNodes.push(cur);
        }
        rx.lastIndex = 0;
      }

      textNodes.forEach((node) =>{
        const text = node.nodeValue;
        rx.lastIndex = 0;
        let lastIdx = 0;
        let match;
        const frag = doc.createDocumentFragment();
        while ((match = rx.exec(text)) !== null) {
          if (match.index > lastIdx) {
            frag.appendChild(doc.createTextNode(text.slice(lastIdx, match.index)));
          }
          const matchedText = match[0];
          const found = tokenTerms.find((x) =>x.term.toLowerCase() === matchedText.toLowerCase());
          if (found) {
            const btn = doc.createElement("button");
            btn.type = "button";
            btn.className = "pv-entity-link";
            btn.setAttribute("data-note-entity-type", found.type);
            btn.setAttribute("data-note-entity-val", found.val);
            btn.textContent = matchedText;
            frag.appendChild(btn);
          } else {
            frag.appendChild(doc.createTextNode(matchedText));
          }
          lastIdx = rx.lastIndex;
        }
        if (lastIdx < text.length) {
          frag.appendChild(doc.createTextNode(text.slice(lastIdx)));
        }
        if (node.parentNode) node.parentNode.replaceChild(frag, node);
      });
    }

    return scopedStyles + doc.body.innerHTML;
  }

  function renderNotesWorkspace() {
    const allNotes = getAllClinicalNotes();
    updateNotesBadgeCount();

    const subtitleEl = $("notesCountSubtitle");
    if (subtitleEl) {
      const canonCount = CANONICAL_NOTES.length;
      const localCount = allNotes.length - canonCount;
      subtitleEl.textContent = `${allNotes.length} dokumentów (${canonCount} kanonicznych z repo · ${localCount} lokalnych w przeglądarce)`;
    }

    const q = (notesState.searchQuery || "").trim().toLowerCase();
    const cat = notesState.categoryFilter || "all";

    const filtered = allNotes.filter((n) =>{
      if (cat === "local") {
        if (n.provenance !== "local-browser" && n.provenance !== "local-override" && n.category !== "html_note") return false;
      } else if (cat !== "all" && n.category !== cat) {
        return false;
      }
      if (!q) return true;
      const hay = [
        n.title, n.subtitle, n.category, n.cluster,
        ...(n.tags || []), ...(n.compounds || []), ...(n.targets || []), ...(n.icd || []),
        (n.html || "").replace(/<[^>]+>/g, " ")
      ].join(" ").toLowerCase();
      return hay.includes(q);
    });

    if (!notesState.selectedId || !allNotes.some((n) =>n.id === notesState.selectedId)) {
      notesState.selectedId = filtered.length ? filtered[0].id : (allNotes[0] ? allNotes[0].id : null);
    }

    const listEl = $("notesListContainer");
    if (listEl) {
      if (!filtered.length) {
        listEl.innerHTML = `<div style="padding:16px;text-align:center;color:var(--color-text-muted);font-size:12px">Brak notatek spełniających kryteria filtra.</div>`;
      } else {
        listEl.innerHTML = filtered.map((n) =>{
          const isAct = n.id === notesState.selectedId;
          const catMeta = NOTE_CATEGORY_META[n.category] || NOTE_CATEGORY_META.html_note;
          const provMeta = NOTE_PROVENANCE_META[n.provenance] || NOTE_PROVENANCE_META["local-browser"];
          const ents = extractEntitiesFromNote(n);
          const patientPill = n.patient && n.patient.age_sex
            ? `<span class="tag" style="font-size:10px;padding:1px 5px">${esc(n.patient.age_sex)}${n.patient.egfr ? ` · eGFR ${esc(n.patient.egfr)}` : ""}</span>`
            : "";
          return `
            <button type="button" class="note-list-item ${isAct ? "active" : ""}" data-select-note-id="${esc(n.id)}" role="option" aria-selected="${isAct}">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:4px;width:100%">
                <span style="font-size:10px;font-weight:700;padding:1px 6px;border-radius:4px;background:${catMeta.badgeBg};color:${catMeta.badgeCol}">${esc(catMeta.label)}</span>
                <span style="font-size:10px;font-weight:700;color:${provMeta.col}">${n.provenance === "local-browser" ? "LOKALNA" : (n.provenance === "local-override" ? "NADPISANA" : "REPO")}</span>
              </div>
              <div style="font-size:13px;font-weight:700;line-height:1.3;color:var(--color-text);margin-top:2px">${esc(n.title)}</div>
              ${n.subtitle ? `<div style="font-size:11.5px;color:var(--color-text-muted);line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${esc(n.subtitle)}</div>` : ""}
              <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-top:4px;font-size:11px;color:var(--color-text-muted)">
                <span>${ents.compounds.length} leków · ${ents.targets.length} celów</span>
                ${patientPill}
              </div>
            </button>
          `;
        }).join("");

        listEl.querySelectorAll("[data-select-note-id]").forEach((btn) =>{
          btn.onclick = () =>{
            notesState.selectedId = btn.dataset.selectNoteId;
            notesState.isEditing = false;
            notesState.editingNew = false;
            renderNotesWorkspace();
          };
        });
      }
    }

    const activeNote = allNotes.find((n) =>n.id === notesState.selectedId) || null;
    renderActiveNotePane(activeNote);
  }

  function renderActiveNotePane(note) {
    const headEl = $("notesActiveHeader");
    const readerEl = $("notesReaderWrap");
    const editorEl = $("notesEditorWrap");
    const dockEl = $("notesEntitiesDock");
    if (!headEl || !readerEl || !editorEl || !dockEl) return;

    if (notesState.isEditing) {
      editorEl.style.display = "flex";
    } else {
      editorEl.style.display = "none";
    }

    if (!note && !notesState.editingNew) {
      headEl.innerHTML = `<div style="font-size:13px;color:var(--color-text-muted)">Wybierz notatkę z listy po lewej stronie lub utwórz nową.</div>`;
      readerEl.innerHTML = "";
      dockEl.innerHTML = "";
      return;
    }

    if (notesState.editingNew) {
      headEl.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center">
          <b style="font-size:15px;color:var(--color-primary)">Tworzenie nowej notatki / przypadku klinicznego</b>
          <span class="tag" style="font-size:11px">Zapis w przeglądarce (localStorage) + eksport .html</span>
        </div>
      `;
      readerEl.innerHTML = `<p class="muted">Wypełnij pola powyżej i kliknij <b>Zapisz zmiany</b>, aby wyrenderować notatkę i powiązać encje z grafem.</p>`;
      dockEl.innerHTML = `<div style="font-size:12px;color:var(--color-text-muted)">Po zapisaniu notatki tutaj pojawią się automatycznie wykryte leki, cele ChEMBL, kody ICD oraz kalkulator ryzyka DDI.</div>`;
      return;
    }

    const catMeta = NOTE_CATEGORY_META[note.category] || NOTE_CATEGORY_META.html_note;
    const provMeta = NOTE_PROVENANCE_META[note.provenance] || NOTE_PROVENANCE_META["local-browser"];
    const entities = extractEntitiesFromNote(note);

    const patientStripHtml = note.patient ? `
      <div class="notes-patient-strip">
        <div style="display:flex;flex-wrap:wrap;gap:6px 14px;align-items:center">
          <span><b>Pacjent:</b> ${esc(note.patient.age_sex || "–")}</span>
          ${note.patient.egfr != null ? `<span><b>eGFR:</b> <code>${esc(note.patient.egfr)} mL/min</code></span>` : ""}
          ${note.patient.cyp_phenotype ? `<span><b>Profil enzymatyczny:</b> ${esc(note.patient.cyp_phenotype)}</span>` : ""}
          ${note.patient.diagnosis ? `<span><b>Rozpoznanie:</b> ${esc(note.patient.diagnosis)}</span>` : ""}
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          ${entities.compounds.length ? `<button class="btn btn-sm btn-gold" id="noteHeaderLoadStackBtn" style="font-size:11px;padding:3px 9px" title="Załaduj wszystkie leki z tego przypadku do Stacka i otwórz Audyt DDI">Załaduj do Stacka &amp; DDI (${entities.compounds.length})</button>` : ""}
          ${entities.compounds.length ? `<button class="btn btn-sm" id="noteHeaderOpenPkBtn" style="font-size:11px;padding:3px 9px" title="Otwórz Symulator PK C(t) z parametrami eGFR tego przypadku">Symulator PK C(t)</button>` : ""}
        </div>
      </div>
    ` : "";

    headEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;background:${catMeta.badgeBg};color:${catMeta.badgeCol}">${esc(catMeta.label)}</span>
          <span class="tag" style="font-size:11px;color:${provMeta.col};border-color:${provMeta.col}">${esc(provMeta.label)}</span>
          ${note.source_file ? `<code style="font-size:11px;color:var(--color-text-muted)">${esc(note.source_file)}</code>` : ""}
          <span style="font-size:11px;color:var(--color-text-muted)">· Akt.: ${esc(note.updated || "2026-11-10")}</span>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn btn-sm" id="noteEditToggleBtn" style="font-size:11px;padding:3px 9px">${notesState.isEditing ? "Zamknij edytor" : "Edytuj HTML / Metadane"}</button>
          <button class="btn btn-sm" id="noteExportHtmlFileBtn" style="font-size:11px;padding:3px 9px" title="Pobierz samowystarczalny plik .html z metadanymi gotowy do zapisu w Pharma-vault/data/curated/notes/">Eksportuj .html (do repo)</button>
          <button class="btn btn-sm" id="noteCopyRawHtmlBtn" style="font-size:11px;padding:3px 9px">Kopiuj HTML</button>
          ${note.provenance === "local-override" ? `<button class="btn btn-sm" id="noteRevertCanonicalBtn" style="font-size:11px;padding:3px 9px;color:var(--color-warning)">Przywróć oryginał z repo</button>` : ""}
          ${note.provenance === "local-browser" ? `<button class="btn btn-sm" id="noteDeleteCustomBtn" style="font-size:11px;padding:3px 9px;color:var(--color-error)">Usuń lokalną</button>` : ""}
        </div>
      </div>
      <div>
        <h2 style="font-size:18px;font-weight:700;margin:0;color:var(--color-text);line-height:1.25">${esc(note.title)}</h2>
        ${note.subtitle ? `<p style="font-size:13px;color:var(--color-text-muted);margin:4px 0 0">${esc(note.subtitle)}</p>` : ""}
      </div>
      ${(note.tags && note.tags.length) ? `
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${note.tags.map((t) =>`<span class="tag" style="font-size:11px">#${esc(t)}</span>`).join("")}
        </div>
      ` : ""}
      ${patientStripHtml}
    `;

    // Render enriched HTML body
    readerEl.innerHTML = prepareNoteHtmlForRender(note.html, entities);

    // Wire interactive entity buttons inside readerEl
    readerEl.querySelectorAll("[data-note-entity-type]").forEach((btn) =>{
      btn.onclick = () =>{
        const tp = btn.dataset.noteEntityType;
        const val = btn.dataset.noteEntityVal;
        if (tp === "compound") {
          closeNotesModal();
          select({ type: "compound", i: +val }, true);
        } else if (tp === "target") {
          closeNotesModal();
          openTargetModal(+val);
        }
      };
    });

    // Render Right-Hand Pharmacology Entities Dock
    const polyRisk = entities.compounds.length >= 2 ? computePolypharmacyScore(entities.compounds) : null;
    const riskBoxHtml = polyRisk ? `
      <div style="background:var(--color-surface-2);border:1px solid var(--color-border);border-left:3px solid ${polyRisk.score > 50 ? 'var(--color-error)' : (polyRisk.score > 25 ? 'var(--color-warning)' : 'var(--color-success)')};border-radius:6px;padding:10px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <b style="font-size:12px;text-transform:uppercase">Ryzyko Polipragmazji DDI</b>
          <span style="font-weight:800;font-size:13px;color:${polyRisk.score > 50 ? 'var(--color-error)' : (polyRisk.score > 25 ? 'var(--color-warning)' : 'var(--color-success)')}">${polyRisk.score}/100</span>
        </div>
        <div style="font-size:12px;color:var(--color-text-muted);margin-bottom:8px">${esc(polyRisk.statusText)} · ${polyRisk.alerts.length} interakcji</div>
        <button class="btn btn-sm btn-gold" id="dockLoadNoteStackBtn" style="width:100%;font-size:11.5px;padding:5px 8px">
          Załaduj ${entities.compounds.length} leków do Stacka &amp; Audytu DDI ↗
        </button>
      </div>
    ` : (entities.compounds.length === 1 ? `
      <button class="btn btn-sm btn-gold" id="dockLoadNoteStackBtn" style="width:100%;font-size:11.5px;padding:5px 8px">
        Dodaj ${esc(entities.compounds[0].n)} do Stacka
      </button>
    ` : "");

    const compoundsDockHtml = entities.compounds.length ? entities.compounds.map((c) =>{
      const hlStr = c.pk && c.pk.hl ? rng([c.pk.hl[0], c.pk.hl[1]], c.pk.hl[2]) : "brak t½";
      return `
        <div style="background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px;display:flex;flex-direction:column;gap:5px">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:4px">
            <span style="display:flex;align-items:center;gap:5px;font-weight:700;font-size:12.5px;color:var(--color-text)">
              <span class="dot" style="width:8px;height:8px;background:var(--color-cluster-${c.c})"></span>
              ${esc(c.n)}
            </span>
            <small style="font-size:11px;color:var(--color-text-muted)">t½: ${esc(hlStr)}</small>
          </div>
          ${c.m ? `<div style="font-size:11px;color:var(--color-text-muted);line-height:1.3">${esc(c.m.slice(0, 95))}${c.m.length > 95 ? "…" : ""}</div>` : ""}
          <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:2px">
            <button class="btn btn-sm" data-note-goto-comp="${c.i}" style="font-size:11px;padding:2px 6px">W grafie ↗</button>
            <button class="btn btn-sm" data-note-dossier-comp="${c.i}" style="font-size:11px;padding:2px 6px">Dossier</button>
            <button class="btn btn-sm" data-note-pksim-comp="${esc(c.id)}" style="font-size:11px;padding:2px 6px">PK C(t)</button>
          </div>
        </div>
      `;
    }).join("") : `<div style="font-size:12px;color:var(--color-text-muted)">Brak powiązanych substancji.</div>`;

    const targetsDockHtml = entities.targets.length ? `
      <div style="display:flex;flex-wrap:wrap;gap:5px">
        ${entities.targets.map((t) =>`
          <button class="btn btn-sm" data-note-goto-target="${t.idx}" style="font-size:11px;padding:3px 7px;text-align:left" title="${esc(t.n)}">
            <b>${esc(t.id)}</b> · ${esc(t.n.slice(0, 26))}${t.n.length > 26 ? "…" : ""}
          </button>
        `).join("")}
      </div>
    ` : `<div style="font-size:12px;color:var(--color-text-muted)">Brak powiązanych celów ChEMBL.</div>`;

    const icdDockHtml = entities.icd.length ? `
      <div style="display:flex;flex-wrap:wrap;gap:5px">
        ${entities.icd.map((code) =>`
          <button class="btn btn-sm" data-note-goto-icd="${esc(code)}" style="font-size:11px;padding:3px 7px">
            <code style="font-weight:700;color:var(--color-primary)">${esc(code)}</code> · Wskazania ICD ↗
          </button>
        `).join("")}
      </div>
    ` : `<div style="font-size:12px;color:var(--color-text-muted)">Brak kodów ICD-10/11.</div>`;

    dockEl.innerHTML = `
      <div>
        <div class="label" style="margin-bottom:6px">Powiązana Farmakologia</div>
        ${riskBoxHtml}
      </div>
      <div>
        <div class="label" style="margin-bottom:6px">Substancje w notatce (${entities.compounds.length})</div>
        <div style="display:flex;flex-direction:column;gap:6px">${compoundsDockHtml}</div>
      </div>
      <div>
        <div class="label" style="margin-bottom:6px">Cele molekularne ChEMBL (${entities.targets.length})</div>
        ${targetsDockHtml}
      </div>
      <div>
        <div class="label" style="margin-bottom:6px">Kody kliniczne ICD-10 (${entities.icd.length})</div>
        ${icdDockHtml}
      </div>
    `;

    // Wire Header & Dock buttons
    const loadNoteToStack = () =>{
      if (!entities.compounds.length) return;
      state.stack.clear();
      entities.compounds.forEach((c) =>state.stack.add(c.i));
      if (note.patient && Array.isArray(note.patient.diet) && state.patientDiet) {
        state.patientDiet.clear();
        note.patient.diet.forEach((d) =>state.patientDiet.add(d));
      }
      saveStack();
      updateStackUI();
      closeNotesModal();
      openDdiAuditInSplitPane();
      showToast(`Załadowano ${entities.compounds.length} leków z „${note.title.slice(0, 36)}…” do Stacka & DDI`, "success");
    };

    const hStackBtn = $("noteHeaderLoadStackBtn");
    if (hStackBtn) hStackBtn.onclick = loadNoteToStack;
    const dStackBtn = $("dockLoadNoteStackBtn");
    if (dStackBtn) dStackBtn.onclick = loadNoteToStack;

    const hPkBtn = $("noteHeaderOpenPkBtn");
    if (hPkBtn && entities.compounds.length) {
      hPkBtn.onclick = () =>{
        const primaryCid = entities.compounds[0].id;
        const compareCid = entities.compounds[1] ? entities.compounds[1].id : null;
        const egfr = (note.patient && note.patient.egfr) ? +note.patient.egfr : 90;
        closeNotesModal();
        openPkSimulatorSplitPane(primaryCid, compareCid, { egfr });
      };
    }

    const editToggleBtn = $("noteEditToggleBtn");
    if (editToggleBtn) {
      editToggleBtn.onclick = () =>{
        notesState.isEditing = !notesState.isEditing;
        notesState.editingNew = false;
        if (notesState.isEditing) populateNoteEditorForm(note);
        renderActiveNotePane(note);
      };
    }

    const exportHtmlBtn = $("noteExportHtmlFileBtn");
    if (exportHtmlBtn) exportHtmlBtn.onclick = () =>exportSingleNoteAsHtml(note);

    const copyHtmlBtn = $("noteCopyRawHtmlBtn");
    if (copyHtmlBtn) {
      copyHtmlBtn.onclick = () =>{
        const standalone = buildStandaloneNoteHtml(note);
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(standalone).then(() =>showToast("Skopiowano kod HTML z metadanymi do schowka", "success"));
        }
      };
    }

    const revertBtn = $("noteRevertCanonicalBtn");
    if (revertBtn) {
      revertBtn.onclick = () =>{
        const store = loadLocalNotesStore();
        delete store.overrides[note.id];
        saveLocalNotesStore(store);
        notesState.isEditing = false;
        renderNotesWorkspace();
        showToast("Przywrócono kanoniczną wersję notatki z repozytorium", "info");
      };
    }

    const delBtn = $("noteDeleteCustomBtn");
    if (delBtn) {
      delBtn.onclick = () =>{
        const store = loadLocalNotesStore();
        store.custom = (store.custom || []).filter((x) =>x.id !== note.id);
        saveLocalNotesStore(store);
        notesState.selectedId = null;
        notesState.isEditing = false;
        renderNotesWorkspace();
        showToast("Usunięto lokalną notatkę z przeglądarki", "info");
      };
    }

    dockEl.querySelectorAll("[data-note-goto-comp]").forEach((btn) =>{
      btn.onclick = () =>{
        closeNotesModal();
        select({ type: "compound", i: +btn.dataset.noteGotoComp }, true);
      };
    });
    dockEl.querySelectorAll("[data-note-dossier-comp]").forEach((btn) =>{
      btn.onclick = () =>{
        closeNotesModal();
        openDossierModal("single", +btn.dataset.noteDossierComp);
      };
    });
    dockEl.querySelectorAll("[data-note-pksim-comp]").forEach((btn) =>{
      btn.onclick = () =>{
        const egfr = (note.patient && note.patient.egfr) ? +note.patient.egfr : 90;
        closeNotesModal();
        openPkSimulatorSplitPane(btn.dataset.notePksimComp, null, { egfr });
      };
    });
    dockEl.querySelectorAll("[data-note-goto-target]").forEach((btn) =>{
      btn.onclick = () =>{
        closeNotesModal();
        openTargetModal(+btn.dataset.noteGotoTarget);
      };
    });
    dockEl.querySelectorAll("[data-note-goto-icd]").forEach((btn) =>{
      btn.onclick = () =>{
        closeNotesModal();
        openIndicationsModal(btn.dataset.noteGotoIcd);
      };
    });
  }

  function populateNoteEditorForm(note) {
    const tEl = $("noteEditTitle");
    const sEl = $("noteEditSubtitle");
    const cEl = $("noteEditCategory");
    const tagsEl = $("noteEditTags");
    const compsEl = $("noteEditCompounds");
    const tgsEl = $("noteEditTargets");
    const patEl = $("noteEditPatientMeta");
    const clEl = $("noteEditCluster");
    const htmlEl = $("noteEditHtmlTextarea");
    if (!tEl || !htmlEl) return;

    if (!note) {
      tEl.value = "";
      if (sEl) sEl.value = "";
      if (cEl) cEl.value = "case_study";
      if (tagsEl) tagsEl.value = "";
      if (compsEl) {
        const pre = (state.sel && state.sel.type === "compound") ? C[state.sel.i].id : ([...state.stack].map((i) =>C[i].id).join(", "));
        compsEl.value = pre || "";
      }
      if (tgsEl) tgsEl.value = "";
      if (patEl) patEl.value = "58M | eGFR: 75 | CYP2D6 NM | Polipragmazja OUN";
      if (clEl) clEl.value = "General Pharmacology";
      htmlEl.value = NOTE_HTML_TEMPLATES.case_study;
      return;
    }

    tEl.value = note.title || "";
    if (sEl) sEl.value = note.subtitle || "";
    if (cEl) cEl.value = note.category || "html_note";
    if (tagsEl) tagsEl.value = (note.tags || []).join(", ");
    if (compsEl) compsEl.value = (note.compounds || []).join(", ");
    if (tgsEl) tgsEl.value = [...(note.targets || []), ...(note.icd || [])].join(", ");
    if (patEl) {
      if (note.patient) {
        patEl.value = `${note.patient.age_sex || ""} | eGFR: ${note.patient.egfr != null ? note.patient.egfr : ""} | ${note.patient.cyp_phenotype || ""} | ${note.patient.diagnosis || ""}`;
      } else {
        patEl.value = "";
      }
    }
    if (clEl) clEl.value = note.cluster || "General Pharmacology";
    htmlEl.value = note.html || "";
  }

  function parsePatientString(raw) {
    const s = (raw || "").trim();
    if (!s) return null;
    const parts = s.split("|").map((x) =>x.trim());
    const egfrMatch = s.match(/egfr\s*:?\s*(\d+)/i);
    return {
      age_sex: parts[0] || "Pacjent",
      egfr: egfrMatch ? +egfrMatch[1] : null,
      cyp_phenotype: parts[2] || "",
      diet: [],
      diagnosis: parts[3] || parts[1] || ""
    };
  }

  function saveActiveNoteFromEditor() {
    const title = ($("noteEditTitle") && $("noteEditTitle").value.trim()) || "Nowa notatka kliniczna";
    const subtitle = ($("noteEditSubtitle") && $("noteEditSubtitle").value.trim()) || "";
    const category = ($("noteEditCategory") && $("noteEditCategory").value) || "html_note";
    const cluster = ($("noteEditCluster") && $("noteEditCluster").value) || "General Pharmacology";
    const tags = (($("noteEditTags") && $("noteEditTags").value) || "").split(",").map((x) =>x.trim()).filter(Boolean);
    const rawComps = (($("noteEditCompounds") && $("noteEditCompounds").value) || "").split(",").map((x) =>x.trim()).filter(Boolean);
    const compounds = rawComps.map((tok) =>{
      const c = resolveCompoundToken(tok);
      return c ? c.id : tok;
    });
    const rawTgs = (($("noteEditTargets") && $("noteEditTargets").value) || "").split(",").map((x) =>x.trim()).filter(Boolean);
    const targets = [];
    const icd = [];
    rawTgs.forEach((tok) =>{
      if (/^CHEMBL\d+$/i.test(tok)) targets.push(tok.toUpperCase());
      else icd.push(tok.toUpperCase());
    });
    const patient = category === "case_study" ? parsePatientString($("noteEditPatientMeta") ? $("noteEditPatientMeta").value : "") : null;
    const htmlBody = ($("noteEditHtmlTextarea") && $("noteEditHtmlTextarea").value.trim()) || "<p>Pusta notatka.</p>";
    const today = new Date().toISOString().slice(0, 10);

    const store = loadLocalNotesStore();
    if (notesState.editingNew || !notesState.selectedId) {
      const slug = "local-" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36) + "-" + Date.now().toString(36).slice(-4);
      const newNote = {
        id: slug,
        title,
        subtitle,
        category,
        provenance: "local-browser",
        updated: today,
        cluster,
        tags,
        compounds,
        targets,
        icd,
        patient,
        html: htmlBody
      };
      store.custom.unshift(newNote);
      saveLocalNotesStore(store);
      notesState.selectedId = slug;
      notesState.isEditing = false;
      notesState.editingNew = false;
      renderNotesWorkspace();
      showToast("Zapisano nową notatkę w przeglądarce (localStorage)", "success");
    } else {
      const isCanonical = CANONICAL_NOTES.some((cn) =>cn.id === notesState.selectedId);
      const updatedFields = {
        title,
        subtitle,
        category,
        updated: today,
        cluster,
        tags,
        compounds,
        targets,
        icd,
        patient,
        html: htmlBody
      };
      if (isCanonical) {
        store.overrides[notesState.selectedId] = updatedFields;
      } else {
        const idx = store.custom.findIndex((x) =>x.id === notesState.selectedId);
        if (idx >= 0) {
          store.custom[idx] = { ...store.custom[idx], ...updatedFields };
        }
      }
      saveLocalNotesStore(store);
      notesState.isEditing = false;
      notesState.editingNew = false;
      renderNotesWorkspace();
      showToast(isCanonical ? "Zapisano lokalne nadpisanie notatki kanonicznej" : "Zaktualizowano notatkę lokalną", "success");
    }
  }

  function buildStandaloneNoteHtml(note) {
    const meta = {
      id: note.id,
      title: note.title,
      subtitle: note.subtitle || "",
      category: note.category || "html_note",
      provenance: "repo-curated",
      updated: note.updated || new Date().toISOString().slice(0, 10),
      cluster: note.cluster || "General Pharmacology",
      tags: note.tags || [],
      compounds: note.compounds || [],
      targets: note.targets || [],
      icd: note.icd || [],
      patient: note.patient || null
    };
    return `<!-- pv-note-meta: ${JSON.stringify(meta, null, 2)} -->\n${note.html || ""}\n`;
  }

  function exportSingleNoteAsHtml(note) {
    if (!note) return;
    const content = buildStandaloneNoteHtml(note);
    const blob = new Blob([content], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${note.id}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast(`Pobrano ${note.id}.html (gotowy do Pharma-vault/data/curated/notes/)`, "success");
  }

  function exportAllCustomNotesJson() {
    const store = loadLocalNotesStore();
    const payload = {
      schema: "pharma-vault-notes-v1",
      exported_at: new Date().toISOString(),
      custom: store.custom || [],
      overrides: store.overrides || {}
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pharma-vault-notes-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast("Wyeksportowano archiwum notatek (.json)", "success");
  }

  function importRawNoteContent(rawText, filenameHint = "wklejona-notatka.html") {
    if (!rawText || !rawText.trim()) return;
    const trimmed = rawText.trim();

    // Check if JSON backup or single note JSON
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
      try {
        const parsed = JSON.parse(trimmed);
        const store = loadLocalNotesStore();
        if (parsed.schema === "pharma-vault-notes-v1") {
          const addedCustom = Array.isArray(parsed.custom) ? parsed.custom : [];
          addedCustom.forEach((n) =>{
            if (n && n.id) {
              store.custom = store.custom.filter((x) =>x.id !== n.id);
              store.custom.unshift(n);
            }
          });
          if (parsed.overrides && typeof parsed.overrides === "object") {
            Object.assign(store.overrides, parsed.overrides);
          }
          saveLocalNotesStore(store);
          renderNotesWorkspace();
          showToast(`Zaimportowano pakiet JSON (${addedCustom.length} notatek)`, "success");
          return;
        }
      } catch (e) {
        // Not valid JSON, continue as HTML/MD
      }
    }

    // Check for <!-- pv-note-meta: {...} -->
    const metaMatch = trimmed.match(/<!--\s*pv-note-meta:\s*(\{[\s\S]*?\})\s*-->/);
    let meta = {};
    let body = trimmed;
    if (metaMatch) {
      try { meta = JSON.parse(metaMatch[1]); } catch (e) {}
      body = trimmed.replace(metaMatch[0], "").trim();
    } else {
      const titleMatch = trimmed.match(/<title[^>]*>([^<]+)<\/title>/i) || trimmed.match(/<h[123][^>]*>([^<]+)<\/h[123]>/i) || trimmed.match(/^#\s+(.+)$/m);
      if (titleMatch) meta.title = titleMatch[1].trim();
    }

    const baseStem = filenameHint.replace(/\.(html?|md|json)$/i, "").replace(/[-_]+/g, " ");
    const id = meta.id || ("local-" + baseStem.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 32) + "-" + Date.now().toString(36).slice(-4));
    const newNote = {
      id,
      title: meta.title || baseStem || "Wklejona notatka HTML",
      subtitle: meta.subtitle || "Zaimportowano do przeglądarki (localStorage)",
      category: meta.category || "html_note",
      provenance: "local-browser",
      updated: new Date().toISOString().slice(0, 10),
      cluster: meta.cluster || "General Pharmacology",
      tags: meta.tags || ["import-html"],
      compounds: meta.compounds || [],
      targets: meta.targets || [],
      icd: meta.icd || [],
      patient: meta.patient || null,
      html: body
    };

    const store = loadLocalNotesStore();
    store.custom = (store.custom || []).filter((x) =>x.id !== id);
    store.custom.unshift(newNote);
    saveLocalNotesStore(store);
    notesState.selectedId = id;
    notesState.isEditing = false;
    notesState.editingNew = false;
    renderNotesWorkspace();
    showToast(`Dodano notatkę „${newNote.title}”`, "success");
  }

  function wireNotesEvents() {
    if (notesEventsWired) return;
    notesEventsWired = true;

    const closeBtn = $("notesModalClose");
    if (closeBtn) closeBtn.onclick = closeNotesModal;

    const modalBackdrop = $("notesModal");
    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", (e) =>{
        if (e.target === modalBackdrop) closeNotesModal();
      });
    }

    const searchInput = $("notesSearchInput");
    if (searchInput) {
      searchInput.oninput = (e) =>{
        notesState.searchQuery = e.target.value;
        renderNotesWorkspace();
      };
    }

    const catBar = $("notesCategoryBar");
    if (catBar) {
      catBar.querySelectorAll("[data-note-cat]").forEach((btn) =>{
        btn.onclick = () =>{
          notesState.categoryFilter = btn.dataset.noteCat;
          catBar.querySelectorAll("[data-note-cat]").forEach((b) =>b.classList.toggle("active", b === btn));
          renderNotesWorkspace();
        };
      });
    }

    const newBtn = $("notesNewBtn");
    if (newBtn) {
      newBtn.onclick = () =>{
        notesState.isEditing = true;
        notesState.editingNew = true;
        populateNoteEditorForm(null);
        renderActiveNotePane(null);
      };
    }

    const tplSelect = $("notesTemplateSelect");
    if (tplSelect) {
      tplSelect.onchange = (e) =>{
        const key = e.target.value;
        if (key && NOTE_HTML_TEMPLATES[key] && $("noteEditHtmlTextarea")) {
          $("noteEditHtmlTextarea").value = NOTE_HTML_TEMPLATES[key];
          if ($("noteEditCategory")) $("noteEditCategory").value = key;
        }
        e.target.value = "";
      };
    }

    const saveBtn = $("noteSaveBtn");
    if (saveBtn) saveBtn.onclick = saveActiveNoteFromEditor;

    const cancelBtn = $("noteCancelEditBtn");
    if (cancelBtn) {
      cancelBtn.onclick = () =>{
        notesState.isEditing = false;
        notesState.editingNew = false;
        renderNotesWorkspace();
      };
    }

    const pasteBtn = $("notesPasteBtn");
    if (pasteBtn) {
      pasteBtn.onclick = async () =>{
        if (navigator.clipboard && navigator.clipboard.readText) {
          try {
            const clip = await navigator.clipboard.readText();
            if (clip && clip.trim()) {
              importRawNoteContent(clip, "schowek-html.html");
              return;
            }
          } catch (e) {}
        }
        notesState.isEditing = true;
        notesState.editingNew = true;
        populateNoteEditorForm(null);
        renderActiveNotePane(null);
        if ($("noteEditHtmlTextarea")) $("noteEditHtmlTextarea").focus();
        showToast("Wklej kod HTML/MD bezpośrednio do pola edytora i kliknij Zapisz", "info");
      };
    }

    const importBtn = $("notesImportBtn");
    const fileInput = $("notesFileInput");
    if (importBtn && fileInput) {
      importBtn.onclick = () =>fileInput.click();
      fileInput.onchange = (e) =>{
        const files = Array.from(e.target.files || []);
        files.forEach((f) =>{
          const reader = new FileReader();
          reader.onload = () =>importRawNoteContent(String(reader.result || ""), f.name);
          reader.readAsText(f);
        });
        fileInput.value = "";
      };
    }

    const exportAllBtn = $("notesExportAllJsonBtn");
    if (exportAllBtn) exportAllBtn.onclick = exportAllCustomNotesJson;

    const dropZone = $("notesDropZone");
    if (dropZone) {
      dropZone.addEventListener("dragover", (e) =>{ e.preventDefault(); });
      dropZone.addEventListener("drop", (e) =>{
        e.preventDefault();
        const files = Array.from((e.dataTransfer && e.dataTransfer.files) || []);
        files.forEach((f) =>{
          if (/\.(html?|md|json)$/i.test(f.name)) {
            const reader = new FileReader();
            reader.onload = () =>importRawNoteContent(String(reader.result || ""), f.name);
            reader.readAsText(f);
          }
        });
      });
    }
  }

  function openNotesModal(noteId, startNewForCompound = null) {
    activeNotesModalOpen = true;
    const modal = $("notesModal");
    if (!modal) return;
    openDialog(modal);
    wireNotesEvents();
    if (startNewForCompound) {
      notesState.isEditing = true;
      notesState.editingNew = true;
      populateNoteEditorForm(null);
      if ($("noteEditCompounds")) $("noteEditCompounds").value = startNewForCompound.id;
      if ($("noteEditTitle")) $("noteEditTitle").value = `Notatka kliniczna: ${startNewForCompound.n}`;
      renderNotesWorkspace();
      return;
    }
    if (noteId) {
      notesState.selectedId = noteId;
      notesState.isEditing = false;
      notesState.editingNew = false;
    }
    renderNotesWorkspace();
  }

  function closeNotesModal() {
    activeNotesModalOpen = false;
    const modal = $("notesModal");
    if (modal) closeDialog(modal);
    if (typeof syncWorkspaceModeToOpenModals === "function") syncWorkspaceModeToOpenModals();
  }


  // ---------- Clinical Risk Engine & Multi-Axis Toxic Burden Heatmap
  let activeExpandedAdr = null;

  const ADR_EVALUATORS = {
    qtc: (c) =>{
      const m = (c.m || "").toLowerCase();
      const t = (c.t || []).join("").toLowerCase();
      let s = 5;
      if (c.l && c.l.includes(HUB_CARDIO)) s += 25;
      if (m.includes("herg") || m.includes("potassium channel") || m.includes("antiarrhythmic")) s += 45;
      if (t.includes("qt") || t.includes("arytm") || t.includes("torsade")) s += 30;
      return Math.min(100, s);
    },
    respiratory: (c) =>{
      const m = (c.m || "").toLowerCase();
      const t = (c.t || []).join("").toLowerCase();
      let s = 5;
      if (c.l && c.l.includes(HUB_RESPIRATORY)) s += 35;
      if (m.includes("opioid") || m.includes("gaba-a") || m.includes("gabaa") || m.includes("sedat") || m.includes("hypnotic") || m.includes("anesthetic")) s += 40;
      if (t.includes("oddech") || t.includes("senno") || t.includes("sedac")) s += 25;
      return Math.min(100, s);
    },
    serotonin: (c) =>{
      const m = (c.m || "").toLowerCase();
      const t = (c.t || []).join("").toLowerCase();
      let s = 5;
      if (c.l && c.l.includes(HUB_SEROTONIN)) s += 35;
      if (m.includes("serotonin") || m.includes("5-ht") || m.includes("sert") || m.includes("ssri") || m.includes("snri") || m.includes("mao")) s += 40;
      if (t.includes("serotonin") || t.includes("hiperterm")) s += 25;
      return Math.min(100, s);
    },
    cyp: (c) =>{
      const cyps = (c.pk && c.pk.cyp) || [];
      if (!cyps.length) return 10;
      let s = cyps.length * 15;
      if (cyps.includes("CYP3A4")) s += 20;
      if (cyps.includes("CYP2D6")) s += 15;
      return Math.min(100, s);
    },
    anticholinergic: (c) =>{
      const m = (c.m || "").toLowerCase();
      const t = (c.t || []).join("").toLowerCase();
      let s = 5;
      if (c.l && c.l.includes(HUB_CHOLINERGIC)) s += 30;
      if (m.includes("muscarinic") || m.includes("anticholinergic") || m.includes("cholinolyt") || m.includes("atropin")) s += 45;
      if (t.includes("antycholinerg") || t.includes("sucho")) s += 25;
      return Math.min(100, s);
    },
    hypertension: (c) =>{
      const m = (c.m || "").toLowerCase();
      const t = (c.t || []).join("").toLowerCase();
      let s = 5;
      if (m.includes("norepinephrine") || m.includes("adrenergic") || m.includes("sympath") || m.includes("stimulant") || m.includes("amphetamin")) s += 45;
      if (t.includes("ciśnien") || t.includes("tachykard") || t.includes("nadciśnien")) s += 25;
      return Math.min(100, s);
    },
    seizure: (c) =>{
      const m = (c.m || "").toLowerCase();
      const t = (c.t || []).join("").toLowerCase();
      let s = 5;
      if (m.includes("proconvulsant") || (m.includes("antagonist") && m.includes("gaba"))) s += 45;
      if (t.includes("drgawk") || t.includes("padaczk")) s += 30;
      if (m.includes("bupropion") || m.includes("tramadol") || m.includes("clozapin")) s += 35;
      return Math.min(100, s);
    },
    bleeding: (c) =>{
      const m = (c.m || "").toLowerCase();
      const t = (c.t || []).join("").toLowerCase();
      let s = 5;
      if (m.includes("cyclooxygenase") || m.includes("cox") || m.includes("anticoagulant") || m.includes("platelet") || m.includes("thrombin") || m.includes("factor xa")) s += 50;
      if (m.includes("ssri") || m.includes("snri")) s += 20;
      if (t.includes("krwaw") || t.includes("wrzod") || t.includes("krzepliwo")) s += 30;
      return Math.min(100, s);
    }
  };

  const ADR_DEFINITIONS = (G.adrDefinitions || [
    { key: "qtc", name: "Arytmia & Wydłużenie QTc", icon: "", axis: "cardio", desc: "Blokada kanałów potasowych hERG i opóźnienie repolaryzacji komorowej sprzyjające tachyarytmiom komorowym (TdP)." }
  ]).map((def) =>({
    ...def,
    eval: def.eval || ADR_EVALUATORS[def.key] || (() =>0)
  }));

  function detectPharmacodynamicPhenomena(stackIndices) {
    const list = (stackIndices || []).map((i) =>C[i]).filter(Boolean);
    const phenomena = [];

    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const cA = list[i], cB = list[j];
        const mA = (cA.m || "").toLowerCase(), mB = (cB.m || "").toLowerCase();
        const tgA = cA.tg || [], tgB = cB.tg || [];
        const sharedTg = tgA.filter((ti) =>tgB.includes(ti));
        const cypsA = (cA.pk && cA.pk.cyp) || [], cypsB = (cB.pk && cB.pk.cyp) || [];
        const sharedCyps = cypsA.filter((x) =>cypsB.includes(x));

        // 1. Synergy: MAOI + Serotonergic /* taste-skill-ignore */
        if ((mA.includes("mao") && (mB.includes("ssri") || mB.includes("snri") || mB.includes("serotonin"))) ||
            (mB.includes("mao") && (mA.includes("ssri") || mA.includes("snri") || mA.includes("serotonin")))) {
          phenomena.push({
            type: "synergy", /* taste-skill-ignore */
            badge: " Synergia katastrofalna",
            color: "var(--color-error)",
            title: `${cA.n} + ${cB.n}: Blokada MAO i wychwytu 5-HT`,
            desc: "Nadaddytywne nagromadzenie serotoniny w szczelinie synaptycznej – natychmiastowe ryzyko zapaści."
          });
        }
        // Synergy: Opioid + GABA-A/BZD /* taste-skill-ignore */
        else if (((mA.includes("opioid") || (cA.l && cA.l.includes(HUB_RESPIRATORY))) && (mB.includes("gaba") || mB.includes("benzodiazepin") || mB.includes("sedat"))) ||
                 ((mB.includes("opioid") || (cB.l && cB.l.includes(HUB_RESPIRATORY))) && (mA.includes("gaba") || mA.includes("benzodiazepin") || mA.includes("sedat")))) {
          phenomena.push({
            type: "synergy", /* taste-skill-ignore */
            badge: " Synergia depresyjna",
            color: "var(--color-error)",
            title: `${cA.n} + ${cB.n}: Potencjalizacja sedacji i bezdechu`,
            desc: "Równoczesne hamowanie ośrodka oddechowego przez odmienne szlaki receptorowe (Opioid + GABA-A)."
          });
        }
        // Antagonism: Agonist + Antagonist on same target
        else if (sharedTg.length >0) {
          const tName = T[sharedTg[0]]?.n || "Wspólny receptor";
          const actA = classifyTargetAction(cA, tName);
          const actB = classifyTargetAction(cB, tName);
          if ((actA === "agonist" && actB === "antagonist") || (actA === "antagonist" && actB === "agonist")) {
            phenomena.push({
              type: "antagonism",
              badge: " Antagonizm receptorowy",
              color: "var(--color-primary)",
              title: `${cA.n} (Agonista) vs ${cB.n} (Antagonista)`,
              desc: `Konkurencja o receptor ${esc(tName)} – wzajemne osłabienie lub zniesienie pożądanego efektu terapeutycznego.`
            });
          } else {
            // Homodynamic summation
            phenomena.push({
              type: "summation",
              badge: " Sumacja addytywna",
              color: "var(--color-warning)",
              title: `${cA.n} + ${cB.n}: Wspólny cel ${esc(tName)}`,
              desc: `Leki działają addytywnie na ten sam punkt uchwytu (${esc(tName)}).`
            });
          }
        }
        // Summation: Double CYP bottleneck
        else if (sharedCyps.length >= 2) {
          phenomena.push({
            type: "summation",
            badge: " Sumacja metaboliczna",
            color: "var(--color-warning)",
            title: `${cA.n} + ${cB.n}: Wąskie gardło CYP (${sharedCyps.join(", ")})`,
            desc: "Oba związki konkurują o ten sam kompleks enzymatyczny, wydłużając okres eliminacji."
          });
        }
        // Antagonism: Stimulant + Depressant (Physiological antagonism)
        else if (((mA.includes("stimulant") || mA.includes("sympath")) && (mB.includes("sedat") || mB.includes("beta-blocker") || mB.includes("gaba"))) ||
                 ((mB.includes("stimulant") || mB.includes("sympath")) && (mA.includes("sedat") || mA.includes("beta-blocker") || mA.includes("gaba")))) {
          phenomena.push({
            type: "antagonism",
            badge: " Antagonizm fizjologiczny",
            color: "var(--color-text-muted)",
            title: `${cA.n} vs ${cB.n}: Przeciwstawny wektor autonomiczny`,
            desc: "Jednoczesna próba stymulacji i wyciszenia układu autonomicznego lub krążenia."
          });
        }
      }
    }
    return phenomena;
  }

  function calculateStackRiskMetrics(stackIndices) {
    const list = (stackIndices || []).map((i) =>C[i]).filter(Boolean);
    if (!list.length) {
      return {
        totalScore: 0,
        level: "ok",
        label: "Zestaw pusty",
        color: "var(--color-text-muted)",
        axes: { cardio: 0, hepatic: 0, cns: 0, autonomic: 0 },
        adrRows: [],
        phenomena: []
      };
    }

    // 1. Evaluate ADR Matrix
    const adrRows = ADR_DEFINITIONS.map((def) =>{
      const perCompound = list.map((c) =>def.eval(c));
      const activeDrivers = list
        .map((c, idx) =>({ name: c.n, score: perCompound[idx] }))
        .filter((d) =>d.score >= 20)
        .sort((a, b) =>b.score - a.score);

      let combined = 0;
      if (list.length === 1) {
        combined = perCompound[0];
      } else {
        const hits = perCompound.filter((s) =>s >= 20);
        const prod = perCompound.reduce((acc, s) =>acc * (1 - s / 100), 1);
        let rawComb = Math.round((1 - prod) * 100);
        if (hits.length >= 2) {
          rawComb = Math.round(rawComb * 1.25);
        }
        combined = Math.min(99, Math.max(...perCompound, rawComb));
      }

      return {
        key: def.key,
        name: def.name,
        icon: def.icon,
        axis: def.axis,
        desc: def.desc,
        perCompound,
        combined,
        drivers: activeDrivers
      };
    });

    const adrMap = Object.fromEntries(adrRows.map((r) =>[r.key, r.combined]));

    // 2. Compute 4 Organ Axes
    const cardio = Math.min(100, Math.round(0.6 * adrMap.qtc + 0.4 * adrMap.hypertension));
    const hepatic = Math.min(100, Math.round(0.7 * adrMap.cyp + 0.3 * adrMap.bleeding));
    const cns = Math.min(100, Math.round(Math.max(adrMap.respiratory, adrMap.serotonin) * 0.85 + adrMap.seizure * 0.25));
    const autonomic = Math.min(100, Math.round(0.75 * adrMap.anticholinergic + 0.25 * adrMap.hypertension));

    // 3. Compute Global Stack Risk Score
    const maxAxis = Math.max(cardio, hepatic, cns, autonomic);
    const meanAxis = (cardio + hepatic + cns + autonomic) / 4;
    const multiAxisPenalty = [cardio, hepatic, cns, autonomic].filter((v) =>v >= 40).length * 5;
    const rawScore = 0.7 * maxAxis + 0.3 * meanAxis + multiAxisPenalty;
    const totalScore = Math.min(100, Math.max(0, Math.round(rawScore)));

    let level = "ok";
    let label = "Zrównoważony / Niski";
    let color = "#2e7d32";

    if (totalScore >= 75) {
      level = "crit";
      label = " Ryzyko Krytyczne";
      color = "#c62828";
    } else if (totalScore >= 50) {
      level = "high";
      label = " Wysokie Obciążenie";
      color = "#e65100";
    } else if (totalScore >= 25) {
      level = "mod";
      label = " Umiarkowane Ryzyko";
      color = "#f57f17";
    }

    const phenomena = detectPharmacodynamicPhenomena(list.map((c) =>c.i));

    return {
      totalScore,
      level,
      label,
      color,
      axes: { cardio, hepatic, cns, autonomic },
      adrRows,
      phenomena
    };
  }

  function buildToxicityTabHtml(stackList, riskData) {
    if (!stackList.length) {
      return '<div class="alert-box alert-ok">Dodaj substancje do stacka, aby wyświetlić scoring ryzyka i heatmapę ADR.</div>';
    }

    const { totalScore, level, label, color, axes, adrRows, phenomena } = riskData;

    // 1. Gauge card
    const gaugeHtml = `
      <div class="risk-gauge-box">
        <div style="flex:1">
          <div style="font-size:13px;text-transform:uppercase;letter-spacing:.02em;color:var(--color-text-muted);font-weight:700">Kliniczny Indeks Polipragmazji</div>
          <div style="font-size:15px;font-weight:800;color:var(--color-text);margin-top:2px">Stack Risk Score: ${totalScore} / 100</div>
          <div style="font-size:13px;font-weight:700;color:${color};margin-top:2px">${esc(label)}</div>
          <div style="font-size:13px;color:var(--color-text-muted);margin-top:4px;line-height:1.4">
            ${totalScore >= 75
              ? " Wykryto zagrażające życiu kolizje wielolekowe. Wymagana pilna rewizja farmakoterapii."
              : totalScore >= 50
              ? " Istotne obciążenie narządowe i ryzyko powikłań. Zalecana ścisła kontrola parametrów."
              : totalScore >= 25
              ? " Umiarkowany poziom kolizji farmakokinetycznych lub metabolicznych."
              : "OK Niski wskaźnik obciążenia klinicznego w standardowych regułach."}
          </div>
        </div>
        <div class="risk-score-badge" style="background:${color}">
          ${totalScore}
        </div>
      </div>
    `;

    // 2. 4 Organ Axes
    const axisLabels = [
      { key: "cardio", name: "Sercowo-naczyniowa", val: axes.cardio, icon: "" },
      { key: "hepatic", name: "Wątrobowa / CYP", val: axes.hepatic, icon: "" },
      { key: "cns", name: "OUN / Mózgowa", val: axes.cns, icon: "" },
      { key: "autonomic", name: "Autonomiczna", val: axes.autonomic, icon: "" }
    ];

    const axesHtml = `
      <div class="axis-grid">
        ${axisLabels.map((ax) =>{
          const col = ax.val >= 75 ? "var(--color-error)" : ax.val >= 50 ? "#e65100" : ax.val >= 25 ? "var(--color-warning)" : "var(--color-success)";
          return `
            <div class="axis-card">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <span>${ax.icon} <b>${ax.name}</b></span>
                <b style="color:${col}">${ax.val} %</b>
              </div>
              <div class="axis-bar-wrap">
                <div class="axis-bar-fill" style="transform:scaleX(${Math.max(0, Math.min(100, ax.val)) / 100});background:${col}"></div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    // 3. Phenomena
    let phenHtml = "";
    if (phenomena.length >0) {
      phenHtml = `
        <div class="label" style="margin-top:.6rem">Zjawiska Farmakodynamiczne (${phenomena.length})</div>
        <div class="phenomena-box">
          ${phenomena.map((p) =>`
            <div class="phenomena-item">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <b>${esc(p.title)}</b>
                <span class="tag" style="color:${p.color};font-weight:700;font-size:13px">${esc(p.badge)}</span>
              </div>
              <span style="font-size:13px;color:var(--color-text-muted);line-height:1.35">${esc(p.desc)}</span>
            </div>
          `).join("")}
        </div>
      `;
    }

    // 4. ADR Heatmap Table
    const colHeaders = stackList.map((c) =>{
      const shortName = c.n.length >7 ? c.n.slice(0, 6) + "…" : c.n;
      return `<th style="text-align:center" title="${esc(c.n)}">${esc(shortName)}</th>`;
    }).join("");

    const rowsHtml = adrRows.map((row) =>{
      const isExpanded = activeExpandedAdr === row.key;
      const getCellCls = (v) =>v >= 75 ? "adr-crit" : v >= 50 ? "adr-high" : v >= 25 ? "adr-mod" : v >10 ? "adr-low" : "adr-none";
      const combCls = getCellCls(row.combined);

      const cells = row.perCompound.map((v) =>{
        const cls = getCellCls(v);
        return `<td class="adr-cell ${cls}" title="${v}%">${v}%</td>`;
      }).join("");

      return `
        <tr>
          <td class="adr-row-title" data-adr-toggle="${row.key}" style="font-weight:600;font-size:13px;white-space:nowrap" title="Kliknij, aby poznać mechanizm">
            ${row.icon} ${esc(row.name)} ${isExpanded ? '▴' : '▾'}
          </td>
          ${cells}
          <td class="adr-cell ${combCls}" style="border-left:2px solid var(--color-border);font-weight:800" title="Wypadkowe ryzyko: ${row.combined}%">
            ${row.combined}%
          </td>
        </tr>
        ${isExpanded ? `
          <tr>
            <td colspan="${stackList.length + 2}" style="background:var(--color-surface-2);padding:8px;border-radius:4px;font-size:13px;color:var(--color-text-muted);line-height:1.4">
              <b style="color:var(--color-text)">Mechanizm ADR:</b>${esc(row.desc)}<br>
              <b style="color:var(--color-text)">Dominujące źródła:</b>${row.drivers.length ? row.drivers.map((d) =>`<b>${esc(d.name)}</b>(${d.score}%)`).join(", ") : "Brak wyraźnego pojedynczego drivera."}
            </td>
          </tr>
        `: ""}
      `;
    }).join("");

    const heatmapHtml = `
      <div class="label" style="margin-top:.6rem">Heatmapa Działań Niepożądanych (ADRs)</div>
      <div class="adr-heatmap-wrap">
        <table class="adr-table">
          <thead>
            <tr>
              <th style="min-width:130px">Powikłanie (ADR)</th>
              ${colHeaders}
              <th style="text-align:center;border-left:2px solid var(--color-border)">Wypadkowa</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
      <div style="font-size:13px;color:var(--color-text-muted);display:flex;gap:6px;justify-content:center;margin-top:4px">
        <span>&lt;10%</span>
        <span>10-24%</span>
        <span>25-49%</span>
        <span>50-74%</span>
        <span>75-100%</span>
      </div>
    `;

    return `
      ${gaugeHtml}
      ${axesHtml}
      ${phenHtml}
      ${heatmapHtml}
    `;
  }

  function updateStackUI() {
    const countBadge = $("stackCountBadge");
    if (countBadge) countBadge.textContent = state.stack.size;
    const pill = $("stackStatusPill");
    const body = $("stackBody");
    if (!body) return;

    if (state.stack.size === 0) {
      if (pill) { pill.className = "tag"; pill.textContent = "pusty"; }
      updatePolypharmacyShieldUI();
      body.innerHTML = `
        <div style="text-align:center;padding:1.5rem 0.5rem;color:var(--color-text-muted)">
          <div style="font-size:2rem;margin-bottom:.5rem"></div>
          <b style="color:var(--color-text);display:block;margin-bottom:.4rem">Twój stack jest pusty</b>
          <p style="font-size:var(--text-xs);line-height:1.45">Dodaj substancje do zestawu klikając przycisk <b>+ Dodaj do stacka</b>na karcie dowolnego leku lub przetestuj gotowy zestaw demonstracyjny:</p>
        </div>
        <div class="label">Zestawy demonstracyjne (kliknij)</div>
        <div style="display:grid;gap:6px">
          <button class="preset-btn" data-preset="nootropic" style="text-align:left;padding:.5rem .7rem;border-radius:var(--radius-md)">
            <b>Nootropowy klasyk</b>· Kofeina + L-Teanina<br>
            <small style="color:var(--color-success)">OK Synergia pro-poznawcza, brak kolizji</small>
          </button>
          <button class="preset-btn" data-preset="serotonin" style="text-align:left;padding:.5rem .7rem;border-radius:var(--radius-md)">
            <b>Zespół serotoninowy</b>· Sertralina + Tramadol<br>
            <small style="color:var(--color-error)">Krytyczne nasilenie transmisji 5-HT</small>
          </button>
          <button class="preset-btn" data-preset="respiratory" style="text-align:left;padding:.5rem .7rem;border-radius:var(--radius-md)">
            <b>Depresja oddechowa</b>· Morfina + Diazepam<br>
            <small style="color:var(--color-error)">Opioid + modulator GABA-A</small>
          </button>
          <button class="preset-btn" data-preset="cyp" style="text-align:left;padding:.5rem .7rem;border-radius:var(--radius-md)">
            <b>Wąskie gardło CYP3A4</b>· Kwetiapina + Klarytromycyna<br>
            <small style="color:var(--color-warning)">Konkurencja metaboliczna o izoenzym</small>
          </button>
        </div>`;
      wireStackBody();
      return;
    }

    const res = analyzeStack([...state.stack]);
    if (pill) {
      if (res.maxLevel === "crit") { pill.className = "tag warn"; pill.textContent = " Ryzyko krytyczne"; }
      else if (res.maxLevel === "mod") { pill.className = "tag warn"; pill.textContent = " Umiarkowane ryzyko"; }
      else if (res.maxLevel === "info") { pill.className = "tag"; pill.textContent = "ℹ Redundancja"; }
      else { pill.className = "tag ok"; pill.textContent = "OK Brak kolizji"; }
    }

    const chips = [...state.stack].map((i) =>{
      const c = C[i];
      const struct = getChemStructure(c);
      const thumbHtml = struct
        ? `<img class="chem-thumb" src="${struct.url}" alt="${esc(c.n)}" loading="lazy" data-zoom-chem="${c.i}" title="Powiększ wzór 2D">`
        : `<span class="dot" style="background:var(--color-cluster-${c.c});width:10px;height:10px;flex-shrink:0"></span>`;
      return `
        <div class="stack-chip">
          <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
            ${thumbHtml}
            <div style="min-width:0;overflow:hidden">
              <button data-c="${c.i}" style="background:none;border:0;color:var(--color-text);font-weight:600;cursor:pointer;padding:0;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block">${esc(c.n)}</button>
              <small style="color:var(--color-text-muted);white-space:nowrap">${esc(GR[c.g].label)}</small>
            </div>
          </div>
          <button class="del" data-remove="${c.i}" title="Usuń ze stacka">×</button>
        </div>`;
    }).join("");

    let alertsHtml = "";
    if (state.stack.size < 2) {
      alertsHtml = '<p class="note" style="padding:.4rem 0">Dodaj przynajmniej drugą substancję, aby silnik przeanalizował możliwe interakcje.</p>';
    } else if (res.alerts.length === 0) {
      alertsHtml = '<div class="alert-box alert-ok"><b>OK Brak wykrytych kolizji</b>Silnik nie znalazł w bazie danych bezpośrednich konfliktów (toksyczność serotoninowa, depresja oddechowa ani wspólne szlaki CYP) dla wybranego zestawu.</div>';
    } else {
      alertsHtml = `<div style="display:grid;gap:8px">${res.alerts.map((a) =>`
        <div class="alert-box alert-${a.level}">
          <b>${esc(a.title)}</b>
          <div>${a.desc}</div>
        </div>`).join("")}</div>`;
    }

    // PK Simulator Section
    let pkSectionHtml = "";
    const stackList = [...state.stack].map((i) =>C[i]);
    const matrixSectionHtml = buildMatrixHtml(stackList);
    const riskData = calculateStackRiskMetrics([...state.stack]);
    const toxicitySectionHtml = buildToxicityTabHtml(stackList, riskData);
    const curStackTab = state.stackTab || "pk";

    if (state.stack.size >= 1) {
      const curHorizon = state.sim.horizon || "auto";
      const simCurves = {};
      const maxTh = Math.max(...stackList.map((c) =>getCompoundTh(c)));
      let horizonNum = 24;
      if (curHorizon === "24") horizonNum = 24;
      else if (curHorizon === "48") horizonNum = 48;
      else if (curHorizon === "168") horizonNum = 168;
      else horizonNum = Math.min(168, Math.max(24, Math.ceil((maxTh * 3.5) / 12) * 12));

      stackList.forEach((c) =>{
        const th = getCompoundTh(c);
        const ke = Math.LN2 / th;
        const tMax = getCompoundTmax(c, th);
        const ka = solveKa(ke, tMax);
        const interval = getCompoundInterval(c);
        simCurves[c.i] = simulateCompoundCurve(ke, ka, tMax, interval, horizonNum);
      });

      const winList = computeCollisionWindows([...state.stack], simCurves, horizonNum, res.alerts);
      const winBanners = winList.map((w) =>`
        <div class="alert-box ${w.level === 'crit' ? 'alert-crit' : 'alert-mod'}" style="padding:4px 8px;font-size:13px">
          <b>${w.level === 'crit' ? '' : ''} Szczytowe Okno Kolizji: ${w.start.toFixed(1)} h – ${w.end.toFixed(1)} h</b>
          <span>W tym przedziale stężenia obu kolidujących leków przekraczają 40% Cmax.</span>
        </div>
      `).join("");

      const rowsHtml = stackList.map((c) =>{
        const th = getCompoundTh(c);
        const ke = Math.LN2 / th;
        const curInterval = getCompoundInterval(c);
        const rac = curInterval >0 ? (1 / (1 - Math.exp(-ke * curInterval))).toFixed(2) : "1.00";
        const tss = Math.round(5 * th);
        const hasDb = !!c.hlh;
        return `
          <div class="pk-row">
            <div style="display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden">
              <span class="dot" style="background:var(--color-cluster-${c.c});width:8px;height:8px"></span>
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

      <div class="tab-bar" style="margin:0.6rem 0 0.3rem 0" role="tablist" aria-label="Widoki analizy stacka">
        <button class="tab-btn ${curStackTab === 'pk' ? 'active' : ''}" data-stack-tab="pk" role="tab" aria-selected="${curStackTab === 'pk'}">Symulator PK</button>
        <button class="tab-btn ${curStackTab === 'matrix' ? 'active' : ''}" data-stack-tab="matrix" role="tab" aria-selected="${curStackTab === 'matrix'}">Macierz (N×N)</button>
        <button class="tab-btn ${curStackTab === 'toxicity' ? 'active' : ''}" data-stack-tab="toxicity" role="tab" aria-selected="${curStackTab === 'toxicity'}">Toksyczność & ADR</button>
      </div>

      ${curStackTab === 'pk' ? pkSectionHtml : curStackTab === 'matrix' ? matrixSectionHtml : toxicitySectionHtml}

      <div class="label" style="margin-top:.6rem">Zestawy demonstracyjne</div>
      <div style="display:flex;gap:4px;flex-wrap:wrap">
        <button class="preset-btn" data-preset="nootropic">Kofeina + Teanina</button>
        <button class="preset-btn" data-preset="serotonin">Sertralina + Tramadol </button>
        <button class="preset-btn" data-preset="respiratory">Morfina + Diazepam </button>
        <button class="preset-btn" data-preset="cyp">CYP3A4 </button>
      </div>`;
    wireStackBody();
    updatePolypharmacyShieldUI();
  }

  function wireStackBody() {
    const body = $("stackBody");
    if (!body) return;
    body.querySelectorAll("[data-c]").forEach((b) =>{
      b.onclick = () =>select({ type: "compound", i: +b.dataset.c }, true);
    });
    body.querySelectorAll("[data-zoom-chem]").forEach((el) =>{
      el.onclick = () =>openChemLightBox(+el.dataset.zoomChem);
    });
    body.querySelectorAll("[data-t]").forEach((el) =>{
      el.onclick = () =>openTargetModal(+el.dataset.t);
    });
    body.querySelectorAll("[data-remove]").forEach((b) =>{
      b.onclick = () =>toggleInStack(+b.dataset.remove);
    });
    body.querySelectorAll("[data-preset]").forEach((b) =>{
      b.onclick = () =>loadPreset(b.dataset.preset);
    });
    body.querySelectorAll("[data-stack-tab]").forEach((btn) =>{
      btn.onclick = () =>{
        state.stackTab = btn.dataset.stackTab;
        updateStackUI();
      };
    });
    body.querySelectorAll("[data-matrix-pair]").forEach((td) =>{
      td.onclick = () =>{
        const parts = td.dataset.matrixPair.split("-").map(Number);
        state.selectedMatrixPair = [parts[0], parts[1]];
        updateStackUI();
      };
      td.onkeydown = (e) =>{
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          td.click();
        }
      };
    });
    body.querySelectorAll("[data-adr-toggle]").forEach((td) =>{
      td.setAttribute("role", "button");
      td.tabIndex = 0;
      td.onclick = () =>{
        const k = td.dataset.adrToggle;
        activeExpandedAdr = activeExpandedAdr === k ? null : k;
        updateStackUI();
      };
      td.onkeydown = (e) =>{
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          td.click();
        }
      };
    });
    body.querySelectorAll("[data-horizon]").forEach((b) =>{
      b.onclick = () =>{
        state.sim.horizon = b.dataset.horizon;
        updateStackUI();
      };
    });
    body.querySelectorAll("[data-interval-for]").forEach((sel) =>{
      sel.onchange = () =>{
        const idx = +sel.dataset.intervalFor;
        if (!state.sim.compounds[idx]) state.sim.compounds[idx] = {};
        state.sim.compounds[idx].interval = +sel.value;
        updateStackUI();
      };
    });
    body.querySelectorAll("[data-thalf-for]").forEach((inp) =>{
      inp.onchange = () =>{
        const idx = +inp.dataset.thalfFor;
        const val = parseFloat(inp.value);
        if (val >0) {
          if (!state.sim.compounds[idx]) state.sim.compounds[idx] = {};
          state.sim.compounds[idx].tHalf = val;
          updateStackUI();
        }
      };
    });

    const pkCv = $("pkCv");
    if (pkCv) {
      pkCv.onmousemove = (e) =>{
        const r = pkCv.getBoundingClientRect();
        const padL = 34, padR = 12;
        const pw = Math.max(10, r.width - padL - padR);
        const x = e.clientX - r.left;
        let horizon = 24;
        const stackCompounds = [...state.stack].map((i) =>C[i]);
        const maxTh = Math.max(...stackCompounds.map((c) =>getCompoundTh(c)));
        if (state.sim.horizon === "24") horizon = 24;
        else if (state.sim.horizon === "48") horizon = 48;
        else if (state.sim.horizon === "168") horizon = 168;
        else horizon = Math.min(168, Math.max(24, Math.ceil((maxTh * 3.5) / 12) * 12));

        const t = Math.max(0, Math.min(horizon, ((x - padL) / pw) * horizon));
        state.sim.hoverT = t;
        renderPKChart();
      };
      pkCv.onmouseleave = () =>{
        state.sim.hoverT = null;
        renderPKChart();
      };
    }

    renderPKChart();
  }

  function exportStackToObsidian() {
    const list = [...state.stack].map((i) =>C[i]);
    if (!list.length) return;
    const res = analyzeStack([...state.stack]);
    const names = list.map((c) =>c.n).join("+ ");

    const simCurves = {};
    const maxTh = Math.max(...list.map((c) =>getCompoundTh(c)));
    const horizon = Math.min(168, Math.max(24, Math.ceil((maxTh * 3.5) / 12) * 12));
    list.forEach((c) =>{
      const th = getCompoundTh(c);
      const ke = Math.LN2 / th;
      const tMax = getCompoundTmax(c, th);
      const ka = solveKa(ke, tMax);
      const interval = getCompoundInterval(c);
      simCurves[c.i] = simulateCompoundCurve(ke, ka, tMax, interval, horizon);
    });
    const windows = computeCollisionWindows([...state.stack], simCurves, horizon, res.alerts);

    const pkRows = list.map((c) =>{
      const th = getCompoundTh(c);
      const ke = Math.LN2 / th;
      const tMax = getCompoundTmax(c, th);
      const interval = getCompoundInterval(c);
      const rac = interval >0 ? (1 / (1 - Math.exp(-ke * interval))).toFixed(2) : "1.00";
      const tss = Math.round(5 * th);
      const schedStr = interval === 0 ? "Pojedyncza dawka (bolus)" : `co ${interval} h (${24 / interval}x/d)`;
      return `| ${c.n} | ${th.toFixed(1)} h | ${tMax.toFixed(1)} h | ${schedStr} | ${rac}× | ~${tss} h |`;
    });

    const lines = [
      `# Raport analizy stacka: ${names}`,
      "",
      `>Data wygenerowania: ${new Date().toISOString().slice(0, 10)}`,
      ">Narzędzie: Pharma-vault Stack Builder & PK Simulator (v3.7)",
      "",
      "## 1. Wybrane substancje",
      "",
      ...list.map((c) =>`- [[${c.f.split('/').pop().replace(/\.md$/, '')}|${c.n}]] (${GR[c.g].label})`),
      "",
      "## 2. Wyniki analizy interakcji farmakodynamicznych i CYP",
      "",
    ];
    if (!res.alerts.length) {
      lines.push(">[!success] Brak bezpośrednich kolizji", ">Silnik Pharma-vault nie wykrył bezpośrednich nakładań krytycznych hubów bezpieczeństwa ani konkurencji enzymatycznej CYP dla wybranego zestawu.", "");
    } else {
      res.alerts.forEach((a) =>{
        const callout = a.level === "crit" ? "danger" : a.level === "mod" ? "warning" : "info";
        lines.push(`>[!${callout}] ${a.title}`, `>${a.desc.replace(/<[^>]+>/g, '')}`, "");
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
        ">[!danger] Wykryte Okna Kolizji (Collision Windows)",
        ...windows.map((w) =>`>• **${w.start.toFixed(1)} h – ${w.end.toFixed(1)} h**: jednoczesne stężenia osoczowe $\\ge 40\\%$ dla kolidującej pary leków (${w.level === 'crit' ? 'poziom krytyczny' : 'poziom umiarkowany'}).`),
        ""
      );
    }

    if (list.length >= 2) {
      const matrixHeaders = "| Para | " + list.map((c) =>esc(c.n)).join("| ") + " |";
      const matrixSep = "| :--- | " + list.map(() =>":---:").join("| ") + " |";
      const matrixRows = list.map((cA) =>{
        const cells = list.map((cB) =>{
          const evalRes = evaluatePairwiseInteraction(cA, cB);
          return evalRes.isDiag ? "●" : evalRes.icon;
        }).join("| ");
        return `| **${esc(cA.n)}** | ${cells} |`;
      });

      const pairwiseDetails = [];
      for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
          const evalRes = evaluatePairwiseInteraction(list[i], list[j]);
          if (evalRes.level !== "clear") {
            const cyps = evalRes.sharedCyps.length ? `CYP: ${evalRes.sharedCyps.join(', ')}`: '';
            const hubs = evalRes.sharedHubs.length ? `Huby: ${evalRes.sharedHubs.join(', ')}`: '';
            const tgts = evalRes.sharedTargets.length ? `Cele: ${evalRes.sharedTargets.slice(0, 3).join(', ')}`: '';
            const desc = [cyps, hubs, tgts].filter(Boolean).join("· ");
            pairwiseDetails.push(`- ${evalRes.icon} **${list[i].n} ↔ ${list[j].n}**: ${evalRes.title}${desc ? `(${desc})`: ''}`);
          }
        }
      }

      lines.push(
        "## 4. Macierz interakcji parowych (Pairwise Matrix N×N)",
        "",
        matrixHeaders,
        matrixSep,
        ...matrixRows,
        "",
        ">Legenda:  Ryzyko krytyczne ·  Ostrzeżenie ·  Synergia / Wspólny cel ·  Brak kolizji",
        ""
      );

      if (pairwiseDetails.length) {
        lines.push(
          "### Wykryte interakcje parowe",
          "",
          ...pairwiseDetails,
          ""
        );
      }

      const riskMetrics = calculateStackRiskMetrics(list.map((c) =>c.i));
      lines.push(
        "## 5. Indeks Toksyczności & Obciążenie Narządowe",
        "",
        `**Stack Risk Score:** \`${riskMetrics.totalScore} / 100\`(${riskMetrics.label})`,
        "",
        "| Oś narządowa | Wskaźnik (%) | Znaczenie kliniczne |",
        "| :--- | :--- | :--- |",
        `|  Sercowo-naczyniowa | ${riskMetrics.axes.cardio}% | Wydłużenie QTc / tachyarytmie / nadciśnienie |`,
        `|  Wątrobowa / CYP | ${riskMetrics.axes.hepatic}% | Konkurencja o metabolizm enzymatyczny CYP / klirens |`,
        `|  OUN / Mózgowa | ${riskMetrics.axes.cns}% | Sedacja / depresja oddechowa / zespół serotoninowy |`,
        `|  Autonomiczna | ${riskMetrics.axes.autonomic}% | Obciążenie antycholinergiczne / układ współczulny |`,
        "",
        "### Wykryte zjawiska farmakodynamiczne",
        riskMetrics.phenomena.length ? riskMetrics.phenomena.map((p) =>`- **${p.badge}**: ${p.title} – ${p.desc}`).join("\n") : "*Brak nietypowych synergii i antagonizmów.*",
        "",
        "### Profil Działań Niepożądanych (ADRs)",
        "| Powikłanie | Wypadkowe ryzyko | Dominujące źródła |",
        "| :--- | :--- | :--- |",
        ...riskMetrics.adrRows.map((r) =>`| ${r.icon} ${r.name} | **${r.combined}%** | ${r.drivers.map((d) =>d.name + ' (' + d.score + '%)').join(', ') || '–'} |`),
        ""
      );
    }

    lines.push(
      "## 6. Zastrzeżenie edukacyjne",
      "",
      ">[!warning] Materiał edukacyjny",
      ">Niniejszy raport opiera się na wyekstrahowanych automatycznie danych mechanistycznych ChEMBL, substratach CYP, hubach bezpieczeństwa oraz 1-kompartmentowym modelu farmakokinetycznym. Nie uwzględnia indywidualnego dawkowania, tolerancji, zmienności genetycznej ani chorób współistniejących. Nie stanowi porady lekarskiej.",
      ""
    );
    const md = lines.join("\n");
    const uri = `obsidian://new?vault=vault&name=${encodeURIComponent("Analiza stacka - " + names.slice(0, 50))}&content=${encodeURIComponent(md)}`;
    navigator.clipboard?.writeText(md);
    window.open(uri, "_blank");
    const btn = $("stackObsidianBtn");
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = "OK Otwarto!";
      setTimeout(() =>{ btn.textContent = orig; }, 2000);
    }
  }

  function shareStackLink() {
    if (!state.stack.size) return;
    const ids = [...state.stack].map((i) =>C[i].id).join(",");
    const url = `${location.origin}${location.pathname}#stack=${ids}`;
    history.replaceState(null, "", `#stack=${ids}`);
    navigator.clipboard?.writeText(url);
    const btn = $("stackShareBtn");
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = "OK Skopiowano!";
      setTimeout(() =>{ btn.textContent = orig; }, 2000);
    }
  }

  // ---------- filters
  const HB = [-2, -1, 0, 1, 2, 3, 4]; // log10(hours) bin edges: 36 s … 10^4 h
  const binOf = (h) =>Math.max(0, Math.min(HB.length - 2, Math.floor(Math.log10(h)) - HB[0]));

  const passAdvCyp = (c) =>{
    if (!state.adv.cyp) return true;
    if (!c.pk || !c.pk.cyp) return false;
    if (state.adv.cyp === "any") return c.pk.cyp.length >0;
    if (state.adv.cyp === "other") {
      const mainCyps = ["CYP3A4", "CYP2D6", "CYP1A2", "CYP2C9", "CYP2C19", "CYP2E1"];
      return c.pk.cyp.some((x) =>!mainCyps.includes(x));
    }
    return c.pk.cyp.includes(state.adv.cyp);
  };

  const passAdvRo5 = (c) =>{
    if (!state.adv.ro5) return true;
    if (!c.pr) return false;
    const v = c.pr[3];
    if (v == null) return false;
    if (state.adv.ro5 === "0") return v === 0;
    if (state.adv.ro5 === "1") return v <= 1;
    if (state.adv.ro5 === "gt1") return v >1;
    return true;
  };

  const passAdvProp = (c) =>{
    if (!state.adv.prop) return true;
    if (!c.pr) return false;
    const mw = c.pr[0], alogp = c.pr[1];
    switch (state.adv.prop) {
      case "cns": return mw != null && alogp != null && mw <= 400 && alogp >= 1 && alogp <= 3;
      case "lead": return mw != null && alogp != null && mw <= 300 && alogp <= 3;
      case "druglike": return mw != null && mw >= 300 && mw <= 500;
      case "high_mw": return mw != null && mw >500;
      case "hydrophilic": return alogp != null && alogp < 0;
      case "lipophilic": return alogp != null && alogp >4;
      default: return true;
    }
  };

  const passAdvPhase = (c) =>{
    if (!state.adv.phase) return true;
    switch (state.adv.phase) {
      case "4": return c.ph === 4;
      case "1-3": return c.ph != null && c.ph >= 1 && c.ph <= 3;
      case "preclinical": return !c.ph || c.ph === 0;
      default: return true;
    }
  };

  function updateAdvFilterUI() {
    let count = 0;
    if (state.adv.cyp) count++;
    if (state.adv.ro5) count++;
    if (state.adv.prop) count++;
    if (state.adv.phase) count++;

    const badge = $("advFilterBadge");
    if (badge) {
      if (count >0) {
        badge.textContent = `${count}`;
        badge.style.display = "inline-block";
        badge.classList.add("warn");
      } else {
        badge.style.display = "none";
        badge.classList.remove("warn");
      }
    }
  }

  const visible = (c) =>(!state.stackOnly || state.stack.has(c.i)) && state.clusters.has(c.c) && (!state.pkOnly || c.pk) && (!state.cypOnly || (c.pk && c.pk.cyp)) && (state.hub === null || c.l.includes(state.hub))
    && (!state.ver || VER_TEST[state.ver](c)) && (state.hlBin === null || (c.hlh && binOf(c.hlh) === state.hlBin))
    && passAdvCyp(c) && passAdvRo5(c) && passAdvProp(c) && passAdvPhase(c)
    && (!state.evidenceCohort || state.evidenceCohort.has(c.i));
  const fmtInt = (n) => String(n ?? 0).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
  function stats() {
    const vis = C.filter(visible).length;
    updateEvidenceCohortIndicator();
    $("sAll").textContent = fmtInt(G.meta.substances);
    $("sVis").textContent = fmtInt(vis);
    $("sPk").textContent = fmtInt(G.meta.with_pk);
    $("sHl").textContent = fmtInt(C.filter((c) =>c.pk && c.pk.hl).length);
    $("sTg").textContent = fmtInt(G.meta.with_targets || 0);
    $("sFda").textContent = fmtInt(G.meta.pk_fda_consistent || 0);
    $("sEma").textContent = fmtInt(G.meta.pk_ema_consistent || 0);
    $("sId").textContent = fmtInt(G.meta.identity_confirmed || 0);
    histogram();
    if (state.sel && state.sel.type !== "compound") select(state.sel);
  }
  // ---------- t½ histogram (log scale, visible compounds)
  function histogram() {
    const box = $("hist"); if (!box) return;
    const prev = state.hlBin; state.hlBin = null;
    const counts = HB.slice(0, -1).map(() =>0);
    C.forEach((c) =>{ if (c.hlh && visible(c)) counts[binOf(c.hlh)]++; });
    state.hlBin = prev;
    const mx = Math.max(1, ...counts), lab = ["<0,1 h", "0,1–1 h", "1–10 h", "10–100 h", "100–1000 h", ">1000 h"];
    box.innerHTML = counts.map((n, i) =>`<button class="bar${state.hlBin === i ? " on" : ""}" data-bin="${i}" title="${lab[i]}: ${n} subst." aria-pressed="${state.hlBin === i}">
      <span style="height:${Math.round(4 + 56 * n / mx)}px"></span><b>${n}</b><small>${lab[i]}</small></button>`).join("");
    box.querySelectorAll("[data-bin]").forEach((b) =>b.onclick = () =>{ const v = +b.dataset.bin; state.hlBin = state.hlBin === v ? null : v; stats(); search(); draw(); });
  }

  // ---------- view
  function resize() {
    const r = cv.getBoundingClientRect(); dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; draw();
  }
  const fitK = () =>Math.min(W, Math.max(160, H - 54)) / (2 * (G.meta.radius + Math.max(...GR.map((g) =>g.r)) + 165));
  function fit() {
    if (!W || !H) return;
    const topInset = 54, availH = Math.max(160, H - topInset);
    state.k = fitK(); state.tx = W / 2; state.ty = topInset + availH / 2; draw();
  }
  const toScreen = (x, y) =>[x * state.k + state.tx, y * state.k + state.ty];
  const toWorld = (sx, sy) =>[(sx - state.tx) / state.k, (sy - state.ty) / state.k];
  function animateTo(x, y, k) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      state.k = clampK(k); state.tx = W / 2 - x * state.k; state.ty = H / 2 - y * state.k; draw();
      return;
    }
    const s0 = { ...state }, t0 = performance.now(), dur = 520;
    const tx1 = W / 2 - x * k, ty1 = H / 2 - y * k;
    const step = (t) =>{
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      state.k = clampK(s0.k + (k - s0.k) * e); state.tx = s0.tx + (tx1 - s0.tx) * e; state.ty = s0.ty + (ty1 - s0.ty) * e;
      draw(); if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const css = (v) =>getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  function semanticEdgeColor(type) {
    const token = {
      PRODRUG_OF: "--color-success", CONTRAINDICATION: "--color-risk-critical",
      CYP_INTERACTION: "--color-warning", TARGET_SYNERGY: "--color-accent2", TARGET_ANTAGONISM: "--color-primary"
    }[type];
    return (token && css(token)) || (TYPED_EDGE_CONFIG[type] && TYPED_EDGE_CONFIG[type].color) || css("--color-primary");
  }

  // ---------- Pathway Systems Solo Layout & MoA Vectors (v3.22.0)
  function computePathwayRadialPositions(pw) {
    if (pw._soloPositions) return pw._soloPositions;
    const targets = [...pw.targetIndices];
    const compounds = [...pw.compoundIndices].map((i) =>C[i]);
    const pos = { targets: new Map(), compounds: new Map() };

    // Targets in central ring R = 130
    const rt = 130;
    targets.forEach((ti, idx) =>{
      const angle = (2 * Math.PI * idx) / Math.max(targets.length, 1) - Math.PI / 2;
      pos.targets.set(ti, {
        x: Math.round(rt * Math.cos(angle)),
        y: Math.round(rt * Math.sin(angle)),
        angle
      });
    });

    // Classify compounds by MoA: agonist, antagonist, inhibitor
    const agonists = [];
    const antagonists = [];
    const inhibitors = [];

    compounds.forEach((c) =>{
      const text = ((c.m || "") + " " + (c.d || "")).toLowerCase();
      if (text.includes("antagonist") || text.includes("blocker") || text.includes("inhibitor of") || text.includes("antagonista")) {
        antagonists.push(c);
      } else if (text.includes("reuptake") || text.includes("transporter") || text.includes("wychwyt") || text.includes("uptake")) {
        inhibitors.push(c);
      } else {
        agonists.push(c);
      }
    });

    function layoutSector(list, startAngle, endAngle, role) {
      if (!list.length) return;
      const span = endAngle - startAngle;
      const radii = [270, 320, 370];
      list.forEach((c, idx) =>{
        const frac = list.length === 1 ? 0.5 : idx / (list.length - 1);
        const a = startAngle + span * frac;
        const r = radii[idx % radii.length];
        pos.compounds.set(c.i, {
          x: Math.round(r * Math.cos(a)),
          y: Math.round(r * Math.sin(a)),
          role
        });
      });
    }

    // 3 Sectors:
    layoutSector(agonists, -Math.PI / 3 + 0.1, Math.PI / 3 - 0.1, "agonist");
    layoutSector(antagonists, Math.PI / 3 + 0.1, Math.PI - 0.1, "antagonist");
    layoutSector(inhibitors, Math.PI + 0.1, (5 * Math.PI) / 3 - 0.1, "inhibitor");

    pw._soloPositions = pos;
    return pos;
  }

  function drawMoAVector(ctx, x1, y1, x2, y2, role) {
    ctx.save();
    let col = css("--color-success");
    if (role === "antagonist") col = css("--color-error");
    else if (role === "inhibitor") col = css("--color-accent2");

    ctx.strokeStyle = col;
    ctx.fillStyle = col;
    ctx.lineWidth = 1.8;

    if (role === "inhibitor") {
      ctx.setLineDash([4, 3]);
    }

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    ctx.setLineDash([]);

    const dx = x2 - x1, dy = y2 - y1;
    const angle = Math.atan2(dy, dx);
    const arrowLen = 8;

    if (role === "agonist") {
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - arrowLen * Math.cos(angle - Math.PI / 6), y2 - arrowLen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(x2 - arrowLen * Math.cos(angle + Math.PI / 6), y2 - arrowLen * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fill();
    } else if (role === "antagonist") {
      const perp = angle + Math.PI / 2;
      const barLen = 7;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(x2 + barLen * Math.cos(perp), y2 + barLen * Math.sin(perp));
      ctx.lineTo(x2 - barLen * Math.cos(perp), y2 - barLen * Math.sin(perp));
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x2, y2, 4, 0, 2 * Math.PI);
      ctx.fill();
    }

    ctx.restore();
  }

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

    const activePw = state.pathway && state.pathway.id ? pathwayById.get(state.pathway.id) : null;

    // Solo Pathway View: early return with deterministic radial layout
    if (activePw && state.pathway.mode === "solo") {
      const pos = computePathwayRadialPositions(activePw);

      // Draw guide circles
      const [cx0, cy0] = toScreen(0, 0);
      ctx.strokeStyle = faint + "44";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.arc(cx0, cy0, 130 * k, 0, 7); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx0, cy0, 320 * k, 0, 7); ctx.stroke();
      ctx.setLineDash([]);

      // Sector labels
      ctx.font = `700 ${Math.max(10, Math.min(14, 12 * Math.sqrt(k)))}px ${fDisp}`;
      ctx.textAlign = "center";
      const [agX, agY] = toScreen(420, 0);
      halo("AGONIŚCI / AKTYWATORY", agX, agY, css("--color-success"), bg);
      const [anX, anY] = toScreen(-240, 360);
      halo("ANTAGONIŚCI / BLOKERY", anX, anY, css("--color-error"), bg);
      const [inX, inY] = toScreen(-240, -360);
      halo("INHIBITORY WYCHWYTU", inX, inY, css("--color-accent2"), bg);

      // Draw MoA vectors from compounds to their targets
      pos.compounds.forEach((cpos, ci) =>{
        const c = C[ci];
        const [x1, y1] = toScreen(cpos.x, cpos.y);
        (c.tg || []).forEach((ti) =>{
          if (pos.targets.has(ti)) {
            const tpos = pos.targets.get(ti);
            const [x2, y2] = toScreen(tpos.x, tpos.y);
            drawMoAVector(ctx, x1, y1, x2, y2, cpos.role);
          }
        });
      });

      // Draw central target nodes
      pos.targets.forEach((tpos, ti) =>{
        const t = T[ti];
        const [tx, ty] = toScreen(tpos.x, tpos.y);
        const tr = Math.max(12, 16 * Math.sqrt(k));
        ctx.beginPath();
        ctx.arc(tx, ty, tr, 0, 7);
        ctx.fillStyle = activePw.color;
        ctx.fill();
        ctx.strokeStyle = text;
        ctx.lineWidth = (sel && sel.type === "target" && sel.i === ti) ? 3 : 1.8;
        ctx.stroke();

        ctx.font = `700 11px ${fBody}`;
        ctx.textAlign = "center";
        halo(t.n.length >20 ? t.n.slice(0, 19) + "…" : t.n, tx, ty + tr + 12, text, bg);
      });

      // Draw compound nodes
      const baseR = Math.max(2.5, Math.min(6, 4.5 * Math.sqrt(k)));
      pos.compounds.forEach((cpos, ci) =>{
        const c = C[ci];
        const [cx, cy] = toScreen(cpos.x, cpos.y);
        ctx.beginPath();
        ctx.arc(cx, cy, baseR, 0, 7);
        ctx.fillStyle = clusterColor(c.c);
        ctx.fill();
        if (sel && sel.type === "compound" && sel.i === ci) {
          ctx.strokeStyle = text;
          ctx.lineWidth = 2.5;
          ctx.stroke();
        }
        ctx.font = `600 11px ${fBody}`;
        ctx.textAlign = "left";
        halo(c.n, cx + baseR + 5, cy, text, bg);
      });

      return;
    }

    // group discs
    GR.forEach((g, gi) =>{
      const [x, y] = toScreen(g.x, g.y), on = state.clusters.has(g.c);
      ctx.beginPath(); ctx.arc(x, y, Math.max(0.5, g.r * k), 0, 7);
      ctx.fillStyle = clusterColor(g.c) + (on ? "12" : "05"); ctx.fill(); /* taste-skill-ignore */
      ctx.strokeStyle = clusterColor(g.c) + (sel && sel.type === "group" && sel.i === gi ? "cc" : on ? "40" : "15");
      ctx.lineWidth = sel && sel.type === "group" && sel.i === gi ? 2 : 1; ctx.stroke();
    });

    // core edges
    ctx.lineWidth = 1;
    G.coreEdges.forEach(([a, b]) =>{
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
        linked.forEach((c) =>{ const [x, y] = toScreen(c.x, c.y); ctx.moveTo(hx, hy); ctx.lineTo(x, y); });
        ctx.stroke();
      }
    }
    // edges of selected / hovered compound
    [sel && sel.type === "compound" ? C[sel.i] : null, state.hover].forEach((c, n) =>{
      if (!c) return;
      const [x, y] = toScreen(c.x, c.y), [gx, gy] = toScreen(GR[c.g].x, GR[c.g].y);
      ctx.strokeStyle = n === 0 ? primary : muted; ctx.lineWidth = n === 0 ? 1.6 : 1;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(gx, gy);
      c.l.forEach((li) =>{ const [cx, cy] = toScreen(CORE[li].x, CORE[li].y); ctx.moveTo(x, y); ctx.lineTo(cx, cy); });
      ctx.stroke();
    });

    // shared-target edges of the selected compound / members of a selected target
    const selC = sel && sel.type === "compound" ? C[sel.i] : null;
    if (state.rel && selC && selC.tg) {
      const [x, y] = toScreen(selC.x, selC.y), nb = neighbours(selC).slice(0, 60);
      ctx.strokeStyle = accent2; ctx.lineWidth = 1.3; ctx.setLineDash([4, 3]); ctx.beginPath();
      nb.forEach(({ i }) =>{ const o = C[i]; if (!visible(o)) return; const [ox, oy] = toScreen(o.x, o.y); ctx.moveTo(x, y); ctx.quadraticCurveTo((x + ox) / 2 + (oy - y) * 0.15, (y + oy) / 2 - (ox - x) * 0.15, ox, oy); });
      ctx.stroke(); ctx.setLineDash([]);
    }
    if (focus && focus.size < 400) {
      const pts = [...focus].map((i) =>C[i]).filter(visible);
      if (pts.length >1) {
        const cx = pts.reduce((a, c) =>a + c.x, 0) / pts.length, cy = pts.reduce((a, c) =>a + c.y, 0) / pts.length;
        const [sx, sy] = toScreen(cx, cy); ctx.strokeStyle = accent2 + "99"; ctx.lineWidth = 1; ctx.beginPath();
        pts.forEach((c) =>{ const [x, y] = toScreen(c.x, c.y); ctx.moveTo(sx, sy); ctx.lineTo(x, y); }); ctx.stroke();
        ctx.beginPath(); ctx.arc(sx, sy, 7, 0, 7); ctx.fillStyle = accent2; ctx.fill();
      }
    }

    // stack interaction curves
    if (state.stack.size >= 2) {
      const res = analyzeStack([...state.stack]);
      res.pairs.forEach(({ a, b, level }) =>{
        const ca = C[a], cb = C[b];
        if (!visible(ca) || !visible(cb)) return;
        const [x1, y1] = toScreen(ca.x, ca.y), [x2, y2] = toScreen(cb.x, cb.y);
        ctx.strokeStyle = css(level === "crit" ? "--color-risk-critical" : level === "mod" ? "--color-risk-moderate" : "--color-risk-low");
        ctx.lineWidth = level === "crit" ? 2.6 : 1.8;
        ctx.beginPath();
        const mx = (x1 + x2) / 2 + (y2 - y1) * 0.22, my = (y1 + y2) / 2 - (x2 - x1) * 0.22;
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(mx, my, x2, y2);
        ctx.stroke();
      });
    }

    // semantic pharmacological typed edges
    // 1. Stack network typed edges
    if (state.stack.size >= 2) {
      const stackArr = [...state.stack];
      for (let i = 0; i < stackArr.length; i++) {
        for (let j = i + 1; j < stackArr.length; j++) {
          const a = stackArr[i], b = stackArr[j];
          const ca = C[a], cb = C[b];
          if (!visible(ca) || !visible(cb)) continue;
          const edgesAB = getCompoundTypedEdges(ca).filter((e) =>e.other === b && state.edgeFilters.enabled.has(e.type));
          edgesAB.forEach((e) =>{
            const [x1, y1] = toScreen(ca.x, ca.y), [x2, y2] = toScreen(cb.x, cb.y);
            const isOut = e.from === a;
            drawSingleTypedEdge(ctx, e.type, isOut ? x1 : x2, isOut ? y1 : y2, isOut ? x2 : x1, isOut ? y2 : y1, true);
          });
        }
      }
    }

    // 2. Contextual typed edges for selected / hovered compound
    [selC, state.hover].forEach((c, n) =>{
      if (!c) return;
      const isSel = (n === 0);
      const edges = getCompoundTypedEdges(c).filter((e) =>state.edgeFilters.enabled.has(e.type));
      edges.forEach((e) =>{
        const otherC = C[e.other];
        if (!visible(otherC)) return;
        const [x1, y1] = toScreen(c.x, c.y);
        const [x2, y2] = toScreen(otherC.x, otherC.y);
        const isFromC = e.from === c.i;
        drawSingleTypedEdge(ctx, e.type, isFromC ? x1 : x2, isFromC ? y1 : y2, isFromC ? x2 : x1, isFromC ? y2 : y1, isSel);
      });
    });

    // 3. Global typed edges layer (when global mode is active, capped at 350)
    if (state.edgeFilters.globalMode) {
      let drawnCount = 0;
      const cap = 350;
      for (let i = 0; i < allTypedEdges.length && drawnCount < cap; i++) {
        const e = allTypedEdges[i];
        if (!state.edgeFilters.enabled.has(e.type)) continue;
        const ca = C[e.from], cb = C[e.to];
        if (!visible(ca) || !visible(cb)) continue;
        const [x1, y1] = toScreen(ca.x, ca.y);
        const [x2, y2] = toScreen(cb.x, cb.y);
        if ((x1 < -20 && x2 < -20) || (x1 >W + 20 && x2 >W + 20) || (y1 < -20 && y2 < -20) || (y1 >H + 20 && y2 >H + 20)) continue;
        drawSingleTypedEdge(ctx, e.type, x1, y1, x2, y2, false);
        drawnCount++;
      }
    }

    // compounds
    const baseR = Math.max(1.4, Math.min(5.5, 4 * Math.sqrt(k)));
    C.forEach((c) =>{
      const [x, y] = toScreen(c.x, c.y);
      if (x < -10 || y < -10 || x >W + 10 || y >H + 10) return;
      const on = visible(c), hl = hubSel !== null && hubSel !== undefined && c.l.includes(hubSel);
      let compAlpha = on ? (focus ? (focus.has(c.i) ? 1 : 0.15) : hubSel !== null && hubSel !== undefined && !hl ? 0.18 : 1) : 0.07;
      if (activePw && state.pathway.mode === "spotlight") {
        compAlpha = activePw.compoundIndices.has(c.i) ? 1.0 : 0.08;
      }
      ctx.globalAlpha = compAlpha;
      ctx.fillStyle = clusterColor(c.c);
      ctx.beginPath(); ctx.arc(x, y, c.pk ? baseR : baseR * 0.7, 0, 7); ctx.fill();
      if (c.pk && c.pk.cyp && k >0.9) { ctx.strokeStyle = warn; ctx.lineWidth = 1; ctx.stroke(); }
      if (((c.v && c.v.s === "discrepant") || (c.ve && c.ve.s === "discrepant")) && k >1.4) { ctx.strokeStyle = err; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(x, y, baseR + 2, 0, 7); ctx.stroke(); }
      if (state.stack.has(c.i)) {
        ctx.strokeStyle = css("--color-stack");
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.arc(x, y, baseR + 4.5, 0, 7);
        ctx.stroke();
      }
      if (activePw && activePw.compoundIndices.has(c.i)) {
        ctx.strokeStyle = activePw.color;
        ctx.lineWidth = 2.0;
        ctx.beginPath();
        ctx.arc(x, y, baseR + 3.5, 0, 7);
        ctx.stroke();
      }
    });
    ctx.globalAlpha = 1;

    if (activePw && state.pathway.mode === "spotlight") {
      activePw.compoundIndices.forEach((ci) =>{
        const c = C[ci];
        if (!visible(c)) return;
        const [x1, y1] = toScreen(c.x, c.y);
        const text = ((c.m || "") + " " + (c.d || "")).toLowerCase();
        const role = (text.includes("antagonist") || text.includes("blocker") || text.includes("antagonista")) ? "antagonist" : (text.includes("reuptake") || text.includes("transporter") || text.includes("wychwyt")) ? "inhibitor" : "agonist";
        (c.tg || []).forEach((ti) =>{
          if (activePw.targetIndices.has(ti)) {
            const [tx, ty] = toScreen(GR[c.g].x, GR[c.g].y);
            drawMoAVector(ctx, x1, y1, tx, ty, role);
          }
        });
      });
    }

    // compound labels (level of detail with budget culling)
    ctx.textBaseline = "middle"; ctx.textAlign = "left";
    if (k >= 2.6) {
      ctx.font = `500 ${Math.min(13, 9 + k)}px ${fBody}`; ctx.fillStyle = muted;
      let drawnLabels = 0;
      const MAX_LABELS = 120;
      for (let i = 0; i < C.length && drawnLabels < MAX_LABELS; i++) {
        const c = C[i];
        if (!visible(c)) continue;
        const [x, y] = toScreen(c.x, c.y);
        if (x < 0 || y < 0 || x >W || y >H) continue;
        const lab = c.n.length >22 ? c.n.slice(0, 21) + "…" : c.n;
        ctx.fillText(lab, x + baseR + 3, y);
        drawnLabels++;
      }
    } else if (state.stack.size >0) {
      ctx.font = `600 12px ${fBody}`;
      state.stack.forEach((i) =>{
        const sc = C[i];
        if (!visible(sc)) return;
        const [sx, sy] = toScreen(sc.x, sc.y);
        if (sx < 0 || sy < 0 || sx >W || sy >H) return;
        halo(sc.n, sx + baseR + 6, sy, css("--color-stack"), bg);
      });
    }

    if (state.stack.size >= 2) {
      drawDdiCollisionEdges(ctx, [...state.stack].map((i) =>C[i]), k);
    }

    // core + group + cluster labels with bounding-box collision culling
    ctx.textAlign = "center";
    const placedBoxes = [];
    const canPlaceBox = (x1, y1, x2, y2) =>{
      if (x1 < 16 || y1 < 16 || x2 >W - 16 || y2 >H - 16) return false;
      for (let i = 0; i < placedBoxes.length; i++) {
        const b = placedBoxes[i];
        if (x1 < b.x2 && x2 >b.x1 && y1 < b.y2 && y2 >b.y1) return false;
      }
      placedBoxes.push({ x1: x1 - 6, y1: y1 - 3, x2: x2 + 6, y2: y2 + 3 });
      return true;
    };

    // core nodes
    CORE.forEach((n, i) =>{
      const [x, y] = toScreen(n.x, n.y), r = Math.max(6, 11 * Math.sqrt(k)), active = hubSel === i;
      ctx.beginPath();
      if (n.kind === "hub") { ctx.moveTo(x, y - r); ctx.lineTo(x + r, y); ctx.lineTo(x, y + r); ctx.lineTo(x - r, y); ctx.closePath(); }
      else ctx.arc(x, y, n.kind === "concept" ? r * 0.75 : r * 0.9, 0, 7);
      ctx.fillStyle = n.kind === "hub" ? warn : n.kind === "pathway" ? primary : faint;
      ctx.fill(); if (active) { ctx.strokeStyle = text; ctx.lineWidth = 2; ctx.stroke(); }
      ctx.font = `600 ${Math.max(11, Math.min(14, 13 * Math.sqrt(k)))}px ${fBody}`;
      if (k < 0.75 && !active) {
        const lab = n.name.length >22 ? n.name.slice(0, 21) + "…" : n.name;
        const w = ctx.measureText(lab).width;
        if (canPlaceBox(x - w / 2, y + r + 2, x + w / 2, y + r + 16)) {
          halo(lab, x, y + r + 12, muted, bg);
        }
      } else {
        const words = n.name.split(""), lines = [];
        words.forEach((w) =>{ const last = lines[lines.length - 1]; if (last && (last + " " + w).length <= 18) lines[lines.length - 1] = last + " " + w; else lines.push(w); });
        const lh = Math.max(11, Math.min(15, 14 * Math.sqrt(k)));
        const maxW = Math.max(...lines.map((ln) =>ctx.measureText(ln).width));
        if (active || canPlaceBox(x - maxW / 2, y + r + 2, x + maxW / 2, y + r + 9 + lines.length * lh)) {
          lines.forEach((ln, li) =>halo(ln, x, y + r + 9 + li * lh, active ? text : muted, bg));
        }
      }
    });

    if (k >0.22) {
      GR.forEach((g) =>{
        if (!state.clusters.has(g.c) || g.r * k < 20) return;
        const [x, y] = toScreen(g.x, g.y - g.r - 12 / k);
        ctx.font = `600 ${Math.min(14, Math.max(11, 10 + k * 2))}px ${fBody}`;
        const w = ctx.measureText(g.label).width;
        if (canPlaceBox(x - w / 2, y - 8, x + w / 2, y + 8)) {
          halo(g.label, x, y, text, bg);
        }
      });
    }
    if (k < 0.2) G.clusters.forEach((cl, ci) =>{
      const ext = G.meta.radius + Math.max(...GR.filter((g) =>g.c === ci).map((g) =>g.r)) + 70;
      const [x, y] = toScreen(Math.cos(cl.angle) * ext, Math.sin(cl.angle) * ext);
      ctx.font = `700 ${Math.max(12, Math.min(22, 26 * k))}px ${fDisp}`;
      ctx.globalAlpha = state.clusters.has(ci) ? 1 : 0.35;
      const clLabel = CL_PL[cl.name] || cl.name;
      const w = ctx.measureText(clLabel).width;
      if (canPlaceBox(x - w / 2, y - 10, x + w / 2, y + 10)) {
        halo(clLabel, x, y, clusterColor(ci), bg);
      }
      ctx.globalAlpha = 1;
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

  // ---------- hit testing (spatial grid lookup O(1))
  function hit(sx, sy) {
    if (state.pathway && state.pathway.id && state.pathway.mode === "solo") {
      const pw = pathwayById.get(state.pathway.id);
      if (pw) {
        const pos = computePathwayRadialPositions(pw);
        for (const [ti, tpos] of pos.targets.entries()) {
          const [tx, ty] = toScreen(tpos.x, tpos.y);
          if (Math.hypot(tx - sx, ty - sy) < 22) return { type: "target", i: ti };
        }
        for (const [ci, cpos] of pos.compounds.entries()) {
          const [cx, cy] = toScreen(cpos.x, cpos.y);
          if (Math.hypot(cx - sx, cy - sy) < 16) return { type: "compound", i: ci };
        }
        return null;
      }
    }

    const [wx, wy] = toWorld(sx, sy), rr = Math.max(8, 7 / state.k);
    for (let i = 0; i < CORE.length; i++) {
      const [x, y] = toScreen(CORE[i].x, CORE[i].y);
      if (Math.hypot(x - sx, y - sy) < Math.max(10, 12 * Math.sqrt(state.k))) return { type: "core", i };
    }
    const centerGx = Math.floor(wx / GRID_CELL);
    const centerGy = Math.floor(wy / GRID_CELL);
    let best = null, bd = Infinity;
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const cell = spatialGrid.get(`${centerGx + dx},${centerGy + dy}`);
        if (!cell) continue;
        for (let ci = 0; ci < cell.length; ci++) {
          const c = cell[ci];
          if (!visible(c)) continue;
          const d = Math.hypot(c.x - wx, c.y - wy);
          if (d < bd) { bd = d; best = c; }
        }
      }
    }
    if (best && bd * state.k < Math.max(7, 6 * Math.sqrt(state.k)) && bd < rr * 3) return { type: "compound", i: best.i };
    for (let i = 0; i < GR.length; i++) if (Math.hypot(GR[i].x - wx, GR[i].y - wy) < GR[i].r) return { type: "group", i };
    return null;
  }

  let graphNavIndex = -1;
  function graphKeyboardNodes() {
    const pw = state.pathway && state.pathway.id ? pathwayById.get(state.pathway.id) : null;
    if (pw && state.pathway.mode === "solo") {
      return [
        ...[...pw.targetIndices].map((i) =>({ type: "target", i })),
        ...[...pw.compoundIndices].filter((i) =>visible(C[i])).map((i) =>({ type: "compound", i }))
      ];
    }
    return [
      ...CORE.map((_, i) =>({ type: "core", i })),
      ...GR.map((g, i) =>({ type: "group", i })).filter((node) =>state.clusters.has(GR[node.i].c)),
      ...C.filter(visible).map((c) =>({ type: "compound", i: c.i }))
    ];
  }
  cv.addEventListener("keydown", (e) =>{
    const nodes = graphKeyboardNodes();
    if (!nodes.length) return;
    const currentIndex = state.sel ? nodes.findIndex((node) =>node.type === state.sel.type && node.i === state.sel.i) : -1;
    if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      if (e.key === "Home") graphNavIndex = 0;
      else if (e.key === "End") graphNavIndex = nodes.length - 1;
      else {
        const navMatchesSelection = graphNavIndex >= 0 && state.sel && nodes[graphNavIndex] && nodes[graphNavIndex].type === state.sel.type && nodes[graphNavIndex].i === state.sel.i;
        const base = navMatchesSelection ? graphNavIndex : currentIndex;
        const step = (e.key === "ArrowRight" || e.key === "ArrowDown") ? 1 : -1;
        graphNavIndex = (base + step + nodes.length) % nodes.length;
      }
      select(nodes[graphNavIndex], false);
    } else if (e.key === "Enter" && state.sel) {
      e.preventDefault();
      select(state.sel, true);
    }
  });

  // ---------- pointer interaction (pan, wheel zoom, pinch)
  const ptrs = new Map(); let drag = null, moved = false, pinch0 = null;
  cv.addEventListener("pointerdown", (e) =>{
    document.querySelector(".hint").style.display = "none";
    cv.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.offsetX, e.offsetY]); moved = false;
    if (ptrs.size === 1) drag = { x: e.offsetX, y: e.offsetY, tx: state.tx, ty: state.ty };
    if (ptrs.size === 2) { drag = null; moved = true; const [a, b] = [...ptrs.values()]; pinch0 = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), k: state.k, tx: state.tx, ty: state.ty, cx: (a[0] + b[0]) / 2, cy: (a[1] + b[1]) / 2 }; }
    cv.classList.add("drag");
  });
  cv.addEventListener("pointermove", (e) =>{
    if (ptrs.has(e.pointerId)) ptrs.set(e.pointerId, [e.offsetX, e.offsetY]);
    if (ptrs.size === 2 && pinch0 && pinch0.d >0) {
      const [a, b] = [...ptrs.values()], f = Math.hypot(a[0] - b[0], a[1] - b[1]) / pinch0.d;
      zoomAt(pinch0.cx, pinch0.cy, clampK(pinch0.k * f) / state.k); moved = true; return;
    }
    if (drag) {
      const dx = e.offsetX - drag.x, dy = e.offsetY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) >3) moved = true;
      state.tx = drag.tx + dx; state.ty = drag.ty + dy; draw(); return;
    }
    const h = hit(e.offsetX, e.offsetY);
    const hc = h && h.type === "compound" ? C[h.i] : null;
    if (hc !== state.hover) { state.hover = hc; draw(); }
    if (h) {
      const label = h.type === "compound" ? `${C[h.i].n} · ${GR[C[h.i].g].label}`: h.type === "core" ? `${CORE[h.i].name} · ${KIND_PL[CORE[h.i].kind]}`: `${GR[h.i].label} · ${GR[h.i].n} subst.`;
      tip.textContent = label; tip.style.display = "block";
      tip.style.left = Math.min(e.offsetX + 14, W - tip.offsetWidth - 8) + "px"; tip.style.top = e.offsetY + 14 + "px";
      cv.style.cursor = "pointer";
    } else { tip.style.display = "none"; cv.style.cursor = ""; }
  });
  const end = (e) =>{
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
  cv.addEventListener("pointerleave", () =>{ tip.style.display = "none"; if (state.hover) { state.hover = null; draw(); } });
  const clampK = (k) =>Math.max(0.08, Math.min(12, k));
  function zoomAt(sx, sy, f) {
    const nk = clampK(state.k * f); f = nk / state.k;
    state.tx = sx - (sx - state.tx) * f; state.ty = sy - (sy - state.ty) * f; state.k = nk; draw();
  }
  cv.addEventListener("wheel", (e) =>{ e.preventDefault(); zoomAt(e.offsetX, e.offsetY, Math.exp(-e.deltaY * 0.0015)); }, { passive: false });

  // ---------- selection & detail panel
  const rng = (a, u = "") =>a ? `${a[0]}${a[1] ? "–" + a[1] : ""}${u ? " " + u : ""}`: null;
  function defaultPanelHtml() {
    const topCores = CORE.map((n, i) =>({ n, i, cnt: byCore[i] ? byCore[i].length : 0 }))
      .sort((a, b) =>b.cnt - a.cnt)
      .slice(0, 6);
    const topTargets = T.map((t, i) =>({ t, i, cnt: byTarget[i] ? byTarget[i].length : 0 }))
      .sort((a, b) =>b.cnt - a.cnt)
      .slice(0, 6);
    const ph4Count = C.filter((c) =>c.ph === 4).length;
    const ph13Count = C.filter((c) =>c.ph >= 1 && c.ph <= 3).length;
    return `
      <div class="ref-section">
        <div class="label" style="margin-top:0">Indeks kliniczny · przegląd bazy</div>
        <div class="stat-grid">
          <div class="stat" role="button" tabindex="0" data-open-evidence="phase:4" title="Filtruj leki Fazy IV w eksploratorze badań"><b>${fmtInt(ph4Count)}</b><small>Faza IV (w obrocie)</small></div>
          <div class="stat" role="button" tabindex="0" data-open-evidence="phase:3" title="Filtruj kandydatów klinicznych Faz I–III"><b>${fmtInt(ph13Count)}</b><small>Fazy I–III (kliniczne)</small></div>
          <div class="stat" role="button" tabindex="0" data-launch-tool="targets" title="Otwórz najczęstszy cel białkowy ChEMBL"><b>${fmtInt(T.length)}</b><small>Cele białkowe ChEMBL</small></div>
          <div class="stat" role="button" tabindex="0" data-launch-tool="pathway" title="Aktywuj podgląd szlaków fizjologicznych"><b>${fmtInt(PATHWAY_SYSTEMS.length)}</b><small>Szlaki fizjologiczne</small></div>
        </div>
      </div>
      <div class="ref-section">
        <div class="label">Narzędzia analityczne i symulatory</div>
        <div class="ref-list">
          <button class="ref-row" data-launch-tool="clinical-suite"><span>Kalkulatory Kliniczne (CPIC PGx · Tapering PET · Nerki/Wątroba)</span><span class="ref-count">3 silniki ↗</span></button>
          <button class="ref-row" data-launch-tool="pk"><span>Symulator PK 2-kompartmentowy C(t)</span><span class="ref-count">CYP · eGFR ↗</span></button>
          <button class="ref-row" data-launch-tool="radar"><span>Radar powinowactwa receptorowego OUN</span><span class="ref-count">Ki / pKi ↗</span></button>
          <button class="ref-row" data-launch-tool="tox"><span>Toksykologia molekularna &amp; eDISH</span><span class="ref-count">DILI · hERG ↗</span></button>
          <button class="ref-row" data-launch-tool="transporters"><span>Transportery błonowe &amp; przekrój BBB</span><span class="ref-count">P-gp · MPO ↗</span></button>
          <button class="ref-row" data-launch-tool="ddi"><span>Audyt polipragmazji DDI &amp; żywność</span><span class="ref-count">Presety ↗</span></button>
          <button class="ref-row" data-launch-tool="comparator"><span>Porównywarka leków Head-to-Head</span><span class="ref-count">Tabela ↗</span></button>
          <button class="ref-row" data-launch-tool="analogs"><span>Eksplorator analogów &amp; bioizosterów</span><span class="ref-count">Top 10 ↗</span></button>
        </div>
      </div>
      <div class="ref-section">
        <div class="label">Kluczowe huby bezpieczeństwa i CYP</div>
        <div class="ref-list">
          ${topCores.map(({ n, i, cnt }) =>`<button class="ref-row" data-core="${i}"><span>${esc(n.name)}</span><span class="ref-count">${fmtInt(cnt)} subst.</span></button>`).join("")}
        </div>
      </div>
      <div class="ref-section">
        <div class="label">Najczęstsze cele molekularne (ChEMBL)</div>
        <div class="ref-list">
          ${topTargets.map(({ t, i, cnt }) =>`<button class="ref-row" data-target="${i}"><span>${esc(t.n)}</span><span class="ref-count">${fmtInt(cnt)} lig.</span></button>`).join("")}
        </div>
      </div>
    `;
  }
  function select(h, fly) {
    state.sel = h; const p = $("panel"), noHash = location.pathname + location.search;
    if (!h) { p.innerHTML = defaultPanelHtml(); wire(p); history.replaceState(null, "", noHash); if (typeof updateBreadcrumbs === "function") updateBreadcrumbs(null); $("graphStatus").textContent = "Nie zaznaczono węzła."; draw(); return; }
    const graphStatus = $("graphStatus");
    if (graphStatus) {
      const name = h.type === "compound" ? C[h.i].n : h.type === "core" ? CORE[h.i].name : h.type === "target" ? T[h.i].n : GR[h.i].label;
      graphStatus.textContent = `${name}. Szczegóły zostały otwarte w panelu.`;
    }
    if (h.type === "compound") {
      const c = C[h.i]; p.innerHTML = compoundHtml(c); history.replaceState(null, "", "#" + c.id);
      if (fly) animateTo(c.x, c.y, Math.max(state.k, 3.2));
    } else if (h.type === "core") {
      const n = CORE[h.i], linked = byCore[h.i], vis = linked.filter(visible);
      p.innerHTML = `<div class="card-head"><div class="label" style="margin-bottom:0">${KIND_PL[n.kind]}</div><button class="card-close" id="cardClose" title="Zamknij szczegóły (Esc)" aria-label="Zamknij">×</button></div>
        <div class="title">${esc(n.name)}</div>
        <p class="muted">${linked.length.toLocaleString("pl")} powiązanych substancji (${vis.length.toLocaleString("pl")} widocznych przy obecnych filtrach).</p>
        <p class="note" style="margin:.5rem 0">Powiązania wynikają z reguł routingu w <code>generate_vault_notes.py</code>(triage grupy, regex cholinergiczny, substraty CYP) – nie są oceną ryzyka konkretnej substancji.</p>
        ${listHtml(vis)}`;
      history.replaceState(null, "", noHash);
      if (fly) animateTo(n.x, n.y, Math.max(state.k, 0.9));
    } else if (h.type === "target") {
      const t = T[h.i], m = byTarget[h.i].map((i) =>C[i]), vis = m.filter(visible);
      p.innerHTML = `<div class="card-head"><div class="label" style="margin-bottom:0">Cel molekularny (ChEMBL) · ${esc(t.ty || "")}</div><button class="card-close" id="cardClose" title="Zamknij szczegóły (Esc)" aria-label="Zamknij">×</button></div>
        <div class="title">${esc(t.n)}</div>
        <p class="muted">${m.length} substancji z katalogu działa na ten cel wg kuratorowanych mechanizmów ChEMBL (${vis.length} widocznych przy obecnych filtrach).</p>
        <div class="links" style="display:flex;gap:6px;margin:.5rem 0">
          <button class="btn btn-gold" id="targetDeepDiveBtn" style="flex:1;font-size:var(--text-xs);padding:4px 8px">Eksplorator celu (Deep-Dive)</button>
          <a href="https://www.ebi.ac.uk/chembl/target_report_card/${esc(t.id)}/" target="_blank" rel="noopener noreferrer" class="btn" style="font-size:var(--text-xs);padding:4px 8px">ChEMBL ↗</a>
        </div>
        ${listHtml(vis)}`;
      history.replaceState(null, "", "#target=" + t.id);
      if (fly && m.length) { const cx = m.reduce((a, c) =>a + c.x, 0) / m.length, cy = m.reduce((a, c) =>a + c.y, 0) / m.length; animateTo(cx * 0.3, cy * 0.3, fitK() * 1.1); }
    } else {
      const g = GR[h.i], m = byGroup[h.i], vis = m.filter(visible);
      p.innerHTML = `<div class="card-head"><div class="label" style="margin-bottom:0">Grupa · ${esc(CL_PL[G.clusters[g.c].name])}</div><button class="card-close" id="cardClose" title="Zamknij szczegóły (Esc)" aria-label="Zamknij">×</button></div>
        <div class="title">${esc(g.label)}</div>
        <p class="muted">${g.n} substancji · ${m.filter((c) =>c.pk).length} z danymi PK (${vis.length} widocznych przy obecnych filtrach)</p>${listHtml(vis)}`;
      history.replaceState(null, "", noHash);
      if (fly) animateTo(g.x, g.y, Math.max(state.k, 1.4));
    }
    wire(p); draw(); if (typeof updateBreadcrumbs === "function") updateBreadcrumbs(h);
  }
  function listHtml(list) {
    const top = list.slice().sort((a, b) =>(!!b.pk - !!a.pk) || a.n.localeCompare(b.n)).slice(0, 80);
    return `<div class="links" style="margin-top:.6rem;max-height:46vh;overflow:auto">${top.map((c) =>
      `<button data-c="${c.i}"><span class="dot" style="background:var(--color-cluster-${c.c});width:8px;height:8px;margin-right:6px"></span>${esc(c.n)}</button>`).join("")}
      ${list.length >80 ? `<span class="note">… oraz ${list.length - 80} kolejnych - zawęź filtrami lub wyszukiwarką.</span>`: ""}</div>`;
  }
  function compoundHtml(c) {
    const k = c.pk, g = GR[c.g], v = c.v, e = c.ve;
    const curTab = state.tab || "overview";

    const hasPk = !!k;
    let pkBadge = '<span class="tab-badge">–</span>';
    if (v && v.s === "consistent" && e && e.s === "consistent") pkBadge = '<span class="tab-badge" style="color:var(--color-success)">OKOK</span>';
    else if ((v && v.s === "discrepant") || (e && e.s === "discrepant")) pkBadge = (c.pka && c.pka.length) ? '<span class="tab-badge" style="color:var(--accent-gold)">≠ </span>' : '<span class="tab-badge" style="color:var(--color-warning)">≠</span>';
    else if (v && v.s === "consistent") pkBadge = '<span class="tab-badge" style="color:var(--color-success)">OK FDA</span>';
    else if (e && e.s === "consistent") pkBadge = '<span class="tab-badge" style="color:var(--color-success)">OK EMA</span>';
    else if (hasPk) pkBadge = '<span class="tab-badge">OK</span>';

    const tgCount = (c.tg || []).length;
    const tgBadge = `<span class="tab-badge">${tgCount}</span>`;

    const warnCount = (c.bb ? 1 : 0) + (c.wd ? 1 : 0) + (c.ic === "conflict" ? 1 : 0);
    const safeCount = warnCount + (c.t ? c.t.length : 0);
    let safeBadge = `<span class="tab-badge">${safeCount || "–"}</span>`;
    if (warnCount >0) safeBadge = `<span class="tab-badge" style="color:var(--color-warning)">! ${safeCount}</span>`;

    const obs = "obsidian://open?vault=vault&file=" + encodeURIComponent(c.f);

    let tabContent = "";
    if (curTab === "overview") {
      const struct = getChemStructure(c);
      let chemHtml = "";
      if (struct) {
        chemHtml = `
          <div class="chem-card">
            <div class="chem-card-preview" role="button" tabindex="0" aria-label="Powiększ wzór strukturalny 2D ${esc(c.n)}" data-zoom-chem="${c.i}" title="Kliknij, aby powiększyć wzór strukturalny 2D">
              <img src="${struct.url}" alt="Wzór 2D ${esc(c.n)}" loading="lazy" onerror="this.closest('.chem-card').style.display='none'">
            </div>
            <div class="chem-meta">
              <span><b>${esc(c.mf || (c.pr && c.pr[0] ? c.pr[0] + " g/mol" : "Struktura 2D"))}</b>${c.pr && c.pr[0] && c.mf ? `· ${c.pr[0]} g/mol`: ""}</span>
              ${c.ik ? `<button class="btn-copy" data-copy-ik="${esc(c.ik)}" title="Kopiuj InChIKey do schowka">InChIKey</button>`: `<a href="${struct.extUrl}" target="_blank" rel="noopener noreferrer" style="font-size:13px">${struct.extLabel} ↗</a>`}
            </div>
          </div>`;
      } else if (c.mt && c.mt !== "Small molecule") {
        chemHtml = `
          <div class="chem-card">
            <div class="chem-placeholder">
              <span style="font-size:1.8rem"></span>
              <b>${esc(c.mt)}</b>
              <span>Cząsteczka biologiczna bez struktury małocząsteczkowej</span>
            </div>
          </div>`;
      }

      const top3Analogs = findCompoundAnalogs(c, "hybrid", false, 3);
      const analogsTeaserHtml = top3Analogs.length ? `
        <div style="background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:var(--radius-sm);padding:6px 8px;margin-top:.4rem;font-size:13px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
            <b style="font-size:13px;text-transform:uppercase;letter-spacing:.02em;color:var(--color-text-muted)">Analogi strukturalne</b>
            <button class="btn-copy" id="overviewAllAnalogsBtn" style="font-size:13px;padding:1px 6px">Więcej (10) ↗</button>
          </div>
          <div style="display:flex;gap:4px;flex-wrap:wrap">
            ${top3Analogs.map((a) =>`<button class="tag ok" data-open-analog="${a.compound.i}" style="cursor:pointer;font-size:13px;background:none;border:1px solid var(--color-border)" title="Podobieństwo: ${a.score}%">${esc(a.compound.n)} · <b>${a.score}%</b></button>`).join("")}
          </div>
        </div>
      `: "";

      const cEdges = getCompoundTypedEdges(c);
      const typedEdgesHtml = cEdges.length ? `
        <div style="background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:var(--radius-sm);padding:8px 10px;margin-top:.5rem;font-size:13px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <b style="font-size:13px;text-transform:uppercase;letter-spacing:.02em;color:var(--color-text-muted)">Relacje semantyczne (${cEdges.length})</b>
            <button class="btn-copy" id="overviewOpenEdgesBtn" style="font-size:13px;padding:1px 6px">Filtry ↗</button>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:5px">
            ${cEdges.slice(0, 10).map((e) =>{
              const cfg = TYPED_EDGE_CONFIG[e.type];
              const o = C[e.other];
              const pfx = e.dir === "out" ? " " : e.dir === "in" ? "⬅ " : "↔ ";
              return `<button class="edge-pill" data-edge-goto="${esc(o.id)}" title="${esc(e.note || cfg.desc)}">
                <span class="edge-color-dot ${cfg.directed ? 'directed' : ''}" style="background:${semanticEdgeColor(e.type)}"></span>
                <span class="edge-pill-tag" style="background:${semanticEdgeColor(e.type)}22;color:${semanticEdgeColor(e.type)}">${esc(cfg.shortLabel)}</span>
                <span>${pfx}<b>${esc(o.n)}</b></span>
              </button>`;
            }).join("")}
          </div>
          ${cEdges.length >10 ? `<span class="note" style="display:block;margin-top:4px">…oraz ${cEdges.length - 10} kolejnych relacji.</span>`: ""}
        </div>
      `: "";

      const propBoxes = c.pr ? `
        <div class="stat-grid">
          <div class="stat-box"><small>Masa cząst. (MW)</small><b>${c.pr[0] != null ? c.pr[0] + " g/mol" : "–"}</b></div>
          <div class="stat-box"><small>Lipofilowość (ALogP)</small><b>${c.pr[1] != null ? c.pr[1] : "–"}</b></div>
          <div class="stat-box"><small>Pow. polarna (PSA)</small><b>${c.pr[2] != null ? c.pr[2] + " Å²" : "–"}</b></div>
          <div class="stat-box"><small>Reguła Lipińskiego</small><b>${c.pr[3] != null ? (c.pr[3] === 0 ? "OK 0 naruszeń" : c.pr[3] + " naruszeń") : "–"}</b></div>
        </div>`: "";

      const atcHtml = c.atc && c.atc.length ? `
        <div class="label" style="margin-top:.8rem">Klasyfikacja ATC</div>
        <div class="links">${c.atc.map(([code, desc]) =>`<span style="font-size:var(--text-xs);color:var(--color-text)"><code style="font-weight:600;color:var(--color-primary)">${esc(code)}</code>· ${esc(desc)}</span>`).join("")}</div>`: "";

      const fRules = getFoodInteractionsForCompound(c);
      const foodInteractionsTeaserHtml = fRules.length ? `
        <div style="background:var(--color-surface-2);border:1px solid var(--color-border);border-left:1px solid #ff9500;border-radius:var(--radius-sm);padding:8px 10px;margin-top:.5rem;font-size:13px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <b style="font-size:13px;text-transform:uppercase;letter-spacing:.02em;color:var(--color-warning);display:flex;align-items:center;gap:4px">
              <span></span>Interakcje z Żywnością & Ziołami (${fRules.length})
            </b>
            <button class="btn-copy" id="openFoodInteractionsDockBtn" style="font-size:13px;padding:1px 6px">Szczegóły ↗</button>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px">
            ${fRules.slice(0, 3).map((r) =>{
              const fMeta = FOOD_CATALOG[r.food_id] || {};
              const badgeCol = r.severity === 'contraindicated' ? '#ff3b30' : (r.severity === 'severe' ? '#ff9500' : '#5ac8fa');
              return `
                <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;background:var(--color-bg);padding:4px 6px;border-radius:6px">
                  <div style="display:flex;align-items:center;gap:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    <span>${"" || ''}</span>
                    <span style="font-weight:600;color:var(--color-text)">${esc(fMeta.name_pl || r.food_id)}</span>
                    <span style="color:var(--color-text-muted);font-size:13px">· ${esc(r.title_pl)}</span>
                  </div>
                  <span class="badge" style="background:${badgeCol}22;color:${badgeCol};border:1px solid ${badgeCol};font-size:13px;white-space:nowrap">
                    ${r.severity === 'contraindicated' ? 'PRZECIWWSKAZANIE' : (r.severity === 'severe' ? 'CIĘŻKA' : 'OSTROŻNOŚĆ')}
                  </span>
                </div>
              `;
            }).join('')}
            ${fRules.length >3 ? `<span class="note">… oraz ${fRules.length - 3} kolejnych interakcji z pożywieniem.</span>`: ''}
          </div>
        </div>
      `: "";

      const idHtml = (c.ids || c.ic || c.ch || c.fa || c.ik || c.cid) ? `
        <div class="label" style="margin-top:.8rem">Tożsamość i źródła</div>
        <table class="pk">
          ${c.fa ? `<tr><th>Pierwsza rejestracja</th><td>${esc(c.fa)}</td></tr>`: ""}
          ${c.mt ? `<tr><th>Typ cząsteczki</th><td>${esc(c.mt)}</td></tr>`: ""}
          ${c.ids ? `<tr><th>Identyfikacja ChEMBL</th><td>${esc(IDS_PL[c.ids] || c.ids)}${c.ic ? " · " + esc(IC_PL[c.ic] || c.ic) : ""}</td></tr>`: ""}
          ${c.ik ? `<tr><th>InChIKey</th><td><code style="font-size:13px">${esc(c.ik)}</code></td></tr>`: ""}
          ${c.cid ? `<tr><th>PubChem CID</th><td><a href="https://pubchem.ncbi.nlm.nih.gov/compound/${esc(c.cid)}" target="_blank" rel="noopener noreferrer">${esc(c.cid)} ↗</a></td></tr>`: ""}
        </table>`: "";

      const rplHtml = c.rpl && c.rpl.length ? `
        <div style="background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:var(--radius-sm);padding:8px 10px;margin-top:.5rem;font-size:13px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <b style="font-size:13px;text-transform:uppercase;letter-spacing:.02em;color:var(--color-primary)">Leki zarejestrowane w Polsce (RPL CeZ) · ${c.rpl.length}</b>
          </div>
          <div style="display:grid;gap:4px">
            ${c.rpl.map((p) =>`
              <div style="display:flex;justify-content:space-between;align-items:center;padding:4px 6px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px">
                <div>
                  <b style="color:var(--color-text)">${esc(p.trade_name)}</b>
                  <span style="color:var(--color-text-muted);font-size:13px">(${esc(p.strength || "")} ${esc(p.form || "")})</span>
                  <div style="font-size:13px;color:var(--color-text-faint)">${esc(p.mah || "")} · Pozwolenie: ${esc(p.permit_no || "")}</div>
                </div>
                ${p.chpl_url ? `<a href="${esc(p.chpl_url)}" target="_blank" rel="noopener noreferrer" class="btn" style="font-size:13px;padding:2px 6px">ChPL / Ulotka ↗</a>`: ""}
              </div>
            `).join("")}
          </div>
        </div>
      `: "";

      const psyHtml = c.psy ? `
        <div style="background:var(--color-surface-2);border:1px solid color-mix(in oklab, var(--color-warning) 30%, var(--color-border));border-left:1px solid var(--color-warning);border-radius:var(--radius-sm);padding:8px 10px;margin-top:.5rem;font-size:13px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <b style="font-size:13px;text-transform:uppercase;letter-spacing:.02em;color:var(--color-warning)">PsychonautWiki · Tier D (Harm Reduction)</b>
            <a href="${esc(c.psy.url || '#')}" target="_blank" rel="noopener noreferrer" class="btn" style="font-size:13px;padding:1px 6px">Źródło ↗</a>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:4px">
            ${c.psy.duration && c.psy.duration.onset ? `<div style="background:var(--color-surface);padding:3px 6px;border-radius:6px"><b>Początek:</b>${esc(c.psy.duration.onset)}</div>`: ""}
            ${c.psy.duration && c.psy.duration.peak ? `<div style="background:var(--color-surface);padding:3px 6px;border-radius:6px"><b>Szczyt:</b>${esc(c.psy.duration.peak)}</div>`: ""}
            ${c.psy.duration && c.psy.duration.total ? `<div style="background:var(--color-surface);padding:3px 6px;border-radius:6px"><b>Czas całkowity:</b>${esc(c.psy.duration.total)}</div>`: ""}
            ${c.psy.addiction_potential ? `<div style="background:var(--color-surface);padding:3px 6px;border-radius:6px"><b>Potencjał:</b>${esc(c.psy.addiction_potential)}</div>`: ""}
          </div>
          ${c.psy.effects && c.psy.effects.length ? `
            <div style="font-size:13px;color:var(--color-text-muted);margin-top:4px">
              <b>Zgłaszane efekty:</b>${esc(c.psy.effects.slice(0, 6).join(", "))}
            </div>
          `: ""}
          ${c.psy.tolerance ? `<div style="font-size:13px;color:var(--color-text-faint);margin-top:2px"><b>Tolerancja:</b>${esc(c.psy.tolerance)}</div>`: ""}
        </div>
      `: "";

      const indHtml = c.ind && c.ind.length ? `
        <div style="background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:var(--radius-sm);padding:8px 10px;margin-top:.5rem;font-size:13px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <b style="font-size:13px;text-transform:uppercase;letter-spacing:.02em;color:var(--color-primary)">Wskazania Terapeutyczne (ICD-10 / ICD-11) · ${c.ind.length}</b>
            <button class="btn-copy" id="overviewAllIndicationsBtn" style="font-size:13px;padding:1px 6px">Katalog ICD ↗</button>
          </div>
          <div style="display:grid;gap:4px">
            ${c.ind.map((ind) =>{
              const statusPill = ind.status === "registered" ? '<span class="tag ok" style="font-size:13px;padding:0 4px">OK ChPL</span>' : ind.status === "off-label" ? '<span class="tag" style="font-size:13px;padding:0 4px;color:var(--color-warning)">Off-label</span>' : '<span class="tag" style="font-size:13px;padding:0 4px">Badania</span>';
              return `
                <div role="button" tabindex="0" style="display:flex;justify-content:space-between;align-items:center;padding:3px 6px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;cursor:pointer" data-open-icd="${esc(ind.icd10)}">
                  <div>
                    <code style="font-weight:700;color:var(--color-primary)">[${esc(ind.icd10)}]</code>
                    <b style="color:var(--color-text);margin-left:4px">${esc(ind.icd10_name_pl)}</b>
                    <small style="color:var(--color-text-faint);margin-left:4px">(WHO: ${esc(ind.icd11 || "–")})</small>
                  </div>
                  ${statusPill}
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `: "";

      const ebmHtml = c.ebm && c.ebm.length ? `
        <div style="background:var(--color-surface-2);border:1px solid color-mix(in oklab, var(--color-primary) 30%, var(--color-border));border-left:1px solid var(--color-primary);border-radius:var(--radius-sm);padding:8px 10px;margin-top:.5rem;font-size:13px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <b style="font-size:13px;text-transform:uppercase;letter-spacing:.02em;color:var(--color-primary)">Kluczowe Badania Kliniczne & EBM · ${c.ebm.length}</b>
            <span class="tag ok" style="font-size:13px">Europe PMC / Cochrane</span>
          </div>
          <div style="display:grid;gap:6px">
            ${c.ebm.map((s, sIdx) =>{
              const tierBadge = s.cochrane ? '<span class="tag ok" style="font-size:13px;padding:0 4px">Cochrane Review</span>'
                : (s.type && s.type.includes("meta")) ? '<span class="tag ok" style="font-size:13px;padding:0 4px">Meta-Analiza</span>'
                : '<span class="tag" style="font-size:13px;padding:0 4px">RCT Faza III</span>';
              const oaBadge = s.oa && s.pdf ? `<a href="${esc(s.pdf)}" target="_blank" rel="noopener noreferrer" class="btn" style="font-size:13px;padding:1px 5px">Otwarty PDF ↗</a>`: '';
              return `
                <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:6px 8px">
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;margin-bottom:3px">
                    <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">
                      ${tierBadge}
                      <b style="font-size:13px;color:var(--color-text-muted)">${esc(s.journal)} (${esc(s.year || "–")})</b>
                    </div>
                    ${s.cits ? `<small style="font-size:13px;color:var(--color-text-faint)">⭐ ${esc(s.cits)} cytowań</small>`: ""}
                  </div>
                  <div style="font-size:13px;font-weight:600;line-height:1.35;color:var(--color-text);margin-bottom:4px">
                    ${esc(s.title)}
                  </div>
                  ${s.concl ? `<div style="font-size:13px;color:var(--color-text-muted);background:var(--color-surface-2);padding:4px 6px;border-radius:6px;margin-bottom:4px"><b>Wniosek:</b>${esc(s.concl)}</div>`: ""}
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:2px">
                    <button class="btn-copy" data-open-ebm-idx="${sIdx}" style="font-size:13px;padding:2px 6px">Czytaj streszczenie</button>
                    <div style="display:flex;gap:4px">
                      ${s.doi ? `<a href="https://doi.org/${esc(s.doi)}" target="_blank" rel="noopener noreferrer" class="btn" style="font-size:13px;padding:1px 5px">DOI ↗</a>`: ""}
                      ${s.pmid ? `<a href="https://pubmed.ncbi.nlm.nih.gov/${esc(s.pmid)}/" target="_blank" rel="noopener noreferrer" class="btn" style="font-size:13px;padding:1px 5px">PubMed ↗</a>`: ""}
                      ${oaBadge}
                    </div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `: "";

      const linkedNotes = getNotesForCompound(c);
      const clinicalNotesTeaserHtml = `
        <div style="background:var(--color-surface-2);border:1px solid var(--color-border);border-left:2px solid var(--color-primary);border-radius:var(--radius-sm);padding:8px 10px;margin-top:.5rem;font-size:13px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <b style="font-size:13px;text-transform:uppercase;letter-spacing:.02em;color:var(--color-primary)">Notatki &amp; Przypadki Kliniczne (${linkedNotes.length})</b>
            <button class="btn-copy" data-create-note-for="${c.i}" style="font-size:12px;padding:1px 6px">+ Nowa notatka</button>
          </div>
          ${linkedNotes.length ? `
            <div style="display:grid;gap:4px">
              ${linkedNotes.slice(0, 4).map((n) =>{
                const catMeta = NOTE_CATEGORY_META[n.category] || NOTE_CATEGORY_META.html_note;
                return `
                  <button type="button" data-open-clinical-note="${esc(n.id)}" style="display:flex;justify-content:space-between;align-items:center;gap:6px;padding:5px 8px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;cursor:pointer;text-align:left;width:100%">
                    <span style="font-weight:600;color:var(--color-text);font-size:12.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(n.title)}</span>
                    <span style="font-size:10px;font-weight:700;padding:1px 5px;border-radius:4px;background:${catMeta.badgeBg};color:${catMeta.badgeCol};white-space:nowrap">${esc(catMeta.label)}</span>
                  </button>
                `;
              }).join("")}
            </div>
          ` : `<div style="font-size:12px;color:var(--color-text-muted)">Brak przypisanych notatek HTML lub przypadków dla tej substancji.</div>`}
        </div>
      `;

      tabContent = `
        <div class="tab-panel">
          ${c.d ? `<p class="muted" style="line-height:1.45">${esc(c.d)}${c.d.length >= 420 ? "…" : ""}</p>`: '<p class="empty">Brak opisu podsumowującego.</p>'}
          ${chemHtml}
          ${clinicalNotesTeaserHtml}
          ${analogsTeaserHtml}
          ${typedEdgesHtml}
          ${rplHtml}
          ${psyHtml}
          ${indHtml}
          ${ebmHtml}
          ${propBoxes}
          ${atcHtml}
          ${foodInteractionsTeaserHtml}
          ${idHtml}
          <div class="label" style="margin-top:.8rem">Otwórz i zbadaj</div>
          <div class="links">
            <a href="${obs}">Notatka w Obsidianie ↗</a>
            ${c.ch ? `<a href="https://www.ebi.ac.uk/chembl/compound_report_card/${esc(c.ch)}/" target="_blank" rel="noopener noreferrer">ChEMBL ${esc(c.ch)} ↗</a>`: ""}
            ${k && k.src ? `<a href="${esc(k.src)}" target="_blank" rel="noopener noreferrer">Wikipedia drug infobox ↗</a>`: ""}
            <a href="https://www.mp.pl/pacjent/leki/szukaj.html?q=${encodeURIComponent(c.n.split(' ')[0])}" target="_blank" rel="noopener noreferrer">Medycyna Praktyczna (mp.pl) ↗</a>
            ${c.ik ? `<a href="https://www.chemspider.com/Search.aspx?q=${encodeURIComponent(c.ik)}" target="_blank" rel="noopener noreferrer">ChemSpider ↗</a>`: ""}
          </div>
          ${c.a && c.a.length ? `<p class="note" style="margin-top:.4rem">Aliasy: ${esc(c.a.join(", "))}</p>`: ""}
          <p class="note">ID: <code>${esc(c.id)}</code></p>
        </div>`;
    } else if (curTab === "pk") {
      const rows = [];
      if (k) {
        if (k.hl || k.hlt) rows.push(["Okres półtrwania (t½)", rng(k.hl && [k.hl[0], k.hl[1]], k.hl && k.hl[2]) || "–", k.hlt]);
        if (k.pb || k.pbt) rows.push(["Wiązanie z białkami", rng(k.pb, "%") || "–", k.pbt]);
        if (k.ba || k.bat) rows.push(["Biodostępność", rng(k.ba, "%") || "–", k.bat]);
        if (k.met) rows.push(["Metabolizm", `<button class="btn-copy" id="pkMetaboliteTreeBtn" style="font-size:13px;padding:1px 6px">Kaskada ↗</button>`, k.met]);
        if (k.cyp) rows.push(["Substrat CYP", k.cyp.join(", "), "rola inhibitora/induktora nieoceniana"]);
        if (k.ex !== undefined) rows.push(["Wydalanie", k.ren === true ? "głównie z moczem" : k.ren === false ? "głównie pozanerkowo" : "–", (k.fe !== undefined ? `fe (niezmieniona) ${k.fe}; `: "") + (k.ex || "")]);
      }

      const compParams = getCompoundCompartmentParams(c);
      const pkSimPreview = compParams ? `
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px;margin-bottom:10px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:13px;font-weight:700">Symulacja 2-Kompartmentowa C(t)</span>
            <span class="badge" style="font-size:13px">${compParams.is_estimated ? ' QSAR Estymator' : ' Model kliniczny'}</span>
          </div>
          <div style="text-align:center">
            ${renderPkCurveSvg(compute2CompartmentSimulation(compParams, { horizonHours: Math.min(72, Math.max(12, Math.round(compParams.t_half_beta_h * 3.5))) }), null, { isMini: true, width: 280, height: 130 })}
          </div>
          <button class="btn btn-sm btn-primary" data-open-pk-simulator="${esc(c.id)}" style="width:100%;margin-top:6px;font-size:13px">
             Otwórz Pełny Symulator PK (CYP, eGFR, Steady-State) ↗
          </button>
        </div>
      `: "";

      const vf = v && v.f ? Object.entries(v.f) : [];
      const verHtml = v ? `
        <div class="ver-card">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <b>Weryfikacja FDA (DailyMed)</b>
            <span class="tag ${v.s === 'consistent' ? 'ok' : v.s === 'discrepant' ? 'warn' : ''}">${esc(VER_PL[v.s] || v.s)}</span>
          </div>
          ${vf.length ? `<div style="margin-top:2px;color:var(--color-text-muted)">${vf.map(([f, [st, vals]]) =>
            `• ${f === "half-life" ? "t½" : "wiązanie z białkami"}: <b>${esc(VER_PL[st] || st)}</b>${vals.length ? `(etykieta: ${vals.map((x) =>(+x).toLocaleString("pl")).join(", ")}${f === "half-life" ? " h" : " %"})`: ""}`).join("<br>")}</div>`: ""}
          ${v.u ? `<div style="margin-top:4px"><a href="${esc(v.u)}" target="_blank" rel="noopener noreferrer">Otwórz etykietę DailyMed (wer. ${esc(v.et)}) ↗</a></div>`: ""}
        </div>`: '<div class="ver-card" style="opacity:.75"><b>Weryfikacja FDA (DailyMed)</b><span class="muted">Brak powiązanej etykiety FDA w bazie cross-check.</span></div>';

      const ef = e && e.f ? Object.entries(e.f) : [];
      const emaHtml = e ? `
        <div class="ver-card">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <b>ChPL / SmPC (EMA) · ${esc(e.p || "")}</b>
            <span class="tag ${e.s === 'consistent' ? 'ok' : e.s === 'discrepant' ? 'warn' : ''}">${esc(EMA_PL[e.s] || e.s)}</span>
          </div>
          ${ef.length ? `<div style="margin-top:2px;color:var(--color-text-muted)">${ef.map(([f, [st, vals]]) =>
            `• ${f === "half-life" ? "t½" : "wiązanie z białkami"}: <b>${esc(EMA_PL[st] || st)}</b>${vals.length ? `(ChPL: ${vals.map((x) =>(+x).toLocaleString("pl")).join(", ")}${f === "half-life" ? " h" : " %"})`: ""}`).join("<br>")}</div>`: ""}
          <div style="margin-top:4px">
            ${e.pl ? `<a href="${esc(e.pl)}" target="_blank" rel="noopener noreferrer">ChPL ${esc(e.p)} (PL PDF) ↗</a>· `: ""}
            <a href="${esc(e.u)}" target="_blank" rel="noopener noreferrer">SmPC ${esc(e.p)} (EN PDF) ↗</a>
          </div>
        </div>`: '<div class="ver-card" style="opacity:.75"><b>ChPL / SmPC (EMA)</b><span class="muted">Brak dokumentacji EPAR/ChPL w bazie EMA.</span></div>';

      const pkaHtml = (c.pka && c.pka.length) ? `
        <div class="ver-card" style="border-left:1px solid var(--accent-gold);margin-top:.6rem">
          <div style="display:flex;align-items:center;gap:.4rem">
            <b>Wyjaśnienie rozbieżności PK (decyzja kuratorska)</b>
          </div>
          <ul style="margin:.4rem 0 0 1.1rem;padding:0;font-size:0.85rem;color:var(--color-text-muted)">
            ${c.pka.map((a) =>`<li style="margin-bottom:.2rem"><b style="color:var(--color-text)">${esc(a.c)}</b>(${esc(a.f)}): ${esc(a.e)}</li>`).join("")}
          </ul>
        </div>`: "";

      tabContent = `
        <div class="tab-panel">
          ${pkSimPreview}
          <div class="label">Parametry PK (Wikipedia)</div>
          ${rows.length ? `
            <table class="pk">${rows.map(([a, b, t]) =>`<tr><th>${a}</th><td>${esc(b) || ""}${t ? `<span class="raw">${esc(t)}</span>`: ""}</td></tr>`).join("")}</table>
            ${k.src ? `<p class="note" style="margin-top:.4rem">Źródło infoboksu: <a href="${esc(k.src)}" target="_blank" rel="noopener noreferrer">Wikipedia – ${esc(k.title)} ↗</a></p>`: ""}`
            : '<p class="empty">Brak wyodrębnionych parametrów PK w infoboksie Wikipedii dla tej substancji.</p>'}
          <div class="label" style="margin-top:.8rem">Oficjalne etykiety rejestracyjne</div>
          ${verHtml}
          ${emaHtml}
          ${pkaHtml}
        </div>`;
    } else if (curTab === "targets") {
      const nb = neighbours(c).slice(0, 16);
      const aff = RECEPTOR_AFFINITIES[c.id];
      const radarPreviewHtml = aff ? `
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px;margin-bottom:10px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:13px;font-weight:700">Profil OUN & Kinetyka Ki</span>
            <span class="badge" style="font-size:13px">${aff.kinetic_class === 'fast-off' ? ' Fast-Off' : (aff.kinetic_class === 'slow-off' ? ' Slow-Off' : ' ' + (aff.kinetic_class || 'Profil OUN'))}</span>
          </div>
          <div style="text-align:center">
            ${renderReceptorRadarSvg(aff, null, 240, 200)}
          </div>
          <button class="btn btn-sm btn-primary" data-open-receptor-radar="${esc(c.id)}" style="width:100%;margin-top:6px;font-size:13px">
             Otwórz Pełny Radar Receptorowy & Porównaj ↗
          </button>
        </div>
      `: (c.tg && c.tg.length ? `
        <div style="margin-bottom:8px">
          <button class="btn btn-sm" data-open-receptor-radar="${esc(c.id)}" style="width:100%;font-size:13px">
             Eksploruj Radary Receptorowe OUN ↗
          </button>
        </div>
      `: "");

      const targetsList = (c.tg && c.tg.length) ? `
        <div class="label">Cele molekularne (${c.tg.length})</div>
        <div class="links">${c.tg.map((t) =>{
          return `<div style="display:flex;gap:4px;align-items:center;width:100%">
            <button data-t="${t}" style="flex:1;text-align:left">◎ <b>${esc(T[t].n)}</b><small style="color:var(--color-text-muted)">(${esc(T[t].ty || "target")} · ${byTarget[t].length} subst.)</small></button>
            <button class="btn-copy" data-open-3d="${t}" title="Otwórz strukturę 3D i architekturę kieszeni wiążącej" style="font-size:13px;padding:3px 6px">3D</button>
          </div>`;
        }).join("")}</div>`
        : '<p class="empty">Brak celów molekularnych przypisanych w kuratorowanym profilu ChEMBL.</p>';

      const neighboursList = nb.length ? `
        <div class="label" style="margin-top:.8rem">Wspólne cele molekularne (${neighbours(c).length} substancji)</div>
        <div class="links">${nb.map(({ i, n }) =>
          `<button data-c="${i}"><span class="dot" style="background:var(--color-cluster-${C[i].c});width:8px;height:8px;margin-right:6px"></span>${esc(C[i].n)}${n >1 ? `<small style="color:var(--color-text-muted)">×${n} celów</small>`: ""}</button>`).join("")}</div>`
        : '<p class="note" style="margin-top:.6rem">Brak innych substancji w katalogu o nakładających się celach.</p>';

      tabContent = `
        <div class="tab-panel">
          ${c.m ? `<div class="mechanism-note"><b style="font-size:var(--text-xs);color:var(--color-text-muted);display:block;margin-bottom:2px">MECHANIZM DZIAŁANIA (ChEMBL)</b><span style="font-size:var(--text-sm)">${esc(c.m)}</span></div>`: ""}
          ${radarPreviewHtml}
          ${targetsList}
          ${neighboursList}
        </div>`;
    } else if (curTab === "safety") {
      const warnBoxes = [];
      if (c.bb) warnBoxes.push('<div class="warnbox" style="margin-bottom:.5rem"><b>Czarna ramka (Black Box Warning):</b>Oficjalne ostrzeżenie najwyższego stopnia w etykiecie leku dotyczące ciężkich działań niepożądanych lub zgonu.</div>');
      if (c.wd) warnBoxes.push('<div class="warnbox" style="margin-bottom:.5rem"><b>Wycofany z obrotu:</b>Lek lub substancja wycofana z rynku z przyczyn toksyczności, braku skuteczności lub zagrożenia zdrowia.</div>');
      if (c.ic === "conflict") warnBoxes.push('<div class="warnbox" style="margin-bottom:.5rem"><b>Rozbieżność identyfikacji:</b>Niezgodność chemiczna (InChIKey) między bazami – wymaga manualnej weryfikacji tożsamości.</div>');

      const tagsHtml = (c.t && c.t.length) ? `
        <div class="label" style="margin-top:${warnBoxes.length ? '.8rem' : '0'}">Profile ryzyka i tagi</div>
        <div class="tags">${c.t.map((t) =>`<span class="tag warn">${esc(t)}</span>`).join("")}</div>`
        : '<p class="note">Brak flag ryzyka farmakologicznego.</p>';

      const hubsHtml = (c.l && c.l.length) ? `
        <div class="label" style="margin-top:.8rem">Powiązane huby bezpieczeństwa i szlaki</div>
        <div class="links">${c.l.map((li) =>`<button data-core="${li}">${KIND_PL[CORE[li].kind]}: <b>${esc(CORE[li].name)}</b></button>`).join("")}</div>`: "";

      const cypHtml = (k && k.cyp && k.cyp.length) ? `
        <div class="label" style="margin-top:.8rem">Interakcje enzymatyczne CYP</div>
        <div class="ver-card">
          <div>Substrat izoenzymów: <b>${esc(k.cyp.join(", "))}</b></div>
          <span style="color:var(--color-text-muted)">Stosowanie w połączeniu z inhibitorami lub induktorami tego izoenzymu może drastycznie zmieniać stężenie leku we krwi.</span>
        </div>`: "";

      const toxProfile = getCompoundToxicologyProfile(c);
      const toxPreviewHtml = toxProfile ? `
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:10px;margin-bottom:10px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:13px;font-weight:700">Toksykologia Molekularna & Bezpieczeństwo</span>
            <span class="badge" style="font-size:13px;background:var(--color-surface-2);color:${toxProfile.dili.dilirank === 'Most-DILI-concern' ? 'var(--color-error)' : (toxProfile.dili.dilirank === 'Less-DILI-concern' ? 'var(--color-warning)' : 'var(--color-success)')};border:1px solid var(--color-border)">
              DILI: ${esc(toxProfile.dili.dilirank)}
            </span>
          </div>

          <div style="text-align:center;margin:6px 0">
            ${renderEdishChartSvg(toxProfile, 1.0, true, 280, 130)}
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:6px 0;font-size:13px">
            <div style="background:var(--color-bg);padding:4px 6px;border-radius:6px;border:1px solid var(--color-border)">
              <div style="color:var(--color-text-muted)">hERG Redfern:</div>
              <b>${toxProfile.cardiotox.redfern_margin}×</b>(${esc(toxProfile.cardiotox.redfern_class.split(' ')[0])})
            </div>
            <div style="background:var(--color-bg);padding:4px 6px;border-radius:6px;border:1px solid var(--color-border)">
              <div style="color:var(--color-text-muted)">Ciąża & RID:</div>
              <b>Kat. ${esc(toxProfile.pregnancy_lactation.fda_category)}</b>(RID ${toxProfile.pregnancy_lactation.rid_pct}%)
            </div>
          </div>

          ${toxProfile.pregnancy_lactation.black_box_teratogen ? `
            <div style="background:#ff3b3022;border:1px solid #ff3b30;border-radius:6px;padding:4px 6px;margin-bottom:6px;font-size:13px;color:var(--color-error);font-weight:700">
               Bezwzględny Teratogen (Kategoria X)
            </div>
          `: ""}

          <button class="btn btn-sm btn-primary" data-open-toxicology="${esc(c.id)}" style="width:100%;margin-top:4px;font-size:13px">
             Otwórz Pełny Panel Toksykologii & eDISH (Hy's Law) ↗
          </button>
        </div>
      `: "";

      const transProf = getCompoundTransporterProfile(c);
      const transCardHtml = transProf ? `
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:10px;margin-bottom:10px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:13px;font-weight:700">Transportery Błonowe & BBB</span>
            <span class="badge" style="font-size:13px;background:var(--color-surface-2);color:var(--color-primary);border:1px solid var(--color-border)">
              Clark logBB: ${transProf.cns_metrics.logbb_clark}
            </span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:6px 0;font-size:13px">
            <div style="background:var(--color-bg);padding:4px 6px;border-radius:6px;border:1px solid var(--color-border)">
              <div style="color:var(--color-text-muted)">Pfizer CNS MPO:</div>
              <b>${transProf.cns_metrics.cns_mpo_score} / 6.0</b>
            </div>
            <div style="background:var(--color-bg);padding:4px 6px;border-radius:6px;border:1px solid var(--color-border)">
              <div style="color:var(--color-text-muted)">Wolna frakcja Kp,uu:</div>
              <b>${transProf.cns_metrics.kp_uu_baseline}</b>(${(transProf.cns_metrics.kp_uu_baseline * 100).toFixed(0)}%)
            </div>
          </div>
          <button class="btn btn-sm btn-primary" data-open-transporters="${esc(c.id)}" style="width:100%;margin-top:4px;font-size:13px">
             Otwórz Przekrój BBB & Efluks P-gp ↗
          </button>
        </div>
      `: "";

      const evidencePathHtml = `
        <div class="label" style="margin-top:.8rem">Ścieżka Rejestracyjna & Poziom Dowodów</div>
        <div class="ver-card">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <b>Status: ${c.ph ? `Faza kliniczna ${c.ph}`: 'Odkrywcza / Prekliniczna'}</b>
            <button class="btn-copy" id="safetyEvidenceBtn" style="font-size:13px;padding:2px 7px">Eksplorator ↗</button>
          </div>
          <div style="margin-top:4px;font-size:13px;color:var(--color-text-muted)">
            ${c.fa ? `• Pierwsza rejestracja: <b>${esc(c.fa)} r.</b><br>`: ''}
            • Etykieta FDA (DailyMed): <b>${v ? (VER_PL[v.s] || v.s) : 'Brak w cross-check'}</b><br>
            • Dokumentacja EMA (SmPC): <b>${e ? (EMA_PL[e.s] || e.s) : 'Brak w bazie EMA'}</b>
            ${c.bb ? '<br>• <b style="color:var(--color-error)">Czarna ramka (Black Box Warning)</b>' : ''}
            ${c.wd ? '<br>• <b style="color:var(--color-error)">Wycofany z obrotu (Withdrawn)</b>' : ''}
          </div>
        </div>`;

      tabContent = `
        <div class="tab-panel">
          ${warnBoxes.join("")}
          ${toxPreviewHtml}
          ${transCardHtml}
          ${evidencePathHtml}
          ${tagsHtml}
          ${cypHtml}
          ${hubsHtml}
        </div>`;
    }

    const inStack = state.stack.has(c.i);
    const stackBtnHtml = `
      <div style="display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:4px;margin:0.5rem 0">
        <button id="cardStackToggle" class="btn ${inStack ? 'btn-gold' : ''}" style="grid-column:1 / -1;padding:6px 8px;font-size:var(--text-xs);display:flex;align-items:center;justify-content:center;gap:4px">
          <span>${inStack ? "OK W Twoim stacku" : "+ Dodaj do stacka"}</span>
        </button>
        <button id="cardCompareBtn" class="btn" style="padding:5px 6px;font-size:var(--text-xs)" title="Porównaj ze stackiem lub najbliższym analogiem">
          Porównaj
        </button>
        <button id="cardAnalogsBtn" class="btn" style="padding:5px 6px;font-size:var(--text-xs)" title="Znajdź analogi chemiczne i bioizostery">
          Analogi
        </button>
        <button id="cardMetaboliteBtn" class="btn" style="padding:5px 6px;font-size:var(--text-xs)" title="Kaskada biotransformacji i metabolity (M)">
          Metabolity
        </button>
        <button id="cardDossierBtn" class="btn" style="padding:5px 6px;font-size:var(--text-xs)" title="Kliniczna monografia substancji (A4 / PDF / Markdown)">
          Monografia
        </button>
        <button id="cardEvidenceBtn" class="btn" style="padding:5px 6px;font-size:var(--text-xs)" title="Poziom dowodów klinicznych & ścieżka regulacyjna (R)">
          Dowody
        </button>
        <button class="btn" data-open-chemspace="${esc(c.id)}" style="padding:5px 6px;font-size:var(--text-xs)" title="Otwórz w Przestrzeni Chemicznej & Chemogenomice (9)">
          ChemSpace
        </button>
        <button class="btn btn-gold" data-open-clinical-suite="${esc(c.id)}" style="grid-column:1 / -1;padding:5px 8px;font-size:var(--text-xs)" title="Otwórz Kalkulatory Kliniczne dla tej substancji: CPIC PGx & Fenokonwersja, Konwersja dawek & Tapering PET, Nerki/Wątroba/Dializa (Skrót: K)">
          Kalkulatory Kliniczne (CPIC PGx · Tapering PET · Nerki/Wątroba) ↗
        </button>
      </div>`;

    return `
      <div class="card-head">
        <div class="label" style="margin-bottom:0">${esc(CL_PL[G.clusters[c.c].name])} · ${esc(g.label)}</div>
        <button class="card-close" id="cardClose" title="Zamknij szczegóły (Esc)" aria-label="Zamknij szczegóły">×</button>
      </div>
      <div class="title">${esc(c.n)}</div>
      <div class="tags">
        ${(c.t || []).map((t) =>`<span class="tag warn">${esc(t)}</span>`).join("")}
        ${c.ph ? `<button class="tag" data-open-evidence="phase:${c.ph}" title="Zobacz w eksploratorze badań klinicznych" style="cursor:pointer;background:none">ChEMBL faza ${c.ph}</button>`: ""}
        ${k ? '<span class="tag">PK auto</span>' : ""}
        ${v && v.s === "consistent" ? `<button class="tag ok" data-open-evidence="fda:consistent" title="Zobacz spójne z FDA w eksploratorze" style="cursor:pointer;background:none">PK OK FDA</button>`: ""}
        ${v && v.s === "discrepant" ? `<button class="tag warn" data-open-evidence="fda:discrepant" title="Zobacz rozbieżne z FDA w eksploratorze" style="cursor:pointer;background:none">PK ≠ FDA</button>`: ""}
        ${e && e.s === "consistent" ? `<button class="tag ok" data-open-evidence="ema:consistent" title="Zobacz spójne z ChPL w eksploratorze" style="cursor:pointer;background:none">PK OK ChPL</button>`: ""}
        ${e && e.s === "discrepant" ? `<button class="tag warn" data-open-evidence="ema:discrepant" title="Zobacz rozbieżne z ChPL w eksploratorze" style="cursor:pointer;background:none">PK ≠ ChPL</button>`: ""}
        ${c.ic === "conflict" ? '<span class="tag warn">tożsamość?</span>' : ""}
      </div>
      ${stackBtnHtml}
      <div class="tab-bar" role="tablist" aria-label="Sekcje karty substancji">
        <button class="tab-btn ${curTab === 'overview' ? 'active' : ''}" data-tab="overview" role="tab" aria-selected="${curTab === 'overview'}">Przegląd</button>
        <button class="tab-btn ${curTab === 'pk' ? 'active' : ''} ${!hasPk ? 'dim' : ''}" data-tab="pk" role="tab" aria-selected="${curTab === 'pk'}">PK & Etykiety ${pkBadge}</button>
        <button class="tab-btn ${curTab === 'targets' ? 'active' : ''} ${!tgCount ? 'dim' : ''}" data-tab="targets" role="tab" aria-selected="${curTab === 'targets'}">Cele & MoA ${tgBadge}</button>
        <button class="tab-btn ${curTab === 'safety' ? 'active' : ''} ${!safeCount ? 'dim' : ''}" data-tab="safety" role="tab" aria-selected="${curTab === 'safety'}">Ryzyka & Toks ${safeBadge}</button>
      </div>
      ${tabContent}`;
  }
  function wire(p) {
    p.querySelectorAll("[data-c]").forEach((b) =>b.onclick = () =>select({ type: "compound", i: +b.dataset.c }, true));
    p.querySelectorAll("[data-core]").forEach((b) =>b.onclick = () =>select({ type: "core", i: +b.dataset.core }, true));
    p.querySelectorAll("[data-target]").forEach((b) =>b.onclick = () =>select({ type: "target", i: +b.dataset.target }, true));
    p.querySelectorAll("[data-t]").forEach((b) =>b.onclick = () =>openTargetModal(+b.dataset.t));
    const targetDeepDive = p.querySelector("#targetDeepDiveBtn");
    if (targetDeepDive && state.sel && state.sel.type === "target") {
      targetDeepDive.onclick = () =>openTargetModal(state.sel.i);
    }
    p.querySelectorAll("[data-tab]").forEach((b) =>b.onclick = () =>{
      state.tab = b.dataset.tab;
      if (state.sel && state.sel.type === "compound") {
        p.innerHTML = compoundHtml(C[state.sel.i]);
        wire(p);
      }
    });
    const stackToggle = p.querySelector("#cardStackToggle");
    if (stackToggle && state.sel && state.sel.type === "compound") {
      stackToggle.onclick = () =>toggleInStack(state.sel.i);
    }
    const compBtn = p.querySelector("#cardCompareBtn");
    if (compBtn && state.sel && state.sel.type === "compound") {
      compBtn.onclick = () =>{
        const stackList = [...state.stack];
        if (stackList.length && !stackList.includes(state.sel.i)) {
          openComparator([state.sel.i, ...stackList]);
        } else if (stackList.length >= 2) {
          openComparator(stackList);
        } else {
          openComparator([state.sel.i]);
        }
      };
    }
    const cardDossierBtn = p.querySelector("#cardDossierBtn");
    if (cardDossierBtn && state.sel && state.sel.type === "compound") {
      cardDossierBtn.onclick = () =>openDossierModal("single", state.sel.i);
    }
    const cardEvidenceBtn = p.querySelector("#cardEvidenceBtn");
    if (cardEvidenceBtn && state.sel && state.sel.type === "compound") {
      cardEvidenceBtn.onclick = () =>{
        const comp = C[state.sel.i];
        openEvidenceModal(comp.ph ? `phase:${comp.ph}`: 'phase:0');
      };
    }
    const safetyEvidenceBtn = p.querySelector("#safetyEvidenceBtn");
    if (safetyEvidenceBtn && state.sel && state.sel.type === "compound") {
      safetyEvidenceBtn.onclick = () =>{
        const comp = C[state.sel.i];
        openEvidenceModal(comp.ph ? `phase:${comp.ph}`: 'phase:0');
      };
    }
    p.querySelectorAll("[data-open-evidence]").forEach((btn) =>{
      btn.onclick = () =>{
        openEvidenceModal(btn.dataset.openEvidence);
      };
    });
    p.querySelectorAll("[data-open-3d]").forEach((btn) =>{
      btn.onclick = () =>{
        openStruct3DModal(+btn.dataset.open3d, state.sel ? state.sel.i : null);
      };
    });
    p.querySelectorAll("[data-open-receptor-radar]").forEach((btn) =>{
      btn.onclick = () =>{
        openReceptorRadarSplitPane(btn.dataset.openReceptorRadar);
      };
    });
    p.querySelectorAll("[data-open-pk-simulator]").forEach((btn) =>{
      btn.onclick = () =>{
        openPkSimulatorSplitPane(btn.dataset.openPkSimulator);
      };
    });
    p.querySelectorAll("[data-open-toxicology]").forEach((btn) =>{
      btn.onclick = () =>{
        openToxicologySplitPane(btn.dataset.openToxicology);
      };
    });
    p.querySelectorAll("[data-open-transporters]").forEach((btn) =>{
      btn.onclick = () =>{
        openTransporterDock(btn.dataset.openTransporters);
      };
    });
    p.querySelectorAll("[data-open-chemspace]").forEach((btn) =>{
      btn.onclick = () =>{
        openChemspaceView(btn.dataset.openChemspace);
      };
    });
    p.querySelectorAll("[data-open-clinical-suite]").forEach((btn) =>{
      btn.onclick = () =>{
        setWorkspaceMode("clinical-suite", false);
        openClinicalSuiteModal(null, btn.dataset.openClinicalSuite);
      };
    });
    p.querySelectorAll("[data-open-clinical-note]").forEach((btn) =>{
      btn.onclick = () =>{
        setWorkspaceMode("notes", false);
        location.hash = `#/notes/${btn.dataset.openClinicalNote}`;
        openNotesModal(btn.dataset.openClinicalNote);
      };
    });
    p.querySelectorAll("[data-create-note-for]").forEach((btn) =>{
      btn.onclick = () =>{
        const comp = C[+btn.dataset.createNoteFor];
        setWorkspaceMode("notes", false);
        openNotesModal(null, comp);
      };
    });
    p.querySelectorAll("[data-launch-tool]").forEach((btn) =>{
      btn.onclick = () =>{
        const tool = btn.dataset.launchTool;
        const cid = (state.sel && state.sel.type === "compound") ? C[state.sel.i].id : (state.stack.size >0 ? C[[...state.stack][0]].id : null);
        if (tool === "clinical-suite") {
          setWorkspaceMode("clinical-suite", false);
          openClinicalSuiteModal("pgx", cid || "codeine-compound");
        }
        else if (tool === "pk") openPkSimulatorSplitPane(cid || "modafinil-compound");
        else if (tool === "radar") openReceptorRadarSplitPane(cid || "clozapine-compound");
        else if (tool === "tox") openToxicologySplitPane(cid || "valproic-acid-compound");
        else if (tool === "transporters") openTransporterDock(cid || "loperamide-compound");
        else if (tool === "ddi") openDdiAuditInSplitPane();
        else if (tool === "comparator") openComparator();
        else if (tool === "analogs") openAnalogsModal((state.sel && state.sel.type === "compound") ? state.sel.i : 0);
        else if (tool === "targets") openTargetModal(0);
        else if (tool === "pathway" && PATHWAY_SYSTEMS.length) selectPathway(PATHWAY_SYSTEMS[0].id, "spotlight");
      };
    });
    const cardAnalogsBtn = p.querySelector("#cardAnalogsBtn");
    if (cardAnalogsBtn && state.sel && state.sel.type === "compound") {
      cardAnalogsBtn.onclick = () =>openAnalogsModal(state.sel.i);
    }
    const cardMetaboliteBtn = p.querySelector("#cardMetaboliteBtn");
    if (cardMetaboliteBtn && state.sel && state.sel.type === "compound") {
      cardMetaboliteBtn.onclick = () =>openMetaboliteModal(state.sel.i);
    }
    const pkMetaboliteTreeBtn = p.querySelector("#pkMetaboliteTreeBtn");
    if (pkMetaboliteTreeBtn && state.sel && state.sel.type === "compound") {
      pkMetaboliteTreeBtn.onclick = () =>openMetaboliteModal(state.sel.i);
    }
    const overviewAllAnalogsBtn = p.querySelector("#overviewAllAnalogsBtn");
    if (overviewAllAnalogsBtn && state.sel && state.sel.type === "compound") {
      overviewAllAnalogsBtn.onclick = () =>openAnalogsModal(state.sel.i);
    }
    const openFoodInteractionsDockBtn = p.querySelector("#openFoodInteractionsDockBtn");
    if (openFoodInteractionsDockBtn && state.sel && state.sel.type === "compound") {
      openFoodInteractionsDockBtn.onclick = () =>openFoodInteractionsSplitPane(C[state.sel.i]);
    }
    const overviewAllIndicationsBtn = p.querySelector("#overviewAllIndicationsBtn");
    if (overviewAllIndicationsBtn) {
      overviewAllIndicationsBtn.onclick = () =>openIndicationsModal();
    }
    p.querySelectorAll("[data-open-icd]").forEach((btn) =>{
      btn.onclick = () =>{
        openIndicationsModal(btn.dataset.openIcd);
      };
    });
    p.querySelectorAll("[data-open-ebm-idx]").forEach((btn) =>{
      btn.onclick = () =>{
        if (!state.sel || state.sel.type !== "compound") return;
        const comp = C[state.sel.i];
        const study = (comp.ebm || [])[+btn.dataset.openEbmIdx];
        if (!study) return;
        const abstractHtml = `
          <div style="display:grid;gap:10px">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px">
              <span class="tag ok">${esc(study.tier || "Badanie kliniczne")}</span>
              <span class="muted">${esc(study.journal)} (${esc(study.year || "–")}) ${study.cits ? `· ⭐ ${study.cits} cytowań`: ""}</span>
            </div>
            <h3 style="margin:0;font-size:var(--text-base);line-height:1.4;color:var(--color-text)">${esc(study.title)}</h3>
            ${study.concl ? `
              <div style="background:var(--color-surface-2);border-left:1px solid var(--color-primary);padding:8px 12px;border-radius:6px">
                <b style="font-size:13px;color:var(--color-primary);text-transform:uppercase;letter-spacing:.02em">Kluczowa Konkluzja Kliniczna:</b>
                <p style="margin:4px 0 0 0;font-size:13px;line-height:1.5">${esc(study.concl)}</p>
              </div>
            `: ""}
            <div>
              <b style="font-size:13px;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:.02em">Streszczenie Badania (Abstract):</b>
              <p style="margin:6px 0 0 0;font-size:13px;line-height:1.6;color:var(--color-text);text-align:justify">${esc(study.abstr || "Brak pełnego streszczenia w otwartym rekordzie Europe PMC.")}</p>
            </div>
            <div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap">
              ${study.doi ? `<a href="https://doi.org/${esc(study.doi)}" target="_blank" rel="noopener noreferrer" class="btn">Oficjalny artykuł (DOI) ↗</a>`: ""}
              ${study.pmid ? `<a href="https://pubmed.ncbi.nlm.nih.gov/${esc(study.pmid)}/" target="_blank" rel="noopener noreferrer" class="btn">PubMed (${esc(study.pmid)}) ↗</a>`: ""}
              ${study.pdf ? `<a href="${esc(study.pdf)}" target="_blank" rel="noopener noreferrer" class="btn btn-gold">Pobierz Otwarty PDF ↗</a>`: ""}
            </div>
          </div>
        `;
        openSplitPane("", `EBM: ${comp.n}`, study.journal, abstractHtml);
      };
    });
    p.querySelectorAll("[data-open-analog]").forEach((btn) =>{
      btn.onclick = () =>select({ type: "compound", i: +btn.dataset.openAnalog }, true);
    });
    p.querySelectorAll("[data-edge-goto]").forEach((btn) =>{
      btn.onclick = () =>{
        const targetId = btn.dataset.edgeGoto;
        const targetIdx = compById.get(targetId);
        if (targetIdx !== undefined) {
          select({ type: "compound", i: targetIdx }, true);
        }
      };
    });
    const overviewOpenEdgesBtn = p.querySelector("#overviewOpenEdgesBtn");
    if (overviewOpenEdgesBtn) {
      overviewOpenEdgesBtn.onclick = () =>toggleEdgesPopover(true);
    }
    p.querySelectorAll("[data-zoom-chem]").forEach((el) =>{
      el.onclick = () =>openChemLightBox(+el.dataset.zoomChem);
    });
    p.querySelectorAll("[data-copy-ik]").forEach((btn) =>{
      btn.onclick = (e) =>{
        e.stopPropagation();
        navigator.clipboard?.writeText(btn.dataset.copyIk);
        const orig = btn.textContent;
        btn.textContent = "OK Skopiowano!";
        setTimeout(() =>{ btn.textContent = orig; }, 1800);
      };
    });
    const closeBtn = p.querySelector("#cardClose");
    if (closeBtn) closeBtn.onclick = () =>select(null);
  }

  // ---------- sidebar controls
  const clBox = $("clusters");
  G.clusters.forEach((cl, ci) =>{
    const n = C.filter((c) =>c.c === ci).length, b = document.createElement("button");
    b.className = "cl"; b.setAttribute("aria-pressed", "true");
    b.innerHTML = `<span class="dot" style="background:var(--color-cluster-${ci})"></span><span>${esc(CL_PL[cl.name])}</span><span>${fmtInt(n)}</span>`;
    b.onclick = (e) =>{
      if (e.altKey || e.metaKey) { state.clusters = new Set([ci]); }
      else state.clusters.has(ci) ? state.clusters.delete(ci) : state.clusters.add(ci);
      clBox.querySelectorAll(".cl").forEach((x, xi) =>{ x.classList.toggle("off", !state.clusters.has(xi)); x.setAttribute("aria-pressed", state.clusters.has(xi)); });
      stats(); search(); draw();
    };
    b.title = "Kliknij: pokaż/ukryj · Alt/⌘+klik: tylko ten klaster";
    clBox.appendChild(b);
  });
  const hubSel = $("hub");
  ["hub", "pathway", "concept"].forEach((kind) =>{
    const og = document.createElement("optgroup"); og.label = KIND_PL[kind];
    CORE.forEach((n, i) =>{ if (n.kind === kind && C.some((c) =>c.l.includes(i))) { const o = document.createElement("option"); o.value = i; o.textContent = n.name; og.appendChild(o); } });
    if (og.children.length) hubSel.appendChild(og);
  });
  hubSel.onchange = () =>{
    state.hub = hubSel.value === "" ? null : +hubSel.value;
    state.sel = null; stats(); search();
    select(state.hub !== null ? { type: "core", i: state.hub } : null);
    fit();
  };
  $("pkOnly").onchange = (e) =>{ state.pkOnly = e.target.checked; stats(); search(); draw(); };
  $("cypOnly").onchange = (e) =>{
    state.cypOnly = e.target.checked;
    if (state.cypOnly && advCyp && !state.adv.cyp) {
      advCyp.value = "any";
      state.adv.cyp = "any";
      updateAdvFilterUI();
    }
    stats(); search(); draw();
  };
  $("relOn").onchange = (e) =>{ state.rel = e.target.checked; draw(); };
  $("ver").onchange = (e) =>{ state.ver = e.target.value; stats(); search(); draw(); };

  // ---------- advanced multi-filter controls
  const advCyp = $("advCypSelect");
  if (advCyp) {
    advCyp.onchange = (e) =>{
      state.adv.cyp = e.target.value;
      if ($("cypOnly")) $("cypOnly").checked = false;
      state.cypOnly = false;
      updateAdvFilterUI();
      stats(); search(); draw();
    };
  }
  const advRo5 = $("advRo5Select");
  if (advRo5) {
    advRo5.onchange = (e) =>{
      state.adv.ro5 = e.target.value;
      updateAdvFilterUI();
      stats(); search(); draw();
    };
  }
  const advProp = $("advPropSelect");
  if (advProp) {
    advProp.onchange = (e) =>{
      state.adv.prop = e.target.value;
      updateAdvFilterUI();
      stats(); search(); draw();
    };
  }
  const advPhase = $("advPhaseSelect");
  if (advPhase) {
    advPhase.onchange = (e) =>{
      state.adv.phase = e.target.value;
      updateAdvFilterUI();
      stats(); search(); draw();
    };
  }
  const advReset = $("advFilterReset");
  if (advReset) {
    advReset.onclick = () =>{
      state.adv = { cyp: "", ro5: "", prop: "", phase: "" };
      if (advCyp) advCyp.value = "";
      if (advRo5) advRo5.value = "";
      if (advProp) advProp.value = "";
      if (advPhase) advPhase.value = "";
      updateAdvFilterUI();
      stats(); search(); draw();
    };
  }
  const q = $("q"), res = $("results");
  function search() {
    const s = q.value.trim().toLowerCase();
    if (s.length < 2) { res.innerHTML = ""; return; }
    const hits = C.filter((c) =>visible(c) && c.hay.includes(s))
      .sort((a, b) =>(b.n.toLowerCase().startsWith(s) - a.n.toLowerCase().startsWith(s)) || a.n.length - b.n.length).slice(0, 40);
    const th = s.length >= 3 ? T.map((t, i) =>[t, i]).filter(([t]) =>(t.n || "").toLowerCase().includes(s)).slice(0, 6) : [];
    res.innerHTML = th.map(([t, i]) =>`<button role="option" data-t="${i}"><span class="dot" style="background:var(--color-accent2)"></span>◎ ${esc(t.n)}<small>${byTarget[i].length} subst.</small></button>`).join("") + (hits.length ? hits.map((c) =>`<button role="option" data-c="${c.i}"><span class="dot" style="background:var(--color-cluster-${c.c})"></span>${esc(c.n)}<small>${c.pk ? "PK" : ""}</small></button>`).join("")
      : (th.length ? "" : '<div role="option" aria-disabled="true" class="empty" style="padding:.4rem">Brak wyników przy obecnych filtrach.</div>'));
    res.querySelectorAll("[data-t]").forEach((b) =>b.onclick = () =>{ openTargetModal(+b.dataset.t); res.innerHTML = ""; q.blur(); });
    res.querySelectorAll("[data-c]").forEach((b) =>b.onclick = () =>{ select({ type: "compound", i: +b.dataset.c }, true); res.innerHTML = ""; q.blur(); });
  }
  q.addEventListener("input", search);
  q.addEventListener("keydown", (e) =>{
    if (e.key === "Enter") {
      const b = res.querySelector("[data-c], [data-t]");
      if (b) b.click();
    } else if (e.key === "ArrowDown") {
      const first = res.querySelector("button[role='option']");
      if (first) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  res.addEventListener("keydown", (e) =>{
    const btns = Array.from(res.querySelectorAll("button[role='option']"));
    const idx = btns.indexOf(document.activeElement);
    if (idx >= 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = btns[(idx + 1) % btns.length];
        if (next) next.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (idx === 0) {
          q.focus();
        } else {
          btns[idx - 1].focus();
        }
      }
    }
  });

  // ---------- semantic edges toolbar & controls
  const edgesBtn = $("edgesBtn");
  if (edgesBtn) edgesBtn.onclick = () =>toggleEdgesPopover();
  const closeEdgesPopover = $("closeEdgesPopover");
  if (closeEdgesPopover) closeEdgesPopover.onclick = () =>toggleEdgesPopover(false);
  const edgeFilterAllBtn = $("edgeFilterAllBtn");
  if (edgeFilterAllBtn) {
    edgeFilterAllBtn.onclick = () =>{
      Object.keys(TYPED_EDGE_CONFIG).forEach((t) =>state.edgeFilters.enabled.add(t));
      renderEdgeFilterList();
      draw();
    };
  }
  const edgeFilterNoneBtn = $("edgeFilterNoneBtn");
  if (edgeFilterNoneBtn) {
    edgeFilterNoneBtn.onclick = () =>{
      state.edgeFilters.enabled.clear();
      renderEdgeFilterList();
      draw();
    };
  }

  // ---------- stack drawer toolbar & controls
  const stackBtn = $("stackBtn");
  if (stackBtn) stackBtn.onclick = () =>toggleStackDrawer();
  const stackDrawerClose = $("stackDrawerClose");
  if (stackDrawerClose) stackDrawerClose.onclick = () =>toggleStackDrawer(false);
  const stackFilterToggle = $("stackFilterToggle");
  if (stackFilterToggle) {
    stackFilterToggle.onclick = () =>{
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
    stackClearBtn.onclick = () =>{
      state.stack.clear();
      saveStack();
      updateStackUI();
      if (state.sel && state.sel.type === "compound") select(state.sel);
      draw();
    };
  }
  const stackCompareBtn = $("stackCompareBtn");
  if (stackCompareBtn) stackCompareBtn.onclick = () =>openComparator();
  const stackDossierBtn = $("stackDossierBtn");
  if (stackDossierBtn) {
    stackDossierBtn.onclick = () =>{
      const list = [...state.stack];
      if (list.length === 0 && state.sel && state.sel.type === "compound") {
        openDossierModal("single", state.sel.i);
      } else {
        openDossierModal("stack", list);
      }
    };
  }

  // ---------- clinical dossier controls
  const dossierClose = $("dossierCloseBtn");
  if (dossierClose) dossierClose.onclick = closeDossierModal;
  const dossierModal = $("dossierModal");
  if (dossierModal) {
    dossierModal.onclick = (e) =>{
      if (e.target === dossierModal) closeDossierModal();
    };
  }
  const dossierPrint = $("dossierPrintBtn");
  if (dossierPrint) dossierPrint.onclick = () =>window.print();

  const dossierCopyMd = $("dossierCopyMdBtn");
  if (dossierCopyMd) {
    dossierCopyMd.onclick = () =>{
      const md = activeDossierMode === "stack"
        ? generateStackDossierMarkdown(activeDossierTarget)
        : generateCompoundDossierMarkdown(C[activeDossierTarget]);
      navigator.clipboard?.writeText(md);
      const orig = dossierCopyMd.textContent;
      dossierCopyMd.textContent = "OK Skopiowano!";
      setTimeout(() =>{ dossierCopyMd.textContent = orig; }, 1800);
    };
  }

  const dossierObsidian = $("dossierObsidianBtn");
  if (dossierObsidian) {
    dossierObsidian.onclick = () =>{
      const md = activeDossierMode === "stack"
        ? generateStackDossierMarkdown(activeDossierTarget)
        : generateCompoundDossierMarkdown(C[activeDossierTarget]);
      const noteName = activeDossierMode === "stack"
        ? `Dossier Polipragmazji (${(activeDossierTarget || []).length} leków)`
        : `Monografia ${C[activeDossierTarget]?.n || "Leku"}`;
      const uri = `obsidian://new?vault=vault&name=${encodeURIComponent(noteName)}&content=${encodeURIComponent(md)}`;
      navigator.clipboard?.writeText(md);
      window.open(uri, "_blank");
      const orig = dossierObsidian.textContent;
      dossierObsidian.textContent = "OK Otwarto!";
      setTimeout(() =>{ dossierObsidian.textContent = orig; }, 1800);
    };
  }

  // ---------- chemical structure lightbox controls
  const chemClose = $("chemModalClose");
  if (chemClose) chemClose.onclick = closeChemLightBox;
  const chemBox = $("chemLightBox");
  if (chemBox) {
    chemBox.onclick = (e) =>{
      if (e.target === chemBox) closeChemLightBox();
    };
  }

  // ---------- drug comparator controls
  const compClose = $("compModalClose");
  if (compClose) compClose.onclick = closeComparator;
  const compModal = $("comparatorModal");
  if (compModal) {
    compModal.onclick = (e) =>{
      if (e.target === compModal) closeComparator();
    };
  }
  const compCopyMd = $("compModalCopyMd");
  if (compCopyMd) {
    compCopyMd.onclick = () =>{
      const md = exportComparisonMarkdown();
      navigator.clipboard?.writeText(md);
      const orig = compCopyMd.textContent;
      compCopyMd.textContent = "OK Skopiowano Markdown!";
      setTimeout(() =>{ compCopyMd.textContent = orig; }, 1800);
    };
  }
  const compObsidian = $("compModalObsidian");
  if (compObsidian) {
    compObsidian.onclick = () =>{
      const md = exportComparisonMarkdown();
      const list = (activeComparatorIndices && activeComparatorIndices.length) ? activeComparatorIndices : [...state.stack];
      const names = list.map((i) =>C[i]?.n || "").filter(Boolean).join("vs ");
      const noteName = `Porównanie ${names.slice(0, 50) || "Leków"}`;
      const uri = `obsidian://new?vault=vault&name=${encodeURIComponent(noteName)}&content=${encodeURIComponent(md)}`;
      navigator.clipboard?.writeText(md);
      window.open(uri, "_blank");
      const orig = compObsidian.textContent;
      compObsidian.textContent = "OK Otwarto!";
      setTimeout(() =>{ compObsidian.textContent = orig; }, 1800);
    };
  }

  // ---------- Clinical Calculators Suite (CPIC PGx & Phenoconversion · Dose Conversions & PET Hyperbolic Tapering · Renal/Hepatic/Dialysis)
  const PGX_DATA = G.pharmacogenomicsCpic || { genes: {}, phenoconversion_inhibitors: {}, cpic_guidelines: [] };
  const CONV_DATA = G.doseConversionsTapering || { classes: {}, antidepressant_switching_rules: [], pet_hyperbolic_models: [] };
  const ORGAN_DATA = G.organImpairmentDialysis || { profiles: [] };
  const ORGAN_BY_CID = new Map((ORGAN_DATA.profiles || []).map((p) => [p.compound_id, p]));
  const PGX_STORAGE_KEY = "pv_patient_pgx_v1";

  let activeClinicalSuiteOpen = false;
  let csActiveTab = "pgx";
  let csActiveCompoundId = "codeine-compound";

  function loadPatientPgxProfile() {
    const defaults = {};
    Object.keys(PGX_DATA.genes || {}).forEach((g) => {
      defaults[g] = "NM";
    });
    try {
      const saved = JSON.parse(localStorage.getItem(PGX_STORAGE_KEY) || "{}");
      return { ...defaults, ...saved };
    } catch (_) {
      return defaults;
    }
  }

  let patientPgxProfile = loadPatientPgxProfile();

  function savePatientPgxProfile() {
    try {
      localStorage.setItem(PGX_STORAGE_KEY, JSON.stringify(patientPgxProfile));
    } catch (_) {}
  }

  function computePhenoconversionForGene(geneKey) {
    const gMeta = (PGX_DATA.genes || {})[geneKey];
    const basePheno = patientPgxProfile[geneKey] || "NM";
    if (!gMeta || !gMeta.supports_phenoconversion) {
      return { geneticPheno: basePheno, functionalPheno: basePheno, converted: false, inhibitors: [], factor: 1.0 };
    }
    const inhMap = (PGX_DATA.phenoconversion_inhibitors || {})[geneKey] || { strong: [], moderate: [] };
    const stackIds = new Set([...state.stack].map((i) => C[i]?.id).filter(Boolean));
    const strongHits = (inhMap.strong || []).filter((cid) => stackIds.has(cid));
    const modHits = (inhMap.moderate || []).filter((cid) => stackIds.has(cid));

    if (basePheno === "PM") {
      return { geneticPheno: "PM", functionalPheno: "PM", converted: false, inhibitors: [...strongHits, ...modHits], factor: 1.0 };
    }
    if (strongHits.length > 0) {
      const functional = basePheno === "UM" ? "IM" : "PM";
      return {
        geneticPheno: basePheno,
        functionalPheno: functional,
        converted: functional !== basePheno,
        inhibitors: strongHits.map((id) => ({ id, potency: "strong", name: C[compById.get(id)]?.n || id })),
        factor: 0.0
      };
    }
    if (modHits.length > 0) {
      const functional = basePheno === "UM" ? "NM" : (basePheno === "NM" ? "IM" : "PM");
      return {
        geneticPheno: basePheno,
        functionalPheno: functional,
        converted: functional !== basePheno,
        inhibitors: modHits.map((id) => ({ id, potency: "moderate", name: C[compById.get(id)]?.n || id })),
        factor: 0.5
      };
    }
    return { geneticPheno: basePheno, functionalPheno: basePheno, converted: false, inhibitors: [], factor: 1.0 };
  }

  function renderClinicalSuitePgxPane() {
    const geneSelCont = $("csPgxGeneSelectors");
    const bannerCont = $("csPgxPhenoconversionBanner");
    const activeDrugCont = $("csPgxActiveDrugCard");
    const tableWrap = $("csPgxTableWrap");
    if (!geneSelCont || !bannerCont || !activeDrugCont || !tableWrap) return;

    const genes = Object.values(PGX_DATA.genes || {});
    geneSelCont.innerHTML = genes.map((g) => {
      const phenoRes = computePhenoconversionForGene(g.gene);
      return `
        <div class="cs-gene-row">
          <div>
            <b style="color:var(--color-primary)">${esc(g.gene)}</b>
            <div style="font-size:10.5px;color:var(--color-text-muted)">${esc(g.chromosome || "")}${phenoRes.converted ? ` · <span style="color:var(--color-error);font-weight:700">→ ${esc(phenoRes.functionalPheno)}</span>` : ""}</div>
          </div>
          <select class="cs-select" data-pgx-gene="${esc(g.gene)}">
            ${(g.phenotypes || []).map((p) => `<option value="${esc(p.id)}" ${patientPgxProfile[g.gene] === p.id ? "selected" : ""}>${esc(p.id)} — ${esc(p.label_pl)}</option>`).join("")}
          </select>
        </div>
      `;
    }).join("");

    geneSelCont.querySelectorAll("[data-pgx-gene]").forEach((sel) => {
      sel.onchange = () => {
        patientPgxProfile[sel.dataset.pgxGene] = sel.value;
        savePatientPgxProfile();
        renderClinicalSuitePgxPane();
      };
    });

    const conversions = genes.map((g) => ({ gene: g.gene, ...computePhenoconversionForGene(g.gene) })).filter((x) => x.converted);
    if (conversions.length) {
      bannerCont.innerHTML = `
        <div class="pv-banner pv-banner-critical" style="margin:0">
          <b>Wykryto Fenokonwersję Farmakokinetyczną w Twoim Stacku (${conversions.length} izoenzymy)!</b>
          <div style="margin-top:4px;font-size:12.5px">
            ${conversions.map((c) => `• <b>${esc(c.gene)}</b>: genotyp <code>${esc(c.geneticPheno)}</code> ulega funkcjonalnej konwersji do <b><code>${esc(c.functionalPheno)}</code></b> przez obecny w Stacku inhibitor: <b>${c.inhibitors.map((i) => `${esc(i.name)} (${i.potency === "strong" ? "silny AS×0.0" : "umiarkowany AS×0.5"})`).join(", ")}</b>.`).join("<br>")}
          </div>
        </div>
      `;
    } else {
      bannerCont.innerHTML = `
        <div class="pv-banner pv-banner-info" style="margin:0">
          <b>Status Fenokonwersji Stacka: Brak aktywnej blokady CYP2D6 / CYP2C19 / CYP2C9 / OATP1B1</b>
          <div style="font-size:12px;margin-top:3px">Fenotyp funkcjonalny pacjenta odpowiada bezpośrednio profilowi genetycznemu. Dodaj np. fluoksetynę, paroksetynę, bupropion, flukonazol lub amiodaron do Stacka, aby zasymulować fenokonwersję.</div>
        </div>
      `;
    }

    const guidelines = (PGX_DATA.cpic_guidelines || []).filter((g) => g.compound_id === csActiveCompoundId);
    const compObj = C[compById.get(csActiveCompoundId)];
    if (guidelines.length) {
      activeDrugCont.innerHTML = guidelines.map((g) => {
        const pheno = computePhenoconversionForGene(g.gene);
        const rec = (g.recommendations || {})[pheno.functionalPheno] || (g.recommendations || {}).NM || {};
        const sevColor = rec.severity === "contraindicated" ? "var(--color-error)" : (rec.severity === "moderate" ? "var(--color-warning)" : "var(--color-success)");
        const roleLabel = g.drug_role === "prodrug" ? "PROLEK (Wymaga bioaktywacji — w PM utrata skuteczności, w UM toksyczność!)"
          : g.drug_role === "active_drug" ? "LEK AKTYWNY (W PM kumulacja i zatrucie, w UM ryzyko subterapeutyczne)"
          : "ALLELE NADWRAŻLIWOŚCI IMMUNOLOGICZNEJ HLA (Ryzyko SJS/TEN/DRESS/Agranulocytozy)";
        const pkPheno = pheno.functionalPheno === "NM" ? "EM" : (["PM", "IM", "UM"].includes(pheno.functionalPheno) ? pheno.functionalPheno : "EM");
        return `
          <div style="border-left:4px solid ${sevColor};padding-left:12px;display:flex;flex-direction:column;gap:6px">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px">
              <b style="font-size:14px">${esc(compObj ? compObj.n : g.compound_id)} × <span style="color:var(--color-primary)">${esc(g.gene)}</span> (CPIC Poziom ${esc(g.cpic_level)})</b>
              <span class="tag" style="border-color:${sevColor};color:${sevColor};font-weight:700">Fenotyp funkcjonalny: ${esc(pheno.functionalPheno)}${pheno.converted ? ` (z ${esc(pheno.geneticPheno)})` : ""}</span>
            </div>
            <div style="font-size:12px;color:var(--color-text-muted)"><b>Mechanizm:</b> ${esc(roleLabel)} · <b>Szlak:</b> ${esc(g.active_metabolite || "–")}</div>
            <div style="font-size:13px;background:var(--color-surface-offset);padding:8px 10px;border-radius:6px">
              <b>Zalecenie CPIC / DPWG:</b> ${esc(rec.action_pl || "Standardowe dawkowanie.")}
              ${rec.alternative_pl && rec.alternative_pl !== "–" ? `<div style="margin-top:4px;font-size:12px;color:var(--color-primary)"><b>Alternatywa kliniczna:</b> ${esc(rec.alternative_pl)}</div>` : ""}
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:2px">
              <button class="btn btn-sm btn-gold" data-pgx-launch-pksim="${esc(g.compound_id)}" data-pgx-pheno="${esc(pkPheno)}">Eksportuj fenotyp (${esc(pkPheno)}) do Symulatora PK 2-Kompartmentowego ↗</button>
              <button class="btn btn-sm" data-pgx-select-graph="${esc(g.compound_id)}">Pokaż w grafie</button>
            </div>
          </div>
        `;
      }).join("<hr style='border:0;border-top:1px solid var(--color-border);margin:8px 0'>");
    } else {
      const cypList = (compObj && compObj.pk && compObj.pk.cyp) ? compObj.pk.cyp : [];
      activeDrugCont.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
          <div>
            <b style="font-size:13.5px">${esc(compObj ? compObj.n : csActiveCompoundId)} — Analiza szlaków CYP450</b>
            <div style="font-size:12px;color:var(--color-text-muted);margin-top:2px">
              ${cypList.length ? `Substrat izoenzymów: <b>${esc(cypList.join(", "))}</b>. Brak dedykowanej wytycznej CPIC Level A — użyj tabeli poniżej lub przetestuj wpływ fenotypu w Symulatorze PK.` : "Brak bezpośredniej wytycznej CPIC Level A dla tej substancji. Wybierz lek z tabeli CPIC poniżej."}
            </div>
          </div>
          <button class="btn btn-sm btn-gold" data-pgx-launch-pksim="${esc(csActiveCompoundId)}" data-pgx-pheno="${esc(computePhenoconversionForGene("CYP2D6").functionalPheno === "NM" ? "EM" : computePhenoconversionForGene("CYP2D6").functionalPheno)}">Symulator PK ↗</button>
        </div>
      `;
    }

    tableWrap.innerHTML = `
      <table class="cs-table">
        <thead>
          <tr>
            <th>Lek</th>
            <th>Gen</th>
            <th>Typ (Prolek vs Aktywny)</th>
            <th>Twój Fenotyp Funkcjonalny</th>
            <th>Zalecenie Kliniczne CPIC Level A</th>
            <th>Alternatywa</th>
          </tr>
        </thead>
        <tbody>
          ${(PGX_DATA.cpic_guidelines || []).map((g) => {
            const c = C[compById.get(g.compound_id)];
            const pheno = computePhenoconversionForGene(g.gene);
            const rec = (g.recommendations || {})[pheno.functionalPheno] || (g.recommendations || {}).NM || {};
            const sevColor = rec.severity === "contraindicated" ? "var(--color-error)" : (rec.severity === "moderate" ? "var(--color-warning)" : "var(--color-success)");
            return `
              <tr style="${g.compound_id === csActiveCompoundId ? "background:var(--color-surface-offset)" : ""}">
                <td><button class="pv-entity-link" data-cs-pick-cid="${esc(g.compound_id)}">${esc(c ? c.n : g.compound_id)}</button></td>
                <td><b>${esc(g.gene)}</b></td>
                <td><span class="tag" style="font-size:11px">${esc(g.drug_role)}</span></td>
                <td><b style="color:${sevColor}">${esc(pheno.functionalPheno)}</b>${pheno.converted ? ` <small>(z ${esc(pheno.geneticPheno)})</small>` : ""}</td>
                <td>${esc(rec.action_pl || "–")}</td>
                <td><small>${esc(rec.alternative_pl || "–")}</small></td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    `;

    activeDrugCont.querySelectorAll("[data-pgx-launch-pksim]").forEach((btn) => {
      btn.onclick = () => {
        const cid = btn.dataset.pgxLaunchPksim;
        const ph = btn.dataset.pgxPheno || "EM";
        closeClinicalSuiteModal();
        openPkSimulatorSplitPane(cid, null, { phenotype: ph });
      };
    });
    activeDrugCont.querySelectorAll("[data-pgx-select-graph]").forEach((btn) => {
      btn.onclick = () => {
        const idx = compById.get(btn.dataset.pgxSelectGraph);
        if (idx !== undefined) {
          closeClinicalSuiteModal();
          select({ type: "compound", i: idx }, true);
        }
      };
    });
    tableWrap.querySelectorAll("[data-cs-pick-cid]").forEach((btn) => {
      btn.onclick = () => {
        csActiveCompoundId = btn.dataset.csPickCid;
        const gSel = $("csGlobalCompoundSelect");
        if (gSel) gSel.value = csActiveCompoundId;
        renderClinicalSuitePgxPane();
      };
    });
  }

  function findSwitchingProtocol(fromSub, toSub) {
    const rules = CONV_DATA.antidepressant_switching_rules || [];
    for (const r of rules) {
      const matchFrom = r.from_sub_class === fromSub
        || (r.from_sub_class === "ANY_SEROTONERGIC" && ["SSRI", "SSRI_LONG", "SSRI_SHORT", "SNRI", "TCA", "TCA_SEROTONERGIC"].includes(fromSub))
        || (r.from_sub_class === "SSRI_SNRI" && ["SSRI", "SSRI_SHORT", "SNRI"].includes(fromSub));
      const matchTo = r.to_sub_class === toSub
        || (r.to_sub_class === "ANY_SEROTONERGIC" && ["SSRI", "SSRI_LONG", "SSRI_SHORT", "SNRI", "TCA", "TCA_SEROTONERGIC"].includes(toSub))
        || (r.to_sub_class === "SSRI_SNRI" && ["SSRI", "SSRI_LONG", "SSRI_SHORT", "SNRI"].includes(toSub))
        || (r.to_sub_class === "TCA" && ["TCA", "TCA_SEROTONERGIC"].includes(toSub));
      if (matchFrom && matchTo) return r;
    }
    return rules[rules.length - 1] || null;
  }

  function renderPetHyperbolicWidget() {
    const modelSel = $("csPetModelSelect");
    const startInput = $("csPetStartDose");
    const stepInput = $("csPetStepOcc");
    const svgCont = $("csPetSvgContainer");
    const schedWrap = $("csPetScheduleTableWrap");
    if (!modelSel || !startInput || !stepInput || !svgCont || !schedWrap) return;

    const models = CONV_DATA.pet_hyperbolic_models || [];
    if (!models.length) return;
    if (!modelSel.options.length) {
      modelSel.innerHTML = models.map((m) => `<option value="${esc(m.compound_id)}">${esc(m.name)} (${esc(m.target.split("(")[0].trim())})</option>`).join("");
    }
    const matchingModel = models.find((m) => m.compound_id === csActiveCompoundId);
    if (matchingModel && modelSel.dataset.lastSyncedCid !== csActiveCompoundId) {
      modelSel.value = matchingModel.compound_id;
      startInput.value = matchingModel.usual_dose_mg;
      modelSel.dataset.lastSyncedCid = csActiveCompoundId;
    }

    const model = models.find((m) => m.compound_id === modelSel.value) || models[0];
    const startDose = Math.max(0.5, parseFloat(startInput.value) || model.usual_dose_mg);
    const stepOcc = Math.max(2.5, Math.min(25, parseFloat(stepInput.value) || 10));

    const occAt = (d) => (model.e_max * d) / (d + model.ed50_mg);
    const doseForOcc = (occ) => {
      if (occ <= 0) return 0;
      if (occ >= model.e_max * 0.99) return startDose;
      return (occ * model.ed50_mg) / (model.e_max - occ);
    };

    const startOcc = occAt(startDose);
    const steps = [];
    let curOcc = startOcc;
    let stepNum = 0;
    while (curOcc > 0.5 && stepNum < 20) {
      const d = stepNum === 0 ? startDose : doseForOcc(curOcc);
      const roundedD = Math.max(0, Math.round(d / (model.min_step_mg || 0.1)) * (model.min_step_mg || 0.1));
      steps.push({
        step: stepNum + 1,
        week: stepNum * 2,
        doseMg: +d.toFixed(2),
        practicalDoseMg: +roundedD.toFixed(2),
        occPct: +occAt(d).toFixed(1)
      });
      curOcc -= stepOcc;
      stepNum++;
    }
    steps.push({ step: steps.length + 1, week: steps.length * 2, doseMg: 0, practicalDoseMg: 0, occPct: 0.0 });

    // SVG plot of Michaelis-Menten curve Occ(D) vs D
    const W = 680, H = 220, padL = 48, padR = 20, padT = 18, padB = 34;
    const plotW = W - padL - padR, plotH = H - padT - padB;
    const maxD = Math.max(startDose * 1.15, model.usual_dose_mg * 1.2);
    const xOf = (d) => padL + (d / maxD) * plotW;
    const yOf = (occ) => padT + plotH - (occ / 100) * plotH;

    const curvePts = [];
    for (let i = 0; i <= 80; i++) {
      const d = (i / 80) * maxD;
      curvePts.push(`${i === 0 ? "M" : "L"}${xOf(d).toFixed(1)},${yOf(occAt(d)).toFixed(1)}`);
    }

    const stepCircles = steps.map((s) => `
      <circle cx="${xOf(s.doseMg).toFixed(1)}" cy="${yOf(s.occPct).toFixed(1)}" r="4.2" fill="var(--color-primary)" stroke="#fff" stroke-width="1.3">
        <title>Krok ${s.step} (Tydz. ${s.week}): ${s.doseMg} mg → ${s.occPct}% zajętości</title>
      </circle>
    `).join("");

    svgCont.innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;background:var(--color-surface-offset);border-radius:6px;border:1px solid var(--color-border)">
        <line x1="${padL}" y1="${yOf(50).toFixed(1)}" x2="${W - padR}" y2="${yOf(50).toFixed(1)}" stroke="var(--color-border)" stroke-dasharray="4 3" />
        <line x1="${xOf(model.ed50_mg).toFixed(1)}" y1="${padT}" x2="${xOf(model.ed50_mg).toFixed(1)}" y2="${H - padB}" stroke="var(--color-warning)" stroke-dasharray="3 3" />
        <text x="${(xOf(model.ed50_mg) + 4).toFixed(1)}" y="${padT + 12}" fill="var(--color-warning)" font-size="10.5" font-weight="700">ED50 = ${model.ed50_mg} mg (${(model.e_max / 2).toFixed(1)}% Occ)</text>
        <path d="${curvePts.join(" ")}" fill="none" stroke="var(--color-primary)" stroke-width="2.4" />
        ${stepCircles}
        <line x1="${padL}" y1="${H - padB}" x2="${W - padR}" y2="${H - padB}" stroke="var(--color-text-muted)" />
        <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${H - padB}" stroke="var(--color-text-muted)" />
        <text x="${W / 2}" y="${H - 6}" text-anchor="middle" fill="var(--color-text-muted)" font-size="11">Dawka dobowa D (mg) — równe odstępy na osi pionowej (ΔOcc) wymagają coraz mniejszych dawek na osi poziomej!</text>
        <text x="14" y="${H / 2}" transform="rotate(-90 14 ${H / 2})" text-anchor="middle" fill="var(--color-text-muted)" font-size="11">Zajętość PET (%)</text>
      </svg>
      <div style="font-size:12px;color:var(--color-text-muted);margin-top:6px">
        <b>${esc(model.name)} (${esc(model.target)}):</b> Emax = <b>${model.e_max}%</b>, ED50 = <b>${model.ed50_mg} mg</b>. ${esc(model.clinical_note)}
      </div>
    `;

    schedWrap.innerHTML = `
      <table class="cs-table" style="margin-top:6px">
        <thead>
          <tr>
            <th>Etap</th>
            <th>Tydzień</th>
            <th>Dawka teoretyczna (mg/d)</th>
            <th>Dawka praktyczna (krok ${model.min_step_mg} mg)</th>
            <th>Zajętość receptora PET (%)</th>
            <th>Spadek ΔOcc</th>
          </tr>
        </thead>
        <tbody>
          ${steps.map((s, idx) => {
            const prevOcc = idx > 0 ? steps[idx - 1].occPct : s.occPct;
            const dOcc = idx === 0 ? " Punkt wyjścia" : `-${(prevOcc - s.occPct).toFixed(1)}%`;
            return `
              <tr>
                <td><b>Krok ${s.step}</b></td>
                <td>Tydz. ${s.week}</td>
                <td>${s.doseMg} mg</td>
                <td><b style="color:var(--color-primary)">${s.practicalDoseMg} mg</b></td>
                <td><b>${s.occPct}%</b></td>
                <td>${dOcc}</td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    `;
  }

  function renderClinicalSuiteTaperPane() {
    const classSel = $("csConvClassSelect");
    const fromSel = $("csConvFromSelect");
    const fromDoseInput = $("csConvFromDose");
    const toSel = $("csConvToSelect");
    const opioidWrap = $("csOpioidReductionWrap");
    const opioidSlider = $("csOpioidCrossTolSlider");
    const opioidVal = $("csOpioidCrossTolVal");
    const resultBox = $("csConvResultBox");
    const classTableWrap = $("csConvClassTableWrap");
    if (!classSel || !fromSel || !toSel || !resultBox || !classTableWrap) return;

    const classes = CONV_DATA.classes || {};
    const classKeys = Object.keys(classes);
    if (!classSel.options.length) {
      classSel.innerHTML = classKeys.map((k) => `<option value="${esc(k)}">${esc(classes[k].label)}</option>`).join("");
    }

    // Auto-select class if csActiveCompoundId belongs to one
    if (classSel.dataset.lastSyncedCid !== csActiveCompoundId) {
      for (const k of classKeys) {
        const found = (classes[k].compounds || []).find((c) => c.compound_id === csActiveCompoundId);
        if (found) {
          classSel.value = k;
          delete classSel.dataset.populatedClass;
          break;
        }
      }
      classSel.dataset.lastSyncedCid = csActiveCompoundId;
    }

    const activeClassKey = classSel.value || classKeys[0];
    const activeClass = classes[activeClassKey];
    if (!activeClass) return;

    const comps = activeClass.compounds || [];
    if (classSel.dataset.populatedClass !== activeClassKey) {
      fromSel.innerHTML = comps.map((c) => `<option value="${esc(c.compound_id)}">${esc(c.name)} (równoważnik: ${c.equiv_to_ref_mg} mg)</option>`).join("");
      toSel.innerHTML = comps.map((c) => `<option value="${esc(c.compound_id)}">${esc(c.name)} (równoważnik: ${c.equiv_to_ref_mg} mg)</option>`).join("");
      const matchFrom = comps.find((c) => c.compound_id === csActiveCompoundId);
      if (matchFrom) fromSel.value = matchFrom.compound_id;
      if (comps.length > 1) {
        toSel.value = comps.find((c) => c.compound_id !== fromSel.value)?.compound_id || comps[0].compound_id;
      }
      fromDoseInput.value = (comps.find((c) => c.compound_id === fromSel.value) || comps[0]).equiv_to_ref_mg;
      classSel.dataset.populatedClass = activeClassKey;
    }

    opioidWrap.style.display = activeClassKey === "opioids" ? "flex" : "none";
    const crossTolReduction = activeClassKey === "opioids" ? (parseFloat(opioidSlider.value) || 35) : 0;
    if (opioidVal) opioidVal.textContent = `${crossTolReduction}%`;

    const fromDrug = comps.find((c) => c.compound_id === fromSel.value) || comps[0];
    const toDrug = comps.find((c) => c.compound_id === toSel.value) || comps[0];
    const doseFrom = Math.max(0.05, parseFloat(fromDoseInput.value) || fromDrug.equiv_to_ref_mg);

    const refUnits = doseFrom / fromDrug.equiv_to_ref_mg;
    const refEquivalentMg = +(refUnits * activeClass.reference_dose_mg).toFixed(2);
    const rawTargetMg = +(refUnits * toDrug.equiv_to_ref_mg).toFixed(2);
    const adjustedTargetMg = activeClassKey === "opioids" && fromDrug.compound_id !== toDrug.compound_id
      ? +(rawTargetMg * (1 - crossTolReduction / 100)).toFixed(2)
      : rawTargetMg;

    let protocolBanner = "";
    if (activeClassKey === "antidepressants") {
      const rule = findSwitchingProtocol(fromDrug.sub_class || "SSRI", toDrug.sub_class || "SSRI");
      if (rule) {
        const cls = rule.severity === "CONTRAINDICATED_OVERLAP" ? "pv-banner-critical" : (rule.severity === "HIGH_CAUTION" ? "pv-banner-warning" : "pv-banner-info");
        protocolBanner = `
          <div class="pv-banner ${cls}" style="margin-top:8px">
            <b>Strategia zamiany: ${esc(rule.strategy)}</b>
            <div style="margin-top:3px;font-size:12px">${esc(rule.protocol)}</div>
          </div>
        `;
      }
    } else if (activeClassKey === "opioids") {
      protocolBanner = `
        <div class="pv-banner pv-banner-warning" style="margin-top:8px">
          <b>Dobowy równoważnik morfiny p.o. (MME): ${refEquivalentMg} MME/d ${refEquivalentMg >= 90 ? "— WYSOKIE RYZYKO PRZEDAWKOWANIA (≥90 MME/d)!" : (refEquivalentMg >= 50 ? "— Podwyższone ryzyko (≥50 MME/d)" : "")}</b>
          <div style="margin-top:3px;font-size:12px">
            Dawka po redukcji o ${crossTolReduction}% na niepełną tolerancję krzyżową: <b style="color:var(--color-primary);font-size:14px">${adjustedTargetMg} mg/d</b> (surowy przelicznik: ${rawTargetMg} mg/d).
            <br><b>Bezpieczeństwo nerkowe (${esc(toDrug.name)}):</b> ${esc(toDrug.renal_safety || "–")}
          </div>
        </div>
      `;
    } else if (activeClassKey === "corticosteroids") {
      const hpaSuppressed = refEquivalentMg >= 5.0;
      protocolBanner = `
        <div class="pv-banner ${hpaSuppressed ? "pv-banner-warning" : "pv-banner-info"}" style="margin-top:8px">
          <b>Profil receptorowy GR / MR (${esc(toDrug.name)}):</b> Siła przeciwzapalna (GR) = <b>${toDrug.anti_inflammatory_potency}×</b>, mineralokortykoidowa (MR — retencja Na+/H2O) = <b>${toDrug.mineralocorticoid_potency}×</b>, biologiczny t½ = <b>${esc(toDrug.bio_half_life_h)}</b>.
          <div style="margin-top:3px;font-size:12px">${hpaSuppressed ? "⚠️ Dawka równoważna ≥5 mg prednizonu/d stosowana >3 tygodnie powoduje supresję osi HPA (ryzyko przełomu nadnerczowego przy nagłym odstawieniu)!" : "Dawka poniżej typowego progu supresji osi HPA."}</div>
        </div>
      `;
    } else if (activeClassKey === "antipsychotics") {
      protocolBanner = `
        <div class="pv-banner pv-banner-info" style="margin-top:8px">
          <b>Ryzyko z odbicia przy zamianie (${esc(fromDrug.name)} → ${esc(toDrug.name)}):</b>
          <div style="margin-top:3px;font-size:12px">• <b>Odstawiany (${esc(fromDrug.name)}):</b> ${esc(fromDrug.rebound_risk)}<br>• <b>Włączany (${esc(toDrug.name)}):</b> ${esc(toDrug.d2_profile)} — ${esc(toDrug.rebound_risk)}</div>
        </div>
      `;
    } else if (activeClassKey === "benzodiazepines") {
      protocolBanner = `
        <div class="pv-banner pv-banner-info" style="margin-top:8px">
          <b>Protokół Ashtona (${esc(fromDrug.name)} → ${esc(toDrug.name)}):</b> Równoważnik <b>${refEquivalentMg} mg Diazepamu/d</b>.
          <div style="margin-top:3px;font-size:12px">• <b>t½ (${esc(fromDrug.name)}):</b> ${esc(fromDrug.half_life_h)} h (${esc(fromDrug.active_metabolite)})${toDrug.lot_safe_hepatic ? "<br>• ✅ <b>Reguła LOT:</b> Lek docelowy ulega bezpośredniej glukuronidacji (bezpieczny w niewydolności wątroby)." : ""}</div>
        </div>
      `;
    }

    resultBox.innerHTML = `
      <div style="background:var(--color-surface-offset);padding:10px 12px;border-radius:6px;border:1px solid var(--color-border)">
        <div style="font-size:12px;color:var(--color-text-muted)">Dawka równoważna (${esc(fromDrug.name)} ${doseFrom} mg → ${esc(toDrug.name)}):</div>
        <div style="font-size:18px;font-weight:800;color:var(--color-primary);margin-top:2px">
          ${adjustedTargetMg} mg/d ${activeClassKey === "opioids" && adjustedTargetMg !== rawTargetMg ? `<small style="font-size:12px;color:var(--color-text-muted)">(przed redukcją krzyżową: ${rawTargetMg} mg/d)</small>` : ""}
        </div>
        <div style="font-size:11.5px;color:var(--color-text-muted);margin-top:2px">${esc(activeClass.clinical_note)}</div>
      </div>
      ${protocolBanner}
    `;

    classTableWrap.innerHTML = `
      <table class="cs-table">
        <thead>
          <tr>
            <th>Substancja</th>
            <th>Równoważnik dla ${activeClass.reference_dose_mg} mg leku ref.</th>
            <th>Przelicznik dla Twojej dawki (${doseFrom} mg ${esc(fromDrug.name)})</th>
            <th>Parametry kliniczne / t½ / Uwagi</th>
          </tr>
        </thead>
        <tbody>
          ${comps.map((c) => {
            const eq = +(refUnits * c.equiv_to_ref_mg).toFixed(2);
            return `
              <tr style="${c.compound_id === toDrug.compound_id ? "background:var(--color-surface-offset)" : ""}">
                <td><button class="pv-entity-link" data-cs-conv-pick="${esc(c.compound_id)}">${esc(c.name)}</button></td>
                <td><b>${c.equiv_to_ref_mg} mg</b></td>
                <td><b style="color:var(--color-primary)">${eq} mg/d</b></td>
                <td><small>${esc(c.notes || c.rebound_risk || c.renal_safety || "")}</small></td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    `;

    classTableWrap.querySelectorAll("[data-cs-conv-pick]").forEach((btn) => {
      btn.onclick = () => {
        toSel.value = btn.dataset.csConvPick;
        renderClinicalSuiteTaperPane();
      };
    });

    renderPetHyperbolicWidget();
  }

  function getOrganProfileOrFallback(cid) {
    const cur = ORGAN_BY_CID.get(cid);
    if (cur) return { ...cur, is_curated: true };
    const c = C[compById.get(cid)];
    if (!c) return null;
    const pk = c.pk || {};
    const fe = pk.fe != null ? +pk.fe : (pk.ren ? 0.65 : 0.18);
    const pb = pk.pb && pk.pb[0] != null ? +pk.pb[0] : 75;
    const ba = pk.ba && pk.ba[0] != null ? +pk.ba[0] : 60;
    const mw = c.pr && c.pr[0] != null ? +c.pr[0] : 320;
    const compModel = (G.pkCompartmentModels || {})[cid];
    const vd = compModel ? +compModel.vss_l_kg : (c.pr && c.pr[1] > 3 ? 2.4 : 0.9);
    const dialyzable = mw < 500 && pb < 80 && vd < 1.0;
    const ehRatio = ba < 35 ? 0.72 : (ba > 75 ? 0.15 : 0.42);
    const ehClass = ehRatio >= 0.65 ? "high_eh" : (pb >= 85 ? "low_eh_high_binding" : "low_eh_low_binding");
    return {
      compound_id: cid,
      name: c.n,
      fe_unchanged: +fe.toFixed(2),
      toxic_renal_metabolites: fe >= 0.5 ? "Dominujące wydalanie nerkowe — ryzyko kumulacji przy eGFR <45 ml/min." : "Brak skatalogowanych nefro-/neurotoksycznych metabolitów nerkowych w bazie referencyjnej.",
      egfr_60_30: fe >= 0.5 ? "Redukcja dawki o 25–50% lub wydłużenie odstępu." : "Zwykle 100% dawki.",
      egfr_30_15: fe >= 0.5 ? "Redukcja dawki o 50–75%." : "Ostrożnie — monitoruj odpowiedź kliniczną.",
      egfr_under_15: fe >= 0.5 ? "Wymagana redukcja o ≥75% i korekta okołodializacyjna." : "100% lub ostrożna redukcja o 25%.",
      ihd_removed_pct: dialyzable ? "30–50% (estymacja: MW <500 Da, niskie PB i Vd)" : "<10% (NIE ulega dializie — wysokie wiązanie z białkami lub duża objętość dystrybucji Vd)",
      post_hd_supplement: dialyzable ? "Rozważ dawkę uzupełniającą po hemodializie." : "NIE wymaga dawki po HD.",
      crrt_sieving: +((1 - pb / 100) * 0.9).toFixed(2),
      tox_dialysis_utility: dialyzable ? "UMIARKOWANA (korzystne parametry fizykochemiczne do eliminacji pozaustrojowej)." : "NISKA (wysoka sekwestracja tkankowa lub wiązanie z białkami osocza).",
      eh_class: ehClass,
      eh_ratio: ehRatio,
      child_pugh_a: ehClass === "high_eh" ? "Redukcja dawki p.o. o 25%." : "100% dawki.",
      child_pugh_b: ehClass === "high_eh" ? "Wysoki współczynnik ekstrakcji wątrobowej (EH) — zredukuj dawkę doustną o 50% (przeciek wrotno-układowy)." : "Redukcja dawki o 25–50%.",
      child_pugh_c: "Ostrożnie — redukcja dawki o ≥50% lub wybór leku o bezpośredniej glukuronidacji (LOT) / wydalaniu nerkowym.",
      is_curated: false
    };
  }

  function renderClinicalSuiteOrganPane() {
    const egfrSlider = $("csOrganEgfrSlider");
    const egfrVal = $("csOrganEgfrVal");
    const cpSel = $("csOrganChildPughSelect");
    const albSlider = $("csOrganAlbuminSlider");
    const albVal = $("csOrganAlbuminVal");
    const phenInput = $("csOrganPhenytoinInput");
    const quickSum = $("csOrganQuickSummary");
    const detailCard = $("csOrganDetailCard");
    const catalogWrap = $("csOrganCatalogTableWrap");
    if (!egfrSlider || !cpSel || !albSlider || !quickSum || !detailCard || !catalogWrap) return;

    const egfr = parseFloat(egfrSlider.value) || 45;
    const cpClass = cpSel.value || "B";
    const alb = parseFloat(albSlider.value) || 2.8;
    const measuredConc = parseFloat(phenInput?.value) || 12.0;

    if (egfrVal) egfrVal.textContent = `${egfr} mL/min/1.73m²`;
    if (albVal) albVal.textContent = `${alb.toFixed(1)} g/dL`;

    const prof = getOrganProfileOrFallback(csActiveCompoundId);
    if (!prof) return;

    // Giusti-Hayton equation: Q = 1 - fe * (1 - eGFR / 100)
    const gfrRatio = Math.min(1.0, egfr / 100);
    const giustiQ = Math.max(0.08, 1 - prof.fe_unchanged * (1 - gfrRatio));
    const doseFactorPct = Math.round(giustiQ * 100);
    const intervalMultiplier = +(1 / giustiQ).toFixed(2);

    // Winter-Tozer Phenytoin / acidic high-binding correction: C_corr = C_measured / (k * Alb + 0.1), k = 0.2 (or 0.1 if eGFR < 15)
    const wtK = egfr < 15 ? 0.1 : 0.2;
    const wtCorrected = +(measuredConc / (wtK * alb + 0.1)).toFixed(1);
    const fuShiftFactor = +(4.4 / alb).toFixed(2);

    const ehLabels = {
      high_eh: "Wysoki współczynnik ekstrakcji wątrobowej (EH > 0.7 — Flow-Limited: przeciek wrotno-układowy zwiększa biodostępność p.o. 2–5×!)",
      low_eh_high_binding: "Niska ekstrakcja wątrobowa, WYSOKIE wiązanie z białkami (EH < 0.3, PB > 85% — wrażliwy na hipoalbuminemię i mocznicę!)",
      low_eh_low_binding: "Niska ekstrakcja wątrobowa, niskie wiązanie z białkami (Capacity-Limited, zależny od aktywności CYP)",
      ugt_lot_preserved: "Reguła LOT (Bezpośrednia glukuronidacja UGT II fazy — klirens oszczędzony w marskości wątroby!)",
      renal_only: "Eliminacja wyłącznie nerkowa (Brak metabolizmu wątrobowego)"
    };

    quickSum.innerHTML = `
      <div style="background:var(--color-surface-offset);padding:10px 12px;border-radius:6px;border:1px solid var(--color-border);display:grid;gap:6px;font-size:12.5px">
        <div><b>Współczynnik Giusti-Haytona Q (${esc(prof.name)}):</b> <span style="color:var(--color-primary);font-weight:800;font-size:15px">${doseFactorPct}% dawki</span> (lub wydłużenie odstępu <b>${intervalMultiplier}×</b>)</div>
        <div><b>Korekta Wintera-Tozera (dla Alb = ${alb.toFixed(1)} g/dL${egfr < 15 ? " + mocznica k=0.1" : ""}):</b> Stężenie skorygowane = <b style="color:${wtCorrected > 20 ? "var(--color-error)" : "var(--color-primary)"}">${wtCorrected} mg/L</b> <small>(wzrost frakcji wolnej fu ~${fuShiftFactor}×)</small></div>
      </div>
    `;

    const egfrRec = egfr < 15 ? prof.egfr_under_15 : (egfr < 30 ? prof.egfr_30_15 : prof.egfr_60_30);
    const cpRec = cpClass === "C" ? prof.child_pugh_c : (cpClass === "B" ? prof.child_pugh_b : (cpClass === "A" ? prof.child_pugh_a : "100% dawki (prawidłowa funkcja wątroby)."));

    detailCard.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <b style="font-size:14px">${esc(prof.name)} — Profil Nerkowy, Wątrobowy i Dializacyjny ${prof.is_curated ? '<span class="tag ok" style="font-size:11px">Kuratorowany EXTRIP / ChPL</span>' : '<span class="tag" style="font-size:11px">Model Fizykochemiczny ADME</span>'}</b>
        <button class="btn btn-sm btn-gold" id="csOrganLaunchPkBtn">Eksportuj eGFR (${egfr} ml/min) do Symulatora PK ↗</button>
      </div>
      <div class="pv-banner ${prof.toxic_renal_metabolites.includes("KRYTYCZNY") ? "pv-banner-critical" : "pv-banner-warning"}" style="margin:4px 0">
        <b>1. Nefrofarmakologia (fe = ${(prof.fe_unchanged * 100).toFixed(0)}%, eGFR = ${egfr} ml/min):</b> ${esc(egfrRec)}
        <div style="margin-top:3px;font-size:12px"><b>Metabolity nerkowe:</b> ${esc(prof.toxic_renal_metabolites)}</div>
      </div>
      <div class="pv-banner pv-banner-info" style="margin:4px 0">
        <b>2. Dializowalność (IHD / CRRT — współczynnik przesiewania S ≈ ${prof.crrt_sieving}):</b> Usunięcie podczas 4h HD: <b>${esc(prof.ihd_removed_pct)}</b> · Dawka po HD: <b>${esc(prof.post_hd_supplement)}</b>
        <div style="margin-top:3px;font-size:12px"><b>Przydatność w ostrym zatruciu (EXTRIP):</b> ${esc(prof.tox_dialysis_utility)}</div>
      </div>
      <div class="pv-banner ${cpClass === "C" ? "pv-banner-critical" : "pv-banner-warning"}" style="margin:4px 0">
        <b>3. Hepatofarmakologia (Child-Pugh ${esc(cpClass)}, EH ≈ ${prof.eh_ratio}):</b> ${esc(cpRec)}
        <div style="margin-top:3px;font-size:12px"><b>Klasa ekstrakcji wątrobowej:</b> ${esc(ehLabels[prof.eh_class] || prof.eh_class)}</div>
      </div>
    `;

    const pkBtn = $("csOrganLaunchPkBtn");
    if (pkBtn) {
      pkBtn.onclick = () => {
        closeClinicalSuiteModal();
        openPkSimulatorSplitPane(csActiveCompoundId, null, { egfr: Math.max(15, Math.min(120, Math.round(egfr / 5) * 5)) });
      };
    }

    catalogWrap.innerHTML = `
      <table class="cs-table">
        <thead>
          <tr>
            <th>Lek</th>
            <th>fe (Nerkowe)</th>
            <th>Zalecenie dla eGFR ${egfr} ml/min</th>
            <th>Usunięcie w HD / Suplementacja</th>
            <th>Klasa Wątrobowa (Child-Pugh ${esc(cpClass)})</th>
          </tr>
        </thead>
        <tbody>
          ${(ORGAN_DATA.profiles || []).map((p) => {
            const r = egfr < 15 ? p.egfr_under_15 : (egfr < 30 ? p.egfr_30_15 : p.egfr_60_30);
            const h = cpClass === "C" ? p.child_pugh_c : (cpClass === "B" ? p.child_pugh_b : (cpClass === "A" ? p.child_pugh_a : "100% dawki"));
            return `
              <tr style="${p.compound_id === csActiveCompoundId ? "background:var(--color-surface-offset)" : ""}">
                <td><button class="pv-entity-link" data-cs-organ-pick="${esc(p.compound_id)}">${esc(p.name)}</button></td>
                <td><b>${(p.fe_unchanged * 100).toFixed(0)}%</b></td>
                <td><small>${esc(r)}</small></td>
                <td><b>${esc(p.ihd_removed_pct)}</b><br><small>${esc(p.post_hd_supplement)}</small></td>
                <td><small>${esc(h)}</small></td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    `;

    catalogWrap.querySelectorAll("[data-cs-organ-pick]").forEach((btn) => {
      btn.onclick = () => {
        csActiveCompoundId = btn.dataset.csOrganPick;
        const gSel = $("csGlobalCompoundSelect");
        if (gSel) gSel.value = csActiveCompoundId;
        renderClinicalSuiteOrganPane();
      };
    });
  }

  function populateCsGlobalCompoundSelect() {
    const gSel = $("csGlobalCompoundSelect");
    if (!gSel || gSel.options.length > 0) return;
    const priorityIds = new Set([
      ...(PGX_DATA.cpic_guidelines || []).map((g) => g.compound_id),
      ...(ORGAN_DATA.profiles || []).map((p) => p.compound_id),
      ...(CONV_DATA.pet_hyperbolic_models || []).map((m) => m.compound_id)
    ]);
    const sorted = [...C].sort((a, b) => (priorityIds.has(b.id) - priorityIds.has(a.id)) || a.n.localeCompare(b.n));
    gSel.innerHTML = sorted.map((c) => `<option value="${esc(c.id)}">${priorityIds.has(c.id) ? "★ " : ""}${esc(c.n)}</option>`).join("");
  }

  function switchClinicalSuiteTab(tab) {
    if (["pgx", "taper", "organ"].includes(tab)) csActiveTab = tab;
    ["pgx", "taper", "organ"].forEach((t) => {
      const btn = $(`csTab${t.charAt(0).toUpperCase() + t.slice(1)}Btn`);
      const pane = $(`csPane${t.charAt(0).toUpperCase() + t.slice(1)}`);
      if (btn) {
        btn.classList.toggle("active", t === csActiveTab);
        btn.setAttribute("aria-selected", t === csActiveTab ? "true" : "false");
      }
      if (pane) pane.classList.toggle("active", t === csActiveTab);
    });
    if (csActiveTab === "pgx") renderClinicalSuitePgxPane();
    else if (csActiveTab === "taper") renderClinicalSuiteTaperPane();
    else if (csActiveTab === "organ") renderClinicalSuiteOrganPane();
  }

  function openClinicalSuiteModal(tab = null, compoundId = null) {
    const modal = $("clinicalSuiteModal");
    if (!modal) return;
    populateCsGlobalCompoundSelect();
    if (compoundId && compById.has(compoundId)) {
      csActiveCompoundId = compoundId;
    } else if (state.sel && state.sel.type === "compound") {
      csActiveCompoundId = C[state.sel.i].id;
    }
    const gSel = $("csGlobalCompoundSelect");
    if (gSel) gSel.value = csActiveCompoundId;
    activeClinicalSuiteOpen = true;
    openDialog(modal);
    switchClinicalSuiteTab(tab || csActiveTab);
  }

  function closeClinicalSuiteModal() {
    const modal = $("clinicalSuiteModal");
    if (modal) closeDialog(modal);
    activeClinicalSuiteOpen = false;
    syncWorkspaceModeToOpenModals();
  }

  const csModalEl = $("clinicalSuiteModal");
  if (csModalEl) {
    csModalEl.onclick = (e) => {
      if (e.target === csModalEl) closeClinicalSuiteModal();
    };
  }
  const csCloseBtn = $("clinicalSuiteModalClose");
  if (csCloseBtn) csCloseBtn.onclick = closeClinicalSuiteModal;
  ["pgx", "taper", "organ"].forEach((t) => {
    const btn = $(`csTab${t.charAt(0).toUpperCase() + t.slice(1)}Btn`);
    if (btn) btn.onclick = () => switchClinicalSuiteTab(t);
  });
  const csGlobalSel = $("csGlobalCompoundSelect");
  if (csGlobalSel) {
    csGlobalSel.onchange = () => {
      csActiveCompoundId = csGlobalSel.value;
      switchClinicalSuiteTab(csActiveTab);
    };
  }
  const csPgxResetBtn = $("csPgxResetBtn");
  if (csPgxResetBtn) {
    csPgxResetBtn.onclick = () => {
      Object.keys(PGX_DATA.genes || {}).forEach((g) => { patientPgxProfile[g] = "NM"; });
      savePatientPgxProfile();
      renderClinicalSuitePgxPane();
      showToast("Zresetowano profil farmakogenetyczny do Wild-Type (NM).", "info");
    };
  }
  ["csConvClassSelect", "csConvFromSelect", "csConvFromDose", "csConvToSelect", "csOpioidCrossTolSlider"].forEach((id) => {
    const el = $(id);
    if (el) el.oninput = () => renderClinicalSuiteTaperPane();
  });
  ["csPetModelSelect", "csPetStartDose", "csPetStepOcc"].forEach((id) => {
    const el = $(id);
    if (el) el.oninput = () => renderPetHyperbolicWidget();
  });
  ["csOrganEgfrSlider", "csOrganChildPughSelect", "csOrganAlbuminSlider", "csOrganPhenytoinInput"].forEach((id) => {
    const el = $(id);
    if (el) el.oninput = () => renderClinicalSuiteOrganPane();
  });
  const csCopyReportBtn = $("csCopyReportBtn");
  if (csCopyReportBtn) {
    csCopyReportBtn.onclick = () => {
      const compObj = C[compById.get(csActiveCompoundId)];
      const prof = getOrganProfileOrFallback(csActiveCompoundId);
      const md = [
        `# Raport Kalkulatorów Klinicznych Pharma-vault: ${compObj ? compObj.n : csActiveCompoundId}`,
        `- **Profil CPIC / Fenokonwersja CYP2D6 / CYP2C19:** ${computePhenoconversionForGene("CYP2D6").functionalPheno} / ${computePhenoconversionForGene("CYP2C19").functionalPheno}`,
        prof ? `- **Nefrofarmakologia (fe=${(prof.fe_unchanged * 100).toFixed(0)}%):** ${prof.egfr_60_30}` : "",
        prof ? `- **Dializowalność (IHD):** ${prof.ihd_removed_pct} (${prof.post_hd_supplement})` : "",
        prof ? `- **Hepatofarmakologia (Child-Pugh B):** ${prof.child_pugh_b}` : ""
      ].filter(Boolean).join("\n");
      navigator.clipboard?.writeText(md);
      showToast("Skopiowano raport kliniczny Markdown do schowka.", "success");
    };
  }

  document.addEventListener("keydown", (e) =>{
    if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      if (cmdPaletteOpen) closeCmdPalette();
      else openCmdPalette();
      return;
    }

    if (e.key === "Escape") {
      if (cmdPaletteOpen) { closeCmdPalette(); return; }
      if (activeClinicalSuiteOpen) { closeClinicalSuiteModal(); return; }
      if (activeNotesModalOpen) { closeNotesModal(); return; }
      if (activeChemspaceModalOpen) { closeChemspaceModal(); return; }
      if (activeModalCompound) { closeChemLightBox(); return; }
      if (activeComparatorIndices) { closeComparator(); return; }
      if (activeIndicationsModalOpen) { closeIndicationsModal(); return; }
      if (activeStruct3DModalOpen) { closeStruct3DModal(); return; }
      if (activeEvidenceModalOpen) { closeEvidenceModal(); return; }
      if (activeMetaboliteQuery != null) { closeMetaboliteModal(); return; }
      if (state.edgeFilters.popoverOpen) { toggleEdgesPopover(false); return; }
      if (activeAnalogsQuery != null) { closeAnalogsModal(); return; }
      if (activeDossierMode) { closeDossierModal(); return; }
      if (activeModalTarget) { closeTargetModal(); return; }
      if (state.stackDrawerOpen) { toggleStackDrawer(false); return; }
      if (state.pathway && state.pathway.id) { resetPathwayIsolation(); return; }
      select(null);
      return;
    }
    const tag = document.activeElement ? document.activeElement.tagName : "";
    if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
    if (e.key === "r" || e.key === "R") {
      e.preventDefault();
      if (activeEvidenceModalOpen) closeEvidenceModal();
      else setWorkspaceMode("evidence");
      return;
    }
    if (e.key === "v" || e.key === "V") {
      e.preventDefault();
      if (activeStruct3DModalOpen) closeStruct3DModal();
      else setWorkspaceMode("structure3d");
      return;
    }
    if (e.key === "i" || e.key === "I") {
      e.preventDefault();
      if (activeIndicationsModalOpen) closeIndicationsModal();
      else setWorkspaceMode("indications");
      return;
    }
    if (e.key === "3" && !e.ctrlKey && !e.metaKey && !e.altKey && (!state.sel || state.sel.type !== "compound")) {
      e.preventDefault();
      if (activeStruct3DModalOpen) closeStruct3DModal();
      else setWorkspaceMode("structure3d");
      return;
    }
    if (e.key === "e" || e.key === "E") {
      e.preventDefault();
      toggleEdgesPopover();
      return;
    }
    if (e.key === "a" || e.key === "A") {
      if (state.sel && state.sel.type === "compound") {
        e.preventDefault();
        if (activeAnalogsQuery != null) closeAnalogsModal();
        else openAnalogsModal(state.sel.i);
        return;
      }
    }
    if (e.key === "m" || e.key === "M") {
      if (state.sel && state.sel.type === "compound") {
        e.preventDefault();
        if (activeMetaboliteQuery != null) closeMetaboliteModal();
        else setWorkspaceMode("metabolism");
        return;
      }
    }
    if (e.key === "c" || e.key === "C") {
      e.preventDefault();
      if (activeComparatorIndices) closeComparator();
      else openComparator();
      return;
    }
    if (e.key === "p" || e.key === "P") {
      e.preventDefault();
      if (activeDossierMode) {
        closeDossierModal();
      } else {
        setWorkspaceMode("dossier");
      }
      return;
    }
    if (e.key === "s" || e.key === "S") {
      e.preventDefault();
      toggleStackDrawer();
      return;
    }
    if (e.key === "w" || e.key === "W") {
      e.preventDefault();
      if (state.pathway && state.pathway.id) {
        selectPathway(state.pathway.id, state.pathway.mode === "solo" ? "spotlight" : "solo");
      } else if (PATHWAY_SYSTEMS.length) {
        selectPathway(PATHWAY_SYSTEMS[0].id, "spotlight");
      }
      return;
    }
    if (e.key === "/") { e.preventDefault(); q.focus(); return; }
    if ((e.key === "n" || e.key === "N" || e.key === "0") && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      if (activeNotesModalOpen) closeNotesModal();
      else setWorkspaceMode("notes");
      return;
    }
    if ((e.key === "k" || e.key === "K") && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      if (activeClinicalSuiteOpen) closeClinicalSuiteModal();
      else setWorkspaceMode("clinical-suite");
      return;
    }
    if (e.key === "9" && !e.ctrlKey && !e.metaKey && !e.altKey && (!state.sel || state.sel.type !== "compound")) {
      e.preventDefault();
      if (activeChemspaceModalOpen) closeChemspaceModal();
      else setWorkspaceMode("chemspace");
      return;
    }
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
    } else {
      const modes = ["graph", "dossier", "stack", "evidence", "indications", "structure3d", "metabolism", "transporters", "chemspace"];
      if (e.key >= "1" && e.key <= "9") {
        const nextMode = modes[+e.key - 1];
        if (nextMode) setWorkspaceMode(nextMode);
      }
    }
  });

  const evidenceBtn = $("evidenceBtn");
  if (evidenceBtn) evidenceBtn.onclick = () =>openEvidenceModal();
  const struct3DBtn = $("struct3DBtn");
  if (struct3DBtn) struct3DBtn.onclick = () =>openStruct3DModal();
  const evidenceCohortResetBtn = $("evidenceCohortResetBtn");
  if (evidenceCohortResetBtn) {
    evidenceCohortResetBtn.onclick = () =>{
      state.evidenceCohort = null;
      updateEvidenceCohortIndicator();
      stats();
      search();
      draw();
    };
  }
  const wireStatBox = (id, title, onClick) =>{
    const el = $(id);
    if (el && el.parentElement) {
      const box = el.parentElement;
      box.setAttribute("role", "button");
      box.setAttribute("tabindex", "0");
      box.title = title;
      box.onclick = onClick;
    }
  };
  wireStatBox("sAll", "Wyczyść wszystkie filtry i pokaż całą bazę", () =>{
    state.clusters = new Set(G.clusters.map((_, i) =>i));
    state.hub = null; state.pkOnly = false; state.cypOnly = false; state.ver = ""; state.hlBin = null; state.stackOnly = false; state.evidenceCohort = null;
    state.adv = { cyp: "", ro5: "", prop: "", phase: "" };
    if ($("hub")) $("hub").value = "";
    if ($("pkOnly")) $("pkOnly").checked = false;
    if ($("cypOnly")) $("cypOnly").checked = false;
    if ($("ver")) $("ver").value = "";
    if (advCyp) advCyp.value = "";
    if (advRo5) advRo5.value = "";
    if (advProp) advProp.value = "";
    if (advPhase) advPhase.value = "";
    updateAdvFilterUI();
    updateEvidenceCohortIndicator();
    clBox.querySelectorAll(".cl").forEach((x) =>{ x.classList.remove("off"); x.setAttribute("aria-pressed", "true"); });
    stats(); search(); fit();
  });
  wireStatBox("sVis", "Wyśrodkuj widok na widocznych substancjach", () =>fit());
  wireStatBox("sPk", "Przełącz filtr: tylko substancje z danymi PK", () =>{
    const cb = $("pkOnly");
    if (cb) { cb.checked = !cb.checked; cb.dispatchEvent(new Event("change")); }
  });
  wireStatBox("sHl", "Filtruj wg rozkładu okresu półtrwania (t½)", () =>{
    const firstBar = document.querySelector("#hist .bar");
    if (firstBar) firstBar.focus();
  });
  wireStatBox("sTg", "Przełącz filtr: substancje z celem molekularnym ChEMBL", () =>{
    const verSel = $("ver");
    if (verSel) { verSel.value = verSel.value === "chembl" ? "" : "chembl"; verSel.dispatchEvent(new Event("change")); }
  });
  wireStatBox("sFda", "Otwórz badania kliniczne i etykiety FDA (R)", () =>openEvidenceModal("fda:consistent"));
  wireStatBox("sEma", "Otwórz badania kliniczne i etykiety EMA (R)", () =>openEvidenceModal("ema:consistent"));
  wireStatBox("sId", "Otwórz eksplorator badań klinicznych (R)", () =>openEvidenceModal());

  const stageAuditBtn = $("stageAuditBtn");
  if (stageAuditBtn) stageAuditBtn.onclick = openDdiAuditInSplitPane;
  const stageCompareBtn = $("stageCompareBtn");
  if (stageCompareBtn) stageCompareBtn.onclick = () =>openComparator();

  $("reset").onclick = () =>{
    if (state.evidenceCohort) {
      state.evidenceCohort = null;
      updateEvidenceCohortIndicator();
      stats();
      search();
    }
    fit();
  };
  $("theme").onclick = () =>{ const r = document.documentElement; r.dataset.theme = r.dataset.theme === "dark" ? "light" : "dark"; $("theme").setAttribute("aria-pressed", r.dataset.theme === "light"); draw(); };
  if (matchMedia("(prefers-color-scheme: light)").matches) { document.documentElement.dataset.theme = "light"; $("theme").setAttribute("aria-pressed", "true"); }

  // ---------- Toast Notification System
  function showToast(message, type = "info") {
    const container = $("toastContainer");
    if (!container) return;
    const t = document.createElement("div");
    t.className = `toast toast-${type}`;
    t.setAttribute("role", "status");
    let icon = "ℹ";
    if (type === "success") icon = "OK";
    else if (type === "warning") icon = "";
    else if (type === "error") icon = "×";
    t.innerHTML = `<span style="font-weight:700">${icon}</span><span>${esc(message)}</span>`;
    container.appendChild(t);
    setTimeout(() =>{
      t.classList.add("out");
      setTimeout(() =>t.remove(), 250);
    }, 2500);
  }

  // ---------- Relational Breadcrumbs Bar
  function updateBreadcrumbs(h) {
    const rootEl = $("bcRoot");
    const clusterEl = $("bcCluster");
    const compEl = $("bcCompound");
    const shieldEl = $("bcShieldScore");
    if (!rootEl || !clusterEl || !compEl) return;

    if (!h) {
      clusterEl.textContent = "Wszystkie klastry";
      clusterEl.className = "bc-item";
      clusterEl.onclick = null;
      compEl.textContent = "Eksploracja grafu";
      compEl.className = "bc-item bc-active";
    } else if (h.type === "compound") {
      const c = C[h.i];
      const clName = c.c != null ? CL_PL[G.clusters[c.c].name] : "Inne";
      clusterEl.textContent = clName;
      clusterEl.className = "bc-item";
      clusterEl.onclick = () =>{
        if (c.c != null) {
          state.clusters.clear();
          state.clusters.add(c.c);
          updateClusterButtons();
          search();
          fit();
        }
      };
      compEl.textContent = `${c.n}`;
      compEl.className = "bc-item bc-active";
    } else if (h.type === "target") {
      const t = T[h.i];
      clusterEl.textContent = "Cel molekularny";
      clusterEl.className = "bc-item";
      clusterEl.onclick = null;
      compEl.textContent = `${t.n}`;
      compEl.className = "bc-item bc-active";
    } else if (h.type === "core") {
      const n = CORE[h.i];
      clusterEl.textContent = KIND_PL[n.kind] || "Hub";
      clusterEl.className = "bc-item";
      clusterEl.onclick = null;
      compEl.textContent = `${n.name}`;
      compEl.className = "bc-item bc-active";
    } else {
      const g = GR[h.i];
      clusterEl.textContent = CL_PL[G.clusters[g.c].name] || "Grupa";
      clusterEl.className = "bc-item";
      clusterEl.onclick = null;
      compEl.textContent = g.label;
      compEl.className = "bc-item bc-active";
    }

    if (shieldEl) {
      const risk = computePolypharmacyScore([...state.stack].map((i) =>C[i]).filter(Boolean));
      shieldEl.textContent = `Ryzyko DDI: ${risk.score}/100 (${risk.statusText})`;
      shieldEl.style.color = risk.score >50 ? "var(--color-error)" : (risk.score >25 ? "var(--color-warning)" : "var(--color-success)");
    }
  }

  // ---------- Command Palette & Quick Search (Cmd+K / Ctrl+K)
  let cmdPaletteOpen = false;
  let cmdSelectedIdx = 0;
  let cmdCurrentResults = [];

  function openCmdPalette() {
    const modal = $("cmdPaletteBackdrop");
    const input = $("cmdPaletteInput");
    if (!modal || !input) return;
    cmdPaletteOpen = true;
    openDialog(modal);
    input.value = "";
    cmdSelectedIdx = 0;
    renderCmdPaletteResults("");
    input.focus();
  }

  function closeCmdPalette() {
    const modal = $("cmdPaletteBackdrop");
    if (modal) closeDialog(modal);
    cmdPaletteOpen = false;
  }

  function renderCmdPaletteResults(q) {
    const list = $("cmdPaletteList");
    if (!list) return;
    const query = (q || "").trim().toLowerCase();
    cmdCurrentResults = [];

    const actions = [
      { type: "action", name: "Karta & Monografia Kliniczna (Dossier A4)", badge: "Widok", run: () =>setWorkspaceMode("dossier") },
      { type: "action", name: "Mój Stack & Audyt Polipragmazji DDI", badge: "Widok", run: () =>setWorkspaceMode("stack") },
      { type: "action", name: "Badania Kliniczne & EBM", badge: "Widok", run: () =>setWorkspaceMode("evidence") },
      { type: "action", name: "Wskazania Terapeutyczne & ICD-10/11", badge: "Widok", run: () =>setWorkspaceMode("indications") },
      { type: "action", name: "Wizualizator Kompleksów 3D", badge: "Widok", run: () =>setWorkspaceMode("structure3d") },
      { type: "action", name: "Kaskady Biotransformacji & Metabolity", badge: "Widok", run: () =>setWorkspaceMode("metabolism") },
      { type: "action", name: "Transportery Błonowe & Bariera Krew-Mózg (BBB)", badge: "Widok", run: () =>setWorkspaceMode("transporters") },
      { type: "action", name: "9: Przestrzeń Chemiczna & Chemogenomika (2533 cząsteczki)", badge: "Widok", run: () =>setWorkspaceMode("chemspace") },
      { type: "action", name: "Notatki Kliniczne & Przypadki (Med-Pharm Vault)", badge: "Widok (N)", run: () =>setWorkspaceMode("notes") },
      { type: "action", name: "Kalkulatory Kliniczne: CPIC PGx & Fenokonwersja", badge: "Kalkulator (K)", run: () =>{ setWorkspaceMode("clinical-suite", false); openClinicalSuiteModal("pgx"); } },
      { type: "action", name: "Kalkulatory Kliniczne: Konwersje Równoważników & Tapering Hiperboliczny PET", badge: "Kalkulator (K)", run: () =>{ setWorkspaceMode("clinical-suite", false); openClinicalSuiteModal("taper"); } },
      { type: "action", name: "Kalkulatory Kliniczne: Nefro-/Hepatofarmakologia & Dializowalność (HD/CRRT)", badge: "Kalkulator (K)", run: () =>{ setWorkspaceMode("clinical-suite", false); openClinicalSuiteModal("organ"); } },
      { type: "action", name: "Utwórz nową notatkę HTML lub Przypadek Kliniczny", badge: "Notatki", run: () =>openNotesModal(null, (state.sel && state.sel.type === "compound") ? C[state.sel.i] : null) },
      { type: "action", name: "Symulator PK 2-Kompartmentowy C(t) (CYP & eGFR)", badge: "Symulator", run: () =>openPkSimulatorSplitPane("modafinil-compound") },
      { type: "action", name: "Radar Powinowactwa Receptorowego OUN (Ki / pKi)", badge: "Narzędzie", run: () =>openReceptorRadarSplitPane("clozapine-compound") },
      { type: "action", name: "Toksykologia Molekularna & eDISH (Hy's Law)", badge: "Narzędzie", run: () =>openToxicologySplitPane() },
      { type: "action", name: "Interakcje Lek-Żywność & Nutraceutyki (FDI)", badge: "Dieta", run: () =>openDdiAuditInSplitPane() },
      { type: "action", name: "Porównywarka Leków Head-to-Head", badge: "Narzędzie", run: () =>openComparator() },
      { type: "action", name: "Eksplorator Analogów Chemicznych & Bioizosterów", badge: "Narzędzie", run: () =>openAnalogsModal((state.sel && state.sel.type === "compound") ? state.sel.i : 0) },
      { type: "action", name: "Filtry Krawędzi Semantycznych Grafu", badge: "Graf", run: () =>toggleEdgesPopover(true) },
      { type: "action", name: "Otwórz Biomolecular Structure Viewer (Mol*)", badge: "Sidecar 3D", run: () =>window.open("sidecar://biomolecular-structure-viewer", "_blank") },
      { type: "action", name: "Widok całości grafu (Reset kamery)", badge: "Nawigacja", run: () =>$("reset").click() },
      { type: "action", name: "Przełącz motyw (jasny / ciemny)", badge: "Motyw", run: () =>$("theme").click() }
    ];

    if (!query) {
      cmdCurrentResults = [...actions];
      const pop = [0, 1, 2, 3, 4].filter((i) =>C[i]).map((i) =>({ type: "compound", c: C[i] }));
      cmdCurrentResults.push(...pop);
    } else {
      actions.forEach((act) =>{
        if (act.name.toLowerCase().includes(query) || act.badge.toLowerCase().includes(query)) {
          cmdCurrentResults.push(act);
        }
      });
      let cMatches = 0;
      for (let i = 0; i < C.length && cMatches < 15; i++) {
        const c = C[i];
        const grpLabel = (GR[c.g] && GR[c.g].label) ? GR[c.g].label.toLowerCase() : "";
        if (c.hay.includes(query) || grpLabel.includes(query)) {
          cmdCurrentResults.push({ type: "compound", c });
          cMatches++;
        }
      }
      let tMatches = 0;
      for (let i = 0; i < T.length && tMatches < 6; i++) {
        const t = T[i];
        if (t.n.toLowerCase().includes(query) || t.id.toLowerCase().includes(query)) {
          cmdCurrentResults.push({ type: "target", t, idx: i });
          tMatches++;
        }
      }
      const allNotes = getAllClinicalNotes();
      let nMatches = 0;
      for (let i = 0; i < allNotes.length && nMatches < 6; i++) {
        const n = allNotes[i];
        const nhay = (n.title + " " + (n.subtitle || "") + " " + (n.tags || []).join(" ")).toLowerCase();
        if (nhay.includes(query)) {
          cmdCurrentResults.push({ type: "note", note: n });
          nMatches++;
        }
      }
    }

    if (cmdSelectedIdx >= cmdCurrentResults.length) cmdSelectedIdx = 0;

    if (!cmdCurrentResults.length) {
      list.innerHTML = `<div style="padding:16px;text-align:center;color:var(--color-text-muted);font-size:var(--text-xs)">Brak wyników dla „${esc(query)}”.</div>`;
      return;
    }

    list.innerHTML = cmdCurrentResults.map((item, idx) =>{
      const isSel = idx === cmdSelectedIdx;
      if (item.type === "action") {
        return `<button class="cmd-palette-item ${isSel ? "selected" : ""}" data-cmd-idx="${idx}" role="option" aria-selected="${isSel}">
          <span>${esc(item.name)}</span>
          <span class="cmd-palette-badge">${esc(item.badge)}</span>
        </button>`;
      } else if (item.type === "compound") {
        const c = item.c;
        const clName = c.c != null ? CL_PL[G.clusters[c.c].name] : "";
        const gLabel = GR[c.g] ? GR[c.g].label : "";
        return `<button class="cmd-palette-item ${isSel ? "selected" : ""}" data-cmd-idx="${idx}" role="option" aria-selected="${isSel}">
          <span><b>${esc(c.n)}</b> <small style="color:var(--color-text-muted);font-size:13px">${esc(gLabel)}</small></span>
          <span class="cmd-palette-badge">${esc(clName)}</span>
        </button>`;
      } else if (item.type === "target") {
        const t = item.t;
        return `<button class="cmd-palette-item ${isSel ? "selected" : ""}" data-cmd-idx="${idx}" role="option" aria-selected="${isSel}">
          <span><b>${esc(t.n)}</b><small style="color:var(--color-text-muted);font-size:13px">${esc(t.ty || "")}</small></span>
          <span class="cmd-palette-badge">ChEMBL</span>
        </button>`;
      } else if (item.type === "note") {
        const n = item.note;
        const catMeta = NOTE_CATEGORY_META[n.category] || NOTE_CATEGORY_META.html_note;
        return `<button class="cmd-palette-item ${isSel ? "selected" : ""}" data-cmd-idx="${idx}" role="option" aria-selected="${isSel}">
          <span><b>${esc(n.title)}</b></span>
          <span class="cmd-palette-badge">${esc(catMeta.label)}</span>
        </button>`;
      }
    }).join("");

    list.querySelectorAll(".cmd-palette-item").forEach((btn) =>{
      btn.onclick = () =>{
        const idx = +btn.dataset.cmdIdx;
        executeCmdPaletteItem(idx);
      };
    });
  }

  function executeCmdPaletteItem(idx) {
    const item = cmdCurrentResults[idx];
    if (!item) return;
    closeCmdPalette();
    if (item.type === "action") {
      item.run();
    } else if (item.type === "compound") {
      select({ type: "compound", i: item.c.i }, true);
    } else if (item.type === "target") {
      openTargetModal(item.idx);
    } else if (item.type === "note") {
      setWorkspaceMode("notes", false);
      location.hash = `#/notes/${item.note.id}`;
      openNotesModal(item.note.id);
    }
  }

  // ---------- Workspace Navigation & Modes
  const modeGraphBtn = $("modeGraphBtn");
  const modeDossierBtn = $("modeDossierBtn");
  const modeStackBtn = $("modeStackBtn");
  const modeEvidenceBtn = $("modeEvidenceBtn");
  const modeIndicationsBtn = $("modeIndicationsBtn");
  const modeStructure3DBtn = $("modeStructure3DBtn");
  const modeMetabolismBtn = $("modeMetabolismBtn");
  const modeTransportersBtn = $("modeTransportersBtn");
  const modeChemspaceBtn = $("modeChemspaceBtn");
  const modeNotesBtn = $("modeNotesBtn");
  const modeClinicalSuiteBtn = $("modeClinicalSuiteBtn");
  const cmdPaletteBtn = $("cmdPaletteBtn");
  const globalThemeBtn = $("globalThemeBtn");

  const ALL_MODE_BUTTONS = [
    modeGraphBtn,
    modeDossierBtn,
    modeStackBtn,
    modeEvidenceBtn,
    modeIndicationsBtn,
    modeStructure3DBtn,
    modeMetabolismBtn,
    modeTransportersBtn,
    modeChemspaceBtn,
    modeNotesBtn,
    modeClinicalSuiteBtn
  ].filter(Boolean);

  let currentWorkspaceMode = "graph";
  let isClosingOverlays = false;

  function closeAllWorkspaceOverlays() {
    isClosingOverlays = true;
    try {
      toggleStackDrawer(false);
      closeEvidenceModal();
      closeIndicationsModal();
      closeStruct3DModal();
      closeDossierModal();
      closeMetaboliteModal();
      closeChemspaceModal();
      closeNotesModal();
      closeClinicalSuiteModal();
      closeComparator();
      closeAnalogsModal();
      closeTargetModal();
      closeChemLightBox();
      toggleEdgesPopover(false);
      if (typeof closeTransporterDock === "function") closeTransporterDock();
      else closeSplitPane();
    } finally {
      isClosingOverlays = false;
    }
  }

  function setWorkspaceMode(mode, triggerAction = true) {
    currentWorkspaceMode = mode;
    ALL_MODE_BUTTONS.forEach((b) =>{
      const isAct = b.dataset.mode === mode;
      b.classList.toggle("active", isAct);
      b.setAttribute("aria-selected", isAct ? "true" : "false");
      b.tabIndex = isAct ? 0 : -1;
    });

    if (!triggerAction) return;

    closeAllWorkspaceOverlays();

    if (mode === "graph") {
      location.hash = "#/graph";
    } else if (mode === "dossier") {
      location.hash = "#/dossier";
      if (state.sel && state.sel.type === "compound") {
        openDossierModal("single", state.sel.i);
      } else if (state.stack.size >0) {
        openDossierModal("stack", [...state.stack]);
      } else {
        openDossierModal("single", 0);
      }
    } else if (mode === "stack") {
      location.hash = "#/stack";
      toggleStackDrawer(true);
    } else if (mode === "evidence") {
      location.hash = "#/evidence";
      openEvidenceModal();
    } else if (mode === "indications") {
      location.hash = "#/indications";
      openIndicationsModal();
    } else if (mode === "structure3d") {
      location.hash = "#/3d";
      openStruct3DModal();
    } else if (mode === "metabolism") {
      location.hash = "#/metabolism";
      const targetC = (state.sel && state.sel.type === "compound") ? state.sel.i : (state.stack.size >0 ? [...state.stack][0] : 0);
      openMetaboliteModal(targetC);
    } else if (mode === "transporters") {
      location.hash = "#/transporters";
      const targetCid = (state.sel && state.sel.type === "compound") ? C[state.sel.i].id : (state.stack.size >0 ? C[[...state.stack][0]].id : "loperamide-compound");
      openTransporterDock(targetCid);
    } else if (mode === "chemspace") {
      location.hash = "#/chemspace";
      const targetCid = (state.sel && state.sel.type === "compound") ? C[state.sel.i].id : (state.stack.size >0 ? C[[...state.stack][0]].id : "diazepam-compound");
      openChemspaceView(targetCid);
    } else if (mode === "notes") {
      location.hash = "#/notes";
      openNotesModal();
    } else if (mode === "clinical-suite") {
      location.hash = "#/clinical-suite";
      const targetCid = (state.sel && state.sel.type === "compound") ? C[state.sel.i].id : (state.stack.size >0 ? C[[...state.stack][0]].id : "codeine-compound");
      openClinicalSuiteModal(null, targetCid);
    }
  }

  function syncWorkspaceModeToOpenModals() {
    if (isClosingOverlays) return;
    if (activeEvidenceModalOpen) setWorkspaceMode("evidence", false);
    else if (activeIndicationsModalOpen) setWorkspaceMode("indications", false);
    else if (activeStruct3DModalOpen) setWorkspaceMode("structure3d", false);
    else if (activeDossierMode) setWorkspaceMode("dossier", false);
    else if (activeMetaboliteQuery != null) setWorkspaceMode("metabolism", false);
    else if (activeTransporterDockOpen) setWorkspaceMode("transporters", false);
    else if (activeChemspaceModalOpen) setWorkspaceMode("chemspace", false);
    else if (activeNotesModalOpen) setWorkspaceMode("notes", false);
    else if (activeClinicalSuiteOpen) setWorkspaceMode("clinical-suite", false);
    else if (state.stackDrawerOpen) setWorkspaceMode("stack", false);
    else setWorkspaceMode("graph", false);
  }

  ALL_MODE_BUTTONS.forEach((b, i) =>{
    b.onclick = () =>setWorkspaceMode(b.dataset.mode);
    b.addEventListener("keydown", (e) =>{
      let targetIdx = null;
      if (e.key === "ArrowRight") targetIdx = (i + 1) % ALL_MODE_BUTTONS.length;
      else if (e.key === "ArrowLeft") targetIdx = (i - 1 + ALL_MODE_BUTTONS.length) % ALL_MODE_BUTTONS.length;
      if (targetIdx !== null) {
        e.preventDefault();
        ALL_MODE_BUTTONS[targetIdx].focus();
        setWorkspaceMode(ALL_MODE_BUTTONS[targetIdx].dataset.mode);
      }
    });
  });

  if (globalThemeBtn) globalThemeBtn.onclick = () =>$("theme").click();

  if (cmdPaletteBtn) cmdPaletteBtn.onclick = openCmdPalette;
  const cmdPaletteModalEl = $("cmdPaletteBackdrop");
  if (cmdPaletteModalEl) {
    cmdPaletteModalEl.onclick = (e) =>{
      if (e.target === cmdPaletteModalEl) closeCmdPalette();
    };
  }
  const cmdPaletteInputEl = $("cmdPaletteInput");
  if (cmdPaletteInputEl) {
    cmdPaletteInputEl.addEventListener("input", (e) =>{
      cmdSelectedIdx = 0;
      renderCmdPaletteResults(e.target.value);
    });
    cmdPaletteInputEl.addEventListener("keydown", (e) =>{
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (cmdCurrentResults.length) {
          cmdSelectedIdx = (cmdSelectedIdx + 1) % cmdCurrentResults.length;
          renderCmdPaletteResults(cmdPaletteInputEl.value);
          const sel = $("cmdPaletteList").querySelector(".selected");
          if (sel) sel.scrollIntoView({ block: "nearest" });
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (cmdCurrentResults.length) {
          cmdSelectedIdx = (cmdSelectedIdx - 1 + cmdCurrentResults.length) % cmdCurrentResults.length;
          renderCmdPaletteResults(cmdPaletteInputEl.value);
          const sel = $("cmdPaletteList").querySelector(".selected");
          if (sel) sel.scrollIntoView({ block: "nearest" });
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        executeCmdPaletteItem(cmdSelectedIdx);
      }
    });
  }

  const bcRootEl = $("bcRoot");
  if (bcRootEl) bcRootEl.onclick = () =>{ select(null); search(); fit(); };
  const bcCompoundEl = $("bcCompound");
  if (bcCompoundEl) bcCompoundEl.onclick = () =>{ if (state.sel) select(state.sel, true); };
  const bcShieldMiniEl = $("bcShieldMini");
  if (bcShieldMiniEl) bcShieldMiniEl.onclick = openDdiAuditInSplitPane;

  document.addEventListener("keydown", (e) =>{
    if ((e.key === "Enter" || e.key === " ") && e.target && e.target.getAttribute && e.target.getAttribute("role") === "button" && e.target.tagName !== "BUTTON") {
      e.preventDefault();
      e.target.click();
    }
  });

  // ---------- Context Split Pane
  const splitPane = $("contextSplitPane");
  const splitBody = $("splitPaneBody");
  const splitTitle = $("splitPaneTitle");
  const splitSub = $("splitPaneSubtitle");
  const splitIcon = $("splitPaneIcon");
  const splitClose = $("splitPaneCloseBtn");
  const splitMax = $("splitPaneMaximizeBtn");

  function openSplitPane(icon, title, subtitle, contentHtml) {
    if (!splitPane) return;
    if (splitIcon) splitIcon.textContent = icon || "";
    if (splitTitle) splitTitle.textContent = title || "Analiza kontekstowa";
    if (splitSub) splitSub.textContent = subtitle || "";
    if (splitBody) splitBody.innerHTML = contentHtml || "";
    splitPane.style.display = "flex";
  }

  function closeSplitPane() {
    if (splitPane) splitPane.style.display = "none";
  }

  if (splitClose) splitClose.onclick = closeSplitPane;
  if (splitMax) splitMax.onclick = () =>splitPane.classList.toggle("maximized");

  // ---------- Pathway Systems Dock & Subgraph Navigation (v3.22.0)
  function selectPathway(pwId, mode = "spotlight", updateHash = true) {
    const pw = pathwayById.get(pwId);
    if (!pw) return;

    state.pathway.id = pwId;
    state.pathway.mode = (mode === "solo") ? "solo" : "spotlight";

    // Update chips in dock
    const chipsCont = $("pathwayChipsContainer");
    if (chipsCont) {
      chipsCont.querySelectorAll(".pathway-chip").forEach((btn) =>{
        btn.classList.toggle("active", btn.dataset.pwId === pwId);
      });
    }

    // Update mode buttons
    const spotBtn = $("pathwayModeSpotlight");
    const soloBtn = $("pathwayModeSolo");
    const resetBtn = $("pathwayResetBtn");
    if (spotBtn) spotBtn.classList.toggle("active", state.pathway.mode === "spotlight");
    if (soloBtn) soloBtn.classList.toggle("active", state.pathway.mode === "solo");
    if (resetBtn) resetBtn.style.display = "inline-flex";

    // Focus camera
    if (state.pathway.mode === "solo") {
      animateTo(0, 0, 1.15);
    } else {
      let sx = 0, sy = 0, count = 0;
      pw.targetIndices.forEach((ti) =>{ const t = T[ti]; if (t) { sx += t.x; sy += t.y; count++; } });
      pw.compoundIndices.forEach((ci) =>{ const c = C[ci]; if (c) { sx += c.x; sy += c.y; count++; } });
      if (count >0) {
        animateTo(sx / count, sy / count, 1.2);
      }
    }

    // Build rich Context Split-Pane Monograph
    const subtypesHtml = (pw.subtypes || []).map((s) =>`
      <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 10px;margin-bottom:6px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">
          <strong style="color:var(--color-primary);font-size:13px">${esc(s.name)}</strong>
          <span class="badge" style="background:var(--color-bg);font-size:13px;border:1px solid var(--color-border)">${esc(s.g_protein || s.coupling || "Białko G")}</span>
        </div>
        <div style="font-size:13px;color:var(--color-text-muted)">${esc(s.role || "")}</div>
      </div>
    `).join("");

    const targetsHtml = [...pw.targetIndices].map((ti) =>{
      const t = T[ti];
      return `<button class="btn btn-sm" data-pw-target="${ti}" style="margin:2px 4px 2px 0;font-size:13px;padding:3px 8px" title="Kliknij, aby otworzyć kartę celu">${esc(t.n)} <span style="opacity:0.6;font-size:13px">(${byTarget[ti] ? byTarget[ti].length : 0})</span></button>`;
    }).join("");

    const compounds = [...pw.compoundIndices].map((ci) =>C[ci]);
    const agonists = [];
    const antagonists = [];
    const inhibitors = [];
    compounds.forEach((c) =>{
      const text = ((c.m || "") + " " + (c.d || "")).toLowerCase();
      if (text.includes("antagonist") || text.includes("blocker") || text.includes("inhibitor of") || text.includes("antagonista")) {
        antagonists.push(c);
      } else if (text.includes("reuptake") || text.includes("transporter") || text.includes("wychwyt") || text.includes("uptake")) {
        inhibitors.push(c);
      } else {
        agonists.push(c);
      }
    });

    const renderCompoundPills = (list, badgeColor) =>list.map((c) =>`
      <button class="btn btn-sm" data-pw-compound="${c.i}" style="margin:2px 4px 2px 0;font-size:13px;padding:3px 8px;border-left:1px solid ${badgeColor}" title="${esc(c.m || c.d || '')}">
        ${esc(c.n)}
      </button>
    `).join("");

    const monographHtml = `
      <div style="display:flex;flex-direction:column;gap:12px">
        <div>
          <div style="font-size:13px;line-height:1.5;color:var(--color-text);margin-bottom:8px">
            ${esc(pw.description || "")}
          </div>
          ${pw.transduction ? `
            <div style="background:var(--color-surface);border-left:1px solid ${pw.color || 'var(--color-primary)'};padding:6px 10px;border-radius:0 6px 6px 0;font-size:13px;color:var(--color-text-muted);margin-bottom:10px">
              <strong>Kaskady transdukcji:</strong>${esc(pw.transduction)}
            </div>
          `: ""}
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.02em;color:var(--color-text-muted);margin-bottom:6px">
             Podtypy receptorowe i białka sprzęgające (${(pw.subtypes || []).length})
          </div>
          ${subtypesHtml || '<div style="font-size:13px;color:var(--color-text-muted)">Brak szczegółowej ontologii podtypów.</div>'}
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.02em;color:var(--color-text-muted);margin-bottom:6px">
             Cele w grafie (${pw.targetIndices.size})
          </div>
          <div style="display:flex;flex-wrap:wrap">
            ${targetsHtml || '<span style="font-size:13px;color:var(--color-text-muted)">Brak bezpośrednich celów w grafie</span>'}
          </div>
        </div>

        <div>
          <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.02em;color:var(--color-text-muted);margin-bottom:6px">
             Powiązane substancje wg profilu MoA (${compounds.length})
          </div>

          ${agonists.length ? `
            <div style="margin-bottom:6px">
              <span style="font-size:13px;font-weight:700;color:#34c759;text-transform:uppercase">Agoniści / Aktywatory (${agonists.length})</span>
              <div style="display:flex;flex-wrap:wrap;margin-top:2px">${renderCompoundPills(agonists, '#34c759')}</div>
            </div>
          `: ""}

          ${antagonists.length ? `
            <div style="margin-bottom:6px">
              <span style="font-size:13px;font-weight:700;color:#ff3b30;text-transform:uppercase">Antagoniści / Blokery (${antagonists.length})</span>
              <div style="display:flex;flex-wrap:wrap;margin-top:2px">${renderCompoundPills(antagonists, '#ff3b30')}</div>
            </div>
          `: ""}

          ${inhibitors.length ? `
            <div style="margin-bottom:6px">
              <span style="font-size:13px;font-weight:700;color:#52a2a8;text-transform:uppercase">Inhibitory wychwytu / Transportery (${inhibitors.length})</span>
              <div style="display:flex;flex-wrap:wrap;margin-top:2px">${renderCompoundPills(inhibitors, '#52a2a8')}</div>
            </div>
          `: ""}
        </div>

        <div style="display:flex;gap:8px;padding-top:8px;border-top:1px solid var(--color-border)">
          <button class="btn btn-sm ${state.pathway.mode === 'spotlight' ? 'btn-primary' : ''}" id="splitToggleSpotlightBtn">Tryb Spotlight</button>
          <button class="btn btn-sm ${state.pathway.mode === 'solo' ? 'btn-primary' : ''}" id="splitToggleSoloBtn">Tryb Solo</button>
          <button class="btn btn-sm" id="splitExitPathwayBtn">× Wyłącz szlak</button>
        </div>
      </div>
    `;

    openSplitPane("" || "", pw.name, `Szlak fizjologiczny • ${pw.targetIndices.size} celów • ${compounds.length} leków`, monographHtml);

    // Wire actions inside split pane
    if (splitBody) {
      splitBody.querySelectorAll("[data-pw-target]").forEach((btn) =>{
        btn.onclick = () =>openTargetModal(+btn.dataset.pwTarget);
      });
      splitBody.querySelectorAll("[data-pw-compound]").forEach((btn) =>{
        btn.onclick = () =>select({ type: "compound", i: +btn.dataset.pwCompound }, true);
      });
      const sSpot = splitBody.querySelector("#splitToggleSpotlightBtn");
      if (sSpot) sSpot.onclick = () =>selectPathway(pwId, "spotlight");
      const sSolo = splitBody.querySelector("#splitToggleSoloBtn");
      if (sSolo) sSolo.onclick = () =>selectPathway(pwId, "solo");
      const sExit = splitBody.querySelector("#splitExitPathwayBtn");
      if (sExit) sExit.onclick = () =>resetPathwayIsolation();
    }

    if (updateHash) {
      location.hash = `#/pathway/${pwId}?mode=${state.pathway.mode}`;
    }

    draw();
  }

  function resetPathwayIsolation() {
    state.pathway.id = null;

    const chipsCont = $("pathwayChipsContainer");
    if (chipsCont) {
      chipsCont.querySelectorAll(".pathway-chip").forEach((btn) =>btn.classList.remove("active"));
    }
    const resetBtn = $("pathwayResetBtn");
    if (resetBtn) resetBtn.style.display = "none";

    closeSplitPane();

    if (location.hash.startsWith("#/pathway/") || location.hash.startsWith("#pathway/")) {
      location.hash = "#/graph";
    }

    draw();
  }

  function wirePathwayDock() {
    const dock = $("pathwayDock");
    if (!dock) return;
    const chipsCont = $("pathwayChipsContainer");
    const spotBtn = $("pathwayModeSpotlight");
    const soloBtn = $("pathwayModeSolo");
    const resetBtn = $("pathwayResetBtn");

    if (chipsCont) {
      chipsCont.innerHTML = PATHWAY_SYSTEMS.map((pw) =>`
        <button class="pathway-chip" data-pw-id="${esc(pw.id)}" title="${esc(pw.name)} (${pw.compoundIndices.size} leków, ${pw.targetIndices.size} celów)">
          <span class="dot" style="width:7px;height:7px;background:${pw.color || 'var(--color-primary)'}"></span>
          <span>${esc(pw.name.replace("Układ ", "").replace("(NMDA / AMPA)", "").replace("(Opioidy)", "").replace("(ACh)", "").replace("& Adrenergiczny", "").replace("& Metaboliczny", "").replace("(ECS)", "").replace("Rytmu Dobowego & Czuwania (Orexin / Melatonin)", "Rytm dobowy").trim())}</span>
          <span class="pathway-chip-count">${pw.compoundIndices.size}</span>
        </button>
      `).join("");

      chipsCont.querySelectorAll(".pathway-chip").forEach((btn) =>{
        btn.onclick = () =>{
          const pwId = btn.dataset.pwId;
          if (state.pathway && state.pathway.id === pwId) {
            resetPathwayIsolation();
          } else {
            selectPathway(pwId, state.pathway.mode || "spotlight");
          }
        };
      });
    }

    if (spotBtn) {
      spotBtn.onclick = () =>{
        if (state.pathway && state.pathway.id) {
          selectPathway(state.pathway.id, "spotlight");
        } else {
          state.pathway.mode = "spotlight";
          spotBtn.classList.add("active");
          if (soloBtn) soloBtn.classList.remove("active");
        }
      };
    }

    if (soloBtn) {
      soloBtn.onclick = () =>{
        if (state.pathway && state.pathway.id) {
          selectPathway(state.pathway.id, "solo");
        } else {
          state.pathway.mode = "solo";
          soloBtn.classList.add("active");
          if (spotBtn) spotBtn.classList.remove("active");
        }
      };
    }

    if (resetBtn) {
      resetBtn.onclick = () =>resetPathwayIsolation();
    }
  }

  // ---------- Hash Router with Deep-Linking
  function handleHashRouting() {
    const raw = decodeURIComponent(location.hash.slice(1));
    if (!raw) return;
    if (raw === "/graph" || raw === "graph") {
      setWorkspaceMode("graph");
    } else if (raw === "/dossier" || raw === "dossier") {
      setWorkspaceMode("dossier");
    } else if (raw === "/stack" || raw === "stack") {
      setWorkspaceMode("stack");
    } else if (raw === "/evidence" || raw === "evidence") {
      setWorkspaceMode("evidence");
    } else if (raw === "/indications" || raw === "indications") {
      setWorkspaceMode("indications");
    } else if (raw === "/3d" || raw === "3d" || raw === "/structure3d" || raw === "structure3d") {
      setWorkspaceMode("structure3d");
    } else if (raw === "/metabolism" || raw === "metabolism" || raw === "/metabolite") {
      setWorkspaceMode("metabolism");
    } else if (raw === "/transporters" || raw === "transporters") {
      setWorkspaceMode("transporters");
    } else if (raw === "/chemspace" || raw === "chemspace") {
      setWorkspaceMode("chemspace");
    } else if (raw === "/notes" || raw === "notes") {
      setWorkspaceMode("notes");
    } else if (raw === "/clinical-suite" || raw === "clinical-suite") {
      setWorkspaceMode("clinical-suite");
    } else if (raw === "/pgx" || raw === "pgx") {
      setWorkspaceMode("clinical-suite", false);
      openClinicalSuiteModal("pgx");
    } else if (raw === "/taper" || raw === "taper") {
      setWorkspaceMode("clinical-suite", false);
      openClinicalSuiteModal("taper");
    } else if (raw === "/organ" || raw === "organ") {
      setWorkspaceMode("clinical-suite", false);
      openClinicalSuiteModal("organ");
    } else if (raw.startsWith("/clinical-suite/") || raw.startsWith("clinical-suite/")) {
      const rest = raw.replace(/^\/?clinical-suite\//, "").split("?")[0];
      setWorkspaceMode("clinical-suite", false);
      if (["pgx", "taper", "organ"].includes(rest)) openClinicalSuiteModal(rest);
      else openClinicalSuiteModal(null, rest);
    } else if (raw.startsWith("/notes/") || raw.startsWith("notes/")) {
      const nid = raw.replace(/^\/?notes\//, "").split("?")[0];
      setWorkspaceMode("notes", false);
      openNotesModal(nid);
    } else if (raw.startsWith("/chemspace/") || raw.startsWith("chemspace/")) {
      const pathPart = raw.replace(/^\/?chemspace\//, "");
      const [cid] = pathPart.split("?");
      setWorkspaceMode("chemspace");
      if (cid) openChemSpaceDock(cid);
    } else if (raw.startsWith("/ddi") || raw.startsWith("ddi")) {
      const presetMatch = raw.match(/preset=([a-z_]+)/);
      if (presetMatch) {
        loadDdiPreset(presetMatch[1]);
      } else {
        openDdiAuditInSplitPane();
      }
    } else if (raw.startsWith("/food/") || raw.startsWith("food/") || raw.startsWith("/fdi/") || raw.startsWith("fdi/")) {
      const pathPart = raw.replace(/^\/?(food|fdi)\//, "");
      const [cid] = pathPart.split("?");
      const targetC = C.find((c) =>c.id === cid);
      if (targetC) {
        openFoodInteractionsSplitPane(targetC);
      } else {
        openDdiAuditInSplitPane();
      }
    } else if (raw === "/food" || raw === "food" || raw === "/fdi" || raw === "fdi") {
      openDdiAuditInSplitPane();
    } else if (raw.startsWith("/pathway/") || raw.startsWith("pathway/")) {
      const pathPart = raw.replace(/^\/?pathway\//, "");
      const [pwId, query] = pathPart.split("?");
      let mode = "spotlight";
      if (query && query.includes("mode=solo")) mode = "solo";
      selectPathway(pwId, mode, false);
    } else if (raw.startsWith("/receptor-radar/") || raw.startsWith("receptor-radar/")) {
      const pathPart = raw.replace(/^\/?receptor-radar\//, "");
      const [cid, query] = pathPart.split("?");
      let compareCid = null;
      if (query) {
        const compMatch = query.match(/compare=([^&]+)/);
        if (compMatch) compareCid = decodeURIComponent(compMatch[1]);
      }
      openReceptorRadarSplitPane(cid, compareCid);
    } else if (raw.startsWith("/toxicology/") || raw.startsWith("toxicology/")) {
      const pathPart = raw.replace(/^\/?toxicology\//, "");
      const [cid, query] = pathPart.split("?");
      const opts = {};
      if (query) {
        const expMatch = query.match(/exposure=([0-9.]+)/);
        if (expMatch) opts.exposure = +expMatch[1];
        const presMatch = query.match(/preset=([a-z_]+)/);
        if (presMatch) opts.preset = presMatch[1];
      }
      openToxicologySplitPane(cid, opts);
    } else if (raw.startsWith("/transporters/") || raw.startsWith("transporters/")) {
      const pathPart = raw.replace(/^\/?transporters\//, "");
      const [cid, query] = pathPart.split("?");
      const opts = {};
      if (query) {
        const inhMatch = query.match(/inhibitor=([0-9.]+)/);
        if (inhMatch) opts.inhibitorRatio = +inhMatch[1];
        const presMatch = query.match(/preset=([a-z_]+)/);
        if (presMatch) opts.preset = presMatch[1];
      }
      openTransporterDock(cid, opts);
    } else if (raw.startsWith("/pk-simulator/") || raw.startsWith("pk-simulator/")) {
      const pathPart = raw.replace(/^\/?pk-simulator\//, "");
      const [cid, query] = pathPart.split("?");
      let compareCid = null;
      const opts = {};
      if (query) {
        const compMatch = query.match(/compare=([^&]+)/);
        if (compMatch) compareCid = decodeURIComponent(compMatch[1]);
        const regMatch = query.match(/regimen=([^&]+)/);
        if (regMatch) opts.regimen = decodeURIComponent(regMatch[1]);
        const scaleMatch = query.match(/scale=([^&]+)/);
        if (scaleMatch) opts.scale = decodeURIComponent(scaleMatch[1]);
        const phenoMatch = query.match(/phenotype=([^&]+)/);
        if (phenoMatch) opts.phenotype = decodeURIComponent(phenoMatch[1]);
        const egfrMatch = query.match(/egfr=([0-9.]+)/);
        if (egfrMatch) opts.egfr = +egfrMatch[1];
        const tauMatch = query.match(/tau=([0-9.]+)/);
        if (tauMatch) opts.tau = +tauMatch[1];
      }
      openPkSimulatorSplitPane(cid, compareCid, opts);
    } else if (raw.startsWith("/indications/") || raw.startsWith("indications/")) {
      const code = raw.replace(/^\/?indications\//, "").split("?")[0];
      openIndicationsModal(code);
    } else if (raw.startsWith("/compound/") || raw.startsWith("compound/")) {
      const cid = raw.replace(/^\/?compound\//, "").split("?")[0];
      const c = C.find((x) =>x.id === cid);
      if (c) select({ type: "compound", i: c.i }, true);
    } else if (raw.startsWith("stack=")) {
      const ids = raw.slice(6).split(",").filter(Boolean);
      if (ids.length) {
        state.stack.clear();
        ids.forEach((id) =>{
          const idx = C.findIndex((c) =>c.id === id);
          if (idx >= 0) state.stack.add(idx);
        });
        saveStack();
        setWorkspaceMode("stack");
      }
    } else if (raw.startsWith("target=")) {
      const ti = T.findIndex((t) =>t.id === raw.slice(7));
      if (ti >= 0) setTimeout(() =>openTargetModal(ti), 50);
    } else {
      const c = C.find((x) =>x.id === raw);
      if (c) setTimeout(() =>select({ type: "compound", i: c.i }, true), 50);
    }
  }

  window.addEventListener("hashchange", handleHashRouting);

  const shieldAuditBtn = $("shieldAuditBtn");
  if (shieldAuditBtn) shieldAuditBtn.onclick = openDdiAuditInSplitPane;
  const shieldPresetsBtn = $("shieldPresetsBtn");
  if (shieldPresetsBtn) shieldPresetsBtn.onclick = openDdiAuditInSplitPane;

  new ResizeObserver(resize).observe(cv);
  loadSavedStack();
  updateNotesBadgeCount();
  wirePathwayDock();
  updatePolypharmacyShieldUI();
  resize(); fit(); stats();
  handleHashRouting();
  if (!state.sel) select(null);
  updateStackUI();
  if (typeof updateBreadcrumbs === "function") updateBreadcrumbs(state.sel);
})();
