import { jwtVerify } from "jose"
import { ENCODED_KEY } from "./create-session"

export async function verifySession(sessionCookie: string | undefined = "") {
  const { payload } = await jwtVerify(sessionCookie, ENCODED_KEY, {
    algorithms: ["HS256"],
  })

  return {
    userId: payload.sub,
  }
}
