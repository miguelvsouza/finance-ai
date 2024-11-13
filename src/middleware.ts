import { NextRequest, NextResponse } from "next/server"
import { auth } from "./_services/auth"

const PUBLIC_ROUTES = ["/sign-in"]

export async function middleware(request: NextRequest) {
  const session = await auth()

  // Se o usuário não estiver logado e tentar acessar uma rota que não está definida como rota pública, será redirecionado ao sign-in.
  if (!session?.user && !PUBLIC_ROUTES.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/sign-in", request.url))
  }

  // Se o usuário estiver logado e tentar acessar uma rota pública, será redirecionado ao dashboard.
  if (session?.user && PUBLIC_ROUTES.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
}
