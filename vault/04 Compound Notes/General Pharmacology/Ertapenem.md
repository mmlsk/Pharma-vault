---
type: compound
schema-version: 2
compound-id: ertapenem-compound
name: Ertapenem
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Bacterial penicillin-binding protein inhibitor; Cell shape peptidoglycan synthetase penicillin-binding protein 2 inhibitor; Peptidoglycan D,D-transpeptidase FtsI inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1359
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: null
  unit: h
  notes: 4 hours
protein-binding:
  value: 85.0
  value-max: 95.0
  unit: percent
  notes: Inversely proportional to concentration; 85 to 95%
bioavailability:
  value: 90.0
  value-max: null
  notes: 90% (intramuscular)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (80%) and fecal (10%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hydrolysis of beta-lactam ring, CYP not involved
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
- cyp-interactions
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Ertapenem
  url: https://en.wikipedia.org/w/index.php?title=Ertapenem&oldid=1329079783
  revision: 1329079783
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1359
  pref-name: ERTAPENEM
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01DH03
  targets:
  - id: CHEMBL2354204
    name: Bacterial penicillin-binding protein
    action: INHIBITOR
  - id: CHEMBL5500282
    name: Peptidoglycan D,D-transpeptidase FtsI
    action: INHIBITOR
  - id: CHEMBL3309036
    name: Cell shape peptidoglycan synthetase penicillin-binding protein 2
    action: INHIBITOR
  properties:
    full-mwt: 475.52
    mw-freebase: 475.52
    alogp: 0.94
    psa: 156.27
    hba: 7
    hbd: 5
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.36
    full-molformula: C22H25N3O7S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 2398d418-6efc-b4d2-3265-936001df9b8b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2398d418-6efc-b4d2-3265-936001df9b8b
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Invanz
  ema-number: EMEA/H/C/000389
  url: https://www.ema.europa.eu/en/documents/product-information/invanz-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Ertapenem

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ertapenem-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1359](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1359/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Once-daily carbapenem lacking antipseudomonal and enterococcal activity, which is exactly why it is used for community ESBL infection without driving Pseudomonas resistance.

## Mechanism

Bacterial penicillin-binding protein inhibitor; Cell shape peptidoglycan synthetase penicillin-binding protein 2 inhibitor; Peptidoglycan D,D-transpeptidase FtsI inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **ATC J01DH03:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER BETA-LACTAM ANTIBACTERIALS › Carbapenems

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 475.52 | 0.94 | 156.27 | 5/7 | 0 | C22H25N3O7S |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial penicillin-binding protein (CHEMBL2354204)|Bacterial penicillin-binding protein]] - inhibitor · PROTEIN FAMILY
- [[Peptidoglycan D,D-transpeptidase FtsI (CHEMBL5500282)|Peptidoglycan D,D-transpeptidase FtsI]] - inhibitor · SINGLE PROTEIN
- [[Cell shape peptidoglycan synthetase penicillin-binding protein 2 (CHEMBL3309036)|Cell shape peptidoglycan synthetase penicillin-binding protein 2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ertapenem*](https://en.wikipedia.org/w/index.php?title=Ertapenem&oldid=1329079783) (revision 1329079783, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | 4 hours |
| Protein binding | 85–95 % | Inversely proportional to concentration; 85 to 95% |
| Bioavailability | 90 % | 90% (intramuscular) |
| Metabolism | hepatic | Hydrolysis of beta-lactam ring, CYP not involved |
| Excretion | mainly urinary | Kidney (80%) and fecal (10%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 2398d418…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2398d418-6efc-b4d2-3265-936001df9b8b), label version 20251224. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.5, 4, 4.8)
> - protein-binding: consistent (label values: 85, 95)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Invanz*](https://www.ema.europa.eu/en/documents/product-information/invanz-epar-product-information_en.pdf) (EMEA/H/C/000389). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 2.5, 4)
> - protein-binding: consistent (SmPC values: 92, 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amoxicillin]] (Bacterial penicillin-binding protein), [[Ampicillin]] (Bacterial penicillin-binding protein), [[Aztreonam]] (Bacterial penicillin-binding protein), [[Cefiderocol]] (Bacterial penicillin-binding protein), [[Ceftaroline]] (Bacterial penicillin-binding protein), [[Ceftazidime]] (Bacterial penicillin-binding protein), [[Meropenem]] (Bacterial penicillin-binding protein)
- **Same ATC subgroup:** [[Meropenem]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
