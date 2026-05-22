"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

export default function DonationSection() {
  const [toast, setToast] = useState("");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);

    setToast(`${label} Copied`);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  return (
    <>
      <section
        id="donate-section"
        className="
          bg-gradient-to-b
          from-amber-50
          to-white
          py-24
          border-t
          font-serif
          border-amber-300
        "
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-4xl font-serif text-[#4B1E00] text-center mb-5">
              Support Jinsharnam Tirth Trust
            </h2>

            <p className="text-lg text-center text-[#4B1E00]/80 max-w-3xl mx-auto leading-relaxed mb-14">
              Your generous donation supports the maintenance and
              development of the sacred
              <strong> Jinsharnam Tirth</strong>. <br/>
              Every contribution is deeply appreciated.
            </p>

          </motion.div>


          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
              className="
                bg-white
                rounded-3xl
                border
                border-amber-200
                shadow-xl
                p-10
              "
            >

              <h3 className="text-2xl font-serif text-[#4B1E00] mb-8">
                Bank Transfer
              </h3>

              <p className="text-lg font-semibold text-[#4B1E00] mb-8">
                SHRI DIGAMBAR JAIN JINSHARNAM TIRTH TRUST
              </p>

              {[
                {
                  label: "Account Number",
                  value: "2565201000951",
                },
                {
                  label: "IFSC Code",
                  value: "CNRB0002565",
                },
                {
                  label: "PAN",
                  value: "AALTS9991H",
                },
              ].map((item) => (

                <div
                  key={item.label}
                  className="mb-7"
                >

                  <p className="text-sm text-[#4B1E00]/60">
                    {item.label}
                  </p>

                  <div className="flex items-center gap-3 mt-2">

                    <p className="font-mono text-xl font-bold text-[#4B1E00]">
                      {item.value}
                    </p>

                    <button
                      onClick={() =>
                        copyToClipboard(
                          item.value,
                          item.label
                        )
                      }
                      className="
                        px-4
                        py-2
                        rounded-lg
                        bg-amber-100
                        hover:bg-amber-200
                        text-sm
                      "
                    >
                      📋 Copy
                    </button>

                  </div>

                </div>

              ))}

              <p className="mb-2">
                <strong>Bank:</strong> Canara Bank
              </p>

              <p>
                <strong>Branch:</strong> Silvassa (DN)
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="
                  mt-10
                  flex
                  items-center
                  gap-3
                  text-green-700
                  font-semibold
                "
              >

                <CheckCircle size={26} />

                Eligible for 80G Tax Exemption

              </motion.div>

            </motion.div>


            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
              className="
                bg-white
                rounded-3xl
                border
                border-amber-200
                shadow-xl
                p-10
                flex
                flex-col
                items-center
              "
            >

              <h3 className="text-2xl font-serif text-[#4B1E00] mb-8">
                UPI / QR Donation
              </h3>

              <div className="p-4 rounded-2xl border border-amber-300 shadow-md">

                <img
                  src="/images/jinsharnam_qr1.jpg"
                  alt="Donation QR"
                  className="w-72 rounded-lg"
                />

              </div>

              <p className="text-[#4B1E00]/80 mt-5 text-sm">
                Scan using GPay / PhonePe / Paytm / BHIM
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {toast && (

        <div
          className="
            fixed
            bottom-6
            right-6
            bg-[#4B1E00]
            text-white
            px-5
            py-3
            rounded-xl
            shadow-lg
            flex
            items-center
            gap-2
          "
        >

          <CheckCircle size={18} />

          {toast}

        </div>

      )}

    </>
  );
}