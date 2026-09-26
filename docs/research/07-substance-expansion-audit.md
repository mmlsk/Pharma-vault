# Substance expansion audit

> Źródło: wątek projektu Pharma-vault (tura 17), wyeksportowany 2026-09-26. Treść zachowana w oryginalnym brzmieniu; numerowane odwołania typu [1] odnoszą się do źródeł przywołanych w oryginalnym wątku (materiały w `data/raw/`).

A meaningful expansion should focus on **emerging CNS drug pipelines, grey-market nootropics, and new psychoactive substances**, rather than adding more conventional medicines indiscriminately. The discovery backlog below contains more than 100 candidate substances, but each requires canonical-name and alias checking before being marked as genuinely absent.

> **Safety scope:** This is a cataloguing and risk-analysis exercise—not a recommendation to obtain, combine, or consume any substance. Designer drugs and vendor-labelled research compounds may have uncertain identity, potency, purity, and toxicology.

# Substance Expansion Audit

## Baseline assessment

The supplied material already covers far more than the storefront PDFs suggest. Its graph includes broad expansions across nootropics, psychiatric drugs, metabolic agents, peptides, hormones, cardiovascular drugs, investigational compounds, and general pharmacology.[1]

The storefront documents contain compounds such as bromantane, 9-Me-BC, Dihexa, Cerebrolysin, fasoracetam, coluracetam, 4F-phenibut, phenibut, methylene blue, pramiracetam, sunifiram, TAK-653, rapastinel, modafinil, pitolisant, noopept and PRL-8-53.  Consequently, storefront absence cannot by itself establish graph absence.[2][3][4]

## Intake priorities

| Priority | Substance area | Why it matters |
|---|---|---|
| 1 | Emerging CNS therapeutics | Adds genuinely novel mechanisms and development-stage compounds |
| 2 | Designer/NPS families | Creates major interaction, dependence, contamination and overdose hubs |
| 3 | Grey-market nootropics | Captures compounds circulating ahead of meaningful human evidence |
| 4 | Psychoplastogens | Covers a rapidly evolving overlap between psychedelics and medicinal chemistry |
| 5 | Neuroactive peptides | Distinguishes approved peptides, experimental peptides and vendor-only products |
| 6 | Specialized supplements | Captures CNS-relevant substances without treating supplements as equivalent to medicines |
| 7 | Conventional medications | Add only where they contribute a missing mechanism or safety relationship |

## Emerging CNS agents

These candidates should be checked first because they represent mechanisms not adequately captured by a conventional “stimulant versus sedative” classification.

### Orexin and wakefulness

- Danavorexton, also known as TAK-925
- Oveporexton, also known as TAK-861
- TAK-994
- ORX750
- ALKS 2680
- JZP441
- Mazindol extended-release
- Samelisant
- Quilavonemad

Model these separately from modafinil-class wakefulness agents. Orexin-receptor agonism, orexin antagonism and dopamine-transporter modulation are pharmacologically different approaches even when the user-facing objective is “wakefulness.”

### AMPA and glutamate

- Unifiram, DM-232
- IDRA-21
- BIIB104, formerly PF-04958242
- Tulrampator, S-47445
- CX-516
- CX-717
- CX-1739
- CX-1942
- Org 26576
- Zelquistinel, AV-101 or AGN-241751 depending on the specific development name
- Apimostinel, NRX-1074
- Esmethadone, REL-1017
- Iclepertin, BI 425809
- Luvadaxistat, TAK-831
- Troriluzole
- Sarcosine
- Bitopertin
- Rapastinel metabolites or successor analogues, if represented separately

Sunifiram and unifiram have extensive preclinical discussion but have not established clinical efficacy in humans; their web circulation substantially exceeded their formal development evidence.  They should therefore be tagged `preclinical` rather than grouped with clinically validated cognitive medicines.[5][6][7]

TAK-653—also called osavampator—is an AMPA-receptor positive allosteric modulator with animal and early human investigation, not simply another racetam.[8][9][10]

### Muscarinic and TAAR1

- Xanomeline
- Xanomeline–trospium
- Emraclidine
- NBI-1117568
- CVL-871
- Ulotaront, SEP-363856
- Ralmitaront, RO6889450
- Evenamide
- Roluperidone
- Brilaroxazine
- Trace-amine research agonists such as RO5256390 and RO5263397

These warrant distinct `muscarinic`, `TAAR1`, `sodium-channel`, and `serotonin-dopamine modulation` pathway nodes. A generic “antipsychotic” node would conceal their mechanistic differences.

### Sigma-1 candidates

- Pridopidine
- Blarcamesine, ANAVEX2-73
- ANAVEX3-71, AF710B
- Cutamesine, SA4503
- Edonerpic maleate
- PRE-084
- SKF-10047
- Igmesine

Research-tool compounds such as PRE-084 should not share status labels with substances that have entered human clinical development.

### Neurosteroids and GABA

- Brexanolone
- Zuranolone, SAGE-217
- Ganaxolone
- Darigabat
- ENX-102
- ETX-155
- SAGE-324
- Sepranolone, isoallopregnanolone
- Pregnanolone
- Tetrahydrodeoxycorticosterone

Brexanolone is a pharmaceutical formulation of allopregnanolone, so it should be connected to—not blindly merged with—the endogenous neurosteroid node. The relationship should be `formulation-of` or `pharmaceutical-form-of`.

### Ion-channel modulators

- XEN1101
- BHV-7000
- Retigabine, ezogabine
- Kv7.2/Kv7.3 research activators
- Zonisamide
- Riluzole
- Lamotrigine active metabolites
- Cenobamate
- Vixotrigine
- Raxatrigine

Retigabine and ezogabine are the same active drug name under different naming conventions. They should resolve to one canonical node.

## Psychoplastogens

This cluster should distinguish classic psychedelics, entactogens, iboga alkaloids and non-hallucinogenic plasticity-oriented analogues.

### Development candidates

- Tabernanthalog, TBG
- AAZ-A-154
- DLX-001
- DLX-159
- BPL-003
- CYB003
- RE104
- R-MDMA
- 18-MC
- Noribogaine
- Ariadne, also known as 4C-D
- Lisuride
- 2-bromo-LSD
- Tryptamine-derived psychoplastogens under coded development names

### Reference psychedelics

- Psilocybin
- Psilocin
- LSD
- DMT
- 5-MeO-DMT
- Mescaline
- Ibogaine
- Noribogaine
- Salvinorin A
- DOI
- DOM
- 2C-B
- 2C-I
- 2C-E
- 25I-NBOMe
- 25B-NBOMe
- 25C-NBOMe

These should not all be grouped under “serotonergic.” Salvinorin A, for example, belongs in a distinct kappa-opioid-receptor branch, while classic psychedelics primarily require a `5-HT2A` relationship.

## Grey-market nootropics

The following deserve explicit screening even where evidence is sparse:

- NSI-189
- Unifiram
- IDRA-21
- J147
- CMS121
- ISRIB
- Latrepirdine, dimebon
- P7C3
- P7C3-A20
- Neboglamine
- Nebracetam
- Talsaclidine
- Besipirdine
- Linopirdine
- Xanomeline
- Tropisetron
- PNU-282987
- EVP-6124, encenicline
- ABT-089
- ABT-594
- Sabeluzole
- Omberacetam analogues
- Phenylpiracetam hydrazide
- N-acetyl-noopept
- Carphedon derivatives
- Nooglutil
- Ladasten analogues
- Bemitil, bemetil
- Ethomersol
- Ademol
- Chlodantane

Bromantane belongs to the Russian actoprotector/adaptogen tradition and should be linked to dopaminergic, performance and anti-doping domains rather than treated as an ordinary stimulant.  Modafinil analogues such as flmodafinil and fladrafinil should also connect to the anti-doping hub; both have appeared under the WADA stimulant category.[11][12]

## Neuroactive peptides

### Candidate additions

- Semax
- N-acetyl Semax
- N-acetyl Semax amidate
- Selank
- N-acetyl Selank
- N-acetyl Selank amidate
- Davunetide, NAP
- P021
- P110
- Humanin
- MOTS-c
- SHLP-2
- Elamipretide
- Cortexin
- Pinealon
- Epitalon
- Vesugen
- Vilon
- Thymalin
- Delta sleep-inducing peptide
- Cerebrolysin constituent peptides, where chemically characterized
- Colivelin
- Adamax
- Pineal peptide mixtures

Mixtures such as Cortexin and Cerebrolysin should not be represented as if they were single defined molecules. Their nodes need `mixture`, `biological-extract`, `composition-variability`, and `parenteral-risk` metadata.

Vendor-created peptide names require a separate verification state:

```yaml
identity-confidence: unverified
composition-defined: false
human-evidence: none
vendor-only-name: true
```

## Designer-drug families

A safety-oriented graph should record these substances even when they have no credible biohacking value. Their importance comes from exposure detection, cross-reactivity, overdose risk and interaction analysis.

### Designer benzodiazepines

- Bromazolam
- Clonazolam
- Flualprazolam
- Flubromazolam
- Deschloroetizolam
- Diclazepam
- Pyrazolam
- Norflurazepam
- Flubrotizolam
- Metizolam
- Nitrazolam
- Meclonazepam
- Phenazepam
- Rilmazafone
- Bentazepam

Required safety links: `respiratory-depression`, `amnesia`, `dependence`, `withdrawal-seizure`, `opioid-interaction`, `alcohol-interaction`, and `variable-potency`.

### Dissociatives

- Methoxetamine, MXE
- 2-FDCK
- Deschloroketamine, DCK
- O-PCE
- 3-MeO-PCP
- 3-HO-PCP
- 3-MeO-PCE
- 3-HO-PCE
- DMXE
- FXE
- HXE
- MXPr
- MXiPr
- Diphenidine
- Methoxphenidine
- Ephenidine

Required links include `NMDA-antagonism`, `psychosis`, `mania`, `ataxia`, `unconsciousness`, `hypertension`, `urinary-toxicity`, and `sedative-interaction`.

### Synthetic stimulants

- 2-FA
- 3-FA
- 4-FA
- 2-FMA
- 3-FMA
- 4-FMA
- 3-FPM
- 4F-MPH
- Isopropylphenidate
- Ethylphenidate
- 4-MMC
- 3-MMC
- 2-MMC
- Methylone
- Eutylone
- N-ethylpentylone
- Alpha-PVP
- Alpha-PHP
- Alpha-PHiP
- MDPHP
- NEP
- Hexen

Required safety links include `sympathomimetic-load`, `hyperthermia`, `vasoconstriction`, `arrhythmia`, `seizure`, `agitation`, `psychosis`, `serotonergic-load`, and `compulsive-redosing`.

### Synthetic cannabinoids

- JWH-018
- JWH-073
- AM-2201
- AB-FUBINACA
- ADB-FUBINACA
- 5F-ADB
- 5F-MDMB-PICA
- MDMB-4en-PINACA
- ADB-BUTINACA
- ADB-HEXINACA
- Cumyl-PEGACLONE
- HHC
- HHC-O
- THCP
- THC-O acetate
- Delta-8-THC
- Delta-10-THC

These require a separate graph branch from botanical cannabis because many synthetic cannabinoid receptor agonists have substantially different potency, efficacy and adverse-event patterns.

### Novel opioids

- O-desmethyltramadol, O-DSMT
- Brorphine
- Isotonitazene
- Metonitazene
- Protonitazene
- Etonitazepyne
- Metodesnitazene
- Flunitazene
- Butonitazene
- Mitragynine
- 7-hydroxymitragynine
- Mitragynine pseudoindoxyl
- Tianeptine

These should feed directly into the highest-severity safety hub: `respiratory-depression-and-fatal-overdose`. Nitazene analogues should be handled as forensic/high-risk entries, never as biohacking candidates.

## Supplements and nutraceuticals

These are worthwhile candidates for a separate intake queue:

- Paraxanthine
- Theacrine
- Methylliberine
- Saffron extract
- Crocin
- Crocetin
- Palmitoylethanolamide
- Ergothioneine
- Urolithin A
- Pyrroloquinoline quinone, PQQ
- Magnesium acetyl taurate
- Spermidine
- Alpha-ketoglutarate
- Calcium alpha-ketoglutarate
- L-alpha-glycerylphosphorylcholine under the alias choline alfoscerate
- Lion’s mane standardized for erinacines
- Hericenone-enriched extracts
- Polygala tenuifolia extracts
- Tenuifolin
- Gastrodin
- Salidroside
- Baicalein
- Baicalin
- Apigenin
- Luteolin
- Fisetin
- Honokiol
- Magnolol
- Beta-caryophyllene

Extracts should not be conflated with isolated molecules. For example, `saffron extract`, `crocin`, and `crocetin` need separate nodes connected by `contains`, `metabolite-of`, or `derived-from` relationships.

## Alias collisions

Several apparent omissions are likely aliases rather than new substances.

| Names encountered | Recommended representation |
|---|---|
| Eutropoflavin / 4-DMA-7,8-DHF | One canonical compound node |
| Alpha-GPC / choline alfoscerate / L-alpha-GPC | One node with aliases |
| Citicoline / CDP-choline | One node with aliases |
| Emoxypine succinate / Mexidol | Active molecule plus regional product-name alias |
| 4F-phenibut / fluorophenibut | One node; record salt or formulation separately |
| Sunifiram / DM-235 | One node |
| Unifiram / DM-232 | One node |
| TAK-653 / osavampator | One node |
| Rapastinel / GLYX-13 | One node |
| Fasedienol / PH94B | One node |
| Retigabine / ezogabine | One node |
| Zuranolone / SAGE-217 | One node |
| Xanomeline–trospium / KarXT / Cobenfy | Combination-product node linked to both components |
| Brexanolone / allopregnanolone | Related but not identical nodes |
| 9-Me-BC / 9-methyl-beta-carboline | One node |

Alias normalization is essential because web markets frequently circulate experimental nootropics under development codes. Sunifiram and unifiram are a documented example of preclinical molecules later marketed online despite uncertain long-term toxicology.[6]

## Evidence framework

Every new substance should receive one evidence tier:

| Tier | Definition |
|---|---|
| `A-approved` | Approved medicine with established pharmaceutical identity |
| `B-human-controlled` | Controlled human evidence, but not necessarily approved for the proposed use |
| `C-early-human` | Phase 1, small experimental or limited observational exposure |
| `D-preclinical` | Animal, cellular or mechanistic research only |
| `E-forensic-NPS` | Known principally through seizures, toxicology reports or poison cases |
| `F-vendor-only` | Vendor listing without independently verified pharmacology or composition |
| `X-identity-disputed` | Name, structure or supplied identity cannot be reliably established |

Vendor presence must not upgrade evidence. A European analysis of illicit “smart drugs” found prescription and unapproved pharmacologically active substances in products represented as nootropics, illustrating why analytical identity and clinical evidence must be tracked separately.[13]

## Safety hubs

The expanded graph should add or strengthen these central hubs:

- **Respiratory depression:** opioids, designer benzodiazepines, gabapentinoids, phenibut-like agents, alcohol and sedating dissociatives.
- **Serotonin toxicity:** MAO inhibitors, serotonin releasers, SSRIs/SNRIs, serotonergic psychedelics, selected opioids and interacting anti-infectives.
- **Sympathomimetic load:** stimulants, cathinones, wakefulness agents, yohimbine-like substances, thyroid-active agents and beta-agonists.
- **Psychosis and mania:** potent stimulants, dopamine-enhancing compounds, dissociatives, cannabinoids and psychedelics.
- **Withdrawal seizures:** benzodiazepines, barbiturates, phenibut, baclofen-like agents and heavy alcohol exposure.
- **QT and arrhythmia:** stimulants, selected antidepressants, antipsychotics, antiarrhythmics and metabolic interactions that raise exposure.
- **Cholinergic excess:** acetylcholinesterase inhibitors, direct cholinergic agonists and overlapping choline-enhancing substances.
- **Glutamatergic instability:** AMPA potentiators, NMDA antagonists and compounds lowering seizure threshold.
- **Hepatic and CYP interactions:** prodrugs, enzyme inhibitors, enzyme inducers and substances with uncertain hepatic impurities.
- **Endocrine feedback disruption:** androgens, SARMs, thyroid agents, GH-axis substances, glucocorticoids and reproductive-axis compounds.
- **Contamination and identity mismatch:** vendor powders, mislabeled supplements, peptide mixtures and novel analogues without analytical confirmation.
- **Anti-doping exposure:** stimulants, actoprotectors, modafinil analogues, anabolic agents, peptide hormones and metabolic modulators.[12][11]

## Recommended template

```yaml
---
type: substance
canonical-name:
aliases: []
development-codes: []
brand-names: []

substance-kind:
  # small-molecule | peptide | biologic | botanical |
  # extract | mixture | metabolite | combination-product

cluster:
subclass:
parent-family:
related-compounds: []

targets: []
mechanisms: []
pathways: []
primary-cns-effects: []

development-status:
approval-status:
approved-indications: []
jurisdictions: []
controlled-status:
anti-doping-status:

evidence-tier:
human-exposure: false
highest-trial-phase:
evidence-for-enhancement:
evidence-for-treatment:
identity-confidence:
composition-defined:

risk-domains: []
dependence-potential:
withdrawal-risk:
overdose-risk:
respiratory-depression:
serotonergic-risk:
sympathomimetic-risk:
psychosis-risk:
seizure-risk:
qt-risk:
hepatotoxicity-risk:
endocrine-risk:

major-interactions: []
contraindication-domains: []
metabolic-enzymes: []
transporters: []
active-metabolites: []

source-types: []
primary-sources: []
last-verified:
review-status: candidate
tags: [substance]
---
```

## Graph relationships

Use typed edges rather than placing every association into tags:

- `ALIAS_OF`
- `SALT_OF`
- `FORMULATION_OF`
- `PRODRUG_OF`
- `ACTIVE_METABOLITE_OF`
- `ANALOG_OF`
- `COMBINATION_CONTAINS`
- `EXTRACT_CONTAINS`
- `AGONIST_AT`
- `ANTAGONIST_AT`
- `POSITIVE_MODULATOR_AT`
- `INHIBITS_ENZYME`
- `INDUCES_ENZYME`
- `SHARES_RISK_WITH`
- `POTENTIATES_TOXICITY_OF`
- `CONTRAINDICATED_WITH`
- `INVESTIGATED_FOR`
- `MARKETED_AS`
- `DETECTED_AS_ADULTERANT`
- `PROHIBITED_BY`
- `SUPERSEDED_BY`

The most important architectural change is to separate **identity**, **mechanism**, **evidence**, **regulatory status**, and **risk**. A substance can simultaneously have an interesting mechanism, weak human evidence, uncertain product identity and severe interaction risk; a single `nootropic` label cannot represent those distinctions.
