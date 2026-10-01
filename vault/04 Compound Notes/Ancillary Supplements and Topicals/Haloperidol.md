---
type: compound
schema-version: 2
compound-id: haloperidol-compound
name: Haloperidol
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: D2-like dopamine receptor inverse agonist; Serotonin 2a (5-HT2a) receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL54
chembl-max-phase: 4
half-life:
  value: 14.0
  value-max: 26.0
  unit: h
  notes: 14–26 hours (IV), 20.7 hours (IM), 14–37 hours (oral)
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: ~90%
bioavailability:
  value: 60.0
  value-max: 70.0
  notes: 60–70% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Biliary (hence in feces) and in urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver-mediated
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
  title: Haloperidol
  url: https://en.wikipedia.org/w/index.php?title=Haloperidol&oldid=1368777994
  revision: 1368777994
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL54
  pref-name: HALOPERIDOL
  molecule-type: Small molecule
  first-approval: 1967
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AD01
  targets:
  - id: CHEMBL224
    name: 5-hydroxytryptamine receptor 2A
    action: ANTAGONIST
  - id: CHEMBL2331075
    name: D2-like dopamine receptor
    action: INVERSE AGONIST
  properties:
    full-mwt: 375.87
    mw-freebase: 375.87
    alogp: 4.43
    psa: 40.54
    hba: 3
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.76
    full-molformula: C21H23ClFNO2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: a0751f2e-05ab-4ba9-9bae-7b791bf1a621
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a0751f2e-05ab-4ba9-9bae-7b791bf1a621
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Haloperidol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `haloperidol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL54](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL54/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## Mechanism

D2-like dopamine receptor inverse agonist; Serotonin 2a (5-HT2a) receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1967
- **Flags:** black-box warning
- **ATC N05AD01:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Butyrophenone derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 375.87 | 4.43 | 40.54 | 1/3 | 0 | C21H23ClFNO2 |

**Targets (ChEMBL curated mechanisms):**

- [[5-hydroxytryptamine receptor 2A (CHEMBL224)|5-hydroxytryptamine receptor 2A]] - antagonist · SINGLE PROTEIN
- [[D2-like dopamine receptor (CHEMBL2331075)|D2-like dopamine receptor]] - inverse agonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Haloperidol*](https://en.wikipedia.org/w/index.php?title=Haloperidol&oldid=1368777994) (revision 1368777994, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14–26 h | 14–26 hours (IV), 20.7 hours (IM), 14–37 hours (oral) |
| Protein binding | 90 % | ~90% |
| Bioavailability | 60–70 % | 60–70% (by mouth) |
| Metabolism | hepatic | Liver-mediated |
| Metabolites | - | • HPP+ |
| Excretion | - | Biliary (hence in feces) and in urine |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set a0751f2e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a0751f2e-05ab-4ba9-9bae-7b791bf1a621), label version 20260831. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Chlorpromazine]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Droperidol]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Haloperidol Decanoate]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Loxapine]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Olanzapine]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Thioridazine]] (5-hydroxytryptamine receptor 2A; D2-like dopamine receptor), [[Aripiprazole]] (5-hydroxytryptamine receptor 2A), [[Brexpiprazole]] (5-hydroxytryptamine receptor 2A), [[Clozapine]] (5-hydroxytryptamine receptor 2A), [[Iloperidone]] (5-hydroxytryptamine receptor 2A), [[Levomepromazine]] (D2-like dopamine receptor), [[Lumateperone]] (5-hydroxytryptamine receptor 2A)
- **Same ATC subgroup:** [[Benperidol]], [[Droperidol]], [[Lumateperone]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
