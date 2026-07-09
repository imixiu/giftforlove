const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

const MYSQL_URL = 'mysql://seo_site_db_account:icbuseo%401234@rm-0xi0gf1e337s71g2a5o.rwlb.rds-aliyun-america.rds.aliyuncs.com:3306/seo-site-db';
const SITE = 'giftforlove';
const BASE_URL = 'https://giftfor.love';
const ITEMS_PER_SITEMAP = 5000;

function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function main() {
  const u = new URL(MYSQL_URL);
  const conn = await mysql.createConnection({
    host: u.hostname,
    port: parseInt(u.port || '3306'),
    user: decodeURIComponent(u.username),
    password: decodeURIComponent(u.password),
    database: u.pathname.replace(/^\//, ''),
    connectTimeout: 10000,
  });

  const today = new Date().toISOString().split('T')[0];
  const outDir = path.join(process.cwd(), 'public', 'sitemap');
  fs.mkdirSync(outDir, { recursive: true });

  // Get total count
  const [countRows] = await conn.query(
    "SELECT COUNT(*) as total FROM articles WHERE site = ? AND is_online = 'Y'",
    [SITE]
  );
  const total = Number(countRows[0].total);
  const numSitemaps = Math.max(1, Math.ceil(total / ITEMS_PER_SITEMAP));
  console.log(`Total articles: ${total}, sitemaps needed: ${numSitemaps}`);

  // Get authors
  const [authors] = await conn.query(
    "SELECT slug FROM authors WHERE site = ?",
    [SITE]
  );
  console.log(`Authors: ${authors.length}`);

  // Get all articles ordered by id
  const [articles] = await conn.query(
    "SELECT short_title, type, modified_time FROM articles WHERE site = ? AND is_online = 'Y' ORDER BY id ASC",
    [SITE]
  );

  // Generate each sitemap file
  for (let i = 0; i < numSitemaps; i++) {
    const sitemapNum = i + 1;
    const offset = i * ITEMS_PER_SITEMAP;
    const chunk = articles.slice(offset, offset + ITEMS_PER_SITEMAP);
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // First sitemap includes homepage + authors
    if (i === 0) {
      xml += `<url><loc>${BASE_URL}/</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq></url>\n`;
      for (const a of authors) {
        xml += `<url><loc>${BASE_URL}/author/${escapeXml(a.slug)}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq></url>\n`;
      }
    }

    for (const art of chunk) {
      const modDate = art.modified_time
        ? new Date(String(art.modified_time)).toISOString().split('T')[0]
        : today;
      const type = escapeXml(String(art.type));
      const slug = encodeURIComponent(String(art.short_title));
      xml += `<url><loc>${BASE_URL}/${type}/${slug}</loc><lastmod>${modDate}</lastmod></url>\n`;
    }

    xml += `</urlset>`;

    const filePath = path.join(outDir, `sitemap${sitemapNum}.xml`);
    fs.writeFileSync(filePath, xml);
    const urlCount = (xml.match(/<url>/g) || []).length;
    console.log(`  sitemap${sitemapNum}.xml: ${urlCount} URLs (${(fs.statSync(filePath).size / 1024).toFixed(0)} KB)`);
  }

  // Generate sitemapindex.xml
  let index = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (let i = 1; i <= numSitemaps; i++) {
    index += `<sitemap><loc>${BASE_URL}/sitemap/sitemap${i}.xml</loc><lastmod>${today}</lastmod></sitemap>\n`;
  }
  index += `</sitemapindex>`;

  fs.writeFileSync(path.join(outDir, 'sitemapindex.xml'), index);
  console.log(`  sitemapindex.xml: ${numSitemaps} sitemaps`);

  // Clean up old sitemap files that are no longer needed
  const files = fs.readdirSync(outDir);
  for (const f of files) {
    const match = f.match(/^sitemap(\d+)\.xml$/);
    if (match) {
      const num = parseInt(match[1]);
      if (num > numSitemaps) {
        fs.unlinkSync(path.join(outDir, f));
        console.log(`  Deleted old: ${f}`);
      }
    }
  }

  await conn.end();
  console.log('\nDone!');
}

main().catch(e => { console.error(e); process.exit(1); });
