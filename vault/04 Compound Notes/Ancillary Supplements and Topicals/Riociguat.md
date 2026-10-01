---
type: compound
schema-version: 2
compound-id: riociguat-compound
name: Riociguat
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Soluble guanylate cyclase positive allosteric modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2107834
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 h (patients); 7 h (healthy people)
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 94.0
  value-max: null
  notes: 94%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 33–45% via kidney,; 48–59% via bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP1A1, CYP3A4, CYP2C8, CYP2J2
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A1
  - CYP2C8
  - CYP2J2
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A1, CYP2C8, CYP2J2, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Riociguat
  url: https://en.wikipedia.org/w/index.php?title=Riociguat&oldid=1370555009
  revision: 1370555009
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: catalogue
  parent-id: CHEMBL2107834
  pref-name: RIOCIGUAT
  molecule-type: Small molecule
  first-approval: 2013
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C02KX05
  targets:
  - id: CHEMBL2111348
    name: Soluble guanylate cyclase
    action: POSITIVE ALLOSTERIC MODULATOR
  properties:
    full-mwt: 422.42
    mw-freebase: 422.42
    alogp: 2.44
    psa: 138.07
    hba: 9
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.51
    full-molformula: C20H19FN8O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7b57509a-3d5d-41d4-8fed-1471e26372a3
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7b57509a-3d5d-41d4-8fed-1471e26372a3
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Adempas
  ema-number: EMEA/H/C/002737
  url: https://www.ema.europa.eu/en/documents/product-information/adempas-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Riociguat

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `riociguat-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2107834](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2107834/) · max phase 4 · id via source catalogue

## Source summary

Soluble guanylate cyclase positive allosteric modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL2107834).

## Mechanism

Soluble guanylate cyclase positive allosteric modulator _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2013
- **Flags:** black-box warning
- **ATC C02KX05:** CARDIOVASCULAR SYSTEM › OTHER ANTIHYPERTENSIVES › Antihypertensives for pulmonary arterial hypertension

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 422.42 | 2.44 | 138.07 | 2/9 | 0 | C20H19FN8O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Soluble guanylate cyclase (CHEMBL2111348)|Soluble guanylate cyclase]] - positive allosteric modulator · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Riociguat*](https://en.wikipedia.org/w/index.php?title=Riociguat&oldid=1370555009) (revision 1370555009, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 h (patients); 7 h (healthy people) |
| Protein binding | 95 % | 95% |
| Bioavailability | 94 % | 94% |
| Metabolism | hepatic | CYP1A1, CYP3A4, CYP2C8, CYP2J2 |
| CYP (metabolised by) | CYP1A1, CYP2C8, CYP2J2, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-desmethylriociguat (active), glucuronide (inactive) |
| Excretion | mainly non-renal | 33–45% via kidney,; 48–59% via bile duct |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7b57509a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7b57509a-3d5d-41d4-8fed-1471e26372a3), label version 20260813. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 7, 12)
> - protein-binding: consistent (label values: 95)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Adempas*](https://www.ema.europa.eu/en/documents/product-information/adempas-epar-product-information_en.pdf) (EMEA/H/C/002737). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 7, 8.24, 12)
> - protein-binding: consistent (SmPC values: 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ataciguat (HMR1766)]] (Soluble guanylate cyclase), [[Cinaciguat]] (Soluble guanylate cyclase), [[Isosorbide Dinitrate]] (Soluble guanylate cyclase), [[Isosorbide Mononitrate]] (Soluble guanylate cyclase), [[Nitric Oxide]] (Soluble guanylate cyclase), [[Nitroglycerin]] (Soluble guanylate cyclase), [[Olinciguat]] (Soluble guanylate cyclase), [[Pentaerythritol Tetranitrate]] (Soluble guanylate cyclase), [[Praliciguat]] (Soluble guanylate cyclase), [[Runcaciguat]] (Soluble guanylate cyclase), [[Vericiguat (Verquvo)]] (Soluble guanylate cyclase)
- **Same ATC subgroup:** [[Ambrisentan]], [[Bosentan]], [[Macitentan]], [[Sitaxentan]]
- **Shared CYP substrate pool:** CYP1A1 (+2 others), CYP2C8 (+15 others), CYP2J2 (+3 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
