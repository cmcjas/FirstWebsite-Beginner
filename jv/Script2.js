﻿/*    car homepage script      */
document.querySelector('.home').onmousemove = (e) => {

    document.querySelectorAll('.home-para').forEach(elm => {

        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });

};

document.querySelector('.home').onmouseleave = (e) => {

    document.querySelectorAll('.home-para').forEach(elm => {

        elm.style.transform = `translateX(0px) translateY(0px)`;

    });

};

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            
        },
        768: {
            slidesPerView: 2,
            
        },
        991: {
            slidesPerView: 3,
            
        },
    },
});