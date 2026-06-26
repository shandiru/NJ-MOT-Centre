
import React, { useState } from "react";

import { FaCar, FaTools, FaSnowflake, FaTimes } from "react-icons/fa";

export default function HeroSection() {
  const PHONE = "01754879008";
  const TEL_LINK = "tel:01754879008";
  const BOOKING_URL = "https://www.bookinmycar.co.uk/book_online/?key=17-987w54-soiubs0r780bu0erwgh4S00587309f09f8g09bndorlfs-89048f&g=1&sl=fbKXB";
  const featureCards = [
    {
      icon: <FaCar />,
      title: "MOT Class 4, 5 & 7",
      text: "Certified MOT testing for cars, vans and light commercials.",
      color: "var(--primary)",
    },
    {
      icon: <FaTools />,
      title: "Servicing & Repairs",
      text: "Diagnostics, tuning, wet belts and full vehicle repairs.",
      color: "var(--accent)",
    },
    {
      icon: <FaSnowflake />,
      title: "Engine Tuning",
      text: "Professional engine tuning to maximize power and efficiency.",
      color: "var(--primary)",
    },
    {
      image: "/forte.jpeg",
      imageAlt: "FORTÉ Authorised Service Centre",
      title: "FORTÉ Authorised Service Centre",
      text: "Workshop-grade fuel and engine treatments for cleaner performance and better everyday efficiency.",
      color: "var(--accent)",
    },
  ];

  // State to control Popup
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <section className="relative bg-black overflow-hidden pb-16 pt-24 md:py-36" id="home">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/fall.png"
        onError={(e) => (e.currentTarget.style.display = "none")}
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="mb-3 text-[1.95rem] font-bold leading-[1.02] text-white sm:text-5xl md:mb-6 md:text-6xl" data-aos="fade-up">
            Professional MOT & Vehicle
            <span className="block" style={{ color: "var(--primary)" }}>Servicing in Skegness</span>
          </h1>

          <p className="mb-6 max-w-[20rem] mx-auto text-[15px] leading-6 text-gray-200 sm:max-w-3xl sm:text-lg sm:leading-7 md:mb-10 md:text-xl" data-aos="fade-up" data-aos-delay="200">
            N&J MOT Centre offers MOT Class 4, 5 & 7 testing, vehicle servicing, repairs, air conditioning re-gas, engine tuning and wet belt services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center" data-aos="fade-up" data-aos-delay="400">
            {/* Open Popup Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="h-11 w-full sm:h-12 sm:w-auto px-10 rounded-md text-white font-medium flex items-center justify-center transition hover:brightness-110"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Book Now
            </button>

            <a
              href={TEL_LINK}
              className="h-11 w-full sm:h-12 sm:w-auto px-10 rounded-md text-white font-medium flex items-center justify-center border transition hover:bg-white/10"
              style={{ borderColor: "var(--accent)" }}
            >
              Call Now: {PHONE}
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8 mt-10 md:mt-20 items-stretch">
            {featureCards.map((item, idx) => (
              <div
                key={idx}
                className="flex h-full flex-col rounded-xl bg-gray-800/40 p-5 text-center backdrop-blur-sm sm:p-6"
                data-aos="fade-up"
                data-aos-delay={600 + (idx * 200)}
              >
                {item.image ? (
                  <div className="mx-auto mb-3 flex h-14 items-center justify-center sm:mb-4 sm:h-16">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-14 w-auto rounded-md bg-white/95 p-2 sm:h-16"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full text-xl sm:mb-4 sm:h-16 sm:w-16 sm:text-2xl" style={{ backgroundColor: `${item.color}33`, color: item.color }}>
                    {item.icon}
                  </div>
                )}
                <h3 className="mb-2 flex min-h-[48px] items-center justify-center text-base font-semibold text-white sm:min-h-[56px] sm:text-lg">
                  {item.title}
                </h3>
                <p className="flex flex-1 items-start justify-center text-sm leading-6 text-gray-300">
                  {item.text}
                </p>
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
