---
type: compound
schema-version: 2
compound-id: grazoprevir-compound
name: Grazoprevir
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Hepatitis C virus serine protease, NS3/NS4A inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3039533
chembl-max-phase: 4
half-life:
  value: 31.0
  value-max: null
  unit: h
  notes: 31 hours
protein-binding:
  value: 98.8
  value-max: null
  unit: percent
  notes: 98.8%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: '>90% via faeces, <1% via urine'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Grazoprevir
  url: https://en.wikipedia.org/w/index.php?title=Grazoprevir&oldid=1363943243
  revision: 1363943243
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2063090
  pref-name: GRAZOPREVIR
  molecule-type: Small molecule
  first-approval: 2016
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AP11
  targets:
  - id: CHEMBL2095231
    name: Hepatitis C virus serine protease, NS3/NS4A
    action: INHIBITOR
  properties:
    full-mwt: 766.92
    mw-freebase: 766.92
    alogp: 3.3
    psa: 195.22
    hba: 11
    hbd: 3
    rtb: 7
    num-ro5-violations: 2
    qed-weighted: 0.35
    full-molformula: C38H50N6O9S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Grazoprevir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `grazoprevir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3039533](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3039533/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Blocks an HCV replication target and is combined with complementary direct-acting antivirals to prevent resistance.

## Mechanism

Hepatitis C virus serine protease, NS3/NS4A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2016
- **ATC J05AP11:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Antivirals for treatment of HCV infections

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 766.92 | 3.3 | 195.22 | 3/11 | 2 | C38H50N6O9S |

**Targets (ChEMBL curated mechanisms):**

- [[Hepatitis C virus serine protease, NS3-NS4A (CHEMBL2095231)|Hepatitis C virus serine protease, NS3/NS4A]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Grazoprevir*](https://en.wikipedia.org/w/index.php?title=Grazoprevir&oldid=1363943243) (revision 1363943243, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 31 h | 31 hours |
| Protein binding | 98.8 % | 98.8% |
| Metabolism | hepatic | CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | >90% via faeces, <1% via urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Boceprevir]] (Hepatitis C virus serine protease, NS3/NS4A), [[Glecaprevir]] (Hepatitis C virus serine protease, NS3/NS4A), [[Telaprevir]] (Hepatitis C virus serine protease, NS3/NS4A), [[Voxilaprevir]] (Hepatitis C virus serine protease, NS3/NS4A)
- **Same ATC subgroup:** [[Boceprevir]], [[Daclatasvir]], [[Elbasvir]], [[Ribavirin]], [[Simeprevir]], [[Sofosbuvir]], [[Telaprevir]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
