

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCarSide, FaTools, FaSnowflake } from "react-icons/fa";

export default function ServicesDark() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const services = [
    {
      title: "MOT Testing (Class 4, 5 & 7)",
      desc: "Certified MOT testing for cars and LCVs, ensuring safety and compliance.",
      icon: <FaCarSide />,
      color: "bg-[#0B5ED7]/20",   // BLUE bg
      iconColor: "#0B5ED7",       // BLUE icon
    },
    {
      title: "Servicing & Repairs",
      desc: "Full vehicle servicing and repairs including brakes, suspension, and maintenance.",
      icon: <FaTools />,
      color: "bg-[#D70C09]/20",   // RED bg
      iconColor: "#D70C09",       // RED icon
    },
    {
      title: "Engine Tuning",
      desc: "Professional engine tuning and performance optimization to enhance efficiency and power.",
      icon: <FaCarSide />,
      color: "bg-[#0B5ED7]/20",   // BLUE bg
      iconColor: "#0B5ED7",       // BLUE icon
    },
    {
      title: "Air Con Re-Gas",
      desc: "Complete air conditioning servicing and re-gas for optimal cooling performance.",
      icon: <FaSnowflake />,
      color: "bg-[#D70C09]/20",   // RED bg
      iconColor: "#D70C09",       // RED icon
    },
    {
      title: "Wet Belt Services",
      desc: "Inspection and replacement of wet belts to ensure smooth engine operation.",
      icon: <FaTools />,
      color: "bg-[#0B5ED7]/20",   // BLUE bg
      iconColor: "#0B5ED7",       // BLUE icon
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-[#020617] to-[#020617]" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white mb-3">
            Our <span className="text-[#D70C09]">Services</span>
          </h2>
          <div className="w-24 h-[3px] mx-auto bg-[#0B5ED7]" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Delivering top-quality MOT testing, servicing, engine tuning, air con re-gas,
            and wet belt services with honesty and trust.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-xl p-6 border border-slate-800 hover:border-slate-700 bg-[#0B0E18] transition-all hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div
                className={`h-14 w-14 flex items-center justify-center rounded-lg text-2xl mb-4 ${service.color}`}
                style={{ color: service.iconColor }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

       {/* Feature Banner */}
<div
  className="mt-20 relative rounded-lg overflow-hidden border border-slate-800 p-12 text-center"
  data-aos="fade-up"
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#0B5ED7]/20 via-transparent to-[#D70C09]/20" />

  {/* Content */}
  <div className="relative z-10">
    {/* Heading */}
    <h3 className="text-3xl font-bold text-white mb-4">
      Trusted MOT & Vehicle Specialists
    </h3>

    {/* Description */}
    <p className="text-slate-300 max-w-2xl mx-auto mb-8">
      Modern diagnostic tools and experienced technicians ensure reliable MOT
      testing, repairs, and servicing with honest advice and fast turnaround times.
    </p>

    {/* Features List */}
    <ul className="space-y-2 text-sm text-slate-300 flex flex-col items-center">
      {/* Replace text with image */}
      <li className="mb-2">
        <img src="/dvs.png" alt="DVSA Approved" className="w-24 h-auto mx-auto" />
      </li>
      <li>✔ Modern Diagnostic Equipment</li>
      <li>✔ Transparent Pricing</li>
      <li>✔ Customer-First Service</li>
    </ul>
  </div>
</div>

      </div>
    </section>
  );
}
