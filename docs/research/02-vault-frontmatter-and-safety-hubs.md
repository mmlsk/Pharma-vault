# Vault frontmatter, safety hubs and compound clusters

> Źródło: wątek projektu Pharma-vault (tura 7), wyeksportowany 2026-09-26. Treść zachowana w oryginalnym brzmieniu; numerowane odwołania typu [1] odnoszą się do źródeł przywołanych w oryginalnym wątku (materiały w `data/raw/`).

The vault uses a compact, practical frontmatter schema and organizes risk review around one main stacking hub plus four focused safety notes. The main compound coverage is grouped into seven top-level clusters, and the template is easy to extend with Obsidian properties, Dataview fields, and your own workflow metadata.[1][2][3]

## Frontmatter structure

The compound template frontmatter currently includes `type`, `aliases`, `class`, `pathways`, `evidence-level`, `status`, `risk-domains`, and `tags`.[1]
That gives you one identity field (`type`), several classification fields (`class`, `pathways`, `risk-domains`), two workflow/evaluation fields (`evidence-level`, `status`), plus Obsidian-friendly organizational fields (`aliases`, `tags`).[1]

A typical note based on the template starts like this:[1]

```yaml
---
type: compound
aliases: []
class:
pathways: []
evidence-level:
status:
risk-domains: []
tags: [compound]
---
```

## Safety hubs

The main safety hub is `Stacking and Interaction Risks`, and it is explicitly framed around overlap rather than “building the perfect stack.” It tells you to evaluate duplicated mechanisms, overlapping adverse-effect domains, contraindications, pharmacokinetic interactions, and monitoring requirements before combining compounds.[2]

That central note then routes risk review into four focused safety hubs: `Cholinergic Load`, `Stimulant and Cardiovascular Load`, `Hormonal Axis Suppression`, and `Experimental and Evidence-Limited Compounds`. The structure is useful because it separates mechanism-specific collision risks from broader evidence-quality problems.[3][2]

### Main interaction warnings

The vault’s main warning categories are:[2]

- Multiple cholinergic contributors can raise adverse effects, so cholinergic overlap is treated as a dedicated risk domain.[2]
- Stimulants, wakefulness agents, thyroid-active compounds, beta-agonists, and some weight-loss drugs can add cardiovascular and sleep burden.[2]
- Androgens, SARMs, SERMs, gonadotropins, aromatase inhibitors, and GnRH agents are grouped as a feedback-regulated endocrine-risk problem rather than isolated compounds.[2]
- Research chemicals and preclinical peptides are flagged as uncertainty-heavy, meaning anecdotal stacking cannot compensate for missing human evidence.[2]

## Compound clusters

The vault’s top-level compound clusters are these seven notes: `Nootropics`, `Metabolic and Incretin Agents`, `Growth Hormone and Peptide Agents`, `Androgens SARMs and PCT`, `Cardiovascular and Lipid Agents`, `Longevity and Experimental Compounds`, and `Ancillary Supplements and Topicals`.[3]

Those are complemented by three interpretive concept notes and seven pathway notes, so the compound notes are meant to be read alongside mechanism and safety context rather than as isolated entries. That makes the vault more like a navigable knowledge system than a flat drug index.[3]

## Template customization

The current template already supports structured expansion with sections for identity, source summary, evidence boundaries, safety and interactions, and cross-links to the interpretation and safety hubs. It is designed so each compound note can move from “source-derived stub” to a full evidence-tracking note without changing the overall format.[1]

The most useful upgrades would be:

- Add `mechanism:` for a one-line pharmacology summary.
- Add `indications:` and `off-label-contexts:` to separate approved use from community use.
- Add `contraindications:` and `major-interactions:` for quick clinical screening.
- Add `monitoring:` for labs, vitals, ECG, symptom domains, or follow-up requirements.
- Add `evidence-notes:` or `key-studies:` for brief source tracking.
- Add `last-reviewed:` and `review-status:` for maintenance.
- Add `regulatory-status:` if you want a clearer distinction between approved, prescription-only, investigational, banned, withdrawn, or supplement-market status.

A stronger customized frontmatter block could look like this:[1]

```yaml
---
type: compound
aliases: []
class:
mechanism:
pathways: []
indications: []
off-label-contexts: []
evidence-level:
review-status:
regulatory-status:
risk-domains: []
contraindications: []
major-interactions: []
monitoring: []
last-reviewed:
tags: [compound]
---
```

## Practical Obsidian use

For Obsidian specifically, `pathways`, `risk-domains`, `evidence-level`, and `review-status` are the best fields to standardize first, because they will immediately improve filtering, Graph View grouping, and Dataview queries.[3][1]

A simple approach is to treat:
- `pathways` as mechanism links or controlled labels,
- `risk-domains` as shared safety buckets,
- `evidence-level` as a fixed scale such as `preclinical`, `mixed-human`, `clinical-use`, `outcome-supported`,
- `status` or `review-status` as workflow labels such as `stub`, `expanded`, `verified`, `needs-update`.[1]

Would you like a revised v2 compound template optimized specifically for Dataview and Graph View?
