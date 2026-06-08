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
    </main>
  );
}