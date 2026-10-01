---
type: compound
schema-version: 2
compound-id: apremilast-compound
name: Apremilast
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Phosphodiesterase 4 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL514800
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: 9.0
  unit: h
  notes: 6–9 hours
protein-binding:
  value: 68.0
  value-max: null
  unit: percent
  notes: c. 68%
bioavailability:
  value: 73.0
  value-max: null
  notes: 73%; Tmax = ~2.5 hours
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (58%), faeces (39%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, with minor contributions from CYP2A6, CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2A6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2A6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Apremilast
  url: https://en.wikipedia.org/w/index.php?title=Apremilast&oldid=1329075237
  revision: 1329075237
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL514800
  pref-name: APREMILAST
  molecule-type: Small molecule
  first-approval: 2014
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L04AA32
  targets:
  - id: CHEMBL2093863
    name: Phosphodiesterase 4
    action: INHIBITOR
  properties:
    full-mwt: 460.51
    mw-freebase: 460.51
    alogp: 2.43
    psa: 119.08
    hba: 7
    hbd: 1
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.6
    full-molformula: C22H24N2O7S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: f6b1f516-4972-4d82-bced-113e47b41cc5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f6b1f516-4972-4d82-bced-113e47b41cc5
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Otezla
  ema-number: EMEA/H/C/003746
  url: https://www.ema.europa.eu/en/documents/product-information/otezla-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/otezla-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Apremilast

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `apremilast-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL514800](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL514800/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits PDE4 to raise intracellular cAMP and dampen inflammatory cytokine production; emesis and weight loss are class-limiting.

## Mechanism

Phosphodiesterase 4 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014
- **ATC L04AA32:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Selective immunosuppressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 460.51 | 2.43 | 119.08 | 1/7 | 0 | C22H24N2O7S |

**Targets (ChEMBL curated mechanisms):**

- [[Phosphodiesterase 4 (CHEMBL2093863)|Phosphodiesterase 4]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Apremilast*](https://en.wikipedia.org/w/index.php?title=Apremilast&oldid=1329075237) (revision 1329075237, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–9 h | 6–9 hours |
| Protein binding | 68 % | c. 68% |
| Bioavailability | 73 % | 73%; Tmax = ~2.5 hours |
| Metabolism | hepatic | Liver (CYP3A4, with minor contributions from CYP2A6, CYP1A2) |
| CYP (metabolised by) | CYP1A2, CYP2A6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | O-desmethylapremilast glucuronide (and others) |
| Excretion | mainly urinary | Urine (58%), faeces (39%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f6b1f516…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f6b1f516-4972-4d82-bced-113e47b41cc5), label version 20260902. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 6, 9)
> - protein-binding: consistent (label values: 68)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Otezla*](https://www.ema.europa.eu/en/documents/product-information/otezla-epar-product-information_en.pdf) (EMEA/H/C/003746) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/otezla-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 9)
> - protein-binding: consistent (SmPC values: 68)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cilomilast]] (Phosphodiesterase 4), [[Crisaborole (topical 2% ointment, Eucrisa)]] (Phosphodiesterase 4), [[Difamilast]] (Phosphodiesterase 4), [[Ensifentrine (Ohtuvayre)]] (Phosphodiesterase 4), [[Ibudilast]] (Phosphodiesterase 4), [[Oglemilast]] (Phosphodiesterase 4), [[Roflumilast]] (Phosphodiesterase 4), [[Roflumilast (topical)]] (Phosphodiesterase 4), [[Roflumilast Foam (Zoryve)]] (Phosphodiesterase 4), [[Rolipram]] (Phosphodiesterase 4), [[Tanimilast (CHF6001)]] (Phosphodiesterase 4), [[Tetomilast]] (Phosphodiesterase 4)
- **Same ATC subgroup:** [[Abatacept]], [[Belatacept]], [[Efgartigimod]], [[Remibrutinib]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2A6 (+4 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
