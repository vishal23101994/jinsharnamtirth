"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= TYPES ================= */

type Update = {
  id: string;
  title: string;
  imageUrl?: string;
  category: string;
};


/* ================= MAIN ================= */

export default function LatestUpdatesSection() {
  const [updates, setUpdates] = useState<Update[]>([]);
  
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  
  
  
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const start = useRef({ x: 0, y: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);

  /* ================= IMAGE FIX ================= */

  const getImageUrl = (url?: string) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `https://jinsharnammedia.com${url}`;
  };

  useEffect(() => {
    fetch("https://jinsharnammedia.com/api/latest-update")
      .then(res => res.json())
      .then(data => setUpdates(data.data || []));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const interval = setInterval(() => {
      const cardWidth =
        window.innerWidth < 640 ? 250 : 340;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - cardWidth
      ) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [updates]);

  return (
    <>
      {/* ================= HOME ================= */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#FFF8E7] via-[#FFF3D6] to-[#FDE8B4]">

        {/* Soft Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,120,0.25),transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center px-6 mb-14">

            <span className="
              inline-block px-5 py-2 rounded-full
              bg-white/70
              border border-[#E8C97A]
              text-[#8A5A00]
              text-xs tracking-[0.25em]
              uppercase mb-5
              backdrop-blur-md
            ">
              Divine Updates
            </span>

            <h2 
              className="
                text-3xl sm:text-4xl md:text-6xl
                font-serif
                text-[#4B1E00]
                leading-tight
              "
            >
              Latest Updates
            </h2>

            <p 
              className="
                font-serif
                mt-4 md:mt-5
                max-w-2xl mx-auto
                text-[#7A5A20]
                text-base sm:text-lg md:text-[20px]
                leading-7 md:leading-relaxed
                px-4
              "
            >
              Sacred moments, spiritual gatherings, seva activities,
              and divine memories from Jinsharnam Tirth Dham.
            </p>

          </div>

          {/* HORIZONTAL SCROLLER */}
          <div className="relative">

            {/* LEFT FADE */}
            <div className="absolute left-0 top-0 bottom-0 w-10 md:w-20 z-20 bg-gradient-to-r from-[#FFF8E7] to-transparent pointer-events-none" />

            {/* RIGHT FADE */}
            <div className="absolute right-0 top-0 bottom-0 w-10 md:w-20 z-20 bg-gradient-to-l from-[#FFF8E7] to-transparent pointer-events-none" />

            {/* SCROLL CONTAINER */}
            <div className="relative">

              {/* LEFT BUTTON */}
              <button
                onClick={() =>
                  scrollRef.current?.scrollBy({
                    left: -320,
                    behavior: "smooth",
                  })
                }
                className="
                  absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-30
                  w-10 h-10 md:w-14 md:h-14 rounded-full
                  bg-white/75 backdrop-blur-2xl
                  border border-white/60
                  text-[#8A5A00]
                  shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                  hover:scale-110
                  hover:bg-white
                  hover:shadow-[0_15px_40px_rgba(255,190,50,0.25)]
                  transition-all duration-300
                  flex items-center justify-center
                  text-lg md:text-2xl
                "
              >
                ←
              </button>

              {/* RIGHT BUTTON */}
              <button
                onClick={() =>
                  scrollRef.current?.scrollBy({
                    left: 320,
                    behavior: "smooth",
                  })
                }
                className="
                  absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-30
                  w-10 h-10 md:w-14 md:h-14 rounded-full
                  bg-white/75 backdrop-blur-2xl
                  border border-white/60
                  text-[#8A5A00]
                  shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                  hover:scale-110
                  hover:bg-white
                  hover:shadow-[0_15px_40px_rgba(255,190,50,0.25)]
                  transition-all duration-300
                  flex items-center justify-center
                  text-lg md:text-2xl
                "
              >
                →
              </button>

              {/* SCROLLER */}
              <div
                ref={scrollRef}
                className="
                  flex gap-6
                  overflow-x-auto overflow-y-hidden
                  px-6 md:px-16 py-4
                  scroll-smooth
                  no-scrollbar
                  whitespace-nowrap
                  snap-x snap-mandatory
                  [-webkit-overflow-scrolling:touch]
                "
              >

                {updates
                  .filter((u) => u.category === "JINSHARNAM")
                  .map((u, i) => (
                    <motion.div
                      key={u.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8 }}
                      className="
                        min-w-[240px]
                        max-w-[240px]
                        sm:min-w-[280px]
                        sm:max-w-[280px]
                        md:min-w-[320px]
                        md:max-w-[320px]
                        rounded-[24px]
                        overflow-hidden
                        bg-white/60
                        backdrop-blur-xl
                        snap-start flex-shrink-0
                        hover:-translate-y-2
                        border border-[#F3D58A]/40
                        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                        hover:shadow-[0_25px_60px_rgba(255,190,50,0.22)]
                        transition-all duration-500
                        group
                      "
                    >

                      {/* IMAGE */}
                      <div
                        onClick={() => {
                          setZoomImage(getImageUrl(u.imageUrl));
                          setZoomLevel(1);
                          setPosition({ x: 0, y: 0 });
                        }}
                        className="
                          relative h-[190px] sm:h-[220px] md:h-[250px]
                          overflow-hidden cursor-pointer
                        "
                      >
                        <img
                          src={getImageUrl(u.imageUrl)}
                          alt={u.title}
                          className="
                            w-full h-full object-cover
                            transition duration-700
                            group-hover:scale-105
                          "
                        />

                        {/* Overlay */}
                        <div className="
                          absolute inset-0
                          bg-gradient-to-t
                          from-black/50
                          via-transparent
                          to-transparent
                        " />
                      </div>

                      {/* CONTENT */}
                      <div className="p-4 md:p-5 flex flex-col min-h-[130px] md:min-h-[150px]">

                        <div className="
                          inline-flex items-center gap-2
                          px-3 py-1 rounded-full
                          bg-[#FFF3D6]
                          text-[#8A5A00]
                          text-[10px]
                          tracking-[0.18em]
                          uppercase mb-4
                          border border-[#F3D58A]
                          w-fit
                        ">
                          Latest Update
                        </div>

                        <h3 className="
                          text-[16px] sm:text-[18px] md:text-[20px]
                          font-serif
                          text-[#4B1E00]
                          leading-7 md:leading-relaxed
                          tracking-[0.01em]
                          break-words
                          whitespace-normal
                        ">
                          {u.title}
                        </h3>

                      </div>

                    </motion.div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </section>
      

      {/* ================= ZOOM ================= */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setZoomImage(null);
              setZoomLevel(1);
              setPosition({ x: 0, y: 0 });
            }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomImage(null);
                setZoomLevel(1);
                setPosition({ x: 0, y: 0 });
              }}
              className="absolute top-3 left-3 md:top-6 md:left-6 text-white text-2xl md:text-3xl font-bold z-30"
            >
              ✕
            </button>

            {/* ZOOM CONTROLS */}
            <div className="absolute top-3 right-3 md:top-6 md:right-6 flex gap-2 md:gap-3 z-30">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel((prev) => Math.min(prev + 0.3, 5));
                }}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-black text-[#E6C97A] border border-[#CFA73C] hover:bg-[#1A1A1A] transition-all shadow"
              >
                +
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel((prev) => {
                    const newZoom = Math.max(prev - 0.3, 1);
                    if (newZoom === 1) setPosition({ x: 0, y: 0 });
                    return newZoom;
                  });
                }}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-black text-[#E6C97A] border border-[#CFA73C] hover:bg-[#1A1A1A] transition-all shadow"
              >
                −
              </button>
            </div>

            {/* IMAGE CONTAINER */}
            <div
              className="w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // IMPORTANT
            >
              <motion.img
                src={zoomImage}
                alt="Zoomed Update"
                className="max-w-[95vw] max-h-[85vh] md:max-w-[90vw] md:max-h-[90vh] object-contain select-none"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
                  transition: isDragging.current ? "none" : "transform 0.2s ease-out",
                  cursor: zoomLevel > 1 ? "grab" : "default",
                }}
                draggable={false}
                onWheel={(e) => {
                  e.stopPropagation();
                  setZoomLevel((prev) => {
                    const newZoom =
                      e.deltaY < 0
                        ? Math.min(prev + 0.2, 5)
                        : Math.max(prev - 0.2, 1);

                    if (newZoom === 1) setPosition({ x: 0, y: 0 });

                    return newZoom;
                  });
                }}
                onMouseDown={(e) => {
                  if (zoomLevel <= 1) return;
                  isDragging.current = true;
                  start.current = {
                    x: e.clientX - position.x,
                    y: e.clientY - position.y,
                  };
                }}
                onMouseMove={(e) => {
                  if (!isDragging.current) return;
                  setPosition({
                    x: e.clientX - start.current.x,
                    y: e.clientY - start.current.y,
                  });
                }}
                onMouseUp={() => (isDragging.current = false)}
                onMouseLeave={() => (isDragging.current = false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
