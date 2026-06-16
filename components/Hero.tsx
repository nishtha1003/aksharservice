'use client'
import { Wrench, Shield } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const slides = [
  {
    title: 'Expert Washing Machine Repair',
    subtitle: 'Professional repair & servicing for all brands. Fast, reliable, and backed by genuine spare parts.',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1920&q=80',
  },
  {
    title: 'Same Day Doorstep Service',
    subtitle: 'We value your time. Get your washing machine fixed at your home on the very same day.',
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1920&q=80',
  },
  {
    title: '100% Genuine Spare Parts',
    subtitle: 'We only use authentic parts to ensure the longevity and performance of your appliance.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
  }
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden bg-brand-50">
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full w-full hero-swiper"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-full w-full flex items-center text-white relative">
                {/* Full background image with Ken Burns zoom animation */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover hero-img-zoom"
                  />
                  {/* Dark teal overlay for readability */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(4,47,46,0.92) 0%, rgba(4,47,46,0.75) 50%, rgba(4,47,46,0.3) 100%)' }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center py-16">
                  <div className="hero-content-anim">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium mb-6 hero-badge-anim">
                      <Shield size={14} className="text-yellow-300" />
                      #1 Washing Machine Service in Ahmedabad
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 hero-title-anim" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {slide.title}
                    </h1>
                    <p className="text-brand-100 text-lg leading-relaxed mb-8 max-w-md hero-sub-anim">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-10 hero-btns-anim">
                      <a href="/contact" className="btn-primary bg-white text-brand-700 hover:bg-brand-50 text-base px-8 py-3">
                        <Wrench size={18} /> Book a Repair
                      </a>
                      <a href="https://wa.me/+919998996329?text=Hi! I need washing machine repair service." target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-3">
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                  {/* Empty div for right column to push content left */}
                  <div className="hidden lg:block"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path fill="#f0fdfa" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}
