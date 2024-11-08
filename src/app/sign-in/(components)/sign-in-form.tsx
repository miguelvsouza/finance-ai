"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/_components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/_components/ui/form"
import { Input } from "@/_components/ui/input"
import { LogInIcon } from "lucide-react"
import Link from "next/link"

const formSchema = z.object({
  email: z
    .string({ required_error: "É necessário informar seu e-mail." })
    .email({ message: "Informe um e-mail válido." }),
  password: z
    .string({ required_error: "É necessário informar sua senha." })
    .min(8, { message: "Informe sua senha com pelo menos 8 caracteres." }),
})

type FormSchema = z.infer<typeof formSchema>

export function SignInForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: FormSchema) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="Seu e-mail"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-3">
          <Button
            type="submit"
            variant="default"
          >
            <LogInIcon />
            <span>Fazer login</span>
          </Button>
          <Link
            href="/sign-up"
            className="text-sm text-muted-foreground underline underline-offset-4 transition hover:text-foreground"
          >
            Ou crie uma conta
          </Link>
        </div>
      </form>
    </Form>
  )
}
