import { env } from "@/env"
import { SignJWT, jwtVerify } from "jose"

const ENCODED_KEY = new TextEncoder().encode(env.JWT_SECRET)

interface IEncryptParams {
  userId: string
}

export function encrypt({ userId }: IEncryptParams) {
  return new SignJWT()
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(userId)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(ENCODED_KEY)
}

export async function decrypt(sessionCookie: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(sessionCookie, ENCODED_KEY, {
      algorithms: ["HS256"],
    })

    return payload
  } catch {
    console.log("Failed to verify session.")
  }
}
