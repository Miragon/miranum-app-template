import { createFileRoute } from "@tanstack/react-router"
import { Button } from "#/components/ui/button"
import { Input } from "#/components/ui/input"
import { Label } from "#/components/ui/label"
import { ElementBox } from "#/components/miranum/ElementBox"
import { SectionHead } from "#/components/miranum/SectionHead"
import { MnTagline } from "#/components/miranum/MnTagline"
import { MnFeature } from "#/components/miranum/MnFeature"
import { MnAlert } from "#/components/miranum/MnAlert"
import { MnStep, MnStepList } from "#/components/miranum/MnStep"
import { MnStatusBadge } from "#/components/miranum/MnStatusBadge"

export const Route = createFileRoute("/style-guide")({ component: StyleGuide })

function StyleGuide() {
  return (
    <>
      <header className="border-rule mb-20 grid items-end gap-12 border-b pb-12 md:grid-cols-[1fr_auto]">
        <div>
          <MnTagline>Design Tokens · Komponenten · Patterns</MnTagline>
          <h1 className="text-h-display text-ink mt-6 max-md:text-[3rem]">Style Guide.</h1>
          <p className="text-body-lg mt-6 max-w-[580px]">
            Alle Primitives in Aktion. Lebende Dokumentation — wenn etwas hier fehlt, ist es kein
            offizielles Pattern.
          </p>
        </div>
        <ElementBox no="01" symbol="Mn" name="Miranum" ig="WS" size="hero" />
      </header>

      <section className="mb-20">
        <SectionHead
          kicker="Sektion · 01 / Farben"
          title="Palette."
          description="Disziplin: weiß plus drei Grautöne plus EIN Akzent. Element-Gruppenfarben sind nur für ElementBox-Tiles."
        />
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { name: "Paper", hex: "#FFFFFF", token: "--mn-paper", style: "bg-paper" },
            { name: "Paper 2", hex: "#F6F6F4", token: "--mn-paper-2", style: "bg-paper-2" },
            { name: "Paper 3", hex: "#EFEEEA", token: "--mn-paper-3", style: "bg-paper-3" },
            { name: "Rule", hex: "#D8D8D4", token: "--mn-rule", style: "bg-rule" },
            { name: "Ink 3", hex: "#9A9A96", token: "--mn-ink-3", style: "bg-ink-3" },
            { name: "Ink 2", hex: "#6B6B6B", token: "--mn-ink-2", style: "bg-ink-2" },
            { name: "Ink", hex: "#0A0A0A", token: "--mn-ink", style: "bg-ink" },
            { name: "Accent", hex: "#E6332A", token: "--mn-accent", style: "bg-mn-accent" },
          ].map((s) => (
            <Swatch key={s.name} {...s} />
          ))}
        </div>
        <h3 className="text-h-3 text-ink mb-4">Element-Gruppen</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {[
            {
              name: "Buchhaltung",
              hex: "#E6332A",
              token: "--grp-finance",
              style: "bg-grp-finance",
            },
            { name: "Baustelle", hex: "#D97706", token: "--grp-ops", style: "bg-grp-ops" },
            { name: "Zeit", hex: "#6B21A8", token: "--grp-time", style: "bg-grp-time" },
            { name: "Werkzeug", hex: "#047857", token: "--grp-tools", style: "bg-grp-tools" },
            { name: "KI / MCP", hex: "#2563EB", token: "--grp-ai", style: "bg-grp-ai" },
          ].map((s) => (
            <Swatch key={s.name} {...s} />
          ))}
        </div>
      </section>

      <section className="mb-20">
        <SectionHead kicker="Sektion · 02 / Typografie" title="Type-Scale." />
        <div className="border-rule space-y-6 border-y py-8">
          <ScaleRow token=".text-h-display">
            <span className="text-h-display">Mn</span>
          </ScaleRow>
          <ScaleRow token=".text-h-1">
            <span className="text-h-1">Was ist Miranum?</span>
          </ScaleRow>
          <ScaleRow token=".text-h-2">
            <span className="text-h-2">Verfügbare Module</span>
          </ScaleRow>
          <ScaleRow token=".text-h-3">
            <span className="text-h-3">Lexoffice / sevdesk</span>
          </ScaleRow>
          <ScaleRow token=".text-body-lg">
            <span className="text-body-lg">
              Eine Plattform die Ihre Werkzeuge bündelt — Portal & MCP, einfach erklärt.
            </span>
          </ScaleRow>
          <ScaleRow token=".text-body">
            <span className="text-body">
              Mitarbeiter einladen und pro Person festlegen, was er nutzen darf.
            </span>
          </ScaleRow>
          <ScaleRow token=".mn-mono">
            <span className="mn-mono">Kapitel · 02 / Pt</span>
          </ScaleRow>
        </div>
      </section>

      <section className="mb-20">
        <SectionHead
          kicker="Sektion · 03 / Element-Box"
          title="Element-Box."
          description="Das zentrale visuelle Token. 4:5-Box mit Ordnungsnummer, Gruppe, Symbol, Name."
        />
        <h3 className="text-h-3 text-ink mb-4">Größen</h3>
        <div className="mb-12 flex flex-wrap items-end gap-8">
          <SizeDemo size="sm" symbol="Mc" name="MCP" no="09" ig="KI" />
          <SizeDemo size="md" symbol="Pt" name="Portal" no="02" ig="UI" />
          <SizeDemo size="lg" symbol="Mn" name="Miranum" no="01" ig="WS" />
          <SizeDemo size="hero" symbol="Mn" name="Miranum" no="01" ig="WS" />
        </div>
        <h3 className="text-h-3 text-ink mb-4">Element-Gruppen</h3>
        <div className="flex flex-wrap gap-2">
          <ElementBox no="03" symbol="Lx" name="Lexoffice" ig="BU" group="finance" />
          <ElementBox no="06" symbol="Dm" name="Dimacon" ig="BS" group="ops" />
          <ElementBox no="07" symbol="Ck" name="ClockIn" ig="ZE" group="time" />
          <ElementBox no="08" symbol="Hi" name="Hilti" ig="WK" group="tools" />
          <ElementBox no="09" symbol="Mc" name="MCP" ig="KI" group="ai" />
        </div>
      </section>

      <section className="mb-20">
        <SectionHead kicker="Sektion · 04 / Komponenten" title="Komponenten." />
        <div className="grid gap-8 md:grid-cols-2">
          <Demo title="Buttons">
            <div className="flex flex-wrap gap-3">
              <Button>Anmelden</Button>
              <Button variant="secondary">Abbrechen</Button>
              <Button variant="accent">Veröffentlichen</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </Demo>

          <Demo title="Status">
            <div className="flex flex-wrap gap-2">
              <MnStatusBadge variant="ok">Aktiv</MnStatusBadge>
              <MnStatusBadge>Inaktiv</MnStatusBadge>
              <MnStatusBadge variant="warn">Achtung</MnStatusBadge>
            </div>
          </Demo>

          <Demo title="Form">
            <div className="max-w-[420px] space-y-3">
              <div>
                <Label className="mb-1.5">E-Mail</Label>
                <Input placeholder="ihre.adresse@betrieb.de" />
              </div>
              <Button>Code anfordern</Button>
            </div>
          </Demo>

          <Demo title="Alerts">
            <div className="space-y-3">
              <MnAlert label="Hinweis">Kein neues Passwort, keine extra App.</MnAlert>
              <MnAlert label="Wichtig">
                Sie müssen nichts neu lernen. Ihre Programme bleiben.
              </MnAlert>
            </div>
          </Demo>

          <Demo title="Feature">
            <div className="space-y-3">
              <MnFeature title="Verbindet">
                Lexoffice, Dimacon, ClockIn, Hilti & mehr — unter einer Oberfläche.
              </MnFeature>
              <MnFeature title="Verwaltet Team" accent="tools">
                Mitarbeiter, Rechte und Zugänge zentral.
              </MnFeature>
            </div>
          </Demo>

          <Demo title="Steps">
            <MnStepList>
              <MnStep marker="01" title="Portal öffnen">
                Adresse Ihres Betriebs aufrufen.
              </MnStep>
              <MnStep marker="02" title="E-Mail eingeben">
                Mit Ihrer geschäftlichen Adresse anmelden.
              </MnStep>
              <MnStep marker="03" title="Code bestätigen">
                Einmalcode aus der E-Mail eingeben.
              </MnStep>
            </MnStepList>
          </Demo>
        </div>
      </section>

      <section>
        <SectionHead kicker="Sektion · 05 / Disziplin" title="Do · Don't." />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-rule border-l-grp-tools border border-l-[3px] p-6">
            <h4 className="text-grp-tools font-mono text-[0.7rem] tracking-[0.2em] uppercase">
              Do
            </h4>
            <ul className="text-ink-2 mt-3 list-disc space-y-2 pl-5 text-sm">
              <li>
                Akzent-Rot <strong className="text-ink">nur</strong> für eine Sache pro Bildschirm.
              </li>
              <li>
                Element-Gruppen-Farben <strong className="text-ink">ausschließlich</strong> auf
                ElementBox.
              </li>
              <li>Mono-Schrift für Daten, Metainformationen, Labels.</li>
              <li>Quadratische Ecken überall — keine Rundungen.</li>
              <li>Generös Whitespace lassen.</li>
              <li>1px-Borders, niemals Schatten.</li>
            </ul>
          </div>
          <div className="border-rule border-l-mn-accent border border-l-[3px] p-6">
            <h4 className="text-mn-accent font-mono text-[0.7rem] tracking-[0.2em] uppercase">
              Don't
            </h4>
            <ul className="text-ink-2 mt-3 list-disc space-y-2 pl-5 text-sm">
              <li>Keine Drop-Shadows. Keine Glasmorphism.</li>
              <li>Keine Gradients. Volle Farben oder Weiß.</li>
              <li>Keine Element-Gruppen-Farben für UI-Aktionen.</li>
              <li>Keine zweite Display-Schrift einführen.</li>
              <li>Keine ElementBox-Rotation oder Schräglage.</li>
              <li>Keine Emoji-Icons in Produktiv-Apps.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

function Swatch({
  name,
  hex,
  token,
  style,
}: {
  name: string
  hex: string
  token: string
  style: string
}) {
  return (
    <div className="border-rule bg-paper border p-3.5">
      <div className={`border-ink aspect-[3/2] w-full border ${style}`} />
      <div className="text-ink mt-3 text-sm font-semibold">{name}</div>
      <div className="text-ink-2 mt-0.5 font-mono text-[11px]">{hex}</div>
      <div className="text-ink-3 mt-0.5 font-mono text-[10px]">{token}</div>
    </div>
  )
}

function ScaleRow({ token, children }: { token: string; children: React.ReactNode }) {
  return (
    <div className="grid items-center gap-6 md:grid-cols-[120px_1fr]">
      <code className="text-ink-2 font-mono text-[0.75rem]">{token}</code>
      <div>{children}</div>
    </div>
  )
}

function SizeDemo({
  size,
  ...rest
}: {
  size: "sm" | "md" | "lg" | "hero"
  symbol: string
  name: string
  no: string
  ig: string
}) {
  return (
    <div>
      <ElementBox size={size} {...rest} />
      <div className="mn-mono mt-2">.{size}</div>
    </div>
  )
}

function Demo({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-h-3 text-ink mb-3">{title}</h3>
      {children}
    </div>
  )
}
