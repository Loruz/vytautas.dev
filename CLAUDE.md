# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog and portfolio site built with Astro 5, using Tailwind CSS v4 for styling and MDX for blog content. The site is statically generated and optimized for SEO.

## Development Commands

```bash
# Development
bun run dev             # Start dev server at localhost:4321

# Build & Preview
bun run build           # Build production site to ./dist/
bun run preview         # Preview production build locally

# Code Quality
bun run format          # Format code with Biome
bun run lint            # Lint and fix with Biome
bun run check           # Run Biome checks and fixes

# Astro CLI
bun run astro ...       # Run any Astro CLI command
```

## Architecture

### Tech Stack

- **Framework**: Astro 5 (SSG mode)
- **Styling**: Tailwind CSS v4 (via Vite plugin)
- **Content**: Astro Content Collections with MDX support
- **Formatting/Linting**: Biome (replaces ESLint + Prettier)

### Directory Structure

```
src/
├── components/         # Reusable Astro components
│   ├── MainHead.astro     # SEO meta tags, Open Graph, structured data
│   ├── StructuredData.astro  # JSON-LD schema.org markup
│   ├── Header.astro       # Site navigation
│   └── Footer.astro       # Site footer
├── layouts/           # Layout components
│   └── BaseLayout.astro   # Base page layout with head/body structure
├── pages/             # File-based routing (becomes URLs)
│   ├── index.astro        # Homepage
│   ├── portfolio.astro    # Portfolio page
│   ├── rss.xml.ts         # RSS feed generation
│   └── blog/
│       ├── index.astro    # Blog listing
│       └── [id].astro     # Dynamic blog post pages
├── content/           # Content Collections
│   └── blog/             # Blog posts (markdown/MDX)
├── styles/
│   └── global.css        # Global styles + Tailwind imports
├── utils/
│   └── index.ts          # Utility functions
└── content.config.ts  # Content Collections schema
```

**IMPORTANT: Development Server Limitation**
DO NOT run npm run dev in agent mode - this will create an endless loop and stop the agent from working properly
Instead, use npm run build to verify your changes

### Key Architectural Patterns

**1. Content Collections**

- Blog posts are managed via Astro Content Collections (see `content.config.ts`)
- Posts are in `src/content/blog/` as `.md` or `.mdx` files
- Schema includes: title, description, pubDate, updatedDate, draft, tags, image (optional)
- Use `getCollection("blog")` to query posts
- Filter drafts with `.filter((p) => !p.data.draft)` in production

**2. SEO Implementation**

- Comprehensive SEO setup in `MainHead.astro`:
    - Open Graph tags for social sharing
    - Twitter Card tags
    - Canonical URLs
    - JSON-LD structured data (via `StructuredData.astro`)
    - RSS feed link
    - Sitemap link
- Two page types: "website" (default) and "article" (blog posts)
- Article pages pass `type="article"`, `publishedTime`, and optional `image`
- Site URL configured in `astro.config.mjs` (`site: "https://vytautas.dev"`)
- Auto-generated sitemap at `/sitemap-index.xml` (via `@astrojs/sitemap`)
- RSS feed at `/rss.xml` generated from blog posts

**3. Layout Hierarchy**

- `BaseLayout.astro` is the root layout for all pages
- It includes `MainHead.astro`, `Header.astro`, main content slot, and `Footer.astro`
- Pages pass title, description, and optional SEO props (image, type, publishedTime, author)

**4. Styling**

- Tailwind CSS v4 (Vite plugin, not PostCSS)
- Custom theme color: `#166534` (green-800)
- Uses `@tailwindcss/typography` for blog post prose styling
- Utility-first approach with custom prose modifiers in blog posts

## Code Style (Biome)

The project uses Biome for formatting and linting with these conventions:

- **Indentation**: Tabs (width: 4)
- **Line width**: 100 characters
- **Quotes**: Double quotes
- **Semicolons**: Always
- **Trailing commas**: ES5 style
- Ignores: `dist/`, `node_modules/`, `.astro/`, `public/`, CSS files

## Important Files

- `astro.config.mjs` - Astro configuration, integrations (MDX, sitemap), site URL
- `content.config.ts` - Content Collections schema definition
- `biome.json` - Code style configuration
- `public/robots.txt` - Search engine crawling instructions
- `src/pages/rss.xml.ts` - RSS feed generator
- `.env.example` - Example environment variables (copy to `.env` and fill in values)

## Environment Variables

Create a `.env` file in the project root for environment-specific configuration:

```bash
# Copy the example file
cp .env.example .env
```

**Available variables:**

- `PUBLIC_GA_MEASUREMENT_ID` - Google Analytics measurement ID (format: `G-XXXXXXXXXX`)
  - Optional: Analytics only loads if this is set
  - Get your ID from [Google Analytics](https://analytics.google.com/)
  - The `PUBLIC_` prefix makes it available in the browser

**Note:** The `.env` file is gitignored. Never commit sensitive values.

## Working with Blog Posts

**Create a new post:**

```bash
# Create src/content/blog/my-new-post.md
```

**Frontmatter schema:**

```yaml
---
title: 'Post Title' # Required
description: 'Post description' # Optional
pubDate: 2025-02-17 # Required (date)
updatedDate: 2025-02-18 # Optional (date)
draft: false # Optional (default: false)
tags: ['javascript', 'astro'] # Optional (array)
image: '/blog-images/post-image.jpg' # Optional (for OG image)
---
```

**Draft posts:**

- Set `draft: true` in frontmatter
- Automatically filtered from production builds in all queries
- Also filtered from sitemap via config

## Common Tasks

**Add a new page:**

- Create `.astro` file in `src/pages/`
- Wrap content in `<BaseLayout>`
- File name becomes the route (e.g., `about.astro` → `/about`)

**Update SEO defaults:**

- Edit `MainHead.astro` for meta tags
- Edit default author, descriptions in `BaseLayout.astro` and `MainHead.astro`
- Update site URL in `astro.config.mjs`

**Modify global styles:**

- Edit `src/styles/global.css`
- Tailwind directives are at the top of this file

**Before committing:**

```bash
bun run check  # Format, lint, and fix issues
```
