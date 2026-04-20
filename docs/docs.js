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
})();
