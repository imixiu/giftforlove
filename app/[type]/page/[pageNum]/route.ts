import { getArticlesByTypePaged } from "../../../../lib/db";
import { TYPE_SEO } from "../../../../lib/type-seo";
import { HEADER_HTML, FOOTER_HTML } from "../../../../lib/templates";

export const dynamic = "force-dynamic";
const PAGE_SIZE = 100;

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function GET(_req: Request, { params }: { params: Promise<{ type: string; pageNum: string }> }) {
  const { type: rawType, pageNum } = await params;
  const page = parseInt(pageNum, 10);
  if (isNaN(page) || page < 2) return new Response("Not Found", { status: 404 });

  const dbType = rawType.replace(/-/g, "");
  const url = new URL(_req.url);
  const { articles, total } = await getArticlesByTypePaged(dbType, page, PAGE_SIZE);
  const totalPages = Math.ceil(total / PAGE_SIZE);
  if (page > totalPages) return new Response("Not Found", { status: 404 });

  const seo = (TYPE_SEO as Record<string, any>)[rawType];
  const title = `${seo?.title ?? rawType} — Page ${page}`;
  const desc = seo?.description ?? `Gift ideas page ${page}`;

  const header = HEADER_HTML.replace("{{TITLE}}", esc(title)).replace("{{DESCRIPTION}}", esc(desc)).replace("{{CANONICAL}}", url.origin + url.pathname).replace("{{OG_IMAGE}}", url.origin + "/og-image.jpg");

  let html = header + `<div class="category-page"><div class="category-header"><h1>${esc(seo?.title ?? rawType)}</h1><p>Page ${page} of ${totalPages}</p></div>`;
  if (articles.length > 0) {
    html += `<div class="article-grid">`;
    for (const a of articles) {
      const t = esc(a.title ?? "Untitled");
      const slug = esc(a.short_title ?? "");
      const d = a.description ? esc(a.description) : "";
      const img = a.img ? `<img src="${esc(a.img)}" alt="${t}" loading="lazy" />` : "";
      html += `<article class="article-card"><a href="/${esc(rawType)}/${slug}">${img}<div class="article-card-body"><h2>${t}</h2>${d ? `<p>${d}</p>` : ""}</div></a></article>`;
    }
    html += `</div>`;
    html += `<nav class="pagination">`;
    if (page > 1) html += `<a href="/${esc(rawType)}/page/${page - 1}">← Prev</a>`;
    for (let i = 1; i <= totalPages; i++) {
      html += i === page ? `<span class="current">${i}</span>` : `<a href="/${esc(rawType)}/page/${i}">${i}</a>`;
    }
    if (page < totalPages) html += `<a href="/${esc(rawType)}/page/${page + 1}">Next →</a>`;
    html += `</nav>`;
  }
  html += `</div>` + FOOTER_HTML;
  return new Response(html, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, s-maxage=3600" } });
}
