import { Button } from "@/_components/ui/button"
import { signIn } from "@/_services/auth/auth"
import Image from "next/image"

export function LoginWithGoogle() {
  async function signInAction() {
    "use server"
    await signIn("google", { redirectTo: "/" })
  }

  return (
    <form action={signInAction}>
      <Button
        className="w-full"
        type="submit"
        variant="outline"
      >
        <Image
          src="/google.svg"
          alt="Google"
          width={20}
          height={20}
        />
        <span>Entrar com Google</span>
      </Button>
    </form>
  )
}
