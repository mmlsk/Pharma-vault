---
type: compound
schema-version: 2
compound-id: amoxicillin-compound
name: Amoxicillin
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Bacterial penicillin-binding protein inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1082
chembl-max-phase: 4
half-life:
  value: 61.3
  value-max: null
  unit: min
  notes: 61.3 minutes (~1 hour)
protein-binding:
  value: 17.0
  value-max: null
  unit: percent
  notes: 17%
bioavailability:
  value: 60.0
  value-max: null
  notes: 'Oral: 60%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 70–78% (after 6 hours)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hydroxylation, oxidative deamination, aliphatic chain oxidation, decarboxylation, glucuronidation
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
- cyp-interactions
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Amoxicillin
  url: https://en.wikipedia.org/w/index.php?title=Amoxicillin&oldid=1363961139
  revision: 1363961139
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1082
  pref-name: AMOXICILLIN
  molecule-type: Small molecule
  first-approval: 1974
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01CA04
  targets:
  - id: CHEMBL2354204
    name: Bacterial penicillin-binding protein
    action: INHIBITOR
  properties:
    full-mwt: 365.41
    mw-freebase: 365.41
    alogp: 0.02
    psa: 132.96
    hba: 6
    hbd: 4
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C16H19N3O5S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4adc198e-39d8-4b3e-bfa4-278aaf4064ae
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4adc198e-39d8-4b3e-bfa4-278aaf4064ae
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Amoxicillin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amoxicillin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1082](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1082/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Aminopenicillin with useful oral bioavailability and gram-positive plus limited gram-negative cover. First-line for otitis, sinusitis and community pneumonia, and the backbone of Helicobacter eradication regimens.

## Mechanism

Bacterial penicillin-binding protein inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1974
- **ATC J01CA04:** ANTIINFECTIVES FOR SYSTEMIC USE › BETA-LACTAM ANTIBACTERIALS, PENICILLINS › Penicillins with extended spectrum

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 365.41 | 0.02 | 132.96 | 4/6 | 0 | C16H19N3O5S |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial penicillin-binding protein (CHEMBL2354204)|Bacterial penicillin-binding protein]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amoxicillin*](https://en.wikipedia.org/w/index.php?title=Amoxicillin&oldid=1363961139) (revision 1363961139, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 61.3 min | 61.3 minutes (~1 hour) |
| Protein binding | 17 % | 17% |
| Bioavailability | 60 % | Oral: 60% |
| Metabolism | hepatic | Hydroxylation, oxidative deamination, aliphatic chain oxidation, decarboxylation, glucuronidation |
| Metabolites | - | Seven |
| Excretion | mainly urinary | Urine: 70–78% (after 6 hours) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4adc198e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4adc198e-39d8-4b3e-bfa4-278aaf4064ae), label version 20260909. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.022)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ampicillin]] (Bacterial penicillin-binding protein), [[Aztreonam]] (Bacterial penicillin-binding protein), [[Cefiderocol]] (Bacterial penicillin-binding protein), [[Ceftaroline]] (Bacterial penicillin-binding protein), [[Ceftazidime]] (Bacterial penicillin-binding protein), [[Ertapenem]] (Bacterial penicillin-binding protein), [[Meropenem]] (Bacterial penicillin-binding protein)
- **Same ATC subgroup:** [[Ampicillin]], [[Piperacillin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
