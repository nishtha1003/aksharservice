'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Wrench } from 'lucide-react'

import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg shadow-brand-100 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <Image src="/logo.jpg" alt="Akshar Service Logo" width={220} height={70} className="object-contain h-14 w-auto" />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-sm font-medium text-brand-800 hover:text-brand-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919998996329"
              className="flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-500 transition-colors"
            >
              <Phone size={16} />
              +91 99989 96329
            </a>
            <a href="/contact" className="btn-primary text-sm py-2 px-5">
              Book Service
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-brand-800"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-2xl shadow-xl border border-brand-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-6 py-3 text-sm font-medium text-brand-800 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mx-4 mt-3 pt-3 border-t border-brand-100">
              <a href="/contact" className="btn-primary w-full justify-center">
                Book Service
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
