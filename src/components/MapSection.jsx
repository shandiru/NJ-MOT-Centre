export default function MapSection() {
  return (
    <section className="relative py-20 bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl h-96">
          <iframe
            title="location-map"
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2165.5567848153923!2d0.33061189999999996!3d53.14576890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d7c71ee265360b%3A0x9c93d005c64c0cd2!2sN%26J%20Mot%20Centre!5e1!3m2!1sen!2slk!4v1769705238916!5m2!1sen!2slk"
          ></iframe>
        </div>
      </div>
    </section>
  );
}