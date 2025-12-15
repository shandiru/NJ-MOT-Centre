"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ReviewsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-[#020617] to-[#020617]"
      id="testimonials"
    >
      {/* Background Image */}
     <div
  className="absolute inset-0 bg-center bg-no-repeat opacity-100"
  style={{
    backgroundImage: "url('logo-new.png')",
    backgroundSize: "contain", // makes it zoom out instead of cover
  }}
></div>


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h3
            className="text-2xl tracking-[4px] uppercase font-bold"
            style={{ color: "var(--primary)" }}
          >
            Customer Feedback
          </h3>

          {/* Accent Bar */}
          <div
            className="w-20 h-[3px] mx-auto mt-4"
            style={{ backgroundColor: "var(--accent)" }}
          ></div>

          <p className="text-[#94A3B8] mt-5 text-lg max-w-xl mx-auto">
            Here’s what our clients have to say about our service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <ReviewCard
    text={`Had a Stage 1 remap done on my car today at N&J MOT Centre. This guy really knows his stuff when it comes to engine tuning—he talked me through all the options and explained everything clearly. The car feels like a rocket now! I’ll see you in March for my MOT and service. Thanks again, mate.`}
    name="Joe Cavanagh"
    dataAos="fade-up"
    delay={0}
  />

  <ReviewCard
    text={`Sorted the van out for us today after having lots of problems. Got us straight in when we asked. Was always kept informed of everything along the way. And best of all Neil took it and brought it back to me at home.`}
    name="Adam Edge"
    dataAos="fade-down"
    delay={100}
  />

  <ReviewCard
    text={`It’s difficult to find a garage to service a large motorhome but look no further I had mine fully serviced & MOT on the same day amazing service they know what they are doing give them a try they are very helpful 👍👍`}
    name="Eileen Cavanagh"
    dataAos="fade-up"
    delay={200}
  />

  <ReviewCard
    text={`Amazing place and great service! Staff were friendly, super helpful. Definitely recommend!`}
    name="Sarah S"
    dataAos="fade-down"
    delay={300}
  />

  <ReviewCard
    text={`I took my Van to these guys as there was some noises that I didn't know what it was they figured out the problem. Fixed it, fair prices, fab customer services and mechanic.`}
    name="James Bonser"
    dataAos="fade-up"
    delay={400}
  />

  <ReviewCard
    text={`Fantastic Service from start to finish. Detailed breakdown and explanation of what is required and why. Couldn't ask for more. Would highly recommend N&J MOT centre.`}
    name="Jon Curtis"
    dataAos="fade-down"
    delay={500}
  />
</div>

      </div>
    </section>
  );
}

/* Review Card Component Using Your Color Codes */
function ReviewCard({ text, name, dataAos, delay }) {
  return (
    <div
      data-aos={dataAos}
      data-aos-delay={delay}
      className="
        bg-white/5 
        text-[#94A3B8] 
        p-6 
        border border-white/10 
        shadow-md 
        backdrop-blur-sm
        min-h-[200px]
        flex flex-col justify-between
        rounded-md
        transition
        hover:border-[var(--accent)]
      "
    >
      {/* Review Text */}
      <p className="text-base leading-relaxed mb-4 whitespace-pre-line">
        {text}
      </p>

      {/* Reviewer Name */}
      <h4 className="text-white text-sm tracking-wide font-semibold uppercase">
        — {name}
      </h4>
    </div>
  );
}
