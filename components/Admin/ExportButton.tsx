"use client";

import { useState, useRef, useEffect } from "react";
import * as XLSX from "xlsx";
import { Download, ChevronDown } from "lucide-react";

export default function ExportButton({
  data,
}: {
  data: any[];
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const exportExcel = () => {
    const worksheet =
      XLSX.utils.json_to_sheet(data);

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Visitors"
    );

    XLSX.writeFile(
      workbook,
      `visitors-${
        new Date().toISOString().split("T")[0]
      }.xlsx`
    );

    setOpen(false);
  };

  const exportCSV = () => {
    const worksheet =
      XLSX.utils.json_to_sheet(data);

    const csv =
      XLSX.utils.sheet_to_csv(
        worksheet
      );

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const link =
      document.createElement("a");

    link.href =
      URL.createObjectURL(blob);

    link.download =
      "visitors.csv";

    link.click();

    setOpen(false);
  };

  const exportJSON = () => {
    const blob = new Blob(
      [
        JSON.stringify(
          data,
          null,
          2
        ),
      ],
      {
        type: "application/json",
      }
    );

    const link =
      document.createElement("a");

    link.href =
      URL.createObjectURL(blob);

    link.download =
      "visitors.json";

    link.click();

    setOpen(false);
  };

  return (
    <div
      className="relative"
      ref={menuRef}
    >
      <button
        type="button"
        onClick={() =>
          setOpen(!open)
        }
        className="
          flex items-center gap-2
          min-w-[120px]
          justify-center
          px-4 py-2
          rounded-lg
          border border-zinc-700
          bg-zinc-900
          hover:bg-zinc-800
          transition-all
        "
      >
        <Download size={16} />
        Export
        <ChevronDown
          size={16}
        />
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            mt-2
            w-40
            rounded-xl
            border border-zinc-700
            bg-zinc-900
            shadow-xl
            overflow-hidden
            z-50
          "
        >
          <button
            onClick={exportExcel}
            className="w-full text-left px-4 py-3 hover:bg-zinc-800"
          >
            📊 Excel
          </button>

          <button
            onClick={exportCSV}
            className="w-full text-left px-4 py-3 hover:bg-zinc-800"
          >
            📄 CSV
          </button>

          <button
            onClick={exportJSON}
            className="w-full text-left px-4 py-3 hover:bg-zinc-800"
          >
            🔧 JSON
          </button>
        </div>
      )}
    </div>
  );
}