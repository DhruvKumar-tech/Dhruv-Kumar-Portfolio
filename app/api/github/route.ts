export async function GET() {
  const response = await fetch(
    "https://api.github.com/users/DhruvKumar-tech/repos",
    {
      next: { revalidate: 3600 },
    }
  );

  const repos = await response.json();
    const latestRepos = repos
      .filter(
        (repo: any) =>
          !repo.name.toLowerCase().includes("portfolio")
      )
      .sort(
        (a: any, b: any) =>
          new Date(b.updated_at).getTime() -
          new Date(a.updated_at).getTime()
      );

  return Response.json(latestRepos);
}