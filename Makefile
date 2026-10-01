PY ?= python3
.PHONY: all catalog xlsx enrich pk chembl identity links verify ema vault graph export validate test clean \
        expand chembl-fetch identity-fetch verify-fetch ema-fetch refresh
# offline, deterministic (this is what CI runs)
all: catalog pk chembl identity verify ema links vault graph export validate test
catalog:   ; cd scripts && $(PY) build_catalog.py
xlsx:      ; cd scripts && $(PY) build_catalog.py --xlsx
pk:        ; cd scripts && $(PY) enrich_pk.py parse
chembl:    ; cd scripts && $(PY) enrich_chembl.py parse
verify:    ; cd scripts && $(PY) verify_pk_fda.py parse
identity:  ; cd scripts && $(PY) curate_identity.py parse
ema:       ; cd scripts && $(PY) verify_pk_ema.py parse
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
identity-fetch: ; cd scripts && $(PY) curate_identity.py fetch && $(PY) curate_identity.py parse
ema-fetch:    ; cd scripts && $(PY) verify_pk_ema.py fetch && $(PY) verify_pk_ema.py parse
refresh: chembl-fetch expand chembl-fetch identity-fetch enrich verify-fetch ema-fetch all

clean:     ; rm -rf .pytest_cache scripts/__pycache__ tests/__pycache__ data/processed/substances.xlsx data/processed/pharma-vault.db
