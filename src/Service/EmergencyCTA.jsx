import React from "react";
import { FaPhone } from "react-icons/fa";

// Updated color palette for N&J MOT Centre
const palette = {
  primary: "#0B5ED7",         // primary blue background
  fgOnPrimary: "#FFFFFF",     // white text on blue
  // Using requested brand red: text-[#B62025] / dark:text-[#FF4B4B]
  secondaryBg: "#B62025",     
  secondaryText: "#FFFFFF",   // white text on red button
  outline: "#FFFFFF",         // white outline for secondary button
};

export default function ViezuBanner() {
  return (
    <section
      className="py-16 bg-white dark:bg-black" // Applied requested background logic
      style={{ backgroundColor: palette.primary, color: palette.fgOnPrimary }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Updated Title */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Official VIEZU Dealer
        </h2>

        {/* Updated Description */}
        <p className="text-xl mb-8 opacity-90">
          Advanced ECU Remapping & Performance Tuning
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Call button */}
          <a href="tel:01754879008" className="inline-block">
            <button
              className="inline-flex items-center justify-center gap-2 h-12 rounded-md px-8 font-bold transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: palette.secondaryBg,
                color: palette.secondaryText,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(182,32,37,0.45)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <FaPhone className="h-5 w-5" />
              Call us today to book your remap
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}