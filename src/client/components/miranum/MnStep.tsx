import { cn } from "#/lib/utils"
import { type ComponentProps, type ReactNode } from "react"

export interface MnStepProps {
  /** Two-digit ordinal, e.g. "01" */
  marker: string
  title: string
  children?: ReactNode
}

export function MnStep({ marker, title, children }: MnStepProps) {
  return (
    <div className="border-rule grid grid-cols-[90px_1fr] items-start gap-0 border-t py-4 first:border-t-0">
      <div className="text-mn-accent pt-1 font-mono text-[13px] font-semibold tracking-[0.08em]">
        {marker}
        <span className="text-ink-3 font-normal"> / Mn</span>
      </div>
      <div>
        <strong className="text-ink block text-base font-semibold">{title}</strong>
        {children ? <p className="text-body-sm mt-1.5">{children}</p> : null}
      </div>
    </div>
  )
}

export function MnStepList({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("border-rule border-t border-b", className)} {...props} />
}
