---
type: safety-hub
tags: [safety-hub]
---

# Experimental and Evidence-Limited Compounds

> [!warning] Educational content — not medical advice, no dosing guidance.

Hub for **uncertainty-heavy** entries: research chemicals, preclinical peptides, vendor-only products and compounds with disputed identity.

## Why a separate hub
Anecdotal stacking cannot compensate for missing human evidence. For these compounds the dominant risks are unknown toxicology, undefined composition, contamination and mislabelling — independent of the pharmacology claimed.

## Minimum metadata
```yaml
evidence-level: D-preclinical   # or F-vendor-only / X-identity-disputed
identity-confidence: unverified
composition-defined: false
human-evidence: none
vendor-only-name: true
```

See [[Evidence Tiers]] · Umbrella: [[Stacking and Interaction Risks]]

## Compounds routed here
```dataview
LIST FROM "04 Compound Notes" AND [[Experimental and Evidence-Limited Compounds]]
SORT file.name ASC
LIMIT 300
```
