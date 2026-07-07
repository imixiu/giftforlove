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
  <a href="/" class="logo">
    <span class="logo-icon">🎁</span>
    <span class="logo-text">GiftFor<span class="logo-accent">.Love</span></span>
  </a>
  <nav class="main-nav">
    <a href="/dad">For Him</a>
    <a href="/mom">For Her</a>
    <a href="/kids">For Kids</a>
    <a href="/colleagues">For Home</a>
    <a href="/birthday">Birthday</a>
    <a href="/anniversary">Anniversary</a>
    <a href="/holiday">Holiday</a>
    <a href="/author/team">Team</a>
  </nav>
  <button class="mobile-menu-toggle" aria-label="Toggle menu">☰</button>
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
        <li><a href="/dad">For Dad</a></li>
        <li><a href="/mom">For Mom</a></li>
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
  // Mobile menu toggle
  document.querySelector('.mobile-menu-toggle')?.addEventListener('click', function() {
    document.querySelector('.main-nav')?.classList.toggle('open');
  });
</script>
</body>
</html>`;
