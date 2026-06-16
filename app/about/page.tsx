import { Metadata } from 'next'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'About Us | Akshar Service',
  description: 'Learn more about Akshar Service, our experienced technicians, and our commitment to quality washing machine repair.',
}
export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <About />
    </main>
  )
}
