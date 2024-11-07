import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import { NavLink } from "./nav-link"

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-b-muted px-8 py-4">
      <div className="flex items-center gap-12">
        <Image
          src="/logo.svg"
          alt="Finance AI"
          width={173}
          height={39}
          priority
        />
        <NavLink href="/">Dashboard</NavLink>
        <NavLink href="/transactions">Transações</NavLink>
        <NavLink href="/subscription">Assinatura</NavLink>
      </div>
      <UserButton showName />
    </header>
  )
}
