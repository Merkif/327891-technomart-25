var addCartBtn = document.querySelectorAll(".buy-btn");
var popupCart = document.querySelector(".modal-cart");
var cartClose = popupCart.querySelector(".modal-close");
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