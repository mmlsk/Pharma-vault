---
type: compound
schema-version: 2
compound-id: budesonide-compound
name: Budesonide
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Glucocorticoid receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1370
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.6
  unit: h
  notes: 2.0-3.6 hours
protein-binding:
  value: 85.0
  value-max: 90.0
  unit: percent
  notes: 85-90%
bioavailability:
  value: 10.0
  value-max: 20.0
  notes: 10-20% (first pass effect)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver CYP3A4
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Budesonide
  url: https://en.wikipedia.org/w/index.php?title=Budesonide&oldid=1356473070
  revision: 1356473070
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1370
  pref-name: BUDESONIDE
  molecule-type: Small molecule
  first-approval: 1994
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - A07EA06
  - D07AC09
  - R01AD05
  - R03BA02
  targets:
  - id: CHEMBL2034
    name: Glucocorticoid receptor
    action: AGONIST
  properties:
    full-mwt: 430.54
    mw-freebase: 430.54
    alogp: 2.72
    psa: 93.06
    hba: 6
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.71
    full-molformula: C25H34O6
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3235e2a4-8e12-2d58-e063-6294a90a4936
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3235e2a4-8e12-2d58-e063-6294a90a4936
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Budesonide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `budesonide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1370](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1370/) · max phase 4 · id via source catalogue

## Source summary

Glucocorticoid receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1370).

## Mechanism

Glucocorticoid receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1994
- **Flags:** black-box warning
- **ATC A07EA06:** ALIMENTARY TRACT AND METABOLISM › INTESTINAL ANTIINFLAMMATORY AGENTS › Corticosteroids acting locally
- **ATC D07AC09:** DERMATOLOGICALS › CORTICOSTEROIDS, PLAIN › Corticosteroids, potent (group III)
- **ATC R01AD05:** RESPIRATORY SYSTEM › DECONGESTANTS AND OTHER NASAL PREPARATIONS FOR TOPICAL USE › Corticosteroids
- **ATC R03BA02:** RESPIRATORY SYSTEM › OTHER DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES, INHALANTS › Glucocorticoids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 430.54 | 2.72 | 93.06 | 2/6 | 0 | C25H34O6 |

**Targets (ChEMBL curated mechanisms):**

- [[Glucocorticoid receptor (CHEMBL2034)|Glucocorticoid receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Budesonide*](https://en.wikipedia.org/w/index.php?title=Budesonide&oldid=1356473070) (revision 1356473070, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3.6 h | 2.0-3.6 hours |
| Protein binding | 85–90 % | 85-90% |
| Bioavailability | 10–20 % | 10-20% (first pass effect) |
| Metabolism | hepatic | Liver CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Urine, feces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3235e2a4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3235e2a4-8e12-2d58-e063-6294a90a4936), label version 20260716. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.3)
> - protein-binding: consistent (label values: 85, 90)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Alclometasone Dipropionate]] (Glucocorticoid receptor), [[Amcinonide]] (Glucocorticoid receptor), [[Azd-5423]] (Glucocorticoid receptor), [[Beclomethasone Dipropionate]] (Glucocorticoid receptor), [[Betamethasone]] (Glucocorticoid receptor), [[Betamethasone Acetate]] (Glucocorticoid receptor), [[Betamethasone Benzoate]] (Glucocorticoid receptor), [[Betamethasone Dipropionate]] (Glucocorticoid receptor), [[Betamethasone Valerate]] (Glucocorticoid receptor), [[Ciclesonide]] (Glucocorticoid receptor), [[Clobetasol Propionate]] (Glucocorticoid receptor), [[Clocortolone Pivalate]] (Glucocorticoid receptor)
- **Same ATC subgroup:** [[Amcinonide]], [[Beclomethasone Dipropionate]], [[Betamethasone]], [[Ciclesonide]], [[Desoximetasone]], [[Dexamethasone]], [[Diflorasone Diacetate]], [[Difluprednate]], [[Flunisolide]], [[Fluocinolone Acetonide]], [[Fluocinonide]], [[Flurandrenolide]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
