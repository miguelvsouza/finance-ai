import { jwtVerify } from "jose"
import { ENCODED_KEY } from "./create-session"

export async function verifySession(sessionCookie: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(sessionCookie, ENCODED_KEY, {
      algorithms: ["HS256"],
    })

    return {
      userId: payload.sub,
    }
  } catch {
    console.log("Failed to verify session.")
  }
}
