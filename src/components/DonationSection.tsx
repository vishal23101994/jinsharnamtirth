"use client";

import { motion } from "framer-motion";
import { Heart, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function DonationSection() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);

    setToast(`${label} Copied`);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };
  const [toast, setToast] = useState("");

  return (

    <section className="relative py-32 bg-gradient-to-b from-[#FFF9EC] via-white to-[#FFF4D6] overflow-hidden">

      {/* Soft Divine Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,210,120,0.25),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity:0, x:-60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
        >

          {/* Heading */}

          <div className="flex items-center gap-5 mb-10">

            <div className="
            w-16 h-16
            flex items-center justify-center
            rounded-2xl
            bg-gradient-to-br
            from-amber-300
            to-yellow-400
            shadow-lg
            text-[#4B1E00]
            ">
              <Heart size={26}/>
            </div>

            <h2 className="text-3xl font-serif text-[#4B1E00] leading-tight">
              Support Jinsharnam Tirth
            </h2>

          </div>


          {/* Intro Text */}

          <p className="text-lg font-serif text-[#4B1E00]/80 leading-relaxed mb-6">

            Your generous contribution helps us continue our mission of
            spiritual service, student education, Gau Seva and community
            welfare activities.

          </p>

          <p className="font-serif text-lg text-[#4B1E00]/80 leading-relaxed mb-10">

            Every donation preserves sacred traditions and strengthens
            the spiritual initiatives of Jinsharnam Tirth for future
            generations.

          </p>


          {/* Impact List */}

          <div className="font-serif space-y-3 text-[#4B1E00]">

            <p className="flex items-center gap-2">
              <span className="text-amber-500">✦</span>
              Support education for students
            </p>

            <p className="flex items-center gap-2">
              <span className="text-amber-500">✦</span>
              Help provide food and accommodation
            </p>

            <p className="flex items-center gap-2">
              <span className="text-amber-500">✦</span>
              Contribute towards Gau Seva
            </p>

            <p className="flex items-center gap-2">
              <span className="text-amber-500">✦</span>
              Preserve spiritual heritage
            </p>

          </div>


          {/* Divider */}

          <div className="mt-10 w-28 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>


          <div className="mt-10 flex items-center gap-3 font-serif text-green font-medium">

            <div className="
            w-6
            h-6
            flex
            items-center
            justify-center
            rounded-full
            bg-amber-400
            text-white
            shadow-sm
            ">

              <CheckCircle size={18} />

            </div>

            <span className="text-green-700">
            Donations Eligible for 80G Tax Exemption
            </span>

          </div>

        </motion.div>



        {/* QR CARD */}

        <motion.div
          initial={{ opacity:0, x:60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          className="
          group
          bg-white
          border border-amber-200
          rounded-3xl
          p-12 font-serif
          text-center
          shadow-[0_35px_100px_rgba(0,0,0,0.2)]
          hover:-translate-y-1
          hover:shadow-[0_50px_140px_rgba(0,0,0,0.25)]
          transition
          "
        >

          {/* Card Header */}

          <p className="text-md text-amber-600 font-semibold mb-4">
            Scan & Donate
          </p>

          {/* QR */}

          <div className="flex justify-center mb-8">

            <img
              src="/images/jinsharnam_qr1.jpg"
              alt="Donation QR"
              className="
              w-56
              rounded-xl
              border border-amber-200
              shadow-md
              group-hover:scale-105
              transition
              "
            />

          </div>


          {/* Bank Title */}

          <h3 className="text-2xl font-serif text-[#4B1E00] mb-6">
            Bank Details
          </h3>


          {/* Bank Info */}

          <div className="text-[#4B1E00]/85 text-sm leading-relaxed space-y-4 text-left">

            {/* Account Name */}

            <div className="flex justify-between items-center border-b pb-2">

              <div>
                <span className="font-semibold">Account Name:</span> <br/> SHRI DIGAMBAR JAIN JINSHARNAM TIRTH TRUST
              </div>

              <button
                onClick={() => copyToClipboard("Jinsharnam Tirth Trust", "Account Name")}
                className="text-xs bg-amber-100 px-3 py-1 rounded-md hover:bg-amber-200 transition"
              >
                Copy
              </button>

            </div>


            {/* Bank */}

            <div className="flex justify-between items-center border-b pb-2">

              <div>
                <span className="font-semibold">Bank:</span> Canara Bank
              </div>

              <button
                onClick={() => copyToClipboard("State Bank of India", "Bank Name")}
                className="text-xs bg-amber-100 px-3 py-1 rounded-md hover:bg-amber-200 transition"
              >
                Copy
              </button>

            </div>


            {/* Account Number */}

            <div className="flex justify-between items-center border-b pb-2">

              <div>
                <span className="font-semibold">Account No:</span> 2565201000951
              </div>

              <button
                onClick={() => copyToClipboard("12345678901", "Account Number")}
                className="text-xs bg-amber-100 px-3 py-1 rounded-md hover:bg-amber-200 transition"
              >
                Copy
              </button>

            </div>


            {/* IFSC */}

            <div className="flex justify-between items-center">

              <div>
                <span className="font-semibold">IFSC:</span> CNRB0002565
              </div>

              <button
                onClick={() => copyToClipboard("SBIN000000", "IFSC")}
                className="text-xs bg-amber-100 px-3 py-1 rounded-md hover:bg-amber-200 transition"
              >
                Copy
              </button>

            </div>

          </div>

        </motion.div>

      </div>
      {toast && (

        <div className="
        fixed
        bottom-6
        right-6
        bg-[#4B1E00]
        text-white
        px-5
        py-3 font-serif
        rounded-xl
        shadow-lg
        flex
        items-center
        gap-2
        animate-fadeIn
        ">

          <CheckCircle size={18}/>
          {toast}

        </div>

      )}

    </section>

  );

}