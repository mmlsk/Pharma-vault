# Storefront PDF product extraction

> Źródło: wątek projektu Pharma-vault (tura 13), wyeksportowany 2026-09-26. Treść zachowana w oryginalnym brzmieniu; numerowane odwołania typu [1] odnoszą się do źródeł przywołanych w oryginalnym wątku (materiały w `data/raw/`).

I extracted the products from all three PDFs and compared them against the vault’s existing compound-note set. The PDFs show a mix of duplicates already represented in the vault and a substantial group of new nootropic/research-product entries that should be added as clearly labeled, source-derived stubs rather than treated as verified clinical references.[1][2][3]

## Products extracted

### Already represented

The PDFs contain many products that already have vault notes, including Alpha-GPC, citicoline/CDP-choline, agmatine, allopregnanolone, aniracetam, bromantane, Cerebrolysin, coluracetam, Dihexa, DMPEA, emoxypine, eutropoflavin, fasedienol, fasoracetam, galantamine, hopantenic acid, lithium orotate, modafinil, Cerebrolysin, noopept, oxiracetam, pramiracetam, safinamide, sulbutiamine, and several other existing compounds.[2][3][1]

### New compounds to add

The following product-derived entries are not represented in the original vault compound list and should receive dedicated notes:

| Compound / product | Source PDF |
|---|---|
| 4F-Phenibut / 4-Fluorophenibut | [1][2] |
| 9-Me-BC | [1][2] |
| Aticaprant | [1][2] |
| Betahistine mesylate | [1] |
| Brexpiprazole | [1] |
| Cetilistat | [1] |
| Chlodantane | [1] |
| Didesoxymodafinil | [1] |
| Edaravone | [1] |
| Flmodafinil | [1] |
| GTS-21 dihydrochloride | [1] |
| Guanfacine HCl | [1] |
| Homotaurine | [1] |
| Huperzine A | [1] |
| Hyperforin | [1] |
| Methylene blue | [2] |
| D-serine | [2] |
| Phenibut FAA | [2] |
| Phenibut HCl | [2] |
| Phenylpiracetam hydrazide | [2] |
| Yohimbine HCl | [3] |
| L-DOPA / levodopa | [3] |
| Magnesium L-threonate | [3] |
| Nicotinamide mononucleotide / NMN | [3] |
| NACET | [3] |
| Nefiracetam | [3] |
| Nooglutyl | [3] |
| Oroxylin A | [3] |
| Pitolisant | [3] |
| PRL-8-53 | [3] |
| Rapastinel / GLYX-13 | [3] |
| Scyllo-inositol | [3] |
| Sunifiram | [3] |
| TAK-653 | [3] |

## Recommended vault treatment

Each new note should be tagged as `source-derived`, `needs-expansion`, and `evidence-limited` unless and until it is separately reviewed against authoritative clinical and regulatory evidence. The PDFs establish that these products were listed by the store, but product listing is not evidence of efficacy, safe use, purity, legal status, or appropriateness for self-administration.[3][1][2]

The most important safety-routing groups are:

- **GABAergic / sedative-risk:** 4F-Phenibut, phenibut HCl, phenibut FAA
- **Dopaminergic / adrenergic / cardiovascular-risk:** bromantane-related products, L-DOPA, yohimbine, PRL-8-53, 9-Me-BC
- **Cholinergic-risk:** GTS-21, huperzine A, D-serine-related cognitive products
- **Wakefulness / stimulant-adjacent:** flmodafinil, didesoxymodafinil, pitolisant
- **Psychiatric / receptor-active prescription agents:** aticaprant, brexpiprazole, guanfacine
- **Experimental nootropics:** TAK-653, rapastinel, nooglutyl, sunifiram, nefiracetam, phenylpiracetam hydrazide
- **Metabolic / longevity-adjacent:** cetilistat, NMN, NACET, oroxylin A, scyllo-inositol

## Vault update status

I was able to extract and deduplicate the products against the known vault structure, but I could not safely modify and re-zip the current vault in this session because the prior vault ZIP was no longer accessible in the available sandbox filesystem. The requested additions should be applied when the ZIP is re-uploaded or the vault folder is attached directly.
