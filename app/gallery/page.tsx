import { Metadata } from 'next'
import Gallery from '@/components/Gallery'
import PageBanner from '@/components/PageBanner'

export const metadata: Metadata = {
  title: 'Gallery | Akshar Service',
  description: 'View photos of our successful washing machine repairs, satisfied customers, and authentic spare parts.',
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-20">
      <PageBanner
        title="Our Gallery"
        subtitle="A glimpse into our work — real repairs, real customers, real results. See the quality we deliver every day."
        image="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1920&q=80"
        badge="Work Showcase"
      />
      <Gallery />
    </main>
  )
}
