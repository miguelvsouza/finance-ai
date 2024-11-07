import CreateTransactionModal from "@/_components/create-transaction"
import { Header } from "@/_components/header"
import { Icon } from "@/_components/icon"
import { Button } from "@/_components/ui/button"
import { Separator } from "@/_components/ui/separator"
import {
  ChevronDown,
  Eye,
  FileText,
  PiggyBank,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react"
import TransactionItem from "./_components/transaction-item"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard - Finance AI",
}

function DashboardPage() {
  return (
    <div className="h-screen">
      <Header />

      <div className="grid space-y-6 px-8 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <div className="space-x-3">
            <Button variant="ghost">
              <span>Relatório IA</span>
              <FileText />
            </Button>
            <Button
              className="rounded-full"
              variant="outline"
            >
              <span>Novembro</span>
              <ChevronDown />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2 space-y-6">
            <div className="space-y-3 rounded-md border px-6 py-8 transition hover:bg-muted/20">
              <div className="flex items-center gap-2">
                <Icon>
                  <Wallet size={18} />
                </Icon>
                <h3 className="text-sm text-muted-foreground">Saldo</h3>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold tracking-tight">
                    R$ 2.700
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                  >
                    <Eye />
                  </Button>
                </div>
                <CreateTransactionModal />
              </div>
            </div>

            <div className="flex items-center justify-between gap-6">
              <div className="flex flex-1 flex-col gap-3 rounded-md border p-6 transition hover:bg-muted/20">
                <div className="flex items-center gap-2">
                  <Icon variant="info">
                    <PiggyBank size={18} />
                  </Icon>
                  <h3 className="text-sm text-muted-foreground">
                    Investimentos
                  </h3>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  R$ 3.500
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 rounded-md border p-6 transition hover:bg-muted/20">
                <div className="flex items-center gap-2">
                  <Icon variant="success">
                    <TrendingUp size={18} />
                  </Icon>
                  <h3 className="text-sm text-muted-foreground">Receitas</h3>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  R$ 3.500
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 rounded-md border p-6 transition hover:bg-muted/20">
                <div className="flex items-center gap-2">
                  <Icon variant="danger">
                    <TrendingDown size={18} />
                  </Icon>
                  <h3 className="text-sm text-muted-foreground">Despesas</h3>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  R$ 3.500
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="space-y-6 rounded-md border p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold tracking-tight">Transações</h3>
                <Link href="/transactions">
                  <Button
                    variant="outline"
                    size="sm"
                  >
                    Ver mais
                  </Button>
                </Link>
              </div>

              <Separator />

              <div className="space-y-6">
                <TransactionItem
                  amount={15000}
                  date={new Date()}
                  title="Salário"
                  type="DEPOSIT"
                  paymentMethod="CASH"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
