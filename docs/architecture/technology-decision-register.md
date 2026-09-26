# Nootropics Knowledge-Graph Technology Decision Register

## Status and interpretation

No repository or implementation archive was available for inspection in this thread. Consequently, **“included” below means included in the recommended target architecture or approved delivery path**, not verified as already installed or implemented in source code. The only project stack independently known from related work is React 19, TypeScript, and Vite in the receptor-atlas project; that does not prove this Nootropics repository uses the same stack.

Decision labels:

- **Core now** — recommended for the initial maintainable implementation.
- **Supporting now** — useful in development, authoring, export, or analysis, but not part of the runtime core.
- **Conditional later** — reserved behind a measurable trigger.
- **Not included** — rejected for the planned implementation because it duplicates another tool, adds premature complexity, or solves a different problem.
- **Unresolved** — requires repository inspection or a product decision.

## Core implementation

| Tool / technology | Decision | Intended role | Reason |
|---|---|---|---|
| PostgreSQL | Core now | Canonical database | Best single foundation for structured identities, aliases, claims, evidence, relationships, constraints, transactions, concurrent access, JSONB, and multiple clients. It prevents Markdown, HTML, graph, and vector stores from becoming conflicting authorities. |
| JSONB | Core now | Sparse or evolving attributes inside PostgreSQL | Preserves expansion space for unsettled attributes without forcing every experimental property into the relational schema. Frequently queried and integrity-critical fields should remain typed columns. |
| pgvector | Core now, if semantic search is in scope | Embeddings stored beside canonical records | Smallest semantic-search addition when PostgreSQL is already canonical; avoids operating a second database initially. It must remain a derived index, not evidence of a pharmacological relationship. |
| React | Core now if compatible with repository | Application UI | Appropriate for a component-based explorer with several coordinated views. It also aligns with the user's related receptor-atlas stack, but the actual repository must be checked before adoption. |
| TypeScript | Core now if compatible with repository | Typed frontend and possibly backend contracts | Reduces contract drift across entities, graph payloads, filters, and visualization adapters. Preserve existing language conventions if the repository differs. |
| Vite | Core now if already used | Frontend build/dev tooling | Lightweight and already used in the user's related receptor project; include only if this repository follows the same convention. |
| Existing backend or a small modular-monolith API | Core now | Validation, authorization, bounded queries, exports | Keeps domain rules outside visual components and provides one controlled boundary. Framework selection remains unresolved until repository inspection. |
| Cytoscape.js | Core-now candidate | Main semantic network explorer | Provides graph-oriented interaction, styles, filtering, layouts, and neighborhood exploration without requiring a fully custom D3 implementation. Use a renderer-neutral adapter to avoid lock-in. |
| Plotly.js | Core-now candidate | Heatmaps, scatterplots, distributions, and timelines | Covers scientific/statistical visualizations quickly and consistently. Include only the views that answer defined analytical questions. |
| Polars | Supporting now | Import, cleanup, validation, and tabular transformations | Strong fit for fast single-machine ETL over CSV, JSON, Parquet, and exports. Far simpler than distributed processing for a few thousand substances. |
| DuckDB | Supporting now | Local analytical SQL and file inspection | Complements Polars for reproducible analysis of local files and exports without introducing a warehouse service. |
| Docker Compose | Supporting now | Reproducible local services | Appropriate if the implementation has a database and backend; it makes development reproducible without introducing orchestration. Do not add if the project remains static/offline. |
| GitHub Actions or existing CI | Supporting now | Lint, typecheck, tests, migration checks, builds | Enforces quality gates and repeatability. Preserve the repository's existing CI provider if different. |

## Authoring and knowledge work

| Tool / technology | Decision | Intended role | Reason |
|---|---|---|---|
| Obsidian | Supporting now | Editorial reading, linked notes, curation, and learning | Matches the user's established medical PKM workflow and is well suited to backlinks, properties, templates, and local study. It should not silently become a second canonical database. |
| Zotero | Supporting now | Literature, PDFs, citation metadata | Separates source management from pharmacological entity data and gives curators a dedicated scholarly workflow. |
| Mermaid | Supporting now | Small diagrams in Markdown and Obsidian | The user already uses Mermaid for clinical algorithms. It is ideal for versionable sequence, flow, and architecture diagrams, but not a large exploratory graph renderer. |
| Obsidian Canvas | Supporting now | Manually curated concept/pathway boards | Useful for educational arrangements and synthesis; not suitable as canonical graph data. |
| Obsidian Dataview / Bases | Conditional support | Tables and filtered editorial views | Helpful if the vault is maintained as an editorial client. Query syntax and plugin dependence should not define the canonical application model. |
| Templater | Conditional support | Consistent note creation | Useful for curator workflows if Obsidian remains part of authoring. Not required by the web application. |
| Metadata Menu | Conditional support | Controlled property editing | Useful to reduce frontmatter drift; include only if plugin maintenance risk is acceptable. |
| Linter | Conditional support | YAML and Markdown normalization | Low-cost consistency aid for an Obsidian vault, but it does not replace schema validation at ingestion. |
| QuickAdd | Conditional support | Guided substance capture | Helpful for curator convenience; keep canonical validation server-side or in the import boundary. |
| DB Folder | Not included initially | Database-like editing in Obsidian | Overlaps with Dataview/Bases and can encourage treating Markdown as a relational database. Revisit only after the authoring workflow is defined. |
| Excalibrain | Not included initially | Relationship navigation in Obsidian | Duplicates the dedicated graph explorer and adds plugin dependence. Useful only as an optional personal view. |
| Obsidian Git | Conditional support | Vault backup and versioning | Useful for a local vault, but repository-wide versioning and database backups must be handled independently. |
| Citations plugin | Conditional support | Zotero-linked note citations | Valuable for editorial work, but citation provenance must also exist in canonical data. |
| obsidian-d3js | Not included in production core | Note-local D3 experiments | Suitable for prototypes and small note-specific visualizations, but not for the tested, high-performance graph application. |
| InfraNodus | External/conditional | Text-network exploration and gap discovery | Potentially useful for exploratory topic analysis. Its output should be reviewed before entering the evidence graph and it should not own canonical data. |

## Graph rendering and diagrams

| Tool / library | Decision | Intended role | Reason |
|---|---|---|---|
| Canvas 2D | Core rendering option | Medium-size graph rendering | Avoids one DOM element per mark and is suitable for thousands of simple visible elements. It still requires bounded queries, label budgets, culling, and progressive disclosure. |
| SVG | Included selectively | Small charts, icons, accessible/static diagrams | Excellent for limited marks and DOM interaction. Not selected for an unrestricted global graph, but should not be removed from small diagrams merely because of an approximate element threshold. |
| WebGL | Conditional later | High-volume graph rendering | Add when representative benchmarks show Canvas cannot meet frame-time or memory targets. |
| Sigma.js | Conditional later | WebGL network mode | Strong option when graph size is the primary challenge. It should not coexist with Cytoscape without a concrete high-volume mode and shared adapter. |
| D3.js | Supporting/conditional | Custom layouts and specialist visualizations | D3 can calculate layouts for Canvas or SVG, but a fully custom graph UI would increase implementation and maintenance effort. Use only where existing libraries do not answer the visualization requirement. |
| React Flow / xyflow | Conditional later | Curated pathway, workflow, or decision editor | Excellent for manually arranged node-and-edge diagrams, but not the first choice for a dense global knowledge graph. |
| JointJS | Not included initially | Advanced editable diagramming | Overlaps with React Flow and would add substantial API surface before diagram editing is a core requirement. |
| GoJS | Not included initially | Commercial diagramming toolkit | Capable but introduces licensing and lock-in; unjustified unless advanced diagram editing becomes central. |
| X6 | Not included initially | Programmable node/edge editor | Similar role to React Flow and JointJS; no requirement justifies another editor library. |
| Rete.js | Not included | Executable node-based editor | Solves visual programming, not knowledge-graph exploration. |
| Sequential Workflow Designer | Not included initially | Visual workflow editing | Consider only if curation procedures become user-authored executable workflows. |
| Highcharts | Not included initially | Commercial charting | Plotly.js/Observable Plot can cover planned charts without another commercial dependency. |
| Observable Plot | Conditional later | Concise exploratory visualizations | Useful for small multiples and rapid analytical views; defer until Plotly coverage gaps are identified. |
| Leaflet.js | Conditional later | Regulatory or jurisdiction maps | Include only when real geographic attributes and map-specific questions exist. |
| Gephi | Supporting external tool | Offline community detection, metrics, and layout experiments | Valuable for graph research and export validation, but not an application runtime dependency. |
| Cytoscape Desktop | Supporting external tool | Biomedical-network analysis | Useful for specialist offline analysis; the browser application should not depend on it. |
| yEd | Supporting external tool | Manual layout and presentation cleanup | Good for one-off diagrams, not canonical data or an application component. |
| Graphviz / DOT | Supporting now | Generated static ontology/dependency graphs | Deterministic diagram-as-code and useful in documentation/build outputs. Not an interactive web graph engine. |
| D2 | Supporting-now candidate | Readable architecture diagrams as code | Appropriate for project architecture documents. Choose either D2 or Structurizr as the principal architecture format to avoid duplicate maintenance. |
| Structurizr DSL | Conditional alternative | C4 architecture modelling | Prefer over D2 only if formal C4 model consistency and multiple generated views are required. |
| PlantUML | Conditional alternative | UML and sequence diagrams | Useful but overlaps with Mermaid/D2. Include only if existing documentation already uses it or detailed UML is required. |
| WaveDrom | Not included | Digital timing diagrams | The project has no hardware timing-diagram requirement. |
| RAWGraphs | Supporting external tool | Rapid prototype of uncommon chart types | Useful during design exploration; generated exports should be reproducible before becoming product views. |
| Looker Studio | Not included initially | Hosted BI dashboards | Adds a separate cloud/reporting surface without a defined stakeholder or reporting requirement. |
| BrainNet Viewer + MATLAB | Not included | Neuroimaging network visualization | Relevant only if coordinate-based neuroimaging/connectome datasets are introduced. |

## Visualization types

| Visualization | Decision | Reason |
|---|---|---|
| Network graph | Core now | Primary representation for typed entity relationships and neighborhood exploration. Must default to bounded subgraphs rather than everything at once. |
| Pathway diagram | Core/early | Clearly communicates substance → target → pathway → effect/risk chains and supports curated educational views. |
| Evidence heatmap | Core/early | Efficiently exposes strong, weak, conflicting, missing, or outdated evidence across many compounds. |
| Interaction/risk heatmap | Core/early | Supports rapid screening of shared safety domains and pairwise/class-level conflicts. It must not imply an interaction where only shared risk is known. |
| Timeline | Early | Suitable for discovery, trial, approval, scheduling, and review history. |
| Scatter/bubble chart | Early | Useful for comparing evidence, uncertainty, risk, and research volume once quantitative definitions exist. |
| Tidy tree / dendrogram | Conditional | Useful for taxonomy or hierarchical clustering. Dendrogram requires an actual distance/linkage method; tidy tree represents curated hierarchy. |
| Icicle / sunburst | Conditional | Useful for hierarchical inventory size, but redundant if hierarchy exploration is already clear in a tree. |
| Sankey / alluvial | Conditional | Useful for aggregated flows from classes through mechanisms to risks; unsuitable for precise causal claims without clear semantics. |
| UpSet plot | Recommended addition | Better than Venn diagrams for overlaps among multiple mechanisms, classes, and safety domains. |
| Chord diagram | Conditional | Use only for aggregated relationships among a small number of categories; dense chords become difficult to read. |
| Circle packing | Conditional | Good for hierarchical proportions, not detailed relationship analysis. |
| Arc diagram | Conditional | Useful when nodes have a meaningful order and relationships are limited. |
| Streamgraph | Conditional | Use only for category volume over real time-series data. |
| Venn diagram | Limited | Appropriate only for two or three simple sets. |
| Euler diagram | Limited | Useful for a few set relationships when area semantics matter; use UpSet for more sets. |
| Radar/spider chart | Generally not included | Comparisons are sensitive to scale/order and often less readable than aligned dot plots. Reserve for a few normalized dimensions. |
| Correlation heatmap | Conditional | Include only for meaningful numerical variables with adequate observations; do not calculate correlations over arbitrary categories or missing-heavy metadata. |
| Ridgeline/joyplot | Conditional | Useful for comparing genuine quantitative distributions, not categorical catalog fields. |
| Hexbin plot | Conditional | Useful only for large overlapping scatter datasets. |
| Beeswarm plot | Conditional | Helpful when displaying individual observations and distributions. |
| Choropleth map | Conditional | Requires jurisdiction-level regulatory or epidemiological data. |
| Dot-density map | Not included initially | Requires reliable geospatial counts and a concrete geographic question. |
| Flow map | Not included initially | Relevant only to geographic movement, supply, or referral flows. |
| Swimlane diagram | Supporting documentation | Useful for ingestion, review, publication, and rollback workflows. |
| Decision tree / decision graph | Early/supporting | Useful for curator classification and evidence-review logic, provided it is not presented as medical advice. |
| Flowchart | Supporting now | Good for operational and editorial procedures. |
| System architecture diagram | Core documentation | Necessary to communicate data authority, clients, projections, and deployment boundaries. |
| Network topology | Conditional documentation | Include when deployed services and network boundaries exist. |
| Sequence diagram | Core documentation | Useful for user requests, imports, review, and authorization flows. |
| Wiring / P&ID | Not included | No electrical or process-engineering requirement. |
| Concept map | Supporting | Useful for curated teaching; not a replacement for typed canonical graph relationships. |
| Timeline mind map | Conditional | Useful for educational synthesis, but duplicates timeline and concept-map views. |
| Distribution plots | Early when quantitative data exists | Appropriate for evidence scores, measurements, dates, or other numeric fields. |

## Databases and data platforms

| Tool / platform | Decision | Reason |
|---|---|---|
| SQLite | Supporting now | Strong for offline snapshots, portable distributions, tests, and local tools. Not preferred as a multi-user network service. |
| Neo4j | Conditional later | Add as a rebuildable analytical projection when deep traversal, graph algorithms, pathfinding, centrality, or community detection become regular measured workloads. Not canonical initially. |
| MongoDB | Not included | Flexible documents do not provide a clear advantage over PostgreSQL JSONB plus relational integrity for identities, evidence, and typed relationships. |
| MySQL | Not included | Viable relational database, but offers no project-specific advantage over the recommended PostgreSQL stack. |
| Redis | Conditional later | Add for measured repeated-query latency, caching, rate limiting, or a job queue. Avoid before a concrete workload exists. |
| ObjectDB | Not included | Java object persistence does not fit the multi-client, evidence-oriented, interoperable data model. |
| GemStone/S | Not included | Specialized Smalltalk object database with excessive ecosystem mismatch. |
| ZODB | Not included | Convenient Python object persistence but weaker interoperability and query governance than a relational model. |
| ObjectBox | Conditional edge/mobile cache | Consider only for an offline mobile client; not a canonical server database. |
| InterSystems IRIS | Not included initially | Relevant to enterprise healthcare integration, but disproportionate without institutional interoperability requirements. |
| Amazon Neptune | Not included initially | Managed graph service makes sense only for an AWS commitment and a proven RDF/property-graph workload. |
| TigerGraph | Not included | Enterprise parallel graph analytics is excessive for the stated medium-size catalog. |
| ArangoDB | Not included initially | Multi-model capability is interesting but couples document and graph concerns in a less standard foundation than PostgreSQL. |
| Azure Cosmos DB for Gremlin | Not included initially | Only justified by an Azure-native globally distributed graph product. |
| Azure Cosmos DB NoSQL | Not included | A globally distributed document store does not replace relational integrity and evidence modelling. |
| Pinecone | Not included initially | Managed vector convenience does not justify a separate service while pgvector can satisfy early semantic retrieval. |
| Qdrant | Conditional later | Strong dedicated vector option if vector filtering, scale, or latency outgrows pgvector. |
| Chroma | Prototype only | Useful for local experiments, but not selected as durable production infrastructure. |
| Milvus | Not included initially | Designed for much larger specialized vector workloads than the current project requires. |
| Weaviate | Conditional alternative | Consider only if hybrid/vector retrieval becomes a major product subsystem; otherwise duplicates PostgreSQL/pgvector. |
| Snowflake | Not included | A cloud data warehouse is unnecessary for the current operational and analytical scale. |
| BigQuery | Not included | No warehouse-scale analytical workload or GCP commitment is defined. |
| Azure Synapse | Not included | Warehouse/integration platform is excessive without an Azure analytical estate. |
| Databricks | Not included | Distributed lakehouse and Spark operations are premature for this dataset and team scope. |
| Google Cloud Dataflow | Not included | No large streaming/batch dataflow requirement. |
| QuestDB | Conditional later | Consider for high-frequency time-series biometrics or experiments, not static pharmacology knowledge. |
| InfluxDB | Conditional later | Same trigger as QuestDB; select one time-series system only after requirements are known. |

## Processing, streaming, and modelling

| Tool / approach | Decision | Reason |
|---|---|---|
| Pandas | Supporting compatibility | Retain for ecosystem compatibility and notebooks; use Polars/DuckDB for new high-volume local pipelines where practical. |
| NumPy | Supporting dependency | Fundamental numerical array library used by scientific tooling; include only where calculations require it. |
| PySpark | Not included | Distributed computation is unjustified for several thousand entities and related records. |
| Dask | Not included initially | Adds distributed/parallel execution complexity before workloads exceed a single machine. |
| Apache Kafka | Not included | No high-volume durable event stream is defined. |
| Apache Flink | Not included | No stateful real-time stream-processing requirement exists. |
| Google Pub/Sub | Not included | Managed messaging is unnecessary without an event-driven GCP architecture. |
| Azure Event Hubs | Not included | Same issue in Azure; no event-stream requirement. |
| SQLMesh | Not included initially | Transformation planning/versioning is valuable in mature analytical estates, but current pipelines can remain simple and code-reviewed. |
| Snowflake schema | Not included for canonical data | Appropriate for analytical marts, not the authoritative knowledge model. |
| Data Vault | Not included | Multi-source audit warehousing adds disproportionate modelling and ETL overhead at this stage. |
| LangGraph | Conditional later | Consider only for stateful multi-step AI workflows with checkpoints. It is not needed for deterministic ingestion or retrieval. |

## Operations, governance, and cloud

| Tool / platform | Decision | Reason |
|---|---|---|
| Prometheus | Conditional later | Add when persistent services expose operational metrics and silent failures need alerts. |
| Grafana | Conditional later | Add with a metrics source when operational dashboards have defined owners and alerts. |
| Datadog | Not included initially | Broad commercial observability is unnecessary before there is a production service estate. |
| Monte Carlo | Not included | Data-observability tooling is premature before complex production pipelines and SLAs exist. |
| Apache Atlas | Not included | Enterprise metadata catalog and lineage overhead is excessive for the current system. |
| Terraform | Conditional later | Add once repeatable cloud environments exist. Avoid infrastructure-as-code for nonexistent infrastructure. |
| Docker | Supporting now if server components exist | Reproducibility for database/backend services; omit from a purely static project. |
| Kubernetes | Not included | No scaling or operational requirement justifies orchestration. |
| Azure | Unresolved provider option | Select only after deployment, identity, regional, cost, and institutional requirements are known. |
| Google Cloud | Unresolved provider option | Same; do not design around a provider before choosing one. |
| Supabase | Unresolved | Attractive if managed PostgreSQL, authentication, storage, and RLS are desired, but it must be confirmed against current architecture and offline goals. |

## Final implementation boundary

The smallest recommended initial stack is:

```text
Canonical storage: PostgreSQL + typed schema + limited JSONB
Semantic retrieval: pgvector only if part of the first accepted capability
Application: preserve the existing backend/frontend stack; React + TypeScript is the provisional UI direction
Graph view: Cytoscape.js with Canvas-capable rendering through a renderer-neutral adapter
Charts: Plotly.js
Pipelines: Polars + DuckDB, with Pandas compatibility where needed
Authoring: Obsidian + Zotero, with one-way controlled import/export
Delivery: existing CI plus Docker Compose only if services exist
```

The first release intentionally excludes Neo4j, a dedicated vector database, streaming infrastructure, warehouses, distributed compute, object databases, cloud-specific graph stores, and multiple overlapping visualization frameworks. These remain available behind explicit adoption triggers rather than being installed speculatively.