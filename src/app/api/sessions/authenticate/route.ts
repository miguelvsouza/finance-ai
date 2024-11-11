import { createSession } from "@/_functions/sessions/create-session"
import { prisma } from "@/_lib/prisma"
import { compare } from "@/_lib/bcrypt"
import { NextResponse } from "next/server"
import { authenticateSchema } from "./schema"

export async function POST(request: Request) {
  const json = await request.json()
  const { success, data: body, error } = authenticateSchema.safeParse(json)

  if (!success) {
    return NextResponse.json(
      {
        errors: error.flatten().fieldErrors,
      },
      { status: 400 },
    )
  }

  const { email, password } = body

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 })
  }

  const isPasswordIncorrect = !(await compare(password, user.password))

  if (isPasswordIncorrect) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 })
  }

  await createSession({ userId: user.id })

  return NextResponse.json({}, { status: 200 })
}
