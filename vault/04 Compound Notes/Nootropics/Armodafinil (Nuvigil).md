---
type: compound
schema-version: 2
compound-id: armodafinil-compound
name: Armodafinil (Nuvigil)
aliases:
- Armodafinil
- Nuvigil
cluster: Nootropics
group: nootropic
class: null
subclass: null
mechanism: Dopamine transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201192
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 17.0
  unit: h
  notes: 10–17 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Unknown (but for modafinil is moderate, primarily to albumin)
bioavailability:
  value: 40.0
  value-max: 65.0
  notes: Unknown (due to poor aqueous solubility; but modafinil is 40–65% based on urinary excretion)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Unknown (but modafinil is excreted 80% in urine and 1.0% in feces)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, including CYP3A4 and other enzymes (hydrolytic amidation, sulfoxidation, aromatic ring hydroxylation, and glucuronide conjugation)
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Armodafinil
  url: https://en.wikipedia.org/w/index.php?title=Armodafinil&oldid=1370773396
  revision: 1370773396
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201192
  pref-name: ARMODAFINIL
  molecule-type: Small molecule
  first-approval: 2007
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N06BA13
  targets:
  - id: CHEMBL238
    name: Sodium-dependent dopamine transporter
    action: INHIBITOR
  properties:
    full-mwt: 273.36
    mw-freebase: 273.36
    alogp: 2.01
    psa: 66.15
    hba: 2
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.85
    full-molformula: C15H15NO2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4128759d-ed7c-4130-b24c-a0541f2b9e7f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4128759d-ed7c-4130-b24c-a0541f2b9e7f
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Armodafinil (Nuvigil)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `armodafinil-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Armodafinil, Nuvigil
- **ChEMBL:** [CHEMBL1201192](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201192/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The longer-lived R-enantiomer of modafinil, with the same dopamine transporter mechanism and a flatter plasma curve. Differences from modafinil are pharmacokinetic rather than pharmacodynamic.

## Mechanism

Dopamine transporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2007
- **ATC N06BA13:** NERVOUS SYSTEM › PSYCHOSTIMULANTS, AGENTS USED FOR ADHD AND NOOTROPICS › Centrally acting sympathomimetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 273.36 | 2.01 | 66.15 | 1/2 | 0 | C15H15NO2S |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium-dependent dopamine transporter (CHEMBL238)|Sodium-dependent dopamine transporter]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Armodafinil*](https://en.wikipedia.org/w/index.php?title=Armodafinil&oldid=1370773396) (revision 1370773396, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–17 h | 10–17 hours |
| Protein binding | - | Unknown (but for modafinil is moderate, primarily to albumin) |
| Bioavailability | 40–65 % | Unknown (due to poor aqueous solubility; but modafinil is 40–65% based on urinary excretion) |
| Metabolism | hepatic | Liver, including CYP3A4 and other enzymes (hydrolytic amidation, sulfoxidation, aromatic ring hydroxylation, and glucuronide conjugation) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Armodafinil acid; • Modafinil sulfone |
| Excretion | - | Unknown (but modafinil is excreted 80% in urine and 1.0% in feces) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4128759d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4128759d-ed7c-4130-b24c-a0541f2b9e7f), label version 20260306. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4, 15)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amphetamine]] (Sodium-dependent dopamine transporter), [[Dextroamphetamine]] (Sodium-dependent dopamine transporter), [[MDMA]] (Sodium-dependent dopamine transporter), [[Methylphenidate (Ritalin - Concerta)|Methylphenidate (Ritalin / Concerta)]] (Sodium-dependent dopamine transporter), [[Modafinil (Provigil)]] (Sodium-dependent dopamine transporter), [[Serdexmethylphenidate]] (Sodium-dependent dopamine transporter)
- **Same ATC subgroup:** [[Amphetamine]], [[Atomoxetine (Strattera)]], [[Dexmethylphenidate]], [[Dextroamphetamine]], [[Lisdexamfetamine (Vyvanse)]], [[Methylphenidate (Ritalin - Concerta)|Methylphenidate (Ritalin / Concerta)]], [[Modafinil (Provigil)]], [[Solriamfetol (Sunosi)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
