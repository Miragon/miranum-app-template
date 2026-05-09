import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "#/lib/utils"
import { type ComponentProps } from "react"

const elementBoxVariants = cva(
  "grid aspect-[4/5] grid-rows-[auto_1fr_auto] border border-ink bg-paper text-ink",
  {
    variants: {
      size: {
        sm: "w-[92px] p-[7px_8px_8px]",
        md: "w-[132px] p-[10px_12px_12px]",
        lg: "w-[220px] p-[14px_16px_16px]",
        hero: "w-[320px] p-[18px_22px_22px]",
      },
      group: {
        none: "",
        finance: "[--ebox-color:var(--grp-finance)]",
        ops: "[--ebox-color:var(--grp-ops)]",
        time: "[--ebox-color:var(--grp-time)]",
        tools: "[--ebox-color:var(--grp-tools)]",
        ai: "[--ebox-color:var(--grp-ai)]",
      },
    },
    defaultVariants: { size: "md", group: "none" },
  },
)

const numClass = cva("flex justify-between font-mono text-ink-2", {
  variants: {
    size: { sm: "text-[9px]", md: "text-[12px]", lg: "text-[14px]", hero: "text-[16px]" },
  },
  defaultVariants: { size: "md" },
})

const symClass = cva(
  "self-center justify-self-center font-sans font-bold tracking-[-0.04em] leading-none",
  {
    variants: {
      size: { sm: "text-[38px]", md: "text-[60px]", lg: "text-[110px]", hero: "text-[168px]" },
      group: {
        none: "text-ink",
        finance: "text-[var(--ebox-color)]",
        ops: "text-[var(--ebox-color)]",
        time: "text-[var(--ebox-color)]",
        tools: "text-[var(--ebox-color)]",
        ai: "text-[var(--ebox-color)]",
      },
    },
    defaultVariants: { size: "md", group: "none" },
  },
)

const nameClass = cva("text-center font-mono uppercase text-ink-2", {
  variants: {
    size: {
      sm: "text-[8px] tracking-[0.14em]",
      md: "text-[10px] tracking-[0.18em]",
      lg: "text-[12px] tracking-[0.2em]",
      hero: "text-[13px] tracking-[0.22em]",
    },
  },
  defaultVariants: { size: "md" },
})

const numEmClass = cva("not-italic font-semibold", {
  variants: {
    group: {
      none: "text-mn-accent",
      finance: "text-[var(--ebox-color)]",
      ops: "text-[var(--ebox-color)]",
      time: "text-[var(--ebox-color)]",
      tools: "text-[var(--ebox-color)]",
      ai: "text-[var(--ebox-color)]",
    },
  },
  defaultVariants: { group: "none" },
})

export interface ElementBoxProps
  extends Omit<ComponentProps<"div">, "children">, VariantProps<typeof elementBoxVariants> {
  /** Two-digit ordinal, e.g. "01" */
  no: string
  /** Two-letter symbol, e.g. "Lx" */
  symbol: string
  /** Module name, displayed at bottom */
  name: string
  /** Group code shown in top-right (e.g. "BU", "BS", "ZE") */
  ig: string
}

export function ElementBox({
  no,
  symbol,
  name,
  ig,
  size = "md",
  group = "none",
  className,
  ...props
}: ElementBoxProps) {
  return (
    <div className={cn(elementBoxVariants({ size, group }), className)} {...props}>
      <div className={numClass({ size })}>
        <em className={numEmClass({ group })}>{no}</em>
        <span>{ig}</span>
      </div>
      <div className={symClass({ size, group })}>{symbol}</div>
      <div className={nameClass({ size })}>{name}</div>
    </div>
  )
}
