---
type: compound
schema-version: 2
compound-id: cangrelor-compound
name: Cangrelor
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Purinergic receptor P2Y12 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1097279
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 6.0
  unit: min
  notes: ~3–6 minutes
protein-binding:
  value: 97.0
  value-max: 98.0
  unit: percent
  notes: ~97–98%.
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (IV)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (58%), Bile duct (35%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Rapid deactivation in the circulation (independent of CYP system)
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
  title: Cangrelor
  url: https://en.wikipedia.org/w/index.php?title=Cangrelor&oldid=1329245666
  revision: 1329245666
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL334966
  pref-name: CANGRELOR TETRASODIUM
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - B01AC25
  targets:
  - id: CHEMBL2001
    name: P2Y purinoceptor 12
    action: INHIBITOR
  properties:
    full-mwt: 776.37
    mw-freebase: 776.37
    alogp: 2.85
    psa: 255.91
    hba: 15
    hbd: 7
    rtb: 15
    num-ro5-violations: 3
    qed-weighted: 0.05
    full-molformula: C17H25Cl2F3N5O12P3S2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 88b434fa-8891-4fd5-9d86-7ea64667c08f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=88b434fa-8891-4fd5-9d86-7ea64667c08f
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Cangrelor

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cangrelor-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1097279](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1097279/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits platelet P2Y12 ADP signalling to reduce aggregation, at the cost of bleeding risk; intravenous, reversible.

## Mechanism

Purinergic receptor P2Y12 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015
- **ATC B01AC25:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Platelet aggregation inhibitors excl. heparin

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 776.37 | 2.85 | 255.91 | 7/15 | 3 | C17H25Cl2F3N5O12P3S2 |

**Targets (ChEMBL curated mechanisms):**

- [[P2Y purinoceptor 12 (CHEMBL2001)|P2Y purinoceptor 12]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cangrelor*](https://en.wikipedia.org/w/index.php?title=Cangrelor&oldid=1329245666) (revision 1329245666, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–6 min | ~3–6 minutes |
| Protein binding | 97–98 % | ~97–98%. |
| Bioavailability | 100 % | 100% (IV) |
| Metabolism | hepatic | Rapid deactivation in the circulation (independent of CYP system) |
| Excretion | mainly urinary | Kidney (58%), Bile duct (35%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 88b434fa…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=88b434fa-8891-4fd5-9d86-7ea64667c08f), label version 20251021. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.05, 0.1)
> - protein-binding: consistent (label values: 97, 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Elinogrel]] (P2Y purinoceptor 12), [[Ticagrelor (Brilinta)]] (P2Y purinoceptor 12)
- **Same ATC subgroup:** [[Abciximab]], [[Aloxiprin]], [[Aspirin]], [[Beraprost]], [[Cilostazol]], [[Clopidogrel (Plavix)]], [[Dipyridamole]], [[Epoprostenol]], [[Eptifibatide]], [[Prasugrel (Effient)]], [[Selexipag]], [[Ticagrelor (Brilinta)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
