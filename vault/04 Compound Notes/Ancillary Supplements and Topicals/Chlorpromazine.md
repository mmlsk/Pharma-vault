---
type: compound
schema-version: 2
compound-id: chlorpromazine-compound
name: Chlorpromazine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: D2-like dopamine receptor antagonist; Serotonin 2a (5-HT2a) receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL71
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: null
  unit: h
  notes: 30 hours
protein-binding:
  value: 90.0
  value-max: 99.0
  unit: percent
  notes: 90–99%
bioavailability:
  value: 10.0
  value-max: 80.0
  notes: 10–80% (Oral; large interindividual variation)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (43–65% in 24 hrs)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, mostly CYP2D6-mediated
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Chlorpromazine
  url: https://en.wikipedia.org/w/index.php?title=Chlorpromazine&oldid=1368875372
  revision: 1368875372
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL71
  pref-name: CHLORPROMAZINE
  molecule-type: Small molecule
  first-approval: 1957
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AA01
  targets:
  - id: CHEMBL224
    name: 5-hydroxytryptamine receptor 2A
    action: ANTAGONIST
  - id: CHEMBL2331075
    name: D2-like dopamine receptor
    action: ANTAGONIST
  properties:
    full-mwt: 318.87
    mw-freebase: 318.87
    alogp: 4.89
    psa: 6.48
    hba: 3
    hbd: 0
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C17H19ClN2S
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 0dc38655-01b1-413e-9139-2466014cb4d0
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0dc38655-01b1-413e-9139-2466014cb4d0
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Chlorpromazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `chlorpromazine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL71](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL71/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## Mechanism

D2-like dopamine receptor antagonist; Serotonin 2a (5-HT2a) receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1957
- **Flags:** black-box warning
- **ATC N05AA01:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Phenothiazines with aliphatic side-chain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 318.87 | 4.89 | 6.48 | 0/3 | 0 | C17H19ClN2S |

**Targets (ChEMBL curated mechanisms):**

- [[5-hydroxytryptamine receptor 2A (CHEMBL224)|5-hydroxytryptamine receptor 2A]] - antagonist · SINGLE PROTEIN
- [[D2-like dopamine receptor (CHEMBL2331075)|D2-like dopamine receptor]] - antagonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Chlorpromazine*](https://en.wikipedia.org/w/index.php?title=Chlorpromazine&oldid=1368875372) (revision 1368875372, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30 h | 30 hours |
| Protein binding | 90–99 % | 90–99% |
| Bioavailability | 10–80 % | 10–80% (Oral; large interindividual variation) |
| Metabolism | hepatic | Liver, mostly CYP2D6-mediated |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (43–65% in 24 hrs) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 0dc38655…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0dc38655-01b1-413e-9139-2466014cb4d0), label version 20260819. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Droperidol]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Haloperidol]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Haloperidol Decanoate]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Loxapine]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Olanzapine]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Thioridazine]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Aripiprazole]] (5-hydroxytryptamine receptor 2A), [[Brexpiprazole]] (5-hydroxytryptamine receptor 2A), [[Clozapine]] (5-hydroxytryptamine receptor 2A), [[Iloperidone]] (5-hydroxytryptamine receptor 2A), [[Levomepromazine]] (D2-like dopamine receptor), [[Lumateperone]] (5-hydroxytryptamine receptor 2A)
- **Same ATC subgroup:** [[Levomepromazine]], [[Promazine]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
