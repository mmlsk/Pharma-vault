PY ?= python3
.PHONY: all catalog xlsx vault validate test clean
all: catalog vault validate test
catalog:   ; cd scripts && $(PY) build_catalog.py
xlsx:      ; cd scripts && $(PY) build_catalog.py --xlsx
vault:     ; cd scripts && $(PY) generate_vault_notes.py --prune
validate:  ; cd scripts && $(PY) validate.py
test:      ; $(PY) -m pytest -q
clean:     ; rm -rf .pytest_cache scripts/__pycache__ tests/__pycache__ data/processed/substances.xlsx
