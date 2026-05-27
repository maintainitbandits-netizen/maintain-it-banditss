import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';
import { FORMSPREE_FORM_ID } from '../lib/config';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    if (!FORMSPREE_FORM_ID || FORMSPREE_FORM_ID.includes('YOUR_FORMSPREE')) {
      setError('Form submission is not configured yet. Please call us at (512) 518-1558 or email info@maintainitbandits.com for your free estimate!');
      setSubmitting(false);
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.errors?.[0]?.message || 'Something went wrong. Please try again or call us at (512) 518-1558.');
      }
    } catch {
      setError('Network error. Please check your connection and try again, or call us at (512) 518-1558.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - Free Estimate"
        description="Contact Maintain It Bandits LLC for a free estimate on lawn care, landscaping, cleaning services & more in Austin TX. Call (512) 518-1558 or fill out our online form. Serving Austin, Round Rock, Cedar Park & surrounding areas."
        keywords="lawn care estimate Austin TX, free lawn care quote Austin, contact lawn service Austin, landscaping estimate Austin Texas, lawn mowing quote Austin"
      />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center pt-20 bg-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(57,255,20,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(124,252,0,0.1),transparent_50%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-lime rounded-full" />
              <span className="text-lime text-xs font-semibold tracking-wider uppercase">Free Estimate</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl text-white font-bold leading-tight mb-6">
              Get Your Free
              <span className="text-lime block">Estimate Today</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Ready to transform your Austin TX property? Contact Maintain It Bandits LLC for a free, no-obligation estimate on any of our lawn care, landscaping, or cleaning services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-warm-white rounded-3xl p-8 md:p-12 shadow-xl border border-lime/10">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-lime mx-auto mb-6" />
                    <h2 className="font-heading text-3xl text-black font-bold mb-4">
                      Thank You!
                    </h2>
                    <p className="text-charcoal/50 text-lg">
                      We have received your request and will contact you within 24 hours with your free estimate. Welcome to the Maintain It Bandits LLC family!
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl md:text-3xl text-black font-bold mb-2">
                      Request Your Free Estimate
                    </h2>
                    <p className="text-charcoal/50 mb-8">
                      Fill out the form below and we will get back to you within 24 hours with a custom quote for your Austin TX property.
                    </p>

                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-charcoal/60 mb-2">First Name *</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-lime/20 bg-cream/50 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-all text-charcoal"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-charcoal/60 mb-2">Last Name *</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-lime/20 bg-cream/50 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-all text-charcoal"
                            placeholder="Smith"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-charcoal/60 mb-2">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-lime/20 bg-cream/50 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-all text-charcoal"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-charcoal/60 mb-2">Phone *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-lime/20 bg-cream/50 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-all text-charcoal"
                            placeholder="(512) 555-1234"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-charcoal/60 mb-2">Property Address *</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-lime/20 bg-cream/50 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-all text-charcoal"
                          placeholder="123 Main St, Austin TX 78701"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-charcoal/60 mb-2">Service Needed *</label>
                        <select
                          id="service"
                          name="service"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-lime/20 bg-cream/50 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-all text-charcoal"
                        >
                          <option value="">Select a service...</option>
                          <option value="lawn-mowing">Lawn Mowing & Maintenance</option>
                          <option value="landscaping">Landscaping & Design</option>
                          <option value="fertilization">Fertilization & Weed Control</option>
                          <option value="cleaning">Cleaning Services</option>
                          <option value="sod">Sod Installation</option>
                          <option value="aeration">Aeration & Overseeding</option>
                          <option value="property-maintenance">Property Maintenance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-charcoal/60 mb-2">Tell Us About Your Project</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-lime/20 bg-cream/50 focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-all text-charcoal resize-none"
                          placeholder="Describe your lawn care, landscaping, or cleaning needs..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-lime hover:bg-lime-light text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-[1.02] shadow-xl shadow-lime/10 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Get My Free Estimate
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-warm-white rounded-3xl p-8 shadow-xl border border-lime/10">
                <h3 className="font-heading text-xl font-bold text-black mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li>
                    <a href="tel:+15125181558" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center shrink-0 group-hover:bg-lime/20 transition-colors">
                        <Phone className="w-5 h-5 text-lime" />
                      </div>
                      <div>
                        <div className="text-sm text-charcoal/40">Call Us</div>
                        <div className="text-black font-semibold">(512) 518-1558</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@maintainitbandits.com" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center shrink-0 group-hover:bg-lime/20 transition-colors">
                        <Mail className="w-5 h-5 text-lime" />
                      </div>
                      <div>
                        <div className="text-sm text-charcoal/40">Email Us</div>
                        <div className="text-black font-semibold">info@maintainitbandits.com</div>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-lime" />
                    </div>
                    <div>
                      <div className="text-sm text-charcoal/40">Service Area</div>
                      <div className="text-black font-semibold">Austin TX & Surrounding Areas</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-lime" />
                    </div>
                    <div>
                      <div className="text-sm text-charcoal/40">Business Hours</div>
                      <div className="text-black font-semibold">Mon–Sat: 7AM – 7PM</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-black rounded-3xl p-8 text-center">
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  Same-Week Service
                </h3>
                <p className="text-white/40 text-sm mb-6">
                  Need service fast? We often accommodate new Austin TX customers within the same week!
                </p>
                <a
                  href="tel:+15125181558"
                  className="inline-flex items-center gap-2 bg-lime hover:bg-lime-light text-black font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>

              <div className="bg-warm-white rounded-3xl p-8 shadow-xl border border-lime/10">
                <h3 className="font-heading text-lg font-bold text-black mb-4">Why Austin Chooses Us</h3>
                <ul className="space-y-3">
                  {['Licensed & Insured', 'Free No-Obligation Estimates', 'Same-Week Availability', '5-Star Customer Reviews', 'Experienced Austin Team', 'Satisfaction Guaranteed'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-charcoal/60">
                      <CheckCircle className="w-4 h-4 text-lime shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
