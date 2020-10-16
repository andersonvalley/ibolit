// let arrow = document.querySelector('.next');
// let prev = document.querySelector('.prev');

$(document).ready(function () {
   $('.main-slider').slick({
      dots: true,
      infinite: true,
      adaptiveHeight: true,
   });
});

let btn = document.querySelector('.header__burger');
let menu = document.querySelector('.menu__list');
let links = document.querySelector('.menu__item');
let social = document.querySelector('.header__social');
let adress = document.querySelector('.header__metro');
let menuLink = document.querySelector('.menu__link-add');
let menuAdd = document.querySelector('.menu__add');

btn.addEventListener('click', function () {
   toogleMenu();
   btnclose();
});

function toogleMenu() {
   menu.classList.toggle('active');
}

let btnclose = function () {
   if (menu.classList.contains('active')) {
      btn.classList.add('active-btn');
   } else {
      btn.classList.remove('active-btn');
   }
};


// menuLink.addEventListener('click', function (evt) {
//    evt.preventDefault();
//    menuAdd.classList.toggle('menu__add-active');
// });