import { MessageCircle, ArrowRight, Wrench, Settings, RotateCcw, Droplets, Volume2, AlertTriangle } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Washing Machine Repair',
    desc: 'Complete repair for all types of faults — motor, drum, door, PCB, and more.',
    img: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/80621766660938502.jpg',
    wa: 'Washing machine repair & servicing',
  },
  {
    icon: Settings,
    title: 'Fully Automatic Service',
    desc: 'Expert servicing for front-load and top-load fully automatic washing machines.',
    img: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/81501766661026795.jpg',
    wa: 'Fully automatic washing machine service',
  },
  {
    icon: RotateCcw,
    title: 'Semi-Automatic Service',
    desc: 'Reliable repair and maintenance for all semi-automatic washing machine models.',
    img: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/31381766661072667.jpg',
    wa: 'Semi-automatic washing machine service',
  },
  {
    icon: Droplets,
    title: 'Deep Cleaning & Sanitization',
    desc: 'Professional internal cleaning to remove dirt, bacteria, and build-up.',
    img: null,
    wa: 'Washing machine deep cleaning service',
  },
  {
    icon: Volume2,
    title: 'Noise & Vibration Fix',
    desc: 'Diagnose and fix abnormal sounds, excessive vibration, and imbalance issues.',
    img: null,
    wa: 'Noise and vibration repair service',
  },
  {
    icon: AlertTriangle,
    title: 'Error Code Diagnosis',
    desc: 'Advanced diagnostics for electronic error codes on modern washing machines.',
    img: null,
    wa: 'Error code diagnosis service',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-badge">What We Do</span>
          <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-4">
            Our <span className="text-brand-500">Services</span>
          </h2>
          <p className="text-brand-600 max-w-xl mx-auto">
            From basic servicing to complex repairs — we cover everything your washing machine needs,
            right at your doorstep.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card-hover bg-white border border-brand-100 rounded-3xl overflow-hidden shadow-sm group"
            >
              {/* Image or gradient header */}
              {s.img ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="h-32 bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center">
                  <s.icon size={48} className="text-white/80" />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-100 flex items-center justify-center">
                    <s.icon size={18} className="text-brand-600" />
                  </div>
                  <h3 className="font-bold text-brand-900">{s.title}</h3>
                </div>
                <p className="text-brand-600 text-sm mb-5 leading-relaxed">{s.desc}</p>

                <div className="flex gap-2">
                  <a
                    href="/contact"
                    className="flex-1 text-center bg-brand-50 hover:bg-brand-100 text-brand-700 text-sm font-semibold py-2 rounded-xl transition-colors"
                  >
                    Inquiry
                  </a>
                  <a
                    href={`https://wa.me/+919998996329?text=Hi! I am interested in ${s.wa}. Kindly connect.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-whatsapp justify-center text-center py-2 rounded-xl"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
