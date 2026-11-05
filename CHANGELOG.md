# Changelog

## [3.27.0] — 2026-11-05 — Silnik Toksykologii Molekularnej & Bezpieczeństwa: Hepatotoksyczność (DILIrank/eDISH), Kardiotoksyczność hERG & Margines Redferna, Kompensacja CiPA, Alerty Toksykoforów oraz Ryzyko Teratogenne/Ciąża (PLLR/RID)

### Dodano
- **Baza Modeli Toksykologicznych & Estymator Biofizyczny QSAR Tox**:
  - Utworzono zbiór kuratorowany [`data/curated/toxicology_profiles.json`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/curated/toxicology_profiles.json) dla 32 kluczowych leków klinicznych zawierający ustrukturyzowane bloki oceny narządowej: `dili`, `cardiotox`, `structural_alerts` oraz `pregnancy_lactation`.
  - Wzbogacono bazę SQLite [`pharma-vault.db`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/processed/pharma-vault.db) o nową relacyjną tabelę `toxicology_profiles` z indeksami `idx_tox_dilirank`, `idx_tox_redfern` oraz `idx_tox_pregnancy`.
  - Dołączono profile toksykologiczne do artefaktu grafu w [`scripts/build_graph_data.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/scripts/build_graph_data.py) jako `window.PV_GRAPH.toxicologyProfiles`.
  - Zaimplementowano uniwersalny estymator heurystyczny QSAR Tox (`getCompoundToxicologyProfile(c)`) oparty na regule "Rule of Two" (aLogP $\ge 3.0$ / MW), zasadowości i lipofilności (powinowactwo do kanału hERG) oraz deskryptorach wiązania z białkami (RID), zapewniający działanie silnika dla wszystkich 2533 cząsteczek.
- **Hepatotoksyczność DILI & Interaktywny Wykres eDISH (Hy's Law)**:
  - Zaimplementowano generator wektorowy SVG `renderEdishChartSvg(profile, exposureMultiplier)`: dwuwymiarowy wykres z logarytmicznymi osiami ALT ($\times\text{ULN}$) i Bilirubiny ($\times\text{ULN}$).
  - 4 strefy diagnostyczne: Zakres Prawidłowy, Odczyn Hepatocytarny (izolowany wzrost ALT $\ge 3\times$), Cholestaza (wzrost bilirubiny/ALP $\ge 2\times$) oraz kwadrant **Hy's Law** ($\text{ALT} \ge 3\times\text{ULN}$ i $\text{Bilirubina} \ge 2\times\text{ULN}$ bez pierwotnej cholestazy) oznaczający $>10\%$ śmiertelność z martwicy wątroby.
  - Suwak mnożnika ekspozycji / podatności osobniczej ($0.5\times$ do $4.0\times$) modulujący parametry laboratoryjne w czasie rzeczywistym z animowanym pierścieniem ostrzegawczym.
- **Kardiotoksyczność Elektrofizjologiczna & Margines Redferna**:
  - Pasek logarytmiczny `renderRedfernMarginSvg(cardio)` wizualizujący Margines Bezpieczeństwa Redferna ($SM = IC_{50,\text{hERG}} / C_{max}$) w trzech strefach ryzyka: czerwonej ($SM < 30\times$, wysokie ryzyko TdP), żółtej ($30–100\times$, wymagany monitoring EKG/QTc) i zielonej ($SM > 100\times$, bezpieczna repolaryzacja).
  - Klasyfikacja bazy CredibleMeds (Known, Possible, Conditional risk).
  - Wskaźnik kompensacji wielokanałowej **CiPA**: detekcja jednoczesnej blokady dokomorowych kanałów wapniowych Cav1.2 ($I_{Ca,L}$), neutralizującej arytmogenny potencjał blokady hERG (np. model Werapamilu vs Haloperydolu).
- **Alerty Strukturalne Toksykoforów (ToxAlerts)**:
  - Detekcja reaktywnych grup funkcyjnych podatnych na bioaktywację do elektrofilowych intermediatów (chinonoiminy, areno-tlenki, acylglukuronidy, pierścienie furanowe, układy hydrazydowe, podstawniki ftaloilowe).
- **Bezpieczeństwo w Ciąży, Teratogenność & Laktacja (PLLR / RID)**:
  - Podwójna klasyfikacja: kategoria literowa (A/B/C/D/X) + narracyjna ocena FDA PLLR (ryzyko trymestralne, wady cewy nerwowej, rozszczepy, embriopatie).
  - Pasek wskaźnika przenikania do mleka Relative Infant Dose (RID %) z zaznaczonym progiem bezpieczeństwa $<10\%$.
  - Czerwona odznaka Czarnej Skrzynki dla bezwzględnych teratogenów (Izotretynoina, Kwas walproinowy, Talidomid, Metotreksat).
- **Rozbudowa Tarczy Polipragmazji (`#polypharmacyShield`) w Stosie**:
  - Nowy wektor kolizji hepatotoksycznej `dili_stack_overload`: detekcja jednoczesnego stosowania 2+ leków oznaczonych jako Most-DILI-concern (np. Paracetamol + Izoniazyd).
  - Nowy wektor teratogenny `teratogen_stack_alert`: natychmiastowe ostrzeżenie przy obecności w analizowanym zestawie leku kategorii X lub teratogenu z czarną ramką.
- **6 Historycznych Presetów Klinicznych**:
  1. *Paracetamol & NAPQI* (DILI Hepatocellular & wejście w strefę Hy's Law).
  2. *Terfenadyna vs Feksofenadyna* (hERG Redfern Collapse $<1.0$ vs bezpieczny metabolit kwasowy $>50\times$).
  3. *Kwas Walproinowy* (Toksyczność mitochondrialna & wady cewy nerwowej spina bifida).
  4. *Izotretynoina* (Embriopatia retinoidowa & program iPLEDGE).
  5. *Werapamil* (Kompensacja CiPA: blokada Cav1.2 chroniąca przed TdP).
  6. *Augmentin* (Cholestaza polekowa kwasu klawulanowego sprzężona z HLA).
- **UI/UX & Deep-Linking**:
  - Rozbudowa zakładki *Ryzyka & Toksykologia* w karcie substancji o mini-podgląd eDISH, wskaźnik Redferna i odznaki ciążowe.
  - Pełny panel analityczny Split-Pane (`openToxicologySplitPane`) z suwakiem ekspozycji i odnośnikiem do struktury 3D kanałów jonowych w [Biomolecular Structure Viewer](sidecar://biomolecular-structure-viewer).
  - Obsługa hash routingu: `#/toxicology/<compoundId>?exposure=<val>&preset=<key>`.
- **Testy Jakości**:
  - Dodano `test_molecular_toxicology_and_safety_engine` w [`tests/test_pipeline.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/tests/test_pipeline.py).
  - Wszystkie 64 testy automatyczne przechodzą pomyślnie.

## [3.26.0] — 2026-11-04 — Architektura 7 Trybów Roboczych (Workspace Modes), Pasek Relacyjny Breadcrumbs, Szybka Paleta Komend (Cmd+K) & Dostępność WCAG 2.1 AA

### Dodano
- **7 Pełnoprawnych Trybów Roboczych (Workspace Modes)**:
  - Rozbudowano górny pasek nawigacyjny do 7 dedykowanych kart roboczych:
    1. 🗺️ *Eksplorator Grafu & Szlaków* (`graph`)
    2. 📋 *Karta & Monografia Kliniczna (Dossier)* (`dossier`)
    3. 🧪 *Mój Stack & Tarcza DDI* (`stack`)
    4. 📊 *Badania Kliniczne & EBM* (`evidence`)
    5. 🏷️ *Wskazania & Drzewo ICD-10/11* (`indications`)
    6. 🧊 *Struktury 3D & Kieszenie Wiążące* (`structure3d`)
    7. 🌿 *Kaskada Biotransformacji & Analogi* (`metabolism`)
  - Pełne wsparcie dla WAI-ARIA Tabs (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`), w tym płynna nawigacja klawiszami strzałek `ArrowLeft` / `ArrowRight` oraz skrótami numerycznymi `1`..`7`.
  - Dwukierunkowa synchronizacja stanu widoku z historią przeglądarki (`#/graph`, `#/dossier`, `#/stack`, `#/evidence`, `#/indications`, `#/3d`, `#/metabolism`).
- **Relacyjny Pasek Okruszkowy (Breadcrumbs Navigation)**:
  - Dodano klikalny pasek ścieżki kontekstowej `🏠 Baza › Klaster › 💊 Substancja › 🛡️ Mini-Tarcza DDI` pod nagłówkiem, umożliwiający błyskawiczny powrót do wyższych poziomów powiązań i szybki podgląd ryzyka polipragmazji.
- **Szybka Paleta Komend i Szukajka (`Cmd+K` / `Ctrl+K`)**:
  - Globalne okno wyszukiwania obejmujące leki, cele ChEMBL oraz akcje systemowe (przełączanie motywów, eksporty, reset kamery, Mol* Sidecar).
  - Nawigacja strzałkami góra/dół, zatwierdzanie `Enter` i zamykanie `Esc`.
- **System Powiadomień Toast**:
  - Dyskretne komunikaty zwrotne informujące o dodaniu/usunięciu ze stacka, eksporcie do Obsidian oraz kopiowaniu do schowka.
- **Dostępność Cyfrowa (WCAG 2.1 AA)**:
  - Pełna obsługa klawiatury dla wyszukiwarki `#q` (nawigacja strzałkami góra/dół po liście wyników).
  - Dostępność klawiaturowa (`role="button"`, `tabindex="0"`, obsługa `Enter`/`Space`) dla komórek macierzy interakcji DDI oraz wierszy obciążeń narządowych ADR.
  - Podniesienie kontrastu tokenów kolorystycznych (`--color-text-faint`) w trybie jasnym i ciemnym do spełnienia kryterium kontrastu 4.5:1.
  - Podniesienie minimalnego rozmiaru tekstu pomocniczego z 9–10px do 11–12px.

### Naprawiono
- **Zjawisko „Modal Hell” i Priorytet Klawisza Escape**:
  - Naprawiono błąd, w którym naciśnięcie `Escape` w otwartym modalu resetowało szlak w tle zamiast zamykać okno.
  - Naprawiono kolejność z-index: podgląd struktury 2D (`#chemLightBox`, z-index: 150) nie jest już zasłaniany przez komparator Head-to-Head (`#comparatorModal`, z-index: 100).
  - Zamknięcie dowolnego modalu automatycznie synchronizuje aktywną zakładkę w nagłówku.

## [3.25.0] — 2026-11-04 — Symulator Farmakokinetyki Kompartmentowej (PK/PD): Model 2-Kompartmentowy C(t), Redystrybucja Tkankowa, Zmienność Osobnicza (CYP/eGFR) & Stan Stacjonarny

### Dodano
- **Baza Modeli Kompartmentowych & Estymator Biofizyczny QSAR**:
  - Utworzono ustrukturyzowany zbiór kuratorowany [`data/curated/pk_compartment_models.json`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/curated/pk_compartment_models.json) dla 20 kluczowych leków klinicznych zawierający parametry mikrostałych $k_{12}, k_{21}, k_{10}, k_a$, makrostałe faz $\alpha$ i $\beta$, objętości $V_c, V_p, V_{ss}$, klirens $CL$, frakcję nerkową $f_e$ oraz izoenzym CYP.
  - Zaimplementowano uniwersalny estymator biofizyczny QSAR (`getCompoundCompartmentParams(c)`) oparty na deskryptorach fizykochemicznych (aLogP, masa cząsteczkowa MW, wiązanie z białkami $f_b$, raportowany $t_{1/2,\beta}$ i $f_e$), zapewniający działanie symulatora dla wszystkich 2533 cząsteczek w bazie.
  - Wzbogacono bazę SQLite [`pharma-vault.db`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/processed/pharma-vault.db) o nową tabelę `pk_compartment_models` oraz indeks `idx_pk_models_compound`.
  - Dołączono modele kompartmentowe do artefaktu grafu w [`scripts/build_graph_data.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/scripts/build_graph_data.py) jako `window.PV_GRAPH.pkCompartmentModels`.
- **Silnik Symulacji 2-Kompartmentowej C(t) & Wykresy SVG**:
  - Silnik analityczny (`compute2CompartmentSimulation`) wyliczający stężenia $C_1(t)$ (kompartment centralny / krew) oraz $C_2(t)$ (kompartment obwodowy / tkanki gęste/tłuszczowe).
  - Skala liniowa znormalizowana ($0–100\% C_{max}$) oraz półlogarytmiczna Semi-log ($0.1\% – 100\%$) z jawną wizualizacją dwóch nachyleń: szybkiej fazy dystrybucji $\alpha$ ($-\alpha / 2.303$) i powolnej eliminacji końcowej $\beta$ ($-\beta / 2.303$).
  - Wizualizacja zjawiska redystrybucji tkankowej (np. Fentanyl: szybki spadek $C_1$ z OUN mimo długiego $t_{1/2,\beta}$).
  - Tryb pojedynczej dawki oraz stan stacjonarny (*Steady-State*) z analitycznym indeksem akumulacji $R_{ac} = \frac{1}{1 - e^{-\beta \tau}}$ i suwakiem interwału dawkowania $\tau$ ($4–48\text{ h}$).
- **Symulacja Zmienności Osobniczej & Farmakogenomiki**:
  - Interaktywne przełączanie fenotypu metabolicznego CYP (EM 1.0x, PM 0.28x, IM 0.65x, UM 2.1x) z wyliczaniem zmiany ekspozycji systemowej $\Delta AUC\%$.
  - Suwak wydolności nerek ($eGFR: 15–120\text{ ml/min}$) wpływający na klirens nerkowy $CL_{ren} = CL \cdot f_e \cdot (eGFR / 100)$.
- **Interaktywny Komparator Leków & Presety Edukacyjne**:
  - Możliwość nałożenia krzywych dwóch leków (Lek A błękitny `#5ac8fa` vs Lek B bursztynowy `#ffd60a`) na wspólnym wykresie czasowym.
  - 4 wbudowane presety dydaktyczne:
    1. *Fentanyl vs Morfina* — redystrybucja tkankowa lipofilnego opioidu.
    2. *Metoprolol CYP2D6 Poor Metabolizer* — 3-krotna kumulacja i bradykardia u wolnych metabolizatorów.
    3. *Digoksyna w Niewydolności Nerek (eGFR 25)* — załamanie klirensu leku o wąskim indeksie terapeutycznym.
    4. *Diazepam vs Midazolam* — różnice akumulacji przy wielokrotnym dawkowaniu.
  - Precyzyjny celownik (*crosshair tracker*) z dynamicznym tooltipem śledzącym czas $t$ oraz stężenia $C_1$ i $C_2$.
- **Integracja UI & Deep-Linking**:
  - Miniatura krzywej PK i przycisk otwarcia w zakładce *Farmakokinetyka* karty leku.
  - Pełny panel symulatora w bocznym doku roboczym (Split-Pane) zintegrowany z linkiem do wizualizacji 3D struktur receptorowych w `sidecar://biomolecular-structure-viewer`.
  - Obsługa hash routingu: `#/pk-simulator/<idA>?compare=<idB>&regimen=<single|steady_state>&scale=<linear|log>&phenotype=<EM|PM|IM|UM>&egfr=<val>&tau=<val>`.
- **Zero-Dosing Policy**:
  - Architektura ściśle dydaktyczno-badawcza — brak zaleceń dawkowania (brak mg i bezwzględnych dawek), stężenia wyrażone wyłącznie względnie jako procent $C_{max}$ lub jednostki umowne.
- **Testy Jakości**:
  - Dodano `test_pk_compartment_simulator_and_curves` w [`tests/test_pipeline.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/tests/test_pipeline.py).
  - Wszystkie 63 testy automatyczne przechodzą pomyślnie.

## [3.24.0] — 2026-11-03 — Moduł Neurofarmakologii & Kinetyki Receptorowej: Radary OUN (Ki/pKi), Model Occupacji D2, Wskaźnik Meltzera & Komparator Ligandów
### Dodano
- **Baza Powinowactw Wiązania & Kinetyki Dysocjacji OUN**:
  - Utworzono ustrukturyzowany zbiór kuratorowany [`data/curated/receptor_affinities.json`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/curated/receptor_affinities.json) dla 25+ kluczowych substancji neuropsychiatrycznych w 5 klasach (Neuroleptyki typowe i atypowe, Antydepresanty SSRI/SNRI/TLPD, Psychodeliki 5-HT2A, Modulatory allosteryczne GABA-A/BZD, Opioidy).
  - Wzbogacono bazę SQLite [`pharma-vault.db`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/processed/pharma-vault.db) o tabelę `receptor_affinities` indeksowaną po `(compound_id, target_name)` zawierającą 111 znormalizowanych rekordów ze stałymi $K_i$ (nM), wartościami $pKi = 9 - \log_{10}(K_i)$ oraz typem działania.
  - Zintegrowano ładowanie powinowactw w [`scripts/build_graph_data.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/scripts/build_graph_data.py) do artefaktu `window.PV_GRAPH.receptorAffinities`.
- **Wielokąt Powinowactwa Receptorowego OUN (Spider Chart SVG)**:
  - Zaimplementowano funkcję `renderReceptorRadarSvg(affA, affB, width, height)` w [`apps/graph-viewer/app.js`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/apps/graph-viewer/app.js) generującą responsywny wykres pajęczynowy SVG w oparciu o 15 kanonicznych osi OUN: dopaminergicznych ($D_2, D_3, \text{DAT}$), serotoninergicznych ($5\text{-HT}_{1\text{A}}, 5\text{-HT}_{2\text{A}}, 5\text{-HT}_{2\text{C}}, \text{SERT}$), noradrenergicznych ($\text{NET}, \alpha_{1\text{A}}$), histaminowych ($H_1$), muskarynowych ($M_1$), opioidowych ($\text{MOR}, \text{KOR}, \text{DOR}$) oraz $\text{GABA-A}$.
  - Znormalizowana skala logarytmiczna $pKi \in [5.0, 10.0+]$ z wyróżnioną izolinią $pKi = 8.0$ ($K_i = 10\text{ nM}$) oraz precyzyjnymi tooltipami ze stałymi dysocjacji dla każdego wierzchołka.
- **Model Occupacji Receptora D2 & Kinetyka Dysocjacji (Fast-Off vs Slow-Off)**:
  - Graficzny pasek occupacji receptora dopaminowego D2 z oznaczonym oknem terapeutycznym (60–80%) oraz strefą ryzyka powikłań pozapiramidowych (EPS, akatyzji, dystonii) powyżej 80%.
  - Klasyfikator kinetyki dysocjacji korelujący czas półtrwania kompleksu ligand-receptor ($t_{1/2}$) ze zdolnością do ustępowania fizjologicznym wyrzutom dopaminy (*Fast-Off*: np. Klozapina, Kwetiapina vs *Slow-Off*: np. Haloperydol).
  - Wskaźnik Atypowości Meltzera: automatyczne obliczanie stosunku $K_i(5\text{-HT}_{2\text{A}}) / K_i(\text{D}_2)$ — potwierdzenie preferencji serotoninergicznej atypowych neuroleptyków II generacji ($<1.0$).
- **Nakładka Porównawcza Ligandów & Tabela Selektywności**:
  - Możliwość dynamicznego nałożenia profilu drugiego leku (Lek A błękitny `#5ac8fa` vs Lek B złoty `#ffd60a`) bezpośrednio na jednym radarze SVG.
  - Tabela różnic powinowactwa z wyliczaniem krotności selektywności wiązania ($K_{i,B} / K_{i,A}$).
- **Integracja UI/UX & Deep-Linking**:
  - Karta leku (zakładka *Cele*): mini-podgląd radaru SVG, odznaka kinetyki oraz przycisk otwierający pełny panel analityczny.
  - Pełny widok w Context Split-Pane (`openReceptorRadarSplitPane`) z selektorem leku do porównania oraz odnośnikiem do struktury 3D kieszeni wiążących w `sidecar://biomolecular-structure-viewer`.
  - Obsługa hash routingu: `#/receptor-radar/<compoundId>?compare=<compoundIdB>`.
- **Testy Jakości**:
  - Dodano test `test_neuropharmacology_receptor_affinities_and_radar` w [`tests/test_pipeline.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/tests/test_pipeline.py).
  - Wszystkie 62 testy automatyczne przechodzą pomyślnie (`62 passed in 1.45s`).

## [3.23.0] — 2026-11-03 — Silnik Ryzyka Polipragmazji, Interakcji Lekowych (DDI), Dynamicznych Krawędzi Kolizyjnych Canvas 2D & Tarczy Ostrzegawczej
### Dodano
- **Silnik Ryzyka Polipragmazji & Baza Reguł Klinicznych DDI**:
  - Utworzono hybrydową bazę wiedzy [`data/curated/ddi_rules.json`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/curated/ddi_rules.json) z profilami enzymatycznymi CYP450 (inhibitory, induktory, substraty) oraz farmakodynamicznymi (ryzyko hERG/QTc, potencjał serotoninergiczny, sedacja OUN, skala obciążenia antycholinergicznego ACB 1-3, nefrotoksyczność i ryzyko krwawień).
  - Wzbogacono bazę SQLite [`pharma-vault.db`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/processed/pharma-vault.db) o nową tabelę `ddi_rules` z precyzyjnym opisem mechanizmu biofizycznego, następstw klinicznych i zaleceń monitorowania (EKG, stężenia leków, elektrolity $K^+, Mg^{2+}$, eGFR, INR).
  - Zintegrowano ładowanie reguł w [`scripts/build_graph_data.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/scripts/build_graph_data.py) do artefaktu `window.PV_GRAPH.ddiRules`.
- **6-Wektorowy Wskaźnik Ryzyka Polipragmazji (0-100 pkt)**:
  - Zaimplementowano funkcję `computePolypharmacyScore(stackList)` w [`apps/graph-viewer/app.js`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/apps/graph-viewer/app.js), agregującą 6 wymiarów: Wąskie gardła CYP (20%), QTc/hERG (25%), Zespół Serotoninowy (25%), Depresja OUN/oddechowa (15%), Obciążenie Antycholinergiczne ACB (10%) oraz Zespół Triple Whammy & Krwawienia (5%).
  - Precyzyjna detekcja tri-terapii nerkowej "Triple Whammy" (NLPZ + ACEI/ARB + Diuretyk) skutkującej załamaniem hemodynamiki kłębuszkowej.
- **Wizualizacja Krawędzi Kolizyjnych na Canvas 2D**:
  - Funkcja `drawDdiCollisionEdges(ctx, stackList, k)` rysuje zakrzywione łuki Béziera łączące kolidujące substancje na płótnie:
    - Kolizje krytyczne (`danger`): pulsująca czerwona linia (`#ff3b30`, grubość 3.2 px) z neonowym rozmyciem `shadowBlur`.
    - Kolizje umiarkowane (`warn`): pomarańczowa linia ostrzegawcza (`#ff9500`, grubość 2.2 px).
    - Etykiety-odznaki w punkcie szczytowym łuku (np. `⚠️ QTc`, `⚡ CYP2D6`, `🌊 5-HT`, `🛑 OUN`, `🛡️ ACB`, `⚡ Nerki`, `🩸 Krwotok`).
- **Pływający Widżet "Tarcza Polipragmazji" (`#polypharmacyShield`)**:
  - Minimalistyczny dok w prawym górnym rogu płótna z okrągłym wskaźnikiem punktowym (0-100), dynamicznym statusem ryzyka, podsumowaniem kolizji oraz przyciskami `🔍 Audyt DDI` i `📚 Presety`.
- **Audyt Kliniczny w Context Split-Pane & Gotowe Presety Edukacyjne**:
  - Kliknięcie w Tarczę wysuwa pełny raport w `#contextSplitPane` z kolorowymi słupkami 6 wektorów bezpieczeństwa, szczegółowymi kartami każdej kolizji oraz zaleceniami monitorowania.
  - Dodano 5 gotowych studiów przypadków klinicznych do demonstracji jednym kliknięciem:
    - *Triple Whammy (Ibuprofen + Enalapryl + Hydrochlorotiazyd)*
    - *Zagrożenie Serotoninowe (Sertralina + Tramadol + Moklobemid)*
    - *Koktajl Wydłużający QTc (Escytalopram + Hydroksyzyna + Haloperydol)*
    - *Głęboka Depresja OUN / Supresja Oddechowa (Diazepam + Morfina + Zolpidem)*
    - *Polipragmazja Geriatryczna & Antycholinergiczna (Amitryptylina + Difenhydramina + Omeprazol + Diazepam)*
  - Pełna synchronizacja z hash routingiem URL (`#/ddi` oraz `#/ddi?preset=<nazwa>`).
- **Testy Jakości i Ciągła Integracja**:
  - Dodano test `test_polypharmacy_ddi_engine_and_presets` w [`tests/test_pipeline.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/tests/test_pipeline.py).
  - 61 testów automatycznych przechodzi pomyślnie (`61 passed in 1.55s`).

## [3.22.0] — 2026-11-03 — Wizualizacja Grafu 2.0: Podgrafy Szlaków Biochemicznych (Solo/Spotlight), Dok Sterujący & Wektory MoA
### Dodano
- **Ontologia Szlaków Farmakologicznych & Biochemicznych (Pathway Systems)**:
  - Utworzono ustrukturyzowany zbiór kuratorowany [`data/curated/pathway_systems.json`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/curated/pathway_systems.json) definiujący 12 kluczowych szlaków neurotransmisyjnych i receptorowych: Układ Serotoninergiczny, Dopaminergiczny, GABAergiczny, Glutaminergiczny (NMDA/AMPA), Cholinergiczny, Noradrenergiczny, Histaminergiczny, Endokannabinoidowy, Opioidowy, Adenozynowy, Szlak Kinaz Tyrozynowych (RTK/EGFR/VEGFR) oraz Oś Renina-Angiotensyna-Aldosteron (RAAS).
  - Każdy szlak zawiera kaskady transdukcji sygnału (białka $G_s, G_{i/o}, G_{q/11}$, kanały jonowe), identyfikatory celów biologicznych ChEMBL, role podtypów receptorowych oraz powiązane substancje farmakologiczne.
  - Zintegrowano ładowanie ontologii szlaków w [`scripts/build_graph_data.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/scripts/build_graph_data.py) do artefaktu `window.PV_GRAPH.pathwaySystems`.
- **Wizualizacja Grafu 2.0 & Tryby Izolacji Podgrafów**:
  - **Tryb Spotlight**: inteligentne wygaszenie tła grafu (redukcja `globalAlpha` do 0.08) z zachowaniem pełnej jasności i wyrazistości węzłów oraz krawędzi wybranego szlaku; dynamiczne ogniskowanie kamery na centroidzie szlaku.
  - **Tryb Solo (Deterministyczny Układ Radialno-Sektorowy)**:
    - Centralny pierścień receptorowy ($R = 130$ px) grupujący cele biologiczne i enzymy szlaku z precyzyjnymi etykietami.
    - Trzy zoptymalizowane sektory substancji wg mechanizmu działania (MoA): Sektor Północno-Wschodni (Zielony) dla agonistów/aktywatorów, Sektor Południowy (Czerwony) dla antagonistów/blokerów oraz Sektor Północno-Zachodni (Fioletowy) dla inhibitorów wychwytu zwrotnego i transporterów.
    - Zapewnia stałe 60 FPS na Canvas 2D dzięki ominięciu symulacji fizycznych i natychmiastowej geometrii radialnej.
  - **Wektory Farmakodynamiczne MoA**:
    - Agonizm / aktywacja: zielone linie kierunkowe (`#34c759`) zakończone grotem strzałki $\rightarrow$.
    - Antagonizm / blokada: czerwone linie (`#ff3b30`) zakończone poprzeczką T-bar $\dashv$.
    - Inhibicja wychwytu zwrotnego / transporter: fioletowe linie przerywane (`#af52de`) z okrągłym / diamentowym znacznikiem.
- **Pływający Dok Szlaków & Interaktywny Context Split-Pane**:
  - Nowy responsywny komponent UI `#pathwayDock` dokowany na dole płótna Canvas z poziomą listą chipów szlaków (`.pathway-chip`), przełącznikiem trybów `[💡 Spotlight / 🎯 Solo]` oraz przyciskiem wyjścia `✕ Wyłącz`.
  - Integracja z **Context Split-Pane (`#contextSplitPane`)**: kliknięcie szlaku wysuwa kompletną monografię biochemiczną, kaskady drugich przekaźników, podtypy receptorowe, klikalne pigułki celów (otwierające modale i strukturę 3D) oraz substancji wg ról farmakologicznych.
  - **Dwukierunkowy Hash Routing & Klawiszologia**:
    - Deep-linking URL: `#/pathway/<id>?mode=solo` lub `#/pathway/<id>?mode=spotlight`.
    - Skrót klawiszowy `W`: błyskawiczne przełączanie między Spotlight a Solo lub aktywacja pierwszego szlaku.
    - Klawisz `Esc`: natychmiastowe wyjście z izolacji szlaku i powrót do widoku globalnego grafu.
- **Weryfikacja i Testy Ciągłe**:
  - Dodano test `test_pathway_subgraph_systems_and_dock` w [`tests/test_pipeline.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/tests/test_pipeline.py).
  - Komplet 60 testów przechodzi pomyślnie (`60 passed in 1.50s`).

### Dodano
- **Pipeline Publikacji Naukowych & Dowodów Klinicznych EBM**:
  - Dedykowany moduł [`scripts/enrich_literature.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/scripts/enrich_literature.py) z algorytmem hybrydowego scoringu wpływu (cytowania, recenzje Cochrane, Lancet/NEJM/JAMA/BMJ, typ badania Meta-Analiza/Systematic Review/RCT Faza III, świeżość publikacji).
  - Skompresowany i committed cache [`data/enrichment/literature/evidence.jsonl`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/enrichment/literature/evidence.jsonl), plik wynikowy [`data/processed/literature.json`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/processed/literature.json) oraz raport pokrycia [`data/enrichment/literature-coverage.json`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/enrichment/literature-coverage.json).
  - Nowa zindeksowana tabela `clinical_evidence` w bazie SQLite [`pharma-vault.db`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/processed/pharma-vault.db) zawierająca PMID, PMCID, DOI, tytuł, periodyk, rok, typ badania, poziom EBM, status Cochrane, liczbę cytowań, status Open Access, linki do PDF-ów, ustrukturyzowane streszczenia (abstract) oraz konkluzje kliniczne.
- **Interaktywny Czytnik EBM & UI/UX**:
  - Karta substancji w przeglądarce grafu wzbogacona o wyróżnioną sekcję **🔬 Kluczowe Badania Kliniczne & EBM** z etykietami typu badania, liczbą cytowań, odnośnikami do DOI, PubMed i pobierania otwartych PDF-ów.
  - Przycisk **`📖 Czytaj streszczenie`**: wysuwa dokowalny panel dolny **Context Split-Pane (`#contextSplitPane`)**, prezentujący pełny ustrukturyzowany abstrakt, autorów, afliacje i kluczowe konkluzje kliniczne w trybie czytnika z możliwością maksymalizacji.
  - Rozbudowano tryb *Badania & Rejestry* o filtr audytowy `🔬 Badania EBM / Cochrane` (`#evFilterEbmBtn`) oraz odznaki liczby badań na kartach substancji w widoku siatki.
  - Zunifikowany hub link-out: bezpośrednie odnośniki do Medycyny Praktycznej (`mp.pl`) oraz ChemSpider (wg InChIKey).
- **Testy Automatyczne i Ciągła Integracja**:
  - Dodano cel `literature` do [`Makefile`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/Makefile).
  - Dodano test `test_ebm_literature_pipeline_and_ui` w [`tests/test_pipeline.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/tests/test_pipeline.py), weryfikujący poprawność ekstrakcji, integralność SQLite oraz renderowanie w DOM (59/59 testów przechodzi).

## [3.20.0] — 2026-11-03 — Hybrydowy Workspace, Wskazania ICD-10/ICD-11, Pipeline PsychonautWiki & RPL oraz Optymalizacja Grafu O(1)
### Dodano
- **Katalog Wskazań Klinicznych & Hierarchia ICD-10 / ICD-11 (CeZ PL + WHO)**:
  - Zbudowano pipeline wskazań [`scripts/enrich_indications.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/scripts/enrich_indications.py), słownik kuratorowany [`data/curated/compound_indications.json`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/curated/compound_indications.json), bazę przetworzoną [`data/processed/indications.json`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/processed/indications.json) oraz tabelę `compound_indications` w SQLite (`pharma-vault.db`).
  - Interaktywny eksplorator drzewa jednostek chorobowych w UI: przeglądanie wg rozdziałów ICD, wyszukiwanie w czasie rzeczywistym, pigułki statusu (`✓ ChPL`, `⚡ Off-label`, `🔬 Badania`), bezpośrednie przechodzenie do cząsteczek, dodawanie do stacku oraz filtrowanie grafu canvas 2D jednym kliknięciem (`🎯 Filtruj graf`).
  - Nowy tryb w nagłówku Workspace (`🏷️ Wskazania & ICD`) zintegrowany z hash routingiem (`#/indications` oraz `#/indications/<kod>`) i skrótem klawiszowym `I`.
- **Hybrydowy Workspace & Redukcja Przeciążenia Modalnego**:
  - Wprowadzono nadrzędny pasek nawigacyjny (`.workspace-nav`) z 4 głównymi trybami:
    - `🕸️ Eksplorator Grafu` (graf globalny 2D z inspektorem)
    - `⚖️ Mój Stack & Komparator` (analiza wielolekowa, interakcje i symulator PK)
    - `📊 Badania & Rejestry` (kohorty badań klinicznych, EPAR, FDA, RPL)
    - `🏷️ Wskazania & ICD` (hierarchia wskazań klinicznych ICD-10 i ICD-11)
  - **Kontekstowy Split-Pane (`#contextSplitPane`)**: zastąpienie zasłaniających ekran modali dokowalnym panelem dolnym ze zmienną wysokością i przyciskiem maksymalizacji (Split-View) dla widoków 3D, drzew metabolitów i analogów chemicznych.
  - **Pełny Hash Router (`#/tryb/id?parametry`)**: dwukierunkowy routing ze wsparciem dla historii przeglądarki (Wstecz/Dalej) oraz bezpośrednich linków stanu (`#/graph`, `#/stack`, `#/evidence`, `#/indications`, `#/compound/<id>`).
- **Pipeline PsychonautWiki (Harm Reduction & Nootropics/NPS)**:
  - Nowy dedykowany skrypt [`scripts/enrich_psychonaut.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/scripts/enrich_psychonaut.py) pobierający i mapujący profile z API GraphQL PsychonautWiki (licencja CC BY-SA 4.0).
  - Skompresowany i committed cache w [`data/enrichment/psychonaut/substances.jsonl`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/enrichment/psychonaut/substances.jsonl) oraz plik wynikowy [`data/processed/psychonaut.json`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/processed/psychonaut.json).
  - Nowa tabela `psychonaut_profiles` w SQLite [`pharma-vault.db`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/processed/pharma-vault.db) zawierająca fazy działania (onset, peak, duration), zgłaszane efekty subiektywne, potencjał uzależniający i tolerancję (z wyłączeniem zaleceń dawkowania zgodnie z regułą bezpieczeństwa projektu).
  - Karta leku w przeglądarce grafu wzbogacona o wyróżniony żółty blok **🧪 PsychonautWiki · Tier D (Harm Reduction)**.
- **Pipeline Polskiego Rejestru Produktów Leczniczych (RPL, CeZ / URPL)**:
  - Nowy skrypt [`scripts/enrich_rpl.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/scripts/enrich_rpl.py), cache [`data/enrichment/rpl/products.jsonl`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/data/enrichment/rpl/products.jsonl) oraz tabela `rpl_products` w SQLite.
  - Prezentacja preparatów dostępnych w polskich aptekach i bezpośrednie linki do oficjalnych ChPL i ulotek URPL w zakładce *Ogólne*.
- **Wydzielenie Danych Domenowych z Kodu Frontendowego (Decoupling & ADR-0001)**:
  - Wyekstrahowano 2 279 linii danych klinicznych z monolitu `app.js` do znormalizowanych plików w `data/curated/` (`metabolite_cascades.json`, `target_3d_catalog.json`, `curated_typed_edges.json`, `adr_definitions.json`).
  - Odchudzono [`apps/graph-viewer/app.js`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/apps/graph-viewer/app.js) o blisko 1 000 linii kodu.
- **Optymalizacja Wydajności Silnika Grafu (Spatial Grid Index & Label Culling)**:
  - **Przestrzenny Indeks Siatki (`spatialGrid`, komórki 75 px)**: zastąpienie liniowego przeszukiwania $O(N)$ zapytaniem $O(1)$ do 9 sąsiednich komórek siatki przy każdym zdarzeniu `pointermove` (<0.02 ms czasu odpowiedzi).
  - **Budżet Etykiet Tekstowych (`MAX_LABELS = 120`)**: culling napisów przy głębokim zoomie zapobiegający przeciążeniu Canvas 2D.
- **Testy Jakości i Determinizmu**:
  - 58 testów automatycznych w [`tests/test_pipeline.py`](file:///Users/m4t3/projects/Pharma-vault%20%E2%80%94%20graf%20substancji/Pharma-vault/tests/test_pipeline.py) przechodzi w 100% (`58 passed in 1.47s`).

## [3.19.0] — 2026-11-03 — Wizualizator Kompleksów 3D Receptor-Ligand i Kieszeni Wiążącej (3D Molecular Pocket & Ligand-Receptor Complex Viewer)
### Dodano
- **Wizualizator Kompleksów 3D Receptor-Ligand i Kieszeni Wiążącej (3D Molecular Pocket Viewer)** w przeglądarce grafu (`apps/graph-viewer/app.js`, `apps/graph-viewer/index.html` oraz pliki w katalogu głównym):
  - **Dedykowany modal przestrzenny (`#struct3DModal`) z płynnym silnikiem WebGL**:
    - Interaktywny viewport z pełną kontrolą 3D: obrót myszką (lewy przycisk), panowanie (prawy przycisk), płynny zoom (kółko myszy / gest pinch) oraz delikatna auto-rotacja w stanie spoczynku.
    - Pływający pasek narzędzi renderowania:
      - `Cartoon`: przestrzenne wstęgi i helisy $\alpha$ z barwnym gradientem wtórnej struktury białka.
      - `Powierzchnia`: półprzezroczysty elektrostatyczny/hydrofobowy płaszcz molekularny otaczający wnękę kieszeni.
      - `Sticks`: pełna architektura atomowa ze szkieletem wiązań kowalencyjnych.
      - `✨ Kieszeń`: przełącznik wyróżnienia kluczowych aminokwasów z etykietami 3D (np. `Asp155`, `Trp336`) i wektorami oddziaływań.
      - `💊 Ligand`: przełącznik widoczności ko-skrystalizowanego leku z atomami w standardowej konwencji CPK (C = szmaragdowy, N = błękitny, O = czerwony, S = żółty).
      - `↺ Kamera`: reset kąta i wycentrowanie rzutu na kieszeń katalityczną.
  - **Kuratorowana biblioteka Top 30 celów farmakologicznych (`TARGET_3D_CATALOG`)**:
    - Eksperymentalne struktury PDB o wysokiej rozdzielczości z ko-skrystalizowanymi ligandami:
      - GPCR monoaminowe: 5-HT2A (PDB: `6WGT` z LSD, 2.7 Å), 5-HT1A (PDB: `7E2X` z arypiprazolem), 5-HT2C (PDB: `6BQG` z ergotaminą), D2 (PDB: `6CM4` z risperidonem), D1 (PDB: `7CKZ` z apomorfiną), Adrenergiczne $\beta_2$ (`3P0G`), $\beta_1$ (`2VT4`), $\alpha_{2A}$ (`6K42`), Histaminowe $H_1$ (`3RZE` z doksepiną).
      - Receptory opioidowe i kannabinoidowe: $\mu$-opioidowy MOR (PDB: `8EF5` z fentanylem, 2.5 Å), $\kappa$-opioidowy KOR (`6B73` z nalfurafiną), $\delta$-opioidowy DOR (`4EJ4`), CB1 (`5U09` z rimonabantem), CB2 (`6KPF`).
      - Kanały jonowe i transportery: GABA-A (PDB: `6D6T` z diazepamem, 3.86 Å), NMDA (`7EU8` z ketaminą), SERT (`5I6X` z paroksetyną), DAT (`4M48`), Transporter noradrenaliny NET.
      - Kluczowe enzymy i receptory jądrowe: AChE (PDB: `4EY7` z donepezilem), COX-2 (PDB: `3LN1` z celekoksybem), COX-1 (`3N8Z` z ibuprofenem), HMG-CoA reduktaza (`1HW9` z atorwastatyną), MAO-A (`2Z5X`), MAO-B (`2V5Z`), PDE5A (`1UDT` z sildenafilem), Receptor androgenowy AR (`2AM9` z DHT), AT1 (`4YAY` z olmesartanem), GLP-1R (`6X18` z semaglutydem).
    - Zmapowane kluczowe reszty kieszeni katalitycznej (Pocket Residues) z opisami ich funkcji biochemicznej (mostki solne, wiązania wodorowe, upakowanie $\pi$-$\pi$).
    - Uniwersalny mechanizm fallback do bazy modeli predykcyjnych AlphaFold DB (v4) dla dowolnych celów UniProt.
  - **Boczny panel analityczny (`#struct3DSidebar`)**:
    - Metadane strukturalne: identyfikator PDB z bezpośrednim odnośnikiem do bazy RCSB, metoda eksperymentalna, rozdzielczość w Å, kod UniProt i model AlphaFold.
    - Karta liganda krystalograficznego z powinowactwem wiązania ($K_i$ / $\text{IC}_{50}$).
    - Interaktywna lista reszt kieszeni wiążącej: kliknięcie reszty (np. `Asp155`) podświetla i wskazuje dany aminokwas w widoku 3D.
    - Zestawienie ligandów z Pharma-vault celujących w dany receptor z przyciskami szybkiej selekcji na grafie (`🎯 Graf`) i dodawania do stacka (`+`).
    - Dedykowany przycisk i link do sidecara `sidecar://biomolecular-structure-viewer` (Mol*).
  - **Wielopunktowa integracja z interfejsem**:
    - Przycisk w toolbarze grafu `🧊 Kompleksy 3D` (`#struct3DBtn`).
    - Pigułki akcji `🧊 3D` przy każdym celu molekularnym na karcie leku (zakładka `Cele & MoA`).
    - Przycisk `🧊 Struktura 3D` w nagłówku Eksploratora Celu Molekularnego (`#targetModal`).
    - Skróty klawiszowe: `V` / `v` oraz `3` (w widoku globalnym) otwierające/zamykające wizualizator 3D; obsługa klawisza `Esc`.
- **Testy automatyczne (`tests/test_pipeline.py`)**:
  - Dodano `test_molecular_3d_complex_viewer` weryfikujący elementy DOM, style CSS, silnik renderowania, bazę `TARGET_3D_CATALOG` oraz synchronizację plików w repozytorium (52 testy, 100% green).

## [3.18.0] — 2026-11-03 — Eksplorator Badań Klinicznych i Poziomów Dowodów (Clinical Trials & Evidence Explorer)
### Dodano
- **Eksplorator Badań Klinicznych i Poziomów Dowodów (Clinical Trials & Evidence Explorer)** w przeglądarce grafu (`apps/graph-viewer/app.js`, `apps/graph-viewer/index.html` oraz pliki w katalogu głównym):
  - **Dedykowany modal analityczny (`#evidenceModal`)**:
    - Pasek wskaźników KPI (Global Evidence KPIs):
      - Substancje zarejestrowane (Faza 4): 1 501 (59% bazy).
      - Cross-check z etykietami FDA DailyMed: 1 078 substancji (91% spójnych).
      - Weryfikacja ze SmPC/ChPL Europejskiej Agencji Leków (EMA): 281 substancji (87% spójnych).
      - Ostrzeżenia najwyższego stopnia (Black Box Warnings): 56 substancji.
      - Substancje wycofane z rynku (Withdrawn): 32 substancje.
    - **Ścieżka rozwoju klinicznego (Funnel)** z 5 interaktywnymi etapami:
      - 🟢 **Faza 4**: Leki dopuszczone do obrotu (Approved, 1 501 subst.).
      - 🔵 **Faza 3**: Zaawansowane badania kliniczne i faza rejestracyjna (284 subst.).
      - 🟡 **Faza 2**: Badania skuteczności i dowodu koncepcji (POC, 306 subst.).
      - 🟣 **Faza 1**: Bezpieczeństwo u ludzi i farmakokinetyka (22 subst.).
      - ⚪ **Prekliniczne / Odkrycie**: Ligandy badawcze i eksperymentalne (420 subst.).
    - **Pasek filtrów regulacyjnych i audytowych**:
      - Szybkie przełączniki dla bazy FDA DailyMed (`c.v`), EMA SmPC (`c.ve`), rozbieżności danych PK (`v.s === 'discrepant' || ve.s === 'discrepant'`), czarnej ramki (`c.bb`) oraz leków wycofanych (`c.wd`).
      - Wyszukiwanie pełnotekstowe wewnątrz wybranej kohorty badawczej.
    - **Oś czasu dekady pierwszej rejestracji (First Approval Timeline)**:
      - Pigułki filtracyjne dla 8 przedziałów historycznych: `Do 1959`, `Lata 60.`, `Lata 70.`, `Lata 80.`, `Lata 90.`, `2000–2009`, `2010–2019`, `Od 2020`.
    - **Siatka kart leków w kohorcie (`#evidenceGrid`)**:
      - Karty substancji z miniaturyzowanym podglądem struktury 2D (powiększenie w lightboxie), rokiem pierwszej rejestracji, odznakami faz klinicznych i weryfikacji FDA/EMA.
      - Akcje szybkiej nawigacji: `🎯 Graf` (centrowanie na węźle), `+ Stack` / `✓ Stack`, `⚖️ Porównaj`, `📄 Monografia (Dossier)`, `🌿 Metabolity`.
    - **Integracja kohorty z grafem 2D Canvas (`🎯 Zastosuj do Grafu`)**:
      - Przycisk przenoszący przefiltrowaną kohortę bezpośrednio do grafu (`state.evidenceCohort`), izolujący wybrane substancje na płótnie 2D.
      - Pigułka w toolbarze (`#evidenceCohortResetBtn`) informująca o liczbie substancji w aktywnej kohorcie z możliwością natychmiastowego resetu jednym kliknięciem.
  - **Dwukierunkowa integracja z kartą substancji i paskiem bocznym**:
    - Klikalne odznaki faz klinicznych (`data-open-evidence="phase:..."`) i etykiet FDA/EMA w nagłówku karty leku.
    - Nowy przycisk akcji `📊 Dowody` na karcie wybranej substancji otwierający eksplorator w kontekście danego leku.
    - Nowa sekcja w zakładce `Ryzyka` (Safety): *Ścieżka Rejestracyjna & Poziom Dowodów* z podsumowaniem statusu EMA/FDA/Black Box i przyciskiem `📊 Eksplorator ↗`.
    - Klikalne liczniki weryfikacji w panelu bocznym (`sFda`, `sEma`, `sId`).
  - **Dostępność i nawigacja**:
    - Nowy przycisk w głównym toolbarze grafu: `📊 Badania & Dowody` (`#evidenceBtn`).
    - Skrót klawiszowy `R` / `r` otwierający/zamykający eksplorator dowodów klinicznych; obsługa klawisza `Esc`.
- **Testy automatyczne (`tests/test_pipeline.py`)**:
  - Dodano `test_clinical_trials_and_evidence_explorer` weryfikujący obecność elementów DOM, stylów CSS, silnika analitycznego i synchronizacji plików głównych (51 testów, 100% green).

## [3.17.0] — 2026-11-02 — Nawigator Biotransformacji i Drzewo Metabolitów (Metabolite Tree & Prodrug Biotransformation Navigator)
### Dodano
- **Nawigator Biotransformacji i Drzewo Metabolitów (Metabolite Tree & Prodrug Navigator)** w przeglądarce grafu (`apps/graph-viewer/app.js`, `apps/graph-viewer/index.html` oraz pliki w katalogu głównym):
  - **Wielopoziomowe diagramy kaskad metabolicznych (`#metaboliteModal`)**:
    - Trójkolumnowy układ drzewa biotransformacji: **Związek Macierzysty / Prolek (Faza 0)** ➔ **Faza I (Oksydacja / Hydroliza)** ➔ **Faza II (Koniugacja & Eliminacja)**.
    - Złącza enzymatyczne z pigułkami enzymów (np. `CYP2D6`, `CYP3A4`, `CES1`, `UGT2B7`, `11-beta-HSD1`, `ALP`) oraz nazwami reakcji biochemicznych (np. O-demetylacja, deestryfikacja, glukuronidacja acylu).
    - Odznaki aktywności farmakologicznej każdego metabolitu:
      - 🟢 `🔥 Aktywny`: metabolit czynny farmakologicznie (np. Morfina z Kodeiny, O-DSMT z Tramadolu, Enalaprylat z Enalaprylu, Psylocyna z Psylocybiny, Deksamfetamina z Lisdeksamfetaminy).
      - 🟣 `✨ Prolek`: nieaktywny lub słabo aktywny prekursor leku.
      - ⚪ `💤 Nieaktywny`: polarny metabolit końcowy eliminowany z moczem lub żółcią.
      - 🔴 `⚠️ Toksyczny`: reaktywny intermediat elektrofilowy (np. NAPQI z paracetamolu).
  - **Hybrydowy silnik kaskad (`METABOLITE_CASCADES` & `parseMetabolismText`)**:
    - Kuratorowane wielopoziomowe drzewa dla kluczowych klas: opioidy (Kodeina, Tramadol, Diamorfina), benzodiazepiny (Diazepam z kaskadą Nordazepam/Temazepam ➔ Oksazepam ➔ Glukuronid), psychostymulanty (Lisdeksamfetamina), psychodeliki (Psylocybina), leki kardiologiczne (Enalapryl, Losartan, Klopidogrel, Simwastatyna), przeciwbólowe (Paracetamol / Acetaminofen z szlakiem NAPQI i detoksykacją glutationem), przeciwdepresyjne (Amitryptylina, Fluoksetyna, Wenlafaksyna), przeciwpsychotyczne (Risperidon, Arypiprazol), przeciwwirusowe (Walacyklowir, Walgancyklowir) i steroidy (Prednizon).
    - Automatyczny ekstraktor szlaków z opisów tekstowych `c.pk.met` oraz izoenzymów `c.pk.cyp` dla pozostałych 880 substancji katalogu.
  - **Interaktywny panel boczny i porównanie Prolek vs Metabolit**:
    - Dynamiczne podsumowanie wybranego węzła kaskady z podglądem struktury chemicznej 2D.
    - Tabela różnicowa parametrów ($\Delta\text{MW}$, $\Delta\text{ALogP}$, $\Delta\text{PSA}$, $t_{1/2}$).
    - Akcje szybkiej nawigacji: `⚖️ Porównaj z prolekiem (Comparator)`, `+ Dodaj do Stacka` oraz `🎯 Na grafie` (płynne centrowanie na metabolitach obecnych w bazie).
  - **Integracja z kartą substancji i skróty klawiszowe**:
    - Nowy przycisk akcji `🌿 Metabolity` na karcie wybranej substancji.
    - Przycisk `🌿 Kaskada ↗` w wierszu metabolizmu w zakładce Farmakokinetyka (PK).
    - Skrót klawiszowy `M` / `m` otwierający/zamykający nawigator metabolitów dla aktywnego leku; obsługa klawisza `Esc`.
- **Testy automatyczne (`tests/test_pipeline.py`)**:
  - Dodano `test_metabolite_tree_and_prodrug_navigator` weryfikujący obecność elementów DOM, klas CSS, silnika kaskad oraz poprawności struktury kaskad dla Kodeiny, Diazepamu, Paracetamolu, Lisdeksamfetaminy i Enalaprylu (50 testów, 100% green).

## [3.16.0] — 2026-11-02 — Semantyczne Krawędzie Farmakologiczne & Filtrowanie Grafu (Semantic Typed Edges & Graph Filtering)
### Dodano
- **Semantyczne Krawędzie Farmakologiczne (Semantic Typed Edges)** w przeglądarce grafu (`apps/graph-viewer/app.js`, `apps/graph-viewer/index.html` oraz pliki w katalogu głównym):
  - **Taksonomia i paleta 5 typów krawędzi (`TYPED_EDGE_CONFIG`)**:
    - 🟢 `PRODRUG_OF` (`#10b981`, ciągła ze skierowanym grotem strzałki do aktywnego leku): biotransformacja proleków do czynnych farmakologicznie metabolitów (np. Lisdeksamfetamina → Deksamfetamina, Kodeina → Morfina, Psylocybina → Psylocyna, Enalapryl → Enalaprylat, L-DOPA → Dopamina).
    - 🔴 `CONTRAINDICATION` (`#ef4444`, linia przerywana `[6, 4]`): bezwzględne przeciwwskazania i krytyczne interakcje lekowe (np. MAOI + SSRI z ryzykiem zespołu serotoninowego, opioidy + benzodiazepiny z depresją oddechową, PDE5i + azotany z zapaścią naczyniową, podwójne wydłużenie QTc).
    - 🟡 `CYP_INTERACTION` (`#f59e0b`, kropka-kreska `[8, 3, 2, 3]` ze skierowaną strzałką): inhibicja enzymów cytochromu P450 zaburzająca klirens substratów (np. Fluoksetyna/Paroksetyna na CYP2D6, Ketokonazol na CYP3A4, Fluwoksamina na CYP1A2).
    - 🟣 `TARGET_SYNERGY` (`#8b5cf6`, gęsto kropkowana `[3, 3]` krzywa łukowa): zbieżny wektor działania ligandów na ten sam cel molekularny ChEMBL (np. agoniści 5-HT2A, modulatory allosteryczne GABA-A, antagoniści NMDA).
    - 🔵 `TARGET_ANTAGONISM` (`#06b6d4`, kreskowana `[5, 5]` z poprzeczką końcową): przeciwstawne działanie receptorowe i odtrutki (np. Morfina vs Nalokson, Benzodiazepina vs Flumazenil, Agonista D2 vs Haloperydol).
  - **Hybrydowy silnik relacji (`initTypedEdgesIndex`, `getCompoundTypedEdges`)**:
    - Słownik 55 zweryfikowanych klinicznych par proleków, ciężkich przeciwwskazań i interakcji CYP.
    - Automatyczna dynamiczna inferencja synergii i antagonizmu celów w oparciu o mechanizm działania ChEMBL (`c.m`) oraz klasyfikację `classifyTargetAction(c, targetName)`.
  - **Trzywarstwowy model renderowania w Canvas 2D**:
    - **Warstwa Stacka**: ciągłe podświetlanie relacji pomiędzy substancjami w aktywnym koszyku Stacka ($\ge 2$ leki).
    - **Warstwa Kontekstowa**: renderowanie skierowanych krawędzi dla aktualnie wybranej substancji i węzła w stanie hover.
    - **Warstwa Globalna**: opcjonalny tryb globalnej sieci relacji z dynamicznym limitem gęstości (350 krawędzi) gwarantującym stałe 60 FPS.
  - **Pływający popover filtrów w toolbarze (`#edgesPopover`)**:
    - Przycisk `🕸️ Krawędzie` w toolbarze grafu otwierający menu z checkboxami i licznikami dla 5 typów relacji.
    - Przełącznik `Pokaż sieć w całym grafie (z limitem)` oraz przyciski `Wszystkie` / `Wyczyść`.
    - Skrót klawiszowy `E` / `e` do natychmiastowego otwierania/zamykania popovera; obsługa klawisza `Esc`.
  - **Integracja z kartą substancji (`compoundHtml`)**:
    - Dedykowana sekcja `🕸️ Relacje semantyczne` w zakładce Przegląd z interaktywnymi pigułkami relacji.
    - Kliknięcie pigułki (`data-edge-goto`) natychmiast płynnie przenosi kamerę i zaznacza cząsteczkę partnera relacji na płótnie Canvas.
- **Testy automatyczne (`tests/test_pipeline.py`)**:
  - Dodano `test_semantic_typed_edges_and_graph_filtering` weryfikujący obecność elementów DOM, klas CSS, silnika indeksowania relacji oraz istnienie kluczowych par klinicznych w grafie (49 testów, 100% green).

## [3.15.0] — 2026-11-02 — Wyszukiwarka Analogów Chemicznych & Podobieństwo Strukturalne (Chemical Similarity & Analogs Explorer)
### Dodano
- **Wyszukiwarka Analogów Chemicznych i Bioizosterów (Chemical Similarity & Analogs Explorer)** w przeglądarce grafu (`apps/graph-viewer/app.js`, `apps/graph-viewer/index.html` oraz pliki w katalogu głównym):
  - **Hybrydowy model podobieństwa chemiczno-funkcjonalnego (0–100%) (`findCompoundAnalogs`)**:
    - Szukanie analogów w czasie rzeczywistym pośród wszystkich 2525 substancji grafu (<15 ms).
    - **Podobieństwo szkieletowe / InChIKey ($S_{\text{chem}}$)**: dopasowanie pierwszego 14-znakowego bloku szkieletowego InChIKey (identyczny szkielet dla izomerów i bezpośrednich pochodnych = 100%) oraz analiza zgodności wzorów sumarycznych (`mf`).
    - **Odległość fizykochemiczna Ro5 ($S_{\text{phys}}$)**: znormalizowana odległość euklidesowa w przestrzeni masy cząsteczkowej ($\Delta\text{MW}$), lipofilowości ($\Delta\text{ALogP}$) i polarnej powierzchni cząsteczki ($\Delta\text{PSA}$) z wykładniczym spadkiem podobieństwa.
    - **Zgodność profilu celów ($S_{\text{target}}$)**: indeks Jaccarda wspólnych celów molekularnych ChEMBL.
  - **Trzy tryby wyszukiwania (Focus Modes)**:
    - ⚖️ **Zrównoważony (Hybrydowy)**: $40\% \text{ chemia} + 35\% \text{ Ro5} + 25\% \text{ cele}$.
    - 🔬 **Tylko struktura**: $60\% \text{ szkielet/chemia} + 40\% \text{ Ro5}$.
    - 🧬 **Bioizostery / Cele**: $65\% \text{ wspólne cele} + 35\% \text{ właściwości fizykochemiczne}$.
    - Opcjonalny filtr: `Tylko ta sama klasa` (zawężenie do tej samej grupy terapeutycznej).
  - **Dedykowany modal Eksploratora Analogów (`#analogsModal`)**:
    - Prezentacja cząsteczki referencyjnej po lewej stronie (wzór 2D, wzór sumaryczny, MW, ALogP, PSA, InChIKey, główne cele).
    - Dynamiczna siatka kart Top 10 analogów ze strukturami 2D, pigułkami zgodności (`similarity-high` $\ge 80\%$, `similarity-mid` $\ge 60\%$, `similarity-low`), odchyłkami $\Delta\text{MW}$ i $\Delta\text{ALogP}$ oraz wspólnymi receptorami.
    - Przyciski szybkiej akcji na każdym analogu:
      - `⚖️ Porównaj`: bezpośrednie uruchomienie Drug Comparatora z cząsteczką bazową.
      - `+ Stack` / `✓ W stacku`: dodanie do aktywnego zestawu polipragmazji.
      - `🎯 Graf`: wycentrowanie i podświetlenie na grafie Canvas.
  - **Integracja z kartą substancji i skróty klawiszowe**:
    - Nowy przycisk akcji `🧬 Analogi` na karcie wybranego leku.
    - Mini-chipy Top 3 analogów bezpośrednio w zakładce `Przegląd` pod podglądem struktury chemicznej z linkiem `Więcej (10) ↗`.
    - Skrót klawiszowy `A` / `a`: natychmiastowe otwarcie lub zamknięcie modalu analogów aktywnej cząsteczki; obsługa klawisza `Esc`.
- **Testy automatyczne (`tests/test_pipeline.py`)**:
  - Dodano `test_chemical_similarity_and_analogs_explorer` sprawdzający obecność elementów DOM, klas CSS, silnika wyszukiwania oraz weryfikujący poprawność identyfikacji pary Citalopram / Escitalopram jako identycznych szkieletowo analogów (>90% zgodności) (48 testów, 100% green).

## [3.14.0] — 2026-11-02 — Kliniczny Silnik Ryzyka Polipragmazji & Heatmapa ADR (Clinical Risk Engine & Multi-Axis Toxic Burden Heatmap)
### Dodano
- **Kliniczny Silnik Ryzyka Polipragmazji & Heatmapa Działań Niepożądanych (Clinical Risk Engine & ADR Heatmap)** w panelu stacka (`apps/graph-viewer/app.js`, `apps/graph-viewer/index.html` oraz pliki w katalogu głównym):
  - **Trzecia dedykowana zakładka w drawerze stacka (`⚠️ Toksyczność & ADR`)**:
    - Przełącznik zakładek (`tab-bar`) rozszerzony o pełnoprawny widok scoringu toksykologicznego i matrycy ADR.
  - **Kliniczny wskaźnik kumulacji obciążenia (Stack Risk Score 0–100)**:
    - Duży wskaźnik zegarowy (`.risk-score-badge`) z dynamiczną kolorystyką (zielony 0–24, żółty 25–49, pomarańczowy 50–74, karminowy 75–100) i etykietą stanu klinicznego.
    - Hybrydowy model obliczeniowy: $70\% \times \text{MaxAxis} + 30\% \times \text{MeanAxis} + \text{MultiAxisPenalty}$, zapewniający natychmiastowe wejście w strefę krytyczną przy pojedynczym zagrażającym życiu powikłaniu oraz progresywną karę za obciążenie wielonarządowe.
  - **Rozbicie na 4 Osie Narządowe (Organ Axes 0–100)**:
    - 🫀 **Oś Sercowo-naczyniowa**: ryzyko wydłużenia repolaryzacji komorowej (hERG / QTc), tachyarytmie komorowe (TdP) oraz nadciśnienie tętnicze.
    - 🧪 **Oś Wątrobowa / CYP**: zatorowość i konkurencja o metabolizm enzymatyczny cytochromu P450 (wąskie gardła eliminacji) oraz ryzyko skazy krwotocznej.
    - 🧠 **Oś OUN / Mózgowa**: depresja pnia mózgu i ośrodka oddechowego (GABA-A + opioidy), zespół serotoninowy oraz obniżenie progu drgawkowego.
    - ⚡ **Oś Autonomiczna**: Anticholinergic Cognitive Burden (ACB), blokada muskarynowa, retencja, tachykardia i suchość błon śluzowych.
  - **Detekcja zjawisk farmakodynamicznych**:
    - Automatyczna klasyfikacja relacji międzylekowych:
      - ➕ **Sumacja homodynamiczna**: zbieżny wektor działania na ten sam cel lub szlak metaboliczny CYP.
      - ⚡ **Synergia nadaddytywna / potencjalizacja**: katastrofalne nagromadzenie neurotransmiterów (np. MAOI + SSRI/SNRI) lub synergia depresji oddechowej (Opioid + GABA-A/BZD).
      - ⚖️ **Antagonizm farmakologiczny i fizjologiczny**: jednoczesna aktywacja i blokada tego samego receptora (np. agonista vs antagonista D2) lub przeciwstawne wektory autonomiczne (stymulant vs lek uspokajający).
  - **Wielowymiarowa Heatmapa Działań Niepożądanych (8 Powikłań ADR $\times$ Leki + Wypadkowa)**:
    - Tabela ciepła ze wskaźnikami procentowymi (0–100%) dla 8 kanonicznych powikłań:
      1. Arytmia & Wydłużenie QTc
      2. Depresja OUN & Oddechowa
      3. Zespół Serotoninowy
      4. Wąskie Gardło CYP (Wątroba)
      5. Obciążenie Antycholinergiczne
      6. Przełom Adrenergiczny / Skoki RR
      7. Ryzyko Drgawkowe (Prokonwulsyjne)
      8. Zaburzenia Krzepnięcia & Krwawienia
    - Interaktywne rozwijanie wierszy (akordeon) z dokładnym opisem mechanizmu patofizjologicznego i wskazaniem dominujących leków obciążających.
  - **Wzbogacenie eksportu Markdown / Obsidian oraz wydruku Dossier A4**:
    - Raport Obsidian (`obsidian://new`) zawiera nową sekcję `## 5. Indeks Toksyczności & Obciążenie Narządowe` z tabelą osi, wykazem synergii/antagonizmów oraz matrycą ADR.
    - Raport polipragmazji w arkuszu laboratoryjnym A4 (`generateStackDossierHtml`) zawiera dedykowaną sekcję scoringu z obciążeniem narządowym.
- **Testy automatyczne (`tests/test_pipeline.py`)**:
  - Dodano `test_clinical_risk_engine_and_adr_heatmap` weryfikujący klasy CSS, funkcje obliczeniowe, progi detekcji zespołu serotoninowego dla par leków oraz poprawne generowanie matrycy ADR (47 testów, 100% green).

## [3.13.0] — 2026-11-02 — Generator Monografii Klinicznej & Dossier Polipragmazji (Clinical Dossier / Print View / PDF)
### Dodano
- **Generator Monografii Klinicznej & Dossier Polipragmazji (Clinical Dossier / Print View / PDF Export)** w przeglądarce grafu (`apps/graph-viewer/app.js`, `apps/graph-viewer/index.html` oraz pliki w katalogu głównym):
  - **Dedykowany interaktywny modal podglądu wydruku (`#dossierModal`)**:
    - Stylizowany arkusz formatu A4 (`.dossier-sheet`, max-width 794px, min-height 1123px) o profesjonalnym układzie laboratoryjnego whitepapera.
    - Wbudowany pasek narzędzi (`.dossier-toolbar`):
      - `🖨️ Drukuj / PDF (Ctrl+P)`: bezpośrednie wywołanie okna drukowania zoptymalizowane regułami `@media print` (ukrycie interfejsu aplikacji, marginesy 15mm, format A4, naturalne łamanie stron `break-inside: avoid`).
      - `📋 Kopiuj Markdown`: natychmiastowe skopiowanie ustrukturyzowanego raportu w formacie GitHub-Flavored Markdown do schowka.
      - `📝 Obsidian`: bezpośrednie utworzenie notatki klinicznej w aplikacji Obsidian przez protokół `obsidian://new`.
      - Przycisk zamknięcia `✕` oraz obsługa klawisza `Esc`.
  - **Monografia Pojedynczej Substancji (`generateCompoundDossierHtml`)**:
    - Generowana po kliknięciu nowego przycisku `📄 Monografia` na karcie leku lub wciśnięciu skrótu `P`.
    - **Nagłówek laboratoryjny**: nazwa międzynarodowa, kategoria, klaster, ID substancji, data wygenerowania i status walidacji.
    - **Struktura 2D & Właściwości fizykochemiczne**: wyrenderowany wzór 2D, wzór sumaryczny, masa cząsteczkowa (MW), lipofilowość (ALogP), powierzchnia polarna (PSA), status Reguły Pięciu Lipińskiego (Ro5), InChIKey, ChEMBL ID i PubChem CID.
    - **Status regulacyjny i walidacja etykiet**: faza rozwoju w badaniach klinicznych, zgodność z etykietami FDA oraz EMA/ChPL wraz z uwagami rozbieżności.
    - **Mechanizm działania (MoA)**: pełny opis farmakologiczny i mechanizm molekularny.
    - **Farmakokinetyka (ADME)**: okres półtrwania ($T_{1/2}$), wiązanie z białkami osocza, biodostępność doustna, izoenzymy CYP, drogi metabolizmu i eliminacji.
    - **Profil receptorowy & Cele molekularne**: zestawienie powiązanych celów biologicznych z kategoryzacją funkcjonalną (agonista, antagonista, inhibitor, ligand).
    - **Ostrzeżenia toksykologiczne**: Black Box Warnings FDA, status wycofania z rynku (withdrawn) oraz kluczowe ryzyka kliniczne.
  - **Raport Polipragmazji Zestawu Lekowego (`generateStackDossierHtml`)**:
    - Generowany z poziomu drawera zestawu za pomocą przycisku `📄 Dossier` (`#stackDossierBtn`).
    - Zestawienie tabelaryczne wszystkich leków w stacku (kategoria, $T_{1/2}$, izoenzymy CYP, wskazanie).
    - Zintegrowany wykaz alertów kolizyjnych (ryzyko zespołu serotoninowego, depresji oddechowej, obciążenia kardiologicznego, wąskich gardeł CYP).
    - Pełna macierz interakcji parowych $N \times N$ z poziomami ryzyka i punktami krytycznymi.
    - Dedykowany blok zaleceń monitorowania klinicznego (EKG, TDM, ocena parametrów życiowych, nadzór neurologiczny).
  - **Obsługa skrótów klawiaturowych**:
    - Klawisz `P` / `p`: otwiera arkusz monografii dla aktywnego leku lub dossier polipragmazji dla aktywnego stacka; ponowne wciśnięcie zamyka podgląd.
    - Klawisz `Esc`: płynnie zamyka modal dossier przed przejściem do zamykania innych paneli.
- **Testy automatyczne (`tests/test_pipeline.py`)**:
  - Dodano `test_clinical_dossier_generator` weryfikujący obecność elementów DOM, reguł arkuszy stylów `@media print`, funkcji generatorów HTML i Markdown w `app.js` oraz poprawność generowania pól monografii na danych grafu (46 testów, 100% green).

## [3.12.0] — 2026-11-02 — Eksplorator Celów Molekularnych i Szlaków (Target Deep-Dive Explorer)
### Dodano
- **Eksplorator Celów Molekularnych i Szlaków (Target & Pathway Deep-Dive Explorer)** w przeglądarce grafu (`apps/graph-viewer/app.js`, `apps/graph-viewer/index.html` oraz pliki w katalogu głównym):
  - **Dedykowany modal Deep-Dive (`#targetModal`)**:
    - Otwierany po kliknięciu dowolnego celu molekularnego w aplikacji (na karcie leku, w porównywarce, macierzy interakcji, wyszukiwarce lub przez URL hash `#target=CHEMBL...`).
    - **Nagłówek celu (`#targetModalHead`)**:
      - Oficjalna nazwa celu, ChEMBL Target ID z bezpośrednim linkiem zewnętrznym, typ białka (`SINGLE PROTEIN`, `PROTEIN FAMILY`) oraz organizm.
      - Licznik wszystkich ligandów w bazie oraz liczba aktualnie widocznych na grafie.
      - Rozkład faz klinicznych (liczba leków zatwierdzonych [faza 4], w badaniach klinicznych [fazy 1–3] oraz przedklinicznych/badawczych).
      - **Zagregowany profil ryzyka PD (huby bezpieczeństwa)**: procentowy rozkład korelacji ligandów z krytycznymi hubami toksykologicznymi (np. zespół serotoninowy, obciążenie sercowo-naczyniowe, depresja oddechowa).
      - Przycisk `🎯 Pokaż na grafie`: natychmiastowe wycentrowanie grafu na powiązanych ligandach.
    - **Kategoryzacja funkcjonalna ligandów (Action Profiling)**:
      - Automatyczna klasyfikacja mechanistyczna na podstawie kuratorowanych opisów ChEMBL MoA:
        - 🟢 **Aktywatory / Agoniści** (agonists, partial agonists, PAM)
        - 🔴 **Blokery / Antagoniści** (antagonists, inverse agonists, NAM)
        - 🟡 **Inhibitory / Blokery wychwytu** (inhibitors, reuptake inhibitors)
        - ⚪ **Pozostałe ligandy** (wiązanie bez jednoznacznego profilu funkcjonalnego)
    - **Kafelki leków z miniaturami 2D**:
      - Wektorowe miniatury struktur SVG/PNG z funkcją powiększenia w LightBoxie.
      - Bezpośredni przycisk `+ Stack` / `✓ W stacku` pozwalający na komponowanie zestawów lekowych prosto z poziomu celu molekularnego.
      - Pigułki fazy ChEMBL, statusu PK i masy cząsteczkowej.
  - **Ujednolicone punkty wejścia i obsługa klawiatury**:
    - Kliknięcie w dowolny tag celu `◎ Cel` w porównywarce leków lub wyszukiwarce natychmiast otwiera modal Deep-Dive.
    - Nowy przycisk `🔬 Eksplorator celu (Deep-Dive)` w panelu bocznym wybranego celu.
    - Płynne zamykanie klawiszem `Esc`, przyciskiem `✕` lub kliknięciem w tło.
- **Testy automatyczne (`tests/test_pipeline.py`)**:
  - Dodano `test_target_explorer_deep_dive` weryfikujący obecność elementów DOM, poprawność klasyfikacji funkcjonalnej (agonista/antagonista/inhibitor) oraz powiązania ligandów z kluczowymi celami farmakologicznymi (45 testów, 100% green).

## [3.11.0] — 2026-11-02 — Macierz Interakcji i Ryzyk Stacka (Pairwise Interaction Matrix & Heatmap)
### Dodano
- **Macierz Interakcji i Ryzyk Stacka (Pairwise Interaction Matrix & Heatmap)** w drawerze `#stackDrawer` (`apps/graph-viewer/app.js`, `apps/graph-viewer/index.html` oraz pliki w katalogu głównym):
  - **Przełącznik zakładek analizy stacka (`tab-bar`)**:
    - Możliwość natychmiastowego przełączania między widokiem `📈 Symulator PK` (krzywe stężeń, okna kolizji) a nowym widokiem `🔲 Macierz interakcji (N×N)`.
  - **Interaktywna siatka korelacji parowych $N \times N$ (`.matrix-table`)**:
    - Wizualna macierz krzyżowa dla wszystkich substancji w stacku ze sticky headers i awatarami klastrów.
    - Cztery intuicyjne poziomy severity oznaczone kolorystycznie i piktogramami:
      - 🔴 **Ciężkie / Krytyczne (`.cell-danger`)**: nakładanie krytycznych hubów toksykologicznych (zespół serotoninowy, depresja oddechowa, obciążenie sercowo-naczyniowe) lub $\ge 2$ wspólne enzymy CYP.
      - 🟡 **Umiarkowane (`.cell-warn`)**: 1 wspólny szlak metaboliczny CYP (ryzyko spowolnienia eliminacji) lub drugorzędne huby ryzyka.
      - 🟢 **Synergia / Wspólny cel (`.cell-synergy`)**: wspólne cele molekularne ChEMBL bez nakładających się krytycznych hubów toksykologicznych.
      - ⚪ **Brak bezpośredniej kolizji (`.cell-clear`)**: brak zidentyfikowanych konfliktów w bazie.
      - ● **Przekątna własna (`.cell-diag`)**: reprezentacja cząsteczki z samą sobą.
  - **Dynamiczna karta szczegółów pary (`#matrixDetailCard`)**:
    - Kliknięcie w dowolną komórkę $(A, B)$ podświetla ją i wyświetla poniżej siatki pełny raport: wykaz wspólnych enzymów CYP z ostrzeżeniem o spowolnionej eliminacji, wspólne huby PD oraz receptory ChEMBL.
  - **Wzbogacenie eksportu do Obsidian (`obsidian://new`)**:
    - Eksportowany raport Markdown zawiera teraz sekcję `## 4. Macierz interakcji parowych (Pairwise Matrix N×N)` z tabelą emoji statusu oraz wypunktowaniem ryzyk dla każdej pary leków.
- **Testy automatyczne (`tests/test_pipeline.py`)**:
  - Dodano `test_stack_interaction_matrix` sprawdzający obecność stylów CSS macierzy, funkcji ewaluacji parowej w JS oraz weryfikujący poprawność wykrywania interakcji parowych na danych grafu (44 testy, 100% green).

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
