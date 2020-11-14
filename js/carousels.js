(function () {
    'use strict';

    // Deps Carousel //
    const depsCarousel = $(".owl-carousel.home-depoimentos__carousel");
    depsCarousel.owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        center: false,
        dots: false,
        nav: true,
        navText: [
            "<i class='owl-nav chevron-left'>", "<i class='owl-nav chevron-right'>"
        ],
        navContainer: '#depoimentos-nav',
        slideBy: 3,
        dragEndSpeed: 700,
        smartSpeed: 500,
        startPosition: 0,
        responsive: {
            0: {
                slideBy: 1,
                items: 1
            },
            600: {
                slideBy: 2,
                items: 2
            },
            1025: {
                slideBy: 3,
                items: 3
            }
        }
    });

    // Ecossistema Carousel //
    const ecossistemaCarousel = $(".owl-carousel.ecossistema__carousel");
    ecossistemaCarousel.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        center: false,
        dots: false,
        nav: true,
        navText: [
            "<i class='owl-nav chevron-left'>", "<i class='owl-nav chevron-right'>"
        ],
        navContainer: '#ecossistema-nav',
        slideBy: 3,
        dragEndSpeed: 700,
        smartSpeed: 500,
        startPosition: 0
    });

    const carreirasCarousel = $(".owl-carousel.carreiras__carousel ");
    carreirasCarousel.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        center: false,
        dots: false,
        nav: false,
        navContainer: '#ecossistema-nav',
        slideBy: 1,
        slideSpeed: 4900,
        smartSpeed: 4000,
        startPosition: 0,
        autoplay: true,
        autoplayTimeout: 2800,
        autoHeight: true,
        autoplayHoverPause: false
    });

    window.dispatchEvent(new Event('resize'));
})();