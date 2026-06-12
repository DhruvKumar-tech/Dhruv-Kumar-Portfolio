import { redirect } from "next/navigation";
import { cookies } from "next/headers";


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

export default async function AdminPage() {

  const cookieStore = await cookies();

  const admin =
    cookieStore.get("admin");

  if (
    admin?.value !==
    process.env.ADMIN_TOKEN
  ) {
    redirect("/");
  }
  
  const data = await getAnalytics();
  const feedback = await getFeedback();

  console.log("Analytics:", data);
  console.log("Feedback:", feedback);

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Admin Dashboard
      </h1>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl bg-zinc-900 p-6">
          <h2>Unique Visitors</h2>
          <p className="text-3xl font-bold">
            {data.uniqueVisitors}
          </p>
        </div>

        <div className="rounded-xl bg-zinc-900 p-6">
          <h2>Total Visits</h2>
          <p className="text-3xl font-bold">
            {data.visitors}
          </p>
        </div>

        <div className="rounded-xl bg-zinc-900 p-6">
          <h2>Resume Views</h2>
          <p className="text-3xl font-bold">
            {data.resumeViews}
          </p>
        </div>

        <div className="rounded-xl bg-zinc-900 p-6">
          <h2>Project Clicks</h2>
          <p className="text-3xl font-bold">
            {data.projectClicks}
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          className="rounded bg-green-600 px-4 py-2"
        >
          Export Visitors CSV
        </button>

        <button
          className="rounded bg-blue-600 px-4 py-2"
        >
          Export Feedback CSV
        </button>
      </div>
      
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section>
          <h2 className="mb-4 text-2xl font-bold">
            💬 Feedback
          </h2>
        

          <div className="h-[350px] overflow-auto rounded-xl bg-zinc-900">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="p-3 text-left">
                      Name
                    </th>

                    <th className="p-3 text-left">
                      Message
                    </th>

                    <th className="p-3 text-left">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {feedback.feedback?.map(
                    (
                      item: any,
                      index: number
                    ) => (
                      <tr
                        key={index}
                        className="border-b border-zinc-800"
                      >
                        <td className="p-3">
                          {item.name}
                        </td>

                        <td className="p-3">
                          {item.message}
                        </td>

                        <td className="p-3">
                          {new Date(
                            item.createdAt
                          ).toLocaleString()}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>  
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold">
            🌍 Recent Visitors
          </h2>

          <div className="h-[350px] overflow-auto rounded-xl bg-zinc-900">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="p-3 text-left">
                    Visitor ID
                  </th>

                  <th className="p-3 text-left">
                    Country
                  </th>

                  <th className="p-3 text-left">
                    City
                  </th>

                  <th className="p-3 text-left">
                    Visit Time
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.recentVisitors?.map(
                  (
                    visitor: any,
                    index: number
                  ) => (
                    <tr
                      key={index}
                      className="border-b border-zinc-800"
                    >
                      <td className="p-3">
                        {visitor.visitorId}
                      </td>

                      <td className="p-3">
                        {visitor.country}
                      </td>

                      <td className="p-3">
                        {visitor.city}
                      </td>

                      <td className="p-3">
                        {new Date(
                          visitor.visitedAt
                        ).toLocaleString()}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}