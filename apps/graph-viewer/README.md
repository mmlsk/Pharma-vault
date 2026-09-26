# 🕸️ Graph viewer

Interaktywny graf **wszystkich 2351 substancji** katalogu — Canvas, bez frameworków i bez serwera.

- `index.html` + `app.js` — widok (otwórz `index.html` bezpośrednio z dysku lub przez dowolny serwer statyczny).
- `graph-data.js` — **generowany** przez `scripts/build_graph_data.py` z `data/processed/substances.json` i `pk.json` (`make graph`). Format `.js` (`window.PV_GRAPH = …`) zamiast `.json`, bo przeglądarki blokują `fetch()` lokalnych plików pod `file://`.
- `legacy-overview.html` — poprzedni ręcznie opisany graf 40 węzłów (archiwum).

## Co pokazuje

- 18 grup jako dyski (kolor = jeden z 8 klastrów), substancje ułożone deterministyczną spiralą (phyllotaxis); większa kropka = ma dane PK, obwódka = substrat CYP.
- W centrum 7 hubów bezpieczeństwa (romby), 7 szlaków i 3 koncepcje; powiązania wg tych samych reguł routingu co notatki w vaulcie.
- Wyszukiwarka po nazwie, aliasie, ID i izoenzymie CYP (np. `CYP2D6`), filtry klastrów (Alt/⌘+klik = tylko ten), hubów/szlaków, „tylko z PK”, „tylko substraty CYP”.
- Panel szczegółów: opis, mechanizm ChEMBL, tabela PK z tekstem źródłowym, link do przypiętej wersji Wikipedii, ChEMBL i `obsidian://open` (zakłada vault o nazwie folderu `vault`).
- Level of detail: etykiety substancji dopiero po przybliżeniu; krawędzie substancji tylko dla zaznaczenia/najechania. Deep link: `index.html#modafinil-compound`.
