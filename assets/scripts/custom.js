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
let navLinks = document.querySelectorAll(".menu li a");
burger.addEventListener("click", function(){
    menu.classList.toggle("show");
     // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 1.5s ease forwards ${index / 7 + 0.2}s`;
        }
      });
});


let sort = document.querySelector(".galery-toggle");
let galleryMenu = document.querySelector(".photo-carousel");
let showNum = 3;
sort.addEventListener("click", function() {
  if (showNum < galleryMenu.children.length) {
    showNum = showNum + 3;
    for (let i = 0; i < showNum; i++) {
      galleryMenu.children[i].classList.add("show");
      galleryMenu.children[i].children[0].classList.add("enableTransition");
    }
  } else {
    for (let i = 0; i < showNum; i++) {
      galleryMenu.children[i].classList.remove("show");
      galleryMenu.children[i].children[0].classList.remove("enableTransition");
    }
    showNum = 3;
  }
});