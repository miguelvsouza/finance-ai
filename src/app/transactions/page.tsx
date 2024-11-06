import { Header } from "@/components/header"
import { DataTable } from "@/components/ui/data-table"
import { transactionColumns } from "./_columns"
import { prisma } from "@/lib/prisma"
import AddTransactionDialog from "@/components/add-transaction-dialog"

async function TransactionsPage() {
  const transactions = await prisma.transaction.findMany()

  return (
    <div>
      <Header />

      <div className="space-y-6 px-8 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Transações</h2>
          <AddTransactionDialog />
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
