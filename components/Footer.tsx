import { Phone, MessageCircle, Globe, Heart, MapPin, ArrowRight, Clock } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer-root">
      {/* Top wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block">
          <path fill="#042f2e" d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="footer-body">
        <div className="footer-grid">

          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo-wrap">
              <img src="/logo.jpg" alt="Akshar Service Logo" className="footer-logo" />
            </div>
            <p className="footer-brand-desc">
              Reliable washing machine repair &amp; servicing across Ahmedabad.
              Genuine parts, expert hands, your satisfaction guaranteed.
            </p>
            <div className="footer-hours">
              <Clock size={14} className="footer-hours-icon" />
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </div>
            <div className="footer-location">
              <MapPin size={14} className="footer-hours-icon" />
              <span>Serving all areas of Ahmedabad</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links-list">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="footer-link">
                    
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="footer-connect-col">
            <div className="footer-col-title">Get In Touch</div>
            <div className="footer-contact-cards">
              <a href="tel:+919998996329" className="footer-contact-card">
                <span className="footer-contact-icon-wrap footer-icon-phone">
                  <Phone size={16} />
                </span>
                <div>
                  <div className="footer-contact-label">Call Us</div>
                  <div className="footer-contact-value">+91 99989 96329</div>
                </div>
              </a>

              <a
                href="https://wa.me/+919998996329?text=Hi! I need washing machine repair service."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-card"
              >
                <span className="footer-contact-icon-wrap footer-icon-wa">
                  <MessageCircle size={16} />
                </span>
                <div>
                  <div className="footer-contact-label">WhatsApp</div>
                  <div className="footer-contact-value">Chat with us</div>
                </div>
              </a>

              <a
                href="https://aksharservice.bytecard.in"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-card"
              >
                <span className="footer-contact-icon-wrap footer-icon-web">
                  <Globe size={16} />
                </span>
                <div>
                  <div className="footer-contact-label">Website</div>
                  <div className="footer-contact-value">aksharservice.bytecard.in</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-copy">&copy; 2026 Akshar Service. All rights reserved.</div>
          <div className="footer-made-by">
            Made with <Heart size={13} className="footer-heart" fill="currentColor" /> by AJ Infosoft
          </div>
        </div>
      </div>
    </footer>
  )
}
