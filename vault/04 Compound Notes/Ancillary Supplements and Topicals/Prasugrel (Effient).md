---
type: compound
schema-version: 2
compound-id: prasugrel-compound
name: Prasugrel (Effient)
aliases:
- Prasugrel
- Effient
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201772
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: null
  unit: h
  notes: ~7 h (range 2 h to 15 h)
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 'Active metabolite: ~98%'
bioavailability:
  value: 79.0
  value-max: null
  notes: ≥79%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (~68% inactive metabolites); feces (27% inactive metabolites)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Prasugrel
  url: https://en.wikipedia.org/w/index.php?title=Prasugrel&oldid=1358311753
  revision: 1358311753
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201772
  pref-name: PRASUGREL
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AC22
  targets: []
  properties:
    full-mwt: 373.45
    mw-freebase: 373.45
    alogp: 3.89
    psa: 46.61
    hba: 5
    hbd: 0
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.75
    full-molformula: C20H20FNO3S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: f51e64e0-f556-65d0-a876-fb709aaeefea
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f51e64e0-f556-65d0-a876-fb709aaeefea
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Efient
  ema-number: EMEA/H/C/000984
  url: https://www.ema.europa.eu/en/documents/product-information/efient-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Prasugrel (Effient)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `prasugrel-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Prasugrel, Effient
- **ChEMBL:** [CHEMBL1201772](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201772/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Potent irreversible P2Y12 inhibitor used around coronary intervention, with greater bleeding risk in specific populations.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009
- **Flags:** black-box warning, prodrug
- **ATC B01AC22:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Platelet aggregation inhibitors excl. heparin

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 373.45 | 3.89 | 46.61 | 0/5 | 0 | C20H20FNO3S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Prasugrel*](https://en.wikipedia.org/w/index.php?title=Prasugrel&oldid=1358311753) (revision 1358311753, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7 h | ~7 h (range 2 h to 15 h) |
| Protein binding | 98 % | Active metabolite: ~98% |
| Bioavailability | 79 % | ≥79% |
| Excretion | mainly urinary | Urine (~68% inactive metabolites); feces (27% inactive metabolites) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f51e64e0…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f51e64e0-f556-65d0-a876-fb709aaeefea), label version 20260408. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 7, 15)
> - protein-binding: no-label-value (label values: -)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Efient*](https://www.ema.europa.eu/en/documents/product-information/efient-epar-product-information_en.pdf) (EMEA/H/C/000984). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 2, 7.4, 15)
> - protein-binding: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Abciximab]], [[Aloxiprin]], [[Aspirin]], [[Beraprost]], [[Cangrelor]], [[Cilostazol]], [[Clopidogrel (Plavix)]], [[Dipyridamole]], [[Epoprostenol]], [[Eptifibatide]], [[Selexipag]], [[Ticagrelor (Brilinta)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
