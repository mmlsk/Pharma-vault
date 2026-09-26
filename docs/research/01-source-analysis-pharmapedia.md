# Source analysis — Pharmapedia FYI HTML/JS

> Źródło: wątek projektu Pharma-vault (tura 3), wyeksportowany 2026-09-26. Treść zachowana w oryginalnym brzmieniu; numerowane odwołania typu [1] odnoszą się do źródeł przywołanych w oryginalnym wątku (materiały w `data/raw/`).

The pasted HTML/source depicts **Pharmapedia FYI as a pharmacology knowledge-graph and commercial catalogue**, not a conventional clinical reference. Its strongest idea is to map mechanisms, evidence tiers, and interaction overlap; its main weakness is that it places well-established medicines beside unapproved, animal-only, and “research chemical” products in one interface.[1][2][3]

## What the source contains

The code organizes content into compound categories such as nootropics, peptides, steroids, SARMs, GLP-1 drugs, growth-hormone agents, metabolic/longevity compounds, supplements, skin/hair agents, and “ancillaries.” It also creates pre-built “stacks” intended to expose pathway overlap, contraindications, and risk accumulation rather than simply list benefits.[2][1]

The platform labels evidence as **human randomized trial**, **human observational**, **animal**, **in vitro**, or **mechanistic inference**, and links many mechanism claims to PubMed IDs. It explicitly distinguishes a measured result from a modeled receptor-occupancy estimate and warns that isolated target occupancy does not predict effects of a multi-drug stack.[3]

## Best pharmacology insights

### Mechanism overlap matters

A useful pharmacology principle repeated throughout the material is that a stack is not a sum of marketing claims. Drugs can converge on the same receptor, pathway, organ toxicity, or clearance enzyme; adding them may create redundancy or additive harm rather than proportionately better outcomes.[1][3]

Examples embedded in the source include:

- **CJC-1295, sermorelin, GHRP-2, ipamorelin, and ibutamoren/MK-677** converge on the growth-hormone axis; repeated secretagogue use has no demonstrated linear benefit and may simply duplicate endocrine stimulation.[1]
- **Multiple choline donors plus acetylcholinesterase inhibitors** can increase acetylcholine from both directions—more synthesis/substrate and less degradation—raising the likelihood of cholinergic adverse effects such as nausea, headache, and muscle tension.[1]
- **Modafinil plus caffeine**, or a prescription stimulant plus caffeine, can layer wakefulness, blood-pressure, and insomnia burdens more reliably than they layer cognitive benefit.[1]
- **Nitrates with PDE5 inhibitors** are presented as a classic contraindication: increasing nitric-oxide/cGMP signaling while preventing cGMP degradation can produce dangerous hypotension.[1]
- **CYP3A4-inhibiting combinations**—for example certain azole antifungals and ritonavir alongside a sensitive substrate such as simvastatin—can sharply raise drug exposure and toxicity.[1]

### Evidence hierarchy is essential

The most valuable conceptual distinction in the extracted source is between **mechanistic plausibility** and **clinical efficacy**. A compound can alter a pathway in cells, animals, or an assay without improving meaningful human outcomes.[3]

The source correctly frames several biohacking areas as highly uncertain:

- “Exercise-mimetic” candidates such as **AICAR, SLU-PP-332, and 5-amino-1MQ** are described as having animal or preclinical signals without meaningful human efficacy data.[2]
- “Repair” peptide combinations such as **BPC-157, TB-500, and GHK-Cu** are characterized as mainly inference, in-vitro work, or limited evidence—not validated human recovery protocols.[1]
- Longevity combinations involving **rapamycin, metformin, acarbose, fisetin, quercetin, spermidine, NAD precursors, resveratrol, and alpha-ketoglutarate** are framed as research comparisons rather than proven anti-aging regimens.[2][1]
- The platform itself states that biomarker change does not automatically equal a meaningful health outcome—an important safeguard when interpreting NAD, AMPK, mTOR, antioxidant, and “mitochondrial support” claims.[1]

## Nootropics: practical reading

The source’s nootropic section contains a relatively sober message: **most “cognitive enhancement” evidence is conditional, modest, population-specific, or weaker than marketing suggests.**[2][1]

| Compound or class | Most defensible takeaway from the extracted material | Major caveat |
|---|---|---|
| Caffeine | Blocks adenosine receptors and reduces perceived sleep pressure; it can improve alertness. [2] | It masks sleep pressure rather than repaying sleep debt. [2] |
| Creatine | Brain energy buffering may help cognition under sleep loss or metabolic stress. [1][2] | Effects are often absent in rested, healthy young adults. [1] |
| L-tyrosine | May be useful when cognition is stressed by sleep deprivation, cold, or demanding conditions. [1] | It is not established as a general desk-work cognitive enhancer. [1] |
| Modafinil / armodafinil | Wake-promoting agents with dopamine-transporter activity and legitimate medical uses. [2] | Wakefulness is not equivalent to harmlessness; misuse can impair sleep and carries abuse-liability concerns. [1][2] |
| Citicoline / alpha-GPC | Choline donors that support acetylcholine and phospholipid synthesis. [2] | Evidence is stronger for cognitive impairment than for healthy-person enhancement. [2] |
| Bacopa | The herbal nootropic with comparatively substantial trial coverage; any effect tends to develop over weeks. [2] | Results are inconsistent, with the source emphasizing delayed recall more than broad cognitive enhancement. [2] |
| Rhodiola | Better supported for perceived fatigue than for cognition itself. [2] | Feeling less fatigued is not proof of improved performance. [2] |
| Racetams | Have proposed molecular interactions, including AMPA-receptor-related mechanisms. [1] | The source says controlled evidence for cognitive enhancement in healthy people is lacking. [1] |

## A sensible nootropics framework

A defensible interpretation of the extracted material is to choose interventions according to the problem rather than build a large “focus stack.”[2][1]

- **Sleep deprivation:** Restoring sleep is the primary intervention; caffeine, creatine, tyrosine, or clinically prescribed wake-promoting medicines may partially mitigate a deficit, but they do not create a new cognitive ceiling.[1]
- **Low alertness:** Investigate sleep duration, circadian timing, alcohol/cannabis use, iron/B12/thyroid status when clinically indicated, depression/anxiety, and medication effects before escalating stimulants.
- **Attention symptoms:** Prescription stimulants and related medicines should be clinician-guided, particularly because cardiovascular, psychiatric, sleep, and substance-use risks depend on the person and the medication.
- **Cholinergic experimentation:** Avoid piling up alpha-GPC, citicoline, huperzine A, donepezil, and related agents. The source’s “cholinergic overshoot” example is a sound warning about convergent pharmacology.[1]
- **Herbal products:** Treat effects as potentially modest and variable; they should not be assumed to be safer merely because they are sold as supplements.

## Biohacking: evidence map

### Relatively grounded areas

The source identifies several areas with clearer evidence and more predictable mechanisms:

- **Creatine, beta-alanine, and citrulline malate** target different performance constraints—phosphocreatine availability, acid buffering, and nitric-oxide-related blood flow—rather than duplicating one receptor mechanism.[2][1]
- **GLP-1–pathway medicines** such as semaglutide and tirzepatide have legitimate clinical evidence in obesity and metabolic disease, but mixing them with other glucose-lowering agents requires consideration of gastrointestinal, dehydration, glycemic, renal, and blood-pressure effects.[2][1]
- **Hair-loss pharmacology** separates established agents such as finasteride and minoxidil from adjuncts such as rosemary oil, saw palmetto, or pumpkin-seed oil, for which evidence is weaker or more mixed.[2][1]
- **Topical dermatology** is treated more plausibly when ingredients have distinct roles—retinoids for cell turnover/acne/photoaging, niacinamide for barrier and pigment effects, ceramides for barrier lipids, and sunscreen/photoprotection as the non-negotiable foundation.[2][1]

### High-risk or experimental areas

The extracted material also includes substances that should be treated as **medical, experimental, or nonmedical-risk territory**, not consumer biohacking:

- Anabolic-androgenic steroids, designer steroids, prohormones, and SARMs are associated with endocrine suppression, lipid deterioration, hypertension, liver stress, cardiovascular risk, and quality-control concerns. The source explicitly presents “oral-only,” “blast,” and SARM combinations as caution examples rather than health protocols.[2][1]
- Clenbuterol, ephedrine, yohimbine, thyroid hormone, and aggressive stimulant combinations carry cardiovascular and metabolic risks; the source notes clenbuterol’s cardiac risk and ephedrine’s adrenergic stimulation.[2]
- Growth hormone, IGF-1, GH secretagogues, and related peptide combinations are often marketed as additive, but the source emphasizes shared-axis redundancy, lack of proportional benefit evidence, and the distinction between approved indications and enhancement use.[1][2]
- Experimental peptides—such as BPC-157, TB-500, Dihexa, Semax, Selank, DSIP, Pinealon, MOTS-c, Humanin, and GHK-Cu—appear beside stronger clinical medicines, but most are not supported by robust human efficacy and safety data for the marketed “biohacking” uses.[2][1]
- “Longevity” candidates, including senolytics, NAD-related products, mitochondrial peptides, and caloric-restriction mimetics, should be treated as hypotheses unless there is hard human outcome evidence for the individual indication.[1][2]

## Major safety signal

The code includes product listings, quantities, prices, checkout logic, and shipping groups for prescription drugs, anabolic steroids, peptides, research chemicals, and experimental compounds. That makes it an apparent commercial or quasi-commercial catalogue in addition to an educational interface.[1]

This matters because the site’s polished pathway maps and evidence labels can make a listed product appear more medically validated than it is. Product availability, an assay mechanism, a PubMed link, animal findings, or a receptor-occupancy calculation do **not** establish pharmaceutical quality, legality, appropriate dosing, safety, or a favorable benefit-risk ratio for self-experimentation.[3][1]

## Bottom line

The strongest lessons from the source are: **use mechanism maps to detect duplication and interaction risk; privilege human outcome evidence over molecular storytelling; and view “stacking” as a potential risk multiplier, not an automatic optimization strategy.**[3][1]

For nootropics, the most evidence-aligned takeaway is modest: optimize sleep and health fundamentals first; use caffeine strategically if tolerated; consider creatine as a performance/nutrition supplement with possible cognitive value under stress; and be especially cautious with multi-agent cholinergic, stimulant, serotonergic, endocrine, peptide, and research-chemical stacks.[2][1]
