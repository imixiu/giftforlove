const SHARED_CSS = `
:root {
  --cream: #FFF8F0;
  --cream-dark: #F5EDE3;
  --gold: #D4A853;
  --gold-light: #E8C97A;
  --rose: #E8B4B8;
  --rose-dark: #C4868B;
  --sage: #9CAF88;
  --sage-dark: #7A9068;
  --brown: #2D1B0E;
  --brown-light: #5C3D2E;
  --text: #3A2A1A;
  --text-light: #7A6A5A;
  --heading-font: 'Playfair Display', Georgia, serif;
  --body-font: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--body-font);
  color: var(--text);
  background: var(--cream);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
a { color: var(--rose-dark); text-decoration: none; transition: color 0.2s; }
a:hover { color: var(--gold); }
img { max-width: 100%; height: auto; }

/* ===== HEADER ===== */
.site-header {
  position: sticky; top: 0; z-index: 100;
  background: rgba(255,248,240,0.95); backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(212,168,83,0.15);
  padding: 0 24px;
}
.site-header .inner-wrap {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: 68px;
}
.logo {
  display: flex; align-items: center; gap: 10px;
  text-decoration: none; color: var(--brown);
  font-family: var(--heading-font); font-weight: 700; font-size: 1.25em;
}
.logo-icon { font-size: 1.5em; }
.logo-accent { color: var(--gold); }
.main-nav {
  display: flex; align-items: center; gap: 28px;
}
.main-nav a {
  color: var(--brown-light); font-size: 0.88em; font-weight: 500;
  text-decoration: none; letter-spacing: 0.3px;
  padding: 4px 0; position: relative; transition: color 0.2s;
}
.main-nav a::after {
  content: ''; position: absolute; bottom: -2px; left: 0;
  width: 0; height: 2px; background: var(--gold);
  transition: width 0.3s ease;
}
.main-nav a:hover { color: var(--brown); }
.main-nav a:hover::after { width: 100%; }
.mobile-menu-toggle {
  display: none; background: none; border: none;
  font-size: 1.5em; cursor: pointer; color: var(--brown);
}
@media (max-width: 900px) {
  .main-nav {
    display: none; position: fixed; top: 68px; left: 0; right: 0;
    background: var(--cream); flex-direction: column; gap: 0;
    padding: 16px 0; border-bottom: 2px solid var(--gold);
    box-shadow: 0 8px 24px rgba(45,27,14,0.1);
  }
  .main-nav.open { display: flex; }
  .main-nav a { padding: 14px 24px; font-size: 1em; width: 100%; }
  .main-nav a::after { display: none; }
  .mobile-menu-toggle { display: block; }
}

/* ===== FOOTER ===== */
.site-footer {
  background: var(--brown); color: rgba(255,248,240,0.7);
  padding: 60px 24px 0; margin-top: 80px;
}
.footer-inner {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px;
  padding-bottom: 40px;
}
.footer-brand .footer-logo {
  font-family: var(--heading-font); font-size: 1.3em;
  color: #fff; font-weight: 700; display: block; margin-bottom: 12px;
}
.footer-brand p { font-size: 0.9em; line-height: 1.6; max-width: 280px; }
.footer-nav h4 {
  color: var(--gold); font-family: var(--heading-font);
  font-size: 0.95em; font-weight: 600; margin-bottom: 16px;
  letter-spacing: 0.5px;
}
.footer-nav ul { list-style: none; }
.footer-nav li { margin-bottom: 10px; }
.footer-nav a {
  color: rgba(255,248,240,0.6); font-size: 0.88em;
  text-decoration: none; transition: color 0.2s;
}
.footer-nav a:hover { color: var(--gold); }
.footer-bottom {
  border-top: 1px solid rgba(255,248,240,0.1);
  padding: 20px 0; text-align: center;
}
.footer-bottom p { font-size: 0.82em; color: rgba(255,248,240,0.4); }
@media (max-width: 768px) {
  .footer-inner { grid-template-columns: 1fr 1fr; gap: 32px; }
  .footer-brand { grid-column: 1 / -1; }
}
@media (max-width: 480px) {
  .footer-inner { grid-template-columns: 1fr; }
}
`;

export const HEADER_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{TITLE}}</title>
  <meta name="description" content="{{DESCRIPTION}}">
  <link rel="canonical" href="{{CANONICAL}}">
  <meta property="og:title" content="{{TITLE}}">
  <meta property="og:description" content="{{DESCRIPTION}}">
  <meta property="og:url" content="{{CANONICAL}}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="{{OG_IMAGE}}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{{TITLE}}">
  <meta name="twitter:description" content="{{DESCRIPTION}}">
  <meta name="msvalidate.01" content="B2BF310818F98A9F551F76360C83DC37">
  <meta name="google-site-verification" content="sUsfvBNKH1wpjArOTu37MDgr1FSYI4R1-UBbOv4tmZA">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
  <style>${SHARED_CSS}</style>
  <link rel="stylesheet" href="/article.css">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-95PY8PSZ0Y"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-95PY8PSZ0Y');
  </script>
</head>
<body>
<header class="site-header">
  <div class="inner-wrap">
    <a href="/" class="logo">
      <span class="logo-icon">🎁</span>
      <span class="logo-text">GiftFor<span class="logo-accent">.Love</span></span>
    </a>
    <nav class="main-nav">
      <a href="/forhim">For Him</a>
      <a href="/forher">For Her</a>
      <a href="/partner">For Partner</a>
      <a href="/kids">For Kids</a>
      <a href="/friends">For Friends</a>
      <a href="/birthday">Birthday</a>
      <a href="/anniversary">Anniversary</a>
      <a href="/holiday">Holiday</a>
    </nav>
    <button class="mobile-menu-toggle" aria-label="Toggle menu">☰</button>
  </div>
</header>
<main>`;

export const FOOTER_HTML = `</main>
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <span class="footer-logo">🎁 GiftFor.Love</span>
      <p>Curated gift ideas for every occasion and every person you love. Making the art of gift-giving effortless and meaningful.</p>
    </div>
    <nav class="footer-nav">
      <h4>Gift By Person</h4>
      <ul>
        <li><a href="/forhim">For Him</a></li>
        <li><a href="/forher">For Her</a></li>
        <li><a href="/partner">For Partner</a></li>
        <li><a href="/kids">For Kids</a></li>
        <li><a href="/friends">For Friends</a></li>
        <li><a href="/colleagues">For Colleagues</a></li>
      </ul>
    </nav>
    <nav class="footer-nav">
      <h4>Gift By Occasion</h4>
      <ul>
        <li><a href="/birthday">Birthday</a></li>
        <li><a href="/anniversary">Anniversary</a></li>
        <li><a href="/holiday">Holiday</a></li>
        <li><a href="/wedding">Wedding</a></li>
      </ul>
    </nav>
    <nav class="footer-nav">
      <h4>About</h4>
      <ul>
        <li><a href="/author/team">Our Team</a></li>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2026 GiftFor.Love — Curated with ❤️ for thoughtful gift-givers everywhere.</p>
  </div>
</footer>
<script>
  document.querySelector('.mobile-menu-toggle')?.addEventListener('click', function() {
    document.querySelector('.main-nav')?.classList.toggle('open');
  });
</script>
</body>
</html>`;
