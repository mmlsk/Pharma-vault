# Current state, planned changes and long-term vision

> Źródło: wątek projektu Pharma-vault (tura 22), wyeksportowany 2026-09-26. Treść zachowana w oryginalnym brzmieniu; numerowane odwołania typu [1] odnoszą się do źródeł przywołanych w oryginalnym wątku (materiały w `data/raw/`).

Based on everything established across this thread, here is a consolidated three-part breakdown: what currently exists, what has been planned, and the long-term vision.

## Current state

| Category | Element | Description | Technology / Format | Status |
|---|---|---|---|---|
| Content structure | Compound/substance notes | Individual entries for nootropics, peptides, hormones, cardiovascular agents, etc. | Markdown with YAML frontmatter | Implemented |
| Content structure | Frontmatter schema | `type`, `aliases`, `class`, `pathways`, `evidence-level`, `status`, `risk-domains`, `tags` | YAML | Implemented |
| Content structure | Compound clusters | Nootropics, Metabolic/Incretin Agents, GH/Peptide Agents, Androgens/SARMs/PCT, Cardiovascular/Lipid Agents, Longevity/Experimental Compounds, Ancillary Supplements | Markdown folders/notes | Implemented (7 clusters) |
| Content structure | Interpretive concept notes | Cross-cutting synthesis notes distinct from compound entries | Markdown | Implemented (3 notes) |
| Content structure | Pathway notes | Mechanism-level notes linking compounds to biological pathways | Markdown | Implemented (7 notes) |
| Safety layer | Main stacking hub | "Stacking and Interaction Risks" — central overlap-analysis note | Markdown, wikilinks | Implemented |
| Safety layer | Focused safety hubs | Cholinergic Load, Stimulant/Cardiovascular Load, Hormonal Axis Suppression, Experimental/Evidence-Limited Compounds | Markdown, wikilinks | Implemented (4 hubs) |
| Visualization | Interactive knowledge graph | Canvas-based node/edge visualization with pan/zoom, search, filtering, node inspection | Standalone HTML + Canvas + JS | Implemented (v1) |
| Visualization | Cluster grouping | Visual grouping by mechanism/domain (nootropics, metabolic, GH/peptide, longevity, risk hubs) | Embedded in HTML/JS | Implemented |
| Delivery | Downloadable HTML artifact | Self-contained file, no install required | Single HTML file | Implemented |
| Data scope | Substance count | Storefront-derived + broad expansion (exact count not fully audited) | N/A | Partially audited |
| Data scope | Alias handling | Ad hoc; some aliasing gaps identified (e.g., sunifiram/unifiram, retigabine/ezogabine) | Manual | Inconsistent |
| Evidence handling | Informal evidence notes | Loose distinction between preclinical, human-evidence, and vendor-only claims | Prose | Not formally tiered |
| Governance | Version control | None established | N/A | Not implemented |
| Backend/storage | Canonical data store | None — Markdown files are the only representation | Flat files | Not implemented |
| Backend/storage | API layer | None | N/A | Not implemented |
| Backend/storage | Database | None | N/A | Not implemented |

## Planned changes and new features

| Category | Planned element | Purpose | Proposed technology | Priority / phase |
|---|---|---|---|---|
| Content expansion | ~150+ candidate substances across 7 new domains (emerging CNS agents, psychoplastogens, grey-market nootropics, neuroactive peptides, designer-drug families, supplements, alias reconciliation) | Close major coverage gaps | Markdown + backlog CSV | Intake queue defined, not yet ingested |
| Data model | Expanded frontmatter template with `mechanism`, `indications`, `contraindications`, `major-interactions`, `monitoring`, `evidence-notes`, `last-reviewed`, `regulatory-status` | Richer, queryable metadata per substance | YAML frontmatter | Proposed, not yet applied |
| Data model | Formal evidence-tier system (A-approved through X-identity-disputed) | Prevent vendor claims from being treated as clinical evidence | Controlled vocabulary field | Designed, not implemented |
| Data model | Typed relationship edges (`ALIAS_OF`, `PRODRUG_OF`, `AGONIST_AT`, `SHARES_RISK_WITH`, `POTENTIATES_TOXICITY_OF`, etc.) | Replace flat tags with precise graph semantics | Graph schema | Designed, not implemented |
| Alias governance | Canonical-name resolution table for known collisions | Prevent duplicate nodes for the same substance | Markdown table / DB constraint | Identified, not enforced |
| Architecture | Canonical structured database (PostgreSQL + JSONB + pgvector) | Single source of truth for substances, claims, relationships, sources | PostgreSQL | Recommended, Phase 2+ |
| Architecture | API/query boundary | Controlled, validated access to canonical data | FastAPI or equivalent | Recommended, Phase 2 |
| Architecture | Data pipeline for import/validation/dedup | Handle backlog ingestion safely | Polars + DuckDB | Recommended, Phase 1–2 |
| Visualization upgrade | WebGL/Canvas-optimized network view for thousands of nodes | Scale beyond current graph's practical size | Sigma.js (WebGL) or Cytoscape.js (Canvas) | Recommended, triggered by scale |
| Visualization upgrade | Curated pathway/architecture diagrams | Manually authored mechanism and system diagrams | React Flow, Mermaid, D2 | Recommended |
| Visualization expansion | Evidence heatmap, interaction/risk matrix, Sankey mechanism-to-risk flow, tidy tree/icicle for class hierarchy, timeline, scatter/bubble evidence-risk view, UpSet plot for overlapping risk/mechanism sets | Answer specific analytical questions not served by the network view alone | Plotly.js / Observable Plot | Recommended, Phase 6 |
| Editorial workflow | Obsidian as primary authoring interface | Structured note editing, backlinks, Dataview queries | Obsidian + Templater + Dataview + Metadata Menu + Linter | Recommended |
| Editorial workflow | Zotero integration | Literature/citation management tied to claims | Zotero + Citations plugin | Recommended |
| Governance | Review workflow with `review-status`, `last-reviewed`, audit trail | Track editorial maintenance over time | DB `review_event` table or frontmatter fields | Recommended |
| Semantic layer | Embeddings for similarity search (pgvector first) | "Find substances resembling this mechanism," retrieval-assisted review | pgvector → Qdrant if scale demands | Conditional, Phase 7 |
| Graph analytics | Optional Neo4j projection | Multi-hop traversal, centrality, community detection once query patterns justify it | Neo4j (derived, rebuildable) | Conditional, not default |
| Performance | Semantic zoom, viewport culling, edge bundling, cluster-first rendering, label budgets | Keep graph usable at thousands of nodes/edges | Frontend rendering logic | Recommended, Phase 5 |
| Distribution | Generated exports (CSV, JSON, SQLite snapshot, portable HTML) | Keep Obsidian/HTML/DB in sync without manual duplication | Build scripts | Recommended |
| Quality control | Frontmatter validation and alias-collision detection scripts | Catch schema errors and duplicate entities before publishing | Python scripts | Recommended, Phase 3 |

## Endgame and broader vision

| Dimension | Long-term direction | Rationale |
|---|---|---|
| Identity architecture | Every substance, product, extract, and mixture has a stable canonical identity with fully reconciled aliases, development codes, and brand names | Prevents duplicate or fragmented knowledge as the catalog scales into the thousands |
| Evidence architecture | Every claim is separated from identity and tagged with a formal evidence tier and traceable source, so vendor marketing can never be mistaken for clinical proof | Preserves scientific credibility as grey-market and designer-drug coverage expands |
| Safety architecture | A small number of high-severity safety hubs (respiratory depression, serotonin toxicity, sympathomimetic load, cholinergic excess, endocrine suppression, etc.) act as the organizing skeleton of the entire risk model | Risk communication scales better through shared mechanism hubs than through pairwise compound warnings |
| Data platform | PostgreSQL remains the single canonical store; Neo4j, pgvector/Qdrant, and generated Obsidian/HTML/CSV outputs are all downstream, rebuildable projections | Avoids the failure mode of multiple divergent "sources of truth" as tooling diversifies |
| Visualization platform | A layered visualization stack — network graph for relationships, statistical charts for evidence/risk analysis, curated diagrams for pathways and architecture — each mapped to a distinct analytical question rather than one graph trying to do everything | Matches visualization technique to cognitive task, avoiding an overloaded "one graph explains everything" interface |
| Intelligence layer | Semantic search and graph analytics are added only after canonical identity and provenance are stable, and only ever produce *suggestions* requiring human confirmation before becoming relationships | Prevents automated similarity from silently becoming unverified pharmacological fact |
| Editorial model | Obsidian + Zotero form the human research and authoring loop; the database is the machine-verifiable backend; the two stay synchronized one-way (authoring → validated ingestion → canonical store → generated views) | Keeps human judgment central to a domain with real safety stakes while still supporting scalable tooling |
| Scale target | Architecture explicitly designed to support several thousand substances, denser attribute sets, and multiple concurrent visualization clients without a future platform migration | Matches the stated growth trajectory of the project without over-building for hypothetical enterprise scale |
| Governance model | Formal review states, audit trails, and reversible migrations turn the project from a personal research vault into a maintainable knowledge system that can survive schema changes and contributor turnover | Necessary once evidence tiers, safety hubs, and thousands of entities make ad hoc editing unreliable |
| Ultimate purpose | A living, evidence-graded, safety-aware map of the nootropics/CNS/biohacking substance space — reliable enough to support serious research and risk literacy, structured enough to keep scaling, and visual enough to make complex pharmacology legible at a glance | Synthesizes the recurring thread across this entire conversation: depth, safety rigor, and structural scalability held together at once |
