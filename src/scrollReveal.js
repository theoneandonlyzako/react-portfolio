// Site-wide scroll reveal: every meaningful item on a page starts hidden and
// fades and pops in as it scrolls into view. Runs across all routes and picks up
// content added later, so no component has to opt in. Honors reduced motion.

const SELECTOR = [
  '#root h1', '#root h2', '#root h3', '#root h4',
  '#root p', '#root img', '#root li',
  '#root .project-cell', '#root .card', '#root .video',
].join(', ');

// Persistent chrome should not fade on every navigation.
const EXCLUDE = 'header, footer, nav, .navbar';

export function initScrollReveal() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  // Leave everything visible for anyone who prefers reduced motion.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  // Reveal each item only at its topmost level, so a card animates as one unit
  // rather than the card and everything inside it animating separately.
  function scan() {
    const nodes = Array.from(document.querySelectorAll(SELECTOR)).filter(
      (el) => !el.closest(EXCLUDE)
    );
    nodes
      .filter((el) => !nodes.some((other) => other !== el && other.contains(el)))
      .forEach((el) => {
        if (!el.classList.contains('reveal')) {
          el.classList.add('reveal');
          observer.observe(el);
        }
      });
  }

  scan();

  // Re-scan on route changes and any added content. Debounced to one pass per
  // frame (so the typed splash's rapid DOM churn stays cheap) and it runs before
  // paint, so freshly mounted items start hidden with no flash. Watches <body>
  // because a wrapping library (OverlayScrollbars) rearranges the DOM after mount.
  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      scan();
    });
  };
  new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
}
