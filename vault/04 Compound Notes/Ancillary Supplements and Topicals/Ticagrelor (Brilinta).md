---
type: compound
schema-version: 2
compound-id: ticagrelor-compound
name: Ticagrelor (Brilinta)
aliases:
- Ticagrelor
- Brilinta
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Purinergic receptor P2Y12 negative allosteric modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL398435
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: null
  unit: h
  notes: 7 hrs (ticagrelor), 8.5 hrs (active metabolite AR-C124910XX)
protein-binding:
  value: 99.7
  value-max: null
  unit: percent
  notes: '>99.7%'
bioavailability:
  value: 36.0
  value-max: null
  notes: 36%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Ticagrelor
  url: https://en.wikipedia.org/w/index.php?title=Ticagrelor&oldid=1370064813
  revision: 1370064813
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL398435
  pref-name: TICAGRELOR
  molecule-type: Small molecule
  first-approval: 2010
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - B01AC24
  targets:
  - id: CHEMBL2001
    name: P2Y purinoceptor 12
    action: NEGATIVE ALLOSTERIC MODULATOR
  properties:
    full-mwt: 522.58
    mw-freebase: 522.58
    alogp: 2.01
    psa: 138.44
    hba: 11
    hbd: 4
    rtb: 10
    num-ro5-violations: 2
    qed-weighted: 0.23
    full-molformula: C23H28F2N6O4S
pk-verification:
  source: fda-label
  status: consistent
  set-id: 557351f1-47b7-216d-e063-6394a90afb51
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=557351f1-47b7-216d-e063-6394a90afb51
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Ticagrelor (Brilinta)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ticagrelor-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Ticagrelor, Brilinta
- **ChEMBL:** [CHEMBL398435](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL398435/) · max phase 4 · id via Wikipedia infobox

## Source summary

Reversible P2Y12 antiplatelet used after acute coronary syndromes; dyspnea, bradyarrhythmia, and bleeding are notable.

## Mechanism

Purinergic receptor P2Y12 negative allosteric modulator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2010
- **Flags:** black-box warning
- **ATC B01AC24:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Platelet aggregation inhibitors excl. heparin

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 522.58 | 2.01 | 138.44 | 4/11 | 2 | C23H28F2N6O4S |

**Targets (ChEMBL curated mechanisms):**

- [[P2Y purinoceptor 12 (CHEMBL2001)|P2Y purinoceptor 12]] - negative allosteric modulator · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ticagrelor*](https://en.wikipedia.org/w/index.php?title=Ticagrelor&oldid=1370064813) (revision 1370064813, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7 h | 7 hrs (ticagrelor), 8.5 hrs (active metabolite AR-C124910XX) |
| Protein binding | 99.7 % | >99.7% |
| Bioavailability | 36 % | 36% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Bile duct |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 557351f1…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=557351f1-47b7-216d-e063-6394a90afb51), label version 20260901. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 7, 9)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cangrelor]] (P2Y purinoceptor 12), [[Elinogrel]] (P2Y purinoceptor 12)
- **Same ATC subgroup:** [[Abciximab]], [[Aloxiprin]], [[Aspirin]], [[Beraprost]], [[Cangrelor]], [[Cilostazol]], [[Clopidogrel (Plavix)]], [[Dipyridamole]], [[Epoprostenol]], [[Eptifibatide]], [[Prasugrel (Effient)]], [[Selexipag]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
