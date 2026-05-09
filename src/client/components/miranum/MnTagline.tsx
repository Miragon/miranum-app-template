import { cn } from "#/lib/utils"
import { type ComponentProps } from "react"

export function MnTagline({ className, children, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "border-mn-accent bg-paper text-mn-accent inline-block border px-3 py-1.5 font-mono text-[11px] font-medium tracking-[0.22em] uppercase",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
