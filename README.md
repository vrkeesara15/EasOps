# EAS OPS AI Solutions

A production-ready marketing site for **EAS OPS AI Solutions** built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features
- Next.js 14 App Router with TypeScript
- Tailwind CSS styling with dark UI aesthetic
- Framer Motion animations
- Reusable components (Navbar, Footer, Hero, ServicesGrid, Testimonials, ContactForm)
- SEO metadata per page
- Responsive layouts for mobile and desktop
- Dockerfile and docker-compose for containerized deployments

## Getting Started

### Prerequisites
- Node.js 18+ (Node 20 recommended)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
npm run start
```

## Environment Variables
Copy `.env.example` to `.env.local` (or `.env`) and update values.

| Variable | Description |
| --- | --- |
| NEXT_PUBLIC_SITE_URL | Public site URL for metadata |

## Docker
Build and run the container locally:
```bash
docker compose up --build
```

The app will be available at http://localhost:3000.

## Project Structure
- `app/` - Next.js app router pages and layout
- `components/` - Reusable UI components
- `public/images/` - Placeholder images
- `app/globals.css` - Global Tailwind styles

## Deployment
The Dockerfile produces a minimal production image running `next start`. Ensure environment variables are provided in your target environment.
