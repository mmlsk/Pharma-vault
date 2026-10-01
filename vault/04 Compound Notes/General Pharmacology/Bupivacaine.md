---
type: compound
schema-version: 2
compound-id: bupivacaine-compound
name: Bupivacaine
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: Sodium channel protein type IV alpha subunit blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1098
chembl-max-phase: 4
half-life:
  value: 3.1
  value-max: null
  unit: h
  notes: 3.1 hours (adults); 8.1 hours (neonates)
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: null
  value-max: null
  notes: N/A
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney, 4–10%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
dosage-ranges: {}
cyp-interactions:
  substrates: []
  inhibitors: []
  inducers: []
  transporters: []
  notes: null
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-discrepant
- pk-ema-consistent
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Bupivacaine
  url: https://en.wikipedia.org/w/index.php?title=Bupivacaine&oldid=1366642920
  revision: 1366642920
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1098
  pref-name: BUPIVACAINE
  molecule-type: Small molecule
  first-approval: 1972
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N01BB01
  - N01BB51
  targets:
  - id: CHEMBL2072
    name: Sodium channel protein type 4 subunit alpha
    action: BLOCKER
  properties:
    full-mwt: 288.44
    mw-freebase: 288.44
    alogp: 3.9
    psa: 32.34
    hba: 2
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.89
    full-molformula: C18H28N2O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: discrepant
  set-id: bb5a9e59-0f51-11df-8a39-0800200c9a66
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=bb5a9e59-0f51-11df-8a39-0800200c9a66
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Exparel liposomal
  ema-number: EMEA/H/C/004586
  url: https://www.ema.europa.eu/en/documents/product-information/exparel-liposomal-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/exparel-liposomal-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Bupivacaine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bupivacaine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1098](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1098/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Long-acting amide local anaesthetic and the classic cardiotoxin of the class, which is why the levo-enantiomer was developed.

## Mechanism

Sodium channel protein type IV alpha subunit blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1972
- **Flags:** black-box warning
- **ATC N01BB01:** NERVOUS SYSTEM › ANESTHETICS, LOCAL › Amides
- **ATC N01BB51:** NERVOUS SYSTEM › ANESTHETICS, LOCAL › Amides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 288.44 | 3.9 | 32.34 | 1/2 | 0 | C18H28N2O |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium channel protein type 4 subunit alpha (CHEMBL2072)|Sodium channel protein type 4 subunit alpha]] - blocker · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bupivacaine*](https://en.wikipedia.org/w/index.php?title=Bupivacaine&oldid=1366642920) (revision 1366642920, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3.1 h | 3.1 hours (adults); 8.1 hours (neonates) |
| Protein binding | 95 % | 95% |
| Bioavailability | - | N/A |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney, 4–10% |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set bb5a9e59…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=bb5a9e59-0f51-11df-8a39-0800200c9a66), label version 20251212. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 0, 40, 72, 96, 120, 168)
> - protein-binding: consistent (label values: 95)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Exparel liposomal*](https://www.ema.europa.eu/en/documents/product-information/exparel-liposomal-epar-product-information_en.pdf) (EMEA/H/C/004586) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/exparel-liposomal-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (SmPC values: -)
> - protein-binding: consistent (SmPC values: 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ranolazine (Ranexa)]] (Sodium channel protein type 4 subunit alpha)
- **Same ATC subgroup:** [[Articaine]], [[Lidocaine]], [[Mepivacaine]], [[Prilocaine]], [[Ropivacaine]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
