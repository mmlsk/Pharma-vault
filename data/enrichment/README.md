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
| Substancje w katalogu | 2351 |
| Dopasowana strona z `Infobox drug` | 1767 |
| Rekordy z ≥1 polem PK | **1117** |
| t½ liczbowo | 1016 |
| Wiązanie z białkami liczbowo | 663 |
| Biodostępność liczbowo | 639 |
| Główna droga wydalania ustalona (nerki / pozanerkowo) | 576 |
| Frakcja wydalana w postaci niezmienionej (fe) | 70 |
| Metabolizm wątrobowy ustalony | 708 |
| Substraty CYP | 310 |
| Tożsamość potwierdzona zgodnym ChEMBL ID | 235 |
| Odrzucone (niezgodny ChEMBL ID) | 26 → `rejected.csv` |

## Reguły bezpieczeństwa danych

- Strona jest odrzucana, gdy ChEMBL ID katalogu i infoboksu są różne (najczęściej sól vs. związek macierzysty — do ręcznej kuracji).
- Tożsamość pozostałych rekordów opiera się na nazwie/aliasie z przekierowaniami Wikipedii (np. *Glyburide → Glibenclamide*, *Ostarine → Enobosarm*); pole `pk-source.chembl-confirmed` rozróżnia oba przypadki.
- t½ z badań na zwierzętach (szczur, mysz, pies…) **nie** jest zapisywany jako liczba — tylko w `notes` (np. BPC-157).
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
