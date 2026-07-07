export const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GiftFor.Love — Find the Perfect Gift for Everyone</title>
  <meta name="description" content="Curated gift ideas for every occasion and every person you love. Discover thoughtful presents for Dad, Mom, partners, kids, friends, and colleagues.">
  <meta name="msvalidate.01" content="B2BF310818F98A9F551F76360C83DC37">
  <meta name="google-site-verification" content="sUsfvBNKH1wpjArOTu37MDgr1FSYI4R1-UBbOv4tmZA">
  <meta property="og:title" content="GiftFor.Love — Find the Perfect Gift for Everyone">
  <meta property="og:description" content="Curated gift ideas for every occasion and every person you love.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://giftfor.love">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-95PY8PSZ0Y"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-95PY8PSZ0Y');
  </script>
  <style>
    :root {
      --cream: #FFF8F0;
      --cream-dark: #F5EDE3;
      --gold: #D4A853;
      --gold-light: #E8C87A;
      --gold-dark: #B8922F;
      --rose: #E8B4B8;
      --rose-light: #F2D4D7;
      --rose-dark: #C9868B;
      --sage: #9CAF88;
      --sage-light: #B8C9A8;
      --sage-dark: #7A9462;
      --brown: #2D1B0E;
      --brown-light: #5C3D2E;
      --brown-medium: #8B6F5C;
      --white: #FFFFFF;
      --text: #3D2B1F;
      --text-light: #6B5544;
      --text-muted: #9B8A7A;
      --border: #E8DDD3;
      --shadow: rgba(45, 27, 14, 0.08);
      --shadow-hover: rgba(45, 27, 14, 0.15);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--cream);
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
    }

    /* ===== HEADER ===== */
    .site-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: linear-gradient(135deg, rgba(255,248,240,0.97), rgba(255,248,240,0.95));
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
      box-shadow: 0 2px 20px var(--shadow);
      height: 72px;
      display: flex;
      align-items: center;
      padding: 0 5%;
    }

    .site-header .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--brown);
    }

    .site-header .logo-icon {
      font-size: 1.3rem;
    }

    .site-header .logo-accent {
      color: var(--gold);
    }

    .site-header .main-nav {
      display: flex;
      gap: 1.75rem;
      margin-left: auto;
    }

    .site-header .main-nav a {
      text-decoration: none;
      color: var(--text-light);
      font-weight: 600;
      font-size: 0.9rem;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      transition: color 0.3s ease;
      position: relative;
    }

    .site-header .main-nav a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gold);
      transition: width 0.3s ease;
    }

    .site-header .main-nav a:hover {
      color: var(--gold-dark);
    }

    .site-header .main-nav a:hover::after {
      width: 100%;
    }

    .mobile-menu-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      margin-left: auto;
      color: var(--brown);
    }

    /* ===== HERO ===== */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 7rem 5% 4rem;
      position: relative;
      background: 
        radial-gradient(ellipse at 30% 20%, rgba(212, 168, 83, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 70% 80%, rgba(232, 180, 184, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 50%, rgba(156, 175, 136, 0.05) 0%, transparent 60%),
        var(--cream);
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212,168,83,0.03) 35px, rgba(212,168,83,0.03) 36px),
        repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(232,180,184,0.03) 35px, rgba(232,180,184,0.03) 36px);
      pointer-events: none;
    }

    .hero-content {
      text-align: center;
      max-width: 800px;
      position: relative;
      z-index: 1;
    }

    .hero-ribbon {
      display: inline-block;
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      color: var(--white);
      padding: 0.4rem 1.5rem;
      border-radius: 30px;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 2rem;
      box-shadow: 0 4px 15px rgba(212, 168, 83, 0.3);
    }

    .hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 700;
      line-height: 1.15;
      color: var(--brown);
      margin-bottom: 1.5rem;
      letter-spacing: -0.02em;
    }

    .hero h1 em {
      font-style: italic;
      color: var(--gold-dark);
    }

    .hero-subtitle {
      font-size: clamp(1.1rem, 2vw, 1.35rem);
      color: var(--text-light);
      max-width: 600px;
      margin: 0 auto 2.5rem;
      line-height: 1.7;
      font-weight: 300;
    }

    .hero-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2.5rem;
      background: linear-gradient(135deg, var(--gold), var(--gold-dark));
      color: var(--white);
      text-decoration: none;
      border-radius: 50px;
      font-weight: 700;
      font-size: 1.05rem;
      letter-spacing: 0.02em;
      box-shadow: 0 8px 30px rgba(212, 168, 83, 0.35);
      transition: all 0.3s ease;
    }

    .hero-cta:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 40px rgba(212, 168, 83, 0.5);
    }

    .hero-decoration {
      position: absolute;
      font-size: 4rem;
      opacity: 0.15;
      animation: floatDecor 6s ease-in-out infinite;
    }

    .hero-decoration:nth-child(1) { top: 15%; left: 8%; animation-delay: 0s; }
    .hero-decoration:nth-child(2) { top: 25%; right: 10%; animation-delay: 2s; font-size: 3rem; }
    .hero-decoration:nth-child(3) { bottom: 20%; left: 15%; animation-delay: 4s; font-size: 2.5rem; }
    .hero-decoration:nth-child(4) { bottom: 30%; right: 8%; animation-delay: 1s; font-size: 3.5rem; }

    @keyframes floatDecor {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(5deg); }
    }

    /* ===== SECTIONS ===== */
    section {
      padding: 6rem 5%;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-header h2 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 4vw, 3rem);
      color: var(--brown);
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .section-header p {
      color: var(--text-light);
      font-size: 1.15rem;
      max-width: 600px;
      margin: 0 auto;
      font-weight: 300;
    }

    .section-divider {
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--gold), var(--rose));
      margin: 1rem auto 0;
      border-radius: 3px;
    }

    /* ===== GIFT BY PERSON GRID ===== */
    .person-section {
      background: linear-gradient(180deg, var(--cream) 0%, var(--cream-dark) 100%);
    }

    .person-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .person-card {
      background: var(--white);
      border-radius: 20px;
      padding: 2.5rem 2rem;
      text-decoration: none;
      color: inherit;
      text-align: center;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 4px 20px var(--shadow);
      border: 1px solid var(--border);
      position: relative;
      overflow: hidden;
    }

    .person-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--gold), var(--rose), var(--sage));
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .person-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px var(--shadow-hover);
    }

    .person-card:hover::before {
      opacity: 1;
    }

    .person-card-icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      font-size: 2rem;
      background: linear-gradient(135deg, rgba(212,168,83,0.1), rgba(232,180,184,0.1));
      border: 2px solid var(--border);
    }

    .person-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      color: var(--brown);
      margin-bottom: 0.75rem;
    }

    .person-card p {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    /* ===== OCCASIONS ===== */
    .occasion-section {
      background: var(--white);
    }

    .occasion-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .occasion-card {
      background: linear-gradient(145deg, var(--cream), var(--cream-dark));
      border-radius: 16px;
      padding: 2rem 1.5rem;
      text-decoration: none;
      color: inherit;
      text-align: center;
      transition: all 0.3s ease;
      border: 1px solid transparent;
      position: relative;
    }

    .occasion-card:hover {
      border-color: var(--gold);
      transform: translateY(-5px);
      box-shadow: 0 15px 40px var(--shadow);
    }

    .occasion-card-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .occasion-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem;
      color: var(--brown);
      margin-bottom: 0.5rem;
    }

    .occasion-card p {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.5;
    }

    /* ===== HOW IT WORKS ===== */
    .how-section {
      background: linear-gradient(135deg, var(--brown) 0%, var(--brown-light) 100%);
      color: var(--cream);
      position: relative;
      overflow: hidden;
    }

    .how-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(212,168,83,0.05) 40px, rgba(212,168,83,0.05) 41px);
      pointer-events: none;
    }

    .how-section .section-header h2 {
      color: var(--cream);
    }

    .how-section .section-header p {
      color: rgba(255,248,240,0.7);
    }

    .how-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 3rem;
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
    }

    .how-step {
      text-align: center;
      position: relative;
    }

    .how-step-number {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      color: var(--brown);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0 auto 1.5rem;
      box-shadow: 0 8px 25px rgba(212, 168, 83, 0.3);
    }

    .how-step h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      margin-bottom: 0.75rem;
      color: var(--gold-light);
    }

    .how-step p {
      color: rgba(255,248,240,0.75);
      font-size: 0.95rem;
      line-height: 1.7;
    }

    /* ===== LATEST ARTICLES (EMPTY STATE) ===== */
    .articles-section {
      background: var(--cream);
    }

    .articles-empty {
      text-align: center;
      padding: 4rem 2rem;
      max-width: 600px;
      margin: 0 auto;
      background: var(--white);
      border-radius: 20px;
      border: 2px dashed var(--border);
    }

    .articles-empty-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .articles-empty h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      color: var(--brown);
      margin-bottom: 0.75rem;
    }

    .articles-empty p {
      color: var(--text-muted);
      font-size: 1rem;
    }

    /* ===== FOOTER ===== */
    .site-footer {
      background: var(--brown);
      color: rgba(255,248,240,0.8);
      padding: 4rem 5% 1.5rem;
    }

    .footer-inner {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 3rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-brand .footer-logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--gold);
    }

    .footer-brand p {
      margin-top: 1rem;
      font-size: 0.9rem;
      line-height: 1.7;
      color: rgba(255,248,240,0.6);
    }

    .footer-nav h4 {
      font-family: 'Playfair Display', serif;
      color: var(--cream);
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .footer-nav ul {
      list-style: none;
    }

    .footer-nav li {
      margin-bottom: 0.6rem;
    }

    .footer-nav a {
      color: rgba(255,248,240,0.6);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.2s;
    }

    .footer-nav a:hover {
      color: var(--gold);
    }

    .footer-bottom {
      border-top: 1px solid rgba(255,248,240,0.1);
      margin-top: 3rem;
      padding-top: 1.5rem;
      text-align: center;
      font-size: 0.85rem;
      color: rgba(255,248,240,0.4);
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 768px) {
      .site-header .main-nav {
        display: none;
        position: absolute;
        top: 72px;
        left: 0;
        right: 0;
        background: var(--cream);
        flex-direction: column;
        padding: 1.5rem;
        gap: 1rem;
        border-bottom: 1px solid var(--border);
        box-shadow: 0 10px 30px var(--shadow);
      }

      .site-header .main-nav.open {
        display: flex;
      }

      .mobile-menu-toggle {
        display: block;
      }

      .hero {
        padding-top: 8rem;
      }

      .person-grid {
        grid-template-columns: 1fr;
      }

      .occasion-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .footer-inner {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .how-steps {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    @media (max-width: 480px) {
      .occasion-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
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

  <!-- Hero Section -->
  <section class="hero">
    <span class="hero-decoration">🎀</span>
    <span class="hero-decoration">✨</span>
    <span class="hero-decoration">💝</span>
    <span class="hero-decoration">🎁</span>
    <div class="hero-content">
      <span class="hero-ribbon">Curated With Love</span>
      <h1>Find the <em>Perfect Gift</em> for Everyone</h1>
      <p class="hero-subtitle">Thoughtful, curated gift ideas for every occasion and every person you love. Because the best gifts come from the heart.</p>
      <a href="#categories" class="hero-cta">Explore Gift Ideas ✨</a>
    </div>
  </section>

  <!-- Gift By Person -->
  <section class="person-section" id="categories">
    <div class="section-header">
      <h2>Gifts By Who They Are</h2>
      <p>Every person is unique — find a gift that matches their personality, passions, and the bond you share.</p>
      <div class="section-divider"></div>
    </div>
    <div class="person-grid">
      <a href="/dad" class="person-card">
        <div class="person-card-icon">👔</div>
        <h3>For Dad</h3>
        <p>From practical tools to heartfelt keepsakes — gifts that show Dad how much he means to you.</p>
      </a>
      <a href="/mom" class="person-card">
        <div class="person-card-icon">💐</div>
        <h3>For Mom</h3>
        <p>Spa essentials, personalized treasures, and thoughtful surprises for the woman who gives everything.</p>
      </a>
      <a href="/partner" class="person-card">
        <div class="person-card-icon">💕</div>
        <h3>For Your Partner</h3>
        <p>Romantic and meaningful gifts that celebrate your love story and create new memories together.</p>
      </a>
      <a href="/kids" class="person-card">
        <div class="person-card-icon">🌟</div>
        <h3>For Kids</h3>
        <p>Magical gifts that spark imagination, encourage learning, and bring pure joy to little faces.</p>
      </a>
      <a href="/friends" class="person-card">
        <div class="person-card-icon">🤝</div>
        <h3>For Friends</h3>
        <p>Unique, personal gifts that say "you matter" — celebrating the friendships that enrich our lives.</p>
      </a>
      <a href="/colleagues" class="person-card">
        <div class="person-card-icon">🏠</div>
        <h3>For Colleagues</h3>
        <p>Professional yet personal gift ideas perfect for workplace milestones, holidays, and thank-yous.</p>
      </a>
    </div>
  </section>

  <!-- Occasions -->
  <section class="occasion-section">
    <div class="section-header">
      <h2>Gifts By Occasion</h2>
      <p>Every moment deserves the perfect gift. Find ideas tailored to life's most cherished celebrations.</p>
      <div class="section-divider"></div>
    </div>
    <div class="occasion-grid">
      <a href="/birthday" class="occasion-card">
        <div class="occasion-card-icon">🎂</div>
        <h3>Birthday</h3>
        <p>Make every birthday unforgettable with gifts that match their personality.</p>
      </a>
      <a href="/anniversary" class="occasion-card">
        <div class="occasion-card-icon">💍</div>
        <h3>Anniversary</h3>
        <p>Celebrate your journey together with timeless, meaningful presents.</p>
      </a>
      <a href="/holiday" class="occasion-card">
        <div class="occasion-card-icon">🎄</div>
        <h3>Holiday</h3>
        <p>Spread seasonal cheer with curated gifts for every celebration.</p>
      </a>
      <a href="/wedding" class="occasion-card">
        <div class="occasion-card-icon">🥂</div>
        <h3>Wedding</h3>
        <p>Honor new beginnings with elegant gifts for the happy couple.</p>
      </a>
      <a href="/holiday" class="occasion-card">
        <div class="occasion-card-icon">🏡</div>
        <h3>Housewarming</h3>
        <p>Welcome them home with thoughtful gifts for their new space.</p>
      </a>
    </div>
  </section>

  <!-- How It Works -->
  <section class="how-section">
    <div class="section-header">
      <h2>The Art of Gift-Giving</h2>
      <p>Three simple steps to finding a gift that truly speaks from the heart.</p>
      <div class="section-divider"></div>
    </div>
    <div class="how-steps">
      <div class="how-step">
        <div class="how-step-number">1</div>
        <h3>Browse</h3>
        <p>Explore our curated categories organized by person and occasion. Find inspiration that matches who you're shopping for.</p>
      </div>
      <div class="how-step">
        <div class="how-step-number">2</div>
        <h3>Choose</h3>
        <p>Read our expert guides and discover thoughtful options at every price point. Each recommendation is carefully selected.</p>
      </div>
      <div class="how-step">
        <div class="how-step-number">3</div>
        <h3>Delight</h3>
        <p>Watch their face light up when they unwrap the perfect gift. Create moments that become cherished memories.</p>
      </div>
    </div>
  </section>

  <!-- Latest Gift Ideas (Coming Soon) -->
  <section class="articles-section">
    <div class="section-header">
      <h2>Latest Gift Ideas</h2>
      <p>Fresh inspiration delivered regularly — guides, tips, and curated picks for every gift-giving moment.</p>
      <div class="section-divider"></div>
    </div>
    <div class="articles-empty">
      <div class="articles-empty-icon">✨</div>
      <h3>Beautiful Content Coming Soon</h3>
      <p>Our gift experts are curating the finest ideas and guides. Check back soon for handpicked recommendations that make every gift-giving moment special.</p>
    </div>
  </section>

  <!-- Footer -->
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
      <p>&copy; 2025 GiftFor.Love — Curated with ❤️ for thoughtful gift-givers everywhere.</p>
    </div>
  </footer>

  <script>
    document.querySelector('.mobile-menu-toggle')?.addEventListener('click', function() {
      document.querySelector('.main-nav')?.classList.toggle('open');
    });
  </script>

</body>
</html>`;
