    //======================
    // Mobile menu 
    //======================
    $('#mobile-menu-toggler').on('click', function(e) {
        e.preventDefault();
        $('.navbar-nav').slideToggle();
    })
    $('.has-menu-child').append('<i class="menu-dropdown ti-angle-down"></i>');
    
    if ($(window).width() <= 991) {
        $('.menu-dropdown').on('click', function() {
            $(this).prev().slideToggle('slow');
            $(this).toggleClass('ti-angle-down ti-angle-up')
        })
    }


}) (jQuery);