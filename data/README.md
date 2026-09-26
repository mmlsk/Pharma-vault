# 🗄️ data

| Katalog | Rola | Edycja |
|---|---|---|
| `raw/` | Niezmienne materiały źródłowe + sumy SHA-256 | ❌ nigdy ręcznie |
| `processed/` | **Kanoniczny katalog** generowany przez `scripts/build_catalog.py` (`substances.csv/json`, `group-summary.csv`, `alias-collisions.csv`, `manifest.json`) | ❌ tylko przez skrypt |
| `curated/` | Tabele przeglądowe tworzone przez człowieka: `alias-map.csv`, `expansion-backlog.csv` (264 kandydatów z audytu), `storefront-new-compounds.csv` (34 produkty) | ✅ ręcznie, przez PR |

`storefront-new-compounds.csv`: kolumna `found_in_pdf` wskazuje PDF, w którym produkt występuje; `storefront_label` i `price_as_listed` to etykieta i cena tak, jak podano w sklepie; `verification` mówi, czy trafienie pochodzi z warstwy tekstowej (`text-layer match`), czy z ręcznej kontroli renderu strony. 9 produktów niewykrytych w warstwie tekstowej zweryfikowano wzrokowo (występują pod polskimi nazwami, np. „Johimbina HCl”, „Magnezu l-treonian”) — liczba produktów nieodnalezionych wynosi **0**. `catalog_compound_id` wskazuje dopasowanie do katalogu; `match_note` opisuje relację (sól vs. związek macierzysty, odrębna cząsteczka pokrewna itp.).
