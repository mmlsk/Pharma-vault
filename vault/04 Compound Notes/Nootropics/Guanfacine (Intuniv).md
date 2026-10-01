---
type: compound
schema-version: 2
compound-id: guanfacine-compound
name: Guanfacine (Intuniv)
aliases:
- Guanfacine
- Intuniv
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL862
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 17.0
  unit: h
  notes: 'IR: 10–17 hours; XR: 17 hours (10–30) in adults & adolescents and 14 hours in children'
protein-binding:
  value: 70.0
  value-max: null
  unit: percent
  notes: 70%
bioavailability:
  value: 80.0
  value-max: 100.0
  notes: 80–100% (IR), 58% (XR)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.75
  notes: 'Kidney (80%; 50% [range: 40–75%] as unchanged drug)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Guanfacine
  url: https://en.wikipedia.org/w/index.php?title=Guanfacine&oldid=1373933768
  revision: 1373933768
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL862
  pref-name: GUANFACINE
  molecule-type: Small molecule
  first-approval: 1986
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C02AC02
  targets: []
  properties:
    full-mwt: 246.1
    mw-freebase: 246.1
    alogp: 1.55
    psa: 78.97
    hba: 2
    hbd: 3
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C9H9Cl2N3O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 04a3bd2d-9a9c-43e8-a0e2-280e02265f16
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=04a3bd2d-9a9c-43e8-a0e2-280e02265f16
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Intuniv
  ema-number: EMEA/H/C/003759
  url: https://www.ema.europa.eu/en/documents/product-information/intuniv-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/intuniv-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Guanfacine (Intuniv)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `guanfacine-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Guanfacine, Intuniv
- **ChEMBL:** [CHEMBL862](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL862/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Alpha-2A adrenergic agonist. Improves working memory by closing prefrontal HCN channels rather than by raising catecholamines, which is why it is non-stimulant and sedating rather than activating.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1986
- **ATC C02AC02:** CARDIOVASCULAR SYSTEM › ANTIADRENERGIC AGENTS, CENTRALLY ACTING › Imidazoline receptor agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 246.1 | 1.55 | 78.97 | 3/2 | 0 | C9H9Cl2N3O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Guanfacine*](https://en.wikipedia.org/w/index.php?title=Guanfacine&oldid=1373933768) (revision 1373933768, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–17 h | IR: 10–17 hours; XR: 17 hours (10–30) in adults & adolescents and 14 hours in children |
| Protein binding | 70 % | 70% |
| Bioavailability | 80–100 % | 80–100% (IR), 58% (XR) |
| Metabolism | hepatic | CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary · fe 0.75 | Kidney (80%; 50% [range: 40–75%] as unchanged drug) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 04a3bd2d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=04a3bd2d-9a9c-43e8-a0e2-280e02265f16), label version 20260904. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 10, 13, 14, 17, 30)
> - protein-binding: consistent (label values: 70)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Intuniv*](https://www.ema.europa.eu/en/documents/product-information/intuniv-epar-product-information_en.pdf) (EMEA/H/C/003759) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/intuniv-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 18)
> - protein-binding: consistent (SmPC values: 70)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Clonidine]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
