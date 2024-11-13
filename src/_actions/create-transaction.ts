"use server"

import { prisma } from "@/_database/prisma"
import { auth } from "@/_services/auth/auth"
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client"
import { revalidatePath } from "next/cache"

interface ICreateTransaction {
  name: string
  type: TransactionType
  amount: number
  date: Date
  category: TransactionCategory
  paymentMethod: TransactionPaymentMethod
}

export async function createTransaction(params: ICreateTransaction) {
  const session = await auth()

  if (!session?.user?.email) {
    return
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
  })

  if (!user) {
    return
  }

  await prisma.transaction.create({
    data: {
      ...params,
      userId: user.id,
    },
  })

  revalidatePath("/transactions")
}
