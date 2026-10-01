---
type: compound
schema-version: 2
compound-id: leflunomide-compound
name: Leflunomide
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
chembl-id: CHEMBL960
chembl-max-phase: 4
half-life:
  value: 14.0
  value-max: 18.0
  unit: d
  notes: 14–18 days
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 80.0
  value-max: null
  notes: 80%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Faeces (48%), urine (43%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: GI mucosa and liver
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
  title: Leflunomide
  url: https://en.wikipedia.org/w/index.php?title=Leflunomide&oldid=1363895358
  revision: 1363895358
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL960
  pref-name: LEFLUNOMIDE
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AK01
  targets:
  - id: CHEMBL1966
    name: Dihydroorotate dehydrogenase (quinone), mitochondrial
    action: INHIBITOR
  properties:
    full-mwt: 270.21
    mw-freebase: 270.21
    alogp: 3.25
    psa: 55.13
    hba: 3
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.91
    full-molformula: C12H9F3N2O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: fc044417-cd9a-42f6-8a3d-a14e7c2f81a2
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fc044417-cd9a-42f6-8a3d-a14e7c2f81a2
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Leflunomide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `leflunomide-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL960](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL960/) · max phase 4 · id via Wikipedia infobox

## Source summary

Pyrimidine synthesis inhibitor for rheumatoid arthritis with an active metabolite that recirculates enterohepatically for months.

## Mechanism

Dihydroorotate dehydrogenase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **Flags:** black-box warning, prodrug
- **ATC L04AK01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Dihydroorotate dehydrogenase (DHODH) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 270.21 | 3.25 | 55.13 | 1/3 | 0 | C12H9F3N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Dihydroorotate dehydrogenase (quinone), mitochondrial (CHEMBL1966)|Dihydroorotate dehydrogenase (quinone), mitochondrial]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Leflunomide*](https://en.wikipedia.org/w/index.php?title=Leflunomide&oldid=1363895358) (revision 1363895358, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14–18 d | 14–18 days |
| Protein binding | 99 % | >99% |
| Bioavailability | 80 % | 80% |
| Metabolism | hepatic | GI mucosa and liver |
| Metabolites | - | Teriflunomide |
| Excretion | - | Faeces (48%), urine (43%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set fc044417…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fc044417-cd9a-42f6-8a3d-a14e7c2f81a2), label version 20260501. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 72, 432, 456)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Teriflunomide]] (Dihydroorotate dehydrogenase (quinone), mitochondrial)
- **Same ATC subgroup:** [[Teriflunomide]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
