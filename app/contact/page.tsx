import { Metadata } from 'next'
import Contact from '@/components/Contact'
import Inquiry from '@/components/Inquiry'
import PageBanner from '@/components/PageBanner'

export const metadata: Metadata = {
  title: 'Contact Us | Akshar Service',
  description: 'Get in touch with Akshar Service for fast, reliable washing machine repair. Call or WhatsApp us today.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <PageBanner
        title="Contact Us"
        subtitle="Have a washing machine issue? Reach out to us — we respond fast and offer same-day doorstep service."
        image="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1920&q=80"
        badge="Get In Touch"
      />
      <Inquiry />
      <Contact />
    </main>
  )
}
