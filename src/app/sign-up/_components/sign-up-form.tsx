"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"

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
import { LoaderCircle, LogInIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { signUpSchema, SignUpSchema } from "./schema"

export function SignUpForm() {
  const router = useRouter()
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit({ name, email, password }: SignUpSchema) {
    try {
      await axios.post("/api/users/create-user", { name, email, password })
      toast.success("Sua conta foi criada com sucesso!", {
        description: "Te levando até o login...",
        position: "bottom-left",
      })
      router.push(`/sign-in?email=${email}`)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return toast.error("Ocorreu um erro ao criar sua conta.", {
          description: error.response?.data.message,
        })
      }

      toast.error("Ocorreu um erro desconhecido ao criar sua conta.")
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Seu nome"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  type="email"
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
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <>
                <LoaderCircle className="animate-spin" />
                <span>Criando sua conta...</span>
              </>
            ) : (
              <>
                <LogInIcon />
                <span>Criar minha conta</span>
              </>
            )}
          </Button>
          <Link
            href="/sign-in"
            className="text-sm text-muted-foreground underline underline-offset-4 transition hover:text-foreground"
          >
            Ou fazer login
          </Link>
        </div>
      </form>
    </Form>
  )
}
