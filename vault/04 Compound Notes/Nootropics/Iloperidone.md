---
type: compound
schema-version: 2
compound-id: iloperidone-compound
name: Iloperidone
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Dopamine D2 receptor antagonist; Serotonin 2a (5-HT2a) receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL14376
chembl-max-phase: 4
half-life:
  value: 18.0
  value-max: 33.0
  unit: h
  notes: 18–33 hours
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: ~97%
bioavailability:
  value: 96.0
  value-max: null
  notes: 96% (oral; Tmax = 2–4 hours)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: urine (45.1–58.2%) and feces (19.9–22.1%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP2D6-mediated hydroxylation and CYP3A4-mediated O-demethylation)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Iloperidone
  url: https://en.wikipedia.org/w/index.php?title=Iloperidone&oldid=1324495639
  revision: 1324495639
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL14376
  pref-name: ILOPERIDONE
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AX14
  targets:
  - id: CHEMBL217
    name: D(2) dopamine receptor
    action: ANTAGONIST
  - id: CHEMBL224
    name: 5-hydroxytryptamine receptor 2A
    action: ANTAGONIST
  properties:
    full-mwt: 426.49
    mw-freebase: 426.49
    alogp: 4.83
    psa: 64.8
    hba: 6
    hbd: 0
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.38
    full-molformula: C24H27FN2O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 33f60b40-3fca-11de-8f56-0002a5d5c51b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=33f60b40-3fca-11de-8f56-0002a5d5c51b
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Iloperidone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `iloperidone-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL14376](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL14376/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Atypical antipsychotic with strong alpha-1 blockade requiring slow titration for orthostatic hypotension.

## Mechanism

Dopamine D2 receptor antagonist; Serotonin 2a (5-HT2a) receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009
- **Flags:** black-box warning
- **ATC N05AX14:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Other antipsychotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 426.49 | 4.83 | 64.8 | 0/6 | 0 | C24H27FN2O4 |

**Targets (ChEMBL curated mechanisms):**

- [[D(2) dopamine receptor (CHEMBL217)|D(2) dopamine receptor]] - antagonist · SINGLE PROTEIN
- [[5-hydroxytryptamine receptor 2A (CHEMBL224)|5-hydroxytryptamine receptor 2A]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Iloperidone*](https://en.wikipedia.org/w/index.php?title=Iloperidone&oldid=1324495639) (revision 1324495639, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 18–33 h | 18–33 hours |
| Protein binding | 97 % | ~97% |
| Bioavailability | 96 % | 96% (oral; Tmax = 2–4 hours) |
| Metabolism | hepatic | Hepatic (CYP2D6-mediated hydroxylation and CYP3A4-mediated O-demethylation) |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | urine (45.1–58.2%) and feces (19.9–22.1%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 33f60b40…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=33f60b40-3fca-11de-8f56-0002a5d5c51b), label version 20260506. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 23, 31)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aripiprazole]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Brexpiprazole]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Clozapine]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Lumateperone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Paliperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Risperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Thiothixene]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Benperidol]] (D(2) dopamine receptor), [[Cabergoline (Dostinex)]] (D(2) dopamine receptor), [[Chlorpromazine]] (5-hydroxytryptamine receptor 2A), [[Domperidone]] (D(2) dopamine receptor), [[Droperidol]] (5-hydroxytryptamine receptor 2A)
- **Same ATC subgroup:** [[Aripiprazole]], [[Brexpiprazole]], [[Cariprazine]], [[Paliperidone]], [[Pimavanserin]], [[Risperidone]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
