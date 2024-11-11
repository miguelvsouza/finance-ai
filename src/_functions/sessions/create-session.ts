import { env } from "@/env"
import { SignJWT } from "jose"
import { cookies } from "next/headers"

export const ENCODED_KEY = new TextEncoder().encode(env.JWT_SECRET)

interface ICreateSession {
  userId: string
}

export async function createSession({ userId }: ICreateSession) {
  const _7DAYS = 7 * 24 * 60 * 60 * 1000
  const expiresAt = new Date(Date.now() + _7DAYS)
  const sessionCookie = await new SignJWT()
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(userId)
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(ENCODED_KEY)

  cookies().set("session", sessionCookie, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    maxAge: _7DAYS,
    sameSite: "strict",
    path: "/",
  })
}
