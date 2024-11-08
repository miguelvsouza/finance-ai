import type { Metadata } from "next"
import Image from "next/image"
import { SignUpForm } from "./(components)/sign-up-form"

export const metadata: Metadata = {
  title: "Criar conta - Finance AI",
}

function SignInPage() {
  return (
    <div className="grid h-screen w-full grid-cols-2">
      <div className="mx-auto flex max-w-[550px] flex-col justify-center gap-8 px-12 py-8">
        <Image
          src="/logo.svg"
          alt="Finance AI"
          width={173}
          height={39}
        />
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">
            Crie sua conta grátis
          </h1>
          <p className="text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>
        </div>

        <SignUpForm />

        <p className="text-xs text-muted-foreground">
          Finance AI &#174; Termos de uso e política de privacidade
        </p>
      </div>

      <div className="relative h-full w-full">
        <Image
          className="object-cover"
          src="/login.png"
          alt="Faça login na Finance AI"
          fill
        />
      </div>
    </div>
  )
}

export default SignInPage