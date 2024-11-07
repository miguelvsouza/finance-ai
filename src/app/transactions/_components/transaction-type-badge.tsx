import { Badge } from "@/_components/ui/badge"
import { Transaction, TransactionType } from "@prisma/client"
import { CircleIcon } from "lucide-react"

interface TransactionTypeBadgeProps {
  transaction: Transaction
}

export function TransactionTypeBadge({
  transaction,
}: TransactionTypeBadgeProps) {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted text-primary hover:bg-primary/20">
        <CircleIcon
          className="mr-1 fill-primary"
          size={10}
        />
        <span>Ganho</span>
      </Badge>
    )
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger/10 font-bold text-danger hover:bg-danger/20">
        <CircleIcon
          className="mr-1 fill-destructive"
          size={10}
        />
        <span>Gasto</span>
      </Badge>
    )
  }

  return (
    <Badge className="bg-white/10 font-bold text-white hover:bg-white/20">
      <CircleIcon
        className="mr-1 fill-white"
        size={10}
      />
      <span>Investimento</span>
    </Badge>
  )
}
