"use client"

import { cn } from "@/_lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { ReactNode } from "react"

const iconVariants = cva(
  "inline-flex h-10 w-10 items-center justify-center rounded-sm",
  {
    variants: {
      variant: {
        default: "bg-accent",
        info: "text-sky-400 bg-sky-950",
        success: "text-primary bg-primary/20",
        danger: "text-danger bg-danger/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface IconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconVariants> {
  children: ReactNode
}

function Icon({ children, className, variant, ...props }: IconProps) {
  return (
    <div
      className={cn(iconVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Icon, iconVariants }
