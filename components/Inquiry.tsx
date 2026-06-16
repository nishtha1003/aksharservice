'use client'
import { useState } from 'react'
import { Send, CheckCircle, Loader } from 'lucide-react'

export default function Inquiry() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', description: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10)
    setForm({ ...form, phone: digitsOnly })
    if (errors.phone) {
      setErrors({ ...errors, phone: '' })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'Full name is required'
    
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (form.phone.length !== 10) {
      newErrors.phone = 'Phone number must be exactly 10 digits'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (form.email && !emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    await new Promise((r) => setTimeout(r, 800))

    // Build WhatsApp message with all form details
    const msg = [
      `🔧 *New Service Inquiry - Akshar Service*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      form.email ? `📧 *Email:* ${form.email}` : null,
      form.subject ? `📌 *Subject:* ${form.subject}` : null,
      form.description ? `📝 *Description:* ${form.description}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const waUrl = `https://wa.me/+919998996329?text=${encodeURIComponent(msg)}`
    window.open(waUrl, '_blank')
    setStatus('success')
  }

  return (
    <section id="inquiry" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left info */}
          <div>
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-6">
              Book Your <span className="text-brand-500">Service</span> Now
            </h2>
            <p className="text-brand-600 text-lg leading-relaxed mb-8">
              Fill the form and our team will reach out within a few hours to schedule
              a convenient appointment at your doorstep.
            </p>

            <div className="space-y-5">
              {[
                { step: '01', title: 'Submit Your Request', desc: 'Fill in your details and describe the issue' },
                { step: '02', title: 'We Call You Back', desc: 'Our team confirms your appointment time' },
                { step: '03', title: 'Technician Arrives', desc: 'Expert visits your home and diagnoses the issue' },
                { step: '04', title: 'Repair & Done', desc: 'Quality repair with warranty on the service' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-bold text-brand-900">{item.title}</div>
                    <div className="text-sm text-brand-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="glass-card rounded-3xl p-8 shadow-xl">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-2">Request Submitted!</h3>
                <p className="text-brand-600">We'll contact you shortly to confirm your appointment.</p>
                <button
                  className="mt-6 btn-primary"
                  onClick={() => { setStatus('idle'); setForm({ name: '', phone: '', email: '', subject: '', description: '' }) }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-900 mb-6" style={{fontFamily:'Poppins'}}>Service Inquiry Form</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-brand-800 mb-1.5">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full border ${errors.name ? 'border-red-400 focus:ring-red-100' : 'border-brand-200 focus:border-brand-400 focus:ring-brand-100'} rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 transition-all`}
                    />
                    {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-800 mb-1.5">Phone *</label>
                    <input
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      value={form.phone}
                      onChange={handlePhoneChange}
                      placeholder="10 digit phone number"
                      className={`w-full border ${errors.phone ? 'border-red-400 focus:ring-red-100' : 'border-brand-200 focus:border-brand-400 focus:ring-brand-100'} rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 transition-all`}
                    />
                    {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-800 mb-1.5">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full border ${errors.email ? 'border-red-400 focus:ring-red-100' : 'border-brand-200 focus:border-brand-400 focus:ring-brand-100'} rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-800 mb-1.5">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Washing machine not draining"
                    className="w-full border border-brand-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-800 mb-1.5">Description</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your machine's issue in detail..."
                    className="w-full border border-brand-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all resize-none"
                  />
                </div>

                <p className="text-xs text-brand-500">
                  By submitting this form, you agree to us contacting you regarding your service request.
                </p>

                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
