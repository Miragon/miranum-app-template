import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "#/lib/utils"
import { type ReactNode } from "react"

const featureVariants = cva("border border-rule bg-paper border-l-[3px] p-5", {
  variants: {
    accent: {
      default: "border-l-mn-accent",
      finance: "border-l-grp-finance",
      ops: "border-l-grp-ops",
      time: "border-l-grp-time",
      tools: "border-l-grp-tools",
      ai: "border-l-grp-ai",
    },
  },
  defaultVariants: { accent: "default" },
})

export interface MnFeatureProps extends VariantProps<typeof featureVariants> {
  title: string
  children: ReactNode
  className?: string
}

export function MnFeature({ title, children, accent, className }: MnFeatureProps) {
  return (
    <div className={cn(featureVariants({ accent }), className)}>
      <h4 className="text-ink mb-2 text-[0.95rem] font-semibold">{title}</h4>
      <p className="text-body-sm m-0">{children}</p>
    </div>
  )
}
