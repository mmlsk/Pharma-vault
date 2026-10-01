---
type: compound
schema-version: 2
compound-id: lidocaine-compound
name: Lidocaine
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: Sodium channel alpha subunit blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL79
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: null
  unit: h
  notes: 1.5 h to 2 h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 35.0
  value-max: null
  notes: 35% (by mouth); 3% (topical)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, 90% CYP3A4-mediated
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- sedation-respiratory-depression
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Lidocaine
  url: https://en.wikipedia.org/w/index.php?title=Lidocaine&oldid=1375500391
  revision: 1375500391
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL79
  pref-name: LIDOCAINE
  molecule-type: Small molecule
  first-approval: 1948
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C01BB01
  - C05AD01
  - D04AB01
  - N01BB02
  - N01BB52
  - R02AD02
  - S01HA07
  - S02DA01
  targets:
  - id: CHEMBL2331043
    name: Sodium channel alpha subunit
    action: BLOCKER
  properties:
    full-mwt: 234.34
    mw-freebase: 234.34
    alogp: 2.58
    psa: 32.34
    hba: 2
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.85
    full-molformula: C14H22N2O
pk-verification:
  source: fda-label
  status: consistent
  set-id: dfef4554-aeb4-4bdf-9557-648d3e84af3c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dfef4554-aeb4-4bdf-9557-648d3e84af3c
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Lidocaine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lidocaine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL79](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL79/) · max phase 4 · id via Wikipedia infobox

## Source summary

The most widely used local anaesthetic and also a class Ib antiarrhythmic, the same channel block serving two entirely different purposes.

## Mechanism

Sodium channel alpha subunit blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1948
- **Flags:** black-box warning
- **ATC C01BB01:** CARDIOVASCULAR SYSTEM › ANTIARRHYTHMICS, CLASS I AND III › Antiarrhythmics, class Ib
- **ATC C05AD01:** CARDIOVASCULAR SYSTEM › AGENTS FOR TREATMENT OF HEMORRHOIDS AND ANAL FISSURES FOR TOPICAL USE › Local anesthetics
- **ATC D04AB01:** DERMATOLOGICALS › ANTIPRURITICS, INCL. ANTIHISTAMINES, ANESTHETICS, ETC. › Anesthetics for topical use
- **ATC N01BB02:** NERVOUS SYSTEM › ANESTHETICS, LOCAL › Amides
- **ATC N01BB52:** NERVOUS SYSTEM › ANESTHETICS, LOCAL › Amides
- **ATC R02AD02:** RESPIRATORY SYSTEM › THROAT PREPARATIONS › Anesthetics, local
- **ATC S01HA07:** SENSORY ORGANS › LOCAL ANESTHETICS › Local anesthetics
- **ATC S02DA01:** SENSORY ORGANS › OTHER OTOLOGICALS › Analgesics and anesthetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 234.34 | 2.58 | 32.34 | 1/2 | 0 | C14H22N2O |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium channel alpha subunit (CHEMBL2331043)|Sodium channel alpha subunit]] - blocker · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lidocaine*](https://en.wikipedia.org/w/index.php?title=Lidocaine&oldid=1375500391) (revision 1375500391, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5 h | 1.5 h to 2 h |
| Bioavailability | 35 % | 35% (by mouth); 3% (topical) |
| Metabolism | hepatic | Liver, 90% CYP3A4-mediated |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set dfef4554…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dfef4554-aeb4-4bdf-9557-648d3e84af3c), label version 20260831. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.5, 2)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Carbamazepine]] (Sodium channel alpha subunit), [[Cenobamate]] (Sodium channel alpha subunit), [[Eslicarbazepine Acetate]] (Sodium channel alpha subunit), [[Evenamide]] (Sodium channel alpha subunit), [[Lacosamide]] (Sodium channel alpha subunit), [[Lamotrigine]] (Sodium channel alpha subunit), [[Oxcarbazepine]] (Sodium channel alpha subunit), [[Phenytoin]] (Sodium channel alpha subunit), [[Prilocaine]] (Sodium channel alpha subunit), [[Primidone]] (Sodium channel alpha subunit), [[Ralfinamide]] (Sodium channel alpha subunit), [[Riluzole (Rilutek)]] (Sodium channel alpha subunit)
- **Same ATC subgroup:** [[Articaine]], [[Benzocaine]], [[Bupivacaine]], [[Chloroprocaine]], [[Mepivacaine]], [[Mexiletine]], [[Prilocaine]], [[Procaine]], [[Ropivacaine]], [[Tetracaine]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
