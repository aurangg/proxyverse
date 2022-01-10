(function ($) {
    'use strict';

    var browserWindow = $(window);

    
    // :: 3.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#cleverNav').classyNav();
    }
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 8.0 Sticky Active Code
    if ($.fn.sticky) {
        $(".clever-main-menu").sticky({
            topSpacing: 0
        });
    }

    // :: 9.0 wow Active Code
    if (browserWindow.width() > 0) {
        new WOW().init();
    }


})(jQuery);
