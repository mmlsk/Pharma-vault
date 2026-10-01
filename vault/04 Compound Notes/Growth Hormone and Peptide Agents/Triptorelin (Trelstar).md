---
type: compound
schema-version: 2
compound-id: triptorelin-compound
name: Triptorelin (Trelstar)
aliases:
- Triptorelin
- Trelstar
cluster: Growth Hormone and Peptide Agents
group: peptides
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201334
chembl-max-phase: 4
half-life:
  value: 6.6
  value-max: null
  unit: h
  notes: 'The elimination half-life for patients with hepatic impairment was similar to that of patients with renal impairment (geometric mean t(1/2, z): 6.6 h, 7.7 h and 7.6 h for Groups II, III and IV, respectively), but significantly longer than in healthy volunteers (2.8 h for Group I); Triptorelin is a gonadotropin-releasing hormone (GnRH) analogue with enhanced affinity for GnRH receptors and a prolonged half-life due to its resistance to enzymatic degradation.'
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
- evidence-limited
- identity-contamination
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/peptides
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Triptorelin
  url: https://en.wikipedia.org/w/index.php?title=Triptorelin&oldid=1349528803
  revision: 1349528803
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201334
  pref-name: TRIPTORELIN
  molecule-type: Protein
  first-approval: 2000
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L02AE04
  targets: []
  properties:
    full-mwt: 1311.47
    mw-freebase: 1311.47
    full-molformula: C64H82N18O13
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: f41380e7-b830-432d-a5f5-a872932f107e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f41380e7-b830-432d-a5f5-a872932f107e
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Triptorelin (Trelstar)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `triptorelin-compound`
- **Source group:** Peptides (`peptides`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **Aliases:** Triptorelin, Trelstar
- **ChEMBL:** [CHEMBL1201334](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201334/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

GnRH agonist; a flare then profound suppression, which is why it is used both ways.

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2000
- **ATC L02AE04:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONES AND RELATED AGENTS › Gonadotropin releasing hormone analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1311.47 | - | - | -/- | - | C64H82N18O13 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Triptorelin*](https://en.wikipedia.org/w/index.php?title=Triptorelin&oldid=1349528803) (revision 1349528803, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6.6 h | The elimination half-life for patients with hepatic impairment was similar to that of patients with renal impairment (geometric mean t(1/2, z): 6.6 h, 7.7 h and 7.6 h for Groups II, III and IV, respectively), but significantly longer than in healthy volunteers (2.8 h for Group I); Triptorelin is a gonadotropin-releasing hormone (GnRH) analogue with enhanced affinity for GnRH receptors and a prolonged half-life due to its resistance to enzymatic degradation. |
| Excretion | mainly urinary | Kidney |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set f41380e7…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f41380e7-b830-432d-a5f5-a872932f107e), label version 20250914. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Buserelin]], [[Goserelin]], [[Histrelin]], [[Leuprolide (Lupron)]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`, `identity-contamination`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
