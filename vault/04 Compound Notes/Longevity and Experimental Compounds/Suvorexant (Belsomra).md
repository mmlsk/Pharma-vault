---
type: compound
schema-version: 2
compound-id: suvorexant-compound
name: Suvorexant (Belsomra)
aliases:
- Suvorexant
- Belsomra
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Orexin receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1083659
chembl-max-phase: 4
half-life:
  value: 12.2
  value-max: null
  unit: h
  notes: 12.2 hours (8–19 hours) (40 mg)
protein-binding:
  value: 99.5
  value-max: null
  unit: percent
  notes: 99.5%
bioavailability:
  value: 82.0
  value-max: null
  notes: 82% (10 mg; lower at higher doses)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 66%; Urine: 23%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A major, CYP2C19 minor)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Suvorexant
  url: https://en.wikipedia.org/w/index.php?title=Suvorexant&oldid=1368799943
  revision: 1368799943
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1083659
  pref-name: SUVOREXANT
  molecule-type: Small molecule
  first-approval: 2014
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N05CJ01
  targets:
  - id: CHEMBL3307226
    name: Orexin receptor
    action: ANTAGONIST
  properties:
    full-mwt: 450.93
    mw-freebase: 450.93
    alogp: 4.11
    psa: 80.29
    hba: 7
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.47
    full-molformula: C23H23ClN6O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: e5b72731-1acb-45b7-9c13-290ad12d3951
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e5b72731-1acb-45b7-9c13-290ad12d3951
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Suvorexant (Belsomra)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `suvorexant-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Suvorexant, Belsomra
- **ChEMBL:** [CHEMBL1083659](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1083659/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Dual orexin-receptor antagonist approved for insomnia; can cause next-day impairment, abnormal sleep behaviors, and additive sedation.

## Mechanism

Orexin receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014
- **ATC N05CJ01:** NERVOUS SYSTEM › HYPNOTICS AND SEDATIVES › Orexin receptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 450.93 | 4.11 | 80.29 | 0/7 | 0 | C23H23ClN6O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Orexin receptor (CHEMBL3307226)|Orexin receptor]] - antagonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Suvorexant*](https://en.wikipedia.org/w/index.php?title=Suvorexant&oldid=1368799943) (revision 1368799943, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12.2 h | 12.2 hours (8–19 hours) (40 mg) |
| Protein binding | 99.5 % | 99.5% |
| Bioavailability | 82 % | 82% (10 mg; lower at higher doses) |
| Metabolism | hepatic | Liver (CYP3A major, CYP2C19 minor) |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Hydroxysuvorexant (inactive) |
| Excretion | mainly non-renal | Feces: 66%; Urine: 23% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e5b72731…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e5b72731-1acb-45b7-9c13-290ad12d3951), label version 20250310. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 10, 11, 12, 15, 19, 22)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Almorexant]] (Orexin receptor), [[Daridorexant (Quviviq)]] (Orexin receptor), [[Filorexant]] (Orexin receptor), [[Orn-0829 Hydrate]] (Orexin receptor)
- **Same ATC subgroup:** [[Daridorexant (Quviviq)]], [[Lemborexant (Dayvigo)]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
