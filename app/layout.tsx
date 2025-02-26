import type React from "react"
import type { Metadata } from "next"
import { Oswald } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Blockchain Army - Development & Consulting Agency",
  description: "Powering the blockchain, crypto, NFTs, and metaverse revolution.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${oswald.className} min-h-screen bg-black`}>
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}



import './globals.css'