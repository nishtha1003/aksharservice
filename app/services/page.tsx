import { Metadata } from 'next'
import Services from '@/components/Services'
import PageBanner from '@/components/PageBanner'

export const metadata: Metadata = {
  title: 'Our Services | Akshar Service',
  description: 'Explore our full range of washing machine repair and maintenance services, from deep cleaning to error code diagnosis.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <PageBanner
        title="Our Services"
        subtitle="From quick repairs to full servicing — we handle all washing machine brands with expert care and genuine parts."
        image="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1920&q=80"
        badge="What We Offer"
      />
      <Services />
    </main>
  )
}
