import { hash } from "@/_lib/bcrypt"
import { prisma } from "@/_lib/prisma"
import { NextResponse } from "next/server"
import { createUserSchema } from "./schema"

export async function POST(request: Request) {
  const json = await request.json()
  const { success, data: body, error } = createUserSchema.safeParse(json)

  if (!success) {
    return NextResponse.json(
      {
        errors: error.flatten().fieldErrors,
      },
      { status: 400 },
    )
  }

  const { name, email, password } = body

  const isUserAlreadyCreated = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (isUserAlreadyCreated) {
    return NextResponse.json(
      { message: "User already created." },
      { status: 400 },
    )
  }

  const hashedPassword = await hash(password)

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  return NextResponse.json({}, { status: 201 })
}
