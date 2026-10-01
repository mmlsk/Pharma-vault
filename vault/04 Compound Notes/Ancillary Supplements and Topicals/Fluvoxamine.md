---
type: compound
schema-version: 2
compound-id: fluvoxamine-compound
name: Fluvoxamine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL814
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: 13.0
  unit: h
  notes: 12–13 hours (single dose), 22 hours (repeated dosing)
protein-binding:
  value: 77.0
  value-max: 80.0
  unit: percent
  notes: 77–80%
bioavailability:
  value: 53.0
  value-max: null
  notes: '53% (90% confidence interval: 44–62%)'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.04
  notes: Kidney (98%; 94% as metabolites, 4% as unchanged drug)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver (primarily O-demethylation); Major: CYP2D6 or CYP1A2; Minor: CYP3A4, CYP2C19, and/or CYP1A2'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C19
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C19, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
pk-source:
  type: wikipedia-infobox
  title: Fluvoxamine
  url: https://en.wikipedia.org/w/index.php?title=Fluvoxamine&oldid=1368879073
  revision: 1368879073
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL814
  pref-name: FLUVOXAMINE
  molecule-type: Small molecule
  first-approval: 1994
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AB08
  targets: []
  properties:
    full-mwt: 318.34
    mw-freebase: 318.34
    alogp: 3.2
    psa: 56.84
    hba: 4
    hbd: 1
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.43
    full-molformula: C15H21F3N2O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Fluvoxamine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fluvoxamine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL814](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL814/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits serotonin reuptake through SERT; benefits, activation, sexual effects, and withdrawal profiles differ by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1994
- **Flags:** black-box warning
- **ATC N06AB08:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Selective serotonin reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 318.34 | 3.2 | 56.84 | 1/4 | 0 | C15H21F3N2O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fluvoxamine*](https://en.wikipedia.org/w/index.php?title=Fluvoxamine&oldid=1368879073) (revision 1368879073, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–13 h | 12–13 hours (single dose), 22 hours (repeated dosing) |
| Protein binding | 77–80 % | 77–80% |
| Bioavailability | 53 % | 53% (90% confidence interval: 44–62%) |
| Metabolism | hepatic | Liver (primarily O-demethylation); Major: CYP2D6 or CYP1A2; Minor: CYP3A4, CYP2C19, and/or CYP1A2 |
| CYP (metabolised by) | CYP1A2, CYP2C19, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.04 | Kidney (98%; 94% as metabolites, 4% as unchanged drug) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alaproclate]], [[Citalopram]], [[Escitalopram (Lexapro)]], [[Fluoxetine (Prozac)]], [[Paroxetine]], [[Sertraline (Zoloft)]], [[Zimelidine]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2C19 (+43 others), CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
