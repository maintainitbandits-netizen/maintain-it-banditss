import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  showPhone?: boolean;
}

export default function CTASection({
  heading = "Ready for the Best Home Services in Austin TX?",
  subheading = "Get your free, no-obligation estimate today. Maintain It Bandits LLC is your one-stop shop for lawn care, landscaping, cleaning, and more in Austin TX.",
  showPhone = true,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-light rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-5xl text-white font-bold mb-6">
          {heading}
        </h2>
        <p className="text-white/40 text-lg mb-10 max-w-2xl mx-auto">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="bg-lime hover:bg-lime-light text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl shadow-lime/10 flex items-center gap-2"
          >
            Get Free Estimate
            <ArrowRight className="w-5 h-5" />
          </Link>
          {showPhone && (
            <a
              href="tel:+15125181558"
              className="flex items-center gap-2 text-white/60 hover:text-lime transition-colors text-lg font-medium"
            >
              <Phone className="w-5 h-5" />
              (512) 518-1558
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
