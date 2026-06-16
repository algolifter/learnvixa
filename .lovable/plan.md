# Learnvixa: Sustainable Development Mode

Preserve everything that exists. Add admin-only roadmap/prioritization layers, graceful "Coming Soon" fallbacks, and admin productivity tools. Current active scope = Class 12 (already in repo).

## 1. Database (one migration)

Add three small tables + extend `content_nodes` with a `development_status` column.

- `content_nodes.development_status` enum-as-text: `active` | `planned` | `future` | `coming_soon` (default `coming_soon`). Class 12 nodes seeded to `active`.
- `roadmap_items` — admin-managed roadmap entries
  - fields: `title`, `description`, `status` (`completed` | `in_progress` | `planned`), `category` (text), `sort_order`
  - RLS: anyone authenticated can read; only admins can write
- `content_templates` — reusable chapter/item templates the admin can clone
  - fields: `name`, `description`, `template_type` (`chapter` | `item`), `payload` (jsonb)
  - RLS: admin-only read/write
- (Future-ready) extend `app_role` enum with `teacher`, `subject_expert`, `moderator`. No UI for these yet — admin remains the only manager. `has_role` already supports any value.

All tables: GRANTs, RLS, `updated_at` trigger using existing `set_updated_at`.

## 2. Admin: Development Progress page

New route `/admin/roadmap` (admin-only via `useUserRole`):

- **Roadmap board** — three columns (Completed / In Progress / Planned). Add / edit / delete / drag-to-reorder (simple up/down buttons, no DnD library).
- **Content completion stats** — computed live from `content_nodes` + `content_items`:
  - % of subjects with ≥1 published chapter
  - % of chapters with ≥1 published item (notes / 1-mark / 2-mark / 3-mark / 5-mark / AI teacher coverage)
  - Per-class breakdown and a "missing chapters" list
- Link entry from `/admin` dashboard.

## 3. Content prioritization

In `AdminContentPage`'s `NodeEditor`, add a `development_status` selector (Active / Planned / Future Expansion / Coming Soon). Show the status as a colored chip in the tree.

## 4. "Coming Soon" placeholders (user-facing, non-breaking)

Add a shared `<ComingSoon />` component (uses existing glassmorphism + Orbitron styling, mission-control aesthetic). Render it in:

- `SubjectPage` when a chapter has no static content AND no DB items, OR when its node is `planned` / `future` / `coming_soon`
- `ChapterPage` / `ContentPage` when the requested section is empty
- Category/Class/Exam pages when no published children exist

App keeps navigating; nothing throws. Existing Class 12 paths are unaffected because their content already resolves through `getChapterContent()`.

## 5. Admin productivity tools (inside `AdminContentPage`)

Add a productivity toolbar on the chapter list level:

- **Duplicate chapter** — clones a `content_nodes` row + all child `content_items` under the same subject with " (copy)" suffix
- **Bulk create chapter placeholders** — modal: pick subject, enter count N and a name pattern (e.g. "Chapter {n}"); inserts N empty chapter nodes with `development_status = 'coming_soon'`
- **Save as template** / **Apply template** — persists a chapter (with its items) into `content_templates`; "Apply" creates a new chapter from a chosen template
- **Search & filter missing chapters** — search box + filter chips: All / Missing notes / Missing 5-mark / Missing AI teacher / Status = X. Backed by a derived list from `content_nodes` + `content_items` joined with the static registry (`listChapters()`).

## 6. Contributor-ready (schema only)

Roles enum extended now so future contributor roles can be granted without another migration. UI / permission gates stay admin-only this iteration; a `// TODO: contributor roles` comment notes where to widen `useUserRole` checks later.

## Technical notes

- Routes added in `src/App.tsx`: `/admin/roadmap`
- New files:
  - `src/pages/AdminRoadmapPage.tsx`
  - `src/components/ComingSoon.tsx`
  - `src/components/admin/RoadmapBoard.tsx`
  - `src/components/admin/ContentStats.tsx`
  - `src/components/admin/ChapterProductivityBar.tsx`
  - `src/lib/contentCoverage.ts` (joins static `listChapters()` with DB rows)
- Edited:
  - `src/pages/AdminPage.tsx` — add link to Roadmap
  - `src/pages/AdminContentPage.tsx` — status chip, productivity toolbar, search/filter
  - `src/pages/SubjectPage.tsx`, `src/pages/ChapterPage.tsx`, `src/pages/ContentPage.tsx` — render `<ComingSoon />` when empty
- No changes to: auth flow, dev-mode auto sign-in, existing static Class 12 content, study progress, AI teacher, Pomodoro, Calm Mode.

## Out of scope (stays for later)

- Contributor (teacher/expert/moderator) UIs and permissions
- Drag-and-drop reordering library
- Per-user "watch this chapter" notifications when Coming Soon ships
