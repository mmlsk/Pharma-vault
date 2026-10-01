---
type: compound
schema-version: 2
compound-id: linagliptin-compound
name: Linagliptin (Tradjenta)
aliases:
- Linagliptin
- Tradjenta
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: Dipeptidyl peptidase IV inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL237500
chembl-max-phase: 4
half-life:
  value: 24.0
  value-max: null
  unit: h
  notes: ~24 hours
protein-binding:
  value: 75.0
  value-max: 99.0
  unit: percent
  notes: 75–99% (concentration-dependent)
bioavailability:
  value: 30.0
  value-max: null
  notes: ~30% (Tmax = 1.5 hours)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (80%), urine (5%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Minimal (~10% metabolized)
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
- glucose-metabolism
- gastrointestinal
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Linagliptin
  url: https://en.wikipedia.org/w/index.php?title=Linagliptin&oldid=1329259847
  revision: 1329259847
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL237500
  pref-name: LINAGLIPTIN
  molecule-type: Small molecule
  first-approval: 2011
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10BH05
  targets:
  - id: CHEMBL284
    name: Dipeptidyl peptidase 4
    action: INHIBITOR
  properties:
    full-mwt: 472.55
    mw-freebase: 472.55
    alogp: 1.15
    psa: 116.86
    hba: 10
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.44
    full-molformula: C25H28N8O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: dfe327e8-f6ab-41e5-bdef-d520118cd83a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dfe327e8-f6ab-41e5-bdef-d520118cd83a
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Linagliptin (Tradjenta)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `linagliptin-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **Aliases:** Linagliptin, Tradjenta
- **ChEMBL:** [CHEMBL237500](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL237500/) · max phase 4 · id via Wikipedia infobox

## Source summary

DPP-4 inhibitor for type 2 diabetes, unusual in requiring no renal dose adjustment; weight-neutral rather than a weight-loss drug.

## Mechanism

Dipeptidyl peptidase IV inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2011
- **ATC A10BH05:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Dipeptidyl peptidase 4 (DPP-4) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 472.55 | 1.15 | 116.86 | 1/10 | 0 | C25H28N8O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Dipeptidyl peptidase 4 (CHEMBL284)|Dipeptidyl peptidase 4]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Linagliptin*](https://en.wikipedia.org/w/index.php?title=Linagliptin&oldid=1329259847) (revision 1329259847, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24 h | ~24 hours |
| Protein binding | 75–99 % | 75–99% (concentration-dependent) |
| Bioavailability | 30 % | ~30% (Tmax = 1.5 hours) |
| Metabolism | - | Minimal (~10% metabolized) |
| Metabolites | - | Pharmacologically inactive |
| Excretion | mainly non-renal | Feces (80%), urine (5%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set dfe327e8…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=dfe327e8-f6ab-41e5-bdef-d520118cd83a), label version 20250827. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 11, 12, 100, 200)
> - protein-binding: consistent (label values: 20, 30, 70, 75, 80, 89)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Anagliptin]] (Dipeptidyl peptidase 4), [[Bisegliptin]] (Dipeptidyl peptidase 4), [[Dutogliptin]] (Dipeptidyl peptidase 4), [[Evogliptin]] (Dipeptidyl peptidase 4), [[Gemigliptin]] (Dipeptidyl peptidase 4), [[Gosogliptin]] (Dipeptidyl peptidase 4), [[Omarigliptin]] (Dipeptidyl peptidase 4), [[Teneligliptin]] (Dipeptidyl peptidase 4), [[Vildagliptin]] (Dipeptidyl peptidase 4)
- **Same ATC subgroup:** [[Alogliptin]], [[Evogliptin]], [[Gemigliptin]], [[Sitagliptin (Januvia)]], [[Teneligliptin]], [[Vildagliptin]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
