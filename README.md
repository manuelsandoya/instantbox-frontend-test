# InstantBox — Weather forecast widget challenge

This repository is **only** for the **InstantBox** front-end exercise: build a weather forecast widget from fixed markup so it matches the provided reference image. React and Vite are a thin shell; **your work is plain CSS** matching that design.

## Get the project

### Clone with Git

```bash
git clone <YOUR-REPO-URL>
cd instantbox-frontend-test
```

Replace `<YOUR-REPO-URL>` with the HTTPS or SSH URL your organization gives you (for example `https://github.com/your-org/instantbox-frontend-test.git`).

### Download as a ZIP (no Git)

You can unzip to **preview** the files locally, but **submission is a pull request** — you will need Git and a fork (or access to this repo) to open a PR.

## Objective

Recreate the **weather forecast widget** so it matches the reference image **`public/challenge-target.png`**.

- **Do not** change the markup in `src/App.tsx`.
- Implement the look by editing **`src/challenge/weather.css` only** (variables and selectors are provided; you fill in the styles).
- There is **no time limit**; you are judged on the **final visual result** and sensible CSS, not speed.

More detail: **[CHALLENGE.md](CHALLENGE.md)**.

## Submit your work (pull request)

Hand in your solution by **opening a pull request to this repository**.

1. **Fork** this repo (if you do not have write access) or **clone** it and create a **branch** from the default branch (for example `challenge/your-name`).
2. Implement the widget in **`src/challenge/weather.css`** only, following the rules above.
3. Run **`npm run build`** and **`npm run lint`**; fix any issues.
4. **Commit** your changes and **push** your branch to your fork (or to this repo if you have access).
5. Open a **pull request** into this project’s default branch. Use a clear title (for example “InstantBox weather widget — your name”) and, if helpful, a short note in the description.

Your organization may give you a target branch, labels, or reviewers — follow those instructions if provided.

## Run locally

Requirements: **Node.js** (LTS recommended) and **npm**.

```bash
npm install
npm run dev
```

The dev server runs on port **5175** (see `vite.config.ts`). Open the URL shown in the terminal.

## Checks before you open the PR

```bash
npm run build
npm run lint
```

Both should complete without errors before you push and open your pull request.
