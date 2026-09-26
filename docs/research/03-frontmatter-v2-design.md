# Frontmatter v2 design (Dataview-optimised)

> Źródło: wątek projektu Pharma-vault (tura 8), wyeksportowany 2026-09-26. Treść zachowana w oryginalnym brzmieniu; numerowane odwołania typu [1] odnoszą się do źródeł przywołanych w oryginalnym wątku (materiały w `data/raw/`).

Yes—below is a v2 design that stays compatible with your current schema while adding the new properties you asked for: half-life, dosage ranges, and cytochrome P450 interaction fields. A Markdown reference document containing the full template, example frontmatter, Dataview query examples, and JSON Schema was generated, but it could not be attached because file sharing was unavailable in this run.[1]

## v2 frontmatter

This version preserves the original core fields and extends them with Dataview-friendly structure, especially for pharmacokinetics and interaction screening. The main additions are `schema-version`, `half-life`, `dosage-ranges`, `cyp-interactions`, and `review-status`.[1]

```yaml
---
type: compound
schema-version: 2
name:
aliases: []
class:
subclass:
mechanism:
pathways: []
indications: []
off-label-contexts: []
regulatory-status:
evidence-level:
review-status:
status:

half-life:
  value:
  unit:
  notes:

dosage-ranges:
  oral:
    min:
    max:
    unit:
    frequency:
    notes:
  injectable:
    min:
    max:
    unit:
    frequency:
    notes:
  topical:
    min:
    max:
    unit:
    frequency:
    notes:

cyp-interactions:
  substrates: []
  inhibitors: []
  inducers: []
  transporters: []
  notes:

contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
source-status: source-summary-only
last-reviewed:
tags: [compound]
---
```


## Why it fits Dataview

The schema keeps the most commonly filtered properties at the top level, which makes table and list queries straightforward. It only nests grouped pharmacology where structure matters, namely half-life, route-based dosage ranges, and CYP interaction metadata.[1]

The most useful Dataview fields for sorting and maintenance are `class`, `pathways`, `evidence-level`, `review-status`, `risk-domains`, `last-reviewed`, and the CYP arrays. Those fields let you build quick views such as “all CYP3A4 substrates,” “all compounds needing review,” or “all notes with cardiovascular risk domains.”[1]

## Minimal-upgrade option

If you do not want a full schema shift, the document recommends keeping your existing template and adding only the highest-value fields first: `schema-version`, `half-life`, `dosage-ranges`, `cyp-interactions`, and `review-status`. That gives you most of the Dataview benefit without forcing a full note migration immediately.[1]

A minimal patch looks like this:[1]

```yaml
schema-version: 2
half-life:
  value:
  unit:
  notes:
dosage-ranges: {}
cyp-interactions:
  substrates: []
  inhibitors: []
  inducers: []
  transporters: []
  notes:
review-status:
```

## JSON Schema

A full JSON Schema version of the frontmatter was included in the generated document, covering required fields, arrays, nested dose-route objects, and the CYP interaction object structure. It defines `type` as `compound`, `schema-version` as `2`, and includes reusable route-dose definitions for oral, injectable, and topical entries.[1]

## Suggested next move

The cleanest rollout is to keep the current schema, add the new PK and CYP fields now, and only later decide whether to adopt the fuller v2 with `subclass`, `indications`, `off-label-contexts`, and `regulatory-status`. That approach avoids breaking your existing vault while still making Dataview much more useful.[1]

Would you like me to update the actual vault template file inside the ZIP structure to this v2 format?
