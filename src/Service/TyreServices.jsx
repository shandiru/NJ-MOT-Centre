


  import React, { useState, useRef } from "react";
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function NandJServices() {
  const services = [
    {
      key: "mot",
      title: "MOT Testing (Class 4, 5 & 7)",
      desc: "Certified MOT testing for cars and LCVs, ensuring safety and compliance.",
      whyTitle: "Why Choose MOT Testing?",
      whyDesc:
        "MOT testing is a legal requirement to ensure your vehicle meets road safety and environmental standards. Professional MOT testing helps identify issues early and keeps your vehicle compliant.",
      benefitsTitle: "Benefits of MOT Testing",
      benefits: [
        "Ensures vehicle roadworthiness",
        "Identifies safety issues early",
        "Meets legal requirements",
        "Improves overall vehicle safety",
        "Peace of mind for drivers",
      ],
      signsTitle: "Signs You Need an MOT Test",
      signs: [
        "MOT expiry date approaching",
        "Warning lights on dashboard",
        "Unusual exhaust emissions",
        "Safety concerns while driving",
        "Vehicle age exceeds MOT limit",
      ],
    },
    {
      key: "service",
      title: "Servicing & Repairs",
      desc: "Full vehicle servicing and repairs including brakes, suspension, and general maintenance.",
      whyTitle: "Why Choose Professional Servicing & Repairs?",
      whyDesc:
        "Routine vehicle servicing and timely repairs are essential for maintaining reliability, safety, and performance. Professional servicing helps extend the life of your vehicle while reducing the risk of costly mechanical failures.",
      benefitsTitle: "Benefits of Regular Servicing & Repairs",
      benefits: [
        "Improves vehicle reliability and safety",
        "Extends the lifespan of key components",
        "Maintains manufacturer service schedules",
        "Improves fuel efficiency and performance",
        "Reduces the risk of major repair costs",
      ],
      signsTitle: "Signs Your Vehicle Needs Servicing or Repairs",
      signs: [
        "Engine warning lights or fault messages",
        "Unusual noises, vibrations, or knocking",
        "Reduced performance or poor fuel economy",
        "Braking or steering feels different",
        "Service interval has been reached",
      ],
    },
    {
      key: "tuning",
      title: "Engine Tuning",
      desc: "Professional engine tuning and performance optimization for better efficiency and power.",
      whyTitle: "Why Invest in Engine Tuning?",
      whyDesc:
        "Engine tuning enhances your vehicle's performance by optimising engine settings for improved power, efficiency, and driveability. Professional engine tuning can unlock your vehicle's full potential while maintaining reliability.",
      benefitsTitle: "Benefits of Engine Tuning",
      benefits: [
        "Increased engine power and torque",
        "Improved fuel efficiency",
        "Smoother throttle response",
        "Enhanced overall driving experience",
        "Tailored performance for your driving style",
      ],
      signsTitle: "Signs You May Need Engine Tuning",
      signs: [
        "Sluggish acceleration or poor performance",
        "Reduced fuel efficiency",
        "Engine feels unresponsive",
        "Recently installed performance upgrades",
        "Looking to improve power or driveability",
      ],
    },
    {
      key: "aircon",
      title: "Air Con Re-Gas",
      desc: "Complete air conditioning servicing and re-gas for optimal cooling performance.",
      whyTitle: "Why Service Your Air Conditioning System?",
      whyDesc:
        "Your vehicle's air conditioning system plays a vital role in comfort and visibility. Regular air con servicing and re-gassing ensure efficient cooling, clean airflow, and reliable performance throughout the year.",
      benefitsTitle: "Benefits of Air Con Re-Gas & Servicing",
      benefits: [
        "Restores cold, efficient airflow",
        "Improves cabin comfort",
        "Prevents system leaks and damage",
        "Removes unpleasant odours",
        "Helps demist windows faster",
      ],
      signsTitle: "Signs Your Air Con Needs Re-Gassing",
      signs: [
        "Air is no longer blowing cold",
        "Weak airflow from vents",
        "Unpleasant smells when air con is on",
        "Windows taking longer to demist",
        "Air con hasn't been serviced recently",
      ],
    },
    {
      key: "wetbelt",
      title: "Wet Belt Services",
      desc: "Inspection and replacement of wet belts to ensure smooth operation of your engine.",
      whyTitle: "Why Are Wet Belt Services Important?",
      whyDesc:
        "Wet belts run inside the engine and rely on clean oil for proper operation. Over time, wet belts can degrade, leading to serious engine damage if not inspected or replaced at the correct interval.",
      benefitsTitle: "Benefits of Wet Belt Inspection & Replacement",
      benefits: [
        "Prevents catastrophic engine failure",
        "Maintains smooth engine operation",
        "Protects critical engine components",
        "Meets manufacturer service requirements",
        "Improves long-term engine reliability",
      ],
      signsTitle: "Signs You May Need a Wet Belt Service",
      signs: [
        "Manufacturer service interval reached",
        "Engine warning lights appearing",
        "Unusual engine noises",
        "Oil contamination or sludge issues",
        "Loss of engine performance",
      ],
    },
    {
    key: "dpf",
    title: "DPF Specialist",
    desc: "Diesel Particulate Filter Cleaning & Diagnostics",
    whyTitle: "Why Choose DPF Specialist Services?",
    whyDesc:
      "The Diesel Particulate Filter (DPF) is designed to capture harmful soot and reduce emissions. Over time, the filter can become blocked, leading to warning lights, reduced performance, and potential engine damage. Professional DPF servicing ensures your vehicle runs efficiently, complies with emissions regulations, and avoids costly repairs.",
    benefitsTitle: "Benefits of DPF Specialist Services",
    benefits: [
      "Restores engine performance",
      "Reduces exhaust emissions",
      "Improves fuel efficiency",
      "Prevents costly DPF replacement",
      "Clears dashboard warning lights",
      "Helps maintain MOT compliance",
    ],
    signsTitle: "Signs You Need DPF Specialist Attention",
    signs: [
      "DPF or engine warning light illuminated",
      "Loss of power or limp mode",
      "Increased fuel consumption",
      "Frequent regeneration cycles",
      "Excessive exhaust smoke",
      "Failed or advisory MOT emissions test",
    ],
  },
  ];


  const [activeService, setActiveService] = useState(services[0]);
  const scrollRef = useRef(null);
  const contentRef = useRef(null);

  // Improved scroll function to move exactly ONE box at a time
  const scroll = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector("div"); // Get the first card
      const cardWidth = card.clientWidth + 16; // Card width + gap (16px / gap-4)
      const currentScroll = scrollRef.current.scrollLeft;
      
      const scrollTo = direction === "left" 
        ? currentScroll - cardWidth 
        : currentScroll + cardWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleServiceClick = (service) => {
    setActiveService(service);
    if (window.innerWidth < 768) {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16" style={{ backgroundColor: "#020617", color: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0B5ED7" }}>
            Professional Services
          </h2>
          <p className="max-w-3xl mx-auto" style={{ color: "#94A3B8" }}>
            Expert vehicle solutions for all makes and models.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative mb-12">
          
          {/* ARROW NAVIGATION (Visible on Mobile Only) */}
          <div className="flex md:hidden justify-end gap-2 mb-4">
            <button
              onClick={() => scroll("left")}
              className="bg-slate-800 hover:bg-[#0B5ED7] text-white p-3 rounded-full transition-colors border border-slate-700"
              aria-label="Previous"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-slate-800 hover:bg-[#0B5ED7] text-white p-3 rounded-full transition-colors border border-slate-700"
              aria-label="Next"
            >
              <FaChevronRight size={18} />
            </button>
          </div>

          {/* Service Boxes Container */}
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar"
          >
            {services.map((s) => (
              <div
                key={s.key}
                onClick={() => handleServiceClick(s)}
                className={`cursor-pointer rounded-2xl border px-6 py-8 text-center transition-all flex-shrink-0 w-[85%] md:w-auto snap-center
                ${activeService.key === s.key ? "ring-2 ring-[#0B5ED7] opacity-100" : "opacity-50"}`}
                style={{
                  borderColor: "#1E293B",
                  backgroundColor: activeService.key === s.key ? "#0B5ED7" : "#0B0E18",
                }}
              >
                <h3 className="font-bold mb-2 text-lg" style={{ color: activeService.key === s.key ? "#FFFFFF" : "#0B5ED7" }}>
                  {s.title}
                </h3>
                <p className="text-sm" style={{ color: activeService.key === s.key ? "#E2E8F0" : "#94A3B8" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Content */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 pt-8 border-t border-slate-800">
          <div>
            <h3 className="text-3xl font-bold mb-3" style={{ color: "#0B5ED7" }}>
              {activeService.whyTitle}
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: "#94A3B8" }}>
              {activeService.whyDesc}
            </p>

            <h4 className="text-xl font-bold mb-4" style={{ color: "#D70C09" }}>
              {activeService.benefitsTitle}
            </h4>

            <div className="grid sm:grid-cols-2 gap-4">
              {activeService.benefits.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <FaCheckCircle className="mt-1 flex-shrink-0" style={{ color: "#0B5ED7" }} />
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border p-8" style={{ backgroundColor: "#0B0E18", borderColor: "#1E293B" }}>
            <h4 className="text-2xl font-bold mb-4" style={{ color: "#D70C09" }}>
              {activeService.signsTitle}
            </h4>
            <ul className="space-y-4" style={{ color: "#94A3B8" }}>
              {activeService.signs.map((sign, i) => (
                <li key={i} className="flex gap-3">
                  <span style={{ color: "#D70C09" }}>•</span>
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}