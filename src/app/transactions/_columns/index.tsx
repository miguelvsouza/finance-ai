"use client"

import {
  Transaction,
  TransactionCategory,
  TransactionPaymentMethod,
} from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { TransactionTypeBadge } from "../_components/transaction-type-badge"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"

const TRANSACTION_CATEGORY_LABELS = {
  [TransactionCategory.EDUCATION]: "Educação",
  [TransactionCategory.ENTERTAINMENT]: "Entretenimento",
  [TransactionCategory.FOOD]: "Alimentação",
  [TransactionCategory.HEALTH]: "Saúde",
  [TransactionCategory.HOUSING]: "Moradia",
  [TransactionCategory.OTHER]: "Outros",
  [TransactionCategory.SALARY]: "Salário",
  [TransactionCategory.TRANSPORTATION]: "Transporte",
  [TransactionCategory.UTILITY]: "Utilidades",
}

const TRANSACTION_PAYMENT_METHOD_LABELS = {
  [TransactionPaymentMethod.BANK_SLIP]: "Boleto",
  [TransactionPaymentMethod.BANK_TRANSFER]: "Transferência Bancária",
  [TransactionPaymentMethod.CASH]: "Dinheiro",
  [TransactionPaymentMethod.CREDIT_CARD]: "Cartão de Crédito",
  [TransactionPaymentMethod.DEBIT_CARD]: "Cartão de Débito",
  [TransactionPaymentMethod.OTHER]: "Outros",
  [TransactionPaymentMethod.PIX]: "Pix",
}

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
      <div className="space-x-1">
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
