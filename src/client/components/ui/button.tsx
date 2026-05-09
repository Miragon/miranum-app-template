import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "#/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 border whitespace-nowrap text-sm font-medium tracking-tight outline-none select-none transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-1px] focus-visible:outline-[var(--mn-accent)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-ink text-paper border-ink hover:bg-ink-2 hover:border-ink-2",
        secondary: "bg-paper text-ink border-ink hover:bg-paper-3",
        outline: "bg-paper text-ink border-rule hover:border-ink-2",
        ghost: "border-transparent text-ink hover:bg-paper-2",
        accent:
          "bg-mn-accent text-paper border-mn-accent hover:bg-[var(--mn-accent-deep)] hover:border-[var(--mn-accent-deep)]",
        link: "border-transparent text-ink underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-[0.8rem]",
        lg: "h-11 px-5",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
