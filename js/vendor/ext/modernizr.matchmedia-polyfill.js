(function (global) {
    'use strict';

    window.matchMedia = window.matchMedia || function (media) {
        if (!Modernizr) {
            throw new Error('Reference Error: Modernizr is undefined');
        }

        return {
            matches: Modernizr.mq(media)
        };
    };
}(window));
