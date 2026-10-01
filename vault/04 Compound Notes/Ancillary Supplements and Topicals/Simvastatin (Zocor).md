---
type: compound
schema-version: 2
compound-id: simvastatin-compound
name: Simvastatin (Zocor)
aliases:
- Simvastatin
- Zocor
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: HMG-CoA reductase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1064
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours for simvastatin and 1.9 hours for simvastatin acid
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 5.0
  value-max: null
  notes: 5%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Kidney 13%, faecal 60%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
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
pk-source:
  type: wikipedia-infobox
  title: Simvastatin
  url: https://en.wikipedia.org/w/index.php?title=Simvastatin&oldid=1373792994
  revision: 1373792994
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1064
  pref-name: SIMVASTATIN
  molecule-type: Small molecule
  first-approval: 1991
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C10AA01
  targets:
  - id: CHEMBL402
    name: 3-hydroxy-3-methylglutaryl-coenzyme A reductase
    action: INHIBITOR
  properties:
    full-mwt: 418.57
    mw-freebase: 418.57
    alogp: 4.59
    psa: 72.83
    hba: 5
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C25H38O5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3f6fad0b-0278-433f-86db-761b673a5803
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3f6fad0b-0278-433f-86db-761b673a5803
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Simvastatin (Zocor)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `simvastatin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Simvastatin, Zocor
- **ChEMBL:** [CHEMBL1064](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1064/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Lipophilic statin prodrug and the agent that first proved cholesterol lowering saves lives.

## Mechanism

HMG-CoA reductase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1991
- **Flags:** prodrug
- **ATC C10AA01:** CARDIOVASCULAR SYSTEM › LIPID MODIFYING AGENTS, PLAIN › HMG CoA reductase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 418.57 | 4.59 | 72.83 | 1/5 | 0 | C25H38O5 |

**Targets (ChEMBL curated mechanisms):**

- [[3-hydroxy-3-methylglutaryl-coenzyme A reductase (CHEMBL402)|3-hydroxy-3-methylglutaryl-coenzyme A reductase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Simvastatin*](https://en.wikipedia.org/w/index.php?title=Simvastatin&oldid=1373792994) (revision 1373792994, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours for simvastatin and 1.9 hours for simvastatin acid |
| Protein binding | 95 % | 95% |
| Bioavailability | 5 % | 5% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Kidney 13%, faecal 60% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3f6fad0b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3f6fad0b-0278-433f-86db-761b673a5803), label version 20260831. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Lovastatin (Mevacor)]] (3-hydroxy-3-methylglutaryl-coenzyme A reductase)
- **Same ATC subgroup:** [[Atorvastatin (Lipitor)]], [[Cerivastatin]], [[Fluvastatin]], [[Lovastatin (Mevacor)]], [[Pitavastatin (Livalo)]], [[Pravastatin (Pravachol)]], [[Rosuvastatin (Crestor)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
