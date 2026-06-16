import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Akshar Service - Professional Washing Machine Repair',
  description: 'Expert washing machine repair & servicing. All brands, all models. Quick diagnosis, genuine parts, transparent pricing.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingBar from '@/components/FloatingBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingBar />
      </body>
    </html>
  )
}
