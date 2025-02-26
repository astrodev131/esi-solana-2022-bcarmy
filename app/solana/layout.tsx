import type React from "react"

export default function SolanaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
            {children}
        </div>
      </body>
    </html>
  )
}
