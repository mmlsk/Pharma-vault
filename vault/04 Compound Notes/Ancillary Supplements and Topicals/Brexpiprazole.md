---
type: compound
schema-version: 2
compound-id: brexpiprazole-compound
name: Brexpiprazole
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Dopamine D2 receptor partial agonist; Serotonin 1a (5-HT1a) receptor partial agonist; Serotonin 2a (5-HT2a) receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2105760
chembl-max-phase: 4
half-life:
  value: 91.0
  value-max: null
  unit: h
  notes: 91 hours (brexpiprazole), 86 hours (major metabolite)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 95.0
  value-max: null
  notes: 95% (Tmax = 4 hours)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Feces (46%), urine (25%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mainly mediated by CYP3A4 and CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Brexpiprazole
  url: https://en.wikipedia.org/w/index.php?title=Brexpiprazole&oldid=1368777849
  revision: 1368777849
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2105760
  pref-name: BREXPIPRAZOLE
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AX16
  targets:
  - id: CHEMBL217
    name: D(2) dopamine receptor
    action: PARTIAL AGONIST
  - id: CHEMBL214
    name: 5-hydroxytryptamine receptor 1A
    action: PARTIAL AGONIST
  - id: CHEMBL224
    name: 5-hydroxytryptamine receptor 2A
    action: ANTAGONIST
  properties:
    full-mwt: 433.58
    mw-freebase: 433.58
    alogp: 4.72
    psa: 48.57
    hba: 5
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.43
    full-molformula: C25H27N3O2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6991c065-0f6e-433a-8f4f-796e0ece327f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6991c065-0f6e-433a-8f4f-796e0ece327f
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Rxulti
  ema-number: EMEA/H/C/003841
  url: https://www.ema.europa.eu/en/documents/product-information/rxulti-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/rxulti-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Brexpiprazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `brexpiprazole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2105760](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2105760/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## Mechanism

Dopamine D2 receptor partial agonist; Serotonin 1a (5-HT1a) receptor partial agonist; Serotonin 2a (5-HT2a) receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015
- **Flags:** black-box warning
- **ATC N05AX16:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Other antipsychotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 433.58 | 4.72 | 48.57 | 1/5 | 0 | C25H27N3O2S |

**Targets (ChEMBL curated mechanisms):**

- [[D(2) dopamine receptor (CHEMBL217)|D(2) dopamine receptor]] - partial agonist · SINGLE PROTEIN
- [[5-hydroxytryptamine receptor 1A (CHEMBL214)|5-hydroxytryptamine receptor 1A]] - partial agonist · SINGLE PROTEIN
- [[5-hydroxytryptamine receptor 2A (CHEMBL224)|5-hydroxytryptamine receptor 2A]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Brexpiprazole*](https://en.wikipedia.org/w/index.php?title=Brexpiprazole&oldid=1368777849) (revision 1368777849, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 91 h | 91 hours (brexpiprazole), 86 hours (major metabolite) |
| Protein binding | 99 % | >99% |
| Bioavailability | 95 % | 95% (Tmax = 4 hours) |
| Metabolism | hepatic | Liver (mainly mediated by CYP3A4 and CYP2D6) |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Feces (46%), urine (25%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6991c065…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6991c065-0f6e-433a-8f4f-796e0ece327f), label version 20260602. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 86, 91)
> - protein-binding: consistent (label values: 99)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Rxulti*](https://www.ema.europa.eu/en/documents/product-information/rxulti-epar-product-information_en.pdf) (EMEA/H/C/003841) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/rxulti-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 85.7, 91.4)
> - protein-binding: consistent (SmPC values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aripiprazole]] (5-hydroxytryptamine receptor 1A; 5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Clozapine]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Iloperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Lumateperone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Paliperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Risperidone]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Thiothixene]] (5-hydroxytryptamine receptor 2A; D(2) dopamine receptor), [[Benperidol]] (D(2) dopamine receptor), [[Cabergoline (Dostinex)]] (D(2) dopamine receptor), [[Chlorpromazine]] (5-hydroxytryptamine receptor 2A), [[Domperidone]] (D(2) dopamine receptor), [[Droperidol]] (5-hydroxytryptamine receptor 2A)
- **Same ATC subgroup:** [[Aripiprazole]], [[Cariprazine]], [[Iloperidone]], [[Paliperidone]], [[Pimavanserin]], [[Risperidone]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
