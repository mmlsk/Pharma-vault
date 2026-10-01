---
type: compound
schema-version: 2
compound-id: entacapone-compound
name: Entacapone
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Catechol O-methyltransferase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL953
chembl-max-phase: 4
half-life:
  value: 0.4
  value-max: 0.7
  unit: h
  notes: 0.4–0.7 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98% (binds to serum albumin)
bioavailability:
  value: 35.0
  value-max: null
  notes: 35%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (90%), urine (10%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Entacapone
  url: https://en.wikipedia.org/w/index.php?title=Entacapone&oldid=1368193947
  revision: 1368193947
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL953
  pref-name: ENTACAPONE
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N04BX02
  targets:
  - id: CHEMBL2023
    name: Catechol O-methyltransferase
    action: INHIBITOR
  properties:
    full-mwt: 305.29
    mw-freebase: 305.29
    alogp: 1.78
    psa: 127.7
    hba: 6
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.28
    full-molformula: C14H15N3O5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 56327e32-3b06-4144-91a0-bb1908842e33
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=56327e32-3b06-4144-91a0-bb1908842e33
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Comtess
  ema-number: EMEA/H/C/000170
  url: https://www.ema.europa.eu/en/documents/product-information/comtess-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Entacapone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `entacapone-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL953](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL953/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

A peripheral COMT inhibitor given with levodopa-carbidopa. It blocks the remaining route of peripheral levodopa loss once decarboxylase is already inhibited, extending each dose's on-time rather than raising its peak.

## Mechanism

Catechol O-methyltransferase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **ATC N04BX02:** NERVOUS SYSTEM › DOPAMINERGIC AGENTS › Other dopaminergic agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 305.29 | 1.78 | 127.7 | 2/6 | 0 | C14H15N3O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Catechol O-methyltransferase (CHEMBL2023)|Catechol O-methyltransferase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Entacapone*](https://en.wikipedia.org/w/index.php?title=Entacapone&oldid=1368193947) (revision 1368193947, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.4–0.7 h | 0.4–0.7 hours |
| Protein binding | 98 % | 98% (binds to serum albumin) |
| Bioavailability | 35 % | 35% |
| Metabolism | hepatic | Hepatic |
| Excretion | mainly non-renal | Feces (90%), urine (10%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 56327e32…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=56327e32-3b06-4144-91a0-bb1908842e33), label version 20260513. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.4, 0.7, 1.3, 2.4)
> - protein-binding: consistent (label values: 98)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Comtess*](https://www.ema.europa.eu/en/documents/product-information/comtess-epar-product-information_en.pdf) (EMEA/H/C/000170). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 0.5)
> - protein-binding: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Tolcapone]] (Catechol O-methyltransferase)
- **Same ATC subgroup:** [[Tolcapone]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
