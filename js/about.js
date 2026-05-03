/* ============================================================
   KANUNKA FC - ABOUT PAGE
   ============================================================ */

const ABOUT_SAMPLE_IMAGE = 'img/players/sample.jpg';

document.addEventListener('DOMContentLoaded', () => {
  KanunkaFC.initApp('about');
  renderManagement();
  renderCoaching();
  renderLegends();
});

function normalizeTokenSource(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .trim();
}

function imagePathMatchesName(name, imagePath) {
  const basename = String(imagePath || '')
    .split('/')
    .pop()
    .split('.')[0]
    .toLowerCase();

  if (!basename || basename === 'sample') return true;

  const tokens = normalizeTokenSource(name)
    .split(/\s+/)
    .filter(token => token.length >= 3);

  return tokens.some(token => basename.includes(token));
}

function enforceStrictNameImageMatch(people) {
  return people.map(person => ({
    ...person,
    img: imagePathMatchesName(person.name, person.img) ? person.img : ABOUT_SAMPLE_IMAGE
  }));
}

function renderPersonCard(person, dark = false) {
  return `
    <div class="card" style="${dark ? 'background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.08);' : ''}">
      <img src="${person.img}" alt="${person.name}" class="card-img" loading="lazy" onerror="this.src='img/players/sample.jpg'; this.style.objectFit='contain'; this.style.padding='2rem'; this.style.background='var(--color-dark)';">
      <div class="card-body" style="text-align: center;">
        <h4 style="font-size: 1rem; margin-bottom: 0.25rem; ${dark ? 'color: #f1f5f9;' : ''}">${person.name}</h4>
        <p style="font-size: 0.8rem; color: var(--color-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">${person.role}</p>
        <p style="font-size: 0.8rem; color: ${dark ? '#94a3b8' : 'var(--color-text-muted)'}; line-height: 1.5;">${person.bio}</p>
      </div>
    </div>
  `;
}

function renderManagement() {
  const container = document.getElementById('management-grid');
  if (!container) return;

  const management = enforceStrictNameImageMatch([
    { name: 'Ben Leshinka', role: 'Chairman', img: 'img/management/ben.jpg', bio: 'Visionary leader who has guided Kanunka FC from grassroots to glory since 2002.' },
    { name: 'Solomon Kudate', role: 'Chief Executive Officer', img: 'img/management/kenny.jpg', bio: 'Overseeing the club\'s operations and strategic growth initiatives.' }
  ]);

  container.innerHTML = management.map(person => renderPersonCard(person)).join('');
}

function renderCoaching() {
  const container = document.getElementById('coaching-grid');
  if (!container) return;

  const staff = enforceStrictNameImageMatch([
    { name: 'Idris Ole', role: 'Head Coach', img: 'img/management/coach.jpg', bio: 'Tactical mastermind leading The Cranes to new heights.' },
    { name: 'Fabish Kudate', role: 'Assistant Coach', img: 'img/management/fabish.jpg', bio: 'Key support to the head coach with deep tactical knowledge.' },
    { name: 'Jack Silantoi', role: 'Co-ordinator', img: 'img/management/jack.jpg', bio: 'Ensuring smooth operations on and off the pitch.' },
    { name: 'Nick Kaiseyie', role: 'Discipline Master', img: 'img/management/nick.jpg', bio: 'Maintaining standards and professionalism in the squad.' },
    { name: 'Jamlick Tein', role: 'Physio Trainer', img: 'img/players/jamlick.jpg', bio: 'Keeping the squad fit and ready for battle.' },
    { name: 'Ramos Kukuni', role: 'Club Captain', img: 'img/players/ramos.jpg', bio: 'Leading by example on the pitch. Heart and soul of The Cranes.' },
    { name: 'Leshan Kaiseyie', role: 'Assistant Captain', img: 'img/players/leshan.jpg', bio: 'Reliable deputy who embodies the spirit of the club.' }
  ]);

  container.innerHTML = staff.map(person => renderPersonCard(person)).join('');
}

function renderLegends() {
  const container = document.getElementById('legends-grid');
  if (!container) return;

  const legends = enforceStrictNameImageMatch([
    { name: 'Ken Kaiseyie', role: 'Legend - Defender', img: 'img/players/kanyinge.jpg', bio: 'A rock at the back for over a decade. Club record holder for appearances.' },
    { name: 'Benson Leshinka', role: 'Legend - Striker', img: 'img/players/newsigning.jpg', bio: 'Prolific goal scorer and fan favorite. All-time top scorer.' },
    { name: 'Jordan Kaiseyie', role: 'Legend - Midfielder', img: 'img/players/simel.jpg', bio: 'Creative genius who controlled the tempo of every match.' },
    { name: 'Maru Mwangi', role: 'Legend - Forward', img: 'img/players/lanyorr.jpg', bio: 'Explosive pace and killer instinct in front of goal.' },
    { name: 'Patrick Tago', role: 'Past Manager', img: 'img/management/rangayia.jpg', bio: 'Led The Cranes to their first-ever league title in 2007.' },
    { name: 'Mark Lenjirr', role: 'Legend - Defender', img: 'img/players/ramsey-gk.jpg', bio: 'Commanding presence who marshalled the defense with authority.' },
    { name: 'Ledama Liaram', role: 'Legend - Midfielder', img: 'img/players/anderson.jpg', bio: 'Tireless box-to-box midfielder with incredible stamina.' },
    { name: 'Kaparo Liaram', role: 'Legend - Striker', img: 'img/players/malah.jpg', bio: 'Sharp shooter with an eye for spectacular goals.' },
    { name: 'Sirere Kaiseyie', role: 'Legend - Goalkeeper', img: 'img/players/jack.jpg', bio: 'Legendary shot-stopper who kept countless clean sheets.' }
  ]);

  container.innerHTML = legends.map(person => renderPersonCard(person, true)).join('');
}

