---
type: compound
schema-version: 2
compound-id: safinamide-compound
name: Safinamide
aliases: []
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: Monoamine oxidase B inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL396778
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: 30.0
  unit: h
  notes: 20–30 hrs
protein-binding:
  value: 88.0
  value-max: 90.0
  unit: percent
  notes: 88–90%
bioavailability:
  value: 95.0
  value-max: null
  notes: 95%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 76% Kidney, 1.5% faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Amidases, glucuronidation
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
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Safinamide
  url: https://en.wikipedia.org/w/index.php?title=Safinamide&oldid=1361846684
  revision: 1361846684
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL396778
  pref-name: SAFINAMIDE
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N04BD03
  targets:
  - id: CHEMBL2039
    name: Amine oxidase [flavin-containing] B
    action: INHIBITOR
  properties:
    full-mwt: 302.35
    mw-freebase: 302.35
    alogp: 2.37
    psa: 64.35
    hba: 3
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.83
    full-molformula: C17H19FN2O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Xadago
  ema-number: EMEA/H/C/002396
  url: https://www.ema.europa.eu/en/documents/product-information/xadago-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/xadago-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Safinamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `safinamide-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL396778](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL396778/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits monoamine oxidase to raise synaptic monoamines; selectivity and reversibility determine tyramine and serotonin-syndrome risk.

## Mechanism

Monoamine oxidase B inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015
- **ATC N04BD03:** NERVOUS SYSTEM › DOPAMINERGIC AGENTS › Monoamine oxidase B inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 302.35 | 2.37 | 64.35 | 2/3 | 0 | C17H19FN2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Amine oxidase -flavin-containing- B (CHEMBL2039)|Amine oxidase [flavin-containing] B]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Safinamide*](https://en.wikipedia.org/w/index.php?title=Safinamide&oldid=1361846684) (revision 1361846684, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–30 h | 20–30 hrs |
| Protein binding | 88–90 % | 88–90% |
| Bioavailability | 95 % | 95% |
| Metabolism | hepatic | Amidases, glucuronidation |
| Excretion | - | 76% Kidney, 1.5% faeces |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Xadago*](https://www.ema.europa.eu/en/documents/product-information/xadago-epar-product-information_en.pdf) (EMEA/H/C/002396) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/xadago-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 20, 30, 80)
> - protein-binding: consistent (SmPC values: 88, 90)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ralfinamide]] (Amine oxidase [flavin-containing] B), [[Selegiline (L-Deprenyl)]] (Amine oxidase [flavin-containing] B), [[Selegiline (oral)]] (Amine oxidase [flavin-containing] B)
- **Same ATC subgroup:** [[Rasagiline (Azilect)]], [[Selegiline (L-Deprenyl)]], [[Selegiline (oral)]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
