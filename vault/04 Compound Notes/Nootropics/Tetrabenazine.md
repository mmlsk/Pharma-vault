---
type: compound
schema-version: 2
compound-id: tetrabenazine-compound
name: Tetrabenazine
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
chembl-id: CHEMBL117785
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours parent compound (2 to 8 hours active metabolites)
protein-binding:
  value: 82.0
  value-max: 85.0
  unit: percent
  notes: 82–85%
bioavailability:
  value: null
  value-max: null
  notes: Low, extensive first pass effect
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (~75%) and fecal (7–16%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6-mediated)
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Tetrabenazine
  url: https://en.wikipedia.org/w/index.php?title=Tetrabenazine&oldid=1372155211
  revision: 1372155211
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL117785
  pref-name: TETRABENAZINE
  molecule-type: Small molecule
  first-approval: 2008
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N07XX06
  targets:
  - id: CHEMBL1893
    name: Synaptic vesicular amine transporter
    action: INHIBITOR
  properties:
    full-mwt: 317.43
    mw-freebase: 317.43
    alogp: 3.24
    psa: 38.77
    hba: 4
    hbd: 0
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.85
    full-molformula: C19H27NO3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5042f30c-c922-4835-bf6d-40905f2dc76c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5042f30c-c922-4835-bf6d-40905f2dc76c
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Tetrabenazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tetrabenazine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL117785](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL117785/) · max phase 4 · id via Wikipedia infobox

## Source summary

VMAT2 inhibitor for Huntington chorea, effective but limited by depression and parkinsonism.

## Mechanism

Synaptic vesicular amine transporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2008
- **Flags:** black-box warning
- **ATC N07XX06:** NERVOUS SYSTEM › OTHER NERVOUS SYSTEM DRUGS › Other nervous system drugs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 317.43 | 3.24 | 38.77 | 0/4 | 0 | C19H27NO3 |

**Targets (ChEMBL curated mechanisms):**

- [[Synaptic vesicular amine transporter (CHEMBL1893)|Synaptic vesicular amine transporter]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tetrabenazine*](https://en.wikipedia.org/w/index.php?title=Tetrabenazine&oldid=1372155211) (revision 1372155211, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours parent compound (2 to 8 hours active metabolites) |
| Protein binding | 82–85 % | 82–85% |
| Bioavailability | - | Low, extensive first pass effect |
| Metabolism | hepatic | Liver (CYP2D6-mediated) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (~75%) and fecal (7–16%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5042f30c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5042f30c-c922-4835-bf6d-40905f2dc76c), label version 20260705. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5, 7, 12, 14, 17.5)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Deutetrabenazine]] (Synaptic vesicular amine transporter), [[Dextroamphetamine]] (Synaptic vesicular amine transporter), [[Reserpine]] (Synaptic vesicular amine transporter), [[Valbenazine]] (Synaptic vesicular amine transporter)
- **Same ATC subgroup:** [[Amifampridine (3,4-Diaminopyridine)]], [[Deutetrabenazine]], [[Dextromethorphan]], [[Edaravone]], [[Inotersen (Tegsedi)]], [[Patisiran (Onpattro)]], [[Pitolisant (Wakix)]], [[Riluzole (Rilutek)]], [[Tafamidis (Vyndaqel)]], [[Troriluzole]], [[Valbenazine]], [[Vutrisiran (Amvuttra)]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
