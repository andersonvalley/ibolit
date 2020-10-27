let btn = document.querySelector('.ham');
let menu = document.querySelector('.menu');


btn.addEventListener('click', function() {  
   headerMenu();
});

function headerMenu() {
   btn.classList.toggle('active');
   menu.classList.toggle('active');
}

$(document).ready(function(){
  $('.slider').slick({
   dots: true,
   infinite: true,
   speed: 500,
   fade: true,
   cssEase: 'linear'
  });
});