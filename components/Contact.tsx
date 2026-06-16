import { Phone, MessageCircle, Globe, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-badge">Reach Us</span>
          <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-4">
            Contact <span className="text-brand-500">Details</span>
          </h2>
          <p className="text-brand-600 max-w-md mx-auto">
            Reach out via call, WhatsApp, or visit us. We're always here to help.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Phone,
              title: 'Call Us',
              value: '+91 99989 96329',
              href: 'tel:+919998996329',
              color: 'from-brand-400 to-brand-600',
            },
            {
              icon: MessageCircle,
              title: 'WhatsApp',
              value: 'Chat with us',
              href: 'https://wa.me/+919998996329?text=Hi! I need washing machine service.',
              color: 'from-green-400 to-emerald-600',
            },
            {
              icon: Globe,
              title: 'Website',
              value: 'aksharservice.bytecard.in',
              href: 'https://aksharservice.bytecard.in',
              color: 'from-purple-400 to-indigo-600',
            },
            {
              icon: Clock,
              title: 'Working Hours',
              value: 'Mon–Sun: 8 AM – 8 PM',
              href: null,
              color: 'from-orange-400 to-amber-500',
            },
          ].map((c) => {
            const CardContent = (
              <>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <c.icon size={24} className="text-white" />
                </div>
                <div className="font-semibold text-brand-800 mb-1">{c.title}</div>
                <div className={`text-sm font-medium ${c.href ? 'text-brand-500 group-hover:text-brand-700 transition-colors' : 'text-brand-600'}`}>
                  {c.value}
                </div>
              </>
            )

            return c.href ? (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="block card-hover glass-card rounded-2xl p-6 text-center border border-brand-100 shadow-sm group cursor-pointer"
              >
                {CardContent}
              </a>
            ) : (
              <div key={c.title} className="card-hover glass-card rounded-2xl p-6 text-center border border-brand-100 shadow-sm">
                {CardContent}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
