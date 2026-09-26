# 📥 data/raw — materiały źródłowe (tylko do odczytu)

Pliki w tym katalogu są **niezmienialnym wejściem** pipeline'u. Nie edytuj ich — zamiast tego dodaj nową wersję i zaktualizuj sumy kontrolne.

| Plik | Pochodzenie | Użycie |
|---|---|---|
| `pharmapedia-source/CompoundCatalog.source.js.txt` | Kod źródłowy komponentu katalogu z pharmapedia.fyi, zapisany jako tekst | Wejście `scripts/build_catalog.py` (2 351 substancji, 18 grup) |
| `pharmapedia-source/StackBuilder.source.js.txt` | Komponent „Stack Builder” z tej samej witryny | Materiał referencyjny (analiza w `docs/research/01-…`) |
| `pharmapedia-source/GoalExplorer.source.js.txt` | Komponent „Goal Explorer” | Materiał referencyjny |
| `storefront-pdfs/*.pdf` | Zrzuty stron sklepu (Zion Pharma), przesłane przez autora | Lista produktów w `data/curated/storefront-new-compounds.csv` |

> ⚠️ Materiały pochodzą od stron trzecich i służą wyłącznie analizie badawczej w prywatnym repozytorium. Obecność substancji w katalogu lub sklepie **nie jest dowodem** skuteczności, czystości, legalności ani bezpieczeństwa.

## SHA-256

```
f584b80d3f29bfbe7f13ec8243683864b3dbbabb400b12bdf6c844e6093a5147  pharmapedia-source/CompoundCatalog.source.js.txt
de5ea760ac272bf7a46266de21fda95d79bdbe92e1b6c29fbed48e5e5bad64e0  pharmapedia-source/GoalExplorer.source.js.txt
f33433064a93f2ee7483ad22bc7b069c8096987dad59292bfa5a41d4a1afb3d0  pharmapedia-source/StackBuilder.source.js.txt
0a885db444a3ba9d2d5abbcb2edc4fb3fdf0ed6785328843f3bbc54597107eab  storefront-pdfs/Nootropic-Zion-Pharma.pdf
401a5d2c1171da9f208e4f954867250f3ff4cfbe57f1a2b52a8713855133b31a  storefront-pdfs/Sklep-Nootropy-Zion-Pharma-2.pdf
ba6ea5b4363538e0e4d3b3dec9e1b92877745779a5c78ae4e02429216f93e7da  storefront-pdfs/Sklep-Strona-2-Nootropy-Zion-Pharma-3.pdf
```
