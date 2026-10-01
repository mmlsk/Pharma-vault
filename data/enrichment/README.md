# ⏱️ Wzbogacenie farmakokinetyczne (PK)

Automatyczne dane PK dla stubów `vault/04 Compound Notes/`, pozyskane z szablonu `{{Infobox drug}}` angielskiej Wikipedii.

## Pipeline

```bash
make enrich   # sieć:    enrich_pk.py fetch  -> wikipedia-infobox.jsonl (surowe pola + revid)
make pk       # offline: enrich_pk.py parse  -> data/processed/pk.json, pk.csv, rejected.csv, pk-coverage.json
make vault    # stuby dostają pola PK, tabelę "Pharmacokinetics" i link do wersji źródła
make graph    # apps/graph-viewer/graph-data.js
```

Cache `wikipedia-infobox.jsonl` jest commitowany, więc CI i `make all` działają bez sieci i dają deterministyczny wynik.

## Pokrycie (stan z `pk-coverage.json`)

| Metryka | Liczba |
|---|---|
| Substancje w katalogu | 2537 |
| Dopasowana strona z `Infobox drug` | 1919 |
| Rekordy z ≥1 polem PK | **1158** |
| t½ liczbowo | 1048 |
| Wiązanie z białkami liczbowo | 669 |
| Biodostępność liczbowo | 645 |
| Główna droga wydalania ustalona (nerki / pozanerkowo) | 591 |
| Frakcja wydalana w postaci niezmienionej (fe) | 74 |
| Metabolizm wątrobowy ustalony | 728 |
| Substraty CYP | 314 |
| Tożsamość potwierdzona ChEMBL ID (także sól ↔ związek macierzysty) | 262 |
| Odrzucone (niezgodny ChEMBL ID) | 26 → `rejected.csv` |

## Reguły bezpieczeństwa danych

- Strona jest odrzucana, gdy ChEMBL ID katalogu i infoboksu są różne (najczęściej sól vs. związek macierzysty — do ręcznej kuracji).
- Tożsamość pozostałych rekordów opiera się na nazwie/aliasie z przekierowaniami Wikipedii (np. *Glyburide → Glibenclamide*, *Ostarine → Enobosarm*); pole `pk-source.chembl-confirmed` rozróżnia oba przypadki.
- t½ z badań na zwierzętach (szczur, mysz, pies…) **nie** jest zapisywany jako liczba — tylko w `notes` (np. BPC-157). Od v3.2 to samo dotyczy biodostępności i wiązania z białkami (np. LSD „65–90% in guinea pigs”); wiązanie z białkami „in vitro” jest dopuszczone, bo tak się je standardowo mierzy.
- Od v3.2: „± SD” jest usuwane przed parsowaniem (39 poprawionych wartości, np. abakawir 0,63 → 1,54 h), a szablony `{{ndash}}`/`{{nbsp}}` są zamieniane na znaki (lorazepam 10–20 h, morfina 2–3 h).
- Enzymy CYP z pola *metabolism* zapisywane są wyłącznie jako **substraty**; role inhibitora/induktora nie są oceniane (wymagają ChPL/etykiety FDA).
- Każda wartość ma zachowany oryginalny tekst (`notes`) i stały URL wersji (`…&oldid=REVID`).
- Notatki kuratorskie (`review-status` ≠ `stub`) nigdy nie są nadpisywane; stuby dostają `source-status: auto-extracted` i tag `pk-auto`.

## Ograniczenia

- Wikipedia to źródło **trzeciorzędowe**; wartości bywają podane dla konkretnej drogi podania, populacji lub metabolitu (zob. `notes`). Liczba w polu `value` to pierwsza wartość z pierwszego segmentu tekstu.
- `renal-clearance.primary-route` oznacza główną drogę wydalania materiału związanego z lekiem (także metabolitów), a nie klirens nerkowy leku macierzystego.
- Brak parametrów objętości dystrybucji, Cmax, Tmax i dawkowania — celowo.
- Dane edukacyjne; przed jakimkolwiek zastosowaniem klinicznym weryfikuj w ChPL / etykiecie FDA.

## Licencja i atrybucja

Teksty z Wikipedii są dostępne na licencji [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Atrybucja: link do konkretnej wersji artykułu w każdym rekordzie (`source-url`) — historia autorów jest dostępna pod tym adresem. Wyciągnięte fragmenty w `notes`, `pk.json` i notatkach vaultu podlegają tej samej licencji.


---

# 🧬 Warstwa ChEMBL (v3.2)

```bash
make chembl-fetch   # sieć: enrich_chembl.py resolve + fetch -> data/enrichment/chembl/*.jsonl
make chembl         # offline: enrich_chembl.py parse -> data/processed/chembl.json, chembl-coverage.json
```

| Cache (`chembl/`) | Zawartość |
|---|---|
| `name-lookup.jsonl` | dokładne dopasowania nazwy/synonimu → ChEMBL (z `pref_name`, rodzicem) |
| `pubchem-lookup.jsonl` | PubChem PUG REST: nazwa → CID → InChIKey → ChEMBL |
| `molecules.jsonl`, `mechanisms.jsonl`, `targets.jsonl`, `atc.jsonl` | rekordy ChEMBL API v2 (tylko używane pola) |

Kolejność ustalania tożsamości: **katalog → infoboks Wikipedii (tylko jeśli ID istnieje w ChEMBL) → dokładny synonim ChEMBL z jednoznacznym rodzicem → PubChem (jeden CID)**. Zapytania ≤ 3 znaków wymagają potwierdzenia ChEMBL. Wyjątki: `data/curated/identity-overrides.csv`. Szczegóły i uzasadnienie: [ADR-0002](../../docs/adr/0002-identity-tiers-and-automated-pk-crosscheck.md).

Pokrycie (`chembl-coverage.json`): **2264** tożsamości (katalog 499 · infoboks 1037 · dopasowanie nazwy 607 · dodatki 121), mechanizm 1366, ATC 1411, ostrzeżenie „black box” 450, wycofane 104, **546 celów** (268 wspólnych dla ≥ 2 substancji).

# 🇺🇸 Automatyczne porównanie z etykietami FDA (v3.2)

```bash
make verify-fetch   # sieć: verify_pk_fda.py fetch -> openfda/label-pk.jsonl
make verify         # offline: -> data/processed/pk-verification.json, pk-verification-coverage.json
```

- Źródło: openFDA `drug/label` (`openfda.generic_name.exact`, najnowsza etykieta). Cache przechowuje **tylko zdania** z t½ i wiązaniem z białkami + set id / wersję (link DailyMed).
- Tolerancja: t½ zgodne, gdy wartość z etykiety mieści się w ×0,5–1,5 zakresu z Wikipedii; wiązanie z białkami ±10 p.p.
- Statusy: `consistent` 441 · `discrepant` 54 · `no-label-value` 72 · `no-label` 512 (z 1079 rekordów z t½ lub PB).
- `consistent` → `source-status: partially-verified` i tag `pk-fda-consistent`. To **automatyczna zgodność dwóch źródeł, nie przegląd ekspercki** (`review-status` pozostaje `stub`).
- Typowe przyczyny `discrepant`: pozorny t½ postaci o przedłużonym uwalnianiu/depot (buprenorfina, naltrekson ER, implant afamelanotydu), t½ metabolitu, frakcja wolna zamiast związanej. Lista: `01 Maps of Content/Review Queue.md`.

# 🔬 Potwierdzenie strukturalne tożsamości (v3.3)

```bash
make identity-fetch   # sieć: ChEMBL standard InChIKey (chembl/structures.jsonl), PubChem CID/nazwa (pubchem-cid.jsonl, pubchem-name-evidence.jsonl)
make identity         # offline: data/processed/identity-review.json + .csv, identity-review-coverage.json
```

| Werdykt | infoboks (1035) | dopasowanie nazwy (604) |
|---|---|---|
| ✅ `structure-confirmed` (InChIKey identyczny z cząsteczką lub rodzicem) | 895 | 367 |
| 🏷️ `inn-match-ema` (biologik: nazwa = INN produktu EMA) | 48 | 72 |
| ⚠️ `connectivity-match` (ten sam szkielet, inna stereochemia/izotopy) | 50 | 22 |
| ≈ `formula-match` (ten sam wzór, inny InChIKey — tautomery: tetracykliny, kumaryny, oksykamy) | 18 | 5 |
| `no-chembl-structure` (przeciwciała, białka, oligonukleotydy) | 18 | 127 |
| `no-evidence` | 4 | 8 |
| ❌ `conflict` | 2 (oba rozstrzygnięte) | 3 (2 rozstrzygnięte; otwarty: satawaptan) |

Decyzje: `data/curated/identity-decisions.csv`; stosowane w `enrich_chembl.py` (`replace`, `reject`) i dołączane do werdyktu (`confirm`).

# 🇪🇺 Porównanie z ChPL / SmPC (EMA, v3.3)

```bash
make ema-fetch   # sieć: raport EMA „Medicines output” (ema/medicines.jsonl) + PDF-y informacji o produkcie (sekcja 5.2) -> ema/smpc-pk.jsonl
make ema         # offline: data/processed/pk-verification-ema.json, pk-verification-ema-coverage.json
```

- Dopasowanie: INN produktu (jedna substancja) = nazwa ChEMBL / katalogu / alias (bez nazw soli). Produkt referencyjny: dopuszczony, nie generyk/biopodobny, najwcześniejsze pozwolenie.
- 292 substancje dopasowane; zgodne **238**, rozbieżne 31, bez wartości 12, bez tekstu sekcji 5.2 11. ATC z EMA zgodny z ChEMBL w 229 przypadkach.
- Cache: wyłącznie zdania o t½ i wiązaniu z białkami + URL SmPC (EN) i ChPL (PL, 148 zweryfikowanych). PDF-y nie są przechowywane.
- Typowe rozbieżności: produkt referencyjny jest postacią specjalną (doksorubicyna liposomalna, fentanyl donosowy/przezskórny, oktreotyd LAR, buprenorfina implant), t½ metabolitu lub inna populacja.
- EMA stosuje limit zapytań (HTTP 429) — `fetch` ponawia tylko brakujące rekordy.

# 📜 Licencje źródeł

| Źródło | Licencja | Zakres w repo |
|---|---|---|
| Wikipedia | CC BY-SA 4.0 | fragmenty infoboksów, link do wersji `oldid` |
| ChEMBL (EMBL-EBI) | CC BY-SA 3.0 | identyfikatory, mechanizmy, cele, ATC, właściwości |
| PubChem (NCBI) | domena publiczna | CID, InChIKey |
| openFDA / DailyMed | domena publiczna (US Gov) | zdania PK z etykiet, set id |
| EMA (EPAR, raport leków) | © European Medicines Agency — powielanie dozwolone z podaniem źródła | zdania z sekcji 5.2 SmPC, numery EMEA, URL-e |
