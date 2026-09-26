---
type: compound
schema-version: 2
compound-id: modafinil-compound
name: Modafinil
aliases: [Provigil, Modalert]
cluster: Nootropics
group: nootropic
class: wakefulness-promoting agent
subclass: atypical dopamine-transporter inhibitor
mechanism: weak DAT inhibition with downstream orexin, histamine and noradrenergic activation
pathways: [Catecholamines and Attention, Sleep-Wake Regulation]
indications: [narcolepsy, obstructive sleep apnoea residual sleepiness, shift-work disorder]
off-label-contexts: [cognitive enhancement in healthy users]
regulatory-status: prescription-only
evidence-level: A-approved
review-status: expanded
chembl-id:
chembl-max-phase: 4
half-life:
  value: 15
  unit: h
  notes: parent drug; R-enantiomer (armodafinil) has the longer half-life
protein-binding:
  value: 60
  unit: percent
  notes: mainly albumin
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: 0.1
  notes: metabolites (modafinil acid, modafinil sulfone) excreted renally
hepatic-clearance:
  primary-route: true
  extraction-ratio:
  notes: amide hydrolysis plus CYP3A4-mediated oxidation
dosage-ranges: {}
cyp-interactions:
  substrates: [CYP3A4]
  inhibitors: [CYP2C19]
  inducers: [CYP3A4]
  transporters: []
  notes: induction can reduce hormonal-contraceptive efficacy; CYP2C19 inhibition may raise exposure to CYP2C19 substrates
contraindications: [hypersensitivity to modafinil or armodafinil]
major-interactions: [hormonal contraceptives, CYP2C19 substrates, other sympathomimetics]
monitoring: [blood pressure, heart rate, sleep, rash (SJS/TEN warning)]
risk-domains: [cardiovascular-load, sleep-disruption, anti-doping]
group-risk-triage: [cns-activity, evidence-limited]
source-status: partially-verified
last-reviewed: 2026-09-26
tags: [compound, example]
---

# Modafinil — worked example of a curated v2 note

> [!note] Example note used by `scripts/validate.py` to prove the template validates. Educational; no dosing guidance.

Routed hubs: [[Stimulant and Cardiovascular Load]] · [[Stacking and Interaction Risks]]
