import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  {
    label: 'Services',
    children: [
      { path: '/lawn-mowing', label: 'Lawn Mowing' },
      { path: '/landscaping', label: 'Landscaping' },
      { path: '/fertilization', label: 'Fertilization & Weed Control' },
      { path: '/sod-installation', label: 'Sod Installation' },
      { path: '/property-maintenance', label: 'Property Maintenance' },
      { path: '/cleaning-services', label: 'Cleaning Services' },
    ],
  },
  { path: '/service-areas', label: 'Service Areas' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-lime/10'
          : 'bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Maintain It Bandits LLC - Lawn Care & Home Services Austin TX"
              className="h-14 w-14 rounded-full object-cover border-2 border-lime/50 group-hover:border-lime transition-colors"
            />
            <div className="flex flex-col">
              <span className="text-lime font-heading text-lg font-bold leading-tight">
                Maintain It Bandits LLC
              </span>
              <span className="text-lime-light/60 text-xs font-body font-medium tracking-wider uppercase">
                Austin TX
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                      location.pathname.startsWith('/lawn-mowing') ||
                      location.pathname.startsWith('/landscaping') ||
                      location.pathname.startsWith('/fertilization') ||
                      location.pathname.startsWith('/sod') ||
                      location.pathname.startsWith('/property') ||
                      location.pathname.startsWith('/cleaning')
                        ? 'text-lime bg-lime/10'
                        : 'text-white/70 hover:text-lime hover:bg-lime/10'
                    }`}
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-black-light rounded-xl shadow-2xl shadow-lime/5 border border-lime/20 py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-3 text-sm text-white/70 hover:bg-lime/10 hover:text-lime transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path!}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-lime bg-lime/10'
                      : 'text-white/70 hover:text-lime hover:bg-lime/10'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+15125181558"
              className="flex items-center gap-2 text-white/60 hover:text-lime transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              (512) 518-1558
            </a>
            <Link
              to="/contact"
              className="bg-lime hover:bg-lime-light text-black font-bold px-5 py-2.5 rounded-full text-sm transition-all hover:scale-105 shadow-lg shadow-lime/20"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-lime p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t border-lime/20">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full text-left px-4 py-3 text-white/70 hover:text-lime hover:bg-lime/10 rounded-lg text-sm font-medium flex items-center justify-between"
                  >
                    {link.label}
                    <svg
                      className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 text-white/50 hover:text-lime text-sm"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path!}
                  className="block px-4 py-3 text-white/70 hover:text-lime hover:bg-lime/10 rounded-lg text-sm font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-lime/20 space-y-3">
              <a
                href="tel:+15125181558"
                className="flex items-center gap-2 text-lime text-sm px-4"
              >
                <Phone className="w-4 h-4" />
                (512) 518-1558
              </a>
              <Link
                to="/contact"
                className="block text-center bg-lime hover:bg-lime-light text-black font-bold px-5 py-3 rounded-full text-sm transition-all"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
