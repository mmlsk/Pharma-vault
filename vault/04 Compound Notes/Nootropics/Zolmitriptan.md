---
type: compound
schema-version: 2
compound-id: zolmitriptan-compound
name: Zolmitriptan
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Serotonin 1b (5-HT1b) receptor agonist; Serotonin 1d (5-HT1d) receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1185
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: null
  unit: h
  notes: 'Zolmitriptan: 3 hours; N-Desmethylzolmitriptan: 3.5 hours'
protein-binding:
  value: 25.0
  value-max: null
  unit: percent
  notes: 25%
bioavailability:
  value: 40.0
  value-max: null
  notes: 'Oral: 40%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: ~65%; Feces: ~30%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2-mediated, to active metabolite; also MAO-A)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Zolmitriptan
  url: https://en.wikipedia.org/w/index.php?title=Zolmitriptan&oldid=1362428117
  revision: 1362428117
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1185
  pref-name: ZOLMITRIPTAN
  molecule-type: Small molecule
  first-approval: 1997
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N02CC03
  targets:
  - id: CHEMBL1898
    name: 5-hydroxytryptamine receptor 1B
    action: AGONIST
  - id: CHEMBL1983
    name: 5-hydroxytryptamine receptor 1D
    action: AGONIST
  properties:
    full-mwt: 287.36
    mw-freebase: 287.36
    alogp: 1.92
    psa: 57.36
    hba: 3
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.88
    full-molformula: C16H21N3O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: e6628b7a-0b63-4e6f-a5e7-2fa195265235
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e6628b7a-0b63-4e6f-a5e7-2fa195265235
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Zolmitriptan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zolmitriptan-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1185](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1185/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Triptan available orally and as a nasal spray, with an active metabolite that prolongs its effect.

## Mechanism

Serotonin 1b (5-HT1b) receptor agonist; Serotonin 1d (5-HT1d) receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1997
- **ATC N02CC03:** NERVOUS SYSTEM › ANTIMIGRAINE PREPARATIONS › Selective serotonin (5HT1) agonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 287.36 | 1.92 | 57.36 | 2/3 | 0 | C16H21N3O2 |

**Targets (ChEMBL curated mechanisms):**

- [[5-hydroxytryptamine receptor 1B (CHEMBL1898)|5-hydroxytryptamine receptor 1B]] - agonist · SINGLE PROTEIN
- [[5-hydroxytryptamine receptor 1D (CHEMBL1983)|5-hydroxytryptamine receptor 1D]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zolmitriptan*](https://en.wikipedia.org/w/index.php?title=Zolmitriptan&oldid=1362428117) (revision 1362428117, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 h | Zolmitriptan: 3 hours; N-Desmethylzolmitriptan: 3.5 hours |
| Protein binding | 25 % | 25% |
| Bioavailability | 40 % | Oral: 40% |
| Metabolism | hepatic | Liver (CYP1A2-mediated, to active metabolite; also MAO-A) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • N-Desmethylzolmitriptan; • Zolmitriptan N-oxide; • Indole acetic acid derivative |
| Excretion | mainly urinary | Urine: ~65%; Feces: ~30% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e6628b7a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e6628b7a-0b63-4e6f-a5e7-2fa195265235), label version 20260416. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 25)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Sumatriptan (Imitrex)]] (5-hydroxytryptamine receptor 1B; 5-hydroxytryptamine receptor 1D)
- **Same ATC subgroup:** [[Almotriptan]], [[Eletriptan]], [[Frovatriptan]], [[Lasmiditan]], [[Naratriptan]], [[Rizatriptan]], [[Sumatriptan (Imitrex)]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
