import { NextResponse } from "next/server"
import { createTransactionSchema } from "./schema"
import { prisma } from "@/_lib/prisma"
import { verifySession } from "@/_functions/sessions/verify-session"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  const body = await request.json()
  const cookie = cookies().get("session")?.value
  const session = await verifySession(cookie)

  if (!session?.userId) {
    return NextResponse.redirect(new URL("/sign-in", request.url), {
      status: 401,
    })
  }

  const { success, data, error } = createTransactionSchema.safeParse(body)

  if (!success) {
    return NextResponse.json(
      {
        errors: error.flatten().fieldErrors,
      },
      { status: 400 },
    )
  }

  const { name, amount, category, date, paymentMethod, type } = data

  await prisma.transaction.create({
    data: {
      name,
      amount,
      category,
      date,
      paymentMethod,
      type,
      userId: session.userId,
    },
  })

  return NextResponse.json(
    {
      message: "Created.",
    },
    { status: 201 },
  )
}
