# Md. Rakibul Hasan — Portfolio (React + TypeScript)

A component-based rebuild of the portfolio, converted from the original
single-file HTML/CSS/JS version into a Vite + React + TypeScript project.

## Getting started

```bash
npm install
npm run dev       # starts a local dev server (usually http://localhost:5173)
```

Other scripts:

```bash
npm run build      # type-checks, then builds a production bundle into dist/
npm run preview    # serves the production build locally to sanity-check it
```

> This project was put together in an offline sandbox, so `npm install` was
> never actually run against it here — please run it yourself and open an
> issue-to-self (or just fix it) if anything doesn't compile. The most likely
> friction point is a version mismatch in `package.json`; bump versions if
> `npm install` complains.

## Project structure

```
src/
  main.tsx              — React entry point
  App.tsx               — assembles every section in order
  index.css             — global design tokens + component styles
  types/index.ts         — shared TypeScript types for all content models
  data/                  — content, separated from presentation
    navigation.ts         nav links, social links, Codeforces/CodeChef URLs
    identity.ts            identity chip content
    focus.ts                engineering focus list + quote
    experience.ts           real work history (YOGO POS, Solve IT, itcroc)
    skills.ts                skills grid, grouped by category
    projects.ts              project case-study placeholders
    foundations.ts           CS foundations + AI flow + DSA journey
    terminalSequence.ts      hero terminal typing script
  hooks/
    useCodeforcesStats.ts   live Codeforces API integration (see below)
    useReveal.ts             scroll-triggered fade-in (IntersectionObserver)
    useCustomCursor.ts       custom cursor dot/ring behavior
    useTerminalTyping.ts     hero terminal typing animation
  components/             one folder per section, each a small component
    Header, Hero, Terminal, IdentityChips, Focus, PhotoFrame, Experience,
    Skills, Projects, ProblemSolving, Foundations, AISection, Contact,
    Footer, CustomCursor, Reveal, Icons
  assets/
    profile.jpg            extracted from the original inline base64 image
```

Each section is its own component that reads from a typed data file — to
change copy, edit the data file; to change layout, edit the component.

## Live Codeforces stats

`src/hooks/useCodeforcesStats.ts` calls the public, no-key-required
Codeforces API directly from the browser:

- `GET /api/user.info?handles=theSaviours` → rating, max rating, rank
- `GET /api/user.status?handle=theSaviours` → submission history, which the
  hook reduces to a de-duplicated **solved problem count**

If the request fails (offline, rate-limited, handle renamed), the component
falls back to the last-known static values in `ProblemSolving.tsx`
(`CODEFORCES_FALLBACK`) so the UI never shows a broken state — it just loses
the small "live" dot next to the Codeforces name. Update that fallback
object occasionally so it stays reasonably close to reality even when the
API call doesn't run (e.g. static export, no JS).

**CodeChef stats stay manual.** CodeChef does not publish an official,
documented public API the way Codeforces does, so `CODECHEF_STATS` in
`ProblemSolving.tsx` is a plain object you update by hand when your rating
changes. If you later find/build a reliable CodeChef data source, swap it in
the same way `useCodeforcesStats` is wired up.

## Filling in real projects

`src/data/projects.ts` currently holds three placeholder case studies
(flagship full-stack product, AI-powered product, micro SaaS/dev tool). Each
placeholder has `isPlaceholder: true`, which renders the dashed border and
"Add your project" badge. Replace the placeholder content with real details
and set `isPlaceholder: false` to remove the badge.

## Notes

- No CSS framework — `index.css` is a straight port of the original
  hand-written CSS (custom properties for the color system, JetBrains Mono +
  Inter for type).
- The custom cursor and terminal-typing effects are implemented as hooks
  rather than direct DOM scripts, so they clean up properly on unmount and
  respect `prefers-reduced-motion`.
- No routing/state library — the whole thing is a single page, so plain
  `useState`/`useEffect` covers everything needed.
