---
type: compound
schema-version: 2
compound-id: emtricitabine-compound
name: Emtricitabine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Human immunodeficiency virus type 1 reverse transcriptase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL885
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours
protein-binding:
  value: 4.0
  value-max: null
  unit: percent
  notes: Very low (less than 4%)
bioavailability:
  value: 93.0
  value-max: null
  notes: 93%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (86%) and fecal (14%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic oxidation and glucuronidation; CYP system not involved
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
  title: Emtricitabine
  url: https://en.wikipedia.org/w/index.php?title=Emtricitabine&oldid=1363895645
  revision: 1363895645
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL885
  pref-name: EMTRICITABINE
  molecule-type: Small molecule
  first-approval: 2003
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AF09
  targets:
  - id: CHEMBL247
    name: Human immunodeficiency virus type 1 reverse transcriptase
    action: INHIBITOR
  properties:
    full-mwt: 247.25
    mw-freebase: 247.25
    alogp: -0.46
    psa: 90.37
    hba: 7
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C8H10FN3O3S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: a229c922-58eb-4795-9219-6cebb1779e35
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a229c922-58eb-4795-9219-6cebb1779e35
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Emtriva
  ema-number: EMEA/H/C/000533
  url: https://www.ema.europa.eu/en/documents/product-information/emtriva-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Emtricitabine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `emtricitabine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL885](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL885/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits HIV reverse transcriptase and is used only as part of a resistance-aware antiretroviral regimen.

## Mechanism

Human immunodeficiency virus type 1 reverse transcriptase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2003
- **Flags:** black-box warning, prodrug
- **ATC J05AF09:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Nucleoside and nucleotide reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 247.25 | -0.46 | 90.37 | 2/7 | 0 | C8H10FN3O3S |

**Targets (ChEMBL curated mechanisms):**

- [[Human immunodeficiency virus type 1 reverse transcriptase (CHEMBL247)|Human immunodeficiency virus type 1 reverse transcriptase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Emtricitabine*](https://en.wikipedia.org/w/index.php?title=Emtricitabine&oldid=1363895645) (revision 1363895645, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours |
| Protein binding | 4 % | Very low (less than 4%) |
| Bioavailability | 93 % | 93% |
| Metabolism | hepatic | Hepatic oxidation and glucuronidation; CYP system not involved |
| Excretion | mainly urinary | Renal (86%) and fecal (14%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a229c922…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a229c922-58eb-4795-9219-6cebb1779e35), label version 20260818. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 10)
> - protein-binding: consistent (label values: 4)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Emtriva*](https://www.ema.europa.eu/en/documents/product-information/emtriva-epar-product-information_en.pdf) (EMEA/H/C/000533). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 10, 39)
> - protein-binding: consistent (SmPC values: 4)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Doravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Efavirenz]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Etravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Islatravir]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Lamivudine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Nevirapine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Rilpivirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Tenofovir Alafenamide]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Zidovudine]] (Human immunodeficiency virus type 1 reverse transcriptase)
- **Same ATC subgroup:** [[Abacavir]], [[Lamivudine]], [[Telbivudine]], [[Tenofovir]], [[Tenofovir Alafenamide]], [[Tenofovir Disoproxil]], [[Zidovudine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
