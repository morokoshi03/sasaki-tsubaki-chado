// ヘッダーのスクロール時スタイル
const header = document.getElementById('header');
const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// モバイルナビ
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// スクロールに合わせたフェードイン
const revealTargets = document.querySelectorAll(
  '.section-label, .section-title, .section-lead, .concept-body, .concept-photo, .philosophy-photo, ' +
  '.about-side, .about-main, .philosophy-intro, .philosophy-list li, ' +
  '.philosophy-close, .activity-card, .podcast-visual, .podcast-body, ' +
  '.contact-lead, .contact-types, .contact-cta'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

revealTargets.forEach((el) => observer.observe(el));
