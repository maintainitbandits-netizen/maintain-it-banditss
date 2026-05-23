import ServicePageLayout from '../components/ServicePageLayout';

export default function AerationOverseeding() {
  return (
    <ServicePageLayout
      title="Aeration & Overseeding"
      metaDescription="Professional lawn aeration and overseeding services in Austin TX. Core aeration relieves soil compaction, overseeding thickens thin lawns. Serving Austin, Round Rock, Cedar Park & surrounding areas. Free estimates!"
      metaKeywords="lawn aeration Austin TX, core aeration Austin, overseeding Austin Texas, lawn aeration near me Austin, aeration and overseeding Austin, lawn seeding Austin, soil compaction Austin, lawn renovation Austin TX"
      heroHeading="Aeration & Overseeding Austin TX"
      heroSubheading="Revitalize your Austin TX lawn with professional core aeration and overseeding. Relieve soil compaction, improve root growth, and thicken thin turf for a lush, healthy lawn."
      heroImage="/images/aeration.jpg"
      heroImageAlt="Professional lawn aeration and overseeding in Austin TX by Maintain It Bandits LLC"
      introHeading="Austin TX Aeration & Overseeding Specialists"
      introText={`Austin TX lawns face unique challenges — heavy clay soils, extreme heat, and heavy foot traffic all contribute to soil compaction that suffocates your grass roots. Core aeration is the solution, and Maintain It Bandits LLC provides professional aeration services that breathe new life into your Austin lawn.\n\nCore aeration removes small plugs of soil from your lawn, creating channels for air, water, and nutrients to reach the root zone. This relieves compaction, improves drainage, and encourages deeper root growth — all critical for healthy grass in Austin TX challenging conditions.\n\nCombined with overseeding, aeration becomes even more powerful. We spread premium grass seed over your aerated Austin lawn, allowing seed to fall into the aeration holes for excellent seed-to-soil contact. The result? A thicker, healthier lawn that crowds out weeds and looks amazing.`}
      features={[
        { title: "Core Aeration", description: "Professional core aeration using commercial-grade equipment that removes soil plugs, relieving compaction in Austin clay soils and improving root zone access." },
        { title: "Overseeding", description: "Premium grass seed application tailored to your Austin TX lawn type. We select seed varieties that match your existing grass and thrive in Central Texas." },
        { title: "Soil Compaction Relief", description: "Austin clay soils compact easily. Our aeration service breaks up compacted soil, allowing roots to grow deeper and access water and nutrients more effectively." },
        { title: "Improved Drainage", description: "Aeration channels allow water to penetrate Austin hard clay soils instead of pooling on the surface, reducing runoff and improving drought resistance." },
        { title: "Thicker Turf", description: "Overseeding after aeration fills in thin and bare spots, creating a dense lawn that naturally resists weeds and looks lush and healthy in Austin TX." },
        { title: "Combined Treatment", description: "Our aeration plus overseeding combo maximizes results. Seed falls into aeration holes for optimal germination, giving your Austin lawn the best chance for thick new growth." },
      ]}
      processSteps={[
        { step: "1", title: "Lawn Evaluation", description: "We assess your Austin TX lawn for compaction severity, grass type, thin areas, and overall health to determine the optimal aeration and overseeding approach." },
        { step: "2", title: "Pre-Aeration Prep", description: "We mow your Austin lawn slightly shorter than normal and mark any underground obstacles like cable lines before aeration." },
        { step: "3", title: "Core Aeration", description: "Our commercial aerator makes multiple passes over your Austin property, removing soil cores on 2-3 inch centers for thorough compaction relief." },
        { step: "4", title: "Overseeding & Care", description: "We spread premium seed matched to your Austin lawn type, then provide detailed watering and care instructions for optimal germination and establishment." },
      ]}
      faqs={[
        { question: "When should I aerate my lawn in Austin TX?", answer: "The best time to aerate Austin lawns depends on grass type. For Bermuda and Zoysia, late spring to early summer (May-June) is ideal. For St. Augustine, late spring (April-May) works best. These periods align with active growth for quick recovery." },
        { question: "How often should I aerate my Austin lawn?", answer: "Most Austin TX lawns benefit from annual aeration. Heavy clay soils common in Austin compact quickly, so yearly aeration keeps your lawn healthy. High-traffic areas may benefit from twice-yearly aeration." },
        { question: "Will aeration mess up my Austin lawn?", answer: "Your lawn will have small soil plugs on the surface after aeration, which is completely normal. These break down within 1-2 weeks and actually benefit your Austin lawn by returning nutrients to the soil." },
        { question: "What grass seed do you use for overseeding in Austin?", answer: "We match seed to your existing grass type. For Austin Bermuda lawns, we use certified Bermuda seed. For St. Augustine, we use appropriate varieties. All seed is selected for Central Texas performance." },
        { question: "How long does it take to see results from overseeding in Austin?", answer: "Austin TX homeowners typically see new grass seedlings within 7-14 days after overseeding. Full establishment and thickening takes 4-8 weeks with proper watering and care." },
        { question: "Can I aerate and overseed in summer in Austin?", answer: "Summer aeration and overseeding can work for warm-season grasses like Bermuda in Austin, but requires careful watering during extreme heat. Spring and early fall are generally safer for optimal results in Central Texas." },
      ]}
      areasServed="Maintain It Bandits LLC provides professional aeration and overseeding services throughout Austin TX, Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Buda, Kyle, Bee Cave, West Lake Hills, Lakeway, and Dripping Springs. Breathing life into Central Texas lawns!"
    />
  );
}
