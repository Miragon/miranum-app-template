import { cn } from "#/lib/utils"
import { type ComponentProps } from "react"

function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "text-ink-2 block font-mono text-[0.7rem] font-medium tracking-[0.18em] uppercase",
        className,
      )}
      {...props}
    />
  )
}

export { Label }
