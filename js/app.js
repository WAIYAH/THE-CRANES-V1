/* ============================================================
   KANUNKA FC - THE CRANES | Shared Application Module
   Handles: Navigation, Footer, Theme, Scroll Animations
   ============================================================ */

'use strict';

// ─── Navigation Component ───────────────────────────────────
function renderNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'matches.html', label: 'Matches', id: 'matches' },
    { href: 'players.html', label: 'Players', id: 'players' },
    { href: 'news.html', label: 'News', id: 'news' },
    { href: 'gallery.html', label: 'Gallery', id: 'gallery' },
    { href: 'about.html', label: 'About', id: 'about' },
    { href: 'tickets.html', label: 'Tickets', id: 'tickets' },
    { href: 'contact.html', label: 'Contact', id: 'contact' },
    { href: 'careers.html', label: 'Careers', id: 'careers' }
  ];

  const navLinks = pages.map(p => 
    `<a href="${p.href}" ${p.id === activePage ? 'class="active"' : ''}>${p.label}</a>`
  ).join('');

  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" ${p.id === activePage ? 'class="active"' : ''}>${p.label}</a>`
  ).join('');

  const navHTML = `
    <nav class="nav-main" id="main-nav">
      <div class="nav-container">
        <a href="index.html" class="nav-brand">
          <img src="img/craneslogo.png" alt="Kanunka FC" width="40" height="40">
          <span>Kanunka FC</span>
        </a>
        <div class="nav-links">${navLinks}</div>
        <div class="nav-actions">
          <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark/light theme">
            <i class="fas fa-moon"></i>
          </button>
          <a href="tickets.html" class="nav-cta">Tickets</a>
          <button class="mobile-toggle" id="mobile-toggle" aria-label="Open menu" aria-expanded="false">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu" role="dialog" aria-label="Mobile navigation">${mobileLinks}</div>
    <div class="match-ticker" aria-label="Latest match results">
      <div class="ticker-content" id="ticker-content"></div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
}

// ─── Match Ticker Data ──────────────────────────────────────
function initTicker() {
  const tickerData = [
    { home: 'Kanunka Cranes FC', away: 'OITI FC', score: '2 - 0', badge: 'FT' },
    { home: 'Kish FC', away: 'Kosika FC', score: '1 - 2', badge: 'FT' },
    { home: 'Osero FC', away: 'Kanunka Cranes FC', score: '0 - 2', badge: 'FT' },
    { home: 'Salama FC', away: 'Oloika FC', score: '3 - 1', badge: 'FT' },
    { home: 'Osero FC', away: 'Oloika FC', score: '3 - 2', badge: 'FT' },
    { home: 'Kanunka Cranes FC', away: 'Oiti FC', score: 'May 13', badge: 'NEXT' }
  ];

  const tickerHTML = tickerData.map(m => `
    <div class="ticker-item">
      <span class="ticker-badge">${m.badge}</span>
      <span>${m.home}</span>
      <span class="ticker-score">${m.score}</span>
      <span>${m.away}</span>
    </div>
  `).join('');

  const ticker = document.getElementById('ticker-content');
  if (ticker) {
    // Duplicate for seamless loop
    ticker.innerHTML = tickerHTML + tickerHTML;
  }
}

// ─── Footer Component ───────────────────────────────────────
function renderFooter() {
  const year = new Date().getFullYear();

  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="footer-brand">
            <img src="img/craneslogo.png" alt="Kanunka FC" width="48" height="48">
            <span>Kanunka FC</span>
          </div>
          <p>Founded in 2002, Kanunka FC - The Cranes has grown from humble beginnings to become a community powerhouse. United in flight, we soar together.</p>
          <div class="footer-social">
            <a href="https://facebook.com/groups/715970354064150/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X"><i class="fab fa-x-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Club</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="news.html">Latest News</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="careers.html">Careers</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Football</h4>
          <ul>
            <li><a href="matches.html">Fixtures & Results</a></li>
            <li><a href="matches.html#standings">League Table</a></li>
            <li><a href="players.html">First Team</a></li>
            <li><a href="matches.html#stats">Statistics</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Matchday</h4>
          <ul>
            <li><a href="tickets.html">Buy Tickets</a></li>
            <li><a href="tickets.html#membership">Membership</a></li>
            <li><a href="tickets.html#stadium">Stadium Guide</a></li>
            <li><a href="tickets.html#ticket-types">Tickets</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="tel:+254723245123">+254 723 245 123</a></li>
            <li><a href="mailto:info@kanunkafc.com">info@kanunkafc.com</a></li>
            <li><a href="#">The Cranes Avenue</a></li>
            <li><a href="#">Kanunka Centre</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-marquee">
        <div class="marquee-track" id="footer-marquee">
          <!-- Populated by JS -->
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${year} Kanunka FC - The Cranes. All Rights Reserved. | NO RAIN NO TERRAIN | Developed by <a href="https://nakolaexpertsystems.vercel.app" target="_blank" rel="noopener noreferrer">Nakola Expert Systems</a></p>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Populate marquee
  const marquee = document.getElementById('footer-marquee');
  if (marquee) {
    const text = '⚽ KANUNKA CRANES FC ⚽ NO RAIN NO TERRAIN ⚽ SOARING HIGH, UNITED IN FLIGHT ⚽ ';
    marquee.innerHTML = `<span class="marquee-text">${text.repeat(6)}</span><span class="marquee-text">${text.repeat(6)}</span>`;
  }
}

// ─── Theme System ───────────────────────────────────────────
function initTheme() {
  const stored = localStorage.getItem('kanunka-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');

  applyTheme(theme);

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('kanunka-theme', next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// ─── Mobile Menu ────────────────────────────────────────────
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', !isOpen);
    toggle.querySelector('i').className = isOpen ? 'fas fa-bars' : 'fas fa-times';
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('i').className = 'fas fa-bars';
      document.body.style.overflow = '';
    });
  });
}

// ─── Scroll Effects ─────────────────────────────────────────
function initScrollEffects() {
  // Navbar scroll state
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // Intersection Observer for reveal animations
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (reveals.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ─── GSAP Animations (if GSAP loaded) ──────────────────────
function initGSAP() {
  if (typeof gsap === 'undefined') return;

  // Navbar entrance
  gsap.from('.nav-main', { y: -80, opacity: 0, duration: 0.8, ease: 'power3.out' });

  // Hero animations
  gsap.from('.hero-content h1', { y: 60, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
  gsap.from('.hero-content p', { y: 40, opacity: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' });
  gsap.from('.hero-ctas', { y: 30, opacity: 0, duration: 0.8, delay: 0.9, ease: 'power3.out' });

  // Page hero animations
  gsap.from('.page-hero h1', { y: 40, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' });
  gsap.from('.page-hero p', { y: 20, opacity: 0, duration: 0.6, delay: 0.4, ease: 'power3.out' });
}

// ─── Utility: Countdown Timer ───────────────────────────────
function initCountdown(targetDate, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  function update() {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const diff = target - now;

    if (diff <= 0) {
      container.innerHTML = `
        <div class="countdown-item">
          <div class="countdown-value" style="width:auto; padding: 0 1.5rem; background: var(--color-accent);">MATCH ENDED</div>
        </div>
      `;
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    container.innerHTML = `
      <div class="countdown-item">
        <div class="countdown-value">${String(days).padStart(2, '0')}</div>
        <div class="countdown-label">Days</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">${String(hours).padStart(2, '0')}</div>
        <div class="countdown-label">Hours</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">${String(minutes).padStart(2, '0')}</div>
        <div class="countdown-label">Mins</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">${String(seconds).padStart(2, '0')}</div>
        <div class="countdown-label">Secs</div>
      </div>
    `;

    requestAnimationFrame(() => setTimeout(update, 1000));
  }

  update();
}

// ─── Utility: Form Validation ───────────────────────────────
function initFormValidation(formId, successId) {
  const form = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const inputs = form.querySelectorAll('[required]');
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = 'var(--color-danger)';
      } else {
        input.style.borderColor = '';
      }

      if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          valid = false;
          input.style.borderColor = 'var(--color-danger)';
        }
      }
    });

    if (valid && success) {
      success.style.display = 'block';
      form.reset();

      if (typeof gsap !== 'undefined') {
        gsap.from(success, { opacity: 0, y: 10, duration: 0.5 });
      }

      setTimeout(() => {
        success.style.display = 'none';
      }, 5000);
    }
  });
}

// ─── Lightbox ───────────────────────────────────────────────
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  if (!lightbox) return;

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-lightbox]');
    if (trigger) {
      lightboxImg.src = trigger.dataset.lightbox;
      const nestedImgAlt = trigger.querySelector('img')?.alt;
      lightboxImg.alt = trigger.dataset.caption || nestedImgAlt || 'Gallery image';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
}

// ─── Initialize App ─────────────────────────────────────────
function initApp(activePage) {
  renderNav(activePage);
  renderFooter();
  initTheme();
  initMobileMenu();
  initTicker();
  initScrollEffects();

  // Defer GSAP init to after page renders
  requestAnimationFrame(() => {
    initGSAP();
  });
}

// Export for use
window.KanunkaFC = {
  initApp,
  initCountdown,
  initFormValidation,
  initLightbox
};
