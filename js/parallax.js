$(window).scroll(function () {
    $('.shape-parallax').each(function(key, elem) {
        var scrollSpeed = $(elem).attr('data-parallax') || 2;
        var offsetY =  parseInt( $(elem).attr('data-parallax-offsetY'))|| -290;
        var offsetY_md =  parseInt( $(elem).attr('data-parallax-offsetY-md'))|| -140;

        if(window.innerWidth < 768){
            if( offsetY_md ){
                offsetY = offsetY_md;
            }
        }

        $(elem).css({
            'top': +($(window).scrollTop()) + offsetY + "px"
        });
    })
});

$(window).scroll();