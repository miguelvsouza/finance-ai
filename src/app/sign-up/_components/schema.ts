import { z } from "zod"

export const signUpSchema = z.object({
  name: z
    .string({ required_error: "Seu nome é obrigatório." })
    .min(3, { message: "Informe seu nome com pelo menos 3 letras." }),
  email: z
    .string({ required_error: "Seu e-mail é obrigatório." })
    .email({ message: "Informe um e-mail válido." }),
  password: z
    .string({ required_error: "Definir uma senha é obrigatório." })
    .min(8, { message: "Informe uma senha com pelo menos 8 caracteres." }),
})

export type SignUpSchema = z.infer<typeof signUpSchema>
