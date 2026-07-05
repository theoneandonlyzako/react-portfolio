/*
 * Local gallery caption editor.
 *
 * Run:  npm run edit:gallery   (or: node tools/gallery-editor/server.js)
 *
 * Opens a page showing every gallery photo with editable title, description,
 * and category. Click Save and it writes your changes back to
 * src/data/galleryData.json. Then deploy with `npm run deploy`.
 *
 * Uses only Node built-ins. Nothing is exposed online; it serves on localhost.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const ROOT = path.join(__dirname, '..', '..');
const DATA = path.join(ROOT, 'src', 'data', 'galleryData.json');
const GIGS = path.join(ROOT, 'src', 'assets', 'image', 'Gigs');
const PORT = 4400;

const MIME = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.webp': 'image/webp', '.html': 'text/html; charset=utf-8',
};

function send(res, code, type, body) {
  res.writeHead(code, { 'Content-Type': type });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const p = url.pathname;

  if (req.method === 'GET' && p === '/') {
    return send(res, 200, MIME['.html'], fs.readFileSync(path.join(__dirname, 'index.html')));
  }

  if (req.method === 'GET' && p === '/api/data') {
    return send(res, 200, 'application/json', fs.readFileSync(DATA));
  }

  if (req.method === 'GET' && p === '/api/images') {
    const files = fs.readdirSync(GIGS)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
    return send(res, 200, 'application/json', JSON.stringify(files));
  }

  if (req.method === 'GET' && p.startsWith('/images/')) {
    const file = decodeURIComponent(p.slice('/images/'.length));
    const fp = path.join(GIGS, file);
    if (!fp.startsWith(GIGS) || !fs.existsSync(fp)) return send(res, 404, 'text/plain', 'not found');
    res.writeHead(200, { 'Content-Type': MIME[path.extname(fp).toLowerCase()] || 'application/octet-stream' });
    return fs.createReadStream(fp).pipe(res);
  }

  if (req.method === 'POST' && p === '/api/save') {
    let body = '';
    req.on('data', (c) => { body += c; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        if (!data || typeof data.photoMeta !== 'object' || !Array.isArray(data.videos) || !Array.isArray(data.categoryOrder)) {
          throw new Error('Unexpected data shape');
        }
        // Back up the current file once per save, then write.
        fs.copyFileSync(DATA, DATA + '.bak');
        fs.writeFileSync(DATA, JSON.stringify(data, null, 2));
        return send(res, 200, 'application/json', JSON.stringify({ ok: true }));
      } catch (e) {
        return send(res, 400, 'application/json', JSON.stringify({ ok: false, error: String(e && e.message || e) }));
      }
    });
    return;
  }

  send(res, 404, 'text/plain', 'not found');
});

server.listen(PORT, () => {
  const u = 'http://localhost:' + PORT;
  console.log('\n  Gallery caption editor running at ' + u);
  console.log('  Edit captions, click Save, then run `npm run deploy` to publish.\n  Press Ctrl+C to stop.\n');
  exec('open "' + u + '"');
});
