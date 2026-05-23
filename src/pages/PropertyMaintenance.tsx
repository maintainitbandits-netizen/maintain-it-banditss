import ServicePageLayout from '../components/ServicePageLayout';

export default function PropertyMaintenance() {
  return (
    <ServicePageLayout
      title="Property Maintenance"
      metaDescription="Comprehensive residential and commercial property maintenance services in Austin TX. Lawn care, landscaping, seasonal cleanup, pressure washing & more. Serving Austin, Round Rock, Cedar Park & surrounding areas."
      metaKeywords="property maintenance Austin TX, commercial property maintenance Austin, residential property maintenance Austin, HOA maintenance Austin, seasonal cleanup Austin, pressure washing Austin TX, property management Austin, yard maintenance Austin"
      heroHeading="Property Maintenance Austin TX"
      heroSubheading="Complete residential and commercial property maintenance for Austin TX. From routine lawn care to seasonal cleanups and pressure washing, we keep your entire property in top shape year-round."
      heroImage="/images/property-maintenance.jpg"
      heroImageAlt="Professional property maintenance service in Austin TX by Maintain It Bandits LLC"
      introHeading="Complete Property Maintenance for Austin TX"
      introText={`Maintaining a property in Austin TX requires more than just mowing the lawn. It takes a comprehensive approach that addresses every aspect of your property exterior — and that is exactly what Maintain It Bandits LLC delivers. Our full-service property maintenance programs keep Austin homes and businesses looking their best throughout the year.\n\nWhether you own a single Austin home, manage multiple rental properties, or oversee a commercial complex, our property maintenance services scale to meet your needs. We create custom maintenance plans that cover everything from weekly lawn care to seasonal cleanups, tree trimming, and pressure washing.\n\nAustin TX property owners trust Maintain It Bandits LLC because we are reliable, thorough, and professional. One call handles all your exterior maintenance needs — no more juggling multiple contractors or worrying about whether your property looks its best.`}
      features={[
        { title: "Full-Service Lawn Care", description: "Weekly mowing, edging, trimming, and blowing included in our Austin property maintenance programs. Your lawn always looks professionally maintained." },
        { title: "Seasonal Cleanups", description: "Spring and fall property cleanups for Austin TX homes and businesses. Leaf removal, debris clearing, bed edging, and seasonal preparation." },
        { title: "Pressure Washing", description: "Driveway, sidewalk, patio, and building exterior pressure washing to keep your Austin property looking clean and well-maintained." },
        { title: "Tree & Shrub Care", description: "Pruning, trimming, and shaping of trees and shrubs to maintain your Austin TX landscape and prevent overgrowth issues." },
        { title: "HOA & Commercial Programs", description: "Tailored maintenance programs for Austin HOAs, apartment complexes, and commercial properties that meet association standards and impress tenants." },
        { title: "Seasonal Color", description: "Seasonal flower bed installations with Austin-appropriate annuals and perennials that add vibrant color to your property throughout the year." },
      ]}
      processSteps={[
        { step: "1", title: "Property Assessment", description: "We walk your Austin TX property to understand all maintenance needs, identify priorities, and discuss your expectations and budget." },
        { step: "2", title: "Custom Maintenance Plan", description: "We create a comprehensive property maintenance schedule covering all services your Austin property needs, from weekly lawn care to seasonal projects." },
        { step: "3", title: "Dedicated Crew", description: "Your Austin property gets a dedicated maintenance crew who knows your property inside and out, ensuring consistent quality every visit." },
        { step: "4", title: "Regular Communication", description: "We provide regular updates and are always available to discuss your Austin TX property needs. Adjustments to your maintenance plan are always just a call away." },
      ]}
      faqs={[
        { question: "What does property maintenance include in Austin TX?", answer: "Our Austin property maintenance programs include lawn mowing, edging, trimming, blowing, seasonal cleanups, mulch refresh, shrub pruning, and more. Custom programs can include pressure washing, seasonal color, and landscape care." },
        { question: "Do you offer commercial property maintenance in Austin?", answer: "Yes! Maintain It Bandits LLC provides comprehensive commercial property maintenance throughout Austin TX. We service office parks, retail centers, HOAs, apartment complexes, and more." },
        { question: "How much does property maintenance cost in Austin?", answer: "Property maintenance costs in Austin TX vary based on property size, services needed, and frequency. We offer free on-site assessments and custom quotes tailored to your specific property and budget." },
        { question: "Can you maintain multiple Austin properties?", answer: "Absolutely! We manage maintenance for Austin property owners with multiple residential or commercial properties. We provide consolidated billing and consistent service across all locations." },
        { question: "Do you offer seasonal property maintenance in Austin?", answer: "Yes, we offer spring and fall seasonal cleanup packages for Austin TX properties. These include leaf removal, bed cleanup, pruning, mulching, and seasonal preparation." },
        { question: "Are you insured for Austin property maintenance?", answer: "Yes! Maintain It Bandits LLC is fully licensed and insured for all property maintenance services in Austin TX. We carry general liability and workers compensation insurance for your protection." },
      ]}
      areasServed="Maintain It Bandits LLC provides comprehensive property maintenance services throughout Austin TX, Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Buda, Kyle, Bee Cave, West Lake Hills, Lakeway, and Dripping Springs. Keeping Central Texas properties pristine!"
    />
  );
}
