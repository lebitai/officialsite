# LebitAI Official Website

## Overview

LebitAI is a static website for Web3 and Generative AI consulting services. Built with React and deployed to GitHub Pages.

**Domain**: https://lebit.ai  
**Repository**: https://github.com/lebitai/officialsite

## Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: Radix UI primitives with shadcn/ui
- **Styling**: TailwindCSS with custom CSS variables
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Font**: Inter (Google Fonts)

### Build & Development
- **Bundler**: Vite
- **Language**: TypeScript (ES modules)
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
officialsite/
├── src/
│   ├── components/
│   │   ├── layout/          # Navigation, Footer
│   │   ├── sections/        # Hero, Services, Consulting, TechStack
│   │   └── ui/              # Reusable UI components (button, card, etc.)
│   ├── hooks/               # use-language (i18n), use-toast
│   ├── lib/                 # Utilities (cn helper)
│   ├── pages/               # Home, NotFound
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML entry
├── .github/workflows/       # CI/CD (deploy.yml)
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.cjs
```

## Internationalization (i18n)

Supported languages:
- English (en) - Default
- German (de)
- French (fr)

Language detection:
1. Check localStorage for saved preference
2. Fall back to browser language
3. Default to English

Translation file: `src/hooks/use-language.tsx`

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Type check
npm run check

# Preview production build
npm run preview
```

## Deployment

Automatic deployment via GitHub Actions on push to `main` branch.

Manual deployment:
```bash
npm run build
# Output in dist/ directory
```

## External Services

### Payment
- **Stripe**: Payment links for consulting bookings
  - Quick Start Plan: $4.5
  - Deep Consulting Plan: $35.5

### Contact
- Email: hi@lebit.ai

### Social
- X (Twitter): https://x.com/lebit_ai
- LinkedIn: https://www.linkedin.com/in/lebitai/

## Code Style

- TypeScript strict mode
- Path aliases: `@/` → `src/`
- Component naming: PascalCase
- File naming: kebab-case

## Notes

- No backend API - static site only
- All translations inline in use-language.tsx
- Stripe payment via external links (no server-side integration)
