(function () {
    'use strict';

    // Home Carousel //
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
            900: {
                slideBy: 3,
                items: 3
            }
        }
    });

    window.dispatchEvent(new Event('resize'));
})();