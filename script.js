// Mobile menu toggle
(function () {
  var btn = document.getElementById('mobileMenuToggle');
  var menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { menu.classList.remove('open'); });
  });
})();

// Theme toggle with persistence
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');

  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('triovius-theme', next);
  });
})();

// Orchestrated hero entrance — staggered once on load
window.addEventListener('DOMContentLoaded', function () {
  var reveals = document.querySelectorAll('.hero .reveal');
  reveals.forEach(function (el, i) {
    el.style.animationDelay = (i * 90) + 'ms';
    el.classList.add('in');
  });
});

// Subtle nav shrink on scroll
(function () {
  var nav = document.querySelector('.site-nav');
  var lastState = false;
  window.addEventListener('scroll', function () {
    var scrolled = window.scrollY > 12;
    if (scrolled !== lastState) {
      nav.style.height = scrolled ? '68px' : '';
      lastState = scrolled;
    }
  });
})();
