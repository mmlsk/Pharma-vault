---
type: compound
schema-version: 2
compound-id: sumatriptan-compound
name: Sumatriptan (Imitrex)
aliases:
- Sumatriptan
- Imitrex
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Serotonin 1b (5-HT1b) receptor agonist; Serotonin 1d (5-HT1d) receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL128
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: null
  unit: h
  notes: 2.5 hours
protein-binding:
  value: 14.0
  value-max: 21.0
  unit: percent
  notes: 14–21%
bioavailability:
  value: 15.0
  value-max: null
  notes: 15% (oral); 96% (subcutaneous)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 60% urine; 40% feces
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Monoamine oxidase (MAO)
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Sumatriptan
  url: https://en.wikipedia.org/w/index.php?title=Sumatriptan&oldid=1368799875
  revision: 1368799875
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL128
  pref-name: SUMATRIPTAN
  molecule-type: Small molecule
  first-approval: 1992
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N02CC01
  targets:
  - id: CHEMBL1898
    name: 5-hydroxytryptamine receptor 1B
    action: AGONIST
  - id: CHEMBL1983
    name: 5-hydroxytryptamine receptor 1D
    action: AGONIST
  properties:
    full-mwt: 295.41
    mw-freebase: 295.41
    alogp: 1.32
    psa: 65.2
    hba: 3
    hbd: 2
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.84
    full-molformula: C14H21N3O2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: ff08b9ee-03bf-4f5b-930e-233a3b8866af
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ff08b9ee-03bf-4f5b-930e-233a3b8866af
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Sumatriptan (Imitrex)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sumatriptan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Sumatriptan, Imitrex
- **ChEMBL:** [CHEMBL128](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL128/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The first triptan: a selective 5-HT1B/1D agonist for acute migraine, available oral, nasal, and subcutaneous.

## Mechanism

Serotonin 1b (5-HT1b) receptor agonist; Serotonin 1d (5-HT1d) receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1992
- **ATC N02CC01:** NERVOUS SYSTEM › ANTIMIGRAINE PREPARATIONS › Selective serotonin (5HT1) agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 295.41 | 1.32 | 65.2 | 2/3 | 0 | C14H21N3O2S |

**Targets (ChEMBL curated mechanisms):**

- [[5-hydroxytryptamine receptor 1B (CHEMBL1898)|5-hydroxytryptamine receptor 1B]] - agonist · SINGLE PROTEIN
- [[5-hydroxytryptamine receptor 1D (CHEMBL1983)|5-hydroxytryptamine receptor 1D]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sumatriptan*](https://en.wikipedia.org/w/index.php?title=Sumatriptan&oldid=1368799875) (revision 1368799875, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5 h | 2.5 hours |
| Protein binding | 14–21 % | 14–21% |
| Bioavailability | 15 % | 15% (oral); 96% (subcutaneous) |
| Metabolism | - | Monoamine oxidase (MAO) |
| Excretion | mainly urinary | 60% urine; 40% feces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ff08b9ee…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ff08b9ee-03bf-4f5b-930e-233a3b8866af), label version 20260903. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.5)
> - protein-binding: consistent (label values: 14, 21)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Zolmitriptan]] (5-hydroxytryptamine receptor 1B; 5-hydroxytryptamine receptor 1D)
- **Same ATC subgroup:** [[Almotriptan]], [[Eletriptan]], [[Frovatriptan]], [[Lasmiditan]], [[Naratriptan]], [[Rizatriptan]], [[Zolmitriptan]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
