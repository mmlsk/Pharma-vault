# ADR-0003: Strukturalne potwierdzanie tożsamości i porównanie z ChPL/SmPC (EMA)

- **Status:** zaakceptowany (v3.3, 2026-10-01)
- **Kontekst:** po v3.2 604 tożsamości ChEMBL pochodziły wyłącznie z dopasowania nazwy, a 1035 z pola infoboksu Wikipedii (możliwe literówki). PK było porównywane tylko z etykietami USA, co pomija leki zarejestrowane w UE i nie daje odnośnika do polskiej ChPL.

## Decyzja

1. **Potwierdzenie strukturalne** (`scripts/curate_identity.py`): standardowy InChIKey ChEMBL (cząsteczki i rodzica) porównywany jest z InChIKey z PubChem, uzyskanym niezależnie: (a) z CID wpisanego w infoboksie, (b) z wyszukania nazwy (≤ 3 CID), (c) dla soli — z „parent CID” PubChem. Werdykty: `structure-confirmed` → `connectivity-match` (ten sam szkielet, inna warstwa stereo/izotopów) → `formula-match` (ten sam wzór, inny InChIKey — tautomer/reprezentacja) → `conflict`.
2. Dla biologików i mieszanin bez struktury: `inn-match-ema`, gdy nazwa ChEMBL = INN produktu dopuszczonego centralnie w UE (INN są z definicji unikalne). To słabszy dowód niż struktura.
3. **Decyzje ręczne** w `data/curated/identity-decisions.csv` (`confirm` / `replace` / `reject`, z recenzentem i uzasadnieniem). Pierwsza runda jest oznaczona `agent-review` — to przegląd wykonany przez agenta AI na podstawie danych PubChem/ChEMBL, nie przez farmaceutę/lekarza.
4. **Porównanie z ChPL/SmPC** (`scripts/verify_pk_ema.py`): rejestr EMA „Medicines output” → produkt referencyjny (dopuszczony, nie generyk/biopodobny, najwcześniejsze pozwolenie, jedna substancja) → PDF informacji o produkcie → sekcja 5.2. Te same tolerancje co dla FDA. Cache przechowuje tylko zdania z t½ i wiązaniem z białkami oraz URL-e (EN + zweryfikowany PL).
5. **Reguła promocji:** `source-status: partially-verified` tylko gdy ≥ 1 regulator zgodny **i żaden** rozbieżny; przy sprzeczności tag `pk-sources-disagree`.

## Konsekwencje

- ✅ Wykryte realne błędy: deukrawacytynib (literówka w infoboksie → ADAPROLOL), trestolon/bolandiol (ester zamiast związku), grelina (rekord ChEMBL o składzie zgodnym z sekwencją szczurzą), witamina K2 (klasa, nie związek).
- ⚠️ Zakres EMA = tylko produkty centralnie dopuszczone; starsze leki z rejestracją krajową (np. tylko w URPL) nie mają porównania.
- ⚠️ Produkt referencyjny może być postacią specjalną (liposomalna, depot, plaster) — główne źródło rozbieżności.
- ⚠️ EMA ogranicza liczbę zapytań (HTTP 429); link do polskiej ChPL zapisujemy tylko po potwierdzeniu, że istnieje.
