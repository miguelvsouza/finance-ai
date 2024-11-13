import CreateTransactionModal from "@/_components/create-transaction"
import { Header } from "@/_components/header"
import { Icon } from "@/_components/icon"
import { Button } from "@/_components/ui/button"
import { Separator } from "@/_components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/_components/ui/tooltip"
import {
  ChevronDown,
  Eye,
  FileText,
  PiggyBank,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import TransactionItem from "./_components/transaction-item"

export const metadata: Metadata = {
  title: "Dashboard - Finance AI",
}

export default function DashboardPage() {
  return (
    <div className="h-full">
      <Header />

      <div className="grid w-full space-y-6 px-8 py-6">
        <div className="flex items-center justify-between">
          <h2 className="hidden font-bold tracking-tight md:block md:text-2xl">
            Dashboard
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Button
              className="rounded-full"
              variant="outline"
            >
              <span>Novembro</span>
              <ChevronDown />
            </Button>
            <Button variant="ghost">
              <span>Relatório IA</span>
              <FileText />
            </Button>
          </div>
        </div>

        <div className="grid w-full grid-cols-3 gap-6 md:gap-10">
          <div className="col-span-3 space-y-6 md:col-span-2">
            <div className="space-y-3 rounded-md border px-6 py-8 md:transition md:hover:bg-muted/20">
              <div className="flex items-center gap-2">
                <Icon>
                  <Wallet size={18} />
                </Icon>
                <h3 className="text-sm text-muted-foreground">Saldo</h3>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight md:text-4xl">
                    R$ 2.700,00
                  </span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                      >
                        <Eye />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Ocultar</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="hidden md:block">
                  <CreateTransactionModal />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-6 overflow-x-auto">
              <div className="flex flex-1 flex-col gap-3 rounded-md border p-6 md:transition md:hover:bg-muted/20">
                <div className="flex items-center gap-2">
                  <Icon variant="success">
                    <TrendingUp size={18} />
                  </Icon>
                  <h3 className="text-sm text-muted-foreground">Receitas</h3>
                </div>
                <span className="font-bold tracking-tight md:text-xl">
                  R$ 3.500,00
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 rounded-md border p-6 md:transition md:hover:bg-muted/20">
                <div className="flex items-center gap-2">
                  <Icon variant="danger">
                    <TrendingDown size={18} />
                  </Icon>
                  <h3 className="text-sm text-muted-foreground">Despesas</h3>
                </div>
                <span className="font-bold tracking-tight md:text-xl">
                  R$ 3.500,00
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 rounded-md border p-6 md:transition md:hover:bg-muted/20">
                <div className="flex items-center gap-2">
                  <Icon variant="info">
                    <PiggyBank size={18} />
                  </Icon>
                  <h3 className="text-sm text-muted-foreground">
                    Investimentos
                  </h3>
                </div>
                <span className="font-bold tracking-tight md:text-xl">
                  R$ 3.500,00
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <div className="space-y-6 rounded-md border p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold tracking-tight md:text-xl">
                  Transações
                </h3>
                <Link href="/transactions">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs md:text-sm"
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
