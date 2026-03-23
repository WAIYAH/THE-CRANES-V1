/* ============================================================
   KANUNKA FC - NEWS PAGE
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  KanunkaFC.initApp('news');
  renderNews();
  initNewsFilter();
});

const newsArticles = [
  {
    id: 1,
    title: 'Cranes Soar Past Rivals in Dominant 3-1 Victory',
    category: 'match-analysis',
    image: 'img/random/game2.jpg',
    excerpt: 'Kanunka FC delivered a masterclass performance against local rivals, with Olanyorr Kulou scoring a brace and Nkababa adding a third to seal a convincing victory at Cranes Stadium.',
    date: 'Mar 28, 2025',
    author: 'Sports Desk'
  },
  {
    id: 2,
    title: 'Haling Malah Kamoiro Joins Kanunka Cranes FC as Star Striker',
    category: 'transfers',
    image: 'img/random/game.jpg',
    excerpt: 'Kanunka FC has completed the signing of Haling Malah Kamoiro, a talented striker who brings pace, creativity, and clinical finishing to The Cranes\' attacking lineup.',
    date: 'Mar 15, 2025',
    author: 'Transfer Desk'
  },
  {
    id: 3,
    title: 'Tactical Breakdown: How Kanunka FC Shut Down Oiti FC',
    category: 'match-analysis',
    image: 'img/random/game2.jpg',
    excerpt: 'An in-depth analysis of the defensive masterclass that saw The Cranes keep a clean sheet and dominate possession in the 2-0 victory over Oiti FC.',
    date: 'Apr 3, 2025',
    author: 'Tactics Team'
  },
  {
    id: 4,
    title: 'Transfer Window: Key Targets for The Cranes',
    category: 'transfers',
    image: 'img/training/train1.jpg',
    excerpt: 'As the transfer window approaches, we look at the positions Kanunka FC needs to strengthen and the potential targets on the club\'s radar.',
    date: 'Mar 20, 2025',
    author: 'Transfer Desk'
  },
  {
    id: 5,
    title: 'Community Day: Kanunka FC Gives Back',
    category: 'club-news',
    image: 'img/fans/fan1.jpg',
    excerpt: 'The Cranes players and staff participated in a community outreach day, visiting local schools and hospitals to inspire the next generation.',
    date: 'Mar 5, 2025',
    author: 'Club Media'
  },
  {
    id: 6,
    title: 'Youth Academy Graduates Earn First Team Call-Up',
    category: 'club-news',
    image: 'img/training/train2.jpg',
    excerpt: 'Three promising graduates from the Kanunka FC Youth Academy have been promoted to the first team squad, a testament to the club\'s development pathway.',
    date: 'Feb 28, 2025',
    author: 'Academy Report'
  }
];

function renderNews(filter = 'all') {
  const container = document.getElementById('news-grid');
  if (!container) return;

  const filtered = filter === 'all' ? newsArticles : newsArticles.filter(a => a.category === filter);

  container.innerHTML = filtered.map(a => `
    <article class="card">
      <img src="${a.image}" alt="${a.title}" class="card-img" loading="lazy">
      <div class="card-body">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
          <span class="card-badge">${a.category.replace('-', ' ')}</span>
          <span style="font-size: 0.75rem; color: var(--color-text-muted);"><i class="far fa-calendar"></i> ${a.date}</span>
        </div>
        <h3 style="font-size: 1.05rem; margin-bottom: 0.5rem;">${a.title}</h3>
        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1rem; line-height: 1.6;">${a.excerpt}</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.75rem; color: var(--color-text-muted);"><i class="fas fa-user"></i> ${a.author}</span>
          <div style="display: flex; gap: 0.5rem;">
            <a href="#" aria-label="Share on Facebook" style="color: var(--color-text-muted); font-size: 0.85rem;"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Share on Twitter" style="color: var(--color-text-muted); font-size: 0.85rem;"><i class="fab fa-x-twitter"></i></a>
            <a href="#" aria-label="Share on WhatsApp" style="color: var(--color-text-muted); font-size: 0.85rem;"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function initNewsFilter() {
  document.querySelectorAll('[data-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-cat]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderNews(btn.dataset.cat);
    });
  });
}
