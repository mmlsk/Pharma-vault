---
type: concept
tags: [concept, evidence]
---

# Evidence Tiers

The intellectual backbone of the vault: human outcome evidence outranks human surrogate data, which outranks animal, in-vitro or mechanistic inference.

| Tier | Definition |
|---|---|
| `A-approved` | Approved medicine with established pharmaceutical identity |
| `B-human-controlled` | Controlled human evidence, not necessarily for the proposed use |
| `C-early-human` | Phase 1, small experimental or limited observational exposure |
| `D-preclinical` | Animal, cellular or mechanistic research only |
| `E-forensic-NPS` | Known mainly from seizures, toxicology reports or poison cases |
| `F-vendor-only` | Vendor listing without independently verified pharmacology or composition |
| `X-identity-disputed` | Name, structure or supplied identity cannot be reliably established |

**Rules**
- Vendor presence never upgrades evidence.
- Approval for one indication (tier A) does not validate an off-label "enhancement" use — record that separately in `off-label-contexts`.
- ChEMBL `max phase` describes development stage, not efficacy for the claim in question.
