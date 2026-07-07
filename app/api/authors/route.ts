import { query, SITE } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const authors = await query("SELECT name, slug, img, description as bio FROM authors WHERE site = ? ORDER BY name", [SITE]);
    return NextResponse.json({ authors });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
