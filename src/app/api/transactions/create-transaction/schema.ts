import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client"
import { z } from "zod"

export const createTransactionSchema = z.object({
  name: z.string().min(1),
  type: z.nativeEnum(TransactionType),
  amount: z.number().positive(),
  date: z.coerce.date(),
  category: z.nativeEnum(TransactionCategory),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod),
})
