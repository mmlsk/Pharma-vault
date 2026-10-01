---
type: compound
schema-version: 2
compound-id: labetalol-compound
name: Labetalol (Trandate)
aliases:
- Labetalol
- Trandate
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
chembl-id: CHEMBL429
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: 8.0
  unit: h
  notes: 'Oral: 6–8 hours; IV: 5.52 hours'
protein-binding:
  value: 50.0
  value-max: null
  unit: percent
  notes: 50%
bioavailability:
  value: 25.0
  value-max: null
  notes: 25% (11–86%)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.6
  notes: Urine (55–60% as conjugates or unchanged within 24 hours)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Mainly conjugation via glucuronidation
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
  title: Labetalol
  url: https://en.wikipedia.org/w/index.php?title=Labetalol&oldid=1364189106
  revision: 1364189106
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL429
  pref-name: LABETALOL
  molecule-type: Small molecule
  first-approval: 1984
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C07AG01
  targets: []
  properties:
    full-mwt: 328.41
    mw-freebase: 328.41
    alogp: 2.14
    psa: 95.58
    hba: 4
    hbd: 4
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.6
    full-molformula: C19H24N2O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 28c91727-e5a8-48b3-a4df-d7bec8feda40
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=28c91727-e5a8-48b3-a4df-d7bec8feda40
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Labetalol (Trandate)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `labetalol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Labetalol, Trandate
- **ChEMBL:** [CHEMBL429](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL429/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Combined alpha-1 and non-selective beta blocker; the standard oral and intravenous antihypertensive in pregnancy.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1984
- **ATC C07AG01:** CARDIOVASCULAR SYSTEM › BETA BLOCKING AGENTS › Alpha and beta blocking agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 328.41 | 2.14 | 95.58 | 4/4 | 0 | C19H24N2O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Labetalol*](https://en.wikipedia.org/w/index.php?title=Labetalol&oldid=1364189106) (revision 1364189106, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–8 h | Oral: 6–8 hours; IV: 5.52 hours |
| Protein binding | 50 % | 50% |
| Bioavailability | 25 % | 25% (11–86%) |
| Metabolism | hepatic | Mainly conjugation via glucuronidation |
| Metabolites | - | • Glucuronide conjugates |
| Excretion | mainly urinary · fe 0.6 | Urine (55–60% as conjugates or unchanged within 24 hours) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 28c91727…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=28c91727-e5a8-48b3-a4df-d7bec8feda40), label version 20241007. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 6, 8)
> - protein-binding: consistent (label values: 50)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Carvedilol]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
