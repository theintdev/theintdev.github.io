// Detect IE version
var ie = (function () {

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );

    return v > 4 ? v : undef;

}());

!(function ($, undefined) {

    var initTablet = function () {

        

    }
    var initNotTablet = function () {

        // Always close nav when switching to desktop mode
        $("body").removeClass("surround--open");
         
    }

    var initMobile = function () {

        $('.gallery').justifiedGallery('destroy');
        $(".gallery").justifiedGallery({
            rowHeight: 90, 
            maxRowHeight: 200,
            lastRow: 'justify',
            margins: 5,
            captions: false
        });

    };
    var initNotMobile = function () {

        $('.gallery').justifiedGallery('destroy');
        $(".gallery").justifiedGallery({
            rowHeight: 230, 
            maxRowHeight: 400,
            lastRow: 'justify',
            margins: 10,
            captions: false
        });

    }

    var initCommon = function () {

        // Reset js classes to show js is enabled
        $("html").removeClass("no-js").addClass("js");

        $(".nav__toggle").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("surround--open");
        });

        $(".gallery > p > *").unwrap();

        var galleryCount = 0;
        $(".gallery").each(function(idx, itm){
            $(itm).children().each(function(idx2, itm2){
                $(itm2).attr("data-lightbox", "g" + galleryCount);
            });
            galleryCount++;
        });

        lightbox.option({
            'resizeDuration': 200,
            'maxWidth': 1000
        });

        // Init common sticky elements
        if (!ie || ie > 9)
        {
            $(".sticky").each(function (idx, itm) {
                $(itm).stick_in_parent({
                    offset_top: 30,
                    inner_scrolling: true
                });
            });
        }

        /*
        $(".carousel").cycle({
            swipe: true,
            slides: "> .carousel__item",
            timeout: 5000
        });
        */
        
    };

    initCommon();

    enquire.register('screen and (min-width: 62.001em)', {
        match: function () {
            initNotTablet();
        }
    });
    enquire.register('screen and (max-width: 62em)', {
        match: function () {
            initTablet();
        }
    });


    enquire.register('screen and (min-width: 48.5001em)', {
        match: function () {
            initNotMobile();
        }
    });
    enquire.register('screen and (max-width: 48.5em)', {
        match: function () {
            initMobile();
        }
    });

})(jQuery);