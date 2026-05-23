import ServicePageLayout from '../components/ServicePageLayout';

export default function CleaningServices() {
  return (
    <ServicePageLayout
      title="Cleaning Services"
      metaDescription="Professional cleaning services in Austin TX. Move-in cleaning, move-out cleaning, and rodent feces cleanup. Thorough, safe, and reliable. Maintain It Bandits LLC serves Austin, Round Rock, Cedar Park & surrounding areas. Free estimates!"
      metaKeywords="cleaning services Austin TX, move in cleaning Austin, move out cleaning Austin, rodent feces cleanup Austin, deep cleaning Austin Texas, house cleaning Austin, move in move out cleaning Austin TX, rodent droppings cleanup Austin, sanitization services Austin"
      heroHeading="Cleaning Services Austin TX"
      heroSubheading="Professional move-in cleaning, move-out cleaning, and rodent feces cleanup services for Austin TX homes. Thorough, safe, and reliable — we leave your home spotless and move-in ready."
      heroImage="/images/cleaning-services.jpg"
      heroImageAlt="Professional cleaning services in Austin TX by Maintain It Bandits LLC"
      introHeading="Austin TX Trusted Cleaning Professionals"
      introText={`Maintain It Bandits LLC is not just about lawn care — we are your one-stop shop for home services in Austin TX, and that includes professional cleaning. Whether you are moving into a new home, moving out and need to leave it spotless, or dealing with the aftermath of a rodent infestation, our trained cleaning team delivers thorough, reliable results.\n\nOur move-in and move-out cleaning services ensure that Austin TX homes are left in pristine condition. We understand the standards that landlords, property managers, and new homeowners expect, and we exceed them every time. From top-to-bottom scrubbing to detailed attention on kitchens, bathrooms, and hard-to-reach areas, no corner is left untouched.\n\nRodent feces cleanup requires specialized knowledge, proper safety equipment, and thorough sanitization — and that is exactly what Maintain It Bandits LLC provides. Our Austin TX team follows CDC and EPA guidelines for safe removal and disinfection, protecting your family and restoring your home to a safe, healthy condition.`}
      features={[
        { title: "Move-In Cleaning", description: "Comprehensive deep cleaning for your new Austin TX home before you move in. We sanitize every surface, clean cabinets inside and out, scrub bathrooms, kitchens, and make your new home fresh and move-in ready." },
        { title: "Move-Out Cleaning", description: "Detailed move-out cleaning to help Austin TX homeowners and renters get their security deposit back. We clean every room top to bottom, including appliances, baseboards, light fixtures, and more." },
        { title: "Rodent Feces Cleanup", description: "Safe, thorough removal and sanitization of rodent droppings in Austin TX homes. We follow CDC guidelines, use proper PPE, and disinfect all affected areas to eliminate health hazards." },
        { title: "Deep Sanitization", description: "Hospital-grade disinfection and sanitization for Austin homes that need more than a standard cleaning. We eliminate bacteria, viruses, and contaminants from all surfaces." },
        { title: "Kitchen Deep Clean", description: "Thorough kitchen cleaning including inside appliances, cabinet exteriors, countertops, backsplash, sink, and floors. We make Austin TX kitchens shine like new." },
        { title: "Bathroom Deep Clean", description: "Scrubbing and sanitizing toilets, tubs, showers, sinks, tile, grout, and fixtures. We eliminate mold, mildew, and soap scum from Austin bathrooms." },
      ]}
      processSteps={[
        { step: "1", title: "Free Assessment", description: "We discuss your cleaning needs over the phone or visit your Austin TX property to assess the scope of work and provide an accurate, transparent quote." },
        { step: "2", title: "Custom Cleaning Plan", description: "Based on your needs — move-in, move-out, or rodent cleanup — we create a detailed cleaning checklist tailored to your Austin home." },
        { step: "3", title: "Professional Cleaning", description: "Our trained Austin cleaning team arrives with all supplies and equipment, following a systematic approach to ensure nothing is missed." },
        { step: "4", title: "Quality Inspection", description: "We walk through your Austin TX home with you after cleaning to ensure everything meets your expectations. Not satisfied? We make it right." },
      ]}
      faqs={[
        { question: "What does move-in cleaning include in Austin TX?", answer: "Our Austin TX move-in cleaning includes deep cleaning of all rooms, sanitizing kitchens and bathrooms, cleaning inside cabinets and closets, wiping down all surfaces, baseboards, light fixtures, and more. We make your new home fresh and ready for you to move in." },
        { question: "How much does move-out cleaning cost in Austin?", answer: "Move-out cleaning costs in Austin TX depend on home size and condition. Contact Maintain It Bandits LLC for a free, no-obligation estimate tailored to your specific property and cleaning needs." },
        { question: "Is rodent feces cleanup safe?", answer: "Yes. Our Austin TX team follows CDC and EPA guidelines for rodent feces cleanup. We use proper personal protective equipment, specialized cleaning agents, and thorough sanitization procedures to ensure your home is safe and hazard-free." },
        { question: "How quickly can you clean my Austin home?", answer: "We often accommodate Austin TX cleaning requests within the same week. For move-in or move-out situations with tight deadlines, we do our best to work with your schedule. Contact us for current availability." },
        { question: "Do you bring your own cleaning supplies?", answer: "Yes! Maintain It Bandits LLC brings all necessary cleaning supplies and equipment to your Austin TX home. We use professional-grade, EPA-approved products for thorough cleaning and sanitization." },
        { question: "Can you clean a home after pest control treatment in Austin?", answer: "Absolutely. We provide post-pest-control cleaning for Austin TX homes, including removal of dead rodents, droppings, and sanitization of all affected areas. We coordinate with your pest control provider for the best results." },
      ]}
      areasServed="Maintain It Bandits LLC provides professional cleaning services including move-in cleaning, move-out cleaning, and rodent feces cleanup throughout Austin TX, Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Buda, Kyle, Bee Cave, West Lake Hills, Lakeway, and Dripping Springs. Spotless homes across Central Texas!"
    />
  );
}
