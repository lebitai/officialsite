# Repository Guidelines

## Project Structure & Module Organization
This repository is a Vite-based React 18 + TypeScript marketing site. Application code lives in `src/`. Use `src/components/layout/` for shared chrome such as navigation and footer, `src/components/sections/` for homepage sections, and `src/components/ui/` for reusable primitives. Route-level pages live in `src/pages/`, hooks in `src/hooks/`, config data in `src/config/`, and helpers in `src/lib/`. Static files such as images, `CNAME`, and SEO assets belong in `public/`. Production output is generated into `dist/`.

## Build, Test, and Development Commands
- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the local Vite dev server.
- `npm run build`: run TypeScript checks, then create the production bundle in `dist/`.
- `npm run preview`: serve the built site locally for a production-like check.
- `npm run check`: run `tsc` with strict project settings.
- `npm run lint`: run ESLint on `src/**/*.{ts,tsx}`.
- `npm run precommit`: full local gate; runs type checks, linting, and production build.

## Coding Style & Naming Conventions
Use TypeScript with strict compiler settings and 2-space indentation. Prefer function components and absolute imports via `@/` for files under `src/`. Follow existing naming patterns: PascalCase for React component symbols (`LanguageProvider`), kebab-case for file names (`tech-stack.tsx`, `not-found.tsx`), and `use-` prefixes for hooks (`use-language.tsx`). Keep Tailwind utility usage close to the component; put shared data or text variants in `src/config/` when reuse is needed.

## Testing Guidelines
There is currently no dedicated test runner configured in this repository. Treat `npm run check`, `npm run lint`, and `npm run build` as the required verification baseline before opening a PR. If you add tests, prefer colocated `*.test.ts` or `*.test.tsx` files near the feature they cover and document the new command in `package.json`.

## Commit & Pull Request Guidelines
Recent history uses short imperative messages, often with Conventional Commit prefixes such as `feat:` and `docs:`. Follow that pattern when possible, for example `feat: add multilingual pricing copy`. Keep each commit focused. PRs should include a concise summary, linked issue or task when applicable, screenshots or short recordings for UI changes, and the exact verification commands you ran.

## Security & Configuration Tips
This is a static site and currently requires no environment variables. Keep deployment-sensitive values out of docs and commits. Treat files in `public/` as publicly shipped assets.
