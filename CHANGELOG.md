# Changelog

## [3.1.0] — 2026-09-26 — PK i graf z danych
### Dodano
- `scripts/enrich_pk.py` + `data/enrichment/` — farmakokinetyka z `{{Infobox drug}}` Wikipedii (wersje przypięte): **1117** substancji z danymi PK, 1016 z liczbowym t½, 310 z substratami CYP; 26 stron odrzuconych przez niezgodny ChEMBL ID.
- `data/processed/pk.json`, `pk.csv`.
- `scripts/build_graph_data.py` → `apps/graph-viewer/graph-data.js`; nowy graf 2 351 substancji (wyszukiwarka, filtry, panel PK, linki Obsidian/ChEMBL/Wikipedia).
- Makefile: `enrich`, `pk`, `graph`; 5 nowych testów (pk.json, brak liczbowego t½ z danych zwierzęcych, walidacja wzbogaconych notatek, spójność grafu).
### Zmieniono
- Schemat v2: `value-max` w `half-life` i `protein-binding`, nowe obiekty `bioavailability` i `pk-source`, status `auto-extracted`.
- Stuby z danymi PK: tabela „Pharmacokinetics” z tekstem źródłowym, callout o automatycznej ekstrakcji, link do [[CYP450 Metabolism]] dla substratów CYP.
- `storefront-new-compounds.csv`: 9 produktów niewykrytych w warstwie tekstowej PDF zweryfikowano wzrokowo — nieodnalezionych: 0.
- Poprzedni graf 40 węzłów → `apps/graph-viewer/legacy-overview.html`.

## [3.0.0] — 2026-09-26 — restrukturyzacja
### Dodano
- `data/` — surowe źródła z SHA-256, kanoniczny katalog **2 351 substancji / 18 grup / 8 klastrów**, tabele kuratorskie (aliasy, 264-pozycyjny backlog, 34 produkty sklepu).
- `scripts/` — `build_catalog.py`, `generate_vault_notes.py`, `validate.py`.
- `schemas/compound-frontmatter.v2.schema.json` — kontrakt frontmatteru v2.
- `vault/` — Obsidian: Home, 4 MOC, 3 koncepcje, 7 ścieżek + canvas CYP450, 8 klastrów, 7 hubów bezpieczeństwa, szablony i dashboardy Dataview, 2 351 wygenerowanych notatek-stubów.
- `apps/graph-viewer/` — interaktywny graf HTML.
- `docs/` — architektura, ADR-0001, 7 dokumentów badawczych.
- Testy (pytest), `Makefile`, CI (GitHub Actions).
### Zmieniono
- Zawartość v1 (README + `notes/`) przeniesiona do `Resources/`.

## [1.0.0] — commit `6a43d7d`
- Krytyczna analiza „Biohacking Bible” (4 notatki).
