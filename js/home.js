/* ============================================================
   KANUNKA FC - HOME PAGE
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize shared components
  KanunkaFC.initApp('home');

  // Hero slideshow
  initHeroSlideshow();

  // Next match countdown - May 13, 2026
  KanunkaFC.initCountdown('May 13, 2026 15:00:00', 'next-match-countdown');

  // Render page blocks
  renderLatestResults();
  renderNewsHighlights();
  renderVideoHighlights();
  renderHomePhotoWall();
  renderFanVoices();
});

function getPhotosByCategory(category, limit = 3) {
  const allPhotos = window.KanunkaMedia?.photos || [];
  const filtered = allPhotos.filter(photo => photo.category === category);
  return filtered.slice(0, limit);
}

// --- Hero Slideshow -------------------------------------------------------
function initHeroSlideshow() {
  const bg1 = document.getElementById('hero-bg-1');
  const bg2 = document.getElementById('hero-bg-2');
  if (!bg1 || !bg2) return;

  let current = 1;
  setInterval(() => {
    if (current === 1) {
      bg1.style.opacity = '0';
      bg2.style.opacity = '1';
      current = 2;
    } else {
      bg1.style.opacity = '1';
      bg2.style.opacity = '0';
      current = 1;
    }
  }, 5000);
}

// --- Latest Results -------------------------------------------------------
function renderLatestResults() {
  const container = document.getElementById('latest-results');
  if (!container) return;

  const results = [
    { home: 'Kanunka Cranes FC', away: 'OITI FC', homeScore: 2, awayScore: 0, date: 'Apr 3, 2025', venue: 'Cranes Stadium', competition: 'League' },
    { home: 'Kish FC', away: 'Kosika FC', homeScore: 1, awayScore: 2, date: 'Apr 6, 2025', venue: 'Kish Stadium', competition: 'League' },
    { home: 'Osero FC', away: 'Kanunka Cranes FC', homeScore: 0, awayScore: 2, date: 'Apr 6, 2025', venue: 'Osero Grounds', competition: 'League' }
  ];

  container.innerHTML = results.map(r => `
    <div class="match-card" style="padding: 1.5rem;">
      <div style="text-align: center; margin-bottom: 0.75rem;">
        <span class="card-badge">${r.competition}</span>
      </div>
      <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 0.75rem;">
        <div style="text-align: center; flex: 1;">
          <div style="font-weight: 700; font-size: 0.85rem; color: #e2e8f0;">${r.home}</div>
        </div>
        <div class="match-score" style="color: var(--color-secondary);">${r.homeScore} - ${r.awayScore}</div>
        <div style="text-align: center; flex: 1;">
          <div style="font-weight: 700; font-size: 0.85rem; color: #e2e8f0;">${r.away}</div>
        </div>
      </div>
      <div class="match-meta" style="text-align: center;">
        <span><i class="far fa-calendar"></i> ${r.date}</span> &nbsp;
        <span><i class="fas fa-map-marker-alt"></i> ${r.venue}</span>
      </div>
    </div>
  `).join('');
}

// --- News Highlights ------------------------------------------------------
function renderNewsHighlights() {
  const container = document.getElementById('news-cards');
  if (!container) return;

  const matchPhoto = getPhotosByCategory('matches', 2);
  const trainingPhoto = getPhotosByCategory('training', 1);

  const news = [
    {
      title: 'Cranes Soar Past Rivals in 3-1 Victory',
      category: 'Match Report',
      excerpt: 'Kanunka FC delivered a dominant performance against local rivals, with Olanyorr Kulou scoring a brace to seal a convincing victory at Cranes Stadium.',
      image: matchPhoto[0]?.src || 'img/photos/root__bac.jpg',
      date: 'Mar 28, 2025'
    },
    {
      title: 'Haling Malah Kamoiro Joins as Star Striker',
      category: 'Transfer',
      excerpt: 'Kanunka FC has completed the signing of Haling Malah Kamoiro, a talented striker who brings pace and clinical finishing to The Cranes attacking line.',
      image: matchPhoto[1]?.src || 'img/photos/root__bac2.jpg',
      date: 'Mar 15, 2025'
    },
    {
      title: 'Youth Academy Produces Next Generation',
      category: 'Club News',
      excerpt: 'The Cranes Academy continues to develop young talent, with three graduates earning spots in the first team squad this season.',
      image: trainingPhoto[0]?.src || 'img/photos/root__bac.jpg',
      date: 'Mar 10, 2025'
    }
  ];

  container.innerHTML = news.map(n => `
    <article class="card">
      <img src="${n.image}" alt="${n.title}" class="card-img" loading="lazy">
      <div class="card-body">
        <span class="card-badge">${n.category}</span>
        <h3 style="font-size: 1.05rem; margin-top: 0.75rem; margin-bottom: 0.5rem;">${n.title}</h3>
        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0.75rem;">${n.excerpt}</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.75rem; color: var(--color-text-muted);"><i class="far fa-calendar"></i> ${n.date}</span>
          <a href="news.html" style="font-size: 0.8rem; font-weight: 600; color: var(--color-primary);">Read More -></a>
        </div>
      </div>
    </article>
  `).join('');
}

// --- Video Highlights -----------------------------------------------------
function renderVideoHighlights() {
  const container = document.getElementById('video-cards');
  if (!container) return;

  const matchImage = getPhotosByCategory('matches', 1)[0]?.src || 'img/photos/root__bac.jpg';
  const trainingImage = getPhotosByCategory('training', 1)[0]?.src || 'img/photos/root__bac2.jpg';

  const videos = [
    { title: 'Kanunka FC 2 - 0 OITI FC | Highlights', thumbnail: 'img/videos/man-utd-v-southampton(720p_hd).mp4', type: 'local' },
    { title: 'Best Goals of the Season', thumbnail: matchImage, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', type: 'youtube' },
    { title: 'Training Ground Skills', thumbnail: trainingImage, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', type: 'youtube' }
  ];

  container.innerHTML = videos.map(v => `
    <div class="card" style="cursor: pointer;" onclick="${v.type === 'youtube' ? `window.open('${v.url}', '_blank')` : ''}">
      <div style="position: relative; height: 200px; overflow: hidden;">
        ${v.type === 'local'
          ? `<video style="width:100%; height:100%; object-fit:cover;" muted><source src="${v.thumbnail}" type="video/mp4"></video>`
          : `<img src="${v.thumbnail}" alt="${v.title}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">`
        }
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.3);">
          <div style="width: 50px; height: 50px; background: var(--color-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
            <i class="fas fa-play" style="color: var(--color-dark); margin-left: 3px;"></i>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h4 style="font-size: 0.95rem;">${v.title}</h4>
      </div>
    </div>
  `).join('');
}

// --- New Home Sections ----------------------------------------------------
function renderHomePhotoWall() {
  const container = document.getElementById('home-photo-wall');
  if (!container) return;

  const wallPhotos = [
    ...getPhotosByCategory('matches', 4),
    ...getPhotosByCategory('players', 2),
    ...getPhotosByCategory('fans', 2),
    ...getPhotosByCategory('training', 2),
    ...getPhotosByCategory('club', 2)
  ].slice(0, 12);

  container.innerHTML = wallPhotos.map(photo => `
    <article class="home-photo-item">
      <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
      <span>${photo.category.replace(/-/g, ' ')}</span>
    </article>
  `).join('');
}

function renderFanVoices() {
  const container = document.getElementById('fan-voices-grid');
  if (!container) return;

  const fansPhotos = getPhotosByCategory('fans', 3);
  const fallback = getPhotosByCategory('club', 3);

  const voices = [
    {
      quote: 'When The Cranes play, the whole community becomes one family.',
      name: 'Naserian K.',
      role: 'Season Ticket Holder',
      photo: fansPhotos[0]?.src || fallback[0]?.src || 'img/photos/root__bac.jpg'
    },
    {
      quote: 'Every matchday feels like a celebration of our identity and pride.',
      name: 'Mpaaye T.',
      role: 'Supporters Branch Lead',
      photo: fansPhotos[1]?.src || fallback[1]?.src || 'img/photos/root__bac2.jpg'
    },
    {
      quote: 'The energy in the stands pushes the players beyond their limits.',
      name: 'Lentoi P.',
      role: 'Youth Fan Club',
      photo: fansPhotos[2]?.src || fallback[2]?.src || 'img/photos/root__bac.jpg'
    }
  ];

  container.innerHTML = voices.map(voice => `
    <article class="card" style="background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08);">
      <img src="${voice.photo}" alt="${voice.name}" class="card-img" loading="lazy">
      <div class="card-body">
        <p style="font-size: 0.95rem; color: #e2e8f0; margin-bottom: 1rem; line-height: 1.7;">"${voice.quote}"</p>
        <p style="font-weight: 700; color: #fff; font-size: 0.9rem;">${voice.name}</p>
        <p style="font-size: 0.75rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em;">${voice.role}</p>
      </div>
    </article>
  `).join('');
}
