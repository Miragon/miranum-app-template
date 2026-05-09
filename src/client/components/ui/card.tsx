import { cn } from "#/lib/utils"
import { type ComponentProps } from "react"

function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div data-slot="card" className={cn("border-rule bg-paper border", className)} {...props} />
  )
}

function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-2 px-5 pt-5 pb-3", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn("text-ink text-base font-semibold tracking-tight", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p data-slot="card-description" className={cn("text-ink-2 text-sm", className)} {...props} />
  )
}

function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-5 pb-5", className)} {...props} />
}

function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("border-rule-soft flex items-center gap-2 border-t px-5 py-3", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
