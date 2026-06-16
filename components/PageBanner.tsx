import { Shield } from 'lucide-react'

interface PageBannerProps {
  title: string
  subtitle: string
  image: string
  badge?: string
}

export default function PageBanner({ title, subtitle, image, badge }: PageBannerProps) {
  return (
    <section className="page-banner-root">
      {/* Background image */}
      <div className="page-banner-bg">
        <img src={image} alt={title} className="page-banner-img" />
        <div className="page-banner-overlay" />
      </div>

      {/* Content */}
      <div className="page-banner-content">
        {badge && (
          <div className="page-banner-badge">
            <Shield size={13} className="page-banner-badge-icon" />
            {badge}
          </div>
        )}
        <h1 className="page-banner-title">{title}</h1>
        <p className="page-banner-subtitle">{subtitle}</p>

        {/* Breadcrumb */}
        <div className="page-banner-breadcrumb">
          <a href="/" className="page-banner-bc-link">Home</a>
          <span className="page-banner-bc-sep">/</span>
          <span className="page-banner-bc-current">{title}</span>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="page-banner-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block">
          <path fill="#f0fdfa" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
