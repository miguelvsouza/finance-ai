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
          <DollarSign className="text-xs text-muted-foreground md:text-sm" />
        </Icon>
        <div>
          <p className="text-sm md:text-base">{title}</p>
          <span className="text-xs text-muted-foreground md:text-sm">
            {date.toLocaleDateString("pt-BR")}
          </span>
        </div>
      </div>
      <span className={`text-xs font-semibold md:text-sm ${color}`}>
        {formattedAmount}
      </span>
    </div>
  )
}

export default TransactionItem
