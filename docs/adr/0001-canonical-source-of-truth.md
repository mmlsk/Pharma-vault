# ADR-0001: Jedno kanoniczne źródło prawdy

- **Status:** Proposed
- **Data:** 2026-09-26

## Kontekst
Projekt ma trzy reprezentacje tej samej wiedzy: katalog substancji, vault Obsidian i graf HTML. Ręczne utrzymywanie ich równolegle prowadzi do rozjazdów (duplikaty aliasów, różne nazwy klastrów, nieaktualne notatki).

## Decyzja
1. `data/processed/substances.csv` (budowany deterministycznie z `data/raw/`) jest kanonicznym rejestrem **tożsamości** substancji (`compound-id`, nazwa, grupa, klaster, aliasy).
2. Notatki `vault/04 Compound Notes/` są **widokiem generowanym**. Po zmianie `review-status` ze `stub` notatka staje się kanoniczna dla treści klinicznej (farmakokinetyka, interakcje) i generator jej nie nadpisuje.
3. Frontmatter jest kontraktem walidowanym przez `schemas/compound-frontmatter.v2.schema.json` w CI.
4. Backend (SQLite/Postgres, API) odraczamy do czasu, aż pojawi się realna potrzeba wielu użytkowników lub zapytań, których Dataview nie obsłuży.

## Konsekwencje
- ✅ Powtarzalny build, łatwy diff w PR, brak infrastruktury.
- ⚠️ Treść kliniczna żyje w Markdown — przyszła migracja do bazy wymaga eksportu frontmatteru (prosty, bo zwalidowany schematem).
- ⚠️ Graf `apps/graph-viewer` jest na razie statyczny; docelowo powinien czytać `substances.json`.
