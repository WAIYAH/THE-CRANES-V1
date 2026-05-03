/* ============================================================
   KANUNKA FC - MATCHES PAGE
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  KanunkaFC.initApp('matches');
  renderFormGuide();
  renderStandings();
  renderFixtures();
  renderResults();
  renderStats();
  initResultsFilter();
});

// ─── Form Guide ─────────────────────────────────────────────
function renderFormGuide() {
  const container = document.getElementById('form-guide');
  if (!container) return;

  const form = [
    { result: 'W', opponent: 'OITI FC', score: '2-0' },
    { result: 'W', opponent: 'Osero FC', score: '2-0' },
    { result: 'W', opponent: 'Kish FC', score: '3-1' },
    { result: 'D', opponent: 'Salama FC', score: '1-1' },
    { result: 'W', opponent: 'Oloika FC', score: '4-0' }
  ];

  const colors = { W: 'var(--color-accent)', D: 'var(--color-secondary)', L: 'var(--color-danger)' };

  container.innerHTML = form.map(f => `
    <div style="text-align: center; width: 80px;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background: ${colors[f.result]}; color: ${f.result === 'D' ? 'var(--color-dark)' : '#fff'}; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; margin: 0 auto 0.5rem;">${f.result}</div>
      <div style="font-size: 0.75rem; color: #94a3b8;">${f.opponent}</div>
      <div style="font-size: 0.7rem; font-weight: 600; color: #cbd5e1;">${f.score}</div>
    </div>
  `).join('');
}

// ─── League Standings ───────────────────────────────────────
function renderStandings() {
  const tbody = document.getElementById('standings-body');
  if (!tbody) return;

  const teams = [
    { pos: 1, team: 'Kosika FC', p: 8, w: 7, d: 1, l: 0, f: 14, a: 4, gd: 10, pts: 22 },
    { pos: 2, team: 'Kanunka Cranes FC', p: 8, w: 6, d: 2, l: 0, f: 25, a: 3, gd: 22, pts: 20, highlight: true },
    { pos: 3, team: 'Salama FC', p: 7, w: 4, d: 1, l: 2, f: 10, a: 10, gd: 0, pts: 13 },
    { pos: 4, team: 'Kish FC', p: 7, w: 2, d: 2, l: 3, f: 9, a: 7, gd: 2, pts: 8 },
    { pos: 5, team: 'Osero FC', p: 8, w: 1, d: 2, l: 5, f: 3, a: 10, gd: -7, pts: 5 },
    { pos: 6, team: 'Oloika FC', p: 7, w: 1, d: 1, l: 5, f: 7, a: 15, gd: -8, pts: 4 },
    { pos: 7, team: 'Oiti FC', p: 7, w: 0, d: 1, l: 6, f: 1, a: 16, gd: -15, pts: 1 }
  ];

  tbody.innerHTML = teams.map(t => `
    <tr class="${t.highlight ? 'highlight-row' : ''}">
      <td style="font-weight: 700;">${t.pos}</td>
      <td style="font-weight: ${t.highlight ? '800' : '500'};">${t.team}</td>
      <td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td>
      <td>${t.f}</td><td>${t.a}</td>
      <td style="color: ${t.gd > 0 ? 'var(--color-accent)' : t.gd < 0 ? 'var(--color-danger)' : 'inherit'}; font-weight: 600;">${t.gd > 0 ? '+' : ''}${t.gd}</td>
      <td style="font-weight: 800;">${t.pts}</td>
    </tr>
  `).join('');
}

// ─── Fixtures ───────────────────────────────────────────────
function renderFixtures() {
  const container = document.getElementById('fixtures-grid');
  if (!container) return;

  const fixtures = [
    { home: 'Kanunka Cranes FC', away: 'Oiti FC', date: 'May 13, 2026', time: '3:00 PM', venue: 'Cranes Stadium', homeLogo: 'img/logo/craneslogo.png' },
    { home: 'Kosika FC', away: 'Salama FC', date: 'May 17, 2026', time: '3:00 PM', venue: 'Koseka Stadium', homeLogo: '' },
    { home: 'Kanunka Cranes FC', away: 'Osero FC', date: 'May 24, 2026', time: '3:00 PM', venue: 'Cranes Stadium', homeLogo: 'img/logo/craneslogo.png' },
    { home: 'Oloika FC', away: 'Kanunka Cranes FC', date: 'May 31, 2026', time: '3:00 PM', venue: 'Oloika Grounds', homeLogo: '' },
    { home: 'Kanunka Cranes FC', away: 'Kosika FC', date: 'Jun 7, 2026', time: '3:00 PM', venue: 'Cranes Stadium', homeLogo: 'img/logo/craneslogo.png' },
    { home: 'Kish FC', away: 'Kanunka Cranes FC', date: 'Jun 14, 2026', time: '3:00 PM', venue: 'Kish Stadium', homeLogo: '' }
  ];

  container.innerHTML = fixtures.map(f => `
    <div class="match-card" style="padding: 1.5rem;">
      <span class="card-badge" style="display: block; text-align: center; margin-bottom: 0.75rem; background: rgba(16,185,129,0.1); color: var(--color-accent);">Scheduled</span>
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.75rem;">
        <div style="text-align: center; flex: 1;"><span style="font-weight: 700; font-size: 0.85rem;">${f.home}</span></div>
        <div style="font-weight: 800; color: var(--color-text-muted);">vs</div>
        <div style="text-align: center; flex: 1;"><span style="font-weight: 700; font-size: 0.85rem;">${f.away}</span></div>
      </div>
      <div class="match-meta" style="text-align: center;">
        <p><i class="far fa-calendar"></i> ${f.date} &nbsp; <i class="far fa-clock"></i> ${f.time}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${f.venue}</p>
      </div>
    </div>
  `).join('');
}

// ─── Results ────────────────────────────────────────────────
const allResults = [
  { home: 'Kanunka Cranes FC', away: 'OITI FC', homeScore: 2, awayScore: 0, date: 'Apr 3, 2025', competition: 'league' },
  { home: 'Kish FC', away: 'Kosika FC', homeScore: 1, awayScore: 2, date: 'Apr 6, 2025', competition: 'league' },
  { home: 'Osero FC', away: 'Kanunka Cranes FC', homeScore: 0, awayScore: 2, date: 'Apr 6, 2025', competition: 'league' },
  { home: 'Osero FC', away: 'Oloika FC', homeScore: 3, awayScore: 2, date: 'Mar 24, 2025', competition: 'league' },
  { home: 'Kanunka Cranes FC', away: 'Kish FC', homeScore: 3, awayScore: 1, date: 'Mar 15, 2025', competition: 'league' },
  { home: 'Kanunka Cranes FC', away: 'Oloika FC', homeScore: 4, awayScore: 0, date: 'Mar 8, 2025', competition: 'league' },
  { home: 'Salama FC', away: 'Kanunka Cranes FC', homeScore: 1, awayScore: 1, date: 'Mar 1, 2025', competition: 'league' }
];

function renderResults(filter = 'all') {
  const container = document.getElementById('results-grid');
  if (!container) return;

  const filtered = filter === 'all' ? allResults : allResults.filter(r => r.competition === filter);

  container.innerHTML = filtered.map(r => {
    const isKanunka = r.home.includes('Kanunka') || r.away.includes('Kanunka');
    let resultColor = 'var(--color-text-muted)';
    if (isKanunka) {
      const kanunkaScore = r.home.includes('Kanunka') ? r.homeScore : r.awayScore;
      const opponentScore = r.home.includes('Kanunka') ? r.awayScore : r.homeScore;
      if (kanunkaScore > opponentScore) resultColor = 'var(--color-accent)';
      else if (kanunkaScore < opponentScore) resultColor = 'var(--color-danger)';
      else resultColor = 'var(--color-secondary)';
    }
    return `
      <div class="match-card" style="padding: 1.25rem;">
        <span class="card-badge" style="display: block; text-align: center; margin-bottom: 0.5rem;">${r.competition}</span>
        <div style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; margin-bottom: 0.5rem;">
          <span style="font-weight: 600; font-size: 0.85rem; flex: 1; text-align: right;">${r.home}</span>
          <span style="font-weight: 900; font-size: 1.3rem; color: ${resultColor}; font-variant-numeric: tabular-nums;">${r.homeScore} - ${r.awayScore}</span>
          <span style="font-weight: 600; font-size: 0.85rem; flex: 1; text-align: left;">${r.away}</span>
        </div>
        <div class="match-meta" style="text-align: center;"><i class="far fa-calendar"></i> ${r.date}</div>
      </div>
    `;
  }).join('');
}

function initResultsFilter() {
  document.querySelectorAll('[data-comp]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-comp]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderResults(btn.dataset.comp);
    });
  });
}

// ─── Statistics ─────────────────────────────────────────────
function renderStats() {
  // Top Scorers
  const scorersEl = document.getElementById('top-scorers');
  if (scorersEl) {
    const scorers = [
      { name: 'Olanyorr Kulou', goals: 15 },
      { name: 'Nkababa', goals: 3 },
      { name: 'Lacazette', goals: 2 },
      { name: 'Mpaira', goals: 2 },
      { name: 'Palmer', goals: 2 },
      { name: 'Saika', goals: 2 },
      { name: 'Ramos K.', goals: 2 }
    ];

    const maxGoals = scorers[0].goals;
    scorersEl.innerHTML = scorers.map((s, i) => `
      <div class="stat-bar">
        <div class="stat-bar-header">
          <span style="color: #e2e8f0; font-weight: ${i === 0 ? '700' : '400'};">${s.name}</span>
          <span style="color: var(--color-secondary); font-weight: 700;">${s.goals}</span>
        </div>
        <div class="stat-bar-track" style="background: rgba(255,255,255,0.1);">
          <div class="stat-bar-fill" style="width: ${(s.goals / maxGoals) * 100}%; background: ${i === 0 ? 'var(--color-secondary)' : 'var(--color-primary-light)'};"></div>
        </div>
      </div>
    `).join('');
  }

  // Team Stats
  const statsEl = document.getElementById('team-stats');
  if (statsEl) {
    const stats = [
      { label: 'Goals Scored', value: 25, icon: 'fa-futbol', color: 'var(--color-accent)' },
      { label: 'Goals Conceded', value: 3, icon: 'fa-shield-alt', color: 'var(--color-primary-light)' },
      { label: 'Clean Sheets', value: 4, icon: 'fa-hand-paper', color: 'var(--color-secondary)' },
      { label: 'Win Rate', value: '75%', icon: 'fa-trophy', color: 'var(--color-secondary)' },
      { label: 'Matches Played', value: 8, icon: 'fa-calendar-check', color: '#94a3b8' }
    ];

    statsEl.innerHTML = stats.map(s => `
      <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 0.75rem; margin-bottom: 0.75rem;">
        <div style="width: 40px; height: 40px; border-radius: 0.5rem; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center;">
          <i class="fas ${s.icon}" style="color: ${s.color};"></i>
        </div>
        <div style="flex: 1;">
          <div style="font-size: 0.8rem; color: #94a3b8;">${s.label}</div>
          <div style="font-size: 1.25rem; font-weight: 800; color: #f1f5f9;">${s.value}</div>
        </div>
      </div>
    `).join('');
  }
}
