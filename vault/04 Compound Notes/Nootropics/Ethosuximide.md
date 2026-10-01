---
type: compound
schema-version: 2
compound-id: ethosuximide-compound
name: Ethosuximide
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Voltage-gated T-type calcium channel blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL696
chembl-max-phase: 4
half-life:
  value: 53.0
  value-max: null
  unit: h
  notes: 53 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 93.0
  value-max: null
  notes: 93%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: kidney (20%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver (CYP3A4, CYP2E1)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2E1
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2E1, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Ethosuximide
  url: https://en.wikipedia.org/w/index.php?title=Ethosuximide&oldid=1338566097
  revision: 1338566097
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL696
  pref-name: ETHOSUXIMIDE
  molecule-type: Small molecule
  first-approval: 1960
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N03AD01
  - N03AD51
  targets:
  - id: CHEMBL2362995
    name: Voltage-gated T-type calcium channel
    action: BLOCKER
  properties:
    full-mwt: 141.17
    mw-freebase: 141.17
    alogp: 0.45
    psa: 46.17
    hba: 2
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.54
    full-molformula: C7H11NO2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 19c924c2-f558-4c78-9277-2d7e0df2f505
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=19c924c2-f558-4c78-9277-2d7e0df2f505
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Ethosuximide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ethosuximide-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL696](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL696/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The drug of choice for childhood absence epilepsy, and the cleanest example of a seizure type defined by one channel.

## Mechanism

Voltage-gated T-type calcium channel blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1960
- **ATC N03AD01:** NERVOUS SYSTEM › ANTIEPILEPTICS › Succinimide derivatives
- **ATC N03AD51:** NERVOUS SYSTEM › ANTIEPILEPTICS › Succinimide derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 141.17 | 0.45 | 46.17 | 1/2 | 0 | C7H11NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Voltage-gated T-type calcium channel (CHEMBL2362995)|Voltage-gated T-type calcium channel]] - blocker · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ethosuximide*](https://en.wikipedia.org/w/index.php?title=Ethosuximide&oldid=1338566097) (revision 1338566097, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 53 h | 53 hours |
| Bioavailability | 93 % | 93% |
| Metabolism | hepatic | liver (CYP3A4, CYP2E1) |
| CYP (metabolised by) | CYP2E1, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | kidney (20%) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 19c924c2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=19c924c2-f558-4c78-9277-2d7e0df2f505), label version 20260724. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP2E1 (+8 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
