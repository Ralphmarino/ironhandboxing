/**
 * Site motion. Deliberately small and dependency-free, everything here is
 * IntersectionObserver plus transform/opacity, so it stays smooth on the low-end
 * Android phones a lot of local traffic arrives on.
 */

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Scroll reveals ------------------------------------------------ */
function initReveals() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!items.length) return;

  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;

        // Stagger siblings within a group so rows cascade instead of popping.
        const index = Number(el.dataset.revealIndex ?? 0);
        el.style.setProperty('--reveal-delay', `${Math.min(index, 8) * 70}ms`);
        el.classList.add('is-in');

        io.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
  );

  items.forEach((el) => io.observe(el));
}

/* ---------- Count-up stats ------------------------------------------------ */
function initCounters() {
  const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
  if (!counters.length) return;

  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.count ?? 0);
    const decimals = Number(el.dataset.countDecimals ?? 0);

    if (reduced) {
      el.textContent = target.toFixed(decimals);
      return;
    }

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo, fast off the line, settles gently, like a speed bag slowing
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) {
    counters.forEach(run);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        run(entry.target as HTMLElement);
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.5 },
  );

  counters.forEach((el) => io.observe(el));
}

/* ---------- Marquee ------------------------------------------------------- */
/**
 * The CSS animation translates the track by exactly -100%, so the strip only
 * loops seamlessly if a second identical copy sits beside the first. Cloning
 * here (rather than duplicating in markup) keeps the content authored once and
 * out of the accessibility tree twice.
 */
function initMarquees() {
  document.querySelectorAll<HTMLElement>('.marquee').forEach((marquee) => {
    const track = marquee.querySelector<HTMLElement>('.marquee__track');
    if (!track || track.dataset.cloned === 'true') return;

    const clone = track.cloneNode(true) as HTMLElement;
    clone.setAttribute('aria-hidden', 'true');
    marquee.appendChild(clone);
    track.dataset.cloned = 'true';
  });
}

/* ---------- Header state -------------------------------------------------- */
function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;

  let ticking = false;
  const update = () => {
    header.classList.toggle('is-stuck', window.scrollY > 24);
    ticking = false;
  };

  update();
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
}

/* ---------- Mobile menu --------------------------------------------------- */
function initMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-menu]');
  if (!toggle || !panel) return;

  const closeBtn = panel.querySelector<HTMLButtonElement>('[data-menu-close]');

  const setOpen = (open: boolean) => {
    // aria-expanded stays on the header burger, that is the control the
    // panel belongs to, even though the close button lives inside the panel.
    toggle.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('is-open', open);
    panel.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';

    // Move focus with the panel so keyboard users aren't left behind it
    if (open) closeBtn?.focus();
    else if (document.activeElement && panel.contains(document.activeElement)) toggle.focus();
  };

  setOpen(false);

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  closeBtn?.addEventListener('click', () => setOpen(false));

  // Any link closes the panel, including same-page #anchors, which would
  // otherwise scroll behind an open overlay.
  panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('is-open')) setOpen(false);
  });
}

/* ---------- Hero parallax ------------------------------------------------- */
/**
 * Pointer-driven drift on the hero badge. Desktop + fine pointer only, on
 * touch this would never fire and the listener would just cost battery.
 */
function initPointerDrift() {
  if (reduced || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-drift]'));
  if (!targets.length) return;

  let raf = 0;
  window.addEventListener(
    'pointermove',
    (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        targets.forEach((el) => {
          const depth = Number(el.dataset.drift ?? 10);
          el.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
        });

        raf = 0;
      });
    },
    { passive: true },
  );
}

/* ---------- FAQ filtering ------------------------------------------------- */
function initFaqFilter() {
  const chips = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-faq-filter]'));
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-faq-group]'));
  if (!chips.length || !items.length) return;

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const group = chip.dataset.faqFilter!;
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));

      items.forEach((item) => {
        const match = group === 'all' || item.dataset.faqGroup === group;
        item.hidden = !match;
      });
    });
  });
}

/* ---------- Boot ---------------------------------------------------------- */
function boot() {
  initReveals();
  initCounters();
  initMarquees();
  initHeader();
  initMenu();
  initPointerDrift();
  initFaqFilter();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}

// Astro's view transitions / prefetch can swap the DOM without a full reload.
document.addEventListener('astro:page-load', boot);
