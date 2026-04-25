/* PRP Wiki — search filter */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('wikiSearch');
    if (!input) return;

    var cards = Array.from(document.querySelectorAll('.wiki-card'));

    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      cards.forEach(function (card) {
        if (!q) {
          card.classList.remove('is-hidden');
          return;
        }
        var text = card.textContent.toLowerCase();
        card.classList.toggle('is-hidden', !text.includes(q));
      });
    });
  });
})();
