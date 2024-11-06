import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Finance AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
        <body
          className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
