import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const areas = [
  { city: 'Austin', description: 'As Austin TX natives, we know every neighborhood from Downtown to North Austin, South Austin, East Austin, and West Austin. Our Austin lawn care and home services cover the entire city.', zipCodes: '78701, 78702, 78703, 78704, 78705, 78722, 78723, 78724, 78725, 78727, 78728, 78729, 78730, 78731, 78732, 78733, 78734, 78735, 78736, 78737, 78738, 78739, 78741, 78742, 78744, 78745, 78746, 78747, 78748, 78749, 78750, 78751, 78752, 78753, 78754, 78756, 78757, 78758, 78759' },
  { city: 'Round Rock', description: 'Round Rock TX homeowners trust Maintain It Bandits LLC for reliable lawn mowing, landscaping, cleaning, and property maintenance. We serve all Round Rock neighborhoods.', zipCodes: '78664, 78665, 78680, 78681' },
  { city: 'Cedar Park', description: 'Professional lawn care, landscaping, and cleaning services for Cedar Park TX. From routine mowing to complete landscape transformations and move-in/move-out cleaning.', zipCodes: '78613, 78614' },
  { city: 'Georgetown', description: 'Georgetown TX lawn care and home services by Maintain It Bandits LLC. Comprehensive lawn maintenance, landscaping, and cleaning services.', zipCodes: '78626, 78727, 78628, 78633, 78642' },
  { city: 'Pflugerville', description: 'Pflugerville TX residents count on Maintain It Bandits LLC for consistent, professional lawn care and cleaning. Weekly mowing, fertilization, and move-in/move-out cleaning.', zipCodes: '78660, 78691' },
  { city: 'Leander', description: 'Leander TX lawn care, landscaping, and cleaning by Maintain It Bandits LLC. Top-notch lawn maintenance and home services for new and established neighborhoods.', zipCodes: '78641, 78646' },
  { city: 'Buda', description: 'Buda TX lawn care and cleaning services from Maintain It Bandits LLC. Professional mowing, landscaping, move-in/move-out cleaning, and property maintenance.', zipCodes: '78610' },
  { city: 'Kyle', description: 'Kyle TX lawn care, landscaping, and cleaning. Maintain It Bandits LLC serves Kyle with professional lawn mowing, fertilization, and move-in/move-out cleaning.', zipCodes: '78640' },
  { city: 'Bee Cave', description: 'Bee Cave TX premium lawn care and home services. Maintain It Bandits LLC provides expert landscaping, lawn maintenance, and cleaning for Bee Cave luxury properties.', zipCodes: '78738, 78736' },
  { city: 'West Lake Hills', description: 'West Lake Hills TX lawn care and home services by Maintain It Bandits LLC. We specialize in the unique landscaping needs of West Lake Hills properties.', zipCodes: '78746, 78733' },
  { city: 'Lakeway', description: 'Lakeway TX lawn care, landscaping, and cleaning. Maintain It Bandits LLC serves Lakeway with professional lawn maintenance, landscape design, and home cleaning.', zipCodes: '78734, 78738' },
  { city: 'Dripping Springs', description: 'Dripping Springs TX lawn care and home services from Maintain It Bandits LLC. Professional lawn maintenance, xeriscaping, landscaping, and cleaning for Hill Country properties.', zipCodes: '78620' },
];

export default function ServiceAreas() {
  return (
    <>
      <SEO title="Service Areas" description="Maintain It Bandits LLC provides lawn care, landscaping, cleaning, and home services throughout Austin TX and surrounding areas including Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Buda, Kyle, Bee Cave, West Lake Hills, Lakeway & Dripping Springs." keywords="lawn care near me Austin TX, lawn service Round Rock, landscaping Cedar Park, lawn mowing Georgetown TX, yard maintenance Pflugerville, lawn care Leander, landscaping Buda Kyle, cleaning services Austin area, home services Austin TX" />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <img src="/images/austin-skyline.jpg" alt="Austin Texas skyline - Maintain It Bandits LLC service area" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/30 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-3 h-3 text-lime" />
              <span className="text-lime text-xs font-semibold tracking-wider uppercase">Service Areas</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl text-white font-bold leading-tight mb-6">
              Serving Greater <span className="text-lime block">Austin TX</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Maintain It Bandits LLC provides professional lawn care, landscaping, cleaning, and home services throughout the Austin metro area. From downtown Austin to the Hill Country, we have got your home covered.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-black font-bold mb-4">Our Austin TX Service Areas</h2>
            <p className="text-charcoal/50 text-lg max-w-2xl mx-auto">Do not see your city? Give us a call — we may still serve your neighborhood!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <div key={area.city} className="bg-warm-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-lime/10 hover:shadow-xl hover:border-lime/20 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-lime" /></div>
                  <h3 className="font-heading text-xl font-bold text-black">{area.city}, TX</h3>
                </div>
                <p className="text-charcoal/50 text-sm leading-relaxed mb-4">{area.description}</p>
                <div className="text-charcoal/30 text-xs mb-4"><span className="font-semibold">ZIP Codes:</span> {area.zipCodes}</div>
                <Link to="/contact" className="inline-flex items-center gap-1 text-lime font-semibold text-sm hover:gap-2 transition-all">Get Free Estimate <ArrowRight className="w-4 h-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't see your area */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-black font-bold mb-4">Do Not See Your Area?</h2>
          <p className="text-charcoal/50 text-lg mb-8">We are always expanding our Austin TX service area. If you are located near any of the cities listed above, give us a call!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-lime hover:bg-lime-light text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl shadow-lime/10 flex items-center gap-2 justify-center">Contact Us <ArrowRight className="w-5 h-5" /></Link>
            <a href="tel:+15125181558" className="flex items-center gap-2 text-charcoal/50 hover:text-black transition-colors text-lg font-medium justify-center"><Phone className="w-5 h-5" />(512) 518-1558</a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
