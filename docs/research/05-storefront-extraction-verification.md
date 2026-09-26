# Storefront extraction — completeness check

> Źródło: wątek projektu Pharma-vault (tura 14), wyeksportowany 2026-09-26. Treść zachowana w oryginalnym brzmieniu; numerowane odwołania typu [1] odnoszą się do źródeł przywołanych w oryginalnym wątku (materiały w `data/raw/`).

I double-checked the three PDFs, and the extracted product lists appear to be **complete for the visible text available in those files**. Each PDF seems to contain a single page of storefront listings, and the searchable text ends cleanly after the last visible product on that page rather than cutting off mid-list.[1][2][3]

## What was captured

From the three PDFs, the product names visible in the extracted text are:

- PDF 1: 4F-Phenibut, 9-Me-BC, Agmatine sulfate, Allopregnanolone, Alpha-GPC 98, Aniracetam, Aticaprant, Betahistine mesylate, Brexpiprazole, Bromantane, Cerebrolysin, Cetilistat, Chlodantane, Citicoline/CDP-choline, Coluracetam, Didesoxymodafinil, Dihexa, DMPEA, Edaravone, Emoxypine succinate salt, Eutropoflavin, Fasedienol, Fasoracetam, Flmodafinil, Galantamine HBr, GTS-21 dihydrochloride, Guanfacine HCl, Homotaurine, Hopantenic acid/Calcium hopantenate, Huperzine-A, and Hyperforin.[1]
- PDF 2: 4F-Fenibut/4-Fluorofenibut, 9-Me-BC, Agmatyna, Allopregnanolon, Alpha-GPC 98, Aniracetam, Atikaprant, Błękit metylenowy, Bromantan, CDP-cholina/Cytykolina, Cerebrolizyna, Coluracetam, D-seryna, Dihexa, DMPEA, Emoksypina bursztynian, Eutropoflawina, Fasedienol, Fasoracetam, Fenibut FAA, Fenibut HCl/Phenibut, and Fenylopiracetam hydrazyd.[3]
- PDF 3: Johimbina HCl, Kwas hopantenowy, Lewodopa/L-Dopa, Litu orotan, Magnezu l-treonian, Modafinil, Mononukleotyd nikotynamidu/NMN, NACET, Nefiracetam, Nooglutyl, Noopept, Oksyracetam, Oroksylina-A, Pitolisant, Pramiracetam, PRL-8-53, Rapastinel/GLYX-13, Safinamid, Scyllo-Inozytol, Sulbutiamina, Sunifiram, and TAK-653.[2]

## Missed items from my previous pass

A few items visible in the PDFs were **not explicitly included** in my earlier “new compounds to add” list and should be counted as processed now:

- SPI-1005 / Ebselen was mentioned in the banner text of PDF 1.[1]
- Temsirolimus was also mentioned in the banner text of PDF 1.[1]
- Modafinil appears in PDF 3 and should remain in the extracted master list even though it is already represented in the vault.[2]
- Noopept appears in PDF 3 and should likewise remain in the extracted master list.[2]

## Normalization notes

Several products appear in Polish/English duplicate naming pairs and should be normalized to a single canonical compound note with aliases, for example:
- Atikaprant → Aticaprant.[3][1]
- Bromantan → Bromantane.[3][1]
- Cerebrolizyna → Cerebrolysin.[3][1]
- Emoksypina bursztynian → Emoxypine succinate salt.[1][3]
- Kwas hopantenowy / Calcium hopantenate → Hopantenic acid.[2][1]
- Błękit metylenowy → Methylene blue.[3]
- Johimbina HCl → Yohimbine HCl.[2]

## Answer

So the corrected answer is: **almost all substances were processed previously, but not literally all**. The main omissions from the earlier pass were **SPI-1005/Ebselen** and **Temsirolimus** from the banner text in PDF 1, plus I should have kept **Modafinil** and **Noopept** in the extracted master inventory even though they already existed in the vault.[1][2]

If you want, I can now produce a **clean canonical checklist** with three columns: `raw PDF name`, `normalized vault name`, and `new vs already in vault`.
