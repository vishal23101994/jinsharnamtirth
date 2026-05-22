"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import DonationSection from "../../components/DonationSection";

/* ---------------- HERO ---------------- */

function MissionHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">

      <motion.img
        src="/images/chatravaas.jpg"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        className="pt-32 absolute inset-0 w-full h-full object-cover"
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
          Jinsharnam Chatravaas
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

function ChatravasGallery() {

  const hostelGallery = [
    "/tirth/1.1.jpeg",
    "/tirth/1.2.jpeg",
    "/tirth/1.3.jpeg",
    "/tirth/1.4.jpeg",
    "/tirth/1.5.jpeg",
    "/tirth/1.6.jpeg",
  ];

  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openImage = (img: string, index: number) => {
    setActiveImage(img);
    setActiveIndex(index);
  };

  const prevImage = () => {
    const index =
      activeIndex === 0
        ? hostelGallery.length - 1
        : activeIndex - 1;

    setActiveIndex(index);
    setActiveImage(hostelGallery[index]);
  };

  const nextImage = () => {
    const index =
      activeIndex === hostelGallery.length - 1
        ? 0
        : activeIndex + 1;

    setActiveIndex(index);
    setActiveImage(hostelGallery[index]);
  };

  return (
    <section className="bg-gradient-to-b from-[#FFF8E7] to-[#FFECC7] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl text-center font-serif text-[#4B1E00] mb-14">
          Jinsharnam Chatravas
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

          {hostelGallery.map((img, i) => (

            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="cursor-pointer"
              onClick={() => openImage(img, i)}
            >

              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="
                  h-[360px]
                  w-full
                  object-cover
                  rounded-2xl
                  border
                  border-amber-300
                  shadow-[0_15px_40px_rgba(251,191,36,0.25)]
                  hover:shadow-[0_25px_60px_rgba(251,191,36,0.45)]
                  transition
                "
              />

            </motion.div>

          ))}

        </div>

      </div>

      {/* MODAL */}

      {activeImage && (

        <div className="fixed inset-0 z-[9999] bg-black/95">

          <button
            onClick={() => setActiveImage(null)}
            className="
              absolute
              top-6
              right-6
              text-white
              text-5xl
              z-50
            "
          >
            ×
          </button>

          <button
            onClick={prevImage}
            className="
              absolute
              left-4
              md:left-10
              top-1/2
              -translate-y-1/2
              text-white
              text-6xl
            "
          >
            ‹
          </button>

          <div className="h-full flex items-center justify-center px-6">

            <img
              src={activeImage}
              alt="Preview"
              className="
                max-h-[90vh]
                max-w-[92vw]
                object-contain
              "
            />

          </div>

          <button
            onClick={nextImage}
            className="
              absolute
              right-4
              md:right-10
              top-1/2
              -translate-y-1/2
              text-white
              text-6xl
            "
          >
            ›
          </button>

          <a
            href={activeImage}
            download
            className="
              absolute
              bottom-8
              left-1/2
              -translate-x-1/2
              px-8
              py-3
              rounded-full
              bg-amber-400
              text-[#4B1E00]
              font-semibold
            "
          >
            Download
          </a>

        </div>

      )}

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
      title: "Student Education",
      text: "We support students by helping them pursue quality education and develop strong values that guide them throughout life.",
      img: "/images/tirth/34.jpeg",
    },

    {
      title: "Food for Students",
      text: "Nutritious meals are provided to students so they can focus on their studies without worrying about basic necessities.",
      img: "/images/tirth/31.jpeg",
    },

    {
      title: "Bus Service",
      text: "Transportation facilities help students reach educational institutions safely and conveniently.",
      img: "/images/tirth/43.1.jpeg",
    },

    {
      title: "Chatravas",
      text: "Accommodation facilities ensure that students from different regions can stay comfortably and pursue their education.",
      img: "/images/tirth/26.jpeg",
    },

    {
      title: "Motivation & Guidance",
      text: "Students and devotees receive guidance and inspiration that encourages them to follow the path of discipline, positivity and purpose.",
      img: "/images/tirth/44.jpeg",
    },

    {
      title: "Cultural Programs",
      text: "Spiritual and cultural programs strengthen traditional values and inspire communities to remain connected with their heritage.",
      img: "/images/tirth/37.jpeg",
    },

    {
      title: "Community Welfare",
      text: "Various social initiatives support the well-being of the community through compassion, charity and collective service.",
      img: "/images/tirth/38.jpeg",
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
      <ChatravasGallery />
      <MissionPillars />
      <MissionMessage />
      <DonationSection />

    </main>
  );
}