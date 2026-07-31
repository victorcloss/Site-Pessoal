/* ─── i18n ─── */
let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const t = TRANSLATIONS[lang];

  // textContent nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // multiline: \n → <br>
  document.querySelectorAll('[data-i18n-multiline]').forEach(el => {
    const key = el.dataset.i18nMultiline;
    if (t[key] !== undefined) el.innerHTML = t[key].replace(/\n/g, '<br>');
  });

  // sync both toggles
  document.querySelectorAll('.lang-toggle__opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
}

function setupToggle(toggleEl) {
  toggleEl.querySelectorAll('.lang-toggle__opt').forEach(opt => {
    opt.addEventListener('click', () => applyLang(opt.dataset.lang));
  });
}

document.querySelectorAll('.lang-toggle').forEach(setupToggle);

// init on load
applyLang(currentLang);


/* ─── SCROLL: nav state ─── */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });


/* ─── MOBILE MENU ─── */
const burger      = document.querySelector('.nav__burger');
const mobileMenu  = document.querySelector('.nav__mobile-menu');

burger.addEventListener('click', () => {
  const isOpen = burger.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
    mobileMenu.setAttribute('aria-hidden', true);
    document.body.style.overflow = '';
  });
});


/* ─── REVEAL ON SCROLL ─── */
const revealEls = document.querySelectorAll('.reveal');
const observer  = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = Array.from(
      entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')
    );
    const delay = siblings.indexOf(entry.target) * 80;
    setTimeout(() => entry.target.classList.add('visible'), delay);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));


/* ─── SIGNATURE DOT ─── */
const dot      = document.querySelector('.timeline-dot');
const sections = Array.from(document.querySelectorAll('section[id], .cv-section[id]'));

function updateDot() {
  const mid = window.innerHeight / 2;
  let active = sections[0];
  sections.forEach(s => {
    if (s.getBoundingClientRect().top <= mid) active = s;
  });
  const rect     = active.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, (mid - rect.top) / rect.height));
  const pct      = (rect.top + progress * rect.height) / window.innerHeight * 100;
  dot.style.top  = `${Math.max(5, Math.min(95, pct))}%`;
}

window.addEventListener('scroll', updateDot, { passive: true });
updateDot();
