/* ════════════════════════════════════════════
   i18n
   ════════════════════════════════════════════ */
let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('.lang-toggle__opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-toggle').forEach(toggle => {
  toggle.querySelectorAll('.lang-toggle__opt').forEach(opt => {
    opt.addEventListener('click', () => applyLang(opt.dataset.lang));
  });
});

applyLang(currentLang);


/* ════════════════════════════════════════════
   NAV — scroll state
   ════════════════════════════════════════════ */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });


/* ════════════════════════════════════════════
   MOBILE MENU
   ════════════════════════════════════════════ */
const burger     = document.querySelector('.nav__burger');
const closeBtn   = document.querySelector('.nav__mobile-close');
const mobileMenu = document.querySelector('.nav__mobile-menu');

function openMenu() {
  burger.classList.add('open');
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  burger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  burger.classList.remove('open');
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

burger.addEventListener('click', () => {
  mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
});

if (closeBtn) closeBtn.addEventListener('click', closeMenu);

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', closeMenu);
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
});


/* ════════════════════════════════════════════
   SCROLL REVEAL
   ════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    // stagger siblings that haven't appeared yet
    const pending = Array.from(
      entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')
    );
    const idx = pending.indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('visible'), Math.max(0, idx) * 70);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ════════════════════════════════════════════
   DATA RECORD — staggered line animation
   ════════════════════════════════════════════ */
const record = document.querySelector('.data-record');

if (record) {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    record.querySelectorAll('.data-record__row').forEach(r => r.classList.add('visible'));
  } else {
    const recordObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.data-record__row').forEach((row, i) => {
          setTimeout(() => row.classList.add('visible'), i * 90);
        });
        recordObserver.unobserve(entry.target);
      });
    }, { threshold: 0.4 });

    recordObserver.observe(record);
  }
}
