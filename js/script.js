
/* modal write us */
var writeUs = document.querySelector(".js-write__us--btn");
var popupWriteUs = document.querySelector(".modal-write-us");
var writeUsModalClose = popupWriteUs.querySelector(".modal-close");
var modalMap = document.querySelector(".contact-map");
var popupMap = document.querySelector(".modal-map");
var mapClose = popupMap.querySelector(".modal-close");
var addCartBtn = document.querySelectorAll(".buy-btn");
var popupCart = document.querySelector(".modal-cart");
var cartClose = popupCart.querySelector(".modal-close");
writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal--open");
});
writeUsModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal--open");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWriteUs.classList.contains("modal--open")) {
      popupWriteUs.classList.remove("modal--open");
    }
  }
}); /*modal map */
modalMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal--open");
});
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal--open");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("modal--open")) {
      popupMap.classList.remove("modal--open");
    }
  }
}); /* modal cart */
for (var i = 0; i < addCartBtn.length; i++) {
  addCartBtn[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.add("modal--open");
  });
}
cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("modal--open");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupCart.classList.contains("modal--open")) {
      popupCart.classList.remove("modal--open");
    }
  }
});

/*tabs */
document.addEventListener('DOMContentLoaded', function (e) {
  'use strict';
  var list = document.querySelectorAll('.tab-nav a');
  list = Array.prototype.slice.call(list, 0);
  list.forEach(function (el, i, ar) {
    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      var tab = document.querySelector(el.getAttribute('href'));
      document.querySelector('.tab-nav .js-tab--active').classList.remove('js-tab--active');
      document.querySelector('.tabs-content__list .js-tab--active').classList.remove('js-tab--active');
      el.classList.add('js-tab--active');
      tab.classList.add('js-tab--active');
    })
  })
});
