// Lightbox functionality for gallery.html
const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(type, src, caption) {
  // Remove previous content
  while (lightboxContent.children.length > 1) {
    lightboxContent.removeChild(lightboxContent.lastChild);
  }
  let media;
  if (type === 'image') {
    media = document.createElement('img');
    media.src = src;
    media.alt = caption || '';
  } else if (type === 'video') {
    media = document.createElement('video');
    media.src = src;
    media.controls = true;
    media.autoplay = true;
    media.style.background = '#000';
  }
  media.style.maxWidth = '90vw';
  media.style.maxHeight = '70vh';
  lightboxContent.appendChild(media);
  if (caption) {
    const cap = document.createElement('div');
    cap.className = 'lightbox-caption';
    cap.textContent = caption;
    lightboxContent.appendChild(cap);
  }
  lightbox.classList.add('active');
}

galleryGrid.addEventListener('click', function(e) {
  let item = e.target.closest('.gallery-item');
  if (!item) return;
  const type = item.getAttribute('data-type');
  const src = item.getAttribute('data-src');
  const caption = item.getAttribute('data-caption');
  openLightbox(type, src, caption);
});

lightboxClose.addEventListener('click', function() {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
}); 