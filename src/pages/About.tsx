import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Shield, Award, Users, Heart, Leaf, Target } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Maintain It Bandits LLC — Austin TX's one-stop shop for lawn care, landscaping, cleaning and home services. Licensed, insured, and committed to exceptional service in Austin, Round Rock, Cedar Park & surrounding areas."
        keywords="lawn care company Austin TX, about Maintain It Bandits LLC, Austin landscaping company, trusted lawn service Austin, licensed insured lawn care Austin, cleaning services Austin"
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-20 bg-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(57,255,20,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(124,252,0,0.1),transparent_50%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-lime rounded-full" />
              <span className="text-lime text-xs font-semibold tracking-wider uppercase">About Us</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl text-white font-bold leading-tight mb-6">
              Austin TX's One-Stop
              <span className="text-lime block">Home Service Shop</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              We are not your average Austin home service company. Maintain It Bandits LLC was founded on a simple belief: every Austin TX property deserves professional, reliable lawn care, landscaping, cleaning, and home services — all from one trusted team.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 rounded-full px-4 py-1.5 mb-6">
                <Leaf className="w-3 h-3 text-lime" />
                <span className="text-lime text-xs font-semibold tracking-wider uppercase">Our Story</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-black font-bold mb-6">
                Born & Raised in Austin TX
              </h2>
              <div className="text-charcoal/60 text-lg leading-relaxed space-y-4">
                <p>
                  Maintain It Bandits LLC started right here in Austin TX with a truck, a mower, and a passion for making homes look incredible inside and out. Our founders saw a gap in the Austin home services market — too many companies were unreliable, inconsistent, and did not truly care about the quality of their work.
                </p>
                <p>
                  We set out to be different. From day one, we committed to showing up on time, doing quality work, and treating every Austin property like our own. That commitment has helped us grow from a small lawn care operation to Austin TX's one-stop shop for lawn care, landscaping, cleaning, and home services.
                </p>
                <p>
                  Today, Maintain It Bandits LLC serves hundreds of residential and commercial properties throughout Austin, Round Rock, Cedar Park, Georgetown, and the surrounding Central Texas communities. We are proud to be Austin's go-to one-stop home service team.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/hero-lawn.jpg"
                alt="Maintain It Bandits LLC team providing lawn care in Austin TX"
                className="rounded-3xl shadow-2xl shadow-black/10 w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-warm-white rounded-2xl p-6 shadow-xl border border-lime/10">
                <div className="text-4xl font-heading font-bold text-black">10+</div>
                <div className="text-charcoal/40 text-sm">Years Serving Austin</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-black font-bold mb-4">
              What We Stand For
            </h2>
            <p className="text-charcoal/50 text-lg max-w-2xl mx-auto">
              Our core values guide everything we do as Austin TX's home service professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Reliability', description: 'We show up on time, every time. When we say we will be at your Austin property, we mean it.' },
              { icon: Award, title: 'Quality', description: 'We never cut corners. Every Austin lawn we service receives our full attention and professional care.' },
              { icon: Users, title: 'Community', description: 'We are proud Austin neighbors. We treat every client like family and every property like our own.' },
              { icon: Heart, title: 'Passion', description: 'We genuinely love what we do. Transforming Austin homes is not just our job — it is our passion.' },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-warm-white rounded-2xl p-8 text-center shadow-lg shadow-black/5 border border-lime/10"
              >
                <div className="w-14 h-14 rounded-full bg-lime/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-lime" />
                </div>
                <h3 className="font-heading text-lg font-bold text-black mb-2">{value.title}</h3>
                <p className="text-charcoal/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Austin Customers' },
              { number: '10+', label: 'Years in Austin' },
              { number: '7', label: 'Service Categories' },
              { number: '12+', label: 'Cities Served' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-heading text-4xl md:text-5xl text-lime font-bold mb-2">{stat.number}</div>
                <div className="text-white/30 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 rounded-full px-4 py-1.5 mb-6">
            <Target className="w-3 h-3 text-lime" />
            <span className="text-lime text-xs font-semibold tracking-wider uppercase">Our Mission</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-black font-bold mb-6">
            Making Austin Beautiful, One Home at a Time
          </h2>
          <p className="text-charcoal/60 text-lg leading-relaxed mb-10">
            Our mission is to provide Austin TX homeowners and businesses with the highest quality lawn care, landscaping, cleaning, and home services at fair prices — all under one roof. We believe every Austin property deserves to look and feel its best, and we work tirelessly to make that happen with professionalism, integrity, and a genuine love for what we do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-lime hover:bg-lime-light text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl shadow-lime/10 flex items-center gap-2 justify-center"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+15125181558"
              className="flex items-center gap-2 text-charcoal/50 hover:text-black transition-colors text-lg font-medium justify-center"
            >
              <Phone className="w-5 h-5" />
              (512) 518-1558
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
