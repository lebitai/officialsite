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

### Custom Domain Configuration (lebit.ai)

#### Step 1: DNS Configuration

Add the following DNS records at your domain registrar:

**Option A: Apex domain (lebit.ai)**
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**Option B: www subdomain (www.lebit.ai)**
```
Type: CNAME
Name: www
Value: lebitai.github.io
```

**Recommended: Both apex and www**
```
# A records for apex domain
Type: A     Name: @    Value: 185.199.108.153
Type: A     Name: @    Value: 185.199.109.153
Type: A     Name: @    Value: 185.199.110.153
Type: A     Name: @    Value: 185.199.111.153

# CNAME for www redirect
Type: CNAME Name: www  Value: lebitai.github.io
```

#### Step 2: GitHub Pages Settings

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select `GitHub Actions`
3. Under **Custom domain**, enter `lebit.ai`
4. Check **Enforce HTTPS** (after DNS propagation)

#### Step 3: Verify

- DNS propagation may take up to 24-48 hours
- Check status at: https://github.com/lebitai/officialsite/settings/pages
- Test with: `dig lebit.ai` or `nslookup lebit.ai`

## Environment

No environment variables required for the static site.

## License

MIT © LebitAI
