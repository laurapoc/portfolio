"use strict";

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay: false,
        items:1,
        dots: true,      
    });
  });

  $('[data-fancybox="galerija1"]').fancybox({
    loop: true,
    animationDuration: 500
});

let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
burger.addEventListener("click", function(){
    menu.classList.toggle("show");
});

let sort = document.querySelector(".galery-toggle");
let galeryMenu = document.querySelector(".galery-block");
sort.addEventListener("click", function(){
    galeryMenu.classList.toggle("show");
});