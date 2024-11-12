import { PrismaClient } from "@prisma/client"

declare global {
  var cachedPrisma: PrismaClient //eslint-disable-line no-var
}

let db: PrismaClient

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  db = global.cachedPrisma
}

export const prisma = db
