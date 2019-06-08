/* tabs */
document.addEventListener('DOMContentLoaded', function (e) {
  'use strict';
  var list = document.querySelectorAll('.tab-nav a');
  list = Array.prototype.slice.call(list, 0);
  list.forEach(function (el, i, ar) {
    el.addEventListener('click', function (event) {
      e.preventDefault();
      var tab = document.querySelector(el.getAttribute('href'));
      document.querySelector('.tab-nav .js-tab--active').classList.remove('js-tab--active');
      document.querySelector('.tabs-content__list .js-tab--active').classList.remove('js-tab--active');
      el.classList.add('js-tab--active');
      tab.classList.add('js-tab--active');
    })
  })
});
