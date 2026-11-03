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
    stackTab: "pk", selectedMatrixPair: null,
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
    evidenceCohort: null
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

    $("chemModalTitle").textContent = `${c.n} — Wzór strukturalny 2D`;
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
          <span style="font-size:2.2rem">🧬</span>
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
      if (c.ik) rows.push(`<div>InChIKey: <code style="font-size:11px;background:#f5f5f5;padding:2px 4px;border-radius:3px">${esc(c.ik)}</code></div>`);
      if (c.mt) rows.push(`<div>Typ cząsteczki: <b>${esc(c.mt)}</b></div>`);
      details.innerHTML = rows.join("");
    }

    const copyBtn = $("chemModalCopyIk");
    if (copyBtn) {
      if (c.ik) {
        copyBtn.style.display = "inline-flex";
        copyBtn.textContent = "📋 Kopiuj InChIKey";
        copyBtn.onclick = () => {
          navigator.clipboard?.writeText(c.ik);
          copyBtn.textContent = "✓ Skopiowano InChIKey!";
          setTimeout(() => { copyBtn.textContent = "📋 Kopiuj InChIKey"; }, 2000);
        };
      } else {
        copyBtn.style.display = "none";
      }
    }

    box.classList.add("open");
  }

  function closeChemLightBox() {
    const box = $("chemLightBox");
    if (box) box.classList.remove("open");
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
    modal.classList.add("open");
  }

  function closeComparator() {
    const modal = $("comparatorModal");
    if (modal) modal.classList.remove("open");
    activeComparatorIndices = null;
  }

  function renderComparator(indices) {
    const body = $("comparatorBody");
    if (!body) return;
    const comps = indices.map((i) => C[i]);

    const tgCounts = new Map();
    comps.forEach((c) => {
      (c.tg || []).forEach((t) => {
        tgCounts.set(t, (tgCounts.get(t) || 0) + 1);
      });
    });

    const cypCounts = new Map();
    comps.forEach((c) => {
      const cy = (c.pk && c.pk.cyp) || [];
      cy.forEach((enz) => {
        cypCounts.set(enz, (cypCounts.get(enz) || 0) + 1);
      });
    });

    const atcCounts = new Map();
    comps.forEach((c) => {
      (c.atc || []).forEach(([code]) => {
        const c4 = code.slice(0, 4);
        atcCounts.set(c4, (atcCounts.get(c4) || 0) + 1);
      });
    });

    const colHeaders = comps.map((c) => {
      const struct = getChemStructure(c);
      const thumb = struct
        ? `<div style="height:110px;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:6px;padding:4px;border:1px solid var(--color-border);cursor:zoom-in" data-zoom-chem="${c.i}" title="Powiększ wzór 2D"><img src="${struct.url}" style="max-height:100%;max-width:100%;object-fit:contain" alt="${esc(c.n)}"></div>`
        : `<div style="height:80px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--color-surface-offset);border-radius:6px;border:1px solid var(--color-border);font-size:11px;color:var(--color-text-muted)"><span style="font-size:1.5rem">🧬</span>${esc(c.mt || "Makromolekuła")}</div>`;
      return `
        <th class="comp-col-th">
          ${thumb}
          <div style="margin-top:6px;font-size:var(--text-sm);font-weight:700">${esc(c.n)}</div>
          <div style="font-size:11px;color:var(--color-text-muted)">${esc(GR[c.g].label)} · <span style="color:${CL_COLORS[c.c]}">●</span> ${esc(CL_PL[G.clusters[c.c].name])}</div>
          <div style="margin-top:4px;font-size:11px">${c.mf ? `<code>${esc(c.mf)}</code>` : ""}${c.pr && c.pr[0] ? ` · <b>${c.pr[0]} g/mol</b>` : ""}</div>
          ${c.ik ? `<div style="margin-top:4px"><button class="btn-copy" data-copy-ik="${esc(c.ik)}" title="Kopiuj InChIKey">📋 InChIKey</button></div>` : ""}
        </th>`;
    }).join("");

    const row = (label, fn, isSection = false) => {
      if (isSection) {
        return `<tr><th class="section-th" colspan="${comps.length + 1}">${esc(label)}</th></tr>`;
      }
      const cells = comps.map((c) => fn(c)).join("");
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
          ${row("Masa cząst. (MW)", (c) => `<td>${c.pr && c.pr[0] != null ? `<b>${c.pr[0]}</b> g/mol` : "—"}</td>`)}
          ${row("Lipofilowość (ALogP)", (c) => `<td>${c.pr && c.pr[1] != null ? `<b>${c.pr[1]}</b>` : "—"}</td>`)}
          ${row("Pow. polarna (PSA)", (c) => `<td>${c.pr && c.pr[2] != null ? `<b>${c.pr[2]}</b> Å²` : "—"}</td>`)}
          ${row("Reguła Lipińskiego (Ro5)", (c) => {
            const v = c.pr ? c.pr[3] : null;
            if (v == null) return "<td>—</td>";
            return `<td><span class="tag ${v === 0 ? 'ok' : 'warn'}">${v === 0 ? '✓ 0 naruszeń' : `${v} naruszeń`}</span></td>`;
          })}

          ${row("FARMAKOKINETYKA (PK)", null, true)}
          ${row("Okres półtrwania (t½)", (c) => {
            const k = c.pk;
            const th = rng(k && k.hl && [k.hl[0], k.hl[1]], k && k.hl && k.hl[2]) || (c.hlh ? `${c.hlh.toFixed(1)} h` : "—");
            return `<td><b>${esc(th)}</b>${k && k.hlt ? `<br><small class="raw">${esc(k.hlt)}</small>` : ""}</td>`;
          })}
          ${row("Wiązanie z białkami (PB)", (c) => `<td>${c.pk && c.pk.pb ? `<b>${rng(c.pk.pb, "%")}</b>` : "—"}</td>`)}
          ${row("Biodostępność (BA)", (c) => `<td>${c.pk && c.pk.ba ? `<b>${rng(c.pk.ba, "%")}</b>` : "—"}</td>`)}
          ${row("Metabolizm", (c) => `<td>${c.pk && c.pk.met ? esc(c.pk.met) : "—"}</td>`)}
          ${row("Wydalanie", (c) => {
            const k = c.pk;
            if (!k) return "<td>—</td>";
            const ren = k.ren === true ? "Głównie z moczem" : k.ren === false ? "Głównie pozanerkowo" : "—";
            return `<td><b>${ren}</b>${k.ex ? `<br><small class="note">${esc(k.ex)}</small>` : ""}</td>`;
          })}
          ${row("Etykiety FDA & EMA", (c) => {
            const v = c.v, e = c.ve;
            const badges = [];
            if (v && v.s === 'consistent') badges.push('<span class="tag ok">FDA ✓</span>');
            else if (v && v.s === 'discrepant') badges.push('<span class="tag warn">FDA ≠</span>');
            if (e && e.s === 'consistent') badges.push('<span class="tag ok">ChPL ✓</span>');
            else if (e && e.s === 'discrepant') badges.push('<span class="tag warn">ChPL ≠</span>');
            return `<td>${badges.join(" ") || '<span class="note">—</span>'}</td>`;
          })}

          ${row("ENZYMY METABOLICZNE (CYP)", null, true)}
          ${row("Substrat izoenzymów", (c) => {
            const cy = (c.pk && c.pk.cyp) || [];
            if (!cy.length) return '<td><span class="note">Brak danych / nie metabolizowany</span></td>';
            const items = cy.map((enz) => {
              const shared = cypCounts.get(enz) >= 2;
              return `<span class="comp-tag ${shared ? 'comp-diff-warn' : 'tag'}" title="${shared ? 'Wspólny enzym — wąskie gardło metaboliczne' : 'Izoenzym CYP'}">${shared ? '⚠️ ' : ''}${esc(enz)}</span>`;
            }).join("");
            return `<td>${items}</td>`;
          })}

          ${row("CELE MOLEKULARNE (ChEMBL)", null, true)}
          ${row("Mechanizm działania", (c) => `<td><small style="line-height:1.4">${esc(c.m || "Brak opisu mechanizmu w ChEMBL")}</small></td>`)}
          ${row("Wiązane cele", (c) => {
            const tgs = c.tg || [];
            if (!tgs.length) return '<td><span class="note">Brak celów ChEMBL</span></td>';
            const items = tgs.map((t) => {
              const shared = tgCounts.get(t) >= 2;
              return `<span class="comp-tag ${shared ? 'comp-diff-same' : 'tag'}" style="${shared ? 'font-weight:700' : ''};cursor:pointer" data-t="${t}" title="Otwórz Deep-Dive celu ChEMBL">${shared ? '✓ ' : ''}◎ ${esc(T[t].n)}</span>`;
            }).join(" ");
            return `<td>${items}</td>`;
          })}
          ${row("Klasyfikacja ATC", (c) => {
            const atcs = c.atc || [];
            if (!atcs.length) return '<td><span class="note">—</span></td>';
            const items = atcs.map(([code, name]) => {
              const shared = atcCounts.get(code.slice(0, 4)) >= 2;
              return `<div style="font-size:11px;margin-bottom:2px" class="${shared ? 'comp-diff-same' : ''}"><code>${esc(code)}</code> ${esc(name)}</div>`;
            }).join("");
            return `<td>${items}</td>`;
          })}

          ${row("BEZPIECZEŃSTWO & HUBY", null, true)}
          ${row("Ostrzeżenia najwyższego stopnia", (c) => {
            const list = [];
            if (c.bb) list.push('<span class="tag warn">⚠️ Black Box Warning</span>');
            if (c.wd) list.push('<span class="tag warn">⚠️ Wycofany z rynku</span>');
            if (c.ic === 'conflict') list.push('<span class="tag warn">⚠️ Rozbieżność tożsamości</span>');
            return `<td>${list.join("<br>") || '<span class="tag ok">Brak flag najwyższego ryzyka</span>'}</td>`;
          })}
          ${row("Krytyczne huby ryzyka", (c) => {
            const hubs = (c.l || []).filter((li) => CORE[li].kind === "hub").map((li) => esc(CORE[li].name));
            return `<td>${hubs.length ? hubs.map((h) => `<span class="tag warn" style="display:block;margin-bottom:2px">⚠️ ${h}</span>`).join("") : '<span class="note">—</span>'}</td>`;
          })}
        </tbody>
      </table>`;

    body.innerHTML = html;

    body.querySelectorAll("[data-zoom-chem]").forEach((el) => {
      el.onclick = () => openChemLightBox(+el.dataset.zoomChem);
    });
    body.querySelectorAll("[data-t]").forEach((el) => {
      el.onclick = () => openTargetModal(+el.dataset.t);
    });
    body.querySelectorAll("[data-copy-ik]").forEach((btn) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        navigator.clipboard?.writeText(btn.dataset.copyIk);
        const orig = btn.textContent;
        btn.textContent = "✓ Skopiowano!";
        setTimeout(() => { btn.textContent = orig; }, 1800);
      };
    });
  }

  function exportComparisonMarkdown(indices) {
    const list = (indices || activeComparatorIndices || [...state.stack]);
    if (!list.length) return "";
    const comps = list.map((i) => C[i]);
    const names = comps.map((c) => c.n).join(" vs ");
    const lines = [
      `# Porównanie Head-to-Head: ${names}`,
      "",
      `> Data wygenerowania: ${new Date().toISOString().slice(0, 10)}`,
      "> Narzędzie: Pharma-vault Drug Comparator (v3.9)",
      "",
      "| Parametr | " + comps.map((c) => `**${c.n}**`).join(" | ") + " |",
      "| :--- | " + comps.map(() => ":---").join(" | ") + " |",
      "| **Klaster** | " + comps.map((c) => CL_PL[G.clusters[c.c].name]).join(" | ") + " |",
      "| **Wzór chemiczny** | " + comps.map((c) => c.mf || "—").join(" | ") + " |",
      "| **Masa cząst. (MW)** | " + comps.map((c) => (c.pr && c.pr[0] ? `${c.pr[0]} g/mol` : "—")).join(" | ") + " |",
      "| **Lipofilowość (ALogP)** | " + comps.map((c) => (c.pr && c.pr[1] != null ? c.pr[1] : "—")).join(" | ") + " |",
      "| **Pow. polarna (PSA)** | " + comps.map((c) => (c.pr && c.pr[2] != null ? `${c.pr[2]} Å²` : "—")).join(" | ") + " |",
      "| **Reguła Lipińskiego** | " + comps.map((c) => (c.pr ? `${c.pr[3]} naruszeń` : "—")).join(" | ") + " |",
      "| **Okres półtrwania (t½)** | " + comps.map((c) => (c.pk && c.pk.hl ? `${c.pk.hl[0]}${c.pk.hl[1] ? '–' + c.pk.hl[1] : ''} ${c.pk.hl[2] || 'h'}` : c.hlh ? `${c.hlh.toFixed(1)} h` : "—")).join(" | ") + " |",
      "| **Wiązanie z białkami** | " + comps.map((c) => (c.pk && c.pk.pb ? `${c.pk.pb[0]}%` : "—")).join(" | ") + " |",
      "| **Substraty CYP** | " + comps.map((c) => ((c.pk && c.pk.cyp) ? c.pk.cyp.join(", ") : "—")).join(" | ") + " |",
      "| **InChIKey** | " + comps.map((c) => (c.ik ? `\`${c.ik}\`` : "—")).join(" | ") + " |",
      "| **Mechanizm (ChEMBL)** | " + comps.map((c) => (c.m ? c.m.replace(/\|/g, "/") : "—")).join(" | ") + " |",
      "",
      "> [!info] Raport wygenerowany automatycznie przez Pharma-vault Head-to-Head Comparator.",
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
      const sharedTargets = cTg.filter((ti) => qTgSet.has(ti));
      if (qTg.length > 0 && cTg.length > 0) {
        const unionSize = new Set([...qTg, ...cTg]).size;
        sTarget = unionSize > 0 ? Math.round((sharedTargets.length / unionSize) * 100) : 0;
      } else if (queryC.m && cand.m) {
        const wordsA = queryC.m.toLowerCase().split(/\W+/).filter((w) => w.length > 3);
        const wordsB = cand.m.toLowerCase().split(/\W+/).filter((w) => w.length > 3);
        const sharedW = wordsA.filter((w) => wordsB.includes(w));
        if (sharedW.length > 0) sTarget = Math.min(60, sharedW.length * 20);
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

    candidates.sort((a, b) => b.score - a.score);
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
      modeGroup.querySelectorAll("[data-analog-mode]").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.analogMode === activeAnalogsMode);
      });
    }

    const check = $("analogsSameCategoryCheck");
    if (check) check.checked = activeAnalogsSameCategory;

    const qCol = $("analogsQueryCol");
    if (qCol) {
      const struct = getChemStructure(c);
      const pr = c.pr || [];
      const tgNames = (c.tg || []).slice(0, 4).map((ti) => T[ti]?.n).filter(Boolean);
      qCol.innerHTML = `
        <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--color-text-muted);font-weight:700">Cząsteczka bazowa</div>
        <div style="text-align:center;padding:6px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px">
          ${struct ? `<img src="${struct.url}" alt="${esc(c.n)}" style="max-width:140px;max-height:140px;object-fit:contain" loading="lazy" data-zoom-chem="${c.i}">` : `
            <div style="height:100px;display:flex;align-items:center;justify-content:center;color:var(--color-text-muted)">🧬 Brak 2D</div>
          `}
        </div>
        <b style="font-size:14px;color:var(--color-text)">${esc(c.n)}</b>
        <div style="font-size:11px;color:var(--color-text-muted)">${esc(CL_PL[G.clusters[c.c].name])} · ${esc(GR[c.g].label)}</div>
        <div style="display:grid;gap:3px;font-size:11px;margin-top:4px">
          <div>Wzór: <b>${esc(c.mf || "—")}</b></div>
          <div>Masa (MW): <b>${pr[0] != null ? pr[0] + " g/mol" : "—"}</b></div>
          <div>ALogP: <b>${pr[1] != null ? pr[1] : "—"}</b></div>
          <div>PSA: <b>${pr[2] != null ? pr[2] + " Å²" : "—"}</b></div>
          ${c.ik ? `<div>InChIKey: <code style="font-size:9px">${esc(c.ik.slice(0, 14))}…</code></div>` : ""}
        </div>
        ${tgNames.length ? `
          <div style="margin-top:6px;font-size:10px">
            <span style="color:var(--color-text-muted);font-weight:600">Główne cele:</span>
            <div style="display:flex;gap:3px;flex-wrap:wrap;margin-top:2px">
              ${tgNames.map((n) => `<span class="tag ok" style="font-size:9px">◎ ${esc(n)}</span>`).join("")}
            </div>
          </div>
        ` : ""}
      `;
    }

    const analogs = findCompoundAnalogs(c, activeAnalogsMode, activeAnalogsSameCategory, 12);
    const grid = $("analogsResultsGrid");
    if (grid) {
      if (!analogs.length) {
        grid.innerHTML = '<div style="color:var(--color-text-muted);padding:1rem">Nie znaleziono pasujących analogów w wybranych kryteriach.</div>';
      } else {
        grid.innerHTML = analogs.map((item) => {
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
            : `<span class="dot" style="background:${CL_COLORS[cand.c]};width:14px;height:14px;flex-shrink:0"></span>`;

          return `
            <div class="analog-card">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px">
                <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
                  ${thumbHtml}
                  <div style="min-width:0;overflow:hidden">
                    <button data-analog-select="${cand.i}" style="background:none;border:0;color:var(--color-text);font-weight:700;font-size:12px;cursor:pointer;padding:0;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block" title="${esc(cand.n)}">${esc(cand.n)}</button>
                    <small style="color:var(--color-text-muted);font-size:10px">${esc(GR[cand.g].label)}</small>
                  </div>
                </div>
                <span class="similarity-badge ${badgeCls}" title="Zgodność: ${item.score}% (Chemia: ${item.sChem}%, Ro5: ${item.sPhys}%, Cele: ${item.sTarget}%)">
                  ${item.score}%
                </span>
              </div>
              <div style="display:flex;gap:4px;flex-wrap:wrap;font-size:10px;margin-top:4px">
                <span class="tag">${cand.mf || "Brak wzoru"}</span>
                ${dMw != null ? `<span class="tag">ΔMW ${+dMw >= 0 ? '+' : ''}${dMw}</span>` : ""}
                ${dLogP != null ? `<span class="tag">ΔLogP ${+dLogP >= 0 ? '+' : ''}${dLogP}</span>` : ""}
                ${item.sharedTargets.length ? `<span class="tag ok">◎ ${item.sharedTargets.length} wsp. celów</span>` : ""}
              </div>
              <div style="display:flex;gap:4px;margin-top:6px">
                <button class="btn btn-gold" data-analog-compare="${cand.i}" style="flex:1;font-size:10px;padding:3px 6px" title="Porównaj head-to-head">⚖️ Porównaj</button>
                <button class="btn ${inStack ? 'btn-gold' : ''}" data-analog-stack="${cand.i}" style="font-size:10px;padding:3px 6px" title="${inStack ? 'Usuń ze stacka' : 'Dodaj do stacka'}">
                  ${inStack ? '✓ W stacku' : '+ Stack'}
                </button>
                <button class="btn" data-analog-graph="${cand.i}" style="font-size:10px;padding:3px 6px" title="Pokaż w grafie">🎯 Graf</button>
              </div>
            </div>
          `;
        }).join("");
      }
    }

    wireAnalogsModal(c.i);
    modal.classList.add("open");
  }

  function closeAnalogsModal() {
    const modal = $("analogsModal");
    if (modal) modal.classList.remove("open");
    activeAnalogsQuery = null;
  }

  function wireAnalogsModal(queryIdx) {
    const modal = $("analogsModal");
    if (!modal) return;

    const closeBtn = $("analogsModalClose");
    if (closeBtn) closeBtn.onclick = closeAnalogsModal;

    modal.onclick = (e) => {
      if (e.target === modal) closeAnalogsModal();
    };

    const modeGroup = $("analogModeGroup");
    if (modeGroup) {
      modeGroup.querySelectorAll("[data-analog-mode]").forEach((btn) => {
        btn.onclick = () => {
          openAnalogsModal(queryIdx, btn.dataset.analogMode, activeAnalogsSameCategory);
        };
      });
    }

    const check = $("analogsSameCategoryCheck");
    if (check) {
      check.onchange = () => {
        openAnalogsModal(queryIdx, activeAnalogsMode, check.checked);
      };
    }

    modal.querySelectorAll("[data-analog-select]").forEach((b) => {
      b.onclick = () => {
        closeAnalogsModal();
        select({ type: "compound", i: +b.dataset.analogSelect }, true);
      };
    });

    modal.querySelectorAll("[data-analog-compare]").forEach((b) => {
      b.onclick = () => {
        const candIdx = +b.dataset.analogCompare;
        closeAnalogsModal();
        openComparator([queryIdx, candIdx]);
      };
    });

    modal.querySelectorAll("[data-analog-stack]").forEach((btn) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const candIdx = +btn.dataset.analogStack;
        toggleInStack(candIdx);
        const inStack = state.stack.has(candIdx);
        btn.textContent = inStack ? "✓ W stacku" : "+ Stack";
        btn.classList.toggle("btn-gold", inStack);
      };
    });

    modal.querySelectorAll("[data-analog-graph]").forEach((b) => {
      b.onclick = () => {
        const candIdx = +b.dataset.analogGraph;
        closeAnalogsModal();
        select({ type: "compound", i: candIdx }, true);
      };
    });

    modal.querySelectorAll("[data-zoom-chem]").forEach((el) => {
      el.onclick = () => openChemLightBox(+el.dataset.zoomChem);
    });
  }

  // ---------- Target & Pathway Deep-Dive Explorer
  let activeModalTarget = null;

  function classifyTargetAction(c, targetName) {
    const m = (c.m || "").toLowerCase();
    const tLower = (targetName || "").toLowerCase();

    const tWords = tLower.split(/\s+/).filter((w) => w.length > 3);
    const mechParts = m.split("|");
    const relevantParts = mechParts.filter((part) =>
      tWords.length === 0 || tWords.some((w) => part.includes(w))
    );
    const textToCheck = relevantParts.length ? relevantParts.join(" ") : m;

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

    const ligands = (byTarget[ti] || []).map((i) => C[i]);
    const visLigands = ligands.filter(visible);

    const groups = {
      agonist: [],
      antagonist: [],
      inhibitor: [],
      other: []
    };

    ligands.forEach((c) => {
      const act = classifyTargetAction(c, t.n);
      groups[act].push(c);
    });

    const phase4 = ligands.filter((c) => c.ph === 4).length;
    const phase13 = ligands.filter((c) => c.ph != null && c.ph >= 1 && c.ph <= 3).length;
    const phase0 = ligands.length - phase4 - phase13;

    const hubCounts = new Map();
    ligands.forEach((c) => {
      (c.l || []).forEach((li) => {
        if (CORE[li].kind === "hub") {
          hubCounts.set(CORE[li].name, (hubCounts.get(CORE[li].name) || 0) + 1);
        }
      });
    });

    const topHubs = [...hubCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4);

    const hubBadges = topHubs.map(([hName, count]) => {
      const pct = Math.round((count / ligands.length) * 100);
      return `<span class="tag warn" title="${pct}% powiązanych leków należy do tego hubu">⚠️ ${esc(hName)} (${pct}%)</span>`;
    }).join(" ");

    const head = $("targetModalHead");
    if (head) {
      head.innerHTML = `
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem">
          <div>
            <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--color-text-muted)">
              <span>Cel molekularny ChEMBL</span>
              <span>·</span>
              <span class="tag" style="font-size:10px">${esc(t.ty || "Białko")}</span>
              <span>·</span>
              <a href="https://www.ebi.ac.uk/chembl/target_report_card/${esc(t.id)}/" target="_blank" rel="noopener noreferrer" style="color:var(--color-primary)">${esc(t.id)} ↗</a>
            </div>
            <div style="font-size:var(--text-lg);font-weight:700;font-family:var(--font-display);margin-top:2px">${esc(t.n)}</div>
          </div>
          <button class="card-close" id="targetModalClose" title="Zamknij (Esc)" aria-label="Zamknij eksplorator celu">✕</button>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-top:4px;padding-top:6px;border-top:1px solid var(--color-border);font-size:11px">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span class="tag ok" style="font-weight:600">${ligands.length} substancji</span>
            <span style="color:var(--color-text-muted)">(${visLigands.length} widocznych na grafie)</span>
            <span style="color:var(--color-text-muted)">·</span>
            <span><b>${phase4}</b> zatwierdzonych (faza 4)</span>
            <span>·</span>
            <span><b>${phase13}</b> w badaniach (fazy 1–3)</span>
            ${phase0 ? `<span>· <b>${phase0}</b> badawczych</span>` : ""}
          </div>
          <div style="display:flex;gap:6px;align-items:center">
            <button class="btn" id="targetOpen3DBtn" data-target-id="${esc(t.id)}" style="font-size:var(--text-xs);padding:4px 10px" title="Otwórz strukturę 3D i architekturę kieszeni wiążącej">🧊 Struktura 3D</button>
            <button class="btn btn-gold" id="targetShowOnGraphBtn" style="font-size:var(--text-xs);padding:4px 10px">🎯 Pokaż na grafie</button>
          </div>
        </div>
        ${topHubs.length ? `
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:4px">
            <span style="font-size:11px;font-weight:600;color:var(--color-text-muted)">Profil ryzyka PD (huby):</span>
            ${hubBadges}
          </div>` : ""}
      `;
    }

    const renderCol = (title, icon, color, list, emptyMsg) => {
      const cards = list.map((c) => {
        const inStack = state.stack.has(c.i);
        const struct = getChemStructure(c);
        const thumbHtml = struct
          ? `<img src="${struct.url}" style="width:36px;height:36px;object-fit:contain;background:#fff;border-radius:4px;border:1px solid var(--color-border);cursor:zoom-in" data-zoom-chem="${c.i}" title="Powiększ wzór 2D" alt="${esc(c.n)}">`
          : `<span class="dot" style="background:${CL_COLORS[c.c]};width:12px;height:12px;flex-shrink:0"></span>`;

        return `
          <div class="target-drug-card">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
              <div style="display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden">
                ${thumbHtml}
                <div style="min-width:0;overflow:hidden">
                  <button data-c="${c.i}" style="background:none;border:0;color:var(--color-text);font-weight:700;font-size:12px;cursor:pointer;padding:0;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block" title="${esc(c.n)}">${esc(c.n)}</button>
                  <small style="color:var(--color-text-muted);font-size:10px">${esc(GR[c.g].label)}</small>
                </div>
              </div>
              <button class="btn-copy ${inStack ? 'ok' : ''}" data-target-stack-toggle="${c.i}" style="font-size:10px;padding:2px 6px;white-space:nowrap" title="${inStack ? 'Usuń ze stacka' : 'Dodaj do stacka'}">
                ${inStack ? '✓ W stacku' : '+ Stack'}
              </button>
            </div>
            <div style="display:flex;gap:4px;flex-wrap:wrap;font-size:10px;margin-top:2px">
              ${c.ph ? `<span class="tag">Faza ${c.ph}</span>` : '<span class="tag">Badawczy</span>'}
              ${c.pk ? '<span class="tag ok">PK</span>' : ''}
              ${c.pr ? `<span class="tag">${c.pr[0]} g/mol</span>` : ''}
            </div>
            ${c.m ? `<div style="font-size:10px;color:var(--color-text-muted);font-style:italic;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(c.m)}">${esc(c.m.replace(/\|/g, ', '))}</div>` : ''}
          </div>
        `;
      }).join("");

      return `
        <div class="target-action-col">
          <div class="target-action-col-head" style="color:${color}">
            <span>${icon} ${esc(title)}</span>
            <span class="tag" style="font-size:10px">${list.length}</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px">
            ${cards || `<span style="font-size:11px;color:var(--color-text-muted);padding:8px 4px">${emptyMsg}</span>`}
          </div>
        </div>
      `;
    };

    const body = $("targetModalBody");
    if (body) {
      body.innerHTML = `
        <div class="target-grid">
          ${renderCol("Aktywatory / Agoniści", "🟢", "var(--color-success)", groups.agonist, "Brak zidentyfikowanych agonistów")}
          ${renderCol("Blokery / Antagoniści", "🔴", "var(--color-error)", groups.antagonist, "Brak zidentyfikowanych antagonistów")}
          ${renderCol("Inhibitory / Blokery wychwytu", "🟡", "var(--color-warning)", groups.inhibitor, "Brak zidentyfikowanych inhibitorów")}
          ${renderCol("Pozostałe ligandy", "⚪", "var(--color-text-muted)", groups.other, "Brak innych ligandów")}
        </div>
      `;
    }

    wireTargetModal(ti);
    modal.classList.add("open");
  }

  function closeTargetModal() {
    const modal = $("targetModal");
    if (modal) modal.classList.remove("open");
    activeModalTarget = null;
  }

  function wireTargetModal(ti) {
    const modal = $("targetModal");
    if (!modal) return;

    const closeBtn = $("targetModalClose");
    if (closeBtn) closeBtn.onclick = closeTargetModal;
    const footClose = $("targetModalCloseFoot");
    if (footClose) footClose.onclick = closeTargetModal;

    modal.onclick = (e) => {
      if (e.target === modal) closeTargetModal();
    };

    const graphBtn = $("targetShowOnGraphBtn");
    if (graphBtn) {
      graphBtn.onclick = () => {
        closeTargetModal();
        select({ type: "target", i: ti }, true);
      };
    }
    const open3DBtn = $("targetOpen3DBtn");
    if (open3DBtn) {
      open3DBtn.onclick = () => {
        closeTargetModal();
        openStruct3DModal(ti);
      };
    }

    modal.querySelectorAll("[data-c]").forEach((b) => {
      b.onclick = () => {
        closeTargetModal();
        select({ type: "compound", i: +b.dataset.c }, true);
      };
    });

    modal.querySelectorAll("[data-zoom-chem]").forEach((el) => {
      el.onclick = () => openChemLightBox(+el.dataset.zoomChem);
    });

    modal.querySelectorAll("[data-target-stack-toggle]").forEach((btn) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const cIdx = +btn.dataset.targetStackToggle;
        toggleInStack(cIdx);
        const inStack = state.stack.has(cIdx);
        btn.textContent = inStack ? "✓ W stacku" : "+ Stack";
        btn.classList.toggle("ok", inStack);
      };
    });
  }

  // ---------- Semantic Pharmacological Typed Edges
  const TYPED_EDGE_CONFIG = {
    PRODRUG_OF: {
      label: "Prolek → Lek aktywny",
      color: "#10b981",
      dash: [],
      lineWidth: 2.2,
      directed: true,
      desc: "Biotransformacja proleku do czynnego metabolitu",
      shortLabel: "Prolek"
    },
    CONTRAINDICATION: {
      label: "Przeciwwskazanie / Ciężkie ryzyko",
      color: "#ef4444",
      dash: [6, 4],
      lineWidth: 2.4,
      directed: false,
      desc: "Krytyczne ryzyko powikłań zagrażających życiu",
      shortLabel: "Przeciwwskazanie"
    },
    CYP_INTERACTION: {
      label: "Hamowanie / Konkurencja CYP",
      color: "#f59e0b",
      dash: [8, 3, 2, 3],
      lineWidth: 2.0,
      directed: true,
      desc: "Inhibitor zaburza klirens i eliminację substratu",
      shortLabel: "Interakcja CYP"
    },
    TARGET_SYNERGY: {
      label: "Synergia celów molekularnych",
      color: "#8b5cf6",
      dash: [3, 3],
      lineWidth: 1.8,
      directed: false,
      desc: "Zgodny kierunek modulacji tego samego celu ChEMBL",
      shortLabel: "Synergia"
    },
    TARGET_ANTAGONISM: {
      label: "Antagonizm / Odtrutka",
      color: "#06b6d4",
      dash: [5, 5],
      lineWidth: 2.0,
      directed: false,
      desc: "Przeciwstawne działanie (agonista vs bloker/antagonista)",
      shortLabel: "Antagonizm"
    }
  };

  const compById = new Map();
  C.forEach((c) => compById.set(c.id, c.i));

  const CURATED_TYPED_EDGES = [
    // Prodrugs (from prodrug to active form)
    ["lisdexamfetamine-compound", "dextroamphetamine-compound", "PRODRUG_OF", "Biotransformacja erytrocytarna do aktywnej d-amfetaminy"],
    ["codeine-compound", "morphine-compound", "PRODRUG_OF", "O-demetylacja przez CYP2D6 do aktywnej morfiny"],
    ["psilocybin-compound", "psilocin-compound", "PRODRUG_OF", "Defosforylacja przez fosfatazę alkaliczną do psylocyny"],
    ["diamorphine-compound", "morphine-compound", "PRODRUG_OF", "Deacetylacja w OUN do 6-MAM i morfiny"],
    ["tramadol-compound", "o-desmethyltramadol-compound", "PRODRUG_OF", "O-demetylacja CYP2D6 do aktywnego analgetyka O-DSMT"],
    ["levodopa-compound", "dopamine-drug-compound", "PRODRUG_OF", "Dekarboksylacja przez AADC do dopaminy w prążkowiu"],
    ["primidone-compound", "phenobarbital-compound", "PRODRUG_OF", "Oksydacja wątrobowa do fenobarbitalu"],
    ["prednisone-compound", "prednisolone-compound", "PRODRUG_OF", "Redukcja 11-beta-HSD-1 do aktywnego prednizolonu"],
    ["valacyclovir-compound", "acyclovir-compound", "PRODRUG_OF", "Hydroliza estrowa przez esterazę wątrobową do acyklowiru"],
    ["enalapril-compound", "enalaprilat-anhydrous-compound", "PRODRUG_OF", "Deestryfikacja wątrobowa do aktywnego enalaprylatu"],
    ["capecitabine-compound", "fluorouracil-compound", "PRODRUG_OF", "Kaskadowa aktywacja przez fosforylazę tymidynową do 5-FU"],
    ["fosaprepitant-compound", "aprepitant-compound", "PRODRUG_OF", "Szybka hydroliza fosforanu do aprepitantu"],
    ["valganciclovir-compound", "ganciclovir-compound", "PRODRUG_OF", "Hydroliza esterazowa do gancyklowiru"],
    ["ethylestrenol-compound", "norethandrolone-compound", "PRODRUG_OF", "Metabolizm do aktywnego noretandrolonu"],

    // Contraindications & Critical Interactions
    ["moclobemide-compound", "fluoxetine-compound", "CONTRAINDICATION", "Inhibitor MAO-A + SSRI: ryzyko zagrażającego życiu zespołu serotoninowego"],
    ["moclobemide-compound", "sertraline-compound", "CONTRAINDICATION", "Inhibitor MAO-A + SSRI: ryzyko zespołu serotoninowego"],
    ["moclobemide-compound", "dextromethorphan-compound", "CONTRAINDICATION", "MAOI + bloker SERT: krytyczna toksyczność serotoninergiczna"],
    ["phenelzine-compound", "fluoxetine-compound", "CONTRAINDICATION", "Nieodwracalny MAOI + SSRI: bezwzględne przeciwwskazanie"],
    ["phenelzine-compound", "sertraline-compound", "CONTRAINDICATION", "Nieodwracalny MAOI + SSRI: bezwzględne przeciwwskazanie"],
    ["tranylcypromine-compound", "fluoxetine-compound", "CONTRAINDICATION", "Nieodwracalny MAOI + SSRI: bezwzględne przeciwwskazanie"],
    ["selegiline-compound", "fluoxetine-compound", "CONTRAINDICATION", "MAOI + SSRI: ryzyko przełomu serotoninowego"],
    ["diazepam-compound", "morphine-compound", "CONTRAINDICATION", "GABA-A PAM + Opioid: synergistyczna depresja ośrodka oddechowego"],
    ["alprazolam-compound", "oxycodone-compound", "CONTRAINDICATION", "GABA-A PAM + Silny opioid: krytyczna zapaść oddechowa"],
    ["clonazepam-compound", "fentanyl-compound", "CONTRAINDICATION", "Benzodiazepina + Fentanyl: śmiertelne ryzyko bezdechu"],
    ["sildenafil-compound", "nitroglycerin-compound", "CONTRAINDICATION", "Inhibitor PDE-5 + Azotan: zapaść naczyniowa i oporna hipotensja"],
    ["tadalafil-compound", "nitroglycerin-compound", "CONTRAINDICATION", "Długodziałający PDE-5i + Azotan: niebezpieczny spadek ciśnienia tętniczego"],
    ["sildenafil-compound", "isosorbide-mononitrate-compound", "CONTRAINDICATION", "Inhibitor PDE-5 + Donator NO: zapaść krążeniowa"],
    ["haloperidol-compound", "citalopram-compound", "CONTRAINDICATION", "Podwójne wydłużenie repolaryzacji hERG/QTc: ryzyko Torsade de Pointes"],
    ["methadone-compound", "citalopram-compound", "CONTRAINDICATION", "Substytut opioidu + SSRI: kumulacja ryzyka wydłużenia QTc"],
    ["amiodarone-compound", "haloperidol-compound", "CONTRAINDICATION", "Lek antyarytmiczny + Neuroleptyk: skrajne ryzyko Torsade de Pointes"],

    // CYP Interactions (Inhibitor -> Substrate)
    ["fluoxetine-compound", "codeine-compound", "CYP_INTERACTION", "Blokada CYP2D6 uniemożliwia aktywację kodeiny do morfiny"],
    ["fluoxetine-compound", "dextromethorphan-compound", "CYP_INTERACTION", "Inhibicja CYP2D6 drastycznie zwiększa stężenie DXM i ryzyko toksyczności OUN"],
    ["fluoxetine-compound", "metoprolol-compound", "CYP_INTERACTION", "Inhibitor CYP2D6 podnosi AUC metoprololu (ciężka bradykardia)"],
    ["fluoxetine-compound", "atomoxetine-compound", "CYP_INTERACTION", "Inhibicja CYP2D6 wielokrotnie wydłuża t1/2 atomoksetyny"],
    ["paroxetine-compound", "tramadol-compound", "CYP_INTERACTION", "Inhibicja CYP2D6 osłabia syntezę O-DSMT i nasila obciążenie serotoninowe"],
    ["paroxetine-compound", "risperidone-compound", "CYP_INTERACTION", "Inhibicja CYP2D6 podnosi stężenie risperidonu i ryzyko objawów EPS"],
    ["ketoconazole-compound", "midazolam-compound", "CYP_INTERACTION", "Inhibitor CYP3A4 zwiększa AUC midazolamu 10-15-krotnie"],
    ["ketoconazole-compound", "simvastatin-compound", "CYP_INTERACTION", "Blokada CYP3A4 drastycznie zwiększa stężenie statyny: ryzyko rabdomiolizy"],
    ["clarithromycin-compound", "alprazolam-compound", "CYP_INTERACTION", "Makrolid hamuje CYP3A4, powodując przedłużoną sedację"],
    ["fluvoxamine-compound", "clozapine-compound", "CYP_INTERACTION", "Inhibitor CYP1A2 podnosi stężenie klozapiny 5-10-krotnie (drgawki, agranulocytoza)"],
    ["fluvoxamine-compound", "theophylline-compound", "CYP_INTERACTION", "Inhibicja CYP1A2 powoduje toksyczną kumulację teofiliny"],
    ["bupropion-compound", "metoprolol-compound", "CYP_INTERACTION", "Metabolit hydroksybupropion silnie hamuje CYP2D6, potęgując bradykardię"],

    // Target Antagonisms (Agonist vs Antagonist / Antidote)
    ["naloxone-compound", "morphine-compound", "TARGET_ANTAGONISM", "Kompetycyjny antagonista receptora µ-opioidowego: odwraca depresję oddechową"],
    ["naloxone-compound", "fentanyl-compound", "TARGET_ANTAGONISM", "Antagonista receptorów opioidowych MOR: natychmiastowe znoszenie narkozy"],
    ["naloxone-compound", "oxycodone-compound", "TARGET_ANTAGONISM", "Odtrutka opioidowa na receptorach opioidowych MOR"],
    ["naltrexone-compound", "morphine-compound", "TARGET_ANTAGONISM", "Bloker receptorów µ-opioidowych blokujący euforyzację"],
    ["flumazenil-compound", "diazepam-compound", "TARGET_ANTAGONISM", "Kompetycyjny antagonista miejsca benzodiazepinowego GABA-A: znosi sedację"],
    ["flumazenil-compound", "alprazolam-compound", "TARGET_ANTAGONISM", "Bloker allosterycznego miejsca benzodiazepinowego: odwraca działanie nasenne"],
    ["flumazenil-compound", "midazolam-compound", "TARGET_ANTAGONISM", "Wybudzanie ze znieczulenia i sedacji wywołanej midazolamem"],
    ["haloperidol-compound", "pramipexole-compound", "TARGET_ANTAGONISM", "Bloker receptorów dopaminowych D2 znosi działanie agonisty D2/D3"],
    ["haloperidol-compound", "ropinirole-compound", "TARGET_ANTAGONISM", "Antagonizm dopaminergiczny na receptorach D2"],
    ["atropine-compound", "donepezil-compound", "TARGET_ANTAGONISM", "Antagonista muskarynowy znosi efekty cholinomimetyczne"],

    // Target Synergies
    ["psilocin-compound", "n-n-dimethyltryptamine-compound", "TARGET_SYNERGY", "Synergia na receptorze 5-HT2A (psychomimetyki tryptaminowe)"],
    ["ketamine-compound", "esketamine-compound", "TARGET_SYNERGY", "Zbieżna blokada kanału kompleksu receptora NMDA"],
    ["entacapone-compound", "tolcapone-compound", "TARGET_SYNERGY", "Synergiczne hamowanie katecholo-O-metylotransferazy (COMT)"]
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

    const existing = (typedEdgesByComp.get(fromIdx) || []).find((e) => e.other === toIdx && e.type === type);
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
    CURATED_TYPED_EDGES.forEach(([fromId, toId, type, note]) => {
      const fi = compById.get(fromId);
      const ti = compById.get(toId);
      if (fi != null && ti != null) {
        addTypedEdge(fi, ti, type, note);
      }
    });

    T.forEach((t, ti) => {
      const ligands = byTarget[ti] || [];
      if (ligands.length < 2 || ligands.length > 80) return;

      const classified = ligands.map((ci) => ({
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
    const color = cfg.color;
    ctx.save();
    ctx.strokeStyle = strong ? color : color + "bb";
    ctx.lineWidth = strong ? cfg.lineWidth + 1.0 : cfg.lineWidth;
    if (cfg.dash && cfg.dash.length > 0) {
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
    listEl.innerHTML = types.map((t) => {
      const cfg = TYPED_EDGE_CONFIG[t];
      const on = state.edgeFilters.enabled.has(t);
      const count = edgeCounts[t] || 0;
      return `
        <div class="edge-filter-item">
          <label class="edge-filter-label">
            <input type="checkbox" data-edge-type="${t}" ${on ? "checked" : ""} />
            <span class="edge-color-dot ${cfg.directed ? 'directed' : ''}" style="background:${cfg.color}"></span>
            <span>${esc(cfg.label)}</span>
          </label>
          <span class="edge-badge">${count}</span>
        </div>
      `;
    }).join("");

    listEl.querySelectorAll("[data-edge-type]").forEach((cb) => {
      cb.onchange = () => {
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
      globalCheck.onchange = () => {
        state.edgeFilters.globalMode = globalCheck.checked;
        draw();
      };
    }
  }

  // ---------- Metabolite Tree & Prodrug Biotransformation Navigator
  let activeMetaboliteQuery = null;
  let activeMetaboliteSelectedNode = null;

  const METABOLITE_CASCADES = {
    "codeine-compound": {
      rootRole: "prodrug",
      notes: "Prolek opioidowy wymagający O-demetylacji przez CYP2D6 do aktywnej morfiny (ok. 10% dawki). Reszta eliminowana przez glukuronidację (CYP3A4 / UGT2B7).",
      phase1: [
        { id: "morphine-compound", name: "Morfina", enzyme: "CYP2D6", reaction: "O-demetylacja (10%)", activity: "active", desc: "Główny czynny metabolit odpowiadający za działanie przeciwbólowe (silny agonista receptorów µ-opioidowych).", tHalf: "2 - 4 h" },
        { id: null, name: "Norkodeina", enzyme: "CYP3A4", reaction: "N-demetylacja (10-20%)", activity: "inactive", desc: "Metabolit o znikomej aktywności opioidowej.", tHalf: "3 - 5 h" }
      ],
      phase2: [
        { parentId: "morphine-compound", id: null, name: "Morfino-6-glukuronid (M6G)", enzyme: "UGT2B7", reaction: "Glukuronidacja (60%)", activity: "active", desc: "Silnie aktywny metabolit o silniejszym powinowactwie do receptora MOR niż sama morfina.", tHalf: "3 - 5 h" },
        { parentId: "morphine-compound", id: null, name: "Morfino-3-glukuronid (M3G)", enzyme: "UGT2B7", reaction: "Glukuronidacja", activity: "inactive", desc: "Brak działania analgetycznego; metabolit neuroekscytotoksyczny przy kumulacji w niewydolności nerek.", tHalf: "3 - 5 h" },
        { parentId: "codeine-compound", id: null, name: "Kodeino-6-glukuronid (C6G)", enzyme: "UGT2B7", reaction: "Glukuronidacja bezpośrednia (70-80%)", activity: "inactive", desc: "Główny szlak eliminacji kodeiny, metabolit o słabej aktywności analgetycznej.", tHalf: "3 - 4 h" }
      ]
    },
    "diazepam-compound": {
      rootRole: "active",
      notes: "Długodziałająca benzodiazepina o złożonej wielopoziomowej kaskadzie metabolitów czynnych.",
      phase1: [
        { id: null, name: "Nordazepam (Demetylodiazepam)", enzyme: "CYP2C19 / CYP3A4", reaction: "N-demetylacja", activity: "active", desc: "Główny aktywny metabolit o bardzo długim okresie półtrwania (30 - 100 h), ulegający kumulacji.", tHalf: "30 - 100 h" },
        { id: null, name: "Temazepam", enzyme: "CYP3A4", reaction: "C3-hydroksylacja", activity: "active", desc: "Aktywny metabolit o silnym profilu nasennym i krótszym t½ niż nordazepam.", tHalf: "8 - 15 h" }
      ],
      phase2: [
        { parentId: "Nordazepam", id: "oxazepam-compound", name: "Oksazepam", enzyme: "CYP3A4", reaction: "Hydroksylacja", activity: "active", desc: "Końcowy czynny metabolit; eliminowany wyłącznie przez bezpośrednią glukuronidację bez udziału CYP.", tHalf: "4 - 15 h" },
        { parentId: "oxazepam-compound", id: null, name: "Glukuronid oksazepamu", enzyme: "UGT2B15", reaction: "Glukuronidacja", activity: "inactive", desc: "Nieaktywny koniugat wydalany przez nerki z moczem.", tHalf: "6 h" }
      ]
    },
    "tramadol-compound": {
      rootRole: "active",
      notes: "Racemat o podwójnym mechanizmie: prolek silnego agonisty MOR (O-DSMT) oraz inhibitor wychwytu zwrotnego 5-HT/NA.",
      phase1: [
        { id: "o-desmethyltramadol-compound", name: "O-Desmetylotramadol (O-DSMT)", enzyme: "CYP2D6", reaction: "O-demetylacja", activity: "active", desc: "Główny metabolit analgetyczny (200-krotnie wyższe powinowactwo do receptora µ-opioidowego niż tramadol).", tHalf: "7 - 9 h" },
        { id: null, name: "N-Desmetylotramadol", enzyme: "CYP3A4 / CYP2B6", reaction: "N-demetylacja", activity: "inactive", desc: "Słabo aktywny metabolit, nie wykazuje istotnego działania opioidowego.", tHalf: "6 - 7 h" }
      ],
      phase2: [
        { parentId: "o-desmethyltramadol-compound", id: null, name: "Glukuronid O-DSMT", enzyme: "UGT2B7", reaction: "Koniugacja glukuronidowa", activity: "inactive", desc: "Koniugat polarny wydalany z moczem.", tHalf: "8 h" }
      ]
    },
    "lisdexamfetamine-compound": {
      rootRole: "prodrug",
      notes: "Prolek d-amfetaminy sprzężony z l-lizyną; profil 'rate-limited' zależny od pojemności hydrolitycznej krwinek czerwonych.",
      phase1: [
        { id: "dextroamphetamine-compound", name: "Deksamfetamina", enzyme: "Hydrolazy peptydowe (RBC)", reaction: "Hydroliza wiązania amidowego", activity: "active", desc: "Aktywny stymulant psychomotoryczny uwalniający dopaminę i noradrenalinę w OUN.", tHalf: "10 - 12 h" }
      ],
      phase2: [
        { parentId: "dextroamphetamine-compound", id: null, name: "Kwas hipurowy & Kwas benzoesowy", enzyme: "CYP2D6 / Oksydaza", reaction: "Deaminacja i koniugacja glicynowa", activity: "inactive", desc: "Końcowe metabolity deaminacji wydalane z moczem.", tHalf: "—" }
      ]
    },
    "psilocybin-compound": {
      rootRole: "prodrug",
      notes: "Naturalny fosforylowany prolek tryptaminowy; sam w sobie pozbawiony istotnego powinowactwa do 5-HT2A.",
      phase1: [
        { id: "psilocin-compound", name: "Psylocyna (4-OH-DMT)", enzyme: "Fosfataza alkaliczna (ALP)", reaction: "Defosforylacja w żołądku/wątrobie", activity: "active", desc: "Lipofilny, czynny psychomimetyczny agonista receptora 5-HT2A przenikający barierę krew-mózg.", tHalf: "2 - 3 h" }
      ],
      phase2: [
        { parentId: "psilocin-compound", id: null, name: "O-glukuronid psylocyny", enzyme: "UGT1A10 / UGT1A9", reaction: "Glukuronidacja fenolowa (80%)", activity: "inactive", desc: "Główny krążący metabolit eliminowany drogą nerkową.", tHalf: "2 - 4 h" },
        { parentId: "psilocin-compound", id: null, name: "Kwas 4-hydroksyindolo-3-octowy (4-HIAA)", enzyme: "MAO-A / ALDH", reaction: "Oksydacyjna deaminacja", activity: "inactive", desc: "Drobny metabolit deaminacji.", tHalf: "—" }
      ]
    },
    "acetaminophen-compound": {
      rootRole: "active",
      notes: "Lek przeciwgorączkowy i przeciwbólowy; w dawkach terapeutycznych bezpieczny, w przedawkowaniu szlak CYP generuje toksyczny NAPQI.",
      phase1: [
        { id: null, name: "N-acetylo-p-benzochinoamina (NAPQI)", enzyme: "CYP2E1 / CYP1A2", reaction: "Oksydacja (5-10%)", activity: "toxic", desc: "Silnie reaktywny elektrofil wiążący białka hepatocytów; powoduje martwicę wątroby przy wyczerpaniu glutationu.", tHalf: "—" }
      ],
      phase2: [
        { parentId: "NAPQI", id: null, name: "Kwas merkapturowy (detoksykacja GSH)", enzyme: "Glutation-S-transferaza (GST)", reaction: "Koniugacja z glutationem", activity: "inactive", desc: "Bezpieczny produkt neutralizacji NAPQI wydalany z moczem.", tHalf: "2 h" },
        { parentId: "acetaminophen-compound", id: null, name: "Glukuronid paracetamolu", enzyme: "UGT1A1 / UGT1A6", reaction: "Glukuronidacja fenolowa (55-60%)", activity: "inactive", desc: "Główny nietoksyczny szlak eliminacji u dorosłych.", tHalf: "2 - 3 h" },
        { parentId: "acetaminophen-compound", id: null, name: "Siarczan paracetamolu", enzyme: "SULT1A1", reaction: "Sulfatacja fenolowa (30%)", activity: "inactive", desc: "Główny nietoksyczny szlak eliminacji u dzieci.", tHalf: "2 - 3 h" }
      ]
    },
    "enalapril-compound": {
      rootRole: "prodrug",
      notes: "Ester etylowy proleku; słaby inhibitor ACE, o biodostępności ok. 60%, aktywowany w wątrobie.",
      phase1: [
        { id: "enalaprilat-anhydrous-compound", name: "Enalaprylat", enzyme: "Karboksyloesteraza 1 (CES1)", reaction: "Deestryfikacja hydrolityczna", activity: "active", desc: "Właściwy, silny dikwasowy inhibitor enzymu konwertującego angiotensynę (ACE).", tHalf: "11 - 35 h" }
      ],
      phase2: [
        { parentId: "enalaprilat-anhydrous-compound", id: null, name: "Wydalany w postaci niezmienionej", enzyme: "Filtracja kłębuszkowa", reaction: "Wydalanie nerkowe", activity: "inactive", desc: "Enalaprylat nie podlega dalszemu metabolizmowi i jest wydalany z moczem.", tHalf: "—" }
      ]
    },
    "losartan-compound": {
      rootRole: "active",
      notes: "Antagonista receptora AT1; sam wykazuje aktywność, lecz jego metabolit karboksylowy jest wielokrotnie silniejszy.",
      phase1: [
        { id: null, name: "Kwas EXP3174 (Kwas losartanowy)", enzyme: "CYP2C9 / CYP3A4", reaction: "Oksydacja grupy alkoholowej do karboksylowej (14%)", activity: "active", desc: "Niekontrolowany, niekompetycyjny bloker receptora AT1 o 10-40 razy silniejszym i dłuższym działaniu niż losartan.", tHalf: "6 - 9 h" }
      ],
      phase2: [
        { parentId: "Kwas EXP3174", id: null, name: "Glukuronid EXP3174", enzyme: "UGT2B7", reaction: "Glukuronidacja acylu", activity: "inactive", desc: "Eliminacja żółciowa i nerkowa.", tHalf: "—" }
      ]
    },
    "diamorphine-compound": {
      rootRole: "prodrug",
      notes: "Diacetylomorfina; silnie lipofilny prolek gwałtownie penetrujący barierę krew-mózg w ciągu sekund.",
      phase1: [
        { id: null, name: "6-Monoacetylomorfina (6-MAM)", enzyme: "Esterazy surowicze i mózgowe", reaction: "Szybka deacetylacja (t½ 3-5 min)", activity: "active", desc: "Silny agonista receptora MOR o unikalnym profilu euforii w OUN.", tHalf: "15 - 30 min" },
        { id: "morphine-compound", name: "Morfina", enzyme: "Esterazy tkankowe", reaction: "Druga deacetylacja", activity: "active", desc: "Stabilny metabolit zapewniający przedłużone działanie analgetyczne.", tHalf: "2 - 4 h" }
      ],
      phase2: [
        { parentId: "morphine-compound", id: null, name: "Morfino-6-glukuronid (M6G)", enzyme: "UGT2B7", reaction: "Glukuronidacja", activity: "active", desc: "Aktywny analgetyk opioidowy.", tHalf: "3 - 5 h" }
      ]
    },
    "amitriptyline-compound": {
      rootRole: "active",
      notes: "Trójpierścieniowy lek przeciwdepresyjny o dominującym komponencie serotoninergicznym i sedatywnym.",
      phase1: [
        { id: null, name: "Nortryptylina", enzyme: "CYP2C19 / CYP1A2", reaction: "N-demetylacja", activity: "active", desc: "Aktywny metabolit o silnym i selektywnym hamowaniu wychwytu zwrotnego noradrenaliny (NRI).", tHalf: "18 - 44 h" }
      ],
      phase2: [
        { parentId: "Nortryptylina", id: null, name: "10-Hydroksynortryptylina", enzyme: "CYP2D6", reaction: "Hydroksylacja alicykliczna", activity: "active", desc: "Umiarkowanie aktywny metabolit; stężenie zależne od fenotypu CYP2D6.", tHalf: "—" }
      ]
    },
    "risperidone-compound": {
      rootRole: "active",
      notes: "Atypowy neuroleptyk przeciwpsychotyczny (bloker 5-HT2A i D2).",
      phase1: [
        { id: null, name: "Paliperydon (9-Hydroksyrisperidon)", enzyme: "CYP2D6 / CYP3A4", reaction: "9-hydroksylacja", activity: "active", desc: "Główny czynny metabolit o tożsamym profilu farmakologicznym, zarejestrowany także jako odrębny lek.", tHalf: "23 h" }
      ],
      phase2: [
        { parentId: "Paliperydon", id: null, name: "Glukuronid paliperydonu", enzyme: "UGT", reaction: "Wydalanie nerkowe", activity: "inactive", desc: "Eliminowany głównie przez nerki.", tHalf: "—" }
      ]
    },
    "simvastatin-compound": {
      rootRole: "prodrug",
      notes: "Laktonowy prolek hipolipemizujący; forma laktonowa nie posiada aktywności hamującej reduktazę HMG-CoA.",
      phase1: [
        { id: null, name: "Hydroksykwas simwastatynowy (Beta-hydroksykwas)", enzyme: "Karboksyloesterazy wątrobowe / Spontaniczna hydroliza", reaction: "Otwarcie pierścienia laktonowego", activity: "active", desc: "Właściwa postać aktywna kompetencyjnie hamująca enzym HMG-CoA reduktazę.", tHalf: "2 - 3 h" }
      ],
      phase2: [
        { parentId: "Hydroksykwas simwastatynowy", id: null, name: "Metabolity hydroksylowe & Glukuronidy", enzyme: "CYP3A4 / UGT1A1 / UGT1A3", reaction: "Oksydacja i glukuronidacja acylu", activity: "inactive", desc: "Eliminacja żółciowa z kałem (60%) i z moczem (13%).", tHalf: "—" }
      ]
    },
    "clopidogrel-compound": {
      rootRole: "prodrug",
      notes: "Tienopirydynowy prolek przeciwpłytkowy; ok. 85% dawki jest inaktywowane przez esterazy (CES1), a tylko 15% podlega aktywacji przez CYP.",
      phase1: [
        { id: null, name: "2-Oksoklopidogrel", enzyme: "CYP2C19 / CYP1A2 / CYP2B6", reaction: "Pierwsza oksydacja (etap pośredni)", activity: "prodrug", desc: "Metabolit pośredni podlegający kolejnemu utlenieniu.", tHalf: "—" },
        { id: null, name: "Kwas klopidogrelowy (nieaktywny)", enzyme: "CES1", reaction: "Hydroliza estrowa (85% dawki)", activity: "inactive", desc: "Główny krążący nieaktywny produkt eliminacji.", tHalf: "—" }
      ],
      phase2: [
        { parentId: "2-Oksoklopidogrel", id: null, name: "Aktywny metabolit tiolowy (H4)", enzyme: "CYP2C19 / CYP2C9 / CYP3A4", reaction: "Druga oksydacja i otwarcie pierścienia", activity: "active", desc: "Nieodwracalny kowalencyjny bloker receptora płytkowego P2Y12 (antytrombotyczny).", tHalf: "0.5 - 1 h" }
      ]
    },
    "prednisone-compound": {
      rootRole: "prodrug",
      notes: "Prolek syntetycznego glikokortykosteroidu; grupa 11-ketonowa nie wykazuje powinowactwa do receptora GR.",
      phase1: [
        { id: "prednisolone-compound", name: "Prednizolon", enzyme: "11-beta-hydroksysteroidowa dehydrogenaza typ 1 (11-beta-HSD1)", reaction: "Redukcja 11-ketonu do grupy hydroksylowej", activity: "active", desc: "Czynny farmakologicznie glikokortykosteroid o działaniu przeciwzapalnym i immunosupresyjnym.", tHalf: "2 - 4 h" }
      ],
      phase2: [
        { parentId: "prednisolone-compound", id: null, name: "Siarczany i glukuronidy 20-dihydro", enzyme: "CYP3A4 / UGT / SULT", reaction: "Redukcja i koniugacja", activity: "inactive", desc: "Nieaktywne koniugaty eliminowane z moczem.", tHalf: "—" }
      ]
    },
    "valacyclovir-compound": {
      rootRole: "prodrug",
      notes: "Ester L-walilowy acyklowiru; 3- do 5-krotnie większa biodostępność po podaniu doustnym niż acyklowir.",
      phase1: [
        { id: "acyclovir-compound", name: "Acyklowir", enzyme: "Karboksyloesteraza 1 (CES1) / Hydrolaza walacyklowirowa", reaction: "Szybka hydroliza estru walilowego", activity: "active", desc: "Aktywny analog nukleozydu hamujący polimerazę DNA wirusów HSV i VZV.", tHalf: "2.5 - 3.5 h" }
      ],
      phase2: [
        { parentId: "acyclovir-compound", id: null, name: "9-Karboksymetoksymetyloguanina (CMMG)", enzyme: "Dehydrogenaza alkoholowa / Aldehydowa", reaction: "Oksydacja (10%)", activity: "inactive", desc: "Wydalany z moczem.", tHalf: "—" }
      ]
    },
    "valganciclovir-compound": {
      rootRole: "prodrug",
      notes: "Ester L-walilowy gancyklowiru stosowany w profilaktyce i leczeniu zakażeń CMV.",
      phase1: [
        { id: "ganciclovir-compound", name: "Gancyklowir", enzyme: "Esterazy jelitowe i wątrobowe", reaction: "Hydroliza estrowa", activity: "active", desc: "Aktywny lek przeciwwirusowy fosforylowany przez kinazę wirusową UL97.", tHalf: "3 - 5 h" }
      ],
      phase2: [
        { parentId: "ganciclovir-compound", id: null, name: "Wydalany z moczem w postaci niezmienionej", enzyme: "Filtracja kłębuszkowa (>90%)", reaction: "Eliminacja nerkowa", activity: "inactive", desc: "Konieczna modyfikacja dawkowania przy niewydolności nerek.", tHalf: "—" }
      ]
    },
    "levodopa-compound": {
      rootRole: "prodrug",
      notes: "Prekursor dopaminy przenikający przez barierę krew-mózg za pośrednictwem transportera aminokwasów LAT1.",
      phase1: [
        { id: "dopamine-drug-compound", name: "Dopamina", enzyme: "Dekarboksylaza aromatycznych L-aminokwasów (AADC)", reaction: "Dekarboksylacja w neuronach prążkowia", activity: "active", desc: "Kluczowy neuroprzekaźnik znoszący objawy parkinsonizmu.", tHalf: "1 - 2 h" },
        { id: null, name: "3-O-Metylodopa (3-OMD)", enzyme: "COMT", reaction: "O-metylacja obwodowa (10%)", activity: "inactive", desc: "Konkuruje z lewodopą o transport do mózgu.", tHalf: "15 h" }
      ],
      phase2: [
        { parentId: "dopamine-drug-compound", id: null, name: "Kwas homowaniliowy (HVA) & DOPAC", enzyme: "MAO-B / COMT / ALDH", reaction: "Oksydacja i O-metylacja", activity: "inactive", desc: "Główne metabolity końcowe wydalane z moczem.", tHalf: "—" }
      ]
    },
    "primidone-compound": {
      rootRole: "prodrug",
      notes: "Lek przeciwdrgawkowy z grupy pochodnych barbituranowych.",
      phase1: [
        { id: "phenobarbital-compound", name: "Fenobarbital", enzyme: "CYP450", reaction: "Oksydacja grupy metylenowej (15-25%)", activity: "active", desc: "Silny barbituranowy modulator receptorów GABA-A o długim t½ (75-120 h).", tHalf: "75 - 120 h" },
        { id: null, name: "Fenyloetylomalonamid (PEMA)", enzyme: "Hydrolazy", reaction: "Otwarcie pierścienia (50%)", activity: "active", desc: "Aktywny metabolit przeciwdrgawkowy nasilający działanie fenobarbitalu.", tHalf: "24 - 48 h" }
      ],
      phase2: [
        { parentId: "phenobarbital-compound", id: null, name: "p-Hydroksyfenobarbital & Glukuronidy", enzyme: "CYP2C9 / UGT", reaction: "Hydroksylacja aromatyczna i glukuronidacja", activity: "inactive", desc: "Wydalany z moczem.", tHalf: "—" }
      ]
    },
    "aripiprazole-compound": {
      rootRole: "active",
      notes: "Atypowy lek przeciwpsychotyczny (częściowy agonista D2 i 5-HT1A). Główny szlak metaboliczny prowadzi do aktywnego dehydroarypiprazolu.",
      phase1: [
        { id: null, name: "Dehydroarypiprazol", enzyme: "CYP3A4 / CYP2D6", reaction: "Dehydrogenacja", activity: "active", desc: "Aktywny metabolit odpowiadający za ok. 40% ekspozycji leku, o powinowactwie do D2 zbliżonym do leku macierzystego.", tHalf: "94 h" }
      ],
      phase2: [
        { parentId: "Dehydroarypiprazol", id: null, name: "Glukuronid dehydroarypiprazolu", enzyme: "UGT", reaction: "Koniugacja i eliminacja", activity: "inactive", desc: "Wydalany z kałem (55%) i moczem (25%).", tHalf: "—" }
      ]
    },
    "fluoxetine-compound": {
      rootRole: "active",
      notes: "Selektywny inhibitor wychwytu zwrotnego serotoniny (SSRI) o bardzo długim okresie półtrwania.",
      phase1: [
        { id: null, name: "Norfluoksetyna", enzyme: "CYP2D6 / CYP2C9", reaction: "N-demetylacja", activity: "active", desc: "Równie silny inhibitor SERT jak fluoksetyna, o t½ wynoszącym 7 - 15 dni, wymagający długiego washoutu.", tHalf: "7 - 15 dni" }
      ],
      phase2: [
        { parentId: "Norfluoksetyna", id: null, name: "Glukuronid norfluoksetyny", enzyme: "UGT", reaction: "Glukuronidacja", activity: "inactive", desc: "Końcowy metabolit wydalany przez nerki.", tHalf: "—" }
      ]
    },
    "venlafaxine-compound": {
      rootRole: "active",
      notes: "Inhibitor wychwytu zwrotnego serotoniny i noradrenaliny (SNRI).",
      phase1: [
        { id: null, name: "Deswenlafaksyna (O-demetylowenlafaksyna)", enzyme: "CYP2D6", reaction: "O-demetylacja (70%)", activity: "active", desc: "Główny czynny metabolit odpowiadający za działanie przeciwdepresyjne SNRI.", tHalf: "11 h" }
      ],
      phase2: [
        { parentId: "Deswenlafaksyna", id: null, name: "Glukuronid deswenlafaksyny", enzyme: "UGT", reaction: "Koniugacja glukuronidowa", activity: "inactive", desc: "Główny metabolit wydalany z moczem.", tHalf: "—" }
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
    if (foundCyps.size > 0) {
      foundCyps.forEach((cyp) => {
        phase1.push({
          id: null,
          name: `Metabolit oksydacyjny (${cyp})`,
          enzyme: cyp,
          reaction: "Oksydacja / Hydroksylacja Fazy I",
          activity: "active",
          desc: `Produkt biotransformacji przez izoenzym ${cyp} w mikrosomach wątrobowych.`,
          tHalf: "—"
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
        tHalf: "—"
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
        tHalf: "—"
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
        tHalf: "—"
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
        tHalf: "—"
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
      enzyme: "— (Związek macierzysty)",
      reaction: "Podanie pierwotne",
      desc: data.notes || c.d,
      tHalf: c.pk && c.pk.hl ? `${c.pk.hl[0]}${c.pk.hl[1] ? ` - ${c.pk.hl[1]}` : ""} ${c.pk.hl[2] || "h"}` : (c.hlh ? `${c.hlh.toFixed(1)} h` : "—")
    };

    const phase1Nodes = (data.phase1 || []).map((p, idx) => {
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
        tHalf: p.tHalf || (matchComp && matchComp.hlh ? `${matchComp.hlh.toFixed(1)} h` : "—")
      };
    });

    const phase2Nodes = (data.phase2 || []).map((p, idx) => {
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
        tHalf: p.tHalf || "—"
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

    const getActivityBadge = (act) => {
      const cls = act === "active" ? "activity-active" : act === "prodrug" ? "activity-prodrug" : act === "toxic" ? "activity-toxic" : "activity-inactive";
      const lbl = act === "active" ? "🔥 Aktywny" : act === "prodrug" ? "✨ Prolek" : act === "toxic" ? "⚠️ Toksyczny" : "💤 Nieaktywny";
      return `<span class="meta-activity-badge ${cls}">${lbl}</span>`;
    };

    const renderCard = (node) => {
      const isSel = (node.id === activeMetaboliteSelectedNode);
      const isCatalog = !!node.compound;
      return `
        <div class="meta-node-card ${isSel ? 'selected' : ''}" data-meta-node="${esc(node.id)}">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px">
            <b style="font-size:12px;color:var(--color-text)">${esc(node.name)}</b>
            ${getActivityBadge(node.activity)}
          </div>
          ${node.enzyme && node.enzyme !== "—" ? `
            <div class="meta-connector">
              <span class="meta-enzyme-pill">⚡ ${esc(node.enzyme)}</span>
              ${node.reaction ? `<span style="font-size:10px;color:var(--color-text-muted)">${esc(node.reaction)}</span>` : ""}
            </div>` : ""}
          <p style="font-size:11px;color:var(--color-text-muted);margin:0;line-height:1.35">${esc(node.desc || "Brak opisu.")}</p>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px;font-size:10px">
            <span style="color:var(--color-text-muted)">t½: <b>${esc(node.tHalf || "—")}</b></span>
            ${isCatalog ? '<span class="tag ok" style="font-size:9px">W katalogu ✓</span>' : '<span class="tag" style="font-size:9px">Metabolit pośredni</span>'}
          </div>
        </div>
      `;
    };

    treeEl.innerHTML = `
      <div class="meta-phase-col">
        <div class="meta-phase-head">
          <span>Związek Macierzysty</span>
          <span class="tag" style="font-size:9px">Faza 0</span>
        </div>
        ${renderCard(cascade.root)}
      </div>

      <div class="meta-phase-col">
        <div class="meta-phase-head">
          <span>Faza I: Modyfikacje Funkcyjne</span>
          <span class="tag" style="font-size:9px">${cascade.phase1.length} szlaki</span>
        </div>
        ${cascade.phase1.length ? cascade.phase1.map(renderCard).join("") : '<div class="empty" style="padding:1rem">Brak szlaków Fazy I.</div>'}
      </div>

      <div class="meta-phase-col">
        <div class="meta-phase-head">
          <span>Faza II: Koniugacja & Eliminacja</span>
          <span class="tag" style="font-size:9px">${cascade.phase2.length} koniugaty</span>
        </div>
        ${cascade.phase2.length ? cascade.phase2.map(renderCard).join("") : '<div class="empty" style="padding:1rem">Brak szlaków Fazy II.</div>'}
      </div>
    `;

    treeEl.querySelectorAll("[data-meta-node]").forEach((card) => {
      card.onclick = () => {
        const nid = card.dataset.metaNode;
        activeMetaboliteSelectedNode = nid;
        treeEl.querySelectorAll(".meta-node-card").forEach((c) => c.classList.toggle("selected", c.dataset.metaNode === nid));
        renderMetaboliteSidePanelDOM(c, cascade);
      };
    });
  }

  function renderMetaboliteSidePanelDOM(c, cascade) {
    const sideEl = $("metaSidePanel");
    if (!sideEl) return;

    let selNode = cascade.root.id === activeMetaboliteSelectedNode ? cascade.root : null;
    if (!selNode) selNode = cascade.phase1.find((n) => n.id === activeMetaboliteSelectedNode);
    if (!selNode) selNode = cascade.phase2.find((n) => n.id === activeMetaboliteSelectedNode);
    if (!selNode) selNode = cascade.root;

    const mComp = selNode.compound;
    const isRoot = (selNode === cascade.root);
    const struct = mComp ? getChemStructure(mComp) : (isRoot ? getChemStructure(c) : null);

    const getActivityBadge = (act) => {
      const cls = act === "active" ? "activity-active" : act === "prodrug" ? "activity-prodrug" : act === "toxic" ? "activity-toxic" : "activity-inactive";
      const lbl = act === "active" ? "🔥 Aktywny farmakologicznie" : act === "prodrug" ? "✨ Prekursor / Prolek" : act === "toxic" ? "⚠️ Toksyczny intermediat" : "💤 Nieaktywny metabolit";
      return `<span class="meta-activity-badge ${cls}">${lbl}</span>`;
    };

    let compTableHtml = "";
    if (mComp && !isRoot) {
      const dMW = (mComp.pr && c.pr) ? (mComp.pr[0] - c.pr[0]).toFixed(1) : "—";
      const dLogP = (mComp.pr && c.pr) ? (mComp.pr[1] - c.pr[1]).toFixed(2) : "—";
      const dPSA = (mComp.pr && c.pr) ? (mComp.pr[2] - c.pr[2]).toFixed(1) : "—";
      compTableHtml = `
        <div style="font-size:11px;font-weight:700;margin-top:6px;text-transform:uppercase;color:var(--color-text-muted)">Porównanie ze związkiem macierzystym:</div>
        <table class="meta-diff-table">
          <tr><th>Cecha</th><td><b>${esc(c.n)}</b></td><td><b>${esc(mComp.n)}</b> (Δ)</td></tr>
          <tr><th>Masa cząst.</th><td>${c.pr ? c.pr[0] : "—"}</td><td>${mComp.pr ? mComp.pr[0] : "—"} (${dMW > 0 ? "+" + dMW : dMW})</td></tr>
          <tr><th>ALogP</th><td>${c.pr ? c.pr[1] : "—"}</td><td>${mComp.pr ? mComp.pr[1] : "—"} (${dLogP > 0 ? "+" + dLogP : dLogP})</td></tr>
          <tr><th>PSA</th><td>${c.pr ? c.pr[2] + " Å²" : "—"}</td><td>${mComp.pr ? mComp.pr[2] + " Å²" : "—"} (${dPSA > 0 ? "+" + dPSA : dPSA})</td></tr>
          <tr><th>t½</th><td>${cascade.root.tHalf}</td><td>${selNode.tHalf}</td></tr>
        </table>
      `;
    }

    let actionBtnsHtml = "";
    if (mComp && !isRoot) {
      const inStack = state.stack.has(mComp.i);
      actionBtnsHtml = `
        <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px">
          <button class="btn btn-gold" id="metaCompareBtn" style="font-size:11px;padding:6px 10px">⚖️ Porównaj z prolekiem (Comparator)</button>
          <div style="display:flex;gap:6px">
            <button class="btn ${inStack ? 'btn-gold' : ''}" id="metaStackBtn" style="flex:1;font-size:11px;padding:6px">
              ${inStack ? "✓ W stacku" : "+ Dodaj do stacka"}
            </button>
            <button class="btn" id="metaGraphBtn" style="flex:1;font-size:11px;padding:6px">🎯 Na grafie</button>
          </div>
        </div>
      `;
    }

    sideEl.innerHTML = `
      <div style="border-bottom:1px solid var(--color-border);padding-bottom:8px">
        <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.5px;color:var(--color-text-muted)">Wybrany węzeł biotransformacji</div>
        <b style="font-size:14px;display:block;margin:2px 0 6px 0">${esc(selNode.name)}</b>
        ${getActivityBadge(selNode.activity)}
      </div>

      ${struct ? `
        <div class="chem-card" style="margin:4px 0">
          <div class="chem-card-preview" style="height:120px" data-zoom-chem="${mComp ? mComp.i : c.i}">
            <img src="${struct.url}" alt="${esc(selNode.name)}" loading="lazy">
          </div>
          <div class="chem-meta" style="font-size:10px">
            <span>${esc(mComp ? mComp.mf || "" : c.mf || "")}</span>
            <a href="${struct.extUrl}" target="_blank" rel="noopener noreferrer">${struct.extLabel} ↗</a>
          </div>
        </div>
      ` : ""}

      <div style="font-size:11px">
        <div style="color:var(--color-text-muted);font-size:10px;text-transform:uppercase">Enzym & Szlak:</div>
        <b>${esc(selNode.enzyme)}</b> · <span>${esc(selNode.reaction)}</span>
      </div>

      <div style="font-size:11px">
        <div style="color:var(--color-text-muted);font-size:10px;text-transform:uppercase">Znaczenie kliniczne:</div>
        <p style="margin:2px 0;line-height:1.4">${esc(selNode.desc)}</p>
      </div>

      ${compTableHtml}
      ${actionBtnsHtml}
    `;

    const metaCompareBtn = sideEl.querySelector("#metaCompareBtn");
    if (metaCompareBtn && mComp) {
      metaCompareBtn.onclick = () => {
        closeMetaboliteModal();
        openComparator([c.i, mComp.i]);
      };
    }
    const metaStackBtn = sideEl.querySelector("#metaStackBtn");
    if (metaStackBtn && mComp) {
      metaStackBtn.onclick = () => {
        toggleInStack(mComp.i);
        const inStack = state.stack.has(mComp.i);
        metaStackBtn.textContent = inStack ? "✓ W stacku" : "+ Dodaj do stacka";
        metaStackBtn.classList.toggle("btn-gold", inStack);
      };
    }
    const metaGraphBtn = sideEl.querySelector("#metaGraphBtn");
    if (metaGraphBtn && mComp) {
      metaGraphBtn.onclick = () => {
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
      const firstActive = cascade.phase1.find((n) => n.activity === "active") || cascade.phase1[0] || cascade.root;
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
    modal.classList.add("open");
  }

  function closeMetaboliteModal() {
    const modal = $("metaboliteModal");
    if (modal) modal.classList.remove("open");
    activeMetaboliteQuery = null;
    activeMetaboliteSelectedNode = null;
  }

  function wireMetaboliteModal() {
    const modal = $("metaboliteModal");
    if (!modal) return;
    const closeBtn = $("metaboliteModalClose");
    if (closeBtn) closeBtn.onclick = closeMetaboliteModal;
    modal.onclick = (e) => {
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
    EVIDENCE_DECADES.forEach((d) => { decadeCounts[d.id] = 0; });

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
        <b>${stats.funnel.p4.toLocaleString("pl")} <span style="font-size:11px;color:var(--color-text-muted);font-weight:normal">(${p4Pct}%)</span></b>
      </div>
      <div class="evidence-kpi-item">
        <small>Etykiety DailyMed FDA</small>
        <b>${stats.regulatory.fdaTotal.toLocaleString("pl")} <span style="font-size:11px;color:var(--color-success);font-weight:normal">(${fdaPct}% ✓)</span></b>
      </div>
      <div class="evidence-kpi-item">
        <small>Dokumentacja SmPC EMA</small>
        <b>${stats.regulatory.emaTotal.toLocaleString("pl")} <span style="font-size:11px;color:var(--color-success);font-weight:normal">(${emaPct}% ✓)</span></b>
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

    funnelEl.innerHTML = stages.map((s) => {
      const active = evidenceFilterState.phase === s.phase;
      const pct = ((s.count / stats.total) * 100).toFixed(1);
      return `
        <div class="evidence-funnel-card ${active ? 'active' : ''}" data-ev-phase="${s.phase}">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span class="badge ${s.cls}">${s.badge}</span>
            <small style="font-size:10px;color:var(--color-text-muted)">${pct}%</small>
          </div>
          <div style="font-weight:700;font-size:12px;margin-top:2px">${s.name}</div>
          <div style="font-size:18px;font-weight:800;font-variant-numeric:tabular-nums;color:var(--color-primary)">${s.count.toLocaleString("pl")}</div>
          <div style="font-size:10px;color:var(--color-text-muted);line-height:1.3">${s.desc}</div>
        </div>
      `;
    }).join("");

    funnelEl.querySelectorAll("[data-ev-phase]").forEach((el) => {
      el.onclick = () => {
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

    bar.innerHTML = EVIDENCE_DECADES.map((d) => {
      const cnt = stats.decades[d.id] || 0;
      const active = evidenceFilterState.decade === d.id;
      return `
        <button class="evidence-timeline-pill ${active ? 'active' : ''}" data-ev-decade="${d.id}">
          ${d.label} <small style="opacity:.8;font-weight:normal">(${cnt})</small>
        </button>
      `;
    }).join("");

    bar.querySelectorAll("[data-ev-decade]").forEach((el) => {
      el.onclick = () => {
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
      if (evidenceFilterState.decade) parts.push(`Dekada: ${evidenceFilterState.decade}`);
      if (evidenceFilterState.query) parts.push(`"${evidenceFilterState.query}"`);
      summaryEl.textContent = parts.length ? `Aktywne filtry: ${parts.join(" · ")}` : "Wszystkie substancje";
    }

    if (!cohort.length) {
      grid.innerHTML = '<p class="empty" style="grid-column:1/-1;padding:2rem;text-align:center">Brak substancji spełniających wybrane kryteria dowodowe.</p>';
      return;
    }

    const visibleItems = cohort.slice(0, evidenceRenderLimit);
    grid.innerHTML = visibleItems.map((c) => {
      const struct = getChemStructure(c);
      let phaseBadge = '<span class="evidence-badge-phase phase-0">Faza 0 / Badawcza</span>';
      if (c.ph === 4) phaseBadge = '<span class="evidence-badge-phase phase-4">Faza 4 · Approved</span>';
      else if (c.ph === 3) phaseBadge = '<span class="evidence-badge-phase phase-3">Faza 3 · Trial</span>';
      else if (c.ph === 2) phaseBadge = '<span class="evidence-badge-phase phase-2">Faza 2 · POC</span>';
      else if (c.ph === 1) phaseBadge = '<span class="evidence-badge-phase phase-1">Faza 1 · PK/Tox</span>';

      const regBadges = [];
      if (c.v) {
        if (c.v.s === "consistent") regBadges.push('<span class="tag ok" style="font-size:10px">✓ FDA</span>');
        else if (c.v.s === "discrepant") regBadges.push('<span class="tag warn" style="font-size:10px">≠ FDA</span>');
        else regBadges.push('<span class="tag" style="font-size:10px">FDA</span>');
      }
      if (c.ve) {
        if (c.ve.s === "consistent") regBadges.push('<span class="tag ok" style="font-size:10px">✓ EMA</span>');
        else if (c.ve.s === "discrepant") regBadges.push('<span class="tag warn" style="font-size:10px">≠ EMA</span>');
        else regBadges.push('<span class="tag" style="font-size:10px">EMA</span>');
      }
      if (c.bb) regBadges.push('<span class="tag warn" style="font-size:10px;font-weight:700">⬛ Black Box</span>');
      if (c.wd) regBadges.push('<span class="tag warn" style="font-size:10px;font-weight:700">🚫 Wycofany</span>');

      const inStack = state.stack.has(c.i);
      const g = GR[c.g] || { label: "" };

      return `
        <div class="evidence-drug-card">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
            <div style="flex:1;min-width:0">
              <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:2px">
                ${phaseBadge}
                ${c.fa ? `<span class="muted" style="font-size:10px;font-weight:600">Rej. ${c.fa}</span>` : ""}
              </div>
              <b style="font-size:var(--text-sm);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${esc(c.n)}">${esc(c.n)}</b>
              <small class="muted" style="font-size:10px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(g.label || "")}</small>
            </div>
            ${struct ? `
              <div style="width:48px;height:48px;flex-shrink:0;background:var(--color-surface);border:1px solid var(--color-border);border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden" data-zoom-chem="${c.i}" title="Powiększ strukturę 2D">
                <img src="${struct.url}" alt="${esc(c.n)}" style="max-width:44px;max-height:44px;object-fit:contain" loading="lazy">
              </div>` : ""}
          </div>
          ${regBadges.length ? `<div style="display:flex;flex-wrap:wrap;gap:4px">${regBadges.join("")}</div>` : ""}
          <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:auto;padding-top:6px;border-top:1px solid var(--color-border)">
            <button class="btn" data-ev-goto="${c.i}" style="font-size:10px;padding:3px 6px" title="Zaznacz substancję na grafie">🎯 Graf</button>
            <button class="btn ${inStack ? 'btn-gold' : ''}" data-ev-stack="${c.i}" style="font-size:10px;padding:3px 6px">${inStack ? '✓ Stack' : '+ Stack'}</button>
            <button class="btn" data-ev-compare="${c.i}" style="font-size:10px;padding:3px 6px" title="Porównaj">⚖️</button>
            <button class="btn" data-ev-meta="${c.i}" style="font-size:10px;padding:3px 6px" title="Kaskada metabolitów">🌿</button>
            <button class="btn" data-ev-dossier="${c.i}" style="font-size:10px;padding:3px 6px" title="Kliniczna monografia (Dossier)">📄</button>
          </div>
        </div>
      `;
    }).join("");

    if (cohort.length > evidenceRenderLimit) {
      const moreBtn = document.createElement("button");
      moreBtn.className = "btn";
      moreBtn.style.gridColumn = "1/-1";
      moreBtn.style.margin = "12px auto";
      moreBtn.style.padding = "8px 24px";
      moreBtn.style.fontWeight = "600";
      moreBtn.textContent = `Pokaż kolejne 60 z ${cohort.length.toLocaleString("pl")} substancji...`;
      moreBtn.onclick = () => {
        evidenceRenderLimit += 60;
        renderEvidenceDrugCards(cohort);
      };
      grid.appendChild(moreBtn);
    }

    grid.querySelectorAll("[data-ev-goto]").forEach((btn) => {
      btn.onclick = () => {
        const idx = +btn.dataset.evGoto;
        closeEvidenceModal();
        select({ type: "compound", i: idx }, true);
      };
    });
    grid.querySelectorAll("[data-ev-stack]").forEach((btn) => {
      btn.onclick = () => {
        const idx = +btn.dataset.evStack;
        toggleInStack(idx);
        renderEvidenceDrugCards(cohort);
      };
    });
    grid.querySelectorAll("[data-ev-compare]").forEach((btn) => {
      btn.onclick = () => {
        const idx = +btn.dataset.evCompare;
        const stackList = [...state.stack];
        if (stackList.length && !stackList.includes(idx)) {
          openComparator([idx, ...stackList]);
        } else {
          openComparator([idx]);
        }
      };
    });
    grid.querySelectorAll("[data-ev-meta]").forEach((btn) => {
      btn.onclick = () => {
        const idx = +btn.dataset.evMeta;
        openMetaboliteModal(idx);
      };
    });
    grid.querySelectorAll("[data-ev-dossier]").forEach((btn) => {
      btn.onclick = () => {
        const idx = +btn.dataset.evDossier;
        openDossierModal("single", idx);
      };
    });
    grid.querySelectorAll("[data-zoom-chem]").forEach((el) => {
      el.onclick = () => openChemLightBox(+el.dataset.zoomChem);
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
      }
    }

    activeEvidenceModalOpen = true;
    evidenceRenderLimit = 60;
    updateEvidenceModalUI();
    wireEvidenceModal();
    modal.classList.add("open");
  }

  function closeEvidenceModal() {
    const modal = $("evidenceModal");
    if (modal) modal.classList.remove("open");
    activeEvidenceModalOpen = false;
  }

  function resetEvidenceFilters() {
    evidenceFilterState = {
      phase: null,
      fda: null,
      ema: null,
      discrepantOnly: false,
      blackBox: false,
      withdrawn: false,
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

    modal.onclick = (e) => {
      if (e.target === modal) closeEvidenceModal();
    };

    const applyGraphBtn = $("evidenceApplyGraphBtn");
    if (applyGraphBtn) {
      applyGraphBtn.onclick = () => {
        const cohort = filterEvidenceCohort();
        if (cohort.length) {
          state.evidenceCohort = new Set(cohort.map((c) => c.i));
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
      sInput.oninput = () => {
        evidenceFilterState.query = sInput.value;
        evidenceRenderLimit = 60;
        const cohort = filterEvidenceCohort();
        renderEvidenceDrugCards(cohort);
      };
    }

    const fdaBtn = $("evFilterFdaBtn");
    if (fdaBtn && !fdaBtn._wired) {
      fdaBtn._wired = true;
      fdaBtn.onclick = () => {
        evidenceFilterState.fda = evidenceFilterState.fda ? null : "any";
        evidenceRenderLimit = 60;
        updateEvidenceModalUI();
      };
    }

    const emaBtn = $("evFilterEmaBtn");
    if (emaBtn && !emaBtn._wired) {
      emaBtn._wired = true;
      emaBtn.onclick = () => {
        evidenceFilterState.ema = evidenceFilterState.ema ? null : "any";
        evidenceRenderLimit = 60;
        updateEvidenceModalUI();
      };
    }

    const discBtn = $("evFilterDiscBtn");
    if (discBtn && !discBtn._wired) {
      discBtn._wired = true;
      discBtn.onclick = () => {
        evidenceFilterState.discrepantOnly = !evidenceFilterState.discrepantOnly;
        evidenceRenderLimit = 60;
        updateEvidenceModalUI();
      };
    }

    const bbBtn = $("evFilterBlackBoxBtn");
    if (bbBtn && !bbBtn._wired) {
      bbBtn._wired = true;
      bbBtn.onclick = () => {
        evidenceFilterState.blackBox = !evidenceFilterState.blackBox;
        evidenceRenderLimit = 60;
        updateEvidenceModalUI();
      };
    }

    const wdBtn = $("evFilterWithdrawnBtn");
    if (wdBtn && !wdBtn._wired) {
      wdBtn._wired = true;
      wdBtn.onclick = () => {
        evidenceFilterState.withdrawn = !evidenceFilterState.withdrawn;
        evidenceRenderLimit = 60;
        updateEvidenceModalUI();
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
    autoRotate: true,
    selectedResidue: null
  };

  const TARGET_3D_CATALOG = {
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
        { r: "Asp155", pos: 155, role: "Mostek solny z naładowanym azotem dietyloamidu / piperydyny" },
        { r: "Ser159", pos: 159, role: "Wiązanie wodorowe z grupą karbonylową liganda" },
        { r: "Trp336", pos: 336, role: "Hydrofobowe oddziaływanie pi-pi z pierścieniem indolowym" },
        { r: "Phe340", pos: 340, role: "Aromatyczna klatka kieszeni ortosterycznej (TM6)" },
        { r: "Asn343", pos: 343, role: "Koordynacja polarna w rdzeniu wiążącym" },
        { r: "Phe339", pos: 339, role: "Przełącznik konformacyjny mikro-przełącznika rotamerowego" }
      ]
    },
    "CHEMBL214": {
      id: "CHEMBL214",
      name: "5-hydroxytryptamine receptor 1A",
      gene: "HTR1A",
      pdb: "7E2X",
      res: "Cryo-EM 3.0 Å",
      uniprot: "P08908",
      ligand: "Aripiprazole",
      affinity: "Ki = 5.6 nM (Częściowy agonista)",
      class: "GPCR (Rodzina 5-HT1)",
      arch: "gpcr",
      pocket: [
        { r: "Asp116", pos: 116, role: "Kluczowy mostek solny z azotem piperazyny" },
        { r: "Val117", pos: 117, role: "Kontakt hydrofobowy z pierścieniem dihydrochinolinonu" },
        { r: "Tyr195", pos: 195, role: "Wiązanie wodorowe z tlenem grupy amidowej" },
        { r: "Phe361", pos: 361, role: "Aromatyczne upakowanie pi-stacking w TM6" },
        { r: "Asn386", pos: 386, role: "Wiązanie wodorowe w części wewnątrzkomórkowej" }
      ]
    },
    "CHEMBL223": {
      id: "CHEMBL223",
      name: "5-hydroxytryptamine receptor 2C",
      gene: "HTR2C",
      pdb: "6BQG",
      res: "Cryo-EM 3.0 Å",
      uniprot: "P28335",
      ligand: "Ergotamine",
      affinity: "Ki = 0.9 nM (Agonista)",
      class: "GPCR (Rodzina 5-HT2)",
      arch: "gpcr",
      pocket: [
        { r: "Asp134", pos: 134, role: "Wiązanie elektrostatyczne z aminą ergoliny" },
        { r: "Ser138", pos: 138, role: "Wiązanie wodorowe z fragmentem peptydowym" },
        { r: "Trp324", pos: 324, role: "Oddziaływanie pi-pi stabilizujące rdzeń ergolinowy" },
        { r: "Phe328", pos: 328, role: "Hydrofobowa kieszeń boczna TM6" },
        { r: "Leu350", pos: 350, role: "Stabilizacja łańcucha alkilowego" }
      ]
    },
    "CHEMBL217": {
      id: "CHEMBL217",
      name: "Dopamine D2 receptor",
      gene: "DRD2",
      pdb: "6CM4",
      res: "Krystalografia RTG 2.87 Å",
      uniprot: "P14416",
      ligand: "Risperidone",
      affinity: "Ki = 3.8 nM (Silny antagonista)",
      class: "GPCR (Dopaminowe D2-like)",
      arch: "gpcr",
      pocket: [
        { r: "Asp114", pos: 114, role: "Mostek solny z azotem zasadowym piperydyny" },
        { r: "Val115", pos: 115, role: "Hydrofobowa ścianka kieszeni ortosterycznej" },
        { r: "Ser193", pos: 193, role: "Oddziaływanie polarne z pierścieniem pirymidynonu" },
        { r: "Phe389", pos: 389, role: "Kluczowy aromatyczny kontakt pi-pi w TM6" },
        { r: "His393", pos: 393, role: "Koordynacja benzizoksazolu w kieszeni drugorzędowej" },
        { r: "Tyr408", pos: 408, role: "Wiązanie wodorowe stabilizujące domenę zewnątrzkomórkową" }
      ]
    },
    "CHEMBL2056": {
      id: "CHEMBL2056",
      name: "Dopamine D1 receptor",
      gene: "DRD1",
      pdb: "7CKZ",
      res: "Cryo-EM 2.9 Å",
      uniprot: "P21728",
      ligand: "Apomorphine",
      affinity: "Ki = 0.7 nM (Agonista)",
      class: "GPCR (Dopaminowe D1-like)",
      arch: "gpcr",
      pocket: [
        { r: "Asp103", pos: 103, role: "Mostek solny z protonowanym azotem aminy" },
        { r: "Ser198", pos: 198, role: "Podwójne wiązanie wodorowe z katecholowymi grupami OH" },
        { r: "Ser202", pos: 202, role: "Kluczowa reszta rozpoznania katecholi w TM5" },
        { r: "Trp285", pos: 285, role: "Oddziaływanie pi-pi z pierścieniem aporfiny" },
        { r: "Phe288", pos: 288, role: "Aromatyczna klatka hydrofobowa" }
      ]
    },
    "CHEMBL233": {
      id: "CHEMBL233",
      name: "Mu opioid receptor",
      gene: "OPRM1",
      pdb: "8EF5",
      res: "Cryo-EM 2.5 Å",
      uniprot: "P35372",
      ligand: "Fentanyl",
      affinity: "Ki = 1.3 nM (Pełny agonista)",
      class: "GPCR (Opioidowe)",
      arch: "gpcr",
      pocket: [
        { r: "Asp147", pos: 147, role: "Kluczowy mostek solny z azotem pierścienia piperydynowego" },
        { r: "Tyr148", pos: 148, role: "Wiązanie wodorowe z grupą karbonylową propanamidu" },
        { r: "Met151", pos: 151, role: "Kontakt van der Waalsa z łańcuchem fenyloetylowym" },
        { r: "Trp293", pos: 293, role: "Głębokie oddziaływanie pi-pi w kieszeni ortosterycznej" },
        { r: "His297", pos: 297, role: "Koordynacja grupy anilinowej fentanylu" },
        { r: "Ile322", pos: 322, role: "Hydrofobowa stabilizacja w TM7" }
      ]
    },
    "CHEMBL237": {
      id: "CHEMBL237",
      name: "Kappa opioid receptor",
      gene: "OPRK1",
      pdb: "6B73",
      res: "Krystalografia RTG 3.1 Å",
      uniprot: "P41145",
      ligand: "Nalfurafine",
      affinity: "Ki = 0.16 nM (Selektywny agonista)",
      class: "GPCR (Opioidowe)",
      arch: "gpcr",
      pocket: [
        { r: "Asp138", pos: 138, role: "Mostek solny z azotem morfinanu" },
        { r: "Tyr139", pos: 139, role: "Wiązanie wodorowe fenolowego tlenu" },
        { r: "Trp287", pos: 287, role: "Hydrofobowe upakowanie pierścienia furanowego" },
        { r: "Ile294", pos: 294, role: "Kieszeń boczna selektywności KOR vs MOR" },
        { r: "Tyr312", pos: 312, role: "Sieć wiązań wodorowych TM7" }
      ]
    },
    "CHEMBL235": {
      id: "CHEMBL235",
      name: "Delta opioid receptor",
      gene: "OPRD1",
      pdb: "4EJ4",
      res: "Krystalografia RTG 3.4 Å",
      uniprot: "P41143",
      ligand: "Naltrindole",
      affinity: "Ki = 0.2 nM (Selektywny antagonista)",
      class: "GPCR (Opioidowe)",
      arch: "gpcr",
      pocket: [
        { r: "Asp128", pos: 128, role: "Mostek solny z kationem aminowym" },
        { r: "Tyr129", pos: 129, role: "Hydroksylowe wiązanie wodorowe" },
        { r: "Trp274", pos: 274, role: "Oddziaływanie z indolową grupą naltrindolu" },
        { r: "His278", pos: 278, role: "Selektywny element rozpoznania DOR" },
        { r: "Leu300", pos: 300, role: "Hydrofobowa kieszeń apolarna" }
      ]
    },
    "CHEMBL218": {
      id: "CHEMBL218",
      name: "Cannabinoid receptor 1",
      gene: "CNR1",
      pdb: "5U09",
      res: "Krystalografia RTG 2.8 Å",
      uniprot: "P21554",
      ligand: "Rimonabant",
      affinity: "Ki = 1.8 nM (Odwrotny agonista)",
      class: "GPCR (Kannabinoidowe)",
      arch: "gpcr",
      pocket: [
        { r: "Phe170", pos: 170, role: "Aromatyczne klamry pi-pi z pierścieniami chlorofenylowymi" },
        { r: "Phe177", pos: 177, role: "Hydrofobowy sufit kieszeni kannabinoidowej" },
        { r: "Lys192", pos: 192, role: "Mostek solny / koordynacja karboksyamidu" },
        { r: "Trp356", pos: 356, role: "Główny przełącznik aktywacji receptora CB1" },
        { r: "Asp366", pos: 366, role: "Stabilizacja zewnątrzkomórkowa pętli ECL2" }
      ]
    },
    "CHEMBL1834": {
      id: "CHEMBL1834",
      name: "Cannabinoid receptor 2",
      gene: "CNR2",
      pdb: "6KPF",
      res: "Cryo-EM 3.2 Å",
      uniprot: "P34972",
      ligand: "AM12033",
      affinity: "Ki = 2.1 nM (Agonista)",
      class: "GPCR (Kannabinoidowe)",
      arch: "gpcr",
      pocket: [
        { r: "Phe87", pos: 87, role: "Hydrofobowa ścianka kieszeni lipidowej" },
        { r: "Phe91", pos: 91, role: "Oddziaływanie aromatyczne z ligandem" },
        { r: "Lys109", pos: 109, role: "Wiązanie polarne w TM3" },
        { r: "Trp258", pos: 258, role: "Przełącznik rotamerowy aktywacji CB2" },
        { r: "Ser285", pos: 285, role: "Koordynacja polarna w TM7" }
      ]
    },
    "CHEMBL228": {
      id: "CHEMBL228",
      name: "GABA-A receptor alpha-1/beta-2/gamma-2",
      gene: "GABRA1",
      pdb: "6D6T",
      res: "Cryo-EM 3.86 Å",
      uniprot: "P14867",
      ligand: "Diazepam",
      affinity: "Ki = 12 nM (Modulator allosteryczny)",
      class: "Cys-loop Ligand-Gated Ion Channel",
      arch: "channel",
      pocket: [
        { r: "His102", pos: 102, role: "Kluczowa reszta wiązania benzodiazepin na granicy alfa/gamma" },
        { r: "Tyr160", pos: 160, role: "Aromatyczne upakowanie pi-stacking z pierścieniem diazepamu" },
        { r: "Thr206", pos: 206, role: "Wiązanie wodorowe z tlenem grupy laktamowej" },
        { r: "Phe77", pos: 77, role: "Hydrofobowa kieszeń podjednostki gamma-2" },
        { r: "Tyr210", pos: 210, role: "Stabilizacja pętli C miejsca allosterycznego" }
      ]
    },
    "CHEMBL230": {
      id: "CHEMBL230",
      name: "NMDA receptor 1 / 2B",
      gene: "GRIN1/GRIN2B",
      pdb: "7EU8",
      res: "Cryo-EM 3.5 Å",
      uniprot: "Q05586",
      ligand: "Ketamine",
      affinity: "Ki = 500 nM (Bloker kanału)",
      class: "Jonotropowy receptor glutaminianowy",
      arch: "channel",
      pocket: [
        { r: "Arg523", pos: 523, role: "Wiązanie elektrostatyczne w kanale przepływu jonów" },
        { r: "Glu413", pos: 413, role: "Sito selektywności jonowej (barierka wejścia)" },
        { r: "Thr648", pos: 648, role: "Koordynacja pierścienia chlorofenylowego ketaminy" },
        { r: "Trp563", pos: 563, role: "Hydrofobowe zakotwiczenie liganda w porze kanału" },
        { r: "Val644", pos: 644, role: "Zwężenie kanału transbłonowego M3" }
      ]
    },
    "CHEMBL225": {
      id: "CHEMBL225",
      name: "Serotonin transporter",
      gene: "SLC6A4",
      pdb: "5I6X",
      res: "Krystalografia RTG 3.15 Å",
      uniprot: "P31645",
      ligand: "Paroxetine",
      affinity: "Ki = 0.1 nM (Silny inhibitor wychwytu zwrotnego)",
      class: "Transporter monoamin (SLC6)",
      arch: "transporter",
      pocket: [
        { r: "Tyr95", pos: 95, role: "Zewnętrzna zasuwa zamykająca kieszeń substratową" },
        { r: "Asp98", pos: 98, role: "Mostek solny z azotem piperydyny paroksetyny" },
        { r: "Ile172", pos: 172, role: "Hydrofobowa kieszeń B dla fluorofenylu" },
        { r: "Phe335", pos: 335, role: "Oddziaływanie pi-pi stabilizujące benzodioksol" },
        { r: "Ser438", pos: 438, role: "Koordynacja polarna jonu Na+ i liganda" },
        { r: "Gly442", pos: 442, role: "Wiązanie szkieletowe w rdzeniu transportowym" }
      ]
    },
    "CHEMBL238": {
      id: "CHEMBL238",
      name: "Acetylcholinesterase",
      gene: "ACHE",
      pdb: "4EY7",
      res: "Krystalografia RTG 2.35 Å",
      uniprot: "P22303",
      ligand: "Donepezil",
      affinity: "Ki = 5.7 nM (Inhibitor odwracalny)",
      class: "Hydrolaza estrowa (Gardełko katalityczne)",
      arch: "enzyme",
      pocket: [
        { r: "Trp86", pos: 86, role: "Miejsce cholinowe (anionowe) na dnie gardełka" },
        { r: "Tyr124", pos: 124, role: "Hydrofobowa ścianka gardzieli enzymu" },
        { r: "Ser203", pos: 203, role: "Katalityczna triada estrowa (atak nukleofilowy)" },
        { r: "Trp286", pos: 286, role: "Peryferyjne miejsce anionowe (PAS) przy wlocie" },
        { r: "Tyr337", pos: 337, role: "Przewężenie gardełka katalitycznego" },
        { r: "Phe338", pos: 338, role: "Upakowanie pi-stacking pierścienia indanonu" }
      ]
    },
    "CHEMBL221": {
      id: "CHEMBL221",
      name: "Cyclooxygenase-2",
      gene: "PTGS2",
      pdb: "3LN1",
      res: "Krystalografia RTG 2.4 Å",
      uniprot: "P35354",
      ligand: "Celecoxib",
      affinity: "IC50 = 40 nM (Selektywny inhibitor COX-2)",
      class: "Oksydoreduktaza / Syntaza prostaglandyn",
      arch: "enzyme",
      pocket: [
        { r: "Arg120", pos: 120, role: "Wiązanie elektrostatyczne przy wlocie do kanału" },
        { r: "Tyr355", pos: 355, role: "Bariera stereochemiczna kanału cyklooksygenazy" },
        { r: "Val523", pos: 523, role: "Kluczowa reszta kieszeni bocznej (odpowiedzialna za selektywność COX-2 vs COX-1 Ile523)" },
        { r: "Ser530", pos: 530, role: "Miejsce acetylacji przez aspirynę / blokada kwasu arachidonowego" },
        { r: "Phe518", pos: 518, role: "Stabilizacja sulfonamidowej grupy celekoksybu" }
      ]
    },
    "CHEMBL234": {
      id: "CHEMBL234",
      name: "Cyclooxygenase-1",
      gene: "PTGS1",
      pdb: "3N8Z",
      res: "Krystalografia RTG 2.7 Å",
      uniprot: "P23219",
      ligand: "Ibuprofen",
      affinity: "IC50 = 2.6 uM (Nieselektywny NLPZ)",
      class: "Oksydoreduktaza / Syntaza prostaglandyn",
      arch: "enzyme",
      pocket: [
        { r: "Arg120", pos: 120, role: "Mostek solny z karboksylanem ibuprofenu" },
        { r: "Tyr355", pos: 355, role: "Wiązanie wodorowe domykające kanał" },
        { r: "Ile523", pos: 523, role: "Obszerna reszta izoleucyny uniemożliwiająca wniknięcie inhibitorów COX-2" },
        { r: "Ser530", pos: 530, role: "Głębokie dno kieszeni katalitycznej" },
        { r: "Trp387", pos: 387, role: "Kontakt van der Waalsa z łańcuchem izobutylu" }
      ]
    },
    "CHEMBL402": {
      id: "CHEMBL402",
      name: "3-hydroxy-3-methylglutaryl-coenzyme A reductase",
      gene: "HMGCR",
      pdb: "1HW9",
      res: "Krystalografia RTG 2.22 Å",
      uniprot: "P04035",
      ligand: "Atorvastatin",
      affinity: "Ki = 8 nM (Inhibitor reduktazy HMG-CoA)",
      class: "Oksydoreduktaza / Biosynteza cholesterolu",
      arch: "enzyme",
      pocket: [
        { r: "Lys691", pos: 691, role: "Wiązanie elektrostatyczne z grupą dioksyheptanową statyny" },
        { r: "Lys735", pos: 735, role: "Koordynacja polarna mostka tlenowego" },
        { r: "Arg590", pos: 590, role: "Wiązanie wodorowe z kwasem hydroksylowym" },
        { r: "Asp690", pos: 690, role: "Katalityczna sieć transferu protonów" },
        { r: "Glu559", pos: 559, role: "Stabilizacja konformacyjna kieszeni inhibitorowej" }
      ]
    },
    "CHEMBL1862": {
      id: "CHEMBL1862",
      name: "Monoamine oxidase A",
      gene: "MAOA",
      pdb: "2Z5X",
      res: "Krystalografia RTG 2.2 Å",
      uniprot: "P21397",
      ligand: "Clorgyline",
      affinity: "Ki = 0.05 nM (Nieodwracalny inhibitor)",
      class: "Flawoproteina mitochondrialna",
      arch: "enzyme",
      pocket: [
        { r: "FAD", pos: 0, role: "Kofaktor flawinowy tworzący wiązanie kowalencyjne" },
        { r: "Tyr407", pos: 407, role: "Aromatyczna klatka miejsca utleniania aminy" },
        { r: "Tyr444", pos: 444, role: "Hydrofobowe oddziaływanie z pierścieniem dichlorofenylu" },
        { r: "Phe208", pos: 208, role: "Zasuwa wejściowa do jamy katalitycznej MAO-A" },
        { r: "Ile335", pos: 335, role: "Reszta selektywności MAO-A vs MAO-B (Tyr326 w MAO-B)" }
      ]
    },
    "CHEMBL2035": {
      id: "CHEMBL2035",
      name: "Monoamine oxidase B",
      gene: "MAOB",
      pdb: "2V5Z",
      res: "Krystalografia RTG 1.6 Å",
      uniprot: "P27338",
      ligand: "Safinamide",
      affinity: "Ki = 9 nM (Odwracalny inhibitor)",
      class: "Flawoproteina mitochondrialna",
      arch: "enzyme",
      pocket: [
        { r: "FAD", pos: 0, role: "Kofaktor utleniający w kieszeni reakcyjnej" },
        { r: "Tyr398", pos: 398, role: "Aromatyczna ścianka klatki flavinowej" },
        { r: "Tyr435", pos: 435, role: "Stabilizacja pi-pi liganda safinamidu" },
        { r: "Leu171", pos: 171, role: "Hydrofobowa komora wejściowa (kieszeń rozpoznania)" },
        { r: "Ile199", pos: 199, role: "Bramka pomiędzy jamą wejściową a jamą katalityczną" }
      ]
    },
    "CHEMBL209": {
      id: "CHEMBL209",
      name: "Beta-2 adrenergic receptor",
      gene: "ADRB2",
      pdb: "3P0G",
      res: "Krystalografia RTG 2.84 Å",
      uniprot: "P07550",
      ligand: "BI-167107",
      affinity: "Ki = 0.08 nM (Ultrasilny agonista)",
      class: "GPCR (Adrenergiczne)",
      arch: "gpcr",
      pocket: [
        { r: "Asp113", pos: 113, role: "Kluczowy mostek solny z aminą beta-agonistów" },
        { r: "Ser203", pos: 203, role: "Wiązanie wodorowe z katecholową grupą meta-OH" },
        { r: "Ser207", pos: 207, role: "Wiązanie wodorowe z para-OH (odpowiedzialne za aktywację)" },
        { r: "Asn312", pos: 312, role: "Wiązanie wodorowe z chiralną grupą beta-OH" },
        { r: "Phe290", pos: 290, role: "Aromatyczna klatka w TM6 stabilizująca stan aktywny" }
      ]
    },
    "CHEMBL210": {
      id: "CHEMBL210",
      name: "Beta-1 adrenergic receptor",
      gene: "ADRB1",
      pdb: "2VT4",
      res: "Krystalografia RTG 2.7 Å",
      uniprot: "P08588",
      ligand: "Cyanopindolol",
      affinity: "Ki = 0.04 nM (Antagonista)",
      class: "GPCR (Adrenergiczne)",
      arch: "gpcr",
      pocket: [
        { r: "Asp121", pos: 121, role: "Wiązanie jonowe z azotem grupy izopropyloaminowej" },
        { r: "Ser211", pos: 211, role: "Wiązanie wodorowe z grupami tlenowymi" },
        { r: "Ser215", pos: 215, role: "Koordynacja pętli w TM5" },
        { r: "Asn329", pos: 329, role: "Wiązanie wodorowe z grupą beta-alkoholową" },
        { r: "Phe306", pos: 306, role: "Oddziaływanie pi-pi z pierścieniem indolowym" }
      ]
    },
    "CHEMBL202": {
      id: "CHEMBL202",
      name: "Alpha-2A adrenergic receptor",
      gene: "ADRA2A",
      pdb: "6K42",
      res: "Cryo-EM 2.8 Å",
      uniprot: "P08913",
      ligand: "Dexmedetomidine",
      affinity: "Ki = 1.0 nM (Pełny agonista)",
      class: "GPCR (Adrenergiczne)",
      arch: "gpcr",
      pocket: [
        { r: "Asp113", pos: 113, role: "Mostek solny z pierścieniem imidazolowym" },
        { r: "Ser200", pos: 200, role: "Wiązanie wodorowe z resztami aktywacyjnymi" },
        { r: "Ser204", pos: 204, role: "Sieć wiązań wodorowych TM5" },
        { r: "Phe412", pos: 412, role: "Klatka hydrofobowa dla pierścienia dimetylofenylu" },
        { r: "Tyr394", pos: 394, role: "Oddziaływanie pi-pi w dnie kieszeni" }
      ]
    },
    "CHEMBL1824": {
      id: "CHEMBL1824",
      name: "Phosphodiesterase 5A",
      gene: "PDE5A",
      pdb: "1UDT",
      res: "Krystalografia RTG 2.3 Å",
      uniprot: "O76074",
      ligand: "Sildenafil",
      affinity: "IC50 = 3.5 nM (Selektywny inhibitor)",
      class: "Fosfodiesteraza cGMP",
      arch: "enzyme",
      pocket: [
        { r: "Gln817", pos: 817, role: "Bifunkcyjne wiązanie wodorowe z pierścieniem pirazolopirymidynonu" },
        { r: "Phe820", pos: 820, role: "Hydrofobowy zacisk pi-stacking (klamerka fenyloalaninowa)" },
        { r: "Val782", pos: 782, role: "Hydrofobowa kieszeń etoksyfenylu" },
        { r: "Leu765", pos: 765, role: "Kontakt apolarny w kieszonce M" },
        { r: "Tyr612", pos: 612, role: "Koordynacja kationów cynku Zn2+ i magnezu Mg2+" }
      ]
    },
    "CHEMBL206": {
      id: "CHEMBL206",
      name: "Muscarinic acetylcholine receptor M1",
      gene: "CHRM1",
      pdb: "5CXV",
      res: "Krystalografia RTG 2.7 Å",
      uniprot: "P11229",
      ligand: "Tiotropium",
      affinity: "Ki = 0.2 nM (Silny antagonista)",
      class: "GPCR (Cholinergiczne)",
      arch: "gpcr",
      pocket: [
        { r: "Asp105", pos: 105, role: "Mostek solny z czwartorzędowym azotem tiotropium" },
        { r: "Tyr106", pos: 106, role: "Klatka tyrozynowa otaczająca czwartorzędową cholinę" },
        { r: "Tyr381", pos: 381, role: "Oddziaływanie pi-kation z jonem amoniowym" },
        { r: "Trp157", pos: 157, role: "Hydrofobowe dno kieszeni ortosterycznej" },
        { r: "Tyr404", pos: 404, role: "Zewnętrzna pokrywa kieszeni wiążącej w TM7" }
      ]
    },
    "CHEMBL211": {
      id: "CHEMBL211",
      name: "Muscarinic acetylcholine receptor M2",
      gene: "CHRM2",
      pdb: "3UON",
      res: "Krystalografia RTG 3.0 Å",
      uniprot: "P08172",
      ligand: "QNB",
      affinity: "Ki = 0.05 nM (Antagonista)",
      class: "GPCR (Cholinergiczne)",
      arch: "gpcr",
      pocket: [
        { r: "Asp103", pos: 103, role: "Mostek solny z zasadowym azotem chinuklidyny" },
        { r: "Tyr104", pos: 104, role: "Aromatyczna klatka cholinowa TM3" },
        { r: "Trp400", pos: 400, role: "Oddziaływanie pi-pi z pierścieniami fenylowymi liganda" },
        { r: "Tyr403", pos: 403, role: "Wiązanie wodorowe z grupą hydroksylową estru" },
        { r: "Phe181", pos: 181, role: "Reszta pętli zewnątrzkomórkowej ECL2" }
      ]
    },
    "CHEMBL219": {
      id: "CHEMBL219",
      name: "Glucagon-like peptide 1 receptor",
      gene: "GLP1R",
      pdb: "6X18",
      res: "Cryo-EM 2.5 Å",
      uniprot: "P43220",
      ligand: "Semaglutide",
      affinity: "Ki = 0.38 nM (Długo działający agonista)",
      class: "GPCR Klasa B1 (Inkretynowe)",
      arch: "gpcr",
      pocket: [
        { r: "Tyr69", pos: 69, role: "Domenowe wiązanie z N-końcowym fragmentem peptydowym" },
        { r: "Trp39", pos: 39, role: "Wiązanie hydrofobowe z resztą kwasu tłuszczowego" },
        { r: "Arg190", pos: 190, role: "Wiązanie wodorowe z rdzeniem helisy liganda" },
        { r: "Lys197", pos: 197, role: "Mostek solny z łańcuchem peptydowym" },
        { r: "Leu32", pos: 32, role: "Hydrofobowa ścianka domeny ECD" }
      ]
    },
    "CHEMBL1867": {
      id: "CHEMBL1867",
      name: "Androgen receptor",
      gene: "AR",
      pdb: "2AM9",
      res: "Krystalografia RTG 1.64 Å",
      uniprot: "P10275",
      ligand: "Dihydrotestosterone",
      affinity: "Kd = 0.5 nM (Endogenny androgen)",
      class: "Receptor jądrowy / Czynnik transkrypcyjny",
      arch: "enzyme",
      pocket: [
        { r: "Asn705", pos: 705, role: "Wiązanie wodorowe z 17-beta hydroksylem steroidu" },
        { r: "Thr877", pos: 877, role: "Wiązanie wodorowe stabilizujące pierścień D steroidu" },
        { r: "Gln711", pos: 711, role: "Sieć polarna kieszeni wiążącej" },
        { r: "Arg752", pos: 752, role: "Mostek solny / koordynacja grupy 3-keto w pierścieniu A" },
        { r: "Phe764", pos: 764, role: "Hydrofobowe upakowanie szkieletu cyklopentanoperhydrofenantrenu" }
      ]
    },
    "CHEMBL1871": {
      id: "CHEMBL1871",
      name: "Angiotensin II type 1 receptor",
      gene: "AGTR1",
      pdb: "4YAY",
      res: "Krystalografia RTG 2.8 Å",
      uniprot: "P30556",
      ligand: "Olmesartan",
      affinity: "Ki = 7.7 nM (Antagonista AT1 / Sartan)",
      class: "GPCR (Kardiologiczne)",
      arch: "gpcr",
      pocket: [
        { r: "Arg167", pos: 167, role: "Kluczowy mostek solny z pierścieniem tetrazolowym sartanu" },
        { r: "Lys199", pos: 199, role: "Podwójne wiązanie jonowe stabilizujące ligand w TM5" },
        { r: "Asp281", pos: 281, role: "Koordynacja grupy hydroksyalkilowej imidazolu" },
        { r: "Tyr292", pos: 292, role: "Oddziaływanie pi-pi z pierścieniami dwufenylu" },
        { r: "Trp84", pos: 84, role: "Hydrofobowe dno kieszeni receptora AT1" }
      ]
    },
    "CHEMBL226": {
      id: "CHEMBL226",
      name: "Histamine H1 receptor",
      gene: "HRH1",
      pdb: "3RZE",
      res: "Krystalografia RTG 3.1 Å",
      uniprot: "P35367",
      ligand: "Doxepin",
      affinity: "Ki = 0.1 nM (Silny antagonista H1)",
      class: "GPCR (Histaminowe)",
      arch: "gpcr",
      pocket: [
        { r: "Asp107", pos: 107, role: "Kluczowy mostek solny z protonowaną aminą doksepiny" },
        { r: "Tyr108", pos: 108, role: "Aromatyczna klatka w TM3" },
        { r: "Trp428", pos: 428, role: "Oddziaływanie pi-pi z pierścieniem dibenzoksepinowym" },
        { r: "Phe432", pos: 432, role: "Hydrofobowa ściana ortosteryczna w TM6" },
        { r: "Asn198", pos: 198, role: "Wiązanie wodorowe pętli zewnątrzkomórkowej" }
      ]
    },
    "CHEMBL240": {
      id: "CHEMBL240",
      name: "Dopamine transporter",
      gene: "SLC6A3",
      pdb: "4M48",
      res: "Krystalografia RTG 2.95 Å",
      uniprot: "Q01959",
      ligand: "Nortriptyline",
      affinity: "Ki = 18 nM (Inhibitor wychwytu zwrotnego)",
      class: "Transporter monoamin (SLC6)",
      arch: "transporter",
      pocket: [
        { r: "Asp79", pos: 79, role: "Mostek solny z azotem aminy wtórnej" },
        { r: "Phe76", pos: 76, role: "Klatka pi-stacking z pierścieniem tricyklicznym" },
        { r: "Val152", pos: 152, role: "Hydrofobowy kontakt w rdzeniu wiążącym" },
        { r: "Phe320", pos: 320, role: "Aromatyczna ścianka kieszeni wychwytu dopaminy" },
        { r: "Ser422", pos: 422, role: "Wiązanie wodorowe koordynujące z jonami sodu" }
      ]
    }
  };

  function resolveTarget3D(targetRef) {
    if (targetRef == null) return TARGET_3D_CATALOG["CHEMBL224"];
    if (typeof targetRef === "number") {
      const t = T[targetRef];
      if (!t) return TARGET_3D_CATALOG["CHEMBL224"];
      if (TARGET_3D_CATALOG[t.id]) return TARGET_3D_CATALOG[t.id];
      const byName = Object.values(TARGET_3D_CATALOG).find((x) => x.name.toLowerCase() === (t.n || "").toLowerCase());
      if (byName) return byName;
      // Synthesize fallback entry for AlphaFold DB
      return {
        id: t.id,
        name: t.n || "Cel molekularny",
        gene: (t.n || "Target").split(" ")[0].toUpperCase(),
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

    const pocketAtoms = (targetInfo.pocket || []).map((p, idx) => {
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
      { elem: "N", x: 0.0, y: -0.8, z: 0.5, c: "#3b82f6", r: 2.2 },
      { elem: "C", x: 1.8, y: -0.2, z: 0.2, c: "#10b981", r: 2.4 },
      { elem: "C", x: 2.6, y: 1.6, z: -0.1, c: "#10b981", r: 2.4 },
      { elem: "C", x: 1.4, y: 2.8, z: -0.3, c: "#10b981", r: 2.4 },
      { elem: "C", x: -0.4, y: 2.2, z: -0.1, c: "#10b981", r: 2.4 },
      { elem: "C", x: -1.0, y: 0.4, z: 0.3, c: "#10b981", r: 2.4 },
      { elem: "C", x: -2.8, y: -0.2, z: 0.6, c: "#10b981", r: 2.4 },
      { elem: "O", x: -3.6, y: -1.8, z: 0.8, c: "#ef4444", r: 2.3 },
      { elem: "C", x: 0.4, y: -2.6, z: 0.7, c: "#10b981", r: 2.4 },
      { elem: "C", x: 2.2, y: -2.8, z: 0.6, c: "#10b981", r: 2.4 }
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
      geom.helices.forEach((h, hIdx) => {
        const p1 = project(h.x1, h.y1, h.z1);
        const p2 = project(h.x2, h.y2, h.z2);
        const midZ = (p1.pz + p2.pz) * 0.5;

        items.push({
          type: "helix",
          z: midZ,
          draw: () => {
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
      const surfPoints = geom.pocketAtoms.map((a) => project(a.x * 1.5, a.y * 1.5, a.z * 1.5));
      const avgZ = surfPoints.reduce((acc, p) => acc + p.pz, 0) / (surfPoints.length || 1);

      items.push({
        type: "surface",
        z: avgZ - 10,
        draw: () => {
          ctx.beginPath();
          surfPoints.forEach((p, idx) => {
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
      geom.pocketAtoms.forEach((pa, pIdx) => {
        const p = project(pa.x, pa.y, pa.z);
        const isSelected = struct3DState.selectedResidue === pa.r;

        items.push({
          type: "pocket_atom",
          z: p.pz + 5,
          draw: () => {
            ctx.beginPath();
            ctx.arc(p.px, p.py, Math.max(3.5, p.scale * (isSelected ? 1.4 : 0.9)), 0, Math.PI * 2);
            ctx.fillStyle = isSelected ? "#38bdf8" : "#f59e0b";
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
      geom.ligandBonds.forEach(([i, j]) => {
        const a1 = geom.ligandAtoms[i];
        const a2 = geom.ligandAtoms[j];
        const p1 = project(a1.x, a1.y, a1.z);
        const p2 = project(a2.x, a2.y, a2.z);
        const midZ = (p1.pz + p2.pz) * 0.5 + 8;

        items.push({
          type: "bond",
          z: midZ,
          draw: () => {
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

      geom.ligandAtoms.forEach((la) => {
        const p = project(la.x, la.y, la.z);

        items.push({
          type: "ligand_atom",
          z: p.pz + 10,
          draw: () => {
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

    items.sort((a, b) => a.z - b.z);
    items.forEach((item) => item.draw());

    ctx.restore();
  }

  function start3DAnimationLoop() {
    if (struct3DRaf) return;
    function loop() {
      if (!activeStruct3DModalOpen) {
        struct3DRaf = null;
        return;
      }
      if (struct3DState.autoRotate && !struct3DState.isDragging) {
        struct3DState.rotY += 0.0035;
        draw3DComplexCanvas();
      }
      struct3DRaf = requestAnimationFrame(loop);
    }
    struct3DRaf = requestAnimationFrame(loop);
  }

  function populate3DTargetSelector() {
    const sel = $("struct3DTargetSelect");
    if (!sel) return;

    const entries = Object.values(TARGET_3D_CATALOG);
    const groups = {};
    entries.forEach((e) => {
      const cls = e.class || "Inne";
      if (!groups[cls]) groups[cls] = [];
      groups[cls].push(e);
    });

    sel.innerHTML = Object.entries(groups).map(([cls, items]) => `
      <optgroup label="${esc(cls)}">
        ${items.map((it) => `<option value="${esc(it.id)}" ${it.id === struct3DState.targetId ? "selected" : ""}>${esc(it.name)} (${esc(it.pdb)})</option>`).join("")}
      </optgroup>
    `).join("");

    sel.onchange = () => {
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

    const tIdx = T.findIndex((x) => x.id === tInfo.id || (x.n && x.n.toLowerCase() === tInfo.name.toLowerCase()));
    const ligands = tIdx >= 0 ? (byTarget[tIdx] || []).map((i) => C[i]) : [];
    const ligandsSlice = ligands.slice(0, 10);

    const pocketHtml = (tInfo.pocket || []).map((p) => {
      const isSelected = struct3DState.selectedResidue === p.r;
      return `
        <div class="struct-pocket-pill ${isSelected ? 'active' : ''}" data-pocket-r="${esc(p.r)}" style="display:flex;justify-content:space-between;align-items:flex-start;width:100%;margin-bottom:4px">
          <div>
            <b style="color:var(--color-primary)">${esc(p.r)}</b>
            <div style="font-size:10px;color:var(--color-text-muted);line-height:1.3;margin-top:2px">${esc(p.role)}</div>
          </div>
          <span class="struct-pill-tag">Kieszeń</span>
        </div>
      `;
    }).join("");

    const ligandsHtml = ligandsSlice.length ? `
      <div style="display:flex;flex-direction:column;gap:4px;margin-top:6px">
        ${ligandsSlice.map((c) => {
          const inStack = state.stack.has(c.i);
          return `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:4px 6px;border-radius:4px;background:var(--color-surface);border:1px solid var(--color-border);font-size:11px">
              <span style="font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:180px" title="${esc(c.n)}">${esc(c.n)}</span>
              <div style="display:flex;gap:4px">
                <button class="btn" data-struct-goto="${c.i}" style="font-size:9px;padding:2px 5px">🎯 Graf</button>
                <button class="btn ${inStack ? 'btn-gold' : ''}" data-struct-stack="${c.i}" style="font-size:9px;padding:2px 5px">${inStack ? '✓' : '+'}</button>
              </div>
            </div>
          `;
        }).join("")}
        ${ligands.length > 10 ? `<small style="font-size:10px;color:var(--color-text-muted);text-align:center">+ ${ligands.length - 10} dalszych substancji</small>` : ""}
      </div>
    ` : '<div style="font-size:11px;color:var(--color-text-muted)">Brak bezpośrednio powiązanych leków w katalogu.</div>';

    sb.innerHTML = `
      <div style="border-bottom:1px solid var(--color-border);padding-bottom:10px">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <b style="font-size:var(--text-base);font-family:var(--font-display)">${esc(tInfo.name)}</b>
          <span class="tag ok" style="font-size:10px">${esc(tInfo.gene || "TARGET")}</span>
        </div>
        <div style="font-size:11px;color:var(--color-text-muted);margin-top:2px">${esc(tInfo.class)} · ${esc(tInfo.id)}</div>
      </div>

      <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-md);padding:8px 10px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <small style="font-weight:700;text-transform:uppercase;color:var(--color-text-muted)">Holo-Struktura PDB</small>
          <a href="https://www.rcsb.org/structure/${esc(tInfo.pdb)}" target="_blank" rel="noopener noreferrer" style="font-size:10px;font-weight:700;color:var(--color-primary)">RCSB ${esc(tInfo.pdb)} ↗</a>
        </div>
        <div style="font-size:12px;font-weight:700;margin-top:2px;color:var(--color-text)">${esc(tInfo.res)}</div>
        <div style="font-size:10px;color:var(--color-text-muted);margin-top:2px">
          UniProt: <a href="https://www.uniprot.org/uniprotkb/${esc(tInfo.uniprot)}/entry" target="_blank" rel="noopener noreferrer">${esc(tInfo.uniprot)} ↗</a> · 
          AlphaFold: <a href="https://alphafold.ebi.ac.uk/entry/${esc(tInfo.uniprot)}" target="_blank" rel="noopener noreferrer">AF-${esc(tInfo.uniprot)} ↗</a>
        </div>
      </div>

      <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-md);padding:8px 10px">
        <small style="font-weight:700;text-transform:uppercase;color:var(--color-text-muted)">Ligand Krystalograficzny</small>
        <div style="font-size:13px;font-weight:800;color:var(--color-primary);margin-top:2px">💊 ${esc(tInfo.ligand)}</div>
        <div style="font-size:11px;color:var(--color-text-muted);margin-top:2px">${esc(tInfo.affinity)}</div>
      </div>

      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <small style="font-weight:700;text-transform:uppercase;color:var(--color-text-muted)">Reszty Kieszeni Wiążącej (${tInfo.pocket ? tInfo.pocket.length : 0})</small>
          <small style="font-size:10px;color:var(--color-text-muted)">Kliknij, aby wskazać</small>
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
        <a href="sidecar://biomolecular-structure-viewer" class="btn btn-gold" id="sidecarDirectLink" style="font-size:11px;text-align:center;text-decoration:none;display:block">
          🔬 Otwórz Mol* Sidecar (3D)
        </a>
        <small style="font-size:9px;color:var(--color-text-muted);text-align:center">Interaktywna eksploracja w panelu Mol* Biomolecular Viewer</small>
      </div>
    `;

    sb.querySelectorAll("[data-pocket-r]").forEach((el) => {
      el.onclick = () => {
        const rName = el.dataset.pocketR;
        struct3DState.selectedResidue = struct3DState.selectedResidue === rName ? null : rName;
        render3DSidebarDOM();
        draw3DComplexCanvas();
      };
    });

    sb.querySelectorAll("[data-struct-goto]").forEach((btn) => {
      btn.onclick = () => {
        const idx = +btn.dataset.structGoto;
        closeStruct3DModal();
        select({ type: "compound", i: idx }, true);
      };
    });

    sb.querySelectorAll("[data-struct-stack]").forEach((btn) => {
      btn.onclick = () => {
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
    modal.classList.add("open");

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
    if (modal) modal.classList.remove("open");
    activeStruct3DModalOpen = false;
    if (struct3DRaf) {
      cancelAnimationFrame(struct3DRaf);
      struct3DRaf = null;
    }
  }

  function wireStruct3DModal() {
    const modal = $("struct3DModal");
    if (!modal || modal._wired) return;
    modal._wired = true;

    const closeBtn = $("struct3DModalClose");
    if (closeBtn) closeBtn.onclick = closeStruct3DModal;

    modal.onclick = (e) => {
      if (e.target === modal) closeStruct3DModal();
    };

    const sidecarBtn = $("struct3DSidecarBtn");
    if (sidecarBtn) {
      sidecarBtn.onclick = () => {
        window.location.href = "sidecar://biomolecular-structure-viewer";
      };
    }

    const cv = $("struct3DCanvas");
    if (cv) {
      cv.onmousedown = (e) => {
        struct3DState.isDragging = true;
        struct3DState.dragButton = e.button;
        struct3DState.lastMouseX = e.clientX;
        struct3DState.lastMouseY = e.clientY;
        struct3DState.autoRotate = false;
      };

      window.addEventListener("mousemove", (e) => {
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

      window.addEventListener("mouseup", () => {
        struct3DState.isDragging = false;
      });

      cv.oncontextmenu = (e) => e.preventDefault();

      cv.onwheel = (e) => {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.09 : 0.91;
        struct3DState.zoom = Math.max(0.35, Math.min(3.8, struct3DState.zoom * factor));
        draw3DComplexCanvas();
      };

      // Touch events for mobile/tablet
      let touchStartX = 0, touchStartY = 0;
      cv.ontouchstart = (e) => {
        if (e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          struct3DState.isDragging = true;
          struct3DState.autoRotate = false;
        }
      };
      cv.ontouchmove = (e) => {
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
      cv.ontouchend = () => {
        struct3DState.isDragging = false;
      };
    }

    const styleBtns = modal.querySelectorAll("[data-struct-style]");
    styleBtns.forEach((btn) => {
      btn.onclick = () => {
        styleBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        struct3DState.style = btn.dataset.structStyle;
        draw3DComplexCanvas();
      };
    });

    const togglePocketBtn = $("struct3DTogglePocket");
    if (togglePocketBtn) {
      togglePocketBtn.onclick = () => {
        struct3DState.showPocket = !struct3DState.showPocket;
        togglePocketBtn.classList.toggle("active", struct3DState.showPocket);
        draw3DComplexCanvas();
      };
    }

    const toggleLigandBtn = $("struct3DToggleLigand");
    if (toggleLigandBtn) {
      toggleLigandBtn.onclick = () => {
        struct3DState.showLigand = !struct3DState.showLigand;
        toggleLigandBtn.classList.toggle("active", struct3DState.showLigand);
        draw3DComplexCanvas();
      };
    }

    const resetCamBtn = $("struct3DResetCamera");
    if (resetCamBtn) {
      resetCamBtn.onclick = () => {
        struct3DState.rotX = 0.3;
        struct3DState.rotY = -0.45;
        struct3DState.rotZ = 0;
        struct3DState.zoom = 1.0;
        struct3DState.panX = 0;
        struct3DState.panY = 0;
        struct3DState.autoRotate = true;
        draw3DComplexCanvas();
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

    const targets = (c.tg || []).map((ti) => {
      const t = T[ti];
      const act = classifyTargetAction(c, t ? t.n : "");
      return { t, act };
    });

    return `
      <div class="dossier-head-brand">
        <div>
          <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#777">Pharma-vault Clinical Intelligence · Monografia Kliniczna</div>
          <h1 style="font-size:24px;font-weight:800;color:#111;margin-top:2px">${esc(c.n)}</h1>
          <div style="font-size:12px;color:#555;margin-top:2px">${esc(cl)} · ${esc(g.label)}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:11px;font-weight:700;color:#111">ARCHIWUM MONOGRAFII</div>
          <div style="font-size:10px;color:#666">ID: ${esc(c.id)} · Data: ${dateStr}</div>
          <div style="font-size:10px;color:#0d47a1;font-weight:600">Status: Walidacja laboratoryjna</div>
        </div>
      </div>

      <div class="dossier-section" style="display:grid;grid-template-columns:220px 1fr;gap:20px;align-items:start">
        <div style="border:1px solid #e0e0e0;border-radius:4px;padding:12px;text-align:center;background:#fafafa">
          ${struct ? `<img src="${struct.url}" alt="${esc(c.n)}" style="max-width:190px;max-height:190px;object-fit:contain;mix-blend-mode:multiply">` : `
            <div style="height:150px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#888;font-size:11px">
              <span style="font-size:32px">🧬</span>
              <span style="margin-top:6px">${esc(c.mt || "Struktura niedostępna")}</span>
            </div>
          `}
          <div style="margin-top:8px;font-size:11px;font-weight:700;color:#333">${esc(c.mf || "—")}</div>
          <div style="font-size:10px;color:#666">${pr[0] != null ? pr[0] + " g/mol" : ""}</div>
        </div>
        <div>
          <div class="dossier-sec-title">Właściwości fizykochemiczne & Identyfikatory</div>
          <table class="dossier-table">
            <tbody>
              <tr><th style="width:38%">Wzór sumaryczny</th><td><b>${esc(c.mf || "—")}</b></td></tr>
              <tr><th>Masa cząsteczkowa (MW)</th><td>${pr[0] != null ? pr[0] + " g/mol" : "—"}</td></tr>
              <tr><th>Lipofilowość (ALogP)</th><td>${pr[1] != null ? pr[1] : "—"}</td></tr>
              <tr><th>Powierzchnia polarna (PSA)</th><td>${pr[2] != null ? pr[2] + " Å²" : "—"}</td></tr>
              <tr><th>Reguła 5 Lipińskiego (Ro5)</th><td>${pr[3] != null ? (pr[3] === 0 ? "✓ 0 naruszeń (spełniona)" : `<span style="color:#d32f2f">⚠ ${pr[3]} naruszeń</span>`) : "—"}</td></tr>
              <tr><th>InChIKey</th><td><code style="font-size:10px">${esc(c.ik || "—")}</code></td></tr>
              <tr><th>ChEMBL ID / PubChem CID</th><td>${esc(c.id)}${c.cid ? ` / CID: ${c.cid}` : ""}</td></tr>
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
              <td>${c.ph ? `Faza ${c.ph}` : "Faza przedkliniczna"}</td>
              <td>${c.ph === 4 ? "Lek zatwierdzony w obrocie (Approved)" : (c.ph ? "Faza badań klinicznych" : "Związek badawczy / ligand laboratoryjny")}</td>
            </tr>
            <tr>
              <td><b>FDA Label Verification</b></td>
              <td>${c.v ? (c.v.s === "consistent" ? '<span style="color:#2e7d32">✓ Spójny (Consistent)</span>' : '<span style="color:#c62828">≠ Rozbieżny</span>') : "—"}</td>
              <td>${c.v && c.v.c ? esc(c.v.c) : "Brak zarejestrowanych rozbieżności z FDA"}</td>
            </tr>
            <tr>
              <td><b>EMA / ChPL Verification</b></td>
              <td>${c.ve ? (c.ve.s === "consistent" ? '<span style="color:#2e7d32">✓ Spójny (Consistent)</span>' : '<span style="color:#c62828">≠ Rozbieżny</span>') : "—"}</td>
              <td>${c.ve && c.ve.c ? esc(c.ve.c) : "Brak zarejestrowanych rozbieżności z ChPL"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="dossier-section">
        <div class="dossier-sec-title">Mechanizm Działania (Mechanism of Action)</div>
        <div style="font-size:12px;line-height:1.6;color:#222;background:#fbfbfb;border:1px solid #e0e0e0;border-radius:4px;padding:10px 12px">
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
            <tr><th>Izoenzymy CYP (Metabolizm)</th><td>${k.cyp && k.cyp.length ? `<b>${esc(k.cyp.join(", "))}</b>` : "Brak danych o izoenzymach CYP"}</td></tr>
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
              ${targets.slice(0, 12).map(({ t, act }) => {
                const actBadge = act === "agonist" ? '<span style="color:#2e7d32">🟢 Agonista / Aktywator</span>'
                  : act === "antagonist" ? '<span style="color:#c62828">🔴 Antagonista / Bloker</span>'
                  : act === "inhibitor" ? '<span style="color:#f57f17">🟡 Inhibitor</span>'
                  : '<span style="color:#666">⚪ Ligand</span>';
                return `
                  <tr>
                    <td><b>${esc(t ? t.n : "Nieznany cel")}</b></td>
                    <td>${esc(t ? t.k : "—")}</td>
                    <td>${actBadge}</td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
          ${targets.length > 12 ? `<div style="font-size:10px;color:#777;margin-top:4px;font-style:italic">… oraz ${targets.length - 12} dalszych celów molekularnych.</div>` : ""}
        ` : '<div style="font-size:11px;color:#777;padding:6px 0">Brak powiązanych celów molekularnych w grafie.</div>'}
      </div>

      ${(c.bb || c.wd || (c.t && c.t.length)) ? `
        <div class="dossier-section">
          <div class="dossier-sec-title">Ostrzeżenia Bezpieczeństwa & Flagi Toksykologiczne</div>
          ${c.bb ? `<div class="dossier-warn"><b>🚨 Black Box Warning (FDA / Boxed Warning):</b> Substancja objęta najwyższym ostrzeżeniem bezpieczeństwa.</div>` : ""}
          ${c.wd ? `<div class="dossier-warn"><b>⚠️ Związek wycofany z rynku (Withdrawn):</b> Wycofany ze względów bezpieczeństwa lub toksyczności.</div>` : ""}
          ${c.t && c.t.length ? `
            <div style="margin-top:6px;font-size:11px">
              <b>Kluczowe ryzyka i przeciwwskazania:</b> ${c.t.map((t) => `<span style="background:#fff3e0;color:#e65100;padding:2px 6px;border-radius:3px;margin:0 4px 4px 0;display:inline-block">${esc(t)}</span>`).join("")}
            </div>
          ` : ""}
        </div>
      ` : ""}

      <div style="margin-top:30px;padding-top:12px;border-top:1px solid #ccc;display:flex;justify-content:space-between;align-items:center;font-size:10px;color:#888">
        <div>Pharma-vault Clinical Intelligence Engine v3.13.0 · Wygenerowano: ${dateStr}</div>
        <div>Dokument informacyjno-badawczy · Nie stanowi porady lekarskiej</div>
      </div>
    `;
  }

  function generateStackDossierHtml(stackIndices) {
    const list = (stackIndices || []).map((i) => C[i]).filter(Boolean);
    const dateStr = new Date().toISOString().slice(0, 10);
    if (!list.length) {
      return '<div class="dossier-warn">Brak wybranych substancji w stacku. Dodaj leki do zestawu, aby wygenerować dossier polipragmazji.</div>';
    }

    const { alerts, maxLevel } = analyzeStack(list.map((c) => c.i));
    const risk = calculateStackRiskMetrics(list.map((c) => c.i));

    return `
      <div class="dossier-head-brand">
        <div>
          <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#777">Pharma-vault Clinical Intelligence · Raport Polipragmazji</div>
          <h1 style="font-size:24px;font-weight:800;color:#111;margin-top:2px">Dossier Terapii Złożonej (Stack ${list.length} leków)</h1>
          <div style="font-size:12px;color:#555;margin-top:2px">Analiza interakcji farmakodynamicznych, farmakokinetycznych (CYP) i bezpieczeństwa</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:11px;font-weight:700;color:#111">ARCHIWUM POLIPRAGMAZJI</div>
          <div style="font-size:10px;color:#666">Złożoność: ${list.length} substancji · Data: ${dateStr}</div>
          <div style="font-size:10px;font-weight:700;color:${risk.color}">
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
            ${list.map((c) => {
              const k = c.pk || {};
              const g = GR[c.g] || { label: "—" };
              return `
                <tr>
                  <td><b>${esc(c.n)}</b></td>
                  <td>${esc(g.label)}</td>
                  <td>${k.hl != null ? k.hl + " h" : "—"}</td>
                  <td>${k.cyp && k.cyp.length ? `<b>${esc(k.cyp.join(", "))}</b>` : "—"}</td>
                  <td style="font-size:10px;color:#444">${esc(c.m ? c.m.split("|")[0] : "—")}</td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>

      <div class="dossier-section">
        <div class="dossier-sec-title">2. Indeks Toksyczności & Obciążenie Narządowe (Stack Risk Score: ${risk.totalScore}/100)</div>
        <div style="display:flex;align-items:center;justify-content:space-between;background:#f9f9f9;border:1px solid #e0e0e0;border-radius:4px;padding:8px 12px;margin-bottom:8px">
          <div>
            <b>Ocena ogólna:</b> <span style="color:${risk.color};font-weight:700">${esc(risk.label)}</span>
            <div style="font-size:10px;color:#666">Wieloosiowy wskaźnik kumulacji ryzyka z karą za obciążenie wielonarządowe</div>
          </div>
          <div style="font-size:18px;font-weight:800;color:${risk.color};padding:4px 10px;border:1px solid ${risk.color};border-radius:4px;background:#fff">
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
              <td><b>🫀 Sercowo-naczyniowa</b></td>
              <td><b>${risk.axes.cardio}%</b></td>
              <td>Wydłużenie QTc / arytmie komorowe (hERG), skoki ciśnienia tętniczego</td>
            </tr>
            <tr>
              <td><b>🧪 Wątrobowa / CYP</b></td>
              <td><b>${risk.axes.hepatic}%</b></td>
              <td>Wąskie gardła enzymów CYP, konkurencja metaboliczna, ryzyko krwawień</td>
            </tr>
            <tr>
              <td><b>🧠 OUN / Mózgowa</b></td>
              <td><b>${risk.axes.cns}%</b></td>
              <td>Depresja oddechowa, zespół serotoninowy, obniżenie progu drgawkowego</td>
            </tr>
            <tr>
              <td><b>⚡ Autonomiczna</b></td>
              <td><b>${risk.axes.autonomic}%</b></td>
              <td>Obciążenie antycholinergiczne (ACB), tachykardia, sedacja</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="dossier-section">
        <div class="dossier-sec-title">3. Wykryte Kolizje Farmakodynamiczne & Farmakokinetyczne (${alerts.length})</div>
        ${alerts.length ? alerts.map((a) => `
          <div class="${a.level === 'crit' ? 'dossier-warn' : 'dossier-callout'}">
            <div style="font-weight:700;font-size:12px;margin-bottom:2px">${a.title}</div>
            <div style="font-size:11px;color:#333;line-height:1.4">${a.desc}</div>
          </div>
        `).join("") : `
          <div class="dossier-callout" style="border-left-color:#2e7d32;background:#f1f8e9">
            <b>✓ Brak zidentyfikowanych krytycznych kolizji wielolekowych</b> w standardowych regułach Pharma-vault.
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
            ${(() => {
              const rows = [];
              for (let i = 0; i < list.length; i++) {
                for (let j = i + 1; j < list.length; j++) {
                  const res = evaluatePairwiseInteraction(list[i], list[j]);
                  const badge = res.level === "danger" ? '<span style="color:#c62828;font-weight:700">🔴 Krytyczna</span>'
                    : res.level === "warn" ? '<span style="color:#f57f17;font-weight:700">🟡 Umiarkowana</span>'
                    : res.level === "synergy" ? '<span style="color:#2e7d32;font-weight:700">🟢 Synergia</span>'
                    : '<span style="color:#666">⚪ Brak kolizji</span>';
                  rows.push(`
                    <tr>
                      <td><b>${esc(list[i].n)}</b> + <b>${esc(list[j].n)}</b></td>
                      <td>${badge}</td>
                      <td>
                        <div style="font-weight:600">${esc(res.title)}</div>
                        ${res.sharedCyps.length ? `<div style="font-size:10px;color:#555">Wspólne izoenzymy CYP: <b>${esc(res.sharedCyps.join(", "))}</b></div>` : ""}
                        ${res.sharedHubs.length ? `<div style="font-size:10px;color:#c62828">Wspólne węzły ryzyka: ${esc(res.sharedHubs.join(", "))}</div>` : ""}
                        ${res.sharedTargets.length ? `<div style="font-size:10px;color:#2e7d32">Wspólne cele molekularne: ${esc(res.sharedTargets.join(", "))}</div>` : ""}
                      </td>
                    </tr>
                  `);
                }
              }
              return rows.length ? rows.join("") : '<tr><td colspan="3" style="text-align:center;color:#777">Stack zawiera tylko 1 substancję — brak par do analizy.</td></tr>';
            })()}
          </tbody>
        </table>
      </div>

      <div class="dossier-section">
        <div class="dossier-sec-title">4. Zalecenia Monitorowania Klinicznego</div>
        <ul style="margin:4px 0 0 18px;padding:0;font-size:11px;line-height:1.6;color:#333">
          ${alerts.some((a) => a.title && a.title.includes("serotonin")) ? `<li><b>Nadzór neurologiczny:</b> Regularna ocena objawów zespołu serotoninowego (klonusy, wzmożenie odruchów, hipertermia, pobudzenie psychoruchowe).</li>` : ""}
          ${alerts.some((a) => a.title && a.title.includes("oddech")) ? `<li><b>Monitorowanie parametrów życiowych:</b> Monitorowanie wysycenia hemoglobiny tlenem (SpO2) oraz częstości oddechów w przypadku jednoczesnej sedacji.</li>` : ""}
          ${alerts.some((a) => a.title && a.title.includes("CYP")) ? `<li><b>Kontrola metaboliczna i TDM:</b> Rozważenie terapeutycznego monitorowania stężenia leków (TDM) przy konkurencji o wspólne izoenzymy cytochromu P450.</li>` : ""}
          ${alerts.some((a) => a.title && a.title.includes("sercowo")) ? `<li><b>Kontrola kardiologiczna:</b> Okresowe pomiary ciśnienia tętniczego, tętna oraz badanie EKG (ocena odstępu QTc).</li>` : ""}
          <li><b>Edukacja pacjenta:</b> Poinformowanie o konieczności natychmiastowego zgłaszania zawrotów głowy, niemiarowości serca, duszności lub nadmiernej senności.</li>
        </ul>
      </div>

      <div style="margin-top:30px;padding-top:12px;border-top:1px solid #ccc;display:flex;justify-content:space-between;align-items:center;font-size:10px;color:#888">
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
      `> Dokument wygenerowany automatycznie przez Pharma-vault Clinical Intelligence Engine (${dateStr}).`,
      "",
      `**Klasyfikacja:** ${cl} · ${g.label}`,
      `**ChEMBL ID:** \`${c.id}\`${c.cid ? ` · **PubChem CID:** \`${c.cid}\`` : ""}`,
      c.ik ? `**InChIKey:** \`${c.ik}\`` : "",
      "",
      "## 1. Właściwości fizykochemiczne",
      "| Parametr | Wartość |",
      "| :--- | :--- |",
      `| Wzór sumaryczny | ${c.mf || "—"} |`,
      `| Masa cząsteczkowa (MW) | ${pr[0] != null ? pr[0] + " g/mol" : "—"} |`,
      `| Lipofilowość (ALogP) | ${pr[1] != null ? pr[1] : "—"} |`,
      `| Polar Surface Area (PSA) | ${pr[2] != null ? pr[2] + " Å²" : "—"} |`,
      `| Reguła 5 Lipińskiego | ${pr[3] != null ? (pr[3] === 0 ? "Spełniona (0 naruszeń)" : `${pr[3]} naruszeń`) : "—"} |`,
      "",
      "## 2. Status regulacyjny i walidacja etykiet",
      "| Rejestr | Status | Adnotacja kliniczna |",
      "| :--- | :--- | :--- |",
      `| ChEMBL Development | ${c.ph ? `Faza ${c.ph}` : "Przedkliniczna"} | ${c.ph === 4 ? "Approved" : "Investigational"} |`,
      `| FDA Label | ${c.v ? (c.v.s === "consistent" ? "Zgodny" : "Rozbieżny") : "—"} | ${c.v && c.v.c ? c.v.c : "Brak uwag"} |`,
      `| EMA / ChPL Label | ${c.ve ? (c.ve.s === "consistent" ? "Zgodny" : "Rozbieżny") : "—"} | ${c.ve && c.ve.c ? c.ve.c : "Brak uwag"} |`,
      "",
      "## 3. Farmakokinetyka (ADME)",
      "| Parametr ADME | Wartość |",
      "| :--- | :--- |",
      `| Okres półtrwania (T½) | ${k.hl != null ? k.hl + " h" : "Brak danych"} |`,
      `| Wiązanie z białkami osocza | ${k.pb != null ? k.pb + " %" : "Brak danych"} |`,
      `| Biodostępność | ${k.ba != null ? k.ba + " %" : "Brak danych"} |`,
      `| Izoenzymy CYP | ${k.cyp && k.cyp.length ? k.cyp.join(", ") : "—"} |`,
      `| Droga metabolizmu | ${k.met || "Brak danych"} |`,
      `| Eliminacja / Wydalanie | ${k.ren || k.ex || "Brak danych"} |`,
      "",
      "## 4. Mechanizm Działania (MoA)",
      c.m ? c.m.replace(/\|/g, "\n- ") : "Brak zarejestrowanego mechanizmu.",
      "",
      "## 5. Cele Molekularne",
      (c.tg || []).map((ti) => `- **${T[ti] ? T[ti].n : "Cel"}** (${T[ti] ? T[ti].k : "—"})`).join("\n") || "Brak bezpośrednich celów.",
      "",
      c.bb ? "> [!danger] **Black Box Warning:** Substancja objęta najwyższym ostrzeżeniem bezpieczeństwa FDA.\n" : "",
      c.wd ? "> [!warning] **Withdrawn:** Związek wycofany z rynku.\n" : "",
      "",
      "---",
      "*(Raport informacyjny wygenerowany przez Pharma-vault)*"
    ];
    return lines.filter((l) => l !== "").join("\n");
  }

  function generateStackDossierMarkdown(stackIndices) {
    const list = (stackIndices || []).map((i) => C[i]).filter(Boolean);
    const dateStr = new Date().toISOString().slice(0, 10);
    const { alerts } = analyzeStack(list.map((c) => c.i));
    const risk = calculateStackRiskMetrics(list.map((c) => c.i));

    const lines = [
      `# Raport Polipragmazji: Stack ${list.length} Substancji`,
      "",
      `> Wygenerowano przez Pharma-vault Clinical Intelligence Engine (${dateStr}).`,
      "",
      `**Stack Risk Score:** \`${risk.totalScore} / 100\` (${risk.label})`,
      "",
      "## 1. Skład Zestawu",
      "| Lek | Grupa | T½ | CYP | Wskazanie / Mechanizm |",
      "| :--- | :--- | :--- | :--- | :--- |",
      ...list.map((c) => `| **${c.n}** | ${GR[c.g] ? GR[c.g].label : "—"} | ${c.pk && c.pk.hl != null ? c.pk.hl + " h" : "—"} | ${c.pk && c.pk.cyp ? c.pk.cyp.join(", ") : "—"} | ${c.m ? c.m.split("|")[0] : "—"} |`),
      "",
      "## 2. Indeks Toksyczności & Osie Narządowe",
      "| Oś narządowa | Wskaźnik obciążenia | Znaczenie kliniczne |",
      "| :--- | :--- | :--- |",
      `| 🫀 Sercowo-naczyniowa | **${risk.axes.cardio}%** | Arytmie (hERG / QTc), skoki ciśnienia, tachykardia |`,
      `| 🧪 Wątrobowa / CYP | **${risk.axes.hepatic}%** | Konkurencja o enzymy CYP, retencja leków, ryzyko krwawień |`,
      `| 🧠 OUN / Mózgowa | **${risk.axes.cns}%** | Depresja oddechowa, zespół serotoninowy, drgawki |`,
      `| ⚡ Autonomiczna | **${risk.axes.autonomic}%** | Zespół antycholinergiczny (ACB), sedacja |`,
      "",
      "## 3. Wykryte Kolizje i Alerty",
      ...(alerts.length ? alerts.map((a) => `### ${a.title}\n${a.desc}\n`) : ["*Brak zidentyfikowanych krytycznych kolizji wielolekowych.*"]),
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
      else if (state.stack.size > 0) c = C[[...state.stack][0]];
      else c = C[0];

      activeDossierTarget = c ? c.i : 0;
      if (subtitle) subtitle.textContent = `Monografia: ${c ? c.n : ""}`;
      sheet.innerHTML = generateCompoundDossierHtml(c);
    }

    modal.classList.add("open");
  }

  function closeDossierModal() {
    const modal = $("dossierModal");
    if (modal) modal.classList.remove("open");
    activeDossierMode = null;
    activeDossierTarget = null;
  }

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

  // ---------- Pairwise Interaction Matrix (N x N)
  function evaluatePairwiseInteraction(cA, cB) {
    if (cA.i === cB.i) {
      return {
        isDiag: true,
        level: "diag",
        icon: "●",
        title: cA.n,
        desc: `Pojedyncza substancja: ${esc(cA.n)} (${esc(GR[cA.g].label)})`,
        sharedCyps: (cA.pk && cA.pk.cyp) || [],
        sharedHubs: (cA.l || []).filter((li) => CORE[li].kind === "hub").map((li) => CORE[li].name),
        sharedTargets: (cA.tg || []).map((ti) => T[ti].n)
      };
    }

    const cypsA = (cA.pk && cA.pk.cyp) || [];
    const cypsB = (cB.pk && cB.pk.cyp) || [];
    const sharedCyps = cypsA.filter((x) => cypsB.includes(x));

    const hubsA = (cA.l || []).filter((li) => CORE[li].kind === "hub").map((li) => CORE[li].name);
    const hubsB = (cB.l || []).filter((li) => CORE[li].kind === "hub").map((li) => CORE[li].name);
    const sharedHubs = hubsA.filter((x) => hubsB.includes(x));

    const tgA = cA.tg || [];
    const tgB = cB.tg || [];
    const sharedTargets = tgA.filter((ti) => tgB.includes(ti)).map((ti) => T[ti].n);

    const critHubKeywords = ["seroton", "oddech", "cardio", "krążen", "sympath", "ciśnien", "drgaw", "qt"];
    const hasCritHub = sharedHubs.some((h) => critHubKeywords.some((k) => h.toLowerCase().includes(k)));

    let level = "clear";
    let icon = "⚪";
    let title = "Brak znanych bezpośrednich kolizji";

    if (hasCritHub || sharedCyps.length >= 2) {
      level = "danger";
      icon = "🔴";
      title = hasCritHub
        ? `Krytyczna kumulacja ryzyka (${sharedHubs.join(", ")})`
        : `Wielokrotne wąskie gardło CYP (${sharedCyps.join(", ")})`;
    } else if (sharedCyps.length === 1 || sharedHubs.length >= 1) {
      level = "warn";
      icon = "🟡";
      title = sharedCyps.length === 1
        ? `Wspólny metabolizm przez ${sharedCyps[0]}`
        : `Nakładanie hubu ryzyka: ${sharedHubs.join(", ")}`;
    } else if (sharedTargets.length > 0) {
      level = "synergy";
      icon = "🟢";
      title = `Wspólny cel molekularny: ${sharedTargets[0]}${sharedTargets.length > 1 ? ` (+${sharedTargets.length - 1})` : ''}`;
    }

    return {
      isDiag: false,
      level,
      icon,
      title,
      sharedCyps,
      sharedHubs,
      sharedTargets
    };
  }

  function buildMatrixHtml(stackList) {
    if (stackList.length < 2) {
      return `
        <div class="pk-box" style="text-align:center;padding:1.5rem 0.5rem;color:var(--color-text-muted)">
          <div style="font-size:1.6rem;margin-bottom:.3rem">🔲</div>
          <b style="color:var(--color-text);font-size:var(--text-sm)">Macierz wymaga min. 2 substancji</b>
          <p style="font-size:11px;margin-top:4px">Dodaj kolejny lek do stacka, aby przeanalizować wszystkie relacje parowe N×N.</p>
        </div>`;
    }

    const n = stackList.length;
    let selectedPair = state.selectedMatrixPair;
    if (selectedPair) {
      const hasA = stackList.some((c) => c.i === selectedPair[0]);
      const hasB = stackList.some((c) => c.i === selectedPair[1]);
      if (!hasA || !hasB) selectedPair = null;
    }
    if (!selectedPair) {
      let bestPair = [stackList[0].i, stackList[1].i];
      let bestScore = -1;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const evalRes = evaluatePairwiseInteraction(stackList[i], stackList[j]);
          const score = evalRes.level === "danger" ? 3 : evalRes.level === "warn" ? 2 : evalRes.level === "synergy" ? 1 : 0;
          if (score > bestScore) {
            bestScore = score;
            bestPair = [stackList[i].i, stackList[j].i];
          }
        }
      }
      selectedPair = bestPair;
      state.selectedMatrixPair = selectedPair;
    }

    const colHeaders = stackList.map((c) => {
      const shortName = c.n.length > 8 ? c.n.slice(0, 7) + "…" : c.n;
      return `<th class="matrix-th" title="${esc(c.n)}"><span class="dot" style="background:${CL_COLORS[c.c]};display:inline-block;width:6px;height:6px;margin-right:2px"></span>${esc(shortName)}</th>`;
    }).join("");

    const rows = stackList.map((cA) => {
      const shortName = cA.n.length > 8 ? cA.n.slice(0, 7) + "…" : cA.n;
      const cells = stackList.map((cB) => {
        const evalRes = evaluatePairwiseInteraction(cA, cB);
        const isSel = selectedPair && ((selectedPair[0] === cA.i && selectedPair[1] === cB.i) || (selectedPair[0] === cB.i && selectedPair[1] === cA.i));
        if (evalRes.isDiag) {
          return `<td class="matrix-cell cell-diag" title="${esc(cA.n)}">●</td>`;
        }
        return `<td class="matrix-cell cell-${evalRes.level} ${isSel ? 'selected' : ''}" data-matrix-pair="${cA.i}-${cB.i}" title="${esc(cA.n)} ↔ ${esc(cB.n)}: ${esc(evalRes.title)}">${evalRes.icon}</td>`;
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
        ? `<div><b style="color:var(--color-warning)">Wspólne enzymy CYP:</b> ${pairRes.sharedCyps.map((c) => `<span class="tag warn" style="font-weight:700">${esc(c)}</span>`).join(" ")} <small style="display:block;color:var(--color-text-muted);margin-top:2px">Konkurencja o metabolizm wątrobowy — ryzyko wzrostu stężeń.</small></div>`
        : `<div style="color:var(--color-text-muted)">Brak wspólnych izoenzymów CYP.</div>`;

      const hubsHtml = pairRes.sharedHubs.length
        ? `<div><b style="color:var(--color-error)">Wspólne huby ryzyka:</b> ${pairRes.sharedHubs.map((h) => `<span class="tag warn">${esc(h)}</span>`).join(" ")} <small style="display:block;color:var(--color-text-muted);margin-top:2px">Sumowanie obciążenia farmakodynamicznego układu.</small></div>`
        : `<div style="color:var(--color-text-muted)">Brak wspólnych krytycznych hubów ryzyka.</div>`;

      const targetsHtml = pairRes.sharedTargets.length
        ? `<div><b style="color:var(--color-success)">Wspólne cele molekularne:</b> ${pairRes.sharedTargets.map((t) => `<span class="tag ok">◎ ${esc(t)}</span>`).join(" ")}</div>`
        : "";

      detailContent = `
        <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--color-border);padding-bottom:4px">
          <b>${esc(cA.n)} <span style="color:var(--color-text-muted)">↔</span> ${esc(cB.n)}</b>
          <span class="tag ${pairRes.level === 'danger' ? 'warn' : pairRes.level === 'warn' ? 'warn' : pairRes.level === 'synergy' ? 'ok' : ''}">${pairRes.icon} ${esc(pairRes.title)}</span>
        </div>
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
      <div style="font-size:10px;color:var(--color-text-muted);display:flex;gap:8px;justify-content:center;margin-top:6px">
        <span>🔴 Kolizja wysoka</span>
        <span>🟡 Ostrzeżenie</span>
        <span>🟢 Synergia</span>
        <span>⚪ Brak kolizji</span>
      </div>`;
  }

  // ---------- Clinical Risk Engine & Multi-Axis Toxic Burden Heatmap
  let activeExpandedAdr = null;

  const ADR_DEFINITIONS = [
    {
      key: "qtc",
      name: "Arytmia & Wydłużenie QTc",
      icon: "🫀",
      axis: "cardio",
      desc: "Blokada kanałów potasowych hERG i opóźnienie repolaryzacji komorowej sprzyjające tachyarytmiom komorowym (TdP).",
      eval: (c) => {
        const m = (c.m || "").toLowerCase();
        const t = (c.t || []).join(" ").toLowerCase();
        let s = 5;
        if (c.l && c.l.includes(HUB_CARDIO)) s += 25;
        if (m.includes("herg") || m.includes("potassium channel") || m.includes("antiarrhythmic")) s += 45;
        if (t.includes("qt") || t.includes("arytm") || t.includes("torsade")) s += 30;
        return Math.min(100, s);
      }
    },
    {
      key: "respiratory",
      name: "Depresja OUN & Oddechowa",
      icon: "🫁",
      axis: "cns",
      desc: "Hamowanie pnia mózgu i ośrodka oddechowego poprzez receptory mi-opioidowe oraz kompleksy GABA-A.",
      eval: (c) => {
        const m = (c.m || "").toLowerCase();
        const t = (c.t || []).join(" ").toLowerCase();
        let s = 5;
        if (c.l && c.l.includes(HUB_RESPIRATORY)) s += 35;
        if (m.includes("opioid") || m.includes("gaba-a") || m.includes("gabaa") || m.includes("sedat") || m.includes("hypnotic") || m.includes("anesthetic")) s += 40;
        if (t.includes("oddech") || t.includes("senno") || t.includes("sedac")) s += 25;
        return Math.min(100, s);
      }
    },
    {
      key: "serotonin",
      name: "Zespół Serotoninowy",
      icon: "⚡",
      axis: "cns",
      desc: "Nadmierna aktywacja ośrodkowych i obwodowych receptorów 5-HT (5-HT1A, 5-HT2A) prowadząca do hipertermii, klonusów i drgawek.",
      eval: (c) => {
        const m = (c.m || "").toLowerCase();
        const t = (c.t || []).join(" ").toLowerCase();
        let s = 5;
        if (c.l && c.l.includes(HUB_SEROTONIN)) s += 35;
        if (m.includes("serotonin") || m.includes("5-ht") || m.includes("sert") || m.includes("ssri") || m.includes("snri") || m.includes("mao")) s += 40;
        if (t.includes("serotonin") || t.includes("hiperterm")) s += 25;
        return Math.min(100, s);
      }
    },
    {
      key: "cyp",
      name: "Wąskie Gardło CYP (Wątroba)",
      icon: "🧪",
      axis: "hepatic",
      desc: "Nasycenie szlaków cytochromu P450, konkurencja enzymatyczna i spowolnienie eliminacji leków we krwi.",
      eval: (c) => {
        const cyps = (c.pk && c.pk.cyp) || [];
        if (!cyps.length) return 10;
        let s = cyps.length * 15;
        if (cyps.includes("CYP3A4")) s += 20;
        if (cyps.includes("CYP2D6")) s += 15;
        return Math.min(100, s);
      }
    },
    {
      key: "anticholinergic",
      name: "Obciążenie Antycholinergiczne",
      icon: "👁️",
      axis: "autonomic",
      desc: "Ośrodkowa i obwodowa blokada muskarynowa wywołująca majaczenie, suchość błon, tachykardię i retencję moczu.",
      eval: (c) => {
        const m = (c.m || "").toLowerCase();
        const t = (c.t || []).join(" ").toLowerCase();
        let s = 5;
        if (c.l && c.l.includes(HUB_CHOLINERGIC)) s += 30;
        if (m.includes("muscarinic") || m.includes("anticholinergic") || m.includes("cholinolyt") || m.includes("atropin")) s += 45;
        if (t.includes("antycholinerg") || t.includes("sucho")) s += 25;
        return Math.min(100, s);
      }
    },
    {
      key: "hypertension",
      name: "Przełom Adrenergiczny / Skoki RR",
      icon: "📈",
      axis: "cardio",
      desc: "Stymulacja układu współczulnego, blokada NET/DAT lub aktywacja receptorów alfa/beta adrenergicznych.",
      eval: (c) => {
        const m = (c.m || "").toLowerCase();
        const t = (c.t || []).join(" ").toLowerCase();
        let s = 5;
        if (m.includes("norepinephrine") || m.includes("adrenergic") || m.includes("sympath") || m.includes("stimulant") || m.includes("amphetamin")) s += 45;
        if (t.includes("ciśnien") || t.includes("tachykard") || t.includes("nadciśnien")) s += 25;
        return Math.min(100, s);
      }
    },
    {
      key: "seizure",
      name: "Ryzyko Drgawkowe (Prokonwulsyjne)",
      icon: "🧠",
      axis: "cns",
      desc: "Obniżenie progu drgawkowego, blokada neuroprzekaźnictwa hamującego GABA lub nadmierna stymulacja glutaminergiczna.",
      eval: (c) => {
        const m = (c.m || "").toLowerCase();
        const t = (c.t || []).join(" ").toLowerCase();
        let s = 5;
        if (m.includes("proconvulsant") || (m.includes("antagonist") && m.includes("gaba"))) s += 45;
        if (t.includes("drgawk") || t.includes("padaczk")) s += 30;
        if (m.includes("bupropion") || m.includes("tramadol") || m.includes("clozapin")) s += 35;
        return Math.min(100, s);
      }
    },
    {
      key: "bleeding",
      name: "Zaburzenia Krzepnięcia & Krwawienia",
      icon: "🩸",
      axis: "hepatic",
      desc: "Inhibicja COX-1/płytek krwi, deplecja płytkowej puli serotoniny przez SSRI lub bezpośrednia antykoagulacja.",
      eval: (c) => {
        const m = (c.m || "").toLowerCase();
        const t = (c.t || []).join(" ").toLowerCase();
        let s = 5;
        if (m.includes("cyclooxygenase") || m.includes("cox") || m.includes("anticoagulant") || m.includes("platelet") || m.includes("thrombin") || m.includes("factor xa")) s += 50;
        if (m.includes("ssri") || m.includes("snri")) s += 20;
        if (t.includes("krwaw") || t.includes("wrzod") || t.includes("krzepliwo")) s += 30;
        return Math.min(100, s);
      }
    }
  ];

  function detectPharmacodynamicPhenomena(stackIndices) {
    const list = (stackIndices || []).map((i) => C[i]).filter(Boolean);
    const phenomena = [];

    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const cA = list[i], cB = list[j];
        const mA = (cA.m || "").toLowerCase(), mB = (cB.m || "").toLowerCase();
        const tgA = cA.tg || [], tgB = cB.tg || [];
        const sharedTg = tgA.filter((ti) => tgB.includes(ti));
        const cypsA = (cA.pk && cA.pk.cyp) || [], cypsB = (cB.pk && cB.pk.cyp) || [];
        const sharedCyps = cypsA.filter((x) => cypsB.includes(x));

        // 1. Synergy: MAOI + Serotonergic
        if ((mA.includes("mao") && (mB.includes("ssri") || mB.includes("snri") || mB.includes("serotonin"))) ||
            (mB.includes("mao") && (mA.includes("ssri") || mA.includes("snri") || mA.includes("serotonin")))) {
          phenomena.push({
            type: "synergy",
            badge: "⚡ Synergia katastrofalna",
            color: "var(--color-error)",
            title: `${cA.n} + ${cB.n}: Blokada MAO i wychwytu 5-HT`,
            desc: "Nadaddytywne nagromadzenie serotoniny w szczelinie synaptycznej — natychmiastowe ryzyko zapaści."
          });
        }
        // Synergy: Opioid + GABA-A/BZD
        else if (((mA.includes("opioid") || (cA.l && cA.l.includes(HUB_RESPIRATORY))) && (mB.includes("gaba") || mB.includes("benzodiazepin") || mB.includes("sedat"))) ||
                 ((mB.includes("opioid") || (cB.l && cB.l.includes(HUB_RESPIRATORY))) && (mA.includes("gaba") || mA.includes("benzodiazepin") || mA.includes("sedat")))) {
          phenomena.push({
            type: "synergy",
            badge: "⚡ Synergia depresyjna",
            color: "var(--color-error)",
            title: `${cA.n} + ${cB.n}: Potencjalizacja sedacji i bezdechu`,
            desc: "Równoczesne hamowanie ośrodka oddechowego przez odmienne szlaki receptorowe (Opioid + GABA-A)."
          });
        }
        // Antagonism: Agonist + Antagonist on same target
        else if (sharedTg.length > 0) {
          const tName = T[sharedTg[0]]?.n || "Wspólny receptor";
          const actA = classifyTargetAction(cA, tName);
          const actB = classifyTargetAction(cB, tName);
          if ((actA === "agonist" && actB === "antagonist") || (actA === "antagonist" && actB === "agonist")) {
            phenomena.push({
              type: "antagonism",
              badge: "⚖️ Antagonizm receptorowy",
              color: "var(--color-primary)",
              title: `${cA.n} (Agonista) vs ${cB.n} (Antagonista)`,
              desc: `Konkurencja o receptor ${esc(tName)} — wzajemne osłabienie lub zniesienie pożądanego efektu terapeutycznego.`
            });
          } else {
            // Homodynamic summation
            phenomena.push({
              type: "summation",
              badge: "➕ Sumacja addytywna",
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
            badge: "➕ Sumacja metaboliczna",
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
            badge: "⚖️ Antagonizm fizjologiczny",
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
    const list = (stackIndices || []).map((i) => C[i]).filter(Boolean);
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
    const adrRows = ADR_DEFINITIONS.map((def) => {
      const perCompound = list.map((c) => def.eval(c));
      const activeDrivers = list
        .map((c, idx) => ({ name: c.n, score: perCompound[idx] }))
        .filter((d) => d.score >= 20)
        .sort((a, b) => b.score - a.score);

      let combined = 0;
      if (list.length === 1) {
        combined = perCompound[0];
      } else {
        const hits = perCompound.filter((s) => s >= 20);
        const prod = perCompound.reduce((acc, s) => acc * (1 - s / 100), 1);
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

    const adrMap = Object.fromEntries(adrRows.map((r) => [r.key, r.combined]));

    // 2. Compute 4 Organ Axes
    const cardio = Math.min(100, Math.round(0.6 * adrMap.qtc + 0.4 * adrMap.hypertension));
    const hepatic = Math.min(100, Math.round(0.7 * adrMap.cyp + 0.3 * adrMap.bleeding));
    const cns = Math.min(100, Math.round(Math.max(adrMap.respiratory, adrMap.serotonin) * 0.85 + adrMap.seizure * 0.25));
    const autonomic = Math.min(100, Math.round(0.75 * adrMap.anticholinergic + 0.25 * adrMap.hypertension));

    // 3. Compute Global Stack Risk Score
    const maxAxis = Math.max(cardio, hepatic, cns, autonomic);
    const meanAxis = (cardio + hepatic + cns + autonomic) / 4;
    const multiAxisPenalty = [cardio, hepatic, cns, autonomic].filter((v) => v >= 40).length * 5;
    const rawScore = 0.7 * maxAxis + 0.3 * meanAxis + multiAxisPenalty;
    const totalScore = Math.min(100, Math.max(0, Math.round(rawScore)));

    let level = "ok";
    let label = "Zrównoważony / Niski";
    let color = "#2e7d32";

    if (totalScore >= 75) {
      level = "crit";
      label = "🚨 Ryzyko Krytyczne";
      color = "#c62828";
    } else if (totalScore >= 50) {
      level = "high";
      label = "🟠 Wysokie Obciążenie";
      color = "#e65100";
    } else if (totalScore >= 25) {
      level = "mod";
      label = "⚠️ Umiarkowane Ryzyko";
      color = "#f57f17";
    }

    const phenomena = detectPharmacodynamicPhenomena(list.map((c) => c.i));

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
          <div style="font-size:10px;text-transform:uppercase;letter-spacing:.8px;color:var(--color-text-muted);font-weight:700">Kliniczny Indeks Polipragmazji</div>
          <div style="font-size:15px;font-weight:800;color:var(--color-text);margin-top:2px">Stack Risk Score: ${totalScore} / 100</div>
          <div style="font-size:11px;font-weight:700;color:${color};margin-top:2px">${esc(label)}</div>
          <div style="font-size:10px;color:var(--color-text-muted);margin-top:4px;line-height:1.4">
            ${totalScore >= 75
              ? "🚨 Wykryto zagrażające życiu kolizje wielolekowe. Wymagana pilna rewizja farmakoterapii."
              : totalScore >= 50
              ? "🟠 Istotne obciążenie narządowe i ryzyko powikłań. Zalecana ścisła kontrola parametrów."
              : totalScore >= 25
              ? "🟡 Umiarkowany poziom kolizji farmakokinetycznych lub metabolicznych."
              : "✓ Niski wskaźnik obciążenia klinicznego w standardowych regułach."}
          </div>
        </div>
        <div class="risk-score-badge" style="background:${color}">
          ${totalScore}
        </div>
      </div>
    `;

    // 2. 4 Organ Axes
    const axisLabels = [
      { key: "cardio", name: "Sercowo-naczyniowa", val: axes.cardio, icon: "🫀" },
      { key: "hepatic", name: "Wątrobowa / CYP", val: axes.hepatic, icon: "🧪" },
      { key: "cns", name: "OUN / Mózgowa", val: axes.cns, icon: "🧠" },
      { key: "autonomic", name: "Autonomiczna", val: axes.autonomic, icon: "⚡" }
    ];

    const axesHtml = `
      <div class="axis-grid">
        ${axisLabels.map((ax) => {
          const col = ax.val >= 75 ? "var(--color-error)" : ax.val >= 50 ? "#e65100" : ax.val >= 25 ? "var(--color-warning)" : "var(--color-success)";
          return `
            <div class="axis-card">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <span>${ax.icon} <b>${ax.name}</b></span>
                <b style="color:${col}">${ax.val} %</b>
              </div>
              <div class="axis-bar-wrap">
                <div class="axis-bar-fill" style="width:${ax.val}%;background:${col}"></div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    // 3. Phenomena
    let phenHtml = "";
    if (phenomena.length > 0) {
      phenHtml = `
        <div class="label" style="margin-top:.6rem">Zjawiska Farmakodynamiczne (${phenomena.length})</div>
        <div class="phenomena-box">
          ${phenomena.map((p) => `
            <div class="phenomena-item">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <b>${esc(p.title)}</b>
                <span class="tag" style="color:${p.color};font-weight:700;font-size:10px">${esc(p.badge)}</span>
              </div>
              <span style="font-size:10px;color:var(--color-text-muted);line-height:1.35">${esc(p.desc)}</span>
            </div>
          `).join("")}
        </div>
      `;
    }

    // 4. ADR Heatmap Table
    const colHeaders = stackList.map((c) => {
      const shortName = c.n.length > 7 ? c.n.slice(0, 6) + "…" : c.n;
      return `<th style="text-align:center" title="${esc(c.n)}">${esc(shortName)}</th>`;
    }).join("");

    const rowsHtml = adrRows.map((row) => {
      const isExpanded = activeExpandedAdr === row.key;
      const getCellCls = (v) => v >= 75 ? "adr-crit" : v >= 50 ? "adr-high" : v >= 25 ? "adr-mod" : v > 10 ? "adr-low" : "adr-none";
      const combCls = getCellCls(row.combined);

      const cells = row.perCompound.map((v) => {
        const cls = getCellCls(v);
        return `<td class="adr-cell ${cls}" title="${v}%">${v}%</td>`;
      }).join("");

      return `
        <tr>
          <td class="adr-row-title" data-adr-toggle="${row.key}" style="font-weight:600;font-size:10px;white-space:nowrap" title="Kliknij, aby poznać mechanizm">
            ${row.icon} ${esc(row.name)} ${isExpanded ? '▴' : '▾'}
          </td>
          ${cells}
          <td class="adr-cell ${combCls}" style="border-left:2px solid var(--color-border);font-weight:800" title="Wypadkowe ryzyko: ${row.combined}%">
            ${row.combined}%
          </td>
        </tr>
        ${isExpanded ? `
          <tr>
            <td colspan="${stackList.length + 2}" style="background:var(--color-surface-2);padding:8px;border-radius:4px;font-size:10px;color:var(--color-text-muted);line-height:1.4">
              <b style="color:var(--color-text)">Mechanizm ADR:</b> ${esc(row.desc)}<br>
              <b style="color:var(--color-text)">Dominujące źródła:</b> ${row.drivers.length ? row.drivers.map((d) => `<b>${esc(d.name)}</b> (${d.score}%)`).join(", ") : "Brak wyraźnego pojedynczego drivera."}
            </td>
          </tr>
        ` : ""}
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
      <div style="font-size:9px;color:var(--color-text-muted);display:flex;gap:6px;justify-content:center;margin-top:4px">
        <span>⚪ &lt;10%</span>
        <span>🟢 10-24%</span>
        <span>🟡 25-49%</span>
        <span>🟠 50-74%</span>
        <span>🔴 75-100%</span>
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
      const struct = getChemStructure(c);
      const thumbHtml = struct
        ? `<img class="chem-thumb" src="${struct.url}" alt="${esc(c.n)}" loading="lazy" data-zoom-chem="${c.i}" title="Powiększ wzór 2D">`
        : `<span class="dot" style="background:${CL_COLORS[c.c]};width:10px;height:10px;flex-shrink:0"></span>`;
      return `
        <div class="stack-chip">
          <div style="display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden">
            ${thumbHtml}
            <div style="min-width:0;overflow:hidden">
              <button data-c="${c.i}" style="background:none;border:0;color:var(--color-text);font-weight:600;cursor:pointer;padding:0;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block">${esc(c.n)}</button>
              <small style="color:var(--color-text-muted);white-space:nowrap">${esc(GR[c.g].label)}</small>
            </div>
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
    const stackList = [...state.stack].map((i) => C[i]);
    const matrixSectionHtml = buildMatrixHtml(stackList);
    const riskData = calculateStackRiskMetrics([...state.stack]);
    const toxicitySectionHtml = buildToxicityTabHtml(stackList, riskData);
    const curStackTab = state.stackTab || "pk";

    if (state.stack.size >= 1) {
      const curHorizon = state.sim.horizon || "auto";
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

      <div class="tab-bar" style="margin:0.6rem 0 0.3rem 0" role="tablist" aria-label="Widoki analizy stacka">
        <button class="tab-btn ${curStackTab === 'pk' ? 'active' : ''}" data-stack-tab="pk" role="tab" aria-selected="${curStackTab === 'pk'}">📈 Symulator PK</button>
        <button class="tab-btn ${curStackTab === 'matrix' ? 'active' : ''}" data-stack-tab="matrix" role="tab" aria-selected="${curStackTab === 'matrix'}">🔲 Macierz (N×N)</button>
        <button class="tab-btn ${curStackTab === 'toxicity' ? 'active' : ''}" data-stack-tab="toxicity" role="tab" aria-selected="${curStackTab === 'toxicity'}">⚠️ Toksyczność & ADR</button>
      </div>

      ${curStackTab === 'pk' ? pkSectionHtml : curStackTab === 'matrix' ? matrixSectionHtml : toxicitySectionHtml}

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
    body.querySelectorAll("[data-zoom-chem]").forEach((el) => {
      el.onclick = () => openChemLightBox(+el.dataset.zoomChem);
    });
    body.querySelectorAll("[data-t]").forEach((el) => {
      el.onclick = () => openTargetModal(+el.dataset.t);
    });
    body.querySelectorAll("[data-remove]").forEach((b) => {
      b.onclick = () => toggleInStack(+b.dataset.remove);
    });
    body.querySelectorAll("[data-preset]").forEach((b) => {
      b.onclick = () => loadPreset(b.dataset.preset);
    });
    body.querySelectorAll("[data-stack-tab]").forEach((btn) => {
      btn.onclick = () => {
        state.stackTab = btn.dataset.stackTab;
        updateStackUI();
      };
    });
    body.querySelectorAll("[data-matrix-pair]").forEach((td) => {
      td.onclick = () => {
        const parts = td.dataset.matrixPair.split("-").map(Number);
        state.selectedMatrixPair = [parts[0], parts[1]];
        updateStackUI();
      };
    });
    body.querySelectorAll("[data-adr-toggle]").forEach((td) => {
      td.onclick = () => {
        const k = td.dataset.adrToggle;
        activeExpandedAdr = activeExpandedAdr === k ? null : k;
        updateStackUI();
      };
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

    if (list.length >= 2) {
      const matrixHeaders = "| Para | " + list.map((c) => esc(c.n)).join(" | ") + " |";
      const matrixSep = "| :--- | " + list.map(() => ":---:").join(" | ") + " |";
      const matrixRows = list.map((cA) => {
        const cells = list.map((cB) => {
          const evalRes = evaluatePairwiseInteraction(cA, cB);
          return evalRes.isDiag ? "●" : evalRes.icon;
        }).join(" | ");
        return `| **${esc(cA.n)}** | ${cells} |`;
      });

      const pairwiseDetails = [];
      for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
          const evalRes = evaluatePairwiseInteraction(list[i], list[j]);
          if (evalRes.level !== "clear") {
            const cyps = evalRes.sharedCyps.length ? `CYP: ${evalRes.sharedCyps.join(', ')}` : '';
            const hubs = evalRes.sharedHubs.length ? `Huby: ${evalRes.sharedHubs.join(', ')}` : '';
            const tgts = evalRes.sharedTargets.length ? `Cele: ${evalRes.sharedTargets.slice(0, 3).join(', ')}` : '';
            const desc = [cyps, hubs, tgts].filter(Boolean).join(" · ");
            pairwiseDetails.push(`- ${evalRes.icon} **${list[i].n} ↔ ${list[j].n}**: ${evalRes.title}${desc ? ` (${desc})` : ''}`);
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
        "> Legenda: 🔴 Ryzyko krytyczne · 🟡 Ostrzeżenie · 🟢 Synergia / Wspólny cel · ⚪ Brak kolizji",
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

      const riskMetrics = calculateStackRiskMetrics(list.map((c) => c.i));
      lines.push(
        "## 5. Indeks Toksyczności & Obciążenie Narządowe",
        "",
        `**Stack Risk Score:** \`${riskMetrics.totalScore} / 100\` (${riskMetrics.label})`,
        "",
        "| Oś narządowa | Wskaźnik (%) | Znaczenie kliniczne |",
        "| :--- | :--- | :--- |",
        `| 🫀 Sercowo-naczyniowa | ${riskMetrics.axes.cardio}% | Wydłużenie QTc / tachyarytmie / nadciśnienie |`,
        `| 🧪 Wątrobowa / CYP | ${riskMetrics.axes.hepatic}% | Konkurencja o metabolizm enzymatyczny CYP / klirens |`,
        `| 🧠 OUN / Mózgowa | ${riskMetrics.axes.cns}% | Sedacja / depresja oddechowa / zespół serotoninowy |`,
        `| ⚡ Autonomiczna | ${riskMetrics.axes.autonomic}% | Obciążenie antycholinergiczne / układ współczulny |`,
        "",
        "### Wykryte zjawiska farmakodynamiczne",
        riskMetrics.phenomena.length ? riskMetrics.phenomena.map((p) => `- **${p.badge}**: ${p.title} — ${p.desc}`).join("\n") : "*Brak nietypowych synergii i antagonizmów.*",
        "",
        "### Profil Działań Niepożądanych (ADRs)",
        "| Powikłanie | Wypadkowe ryzyko | Dominujące źródła |",
        "| :--- | :--- | :--- |",
        ...riskMetrics.adrRows.map((r) => `| ${r.icon} ${r.name} | **${r.combined}%** | ${r.drivers.map((d) => d.name + ' (' + d.score + '%)').join(', ') || '—'} |`),
        ""
      );
    }

    lines.push(
      "## 6. Zastrzeżenie edukacyjne",
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

  const passAdvCyp = (c) => {
    if (!state.adv.cyp) return true;
    if (!c.pk || !c.pk.cyp) return false;
    if (state.adv.cyp === "any") return c.pk.cyp.length > 0;
    if (state.adv.cyp === "other") {
      const mainCyps = ["CYP3A4", "CYP2D6", "CYP1A2", "CYP2C9", "CYP2C19", "CYP2E1"];
      return c.pk.cyp.some((x) => !mainCyps.includes(x));
    }
    return c.pk.cyp.includes(state.adv.cyp);
  };

  const passAdvRo5 = (c) => {
    if (!state.adv.ro5) return true;
    if (!c.pr) return false;
    const v = c.pr[3];
    if (v == null) return false;
    if (state.adv.ro5 === "0") return v === 0;
    if (state.adv.ro5 === "1") return v <= 1;
    if (state.adv.ro5 === "gt1") return v > 1;
    return true;
  };

  const passAdvProp = (c) => {
    if (!state.adv.prop) return true;
    if (!c.pr) return false;
    const mw = c.pr[0], alogp = c.pr[1];
    switch (state.adv.prop) {
      case "cns": return mw != null && alogp != null && mw <= 400 && alogp >= 1 && alogp <= 3;
      case "lead": return mw != null && alogp != null && mw <= 300 && alogp <= 3;
      case "druglike": return mw != null && mw >= 300 && mw <= 500;
      case "high_mw": return mw != null && mw > 500;
      case "hydrophilic": return alogp != null && alogp < 0;
      case "lipophilic": return alogp != null && alogp > 4;
      default: return true;
    }
  };

  const passAdvPhase = (c) => {
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
      if (count > 0) {
        badge.textContent = `${count}`;
        badge.style.display = "inline-block";
        badge.classList.add("warn");
      } else {
        badge.style.display = "none";
        badge.classList.remove("warn");
      }
    }
  }

  const visible = (c) => (!state.stackOnly || state.stack.has(c.i)) && state.clusters.has(c.c) && (!state.pkOnly || c.pk) && (!state.cypOnly || (c.pk && c.pk.cyp)) && (state.hub === null || c.l.includes(state.hub))
    && (!state.ver || VER_TEST[state.ver](c)) && (state.hlBin === null || (c.hlh && binOf(c.hlh) === state.hlBin))
    && passAdvCyp(c) && passAdvRo5(c) && passAdvProp(c) && passAdvPhase(c)
    && (!state.evidenceCohort || state.evidenceCohort.has(c.i));
  function stats() {
    const vis = C.filter(visible).length;
    updateEvidenceCohortIndicator();
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

    // semantic pharmacological typed edges
    // 1. Stack network typed edges
    if (state.stack.size >= 2) {
      const stackArr = [...state.stack];
      for (let i = 0; i < stackArr.length; i++) {
        for (let j = i + 1; j < stackArr.length; j++) {
          const a = stackArr[i], b = stackArr[j];
          const ca = C[a], cb = C[b];
          if (!visible(ca) || !visible(cb)) continue;
          const edgesAB = getCompoundTypedEdges(ca).filter((e) => e.other === b && state.edgeFilters.enabled.has(e.type));
          edgesAB.forEach((e) => {
            const [x1, y1] = toScreen(ca.x, ca.y), [x2, y2] = toScreen(cb.x, cb.y);
            const isOut = e.from === a;
            drawSingleTypedEdge(ctx, e.type, isOut ? x1 : x2, isOut ? y1 : y2, isOut ? x2 : x1, isOut ? y2 : y1, true);
          });
        }
      }
    }

    // 2. Contextual typed edges for selected / hovered compound
    [selC, state.hover].forEach((c, n) => {
      if (!c) return;
      const isSel = (n === 0);
      const edges = getCompoundTypedEdges(c).filter((e) => state.edgeFilters.enabled.has(e.type));
      edges.forEach((e) => {
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
        if ((x1 < -20 && x2 < -20) || (x1 > W + 20 && x2 > W + 20) || (y1 < -20 && y2 < -20) || (y1 > H + 20 && y2 > H + 20)) continue;
        drawSingleTypedEdge(ctx, e.type, x1, y1, x2, y2, false);
        drawnCount++;
      }
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
        <div class="links" style="display:flex;gap:6px;margin:.5rem 0">
          <button class="btn btn-gold" id="targetDeepDiveBtn" style="flex:1;font-size:var(--text-xs);padding:4px 8px">🔬 Eksplorator celu (Deep-Dive)</button>
          <a href="https://www.ebi.ac.uk/chembl/target_report_card/${esc(t.id)}/" target="_blank" rel="noopener noreferrer" class="btn" style="font-size:var(--text-xs);padding:4px 8px">ChEMBL ↗</a>
        </div>
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
      const struct = getChemStructure(c);
      let chemHtml = "";
      if (struct) {
        chemHtml = `
          <div class="chem-card">
            <div class="chem-card-preview" data-zoom-chem="${c.i}" title="Kliknij, aby powiększyć wzór strukturalny 2D">
              <img src="${struct.url}" alt="Wzór 2D ${esc(c.n)}" loading="lazy">
            </div>
            <div class="chem-meta">
              <span><b>${esc(c.mf || (c.pr && c.pr[0] ? c.pr[0] + " g/mol" : "Struktura 2D"))}</b>${c.pr && c.pr[0] && c.mf ? ` · ${c.pr[0]} g/mol` : ""}</span>
              ${c.ik ? `<button class="btn-copy" data-copy-ik="${esc(c.ik)}" title="Kopiuj InChIKey do schowka">📋 InChIKey</button>` : `<a href="${struct.extUrl}" target="_blank" rel="noopener noreferrer" style="font-size:11px">${struct.extLabel} ↗</a>`}
            </div>
          </div>`;
      } else if (c.mt && c.mt !== "Small molecule") {
        chemHtml = `
          <div class="chem-card">
            <div class="chem-placeholder">
              <span style="font-size:1.8rem">🧬</span>
              <b>${esc(c.mt)}</b>
              <span>Cząsteczka biologiczna bez struktury małocząsteczkowej</span>
            </div>
          </div>`;
      }

      const top3Analogs = findCompoundAnalogs(c, "hybrid", false, 3);
      const analogsTeaserHtml = top3Analogs.length ? `
        <div style="background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:var(--radius-sm);padding:6px 8px;margin-top:.4rem;font-size:11px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
            <b style="font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:var(--color-text-muted)">🧬 Analogi strukturalne</b>
            <button class="btn-copy" id="overviewAllAnalogsBtn" style="font-size:10px;padding:1px 6px">Więcej (10) ↗</button>
          </div>
          <div style="display:flex;gap:4px;flex-wrap:wrap">
            ${top3Analogs.map((a) => `<button class="tag ok" data-open-analog="${a.compound.i}" style="cursor:pointer;font-size:10px;background:none;border:1px solid var(--color-border)" title="Podobieństwo: ${a.score}%">${esc(a.compound.n)} · <b>${a.score}%</b></button>`).join("")}
          </div>
        </div>
      ` : "";

      const cEdges = getCompoundTypedEdges(c);
      const typedEdgesHtml = cEdges.length ? `
        <div style="background:var(--color-surface-2);border:1px solid var(--color-border);border-radius:var(--radius-sm);padding:8px 10px;margin-top:.5rem;font-size:11px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <b style="font-size:10px;text-transform:uppercase;letter-spacing:.6px;color:var(--color-text-muted)">🕸️ Relacje semantyczne (${cEdges.length})</b>
            <button class="btn-copy" id="overviewOpenEdgesBtn" style="font-size:10px;padding:1px 6px">Filtry ↗</button>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:5px">
            ${cEdges.slice(0, 10).map((e) => {
              const cfg = TYPED_EDGE_CONFIG[e.type];
              const o = C[e.other];
              const pfx = e.dir === "out" ? "➔ " : e.dir === "in" ? "⬅ " : "↔ ";
              return `<button class="edge-pill" data-edge-goto="${esc(o.id)}" title="${esc(e.note || cfg.desc)}">
                <span class="edge-color-dot ${cfg.directed ? 'directed' : ''}" style="background:${cfg.color}"></span>
                <span class="edge-pill-tag" style="background:${cfg.color}22;color:${cfg.color}">${esc(cfg.shortLabel)}</span>
                <span>${pfx}<b>${esc(o.n)}</b></span>
              </button>`;
            }).join("")}
          </div>
          ${cEdges.length > 10 ? `<span class="note" style="display:block;margin-top:4px">…oraz ${cEdges.length - 10} kolejnych relacji.</span>` : ""}
        </div>
      ` : "";

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

      const idHtml = (c.ids || c.ic || c.ch || c.fa || c.ik || c.cid) ? `
        <div class="label" style="margin-top:.8rem">Tożsamość i źródła</div>
        <table class="pk">
          ${c.fa ? `<tr><th>Pierwsza rejestracja</th><td>${esc(c.fa)}</td></tr>` : ""}
          ${c.mt ? `<tr><th>Typ cząsteczki</th><td>${esc(c.mt)}</td></tr>` : ""}
          ${c.ids ? `<tr><th>Identyfikacja ChEMBL</th><td>${esc(IDS_PL[c.ids] || c.ids)}${c.ic ? " · " + esc(IC_PL[c.ic] || c.ic) : ""}</td></tr>` : ""}
          ${c.ik ? `<tr><th>InChIKey</th><td><code style="font-size:11px">${esc(c.ik)}</code></td></tr>` : ""}
          ${c.cid ? `<tr><th>PubChem CID</th><td><a href="https://pubchem.ncbi.nlm.nih.gov/compound/${esc(c.cid)}" target="_blank" rel="noopener noreferrer">${esc(c.cid)} ↗</a></td></tr>` : ""}
        </table>` : "";

      tabContent = `
        <div class="tab-panel">
          ${c.d ? `<p class="muted" style="line-height:1.45">${esc(c.d)}${c.d.length >= 420 ? "…" : ""}</p>` : '<p class="empty">Brak opisu podsumowującego.</p>'}
          ${chemHtml}
          ${analogsTeaserHtml}
          ${typedEdgesHtml}
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
        if (k.met) rows.push(["Metabolizm", `<button class="btn-copy" id="pkMetaboliteTreeBtn" style="font-size:10px;padding:1px 6px">🌿 Kaskada ↗</button>`, k.met]);
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
        <div class="links">${c.tg.map((t) => {
          return `<div style="display:flex;gap:4px;align-items:center;width:100%">
            <button data-t="${t}" style="flex:1;text-align:left">◎ <b>${esc(T[t].n)}</b> <small style="color:var(--color-text-muted)">(${esc(T[t].ty || "target")} · ${byTarget[t].length} subst.)</small></button>
            <button class="btn-copy" data-open-3d="${t}" title="Otwórz strukturę 3D i architekturę kieszeni wiążącej" style="font-size:10px;padding:3px 6px">🧊 3D</button>
          </div>`;
        }).join("")}</div>`
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

      const evidencePathHtml = `
        <div class="label" style="margin-top:.8rem">Ścieżka Rejestracyjna & Poziom Dowodów</div>
        <div class="ver-card">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <b>Status: ${c.ph ? `Faza kliniczna ${c.ph}` : 'Odkrywcza / Prekliniczna'}</b>
            <button class="btn-copy" id="safetyEvidenceBtn" style="font-size:10px;padding:2px 7px">📊 Eksplorator ↗</button>
          </div>
          <div style="margin-top:4px;font-size:11px;color:var(--color-text-muted)">
            ${c.fa ? `• Pierwsza rejestracja: <b>${esc(c.fa)} r.</b><br>` : ''}
            • Etykieta FDA (DailyMed): <b>${v ? (VER_PL[v.s] || v.s) : 'Brak w cross-check'}</b><br>
            • Dokumentacja EMA (SmPC): <b>${e ? (EMA_PL[e.s] || e.s) : 'Brak w bazie EMA'}</b>
            ${c.bb ? '<br>• <b style="color:var(--color-error)">Czarna ramka (Black Box Warning)</b>' : ''}
            ${c.wd ? '<br>• <b style="color:var(--color-error)">Wycofany z obrotu (Withdrawn)</b>' : ''}
          </div>
        </div>`;

      tabContent = `
        <div class="tab-panel">
          ${warnBoxes.join("")}
          ${evidencePathHtml}
          ${tagsHtml}
          ${cypHtml}
          ${hubsHtml}
        </div>`;
    }

    const inStack = state.stack.has(c.i);
    const stackBtnHtml = `
      <div style="display:flex;gap:4px;margin:0.5rem 0;flex-wrap:wrap">
        <button id="cardStackToggle" class="btn ${inStack ? 'btn-gold' : ''}" style="flex:1;padding:6px 8px;font-size:var(--text-xs);display:flex;align-items:center;justify-content:center;gap:4px">
          <span>${inStack ? "✓ W Twoim stacku" : "+ Dodaj do stacka"}</span>
        </button>
        <button id="cardCompareBtn" class="btn" style="padding:6px 8px;font-size:var(--text-xs)" title="Porównaj ze stackiem lub najbliższym analogiem">
          ⚖️ Porównaj
        </button>
        <button id="cardAnalogsBtn" class="btn" style="padding:6px 8px;font-size:var(--text-xs)" title="Znajdź analogi chemiczne i bioizostery">
          🧬 Analogi
        </button>
        <button id="cardMetaboliteBtn" class="btn" style="padding:6px 8px;font-size:var(--text-xs)" title="Kaskada biotransformacji i metabolity (M)">
          🌿 Metabolity
        </button>
        <button id="cardDossierBtn" class="btn" style="padding:6px 8px;font-size:var(--text-xs)" title="Kliniczna monografia substancji (A4 / PDF / Markdown)">
          📄 Monografia
        </button>
        <button id="cardEvidenceBtn" class="btn" style="padding:6px 8px;font-size:var(--text-xs)" title="Poziom dowodów klinicznych & ścieżka regulacyjna (R)">
          📊 Dowody
        </button>
      </div>`;

    return `
      <div class="card-head">
        <div class="label" style="margin-bottom:0">${esc(CL_PL[G.clusters[c.c].name])} · ${esc(g.label)}</div>
        <button class="card-close" id="cardClose" title="Zamknij szczegóły (Esc)" aria-label="Zamknij szczegóły">✕</button>
      </div>
      <div class="title">${esc(c.n)}</div>
      <div class="tags">
        ${(c.t || []).map((t) => `<span class="tag warn">${esc(t)}</span>`).join("")}
        ${c.ph ? `<button class="tag" data-open-evidence="phase:${c.ph}" title="Zobacz w eksploratorze badań klinicznych" style="cursor:pointer;background:none">ChEMBL faza ${c.ph}</button>` : ""}
        ${k ? '<span class="tag">PK auto</span>' : ""}
        ${v && v.s === "consistent" ? `<button class="tag ok" data-open-evidence="fda:consistent" title="Zobacz spójne z FDA w eksploratorze" style="cursor:pointer;background:none">PK ✓ FDA</button>` : ""}
        ${v && v.s === "discrepant" ? `<button class="tag warn" data-open-evidence="fda:discrepant" title="Zobacz rozbieżne z FDA w eksploratorze" style="cursor:pointer;background:none">PK ≠ FDA</button>` : ""}
        ${e && e.s === "consistent" ? `<button class="tag ok" data-open-evidence="ema:consistent" title="Zobacz spójne z ChPL w eksploratorze" style="cursor:pointer;background:none">PK ✓ ChPL</button>` : ""}
        ${e && e.s === "discrepant" ? `<button class="tag warn" data-open-evidence="ema:discrepant" title="Zobacz rozbieżne z ChPL w eksploratorze" style="cursor:pointer;background:none">PK ≠ ChPL</button>` : ""}
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
    p.querySelectorAll("[data-t]").forEach((b) => b.onclick = () => openTargetModal(+b.dataset.t));
    const targetDeepDive = p.querySelector("#targetDeepDiveBtn");
    if (targetDeepDive && state.sel && state.sel.type === "target") {
      targetDeepDive.onclick = () => openTargetModal(state.sel.i);
    }
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
    const compBtn = p.querySelector("#cardCompareBtn");
    if (compBtn && state.sel && state.sel.type === "compound") {
      compBtn.onclick = () => {
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
      cardDossierBtn.onclick = () => openDossierModal("single", state.sel.i);
    }
    const cardEvidenceBtn = p.querySelector("#cardEvidenceBtn");
    if (cardEvidenceBtn && state.sel && state.sel.type === "compound") {
      cardEvidenceBtn.onclick = () => {
        const comp = C[state.sel.i];
        openEvidenceModal(comp.ph ? `phase:${comp.ph}` : 'phase:0');
      };
    }
    const safetyEvidenceBtn = p.querySelector("#safetyEvidenceBtn");
    if (safetyEvidenceBtn && state.sel && state.sel.type === "compound") {
      safetyEvidenceBtn.onclick = () => {
        const comp = C[state.sel.i];
        openEvidenceModal(comp.ph ? `phase:${comp.ph}` : 'phase:0');
      };
    }
    p.querySelectorAll("[data-open-evidence]").forEach((btn) => {
      btn.onclick = () => {
        openEvidenceModal(btn.dataset.openEvidence);
      };
    });
    p.querySelectorAll("[data-open-3d]").forEach((btn) => {
      btn.onclick = () => {
        openStruct3DModal(+btn.dataset.open3d, state.sel ? state.sel.i : null);
      };
    });
    const cardAnalogsBtn = p.querySelector("#cardAnalogsBtn");
    if (cardAnalogsBtn && state.sel && state.sel.type === "compound") {
      cardAnalogsBtn.onclick = () => openAnalogsModal(state.sel.i);
    }
    const cardMetaboliteBtn = p.querySelector("#cardMetaboliteBtn");
    if (cardMetaboliteBtn && state.sel && state.sel.type === "compound") {
      cardMetaboliteBtn.onclick = () => openMetaboliteModal(state.sel.i);
    }
    const pkMetaboliteTreeBtn = p.querySelector("#pkMetaboliteTreeBtn");
    if (pkMetaboliteTreeBtn && state.sel && state.sel.type === "compound") {
      pkMetaboliteTreeBtn.onclick = () => openMetaboliteModal(state.sel.i);
    }
    const overviewAllAnalogsBtn = p.querySelector("#overviewAllAnalogsBtn");
    if (overviewAllAnalogsBtn && state.sel && state.sel.type === "compound") {
      overviewAllAnalogsBtn.onclick = () => openAnalogsModal(state.sel.i);
    }
    p.querySelectorAll("[data-open-analog]").forEach((btn) => {
      btn.onclick = () => select({ type: "compound", i: +btn.dataset.openAnalog }, true);
    });
    p.querySelectorAll("[data-edge-goto]").forEach((btn) => {
      btn.onclick = () => {
        const targetId = btn.dataset.edgeGoto;
        const targetIdx = compById.get(targetId);
        if (targetIdx !== undefined) {
          select({ type: "compound", i: targetIdx }, true);
        }
      };
    });
    const overviewOpenEdgesBtn = p.querySelector("#overviewOpenEdgesBtn");
    if (overviewOpenEdgesBtn) {
      overviewOpenEdgesBtn.onclick = () => toggleEdgesPopover(true);
    }
    p.querySelectorAll("[data-zoom-chem]").forEach((el) => {
      el.onclick = () => openChemLightBox(+el.dataset.zoomChem);
    });
    p.querySelectorAll("[data-copy-ik]").forEach((btn) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        navigator.clipboard?.writeText(btn.dataset.copyIk);
        const orig = btn.textContent;
        btn.textContent = "✓ Skopiowano!";
        setTimeout(() => { btn.textContent = orig; }, 1800);
      };
    });
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
  $("cypOnly").onchange = (e) => {
    state.cypOnly = e.target.checked;
    if (state.cypOnly && advCyp && !state.adv.cyp) {
      advCyp.value = "any";
      state.adv.cyp = "any";
      updateAdvFilterUI();
    }
    stats(); search(); draw();
  };
  $("relOn").onchange = (e) => { state.rel = e.target.checked; draw(); };
  $("ver").onchange = (e) => { state.ver = e.target.value; stats(); search(); draw(); };

  // ---------- advanced multi-filter controls
  const advCyp = $("advCypSelect");
  if (advCyp) {
    advCyp.onchange = (e) => {
      state.adv.cyp = e.target.value;
      if ($("cypOnly")) $("cypOnly").checked = false;
      state.cypOnly = false;
      updateAdvFilterUI();
      stats(); search(); draw();
    };
  }
  const advRo5 = $("advRo5Select");
  if (advRo5) {
    advRo5.onchange = (e) => {
      state.adv.ro5 = e.target.value;
      updateAdvFilterUI();
      stats(); search(); draw();
    };
  }
  const advProp = $("advPropSelect");
  if (advProp) {
    advProp.onchange = (e) => {
      state.adv.prop = e.target.value;
      updateAdvFilterUI();
      stats(); search(); draw();
    };
  }
  const advPhase = $("advPhaseSelect");
  if (advPhase) {
    advPhase.onchange = (e) => {
      state.adv.phase = e.target.value;
      updateAdvFilterUI();
      stats(); search(); draw();
    };
  }
  const advReset = $("advFilterReset");
  if (advReset) {
    advReset.onclick = () => {
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
    const hits = C.filter((c) => visible(c) && c.hay.includes(s))
      .sort((a, b) => (b.n.toLowerCase().startsWith(s) - a.n.toLowerCase().startsWith(s)) || a.n.length - b.n.length).slice(0, 40);
    const th = s.length >= 3 ? T.map((t, i) => [t, i]).filter(([t]) => (t.n || "").toLowerCase().includes(s)).slice(0, 6) : [];
    res.innerHTML = th.map(([t, i]) => `<button role="option" data-t="${i}"><span class="dot" style="background:var(--color-accent2)"></span>◎ ${esc(t.n)}<small>${byTarget[i].length} subst.</small></button>`).join("") + (hits.length ? hits.map((c) => `<button role="option" data-c="${c.i}"><span class="dot" style="background:${CL_COLORS[c.c]}"></span>${esc(c.n)}<small>${c.pk ? "PK" : ""}</small></button>`).join("")
      : (th.length ? "" : '<div role="option" aria-disabled="true" class="empty" style="padding:.4rem">Brak wyników przy obecnych filtrach.</div>'));
    res.querySelectorAll("[data-t]").forEach((b) => b.onclick = () => { openTargetModal(+b.dataset.t); res.innerHTML = ""; q.blur(); });
    res.querySelectorAll("[data-c]").forEach((b) => b.onclick = () => { select({ type: "compound", i: +b.dataset.c }, true); res.innerHTML = ""; q.blur(); });
  }
  q.addEventListener("input", search);
  q.addEventListener("keydown", (e) => { if (e.key === "Enter") { const b = res.querySelector("[data-c], [data-t]"); if (b) b.click(); } });

  // ---------- semantic edges toolbar & controls
  const edgesBtn = $("edgesBtn");
  if (edgesBtn) edgesBtn.onclick = () => toggleEdgesPopover();
  const closeEdgesPopover = $("closeEdgesPopover");
  if (closeEdgesPopover) closeEdgesPopover.onclick = () => toggleEdgesPopover(false);
  const edgeFilterAllBtn = $("edgeFilterAllBtn");
  if (edgeFilterAllBtn) {
    edgeFilterAllBtn.onclick = () => {
      Object.keys(TYPED_EDGE_CONFIG).forEach((t) => state.edgeFilters.enabled.add(t));
      renderEdgeFilterList();
      draw();
    };
  }
  const edgeFilterNoneBtn = $("edgeFilterNoneBtn");
  if (edgeFilterNoneBtn) {
    edgeFilterNoneBtn.onclick = () => {
      state.edgeFilters.enabled.clear();
      renderEdgeFilterList();
      draw();
    };
  }

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
  const stackCompareBtn = $("stackCompareBtn");
  if (stackCompareBtn) stackCompareBtn.onclick = () => openComparator();
  const stackDossierBtn = $("stackDossierBtn");
  if (stackDossierBtn) {
    stackDossierBtn.onclick = () => {
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
    dossierModal.onclick = (e) => {
      if (e.target === dossierModal) closeDossierModal();
    };
  }
  const dossierPrint = $("dossierPrintBtn");
  if (dossierPrint) dossierPrint.onclick = () => window.print();

  const dossierCopyMd = $("dossierCopyMdBtn");
  if (dossierCopyMd) {
    dossierCopyMd.onclick = () => {
      const md = activeDossierMode === "stack"
        ? generateStackDossierMarkdown(activeDossierTarget)
        : generateCompoundDossierMarkdown(C[activeDossierTarget]);
      navigator.clipboard?.writeText(md);
      const orig = dossierCopyMd.textContent;
      dossierCopyMd.textContent = "✓ Skopiowano!";
      setTimeout(() => { dossierCopyMd.textContent = orig; }, 1800);
    };
  }

  const dossierObsidian = $("dossierObsidianBtn");
  if (dossierObsidian) {
    dossierObsidian.onclick = () => {
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
      dossierObsidian.textContent = "✓ Otwarto!";
      setTimeout(() => { dossierObsidian.textContent = orig; }, 1800);
    };
  }

  // ---------- chemical structure lightbox controls
  const chemClose = $("chemModalClose");
  if (chemClose) chemClose.onclick = closeChemLightBox;
  const chemBox = $("chemLightBox");
  if (chemBox) {
    chemBox.onclick = (e) => {
      if (e.target === chemBox) closeChemLightBox();
    };
  }

  // ---------- drug comparator controls
  const compClose = $("compModalClose");
  if (compClose) compClose.onclick = closeComparator;
  const compModal = $("comparatorModal");
  if (compModal) {
    compModal.onclick = (e) => {
      if (e.target === compModal) closeComparator();
    };
  }
  const compCopyMd = $("compModalCopyMd");
  if (compCopyMd) {
    compCopyMd.onclick = () => {
      const md = exportComparisonMarkdown();
      navigator.clipboard?.writeText(md);
      const orig = compCopyMd.textContent;
      compCopyMd.textContent = "✓ Skopiowano Markdown!";
      setTimeout(() => { compCopyMd.textContent = orig; }, 1800);
    };
  }
  const compObsidian = $("compModalObsidian");
  if (compObsidian) {
    compObsidian.onclick = () => {
      const md = exportComparisonMarkdown();
      const list = (activeComparatorIndices && activeComparatorIndices.length) ? activeComparatorIndices : [...state.stack];
      const names = list.map((i) => C[i]?.n || "").filter(Boolean).join(" vs ");
      const noteName = `Porównanie ${names.slice(0, 50) || "Leków"}`;
      const uri = `obsidian://new?vault=vault&name=${encodeURIComponent(noteName)}&content=${encodeURIComponent(md)}`;
      navigator.clipboard?.writeText(md);
      window.open(uri, "_blank");
      const orig = compObsidian.textContent;
      compObsidian.textContent = "✓ Otwarto!";
      setTimeout(() => { compObsidian.textContent = orig; }, 1800);
    };
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (activeStruct3DModalOpen) { closeStruct3DModal(); return; }
      if (activeEvidenceModalOpen) { closeEvidenceModal(); return; }
      if (activeMetaboliteQuery != null) { closeMetaboliteModal(); return; }
      if (state.edgeFilters.popoverOpen) { toggleEdgesPopover(false); return; }
      if (activeAnalogsQuery != null) { closeAnalogsModal(); return; }
      if (activeDossierMode) { closeDossierModal(); return; }
      if (activeModalTarget) { closeTargetModal(); return; }
      if (activeComparatorIndices) { closeComparator(); return; }
      if (activeModalCompound) { closeChemLightBox(); return; }
      if (state.stackDrawerOpen) { toggleStackDrawer(false); return; }
      select(null);
      return;
    }
    const tag = document.activeElement ? document.activeElement.tagName : "";
    if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
    if (e.key === "r" || e.key === "R") {
      e.preventDefault();
      if (activeEvidenceModalOpen) closeEvidenceModal();
      else openEvidenceModal();
      return;
    }
    if (e.key === "v" || e.key === "V") {
      e.preventDefault();
      if (activeStruct3DModalOpen) closeStruct3DModal();
      else openStruct3DModal();
      return;
    }
    if (e.key === "3" && !e.ctrlKey && !e.metaKey && !e.altKey && (!state.sel || state.sel.type !== "compound")) {
      e.preventDefault();
      if (activeStruct3DModalOpen) closeStruct3DModal();
      else openStruct3DModal();
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
        else openMetaboliteModal(state.sel.i);
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
        if (state.sel && state.sel.type === "compound") {
          openDossierModal("single", state.sel.i);
        } else if (state.stack.size > 0) {
          openDossierModal("stack", [...state.stack]);
        } else {
          openDossierModal("single", 0);
        }
      }
      return;
    }
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

  const evidenceBtn = $("evidenceBtn");
  if (evidenceBtn) evidenceBtn.onclick = () => openEvidenceModal();
  const struct3DBtn = $("struct3DBtn");
  if (struct3DBtn) struct3DBtn.onclick = () => openStruct3DModal();
  const evidenceCohortResetBtn = $("evidenceCohortResetBtn");
  if (evidenceCohortResetBtn) {
    evidenceCohortResetBtn.onclick = () => {
      state.evidenceCohort = null;
      updateEvidenceCohortIndicator();
      stats();
      search();
      draw();
    };
  }
  const sFdaEl = $("sFda");
  if (sFdaEl && sFdaEl.parentElement) {
    sFdaEl.parentElement.style.cursor = "pointer";
    sFdaEl.parentElement.title = "Otwórz badania kliniczne i etykiety FDA (R)";
    sFdaEl.parentElement.onclick = () => openEvidenceModal("fda:consistent");
  }
  const sEmaEl = $("sEma");
  if (sEmaEl && sEmaEl.parentElement) {
    sEmaEl.parentElement.style.cursor = "pointer";
    sEmaEl.parentElement.title = "Otwórz badania kliniczne i etykiety EMA (R)";
    sEmaEl.parentElement.onclick = () => openEvidenceModal("ema:consistent");
  }
  const sIdEl = $("sId");
  if (sIdEl && sIdEl.parentElement) {
    sIdEl.parentElement.style.cursor = "pointer";
    sIdEl.parentElement.title = "Otwórz eksplorator badań klinicznych (R)";
    sIdEl.parentElement.onclick = () => openEvidenceModal();
  }

  $("reset").onclick = () => {
    if (state.evidenceCohort) {
      state.evidenceCohort = null;
      updateEvidenceCohortIndicator();
      stats();
      search();
    }
    fit();
  };
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
    if (ti >= 0) setTimeout(() => openTargetModal(ti), 50);
  } else if (fromHash) {
    const c = C.find((x) => x.id === fromHash);
    if (c) setTimeout(() => select({ type: "compound", i: c.i }, true), 50);
  }
  updateStackUI();
})();
