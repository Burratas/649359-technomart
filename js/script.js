var link = document.querySelector(".button-link");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");
var overlay = document.querySelector(".overlay");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("is-show");
  overlay.classList.add("is-show");
});

  close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("is-show");
  overlay.classList.remove("is-show");
});
