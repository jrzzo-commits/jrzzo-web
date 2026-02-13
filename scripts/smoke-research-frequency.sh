#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-https://jrzzo.com}"
FAILURES=0

pass() {
  echo "PASS: $1"
}

fail() {
  echo "FAIL: $1"
  FAILURES=$((FAILURES + 1))
}

check_status() {
  local route="$1"
  local label="$2"
  local code

  code="$(curl -sS -o /dev/null -w '%{http_code}' -L "${BASE_URL}${route}" || true)"

  if [[ "$code" == "200" ]]; then
    pass "${label} returned HTTP 200 (${route})"
  else
    fail "${label} expected HTTP 200 but got ${code} (${route})"
  fi
}

fetch_body() {
  local route="$1"
  curl -sS -L "${BASE_URL}${route}" || true
}

assert_contains() {
  local body="$1"
  local needle="$2"
  local label="$3"

  if printf '%s' "$body" | grep -qF "$needle"; then
    pass "$label contains '$needle'"
  else
    fail "$label missing '$needle'"
  fi
}

assert_not_contains() {
  local body="$1"
  local needle="$2"
  local label="$3"

  if printf '%s' "$body" | grep -qF "$needle"; then
    fail "$label should not contain '$needle'"
  else
    pass "$label does not contain '$needle'"
  fi
}

echo "Running Research/Frequency smoke checks against: ${BASE_URL}"

check_status "/research" "Research route"
check_status "/frequency-atlas" "Frequency Atlas summary route"
check_status "/frequency-atlas-visualizer" "Frequency Atlas visualizer route"
check_status "/frequency-paper" "Frequency paper route"

RESEARCH_HTML="$(fetch_body "/research")"
VISUALIZER_HTML="$(fetch_body "/frequency-atlas-visualizer")"

assert_contains "$RESEARCH_HTML" "Open Visualizer" "/research"
assert_contains "$RESEARCH_HTML" "Read Frequency Paper" "/research"
assert_not_contains "$RESEARCH_HTML" "FREQUENCY ATLAS VISUALIZER" "/research"
assert_contains "$VISUALIZER_HTML" "FREQUENCY ATLAS VISUALIZER" "/frequency-atlas-visualizer"

if [[ "$FAILURES" -gt 0 ]]; then
  echo
  echo "Smoke check result: FAILED (${FAILURES} check(s) failed)"
  exit 1
fi

echo
echo "Smoke check result: PASSED"
