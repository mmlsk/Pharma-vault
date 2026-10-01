---
type: compound
schema-version: 2
compound-id: alitretinoin-oral-compound
name: Alitretinoin (oral, Toctino)
aliases:
- Alitretinoin
- Toctino
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Retinoid receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL705
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 10.0
  unit: h
  notes: 2–10 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Highly bound, no exact figure available
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (64%), faeces (30%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4-mediated oxidation, also isomerised to tretinoin)
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
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Alitretinoin
  url: https://en.wikipedia.org/w/index.php?title=Alitretinoin&oldid=1361245894
  revision: 1361245894
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL705
  pref-name: ALITRETINOIN
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D11AH04
  - L01XF02
  targets:
  - id: CHEMBL2363071
    name: Retinoid receptor
    action: AGONIST
  properties:
    full-mwt: 300.44
    mw-freebase: 300.44
    alogp: 5.6
    psa: 37.3
    hba: 1
    hbd: 1
    rtb: 5
    num-ro5-violations: 1
    qed-weighted: 0.53
    full-molformula: C20H28O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 49c16717-7d86-4257-80c9-baa1417e5555
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=49c16717-7d86-4257-80c9-baa1417e5555
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Alitretinoin (oral, Toctino)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `alitretinoin-oral-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Alitretinoin, Toctino
- **ChEMBL:** [CHEMBL705](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL705/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Oral 9-cis retinoic acid licensed for severe chronic hand eczema; the systemic drug, not the Kaposi sarcoma gel.

## Mechanism

Retinoid receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **ATC D11AH04:** DERMATOLOGICALS › OTHER DERMATOLOGICAL PREPARATIONS › Agents for dermatitis, excluding corticosteroids
- **ATC L01XF02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › OTHER ANTINEOPLASTIC AGENTS › Retinoids for cancer treatment

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 300.44 | 5.6 | 37.3 | 1/1 | 1 | C20H28O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Retinoid receptor (CHEMBL2363071)|Retinoid receptor]] - agonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Alitretinoin*](https://en.wikipedia.org/w/index.php?title=Alitretinoin&oldid=1361245894) (revision 1361245894, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–10 h | 2–10 hours |
| Protein binding | - | Highly bound, no exact figure available |
| Metabolism | hepatic | Liver (CYP3A4-mediated oxidation, also isomerised to tretinoin) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (64%), faeces (30%) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 49c16717…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=49c16717-7d86-4257-80c9-baa1417e5555), label version 20251125. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Alitretinoin]]
- **Shared target:** [[Acitretin (oral, Soriatane)]] (Retinoid receptor), [[Alitretinoin]] (Retinoid receptor), [[Etretinate]] (Retinoid receptor), [[Mofarotene]] (Retinoid receptor)
- **Same ATC subgroup:** [[Abrocitinib (Cibinqo)]], [[Alitretinoin]], [[Crisaborole (topical 2% ointment, Eucrisa)]], [[Delgocitinib]], [[Deuruxolitinib (Leqselvi)]], [[Dupilumab (Dupixent, subcutaneous)]], [[Lebrikizumab (Ebglyss)]], [[Nemolizumab]], [[Oral Tretinoin (ATRA)]], [[Pimecrolimus]], [[Ruxolitinib]], [[Ruxolitinib (topical)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
