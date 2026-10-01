---
type: compound
schema-version: 2
compound-id: clonidine-compound
name: Clonidine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Adrenergic receptor alpha-2 agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL134
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: 16.0
  unit: h
  notes: 'IR: 12–16 hours; 41 hours in kidney failure, 48 hours for repeated dosing'
protein-binding:
  value: 20.0
  value-max: 40.0
  unit: percent
  notes: 20–40%
bioavailability:
  value: 70.0
  value-max: 80.0
  notes: 70–80% (oral), 60–70% (transdermal)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (72%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver to inactive metabolites, 2/3 CYP2D6
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Clonidine
  url: https://en.wikipedia.org/w/index.php?title=Clonidine&oldid=1370368953
  revision: 1370368953
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL134
  pref-name: CLONIDINE
  molecule-type: Small molecule
  first-approval: 1974
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C02AC01
  - N02CX02
  - S01EA04
  targets:
  - id: CHEMBL2095158
    name: Adrenergic receptor alpha-2
    action: AGONIST
  properties:
    full-mwt: 230.1
    mw-freebase: 230.1
    alogp: 2.36
    psa: 36.42
    hba: 3
    hbd: 2
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.78
    full-molformula: C9H9Cl2N3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7adfc439-e6d0-4593-87dd-0eef36d33c6d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7adfc439-e6d0-4593-87dd-0eef36d33c6d
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Clonidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `clonidine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL134](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL134/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Central alpha-2 agonist; effective, sedating, and dangerous to stop abruptly.

## Mechanism

Adrenergic receptor alpha-2 agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1974
- **Flags:** black-box warning
- **ATC C02AC01:** CARDIOVASCULAR SYSTEM › ANTIADRENERGIC AGENTS, CENTRALLY ACTING › Imidazoline receptor agonists
- **ATC N02CX02:** NERVOUS SYSTEM › ANTIMIGRAINE PREPARATIONS › Other antimigraine preparations
- **ATC S01EA04:** SENSORY ORGANS › ANTIGLAUCOMA PREPARATIONS AND MIOTICS › Sympathomimetics in glaucoma therapy

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 230.1 | 2.36 | 36.42 | 2/3 | 0 | C9H9Cl2N3 |

**Targets (ChEMBL curated mechanisms):**

- [[Adrenergic receptor alpha-2 (CHEMBL2095158)|Adrenergic receptor alpha-2]] - agonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Clonidine*](https://en.wikipedia.org/w/index.php?title=Clonidine&oldid=1370368953) (revision 1370368953, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–16 h | IR: 12–16 hours; 41 hours in kidney failure, 48 hours for repeated dosing |
| Protein binding | 20–40 % | 20–40% |
| Bioavailability | 70–80 % | 70–80% (oral), 60–70% (transdermal) |
| Metabolism | hepatic | Liver to inactive metabolites, 2/3 CYP2D6 |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (72%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7adfc439…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7adfc439-e6d0-4593-87dd-0eef36d33c6d), label version 20260623. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.333, 12, 16, 20, 41)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Celiprolol]] (Adrenergic receptor alpha-2), [[Idazoxan]] (Adrenergic receptor alpha-2), [[Methyldopa (Aldomet)]] (Adrenergic receptor alpha-2), [[Mirtazapine]] (Adrenergic receptor alpha-2)
- **Same ATC subgroup:** [[Adrenaline (Epinephrine)]], [[Brimonidine]], [[Guanfacine (Intuniv)]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
