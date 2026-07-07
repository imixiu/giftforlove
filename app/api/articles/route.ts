import { query, SITE } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const type = url.searchParams.get("type");
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = parseInt(url.searchParams.get("limit") || "20", 10);
  const offset = (page - 1) * limit;

  try {
    let where = "site = ? AND is_online = 'Y'";
    const params: any[] = [SITE];
    if (type) { where += " AND type = ?"; params.push(type); }
    const articles = await query(
      `SELECT title, short_title, description, img, type, modified_time FROM articles WHERE ${where} ORDER BY modified_time DESC LIMIT ? OFFSET ?`,
      [...params, limit, offset]
    );
    return NextResponse.json({ articles });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
