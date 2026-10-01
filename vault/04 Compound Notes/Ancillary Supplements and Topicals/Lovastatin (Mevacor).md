---
type: compound
schema-version: 2
compound-id: lovastatin-compound
name: Lovastatin (Mevacor)
aliases:
- Lovastatin
- Mevacor
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: HMG-CoA reductase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL503
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 5.0
  unit: h
  notes: 2–5 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: '>98%'
bioavailability:
  value: 5.0
  value-max: null
  notes: <5%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (83%), urine (10%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A and CYP2C8 substrate)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Lovastatin
  url: https://en.wikipedia.org/w/index.php?title=Lovastatin&oldid=1373648032
  revision: 1373648032
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL503
  pref-name: LOVASTATIN
  molecule-type: Small molecule
  first-approval: 1987
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C10AA02
  targets:
  - id: CHEMBL402
    name: 3-hydroxy-3-methylglutaryl-coenzyme A reductase
    action: INHIBITOR
  properties:
    full-mwt: 404.55
    mw-freebase: 404.55
    alogp: 4.2
    psa: 72.83
    hba: 5
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.67
    full-molformula: C24H36O5
pk-verification:
  source: fda-label
  status: consistent
  set-id: 9438d8a0-ca5b-4676-aab9-d0241ccff6c9
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9438d8a0-ca5b-4676-aab9-d0241ccff6c9
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Lovastatin (Mevacor)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lovastatin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Lovastatin, Mevacor
- **ChEMBL:** [CHEMBL503](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL503/) · max phase 4 · id via Wikipedia infobox

## Source summary

The first statin approved anywhere, a fungal natural product later found in red yeast rice.

## Mechanism

HMG-CoA reductase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1987
- **Flags:** prodrug
- **ATC C10AA02:** CARDIOVASCULAR SYSTEM › LIPID MODIFYING AGENTS, PLAIN › HMG CoA reductase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 404.55 | 4.2 | 72.83 | 1/5 | 0 | C24H36O5 |

**Targets (ChEMBL curated mechanisms):**

- [[3-hydroxy-3-methylglutaryl-coenzyme A reductase (CHEMBL402)|3-hydroxy-3-methylglutaryl-coenzyme A reductase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lovastatin*](https://en.wikipedia.org/w/index.php?title=Lovastatin&oldid=1373648032) (revision 1373648032, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–5 h | 2–5 hours |
| Protein binding | 98 % | >98% |
| Bioavailability | 5 % | <5% |
| Metabolism | hepatic | Liver (CYP3A and CYP2C8 substrate) |
| CYP (metabolised by) | CYP2C8 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (83%), urine (10%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 9438d8a0…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9438d8a0-ca5b-4676-aab9-d0241ccff6c9), label version 20260723. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Simvastatin (Zocor)]] (3-hydroxy-3-methylglutaryl-coenzyme A reductase)
- **Same ATC subgroup:** [[Atorvastatin (Lipitor)]], [[Cerivastatin]], [[Fluvastatin]], [[Pitavastatin (Livalo)]], [[Pravastatin (Pravachol)]], [[Rosuvastatin (Crestor)]], [[Simvastatin (Zocor)]]
- **Shared CYP substrate pool:** CYP2C8 (+15 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
