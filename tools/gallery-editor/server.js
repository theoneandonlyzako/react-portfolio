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
const os = require('os');
const path = require('path');
const { exec, execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..', '..');
const DATA = path.join(ROOT, 'src', 'data', 'galleryData.json');
const PROJECTS = path.join(ROOT, 'src', 'data', 'projects.json');
const GIGS = path.join(ROOT, 'src', 'assets', 'image', 'Gigs');
const ASSETS = path.join(ROOT, 'src', 'assets', 'image');
const ORIGINALS = path.join(os.homedir(), 'Documents', 'CODING_PROJECTS', 'zakstamps-gallery-originals', 'photos-fullres');
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

  if (req.method === 'GET' && p === '/api/projects') {
    return send(res, 200, 'application/json', fs.readFileSync(PROJECTS));
  }

  if (req.method === 'GET' && p === '/api/project-images') {
    const files = fs.readdirSync(ASSETS)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    return send(res, 200, 'application/json', JSON.stringify(files));
  }

  if (req.method === 'GET' && p.startsWith('/project-images/')) {
    const file = decodeURIComponent(p.slice('/project-images/'.length));
    const fp = path.join(ASSETS, file);
    if (!fp.startsWith(ASSETS) || !fs.existsSync(fp) || fs.statSync(fp).isDirectory()) return send(res, 404, 'text/plain', 'not found');
    res.writeHead(200, { 'Content-Type': MIME[path.extname(fp).toLowerCase()] || 'application/octet-stream' });
    return fs.createReadStream(fp).pipe(res);
  }

  if (req.method === 'POST' && p === '/api/projects/save') {
    let body = '';
    req.on('data', (c) => { body += c; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        if (!data || !Array.isArray(data.projects) || !Array.isArray(data.videos)) throw new Error('Unexpected data shape');
        fs.copyFileSync(PROJECTS, PROJECTS + '.bak');
        fs.writeFileSync(PROJECTS, JSON.stringify(data, null, 2));
        return send(res, 200, 'application/json', JSON.stringify({ ok: true }));
      } catch (e) {
        return send(res, 400, 'application/json', JSON.stringify({ ok: false, error: String((e && e.message) || e) }));
      }
    });
    return;
  }

  if (req.method === 'POST' && p === '/api/project-upload') {
    const rawName = url.searchParams.get('name') || 'project';
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => {
      try {
        const buf = Buffer.concat(chunks);
        if (!buf.length) throw new Error('empty upload');
        const safe = path.basename(rawName).replace(/[^a-zA-Z0-9._-]+/g, '_');
        let base = safe.replace(/\.[^.]+$/, '') || 'project';
        let out = base + '.jpg';
        let i = 1;
        while (fs.existsSync(path.join(ASSETS, out))) out = base + '-' + (i++) + '.jpg';
        const tmp = path.join(os.tmpdir(), 'gedit_proj_' + Date.now() + '_' + safe);
        fs.writeFileSync(tmp, buf);
        execFileSync('sips', ['-Z', '1200', '-s', 'format', 'jpeg', '-s', 'formatOptions', '80', tmp, '--out', path.join(ASSETS, out)], { stdio: 'ignore' });
        try { fs.unlinkSync(tmp); } catch (e) {}
        if (!fs.existsSync(path.join(ASSETS, out))) throw new Error('could not process image');
        return send(res, 200, 'application/json', JSON.stringify({ ok: true, file: out }));
      } catch (e) {
        return send(res, 400, 'application/json', JSON.stringify({ ok: false, error: String((e && e.message) || e) }));
      }
    });
    return;
  }

  if (req.method === 'POST' && p === '/api/upload') {
    const rawName = url.searchParams.get('name') || 'photo';
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => {
      try {
        const buf = Buffer.concat(chunks);
        if (!buf.length) throw new Error('empty upload');
        const safeOrig = path.basename(rawName).replace(/[^a-zA-Z0-9._-]+/g, '_');
        let base = safeOrig.replace(/\.[^.]+$/, '') || 'photo';
        // pick a non-colliding .jpg name in Gigs (everything normalizes to jpg)
        let out = base + '.jpg';
        let i = 1;
        while (fs.existsSync(path.join(GIGS, out))) out = base + '-' + (i++) + '.jpg';
        // write the raw upload to a temp file
        const tmp = path.join(os.tmpdir(), 'gedit_' + Date.now() + '_' + safeOrig);
        fs.writeFileSync(tmp, buf);
        // back up the full-resolution original
        try { fs.mkdirSync(ORIGINALS, { recursive: true }); fs.copyFileSync(tmp, path.join(ORIGINALS, safeOrig)); } catch (e) {}
        // optimize into Gigs (resize longest side to 1600, jpeg quality 72)
        execFileSync('sips', ['-Z', '1600', '-s', 'format', 'jpeg', '-s', 'formatOptions', '72', tmp, '--out', path.join(GIGS, out)], { stdio: 'ignore' });
        try { fs.unlinkSync(tmp); } catch (e) {}
        if (!fs.existsSync(path.join(GIGS, out))) throw new Error('could not process image (is it a valid photo?)');
        return send(res, 200, 'application/json', JSON.stringify({ ok: true, file: out }));
      } catch (e) {
        return send(res, 400, 'application/json', JSON.stringify({ ok: false, error: String((e && e.message) || e) }));
      }
    });
    return;
  }

  if (req.method === 'POST' && p === '/api/publish') {
    // Build + push to gh-pages (goes live) and commit the source to main.
    const cmd = 'npm run deploy && git add -A && (git diff --cached --quiet || git commit -m "Update site content via editor") && git push origin main';
    exec(cmd, { cwd: ROOT, maxBuffer: 1024 * 1024 * 64 }, (err, stdout, stderr) => {
      if (err) return send(res, 500, 'application/json', JSON.stringify({ ok: false, error: String(stderr || stdout || err.message).slice(-800) }));
      return send(res, 200, 'application/json', JSON.stringify({ ok: true }));
    });
    return;
  }

  send(res, 404, 'text/plain', 'not found');
});

// Bind to 127.0.0.1 so ONLY this Mac can reach it (not other devices on the network).
server.listen(PORT, '127.0.0.1', () => {
  const u = 'http://localhost:' + PORT;
  console.log('\n  Gallery caption editor running at ' + u);
  console.log('  Edit captions, click Save, then run `npm run deploy` to publish.\n  Press Ctrl+C to stop.\n');
  exec('open "' + u + '"');
});
