# Deploy Runbook

## Post-Deploy Smoke Checks: Research/Frequency Atlas

Run from repository root:

```bash
npm run smoke:research-frequency
```

Optional target override (staging/pre-prod):

```bash
npm run smoke:research-frequency -- https://<staging-url>
```

Expected successful output:
- PASS lines for 4 route status checks.
- PASS lines for CTA presence and route-content separation.
- Final line: `Smoke check result: PASSED`.

## Fallback Remediation Order
1. Confirm Vercel production alias target deployment and deployed commit SHA.
2. Redeploy from latest `main` commit (avoid redeploying stale deployment artifacts).
3. Re-run `npm run smoke:research-frequency`.
4. Perform hard-refresh + incognito validation on desktop and mobile.
5. Validate DNS/project mapping points to the expected Vercel project/environment.
