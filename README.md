# Claude Code Test

A React-based demo website with a Tic-Tac-Toe game, deployed via GitHub Pages.

## Features

- Homepage with a coder's greeting poem
- Interactive Tic-Tac-Toe game built with React

## Deployment

This site deploys automatically via GitHub Pages from the `docs` folder when pushing to `main` or via PR.

**GitHub Pages Setup:** Configure to serve from the `docs` folder on the `main` branch.

## Local Development

```bash
cd react-app
npm install
npm run dev
```

## Build

```bash
cd react-app
npm run build
```

This outputs the production build to the `docs` folder.

## Tech Stack

- React 18
- Vite
- React Router (HashRouter for GitHub Pages compatibility)
