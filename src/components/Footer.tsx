import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';

const services = [
  { path: '/lawn-mowing', label: 'Lawn Mowing & Maintenance' },
  { path: '/landscaping', label: 'Landscaping & Design' },
  { path: '/fertilization', label: 'Fertilization & Weed Control' },
  { path: '/sod-installation', label: 'Sod Installation' },
  { path: '/property-maintenance', label: 'Property Maintenance' },
  { path: '/cleaning-services', label: 'Cleaning Services' },
];

const areas = [
  'Austin', 'Round Rock', 'Cedar Park', 'Georgetown',
  'Pflugerville', 'Leander', 'Buda', 'Kyle',
  'Bee Cave', 'West Lake Hills', 'Lakeway', 'Dripping Springs',
];

export default function Footer() {
  return (
    <footer className="bg-black text-white/70">
      {/* CTA Banner */}
      <div className="bg-lime/5 border-y border-lime/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-white font-bold">
              Ready to Transform Your Home?
            </h2>
            <p className="text-white/40 mt-2">
              Get a free, no-obligation estimate for your Austin TX property today.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-lime hover:bg-lime-light text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl shadow-lime/10 whitespace-nowrap"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Maintain It Bandits LLC"
                className="h-12 w-12 rounded-full object-cover border-2 border-lime/30"
              />
              <div>
                <div className="text-lime font-heading text-lg font-bold">Maintain It Bandits LLC</div>
                <div className="text-lime-light/40 text-xs tracking-wider uppercase">Austin TX</div>
              </div>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed mb-6">
              Austin TX's one-stop shop for lawn care, landscaping, cleaning, and home services. Licensed & insured.
              Serving residential and commercial properties throughout the greater Austin area.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime/10 hover:text-lime transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime/10 hover:text-lime transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.path}>
                  <Link
                    to={s.path}
                    className="text-white/30 hover:text-lime transition-colors text-sm"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-6">Service Areas</h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area}>
                  <Link
                    to="/service-areas"
                    className="text-white/30 hover:text-lime transition-colors text-sm"
                  >
                    Lawn Care {area} TX
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+15125181558" className="flex items-start gap-3 text-white/30 hover:text-lime transition-colors text-sm">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  (512) 518-1558
                </a>
              </li>
              <li>
                <a href="mailto:info@maintainitbandits.com" className="flex items-start gap-3 text-white/30 hover:text-lime transition-colors text-sm">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  info@maintainitbandits.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/30 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Serving Austin TX & Surrounding Areas
              </li>
              <li className="flex items-start gap-3 text-white/30 text-sm">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                Mon–Sat: 7:00 AM – 7:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Maintain It Bandits LLC. All rights reserved. Licensed & Insured.
          </p>
          <p className="text-white/20 text-xs">
            Lawn Care Austin TX • Landscaping Austin Texas • Cleaning Services Austin TX
          </p>
        </div>
      </div>
    </footer>
  );
}
