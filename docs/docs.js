/* PRP Docs — shared script */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme') || 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      });
    }

    // Header scroll border
    var header = document.getElementById('header');
    if (header) {
      window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 4);
      }, { passive: true });
    }

    // Back to top
    var top = document.getElementById('backToTop');
    if (top) {
      window.addEventListener('scroll', function () {
        top.classList.toggle('is-visible', window.scrollY > 400);
      }, { passive: true });
      top.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Mobile menu
    initMobileMenu();

    // Highlight active ToC link on scroll
    var tocLinks = Array.from(document.querySelectorAll('.docs-toc a'));
    if (tocLinks.length) {
      var headings = tocLinks.map(function (a) {
        return document.querySelector(a.getAttribute('href'));
      }).filter(Boolean);

      function onScroll() {
        var scrollY = window.scrollY + 120;
        var active = headings[0];
        headings.forEach(function (h) {
          if (h.offsetTop <= scrollY) active = h;
        });
        tocLinks.forEach(function (a) {
          var isActive = a.getAttribute('href') === '#' + active.id;
          a.style.color = isActive ? 'var(--accent)' : '';
          a.style.fontWeight = isActive ? '600' : '';
        });
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  });
  function initMobileMenu() {
    var toggle = document.getElementById('menuToggle');
    var menu = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;
    var backdrop = document.createElement('div');
    backdrop.className = 'mobile-menu-backdrop';
    document.body.appendChild(backdrop);
    function openMenu() {
      toggle.setAttribute('aria-expanded', 'true');
      menu.classList.add('is-open');
      backdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }
    toggle.addEventListener('click', function () {
      toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
    });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    backdrop.addEventListener('click', closeMenu);
    window.addEventListener('resize', function () { if (window.innerWidth > 640) closeMenu(); }, { passive: true });
  }
})();
