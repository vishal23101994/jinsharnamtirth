"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pulak Sagar", path: "/pulak-sagar" },
    { name: "Chatravaas", path: "/mission" },
    { name: "Our Work", path: "/work" },
    { name: "Booking", path: "/booking" },
    { name: "Our Trustees", path: "/our-trustees" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="
    sticky top-0 z-50
    bg-gradient-to-r from-[#4B1E00] via-[#5c2b09] to-[#4B1E00]
    border-b border-amber-600/40
    backdrop-blur-xl
    shadow-[0_10px_40px_rgba(0,0,0,0.35)]
    ">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}

        <Link href="/" className="flex items-center gap-3 group">

          <div className="
          relative
          flex items-center justify-center
          w-12 h-12
          rounded-full
          bg-gradient-to-br from-amber-300 to-amber-600
          shadow-[0_0_20px_rgba(255,200,0,0.6)]
          animate-pulse
          ">

            <Image
              src="/logo.png"
              alt="Jinsharnam Tirth Dham"
              width={56}
              height={56}
              className="rounded-full"
            />

          </div>

          <span className="
          text-xl md:text-2xl
          font-serif
          bg-gradient-to-r from-yellow-200 to-amber-400
          bg-clip-text text-transparent
          tracking-wide
          ">
            Jinsharnam Tirth Dham
          </span>

        </Link>


        {/* DESKTOP MENU */}

        <div className="font-serif hidden md:flex items-center gap-10">

          {menu.map((item) => {

            const active = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`
                relative
                text-[15px]
                tracking-wide
                font-medium
                transition-all duration-300
                ${
                  active
                    ? "text-yellow-300"
                    : "text-amber-200 hover:text-white"
                }
                `}
              >
                {item.name}

                {/* underline animation */}

                <span
                  className={`
                  absolute left-0 -bottom-1 h-[2px]
                  bg-gradient-to-r from-yellow-400 to-amber-500
                  transition-all duration-300
                  ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }
                  `}
                />
              </Link>
            );
          })}

        </div>


        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-amber-200 text-2xl"
        >
          ☰
        </button>

      </div>


      {/* MOBILE MENU */}

      {open && (
        <div className="
        md:hidden
        bg-[#4B1E00]
        border-t border-amber-600
        flex flex-col
        text-center
        py-6
        space-y-4
        text-amber-200
        ">

          {menu.map((item) => (
            <Link key={item.path} href={item.path}>
              {item.name}
            </Link>
          ))}

        </div>
      )}

    </nav>
  );
}