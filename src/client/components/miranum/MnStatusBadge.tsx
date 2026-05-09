import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "#/lib/utils"
import { type ReactNode } from "react"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[0.7rem] font-medium tracking-[0.14em] uppercase",
  {
    variants: {
      variant: {
        default: "border-ink bg-paper text-ink",
        ok: "border-ink bg-ink text-paper",
        warn: "border-mn-accent bg-paper text-mn-accent",
      },
    },
    defaultVariants: { variant: "default" },
  },
)

export interface MnStatusBadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode
  className?: string
}

export function MnStatusBadge({ variant, children, className }: MnStatusBadgeProps) {
  const showDot = variant === "ok" || variant === "warn"
  return (
    <span className={cn(badgeVariants({ variant }), className)}>
      {showDot ? <span aria-hidden>●</span> : null}
      {children}
    </span>
  )
}
