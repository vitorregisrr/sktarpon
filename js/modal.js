(function () {
    'use strict';

    $('[data-toggle="time-modal"]').click( function(event){
        event.preventDefault();
        console.log('a')
        var target = $(this).attr('data-target');
        var isActive = $(target).attr('data-visible') === 'true' ? true : false;
        $(target).attr('data-visible', !isActive);
    });

    window.dispatchEvent(new Event('resize'));
})();