---
type: compound
schema-version: 2
compound-id: esketamine-compound
name: Esketamine (Spravato)
aliases:
- Esketamine
- Spravato
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Glutamate [NMDA] receptor negative allosteric modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL395091
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: null
  unit: h
  notes: 5 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 30.0
  value-max: 50.0
  notes: 'Intranasal: 30–50%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
  title: Esketamine
  url: https://en.wikipedia.org/w/index.php?title=Esketamine&oldid=1376072681
  revision: 1376072681
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL395091
  pref-name: ESKETAMINE
  molecule-type: Small molecule
  first-approval: 2019
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N01AX14
  - N06AX27
  targets:
  - id: CHEMBL2094124
    name: Glutamate [NMDA] receptor
    action: NEGATIVE ALLOSTERIC MODULATOR
  properties:
    full-mwt: 237.73
    mw-freebase: 237.73
    alogp: 2.9
    psa: 29.1
    hba: 2
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.86
    full-molformula: C13H16ClNO
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Esketamine (Spravato)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `esketamine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Esketamine, Spravato
- **ChEMBL:** [CHEMBL395091](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL395091/) · max phase 4 · id via Wikipedia infobox

## Source summary

Intranasal S-enantiomer of ketamine, the first genuinely new antidepressant mechanism in decades, administered under observation.

## Mechanism

Glutamate [NMDA] receptor negative allosteric modulator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2019
- **Flags:** black-box warning
- **ATC N01AX14:** NERVOUS SYSTEM › ANESTHETICS, GENERAL › Other general anesthetics
- **ATC N06AX27:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Other antidepressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 237.73 | 2.9 | 29.1 | 1/2 | 0 | C13H16ClNO |

**Targets (ChEMBL curated mechanisms):**

- [[Glutamate -NMDA- receptor (CHEMBL2094124)|Glutamate [NMDA] receptor]] - negative allosteric modulator · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Esketamine*](https://en.wikipedia.org/w/index.php?title=Esketamine&oldid=1376072681) (revision 1376072681, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5 h | 5 hours |
| Bioavailability | 30–50 % | Intranasal: 30–50% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Apimostinel]] (Glutamate [NMDA] receptor), [[Felbamate]] (Glutamate [NMDA] receptor), [[Neboglamine]] (Glutamate [NMDA] receptor), [[Ralfinamide]] (Glutamate [NMDA] receptor), [[Rapastinel]] (Glutamate [NMDA] receptor)
- **Same ATC subgroup:** [[Agomelatine (Valdoxan)]], [[Brexanolone]], [[Bupropion (Wellbutrin)]], [[Desvenlafaxine]], [[Duloxetine (Cymbalta)]], [[Etomidate]], [[Ketamine]], [[Levomilnacipran]], [[Minaprine]], [[Mirtazapine]], [[Nefazodone]], [[Nitrous Oxide]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
