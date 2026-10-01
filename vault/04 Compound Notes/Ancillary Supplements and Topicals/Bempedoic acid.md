---
type: compound
schema-version: 2
compound-id: bempedoic-acid-compound
name: Bempedoic acid
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: ATP-citrate synthase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3545313
chembl-max-phase: 4
half-life:
  value: 21.0
  value-max: null
  unit: h
  notes: 21±11 hrs
protein-binding:
  value: 99.3
  value-max: null
  unit: percent
  notes: 99.3%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 70% urine, 30% feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Glucuronidation
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
  title: Bempedoic acid
  url: https://en.wikipedia.org/w/index.php?title=Bempedoic_acid&oldid=1364444411
  revision: 1364444411
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3545313
  pref-name: BEMPEDOIC ACID
  molecule-type: Small molecule
  first-approval: 2020
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C10AX15
  targets:
  - id: CHEMBL3720
    name: ATP-citrate synthase
    action: INHIBITOR
  properties:
    full-mwt: 344.49
    mw-freebase: 344.49
    alogp: 4.47
    psa: 94.83
    hba: 3
    hbd: 3
    rtb: 14
    num-ro5-violations: 0
    qed-weighted: 0.4
    full-molformula: C19H36O5
pk-verification:
  source: fda-label
  status: consistent
  set-id: 88d06d89-a3da-40b4-b273-8f4f7d56c4c9
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=88d06d89-a3da-40b4-b273-8f4f7d56c4c9
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Bempedoic acid

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bempedoic-acid-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3545313](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3545313/) · max phase 4 · id via Wikipedia infobox

## Source summary

ATP citrate lyase inhibitor that lowers LDL without acting in muscle -- the reason it exists is statin intolerance.

## Mechanism

ATP-citrate synthase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2020
- **ATC C10AX15:** CARDIOVASCULAR SYSTEM › LIPID MODIFYING AGENTS, PLAIN › Other lipid modifying agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 344.49 | 4.47 | 94.83 | 3/3 | 0 | C19H36O5 |

**Targets (ChEMBL curated mechanisms):**

- [[ATP-citrate synthase (CHEMBL3720)|ATP-citrate synthase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bempedoic acid*](https://en.wikipedia.org/w/index.php?title=Bempedoic_acid&oldid=1364444411) (revision 1364444411, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 21 h | 21±11 hrs |
| Protein binding | 99.3 % | 99.3% |
| Metabolism | hepatic | Glucuronidation |
| Excretion | - | 70% urine, 30% feces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 88d06d89…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=88d06d89-a3da-40b4-b273-8f4f7d56c4c9), label version 20260625. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 21)
> - protein-binding: consistent (label values: 98.8, 99.2, 99.3)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alirocumab (Praluent)]], [[Dextrothyroxine]], [[Evinacumab (Evkeeza)]], [[Evolocumab]], [[Ezetimibe]], [[Inclisiran (Leqvio)]], [[Lomitapide (Juxtapid)]], [[Mipomersen (Kynamro)]], [[Omega-3-Acid Ethyl Esters]], [[Policosanol]], [[Probucol]], [[Volanesorsen (Waylivra)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
