PY ?= python3
.PHONY: all catalog xlsx enrich pk chembl links verify vault graph export validate test clean \
        expand chembl-fetch verify-fetch refresh
# offline, deterministic (this is what CI runs)
all: catalog pk chembl verify links vault graph export validate test
catalog:   ; cd scripts && $(PY) build_catalog.py
xlsx:      ; cd scripts && $(PY) build_catalog.py --xlsx
pk:        ; cd scripts && $(PY) enrich_pk.py parse
chembl:    ; cd scripts && $(PY) enrich_chembl.py parse
verify:    ; cd scripts && $(PY) verify_pk_fda.py parse
links:     ; cd scripts && $(PY) build_links.py
vault:     ; cd scripts && $(PY) generate_vault_notes.py --prune
graph:     ; cd scripts && $(PY) build_graph_data.py
export:    ; cd scripts && $(PY) export_sqlite.py
validate:  ; cd scripts && $(PY) validate.py
test:      ; $(PY) -m pytest -q

# network stages - refresh the committed caches under data/enrichment/
enrich:       ; cd scripts && $(PY) enrich_pk.py fetch && $(PY) enrich_pk.py parse
expand:       ; cd scripts && $(PY) enrich_chembl.py resolve && $(PY) build_catalog.py
chembl-fetch: ; cd scripts && $(PY) enrich_chembl.py fetch && $(PY) enrich_chembl.py parse
verify-fetch: ; cd scripts && $(PY) verify_pk_fda.py fetch && $(PY) verify_pk_fda.py parse
refresh: chembl-fetch expand chembl-fetch enrich verify-fetch all

clean:     ; rm -rf .pytest_cache scripts/__pycache__ tests/__pycache__ data/processed/substances.xlsx data/processed/pharma-vault.db
