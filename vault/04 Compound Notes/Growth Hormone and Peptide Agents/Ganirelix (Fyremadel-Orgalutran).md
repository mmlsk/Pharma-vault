---
type: compound
schema-version: 2
compound-id: ganirelix-compound
name: Ganirelix (Fyremadel/Orgalutran)
aliases:
- Ganirelix
- Fyremadel
- Orgalutran
cluster: Growth Hormone and Peptide Agents
group: peptides
class: null
subclass: null
mechanism: Gonadotropin-releasing hormone receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1251
chembl-max-phase: 4
half-life:
  value: 16.2
  value-max: null
  unit: h
  notes: 16.2 hours
protein-binding:
  value: 81.9
  value-max: null
  unit: percent
  notes: 81.9%
bioavailability:
  value: 91.1
  value-max: null
  notes: 91.1%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 75%; Urine: 22%'
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/peptides
- stub
- pk-auto
- chembl-profile
- identity-formula-match
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Ganirelix
  url: https://en.wikipedia.org/w/index.php?title=Ganirelix&oldid=1329009390
  revision: 1329009390
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1251
  pref-name: GANIRELIX
  molecule-type: Protein
  first-approval: 1999
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H01CC01
  targets:
  - id: CHEMBL1855
    name: Gonadotropin-releasing hormone receptor
    action: ANTAGONIST
  properties:
    full-mwt: 1570.35
    mw-freebase: 1570.35
    full-molformula: C80H113ClN18O13
  identity-check: formula-match
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
  product: Orgalutran
  ema-number: EMEA/H/C/000274
  url: https://www.ema.europa.eu/en/documents/product-information/orgalutran-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/orgalutran-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Ganirelix (Fyremadel/Orgalutran)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ganirelix-compound`
- **Source group:** Peptides (`peptides`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **Aliases:** Ganirelix, Fyremadel, Orgalutran
- **ChEMBL:** [CHEMBL1251](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1251/) · max phase 4 · id via Wikipedia infobox · structure check: ≈ same formula, different InChIKey (tautomer/representation)

## Source summary

Third-generation GnRH receptor antagonist; suppresses LH immediately, with no flare.

## Mechanism

Gonadotropin-releasing hormone receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1999
- **ATC H01CC01:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › HYPOTHALAMIC HORMONES › Anti-gonadotropin-releasing hormones

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1570.35 | - | - | -/- | - | C80H113ClN18O13 |

**Targets (ChEMBL curated mechanisms):**

- [[Gonadotropin-releasing hormone receptor (CHEMBL1855)|Gonadotropin-releasing hormone receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ganirelix*](https://en.wikipedia.org/w/index.php?title=Ganirelix&oldid=1329009390) (revision 1329009390, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 16.2 h | 16.2 hours |
| Protein binding | 81.9 % | 81.9% |
| Bioavailability | 91.1 % | 91.1% |
| Excretion | mainly non-renal | Feces: 75%; Urine: 22% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Orgalutran*](https://www.ema.europa.eu/en/documents/product-information/orgalutran-epar-product-information_en.pdf) (EMEA/H/C/000274) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/orgalutran-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 13)
> - protein-binding: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Abarelix]] (Gonadotropin-releasing hormone receptor), [[Acyline]] (Gonadotropin-releasing hormone receptor), [[Buserelin]] (Gonadotropin-releasing hormone receptor), [[Elagolix]] (Gonadotropin-releasing hormone receptor), [[Linzagolix]] (Gonadotropin-releasing hormone receptor), [[Opigolix]] (Gonadotropin-releasing hormone receptor), [[Ozarelix]] (Gonadotropin-releasing hormone receptor), [[Relugolix (Orgovyx)]] (Gonadotropin-releasing hormone receptor), [[Zoptarelin Doxorubicin]] (Gonadotropin-releasing hormone receptor)
- **Same ATC subgroup:** [[Cetrorelix (Cetrotide)]], [[Elagolix]], [[Linzagolix]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`, `identity-contamination`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
