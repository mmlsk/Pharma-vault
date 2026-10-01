---
type: compound
schema-version: 2
compound-id: modafinil-compound
name: Modafinil (Provigil)
aliases:
- Modafinil
- Provigil
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
chembl-id: CHEMBL1373
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: 15.0
  unit: h
  notes: 'Modafinil: 12–15 hour; Armodafinil: 10–17 hour; Esmodafinil: 3–5 hour'
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: ~60% (mainly to albumin)
bioavailability:
  value: 40.0
  value-max: 65.0
  notes: 40–65 % (based on urinary excretion)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 80% (≤10% as modafinil, 35–51 % as modafinil acid); Feces: 1.0%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (amide hydrolysis, S-oxidation, aromatic ring hydroxylation, glucuronide conjugation; CYP1A2, CYP2B6, CYP2C9, CYP2C19, CYP3A4, CYP3A5 involved)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2B6
  - CYP2C19
  - CYP2C9
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2B6, CYP2C19, CYP2C9, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Modafinil
  url: https://en.wikipedia.org/w/index.php?title=Modafinil&oldid=1375967552
  revision: 1375967552
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1373
  pref-name: MODAFINIL
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N06BA07
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
pk-verification:
  source: fda-label
  status: consistent
  set-id: 1a309416-bd6a-45b1-982f-b689b097453d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1a309416-bd6a-45b1-982f-b689b097453d
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Modafinil (Provigil)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `modafinil-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Modafinil, Provigil
- **ChEMBL:** [CHEMBL1373](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1373/) · max phase 4 · id via Wikipedia infobox

## Source summary

Wake-promoting agent structurally unrelated to the amphetamines. A weak dopamine transporter inhibitor that occupies roughly half of striatal DAT at normal doses -- the finding that complicates its reputation as having no abuse liability.

## Mechanism

Dopamine transporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **ATC N06BA07:** NERVOUS SYSTEM › PSYCHOSTIMULANTS, AGENTS USED FOR ADHD AND NOOTROPICS › Centrally acting sympathomimetics

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
> Parsed from the [Wikipedia infobox of *Modafinil*](https://en.wikipedia.org/w/index.php?title=Modafinil&oldid=1375967552) (revision 1375967552, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–15 h | Modafinil: 12–15 hour; Armodafinil: 10–17 hour; Esmodafinil: 3–5 hour |
| Protein binding | 60 % | ~60% (mainly to albumin) |
| Bioavailability | 40–65 % | 40–65 % (based on urinary excretion) |
| Metabolism | hepatic | Liver (amide hydrolysis, S-oxidation, aromatic ring hydroxylation, glucuronide conjugation; CYP1A2, CYP2B6, CYP2C9, CYP2C19, CYP3A4, CYP3A5 involved) |
| CYP (metabolised by) | CYP1A2, CYP2B6, CYP2C19, CYP2C9, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Modafinil acid (35–65 %); Modafinil sulfone |
| Excretion | mainly urinary | Urine: 80% (≤10% as modafinil, 35–51 % as modafinil acid); Feces: 1.0% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 1a309416…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1a309416-bd6a-45b1-982f-b689b097453d), label version 20260903. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 15, 40)
> - protein-binding: consistent (label values: 60)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Amphetamine]] (Sodium-dependent dopamine transporter), [[Armodafinil (Nuvigil)]] (Sodium-dependent dopamine transporter), [[Dextroamphetamine]] (Sodium-dependent dopamine transporter), [[MDMA]] (Sodium-dependent dopamine transporter), [[Methylphenidate (Ritalin - Concerta)|Methylphenidate (Ritalin / Concerta)]] (Sodium-dependent dopamine transporter), [[Serdexmethylphenidate]] (Sodium-dependent dopamine transporter)
- **Same ATC subgroup:** [[Amphetamine]], [[Armodafinil (Nuvigil)]], [[Atomoxetine (Strattera)]], [[Dexmethylphenidate]], [[Dextroamphetamine]], [[Lisdexamfetamine (Vyvanse)]], [[Methylphenidate (Ritalin - Concerta)|Methylphenidate (Ritalin / Concerta)]], [[Solriamfetol (Sunosi)]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others), CYP2B6 (+12 others), CYP2C19 (+43 others), CYP2C9 (+40 others), CYP3A4 (+204 others), CYP3A5 (+13 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
