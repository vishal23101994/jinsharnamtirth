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
    // ["Our Work", "/work"],
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
              Shri Digambar Jain Jinsharnam Tirth Trust (Regd.)
            </span>{" "}
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

                  <p className="text-[#F0DDC7] leading-7 text-sm font-serif">

                    Mumbai-Surat Highway No 48, Mukaam Post, Uplat, Tehsil Talasari, District Palghar, Maharashtra-401606

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

                    jinsharnam@gmail.com

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* QUICK LINKS + CENTRAL OFFICE */}
        {/* ========================================================= */}

        <div className="mt-50 md:mt-20">

          <div
            className="
              grid
              md:grid-cols-2
              gap-8

              max-w-6xl
              mx-auto

              items-stretch
            "
          >

            {/* QUICK LINKS */}

            <div
              className="
                h-full

                rounded-[26px]

                p-8

                bg-gradient-to-br
                from-[#2A1300]
                via-[#211000]
                to-[#170800]

                border
                border-amber-500/10

                shadow-[0_10px_40px_rgba(255,170,60,0.05)]

                hover:border-amber-500/20

                transition-all
                duration-300
              "
            >

              <h3
                className="
                  text-lg
                  font-serif
                  text-[#F5D8AA]
                  mb-8
                "
              >
                Quick Links
              </h3>

              <div className="grid grid-cols-2 gap-y-5 gap-x-10">

                {links.map(([name, href], i) => (

                  <Link
                    key={i}
                    href={href}
                    className="
                      group
                      text-[16px]

                      flex
                      items-center
                      gap-3

                      text-[#D4BEA2]
                      hover:text-[#F5D8AA]

                      transition
                    "
                  >

                    <div
                      className="
                        w-1.5 h-1.5
                        rounded-full
                        bg-amber-500
                      "
                    />

                    <span className="font-serif text-[15px]">
                      {name}
                    </span>

                  </Link>

                ))}

              </div>

            </div>

            {/* CENTRAL OFFICE */}

            <div
              className="
                bg-white/[0.02]

                border
                border-white/5

                rounded-[26px]

                p-8

                backdrop-blur-sm

                h-full
              "
            >

              <h3
                className="
                  text-lg
                  font-serif
                  text-[#F5D8AA]
                  mb-8
                "
              >
                Delhi Office & Media Partner
              </h3>

              <div className="flex items-start gap-5">

                <div
                  className="
                    w-12 h-12
                    rounded-full
                    overflow-hidden
                    border border-amber-400/20
                    flex-shrink-0
                  "
                >

                  <Image
                    src="/images/jinsharnammedia.png"
                    alt="Media"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />

                </div>

                <div>

                  <h4
                    className="
                      text-lg
                      font-serif
                      text-[#F5D8AA]
                      mb-3
                    "
                  >
                    Jinsharnam Media
                  </h4>

                  <a
                    href="https://jinsharnammedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group

                      inline-flex
                      items-center
                      gap-3

                      px-4
                      py-2.5

                      rounded-full

                      bg-gradient-to-r
                      from-amber-500/10
                      to-amber-400/5

                      border
                      border-amber-400/15

                      hover:border-amber-300/40
                      hover:bg-amber-500/10

                      transition-all
                      duration-300

                      mb-5
                    "
                  >

                    <div
                      className="
                        w-7 h-7

                        rounded-full

                        bg-amber-500/15

                        flex
                        items-center
                        justify-center

                        text-[14px]
                      "
                    >
                      🌐
                    </div>

                    <div className="leading-tight">

                      <div
                        className="
                          text-[9px]

                          uppercase

                          tracking-[2px]

                          text-[#B89063]
                        "
                      >
                        Visit Website
                      </div>

                      <div
                        className="
                          text-[#F5D8AA]
                          text-sm

                          group-hover:text-white
                        "
                      >
                        jinsharnammedia.com
                      </div>

                    </div>

                    <ExternalLink
                      className="
                        w-3.5
                        h-3.5

                        text-amber-400

                        group-hover:translate-x-1
                        group-hover:-translate-y-[1px]

                        transition
                      "
                    />

                  </a>

                  <p
                    className="
                      text-[#D4BEA2]
                      text-[13px]
                      leading-7
                    "
                  >
                    Vatsalya Bhawan<br />

                    P-75, Street No. 5, 

                    Bihari Colony Extension,
                    Shahdara,
                    Delhi – 110032
                  </p>

                  <p
                    className="
                      mt-4
                      text-[#C9A06A]
                      text-sm
                    "
                  >
                    +91 9810900699 | +91 9810900042
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="text-center px-10 pt-20">

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