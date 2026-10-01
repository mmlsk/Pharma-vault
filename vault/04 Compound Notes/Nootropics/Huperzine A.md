---
type: compound
schema-version: 2
compound-id: huperzine-a-compound
name: Huperzine A
aliases: []
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: Acetylcholinesterase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL395280
chembl-max-phase: 2
half-life:
  value: 10.0
  value-max: 14.0
  unit: h
  notes: 10–14 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- cns-activity
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Huperzine A
  url: https://en.wikipedia.org/w/index.php?title=Huperzine_A&oldid=1373339309
  revision: 1373339309
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL395280
  pref-name: HUPERZINE A
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL220
    name: Acetylcholinesterase
    action: INHIBITOR
  properties:
    full-mwt: 242.32
    mw-freebase: 242.32
    alogp: 2.0
    psa: 58.88
    hba: 2
    hbd: 2
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.68
    full-molformula: C15H18N2O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Huperzine A

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `huperzine-a-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL395280](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL395280/) · max phase 2 · id via Wikipedia infobox

## Source summary

A potent, long-acting reversible acetylcholinesterase inhibitor from Huperzia serrata. Sold as a supplement but pharmacologically a drug, with the same cholinergic dose-dependence as the prescription inhibitors.

## Mechanism

Acetylcholinesterase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 242.32 | 2.0 | 58.88 | 2/2 | 0 | C15H18N2O |

**Targets (ChEMBL curated mechanisms):**

- [[Acetylcholinesterase (CHEMBL220)|Acetylcholinesterase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Huperzine A*](https://en.wikipedia.org/w/index.php?title=Huperzine_A&oldid=1373339309) (revision 1373339309, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–14 h | 10–14 hours |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Distigmine]] (Acetylcholinesterase), [[Echothiophate]] (Acetylcholinesterase), [[Isoflurophate]] (Acetylcholinesterase), [[Itopride]] (Acetylcholinesterase), [[Minaprine]] (Acetylcholinesterase), [[Propanidid]] (Acetylcholinesterase)

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Cholinergic Load]]
