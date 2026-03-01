# vytautas.dev

Personal blog and portfolio site. Built with Astro, styled with Tailwind CSS, written in a monospace font because that's how I like it.

I'm Vytautas — a self-taught software engineer with 9+ years of experience building web applications. This site is where I write about things I learn, share my work history, and keep a public record of what I'm up to.

## Tech

- **Astro 5** — static site generation, content collections, file-based routing
- **Tailwind CSS v4** — utility-first styling via Vite plugin
- **MDX** — blog posts with component support
- **Biome** — formatting and linting (tabs, double quotes, semicolons)
- **Bun** — package manager and runtime

## Structure

```
src/
├── components/       # Header, Footer, Socials, SEO, structured data
├── content/blog/     # Blog posts as .md / .mdx files
├── layouts/          # BaseLayout wrapping all pages
├── pages/
│   ├── index.astro       # Homepage
│   ├── portfolio.astro   # About me, experience, skills
│   └── blog/
│       ├── index.astro   # Post listing
│       └── [id].astro    # Individual post
├── styles/
│   └── global.css        # Tailwind imports, retro button/link styles
└── content.config.ts     # Content collection schema
```

## Running locally

```sh
bun install
bun run dev        # localhost:4321
bun run build      # production build to ./dist/
bun run check      # lint + format
```

## License

Content and code are mine. Feel free to look around for inspiration, but please don't copy the site wholesale.
