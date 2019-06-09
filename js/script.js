/* modal write us */
var writeUs = document.querySelector(".js-write__us--btn");
var popupWriteUs = document.querySelector(".modal-write-us");
var writeUsModalClose = popupWriteUs.querySelector(".modal-close");
writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("js-modal--open");
});
writeUsModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("js-modal--open");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWriteUs.classList.contains("js-modal--open")) {
      popupWriteUs.classList.remove("js-modal--open");
    }
  }
}); 

/*modal map */
var modalMap = document.querySelector(".contact-map");
var popupMap = document.querySelector(".modal-map");
var mapClose = popupMap.querySelector(".modal-close");
modalMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("js-modal__map--open");
});
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("js-modal__map--open");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("js-modal__map--open")) {
      popupMap.classList.remove("js-modal__map--open");
    }
  }
}); 

/* modal cart */
var addCartBtn = document.querySelectorAll(".buy__btn");
var popupCart = document.querySelector(".modal-cart");
var cartClose = popupCart.querySelector(".modal-close");
addCartBtn.forEach(function (el, i, ar) {
  el.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.add("js-modal--open");
  });
});
cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("js-modal--open");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupCart.classList.contains("js-modal--open")) {
      popupCart.classList.remove("js-modal--open");
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
