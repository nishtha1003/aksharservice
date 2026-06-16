import { Metadata } from 'next'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: 'Gallery | Akshar Service',
  description: 'View photos of our successful washing machine repairs, satisfied customers, and authentic spare parts.',
}
export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-20">
      <Gallery />
    </main>
  )
}
