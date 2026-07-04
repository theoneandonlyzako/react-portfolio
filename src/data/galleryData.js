// ============================================================
// Gallery content — the ONE place to edit photos, videos, categories.
//
// PHOTOS: drop any image into  src/assets/image/Gigs/  and it shows up
// automatically. Add an entry below (keyed by the exact filename) to give it
// a title, description, and category. No entry = it still appears, titled from
// its filename, under "Uncategorized" until captioned.
//
// CATEGORIES: just type one on any item. A new filter chip appears on its own.
// `categoryOrder` only controls the order the chips show in.
// ============================================================

export const photoMeta = {
  'zak1.jpg':  { title: 'Mic Test',            description: 'Testing the new install of the Waves LV1 system for NNC.', category: 'Broadcast' },
  'zak2.jpg':  { title: 'Monitors',            description: 'Running monitors!', category: 'Live sound' },
  'zak3.jpg':  { title: 'LV1 Training',        description: 'Training the guys on the new broadcast system.', category: 'Broadcast' },
  'zak4.jpg':  { title: 'Next to Normal',      description: 'My view at the Fox running sound for Next to Normal.', category: 'Theatre' },
  'zak5.jpg':  { title: 'Mobile Rig — Goliath', description: 'Just finished the mobile broadcast rig for NNC.', category: 'Broadcast' },
  'zak6.jpg':  { title: 'FOH at Stanford',     description: 'My beautiful view at Stanford University stadium.', category: 'Live sound' },
  'zak7.jpg':  { title: 'FOH at FCC',          description: 'My beautiful view at Foothill Community Church.', category: 'Live sound' },
  'zak8.jpg':  { title: 'Happy New Year!',     description: "BTS of the recording of New North Church's New Year sermon.", category: 'Studio' },
  'zak9.jpg':  { title: 'Mercy Me',            description: 'Backstage view of for KING & COUNTRY.', category: 'Live sound' },
  'zak10.jpg': { title: 'Mic Packs',           description: 'How I label mic packs for theatre.', category: 'Gear' },
  'zak11.jpg': { title: 'Million Dollar Quartet', description: 'My view at the Fox running sound for Million Dollar Quartet.', category: 'Theatre' },
  'zak12.jpg': { title: 'NNC Weekly Podcast',  description: 'Recording Rob and McKenna doing their thing.', category: 'Studio' },
  'zak13.jpg': { title: 'FOH at Borel',        description: 'Running rehearsal sound for FAME! at the Borel Musical Theatre.', category: 'Theatre' },
  'zak14.jpg': { title: 'FOH at Hillbarn',     description: 'Running sound for Mary Poppins at Hillbarn Theatre.', category: 'Theatre' },
  'zak15.jpg': { title: 'Mic World',           description: 'Backstage at the Fox — the craziness of receivers and racks.', category: 'Gear' },
  'zak16.jpg': { title: 'Closing Night — FAME!', description: 'Closing night of FAME! at Borel.', category: 'Theatre' },
  'zak17.jpg': { title: 'M7 Surgery',          description: 'Performing heart surgery on the M7 at NNC.', category: 'Gear' },
  'zak18.jpg': { title: 'Monitor World',       description: 'Monitor console for the MercyMe show.', category: 'Live sound' },
  'zak19.jpg': { title: 'Vegas, Baby!',        description: 'Fun broadcast work out in Las Vegas.', category: 'Broadcast' },
  'zak20.jpg': { title: 'Mics!',               description: "That's a lot of mics for one show.", category: 'Gear' },
};

// YouTube videos shown in the same wall. Add more by appending an object.
// `youtubeId` is the part after v= in a YouTube URL.
export const videos = [
  { youtubeId: 'usj7oG3tWSc', title: 'Live Mix for NNC', description: 'A full live worship mix for New North Church.', category: 'Live sound' },
  { youtubeId: '-Db0ye5toZc', title: 'Theatre Reel',     description: 'Highlights from recent theatre productions.', category: 'Theatre' },
];

// Order the filter chips appear in. Any category you use that is not listed
// here is appended automatically — invent new categories freely.
export const categoryOrder = ['Live sound', 'Theatre', 'Broadcast', 'Studio', 'Gear'];
