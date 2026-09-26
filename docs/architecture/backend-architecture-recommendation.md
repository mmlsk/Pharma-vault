# Backend architecture recommendation

> Źródło: wątek projektu Pharma-vault (tura 19), wyeksportowany 2026-09-26. Treść zachowana w oryginalnym brzmieniu; numerowane odwołania typu [1] odnoszą się do źródeł przywołanych w oryginalnym wątku (materiały w `data/raw/`).

For a library of several thousand substances, the best foundation is **PostgreSQL + JSONB + pgvector as the canonical database**, an API layer, and a React frontend using **Canvas/WebGL graph rendering**. Keep Obsidian as an editorial and learning interface, use SQLite for portable snapshots, and introduce Neo4j only when advanced graph traversal or graph algorithms become a demonstrated requirement—not merely because the domain is graph-shaped.

## Core distinction

Many technologies in the question solve completely different problems and should not be compared as direct alternatives.

| Layer | Purpose | Recommended project choice |
|---|---|---|
| Canonical storage | Authoritative substances, claims, relationships and sources | PostgreSQL |
| Semantic retrieval | Similarity and natural-language discovery | pgvector initially |
| Graph computation | Traversal, paths, centrality, communities | PostgreSQL initially; optional Neo4j projection |
| Local/offline storage | Portable snapshot, desktop tools, exports | SQLite |
| Data processing | Validation, imports, deduplication and exports | Polars + DuckDB |
| API | Controlled access to canonical data | FastAPI or TypeScript equivalent |
| Graph rendering | Thousands of visible nodes and edges | Cytoscape.js or Sigma.js |
| Statistical visualization | Heatmaps, distributions, timelines | Plotly.js or Observable Plot |
| Curated diagrams | Pathways, architecture and decision flows | React Flow, Mermaid, D2 |
| Knowledge authoring | Reading, annotation and synthesis | Obsidian + Zotero |
| Deployment | Reproducible services | Docker Compose initially |
| Monitoring | Service and pipeline health | Prometheus + Grafana later |

This architecture also fits your existing React/TypeScript receptor-atlas work and preference for layered, schematic, graph-oriented interfaces.

## Canonical architecture

The important architectural change is to stop treating Markdown files or the visualization as the database. At this scale, Obsidian should remain an excellent **editorial client**, while PostgreSQL becomes the canonical system of record.

```text
                    ┌───────────────────────┐
                    │ Obsidian + Zotero     │
                    │ authoring and review  │
                    └──────────┬────────────┘
                               │ validated import
                               ▼
┌─────────────┐       ┌───────────────────────┐
│ External    │──────▶│ Ingestion pipeline    │
│ datasets    │       │ aliases, IDs, claims  │
└─────────────┘       └──────────┬────────────┘
                                 ▼
                    ┌────────────────────────┐
                    │ PostgreSQL             │
                    │ JSONB + pgvector       │
                    │ canonical source       │
                    └─────┬────────┬─────────┘
                          │        │
              graph view │        │ analytical exports
                          ▼        ▼
                 ┌────────────┐  ┌────────────────┐
                 │ Neo4j      │  │ DuckDB/Polars │
                 │ optional   │  │ pipelines      │
                 └─────┬──────┘  └──────┬─────────┘
                       │                │
                       └────────┬───────┘
                                ▼
                    ┌────────────────────────┐
                    │ API and query service  │
                    └───────────┬────────────┘
                                ▼
                    ┌────────────────────────┐
                    │ React application      │
                    │ Canvas/WebGL + charts  │
                    └────────────────────────┘
```

Do not implement bidirectional synchronization between every layer. Use one controlled ingestion direction and generate Obsidian notes, JSON, CSV and visualization bundles from the validated database.

## Data model

Avoid storing each substance as one enormous document. A scalable model separates identity, claims, evidence, relationships and visualization metadata.

### Principal entities

- `entity`: universal identity for substances, targets, pathways, effects, risks, diseases and sources
- `substance`: substance-specific canonical properties
- `synonym`: aliases, development codes, brands, spelling variants and regional names
- `relationship`: typed subject–predicate–object edges
- `claim`: a factual assertion that may be supported, disputed, superseded or uncertain
- `source`: paper, trial registry, regulator document, database or vendor page
- `claim_source`: evidence connecting claims to sources
- `safety_hub`: serotonin toxicity, respiratory depression, sympathomimetic load and similar domains
- `jurisdiction_status`: approval, control and availability by country and date
- `embedding`: semantic vectors for entities, claims and source passages
- `review_event`: audit trail showing what changed, when and why
- `graph_view`: saved filters, layouts and curated node collections

### Relationships

Use explicit relationship types such as:

```text
SUBSTANCE --AGONIST_AT------------> TARGET
SUBSTANCE --POSITIVE_MODULATOR_AT-> TARGET
SUBSTANCE --INHIBITS--------------> ENZYME
SUBSTANCE --PRODRUG_OF------------> SUBSTANCE
SUBSTANCE --ACTIVE_METABOLITE_OF--> SUBSTANCE
SUBSTANCE --ANALOG_OF-------------> SUBSTANCE
SUBSTANCE --ASSOCIATED_WITH-------> SAFETY_HUB
SUBSTANCE --POTENTIATES_RISK_OF---> SUBSTANCE
CLAIM     --SUPPORTED_BY----------> SOURCE
CLAIM     --CONTRADICTED_BY-------> SOURCE
SUBSTANCE --INVESTIGATED_FOR------> CONDITION
SUBSTANCE --PROHIBITED_BY---------> ORGANIZATION
```

Frequently queried fields should become normal columns. Sparse or experimental attributes can remain in JSONB until their meaning stabilizes; this preserves expansion space without reducing the entire database to an unvalidated entity–attribute–value system.

## Neo4j, SQLite, D3, Canvas

### Neo4j

Use Neo4j when questions are dominated by multi-hop relationships:

- Which compounds connect to the same risk hub through different mechanisms?
- What are the shortest mechanistic paths between a substance and an adverse effect?
- Which compounds bridge otherwise separated pharmacological clusters?
- Which safety hubs have the greatest centrality?
- Which communities emerge from mechanism–target–effect relationships?
- What changes downstream when one relationship is removed?

Cypher is a declarative graph query language designed for pattern and relationship matching, making it suitable for these questions.  Neo4j is also positioned for highly connected life-sciences and knowledge-graph applications.[1][2]

Do **not** begin with Neo4j as the only database. The project also needs strong tabular integrity, aliases, citations, review workflows, dates, status fields and analytical exports; PostgreSQL handles those requirements more naturally.

Recommended role:

```text
PostgreSQL = canonical truth
Neo4j = generated analytical projection
```

Only add Neo4j after repeated SQL queries require complex recursive traversal or after graph algorithms become part of normal use.

### SQLite

SQLite is ideal for:

- Downloadable project snapshots
- Offline desktop use
- Automated tests
- Temporary staging
- Read-only distribution bundles
- Single-user prototypes
- Local scripts and command-line analysis

SQLite’s documented implementation limits are far beyond a collection of several thousand substances, so raw dataset size is not the reason to reject it.  Its limitation here is architectural: a growing multi-tool system eventually benefits from a network-accessible database, concurrent users, background workers and centralized access control.[3]

Use SQLite as a **distribution format**, not the future multi-user server.

### D3.js

D3 is best treated as a visualization construction toolkit:

- Force simulation
- Scales and axes
- Hierarchical layouts
- Chord, partition and tree layout calculations
- Data transformations
- Interaction behavior
- Custom visual encodings

D3 does not require SVG. It can calculate positions while Canvas or WebGL performs the rendering.

Use D3 when the visualization is novel and domain-specific. Do not use it for every chart when Plotly, Observable Plot or Cytoscape already provides the required interaction.

### Canvas

Canvas is appropriate when the graph contains:

- Thousands of visible marks
- Frequently moving nodes
- Large numbers of edges
- Zooming and panning
- Animated filtering
- Level-of-detail rendering

The “SVG becomes slow above 1,000 elements” statement is a useful warning but not a universal threshold. Performance depends on labels, edge count, DOM updates, effects, animation, browser and interaction patterns.

For the project:

| Visible graph size | Preferred renderer |
|---:|---|
| Under approximately 500 simple marks | SVG remains convenient |
| Hundreds to several thousand | Canvas is usually appropriate |
| Several thousand to tens of thousands | WebGL becomes preferable |
| Very large network | WebGL plus aggregation and progressive disclosure |

Even WebGL should not draw every label and relationship simultaneously. Clustering, viewport culling, semantic zoom, edge bundling and neighborhood isolation matter more than the renderer alone.

## Obsidian integrations

### Obsidian D3 plugins

An Obsidian D3 plugin may be useful for experimental, note-local visualizations. It should not become the production visualization platform because the main graph application needs predictable performance, versioned dependencies, testing and independent deployment.

Recommended use:

- Small note-specific diagrams
- Demonstrating one pathway
- Rendering local query results
- Prototyping visual encodings

Avoid loading the complete knowledge graph inside every Obsidian note.

### InfraNodus

InfraNodus may be useful as an external exploratory-analysis tool for:

- Topic clustering
- Discourse gaps
- Concept co-occurrence
- Text-network exploration
- Generating hypotheses about missing connections

Treat it as an analytical consumer of exported data, not as the database or primary graph UI. Importing its results should require review rather than automatically creating pharmacological claims.

## Vector databases

A vector database stores embeddings for semantic similarity. It does **not** replace relational or graph storage because nearest-neighbor similarity is not equivalent to a documented pharmacological relationship.

### Recommended order

| Technology | Use scenario | Decision |
|---|---|---|
| **pgvector** | Embeddings alongside canonical PostgreSQL records | Start here |
| **Qdrant** | Dedicated self-hosted semantic search with richer vector filtering | Strong second-stage option |
| **Pinecone** | Managed vector service with minimal operations | Consider if cloud convenience outweighs portability |
| **Weaviate** | Dedicated hybrid/vector retrieval platform | Consider for a retrieval-heavy application |
| **Milvus** | Very large vector collections and specialized infrastructure | Unnecessary initially |
| **Chroma** | Experiments and local prototypes | Do not make canonical infrastructure |

### Vector use cases

- Search “substances resembling this mechanism”
- Retrieve relevant claims for a question
- Find semantically similar paper abstracts
- Detect near-duplicate descriptions
- Suggest possible aliases for review
- Recommend related notes
- Support retrieval-augmented question answering

Do not automatically convert vector similarity into `ANALOG_OF`, `INTERACTS_WITH` or `SHARES_RISK_WITH`. These edges require evidence or curator approval.

## Object databases

Object databases are not a strong fit for the canonical layer.

| Platform | Plausible scenario | Recommendation |
|---|---|---|
| ObjectDB | Java application with a strongly object-centric domain model | Reject for this project |
| GemStone/S | Large Smalltalk system with persistent distributed objects | Reject |
| ZODB | Python application needing transparent object persistence | Possible prototype, not canonical |
| ObjectBox | Embedded mobile or edge database | Potential mobile cache only |
| InterSystems IRIS | Enterprise healthcare integration and interoperability | Consider only with institutional integration requirements |

The main problem is not storing complex programming objects. It is querying shared entities, controlling identity, preserving evidence provenance and serving several independent visualization and analysis tools.

Objects should live in application code. Durable scientific data should live in an interoperable data model.

## Graph databases

| Platform | Best theoretical scenario | Project verdict |
|---|---|---|
| **Neo4j** | Rich property-graph exploration, Cypher queries and graph algorithms | Best optional graph engine |
| **Amazon Neptune** | AWS-native managed RDF/property graph | Only if the project commits to AWS |
| **TigerGraph** | Enterprise-scale parallel graph analytics | Excessive for several thousand substances |
| **ArangoDB** | One platform combining documents, key-value and graphs | Interesting, but adds multi-model coupling |
| **Azure Cosmos DB Gremlin** | Globally distributed graph workload in Azure | Only for an Azure-native product |
| **Cosmos DB NoSQL** | Globally distributed document/key-value workload | Not a substitute for a graph model |

If formal semantic-web interoperability becomes important, an RDF-compatible store may eventually be more valuable than another property graph. That decision should follow an ontology and interoperability assessment rather than database enthusiasm.

## Data platforms

### Use now

| Component | Role |
|---|---|
| PostgreSQL | Canonical transactional database |
| pgvector | Embeddings and semantic retrieval |
| SQLite | Offline snapshots and tests |
| Polars | Fast transformation of CSV, JSON and tabular imports |
| DuckDB | Local analytical SQL and Parquet queries |
| Pandas | Compatibility with existing scientific Python libraries |
| Docker Compose | Reproducible local development |
| GitHub Actions | Tests, schema validation and exports |
| Zotero | Literature and citation management |
| Obsidian | Editorial knowledge interface |
| Cytoscape.js/Sigma.js | Interactive network interface |
| Plotly.js/Observable Plot | Statistical visualization |

### Add conditionally

| Component | Trigger |
|---|---|
| Neo4j | Repeated deep traversals and graph-algorithm requirements |
| Redis | Measured API latency, expensive repeated queries or job queues |
| Qdrant | Semantic retrieval outgrows pgvector |
| Prometheus + Grafana | Persistent deployed services need monitoring |
| Terraform | Cloud infrastructure becomes repeatable and multi-environment |
| Object storage | Large PDFs, images, exports or model artifacts |
| InfluxDB/QuestDB | High-frequency longitudinal measurements become a major domain |
| LangGraph | Multi-step AI agents require explicit state and checkpoints |

### Avoid initially

| Technology group | Why it is premature |
|---|---|
| Snowflake, BigQuery, Synapse | Data-warehouse infrastructure exceeds current analytical needs |
| Databricks, PySpark | Distributed compute is unnecessary at this scale |
| Kafka, Flink | No high-volume event stream exists yet |
| Google Pub/Sub, Azure Event Hubs | Managed messaging without a current event-driven workload |
| Apache Atlas | Enterprise-scale catalog and lineage overhead |
| Monte Carlo | Data-observability platform before complex production pipelines exist |
| Datadog | Convenient but unnecessary before there is a production service estate |
| Dask | Useful only when workloads exceed single-machine Polars/DuckDB capacity |
| MongoDB | Flexible documents do not solve identity, provenance and graph integrity better than PostgreSQL |
| MySQL | Viable, but offers no clear project advantage over PostgreSQL |
| Snowflake schema | Useful for an analytical mart, not canonical knowledge representation |
| Data Vault | Valuable for large multi-source audit warehouses, excessive for the current project |

### Polars and DuckDB

Use **Polars + DuckDB instead of PySpark** for the foreseeable future.

- Polars handles dataframe transformations and data-quality pipelines.
- DuckDB provides local analytical SQL and efficient file analysis.
- PostgreSQL serves the online application.
- PySpark should appear only when data no longer fits practical single-machine processing or requires distributed execution.

A few thousand substances—even with many aliases, claims and relationships—does not justify Spark.

## Visual priorities

The project should not display the same dataset through every possible diagram. Each visualization must answer a distinct question.

### Highest value

| Visualization | Best question |
|---|---|
| Network graph | What entities are connected, and through which relationship types? |
| Adjacency matrix | Where are dense interaction regions and missing relationships? |
| Pathway diagram | How does a substance affect target, pathway, effect and risk? |
| Evidence heatmap | Which compounds have strong, weak, conflicting or absent evidence? |
| Interaction heatmap | Which pairs or classes share important risk domains? |
| Sankey/alluvial | How do compounds flow through mechanisms to effects and safety hubs? |
| Tidy tree | How is a compound family or ontology branch organized? |
| Icicle/sunburst | How large are nested classes and subclasses? |
| Timeline | How did discovery, trials, approval and regulatory status evolve? |
| Scatter/bubble plot | How do evidence, uncertainty, risk and research volume relate? |
| Decision graph | How should curators classify or review a new entry? |
| System architecture | How do storage, processing, APIs and interfaces connect? |

### Selective value

| Visualization | Use only when |
|---|---|
| Chord diagram | Showing aggregated links between a small number of classes |
| Circle packing | Exploring hierarchical inventory size |
| Arc diagram | Displaying an ordered sequence with limited relationships |
| Streamgraph | Showing category volume over time |
| Radar chart | Comparing very few normalized attributes; dot plots are often clearer |
| Ridgeline | Comparing real quantitative distributions across groups |
| Beeswarm | Showing individual measured observations without hiding distribution |
| Hexbin | Large scatterplots create severe point overlap |
| Euler/Venn | Comparing no more than a few sets |
| Choropleth | Regulatory or legal status differs geographically |
| Dot-density map | Actual geographic count data exists |
| Flow map | Movement, supply or geographic pathways matter |
| Swimlane | Curation, review or evidence-ingestion workflows |
| Concept map | Curated educational overview |
| Timeline mind map | Combining chronology with thematic branches |

### Low relevance

- P&ID diagrams
- Electrical wiring diagrams
- Generic spider diagrams without quantitative semantics
- Brain network viewers unless neuroimaging-connectome data is added
- Choropleths without meaningful jurisdictional data
- Correlation heatmaps built from categorical or missing-heavy attributes

Add an **UpSet plot** for overlapping sets of mechanisms, risks and substance classes. It scales better conceptually than Venn diagrams once more than a few sets are involved.

## Visualization libraries

### Primary selections

| Library | Recommended role |
|---|---|
| **Cytoscape.js** | Main semantic network explorer with filtering and graph interaction |
| **Sigma.js** | WebGL network rendering when graph size becomes the main challenge |
| **D3.js** | Custom layouts, transitions and specialist diagrams |
| **React Flow** | Manually curated pathway, decision and workflow editor |
| **Plotly.js** | Heatmaps, scatterplots, distributions, timelines and scientific charts |
| **Observable Plot** | Concise exploratory and small-multiple visualizations |
| **Mermaid** | Documentation diagrams stored as text |
| **Graphviz** | Generated static graphs and dependency diagrams |
| **Gephi** | Offline graph analysis, layout experimentation and community exploration |
| **Leaflet** | Jurisdictional and regulatory maps |

### Conditional selections

| Library | Use when |
|---|---|
| JointJS | Building a serious editable diagramming product |
| GoJS | Commercial licensing is acceptable and advanced diagram editing is central |
| X6 | The frontend requires a programmable node-and-edge editor |
| Rete.js | Users will construct executable node-based workflows |
| Sequential Workflow Designer | Curation pipelines need a visual workflow editor |
| Highcharts | Polished commercial charting and support justify licensing |
| Bokeh | Python-hosted interactive analytical applications |
| Altair | Declarative Python analysis and notebook exploration |
| Matplotlib + Seaborn | Publication-ready static figures |
| RAWGraphs | Quickly prototyping unusual chart types |
| Looker Studio | Sharing simple BI dashboards with nontechnical viewers |
| yEd | Manual diagram cleanup and one-off graph layouts |
| Cytoscape Desktop | Biological-network analysis beyond the browser UI |

### Not core

- `tidyplots` and `lattice`: useful in R workflows, but not part of the web application
- BrainNet Viewer + MATLAB: relevant only after adding neuroimaging network coordinates
- Rete.js: builds node-based editors; it is not a general graph viewer
- React Flow: excellent for curated diagrams but not ideal for rendering the entire dense knowledge graph
- Mermaid: documentation renderer, not a high-performance exploratory network

A strong combination is:

```text
Cytoscape.js  → semantic graph explorer
Sigma.js      → high-volume network mode
React Flow    → curated pathway editor
Plotly.js     → scientific/statistical views
Mermaid/D2    → architecture documentation
Gephi         → offline graph research
```

## Diagramming tools

| Tool | Best role |
|---|---|
| Mermaid | Lightweight diagrams embedded in Markdown and repositories |
| PlantUML | Sequence diagrams, UML and detailed technical documentation |
| Graphviz DOT | Deterministic automatically laid-out dependency graphs |
| D2 | Readable architecture diagrams as code |
| Structurizr DSL | C4 architecture model and software-system documentation |
| WaveDrom | Digital timing diagrams; little relevance here |
| Gephi | Graph exploration, metrics, communities and layouts |
| Cytoscape Desktop | Biomedical network exploration |
| yEd | Manual graph arrangement and presentation diagrams |

Use **D2 or Structurizr DSL** for the system architecture and **Mermaid** for short diagrams inside Obsidian. Use Graphviz for generated ontology and dependency diagrams.

## Performance design

Changing SVG to Canvas alone will not make an unrestricted global graph usable. The application should implement:

- Semantic zoom: labels and secondary edges appear only at appropriate zoom levels
- Neighborhood mode: show one node plus one or two hops
- Cluster-first view: classes and pathways expand on demand
- Viewport culling: do not draw off-screen elements
- Edge filtering: hide low-priority relation types by default
- Label budgets: render only important labels
- Web Workers: move layout calculations away from the UI thread
- Precomputed layouts: store stable overview coordinates
- Incremental loading: request only the active subgraph
- Spatial indexing: accelerate pointer hit-testing
- Aggregated edges: collapse thousands of repeated relationships
- Saved views: preserve curated educational arrangements
- Separate analytical and presentation layouts

A theoretically dense graph may approach \(O(n^2)\) edges, so the edge count—not just the number of substances—will often become the real rendering bottleneck.

## Expansion strategy

### Stage 1

Implement now:

```text
PostgreSQL + JSONB + pgvector
FastAPI
React + TypeScript
Cytoscape.js
Plotly.js
Polars + DuckDB
Docker Compose
Obsidian and Zotero integration
SQLite/JSON/CSV exports
```

At this stage, build the canonical IDs, claim model, provenance model and API contracts correctly. Those decisions are more difficult to change later than the visualization library.

### Stage 2

Add after actual demand:

```text
Sigma.js WebGL mode
Background job queue
Redis cache
Qdrant if semantic search expands
Neo4j graph projection
Prometheus + Grafana
Object storage
Automated ontology reconciliation
```

### Stage 3

Add only after becoming a shared production platform:

```text
Managed cloud PostgreSQL
Terraform
Container orchestration if justified
Data warehouse
Event streaming
Data catalog and lineage platform
Distributed data processing
```

## Decision triggers

| Question | If yes |
|---|---|
| Are recursive relationship queries frequent and slow? | Add Neo4j projection |
| Are embeddings numerous or vector filters complex? | Evaluate Qdrant |
| Are several users writing concurrently? | Keep PostgreSQL; do not use SQLite server-side |
| Does the global graph exceed comfortable Canvas rendering? | Add Sigma.js/WebGL |
| Are users manually designing pathways? | Add React Flow |
| Are imports becoming difficult to audit? | Add claim-level provenance and staged approval |
| Are services running continuously? | Add Prometheus and Grafana |
| Are deployments repeated across environments? | Add Terraform |
| Is data larger than one machine can efficiently process? | Then evaluate Spark—not before |
| Are continuous biometric measurements added? | Evaluate QuestDB or InfluxDB |
| Are AI workflows multi-stage and stateful? | Consider LangGraph |

## Final recommendation

Build the project around **PostgreSQL, pgvector, Polars/DuckDB, a versioned API and a React frontend**. Use **Cytoscape.js first**, add **Sigma.js** for WebGL-scale views, reserve **React Flow** for curated diagrams, and keep D3 as the visualization toolkit connecting specialized views.

Treat SQLite, Obsidian, Neo4j, Qdrant and Gephi as complementary interfaces or projections:

```text
PostgreSQL = truth
Obsidian = understanding and editorial work
SQLite = portability
pgvector/Qdrant = semantic discovery
Neo4j = advanced graph analysis
Cytoscape/Sigma = interactive exploration
Plotly = quantitative analysis
Mermaid/D2 = technical documentation
```

This avoids premature cloud and distributed-data complexity while preserving clear expansion routes for several thousand substances, substantially more claims and relationships, multiple visualization clients, semantic search and future graph analytics.
