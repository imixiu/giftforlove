import * as mysql from "mysql2/promise";
import { tairGet } from "./tair";

export const SITE = "giftforlove";
export const BASE_URL = "https://giftfor.love";
const PAGE_SIZE = 100;

function getConnectionConfig() {
  const url = process.env.MYSQL_URL;
  if (!url) throw new Error("MYSQL_URL is not set");
  const u = new URL(url);
  return {
    host: u.hostname,
    port: parseInt(u.port || "3306"),
    user: decodeURIComponent(u.username),
    password: decodeURIComponent(u.password),
    database: u.pathname.replace(/^\//, ""),
    connectTimeout: 10000,
    disableEval: true,
  };
}

export async function query(text: string, params: unknown[] = []) {
  const conn = await mysql.createConnection(getConnectionConfig());
  try {
    const [rows] = await conn.query(text, params);
    if (Array.isArray(rows)) return rows.map((row: any) => ({ ...row }));
    return [rows];
  } finally {
    await conn.end();
  }
}

export async function getArticlesByTypePaged(type: string, page: number, pageSize: number = PAGE_SIZE) {
  const offset = (page - 1) * pageSize;
  const cacheKey = `${SITE}:article:list:${type}:${page}`;
  const cached = await tairGet(cacheKey);
  if (cached) return JSON.parse(cached);

  const [countResult] = await query(
    "SELECT COUNT(*) as cnt FROM articles WHERE site = ? AND type = ? AND is_online = 'Y'",
    [SITE, type]
  );
  const total = (countResult as any).cnt || 0;

  const articles = await query(
    `SELECT title, short_title, description, img, type, modified_time, author
     FROM articles
     WHERE site = ? AND type = ? AND is_online = 'Y'
     ORDER BY modified_time DESC
     LIMIT ? OFFSET ?`,
    [SITE, type, pageSize, offset]
  );

  return { articles, total };
}

export async function getArticleBySlug(slug: string) {
  const cacheKey = `${SITE}:article:detail:${slug}`;
  const cached = await tairGet(cacheKey);
  if (cached) return JSON.parse(cached);

  const rows = await query(
    `SELECT a.*, au.name as author_name, au.slug as author_slug, au.img as author_img, au.description as author_bio
     FROM articles a
     LEFT JOIN authors au ON a.author = au.name AND au.site = a.site
     WHERE a.site = ? AND a.short_title = ? AND a.is_online = 'Y'
     LIMIT 1`,
    [SITE, slug]
  );
  return rows.length > 0 ? rows[0] : null;
}

export async function getRelatedArticles(type: string, slug: string, limit: number = 4) {
  return await query(
    `SELECT title, short_title, description, img, type
     FROM articles
     WHERE site = ? AND type = ? AND short_title != ? AND is_online = 'Y'
     ORDER BY modified_time DESC
     LIMIT ?`,
    [SITE, type, slug, limit]
  );
}

export async function getAuthorBySlug(slug: string) {
  if (slug === "team") return { isTeam: true };
  const rows = await query("SELECT * FROM authors WHERE site = ? AND slug = ? LIMIT 1", [SITE, slug]);
  return rows.length > 0 ? rows[0] : null;
}

export async function getAllAuthors() {
  return await query("SELECT * FROM authors WHERE site = ? ORDER BY name", [SITE]);
}

export async function getAllTypes() {
  return await query(
    "SELECT type, COUNT(*) as cnt FROM articles WHERE site = ? AND is_online = 'Y' GROUP BY type ORDER BY cnt DESC",
    [SITE]
  );
}

export async function getAuthorArticles(authorName: string) {
  return await query(
    `SELECT title, short_title, description, img, type, modified_time
     FROM articles
     WHERE site = ? AND author = ? AND is_online = 'Y'
     ORDER BY modified_time DESC`,
    [SITE, authorName]
  );
}
