import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Speciality from '@/components/Speciality'

export const metadata: Metadata = {
  title: 'Home | Akshar Service',
  description: 'Top-rated washing machine repair in Ahmedabad. Fast, reliable, and affordable services for all major brands.',
}

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Hero />
      <Speciality />
      <Services />
    </main>
  )
}
