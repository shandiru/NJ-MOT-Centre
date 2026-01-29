import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // Get variables at the top level
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Logs for your verification
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey);

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log("Email Sent Successfully:", result.text);
          // NEW: Success Toast
          toast.success("Message sent successfully!", {
            style: {
              borderRadius: '10px',
              background: '#0B1220',
              color: '#fff',
              border: '1px solid #0B5ED7',
            },
          });
          e.target.reset();
        },
        (error) => {
          console.error("Email Error:", error.text);
          // NEW: Error Toast
          toast.error("Failed to send message.", {
            style: {
              borderRadius: '10px',
              background: '#0B1220',
              color: '#fff',
              border: '1px solid #D70C09',
            },
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="relative py-32 bg-[#0B1220] text-white overflow-hidden" id="contact">
      {/* Toast Container - required for the notifications to show up */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT — Contact Info */}
        <div className="space-y-10" data-aos="fade-right">
          <div className="bg-[#0B1220] border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-red-500/30 transition">
            <h2 className="text-3xl font-bold text-[#0B5ED7] mb-4">Contact Info</h2>
            <p className="text-[#C0C0C0] font-medium mb-1">Business: N&J MOT Centre</p>
            <p className="text-[#C0C0C0] font-medium mb-1">Contact: Jen</p>
            <p className="text-[#C0C0C0] font-medium mb-1">
              Phone: <a href="tel:01754879008" className="hover:text-[#D70C09]">01754879008</a>
            </p>
            <p className="text-[#C0C0C0] font-medium mb-1">
              Email: <a href="mailto:njmotcentre@yahoo.com" className="hover:text-[#D70C09]">njmotcentre@yahoo.com</a>
            </p>
            <p className="text-[#C0C0C0] font-medium">
              Address: Grantham Dr, Skegness PE25 3RN, UK
            </p>
          </div>

          <div className="bg-[#0B1220] border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/30 transition">
            <h2 className="text-3xl font-bold text-[#D70C09] mb-4">Business Hours</h2>
            <ul className="text-[#C0C0C0] space-y-2 font-medium text-lg">
              <li>Monday – Friday: 8 AM – 5 PM</li>
              <li>Saturday – Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="bg-[#0B1220] border border-white/10 p-10 rounded-2xl shadow-xl space-y-6" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-[#0B5ED7] mb-6">Send Us a Message</h2>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              name="user_name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-[#020617] border border-white/20 px-4 py-3 rounded text-white outline-none focus:border-[#0B5ED7]"
            />
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              required
              className="w-full bg-[#020617] border border-white/20 px-4 py-3 rounded text-white outline-none focus:border-[#0B5ED7]"
            />
            <input
              name="user_phone"
              type="text"
              placeholder="Phone"
              className="w-full bg-[#020617] border border-white/20 px-4 py-3 rounded text-white outline-none focus:border-[#0B5ED7]"
            />
            <input
              name="vehicle_reg"
              type="text"
              placeholder="Vehicle Registration"
              className="w-full bg-[#020617] border border-white/20 px-4 py-3 rounded text-white outline-none focus:border-[#0B5ED7]"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="w-full bg-[#020617] border border-white/20 px-4 py-3 rounded text-white outline-none focus:border-[#0B5ED7]"
            />
            <button 
              type="submit"
              disabled={loading}
              className={`w-full py-3 transition rounded-lg font-semibold text-lg ${
                loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#D70C09] hover:bg-[#0B5ED7]"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}