import React, { useEffect, useCallback } from 'react';

// Full-screen viewer with keyboard + arrow navigation over the current items.
function GalleryLightbox({ items, index, onClose, onNav }) {
  const item = items[index];

  const prev = useCallback(() => onNav((index - 1 + items.length) % items.length), [index, items.length, onNav]);
  const next = useCallback(() => onNav((index + 1) % items.length), [index, items.length, onNav]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  if (!item) return null;
  const isVideo = item.type === 'video';

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <i className="fas fa-times"></i>
      </button>
      <button className="lightbox-nav lightbox-prev"
        onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
        <i className="fas fa-chevron-left"></i>
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-media">
          {isVideo
            ? <iframe title={item.title}
                src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            : <img src={item.src} alt={item.title} />}
        </div>
        <div className="lightbox-caption">
          <span className="gallery-tile-badge">{item.category}</span>
          <h4>{item.title}</h4>
          {item.description && <p>{item.description}</p>}
          <span className="lightbox-counter">{index + 1} / {items.length}</span>
        </div>
      </div>

      <button className="lightbox-nav lightbox-next"
        onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default GalleryLightbox;
