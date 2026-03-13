"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
      relative
      bg-gradient-to-b from-[#4B1E00] to-[#2b1200]
      text-amber-100
      border-t border-amber-700/40
      overflow-hidden
      "
    >

      {/* Soft Glow Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,200,100,0.12),transparent_60%)]"></div>


      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-14">

        {/* LOGO + ABOUT */}

        <div className="space-y-5">

          <div className="flex items-center gap-3">

            <div
              className="
              w-12 h-12
              rounded-full
              bg-gradient-to-br from-amber-300 to-amber-600
              flex items-center justify-center
              shadow-[0_0_25px_rgba(255,200,0,0.6)]
              "
            >

              <Image
                src="/images/logo.png"
                alt="Jinsharnam"
                width={46}
                height={46}
                className="rounded-full"
              />

            </div>

            <h3
              className="
              text-xl
              font-serif
              bg-gradient-to-r from-yellow-200 to-amber-400
              bg-clip-text text-transparent
              "
            >
              Jinsharnam Tirth Dham
            </h3>

          </div>

          <p className="font-serif text-sm text-amber-200 leading-relaxed">
            A sacred sanctuary devoted to peace, devotion and
            spiritual awakening guided by the divine inspiration
            of Acharya Shri Pulak Sagar Ji Maharaj.
          </p>

        </div>



        {/* QUICK LINKS */}

        <div className="font-serif">

          <h4
            className="
            text-lg
            font-semibold
            mb-5
            text-yellow-300
            "
          >
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">

            <li>
              <Link href="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-yellow-300 transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/mission" className="hover:text-yellow-300 transition">
                Our Mission
              </Link>
            </li>

            <li>
              <Link href="/work" className="hover:text-yellow-300 transition">
                Our Work
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-yellow-300 transition">
                Contact
              </Link>
            </li>

          </ul>

        </div>



        {/* CONTACT */}

        <div className="font-serif space-y-4">

          <h4
            className="
            text-lg
            font-semibold
            text-yellow-300
            "
          >
            Contact
          </h4>

          <div className="flex items-start gap-3 text-sm text-amber-200">

            <MapPin size={16} />

            <p>
              Mumbai-Surat Highway No 48 <br />
              Uplat, Palghar <br />
              Maharashtra - 401606
            </p>

          </div>

          <div className="flex items-center gap-3 text-sm">

            <Phone size={16} />

            <span>+91-7987176553 | +91-8799598079</span>

          </div>

        </div>

      </div>



      {/* DIVIDER */}

      <div className="flex justify-center">
        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>



      {/* COPYRIGHT */}

      <div className="font-serif text-center py-6 text-sm text-amber-300">

        © {new Date().getFullYear()} Jinsharnam Tirth Trust.  
        All Rights Reserved.

      </div>

    </footer>
  );
}