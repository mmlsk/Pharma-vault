---
type: compound
schema-version: 2
compound-id: astemizole-compound
name: Astemizole
aliases: []
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
chembl-id: CHEMBL296419
chembl-max-phase: 4
half-life:
  value: 24.0
  value-max: null
  unit: h
  notes: 24 hours
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: ~96%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A4)
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Astemizole
  url: https://en.wikipedia.org/w/index.php?title=Astemizole&oldid=1376237533
  revision: 1376237533
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL296419
  pref-name: ASTEMIZOLE
  molecule-type: Small molecule
  first-approval: 1988
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - R06AX11
  targets:
  - id: CHEMBL231
    name: Histamine H1 receptor
    action: ANTAGONIST
  properties:
    full-mwt: 458.58
    mw-freebase: 458.58
    alogp: 5.35
    psa: 42.32
    hba: 5
    hbd: 1
    rtb: 8
    num-ro5-violations: 1
    qed-weighted: 0.39
    full-molformula: C28H31FN4O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Astemizole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `astemizole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL296419](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL296419/) · max phase 4 · id via source catalogue

## Source summary

Histamine H1 receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL296419).

## Mechanism

Histamine H1 receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1988
- **Flags:** withdrawn
- **ATC R06AX11:** RESPIRATORY SYSTEM › ANTIHISTAMINES FOR SYSTEMIC USE › Other antihistamines for systemic use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 458.58 | 5.35 | 42.32 | 1/5 | 1 | C28H31FN4O |

**Targets (ChEMBL curated mechanisms):**

- [[Histamine H1 receptor (CHEMBL231)|Histamine H1 receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Astemizole*](https://en.wikipedia.org/w/index.php?title=Astemizole&oldid=1376237533) (revision 1376237533, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24 h | 24 hours |
| Protein binding | 96 % | ~96% |
| Metabolism | hepatic | Hepatic (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Fecal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acrivastine]] (Histamine H1 receptor), [[Alcaftadine]] (Histamine H1 receptor), [[Betahistine]] (Histamine H1 receptor), [[Bilastine]] (Histamine H1 receptor), [[Chlorphenoxamine]] (Histamine H1 receptor), [[Cinnarizine]] (Histamine H1 receptor), [[Desloratadine]] (Histamine H1 receptor), [[Dibenzepin]] (Histamine H1 receptor), [[Dimenhydrinate]] (Histamine H1 receptor), [[Dimethindene]] (Histamine H1 receptor), [[Doxepin]] (Histamine H1 receptor), [[Doxepin, low dose (Silenor)]] (Histamine H1 receptor)
- **Same ATC subgroup:** [[Acrivastine]], [[Antazoline]], [[Azatadine]], [[Azelastine]], [[Bilastine]], [[Cyproheptadine]], [[Desloratadine]], [[Ebastine]], [[Epinastine]], [[Fexofenadine]], [[Ketotifen]], [[Loratadine]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
