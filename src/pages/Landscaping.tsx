import ServicePageLayout from '../components/ServicePageLayout';

export default function Landscaping() {
  return (
    <ServicePageLayout
      title="Landscaping & Landscape Design"
      metaDescription="Professional landscaping and landscape design services in Austin TX. Custom garden beds, mulching, hardscaping, native plants, xeriscaping & more. Serving Austin, Round Rock, Cedar Park & surrounding areas. Free estimates!"
      metaKeywords="landscaping Austin TX, landscape design Austin, landscaping company Austin Texas, residential landscaping Austin, xeriscaping Austin, native plant landscaping Austin, garden beds Austin, mulching Austin TX, hardscaping Austin, landscape installation Austin"
      heroHeading="Landscaping & Landscape Design Austin TX"
      heroSubheading="Transform your Austin TX outdoor space with custom landscape design and professional installation. From xeriscaping to lush garden beds, we create landscapes that thrive in Central Texas."
      heroImage="/images/landscaping.jpg"
      heroImageAlt="Professional landscaping design and installation in Austin TX by Maintain It Bandits LLC"
      introHeading="Custom Landscaping Solutions for Austin TX Properties"
      introText={`Maintain It Bandits LLC brings Austin TX homeowners and businesses the landscaping expertise needed to create stunning, sustainable outdoor spaces. Our landscape design team understands the unique challenges of Central Texas — from scorching summers to clay soils — and creates landscapes that not only look beautiful but thrive in the Austin climate.\n\nWhether you are looking for a complete landscape transformation, a drought-resistant xeriscape design, or simply want to refresh your existing garden beds, our Austin landscaping professionals deliver exceptional results. We specialize in Austin-native and adapted plants that require less water and maintenance while providing year-round beauty.\n\nFrom initial design consultation to final installation, Maintain It Bandits LLC handles every aspect of your Austin TX landscaping project. We serve residential and commercial properties throughout Austin, Round Rock, Cedar Park, Georgetown, and the surrounding Central Texas communities.`}
      features={[
        { title: "Custom Landscape Design", description: "Personalized landscape plans created specifically for your Austin TX property, considering soil type, sun exposure, water availability, and your aesthetic preferences." },
        { title: "Garden Bed Installation", description: "Beautiful raised and in-ground garden beds designed for Austin climate conditions, filled with native and adapted plants that flourish in Central Texas." },
        { title: "Mulching Services", description: "Professional mulch installation to retain moisture, suppress weeds, and regulate soil temperature. We use premium hardwood mulch ideal for Austin landscapes." },
        { title: "Xeriscaping", description: "Water-wise xeriscape designs perfect for Austin TX drought conditions. Beautiful, low-maintenance landscapes using drought-tolerant plants and efficient water management." },
        { title: "Hardscaping", description: "Patios, walkways, retaining walls, and decorative stone features that complement your Austin landscape and add functional outdoor living space." },
        { title: "Native Plant Installation", description: "Austin-native and Texas-adapted plants that thrive with minimal water and care, supporting local wildlife and reducing maintenance costs." },
      ]}
      processSteps={[
        { step: "1", title: "On-Site Consultation", description: "We visit your Austin TX property to discuss your vision, assess site conditions, and understand your budget. This free consultation is the first step to your dream landscape." },
        { step: "2", title: "Custom Design", description: "Our Austin landscape designer creates a detailed plan incorporating your preferences, Austin climate considerations, and sustainable practices tailored to your property." },
        { step: "3", title: "Professional Installation", description: "Our experienced Austin landscaping crew brings your design to life with quality materials, proper planting techniques, and attention to every detail." },
        { step: "4", title: "Ongoing Care", description: "We provide post-installation care guidance and offer ongoing landscape maintenance to keep your Austin TX landscape looking its best for years to come." },
      ]}
      faqs={[
        { question: "How much does landscaping cost in Austin TX?", answer: "Landscaping costs in Austin vary based on project scope, materials, and plant selections. Simple garden bed installations start at a few hundred dollars, while complete landscape transformations range higher. Contact us for a free, detailed estimate for your Austin property." },
        { question: "Do you offer xeriscaping in Austin?", answer: "Yes! Xeriscaping is one of our specialties. Our Austin TX xeriscape designs use drought-tolerant native plants, efficient water management, and decorative stone to create beautiful, water-wise landscapes perfect for Central Texas." },
        { question: "What plants work best for Austin TX landscapes?", answer: "We recommend Austin-native and adapted plants like Texas Sage, Lantana, Black-Eyed Susan, Mexican Feathergrass, and various succulents. These plants thrive in Austin climate conditions with minimal water and maintenance." },
        { question: "Can you redesign my existing Austin landscape?", answer: "Absolutely! Whether you want a complete overhaul or selective updates, our Austin landscaping team can transform your existing landscape. We can refresh garden beds, add hardscaping, or redesign your entire outdoor space." },
        { question: "Do you offer landscape maintenance in Austin?", answer: "Yes, Maintain It Bandits LLC provides ongoing landscape maintenance throughout Austin TX including weeding, pruning, mulch refresh, seasonal plantings, and landscape care." },
        { question: "How long does a landscaping project take in Austin?", answer: "Project timelines vary based on scope. Simple garden bed installations may take 1-2 days, while complete landscape transformations can take 1-3 weeks. We provide a detailed timeline during your free Austin consultation." },
      ]}
      areasServed="Maintain It Bandits LLC provides professional landscaping and landscape design services throughout Austin TX, Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Buda, Kyle, Bee Cave, West Lake Hills, Lakeway, and Dripping Springs. Transforming Central Texas landscapes one property at a time!"
    />
  );
}
