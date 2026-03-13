"use client";

import { motion } from "framer-motion";
import DonationSection from "../../components/DonationSection";

/* ---------------- HERO ---------------- */

function WorkHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <motion.img
        src="/images/tirth/work.jpg"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,120,0.35),transparent_60%)]" />

      <div className="relative text-center text-amber-100 px-6">

        <motion.h1
          initial={{ opacity:0, y:80 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          className="text-5xl md:text-7xl font-serif tracking-wide"
        >
          Our Work
        </motion.h1>

        <motion.p
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:0.4, duration:1 }}
          className="mt-6 text-lg md:text-xl text-amber-200 max-w-xl mx-auto"
        >
          Serving humanity through education, compassion,
          spirituality and selfless service.
        </motion.p>

      </div>

    </section>
  );
}

/* ---------------- INTRO ---------------- */

function WorkIntro() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#FFF8E7] to-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Image */}

        <motion.div
          initial={{ opacity:0, x:-80 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
          className="group"
        >
          <img
            src="/images/tirth/12.1.jpeg"
            className="
              h-[580px]
              w-[500px]
              object-cover
              rounded-2xl
              shadow-[0_40px_100px_rgba(0,0,0,0.25)]
              border-4 border-amber-300
              group-hover:scale-[1.03]
              transition duration-700
              "
          />
        </motion.div>


        {/* Text */}

        <motion.div
          initial={{ opacity:0, x:80 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
        >

          <h2 className="text-4xl md:text-5xl font-serif mb-8">
            Service Inspired by Compassion
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Jinsharnam Tirth Dham believes that spirituality must go
            beyond rituals and prayers. True spirituality is expressed
            through compassion, service and dedication towards the
            welfare of society.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Inspired by the teachings of Jain philosophy, the initiatives
            of Jinsharnam Tirth aim to uplift communities, support
            students in their education, care for animals through Gau
            Seva and create a deeper spiritual connection within
            individuals.
          </p>


          {/* Quote highlight */}

          <div className="bg-[#FFF4D6] border-l-4 border-amber-400 p-6 rounded-lg shadow-sm italic text-gray-700">
            “Service to living beings is the highest form of devotion.
            When compassion becomes our action, spirituality becomes
            meaningful.”
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

/* ---------------- WORK CARDS ---------------- */

function WorkServices() {

  const services = [

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
      img: "/images/tirth/43.jpeg",
    },

    {
      title: "Chatravas",
      text: "Accommodation facilities ensure that students from different regions can stay comfortably and pursue their education.",
      img: "/images/tirth/26.jpeg",
    },

    {
      title: "Gau Seva",
      text: "Serving and protecting cows is an important spiritual practice inspired by compassion and reverence for all living beings.",
      img: "/images/tirth/24.jpeg",
    },

    {
      title: "Spiritual Connection",
      text: "Through meditation sessions, spiritual discourses and temple activities, individuals develop a deeper connection with their inner self.",
      img: "/images/tirth/29.jpeg",
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
    }

  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-[#FFF8E7]">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-serif text-center mb-20">
          Our Service Initiatives
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {services.map((s, i) => (

            <motion.div
              key={i}
              initial={{ opacity:0, y:60 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:i*0.15 }}
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

              <div className="overflow-hidden">
                <img
                  src={s.img}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8 text-center">

                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-white shadow-lg">
                  ✦
                </div>

                <h3 className="text-2xl font-serif mb-4">
                  {s.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {s.text}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      <div className="flex justify-center mt-28">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>

    </section>
  );
}

/* ---------------- MAIN ---------------- */

export default function OurWork() {
  return (
    <main className="bg-gradient-to-b from-[#FFF8E7] to-white text-[#4B1E00]">

      <WorkHero />
      <WorkIntro />
      <WorkServices />
      <DonationSection />

    </main>
  );
}