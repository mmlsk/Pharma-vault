# ✍️ Dane kuratorskie

Pliki edytowane ręcznie (lub generowane raz i przeglądane). Surowe źródła w `data/raw/` pozostają niezmienione — każda zmiana katalogu przechodzi przez jeden z poniższych plików i ma proweniencję.

| Plik | Rola | Kto pisze |
|---|---|---|
| `alias-map.csv` | aliasy i kolizje nazw | kurator |
| `expansion-backlog.csv` | 264 kandydatów do rozszerzenia (z wątku) | kurator |
| `storefront-new-compounds.csv` | produkty sklepu spoza katalogu | kurator (weryfikacja wzrokowa PDF) |
| `identity-overrides.csv` | odrzucenia / zapytania zastępcze / aliasy dla rozwiązywania tożsamości | kurator |
| `expansion-resolution.csv` | wynik rozwiązania każdego kandydata (`added`, `not-found`, `duplicate-name`, `ambiguous`, `rejected`, `duplicate-candidate`) | `enrich_chembl.py resolve` |
| `additions.csv` | **187** substancji dodanych do katalogu, każda z `chembl_id` lub `pubchem_cid`, `match` i `origin` | `enrich_chembl.py resolve` → przegląd |
| `identity-decisions.csv` | decyzje dot. tożsamości ChEMBL po kontroli strukturalnej (`confirm` / `replace` / `reject`, recenzent, uzasadnienie) | kurator (v3.3: `agent-review`) |
| `merges.csv` | scalenia duplikatów (`methylene-blue-cation` → `methylene-blue`) | kurator |

`build_catalog.py` łączy: źródło → `merges.csv` → `additions.csv` (źródło `curated-addition`, tag `curated-addition`). Manifest zapisuje SHA-256 wejść i liczbę scaleń.
