---
type: compound
schema-version: 2
compound-id: doxepin-low-dose-compound
name: Doxepin, low dose (Silenor)
aliases:
- Doxepin, low dose
- Silenor
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Histamine H1 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1628227
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: 24.0
  unit: h
  notes: 'Doxepin: 8–24 hours (mean 17 hours); Nordoxepin: 28–31 hours'
protein-binding:
  value: 76.0
  value-max: null
  unit: percent
  notes: 76%
bioavailability:
  value: 13.0
  value-max: 45.0
  notes: 13–45% (mean 29%)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Kidney: ~50%; Feces: minor'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6, CYP2C19)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Doxepin
  url: https://en.wikipedia.org/w/index.php?title=Doxepin&oldid=1357572789
  revision: 1357572789
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1628227
  pref-name: DOXEPIN
  molecule-type: Small molecule
  first-approval: 1969
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - D04AX01
  - N06AA12
  targets:
  - id: CHEMBL231
    name: Histamine H1 receptor
    action: ANTAGONIST
  properties:
    full-mwt: 279.38
    mw-freebase: 279.38
    alogp: 3.96
    psa: 12.47
    hba: 2
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.84
    full-molformula: C19H21NO
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: b198ade7-fe78-437e-82b4-693dfe45ab51
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b198ade7-fe78-437e-82b4-693dfe45ab51
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Doxepin, low dose (Silenor)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `doxepin-low-dose-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Doxepin, low dose, Silenor
- **ChEMBL:** [CHEMBL1628227](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1628227/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Tricyclic antidepressant repurposed at 3 mg and 6 mg, doses at which it acts as a nearly pure histamine H1 antagonist.

## Mechanism

Histamine H1 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1969
- **Flags:** black-box warning
- **ATC D04AX01:** DERMATOLOGICALS › ANTIPRURITICS, INCL. ANTIHISTAMINES, ANESTHETICS, ETC. › Other antipruritics
- **ATC N06AA12:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Non-selective monoamine reuptake inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 279.38 | 3.96 | 12.47 | 0/2 | 0 | C19H21NO |

**Targets (ChEMBL curated mechanisms):**

- [[Histamine H1 receptor (CHEMBL231)|Histamine H1 receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Doxepin*](https://en.wikipedia.org/w/index.php?title=Doxepin&oldid=1357572789) (revision 1357572789, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–24 h | Doxepin: 8–24 hours (mean 17 hours); Nordoxepin: 28–31 hours |
| Protein binding | 76 % | 76% |
| Bioavailability | 13–45 % | 13–45% (mean 29%) |
| Metabolism | hepatic | Liver (CYP2D6, CYP2C19) |
| CYP (metabolised by) | CYP2C19, CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Nordoxepin, glucuronide conjugates |
| Excretion | mainly urinary | Kidney: ~50%; Feces: minor |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set b198ade7…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b198ade7-fe78-437e-82b4-693dfe45ab51), label version 20260618. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 15.3, 31)
> - protein-binding: consistent (label values: 80)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Doxepin]]
- **Shared target:** [[Acrivastine]] (Histamine H1 receptor), [[Alcaftadine]] (Histamine H1 receptor), [[Astemizole]] (Histamine H1 receptor), [[Betahistine]] (Histamine H1 receptor), [[Bilastine]] (Histamine H1 receptor), [[Chlorphenoxamine]] (Histamine H1 receptor), [[Cinnarizine]] (Histamine H1 receptor), [[Desloratadine]] (Histamine H1 receptor), [[Dibenzepin]] (Histamine H1 receptor), [[Dimenhydrinate]] (Histamine H1 receptor), [[Dimethindene]] (Histamine H1 receptor), [[Doxepin]] (Histamine H1 receptor)
- **Same ATC subgroup:** [[Amineptine]], [[Amitriptyline]], [[Amoxapine]], [[Clomipramine]], [[Desipramine]], [[Dibenzepin]], [[Dothiepin]], [[Doxepin]], [[Imipramine]], [[Maprotiline]], [[Nortriptyline]], [[Protriptyline]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
