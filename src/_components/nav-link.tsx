"use client"

import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface NavLinkProps extends LinkProps {
  children: ReactNode
}

export function NavLink(props: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      data-current={pathname === props.href}
      className="text-muted-foreground hover:text-foreground data-[current=true]:text-primary"
      {...props}
    >
      {props.children}
    </Link>
  )
}
