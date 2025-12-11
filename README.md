# LebitAI Official Website

LebitAI official website - Web3 & OSAASC (Open Source Agentic AI Storage Computing) consulting services.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animation**: Framer Motion
- **i18n**: English, German, French
- **Deployment**: GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── layout/          # Navigation, Footer
│   │   ├── sections/        # Hero, Services, Consulting, TechStack
│   │   └── ui/              # Reusable UI components
│   ├── hooks/               # Custom React hooks (useLanguage, useToast)
│   ├── pages/               # Page components
│   └── lib/                 # Utility functions
├── public/                  # Static assets
├── index.html               # Entry HTML
└── dist/                    # Build output
```

## Deployment

### GitHub Pages (Automatic)

Push to `main` branch triggers automatic deployment via GitHub Actions.

### Custom Domain Configuration

For custom domain setup, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Environment

No environment variables required for the static site.

## License

MIT © LebitAI
