# ADR-0002: Warstwy tożsamości i automatyczne porównanie PK

- **Status:** zaakceptowany (v3.2, 2026-10-01)
- **Kontekst:** rozbudowa katalogu o kandydatów z backlogu oraz dołączenie mechanizmów/celów wymaga stabilnej tożsamości substancji. Nazwy handlowe, sole, estry i skróty (NEP, DMT, HHC) prowadzą do błędnych dopasowań. Dane PK z Wikipedii są trzeciorzędowe.

## Decyzja

1. **Tożsamość w warstwach o malejącej pewności**, zapisywana w `chembl.json → identity.source`:
   `catalogue` → `wikipedia-infobox` (ID musi istnieć w ChEMBL) → `chembl-name-match` (dokładny synonim/pref_name, jeden rodzic) → `curated-addition` (dodatki z PubChem: dokładnie jeden CID → InChIKey → ChEMBL).
2. Zapytania ≤ 3 znaków i znane pułapki są obsługiwane przez `identity-overrides.csv`; konflikty (`ambiguous`, `duplicate-candidate`) **nie** są dodawane automatycznie.
3. Sole i estry kolapsują do rodzica (`dedupe-key`) tylko do wykrywania duplikatów i powiązań `same-molecule`; nie scalamy rekordów automatycznie (scalenia wyłącznie przez `merges.csv`).
4. **Automatyczne porównanie PK z etykietą FDA** z tolerancją (t½ ×0,5–1,5; PB ±10 p.p.). Zgodność podnosi `source-status` do `partially-verified`, ale **nie zmienia** `review-status` — oznacza zgodność dwóch źródeł, nie weryfikację kliniczną.
5. Wszystkie odpowiedzi sieciowe są cache’owane w repo (minimum pól), więc `make all` i CI działają offline i deterministycznie.

## Konsekwencje

- ✅ 2264/2537 substancji ma ChEMBL ID z jawnym poziomem pewności; 546 celów tworzy krawędzie „wspólny cel”.
- ✅ Porównanie wykryło realne błędy parsera (lorazepam, morfina, ± SD).
- ⚠️ 607 tożsamości z dopasowania nazwy wymaga potwierdzenia (tag `chembl-name-match`, Review Queue).
- ⚠️ ~66 dodatków tylko z PubChem nie ma mechanizmu ani celów; NPS nie mają etykiet FDA.
- ⚠️ Rozbieżności często wynikają z postaci leku (depot/ER) lub metabolitu — wymagają ręcznej oceny.
