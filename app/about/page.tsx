import { Metadata } from 'next'
import About from '@/components/About'
import PageBanner from '@/components/PageBanner'

export const metadata: Metadata = {
  title: 'About Us | Akshar Service',
  description: 'Learn more about Akshar Service, our experienced technicians, and our commitment to quality washing machine repair.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <PageBanner
        title="About Us"
        subtitle="Trusted by thousands of Ahmedabad households — expert technicians, genuine parts, and unmatched service quality."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80"
        badge="About Akshar Service"
      />
      <About />
    </main>
  )
}
