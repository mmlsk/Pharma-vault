---
type: reference
tags: [dataview, pharmacokinetics]
---

# Half-Life Dataview Query

```dataview
TABLE class, subclass, half-life.value AS HalfLife, half-life.unit AS Unit, active-metabolites, protein-binding.value AS ProteinBinding
FROM "04 Compound Notes"
WHERE type = "compound" AND half-life.value
SORT half-life.value ASC, file.name ASC
```

> Units are not normalised by Dataview — sort within one unit or convert to hours when curating.
