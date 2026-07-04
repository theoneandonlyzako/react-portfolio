import React from 'react';

// One gallery cell — a photo or a video thumbnail with a hover caption.
function GalleryTile({ item, onOpen }) {
  const isVideo = item.type === 'video';
  const src = isVideo ? item.thumb : item.src;

  return (
    <figure className="gallery-tile" onClick={onOpen} tabIndex={0}
      onKeyPress={(e) => { if (e.key === 'Enter') onOpen(); }}>
      <img className="gallery-tile-img" src={src} alt={item.title} loading="lazy" />
      <span className="gallery-tile-icon">
        <i className={isVideo ? 'fas fa-play' : 'fas fa-expand'}></i>
      </span>
      <figcaption className="gallery-tile-cap">
        <span className="gallery-tile-badge">{item.category}</span>
        <span className="gallery-tile-title">{item.title}</span>
      </figcaption>
    </figure>
  );
}

export default GalleryTile;
