# Changelog

## [3.10.0] — 2026-11-02 — Zaawansowany Filtr Wielokryterialny (Smart Multi-Filter & Faceted Search)
### Dodano
- **Zaawansowany Filtr Wielokryterialny (Smart Multi-Filter & Faceted Search)** w pasku bocznym przeglądarki grafu (`apps/graph-viewer/app.js`, `apps/graph-viewer/index.html` oraz pliki w katalogu głównym):
  - **Zwijany akordeon fasetowy (`#advFilterDetails`)**:
    - Nowa dedykowana sekcja w pasku bocznym z dynamicznym licznikiem aktywnych kryteriów (`#advFilterBadge`), reagująca płynnie na zmiany i nieprzesłaniająca widoku grafu.
    - Przycisk szybkiego resetu `✕ Wyczyść filtry zaawansowane` (`#advFilterReset`) przywracający domyślny widok jednym kliknięciem.
  - **4 fasetowe wymiary farmakologiczno-chemiczne**:
    1. **Precyzyjny selektor izoenzymów CYP (`#advCypSelect`)**: filtrowanie po konkretnych szlakach metabolicznych (dowolny substrat CYP, CYP3A4, CYP2D6, CYP1A2, CYP2C9, CYP2C19, CYP2E1 oraz rzadkie izoenzymy) z pełną dwukierunkową synchronizacją z ogólnym checkboxem `#cypOnly`.
    2. **Reguła Lipińskiego Ro5 (`#advRo5Select`)**: filtrowanie na związki w pełni zgodne z regułą pięciu (0 naruszeń — optymalna biodostępność doustna), dopuszczalne w chemii medycznej ($\le 1$ naruszenie — lead-like) oraz poza Ro5 ($> 1$ naruszeń — peptydy, makromolekuły i związki biologiczne).
    3. **Profil fizykochemiczny MW & ALogP (`#advPropSelect`)**: dedykowane presety kliniczne:
       - OUN / Bariera Krew-Mózg ($MW \le 400 \text{ g/mol} \land ALogP \in [1.0, 3.0]$)
       - Lead-like ($MW \le 300 \text{ g/mol} \land ALogP \le 3.0$)
       - Klasyczne drobnocząsteczkowe ($MW \in [300, 500] \text{ g/mol}$)
       - Wysokocząsteczkowe ($MW > 500 \text{ g/mol}$)
       - Hydrofilowe ($ALogP < 0$)
       - Silnie lipofilowe ($ALogP > 4.0$)
    4. **Faza rozwoju klinicznego ChEMBL (`#advPhaseSelect`)**: Faza 4 (leki zatwierdzone i w obrocie), Fazy 1–3 (kandydaci w badaniach klinicznych) oraz faza 0 / substancje badawcze i suplementy.
  - **Reaktywne filtrowanie w czasie rzeczywistym**:
    - Każda modyfikacja faset natychmiastowo przelicza pętlę `visible(c)` (< 1 ms), odświeża histogram $t_{1/2}$, wyniki wyszukiwania tekstowego oraz licznik widocznych cząsteczek.
- **Testy automatyczne (`tests/test_pipeline.py`)**:
  - Dodano `test_advanced_multi_filter` sprawdzający obecność elementów DOM, kluczy stanu `state.adv`, funkcji predykatów oraz weryfikujący poprawność zapytań fasetowych i złożeń wielokryterialnych na bazie ponad 2200 substancji (43 testy, 100% green).

## [3.9.0] — 2026-11-02 — Porównywarka leków Head-to-Head i widok diff celów/PK
### Dodano
- **Porównywarka Leków Head-to-Head (Drug Comparator & Diff View)** w przeglądarce grafu (`apps/graph-viewer/app.js`, `apps/graph-viewer/index.html` oraz pliki w katalogu głównym):
  - **Interaktywny widok porównawczy side-by-side** (`#comparatorModal`):
    - Możliwość jednoczesnego zestawienia od 2 do 4 leków w przejrzystej, responsywnej tabeli diffującej.
    - Miniatury struktur 2D SVG/PNG z funkcją powiększenia w LightBoxie oraz szybkim kopiowaniem InChIKey.
    - Podział na 5 kluczowych sekcji klinicznych i biofizycznych:
      1. **Właściwości fizykochemiczne & Ro5**: MW, lipofilowość (ALogP), pole powierzchni polarnej (PSA) oraz liczba naruszeń reguły Lipińskiego z kolorystycznym wyróżnieniem.
      2. **Farmakokinetyka (PK)**: czas półtrwania ($t_{1/2}$), wiązanie z białkami osocza, status walidacji z etykietami FDA i ChPL.
      3. **Metabolizm & Enzymy CYP**: substraty enzymów cytochromu P450 z automatycznym ostrzeganiem na bursztynowo (`.comp-diff-warn`) w przypadku dzielenia tego samego szlaku metabolicznego (wąskie gardło / ryzyko kumulacji).
      4. **Cele molekularne & MoA**: automatyczne wykrywanie wspólnych celów ChEMBL podświetlanych na zielono (`.comp-diff-same`) oraz porównanie klas ATC poziomu 4.
      5. **Profil bezpieczeństwa & Huby**: ostrzeżenia Black Box, wycofania z rynku, konflikty tożsamości oraz przynależność do krytycznych hubów toksykologicznych.
  - **Szybkie punkty wejścia i obsługa klawiatury**:
    - Przycisk `⚖️ Porównaj` w pasku narzędziowym drawera stacka (`#stackDrawer`).
    - Przycisk `⚖️ Porównaj` w nagłówku karty wybranej substancji do natychmiastowego zestawienia ze stackiem lub najbliższym analogiem.
    - Skrót klawiszowy `C` / `c` do otwierania/zamykania porównywarki oraz `Esc` do zamykania modala.
  - **Eksport do Markdown i Obsidian**:
    - Przycisk `📋 Kopiuj Markdown` generujący zwięzłą, sformatowaną tabelę GitHub Flavored Markdown (GFM) ze wszystkimi parametrami leków do schowka.
    - Przycisk `📝 Eksportuj do Obsidian` tworzący dedykowaną notatkę porównawczą przez protokół `obsidian://new`.
- **Testy automatyczne (`tests/test_pipeline.py`)**:
  - Dodano `test_comparator_feature_extraction` weryfikujący obecność komponentów HTML/JS, poprawność indeksowania celów i detekcji nakładających się substratów CYP (42 testy, 100% green).

## [3.8.0] — 2026-11-02 — wizualizacja struktur chemicznych 2D, InChIKey i powiększenie LightBox
### Dodano
- **Wizualizator Struktur Chemicznych 2D (Chemical Structure Visualizer)** w przeglądarce grafu (`apps/graph-viewer/app.js`, `apps/graph-viewer/index.html` oraz pliki w katalogu głównym):
  - **Karta struktury 2D na karcie substancji** (zakładka "Przegląd"):
    - Czysty laboratoryjny kafelek z wektorowym podglądem cząsteczki SVG renderowanym przez oficjalne API ChEMBL RDKit (`https://www.ebi.ac.uk/chembl/api/data/image/{ch}.svg`) dla ponad 2200 substancji.
    - Fallback do PubChem PNG dla substancji posiadających PubChem CID bez rekordu ChEMBL.
    - Dedykowany, elegancki placeholder dla makromolekuł biologicznych, peptydów i ekstraktów naturalnych bez płaskiego wzoru małocząsteczkowego.
    - Bezpośredni przycisk `📋 InChIKey` kopiujący kanoniczny identyfikator InChIKey do schowka одним kliknięciem z wizualnym potwierdzeniem `✓ Skopiowano!`.
    - Wyświetlanie wzoru sumarycznego (`c.mf`) oraz masy cząsteczkowej bezpośrednio pod wzorem.
  - **Modal powiększenia (LightBox)**:
    - Kliknięcie miniatury otwiera pełnoekranowy modal z powiększonym, ostrym wektorem cząsteczki, szczegółami tożsamości chemicznej oraz odnośnikiem zewnętrznym do karty ChEMBL/PubChem.
    - Intuicyjne zamykanie klawiszem `Esc`, przyciskiem `✕` lub kliknięciem w przyciemnione tło (backdrop).
  - **Miniatury struktur w stacku (`#stackDrawer`)**:
    - Każdy chip substancji w drawerze stacka zawiera teraz miniaturowy podgląd struktury 2D (32×32 px), umożliwiając natychmiastowe rozpoznanie szkieletu cząsteczki i powiększenie w LightBoxie.
- **Pipeline danych (`scripts/build_graph_data.py`, `graph-data.js`)**:
  - Wzbogacono eksport `window.PV_GRAPH` o `c.ik` (InChIKey dla 1413 substancji), `c.mf` (wzór sumaryczny dla 1926 substancji) oraz `c.cid` (PubChem CID).
- **Testy automatyczne (`tests/test_pipeline.py`)**:
  - Dodano `test_chemical_structures_and_inchikeys` weryfikujący zgodność formatu IUPAC wszystkich wyeksportowanych InChIKey (27 znaków, format `XXXXXXXXXXXXXX-YYYYYYYYYY-Z`) oraz pokrycie bazowe (41 testów, 100% green).

## [3.7.0] — 2026-11-02 — symulator farmakokinetyczny, krzywe stężeń i detekcja Okien Kolizji
### Dodano
- **Symulator Farmakokinetyczny & Kumulacja Dawek (PK Stack Simulator)** w drawerze `#stackDrawer` (`apps/graph-viewer/app.js`, `apps/graph-viewer/index.html` oraz pliki w katalogu głównym):
  - **1-kompartmentowy model z wchłanianiem I rzędu**:
    - Numeryczne wyznaczanie stałej absorpcji $k_a$ metodą Newtona-Raphsona dla zadanego $T_{\max}$ (domyślnie $1.5\text{ h}$ lub proporcjonalnie do $t_{1/2}$).
    - Dokładne modelowanie eliminacji $k_e = \ln(2)/t_{1/2}$ oparte o zweryfikowane wartości $t_{1/2}$ w bazie.
    - Możliwość edycji $t_{1/2}$ w czasie rzeczywistym dla każdej substancji (z oznaczeniem `*` dla substancji bez domyślnych danych PK).
  - **Symulacja wielodawkowa i stan stacjonarny (*Steady State*)**:
    - Niezależny wybór schematu podawania dla każdej substancji: $q24\text{h}$ (1×/dobę), $q12\text{h}$ (2×/dobę), $q8\text{h}$ (3×/dobę) lub pojedynczy bolus.
    - Automatyczne wyliczanie wskaźnika kumulacji w stanie stacjonarnym ($R_{ac} = \frac{1}{1 - e^{-k_e \cdot \tau}}$) oraz czasu do osiągnięcia równowagi ($T_{ss} = 5 \times t_{1/2}$).
  - **Interaktywny wykres Canvas 2D**:
    - Skalowanie Retina/HiDPI (`dpr`), dynamiczna siatka godzinowa i stężeniowa (% $C_{\max}$).
    - Przełącznik horyzontu czasowego: `Auto` (dopasowany do najdłuższego $t_{1/2}$), `24h`, `48h`, `7 dni`.
    - Płynny kursor czasowy (crosshair hover) z pływającym dymkiem odczytu stężeń dla wszystkich substancji w danym punkcie czasu $t$.
  - **Wykrywanie i wizualizacja Okien Kolizji (*Collision Windows*)**:
    - Automatyczna detekcja przedziałów czasowych, w których substancje wykazujące interakcję (toksyczność serotoninowa, depresja oddechowa, nakładanie CYP) osiągają jednocześnie wysokie stężenia ($\ge 40\%$).
    - Półprzezroczyste pasma ostrzegawcze na wykresie z etykietą `🚨 Kolizja`.
  - **Eksport do Obsidianu (`obsidian://new`)**:
    - Nowa sekcja `## 3. Parametry farmakokinetyczne i kumulacja (Steady State)` z tabelą parametrów ($t_{1/2}$, $T_{\max}$, schemat $\tau$, $R_{ac}$, czas do $C_{ss}$) oraz calloutem ostrzegawczym wykrytych Okien Kolizji.
- **Testy automatyczne (`tests/test_pipeline.py`)**:
  - Dodano `test_pk_simulation_math` testujący poprawność analityczną $k_e$, wyznaczania szczytu $T_{\max}$ dla $k_a$, kinetyki zmywania oraz kumulacji $R_{ac}$ (40 testów, 100% green).

## [3.6.0] — 2026-11-01 — interaktywny Stack Builder i Interaction Checker
### Dodano
- **Stack Builder & Interaction Checker** w przeglądarce grafu (`apps/graph-viewer/index.html`, `apps/graph-viewer/app.js` oraz pliki w katalogu głównym):
  - **Wysuwany boczny panel (drawer)**:
    - Przycisk w toolbarze `🧪 Mój Stack` z dynamicznym licznikiem substancji w zestawie oraz skrót klawiszowy `S` / `Esc`.
    - Lista chipów substancji w stacku z kropką klastra, nazwą grupy i natychmiastowym usuwaniem (`✕`).
    - 4 gotowe zestawy demonstracyjne (presets): *Nootropowy klasyk* (Kofeina + Teanina), *Zespół serotoninowy* (Sertralina + Tramadol 🚨), *Depresja oddechowa* (Morfina + Diazepam 🚨) oraz *Wąskie gardło CYP3A4* (Kwetiapina + Klarytromycyna ⚠️).
    - Przyciski akcji: `🎯 Tylko stack na grafie` (zawężenie widoku), `🔗 Kopiuj link` (deep linking `#stack=id1,id2,...`), `📝 Obsidian` (eksport ustrukturyzowanego raportu markdown z calloutami via `obsidian://new`) oraz `Wyczyść`.
  - **Silnik analizy interakcji farmakodynamicznych i metabolicznych (`analyzeStack`)**:
    - Trzypoziomowa kategoryzacja ryzyka: Krytyczne (`crit`), Umiarkowane (`mod`), Informacyjne (`info`) oraz status bezpieczny (`ok`).
    - Analiza toksyczności serotoninowej (kolizje w hubie *Serotonin Toxicity*).
    - Analiza depresji oddechowej (kolizje w hubie *Respiratory Depression and Fatal Overdose*).
    - Analiza wąskich gardeł metabolicznych CYP (nakładające się substraty izoenzymów m.in. CYP3A4, CYP2D6, CYP1A2).
    - Analiza obciążenia stymulującego / sercowo-naczyniowego (*Stimulant and Cardiovascular Load*).
    - Analiza obciążenia cholinergicznego (*Cholinergic Load*).
    - Analiza tłumienia osi HPG (*Hormonal Axis Suppression*).
    - Wykrywanie redundancji molekularnej: wspólne cele ChEMBL oraz ta sama podgrupa klasyfikacji terapeutycznej ATC.
  - **Integracja z kartą substancji i płótnem Canvas**:
    - Przycisk `+ Dodaj do stacka` / `✓ W Twoim stacku` (`#cardStackToggle`) na karcie każdej substancji.
    - Złote obwódki (halo) wokół węzłów należących do aktywnego stacka.
    - Dynamiczne, zakrzywione łuki interakcji między kolidującymi parami substancji na grafie (czerwone dla krytycznych, pomarańczowe dla umiarkowanych, fioletowe dla redundancji).
    - Czytelne etykiety tekstowe dla substancji w stacku nawet przy niskim poziomie przybliżenia (`k < 2.6`).
  - **Trwałość i udostępnianie**:
    - Automatyczny zapis w `localStorage` (`pv_stack`).
    - Parsowanie parametru `#stack=...` z URL na starcie aplikacji.
- **Testy (`tests/test_pipeline.py`)**:
  - Dodano `test_stack_presets_and_hubs` weryfikujący poprawność identyfikatorów substancji w presetach oraz format nazw izoenzymów CYP (39 testów, 100% green).

## [3.5.0] — 2026-11-01 — kuracja rozbieżności PK i zamknięcie konfliktów tożsamości
### Dodano
- `data/curated/pk-annotations.csv`: kuratorowany rejestr wyjaśnień dla 76 substancji z rozbieżnościami parametrów PK (FDA/EMA vs Wikipedia) podzielony na kategorie:
  - `formulation`: formulacje o przedłużonym uwalnianiu, depoty, implanty, preparaty wziewne, liposomalne i plastry transdermalne (m.in. implant afamelanotydu 15 h vs roztwór 0.5 h, depot buprenorfiny Sublocade, liposomalna amikacyna Arikayce, zawiesina bupiwakainy Exparel).
  - `metabolite`: aktywny metabolit o dłuższym okresie półtrwania vs lek macierzysty (m.in. bupropion/hydroksybupropion, amoksapina/8-hydroksyamoksapina, lisdeksamfetamina/dekstroamfetamina).
  - `pk-phase`: faza redystrybucji alfa vs końcowa eliminacja beta/gamma (m.in. fentanyl 0.1 h vs 18-34 h, doksorubicyna 0.2 h vs 24-75 h, kannabidiol po dawce pojedynczej vs stan stacjonarny 56-61 h).
  - `unbound-fraction`: frakcja wolna w etykiecie leku wyekstrahowana jako procent związania (m.in. tolterodyna 3.7% wolna = 96.3% związana, kwas zoledronowy 60-77% wolny = 23-40% związany).
  - `population` / `parser-artifact`: specyficzne populacje (niewydolność nerek, noworodki) lub artefakty regexu (znaki ±, słowne liczebniki).
- Obsidian Vault:
  - Frontmatter notatek wzbogacony o `pk-annotations` oraz tag `pk-explained`.
  - W notatkach generowany dedykowany callout `> [!tip] Wyjaśnienie rozbieżności PK (kuratorskie)` prezentujący przyczynę różnicy bez modyfikowania surowych danych.
- Graf (`apps/graph-viewer/app.js`, `graph-data.js`):
  - Wskaźnik wyjaśnionej rozbieżności (`≠ 💡`) na zakładce PK.
  - Karta wyjaśnienia kuratorskiego w sekcji oficjalnych etykiet rejestracyjnych.
- Baza SQLite (`scripts/export_sqlite.py`):
  - Nowa tabela `pk_annotations` (77 wpisów).
- Testy (`tests/test_pipeline.py`):
  - Dodano `test_pk_annotations` oraz `test_identity_conflicts_fully_resolved` (38 testów, 100% green).

### Poprawiono
- `data/curated/identity-decisions.csv`: rozstrzygnięto ostatnie 3 konflikty tożsamości strukturalnej (`lesinurad-compound`, `pardoprunox-compound`, `satavaptan-compound`), doprowadzając liczbę nierozstrzygniętych konfliktów w `identity-review.json` do **0**.

## [3.4.0] — 2026-10-31 — deduplikacja katalogu i segmentowy panel grafu
### Dodano
- Graf (`apps/graph-viewer/app.js`, `index.html`):
  - Segmentowy panel szczegółów karty substancji podzielony na 4 dedykowane zakładki: **Przegląd** (właściwości fizykochemiczne MW/ALogP/PSA/Ro5, ATC, identyfikacja, odnośniki), **PK & Etykiety** (parametry infoboksu, kafelki weryfikacji FDA i EMA/ChPL), **Cele & MoA** (mechanizm ChEMBL, cele molekularne i wspólne cele), **Ryzyka** (black box, wycofanie, niezgodność tożsamości, flagi ryzyka, huby bezpieczeństwa, interakcje CYP).
  - Wskaźniki statusu i liczniki (badges) na zakładkach (`✓ FDA`, `✓ EMA`, `≠`, liczba celów, `⚠`).
  - Przycisk zamykania karty (`✕`) we wszystkich widokach selekcji (substancja, grupa, cel, hub).
  - Obsługa skrótów klawiszowych: `Esc` zamyka kartę/selekcję, klawisze `1`–`4` natychmiast przełączają zakładki.
- `data/curated/merges.csv`: dodano 12 reguł scalania duplikatów między grupami/klastrami (m.in. 5-Amino-1MQ, SLU-PP-332, Certolizumab Pegol, GHK-Cu, BPC-157, Melanotan II, Kisspeptin-10, L-Arginine, L-Citrulline, Halobetasol, Loteprednol, Latanoprostene).
- `scripts/pv_common.py`: funkcja `assign_note_filenames` automatycznie usuwa sztuczne sufiksy jednoznaczności `({compound_id})`, jeśli nie występuje kolizja nazw w katalogu.

### Zmieniono
- Kanoniczny katalog: **2525 substancji** (2351 źródłowych − 13 scalonych duplikatów + 187 kuratorowanych dodatków) / 19 grup / 9 klastrów.
- Usunięto przestarzały plik `apps/graph-viewer/legacy-overview.html`.
- Zaktualizowano asercje testowe w `tests/test_pipeline.py` pod zaktualizowaną liczbę substancji (wszystkie 36 testów przechodzi pomyślnie).
- Zsynchronizowano pliki grafu `index.html`, `app.js` i `graph-data.js` w katalogu głównym repozytorium.

## [3.3.0] — 2026-10-01 — kuracja tożsamości i ChPL/EMA
### Dodano
- `scripts/curate_identity.py` — strukturalne potwierdzenie tożsamości ChEMBL (InChIKey vs PubChem: CID z infoboksu, wyszukanie nazwy, parent CID dla soli) → `identity-review.json/.csv`. Dopasowania nazwy (604): **367 potwierdzonych strukturą + 72 przez INN produktu EMA**, 27 różnic stereo/tautomerów, 127 biologików bez struktury, 8 bez danych, 3 konflikty (2 rozstrzygnięte).
- `data/curated/identity-decisions.csv` — 9 decyzji (`replace` ×3, `confirm` ×4, `reject` ×2) z uzasadnieniem; m.in. deukrawacytynib CHEMBL435170 (adaprolol, literówka w infoboksie) → CHEMBL4435170.
- `scripts/verify_pk_ema.py` — porównanie PK z sekcją 5.2 SmPC (EMA EPAR) → `pk-verification-ema.json`: **238 zgodnych**, 31 rozbieżnych, 12 bez wartości, 11 bez tekstu; 148 linków do polskiej ChPL.
- Notatki: callout „EU SmPC cross-check” z linkiem do ChPL, `pk-verification-ema` i `chembl.identity-check` we frontmatterze, tagi `identity-*`, `pk-ema-*`, `pk-2-regulators` (176), `pk-sources-disagree` (30).
- Graf: filtry „zgodne z ChPL”, „FDA + ChPL”, „tożsamość potwierdzona / do sprawdzenia”, status ChPL i weryfikacji tożsamości w panelu, nowe liczniki.
- SQLite: tabele `pk_verification_ema(_fields)`, `identity_review`. ADR-0003. 5 nowych testów (34).
### Zmieniono
- `partially-verified` wymaga braku rozbieżności u któregokolwiek regulatora (473 notatki).
- Review Queue: konflikty tożsamości, różnice stereo/tautomerów, rozbieżności z ChPL, decyzje kuratorskie; Pharmacokinetics Summary: zgodność z dwoma regulatorami i sprzeczności FDA vs UE.


## [3.2.0] — 2026-10-01 — rozszerzenie, ChEMBL, weryfikacja PK, powiązania
### Dodano
- **+187 substancji** z backlogu i sklepu (`data/curated/additions.csv`, każda z ChEMBL ID lub PubChem CID i proweniencją); nowa grupa/klaster **NPS i dopalacze** (74). Katalog: **2537 / 19 grup / 9 klastrów**.
- `scripts/enrich_chembl.py` — warstwy tożsamości (katalog → infoboks → synonim ChEMBL → PubChem), mechanizmy, cele, ATC, faza, black box, wycofania, właściwości → `data/processed/chembl.json` (2264 tożsamości, 546 celów).
- `scripts/verify_pk_fda.py` — automatyczne porównanie t½ i wiązania z białkami z etykietami openFDA → `pk-verification.json` (441 zgodnych, 54 rozbieżnych).
- `scripts/build_links.py` → `links.json`: wspólny cel, ta sama grupa ATC-4, wspólne CYP, ta sama cząsteczka.
- `scripts/export_sqlite.py` → `pharma-vault.db` (8 tabel, artefakt CI).
- Vault: `07 Targets/` (546 notatek celów + MOC), sekcje „ChEMBL profile”, callout FDA i „Related compounds (auto)” w stubach, klaster NPS, rozszerzone Review Queue i Pharmacokinetics Summary.
- Graf: krawędzie „wspólny cel” (przerywane), wybór i wyszukiwanie celów (`#target=`), filtr weryfikacji, histogram t½ (skala log, klikalny), profil ChEMBL w panelu, czerwony pierścień dla rozbieżności.
- `identity-overrides.csv`, `merges.csv`, `expansion-resolution.csv`; ADR-0002; 13 nowych testów.
### Poprawiono
- Parser PK: „± SD” (39 wartości, np. abakawir 0,63 → 1,54 h), `{{ndash}}` (lorazepam 10–20 h, morfina 2–3 h), procenty z badań na zwierzętach nie są liczbowe (np. LSD).
- Kontrola ChEMBL w PK uwzględnia sól ↔ rodzic (262 potwierdzone).
- Deterministyczne sortowanie powiązań; prune nie usuwa plików zapisanych w tym samym przebiegu.
- Scalono duplikat `methylene-blue-cation`.


## [3.1.0] — 2026-09-26 — PK i graf z danych
### Dodano
- `scripts/enrich_pk.py` + `data/enrichment/` — farmakokinetyka z `{{Infobox drug}}` Wikipedii (wersje przypięte): **1117** substancji z danymi PK, 1016 z liczbowym t½, 310 z substratami CYP; 26 stron odrzuconych przez niezgodny ChEMBL ID.
- `data/processed/pk.json`, `pk.csv`.
- `scripts/build_graph_data.py` → `apps/graph-viewer/graph-data.js`; nowy graf 2 351 substancji (wyszukiwarka, filtry, panel PK, linki Obsidian/ChEMBL/Wikipedia).
- Makefile: `enrich`, `pk`, `graph`; 5 nowych testów (pk.json, brak liczbowego t½ z danych zwierzęcych, walidacja wzbogaconych notatek, spójność grafu).
### Zmieniono
- Schemat v2: `value-max` w `half-life` i `protein-binding`, nowe obiekty `bioavailability` i `pk-source`, status `auto-extracted`.
- Stuby z danymi PK: tabela „Pharmacokinetics” z tekstem źródłowym, callout o automatycznej ekstrakcji, link do [[CYP450 Metabolism]] dla substratów CYP.
- `storefront-new-compounds.csv`: 9 produktów niewykrytych w warstwie tekstowej PDF zweryfikowano wzrokowo — nieodnalezionych: 0.
- Poprzedni graf 40 węzłów → `apps/graph-viewer/legacy-overview.html`.

## [3.0.0] — 2026-09-26 — restrukturyzacja
### Dodano
- `data/` — surowe źródła z SHA-256, kanoniczny katalog **2 351 substancji / 18 grup / 8 klastrów**, tabele kuratorskie (aliasy, 264-pozycyjny backlog, 34 produkty sklepu).
- `scripts/` — `build_catalog.py`, `generate_vault_notes.py`, `validate.py`.
- `schemas/compound-frontmatter.v2.schema.json` — kontrakt frontmatteru v2.
- `vault/` — Obsidian: Home, 4 MOC, 3 koncepcje, 7 ścieżek + canvas CYP450, 8 klastrów, 7 hubów bezpieczeństwa, szablony i dashboardy Dataview, 2 351 wygenerowanych notatek-stubów.
- `apps/graph-viewer/` — interaktywny graf HTML.
- `docs/` — architektura, ADR-0001, 7 dokumentów badawczych.
- Testy (pytest), `Makefile`, CI (GitHub Actions).
### Zmieniono
- Zawartość v1 (README + `notes/`) przeniesiona do `Resources/`.

## [1.0.0] — commit `6a43d7d`
- Krytyczna analiza „Biohacking Bible” (4 notatki).
