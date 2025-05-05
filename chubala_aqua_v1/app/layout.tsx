import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { AuthProvider } from "@/context/auth-context"
import { ReviewProvider } from "@/context/review-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cá Cảnh Thiên Đức - Cung cấp cá cảnh chất lượng cao",
  description: "Cung cấp các loại cá cảnh chất lượng cao, đảm bảo sức khỏe và vẻ đẹp cho bể cá của bạn.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} bg-gray-100`}>
        <AuthProvider>
          <CartProvider>
            <ReviewProvider>
              {children}
              <Toaster />
            </ReviewProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
