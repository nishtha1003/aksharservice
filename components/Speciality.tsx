import { CheckCircle } from 'lucide-react'

const specialities = [
  {
    img: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/34181766660512143.jpg',
    title: 'Expert Washing Machine Repair & Servicing',
    points: [
      'Certified and experienced technicians',
      'Fast diagnosis within the same visit',
      'Repair warranty on all services',
    ],
  },
  {
    img: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/62271766660679213.jpg',
    title: 'Support for All Brands & Models',
    points: [
      'Samsung, LG, Whirlpool, IFB & more',
      'Old and new models supported',
      'OEM spare parts used exclusively',
    ],
  },
  {
    img: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/6339/mini-web/87871766660790931.jpg',
    title: 'Fully Automatic & Semi-Automatic Machines',
    points: [
      'Front-load & top-load fully automatic',
      'Twin-tub semi-automatic machines',
      'All PCB and electronic issues resolved',
    ],
  },
]

export default function Speciality() {
  return (
    <section id="speciality" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-4">
            Our <span className="text-brand-500">Speciality</span>
          </h2>
          <p className="text-brand-600 max-w-md mx-auto">
            We combine technical expertise with genuine care for your appliance and your time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialities.map((s, i) => (
            <div key={i} className="card-hover rounded-3xl overflow-hidden border border-brand-100 shadow-sm bg-brand-50 group">
              <div className="h-52 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-900 text-lg mb-4" style={{fontFamily:'Poppins'}}>{s.title}</h3>
                <ul className="space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-brand-700 text-sm">
                      <CheckCircle size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
