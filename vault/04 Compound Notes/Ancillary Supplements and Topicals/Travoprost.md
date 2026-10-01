---
type: compound
schema-version: 2
compound-id: travoprost-compound
name: Travoprost
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Prostanoid FP receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1200799
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: null
  unit: h
  notes: 1.5 hours (in aqueous fluid); 45 minutes (terminal)
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mainly via kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Activation by ester hydrolysis, deactivation by beta oxidation, OH-oxidation, double bond reduction
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
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Travoprost
  url: https://en.wikipedia.org/w/index.php?title=Travoprost&oldid=1370544334
  revision: 1370544334
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1200799
  pref-name: TRAVOPROST
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - S01EE04
  targets:
  - id: CHEMBL1987
    name: Prostaglandin F2-alpha receptor
    action: AGONIST
  properties:
    full-mwt: 500.55
    mw-freebase: 500.55
    alogp: 4.43
    psa: 96.22
    hba: 6
    hbd: 3
    rtb: 12
    num-ro5-violations: 1
    qed-weighted: 0.22
    full-molformula: C26H35F3O6
pk-verification:
  source: fda-label
  status: consistent
  set-id: efe2861a-f7ca-ae06-e053-2995a90a50e9
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=efe2861a-f7ca-ae06-e053-2995a90a50e9
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Travoprost

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `travoprost-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1200799](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200799/) · max phase 4 · id via Wikipedia infobox

## Source summary

Prostaglandin F2alpha analogue for glaucoma; the class also lengthens and darkens eyelashes.

## Mechanism

Prostanoid FP receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **Flags:** prodrug
- **ATC S01EE04:** SENSORY ORGANS › ANTIGLAUCOMA PREPARATIONS AND MIOTICS › Prostaglandin analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 500.55 | 4.43 | 96.22 | 3/6 | 1 | C26H35F3O6 |

**Targets (ChEMBL curated mechanisms):**

- [[Prostaglandin F2-alpha receptor (CHEMBL1987)|Prostaglandin F2-alpha receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Travoprost*](https://en.wikipedia.org/w/index.php?title=Travoprost&oldid=1370544334) (revision 1370544334, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5 h | 1.5 hours (in aqueous fluid); 45 minutes (terminal) |
| Metabolism | hepatic | Activation by ester hydrolysis, deactivation by beta oxidation, OH-oxidation, double bond reduction |
| Excretion | - | Mainly via kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set efe2861a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=efe2861a-f7ca-ae06-e053-2995a90a50e9), label version 20251121. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.283, 0.75, 1.433)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Bimatoprost (Latisse)]] (Prostaglandin F2-alpha receptor), [[Bimatoprost (topical, Latisse)]] (Prostaglandin F2-alpha receptor), [[Latanoprost]] (Prostaglandin F2-alpha receptor), [[Latanoprostene Bunod]] (Prostaglandin F2-alpha receptor), [[Latanoprostene Bunod (latanoprostene-compound)|Latanoprostene Bunod]] (Prostaglandin F2-alpha receptor), [[Tafluprost]] (Prostaglandin F2-alpha receptor)
- **Same ATC subgroup:** [[Bimatoprost (Latisse)]], [[Bimatoprost (topical, Latisse)]], [[Latanoprost]], [[Latanoprostene Bunod]], [[Latanoprostene Bunod (latanoprostene-compound)|Latanoprostene Bunod]], [[Tafluprost]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
