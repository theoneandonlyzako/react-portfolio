import React, { useState, useMemo } from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

// import custom components
import GalleryTile from '../components/Gallery';
import GalleryLightbox from '../components/GalleryLightbox';

// import gallery content
import { photoMeta, videos, categoryOrder } from '../data/galleryData';

// Turn "beach-day_2.jpg" into "Beach Day 2" for un-captioned drops.
function humanize(file) {
  return file.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

// Auto-import every image dumped into assets/image/Gigs; new files appear on reload.
const ctx = require.context('../assets/image/Gigs', false, /\.(png|jpe?g|svg|webp)$/i);
const photos = ctx.keys()
  .map((key) => {
    const file = key.replace('./', '');
    const m = photoMeta[file] || {};
    return {
      type: 'image',
      src: ctx(key),
      file,
      title: m.title || humanize(file),
      description: m.description || '',
      category: m.category || 'Uncategorized',
    };
  })
  .sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true, sensitivity: 'base' }));

const videoItems = videos.map((v) => ({
  type: 'video',
  youtubeId: v.youtubeId,
  thumb: `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`,
  title: v.title,
  description: v.description || '',
  category: v.category || 'Uncategorized',
}));

const ALL_ITEMS = photos.concat(videoItems);

// Filter chips: preferred order first, then any invented categories, alphabetically.
const usedCats = Array.from(new Set(ALL_ITEMS.map((i) => i.category)));
const ordered = categoryOrder.filter((c) => usedCats.includes(c));
const extras = usedCats.filter((c) => !categoryOrder.includes(c)).sort();
const CATEGORIES = ['All', ...ordered, ...extras];

function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const items = useMemo(
    () => (filter === 'All' ? ALL_ITEMS : ALL_ITEMS.filter((i) => i.category === filter)),
    [filter]
  );

  function selectFilter(c) {
    setFilter(c);
    setLightboxIndex(null);
  }

  return (
    <>
      <Jumbotron fluid className="p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1 className="text-dark">Picture Gallery</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container className="py-4">
        <div className="gallery-filters">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={'gallery-chip' + (filter === c ? ' active' : '')}
              onClick={() => selectFilter(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="gallery-masonry">
          {items.map((item, idx) => (
            <GalleryTile
              key={(item.file || item.youtubeId) + idx}
              item={item}
              onOpen={() => setLightboxIndex(idx)} />
          ))}
        </div>

        {items.length === 0 && (
          <p className="gallery-empty">No items in this category yet.</p>
        )}
      </Container>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNav={setLightboxIndex} />
      )}
    </>
  );
}

export default Gallery;
