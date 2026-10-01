---
type: compound
schema-version: 2
compound-id: pimozide-compound
name: Pimozide
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Dopamine receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1423
chembl-max-phase: 4
half-life:
  value: 55.0
  value-max: null
  unit: h
  notes: 55 hours (adults), 66 hours (children)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 40.0
  value-max: 50.0
  notes: 40–50%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4, CYP1A2 and CYP2D6
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Pimozide
  url: https://en.wikipedia.org/w/index.php?title=Pimozide&oldid=1373564887
  revision: 1373564887
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1423
  pref-name: PIMOZIDE
  molecule-type: Small molecule
  first-approval: 1984
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N05AG02
  targets:
  - id: CHEMBL224
    name: 5-hydroxytryptamine receptor 2A
    action: ANTAGONIST
  - id: CHEMBL2096905
    name: Dopamine receptor
    action: ANTAGONIST
  properties:
    full-mwt: 461.56
    mw-freebase: 461.56
    alogp: 5.86
    psa: 41.03
    hba: 3
    hbd: 1
    rtb: 7
    num-ro5-violations: 1
    qed-weighted: 0.37
    full-molformula: C28H29F2N3O
pk-verification:
  source: fda-label
  status: consistent
  set-id: 70b079e2-a1f7-4a93-8685-d60a4d7c1280
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=70b079e2-a1f7-4a93-8685-d60a4d7c1280
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Pimozide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pimozide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1423](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1423/) · max phase 4 · id via source catalogue

## Source summary

Dopamine receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1423).

## Mechanism

Dopamine receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1984
- **ATC N05AG02:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Diphenylbutylpiperidine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 461.56 | 5.86 | 41.03 | 1/3 | 1 | C28H29F2N3O |

**Targets (ChEMBL curated mechanisms):**

- [[5-hydroxytryptamine receptor 2A (CHEMBL224)|5-hydroxytryptamine receptor 2A]] - antagonist · SINGLE PROTEIN
- [[Dopamine receptor (CHEMBL2096905)|Dopamine receptor]] - antagonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pimozide*](https://en.wikipedia.org/w/index.php?title=Pimozide&oldid=1373564887) (revision 1373564887, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 55 h | 55 hours (adults), 66 hours (children) |
| Bioavailability | 40–50 % | 40–50% |
| Metabolism | hepatic | CYP3A4, CYP1A2 and CYP2D6 |
| CYP (metabolised by) | CYP1A2, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 70b079e2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=70b079e2-a1f7-4a93-8685-d60a4d7c1280), label version 20260812. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 55)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amoxapine]] (Dopamine receptor), [[Aripiprazole]] (5-hydroxytryptamine receptor 2A), [[Brexpiprazole]] (5-hydroxytryptamine receptor 2A), [[Chlorpromazine]] (5-hydroxytryptamine receptor 2A), [[Clozapine]] (5-hydroxytryptamine receptor 2A), [[Droperidol]] (5-hydroxytryptamine receptor 2A), [[Haloperidol]] (5-hydroxytryptamine receptor 2A), [[Haloperidol Decanoate]] (5-hydroxytryptamine receptor 2A), [[Iloperidone]] (5-hydroxytryptamine receptor 2A), [[Loxapine]] (5-hydroxytryptamine receptor 2A), [[Lumateperone]] (5-hydroxytryptamine receptor 2A), [[Mirtazapine]] (5-hydroxytryptamine receptor 2A)
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
