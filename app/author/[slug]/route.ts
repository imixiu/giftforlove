import { getAuthorBySlug, getAllAuthors, getAuthorArticles } from "../../../lib/db";
import { HEADER_HTML, FOOTER_HTML } from "../../../lib/templates";

export const dynamic = "force-dynamic";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const url = new URL(_req.url);

  // Team page
  if (slug === "team") {
    const authors = await getAllAuthors();
    const header = HEADER_HTML.replace("{{TITLE}}", "Our Team — GiftFor.Love").replace("{{DESCRIPTION}}", "Meet the gift experts behind GiftFor.Love").replace("{{CANONICAL}}", url.origin + "/author/team").replace("{{OG_IMAGE}}", url.origin + "/og-image.jpg");
    let html = header + `<div class="author-page"><h1 style="font-family:'Playfair Display',serif;font-size:2.2em;color:var(--brown);text-align:center;margin-bottom:40px;">Our Gift Experts</h1>`;
    if (authors.length === 0) {
      html += `<p style="text-align:center;color:var(--text-light);">Our team of gift curators will be introduced soon! 🎁</p>`;
    } else {
      html += `<div class="team-grid">`;
      for (const a of authors) {
        const img = a.img ? `<img src="${esc(a.img)}" alt="${esc(a.name)}" />` : "";
        html += `<div class="team-card"><a href="/author/${esc(a.slug)}">${img}<h3>${esc(a.name)}</h3>${a.bio ? `<p>${esc(a.bio)}</p>` : ""}</a></div>`;
      }
      html += `</div>`;
    }
    html += `</div>` + FOOTER_HTML;
    return new Response(html, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, s-maxage=3600" } });
  }

  // Individual author page
  const author = await getAuthorBySlug(slug);
  if (!author || (author as any).isTeam) return new Response("Not Found", { status: 404 });

  const a = author as any;
  const articles = await getAuthorArticles(a.name);
  const header = HEADER_HTML.replace("{{TITLE}}", esc(a.name) + " — GiftFor.Love").replace("{{DESCRIPTION}}", `Gift ideas curated by ${a.name}`).replace("{{CANONICAL}}", url.origin + "/author/" + esc(slug)).replace("{{OG_IMAGE}}", a.img || url.origin + "/og-image.jpg");

  let html = header + `<div class="author-page">`;
  html += `<div class="author-header">${a.img ? `<img class="author-avatar" src="${esc(a.img)}" alt="${esc(a.name)}" />` : ""}<div class="author-info"><h1>${esc(a.name)}</h1>${a.bio ? `<p>${esc(a.bio)}</p>` : ""}</div></div>`;

  if (articles.length > 0) {
    html += `<div class="article-grid">`;
    for (const art of articles) {
      const t = esc(art.title ?? "Untitled");
      const img = art.img ? `<img src="${esc(art.img)}" alt="${t}" loading="lazy" />` : "";
      html += `<article class="article-card"><a href="/${esc(art.type)}/${esc(art.short_title ?? "")}">${img}<div class="article-card-body"><h2>${t}</h2></div></a></article>`;
    }
    html += `</div>`;
  }
  html += `</div>` + FOOTER_HTML;
  return new Response(html, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, s-maxage=3600" } });
}
