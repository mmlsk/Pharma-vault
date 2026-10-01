---
type: moc
tags: [moc]
---

# Compound Clusters MOC

| Cluster | Source groups |
|---|---|
| [[Nootropics]] | Nootropics & Cognition; Neurology & Psychiatry |
| [[Metabolic and Incretin Agents]] | GLP-1 & Body |
| [[Growth Hormone and Peptide Agents]] | GH & Secretagogues; Peptides; FGFR3 & Growth Plate |
| [[Androgens SARMs and PCT]] | Anabolic Steroids; SARMs; SERMs, AIs & Antiandrogens |
| [[Cardiovascular and Lipid Agents]] | Cardiovascular |
| [[Longevity and Experimental Compounds]] | Longevity & Metabolic |
| [[Ancillary Supplements and Topicals]] | Ancillaries & Support; Dermatology & Topicals |
| [[General Pharmacology]] | Anti-infectives; Immunology & Biologics; Analgesia & Anaesthesia; GI & Hepatic; Oncology & Cytotoxics |
| [[Novel Psychoactive Substances]] | Novel Psychoactive Substances (curated addition, v3.2) |

The first seven clusters come from the original vault; *General Pharmacology* was added in v3 so that every catalogued group has a home; *Novel Psychoactive Substances* was added in v3.2 for ChEMBL/PubChem-resolved designer-drug candidates from the expansion backlog.

See also the generated target layer: [[Targets MOC]].

```dataview
TABLE WITHOUT ID cluster AS Cluster, length(rows) AS Notes
FROM "04 Compound Notes"
WHERE type = "compound"
GROUP BY cluster
SORT length(rows) DESC
```
