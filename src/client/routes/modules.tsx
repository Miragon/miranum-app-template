import { createFileRoute } from "@tanstack/react-router"
import { ElementBox } from "#/components/miranum/ElementBox"
import { SectionHead } from "#/components/miranum/SectionHead"
import { MnStatusBadge } from "#/components/miranum/MnStatusBadge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#/components/ui/table"
import { MIRANUM_ELEMENTS } from "#/lib/elements"

export const Route = createFileRoute("/modules")({ component: Modules })

const ACTIVE_SYMBOLS = new Set(["Dm", "Mc"])

function Modules() {
  const modules = MIRANUM_ELEMENTS.filter((e) => e.group)

  return (
    <>
      <header className="border-rule relative mb-12 border px-10 py-8">
        <span className="mn-mono mn-mono-accent inline-flex items-center gap-2">
          <span className="bg-mn-accent inline-block size-2" aria-hidden /> Bereich · 02 / Pt
        </span>
        <h1 className="text-h-1 text-ink mt-3 inline-block">
          Module
          <span className="bg-mn-accent mt-3.5 block h-0.5 w-14" aria-hidden />
        </h1>
        <p className="text-body mt-3 max-w-[540px]">
          Aktive und verfügbare Module. Ein Klick zum Konfigurieren.
        </p>
        <div className="absolute top-6 right-6 max-md:hidden">
          <ElementBox no="02" symbol="Pt" name="Portal" ig="UI" size="sm" />
        </div>
      </header>

      <section className="mb-16">
        <SectionHead kicker="Sektion · 01 / Übersicht" title="Module-Grid." />
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((m) => (
            <div key={m.symbol} className="flex items-center gap-5">
              <ElementBox
                no={m.no}
                symbol={m.symbol}
                name={m.name}
                ig={m.ig}
                group={m.group}
                size="sm"
              />
              <div>
                <h3 className="text-h-4 text-ink">{m.name}</h3>
                {m.description ? <p className="text-body-sm mt-0.5">{m.description}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHead kicker="Sektion · 02 / Status" title="Aktivierung." />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">No.</TableHead>
              <TableHead className="w-20">Symbol</TableHead>
              <TableHead>Modul</TableHead>
              <TableHead>Gruppe</TableHead>
              <TableHead className="w-32">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {modules.map((m) => (
              <TableRow key={m.symbol}>
                <TableCell>
                  <span className="mn-mono mn-mono-accent">{m.no}</span>
                </TableCell>
                <TableCell className="font-semibold">{m.symbol}</TableCell>
                <TableCell>{m.name}</TableCell>
                <TableCell className="text-ink-2">{m.description}</TableCell>
                <TableCell>
                  {ACTIVE_SYMBOLS.has(m.symbol) ? (
                    <MnStatusBadge variant="ok">Aktiv</MnStatusBadge>
                  ) : (
                    <MnStatusBadge>Inaktiv</MnStatusBadge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  )
}
