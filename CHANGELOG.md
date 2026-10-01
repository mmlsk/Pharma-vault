# Changelog

## [3.2.0] — 2026-10-01 — rozszerzenie, ChEMBL, weryfikacja PK, powiązania
### Dodano
- **+187 substancji** z backlogu i sklepu (`data/curated/additions.csv`, każda z ChEMBL ID lub PubChem CID i proweniencją); nowa grupa/klaster **NPS i dopalacze** (74). Katalog: **2537 / 19 grup / 9 klastrów**.
- `scripts/enrich_chembl.py` — warstwy tożsamości (katalog → infoboks → synonim ChEMBL → PubChem), mechanizmy, cele, ATC, faza, black box, wycofania, właściwości → `data/processed/chembl.json` (2264 tożsamości, 546 celów).
- `scripts/verify_pk_fda.py` — automatyczne porównanie t½ i wiązania z białkami z etykietami openFDA → `pk-verification.json` (441 zgodnych, 54 rozbieżnych).
- `scripts/build_links.py` → `links.json`: wspólny cel, ta sama grupa ATC-4, wspólne CYP, ta sama cząsteczka.
- `scripts/export_sqlite.py` → `pharma-vault.db` (8 tabel, artefakt CI).
- Vault: `07 Targets/` (546 notatek celów + MOC), sekcje „ChEMBL profile”, callout FDA i „Related compounds (auto)” w stubach, klaster NPS, rozszerzone Review Queue i Pharmacokinetics Summary.
- Graf: krawędzie „wspólny cel” (przerywane), wybór i wyszukiwanie celów (`#target=`), filtr weryfikacji, histogram t½ (skala log, klikalny), profil ChEMBL w panelu, czerwony pierścień dla rozbieżności.
- `identity-overrides.csv`, `merges.csv`, `expansion-resolution.csv`; ADR-0002; 13 nowych testów.
### Poprawiono
- Parser PK: „± SD” (39 wartości, np. abakawir 0,63 → 1,54 h), `{{ndash}}` (lorazepam 10–20 h, morfina 2–3 h), procenty z badań na zwierzętach nie są liczbowe (np. LSD).
- Kontrola ChEMBL w PK uwzględnia sól ↔ rodzic (262 potwierdzone).
- Deterministyczne sortowanie powiązań; prune nie usuwa plików zapisanych w tym samym przebiegu.
- Scalono duplikat `methylene-blue-cation`.


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
