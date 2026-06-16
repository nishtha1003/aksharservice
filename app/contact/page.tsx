import { Metadata } from 'next'
import Contact from '@/components/Contact'
import Inquiry from '@/components/Inquiry'

export const metadata: Metadata = {
  title: 'Contact Us | Akshar Service',
  description: 'Get in touch with Akshar Service for fast, reliable washing machine repair. Call or WhatsApp us today.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Inquiry />
      <Contact />
    </main>
  )
}
