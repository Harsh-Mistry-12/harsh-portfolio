# Portfolio Enhancement Plan

## Overview
Add several improvements to Harsh Mistry's portfolio:
1. **Display a profile photo** in the Hero section
2. **Ensure light theme** is clean and polished
3. **Add a Volunteering section**
4. **"View Project" detail pages** — a blog-style project showcase that opens in a new page

---

## Open Questions

> [!IMPORTANT]
> **Profile Photo**: Do you have a photo of yourself to upload? Please add it as `public/photo.jpg` (or similar). If not, I can use a professional placeholder avatar for now.

> [!IMPORTANT]
> **Volunteering Data**: What volunteering activities do you want listed? (organizations, roles, dates, descriptions). I'll use placeholder data from what's already in your `data.ts` (e.g., CNCF, GDG Gandhinagar, KCD Gujarat) — let me know if you'd like to add or change anything.

> [!IMPORTANT]
> **Project Pages (Blog-style)**: Each project page will have:
> - Title, description, tech stack
> - Detailed write-up / what was done
> - Photo gallery (placeholder images I'll generate)
> 
> Do you have real screenshots/photos for any project? You can drop them in `public/projects/<project-name>/`.

---

## Proposed Changes

### 1. Profile Photo in Hero

#### [MODIFY] [Hero.tsx](file:///d:/Harsh/Community/portfolio/components/sections/Hero.tsx)
- Add a circular profile photo beside the name/title text (two-column layout on desktop, stacked on mobile)
- Use `next/image` with `src="/photo.jpg"` (with a fallback placeholder)
- Add subtle ring + animation around the photo

---

### 2. Light Theme Polish

The CSS is already light (`globals.css`). I'll ensure:
- All glassmorphism cards use proper light-mode frosted glass
- Section backgrounds alternate slightly to add depth
- No dark residual `mix-blend-screen` causing washed colors on light bg (fix to `multiply` or remove)

#### [MODIFY] [globals.css](file:///d:/Harsh/Community/portfolio/app/globals.css)

---

### 3. Volunteering Section

#### [NEW] [Volunteering.tsx](file:///d:/Harsh/Community/portfolio/components/sections/Volunteering.tsx)
- Timeline-style card layout showing each volunteering role
- Data: CNCF, GDG Gandhinagar, Open Source Weekend, Pixelverse.community, KCD Gujarat

#### [MODIFY] [data.ts](file:///d:/Harsh/Community/portfolio/lib/data.ts)
- Add `volunteering` export array with org, role, period, description

#### [MODIFY] [page.tsx](file:///d:/Harsh/Community/portfolio/app/page.tsx)
- Import and render `<Volunteering />` section

---

### 4. Project Detail Pages (Blog-style)

Each project gets its own page at `/projects/[slug]`.

#### [NEW] [app/projects/[slug]/page.tsx](file:///d:/Harsh/Community/portfolio/app/projects/)
- Dynamic route that looks up project by slug from `data.ts`
- Blog-style layout: hero banner, description, "What I Built", tech stack pills, photo gallery, back button

#### [MODIFY] [data.ts](file:///d:/Harsh/Community/portfolio/lib/data.ts)
- Add `slug`, `longDescription`, `details` (array of sections), `images` (array of paths) to each project

#### [MODIFY] [Projects.tsx](file:///d:/Harsh/Community/portfolio/components/sections/Projects.tsx)
- Add a **"View Project →"** button/link on each card that routes to `/projects/[slug]`

#### [NEW] [app/projects/page.tsx](file:///d:/Harsh/Community/portfolio/app/projects/page.tsx)
- Optional projects index page listing all projects (linked from nav)

---

## Verification Plan

### Manual Verification
- Open `http://localhost:3000` and confirm:
  - [ ] Profile photo renders in hero (or placeholder avatar if no photo)
  - [ ] Light theme looks clean and polished
  - [ ] Volunteering section appears between Education and Contact
  - [ ] Each project card has a "View Project" button
  - [ ] Clicking "View Project" opens the blog-style detail page in the same tab (new page route)
  - [ ] Project detail page shows title, description, tech stack, photo gallery, back button
