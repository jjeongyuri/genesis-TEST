$(function(){

    // swiper
    var swiper = new Swiper(
        ".swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 2000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
        }
    );
})
