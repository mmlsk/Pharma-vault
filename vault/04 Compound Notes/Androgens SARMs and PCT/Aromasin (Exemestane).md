---
type: compound
schema-version: 2
compound-id: exemestane-compound
name: Aromasin (Exemestane)
aliases:
- Aromasin
- Exemestane
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Cytochrome P450 19A1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1200374
chembl-max-phase: 4
half-life:
  value: 24.0
  value-max: null
  unit: h
  notes: 24 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
bioavailability:
  value: 60.0
  value-max: null
  notes: ~60%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine and feces ~ 1:1 (mainly metabolites)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, aldo-keto reductase)
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
- endocrine-feedback-disruption
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Exemestane
  url: https://en.wikipedia.org/w/index.php?title=Exemestane&oldid=1367093736
  revision: 1367093736
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1200374
  pref-name: EXEMESTANE
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L02BG06
  targets:
  - id: CHEMBL1978
    name: Aromatase
    action: INHIBITOR
  properties:
    full-mwt: 296.41
    mw-freebase: 296.41
    alogp: 4.03
    psa: 34.14
    hba: 2
    hbd: 0
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.68
    full-molformula: C20H24O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 69abd0ff-b200-4d1a-b14a-80e980a8e781
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=69abd0ff-b200-4d1a-b14a-80e980a8e781
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Aromasin (Exemestane)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `exemestane-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Aromasin, Exemestane
- **ChEMBL:** [CHEMBL1200374](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200374/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Steroidal aromatase inhibitor that irreversibly blocks estrogen synthesis, used for on-cycle estrogen control.

## Mechanism

Cytochrome P450 19A1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **ATC L02BG06:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONE ANTAGONISTS AND RELATED AGENTS › Aromatase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 296.41 | 4.03 | 34.14 | 0/2 | 0 | C20H24O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Aromatase (CHEMBL1978)|Aromatase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Exemestane*](https://en.wikipedia.org/w/index.php?title=Exemestane&oldid=1367093736) (revision 1367093736, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24 h | 24 hours |
| Protein binding | 90 % | 90% |
| Bioavailability | 60 % | ~60% |
| Metabolism | hepatic | Liver (CYP3A4, aldo-keto reductase) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Urine and feces ~ 1:1 (mainly metabolites) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 69abd0ff…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=69abd0ff-b200-4d1a-b14a-80e980a8e781), label version 20251224. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 24)
> - protein-binding: consistent (label values: 90)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aminoglutethimide]] (Aromatase), [[Arimidex (Anastrozole)]] (Aromatase), [[Femara (Letrozole)]] (Aromatase), [[Testolactone]] (Aromatase)
- **Same ATC subgroup:** [[Aminoglutethimide]], [[Arimidex (Anastrozole)]], [[Femara (Letrozole)]], [[Formestane]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
