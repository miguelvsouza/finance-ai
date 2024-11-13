import { Toaster } from "@/_components/ui/sonner"
import { TooltipProvider } from "@/_components/ui/tooltip"
import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import "./globals.css"

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
    <html lang="pt-BR">
      <link
        rel="icon"
        href="/favicon.svg"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={`${mulish.className} dark h-screen w-full antialiased`}>
        <TooltipProvider delayDuration={300}>
          <Toaster />
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}
