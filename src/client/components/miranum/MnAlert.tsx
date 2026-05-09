import { cn } from "#/lib/utils"
import { type ReactNode } from "react"

export interface MnAlertProps {
  /** Mono uppercase label, e.g. "Hinweis", "Wichtig" */
  label: string
  children: ReactNode
  className?: string
}

export function MnAlert({ label, children, className }: MnAlertProps) {
  return (
    <div
      className={cn(
        "border-rule border-l-mn-accent bg-paper text-ink-2 border border-l-[3px] px-4 py-3 text-sm",
        className,
      )}
    >
      <strong className="text-mn-accent mb-1.5 block font-mono text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
        {label}
      </strong>
      {children}
    </div>
  )
}
