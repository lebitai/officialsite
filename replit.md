# Overview

LebitAI is a modern full-stack web application that provides Web3 and Generative AI consulting services. The platform features a professional landing page with service offerings, technology showcases, and an integrated Stripe payment system for consulting bookings. Built with a React frontend and Express backend, the application emphasizes clean design and seamless user experience for technical consulting services.

**Language**: English-only website (Chinese language support has been removed as per user request)

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Framer Motion for smooth animations and transitions

## Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for fast production builds
- **API Design**: RESTful endpoints with proper error handling middleware

## Database & ORM
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Type Safety**: Full end-to-end type safety from database to frontend using Drizzle Zod

## Development Environment
- **Bundler**: Vite for fast development builds and HMR
- **Development Server**: Vite dev server with Express API proxy
- **Static Assets**: Served through Vite in development, Express in production
- **Path Aliases**: Configured for clean imports (@/ for client, @shared/ for shared code)

## Data Storage Strategy
- **Production**: PostgreSQL database through Neon Database connection
- **Development**: In-memory storage implementation for rapid development
- **Storage Interface**: Abstract storage pattern allowing easy switching between implementations
- **Data Models**: Consulting orders and contact messages with proper validation

# External Dependencies

## Payment Processing
- **Stripe**: Complete payment infrastructure for consulting session bookings
- **Features**: Checkout sessions, payment confirmation, customer management
- **Integration**: Server-side Stripe SDK with secure API key management

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: Direct connection via DATABASE_URL environment variable
- **Features**: Auto-scaling, branching, and serverless architecture

## UI Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Icons**: Lucide React for consistent iconography
- **Social Icons**: React Icons for platform-specific icons

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **Theme Management**: Dynamic theme configuration with JSON-based theming
- **Error Handling**: Runtime error overlay for development debugging

## Hosting & Deployment
- **Platform**: Configured for Replit deployment
- **Environment**: Production builds optimized for Node.js runtime
- **Static Assets**: Bundled and served from Express in production