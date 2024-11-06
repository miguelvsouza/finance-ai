import { User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-b-muted px-8 py-6">
      <div className="flex items-center gap-12">
        <Image
          src="/logo.svg"
          alt="Finance AI"
          width={173}
          height={39}
          priority
        />
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground"
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className="text-muted-foreground hover:text-foreground"
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className="text-muted-foreground hover:text-foreground"
        >
          Assinatura
        </Link>
      </div>
      <Button variant="outline">
        <User />
        <span>Miguel Souza</span>
      </Button>
    </header>
  )
}
