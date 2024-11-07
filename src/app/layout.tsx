import { Toaster } from "@/_components/ui/sonner"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import "./globals.css"
import { TooltipProvider } from "@/_components/ui/tooltip"

const mulish = Mulish({
  subsets: ["latin-ext"],
})

export const metadata: Metadata = {
  title: "Finance AI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="pt-BR">
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
        <body className={`${mulish.className} dark antialiased`}>
          <TooltipProvider delayDuration={300}>
            <Toaster />
            {children}
          </TooltipProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
