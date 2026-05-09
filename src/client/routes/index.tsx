import { createFileRoute, Link } from "@tanstack/react-router"
import { buttonVariants } from "#/components/ui/button"
import { ElementBox } from "#/components/miranum/ElementBox"
import { MnTagline } from "#/components/miranum/MnTagline"
import { MnFeature } from "#/components/miranum/MnFeature"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
  return (
    <>
      <header className="border-rule mb-20 grid items-end gap-12 border-b pb-12 md:grid-cols-[1fr_auto]">
        <div>
          <MnTagline>Das fehlende Element fürs Handwerk.</MnTagline>
          <h1 className="text-h-display text-ink mt-6 max-md:text-[3rem]">
            Miranum
            <br />
            App Template.
          </h1>
          <p className="text-body-lg mt-6 max-w-[580px]">
            React-SPA + Hono-Backend mit den Miranum API-Clients (ClockIn, Dimacon, Lexoffice) und
            vollständigem Design-System.
          </p>
          <div className="mt-8 flex gap-3">
            <Link to="/modules" className={buttonVariants()}>
              Modules ansehen
            </Link>
            <Link to="/style-guide" className={buttonVariants({ variant: "secondary" })}>
              Style Guide
            </Link>
          </div>
        </div>
        <ElementBox no="01" symbol="Mn" name="Miranum" ig="WS" size="hero" />
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <MnFeature title="React + TanStack Router" accent="default">
          Type-safe File-Based Routing, Code-Splitting, devtools.
        </MnFeature>
        <MnFeature title="Hono Backend" accent="tools">
          /api-Routes, env-driven Client-Singletons, ein Dev-Befehl.
        </MnFeature>
        <MnFeature title="shadcn + Miranum" accent="ops">
          shadcn-Komponenten ge-themed auf Swiss Lab — square corners, Inter, Plex Mono.
        </MnFeature>
      </section>
    </>
  )
}
