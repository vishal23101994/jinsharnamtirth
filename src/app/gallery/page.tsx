"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import {
  Download,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function GalleryPage() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [images, setImages] = useState<string[]>([]);

  /* LOAD ONLY TIRTH IMAGES */

  useEffect(() => {

    fetch(`/api/gallery/tirth`)
      .then((res) => res.json())
      .then((data) => {

        if (Array.isArray(data)) {
          setImages(data);
        } else {
          setImages([]);
        }

      })
      .catch(() => setImages([]));

  }, []);

  /* OPEN IMAGE */

  const openImage = (index: number) => {

    setSelectedImage(images[index]);

    setCurrentIndex(index);

  };

  /* CLOSE */

  const closeLightbox = () => setSelectedImage(null);

  /* NEXT */

  const nextImage = () => {

    const total = images.length;

    const newIndex = (currentIndex + 1) % total;

    setCurrentIndex(newIndex);

    setSelectedImage(images[newIndex]);

  };

  /* PREV */

  const prevImage = () => {

    const total = images.length;

    const newIndex = (currentIndex - 1 + total) % total;

    setCurrentIndex(newIndex);

    setSelectedImage(images[newIndex]);

  };

  /* DOWNLOAD */

  const downloadImage = () => {

    const link = document.createElement("a");

    link.href = selectedImage!;

    link.download = selectedImage!.split("/").pop()!;

    link.click();

  };

  return (

    <section
      className="
      relative
      min-h-screen
      pt-52
      pb-24
      overflow-hidden
      bg-gradient-to-b
      from-[#FFF8E7]
      via-[#FFF3D6]
      to-[#FDE8BF]
      "
    >

      {/* BACKGROUND EFFECT */}

      <div
        className="
        absolute inset-0
        bg-[url('/swastik-pattern.png')]
        opacity-[0.04]
        bg-cover
        bg-center
        "
      />

      {/* HEADER */}

      <div className="relative z-10 text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p
            className="
            text-[#B7791F]
            tracking-[5px]
            uppercase
            text-xs
            md:text-sm
            mb-5
            "
          >

            Sacred Moments & Divine Architecture

          </p>

          <h1
            className="
            font-serif
            text-5xl
            md:text-7xl
            text-[#5B1D00]
            leading-tight
            "
          >

            Jinsharnam Tirth
            <span className="block text-[#D89A2B]">
              Gallery
            </span>

          </h1>

          <p
            className="
            max-w-3xl
            mx-auto
            mt-8
            text-[#6B4A2E]
            leading-9
            text-[16px]
            md:text-lg
            "
          >

            Explore the divine beauty, spiritual atmosphere,
            sacred architecture, and peaceful surroundings of
            Jinsharnam Tirth Dham.

          </p>

        </motion.div>

      </div>

      {/* GALLERY GRID */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="
        relative z-10
        max-w-7xl
        mx-auto
        px-4
        md:px-6
        mt-20
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5
        md:gap-7
        "
      >

        {images.map((src, i) => (

          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            onClick={() => openImage(i)}
            className="
            group
            relative
            overflow-hidden
            rounded-[28px]
            cursor-pointer
            bg-white
            border border-white/40
            shadow-[0_15px_40px_rgba(120,70,10,0.12)]
            "
          >

            <div className="overflow-hidden">

              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                width={500}
                height={500}
                className="
                w-full
                h-[220px]
                md:h-[280px]
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
                "
              />

            </div>

            {/* PREMIUM OVERLAY */}

            <div
              className="
              absolute inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition duration-500
              "
            />

            <div
              className="
              absolute bottom-0 left-0 right-0
              p-5
              translate-y-10
              group-hover:translate-y-0
              opacity-0
              group-hover:opacity-100
              transition duration-500
              "
            >

              <p
                className="
                text-white
                text-sm
                tracking-[3px]
                uppercase
                "
              >

                Jinsharnam Tirth

              </p>

            </div>

          </motion.div>

        ))}

      </motion.div>

      {/* LIGHTBOX */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            fixed inset-0
            bg-black/90
            backdrop-blur-xl
            z-50
            flex items-center justify-center
            p-4 md:p-10
            "
          >

            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="
              relative
              w-full
              max-w-6xl
              "
            >

              {/* IMAGE */}

              <Image
                src={selectedImage}
                alt="Selected"
                width={1400}
                height={900}
                className="
                w-full
                h-[80vh]
                object-contain
                rounded-[32px]
                "
              />

              {/* TOP CONTROLS */}

              <div
                className="
                absolute top-5 right-5
                flex items-center gap-3
                "
              >

                <button
                  onClick={downloadImage}
                  className="
                  w-12 h-12
                  rounded-full
                  bg-white/10
                  hover:bg-white/20
                  backdrop-blur-md
                  border border-white/10
                  flex items-center justify-center
                  transition
                  "
                >

                  <Download className="w-5 h-5 text-white" />

                </button>

                <button
                  onClick={closeLightbox}
                  className="
                  w-12 h-12
                  rounded-full
                  bg-white/10
                  hover:bg-red-500
                  backdrop-blur-md
                  border border-white/10
                  flex items-center justify-center
                  transition
                  "
                >

                  <X className="w-5 h-5 text-white" />

                </button>

              </div>

              {/* PREV */}

              <button
                onClick={prevImage}
                className="
                absolute left-3 md:left-6
                top-1/2 -translate-y-1/2
                w-14 h-14
                rounded-full
                bg-white/10
                hover:bg-white/20
                backdrop-blur-md
                border border-white/10
                flex items-center justify-center
                transition
                "
              >

                <ChevronLeft className="w-7 h-7 text-white" />

              </button>

              {/* NEXT */}

              <button
                onClick={nextImage}
                className="
                absolute right-3 md:right-6
                top-1/2 -translate-y-1/2
                w-14 h-14
                rounded-full
                bg-white/10
                hover:bg-white/20
                backdrop-blur-md
                border border-white/10
                flex items-center justify-center
                transition
                "
              >

                <ChevronRight className="w-7 h-7 text-white" />

              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}