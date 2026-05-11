"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import DonationSection from "../components/DonationSection";

/* ---------------- HERO ---------------- */

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* Background image animation */}

      <motion.img
        src="/images/tirth/13.jpg"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      {/* Golden glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,120,0.35),transparent_60%)]" />

      <div className="relative text-center text-amber-100 px-6">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-serif tracking-wide"
        >
          Jinsharnam Tirth Dham
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-serif mt-6 max-w-xl text-lg md:text-xl text-amber-200 mx-auto"
        >
          A sacred sanctuary of peace and devotion guided by
          <br />
          <strong className="italic">Acharya Shri Pulak Sagar Ji Maharaj</strong>
        </motion.p>

      </div>

    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function AboutSection() {
  return (
    <section className="py-32 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-serif mb-8">
          Jinsharnam Tirth Dham
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Jinsharnam Tirth is a sacred Jain pilgrimage destination dedicated
          to devotion, meditation and spiritual upliftment. It serves as a
          center for peace, wisdom and service under the divine guidance of <br/>
          <span className="italic font-serif">"Acharya Shri Pulak Sagar Ji Gurudev".</span>
        </p>

      </div>

      {/* Divider */}

      <div className="flex justify-center mt-20">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>

    </section>
  );
}

/* ---------------- MESSAGE ---------------- */

function PulakSagarMessage() {
  return (
    <section className="bg-gradient-to-b from-[#FFF4D6] to-[#FFF8E7] py-32 px-6 border-y border-amber-300">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <motion.img
          src="/images/maharaj/img1.jpeg"
          initial={{ opacity:0, x:-60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
          className="rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.2)] border-4 border-amber-300"
        />

        <motion.div
          initial={{ opacity:0, x:60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
        >

          <p className="text-lg text-gray-700 mb-6 italic">
            “True spirituality lies in self-realization. When we learn to
            conquer our inner weaknesses, we begin to experience the divine
            peace that resides within us.”
          </p>

          <p className="text-lg text-gray-700 italic">
            “A temple is not merely a structure of stone. It is a sacred
            place where the soul connects with the infinite and discovers
            the path of compassion, discipline and truth.”
          </p>
          <br/>
          <h2 className="text-2xl md:text-2xl font-serif mb-6 italic">
            "Shri Pulak Sagar Ji Gurudev"
          </h2>

        </motion.div>

      </div>

      {/* Divider */}

      <div className="flex justify-center mt-24">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>

    </section>
  );
}

/* ---------------- GLIMPSES ---------------- */

function GlimpsesSection() {

  const images = [
    "/images/tirth/1.jpeg",
    "/images/tirth/2.jpeg",
    "/images/tirth/3.jpeg",
    "/images/tirth/4.jpeg",
    "/images/tirth/5.jpeg",
    "/images/tirth/6.jpeg",
    "/images/tirth/7.jpeg",
    "/images/tirth/8.jpeg",
    "/images/tirth/9.jpeg",
    "/images/tirth/10.jpeg",
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    );
  };

  return (
    <section className="py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Glimpses of Jinsharnam Tirth
        </h2>

      </div>

      {/* Moving Image Strip */}

      <div className="relative group overflow-hidden">

        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >

          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i % images.length)}
              className="
              cursor-pointer
              rounded-2xl
              overflow-hidden
              border border-amber-300
              shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              hover:scale-105
              transition
              "
            >
              <img
                src={img}
                className="w-[360px] h-[260px] object-cover"
              />
            </div>
          ))}

        </motion.div>

      </div>

      {/* Gallery Modal */}

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">

          {/* Close */}

          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-8 right-10 text-white text-4xl hover:scale-110"
          >
            <X size={40} />
          </button>

          {/* Previous */}

          <button
            onClick={prevImage}
            className="absolute left-10 text-white hover:scale-110"
          >
            <ChevronLeft size={60} />
          </button>

          {/* Image */}

          <img
            src={images[activeIndex]}
            className="max-h-[85vh] max-w-[85vw] rounded-xl shadow-2xl"
          />

          {/* Next */}

          <button
            onClick={nextImage}
            className="absolute right-10 text-white hover:scale-110"
          >
            <ChevronRight size={60} />
          </button>

        </div>
      )}

    </section>
  );
}

/* ---------------- MAIN ---------------- */

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#FFF8E7] to-white text-[#4B1E00]">

      <HeroSection />
      <AboutSection />
      <PulakSagarMessage />
      <GlimpsesSection />
      <DonationSection />

    </main>
  );
}