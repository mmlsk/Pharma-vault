---
type: compound
schema-version: 2
compound-id: teriflunomide-compound
name: Teriflunomide
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: Dihydroorotate dehydrogenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL973
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: wk
  notes: 2 weeks
protein-binding:
  value: 99.3
  value-max: null
  unit: percent
  notes: '>99.3%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct/fecal, kidney
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
- immunosuppression-infection
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Teriflunomide
  url: https://en.wikipedia.org/w/index.php?title=Teriflunomide&oldid=1329508095
  revision: 1329508095
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL973
  pref-name: TERIFLUNOMIDE
  molecule-type: Small molecule
  first-approval: 2012
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AK02
  targets:
  - id: CHEMBL1966
    name: Dihydroorotate dehydrogenase (quinone), mitochondrial
    action: INHIBITOR
  properties:
    full-mwt: 270.21
    mw-freebase: 270.21
    alogp: 3.0
    psa: 73.12
    hba: 3
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.49
    full-molformula: C12H9F3N2O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: c424959d-00c9-4e76-aba6-cc7464d8e903
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c424959d-00c9-4e76-aba6-cc7464d8e903
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Teriflunomide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `teriflunomide-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL973](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL973/) · max phase 4 · id via Wikipedia infobox

## Source summary

The active metabolite of leflunomide, developed in its own right as an oral disease-modifying therapy for multiple sclerosis.

## Mechanism

Dihydroorotate dehydrogenase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2012
- **Flags:** black-box warning
- **ATC L04AK02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Dihydroorotate dehydrogenase (DHODH) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 270.21 | 3.0 | 73.12 | 2/3 | 0 | C12H9F3N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Dihydroorotate dehydrogenase (quinone), mitochondrial (CHEMBL1966)|Dihydroorotate dehydrogenase (quinone), mitochondrial]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Teriflunomide*](https://en.wikipedia.org/w/index.php?title=Teriflunomide&oldid=1329508095) (revision 1329508095, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 wk | 2 weeks |
| Protein binding | 99.3 % | >99.3% |
| Excretion | mainly non-renal | Bile duct/fecal, kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set c424959d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c424959d-00c9-4e76-aba6-cc7464d8e903), label version 20260826. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 432, 456)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Leflunomide]] (Dihydroorotate dehydrogenase (quinone), mitochondrial)
- **Same ATC subgroup:** [[Leflunomide]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
