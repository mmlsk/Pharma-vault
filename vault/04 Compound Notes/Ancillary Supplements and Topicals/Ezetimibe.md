---
type: compound
schema-version: 2
compound-id: ezetimibe-compound
name: Ezetimibe
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Niemann-Pick C1-like protein 1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1138
chembl-max-phase: 4
half-life:
  value: 19.0
  value-max: null
  unit: h
  notes: 19 h to 30 h
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: '>90%'
bioavailability:
  value: 35.0
  value-max: null
  notes: 35% to 65%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Kidney 11%, fecal 78%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Intestinal wall, liver
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
  title: Ezetimibe
  url: https://en.wikipedia.org/w/index.php?title=Ezetimibe&oldid=1363003390
  revision: 1363003390
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1138
  pref-name: EZETIMIBE
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C10AX09
  targets:
  - id: CHEMBL2027
    name: NPC1-like intracellular cholesterol transporter 1
    action: INHIBITOR
  properties:
    full-mwt: 409.43
    mw-freebase: 409.43
    alogp: 4.89
    psa: 60.77
    hba: 3
    hbd: 2
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.57
    full-molformula: C24H21F2NO3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 090776cf-f211-49a3-a993-ff5d707311f2
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=090776cf-f211-49a3-a993-ff5d707311f2
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Ezetimibe

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ezetimibe-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1138](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1138/) · max phase 4 · id via Wikipedia infobox

## Source summary

NPC1L1 inhibitor blocking intestinal cholesterol absorption; the standard statin add-on or statin alternative.

## Mechanism

Niemann-Pick C1-like protein 1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **ATC C10AX09:** CARDIOVASCULAR SYSTEM › LIPID MODIFYING AGENTS, PLAIN › Other lipid modifying agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 409.43 | 4.89 | 60.77 | 2/3 | 0 | C24H21F2NO3 |

**Targets (ChEMBL curated mechanisms):**

- [[NPC1-like intracellular cholesterol transporter 1 (CHEMBL2027)|NPC1-like intracellular cholesterol transporter 1]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ezetimibe*](https://en.wikipedia.org/w/index.php?title=Ezetimibe&oldid=1363003390) (revision 1363003390, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 19 h | 19 h to 30 h |
| Protein binding | 90 % | >90% |
| Bioavailability | 35 % | 35% to 65% |
| Metabolism | hepatic | Intestinal wall, liver |
| Excretion | mainly non-renal | Kidney 11%, fecal 78% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 090776cf…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=090776cf-f211-49a3-a993-ff5d707311f2), label version 20260706. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 22)
> - protein-binding: consistent (label values: 90)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alirocumab (Praluent)]], [[Bempedoic acid]], [[Dextrothyroxine]], [[Evinacumab (Evkeeza)]], [[Evolocumab]], [[Inclisiran (Leqvio)]], [[Lomitapide (Juxtapid)]], [[Mipomersen (Kynamro)]], [[Omega-3-Acid Ethyl Esters]], [[Policosanol]], [[Probucol]], [[Volanesorsen (Waylivra)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
