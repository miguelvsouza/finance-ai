import { verifySession } from "@/_functions/sessions/verify-session"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { deleteTransactionSchema } from "./schema"
import { prisma } from "@/_lib/prisma"

export async function DELETE(request: Request) {
  const body = await request.json()
  const cookie = cookies().get("session")?.value
  const session = await verifySession(cookie)

  if (!session?.userId) {
    return NextResponse.redirect(new URL("/sign-in", request.url), {
      status: 401,
    })
  }

  const { success, data, error } = deleteTransactionSchema.safeParse(body)

  if (!success) {
    return NextResponse.json(
      {
        errors: error.flatten().fieldErrors,
      },
      { status: 400 },
    )
  }

  await prisma.transaction.delete({
    where: {
      id: data.transactionId,
    },
  })

  return NextResponse.json(
    {
      message: "Deleted.",
    },
    { status: 200 },
  )
}
