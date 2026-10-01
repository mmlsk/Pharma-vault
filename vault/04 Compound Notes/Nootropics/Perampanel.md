---
type: compound
schema-version: 2
compound-id: perampanel-compound
name: Perampanel
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Glutamate receptor ionotropic AMPA antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1214124
chembl-max-phase: 4
half-life:
  value: 105.0
  value-max: null
  unit: h
  notes: 105 hours, 295 hours (moderate hepatic impairment)
protein-binding:
  value: 95.0
  value-max: 96.0
  unit: percent
  notes: 95–96%
bioavailability:
  value: null
  value-max: null
  notes: 116%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 70% faeces, 30% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, mostly via CYP3A4 and/or CYP3A5
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Perampanel
  url: https://en.wikipedia.org/w/index.php?title=Perampanel&oldid=1373296477
  revision: 1373296477
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1214124
  pref-name: PERAMPANEL
  molecule-type: Small molecule
  first-approval: 2012
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N03AX22
  targets:
  - id: CHEMBL2096670
    name: Glutamate receptor ionotropic AMPA
    action: ANTAGONIST
  properties:
    full-mwt: 349.39
    mw-freebase: 349.39
    alogp: 4.44
    psa: 58.68
    hba: 4
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C23H15N3O
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3c72a5f7-bb22-4c48-942a-543ca84ed5a9
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3c72a5f7-bb22-4c48-942a-543ca84ed5a9
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Perampanel

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `perampanel-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1214124](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1214124/) · max phase 4 · id via Wikipedia infobox

## Source summary

Selective non-competitive AMPA receptor antagonist, the first of its class, carrying a boxed warning for aggression.

## Mechanism

Glutamate receptor ionotropic AMPA antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2012
- **Flags:** black-box warning
- **ATC N03AX22:** NERVOUS SYSTEM › ANTIEPILEPTICS › Other antiepileptics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 349.39 | 4.44 | 58.68 | 0/4 | 0 | C23H15N3O |

**Targets (ChEMBL curated mechanisms):**

- [[Glutamate receptor ionotropic AMPA (CHEMBL2096670)|Glutamate receptor ionotropic AMPA]] - antagonist · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Perampanel*](https://en.wikipedia.org/w/index.php?title=Perampanel&oldid=1373296477) (revision 1373296477, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 105 h | 105 hours, 295 hours (moderate hepatic impairment) |
| Protein binding | 95–96 % | 95–96% |
| Bioavailability | - | 116% |
| Metabolism | hepatic | Liver, mostly via CYP3A4 and/or CYP3A5 |
| CYP (metabolised by) | CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | - | 70% faeces, 30% urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3c72a5f7…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3c72a5f7-bb22-4c48-942a-543ca84ed5a9), label version 20260602. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 25, 56.8, 58.4, 105, 125, 139)
> - protein-binding: consistent (label values: 50, 95, 96)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[BIIB104]] (Glutamate receptor ionotropic AMPA), [[CX-1739]] (Glutamate receptor ionotropic AMPA), [[TAK-653]] (Glutamate receptor ionotropic AMPA), [[Topiramate (Topamax)]] (Glutamate receptor ionotropic AMPA)
- **Same ATC subgroup:** [[Brivaracetam]], [[Cannabidiol (Epidiolex)]], [[Cenobamate]], [[Felbamate]], [[Fenfluramine]], [[Ganaxolone]], [[Lacosamide]], [[Lamotrigine]], [[Levetiracetam]], [[Pheneturide]], [[Retigabine (Ezogabine)]], [[Stiripentol]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others), CYP3A5 (+13 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
