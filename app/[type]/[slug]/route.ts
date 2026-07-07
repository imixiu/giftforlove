import { getArticleBySlug, getRelatedArticles } from "../../../lib/db";
import { HEADER_HTML, FOOTER_HTML } from "../../../lib/templates";

export const dynamic = "force-dynamic";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function GET(_req: Request, { params }: { params: Promise<{ type: string; slug: string }> }) {
  const { type: rawType, slug } = await params;
  const url = new URL(_req.url);
  const article = await getArticleBySlug(slug);
  if (!article) return new Response("Not Found", { status: 404 });

  const title = article.title ?? "Untitled";
  const desc = article.description ?? title;
  const canonical = url.origin + "/" + esc(rawType) + "/" + esc(slug);
  const ogImage = article.img || url.origin + "/og-image.jpg";

  const header = HEADER_HTML
    .replace("{{TITLE}}", esc(title))
    .replace("{{DESCRIPTION}}", esc(desc))
    .replace("{{CANONICAL}}", canonical)
    .replace("{{OG_IMAGE}}", ogImage);

  // Build article body
  const body = article.body ?? "";
  // Extract h2 headings for TOC
  const headings: string[] = [];
  const bodyWithIds = body.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (_m: string, attrs: string, text: string) => {
    const id = text.replace(/<[^>]*>/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    headings.push(text.replace(/<[^>]*>/g, ""));
    return `<h2 id="${id}"${attrs}>${text}</h2>`;
  });

  const typeName = rawType.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const date = article.modified_time ? new Date(article.modified_time).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "";

  let tocHtml = "";
  if (headings.length > 2) {
    tocHtml = `<div class="article-toc"><h4>In This Article</h4><ul>${headings.map(h => {
      const id = h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      return `<li><a href="#${id}">${esc(h)}</a></li>`;
    }).join("")}</ul></div>`;
  }

  const heroImg = article.img ? `<img class="article-hero" src="${esc(article.img)}" alt="${esc(title)}" />` : "";
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: desc,
    image: article.img,
    dateModified: article.modified_time,
    author: article.author ? { "@type": "Person", name: article.author } : undefined,
    publisher: { "@type": "Organization", name: "GiftFor.Love", url: "https://giftfor.love" }
  });

  let html = header;
  html += `<div class="article-page">`;
  html += `<nav class="breadcrumb"><a href="/">Home</a><span>›</span><a href="/${esc(rawType)}">${esc(typeName)}</a><span>›</span><span>${esc(title)}</span></nav>`;
  html += `<h1>${esc(title)}</h1>`;
  html += `<div class="article-meta">${article.author ? `By <a href="/author/${esc(article.author_slug ?? "")}">${esc(article.author)}</a>` : ""}${date ? ` · ${date}` : ""}</div>`;
  html += heroImg;
  html += tocHtml;
  html += `<div class="article-body">${bodyWithIds}</div>`;

  // Related articles
  const related = await getRelatedArticles(rawType.replace(/-/g, ""), slug, 4);
  if (related.length > 0) {
    html += `<div class="related-articles"><h3>More Gift Ideas</h3><div class="related-grid">`;
    for (const r of related) {
      const rt = esc(r.title ?? "");
      const rimg = r.img ? `<img src="${esc(r.img)}" alt="${rt}" loading="lazy" />` : "";
      html += `<a href="/${esc(r.type)}/${esc(r.short_title ?? "")}" class="related-card">${rimg}<div class="related-card-body"><div class="related-card-title">${rt}</div></div></a>`;
    }
    html += `</div></div>`;
  }

  html += `</div>`;
  html += `<script type="application/ld+json">${jsonLd}</script>`;
  html += FOOTER_HTML;

  return new Response(html, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, s-maxage=3600" } });
}
