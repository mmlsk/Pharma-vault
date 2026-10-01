---
type: compound
schema-version: 2
compound-id: lubiprostone-compound
name: Lubiprostone
aliases: []
cluster: General Pharmacology
group: gi
class: null
subclass: null
mechanism: Chloride channel protein 2 opener
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201134
chembl-max-phase: 4
half-life:
  value: 0.9
  value-max: 1.4
  unit: h
  notes: Unknown (lubiprostone); 0.9–1.4 hours (main metabolite)
protein-binding:
  value: 94.0
  value-max: null
  unit: percent
  notes: 94%
bioavailability:
  value: null
  value-max: null
  notes: Negligible
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (60%) and fecal (30%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive, CYP not involved
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
- group/gi
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Lubiprostone
  url: https://en.wikipedia.org/w/index.php?title=Lubiprostone&oldid=1329260443
  revision: 1329260443
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201134
  pref-name: LUBIPROSTONE
  molecule-type: Small molecule
  first-approval: 2006
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A06AX03
  targets:
  - id: CHEMBL1628478
    name: Chloride channel protein 2
    action: OPENER
  properties:
    full-mwt: 390.47
    mw-freebase: 390.47
    alogp: 4.31
    psa: 83.83
    hba: 4
    hbd: 2
    rtb: 11
    num-ro5-violations: 0
    qed-weighted: 0.51
    full-molformula: C20H32F2O5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: f4d506e0-1322-4fc4-e053-2995a90ac880
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f4d506e0-1322-4fc4-e053-2995a90ac880
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Lubiprostone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lubiprostone-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1201134](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201134/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Prostone chloride channel activator for chronic constipation, working through a channel rather than a receptor.

## Mechanism

Chloride channel protein 2 opener _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2006
- **ATC A06AX03:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR CONSTIPATION › Other drugs for constipation

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 390.47 | 4.31 | 83.83 | 2/4 | 0 | C20H32F2O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Chloride channel protein 2 (CHEMBL1628478)|Chloride channel protein 2]] - opener · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lubiprostone*](https://en.wikipedia.org/w/index.php?title=Lubiprostone&oldid=1329260443) (revision 1329260443, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.9–1.4 h | Unknown (lubiprostone); 0.9–1.4 hours (main metabolite) |
| Protein binding | 94 % | 94% |
| Bioavailability | - | Negligible |
| Metabolism | hepatic | Extensive, CYP not involved |
| Excretion | mainly urinary | Kidney (60%) and fecal (30%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f4d506e0…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f4d506e0-1322-4fc4-e053-2995a90ac880), label version 20260728. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.9, 1.4)
> - protein-binding: consistent (label values: 94)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Linaclotide]], [[Plecanatide]], [[Prucalopride]], [[Tegaserod]], [[Tenapanor]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
