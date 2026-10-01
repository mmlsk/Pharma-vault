---
type: compound
schema-version: 2
compound-id: imidapril-compound
name: Imidapril
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Angiotensin-converting enzyme inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL317094
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hrs (imidapril),; 24 hrs (imidaprilat)
protein-binding:
  value: 85.0
  value-max: null
  unit: percent
  notes: 85% (imidapril),; 53% (imidaprilat)
bioavailability:
  value: 42.0
  value-max: null
  notes: 42% (imidaprilat)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 40% Kidney, 50% bile duct
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Imidapril
  url: https://en.wikipedia.org/w/index.php?title=Imidapril&oldid=1329257928
  revision: 1329257928
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL317094
  pref-name: IMIDAPRIL
  molecule-type: Small molecule
  first-approval: 1993
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C09AA16
  targets:
  - id: CHEMBL1808
    name: Angiotensin-converting enzyme
    action: INHIBITOR
  properties:
    full-mwt: 405.45
    mw-freebase: 405.45
    alogp: 0.88
    psa: 116.25
    hba: 6
    hbd: 2
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.59
    full-molformula: C20H27N3O6
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Imidapril

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `imidapril-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL317094](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL317094/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Blocks the renin–angiotensin system to reduce angiotensin-driven vasoconstriction or aldosterone signaling.

## Mechanism

Angiotensin-converting enzyme inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1993
- **Flags:** prodrug
- **ATC C09AA16:** CARDIOVASCULAR SYSTEM › ACE INHIBITORS, PLAIN › ACE inhibitors, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 405.45 | 0.88 | 116.25 | 2/6 | 0 | C20H27N3O6 |

**Targets (ChEMBL curated mechanisms):**

- [[Angiotensin-converting enzyme (CHEMBL1808)|Angiotensin-converting enzyme]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Imidapril*](https://en.wikipedia.org/w/index.php?title=Imidapril&oldid=1329257928) (revision 1329257928, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hrs (imidapril),; 24 hrs (imidaprilat) |
| Protein binding | 85 % | 85% (imidapril),; 53% (imidaprilat) |
| Bioavailability | 42 % | 42% (imidaprilat) |
| Metabolites | - | Imidaprilat (active metabolite) |
| Excretion | mainly urinary | 40% Kidney, 50% bile duct |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Captopril (Capoten)]] (Angiotensin-converting enzyme), [[Cilazapril]] (Angiotensin-converting enzyme), [[Delapril]] (Angiotensin-converting enzyme), [[Ilepatril]] (Angiotensin-converting enzyme), [[Ramipril (Altace)]] (Angiotensin-converting enzyme), [[Trandolapril]] (Angiotensin-converting enzyme)
- **Same ATC subgroup:** [[Benazepril (Lotensin)]], [[Captopril (Capoten)]], [[Cilazapril]], [[Delapril]], [[Enalapril]], [[Fosinopril]], [[Moexipril]], [[Perindopril (Aceon)]], [[Quinapril]], [[Ramipril (Altace)]], [[Spirapril]], [[Temocapril]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
