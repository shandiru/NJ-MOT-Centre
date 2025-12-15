"use client";

export default function MapSection() {
  return (
    <section className="relative py-20 bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-6 rounded-2xl overflow-hidden border border-white/10 shadow-xl h-96">
        <iframe
          title="location-map"
          className="w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.8132316661526!2d0.345139!3d53.153348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b482a5b234567%3A0x1234567890abcdef!2sGrantham%20Dr%2C%20Skegness%2C%20PE25%203RN!5e0!3m2!1sen!2suk!4v1690000000000"
        ></iframe>
      </div>
    </section>
  );
}
