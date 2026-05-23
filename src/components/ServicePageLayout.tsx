import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import SEO from './SEO';
import CTASection from './CTASection';

interface ServicePageLayoutProps {
  title: string;
  metaDescription: string;
  metaKeywords: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  introHeading: string;
  introText: string;
  features: { title: string; description: string }[];
  processSteps: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  areasServed: string;
}

export default function ServicePageLayout({
  title,
  metaDescription,
  metaKeywords,
  heroHeading,
  heroSubheading,
  heroImage,
  heroImageAlt,
  introHeading,
  introText,
  features,
  processSteps,
  faqs,
  areasServed,
}: ServicePageLayoutProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <SEO title={title} description={metaDescription} keywords={metaKeywords} />
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-lime rounded-full" />
              <span className="text-lime text-xs font-semibold tracking-wider uppercase">Austin TX Home Services</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl text-white font-bold leading-tight mb-6">
              {heroHeading}
            </h1>
            <p className="text-white/60 text-lg md:text-xl mb-8 leading-relaxed">
              {heroSubheading}
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

      {/* Intro */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-black font-bold mb-6">
            {introHeading}
          </h2>
          <div className="text-charcoal/70 text-lg leading-relaxed space-y-4">
            {introText.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-black font-bold mb-4">
              What's Included
            </h2>
            <p className="text-charcoal/50 text-lg max-w-2xl mx-auto">
              Comprehensive {title.toLowerCase()} services tailored for Austin TX properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-warm-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-lime/10 hover:shadow-xl hover:border-lime/20 transition-all"
              >
                <CheckCircle className="w-8 h-8 text-lime mb-4" />
                <h3 className="font-heading text-lg font-bold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-charcoal/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-black font-bold mb-4">
              Our Process
            </h2>
            <p className="text-charcoal/50 text-lg">
              Simple, transparent, and hassle-free from start to finish.
            </p>
          </div>
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-full bg-black text-lime flex items-center justify-center font-heading font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-black mb-1">
                    {step.title}
                  </h3>
                  <p className="text-charcoal/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-black font-bold mb-4">
            {title} Service Areas
          </h2>
          <p className="text-charcoal/50 text-lg mb-6">
            {areasServed}
          </p>
          <p className="text-charcoal/40 text-sm">
            Don't see your area? Give us a call — we may still be able to help! We're always expanding our Austin TX service area.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-black font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-charcoal/50 text-lg">
              Common questions about our {title.toLowerCase()} services in Austin TX.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-warm-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-lime/10"
              >
                <h3 className="font-heading text-lg font-bold text-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-charcoal/50 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
