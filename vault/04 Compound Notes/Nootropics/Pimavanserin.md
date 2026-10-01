---
type: compound
schema-version: 2
compound-id: pimavanserin-compound
name: Pimavanserin
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2111101
chembl-max-phase: 4
half-life:
  value: 54.0
  value-max: 57.0
  unit: h
  notes: 'Pimavanserin: 54–57 h; N-Desmethyl-pimavanserin (active): 200 h'
protein-binding:
  value: 94.0
  value-max: 97.0
  unit: percent
  notes: 94–97%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A4, CYP3A5, CYP2J2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2J2
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2J2, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Pimavanserin
  url: https://en.wikipedia.org/w/index.php?title=Pimavanserin&oldid=1358505193
  revision: 1358505193
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2111101
  pref-name: PIMAVANSERIN
  molecule-type: Small molecule
  first-approval: 2016
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AX17
  targets: []
  properties:
    full-mwt: 427.56
    mw-freebase: 427.56
    alogp: 4.67
    psa: 44.81
    hba: 3
    hbd: 1
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.67
    full-molformula: C25H34FN3O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 403b6540-c53d-4e92-91b4-36ca6338b2b1
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=403b6540-c53d-4e92-91b4-36ca6338b2b1
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Pimavanserin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pimavanserin-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL2111101](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2111101/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Selective 5-HT2A inverse agonist for Parkinson disease psychosis, treating psychosis without any dopamine receptor blockade.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2016
- **Flags:** black-box warning
- **ATC N05AX17:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Other antipsychotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 427.56 | 4.67 | 44.81 | 1/3 | 0 | C25H34FN3O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pimavanserin*](https://en.wikipedia.org/w/index.php?title=Pimavanserin&oldid=1358505193) (revision 1358505193, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 54–57 h | Pimavanserin: 54–57 h; N-Desmethyl-pimavanserin (active): 200 h |
| Protein binding | 94–97 % | 94–97% |
| Metabolism | hepatic | Hepatic (CYP3A4, CYP3A5, CYP2J2) |
| CYP (metabolised by) | CYP2J2, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-Desmethyl-pimavanserin |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 403b6540…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=403b6540-c53d-4e92-91b4-36ca6338b2b1), label version 20231101. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 57, 200)
> - protein-binding: consistent (label values: 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Aripiprazole]], [[Brexpiprazole]], [[Cariprazine]], [[Iloperidone]], [[Paliperidone]], [[Risperidone]]
- **Shared CYP substrate pool:** CYP2J2 (+3 others), CYP3A4 (+204 others), CYP3A5 (+13 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
