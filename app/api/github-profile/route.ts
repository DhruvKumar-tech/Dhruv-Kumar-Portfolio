export async function GET() {
  const response = await fetch(
    "https://api.github.com/users/DhruvKumar-tech",
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const data = await response.json();

  return Response.json({
    repos: data.public_repos,
    followers: data.followers,
    following: data.following,
    createdAt: data.created_at,
  });
}