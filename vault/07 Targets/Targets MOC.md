---
type: moc
tags: [moc, target]
---

# Targets MOC

Generated layer (v3.2): one note per **ChEMBL target** reached by at least one catalogue compound through a ChEMBL *curated mechanism of action* of the parent molecule. Notes in this folder are rebuilt by `scripts/generate_vault_notes.py` — do not edit them (this MOC is the only hand-written file).

Use it to answer "what else in the vault hits the same receptor/enzyme?" — the basis of pharmacodynamic **stack redundancy** ([[Stack Redundancy]]) and overlap ([[Interaction Overlap]]).

```dataview
TABLE WITHOUT ID file.link AS Target, target-type AS Type, organism AS Organism, compounds AS Compounds
FROM "07 Targets"
WHERE type = "target"
SORT compounds DESC
LIMIT 150
```
