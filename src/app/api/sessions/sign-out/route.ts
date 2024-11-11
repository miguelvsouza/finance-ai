import { deleteSession } from "@/_functions/sessions/delete-session"
import { NextResponse } from "next/server"

export function DELETE() {
  deleteSession()
  return NextResponse.json({}, { status: 200 })
}
