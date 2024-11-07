"use server"

import { prisma } from "@/_lib/prisma"
import { auth } from "@clerk/nextjs/server"
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client"
import { revalidatePath } from "next/cache"

interface CreateTransactionParams {
  name: string
  type: TransactionType
  amount: number
  date: Date
  category: TransactionCategory
  paymentMethod: TransactionPaymentMethod
}

export async function createTransaction(params: CreateTransactionParams) {
  const { userId } = auth()

  if (!userId) {
    throw new Error("Unauthorized.")
  }

  await prisma.transaction.create({
    data: { ...params, userId },
  })

  revalidatePath("/transactions")
}
