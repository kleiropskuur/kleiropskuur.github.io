document.querySelector('.menubtn').onclick = function (e) {
  var menubtn = document.querySelector('.menubtn');
  var menu = document.querySelector('.menu');

  menubtn.classList.toggle('is-active');
  menu.classList.toggle('is-active');

  e.preventDefault();
}
