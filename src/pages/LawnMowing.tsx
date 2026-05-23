import ServicePageLayout from '../components/ServicePageLayout';

export default function LawnMowing() {
  return (
    <ServicePageLayout
      title="Lawn Mowing & Maintenance"
      metaDescription="Professional lawn mowing and maintenance services in Austin TX. Weekly & bi-weekly mowing, edging, blowing, and trimming. Serving Austin, Round Rock, Cedar Park, Georgetown & surrounding areas. Free estimates!"
      metaKeywords="lawn mowing Austin TX, lawn maintenance Austin, weekly lawn mowing Austin, bi-weekly lawn service Austin, lawn care near me Austin, grass cutting Austin Texas, lawn trimming Austin, yard mowing Round Rock, lawn service Cedar Park"
      heroHeading="Lawn Mowing & Maintenance Austin TX"
      heroSubheading="Keep your Austin TX property looking pristine with our professional weekly and bi-weekly lawn mowing services. Reliable, consistent, and affordable lawn maintenance for residential and commercial properties."
      heroImage="/images/hero-lawn.jpg"
      heroImageAlt="Professional lawn mowing service in Austin TX by Maintain It Bandits LLC"
      introHeading="Austin TX Most Reliable Lawn Mowing Service"
      introText={`When it comes to lawn mowing in Austin TX, Maintain It Bandits LLC delivers consistent, professional results every single time. Our lawn maintenance services are designed specifically for the Austin climate and the unique challenges of Central Texas grass varieties like Bermuda, St. Augustine, and Zoysia.\n\nWe understand that a well-maintained lawn is more than just curb appeal — it is a reflection of your home or business. That is why our Austin lawn mowing team shows up on time, every time, with professional-grade equipment and the attention to detail your property deserves.\n\nWhether you need weekly lawn mowing to keep your residential property looking sharp, or regular commercial lawn maintenance for your Austin business, Maintain It Bandits LLC has you covered. We serve the entire greater Austin area including Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, and beyond.`}
      features={[
        { title: "Weekly & Bi-Weekly Mowing", description: "Flexible mowing schedules tailored to your Austin TX lawn. We adjust cutting heights based on season and grass type for optimal health." },
        { title: "Precision Edging", description: "Clean, crisp edges along sidewalks, driveways, and flower beds that give your Austin property that professionally maintained look." },
        { title: "Blowing & Cleanup", description: "Thorough blowing of all hard surfaces including patios, driveways, sidewalks, and porches. We leave your Austin property spotless." },
        { title: "Weed Trimming", description: "Detailed weed trimming around obstacles, fences, trees, and hard-to-reach areas that mowers cannot access in your Austin yard." },
        { title: "Grass Height Management", description: "We adjust mowing heights seasonally for Austin TX grass types — cutting Bermuda shorter in summer, St. Augustine higher in shade." },
        { title: "Seasonal Cleanup", description: "Spring and fall cleanup services including leaf removal, debris clearing, and seasonal lawn preparation for Austin properties." },
      ]}
      processSteps={[
        { step: "1", title: "Free Property Assessment", description: "We visit your Austin TX property to assess lawn size, grass type, terrain, and any special requirements. This helps us provide an accurate, fair quote." },
        { step: "2", title: "Custom Service Plan", description: "Based on your lawn care needs and budget, we create a personalized mowing schedule — weekly, bi-weekly, or custom — designed for Austin conditions." },
        { step: "3", title: "Consistent Service", description: "Our Austin lawn mowing crew arrives on your scheduled day, every time. We maintain the same crew for familiarity with your property." },
        { step: "4", title: "Quality Guarantee", description: "Not satisfied with a mow? Let us know within 24 hours and we will return to make it right. Your Austin lawn satisfaction is our top priority." },
      ]}
      faqs={[
        { question: "How much does lawn mowing cost in Austin TX?", answer: "Our Austin TX lawn mowing services start based on lawn size and frequency. Weekly mowing typically costs less per visit than bi-weekly. Contact us for a free, no-obligation estimate tailored to your specific property." },
        { question: "What is included in your lawn mowing service?", answer: "Our standard Austin lawn mowing service includes mowing, edging along all hard surfaces, weed trimming around obstacles, and blowing of all walkways, driveways, and patios. Everything your Austin property needs to look its best." },
        { question: "Do you offer same-week lawn mowing service in Austin?", answer: "Yes! We often accommodate new Austin TX customers within the same week, depending on our schedule. Contact us today and we will get your lawn looking great as soon as possible." },
        { question: "What height do you mow Austin lawns?", answer: "We adjust mowing height based on grass type and season. For Austin TX lawns, we typically cut Bermuda grass at 1.5-2 inches and St. Augustine at 3-4 inches. During drought or extreme heat, we raise the cutting height to protect your grass." },
        { question: "Do you provide commercial lawn mowing in Austin?", answer: "Absolutely! Maintain It Bandits LLC provides commercial lawn maintenance throughout Austin TX. We service office parks, retail centers, HOAs, and commercial properties with the same attention to detail as our residential clients." },
        { question: "What areas around Austin do you serve for lawn mowing?", answer: "We provide lawn mowing services throughout the greater Austin metro area including Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Buda, Kyle, Bee Cave, West Lake Hills, Lakeway, and Dripping Springs." },
      ]}
      areasServed="Maintain It Bandits LLC provides professional lawn mowing and maintenance services throughout Austin TX, Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Buda, Kyle, Bee Cave, West Lake Hills, Lakeway, and Dripping Springs. If you are in the greater Austin metro area, we have got your lawn covered!"
    />
  );
}
