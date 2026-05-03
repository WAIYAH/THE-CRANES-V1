/* ── Kanunka FC Careers Page Logic ── */

const jobListings = [
  {
    title: 'Striker Position',
    category: 'Playing Staff',
    icon: 'fa-futbol',
    description: 'Seeking a goal-scoring talent with pace, power, and clinical finishing ability to lead The Cranes attacking line.',
    requirements: ['Proven goal-scoring record', 'Age 18–30', 'Match-fit and available immediately'],
    deadline: 'June 1, 2026',
    type: 'Full-time'
  },
  {
    title: 'Assistant Coach',
    category: 'Technical Staff',
    icon: 'fa-clipboard-list',
    description: 'Support the head coach in training sessions, match preparation, tactical analysis and player development programmes.',
    requirements: ['CAF/FIFA coaching license', '3+ years coaching experience', 'Team leadership skills'],
    deadline: 'May 30, 2026',
    type: 'Full-time'
  },
  {
    title: 'Fitness Trainer',
    category: 'Technical Staff',
    icon: 'fa-heartbeat',
    description: 'Design and implement fitness programmes, manage player conditioning and injury prevention protocols.',
    requirements: ['Sports Science degree or equivalent', 'Experience in football fitness', 'First-aid certification'],
    deadline: 'June 10, 2026',
    type: 'Full-time'
  },
  {
    title: 'Administrative Staff',
    category: 'Operations',
    icon: 'fa-briefcase',
    description: 'Manage day-to-day club operations, scheduling, correspondence and club documentation.',
    requirements: ['Degree in Business Administration', 'Proficiency in MS Office', 'Excellent communication skills'],
    deadline: 'June 15, 2026',
    type: 'Full-time'
  }
];

function renderJobListings() {
  const container = document.getElementById('job-listings');
  if (!container) return;

  container.innerHTML = jobListings.map(job => `
    <div class="card" style="padding: 1.5rem;">
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
        <span style="width: 42px; height: 42px; border-radius: 50%; background: var(--color-primary); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1rem;">
          <i class="fas ${job.icon}"></i>
        </span>
        <div>
          <h3 style="font-size: 1.1rem; color: var(--color-text-primary); margin: 0;">${job.title}</h3>
          <span style="font-size: 0.75rem; color: var(--color-text-secondary);">${job.category} · ${job.type}</span>
        </div>
      </div>
      <p style="font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 1rem;">${job.description}</p>
      <ul style="list-style: none; padding: 0; margin: 0 0 1rem 0;">
        ${job.requirements.map(r => `<li style="font-size: 0.8rem; color: var(--color-text-secondary); padding: 0.2rem 0;"><i class="fas fa-check" style="color: var(--color-accent); margin-right: 0.5rem; font-size: 0.7rem;"></i>${r}</li>`).join('')}
      </ul>
      <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--color-border); padding-top: 0.75rem;">
        <span style="font-size: 0.78rem; color: var(--color-danger);"><i class="fas fa-clock"></i> Deadline: ${job.deadline}</span>
        <a href="#career-form" class="btn-primary btn-sm" style="font-size: 0.78rem;">Apply <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  KanunkaFC.initApp('careers');
  renderJobListings();
  KanunkaFC.initFormValidation('career-form', 'career-success');
});
