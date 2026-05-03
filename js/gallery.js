/* ============================================================
   KANUNKA FC - GALLERY PAGE
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  KanunkaFC.initApp('gallery');
  KanunkaFC.initLightbox();
  renderPhotos();
  renderVideos();
  initPhotoFilter();
  initLoadMore();
});

const photos = (window.KanunkaMedia?.photos || []);
const STEP = 24;
let activeFilter = 'all';
let visibleCount = STEP;

function getFilteredPhotos() {
  return activeFilter === 'all'
    ? photos
    : photos.filter(photo => photo.category === activeFilter);
}

function renderPhotos() {
  const container = document.getElementById('photo-gallery');
  const summary = document.getElementById('gallery-summary');
  const loadMore = document.getElementById('load-more-photos');
  if (!container) return;

  const filtered = getFilteredPhotos();
  const visible = filtered.slice(0, visibleCount);

  if (filtered.length === 0) {
    container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--color-text-muted);">No photos found in this category yet.</p>';
    if (summary) summary.textContent = 'No photos available.';
    if (loadMore) loadMore.style.display = 'none';
    return;
  }

  container.innerHTML = visible.map((p, i) => `
    <div class="card" style="cursor: zoom-in;" data-lightbox="${p.src}" data-caption="${p.caption}">
      <div style="position: relative; overflow: hidden;">
        <img src="${p.src}" alt="${p.caption}" class="card-img" loading="${i < 8 ? 'eager' : 'lazy'}" style="transition: transform 0.3s ease;">
        <div style="position: absolute; inset: 0; background: linear-gradient(transparent 50%, rgba(0,0,0,0.7)); display: flex; align-items: flex-end; padding: 1rem; opacity: 0; transition: opacity 0.3s ease;" onmouseover="this.style.opacity=1; this.previousElementSibling.style.transform='scale(1.05)'" onmouseout="this.style.opacity=0; this.previousElementSibling.style.transform='scale(1)'">
          <span style="color: #fff; font-size: 0.85rem; font-weight: 600;">${p.caption}</span>
        </div>
      </div>
    </div>
  `).join('');

  if (summary) {
    const label = activeFilter === 'all'
      ? 'all categories'
      : activeFilter.replace(/-/g, ' ');
    summary.textContent = `Showing ${visible.length} of ${filtered.length} photos from ${label}.`;
  }

  if (loadMore) {
    loadMore.style.display = visibleCount < filtered.length ? 'inline-flex' : 'none';
  }
}

function renderVideos() {
  const container = document.getElementById('video-gallery');
  if (!container) return;

  const matchThumb = photos.find(photo => photo.category === 'matches')?.src || 'img/photos/root__bac.jpg';
  const trainingThumb = photos.find(photo => photo.category === 'training')?.src || 'img/photos/root__bac2.jpg';

  const videos = [
    { title: 'Season Highlights 2024/25', thumbnail: matchThumb, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Kanunka FC 2-0 OITI FC', thumbnail: matchThumb, type: 'local', src: 'img/videos/Man Utd v Southampton(720P_HD).mp4' },
    { title: 'Training Ground Skills', thumbnail: trainingThumb, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
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
      activeFilter = btn.dataset.photo;
      visibleCount = STEP;
      renderPhotos();
    });
  });
}

function initLoadMore() {
  const btn = document.getElementById('load-more-photos');
  if (!btn) return;

  btn.addEventListener('click', () => {
    visibleCount += STEP;
    renderPhotos();
  });
}
