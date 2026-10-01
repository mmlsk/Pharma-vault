# 💊 Pharma-vault

**Oparta na dowodach, zorientowana na bezpieczeństwo baza wiedzy farmakologicznej** — nootropiki, substancje OUN, peptydy, hormony i farmakologia pokrewna — w postaci kanonicznego katalogu danych, vaultu Obsidian i interaktywnego grafu.

> ⚠️ **Zastrzeżenie:** projekt ma charakter wyłącznie edukacyjny (nauka farmakologii klinicznej i świadomości ryzyka). **Nie jest poradą medyczną i celowo nie zawiera zaleceń dawkowania.** Obecność substancji w katalogu lub sklepie nie jest dowodem skuteczności, czystości, legalności ani bezpieczeństwa.

## 📊 W liczbach

| | |
|---|---|
| 🧪 Substancje w katalogu | **2 537** (2 351 źródłowych − 1 duplikat + **187 dodatków**; 19 grup → 9 klastrów) |
| 🧬 Tożsamość ChEMBL | **2 264** (mechanizm: 1 366 · ATC: 1 411 · black box: 450 · wycofane: 104) |
| 🎯 Cele molekularne | **546** (268 wspólnych dla ≥ 2 substancji) → `vault/07 Targets/` |
| ⏱️ Z danymi PK (auto, Wikipedia) | **1 158** (t½: 1 048 · wiązanie z białkami: 669 · biodostępność: 645 · substraty CYP: 314) |
| 🇺🇸 PK porównane z etykietą FDA | ✅ 441 zgodnych · ⚠️ 54 rozbieżnych · 72 bez wartości · 512 bez etykiety |
| 🔀 Kolizje aliasów do przeglądu | 51 |
| 🛡️ Huby bezpieczeństwa | 7 |

## 🏗️ Architektura

```mermaid
flowchart LR
  R[data/raw<br/>źródła + SHA-256] -->|build_catalog.py| P[(data/processed<br/>kanoniczny katalog)]
  P -->|generate_vault_notes.py| V[vault/04 Compound Notes<br/>stuby]
  S[schemas/ v2] -->|validate.py + CI| V
  C[data/curated<br/>aliasy · backlog] -.przegląd.-> V
  H[notatki ręczne<br/>MOC · huby · ścieżki] --> V
  V --> O[Obsidian + Dataview]
  W[data/enrichment<br/>cache infoboksów Wikipedii] -->|enrich_pk.py parse| K[(pk.json)]
  K --> V
  P -->|build_graph_data.py| G[apps/graph-viewer<br/>graph-data.js]
  K --> G
  A[data/curated<br/>additions · merges · overrides] -->|build_catalog.py| P
  CH[ChEMBL + PubChem<br/>cache] -->|enrich_chembl.py| CJ[(chembl.json)]
  FDA[openFDA<br/>cache etykiet] -->|verify_pk_fda.py| PV[(pk-verification.json)]
  K --> PV
  CJ -->|build_links.py| L[(links.json)]
  CJ --> V
  PV --> V
  L --> V
  L --> G
  P -->|export_sqlite.py| DB[(pharma-vault.db)]
```

Zasada: **jedno źródło prawdy, reszta to widoki generowane** — zob. [ADR-0001](docs/adr/0001-canonical-source-of-truth.md).

## 📂 Struktura

```
Pharma-vault/
├── apps/graph-viewer/        🕸️ interaktywny graf HTML (Canvas)
├── data/
│   ├── raw/                  📥 źródła (JS pharmapedia, PDF sklepu) + SHA-256
│   ├── processed/            🗄️ kanoniczny katalog (CSV/JSON, manifest) + pk.json
│   ├── enrichment/           ⏱️ cache infoboksów Wikipedii, odrzucenia, pokrycie PK
│   └── curated/              ✍️ aliasy, backlog rozszerzeń, produkty sklepu
├── docs/
│   ├── architecture/         🏛️ plan wdrożenia, rejestr decyzji, backend, wizja
│   ├── adr/                  📐 Architecture Decision Records
│   └── research/             🔬 analizy źródeł i projektu schematu
├── schemas/                  📏 JSON Schema frontmatteru v2
├── scripts/                  ⚙️ build → generate → validate
├── tests/                    ✅ pytest
├── vault/                    🧠 vault Obsidian (otwórz ten folder)
│   ├── 00 Home/
│   ├── 01 Maps of Content/
│   ├── 02 Concepts/
│   ├── 03 Pathways/          (+ CYP450 Pathways.canvas)
│   ├── 04 Compound Notes/    (generowane, 9 podfolderów-klastrów)
│   ├── 05 Compound Clusters/
│   ├── 06 Safety Hubs/
│   ├── 07 Targets/           (546 generowanych notatek celów + MOC)
│   └── 90 Templates/
└── Resources/                📦 archiwum v1 — analiza „Biohacking Bible”
```

## 🚀 Szybki start

```bash
pip install -r requirements.txt
make all        # catalog → pk → chembl → verify → links → vault → graph → export → validate → test (offline)
make refresh    # sieć: odśwież cache Wikipedii, ChEMBL/PubChem i openFDA
make xlsx       # opcjonalnie: substances.xlsx
```

Obsidian: **Open folder as vault → `vault/`**, włącz wtyczkę **Dataview**. Zacznij od `00 Home/Home.md`.

## 🔁 Workflow kuracji

`stub` → `candidate` → `expanded` → `verified` (→ `needs-update`)

1. Wybierz notatkę z `01 Maps of Content/Review Queue.md`.
2. Uzupełnij frontmatter wg `90 Templates/Compound Note Example.md` (poziom dowodów A–X — `02 Concepts/Evidence Tiers.md`).
3. Zmień `review-status` — od tej chwili generator **nie nadpisze** notatki.
4. `make validate` (CI robi to samo przy każdym pushu).

## 🧭 Proweniencja

| Element | Pochodzenie |
|---|---|
| Katalog 2 351 substancji | Deterministyczny parse `data/raw/pharmapedia-source/CompoundCatalog.source.js.txt` |
| Notatki-stuby | Generowane z katalogu (**nie** są przeglądem klinicznym) |
| Farmakokinetyka w stubach | Automatycznie z `{{Infobox drug}}` angielskiej Wikipedii, wersje przypięte (`oldid`), `source-status: auto-extracted` — zob. [data/enrichment](data/enrichment/README.md) |
| 187 dodatków | `data/curated/additions.csv` — ChEMBL ID lub PubChem CID + pochodzenie (backlog/sklep) |
| Mechanizmy, cele, ATC | ChEMBL API v2 (cache w repo), poziom pewności tożsamości w `identity.source` — [ADR-0002](docs/adr/0002-identity-tiers-and-automated-pk-crosscheck.md) |
| Weryfikacja PK | Automatyczne porównanie z etykietami openFDA/DailyMed (`partially-verified` ≠ przegląd ekspercki) |
| Graf | `apps/graph-viewer/graph-data.js` generowany z `substances.json` + `pk.json` + `chembl.json` + `pk-verification.json` + `links.json` |
| Huby, ścieżki, koncepcje, szablony | Napisane ręcznie w v3 na podstawie projektu z wątku roboczego |
| `docs/research`, `docs/architecture` | Eksport wątku roboczego z nagłówkiem proweniencji |
| `Resources/` | Oryginalna zawartość repo v1 (commit `6a43d7d`) |

## 📦 Resources

Folder [`Resources/`](Resources/README.md) zawiera całą wcześniejszą zawartość repozytorium — krytyczną analizę „Biohacking Bible” (przegląd, tabela selekcyjna, zakres pominięć, pełna tabela) — przeniesioną bez zmian treści.
