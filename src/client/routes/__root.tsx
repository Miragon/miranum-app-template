import { Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"
import { PageChrome } from "../components/PageChrome.js"

import "../styles.css"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <PageChrome />
      <main className="mx-auto max-w-[1240px] px-12 pt-20 pb-24 max-md:px-6 max-md:pt-6 max-md:pb-12">
        <Outlet />
      </main>
      <TanStackDevtools
        config={{ position: "bottom-left" }}
        plugins={[{ name: "TanStack Router", render: <TanStackRouterDevtoolsPanel /> }]}
      />
    </>
  )
}
