---
type: compound
schema-version: 2
compound-id: tolcapone-compound
name: Tolcapone
aliases: []
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: Catechol O-methyltransferase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1324
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2–3 hours
protein-binding:
  value: 99.9
  value-max: null
  unit: percent
  notes: '>99.9%'
bioavailability:
  value: 65.0
  value-max: null
  notes: 65%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (60%), feces (40%);; only 0.5% in unmetabolized form
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mainly glucuronidation)
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
- cns-activity
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Tolcapone
  url: https://en.wikipedia.org/w/index.php?title=Tolcapone&oldid=1333688199
  revision: 1333688199
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1324
  pref-name: TOLCAPONE
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: true
  withdrawn: true
  atc-codes:
  - N04BX01
  targets:
  - id: CHEMBL2023
    name: Catechol O-methyltransferase
    action: INHIBITOR
  properties:
    full-mwt: 273.24
    mw-freebase: 273.24
    alogp: 2.55
    psa: 100.67
    hba: 5
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.39
    full-molformula: C14H11NO5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: a0e47a9d-78e7-4523-983a-aa259f221736
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a0e47a9d-78e7-4523-983a-aa259f221736
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: no-smpc-text
  product: Tasmar
  ema-number: EMEA/H/C/000132
  url: null
  chpl-url: null
  checked: '2026-10-01'
  fields: {}
---

# Tolcapone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tolcapone-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1324](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1324/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Brain-penetrant COMT inhibitor, and the cleanest tool for raising prefrontal dopamine specifically. Carries a black-box warning for fatal hepatotoxicity, which is why it is a research tool and not a nootropic.

## Mechanism

Catechol O-methyltransferase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **Flags:** black-box warning, withdrawn
- **ATC N04BX01:** NERVOUS SYSTEM › DOPAMINERGIC AGENTS › Other dopaminergic agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 273.24 | 2.55 | 100.67 | 2/5 | 0 | C14H11NO5 |

**Targets (ChEMBL curated mechanisms):**

- [[Catechol O-methyltransferase (CHEMBL2023)|Catechol O-methyltransferase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tolcapone*](https://en.wikipedia.org/w/index.php?title=Tolcapone&oldid=1333688199) (revision 1333688199, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2–3 hours |
| Protein binding | 99.9 % | >99.9% |
| Bioavailability | 65 % | 65% |
| Metabolism | hepatic | Liver (mainly glucuronidation) |
| Excretion | mainly urinary | Urine (60%), feces (40%);; only 0.5% in unmetabolized form |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a0e47a9d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a0e47a9d-78e7-4523-983a-aa259f221736), label version 20201002. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 3, 3.5)
> - protein-binding: consistent (label values: 99.9)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Entacapone]] (Catechol O-methyltransferase)
- **Same ATC subgroup:** [[Entacapone]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
