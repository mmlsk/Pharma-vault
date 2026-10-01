---
type: compound
schema-version: 2
compound-id: aripiprazole-compound
name: Aripiprazole
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Dopamine D2 receptor partial agonist; Serotonin 1a (5-HT1a) receptor partial agonist; Serotonin 2a (5-HT2a) receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1112
chembl-max-phase: 4
half-life:
  value: 75.0
  value-max: null
  unit: h
  notes: 75 hours (active metabolite is 94 hours)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 87.0
  value-max: null
  notes: 87%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: 0.01
  notes: Kidney (27%; <1% unchanged); feces (60%; 18% unchanged)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly via CYP3A4 and 2D6)
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
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Aripiprazole
  url: https://en.wikipedia.org/w/index.php?title=Aripiprazole&oldid=1375693144
  revision: 1375693144
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1112
  pref-name: ARIPIPRAZOLE
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AX12
  targets:
  - id: CHEMBL217
    name: D(2) dopamine receptor
    action: PARTIAL AGONIST
  - id: CHEMBL214
    name: 5-hydroxytryptamine receptor 1A
    action: PARTIAL AGONIST
  - id: CHEMBL224
    name: 5-hydroxytryptamine receptor 2A
    action: ANTAGONIST
  properties:
    full-mwt: 448.39
    mw-freebase: 448.39
    alogp: 4.86
    psa: 44.81
    hba: 4
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.61
    full-molformula: C23H27Cl2N3O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: b72c0cff-9f4d-42e2-b884-d06dea3e6378
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72c0cff-9f4d-42e2-b884-d06dea3e6378
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Abilify
  ema-number: EMEA/H/C/000471
  url: https://www.ema.europa.eu/en/documents/product-information/abilify-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/abilify-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Aripiprazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `aripiprazole-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1112](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1112/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Dopamine D2 partial agonist, the first of the third-generation antipsychotics, acting as a functional stabiliser rather than a blocker.

## Mechanism

Dopamine D2 receptor partial agonist; Serotonin 1a (5-HT1a) receptor partial agonist; Serotonin 2a (5-HT2a) receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **Flags:** black-box warning
- **ATC N05AX12:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Other antipsychotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 448.39 | 4.86 | 44.81 | 1/4 | 0 | C23H27Cl2N3O2 |

**Targets (ChEMBL curated mechanisms):**

- [[D(2) dopamine receptor (CHEMBL217)|D(2) dopamine receptor]] - partial agonist · SINGLE PROTEIN
- [[5-hydroxytryptamine receptor 1A (CHEMBL214)|5-hydroxytryptamine receptor 1A]] - partial agonist · SINGLE PROTEIN
- [[5-hydroxytryptamine receptor 2A (CHEMBL224)|5-hydroxytryptamine receptor 2A]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aripiprazole*](https://en.wikipedia.org/w/index.php?title=Aripiprazole&oldid=1375693144) (revision 1375693144, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 75 h | 75 hours (active metabolite is 94 hours) |
| Protein binding | 99 % | >99% |
| Bioavailability | 87 % | 87% |
| Metabolism | hepatic | Liver (mostly via CYP3A4 and 2D6) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Dehydroaripiprazole |
| Excretion | mainly non-renal · fe 0.01 | Kidney (27%; <1% unchanged); feces (60%; 18% unchanged) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set b72c0cff…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72c0cff-9f4d-42e2-b884-d06dea3e6378), label version 20260908. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 75, 94, 146)
> - protein-binding: consistent (label values: 99)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Abilify*](https://www.ema.europa.eu/en/documents/product-information/abilify-epar-product-information_en.pdf) (EMEA/H/C/000471) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/abilify-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 75, 146)
> - protein-binding: consistent (SmPC values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Brexpiprazole]] (5-hydroxytryptamine receptor 1A; 5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Clozapine]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Iloperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Lumateperone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Paliperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Risperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Thiothixene]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Benperidol]] (D(2) dopamine receptor), [[Cabergoline (Dostinex)]] (D(2) dopamine receptor), [[Chlorpromazine]] (5-hydroxytryptamine receptor 2A), [[Domperidone]] (D(2) dopamine receptor), [[Droperidol]] (5-hydroxytryptamine receptor 2A)
- **Same ATC subgroup:** [[Brexpiprazole]], [[Cariprazine]], [[Iloperidone]], [[Paliperidone]], [[Pimavanserin]], [[Risperidone]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
