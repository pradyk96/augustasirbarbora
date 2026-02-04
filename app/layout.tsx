import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const _cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: 'Augustas & Barbora | Brunch, Desserts & Wine in Vilnius',
  description: 'A romantic Parisian garden café in Vilnius, Lithuania. Enjoy premium brunch, artisan desserts, fine wines, and specialty coffee in an elegant floral setting.',
  generator: 'v0.app',
  keywords: ['Vilnius café', 'brunch Vilnius', 'wine bar Lithuania', 'romantic café', 'desserts Vilnius'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
