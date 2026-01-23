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
    backgroundImage: "url('logo.png')",
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
    text={`I visited this garage today (5/01/26) For a service the garage was fantastic the people were friendly helpful and knowledgeable, I will be using this place from now on 100% recommend`}
    name="Stuart Mosley"
    dataAos="fade-up"
    delay={0}
  />

  <ReviewCard
    text={`Service and MOT today fantastic service. Picked up car early and dropped off when done. Quality service and great prices `}
    name="Helen Fisher-Mack"
    dataAos="fade-down"
    delay={100}
  />

  <ReviewCard
    text={`I had a fantastic experience at this garage. The team was friendly, professional, and knowledgeable. The guy diagnosed the issue quickly, explained everything in simple terms, and completed the repair sooner than expected. Pricing was fair, and the quality of the work is spot on.`}
    name="Katie Twyford"
    dataAos="fade-up"
    delay={200}
  />

  <ReviewCard
    text={`Chose here for great reviews, wasn't disappointed, mot failed, next day sorted, very polite and courteous, feel you knew them for years.`}
    name="Tony Minelli"
    dataAos="fade-down"
    delay={300}
  />

  <ReviewCard
    text={`Amazing place and great service! Staff were friendly, super helpful. Definitely recommend!`}
    name="Sarah S"
    dataAos="fade-up"
    delay={400}
  />

  <ReviewCard
    text={`Fantastic garage took my car for mot they called and discussed any issues and got my car fixed so it would pass best garage in skeg wouldn't go anywhere else from now on!`}
    name="Melanie Hartopp"
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
