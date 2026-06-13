"use client";

export default function AdminTable({ data }: any) {
  const preview = data.slice(0, 10);

  return (
    <div className="bg-zinc-900 p-4 rounded-xl mt-6">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">
          Data Preview
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => exportCSV(data)}
            className="bg-green-600 px-3 py-1 rounded"
          >
            CSV
          </button>

          <button
            onClick={() => exportExcel(data)}
            className="bg-blue-600 px-3 py-1 rounded"
          >
            Excel
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto max-h-96">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-zinc-700">
              <th>Visitor ID</th>
              <th>Country</th>
              <th>City</th>
              <th>Name</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {preview.map((row: any, i: number) => (
              <tr key={i} className="border-b border-zinc-800">
                <td>{row.visitorId}</td>
                <td>{row.country}</td>
                <td>{row.city}</td>
                <td>{row.name}</td>
                <td>{row.message}</td>
                <td>{row.feedbackDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="text-right mt-2 text-xs text-gray-400">
        Showing {preview.length} of {data.length} rows
      </div>
    </div>
  );
}

// 📤 Export CSV
function exportCSV(data: any[]) {
  const rows = [
    Object.keys(data[0]).join(","),
    ...data.map((row) =>
      Object.values(row).join(",")
    ),
  ];

  const blob = new Blob([rows.join("\n")], {
    type: "text/csv",
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.csv";
  a.click();
}

// 📤 Export Excel
function exportExcel(data: any[]) {
  import("xlsx").then((XLSX) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");
    XLSX.writeFile(wb, "data.xlsx");
  });
}
