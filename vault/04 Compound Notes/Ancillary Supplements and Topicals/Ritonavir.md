---
type: compound
schema-version: 2
compound-id: ritonavir-compound
name: Ritonavir
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cytochrome P450 3A inhibitor; Human immunodeficiency virus type 1 protease inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL163
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 4.0
  unit: h
  notes: 3–4 hours
protein-binding:
  value: 98.0
  value-max: 99.0
  unit: percent
  notes: 98–99%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mostly fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Ritonavir
  url: https://en.wikipedia.org/w/index.php?title=Ritonavir&oldid=1376695682
  revision: 1376695682
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL163
  pref-name: RITONAVIR
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AE03
  targets:
  - id: CHEMBL243
    name: Human immunodeficiency virus type 1 protease
    action: INHIBITOR
  - id: CHEMBL2364675
    name: Cytochrome P450 3A
    action: INHIBITOR
  properties:
    full-mwt: 720.96
    mw-freebase: 720.96
    alogp: 5.91
    psa: 145.78
    hba: 9
    hbd: 4
    rtb: 17
    num-ro5-violations: 2
    qed-weighted: 0.11
    full-molformula: C37H48N6O5S2
pk-verification:
  source: fda-label
  status: consistent
  set-id: a32cb2e3-d4e5-4bbf-9d88-20b2b249e779
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a32cb2e3-d4e5-4bbf-9d88-20b2b249e779
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Ritonavir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ritonavir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL163](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL163/) · max phase 4 · id via Wikipedia infobox

## Source summary

HIV protease inhibitor used almost entirely as a pharmacokinetic booster, exploiting its potent CYP3A4 inhibition.

## Mechanism

Cytochrome P450 3A inhibitor; Human immunodeficiency virus type 1 protease inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **Flags:** black-box warning
- **ATC J05AE03:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Protease inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 720.96 | 5.91 | 145.78 | 4/9 | 2 | C37H48N6O5S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Human immunodeficiency virus type 1 protease (CHEMBL243)|Human immunodeficiency virus type 1 protease]] - inhibitor · SINGLE PROTEIN
- [[Cytochrome P450 3A (CHEMBL2364675)|Cytochrome P450 3A]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ritonavir*](https://en.wikipedia.org/w/index.php?title=Ritonavir&oldid=1376695682) (revision 1376695682, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–4 h | 3–4 hours |
| Protein binding | 98–99 % | 98–99% |
| Metabolism | hepatic | Liver, CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Mostly fecal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a32cb2e3…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a32cb2e3-d4e5-4bbf-9d88-20b2b249e779), label version 20260806. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 5, 12)
> - protein-binding: consistent (label values: 98, 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Darunavir]] (Human immunodeficiency virus type 1 protease), [[Lopinavir]] (Human immunodeficiency virus type 1 protease), [[Saquinavir]] (Human immunodeficiency virus type 1 protease)
- **Same ATC subgroup:** [[Atazanavir]], [[Darunavir]], [[Ensitrelvir]], [[Fosamprenavir]], [[Saquinavir]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
