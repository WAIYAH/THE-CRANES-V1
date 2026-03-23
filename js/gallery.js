/* ============================================================
   KANUNKA FC - GALLERY PAGE
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  KanunkaFC.initApp('gallery');
  KanunkaFC.initLightbox();
  renderPhotos();
  renderVideos();
  initPhotoFilter();
});

const photos = [
  { src: 'img/random/game.jpg', caption: 'Match Action', category: 'matches' },
  { src: 'img/random/game2.jpg', caption: 'Goal Celebration', category: 'matches' },
  { src: 'img/squad/squad.jpg', caption: 'Team Line-up', category: 'matches' },
  { src: 'img/training/train1.jpg', caption: 'Training Session', category: 'training' },
  { src: 'img/training/train2.jpg', caption: 'Fitness Drills', category: 'training' },
  { src: 'img/training/train3.jpg', caption: 'Practice Match', category: 'training' },
  { src: 'img/Management/chairman.jpg', caption: 'Chairman Address', category: 'behind-the-scenes' },
  { src: 'img/Management/ceo.jpg', caption: 'CEO Meeting', category: 'behind-the-scenes' },
  { src: 'img/random/game.jpg', caption: 'Pre-Match Preparations', category: 'behind-the-scenes' },
  { src: 'img/random/game2.jpg', caption: 'Locker Room', category: 'behind-the-scenes' },
  { src: 'img/fans/fan1.jpg', caption: 'Fan Zone', category: 'fans' },
  { src: 'img/fans/fan2.jpg', caption: 'Match Day Atmosphere', category: 'fans' },
  { src: 'img/fans/fan3.jpg', caption: 'Supporters Celebration', category: 'fans' }
];

function renderPhotos(filter = 'all') {
  const container = document.getElementById('photo-gallery');
  if (!container) return;

  const filtered = filter === 'all' ? photos : photos.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <div class="card" style="cursor: zoom-in;" data-lightbox="${p.src}">
      <div style="position: relative; overflow: hidden;">
        <img src="${p.src}" alt="${p.caption}" class="card-img" loading="lazy" style="transition: transform 0.3s ease;">
        <div style="position: absolute; inset: 0; background: linear-gradient(transparent 50%, rgba(0,0,0,0.7)); display: flex; align-items: flex-end; padding: 1rem; opacity: 0; transition: opacity 0.3s ease;" onmouseover="this.style.opacity=1; this.previousElementSibling.style.transform='scale(1.05)'" onmouseout="this.style.opacity=0; this.previousElementSibling.style.transform='scale(1)'">
          <span style="color: #fff; font-size: 0.85rem; font-weight: 600;">${p.caption}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderVideos() {
  const container = document.getElementById('video-gallery');
  if (!container) return;

  const videos = [
    { title: 'Season Highlights 2024/25', thumbnail: 'img/random/game2.jpg', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Kanunka FC 2-0 OITI FC', thumbnail: 'img/random/game.jpg', type: 'local', src: 'img/videos/video.mp4' },
    { title: 'Training Ground Skills', thumbnail: 'img/training/train1.jpg', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
  ];

  container.innerHTML = videos.map(v => `
    <div class="card" style="cursor: pointer;" ${v.url ? `onclick="window.open('${v.url}', '_blank')"` : ''}>
      <div style="position: relative; height: 220px; overflow: hidden;">
        ${v.type === 'local'
          ? `<video style="width:100%; height:100%; object-fit:cover;" muted preload="metadata"><source src="${v.src}" type="video/mp4"></video>`
          : `<img src="${v.thumbnail}" alt="${v.title}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">`
        }
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.35);">
          <div style="width: 56px; height: 56px; background: var(--color-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: transform 0.2s ease;">
            <i class="fas fa-play" style="color: var(--color-dark); font-size: 1.1rem; margin-left: 3px;"></i>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h4 style="font-size: 0.95rem;">${v.title}</h4>
        <span style="font-size: 0.75rem; color: var(--color-text-muted);"><i class="fas fa-play-circle"></i> Watch now</span>
      </div>
    </div>
  `).join('');
}

function initPhotoFilter() {
  document.querySelectorAll('[data-photo]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-photo]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPhotos(btn.dataset.photo);
    });
  });
}
