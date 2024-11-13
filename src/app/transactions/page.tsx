import CreateTransactionModal from "@/_components/create-transaction"
import { Header } from "@/_components/header"
import { DataTable } from "@/_components/ui/data-table"
import { prisma } from "@/_database/prisma"
import { transactionColumns } from "./_columns"
import type { Metadata } from "next"
import { auth } from "@/_services/auth/auth"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Transações - Finance AI",
}

async function TransactionsPage() {
  const session = await auth()

  if (!session?.user?.email) {
    redirect("/sign-in")
  }

  const transactions = await prisma.transaction.findMany({
    where: {
      user: {
        email: session.user.email,
      },
    },
    orderBy: { date: "desc" },
  })

  return (
    <div>
      <Header />

      <div className="space-y-6 px-8 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Transações</h2>
          <CreateTransactionModal />
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
