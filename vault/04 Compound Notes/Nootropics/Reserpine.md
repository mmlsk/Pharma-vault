---
type: compound
schema-version: 2
compound-id: reserpine-compound
name: Reserpine
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Synaptic vesicular amine transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL772
chembl-max-phase: 4
half-life:
  value: 4.5
  value-max: null
  unit: h
  notes: phase 1 = 4.5h,; phase 2 = 271h, ; average = 33h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 50.0
  value-max: null
  notes: 50%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 62% feces / 8% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: gut/liver
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Reserpine
  url: https://en.wikipedia.org/w/index.php?title=Reserpine&oldid=1371358256
  revision: 1371358256
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL772
  pref-name: RESERPINE
  molecule-type: Small molecule
  first-approval: 1960
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - C02AA02
  - C02AA52
  targets:
  - id: CHEMBL1893
    name: Synaptic vesicular amine transporter
    action: INHIBITOR
  properties:
    full-mwt: 608.69
    mw-freebase: 608.69
    alogp: 4.17
    psa: 117.78
    hba: 10
    hbd: 1
    rtb: 8
    num-ro5-violations: 1
    qed-weighted: 0.37
    full-molformula: C33H40N2O9
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Reserpine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `reserpine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL772](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL772/) · max phase 4 · id via Wikipedia infobox

## Source summary

Rauwolfia alkaloid, the first effective antihypertensive and the drug whose depressive effect founded the monoamine hypothesis of depression.

## Mechanism

Synaptic vesicular amine transporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1960
- **Flags:** withdrawn
- **ATC C02AA02:** CARDIOVASCULAR SYSTEM › ANTIADRENERGIC AGENTS, CENTRALLY ACTING › Rauwolfia alkaloids
- **ATC C02AA52:** CARDIOVASCULAR SYSTEM › ANTIADRENERGIC AGENTS, CENTRALLY ACTING › Rauwolfia alkaloids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 608.69 | 4.17 | 117.78 | 1/10 | 1 | C33H40N2O9 |

**Targets (ChEMBL curated mechanisms):**

- [[Synaptic vesicular amine transporter (CHEMBL1893)|Synaptic vesicular amine transporter]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Reserpine*](https://en.wikipedia.org/w/index.php?title=Reserpine&oldid=1371358256) (revision 1371358256, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.5 h | phase 1 = 4.5h,; phase 2 = 271h, ; average = 33h |
| Bioavailability | 50 % | 50% |
| Metabolism | hepatic | gut/liver |
| Excretion | - | 62% feces / 8% urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Deutetrabenazine]] (Synaptic vesicular amine transporter), [[Dextroamphetamine]] (Synaptic vesicular amine transporter), [[Tetrabenazine]] (Synaptic vesicular amine transporter), [[Valbenazine]] (Synaptic vesicular amine transporter)

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
