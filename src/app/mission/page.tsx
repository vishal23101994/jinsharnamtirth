"use client";

import { motion } from "framer-motion";
import DonationSection from "../../components/DonationSection";

/* ---------------- HERO ---------------- */

function MissionHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <motion.img
        src="/images/tirth/57.jpeg"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      {/* Golden glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,120,0.35),transparent_60%)]" />

      <div className="relative text-center text-amber-100 px-6">

        <motion.h1
          initial={{ opacity:0, y:80 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          className="text-5xl md:text-7xl font-serif tracking-wide"
        >
          Our Mission
        </motion.h1>

        <motion.p
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:.4, duration:1 }}
          className="mt-6 text-lg md:text-xl text-amber-200 max-w-xl mx-auto"
        >
          Spreading the light of spirituality, compassion and wisdom
          through devotion, service and self-realization.
        </motion.p>

      </div>

    </section>
  );
}

/* ---------------- INTRO ---------------- */

function MissionIntro() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#FFF8E7] to-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Image */}

        <motion.img
          src="/images/tirth/4.jpeg"
          initial={{ opacity:0, x:-60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
          className="
          rounded-2xl
          shadow-[0_30px_80px_rgba(0,0,0,0.18)]
          border border-amber-200
          "
        />

        {/* Text */}

        <motion.div
          initial={{ opacity:0, x:60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
        >

          <h2 className="text-4xl md:text-5xl font-serif mb-8">
            A Journey Towards Inner Awakening
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The mission of Jinsharnam Tirth Dham is to inspire humanity
            to walk on the path of truth, non-violence and self-discipline.
            Rooted in the timeless teachings of Jain philosophy, the Tirth
            serves as a sacred place where seekers can experience
            inner peace and spiritual awakening.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Through devotion, meditation and service, Jinsharnam Tirth
            encourages individuals to discover their inner strength
            and live a life guided by compassion, wisdom and harmony.
          </p>

        </motion.div>

      </div>

      {/* Elegant Divider */}

      <div className="flex justify-center mt-24">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>

    </section>
  );
}

/* ---------------- MISSION PILLARS ---------------- */

function MissionPillars() {

  const pillars = [
    {
      title: "Spiritual Awakening",
      text: "Encouraging individuals to discover their inner self through meditation, devotion and the timeless teachings of Jain Dharma.",
      img: "/images/tirth/30.jpeg",
    },
    {
      title: "Education & Wisdom",
      text: "Promoting knowledge, culture and spiritual education so that future generations remain connected with values and ethics.",
      img: "/images/tirth/36.jpeg",
    },
    {
      title: "Service to Humanity",
      text: "Serving society with compassion and kindness through humanitarian initiatives inspired by the principle of Ahimsa.",
      img: "/images/tirth/31.jpeg",
    },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-[#FFF8E7]">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-serif text-center mb-20">
          Our Mission Pillars
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {pillars.map((p, i) => (

            <motion.div
              key={i}
              initial={{ opacity:0, y:60 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:.8, delay:i*.2 }}
              whileHover={{ y:-10 }}
              className="
              group
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-[0_30px_80px_rgba(0,0,0,0.15)]
              border border-amber-200
              transition
              "
            >

              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={p.img}
                  className="
                  h-56 w-full object-cover
                  group-hover:scale-110
                  transition duration-700
                  "
                />
              </div>

              {/* Content */}

              <div className="p-8 text-center">

                {/* Icon */}

                <div className="
                w-14 h-14
                mx-auto mb-6
                rounded-full
                bg-gradient-to-br
                from-amber-300
                to-amber-500
                flex items-center justify-center
                text-white
                shadow-lg
                ">
                  ✦
                </div>

                <h3 className="text-2xl font-serif mb-4">
                  {p.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {p.text}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Divider */}

      <div className="flex justify-center mt-28">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>

    </section>
  );
}

/* ---------------- MESSAGE ---------------- */

function MissionMessage() {
  return (
    <section className="relative bg-gradient-to-b from-[#FFF4D6] to-[#FFF8E7] py-36 px-6 border-y border-amber-300 overflow-hidden">

      {/* Subtle background glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,120,0.25),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">

        {/* Image */}

        <motion.div
          initial={{ opacity:0, x:-80 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
          className="group"
        >
          <img
            src="/images/tirth/42.jpeg"
            className="
            rounded-2xl
            shadow-[0_40px_100px_rgba(0,0,0,0.25)]
            border-4 border-amber-300
            group-hover:scale-[1.03]
            transition duration-700
            "
          />
        </motion.div>

        {/* Message */}

        <motion.div
          initial={{ opacity:0, x:80 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
          className="relative"
        >

          {/* Quote Icon */}

          <div className="text-6xl text-amber-400 mb-6 font-serif">
            “
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
            The true mission of a spiritual place is not only to
            build temples of stone but to awaken the temple
            within every human heart.
          </p>

          <p className="text-lg text-gray-700 italic leading-relaxed">
            When the soul discovers compassion and discipline,
            life transforms into a journey of peace and
            enlightenment.
          </p>

          {/* Signature */}

          <div className="mt-10 font-serif text-amber-800 text-lg">
            — Spiritual Teaching
          </div>

        </motion.div>

      </div>

      {/* Elegant Divider */}

      <div className="flex justify-center mt-28">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>

    </section>
  );
}

/* ---------------- MAIN ---------------- */

export default function Mission() {
  return (
    <main className="bg-gradient-to-b from-[#FFF8E7] to-white text-[#4B1E00]">

      <MissionHero />
      <MissionIntro />
      <MissionPillars />
      <MissionMessage />
      <DonationSection />

    </main>
  );
}