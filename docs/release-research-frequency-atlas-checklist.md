# Release Checklist: Research/Frequency Atlas Parity

## Expected Commit
- `EXPECTED_SHA` (minimum): `b02bdfb`
- Actual deployed SHA: `________________`
- Branch: `main`

## Vercel Production Deployment Verification
- [ ] Latest production deployment SHA matches `EXPECTED_SHA` or newer.
- [ ] Deployment timestamp is after the merge that introduced the route split.
- [ ] Production alias points to the intended latest deployment (no stale alias target).

## Route Status Checks
Run:

```bash
curl -I https://jrzzo.com/research
curl -I https://jrzzo.com/frequency-atlas
curl -I https://jrzzo.com/frequency-atlas-visualizer
curl -I https://jrzzo.com/frequency-paper
```

Acceptance:
- [ ] Each route returns `200` (or expected redirect chain ending in `200`).

## Content Separation Checks
Run:

```bash
curl -sSL https://jrzzo.com/research | grep -F "Open Visualizer"
curl -sSL https://jrzzo.com/research | grep -F "Read Frequency Paper"
curl -sSL https://jrzzo.com/research | grep -F "FREQUENCY ATLAS VISUALIZER" && echo "Unexpected visualizer content on /research"
curl -sSL https://jrzzo.com/frequency-atlas-visualizer | grep -F "FREQUENCY ATLAS VISUALIZER"
```

Acceptance:
- [ ] `/research` contains both Frequency Atlas CTAs.
- [ ] `/research` does not contain visualizer-only marker text.
- [ ] `/frequency-atlas-visualizer` contains visualizer marker text.

## Manual Browser Validation
### Desktop
- [ ] Hard refresh (`Cmd+Shift+R`) on `/research`.
- [ ] Verify Frequency Atlas section is summary-only with both CTA buttons.
- [ ] Verify clicking `Open Visualizer` opens `/frequency-atlas-visualizer`.
- [ ] Verify clicking `Read Frequency Paper` opens `/frequency-paper`.

### Mobile
- [ ] Hard refresh and incognito/private mode on `/research`.
- [ ] Verify same route behavior as desktop.

## Sign-Off
- Date/Time:
- Verifier:
- Result (`PASS`/`FAIL`):
- Notes:
