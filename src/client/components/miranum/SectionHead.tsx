import { cn } from "#/lib/utils"
import { type ReactNode } from "react"

export interface SectionHeadProps {
  /** Mono kicker label, e.g. "Sektion · 02 / Pt" */
  kicker?: string
  /** Title, rendered as h2 with .text-h-1 */
  title: string
  /** Optional supporting paragraph below the title */
  description?: ReactNode
  className?: string
}

export function SectionHead({ kicker, title, description, className }: SectionHeadProps) {
  return (
    <div className={cn("mb-10", className)}>
      {kicker ? (
        <span className="mn-mono mn-mono-accent mb-3 inline-flex items-center gap-2">
          <span className="bg-mn-accent inline-block size-2" aria-hidden />
          {kicker}
        </span>
      ) : null}
      <h2 className="text-h-1 text-ink inline-block">
        {title}
        <span className="bg-mn-accent mt-3.5 block h-0.5 w-14" aria-hidden />
      </h2>
      {description ? <p className="text-body mt-4 max-w-[640px]">{description}</p> : null}
    </div>
  )
}
