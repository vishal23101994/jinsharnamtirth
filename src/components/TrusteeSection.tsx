"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Download } from "lucide-react";
import * as XLSX from "xlsx";

type Trustee = {
  NAME?: string;
  DESIGNATION?: string;
  ADDRESS?: string;
  MOBILE?: string;
};

export default function TrusteeCommitteeSection() {

  const [trustees, setTrustees] = useState<Trustee[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  useEffect(() => {
    fetch("/api/trustees")
      .then((res) => res.json())
      .then((data) => setTrustees(data))
      .catch((err) => console.error("Error loading trustees:", err));
  }, []);

  const totalPages = Math.ceil(trustees.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = trustees.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleExportToExcel = () => {

    if (!trustees.length) return;

    const exportData = trustees.map((t, index) => ({
      "S.No": index + 1,
      Name: t.NAME || "",
      Designation: t.DESIGNATION || "",
      Address: t.ADDRESS || "",
      Mobile: t.MOBILE || "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Trustee Committee"
    );

    XLSX.writeFile(workbook, "Trustee_Committee.xlsx");
  };

  return (

    <section className="relative py-24 bg-gradient-to-b from-[#FFF8E7] via-[#FFFDF7] to-[#FFF3D6] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,190,80,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="
            inline-flex items-center gap-2
            px-5 py-2 rounded-full
            bg-white/80
            border border-amber-200
            text-[#8A5A00]
            text-xs tracking-[0.25em]
            uppercase
            shadow-sm
          ">
            <Users size={16} />
            Trustee Committee
          </span>

          <h2 className="
            mt-6
            text-4xl sm:text-5xl md:text-6xl
            font-serif
            text-[#4B1E00]
          ">
            Our Trustees
          </h2>

          <p className="
            mt-5
            max-w-3xl mx-auto
            text-[#7A5A20]
            text-base sm:text-lg
            leading-8
          ">
            Dedicated individuals serving Jinsharnam Tirth
            with devotion, discipline, and spiritual vision.
          </p>

        </motion.div>

        {/* EXPORT BUTTON */}
        <div className="flex justify-center mb-10">

          <button
            onClick={handleExportToExcel}
            className="
              inline-flex items-center gap-2
              px-6 py-3 rounded-full
              bg-gradient-to-r from-amber-500 to-yellow-400
              text-[#4B1E00]
              font-semibold
              shadow-[0_10px_30px_rgba(255,180,50,0.25)]
              hover:scale-105
              transition-all duration-300
            "
          >
            <Download size={18} />
            Export Trustee List
          </button>

        </div>

        {/* TABLE */}
        <div className="
          overflow-x-auto
          rounded-[30px]
          border border-amber-200/60
          bg-white/70
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        ">

          <table className="min-w-full text-sm text-[#4B1E00]">

            <thead className="
              bg-gradient-to-r
              from-[#FFE8B5]
              to-[#FFF5DA]
            ">

              <tr>

                <th className="px-5 py-4 text-left font-semibold">
                  S.No
                </th>

                <th className="px-5 py-4 text-left font-semibold">
                  Name
                </th>

                <th className="px-5 py-4 text-left font-semibold">
                  Designation
                </th>

                <th className="px-5 py-4 text-left font-semibold">
                  Address
                </th>

                <th className="px-5 py-4 text-left font-semibold">
                  Mobile
                </th>

              </tr>

            </thead>

            <tbody>

              {currentItems.map((t, i) => (

                <tr
                  key={i}
                  className={`
                    border-t border-amber-100
                    hover:bg-amber-50/60
                    transition-all
                    ${i % 2 === 0 ? "bg-white/60" : "bg-[#FFF9ED]"}
                  `}
                >

                  <td className="px-5 py-4">
                    {startIndex + i + 1}
                  </td>

                  <td className="px-5 py-4 font-medium whitespace-nowrap">
                    {t.NAME || "-"}
                  </td>

                  <td className="px-5 py-4">
                    {t.DESIGNATION || "-"}
                  </td>

                  <td className="px-5 py-4 min-w-[240px]">
                    {t.ADDRESS || "-"}
                  </td>

                  <td className="px-5 py-4 whitespace-nowrap">
                    {t.MOBILE || "-"}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (

          <div className="flex justify-center items-center gap-4 mt-10">

            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="
                px-5 py-2 rounded-full
                bg-[#4B1E00]
                text-white
                hover:bg-amber-600
                transition
                disabled:opacity-40
              "
            >
              Previous
            </button>

            <div className="text-[#7A5A20] font-medium">
              Page {currentPage} of {totalPages}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="
                px-5 py-2 rounded-full
                bg-[#4B1E00]
                text-white
                hover:bg-amber-600
                transition
                disabled:opacity-40
              "
            >
              Next
            </button>

          </div>

        )}

      </div>

    </section>
  );
}