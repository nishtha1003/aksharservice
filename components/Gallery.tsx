'use client'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

const images = [
  // '/gallery-new-large.png',
  'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/59791766661760356.jpeg',
  'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/80341766661768366.jpeg',
  'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/80671766661775257.jpeg',
  // 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/33531766663738252.jpg',
  // 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/94071766663179935.jpg',
  // 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/24811766663729062.jpg',
  // 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/80621766660938502.jpg',
  // 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/81501766661026795.jpg',
  // 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/31381766661072667.jpg',
]

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-badge">Our Work</span>
          <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-4">
            Work <span className="text-brand-500">Gallery</span>
          </h2>
          <p className="text-brand-600 max-w-md mx-auto">
            A glimpse of our repair work and the machines we've brought back to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden aspect-square cursor-pointer shadow-sm card-hover"
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-3 shadow-xl">
                  <ZoomIn size={20} className="text-brand-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-xl hover:bg-brand-50"
            onClick={() => setSelected(null)}
          >
            <X size={24} className="text-brand-800" />
          </button>
          <img
            src={selected}
            alt="Gallery"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
