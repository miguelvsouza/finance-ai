"use client"

import { Button } from "@/_components/ui/button"
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from "@/_constants/transactions"
import { Transaction } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { Pencil, Trash2 } from "lucide-react"
import { TransactionTypeBadge } from "../_components/transaction-type-badge"

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      transaction.date.toLocaleDateString("pt-BR"),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      transaction.amount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => (
      <div className="flex items-center justify-end space-x-1">
        <Button
          className="text-muted-foreground"
          variant="ghost"
          size="icon"
        >
          <Pencil />
        </Button>
        <Button
          className="text-muted-foreground"
          variant="ghost"
          size="icon"
        >
          <Trash2 />
        </Button>
      </div>
    ),
  },
]
