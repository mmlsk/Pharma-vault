# 🗄️ data

| Katalog | Rola | Edycja |
|---|---|---|
| `raw/` | Niezmienne materiały źródłowe + sumy SHA-256 | ❌ nigdy ręcznie |
| `processed/` | **Kanoniczny katalog** generowany przez `scripts/build_catalog.py` (`substances.csv/json`, `group-summary.csv`, `alias-collisions.csv`, `manifest.json`) | ❌ tylko przez skrypt |
| `curated/` | Tabele przeglądowe tworzone przez człowieka: `alias-map.csv`, `expansion-backlog.csv` (264 kandydatów z audytu), `storefront-new-compounds.csv` (34 produkty) | ✅ ręcznie, przez PR |

`storefront-new-compounds.csv`: kolumna `found_in_pdf` pokazuje, czy nazwa występuje w warstwie tekstowej PDF (część stron to obrazy → `not-found-in-text-layer` wymaga kontroli wzrokowej); `catalog_compound_id` wskazuje dopasowanie do katalogu po normalizacji nazwy.
