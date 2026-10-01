---
type: compound
schema-version: 2
compound-id: tegaserod-compound
name: Tegaserod
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL76370
chembl-max-phase: 4
half-life:
  value: 11.0
  value-max: null
  unit: h
  notes: 11 ± 5 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 10.0
  value-max: null
  notes: 10%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Fecal and renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Gastric and hepatic
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
- identity-formula-match
pk-source:
  type: wikipedia-infobox
  title: Tegaserod
  url: https://en.wikipedia.org/w/index.php?title=Tegaserod&oldid=1335304481
  revision: 1335304481
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL76370
  pref-name: TEGASEROD
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - A06AX06
  targets: []
  properties:
    full-mwt: 301.39
    mw-freebase: 301.39
    alogp: 2.81
    psa: 85.29
    hba: 3
    hbd: 4
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.27
    full-molformula: C16H23N5O
  identity-check: formula-match
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Tegaserod

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tegaserod-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL76370](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL76370/) · max phase 4 · id via Wikipedia infobox · structure check: ≈ same formula, different InChIKey (tautomer/representation)

## Source summary

5-HT4 partial agonist withdrawn in 2007 for cardiovascular events, later reintroduced with restrictions.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **Flags:** withdrawn
- **ATC A06AX06:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR CONSTIPATION › Other drugs for constipation

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 301.39 | 2.81 | 85.29 | 4/3 | 0 | C16H23N5O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tegaserod*](https://en.wikipedia.org/w/index.php?title=Tegaserod&oldid=1335304481) (revision 1335304481, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11 h | 11 ± 5 hours |
| Protein binding | 98 % | 98% |
| Bioavailability | 10 % | 10% |
| Metabolism | hepatic | Gastric and hepatic |
| Excretion | - | Fecal and renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Linaclotide]], [[Lubiprostone]], [[Plecanatide]], [[Prucalopride]], [[Tenapanor]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
