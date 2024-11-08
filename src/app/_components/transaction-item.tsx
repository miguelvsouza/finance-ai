"use client"

import { Icon } from "@/_components/icon"
import { TRANSACTION_TYPE_OPTIONS } from "@/_constants/transactions"
import { TransactionPaymentMethod, TransactionType } from "@prisma/client"
import { DollarSign } from "lucide-react"

interface TransactionItemProps {
  title: string
  type: TransactionType
  paymentMethod: TransactionPaymentMethod
  date: Date
  amount: number
}

function TransactionItem({ title, type, date, amount }: TransactionItemProps) {
  const [{ color }] = TRANSACTION_TYPE_OPTIONS.filter(
    (option) => option.value === type,
  )

  const formattedAmount = amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Icon>
          <DollarSign className="text-sm text-muted-foreground" />
        </Icon>
        <div>
          <p>{title}</p>
          <span className="text-sm text-muted-foreground">
            {date.toLocaleDateString("pt-BR")}
          </span>
        </div>
      </div>
      <span className={`text-sm font-semibold ${color}`}>
        {formattedAmount}
      </span>
    </div>
  )
}

export default TransactionItem
