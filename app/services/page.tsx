import { Metadata } from 'next'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'Our Services | Akshar Service',
  description: 'Explore our full range of washing machine repair and maintenance services, from deep cleaning to error code diagnosis.',
}
export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Services />
    </main>
  )
}
