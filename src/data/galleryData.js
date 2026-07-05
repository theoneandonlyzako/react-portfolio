// ============================================================
// Gallery content lives in galleryData.json (photoMeta, videos, categoryOrder).
//
// Easiest way to edit: run the local caption editor with `npm run edit:gallery`,
// which shows every photo with its title, description, and category and writes
// your changes back to galleryData.json. Then deploy.
//
// You can also edit galleryData.json by hand:
//   - PHOTOS: photoMeta is keyed by the exact filename in src/assets/image/Gigs/.
//   - CATEGORIES: type any category on a photo; a filter chip appears automatically.
//     categoryOrder only controls the order the chips show in.
//   - VIDEOS: add an object with youtubeId, title, description, category.
// ============================================================

import data from './galleryData.json';

export const photoMeta = data.photoMeta;
export const videos = data.videos;
export const categoryOrder = data.categoryOrder;
