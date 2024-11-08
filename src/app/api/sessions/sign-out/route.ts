import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function DELETE() {
  cookies().delete("session")

  return NextResponse.json({}, { status: 200 })
}
