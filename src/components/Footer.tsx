"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Pulak Sagar", "/pulak-sagar"],
    ["Chatravaas", "/mission"],
    ["Our Work", "/work"],
    ["Booking", "/booking"],
    ["Gallery", "/gallery"],
    ["Trustees", "/our-trustees"],
    ["Contact", "/contact"],
  ];

  return (

    <footer className="relative overflow-hidden bg-[#120700] text-[#F6E7D2]">

      {/* PREMIUM BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,180,80,0.08),transparent_35%)]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,140,40,0.05),transparent_35%)]"></div>

      {/* TOP BORDER */}

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 md:pt-20 pb-10">

        {/* ========================================================= */}
        {/* TOP BRAND SECTION */}
        {/* ========================================================= */}

        <div className="max-w-4xl mx-auto text-center">

          {/* LOGO */}

          <div className="flex justify-center mb-6 md:mb-8">

            <div
              className="
                relative
                w-15 h-15 md:w-18 md:h-18
                rounded-full
                overflow-hidden
                border border-amber-400/20
                shadow-[0_0_40px_rgba(255,180,80,0.08)]
              "
            >

              <Image
                src="/images/logo.png"
                alt="Jinsharnam"
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* NAME */}

          <h2
            className="
              text-2xl sm:text-2xl md:text-3xl
              font-serif
              text-[#F5D8AA]
              leading-tight
              mb-5 md:mb-6
              whitespace-nowrap
            "
          >
            <span className="text-[#F5D8AA]">
              Jinsharnam
            </span>{" "}
            
            <span className="text-[#B8854A]">
              Tirth Dham
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              text-sm sm:text-[15px] md:text-[16px]
              leading-8 md:leading-9
              text-[#D4BEA2]
              max-w-3xl
              mx-auto
              px-2
            "
          >

            A sacred sanctuary devoted to peace, devotion,
            spiritual awakening and inner transformation,
            inspired by the divine teachings of
            Acharya Shri Pulak Sagar Ji Maharaj.

          </p>

          {/* QUOTE */}

          <div
            className="
              mt-8 md:mt-10
              inline-block
              border-l border-amber-500/20
              pl-4 md:pl-6
              text-left
              max-w-2xl
            "
          >

            <p
              className="
                text-lg sm:text-sm md:text-sm
                italic
                leading-8 md:leading-10
                font-serif
                text-[#D5A565]
              "
            >

              “Where spirituality meets serenity,
              and devotion transforms into inner peace.”

            </p>

          </div>

        </div>

        <div className="mt-20 md:mt-24">

          <h3
            className="
              text-2xl md:text-2xl
              font-serif
              text-[#F5D8AA]
              text-center
              mb-10 md:mb-14
            "
          >

            Contact Information

          </h3>

          <div className="grid md:grid-cols-3 gap-5 md:gap-8">

            {/* ADDRESS */}

            <div
              className="
                bg-white/[0.03]
                border border-white/5
                rounded-[24px] md:rounded-[30px]
                p-5 md:p-8
                backdrop-blur-sm
              "
            >

              <div className="flex gap-4 md:gap-5">

                <div
                  className="
                    w-12 h-12 md:w-14 md:h-14
                    rounded-2xl
                    bg-amber-500/10
                    border border-amber-500/10
                    flex items-center justify-center
                    flex-shrink-0
                  "
                >

                  <MapPin
                    className="w-5 h-5 text-[#D89C54]"
                    strokeWidth={1.7}
                  />

                </div>

                <div>

                  <p className="text-[#A98A67] text-xs md:text-sm mb-2 md:mb-3">
                    Address
                  </p>

                  <p className="text-[#F0DDC7] leading-7 text-sm">

                    Mumbai-Surat Highway No. 48,
                    Uplat, Palghar,
                    Maharashtra - 401606

                  </p>

                </div>

              </div>

            </div>

            {/* PHONE */}

            <div
              className="
                bg-white/[0.03]
                border border-white/5
                rounded-[24px] md:rounded-[30px]
                p-5 md:p-8
                backdrop-blur-sm
              "
            >

              <div className="flex gap-4 md:gap-5">

                <div
                  className="
                    w-12 h-12 md:w-14 md:h-14
                    rounded-2xl
                    bg-amber-500/10
                    border border-amber-500/10
                    flex items-center justify-center
                    flex-shrink-0
                  "
                >

                  <Phone
                    className="w-5 h-5 text-[#D89C54]"
                    strokeWidth={1.7}
                  />

                </div>

                <div>

                  <p className="text-[#A98A67] text-xs md:text-sm mb-2 md:mb-3">
                    Phone
                  </p>

                  <p className="text-[#F0DDC7] leading-7 text-sm break-words">

                    +91-7987176553 <br />
                    +91-8799598079

                  </p>

                </div>

              </div>

            </div>

            {/* EMAIL */}

            <div
              className="
                bg-white/[0.03]
                border border-white/5
                rounded-[24px] md:rounded-[30px]
                p-5 md:p-8
                backdrop-blur-sm
              "
            >

              <div className="flex gap-4 md:gap-5">

                <div
                  className="
                    w-12 h-12 md:w-14 md:h-14
                    rounded-2xl
                    bg-amber-500/10
                    border border-amber-500/10
                    flex items-center justify-center
                    flex-shrink-0
                  "
                >

                  <Mail
                    className="w-5 h-5 text-[#D89C54]"
                    strokeWidth={1.7}
                  />

                </div>

                <div className="min-w-0">

                  <p className="text-[#A98A67] text-xs md:text-sm mb-2 md:mb-3">
                    Email
                  </p>

                  <p className="text-[#F0DDC7] text-sm break-all leading-7">

                    info@jinsharnamtirth.org

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* QUICK LINKS */}
        {/* ========================================================= */}

        <div className="mt-20 md:mt-24 text-center">

          <h3
            className="
              text-2xl md:text-2xl
              font-serif
              text-[#F5D8AA]
              mb-10 md:mb-12
            "
          >

            Quick Links

          </h3>

          <div
            className="
              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
              gap-y-5 md:gap-y-6
              gap-x-4 md:gap-x-10
              max-w-5xl mx-auto
            "
          >

            {links.map(([name, href], i) => (

              <Link
                key={i}
                href={href}
                className="
                  group
                  flex items-center justify-center gap-2 md:gap-3
                  text-[#D4BEA2]
                  hover:text-[#F5D8AA]
                  transition duration-300
                  text-sm md:text-[15px]
                "
              >

                <div
                  className="
                    w-1.5 h-1.5
                    rounded-full
                    bg-amber-500
                    group-hover:scale-125
                    transition
                  "
                ></div>

                <span>{name}</span>

                <ArrowRight
                  className="
                    hidden md:block
                    w-4 h-4
                    opacity-0
                    -translate-x-2
                    group-hover:translate-x-0
                    group-hover:opacity-100
                    transition duration-300
                  "
                  strokeWidth={1.7}
                />

              </Link>

            ))}

          </div>

        </div>        

        {/* ========================================================= */}
        {/* CENTRAL OFFICE */}
        {/* ========================================================= */}

        <div className="mt-20 md:mt-24">

          <div
            className="
              max-w-5xl
              mx-auto
              bg-gradient-to-r
              from-[#2B1400]
              to-[#1B0B00]
              border border-white/5
              rounded-[28px] md:rounded-[32px]
              px-5 py-8 md:px-10 md:py-10
              overflow-hidden
              relative
            "
          >

            {/* Glow Effect */}

            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full"></div>

            <div className="relative text-center">

              {/* LOGO */}

              <div
                className="
                  w-10 h-10 md:w-15 md:h-15
                  rounded-full
                  overflow-hidden
                  border border-amber-400/20
                  shadow-[0_0_40px_rgba(255,180,80,0.12)]
                  mx-auto mb-6
                  bg-black/20
                "
              >

                <Image
                  src="/images/jinsharnammedia.png"
                  alt="Jinsharnam Media"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* TITLE */}

              <p
                className="
                  text-[#B89063]
                  text-[10px] md:text-xs
                  tracking-[4px]
                  uppercase
                  mb-3
                "
              >

                Central Office & Media Partner

              </p>

              <h3
                className="
                  text-2xl md:text-4xl
                  font-serif
                  text-[#F5D8AA]
                  mb-4
                "
              >

                Jinsharnam Media

              </h3>

              {/* WEBSITE */}

              <a
                href="https://jinsharnammedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  text-amber-400
                  hover:text-amber-300
                  transition
                  text-sm md:text-base
                  mb-8
                "
              >

                www.jinsharnammedia.com

                <ExternalLink
                  className="w-4 h-4"
                  strokeWidth={1.7}
                />

              </a>

              {/* ADDRESS */}

              <div className="max-w-2xl mx-auto">

                <p
                  className="
                    text-[#EBD8C1]
                    leading-8
                    text-sm md:text-[15px]
                  "
                >

                  Vatsalya Bhawan <br />

                  P-75, Street No. 5,
                  Bihari Colony Extension,
                  Bihari Colony, Shahdara,
                  Delhi - 110032,
                  India

                </p>

                {/* PHONE */}

                <p
                  className="
                    text-[#D8B287]
                    mt-5
                    text-sm md:text-[15px]
                    tracking-wide
                  "
                >

                  +91 9810900699 • +91 9810900042

                </p>

              </div>

            </div>

          </div>

        </div>

        

        {/* DIVIDER */}

        <div
          className="
            my-10 md:my-14
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-amber-500/20
            to-transparent
          "
        ></div>

        {/* COPYRIGHT */}

        <div className="text-center px-2">

          <p className="text-[#A98A67] text-xs sm:text-sm leading-7">

            © {new Date().getFullYear()} Jinsharnam Tirth Trust.
            All Rights Reserved.

          </p>

          <p
            className="
              text-[#7C5B39]
              text-[10px] sm:text-xs
              tracking-[2px] sm:tracking-[3px]
              uppercase
              mt-3 md:mt-4
            "
          >

            Designed with devotion & spirituality

          </p>

        </div>

      </div>

    </footer>
  );
}