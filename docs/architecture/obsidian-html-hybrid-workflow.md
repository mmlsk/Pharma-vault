# Obsidian + HTML hybrid workflow

> Źródło: wątek projektu Pharma-vault (tura 18), wyeksportowany 2026-09-26. Treść zachowana w oryginalnym brzmieniu; numerowane odwołania typu [1] odnoszą się do źródeł przywołanych w oryginalnym wątku (materiały w `data/raw/`).

I recommend a **hybrid Obsidian + standalone HTML workflow**: use Obsidian as the editable source of truth, and the HTML canvas as the fast exploration and presentation layer. The existing graph-oriented vault structure is already suited to this division.[1]

I cannot safely produce the requested v3 ZIP in this turn because the project filesystem and packaging environment are unavailable. I won’t claim that an archive was created when it was not.

## Recommended setup

| Tool | Best role | Main advantage | Limitation |
|---|---|---|---|
| **Obsidian** | Authoring, reviewing, citations and structured notes | Markdown ownership, backlinks, properties, templates and plugins | Native Graph View is less analytical |
| **HTML canvas app** | Visual exploration and sharing | Fast filtering, safety hubs, typed relationships and no installation | Editing structured data is less convenient |
| **SQLite/Datasette** | Larger structured catalog | Validation, queries, deduplication and exports | More technical maintenance |
| **Neo4j** | Advanced graph analysis | Pathfinding, centrality and complex relationship queries | Excessive complexity at the current scale |
| **Zotero** | Source and paper management | Reliable citation library and PDF annotation | Not a substance knowledge graph |

## Best architecture

Use **Obsidian as the canonical database**:

```text
Markdown notes
    ↓
frontmatter validation
    ↓
generated graph-data.json
    ↓
interactive HTML canvas
```

The HTML app should be treated as a generated view, not an independent second database. Otherwise, compound names, aliases, evidence levels and warnings will eventually diverge between the two systems.

## Obsidian configuration

Recommended core features:

- Properties for controlled frontmatter
- Templates for substance, mechanism, safety-hub and source notes
- Backlinks and outgoing links
- Canvas for manually curated pathway maps
- Bases or Dataview for structured inventories
- Search for rapid alias checking

Useful community plugins:

- **Templater:** Creates consistent compound records
- **Dataview:** Builds tables from frontmatter
- **Metadata Menu:** Restricts properties to controlled values
- **Linter:** Normalizes YAML and Markdown formatting
- **QuickAdd:** Provides a guided “new substance” capture process
- **DB Folder:** Offers database-like editing
- **Excalibrain:** Adds relationship-oriented navigation
- **Obsidian Git:** Maintains version history and backups
- **Citations:** Connects notes with Zotero-managed literature

Only install the plugins you actively use. Too many metadata plugins can create conflicting conventions and make the vault harder to maintain.

## Intended v3 contents

The v3 archive should contain:

```text
nootropics-knowledge-graph-v3/
├── README.md
├── CHANGELOG.md
├── LICENSE-NOTES.md
├── graph/
│   ├── knowledge-graph-v3.html
│   ├── graph-data.json
│   └── graph-schema.json
├── vault/
│   ├── 00 Home/
│   ├── 01 Substances/
│   ├── 02 Mechanisms/
│   ├── 03 Pathways/
│   ├── 04 Safety Hubs/
│   ├── 05 Interactions/
│   ├── 06 Evidence/
│   ├── 07 Sources/
│   ├── 08 Queries/
│   └── 99 Templates/
├── data/
│   ├── substances.csv
│   ├── relationships.csv
│   ├── aliases.csv
│   ├── safety-links.csv
│   └── intake-backlog.csv
├── scripts/
│   ├── build-graph.py
│   ├── validate-frontmatter.py
│   ├── detect-alias-collisions.py
│   └── export-csv.py
└── docs/
    ├── SCHEMA.md
    ├── SAFETY-MODEL.md
    ├── EVIDENCE-TIERS.md
    └── WORKFLOW.md
```

## Essential v3 features

The integrated release should include:

- Expanded candidate catalog from the research backlog
- Canonical compound names and alias resolution
- Separate substance, product, extract, mixture and combination-product identities
- Typed edges such as `AGONIST_AT`, `PRODRUG_OF`, `SHARES_RISK_WITH` and `POTENTIATES_TOXICITY_OF`
- Evidence tiers from approved medicine through identity-disputed material
- Development, regulatory and anti-doping status
- Safety hubs for respiratory depression, serotonin toxicity, cardiovascular load, psychosis, seizures, QT risk, hepatic interactions and endocrine suppression
- “Unknown” values rather than inferred safety conclusions
- Source provenance and last-reviewed dates
- Canvas filters for cluster, mechanism, evidence, status and risk
- High-risk interaction highlighting
- Search across canonical names, brands, development codes and aliases
- Neighborhood isolation and shortest-path exploration
- Dark and light modes
- Mobile-responsive navigation
- CSV and JSON exports
- Frontmatter validation and duplicate detection

## Working method

1. Capture each substance in Obsidian using the standardized template.
2. Record claims separately from sources; do not treat a vendor page as evidence of efficacy.
3. Assign identity confidence, evidence tier and review status.
4. Link the substance to mechanisms, pathways and safety hubs.
5. Run schema and alias validation.
6. Generate the JSON dataset and HTML graph.
7. Use the canvas to identify dense risk neighborhoods and missing relationships.
8. Return to Obsidian for detailed reading, annotations and corrections.
9. Review high-risk and fast-changing entries on a fixed schedule.

## Practical choice

Start with **Obsidian + HTML + Zotero**:

- Obsidian handles knowledge maintenance.
- HTML provides the visual graph.
- Zotero manages scientific sources.
- Git or another versioned backup protects the vault.

Add SQLite only after the collection reaches a scale where Markdown queries and validation become slow or unreliable. Use Neo4j only if graph algorithms—not note-taking—become the project’s central activity.
