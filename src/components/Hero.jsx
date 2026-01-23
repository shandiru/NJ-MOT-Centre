"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCar, FaTools, FaSnowflake, FaTimes } from "react-icons/fa";

export default function HeroSection() {
  const PHONE = "01754879008";
  const TEL_LINK = "tel:01754879008";
  const BOOKING_URL = "https://www.bookinmycar.co.uk/book_online/?key=17-987w54-soiubs0r780bu0erwgh4S00587309f09f8g09bndorlfs-89048f&g=1&sl=fbKXB";

  // State to control Popup
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <section className="relative bg-black overflow-hidden py-28 md:py-36" id="home">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" data-aos="fade-up">
            Professional MOT & Vehicle
            <span className="block" style={{ color: "var(--primary)" }}>Servicing in Skegness</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200" data-aos="fade-up" data-aos-delay="200">
            N&J MOT Centre offers MOT Class 4, 5 & 7 testing, vehicle servicing, repairs, air conditioning re-gas, engine tuning and wet belt services.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center" data-aos="fade-up" data-aos-delay="400">
            {/* Open Popup Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="h-12 px-10 rounded-md text-white font-medium flex items-center justify-center transition hover:brightness-110"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Book Now
            </button>

            <a
              href={TEL_LINK}
              className="h-12 px-10 rounded-md text-white font-medium flex items-center justify-center border transition hover:bg-white/10"
              style={{ borderColor: "var(--accent)" }}
            >
              Call Now: {PHONE}
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[ 
              { icon: <FaCar />, title: "MOT Class 4, 5 & 7", text: "Certified MOT testing for cars, vans and light commercials.", color: "var(--primary)" },
              { icon: <FaTools />, title: "Servicing & Repairs", text: "Diagnostics, tuning, wet belts and full vehicle repairs.", color: "var(--accent)" },
              { icon: <FaSnowflake />, title: "Engine Tuning", text: "Professional engine tuning to maximize power and efficiency.", color: "var(--primary)" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-gray-800/40 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={600 + (idx * 200)}>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: `${item.color}33`, color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- POPUP OVERLAY --- */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-[1000] bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
            >
              <FaTimes size={20} />
            </button>

            {/* Booking Iframe */}
            <iframe
              src={BOOKING_URL}
              className="w-full h-full border-none"
              title="Booking System"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
