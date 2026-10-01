---
type: compound
schema-version: 2
compound-id: aspirin-compound
name: Aspirin
aliases:
- Acetylsalicylic acid
- ASA
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclooxygenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL25
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: Dose-dependent; 2–3 h for low doses (100 mg or less), 15–30 h for larger doses.
protein-binding:
  value: 80.0
  value-max: 90.0
  unit: percent
  notes: 80–90%
bioavailability:
  value: 80.0
  value-max: 100.0
  notes: 80–100%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Urine (80–100%), sweat, saliva, feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C19 and possibly CYP3A), some is also hydrolysed to salicylate in the gut wall.
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
  title: Aspirin
  url: https://en.wikipedia.org/w/index.php?title=Aspirin&oldid=1376620634
  revision: 1376620634
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL25
  pref-name: ASPIRIN
  molecule-type: Small molecule
  first-approval: 1950
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A01AD05
  - B01AC06
  - N02BA01
  - N02BA51
  - N02BA71
  targets:
  - id: CHEMBL2094253
    name: Cyclooxygenase
    action: INHIBITOR
  properties:
    full-mwt: 180.16
    mw-freebase: 180.16
    alogp: 1.31
    psa: 63.6
    hba: 3
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C9H8O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Aspirin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `aspirin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Acetylsalicylic acid, ASA
- **ChEMBL:** [CHEMBL25](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL25/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Irreversible platelet COX-1 inhibitor used for secondary cardiovascular prevention; bleeding risk usually outweighs benefit for unsupervised primary prevention.

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1950
- **ATC A01AD05:** ALIMENTARY TRACT AND METABOLISM › STOMATOLOGICAL PREPARATIONS › Other agents for local oral treatment
- **ATC B01AC06:** BLOOD AND BLOOD FORMING ORGANS › ANTITHROMBOTIC AGENTS › Platelet aggregation inhibitors excl. heparin
- **ATC N02BA01:** NERVOUS SYSTEM › OTHER ANALGESICS AND ANTIPYRETICS › Salicylic acid and derivatives
- **ATC N02BA51:** NERVOUS SYSTEM › OTHER ANALGESICS AND ANTIPYRETICS › Salicylic acid and derivatives
- **ATC N02BA71:** NERVOUS SYSTEM › OTHER ANALGESICS AND ANTIPYRETICS › Salicylic acid and derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 180.16 | 1.31 | 63.6 | 1/3 | 0 | C9H8O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Cyclooxygenase (CHEMBL2094253)|Cyclooxygenase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aspirin*](https://en.wikipedia.org/w/index.php?title=Aspirin&oldid=1376620634) (revision 1376620634, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | Dose-dependent; 2–3 h for low doses (100 mg or less), 15–30 h for larger doses. |
| Protein binding | 80–90 % | 80–90% |
| Bioavailability | 80–100 % | 80–100% |
| Metabolism | hepatic | Liver (CYP2C19 and possibly CYP3A), some is also hydrolysed to salicylate in the gut wall. |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Urine (80–100%), sweat, saliva, feces |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acemetacin]] (Cyclooxygenase), [[Acetaminophen]] (Cyclooxygenase), [[Aloxiprin]] (Cyclooxygenase), [[Benzydamine]] (Cyclooxygenase), [[Bismuth Subsalicylate]] (Cyclooxygenase), [[Clometacin]] (Cyclooxygenase), [[Dexibuprofen]] (Cyclooxygenase), [[Dexketoprofen]] (Cyclooxygenase), [[Diclofenac]] (Cyclooxygenase), [[Diflunisal]] (Cyclooxygenase), [[Esflurbiprofen]] (Cyclooxygenase), [[Fenclofenac]] (Cyclooxygenase)
- **Same ATC subgroup:** [[Abciximab]], [[Adrenaline (Epinephrine)]], [[Aloxiprin]], [[Benzydamine]], [[Beraprost]], [[Cangrelor]], [[Cilostazol]], [[Clopidogrel (Plavix)]], [[Diflunisal]], [[Dipyridamole]], [[Epoprostenol]], [[Eptifibatide]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
