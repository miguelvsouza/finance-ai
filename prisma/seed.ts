import { prisma } from "../src/_lib/prisma"
import { hash } from "../src/_lib/bcrypt"

async function seed() {
  await prisma.user.create({
    data: {
      name: "Miguel Souza",
      email: "dev@finance.ai",
      password: await hash("12345678"),
    },
  })
}

seed()
  .then(() => console.log("Database seeded!"))
  .catch((error) => console.log(error))
