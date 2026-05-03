/* ============================================================
   KANUNKA FC - PLAYERS PAGE
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  KanunkaFC.initApp('players');
  renderPlayers();
  initPlayerFilters();
});

// ─── Player Data ────────────────────────────────────────────
const playersData = [
  { name: 'Olanyorr Kuluo', position: 'Forward', age: 22, nationality: 'Kenya', goals: 12, assists: 5, matches: 18, img: 'img/players/lanyorr.jpg', bio: 'A clinical striker with a knack for goals.', number: 10 },
  { name: 'Rangayia Kaiseyie', position: 'Forward', age: 16, nationality: 'Kenya', goals: 2, assists: 3, matches: 20, img: 'img/players/rangayia.jpg', bio: 'A young and creative forward with great vision and passing ability.', number: 11 },
  { name: 'Anderson Kukuni', position: 'Midfielder', age: 29, nationality: 'Kenya', goals: 1, assists: 3, matches: 17, img: 'img/players/anderson.jpg', bio: 'A commanding midfielder with excellent ball control and distribution.', number: 8 },
  { name: 'Ramsey Kukuni', position: 'Goalkeeper', age: 27, nationality: 'Kenya', goals: 0, assists: 0, matches: 19, img: 'img/players/ramsey-gk.jpg', bio: 'A reliable shot-stopper with quick reflexes and great positioning.', number: 1 },
  { name: 'Leshan Kaiseyie', position: 'Defender', age: 22, nationality: 'Kenya', goals: 2, assists: 3, matches: 17, img: 'img/players/leshan.jpg', bio: 'A tough and versatile defender with great tackling and aerial ability.', number: 4 },
  { name: 'Simel Sankale', position: 'Defender', age: 22, nationality: 'Kenya', goals: 0, assists: 3, matches: 17, img: 'img/players/simel.jpg', bio: 'A composed and intelligent defender with strong defensive awareness.', number: 5 },
  { name: 'Sanare Lenjirr', position: 'Defender', age: 21, nationality: 'Kenya', goals: 1, assists: 3, matches: 17, img: 'img/players/sanare.jpg', bio: 'A pacey full-back known for overlapping runs and defensive solidity.', number: 3 },
  { name: 'Moseka Kamoiro', position: 'Defender', age: 23, nationality: 'Kenya', goals: 2, assists: 3, matches: 10, img: 'img/players/sample.jpg', bio: 'A no-nonsense center-back with great strength and composure.', number: 6 },
  { name: 'Nicko Kaiseyie', position: 'Defender', age: 25, nationality: 'Kenya', goals: 0, assists: 3, matches: 17, img: 'img/players/nick.jpg', bio: 'A disciplined defender with strong positioning and tackling skills.', number: 2 },
  { name: 'Katambe Kudate', position: 'Goalkeeper', age: 23, nationality: 'Kenya', goals: 0, assists: 0, matches: 15, img: 'img/players/sample.jpg', bio: 'An agile goalkeeper with great shot-stopping ability and leadership.', number: 13 },
  { name: 'Selo Twala', position: 'Defender', age: 26, nationality: 'Kenya', goals: 0, assists: 3, matches: 17, img: 'img/players/selo.jpg', bio: 'A hardworking defender known for strong tackling and aerial dominance.', number: 15 },
  { name: 'Siameto Takona', position: 'Defender', age: 24, nationality: 'Kenya', goals: 0, assists: 0, matches: 7, img: 'img/players/siameto.jpg', bio: 'A versatile defender with great composure and tactical awareness.', number: 14 },
  { name: 'Tooto Koronkoro', position: 'Forward', age: 17, nationality: 'Kenya', goals: 2, assists: 3, matches: 16, img: 'img/players/tooto.jpg', bio: 'A young and energetic forward with a sharp eye for goal.', number: 17 },
  { name: 'Jack Silantoi', position: 'Defender', age: 28, nationality: 'Kenya', goals: 1, assists: 3, matches: 15, img: 'img/players/jack.jpg', bio: 'An experienced defender with excellent leadership and game-reading.', number: 16 },
  { name: 'Olonana Dapash', position: 'Forward', age: 16, nationality: 'Kenya', goals: 0, assists: 0, matches: 17, img: 'img/players/olonana.jpg', bio: 'A quick and technical forward always looking for creative plays.', number: 19 },
  { name: 'Nkababa Kamoiro', position: 'Forward', age: 23, nationality: 'Kenya', goals: 2, assists: 3, matches: 17, img: 'img/players/nkababa.jpg', bio: 'A strong and pacey forward with an eye for goal and link-up play.', number: 9 },
  { name: 'Lekishon Kukuni', position: 'Midfielder', age: 21, nationality: 'Kenya', goals: 0, assists: 3, matches: 17, img: 'img/players/sample.jpg', bio: 'A creative midfielder with great passing accuracy and vision.', number: 20 },
  { name: 'Jamlick Tein', position: 'Midfielder', age: 26, nationality: 'Kenya', goals: 2, assists: 3, matches: 17, img: 'img/players/sample.jpg', bio: 'A box-to-box midfielder with great stamina and ball-winning ability.', number: 18 },
  { name: 'Neliang', position: 'Defender', age: 23, nationality: 'Kenya', goals: 2, assists: 3, matches: 7, img: 'img/players/sample.jpg', bio: 'A resilient defender with strong positioning and great physicality.', number: 22 },
  { name: 'Sankale', position: 'Forward', age: 27, nationality: 'Kenya', goals: 0, assists: 1, matches: 7, img: 'img/players/sample.jpg', bio: 'A clinical striker with excellent movement and finishing ability.', number: 21 }
];

// ─── Render Players ─────────────────────────────────────────
function renderPlayers(filtered) {
  const container = document.getElementById('players-container');
  const noResults = document.getElementById('no-results');
  if (!container) return;

  const list = filtered || playersData;

  if (list.length === 0) {
    container.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  if (noResults) noResults.style.display = 'none';

  container.innerHTML = list.map((p, i) => `
    <div class="player-card">
      <div class="player-card-number">#${p.number}</div>
      <img src="${p.img}" alt="${p.name}" class="player-card-img" loading="lazy" onerror="this.src='img/players/sample.jpg'; this.style.objectFit='contain'; this.style.padding='2rem'; this.style.background='var(--color-dark)';">
      <div class="player-card-info">
        <div class="player-card-name">${p.name}</div>
        <div class="player-card-position">${p.position}</div>
        <div class="player-card-stats">
          <div class="player-stat">
            <div class="player-stat-value">${p.goals}</div>
            <div class="player-stat-label">Goals</div>
          </div>
          <div class="player-stat">
            <div class="player-stat-value">${p.assists}</div>
            <div class="player-stat-label">Assists</div>
          </div>
          <div class="player-stat">
            <div class="player-stat-value">${p.matches}</div>
            <div class="player-stat-label">Apps</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ─── Filters ────────────────────────────────────────────────
function initPlayerFilters() {
  const searchBar = document.getElementById('search-bar');
  const posSelect = document.getElementById('position-filter');
  const pills = document.querySelectorAll('[data-pos]');

  function applyFilters() {
    const search = searchBar?.value.toLowerCase() || '';
    const pos = posSelect?.value || 'all';

    const filtered = playersData.filter(p => {
      const matchName = p.name.toLowerCase().includes(search);
      const matchPos = pos === 'all' || p.position === pos;
      return matchName && matchPos;
    });

    renderPlayers(filtered);
  }

  searchBar?.addEventListener('input', applyFilters);
  posSelect?.addEventListener('change', () => {
    applyFilters();
    // Sync pills
    const val = posSelect.value;
    pills.forEach(pill => {
      pill.classList.toggle('active', pill.dataset.pos === val);
    });
  });

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      if (posSelect) posSelect.value = pill.dataset.pos;
      applyFilters();
    });
  });
}
