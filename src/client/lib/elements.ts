/**
 * Miranum element registry — the "periodic table" data behind ElementBox grids.
 * Add or remove entries as needed for your project.
 */

export type ElementGroup = "finance" | "ops" | "time" | "tools" | "ai" | "ui" | "ws" | "go"

export interface MiranumElement {
  no: string
  symbol: string
  name: string
  /** 2-letter group code shown in top-right of the box */
  ig: string
  /** Color group (only finance/ops/time/tools/ai render with color) */
  group?: Extract<ElementGroup, "finance" | "ops" | "time" | "tools" | "ai">
  description?: string
}

export const MIRANUM_ELEMENTS: MiranumElement[] = [
  { no: "01", symbol: "Mn", name: "Miranum", ig: "WS", description: "Plattform" },
  { no: "02", symbol: "Pt", name: "Portal", ig: "UI", description: "Browser-Oberfläche" },
  {
    no: "03",
    symbol: "Lx",
    name: "Lexoffice",
    ig: "BU",
    group: "finance",
    description: "Buchhaltung & Rechnungen",
  },
  {
    no: "04",
    symbol: "Sv",
    name: "sevdesk",
    ig: "BU",
    group: "finance",
    description: "Buchhaltung & Rechnungen",
  },
  {
    no: "05",
    symbol: "Om",
    name: "orgaMAX",
    ig: "BU",
    group: "finance",
    description: "Buchhaltung & Rechnungen",
  },
  {
    no: "06",
    symbol: "Dm",
    name: "Dimacon",
    ig: "BS",
    group: "ops",
    description: "Baustellenmanagement",
  },
  {
    no: "07",
    symbol: "Ck",
    name: "ClockIn",
    ig: "ZE",
    group: "time",
    description: "Zeiterfassung",
  },
  {
    no: "08",
    symbol: "Hi",
    name: "Hilti",
    ig: "WK",
    group: "tools",
    description: "Werkzeug & Material",
  },
  {
    no: "09",
    symbol: "Mc",
    name: "MCP",
    ig: "KI",
    group: "ai",
    description: "Model Context Protocol",
  },
  {
    no: "10",
    symbol: "Cl",
    name: "Claude",
    ig: "KI",
    group: "ai",
    description: "AI Assistent",
  },
  {
    no: "11",
    symbol: "Cp",
    name: "ChatGPT",
    ig: "KI",
    group: "ai",
    description: "AI Assistent",
  },
]

export function findElement(symbol: string): MiranumElement | undefined {
  return MIRANUM_ELEMENTS.find((e) => e.symbol === symbol)
}
