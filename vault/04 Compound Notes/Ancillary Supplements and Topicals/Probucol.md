---
type: compound
schema-version: 2
compound-id: probucol-compound
name: Probucol
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: ATP-binding cassette sub-family A member 1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL608
chembl-max-phase: 4
half-life:
  value: 50.0
  value-max: 62.0
  unit: h
  notes: 50-62 h initial, 98 h steady-state
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: fecal (84%), urinary (1.9%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: minimally renal
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Probucol
  url: https://en.wikipedia.org/w/index.php?title=Probucol&oldid=1334716938
  revision: 1334716938
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL608
  pref-name: PROBUCOL
  molecule-type: Small molecule
  first-approval: 1977
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - C10AX02
  targets:
  - id: CHEMBL2362986
    name: Phospholipid-transporting ATPase ABCA1
    action: INHIBITOR
  properties:
    full-mwt: 516.86
    mw-freebase: 516.86
    alogp: 9.91
    psa: 40.46
    hba: 4
    hbd: 2
    rtb: 4
    num-ro5-violations: 2
    qed-weighted: 0.31
    full-molformula: C31H48O2S2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Probucol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `probucol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL608](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL608/) · max phase 4 · id via Wikipedia infobox

## Source summary

Legacy lipid-lowering antioxidant that lowers LDL and HDL and can prolong QT; withdrawn in several markets.

## Mechanism

ATP-binding cassette sub-family A member 1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1977
- **Flags:** withdrawn
- **ATC C10AX02:** CARDIOVASCULAR SYSTEM › LIPID MODIFYING AGENTS, PLAIN › Other lipid modifying agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 516.86 | 9.91 | 40.46 | 2/4 | 2 | C31H48O2S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Phospholipid-transporting ATPase ABCA1 (CHEMBL2362986)|Phospholipid-transporting ATPase ABCA1]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Probucol*](https://en.wikipedia.org/w/index.php?title=Probucol&oldid=1334716938) (revision 1334716938, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 50–62 h | 50-62 h initial, 98 h steady-state |
| Metabolism | - | minimally renal |
| Excretion | mainly non-renal | fecal (84%), urinary (1.9%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alirocumab (Praluent)]], [[Bempedoic acid]], [[Dextrothyroxine]], [[Evinacumab (Evkeeza)]], [[Evolocumab]], [[Ezetimibe]], [[Inclisiran (Leqvio)]], [[Lomitapide (Juxtapid)]], [[Mipomersen (Kynamro)]], [[Omega-3-Acid Ethyl Esters]], [[Policosanol]], [[Volanesorsen (Waylivra)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
