(function () {
    'use strict';

    $('[data-toggle="main-nav"]').click(function () {
        $('#main-nav').toggleClass('active');
        $(this).toggleClass('active');
        console.log('Toggle menu');
    });
})();