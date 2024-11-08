import { prisma } from "@/_lib/prisma"
import { env } from "@/env"
import { compare } from "bcrypt"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
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

  const isPasswordValid = await compare(password, user.password)

  if (!isPasswordValid) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 })
  }

  const token = jwt.sign({}, env.JWT_SECRET, {
    subject: user.id,
    expiresIn: "1h",
  })

  cookies().set("session", token, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    maxAge: 3600,
    sameSite: "strict",
    path: "/",
  })

  return NextResponse.json({}, { status: 200 })
}
