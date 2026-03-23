/* ============================================================
   KANUNKA FC - PLAYERS PAGE
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  KanunkaFC.initApp('players');
  renderPlayers();
  initPlayerFilters();
});

// ─── Player Data ────────────────────────────────────────────
const players = [
  { name: 'Olanyorr Kulou', position: 'Forward', age: 24, nationality: 'Kenya', goals: 15, assists: 4, matches: 8, img: 'img/players/olanyorr.jpg', bio: 'Top scorer and the heartbeat of the attack. Clinical finisher.' },
  { name: 'Nkababa', position: 'Forward', age: 22, nationality: 'Kenya', goals: 3, assists: 2, matches: 7, img: 'img/players/nkababa.jpg', bio: 'Pacy winger with an eye for goal and creative flair.' },
  { name: 'Lacazette', position: 'Forward', age: 23, nationality: 'Kenya', goals: 2, assists: 3, matches: 6, img: 'img/players/lacazette.jpg', bio: 'Versatile forward who can play across the front line.' },
  { name: 'Mpaira', position: 'Forward', age: 21, nationality: 'Kenya', goals: 2, assists: 1, matches: 7, img: 'img/players/mpaira.jpg', bio: 'Young talent with explosive pace and dribbling skills.' },
  { name: 'Palmer', position: 'Forward', age: 22, nationality: 'Kenya', goals: 2, assists: 2, matches: 6, img: 'img/players/palmer.jpg', bio: 'Creative attacker known for his vision and passing.' },
  { name: 'Saika', position: 'Forward', age: 20, nationality: 'Kenya', goals: 2, assists: 1, matches: 5, img: 'img/players/saika.jpg', bio: 'Exciting young prospect from the academy.' },
  { name: 'Haling Malah Kamoiro', position: 'Forward', age: 25, nationality: 'Kenya', goals: 1, assists: 2, matches: 4, img: 'img/players/haling.jpg', bio: 'New signing bringing pace and clinical finishing.' },
  { name: 'Ramos Kukuni', position: 'Defender', age: 26, nationality: 'Kenya', goals: 2, assists: 0, matches: 8, img: 'img/players/ramos.jpg', bio: 'Club captain. Rock-solid defender and natural leader.' },
  { name: 'Leshan Kaiseyie', position: 'Defender', age: 24, nationality: 'Kenya', goals: 0, assists: 1, matches: 8, img: 'img/players/leshan.jpg', bio: 'Vice-captain. Consistent and reliable at the back.' },
  { name: 'Kashale', position: 'Defender', age: 23, nationality: 'Kenya', goals: 0, assists: 0, matches: 7, img: 'img/players/kashale.jpg', bio: 'Strong in the air and commanding in defense.' },
  { name: 'Mbote', position: 'Defender', age: 22, nationality: 'Kenya', goals: 0, assists: 1, matches: 6, img: 'img/players/mbote.jpg', bio: 'Versatile defender comfortable on either flank.' },
  { name: 'Liaram', position: 'Defender', age: 25, nationality: 'Kenya', goals: 1, assists: 0, matches: 7, img: 'img/players/liaram.jpg', bio: 'Experienced center-back with excellent reading of the game.' },
  { name: 'Kishoyian', position: 'Defender', age: 21, nationality: 'Kenya', goals: 0, assists: 0, matches: 5, img: 'img/players/kishoyian.jpg', bio: 'Young defender with great potential and pace.' },
  { name: 'Torome', position: 'Defender', age: 23, nationality: 'Kenya', goals: 0, assists: 0, matches: 6, img: 'img/players/torome.jpg', bio: 'Tough-tackling full-back with attacking instincts.' },
  { name: 'Kudate', position: 'Defender', age: 22, nationality: 'Kenya', goals: 0, assists: 2, matches: 7, img: 'img/players/kudate.jpg', bio: 'Energetic wing-back who loves to overlap.' },
  { name: 'Loserian', position: 'Defender', age: 24, nationality: 'Kenya', goals: 0, assists: 0, matches: 6, img: 'img/players/loserian.jpg', bio: 'Solid and dependable center-back.' },
  { name: 'Leshinka Jr.', position: 'Midfielder', age: 20, nationality: 'Kenya', goals: 0, assists: 3, matches: 7, img: 'img/players/leshinka.jpg', bio: 'Creative midfielder with excellent passing range.' },
  { name: 'Tikoko', position: 'Midfielder', age: 23, nationality: 'Kenya', goals: 1, assists: 2, matches: 6, img: 'img/players/tikoko.jpg', bio: 'Box-to-box midfielder with tireless energy.' },
  { name: 'Shoroyian', position: 'Midfielder', age: 22, nationality: 'Kenya', goals: 0, assists: 1, matches: 5, img: 'img/players/shoroyian.jpg', bio: 'Defensive midfielder who shields the back line.' },
  { name: 'Meoli', position: 'Goalkeeper', age: 27, nationality: 'Kenya', goals: 0, assists: 0, matches: 8, img: 'img/players/meoli.jpg', bio: 'First-choice keeper. Exceptional shot-stopper and commander.' },
];

// ─── Render Players ─────────────────────────────────────────
function renderPlayers(filtered) {
  const container = document.getElementById('players-container');
  const noResults = document.getElementById('no-results');
  if (!container) return;

  const list = filtered || players;

  if (list.length === 0) {
    container.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  if (noResults) noResults.style.display = 'none';

  container.innerHTML = list.map((p, i) => `
    <div class="player-card">
      <img src="${p.img}" alt="${p.name}" class="player-card-img" loading="lazy" onerror="this.src='img/craneslogo.png'; this.style.objectFit='contain'; this.style.padding='2rem'; this.style.background='var(--color-dark)';">
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

    const filtered = players.filter(p => {
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
