import { Wrench, Phone, MessageCircle, Globe, Heart } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100 pb-24 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="Akshar Service Logo" className="w-auto h-12 bg-white rounded-md p-1 object-contain" />
            </div>
            <p className="text-brand-300 text-sm leading-relaxed">
              Reliable washing machine repair & servicing across Ahmedabad. 
              Genuine parts, expert hands, your satisfaction guaranteed.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-bold text-white mb-4">Quick Links</div>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-brand-300 text-sm hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-bold text-white mb-4">Connect</div>
            <div className="space-y-3">
              <a href="tel:+919998996329" className="flex items-center gap-3 text-brand-300 hover:text-white transition-colors text-sm">
                <Phone size={15} /> +91 99989 96329
              </a>
              <a
                href="https://wa.me/+919998996329"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-brand-300 hover:text-white transition-colors text-sm"
              >
                <MessageCircle size={15} /> WhatsApp Us
              </a>
              <a
                href="https://aksharservice.bytecard.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-brand-300 hover:text-white transition-colors text-sm"
              >
                <Globe size={15} /> aksharservice.bytecard.in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-brand-400 text-sm">
          <div>© 2026 Akshar Service. All rights reserved.</div>
          <div className="flex items-center gap-1">
            Made with <Heart size={13} className="text-red-400 mx-1" /> by AJ Infosoft
          </div>
        </div>
      </div>
    </footer>
  )
}
