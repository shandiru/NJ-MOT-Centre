"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

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
  ];

  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-16 bg-[var(--aircon-section-bg)]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Services
          </h2>
          <p className="max-w-3xl mx-auto text-[var(--aircon-muted)]">
            Expert vehicle servicing, repairs, diagnostics, and maintenance solutions for all makes and models.
          </p>
        </div>

        {/* Service Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {services.map((s) => (
            <div
              key={s.key}
              onClick={() => setActiveService(s)}
              className={`cursor-pointer rounded-2xl border px-6 py-8 text-center transition
                ${
                  activeService.key === s.key
                    ? "ring-2 ring-[var(--aircon-primary)]"
                    : ""
                }`}
            >
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--aircon-muted)]">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* WHY + BENEFITS */}
          <div>
            <h3 className="text-3xl font-bold mb-3">
              {activeService.whyTitle}
            </h3>
            <p className="mb-6 text-[var(--aircon-muted)]">
              {activeService.whyDesc}
            </p>

            <h4 className="text-xl font-bold mb-4">
              {activeService.benefitsTitle}
            </h4>

            <div className="grid sm:grid-cols-2 gap-4">
              {activeService.benefits.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <FaCheckCircle className="mt-1 text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SIGNS */}
          <div className="rounded-xl border p-8">
            <h4 className="text-2xl font-bold mb-4">
              {activeService.signsTitle}
            </h4>
            <ul className="space-y-3 text-[var(--aircon-muted)]">
              {activeService.signs.map((sign, i) => (
                <li key={i}>• {sign}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
