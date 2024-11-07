import { Button } from "@/_components/ui/button"
import { SignInButton } from "@clerk/nextjs"
import { LogInIcon } from "lucide-react"
import Image from "next/image"

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
          <h1 className="text-4xl font-bold tracking-tight">Bem-vindo</h1>
          <p className="text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>
        </div>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon />
            <span>Entrar ou criar uma conta</span>
          </Button>
        </SignInButton>
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
