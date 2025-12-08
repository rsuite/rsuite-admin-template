# RSuite Admin Template

A Next.js + TypeScript admin dashboard template built with [RSuite](https://rsuitejs.com/).

Provides a modern layout, prebuilt pages (dashboard, forms, calendar, auth, error pages) and a themeable design system based on CSS variables and RSuite themes.

![preview](https://rsuite-admin-template.vercel.app/images/preview-1.png)

![preview](https://rsuite-admin-template.vercel.app/images/preview-2.png)

## Tech stack

- **Framework**: Next.js (App Router)
- **UI Library**: RSuite
- **Language**: TypeScript
- **Styling**: CSS modules + global CSS variables (light / dark / system themes)

## Getting started

Clone the repository:

```bash
git clone git@github.com:<YOUR_NAME>/rsuite-admin-template.git
cd rsuite-admin-template
```

Install dependencies:

```bash
npm install
```

Run the development server (default: http://127.0.0.1:3000):

```bash
npm run dev
```

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Create a production build
- `npm run start` – Run the production build

## Theming

The template uses CSS variables and RSuite theme tokens to support light, dark and system themes.

- Global variables are defined in `src/app/globals.css`
- Layout and components consume variables instead of hardcoded colors
- Theme switching is implemented in the sidebar user menu

## License

MIT
