"use client";

import { MapPin, Phone, Mail, Send, Plane, Train, Bus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import DonationSection from "../../components/DonationSection";

export default function Contact() {

  const card =
  "bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-amber-200 hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition-all duration-300";

  const icon =
  "w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-400 text-[#4B1E00] shadow-md";

  const [toast, setToast] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message")
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (result.success) {
      setToast("success");
      form.reset();
    } else {
      setToast("error");
    }

  };

  return (
    <>
      <section className="text-gray-800 bg-gradient-to-b from-amber-50 via-white to-amber-50">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center"
        >

          <div className="font-serif inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm mb-6">
            ✦ Spiritual Connection
          </div>

          <h1 className="text-5xl md:text-6xl font-serif text-[#4B1E00] font-semibold mb-6 tracking-wide">
            Contact Jinsharnam Tirth
          </h1>

          <p className="font-serif text-[#4B1E00]/80 text-lg max-w-2xl mx-auto leading-relaxed">
            We welcome your questions, suggestions and spiritual inquiries.
            Our team will be happy to assist you in your spiritual journey.
          </p>

        </motion.div>

        {/* CONTACT MESSAGE + FORM */}

        <section className="relative py-24 bg-gradient-to-b from-[#FFF9EC] via-white to-[#FFF7E0]">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT MESSAGE */}

        <motion.div
        initial={{ opacity:0, x:-50 }}
        whileInView={{ opacity:1, x:0 }}
        transition={{ duration:0.8 }}
        className="flex flex-col justify-center"
        >

        <h2 className="text-3xl font-serif text-[#4B1E00] mt-25 mb-6 leading-tight">
        We Would Love to Hear From You
        </h2>

        <p className="text-[#4B1E00]/80 font-serif text-lg leading-relaxed mb-6">
        Jinsharnam Tirth is a sacred place dedicated to spiritual growth,
        peace and compassion. Whether you wish to visit the temple,
        participate in spiritual activities or seek guidance,
        our team is always ready to assist you.
        </p>

        <p className="text-[#4B1E00]/80 font-serif text-lg leading-relaxed">
        You can send us your questions, suggestions or spiritual
        inquiries through the message form. We will try our best
        to respond as soon as possible.
        </p>

        <div className="mt-8 w-28 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

        </motion.div>



        {/* MESSAGE FORM */}

        <motion.div
        initial={{ opacity:0, x:50 }}
        whileInView={{ opacity:1, x:0 }}
        transition={{ duration:0.8 }}
        className="
        bg-white/70
        backdrop-blur-xl
        border border-amber-200
        rounded-3xl
        p-10
        shadow-[0_30px_80px_rgba(0,0,0,0.18)]
        "
        >

        <h2 className="text-2xl font-serif text-[#4B1E00] mb-8">
        Send a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

        <input
        name="name"
        type="text"
        placeholder="Your Name"
        className="w-full px-5 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-300 outline-none"
        />

        <input
        name="email"
        type="email"
        placeholder="Your Email"
        className="w-full px-5 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-300 outline-none"
        />

        <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        className="w-full px-5 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-300 outline-none"
        />

        <textarea
        name="message"
        rows={4}
        placeholder="Your Message"
        className="w-full px-5 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-300 outline-none"
        />

        <button
        type="submit"
        className="
        w-full
        flex
        items-center
        justify-center
        gap-2
        bg-gradient-to-r
        from-amber-400
        via-yellow-400
        to-amber-400
        text-[#4B1E00]
        py-3
        rounded-xl
        font-semibold font-serif
        shadow-[0_20px_50px_rgba(0,0,0,0.25)]
        hover:scale-[1.03]
        transition
        "
        >
        <Send size={18}/>
        Send Message
        </button>

        </form>

        </motion.div>

        </div>



        {/* ADDRESS + CONTACT */}

        <div className="max-w-6xl mx-auto px-6 mt-20">

        <motion.div
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        className="
        flex
        flex-col
        items-center
        text-center
        gap-4
        "
        >

        <div className="
        w-14 h-14
        flex items-center justify-center
        rounded-2xl
        bg-gradient-to-br
        from-amber-300
        to-yellow-400
        text-[#4B1E00]
        shadow-lg
        ">
        <MapPin size={22}/>
        </div>

        <p className="text-lg font-serif text-[#4B1E00]/90 font-medium">
        Mumbai-Surat Highway No 48, Mukaam Post Uplat, Tehsil Talasari, District Palghar, Maharashtra – 401606
        </p>

        <div className="font-serif flex items-center gap-3 text-[#4B1E00] font-medium">

        <Phone size={18}/>

        <span>
        +91-7987176553 &nbsp; | &nbsp; +91-8799598079
        </span>

        </div>

        </motion.div>

        </div>

        </section>



        {/* CONNECTIVITY */}

        <div className="bg-gradient-to-b from-[#FFFDF6] to-[#FFF1D6] py-16 border-t border-amber-200">

          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-3xl font-serif text-[#4B1E00] font-semibold mb-14">
              Nearby Tourist Places & Connectivity
            </h2>

            {/* TOURIST PLACES */}

            <div className="grid md:grid-cols-3 gap-8 mb-16">

              {[
                {
                  title: "Religious & Spiritual",
                  icon: "🛕",
                  items: [
                    "Taranga Jain Temple — 120 km",
                    "Palitana Jain Temples — 230 km",
                    "Shri Mahavir Jain Temple, Vapi — 25 km"
                  ]
                },
                {
                  title: "Nature & Scenic",
                  icon: "🌿",
                  items: [
                    "Dahanu Beach — 45 km",
                    "Vansda National Park — 110 km",
                    "Tithal Beach — 70 km",
                    "Silvassa Gardens & Damanganga River — 30 km"
                  ]
                },
                {
                  title: "Nearby Cities & Leisure",
                  icon: "🏙️",
                  items: [
                    "Vapi — 20 km",
                    "Silvassa — 30 km",
                    "Daman — 55 km",
                    "Surat — 140 km"
                  ]
                }
              ].map((item, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="
                  bg-white
                  p-8
                  rounded-3xl
                  shadow-[0_15px_50px_rgba(0,0,0,0.12)]
                  border border-amber-200
                  hover:-translate-y-1
                  hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)]
                  transition
                  "
                >

                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-200 to-yellow-300 text-lg shadow-sm">
                    {item.icon}
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#4B1E00] mb-4">
                    {item.title}
                  </h3>

                  <ul className="font-serif text-[#4B1E00]/90 space-y-2 text-sm leading-relaxed">
                    {item.items.map((place, index) => (
                      <li key={index}> {place}</li>
                    ))}
                  </ul>

                </motion.div>

              ))}

            </div>


            {/* CONNECTIVITY CARDS */}

            <div className="grid md:grid-cols-3 gap-8 text-[#4B1E00]/90">

              {[{
                icon: <Plane size={30} />,
                title: "Nearest Airports",
                items: [
                  "Mumbai Intl. Airport — 140 km",
                  "Surat Airport — 140 km",
                  "Nashik Airport — 165 km"
                ]
              },
              {
                icon: <Train size={30} />,
                title: "Nearest Railway Stations",
                items: [
                  "Vapi — 20 km",
                  "Mumbai Central — 140 km",
                  "Surat — 140 km"
                ]
              },
              {
                icon: <Bus size={30} />,
                title: "Nearest Bus Terminals",
                items: [
                  "Vapi Bus Depot — 38 km",
                  "Dahanu Bus Stand — 45 km",
                  "Palghar ISBT — 55 km"
                ]
              }].map((item, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="
                  bg-white
                  p-8
                  rounded-3xl
                  shadow-[0_15px_50px_rgba(0,0,0,0.12)]
                  border border-amber-200
                  hover:-translate-y-1
                  hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)]
                  transition
                  "
                >

                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-200 to-yellow-300 text-lg shadow-sm">
                    {item.icon}
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#4B1E00] mb-4">
                    {item.title}
                  </h3>

                  <ul className="font-serif text-[#4B1E00]/90 space-y-2 text-sm leading-relaxed">
                    {item.items.map((t, index) => (
                      <li key={index}>{t}</li>
                    ))}
                  </ul>

                </motion.div>

              ))}

            </div>


            {/* MAP */}

            <div className="mt-30 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-amber-300">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.963588501987!2d72.8999775!3d20.1975307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be73281a839e931%3A0x5ff5c55113a0cf30!2sJinsharanam%20Tirth%20Jain%20Digambar%20Temple!5e0!3m2!1sen!2sin!4v1730320320000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
              />

            </div>

          </div>

        </div>
        {toast && (

        <motion.div
        initial={{ opacity:0, y:50 }}
        animate={{ opacity:1, y:0 }}
        exit={{ opacity:0 }}
        className="
        fixed
        bottom-8
        right-8
        z-50
        bg-white
        border border-amber-200
        shadow-[0_15px_50px_rgba(0,0,0,0.2)]
        rounded-xl
        px-6
        py-4
        flex
        items-center
        gap-3
        "
        >

        <div className="
        w-10 h-10
        flex items-center justify-center
        rounded-full
        bg-gradient-to-br
        from-amber-300
        to-yellow-400
        text-[#4B1E00]
        font-bold
        ">
        ✓
        </div>

        <div>

        <p className="font-semibold text-[#4B1E00]">
        {toast === "success"
        ? "Message sent successfully!"
        : "Something went wrong"}
        </p>

        <p className="text-sm text-[#4B1E00]/70">
        {toast === "success"
        ? "We will contact you soon."
        : "Please try again later."}
        </p>

        </div>

        </motion.div>

        )}

      </section>
      <DonationSection />
    </>
  );
}