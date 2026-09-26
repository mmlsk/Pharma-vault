# Substances database design

> Źródło: wątek projektu Pharma-vault (tura 15), wyeksportowany 2026-09-26. Treść zachowana w oryginalnym brzmieniu; numerowane odwołania typu [1] odnoszą się do źródeł przywołanych w oryginalnym wątku (materiały w `data/raw/`).

Yes — the right structure is a **single substances database table** covering every compound across the project, with one row per substance and standardized columns for identity, mechanism, evidence, safety, and graph links. From the project material already extracted, the substance catalog is large and spans groups such as steroids, SARMs, PCT agents, GH/secretagogues, peptides, GLP-1/body agents, ancillaries, longevity compounds, nootropics, neuropsych drugs, cardio agents, GI drugs, analgesics, dermatology agents, immunology agents, and oncology agents.[1][2]

## Recommended schema

Use one row per substance and keep the database in a spreadsheet-style format such as CSV or Markdown-table-exportable structure. The minimum useful columns are `compound_id`, `name`, `full_label`, `group`, `description`, `class`, `pathways`, `mechanism`, `evidence_level`, `status`, `risk_domains`, `contraindications`, `major_interactions`, `monitoring`, `aliases`, and `tags`.[3][1]

That matches the project’s existing note/template logic, where compounds already have identity and risk-oriented metadata fields such as `class`, `pathways`, `evidence-level`, `status`, and `risk-domains`, while the extracted source also gives you `id`, `group`, `label`, and `desc`.[1][3]

## What is already available

The extracted source clearly contains standardized per-compound entries in the pattern `id ...-compound`, `group ...`, `label ...`, `desc ...`, which means the project is already close to a flat database format. Examples visible in the extracted material include entries like `bms-564929-compound`, `sr9009-compound`, `darolutamide-compound`, `semaglutide`-class GLP-1 entries, many ancillary cardiovascular and dermatology drugs, and nootropic entries such as `modafinil-compound`, `piracetam-compound`, `citicoline-compound`, and `huperzine-a-compound`.[1]

The stack-builder source also shows that many of these same compound IDs are reused throughout presets and interaction logic, which is a good sign: one master table can become the canonical source for the graph, filters, vault notes, and stack analysis views. The preset layer references compound IDs like `testosterone-compound`, `anastrozole-compound`, `semaglutide-compound`, `metformin-compound`, `creatine-compound`, `modafinil-compound`, `alpha-gpc-compound`, and `huperzine-a-compound`, so a unified table would support both note management and graph rendering.[2]

## Best table design

A practical database table would look like this:[3][1]

| Column | Purpose |
|---|---|
| `compound_id` | Stable unique key used by graph/presets, e.g. `modafinil-compound`. |
| `name` | Clean primary display name. |
| `full_label` | Full project label including brand/common aliases where present. |
| `group` | Top-level cluster such as `nootropic`, `ancillary`, `gh`, `glp1`, `pct`. |
| `description` | Short descriptive summary from the source. |
| `class` | Pharmacologic class, e.g. SERM, ARB, racetam, GLP-1 RA. |
| `pathways` | Mechanisms or pathway links, preferably semicolon-separated. |
| `mechanism` | One-line mechanism summary. |
| `evidence_level` | Controlled vocabulary such as `preclinical`, `mixed-human`, `clinical`, `approved-use`. |
| `status` | Workflow field such as `stub`, `expanded`, `verified`. |
| `risk_domains` | Shared safety buckets like cholinergic, cardiovascular, endocrine, hepatic. |
| `contraindications` | Major exclusion contexts. |
| `major_interactions` | High-priority interaction warnings. |
| `monitoring` | Labs, vitals, symptom checks, ECG, etc. |
| `aliases` | Alternate names or brand names. |
| `tags` | Obsidian/Dataview tags for filtering. |

## How to populate it

The fastest build path is:

1. Start with every visible compound entry from the extracted catalog as the base row set.[1]
2. Fill `compound_id`, `group`, `full_label`, and `description` directly from the extracted entries.[1]
3. Derive `name` and `aliases` from the label field, since many labels already contain alternate names or brands.[1]
4. Backfill `class`, `pathways`, `mechanism`, `evidence_level`, and `risk_domains` using the existing vault/template conventions.[3]
5. Add safety columns based on the project’s interaction hubs such as cholinergic load, stimulant/cardiovascular load, hormonal axis suppression, and experimental/evidence-limited compounds.[4][5]

## Suggested controlled vocabularies

To keep the database usable, several columns should use fixed vocabularies instead of free text. Good candidates are `group`, `evidence_level`, `status`, and `risk_domains`, because those are the fields most likely to power filters, graph coloring, Dataview queries, and warning panels.[4][3]

A sensible first pass would be:
- `evidence_level`: `preclinical`, `early-human`, `mixed-human`, `clinical-use`, `approved-marketed`.[3]
- `status`: `stub`, `drafted`, `expanded`, `verified`, `needs-update`.[3]
- `risk_domains`: `cholinergic`, `cardiovascular`, `endocrine`, `hepatic`, `renal`, `bleeding`, `qt-risk`, `sedation`, `dependency`, `experimental`.[4]
- `group`: preserve the project’s native group names because they already align with the compound catalog and stack logic.[2][1]

## Example row format

Here is a clean example structure for one row, using fields already present in the project plus the recommended extensions:[3][1]

```csv
compound_id,name,full_label,group,description,class,pathways,mechanism,evidence_level,status,risk_domains,contraindications,major_interactions,monitoring,aliases,tags
modafinil-compound,Modafinil,"Modafinil Provigil",nootropic,"Wake-promoting agent structurally unrelated to the amphetamines. A weak dopamine transporter inhibitor...",wakefulness-agent,"dopamine-transporter; wakefulness","Weak DAT inhibitor promoting wakefulness",clinical-use,expanded,"cardiovascular; sleep; dependency","","stimulants; caffeine","blood pressure; sleep","Provigil","compound; nootropic"
```

## Important limitation

I was able to confirm that the extracted project text contains the raw compound catalog and enough structure to support a master database, but I was not able in this turn to finish generating and deliver the actual full spreadsheet artifact. The source does, however, clearly support building one consolidated table from the project-wide entries because the compound definitions are already normalized around ID, group, label, and description.[2][1]

If you want the next step to be concrete, the best follow-up is: **“Generate the full CSV/XLSX substances database from the extracted catalog with the recommended columns.”**
