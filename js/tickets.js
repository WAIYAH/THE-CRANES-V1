/* ── Kanunka FC Tickets & Memberships Page Logic ── */

const ticketTypes = [
  {
    name: 'General Admission',
    price: 500,
    currency: 'KES',
    icon: 'fa-users',
    color: 'var(--color-accent)',
    features: ['Uncovered terrace seating', 'General entry', 'Access to concessions', 'Match day programme']
  },
  {
    name: 'Covered Stand',
    price: 1000,
    currency: 'KES',
    icon: 'fa-umbrella',
    color: 'var(--color-secondary)',
    popular: true,
    features: ['Covered seating area', 'Priority entry gate', 'Padded seats', 'Half-time refreshment voucher']
  },
  {
    name: 'VIP Lounge',
    price: 3000,
    currency: 'KES',
    icon: 'fa-crown',
    color: 'var(--color-primary)',
    features: ['Premium lounge access', 'Complimentary food & drinks', 'Best-view seating', 'Post-match player meet & greet']
  }
];

const membershipPackages = [
  {
    name: 'Bronze Fan',
    price: '5,000',
    period: 'per season',
    icon: 'fa-medal',
    color: '#cd7f32',
    features: ['All home general admission tickets', '10% merch discount', 'Members newsletter', 'Digital membership card']
  },
  {
    name: 'Silver Supporter',
    price: '12,000',
    period: 'per season',
    icon: 'fa-star',
    color: '#94a3b8',
    popular: true,
    features: ['All home covered-stand tickets', '20% merch discount', 'Priority ticket booking', 'Exclusive training session viewing', 'Members scarf']
  },
  {
    name: 'Gold Eagle',
    price: '30,000',
    period: 'per season',
    icon: 'fa-gem',
    color: '#f59e0b',
    features: ['All home VIP tickets', '30% merch discount', 'Away match travel subsidy', 'Player meet sessions', 'Name on donor wall', 'Personalised jersey']
  }
];

const stadiumInfo = [
  { icon: 'fa-map-marker-alt', title: 'Location', text: 'Kanunka Community Stadium, Kanunka Town, Kenya' },
  { icon: 'fa-car', title: 'Parking', text: 'Free parking available on-site. Arrive 1 hour early on derby days.' },
  { icon: 'fa-door-open', title: 'Gates Open', text: 'Stadium gates open 90 minutes before kick-off.' },
  { icon: 'fa-utensils', title: 'Food & Drink', text: 'Concession stands available inside. No outside food/drinks allowed.' },
  { icon: 'fa-baby', title: 'Family Zone', text: 'Dedicated family-friendly area with activities for children.' },
  { icon: 'fa-wheelchair', title: 'Accessibility', text: 'Wheelchair-accessible areas available. Contact us in advance to arrange.' }
];

const faqs = [
  { q: 'How do I purchase tickets?', a: 'Tickets can be purchased at the stadium box office on match day, or contact us via phone/email to reserve in advance.' },
  { q: 'Are tickets refundable?', a: 'Tickets are non-refundable but can be transferred to another person. Contact the box office for transfers.' },
  { q: 'Can children attend for free?', a: 'Children under 5 enter free when accompanied by a paying adult. Ages 5–12 receive a 50% discount on General Admission.' },
  { q: 'How do memberships work?', a: 'Memberships run for the full season. Benefits begin immediately after sign-up and include all remaining home matches.' },
  { q: 'Is there a student discount?', a: 'Yes, students with a valid ID receive 25% off General Admission and Covered Stand tickets.' }
];

function renderTicketCards() {
  const container = document.getElementById('ticket-cards');
  if (!container) return;

  container.innerHTML = ticketTypes.map(t => `
    <div class="card" style="padding: 1.75rem; text-align: center; position: relative; ${t.popular ? 'border: 2px solid var(--color-secondary);' : ''}">
      ${t.popular ? '<span style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--color-secondary); color: #fff; font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 1rem; text-transform: uppercase;">Most Popular</span>' : ''}
      <span style="width: 56px; height: 56px; border-radius: 50%; background: ${t.color}15; color: ${t.color}; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 1rem;">
        <i class="fas ${t.icon}"></i>
      </span>
      <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--color-text-primary);">${t.name}</h3>
      <p style="font-size: 2rem; font-weight: 800; color: var(--color-primary); margin-bottom: 0.25rem;">
        ${t.currency} ${t.price.toLocaleString()}
      </p>
      <p style="font-size: 0.78rem; color: var(--color-text-secondary); margin-bottom: 1.25rem;">per match</p>
      <ul style="list-style: none; padding: 0; text-align: left; margin-bottom: 1.5rem;">
        ${t.features.map(f => `<li style="font-size: 0.85rem; color: var(--color-text-secondary); padding: 0.35rem 0; border-bottom: 1px solid var(--color-border);"><i class="fas fa-check-circle" style="color: var(--color-accent); margin-right: 0.5rem;"></i>${f}</li>`).join('')}
      </ul>
      <a href="contact.html" class="btn-primary" style="width: 100%; display: block; text-align: center;">Buy Ticket</a>
    </div>
  `).join('');
}

function renderMembershipCards() {
  const container = document.getElementById('membership-cards');
  if (!container) return;

  container.innerHTML = membershipPackages.map(m => `
    <div class="card" style="padding: 1.75rem; text-align: center; position: relative; ${m.popular ? 'border: 2px solid var(--color-secondary);' : ''}">
      ${m.popular ? '<span style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--color-secondary); color: #fff; font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 1rem; text-transform: uppercase;">Best Value</span>' : ''}
      <span style="width: 56px; height: 56px; border-radius: 50%; background: ${m.color}20; color: ${m.color}; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 1rem;">
        <i class="fas ${m.icon}"></i>
      </span>
      <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--color-text-primary);">${m.name}</h3>
      <p style="font-size: 2rem; font-weight: 800; color: var(--color-primary); margin-bottom: 0.25rem;">
        KES ${m.price}
      </p>
      <p style="font-size: 0.78rem; color: var(--color-text-secondary); margin-bottom: 1.25rem;">${m.period}</p>
      <ul style="list-style: none; padding: 0; text-align: left; margin-bottom: 1.5rem;">
        ${m.features.map(f => `<li style="font-size: 0.85rem; color: var(--color-text-secondary); padding: 0.35rem 0; border-bottom: 1px solid var(--color-border);"><i class="fas fa-check-circle" style="color: var(--color-accent); margin-right: 0.5rem;"></i>${f}</li>`).join('')}
      </ul>
      <a href="contact.html" class="btn-primary" style="width: 100%; display: block; text-align: center;">Join Now</a>
    </div>
  `).join('');
}

function renderStadiumInfo() {
  const container = document.getElementById('stadium-info');
  if (!container) return;

  container.innerHTML = stadiumInfo.map(s => `
    <div style="background: rgba(255,255,255,0.05); border-radius: 0.75rem; padding: 1.25rem;">
      <i class="fas ${s.icon}" style="color: var(--color-secondary); font-size: 1.2rem; margin-bottom: 0.75rem;"></i>
      <h4 style="color: #f1f5f9; font-size: 0.95rem; margin-bottom: 0.5rem;">${s.title}</h4>
      <p style="color: #94a3b8; font-size: 0.85rem;">${s.text}</p>
    </div>
  `).join('');
}

function renderFAQ() {
  const container = document.getElementById('faq-list');
  if (!container) return;

  container.innerHTML = faqs.map((faq, i) => `
    <details style="border-bottom: 1px solid var(--color-border); padding: 1rem 0;" ${i === 0 ? 'open' : ''}>
      <summary style="font-weight: 600; font-size: 0.95rem; color: var(--color-text-primary); cursor: pointer; list-style: none; display: flex; align-items: center; justify-content: space-between;">
        ${faq.q}
        <i class="fas fa-chevron-down" style="font-size: 0.75rem; color: var(--color-text-secondary); transition: transform 0.3s;"></i>
      </summary>
      <p style="font-size: 0.88rem; color: var(--color-text-secondary); margin-top: 0.75rem; padding-left: 0.25rem;">${faq.a}</p>
    </details>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  KanunkaFC.initApp('tickets');
  KanunkaFC.initCountdown('2026-05-13T15:00:00', 'match-countdown');
  renderTicketCards();
  renderMembershipCards();
  renderStadiumInfo();
  renderFAQ();
});
