# FlowPilot SaaS Demo

A simple static SaaS-style dashboard built with plain HTML, CSS, and JavaScript.

## Run locally

```bash
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Make it live with GitHub Pages

You have two easy options.

### Option A: Quick setup from GitHub UI (no workflow)

1. Push this repo to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: your default branch (for example `main`) and folder `/ (root)`
4. Click **Save**.
5. Wait ~1–2 minutes and open the URL GitHub shows (usually `https://<username>.github.io/<repo>/`).

### Option B: Automated deploy with GitHub Actions (included in this repo)

This repo includes `.github/workflows/deploy-pages.yml`, which deploys automatically whenever you push.

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to your chosen branch (`main`, `master`, or `work` as currently configured).
5. Open the deployed site URL shown in **Actions** or **Pages**.

## Notes

- This app is static, so GitHub Pages is a great fit.
- If you rename your default branch, update the `branches` list in `.github/workflows/deploy-pages.yml`.
