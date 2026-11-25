# Manifest Business Services — Website

Marketing site for [Manifest Business Services](https://manifestbizz.com), Dubai company formation experts.

Built with Next.js (App Router, Cache Components), React, TypeScript, and Tailwind CSS v4. Every route is statically prerendered and mirrors the original WordPress URL structure (trailing slashes included).

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

- `src/app/` — routes (one folder per page, matching the original site URLs)
- `src/components/` — shared UI (header, footer, hero video, sections, forms)
- `src/content/` — site data: contact details, navigation, services, FAQs, blog posts
- `public/video/` — Dubai hero video (1080p + 720p mobile variant)
- `public/images/` — photography and brand assets

The consultation form composes a WhatsApp message to the Manifest team; no backend is required.
