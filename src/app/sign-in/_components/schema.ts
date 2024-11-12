import { z } from "zod"

export const signInSchema = z.object({
  email: z
    .string({ required_error: "É necessário informar seu e-mail." })
    .email({ message: "Informe um e-mail válido." }),
  password: z
    .string({ required_error: "É necessário informar sua senha." })
    .min(8, { message: "Informe sua senha com pelo menos 8 caracteres." }),
})

export type SignInSchema = z.infer<typeof signInSchema>
