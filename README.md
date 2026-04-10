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

On GitHub (or your host): open the repository page → **Code** → **Download ZIP**. Unzip the folder, then in a terminal:

```bash
cd instantbox-frontend-test
```

## Objective

Recreate the **weather forecast widget** so it matches the reference image **`public/challenge-target.png`**.

- **Do not** change the markup in `src/App.tsx`.
- Implement the look by editing **`src/challenge/weather.css` only** (variables and selectors are provided; you fill in the styles).
- There is **no time limit**; you are judged on the **final visual result** and sensible CSS, not speed.

More detail: **[CHALLENGE.md](CHALLENGE.md)**.

## Run locally

Requirements: **Node.js** (LTS recommended) and **npm**.

```bash
npm install
npm run dev
```

The dev server runs on port **5175** (see `vite.config.ts`). Open the URL shown in the terminal.

## Checks before you submit

```bash
npm run build
npm run lint
```

Both should complete without errors.
