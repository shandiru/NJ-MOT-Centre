import React from "react";
import { heroFeatureCards } from "./heroFeatureCards.jsx";

export default function HeroMobileFeatures() {
  return (
    <section className="bg-black px-4 pb-12 md:hidden">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4">
        {heroFeatureCards.map((item, idx) => (
          <div
            key={idx}
            className="flex h-full flex-col rounded-xl bg-gray-800/40 p-5 text-center backdrop-blur-sm"
          >
            {item.image ? (
              <div className="mx-auto mb-3 flex h-14 items-center justify-center">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-14 w-auto rounded-md bg-white/95 p-2"
                  loading="lazy"
                />
              </div>
            ) : (
              <div
                className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full text-xl"
                style={{ backgroundColor: `${item.color}33`, color: item.color }}
              >
                {item.icon}
              </div>
            )}
            <h3 className="mb-2 flex min-h-[48px] items-center justify-center text-base font-semibold text-white">
              {item.title}
            </h3>
            <p className="flex flex-1 items-start justify-center text-sm leading-6 text-gray-300">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
