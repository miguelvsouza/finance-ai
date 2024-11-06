import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { ArrowDownUp } from "lucide-react"
import { transactionColumns } from "./_columns"
import { prisma } from "@/lib/prisma"

async function TransactionsPage() {
  const transactions = await prisma.transaction.findMany()

  return (
    <div>
      <Header />

      <div className="space-y-6 px-8 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Transações</h2>
          <Button className="rounded-full font-bold">
            <span>Adicionar Transação</span>
            <ArrowDownUp />
          </Button>
        </div>

        <DataTable
          columns={transactionColumns}
          data={transactions}
        />
      </div>
    </div>
  )
}

export default TransactionsPage
