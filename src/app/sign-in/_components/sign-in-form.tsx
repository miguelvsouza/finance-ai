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
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { SignInSchema, signInSchema } from "./schema"

export function SignInForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: searchParams.get("email") ?? "",
      password: "",
    },
  })

  async function onSubmit({ email, password }: SignInSchema) {
    try {
      await axios.post("/api/sessions/authenticate", {
        email,
        password,
      })
      toast.success("Levando você até o dashboard...")
      router.push("/") // Redirecionar para dashboard
    } catch {
      toast.error("Credenciais inválidas!")
      form.resetField("password")
      form.setFocus("password")
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
                <span>Carregando...</span>
              </>
            ) : (
              <>
                <LogInIcon />
                <span>Fazer login</span>
              </>
            )}
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
