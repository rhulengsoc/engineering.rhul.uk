import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { commitNewFile } from "@/lib/github";

const DATA_URL_PATTERN = /^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)$/;
// ~2MB of binary data once base64-decoded
const MAX_BASE64_LENGTH = 2.8 * 1024 * 1024;

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const isAuthenticated = await verifySessionToken(token);
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  let body: { dataUrl?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const match = typeof body.dataUrl === "string" ? body.dataUrl.match(DATA_URL_PATTERN) : null;
  if (!match) {
    return NextResponse.json(
      { error: "Expected a JPEG, PNG, or WebP image data URL" },
      { status: 400 }
    );
  }

  const [, format, base64] = match;
  if (base64.length > MAX_BASE64_LENGTH) {
    return NextResponse.json(
      { error: "Image too large — please use an image under 2MB" },
      { status: 413 }
    );
  }

  const ext = format === "jpeg" ? "jpg" : format;
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const repoPath = `public/uploads/${filename}`;

  try {
    await commitNewFile(repoPath, base64, "Upload committee photo via admin panel");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ path: `/uploads/${filename}` });
}
