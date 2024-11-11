import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { verifySession } from "./_functions/sessions/verify-session"

const SIGN_ROUTES: string[] = ["/sign-in", "/sign-up"]
const PRIVATE_ROUTES: string[] = ["/", "/transactions", "/subscription"]

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const isSignRoute = SIGN_ROUTES.includes(pathname)
  const isPrivateRoute = PRIVATE_ROUTES.includes(pathname)

  const sessionCookie = cookies().get("session")?.value

  // Se o usuário tiver um sessionCookie e estiver tentando acessar páginas de sign-in ou sign-up, redireciona-o para o dashboard
  if (sessionCookie && isSignRoute) {
    return NextResponse.redirect(new URL("/", request.nextUrl))
  }

  // Se o usuário estiver tentando acessar uma rota privada e não possuir um sessionCookie, redireciona-o para o sign-in
  if (!sessionCookie && isPrivateRoute) {
    return NextResponse.redirect(new URL("/sign-in", request.nextUrl))
  }

  // Se houver um sessionCookie e o usuário estiver tentando acessar uma rota privada, verifica se o cookie é válido
  if (sessionCookie && isPrivateRoute) {
    try {
      await verifySession(sessionCookie)
    } catch {
      // Se um cookie estiver presente, porém não for válido, remove-o e redireciona o usuário para sign-in
      const response = NextResponse.redirect(
        new URL("/sign-in", request.nextUrl),
      )
      response.cookies.delete("session")
      return response
    }
  }

  // Se o usuário estiver tentando acessar uma rota que é pública, deixa-o prosseguir. Se for uma rota privada e ele possuir um sessionCookie válido, deixa-o prosseguir.
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - specific files in the public folder (e.g., favicon.ico, sitemap.xml, robots.txt)
     * - static file extensions (e.g., .ico, .svg, .png, .jpg, .jpeg, .gif, .webp, .pdf)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.ico$|.*\\.svg$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|.*\\.pdf$).*)",
  ],
}
