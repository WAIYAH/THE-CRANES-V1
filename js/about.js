/* ============================================================
   KANUNKA FC - ABOUT PAGE
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  KanunkaFC.initApp('about');
  renderManagement();
  renderCoaching();
  renderLegends();
});

function renderPersonCard(person, dark = false) {
  return `
    <div class="card" style="${dark ? 'background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.08);' : ''}">
      <img src="${person.img}" alt="${person.name}" class="card-img" loading="lazy" onerror="this.src='img/craneslogo.png'; this.style.objectFit='contain'; this.style.padding='2rem'; this.style.background='var(--color-dark)';">
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

  const management = [
    { name: 'Ben Leshinka', role: 'Chairman', img: 'img/Management/chairman.jpg', bio: 'Visionary leader who has guided Kanunka FC from grassroots to glory since 2002.' },
    { name: 'Solomon Kudate', role: 'Chief Executive Officer', img: 'img/Management/ceo.jpg', bio: 'Overseeing the club\'s operations and strategic growth initiatives.' }
  ];

  container.innerHTML = management.map(p => renderPersonCard(p)).join('');
}

function renderCoaching() {
  const container = document.getElementById('coaching-grid');
  if (!container) return;

  const staff = [
    { name: 'Idris Ole', role: 'Head Coach', img: 'img/Management/coach.jpg', bio: 'Tactical mastermind leading The Cranes to new heights.' },
    { name: 'Fabish Kudate', role: 'Assistant Coach', img: 'img/Management/assistant.jpg', bio: 'Key support to the head coach with deep tactical knowledge.' },
    { name: 'Jack Silantoi', role: 'Co-ordinator', img: 'img/Management/coordinator.jpg', bio: 'Ensuring smooth operations on and off the pitch.' },
    { name: 'Nick Kaiseyie', role: 'Discipline Master', img: 'img/Management/discipline.jpg', bio: 'Maintaining standards and professionalism in the squad.' },
    { name: 'Jamlick Tein', role: 'Physio Trainer', img: 'img/Management/physio.jpg', bio: 'Keeping the squad fit and ready for battle.' },
    { name: 'Ramos Kukuni', role: 'Club Captain', img: 'img/players/ramos.jpg', bio: 'Leading by example on the pitch. Heart and soul of The Cranes.' },
    { name: 'Leshan Kaiseyie', role: 'Assistant Captain', img: 'img/players/leshan.jpg', bio: 'Reliable deputy who embodies the spirit of the club.' }
  ];

  container.innerHTML = staff.map(p => renderPersonCard(p)).join('');
}

function renderLegends() {
  const container = document.getElementById('legends-grid');
  if (!container) return;

  const legends = [
    { name: 'Ken Kaiseyie', role: 'Legend - Defender', img: 'img/players/ken.jpg', bio: 'A rock at the back for over a decade. Club record holder for appearances.' },
    { name: 'Benson Leshinka', role: 'Legend - Striker', img: 'img/players/benson.jpg', bio: 'Prolific goal scorer and fan favorite. All-time top scorer.' },
    { name: 'Jordan Kaiseyie', role: 'Legend - Midfielder', img: 'img/players/jordan.jpg', bio: 'Creative genius who controlled the tempo of every match.' },
    { name: 'Maru Mwangi', role: 'Legend - Forward', img: 'img/players/maru.jpg', bio: 'Explosive pace and killer instinct in front of goal.' },
    { name: 'Patrick Tago', role: 'Past Manager', img: 'img/Management/tago.jpg', bio: 'Led The Cranes to their first-ever league title in 2007.' },
    { name: 'Mark Lenjirr', role: 'Legend - Defender', img: 'img/players/lenjirr.jpg', bio: 'Commanding presence who marshalled the defense with authority.' },
    { name: 'Ledama Liaram', role: 'Legend - Midfielder', img: 'img/players/ledama.jpg', bio: 'Tireless box-to-box midfielder with incredible stamina.' },
    { name: 'Kaparo Liaram', role: 'Legend - Striker', img: 'img/players/kaparo.jpg', bio: 'Sharp shooter with an eye for spectacular goals.' },
    { name: 'Sirere Kaiseyie', role: 'Legend - Goalkeeper', img: 'img/players/sirere.jpg', bio: 'Legendary shot-stopper who kept countless clean sheets.' }
  ];

  container.innerHTML = legends.map(p => renderPersonCard(p, true)).join('');
}
