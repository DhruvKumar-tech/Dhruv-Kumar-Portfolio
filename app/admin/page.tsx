import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Table from "./Table";
import KPICards from "@/components/Admin/KPICards";
import VisitorsChart from "@/components/Admin/VisitorsChart";
import ExportButton from "@/components/Admin/ExportButton";

async function getAnalytics() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/admin-analytics`,
    {
      headers: {
        Authorization: `Bearer ${process.env.ADMIN_TOKEN}`,
      },
      cache: "no-store",
    }
  );

  return res.json();
}

async function getFeedback() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/admin-feedback`,
    {
      headers: {
        Authorization: `Bearer ${process.env.ADMIN_TOKEN}`,
      },
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  const cookieStore = await cookies();

  const admin = cookieStore.get("admin");

  if (admin?.value !== process.env.ADMIN_TOKEN) {
    redirect("/");
  }

  const data = await getAnalytics();
  const feedback = await getFeedback();
  const searchParamsData = await searchParams;

  const feedbackList = feedback?.feedback || [];
  const visitors = data?.recentVisitors || [];

  
  const totalCountries = new Set(
    visitors.map((v: any) => v.country)
  ).size;


  // 🔥 MERGE DATA
  const mergedData = visitors.map(
    (v: any) => ({
      visitorId: v.visitorId,
      country: v.country,
      city: v.city,
      visitedAt: v.visitedAt,
      feedbackMessage:
        v.feedback?.message || "-",
      feedbackName:
        v.feedback?.name || "-",
      feedbackDate:
        v.feedback?.createdAt || null,
    })
  );
  
  
  const chartMap = mergedData.reduce(
    (acc: any, row: any) => {
      const day =
        row.visitedAt?.slice(0, 10);

      if (!day) return acc;

      if (!acc[day]) {
        acc[day] = {
          date: day,
          visitors: 0,
        };
      }

      acc[day].visitors++;

      return acc;
    },
    {}
  );

  const chartData = (
    Object.values(chartMap) as {
      date: string;
      visitors: number;
    }[]
  ).sort(
    (a, b) =>
      new Date(a.date).getTime() -
      new Date(b.date).getTime()
  );

  // ✅ FILTER PARAMS
  const search =
    typeof searchParamsData?.search === "string"
      ? searchParamsData.search
      : "";

  const country =
    typeof searchParamsData?.country === "string"
      ? searchParamsData.country
      : "ALL";

  const from =
    typeof searchParamsData?.from === "string"
      ? searchParamsData.from
      : "";

  const to =
    typeof searchParamsData?.to === "string"
      ? searchParamsData.to
      : "";

  // ✅ FILTER LOGIC
  
  const filteredData = mergedData.filter((row: any) => {
    
    const matchesSearch = row.visitorId
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesCountry =
      country === "ALL" ? true : row.country === country;

    const visitDate = new Date(row.visitedAt).getTime();
    const fromDate = from ? new Date(from).getTime() : null;
    const toDate = to ? new Date(to).getTime() : null;

    const matchesDate =
      (!fromDate || visitDate >= fromDate) &&
      (!toDate || visitDate <= toDate);

    return matchesSearch && matchesCountry && matchesDate;
  });
  
  const countryOptions: string[] = Array.from(
    new Set<string>(
      visitors.map(
        (v: any): string =>
          String(v.country || "Unknown")
      )
    )
  ).sort();

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-semibold">Admin Dashboard</h1>

          <div className="flex gap-3">
            <form>
              <button className="px-3 py-2 rounded-lg bg-zinc-900">
                ↻
              </button>
            </form>

            <form action="/api/logout" method="GET">
              <button className="px-4 py-2 rounded-lg bg-red-600">
                Logout
              </button>
            </form>
          </div>
        </div>

        <KPICards
          visitors={data?.visitors || 0}
          uniqueVisitors={data?.uniqueVisitors || 0}
          feedbacks={feedbackList.length}
          countries={totalCountries}
        />

        

        {/* FILTER BAR */}
        <form className="mb-6 border border-zinc-800 px-4 py-3 rounded-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">

            {/* LEFT SIDE */}
            <div className="flex flex-wrap items-center gap-3">

              <input
                name="search"
                placeholder="Search visitor..."
                defaultValue={search}
                className="bg-black border border-zinc-700 px-3 py-2 rounded-lg text-sm"
              />

              <select
                name="country"
                defaultValue={country}
                className="bg-black border px-3 py-2 rounded-lg text-sm"
              >
                <option value="ALL">All Countries</option>

                {countryOptions.map((country) => (
                  <option
                    key={country}
                    value={country}
                  >
                    {country}
                  </option>
                ))}
              </select>

              <input
                type="date"
                name="from"
                defaultValue={from}
                className="bg-black border border-zinc-700 px-3 py-2 rounded-lg text-sm"
              />

              <input
                type="date"
                name="to"
                defaultValue={to}
                className="bg-black border border-zinc-700 px-3 py-2 rounded-lg text-sm"
              />

              <button
                className="
                  bg-white
                  text-black
                  px-4
                  py-2
                  rounded-lg
                  text-sm
                  font-medium
                  hover:opacity-90
                  transition
                "
              >
                Apply
              </button>

            </div>

            {/* RIGHT SIDE */}
            <ExportButton
              data={filteredData}
            />

          </div>
        </form>

        {/* PAGINATION */}
        {(() => {
          const page =
          typeof searchParamsData?.page === "string"
            ? Number(searchParamsData.page)
            : 1;
          const pageSize = 8;

          const total = filteredData.length;
          const totalPages = Math.ceil(total / pageSize);

          const paginatedData = filteredData.slice(
            (page - 1) * pageSize,
            page * pageSize
          );

          return (
            <>
              <Table data={paginatedData} />

              <div className="flex justify-between p-4 text-xs">
                <span>
                  Showing {(page - 1) * pageSize + 1}–
                  {Math.min(page * pageSize, total)} of {total}
                </span>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <a
                      key={i}
                      href={`?page=${i + 1}&search=${search}&country=${country}&from=${from}&to=${to}`}
                      className="px-3 py-1 bg-zinc-800 rounded"
                    >
                      {i + 1}
                    </a>
                  ))}
                </div>
              </div>
              <VisitorsChart
                data={chartData}
              />
            </>
          );
        })()}
      </div>
    </main>
  );
}