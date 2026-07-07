import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, searchParams, hostname } = request.nextUrl;

  // www → bare domain redirect
  if (hostname === "www.giftfor.love" || hostname === "www.giftfor.love.") {
    const url = request.nextUrl.clone();
    url.hostname = "giftfor.love";
    return NextResponse.redirect(url, 301);
  }

  // Block known bad bots
  const ua = request.headers.get("user-agent") || "";
  const blockedBots = [
    "AhrefsBot",
    "SemrushBot",
    "MJ12bot",
    "DotBot",
    "BLEXBot",
    "DataForSeoBot",
    "Bytespider",
    "Amazonbot",
    "ClaudeBot",
    "ImagesiftBot",
    "GPTBot",
    "CCBot",
  ];
  if (blockedBots.some((bot) => ua.includes(bot))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // 301 redirect old ?page=N query params to static /page/N URLs
  const pageParam = searchParams.get("page");
  if (pageParam) {
    const page = parseInt(pageParam, 10);
    if (isNaN(page) || page <= 1) {
      const url = request.nextUrl.clone();
      url.searchParams.delete("page");
      return NextResponse.redirect(url, 301);
    }
    if (page > 1) {
      const url = request.nextUrl.clone();
      url.searchParams.delete("page");
      url.pathname = `${pathname}/page/${page}`;
      return NextResponse.redirect(url, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon|sitemap|robots|public|assets).*)"],
};
