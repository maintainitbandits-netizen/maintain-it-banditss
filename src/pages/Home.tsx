import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Shield, Clock, Star, Leaf, Droplets, Sprout, Wrench, Wind } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const services = [
  {
    to: '/lawn-mowing',
    image: '/images/hero-lawn.jpg',
    imageAlt: 'Professional lawn mowing service in Austin TX',
    title: 'Lawn Mowing & Maintenance',
    description: 'Weekly & bi-weekly lawn mowing, edging, blowing, and trimming to keep your Austin TX property looking pristine year-round.',
  },
  {
    to: '/landscaping',
    image: '/images/landscaping.jpg',
    imageAlt: 'Landscaping design and installation in Austin Texas',
    title: 'Landscaping & Design',
    description: 'Custom landscape design, garden bed installation, mulching, and hardscaping to transform your outdoor space in Austin TX.',
  },
  {
    to: '/fertilization',
    image: '/images/fertilization.jpg',
    imageAlt: 'Lawn fertilization and weed control in Austin TX',
    title: 'Fertilization & Weed Control',
    description: 'Seasonal fertilization programs and targeted weed control to keep your Austin lawn green, healthy, and weed-free.',
  },
  {
    to: '/sod-installation',
    image: '/images/sod-installation.jpg',
    imageAlt: 'Sod installation service in Austin Texas',
    title: 'Sod Installation',
    description: 'Fresh sod installation with premium grass varieties suited for Austin TX climate — Bermuda, St. Augustine, and Zoysia.',
  },
  {
    to: '/aeration-overseeding',
    image: '/images/aeration.jpg',
    imageAlt: 'Lawn aeration and overseeding in Austin TX',
    title: 'Aeration & Overseeding',
    description: 'Core aeration and overseeding to relieve soil compaction and thicken your Austin TX lawn for a lush, healthy turf.',
  },
  {
    to: '/property-maintenance',
    image: '/images/property-maintenance.jpg',
    imageAlt: 'Property maintenance service in Austin Texas',
    title: 'Property Maintenance',
    description: 'Comprehensive residential and commercial property maintenance for Austin TX — keeping your entire property in top shape.',
  },
  {
    to: '/cleaning-services',
    image: '/images/cleaning-services.jpg',
    imageAlt: 'Professional cleaning services in Austin TX',
    title: 'Cleaning Services',
    description: 'Move-in cleaning, move-out cleaning, and rodent feces cleanup services for Austin TX homes. Thorough, safe, and reliable.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'West Austin, TX',
    text: 'Maintain It Bandits LLC transformed our yard completely! Their lawn mowing service is always on time and our grass has never looked better. Best lawn care in Austin!',
  },
  {
    name: 'James R.',
    location: 'Round Rock, TX',
    text: 'We switched from another Austin lawn service and the difference is night and day. Professional, reliable, and they actually care about doing quality work.',
  },
  {
    name: 'Maria L.',
    location: 'Cedar Park, TX',
    text: 'Their landscaping design completely transformed our backyard. The team was knowledgeable about Austin-native plants and created something beautiful and low-maintenance.',
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Lawn Care, Landscaping & Home Services Austin TX"
        description="Maintain It Bandits LLC — Austin TX's one-stop shop for lawn care, landscaping, mowing, fertilization, sod installation, cleaning services & property maintenance. Serving Austin, Round Rock, Cedar Park, Georgetown & surrounding areas. Free estimates!"
        keywords="lawn care Austin TX, lawn mowing Austin, landscaping Austin Texas, lawn fertilization Austin, sod installation Austin, cleaning services Austin, move in cleaning Austin, move out cleaning Austin, property maintenance Austin, lawn service near me, yard maintenance Round Rock, lawn care Cedar Park"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/hero-lawn.jpg"
            alt="Professional lawn care and home services in Austin TX - Maintain It Bandits LLC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/30 rounded-full px-4 py-1.5 mb-8">
              <Leaf className="w-3 h-3 text-lime" />
              <span className="text-lime text-xs font-semibold tracking-wider uppercase">Austin TX's One-Stop Home Service Shop</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl text-white font-bold leading-[1.1] mb-6">
              One Call for
              <span className="text-lime block">All Your Home Needs</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
              From lawn care and landscaping to deep cleaning services — Maintain It Bandits LLC is your Austin TX one-stop shop for everything your home needs. Licensed, insured, and committed to making your property the best on the block.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-lime hover:bg-lime-light text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl shadow-lime/10 flex items-center gap-2 justify-center"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+15125181558"
                className="flex items-center gap-2 text-white/60 hover:text-lime transition-colors text-lg font-medium justify-center"
              >
                <Phone className="w-5 h-5" />
                (512) 518-1558
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-black py-6 border-t border-lime/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-white/40">
              <Shield className="w-5 h-5 text-lime" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <Clock className="w-5 h-5 text-lime" />
              <span className="text-sm font-medium">Same Week Service</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <Star className="w-5 h-5 text-lime" />
              <span className="text-sm font-medium">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <Leaf className="w-5 h-5 text-lime" />
              <span className="text-sm font-medium">Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 rounded-full px-4 py-1.5 mb-6">
              <Sprout className="w-3 h-3 text-lime" />
              <span className="text-lime text-xs font-semibold tracking-wider uppercase">Our Services</span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl text-black font-bold mb-4">
              Your One-Stop Shop for Home Services
            </h2>
            <p className="text-charcoal/50 text-lg max-w-2xl mx-auto">
              From weekly lawn mowing to deep cleaning services, Maintain It Bandits LLC handles it all. One company, one call, every service your Austin TX home needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.to} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 rounded-full px-4 py-1.5 mb-6">
                <Star className="w-3 h-3 text-lime" />
                <span className="text-lime text-xs font-semibold tracking-wider uppercase">Why Choose Us</span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl text-black font-bold mb-6 leading-tight">
                Austin TX's One-Stop Home Service Company
              </h2>
              <p className="text-charcoal/50 text-lg mb-8 leading-relaxed">
                Maintain It Bandits LLC is not just another lawn service — we are your one-stop shop for everything your Austin TX home needs. Lawn care, landscaping, cleaning, and property maintenance all under one roof. No more juggling multiple contractors.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: 'Licensed & insured for your peace of mind' },
                  { icon: Clock, text: 'Reliable, on-time service every visit' },
                  { icon: Star, text: 'Consistent 5-star reviews from Austin homeowners' },
                  { icon: Leaf, text: 'Eco-friendly practices & Austin-native expertise' },
                  { icon: Droplets, text: 'Water-wise solutions for Central Texas climate' },
                  { icon: Wrench, text: 'Full-service — lawn care, landscaping, cleaning & more' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-lime" />
                    </div>
                    <span className="text-charcoal/60">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/austin-skyline.jpg"
                alt="Austin Texas skyline - Maintain It Bandits LLC service area"
                className="rounded-3xl shadow-2xl shadow-black/10 w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-warm-white rounded-2xl p-6 shadow-xl border border-lime/10">
                <div className="text-4xl font-heading font-bold text-black">500+</div>
                <div className="text-charcoal/40 text-sm">Happy Austin Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-3 h-3 text-lime" />
              <span className="text-lime text-xs font-semibold tracking-wider uppercase">Testimonials</span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl text-black font-bold mb-4">
              What Austin Homeowners Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Quick */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 rounded-full px-4 py-1.5 mb-6">
            <Wind className="w-3 h-3 text-lime" />
            <span className="text-lime text-xs font-semibold tracking-wider uppercase">Service Areas</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl text-black font-bold mb-4">
            Serving Greater Austin TX
          </h2>
          <p className="text-charcoal/50 text-lg max-w-2xl mx-auto mb-12">
            Maintain It Bandits LLC provides lawn care, landscaping, cleaning, and home services throughout the Austin metro area and surrounding communities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Leander', 'Buda', 'Kyle', 'Bee Cave', 'West Lake Hills', 'Lakeway', 'Dripping Springs'].map((city) => (
              <Link
                key={city}
                to="/service-areas"
                className="px-5 py-2.5 bg-warm-white rounded-full text-black font-medium text-sm border border-lime/20 hover:bg-lime hover:text-black hover:border-lime transition-all shadow-sm"
              >
                {city} TX
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
