import { getArticlesByTypePaged } from "../../lib/db";
import { TYPE_SEO } from "../../lib/type-seo";
import { HEADER_HTML, FOOTER_HTML } from "../../lib/templates";

export const dynamic = "force-dynamic";
const PAGE_SIZE = 100;

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const VALID_TYPES = new Set(Object.keys(TYPE_SEO));

export async function GET(_req: Request, { params }: { params: Promise<{ type: string }> }) {
  try {
  const { type: rawType } = await params;
  if (!VALID_TYPES.has(rawType)) return new Response("Not Found", { status: 404 });
  const dbType = rawType.replace(/-/g, "");
  const url = new URL(_req.url);

  const { articles, total } = await getArticlesByTypePaged(dbType, 1, PAGE_SIZE);
  const totalPages = Math.ceil(total / PAGE_SIZE);

  const seo = (TYPE_SEO as Record<string, any>)[rawType];
  const title = seo?.title ?? rawType.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const desc = seo?.description ?? `Gift ideas for ${title}`;

  const header = HEADER_HTML.replace("{{TITLE}}", esc(title)).replace("{{DESCRIPTION}}", esc(desc)).replace("{{CANONICAL}}", url.origin + url.pathname).replace("{{OG_IMAGE}}", url.origin + "/og-image.jpg");

  let html = header + `<div class="category-page"><div class="category-header"><h1>${esc(title)}</h1><p>${esc(desc)}</p></div>`;

  if (articles.length === 0) {
    html += `<p style="text-align:center;color:var(--text-light);padding:60px 0;">No gift ideas yet — check back soon! 🎁</p>`;
  } else {
    html += `<div class="article-grid">`;
    for (const a of articles) {
      const t = esc(a.title ?? "Untitled");
      const slug = esc(a.short_title ?? "");
      const d = a.description ? esc(a.description) : "";
      const img = a.img ? `<img src="${esc(a.img)}" alt="${t}" loading="lazy" />` : "";
      html += `<article class="article-card"><a href="/${esc(rawType)}/${slug}">${img}<div class="article-card-body"><h2>${t}</h2>${d ? `<p>${d}</p>` : ""}<div class="article-card-meta">${a.author ? esc(a.author) + " · " : ""}${a.modified_time ? new Date(a.modified_time).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : ""}</div></div></a></article>`;
    }
    html += `</div>`;
    if (totalPages > 1) {
      html += `<nav class="pagination">`;
      html += `<span class="current">1</span>`;
      for (let i = 2; i <= totalPages; i++) html += `<a href="/${esc(rawType)}/page/${i}">${i}</a>`;
      html += `</nav>`;
    }
  }
  html += `</div>` + FOOTER_HTML;
  return new Response(html, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, s-maxage=3600" } });
  } catch (e: any) {
    return new Response(`Error: ${e.message}`, { status: 500 });
  }
}
