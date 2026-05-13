"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Sunrise,
  UtensilsCrossed,
  MoonStar,
  Phone,
  Mail,
  ShieldCheck,
  Clock3,
  Building2,
} from "lucide-react";

export default function BookingPage() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const openGallery = (images: string[], index: number) => {
    setGalleryImages(images);
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const nextImage = () => {
  const next = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(next);
    setSelectedImage(galleryImages[next]);
  };

  const prevImage = () => {
    const prev =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prev);
    setSelectedImage(galleryImages[prev]);
  };

  const bookingOptions = [

    {
      title: "Delux Room",
      images: [
        "images/booking/delux/1.JPG",
        "images/booking/delux/2.JPG",
        "images/booking/delux/3.JPG",
      ],
      description:
        "Comfortable deluxe rooms ideal for families and long spiritual stays.",
      category: "Stay",
    },

    {
      title: "Super Delux Room",
      images: [
        "images/booking/superdelux/1.jpeg",
        "images/booking/superdelux/2.jpeg",
        "images/booking/superdelux/3.jpeg",
        "images/booking/superdelux/4.jpeg",
      ],
      description:
        "Luxury accommodation with spacious interiors and premium facilities.",
      category: "Luxury Stay",
    },

    {
      title: "VIP Room",
      images: [
        "images/booking/vip/1.jpeg",
        "images/booking/vip/2.jpeg",
        "images/booking/vip/3.JPG",
      ],
      gallery: [
        "images/booking/vip/gallery1.jpeg",
        "images/booking/vip/gallery2.JPG",
      ],
      description:
        "Premium spiritual stay experience with peaceful ambience and modern comfort.",
      category: "Premium Stay",
    },

    {
      title: "Doormetry",
      images: [
        "images/booking/doormetry/1.jpeg",
        "images/booking/doormetry/2.jpeg",
      ],
      description:
        "Affordable dormitory accommodation for pilgrims and group visitors.",
      category: "Stay",
    },

    {
      title: "Party Lawn",
      images: [
        "images/booking/lawn/1.jpeg",
        "images/booking/lawn/2.jpeg",
      ],
      description:
        "Beautiful open lawn space for gatherings, events, and celebrations.",
      category: "Event Space",
    },

    {
      title: "Party Hall",
      images: [
        "images/booking/partyhall/1.jpeg",
        "images/booking/partyhall/2.JPG",
        "images/booking/partyhall/3.JPG",
      ],
      description:
        "Spacious indoor hall for religious functions, bhajan, weddings, and family events.",
      category: "Event Hall",
    },

    {
      title: "Bhojanshala",
      images: [
        "images/booking/bhojanshala/1.JPG",
        "images/booking/bhojanshala/2.JPG",
        "images/booking/bhojanshala/3.JPG",
        "images/booking/bhojanshala/4.JPG",
        "images/booking/bhojanshala/5.JPG",
        "images/booking/bhojanshala/6.JPG",
        "images/booking/bhojanshala/7.JPEG",
        "images/booking/bhojanshala/8.JPG",
      ],
      description:
        "Large bhojanshala for devotees and group meal arrangements during yatras and events.",
      category: "Dining Hall",
    },   

    {
      title: "Ahaarkaksh",
      images: ["images/booking/ahaarkaksh/1.JPG"],
      description:
        "Peaceful dining space serving pure satvik Jain meals in a spiritual environment.",
      category: "Dining",
    },
  ];

  const mealTimings = [
    {
      meal: "Breakfast",
      timing: "7:00 AM – 9:00 AM",
      details: "Fresh vegetarian breakfast served daily.",
    },
    {
      meal: "Lunch",
      timing: "11:00 PM – 1:00 PM",
      details: "Pure satvik Jain lunch available for devotees.",
    },
    {
      meal: "Dinner",
      timing: "5:00 PM – 7:00 PM",
      details: "Healthy and hygienic Jain dinner service.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FFF8ED] to-[#FFF3E4] min-h-screen text-[#3B1D00] overflow-hidden pt-10">

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE WITH CINEMATIC ZOOM */}

        <motion.img
          src="/images/tirth/4.jpeg"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/65" />

        {/* GOLDEN LIGHT EFFECT */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(255,190,100,0.28),transparent_65%)]
          "
        />

        {/* TOP BLUR */}

        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-10"></div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-20 text-center px-4 sm:px-6 max-w-6xl pt-28"
        >

          {/* LABEL */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="
              inline-flex items-center gap-3
              bg-white/10
              backdrop-blur-md
              border border-white/20
              rounded-full
              px-7 py-3
              text-amber-100
              mb-10
            "
          >

            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>

            <span className="uppercase tracking-[4px] text-sm">
              Accommodation • Dining • Events
            </span>

          </motion.div>

          {/* HEADING */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="
              text-4xl sm:text-5xl md:text-7xl lg:text-8xl
              font-serif
              text-amber-100
              leading-[1.05]
              drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]
              mb-10
            "
          >

            Divine Stay &
            <br />

            <span className="text-yellow-300">
              Spiritual Hospitality
            </span>

          </motion.h1>

          {/* SUBTEXT */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="
              text-base sm:text-lg md:text-2xl
              text-amber-100/90
              leading-8 sm:leading-9 md:leading-7 sm:leading-8 md:leading-10
              max-w-4xl
              mx-auto
              font-light
              drop-shadow
            "
          >

            Experience peaceful accommodation, bhojanshala,
            luxury rooms, lawns, party halls, and spiritual
            hospitality thoughtfully designed for devotees,
            yatris, and families visiting
            <span className="text-yellow-300 font-medium">
              {" "}Jinsharnam Tirth Dham
            </span>

          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="
              flex flex-col sm:flex-row
              items-center justify-center
              gap-4 sm:gap-6
              mt-10 sm:mt-14                            
            "
          >

            <a
              href="#facility-details"
              className="
                bg-amber-600 hover:bg-amber-700
                text-white
                px-7 sm:px-10 py-4 sm:py-5
                rounded-full
                text-lg
                font-medium
                transition duration-300
                shadow-2xl
              "
            >

              Explore Facilities

            </a>

            <a
              href="#contact-section"
              className="
                border border-white/30
                bg-white/10
                backdrop-blur-md
                hover:bg-white
                hover:text-black
                text-white
                px-10 py-5
                rounded-full
                text-lg
                font-medium
                transition duration-300
              "
            >

              Contact Management

            </a>

          </motion.div>

        </motion.div>

      </section>

      {/* INTRO SECTION */}

      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-4 sm:px-6">

        <div className="max-w-6xl mx-auto text-center">

          <span className="text-amber-700 tracking-[4px] uppercase text-sm">
            Welcome To Jinsharnamtirth
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#4B1E00] leading-tight mt-6 mb-10">

            A Perfect Blend of
            <span className="block text-amber-700">
              Spirituality & Comfort
            </span>

          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-8 sm:leading-9 md:leading-7 sm:leading-8 md:leading-10 max-w-4xl mx-auto">

            From peaceful accommodation and bhojanshala facilities to premium
            spiritual stay experiences and event spaces, Jinsharnamtirth provides
            every facility required for devotees, pilgrims, families, and spiritual
            gatherings in a serene Jain environment.

          </p>

        </div>

      </section>   

      {/* Booking Options */}
      <section
        id="facility-details"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-24 scroll-mt-32"
      >

        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-[#4B1E00] mb-4">
            Accommodation & Facilities
          </h2>

          <div className="w-28 h-[2px] bg-amber-700 mx-auto"></div>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            Experience peaceful accommodation, spiritual dining, and premium event
            spaces at Jinsharnamtirth.
          </p>
        </div>

        <div className="space-y-24">

          {bookingOptions.map((item, i) => (

            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center bg-white/90 backdrop-blur-xl rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-white hover:scale-[1.01] transition duration-500"
            >

              {/* LEFT IMAGE SECTION */}

              <div className="relative h-full">

                <img
                  src={item.images[0]}
                  alt={item.title}
                  onClick={() => openGallery(item.images, 0)}
                  className="
                    w-full h-[260px] sm:h-[400px] md:h-[550px] object-cover
                    hover:scale-105 transition duration-700
                    cursor-pointer
                  "
                />

                {/* SMALL GALLERY */}

                {item.images.length > 1 && (

                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 gap-2 sm:gap-3">

                    {item.images.slice(1, 5).map((img, idx) => (

                      <img
                        key={idx}
                        src={img}
                        alt=""
                        onClick={() => openGallery(item.images, idx + 1)}
                        className="
                          h-14 sm:h-20 w-full object-cover rounded-xl
                          border-2 border-white
                          hover:scale-105 hover:border-amber-400
                          transition duration-300
                          cursor-pointer
                        "
                      />

                    ))}

                  </div>

                )}

              </div>

              {/* RIGHT CONTENT */}

              <div className="p-5 sm:p-8 lg:p-14">

                <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                  {item.category}
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#3B1D00] mt-6 mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base md:text-lg mb-8">
                  {item.description}
                </p>

                {/* EXTRA VIP GALLERY */}

                {item.gallery && (

                  <div className="grid grid-cols-2 gap-4 mb-8">

                    {item.gallery.map((g, idx) => (

                      <img
                        key={idx}
                        src={g}
                        alt=""
                        className="rounded-2xl h-40 w-full object-cover"
                      />

                    ))}

                  </div>

                )}

                {/* FEATURES */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10 text-gray-700">

                  <div className="bg-[#FFF8ED] p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                    ✔ Peaceful Environment
                  </div>

                  <div className="bg-[#FFF8ED] p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                    ✔ Jain Food Available
                  </div>

                  <div className="bg-[#FFF8ED] p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                    ✔ Family Friendly
                  </div>

                  <div className="bg-[#FFF8ED] p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                    ✔ Advance Booking
                  </div>

                </div>

                <a
                  href="#facility-details"
                  className="inline-flex items-center gap-3 bg-[#4B1E00] hover:bg-black transition text-white px-8 py-4 rounded-2xl font-semibold w-fit"
                >

                  View Details

                  <span className="text-xl">↓</span>

                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Meal Timings */}

      <section className="relative py-32 px-4 sm:px-6 overflow-hidden">

        {/* BACKGROUND EFFECT */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8ED] via-[#FFFDF9] to-[#FFF6EA]"></div>

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-200/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-200/20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto">

          {/* HEADER */}

          <div className="text-center mb-20">

            <span className="uppercase tracking-[5px] text-amber-700 text-sm">
              Satvik Dining Experience
            </span>

            <h2 className="text-4xl md:text-5xl font-serif text-[#4B1E00] mt-6 mb-8">
              Meal Timings
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 text-xl leading-9">
              Pure Jain satvik meals prepared with devotion and served
              in a peaceful spiritual environment for devotees and yatris.
            </p>

          </div>

          {/* TIMING CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

            {mealTimings.map((meal, i) => (

              <div
                key={i}
                className="
                  group relative overflow-hidden
                  bg-[#FFFDF9]
                  rounded-[32px]
                  border border-white
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  hover:-translate-y-2
                  transition duration-500
                "
              >

                {/* TOP GOLD BAR */}

                <div className="h-2 bg-gradient-to-r from-amber-500 to-yellow-300"></div>

                {/* CONTENT */}

                <div className="p-6 sm:p-8 md:p-10 text-center">

                  {/* ICON */}

                  <div
                    className="
                      w-20 h-20 mx-auto mb-8
                      rounded-2xl
                      bg-[#FAF6F0]
                      border border-[#E9DED1]
                      flex items-center justify-center
                      shadow-sm
                      group-hover:-translate-y-1
                      transition duration-500
                    "
                  >

                    {meal.meal === "Breakfast" && (
                      <Sunrise className="w-9 h-9 text-amber-700" strokeWidth={1.5} />
                    )}

                    {meal.meal === "Lunch" && (
                      <UtensilsCrossed
                        className="w-9 h-9 text-amber-700"
                        strokeWidth={1.5}
                      />
                    )}

                    {meal.meal === "Dinner" && (
                      <MoonStar className="w-9 h-9 text-amber-700" strokeWidth={1.5} />
                    )}

                  </div>

                  {/* TITLE */}

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#4B1E00] mb-4">
                    {meal.meal}
                  </h3>

                  {/* TIME */}

                  <div className="
                    inline-block
                    bg-amber-100
                    text-amber-800
                    px-4 sm:px-6 py-3
                    rounded-full
                    text-lg font-medium
                    mb-8
                  ">

                    {meal.timing}

                  </div>

                  {/* DESCRIPTION */}

                  <p className="text-gray-600 leading-8 text-lg">
                    {meal.details}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Contact Section */}

      <section
        id="contact-section"
        className="relative py-32 px-4 sm:px-6 overflow-hidden"
      >

        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#2B1200]"></div>

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-500/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto">

          {/* HEADER */}

          <div className="text-center mb-20">

            <span className="uppercase tracking-[5px] text-amber-300 text-sm">
              Assistance & Information
            </span>

            <h2 className="text-4xl md:text-5xl font-serif text-white mt-6 mb-8">
              Booking & Management
            </h2>

            <p className="max-w-3xl mx-auto text-gray-300 text-xl leading-9">
              For accommodation, bhojanshala, lawn, party hall,
              and spiritual stay related information, please contact
              our management team.
            </p>

          </div>

          {/* MAIN GRID */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">

            {/* CONTACT CARD */}

            <div className="
              bg-white/10 backdrop-blur-xl
              border border-white/10
              rounded-[24px] md:rounded-[40px]
              p-5 sm:p-8 md:p-14
              shadow-2xl
            ">

              {/* PROFILE */}

              <div className="flex items-center gap-6 mb-12">

                <div className="
                  w-24 h-24 rounded-full
                  bg-gradient-to-br from-amber-500 to-yellow-300
                  flex items-center justify-center
                  text-4xl
                  shadow-xl
                ">

                  <Building2 className="w-10 h-10 text-white" strokeWidth={1.5} />

                </div>

                <div>

                  <h3 className="text-2xl font-serif text-white mb-2">
                    Shree Pushkal Jain
                  </h3>

                  <p className="text-amber-300 text-lg">
                    Manager
                  </p>

                </div>

              </div>

              {/* DETAILS */}

              <div className="space-y-6">

                <div
                  className="
                    flex items-start gap-5
                    bg-white/5
                    border border-white/10
                    rounded-2xl
                    px-4 sm:px-6 py-5
                    backdrop-blur-sm
                  "
                >

                  <Phone
                    className="w-5 h-5 text-amber-300 mt-1"
                    strokeWidth={1.7}
                  />

                  <div>

                    <p className="text-gray-400 text-sm mb-1">
                      Primary Contact
                    </p>

                    <p className="text-white text-lg tracking-wide">
                      +91 7987176553
                    </p>

                  </div>

                </div>

                <div
                  className="
                    flex items-start gap-5
                    bg-white/5
                    border border-white/10
                    rounded-2xl
                    px-4 sm:px-6 py-5
                    backdrop-blur-sm
                  "
                >

                  <Phone
                    className="w-5 h-5 text-amber-300 mt-1"
                    strokeWidth={1.7}
                  />

                  <div>

                    <p className="text-gray-400 text-sm mb-1">
                      Alternate Contact
                    </p>

                    <p className="text-white text-lg tracking-wide">
                      +91 8799598079
                    </p>

                  </div>

                </div>

                <div className="
                  bg-white/5 rounded-2xl
                  px-4 sm:px-6 py-5
                  border border-white/10
                ">

                  <p className="text-gray-400 text-sm mb-2">
                    Email Address
                  </p>

                  <p className="text-white text-xl break-all">
                    pushkaljain1@gmail.com
                  </p>

                </div>

              </div>

            </div>

            {/* INFO CARD */}

            <div className="
              bg-gradient-to-br
              from-[#8A5A2B] to-[#B07A45]
              rounded-[40px]
              p-10 md:p-14
              shadow-2xl
              text-white
            ">

              <h3 className="text-4xl font-serif mb-10">
                Important Information
              </h3>

              <div className="space-y-8">

                <div className="flex gap-5">

                  <div className="text-3xl"><ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.5} /></div>

                  <div>

                    <h4 className="text-2xl font-medium mb-2">
                      Advance Reservation
                    </h4>

                    <p className="text-white/90 leading-8 text-lg">
                      Booking confirmation is recommended during
                      festivals and special religious events.
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="text-3xl"><UtensilsCrossed className="w-8 h-8 text-white" strokeWidth={1.5} /></div>

                  <div>

                    <h4 className="text-2xl font-medium mb-2">
                      Pure Jain Satvik Food
                    </h4>

                    <p className="text-white/90 leading-8 text-lg">
                      Hygienic and spiritual food prepared according
                      to Jain traditions and values.
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="text-3xl"><Building2 className="w-8 h-8 text-white" strokeWidth={1.5} /></div>

                  <div>

                    <h4 className="text-2xl font-medium mb-2">
                      Spiritual Discipline
                    </h4>

                    <p className="text-white/90 leading-8 text-lg">
                      Visitors are requested to maintain peaceful
                      spiritual decorum inside the tirth premises.
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="text-3xl"><Clock3 className="w-8 h-8 text-white" strokeWidth={1.5} /></div>

                  <div>

                    <h4 className="text-2xl font-medium mb-2">
                      Check-In / Check-Out
                    </h4>

                    <p className="text-white/90 leading-8 text-lg">
                      Check-In: 11:00 AM <br />
                      Check-Out: 10:00 AM
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* PREMIUM IMAGE MODAL */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[999]
              bg-black/95
              backdrop-blur-md
              flex items-center justify-center
              p-6
            "
          >

            {/* CLOSE BUTTON */}

            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute top-6 right-6
                bg-white/10 hover:bg-white/20
                text-white
                p-3 rounded-full
                transition
                z-50
              "
            >

              <X size={28} />

            </button>

            {/* LEFT BUTTON */}

            <button
              onClick={prevImage}
              className="
                absolute left-6
                bg-white/10 hover:bg-white/20
                text-white
                p-4 rounded-full
                transition
                z-50
              "
            >

              <ChevronLeft size={34} />

            </button>

            {/* IMAGE */}

            <motion.img
              key={selectedImage}
              src={selectedImage}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="
                max-h-[88vh]
                max-w-[92vw]
                rounded-3xl
                shadow-[0_0_80px_rgba(255,255,255,0.12)]
                object-contain
              "
            />

            {/* RIGHT BUTTON */}

            <button
              onClick={nextImage}
              className="
                absolute right-6
                bg-white/10 hover:bg-white/20
                text-white
                p-4 rounded-full
                transition
                z-50
              "
            >

              <ChevronRight size={34} />

            </button>

            {/* IMAGE COUNTER */}

            <div
              className="
                absolute bottom-8 left-1/2
                -translate-x-1/2
                bg-white/10 backdrop-blur-md
                text-white px-4 sm:px-6 py-3 rounded-full
                text-sm tracking-wide
              "
            >

              {currentIndex + 1} / {galleryImages.length}

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </div>
  );
}