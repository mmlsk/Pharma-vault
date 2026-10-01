---
type: compound
schema-version: 2
compound-id: risperidone-compound
name: Risperidone
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Dopamine D2 receptor antagonist; Serotonin 2a (5-HT2a) receptor antagonist; Serotonin 2c (5-HT2c) receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL85
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: null
  unit: h
  notes: 20 hours (by mouth), 3–6 days (IM)
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90% (parent compound), 77% (active metabolite)
bioavailability:
  value: 70.0
  value-max: null
  notes: 70% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urinary (70%) feces (14%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6 mediated to 9-hydroxyrisperidone)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Risperidone
  url: https://en.wikipedia.org/w/index.php?title=Risperidone&oldid=1375738316
  revision: 1375738316
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL85
  pref-name: RISPERIDONE
  molecule-type: Small molecule
  first-approval: 1993
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AX08
  targets:
  - id: CHEMBL224
    name: 5-hydroxytryptamine receptor 2A
    action: ANTAGONIST
  - id: CHEMBL225
    name: 5-hydroxytryptamine receptor 2C
    action: ANTAGONIST
  - id: CHEMBL217
    name: D(2) dopamine receptor
    action: ANTAGONIST
  properties:
    full-mwt: 410.49
    mw-freebase: 410.49
    alogp: 3.59
    psa: 64.16
    hba: 6
    hbd: 0
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.66
    full-molformula: C23H27FN4O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4ab6d256-6590-45be-a5df-f505987f96c3
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4ab6d256-6590-45be-a5df-f505987f96c3
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Okedi
  ema-number: EMEA/H/C/005406
  url: https://www.ema.europa.eu/en/documents/product-information/okedi-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Risperidone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `risperidone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL85](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL85/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## Mechanism

Dopamine D2 receptor antagonist; Serotonin 2a (5-HT2a) receptor antagonist; Serotonin 2c (5-HT2c) receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1993
- **Flags:** black-box warning
- **ATC N05AX08:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Other antipsychotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 410.49 | 3.59 | 64.16 | 0/6 | 0 | C23H27FN4O2 |

**Targets (ChEMBL curated mechanisms):**

- [[5-hydroxytryptamine receptor 2A (CHEMBL224)|5-hydroxytryptamine receptor 2A]] - antagonist · SINGLE PROTEIN
- [[5-hydroxytryptamine receptor 2C (CHEMBL225)|5-hydroxytryptamine receptor 2C]] - antagonist · SINGLE PROTEIN
- [[D(2) dopamine receptor (CHEMBL217)|D(2) dopamine receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Risperidone*](https://en.wikipedia.org/w/index.php?title=Risperidone&oldid=1375738316) (revision 1375738316, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20 h | 20 hours (by mouth), 3–6 days (IM) |
| Protein binding | 90 % | 90% (parent compound), 77% (active metabolite) |
| Bioavailability | 70 % | 70% (by mouth) |
| Metabolism | hepatic | Liver (CYP2D6 mediated to 9-hydroxyrisperidone) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urinary (70%) feces (14%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4ab6d256…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4ab6d256-6590-45be-a5df-f505987f96c3), label version 20260830. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 20, 21, 30)
> - protein-binding: consistent (label values: 77, 90)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Okedi*](https://www.ema.europa.eu/en/documents/product-information/okedi-epar-product-information_en.pdf) (EMEA/H/C/005406). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 3, 24)
> - protein-binding: consistent (SmPC values: 77, 90)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aripiprazole]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Brexpiprazole]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Clozapine]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Iloperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Loxapine]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C), [[Lumateperone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Mirtazapine]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C), [[Olanzapine]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C), [[Paliperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Thioridazine]] (5-hydroxytryptamine receptor 2A; 5-hydroxytryptamine receptor 2C), [[Thiothixene]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Agomelatine (Valdoxan)]] (5-hydroxytryptamine receptor 2C)
- **Same ATC subgroup:** [[Aripiprazole]], [[Brexpiprazole]], [[Cariprazine]], [[Iloperidone]], [[Paliperidone]], [[Pimavanserin]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
