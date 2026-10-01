---
type: compound
schema-version: 2
compound-id: etifoxine-compound
name: Etifoxine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: gABA-A receptor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2106227
chembl-max-phase: 3
half-life:
  value: 6.0
  value-max: null
  unit: h
  notes: 'Etifoxine: 6 hours; Diethyletifoxine: 20 hours'
protein-binding:
  value: 88.0
  value-max: 95.0
  unit: percent
  notes: 88–95%
bioavailability:
  value: 90.0
  value-max: null
  notes: 90%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mainly urine, also bile
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
pk-source:
  type: wikipedia-infobox
  title: Etifoxine
  url: https://en.wikipedia.org/w/index.php?title=Etifoxine&oldid=1359023058
  revision: 1359023058
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2106227
  pref-name: ETIFOXINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N05BX03
  targets:
  - id: CHEMBL2093872
    name: GABA-A receptor; anion channel
    action: ANTAGONIST
  properties:
    full-mwt: 300.79
    mw-freebase: 300.79
    alogp: 4.23
    psa: 33.62
    hba: 3
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.9
    full-molformula: C17H17ClN2O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Etifoxine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `etifoxine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2106227](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2106227/) · max phase 3 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Etifoxine is a phase 3 compound catalogued by ChEMBL. Its curated mechanism is gABA-A receptor; anion channel antagonist; the pathway link is mechanistic and does not by itself establish benefit, safety, or an appropriate use.

## Mechanism

gABA-A receptor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC N05BX03:** NERVOUS SYSTEM › ANXIOLYTICS › Other anxiolytics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 300.79 | 4.23 | 33.62 | 1/3 | 0 | C17H17ClN2O |

**Targets (ChEMBL curated mechanisms):**

- [[GABA-A receptor; anion channel (CHEMBL2093872)|GABA-A receptor; anion channel]] - antagonist · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Etifoxine*](https://en.wikipedia.org/w/index.php?title=Etifoxine&oldid=1359023058) (revision 1359023058, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 h | Etifoxine: 6 hours; Diethyletifoxine: 20 hours |
| Protein binding | 88–95 % | 88–95% |
| Bioavailability | 90 % | 90% |
| Metabolism | hepatic | Liver |
| Metabolites | - | Several (including diethyletifoxine) |
| Excretion | - | Mainly urine, also bile |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Abp-700]] (GABA-A receptor; anion channel), [[Adipiplon]] (GABA-A receptor; anion channel), [[Alprazolam]] (GABA-A receptor; anion channel), [[Brexanolone]] (GABA-A receptor; anion channel), [[Butalbital]] (GABA-A receptor; anion channel), [[Cenobamate]] (GABA-A receptor; anion channel), [[Chlordiazepoxide]] (GABA-A receptor; anion channel), [[Cipepofol]] (GABA-A receptor; anion channel), [[Clobazam]] (GABA-A receptor; anion channel), [[Clomethiazole]] (GABA-A receptor; anion channel), [[Clonazepam]] (GABA-A receptor; anion channel), [[Clotiazepam]] (GABA-A receptor; anion channel)
- **Same ATC subgroup:** [[Silexan (Lavender Oil, oral)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
