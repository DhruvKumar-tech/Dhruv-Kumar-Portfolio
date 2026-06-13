import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin");

    if (!token) {
      return NextResponse.json({ isAdmin: false });
    }

    if (token.value === process.env.ADMIN_TOKEN) {
      return NextResponse.json({ isAdmin: true });
    }

    return NextResponse.json({ isAdmin: false });
  } catch (error) {
    console.error("Check admin error:", error);
    return NextResponse.json({ isAdmin: false }, { status: 500 });
  }
}