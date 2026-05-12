"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pulak Sagar", path: "/pulak-sagar" },
    { name: "Chatravaas", path: "/mission" },
    { name: "Our Work", path: "/work" },
    { name: "Booking", path: "/booking" },
    { name: "Gallery", path: "/gallery" },
    { name: "Trustees", path: "/our-trustees" },
    { name: "Contact", path: "/contact" },
  ];

  return (

    <nav
      className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-500
      ${
        scrolled
          ? `
            bg-[#1B0B00]/92
            backdrop-blur-2xl
            border-b border-amber-500/10
            shadow-[0_10px_50px_rgba(0,0,0,0.45)]
            py-3
          `
          : `
            bg-black/30
            backdrop-blur-xl
            border-b border-white/5
            py-4
          `
      }
      `}
    >

      {/* TOP GOLDEN LINE */}

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,180,80,0.08),transparent_55%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-3 group flex-shrink-0"
          >

            {/* LOGO IMAGE */}

            <div
              className="
                relative
                w-14 h-14 md:w-16 md:h-16
                rounded-full
                overflow-hidden
                border border-amber-400/30
                shadow-[0_0_25px_rgba(255,180,80,0.25)]
                transition duration-500
                group-hover:scale-105
                bg-black/20
                flex-shrink-0
              "
            >

              <Image
                src="/images/logo.png"
                alt="Jinsharnam Tirth Dham"
                fill
                className="object-cover"
              />

            </div>

            {/* TEXT */}

            <div className="hidden sm:block">

              <h1
                className="
                  text-[22px]
                  leading-none
                  font-serif
                  text-[#F7D9A7]
                  whitespace-nowrap
                  tracking-wide
                "
              >

                Jinsharnam Tirth Dham

              </h1>

            </div>

          </Link>

          {/* ===================================================== */}
          {/* DESKTOP MENU */}
          {/* ===================================================== */}

          <div className="hidden lg:flex items-center gap-1 ml-6">

            {menu.map((item) => {

              const active = pathname === item.path;

              return (

                <Link
                  key={item.path}
                  href={item.path}
                  className={`
                    relative
                    px-4 py-2.5
                    rounded-full
                    text-[14px]
                    font-serif
                    transition-all duration-300
                    overflow-hidden
                    whitespace-nowrap
                    group
                    ${
                      active
                        ? `
                          text-[#2B1200]
                          bg-gradient-to-r
                          from-amber-300
                          to-yellow-500
                          shadow-[0_0_20px_rgba(255,190,80,0.35)]
                        `
                        : `
                          text-[#F2DEC3]
                          hover:text-white
                          hover:bg-white/5
                        `
                    }
                  `}
                >

                  {!active && (

                    <span
                      className="
                        absolute inset-0
                        rounded-full
                        bg-gradient-to-r
                        from-white/5
                        to-white/[0.02]
                        opacity-0
                        group-hover:opacity-100
                        transition duration-300
                      "
                    ></span>

                  )}

                  <span className="relative z-10">
                    {item.name}
                  </span>

                </Link>

              );

            })}

          </div>

          {/* ===================================================== */}
          {/* MOBILE BUTTON */}
          {/* ===================================================== */}

          <button
            onClick={() => setOpen(!open)}
            className="
              lg:hidden
              w-12 h-12
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              flex items-center justify-center
              text-[#F5D8AA]
            "
          >

            {open ? (
              <X className="w-6 h-6" strokeWidth={1.8} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.8} />
            )}

          </button>

        </div>

      </div>

      {/* ===================================================== */}
      {/* MOBILE MENU */}
      {/* ===================================================== */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all duration-500
          ${
            open
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div
          className="
            mx-4 mt-4 mb-2
            rounded-[30px]
            border border-white/10
            bg-[#1A0A00]/95
            backdrop-blur-2xl
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            p-6
          "
        >

          <div className="flex flex-col gap-2">

            {menu.map((item) => {

              const active = pathname === item.path;

              return (

                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center justify-between
                    px-5 py-4
                    rounded-2xl
                    transition-all duration-300
                    text-[15px]
                    ${
                      active
                        ? `
                          bg-gradient-to-r
                          from-amber-300
                          to-yellow-500
                          text-[#2B1200]
                          shadow-lg
                        `
                        : `
                          text-[#E5D2BA]
                          hover:bg-white/5
                          hover:text-white
                        `
                    }
                  `}
                >

                  <span>{item.name}</span>

                  <div
                    className={`
                      w-2 h-2 rounded-full
                      ${
                        active
                          ? "bg-[#2B1200]"
                          : "bg-amber-500/60"
                      }
                    `}
                  ></div>

                </Link>

              );
            })}

          </div>

        </div>

      </div>

    </nav>

  );
}