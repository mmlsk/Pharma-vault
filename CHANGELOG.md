# Changelog

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
