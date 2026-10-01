---
type: compound
schema-version: 2
compound-id: fentanyl-compound
name: Fentanyl
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: Mu opioid receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL596
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: null
  unit: min
  notes: 'IV: 6 mins (T1/2 α); 1 hours (T1/2 β); 16 hours (T1/2 ɣ); Intranasal: 15–25 hours; Transdermal: 20–27 hours; Sublingual: 5–13.5 hours; Buccal: 3.2–6.4 hours'
protein-binding:
  value: 80.0
  value-max: 85.0
  unit: percent
  notes: 80–85%
bioavailability:
  value: 90.0
  value-max: 92.0
  notes: 'Transdermal: 90–92%; Intranasal: 89%; Buccal: 51% (tablets), 71% (film); Sublingual: 54% (Abstral tablets), 76% (spray); Oral: 35%; Inhalation: 56–96%; IM & IV: 100%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.1
  notes: Mostly urinary (metabolites, < 10% unchanged drug)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, primarily by CYP3A4; Norfentanyl; Despropionylfentanyl (minor); Hydroxyfentanyl (minor); Hydroxynorfentanyl (minor secondary metabolite)
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
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
- chembl-profile
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Fentanyl
  url: https://en.wikipedia.org/w/index.php?title=Fentanyl&oldid=1376528965
  revision: 1376528965
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL596
  pref-name: FENTANYL
  molecule-type: Small molecule
  first-approval: 1968
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N01AH01
  - N01AH51
  - N02AB03
  targets:
  - id: CHEMBL233
    name: Mu-type opioid receptor
    action: AGONIST
  properties:
    full-mwt: 336.48
    mw-freebase: 336.48
    alogp: 4.14
    psa: 23.55
    hba: 2
    hbd: 0
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C22H28N2O
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 73897c38-e4ec-40bc-9f41-3359ee23a5a8
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=73897c38-e4ec-40bc-9f41-3359ee23a5a8
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: no-label-value
---

# Fentanyl

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fentanyl-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL596](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL596/) · max phase 4 · id via Wikipedia infobox

## Source summary

Highly lipophilic synthetic opioid with rapid brain entry, used clinically by every route and responsible for most opioid overdose deaths.

## Mechanism

Mu opioid receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1968
- **Flags:** black-box warning
- **ATC N01AH01:** NERVOUS SYSTEM › ANESTHETICS, GENERAL › Opioid anesthetics
- **ATC N01AH51:** NERVOUS SYSTEM › ANESTHETICS, GENERAL › Opioid anesthetics
- **ATC N02AB03:** NERVOUS SYSTEM › OPIOIDS › Phenylpiperidine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 336.48 | 4.14 | 23.55 | 0/2 | 0 | C22H28N2O |

**Targets (ChEMBL curated mechanisms):**

- [[Mu-type opioid receptor (CHEMBL233)|Mu-type opioid receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fentanyl*](https://en.wikipedia.org/w/index.php?title=Fentanyl&oldid=1376528965) (revision 1376528965, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 min | IV: 6 mins (T1/2 α); 1 hours (T1/2 β); 16 hours (T1/2 ɣ); Intranasal: 15–25 hours; Transdermal: 20–27 hours; Sublingual: 5–13.5 hours; Buccal: 3.2–6.4 hours |
| Protein binding | 80–85 % | 80–85% |
| Bioavailability | 90–92 % | Transdermal: 90–92%; Intranasal: 89%; Buccal: 51% (tablets), 71% (film); Sublingual: 54% (Abstral tablets), 76% (spray); Oral: 35%; Inhalation: 56–96%; IM & IV: 100% |
| Metabolism | hepatic | Liver, primarily by CYP3A4; Norfentanyl; Despropionylfentanyl (minor); Hydroxyfentanyl (minor); Hydroxynorfentanyl (minor secondary metabolite) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.1 | Mostly urinary (metabolites, < 10% unchanged drug) |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 73897c38…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=73897c38-e4ec-40bc-9f41-3359ee23a5a8), label version 20260407. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 23.5, 34, 34.4)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Buprenorphine]] (Mu-type opioid receptor), [[Dezocine]] (Mu-type opioid receptor), [[Diamorphine (Heroin)]] (Mu-type opioid receptor), [[Eluxadoline]] (Mu-type opioid receptor), [[Oliceridine]] (Mu-type opioid receptor), [[Oxycodone]] (Mu-type opioid receptor), [[Samidorphan]] (Mu-type opioid receptor)
- **Same ATC subgroup:** [[Alfentanil]], [[Pethidine (Meperidine)]], [[Remifentanil]], [[Sufentanil]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
