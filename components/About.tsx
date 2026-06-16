import { Award, Users, Clock, ThumbsUp } from 'lucide-react'

const highlights = [
  { icon: Clock, label: 'Same Day Service', desc: 'Quick response within hours' },
  { icon: Award, label: 'Certified Technicians', desc: 'Trained & experienced team' },
  { icon: Users, label: '5000+ Customers', desc: 'Trusted across Ahmedabad' },
  { icon: ThumbsUp, label: 'Satisfaction Guaranteed', desc: 'Quality you can count on' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="section-badge">Who We Are</span>
            <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-6">
              Ahmedabad's Most Trusted<br />
              <span className="text-brand-500">Washing Machine Experts</span>
            </h2>
            <p className="text-brand-700 text-lg leading-relaxed mb-6">
              Akshar Service is a reliable and professional washing machine service provider,
              dedicated to keeping your appliances running smoothly and efficiently.
            </p>
            <p className="text-brand-600 leading-relaxed mb-8">
              We specialize in servicing, repairing, and maintaining all types of washing machines —
              fully automatic, semi-automatic, top load, and front load. With experienced technicians
              and a customer-first approach, we focus on quick diagnosis, quality repairs, and
              long-lasting solutions using genuine spare parts.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Samsung', 'LG', 'Whirlpool', 'IFB', 'Bosch', 'Haier', 'Godrej', 'Panasonic'].map((brand) => (
                <span
                  key={brand}
                  className="bg-white border border-brand-200 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Right – highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="card-hover glass-card rounded-2xl p-6 shadow-sm"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-4 shadow-md">
                  <h.icon size={22} className="text-white" />
                </div>
                <div className="font-bold text-brand-900 mb-1">{h.label}</div>
                <div className="text-sm text-brand-600">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
