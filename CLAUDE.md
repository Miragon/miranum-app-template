# Miranum App Template — Agent Notes

## Architektur

Single-Repo, pnpm-Workspace. Frontend + Backend in einem Service:

```
src/client/      React SPA (TanStack Router, Vite, Tailwind v4)
src/server/      Hono Backend (Port 3020)
  ├─ lib/        env reader + lazy client singletons
  └─ routes/     /api/{clockin,dimacon,lexoffice}/...
packages/clients/{clockin,dimacon,lexoffice}/   workspace API clients
```

Dev: `pnpm dev` startet Client + Server parallel. Vite proxied `/api` → Hono.
Prod: `pnpm build` (Vite-Client) + `pnpm start` (`tsx src/server/index.ts`,
serviert API + Static). Keine TanStack Start Server-Functions — alle externen
API-Calls laufen über Hono-Routes.

## Design-Disziplin (Miranum "Swiss Lab")

Quelle der Wahrheit: `.context/attachments/style-guide.html`. Tokens leben in
`src/client/styles.css`. shadcn-Variablen sind dort auf `--mn-*` gemappt; jede
shadcn-Komponente erbt das Theme automatisch.

**Do**:

- **Square corners überall**. `--radius: 0` ist gesetzt, jede Tailwind-Radius-Stufe
  ist auf `0` zwangs-gemappt. Wenn etwas rund aussieht, ist's ein Bug.
- **1px-Borders**. Keine Schatten, keine Glasmorphism, keine Gradients.
- **Akzent-Rot** (`bg-mn-accent` / `--mn-accent`) **nur einmal pro Screen** —
  Kicker, Tagline oder ein einziger Primär-CTA. Nicht für Standard-Buttons.
- **Mono-Schrift** (`font-mono`, `mn-mono`) für Labels, Daten, Metadaten,
  Kicker. Inter für alles Lesbare.
- **Group-Farben** (`grp-finance`, `grp-ops`, `grp-time`, `grp-tools`, `grp-ai`)
  **ausschließlich** auf `<ElementBox>` und `<MnFeature accent="…">`. Niemals
  für Buttons, Links, Status, sonstige UI-Aktionen.
- Generös Whitespace. „Zu wenig" ist meistens richtig.

**Don't**:

- Keine zweite Display-Schrift einführen.
- Keine `rounded-*`-Utilities auf Komponenten kleben — das negiert die
  Design-Sprache.
- Keine Drop-Shadows / `shadow-*`.
- Keine Group-Farben für UI-Aktionen.
- Keine Emoji-Icons in Produktiv-UI (für Demos OK). Lucide-Icons (`lucide-react`)
  sind installiert.
- Keine ElementBox-Rotation/Schräglage — sie ist ein technisches Token, kein
  dekoratives.
- Keine Dark-Mode-Variante hinzufügen ohne explizite Anforderung — das Style-Guide
  ist bewusst light-only.

## Komponenten-Quellen

- **shadcn-Primitives** (`#/components/ui/*.tsx`): Button, Input, Label, Card,
  Table — Miranum-ge-themed. Beim Hinzufügen neuer shadcn-Komponenten via
  `npx shadcn add <name>` **alle Rundungen, Shadows, Akzent-Farben prüfen**
  und an Miranum anpassen, bevor du sie verwendest.
- **Miranum-Primitives** (`#/components/miranum/*`): ElementBox, SectionHead,
  MnTagline, MnFeature, MnAlert, MnStep / MnStepList, MnStatusBadge — die
  einzigartigen Patterns aus dem Style-Guide.
- **Element-Registry** (`#/lib/elements.ts`): `MIRANUM_ELEMENTS` als Quelle für
  Module-Listen. Neue Module hier hinzufügen, dann via `MIRANUM_ELEMENTS.filter(...)`
  rendern.

## Pages-Konvention

- `/` — Landing/Dashboard (Hero + Feature-Grid)
- `/modules` — Beispiel App-Surface mit Page-Header-Pattern + Module-Grid + Tabelle
- `/style-guide` — lebende Dokumentation aller Primitives. **Nicht löschen** wenn
  das Template als Basis weiterverwendet wird; sie ist die schnellste Referenz für
  Claude/Devs zu schauen, was verfügbar ist und wie's aussieht.

## Quality Gates

`pnpm typecheck && pnpm lint && pnpm format:check && pnpm build` müssen alle grün
sein. Pre-Commit-Hook erzwingt das via Husky + lint-staged.

## Backend / Env

API-Tokens: `process.env`-Variablen, lazy validation beim ersten Request. Variablen
und Pflichtangaben siehe README. Niemals API-Tokens als `VITE_*` exportieren —
Browser-Bundle ist public.
