# Anusha Vernekar Portfolio Website

## Overview

This is a professional portfolio website for Anusha Vernekar, a Java Full Stack Developer specializing in telephony applications. The application is built using a modern full-stack architecture with React frontend and Express.js backend, featuring a contact form system and responsive design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack React Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Form Management**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form submissions
- **Session Management**: Express sessions with PostgreSQL store
- **Development Server**: Vite integration for hot module replacement

### Build System
- **Frontend Bundler**: Vite with React plugin
- **Backend Bundler**: esbuild for production builds
- **TypeScript**: Shared configuration across client/server/shared directories
- **Development**: tsx for TypeScript execution in development

## Key Components

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Neon PostgreSQL (configured via DATABASE_URL)
- **Schema**: Shared schema definitions in TypeScript
- **Migration**: Drizzle Kit for database migrations
- **Storage Abstraction**: Interface-based storage layer with in-memory fallback

### Authentication & Sessions
- **Session Store**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user table with username/password fields
- **Contact Management**: Form submissions stored in contacts table

### UI Components
- **Design System**: Complete Shadcn/ui component library
- **Theming**: Light/dark mode support with CSS custom properties
- **Icons**: Lucide React icon library
- **Forms**: Integrated form components with validation
- **Responsive**: Mobile-first responsive design

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form on frontend
   - Form validation using Zod schema
   - React Query mutation sends POST to `/api/contact`
   - Backend validates and stores in PostgreSQL
   - Success/error feedback via toast notifications

2. **Static Content Delivery**:
   - Vite serves static assets in development
   - Built assets served from Express in production
   - Hot module replacement in development environment

3. **Database Operations**:
   - Drizzle ORM handles database queries
   - Shared schema ensures type safety
   - Memory storage fallback for development

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Query)
- Express.js with TypeScript support
- Drizzle ORM with Neon PostgreSQL driver

### UI & Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography

### Development Tools
- Vite for fast development and building
- TypeScript for type safety
- ESLint and Prettier for code quality
- Replit-specific plugins for development environment

### Production Dependencies
- Neon Database for PostgreSQL hosting
- Session management with PostgreSQL storage
- Form validation with Zod schemas

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- tsx for running TypeScript backend
- Database: Neon PostgreSQL via DATABASE_URL
- Replit-specific cartographer plugin for debugging

### Production Build
- Frontend: Vite build to `dist/public`
- Backend: esbuild bundle to `dist/index.js`
- Static file serving from Express
- Environment variable configuration for database

### Environment Configuration
- DATABASE_URL for PostgreSQL connection
- NODE_ENV for environment detection
- Session configuration for security
- CORS and security middleware setup

## Changelog
- July 08, 2025: Initial setup - Built complete portfolio website with hero, about, projects, skills, experience, and contact sections
- July 08, 2025: Implemented dark interactive theme with glow effects, animations, and removed "Send Another Message" button from contact form
- July 08, 2025: Enhanced with real-time animations and 3D models on scroll - Added scroll-based reveal animations, 3D rotating elements, floating particles, and interactive visual effects throughout all sections
- July 08, 2025: Removed section borders and added cursor-following 3D model - Created seamless gradient transitions between sections and implemented advanced 3D cursor follower with multi-layered animations, glow effects, and smooth movement tracking
- July 08, 2025: Major portfolio enhancements - Added loading screen with progress animation, floating particles background, interactive skills showcase with click-to-expand details, advanced project showcase with detailed feature descriptions, typewriter text effect in hero section, and comprehensive animations throughout. Created professional-level interactive components with hover effects, skill level bars, project impact metrics, and technology stack displays.
- July 13, 2025: Enhanced cursor animation and floating skills display - Optimized cursor follower with smooth interpolation and hardware acceleration for buttery smooth movement. Replaced skills cards with floating interactive skill icons that bounce around the screen with physics-based animations and click interactions.

## User Preferences

Preferred communication style: Simple, everyday language.
Theme preference: Dark interactive theme with glow effects and smooth animations