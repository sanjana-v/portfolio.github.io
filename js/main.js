
/* Sanjana Venkatesh — Portfolio (vanilla JS) */

(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Mobile navigation
  const navToggle = $('[data-nav-toggle]');
  const nav = $('[data-nav]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on link click
    $$('a', nav).forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Mark active page in nav
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  $$('a[data-nav-link]').forEach(a => {
    const href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
    if (href === current) a.classList.add('is-active');
  });

  // Smooth scroll for in-page anchors
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id);
    });
  });

  // Intersection Observer: reveal animations
  const revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Projects filtering (projects.html)
  const filterBar = $('[data-project-filters]');
  const projectCards = $$('[data-project-card]');

  if (filterBar && projectCards.length) {
    const setActive = (btn) => {
      $$('button', filterBar).forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    };

    const applyFilter = (tag) => {
      const t = (tag || 'all').toLowerCase();
      projectCards.forEach(card => {
        const tags = (card.getAttribute('data-tags') || '').toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
        const show = (t === 'all') || tags.includes(t);
        card.style.display = show ? '' : 'none';
      });
    };

    $$('button', filterBar).forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.getAttribute('data-filter') || 'all';
        setActive(btn);
        applyFilter(tag);
      });
    });

    // Default filter
    applyFilter('all');
  }
})();
