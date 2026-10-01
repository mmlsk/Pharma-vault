---
type: compound
schema-version: 2
compound-id: nac-compound
name: NAC (N-Acetylcysteine)
aliases:
- NAC
- N-Acetylcysteine
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Glutathione precursor; Mycolytic
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL600
chembl-max-phase: 4
half-life:
  value: 5.6
  value-max: null
  unit: h
  notes: 5.6 hours
protein-binding:
  value: 50.0
  value-max: 83.0
  unit: percent
  notes: 50 to 83%
bioavailability:
  value: 6.0
  value-max: 10.0
  notes: 6–10% (Oral); nearly 100% (intravenous)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney (30%), faecal (3%)
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
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Acetylcysteine
  url: https://en.wikipedia.org/w/index.php?title=Acetylcysteine&oldid=1375254688
  revision: 1375254688
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL600
  pref-name: ACETYLCYSTEINE
  molecule-type: Small molecule
  first-approval: 1963
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R05CB01
  - S01XA08
  - V03AB23
  targets: []
  properties:
    full-mwt: 163.2
    mw-freebase: 163.2
    alogp: -0.49
    psa: 66.4
    hba: 3
    hbd: 3
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.49
    full-molformula: C5H9NO3S
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 5558a5f5-e821-473b-7d8a-5d33d09f0586
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5558a5f5-e821-473b-7d8a-5d33d09f0586
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# NAC (N-Acetylcysteine)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nac-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** NAC, N-Acetylcysteine
- **ChEMBL:** [CHEMBL600](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL600/) · max phase 4 · id via Wikipedia infobox

## Source summary

Glutathione precursor and antioxidant, the clinical antidote for acetaminophen overdose; studied for broader hepatoprotection against drug-induced liver injury.

## Mechanism

Glutathione precursor; Mycolytic _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1963
- **ATC R05CB01:** RESPIRATORY SYSTEM › EXPECTORANTS, EXCL. COMBINATIONS WITH COUGH SUPPRESSANTS › Mucolytics
- **ATC S01XA08:** SENSORY ORGANS › OTHER OPHTHALMOLOGICALS › Other ophthalmologicals
- **ATC V03AB23:** VARIOUS › ALL OTHER THERAPEUTIC PRODUCTS › Antidotes

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 163.2 | -0.49 | 66.4 | 3/3 | 0 | C5H9NO3S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Acetylcysteine*](https://en.wikipedia.org/w/index.php?title=Acetylcysteine&oldid=1375254688) (revision 1375254688, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.6 h | 5.6 hours |
| Protein binding | 50–83 % | 50 to 83% |
| Bioavailability | 6–10 % | 6–10% (Oral); nearly 100% (intravenous) |
| Metabolism | hepatic | Liver |
| Excretion | - | Kidney (30%), faecal (3%) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 5558a5f5…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5558a5f5-e821-473b-7d8a-5d33d09f0586), label version 20260522. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alteplase]], [[Andexanet Alfa]], [[Avacincaptad Pegol]], [[Cyclosporine]], [[Flumazenil]], [[Fomepizole]], [[Glutathione]], [[Idarucizumab]], [[Methylene Blue]], [[Naloxone]], [[Pegcetacoplan]], [[Phentolamine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
