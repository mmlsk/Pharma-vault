---
type: compound
schema-version: 2
compound-id: caffeine-compound
name: Caffeine
aliases: []
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: Adenosine receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL113
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 7.0
  unit: h
  notes: 'Adults: 3–7 hours; Infants (full term): 8 hours; Infants (premature): 100 hours'
protein-binding:
  value: 10.0
  value-max: 36.0
  unit: percent
  notes: 10–36%
bioavailability:
  value: 99.0
  value-max: null
  notes: 99%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (100%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Primary: CYP1A2; Minor: CYP2E1, CYP3A4,; CYP2C8, CYP2C9'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C8
  - CYP2C9
  - CYP2E1
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C8, CYP2C9, CYP2E1, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Caffeine
  url: https://en.wikipedia.org/w/index.php?title=Caffeine&oldid=1375462795
  revision: 1375462795
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL113
  pref-name: CAFFEINE
  molecule-type: Small molecule
  first-approval: 1948
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D11AX26
  - N06BC01
  targets:
  - id: CHEMBL2111329
    name: Adenosine receptor
    action: ANTAGONIST
  properties:
    full-mwt: 194.19
    mw-freebase: 194.19
    alogp: -1.03
    psa: 61.82
    hba: 6
    hbd: 0
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.54
    full-molformula: C8H10N4O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Peyona (previously Nymusa)
  ema-number: EMEA/H/C/001014
  url: https://www.ema.europa.eu/en/documents/product-information/peyona-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/peyona-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Caffeine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `caffeine-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL113](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL113/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The most widely used psychoactive compound in the world. Blocks adenosine receptors rather than adding stimulation, so it masks accumulated sleep pressure without repaying it. Also studied topically on the scalp against androgen-driven follicle suppression.

## Mechanism

Adenosine receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1948
- **ATC D11AX26:** DERMATOLOGICALS › OTHER DERMATOLOGICAL PREPARATIONS › Other dermatologicals
- **ATC N06BC01:** NERVOUS SYSTEM › PSYCHOSTIMULANTS, AGENTS USED FOR ADHD AND NOOTROPICS › Xanthine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 194.19 | -1.03 | 61.82 | 0/6 | 0 | C8H10N4O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Adenosine receptor (CHEMBL2111329)|Adenosine receptor]] - antagonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Caffeine*](https://en.wikipedia.org/w/index.php?title=Caffeine&oldid=1375462795) (revision 1375462795, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–7 h | Adults: 3–7 hours; Infants (full term): 8 hours; Infants (premature): 100 hours |
| Protein binding | 10–36 % | 10–36% |
| Bioavailability | 99 % | 99% |
| Metabolism | hepatic | Primary: CYP1A2; Minor: CYP2E1, CYP3A4,; CYP2C8, CYP2C9 |
| CYP (metabolised by) | CYP1A2, CYP2C8, CYP2C9, CYP2E1, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Paraxanthine 84%; Theobromine 12%; Theophylline 4% |
| Excretion | mainly urinary | Urine (100%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Peyona (previously Nymusa)*](https://www.ema.europa.eu/en/documents/product-information/peyona-epar-product-information_en.pdf) (EMEA/H/C/001014) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/peyona-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 5, 72, 96, 144)
> - protein-binding: consistent (SmPC values: 36)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Adenosine (IV)]] (Adenosine receptor)
- **Same ATC subgroup:** [[Brimonidine]], [[Diclofenac]], [[Finasteride]], [[Finasteride (topical spray solution)]], [[Hydroquinone]], [[Mequinol]], [[Minoxidil]], [[Minoxidil (oral, low dose)]], [[Monobenzone]], [[Propentofylline]], [[Tiratricol (TRIAC)]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2C8 (+15 others), CYP2C9 (+40 others), CYP2E1 (+8 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
