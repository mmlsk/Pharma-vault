PY ?= python3
.PHONY: all catalog xlsx enrich pk vault graph validate test clean
all: catalog pk vault graph validate test
catalog:   ; cd scripts && $(PY) build_catalog.py
xlsx:      ; cd scripts && $(PY) build_catalog.py --xlsx
# network: refresh the Wikipedia infobox cache, then parse it (offline)
enrich:    ; cd scripts && $(PY) enrich_pk.py fetch && $(PY) enrich_pk.py parse
# offline: rebuild pk.json from the committed cache
pk:        ; cd scripts && $(PY) enrich_pk.py parse
vault:     ; cd scripts && $(PY) generate_vault_notes.py --prune
graph:     ; cd scripts && $(PY) build_graph_data.py
validate:  ; cd scripts && $(PY) validate.py
test:      ; $(PY) -m pytest -q
clean:     ; rm -rf .pytest_cache scripts/__pycache__ tests/__pycache__ data/processed/substances.xlsx
