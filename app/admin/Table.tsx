"use client";
import { useState } from "react";

type SortKey =
  | "visitorId"
  | "country"
  | "city"
  | "visitedAt"
  | "feedbackMessage"
  | "feedbackName"
  | "feedbackDate";

export default function Table({ data }: { data: any[] }) {
  const [sortKey, setSortKey] = useState<SortKey>("visitedAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  // ✅ SAFE DATE FORMAT (NO HYDRATION ISSUE)
  const formatDate = (date: string | null) => {
    if (!date) return "-";
    return new Date(date)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
  };

  // ✅ SORT LOGIC (ROBUST)
  const sortedData = [...data].sort((a, b) => {
    let valA = a[sortKey];
    let valB = b[sortKey];

    // handle nulls
    if (!valA) return 1;
    if (!valB) return -1;

    // handle dates
    if (sortKey === "visitedAt" || sortKey === "feedbackDate") {
      valA = new Date(valA).getTime();
      valB = new Date(valB).getTime();
    }

    // handle strings
    if (typeof valA === "string") valA = valA.toLowerCase();
    if (typeof valB === "string") valB = valB.toLowerCase();

    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;

    return 0;
  });

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <span className="opacity-40">↕</span>;
    return sortOrder === "asc" ? "↑" : "↓";
  };

  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden shadow-lg">

      <table className="w-full text-sm">
        {/* HEADER */}
        <thead className="bg-zinc-800/80 text-zinc-300 text-xs uppercase tracking-wide">
          <tr>
            {[
              ["visitorId", "Visitor"],
              ["country", "Country"],
              ["city", "City"],
              ["visitedAt", "Visit"],
              ["feedbackMessage", "Feedback"],
              ["feedbackName", "User"],
              ["feedbackDate", "Date"],
            ].map(([key, label]) => (
              <th
                key={key}
                onClick={() => handleSort(key as SortKey)}
                className="p-3 cursor-pointer select-none hover:text-white transition"
              >
                {label} <SortIcon col={key as SortKey} />
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {sortedData.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="text-center p-6 text-zinc-500"
              >
                No data found
              </td>
            </tr>
          ) : (
            sortedData.map((row, i) => (
              <tr
                key={i}
                className="border-t border-zinc-800 hover:bg-zinc-800/40 transition"
              >
                <td className="p-3">{row.visitorId || "-"}</td>
                <td className="p-3">{row.country || "-"}</td>
                <td className="p-3">
                  {decodeURIComponent(row.city || "") || "-"}
                </td>

                {/* ✅ FIXED DATE */}
                <td className="p-3">
                  {formatDate(row.visitedAt)}
                </td>

                <td className="p-3 truncate max-w-[200px]">
                  {row.feedbackMessage || "-"}
                </td>

                <td className="p-3">
                  {row.feedbackName || "-"}
                </td>

                {/* ✅ FIXED DATE */}
                <td className="p-3">
                  {formatDate(row.feedbackDate)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}