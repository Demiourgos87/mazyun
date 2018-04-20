webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Main app file

var $ = __webpack_require__(0);

// ----- Path to main SCSS file
var css = __webpack_require__(2);

// ----- Require modules here
var nav = __webpack_require__(4);
var searchHandler = __webpack_require__(5);
var slider = __webpack_require__(6);

// ----- Call modules here
$(document).ready(function () {
    nav();
    searchHandler();
    slider();
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ----- Typical module

var $ = __webpack_require__(0);

module.exports = function () {
    // Navigation

    var navTrigger = $('.b-header__nav-trigger'),
        nav = $('.c-nav');

    function triggerHandler() {
        nav.toggleClass('active');
    }

    navTrigger.on('click', triggerHandler);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(0);

module.exports = function () {
    // Search

    var searchTrigger = $('.b-header__search-trigger'),
        searchBar = $('.c-search--mob');

    function searchHandler() {
        searchBar.toggleClass('active');
    }

    searchTrigger.on('click', searchHandler);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(0);
var slick = __webpack_require__(7);

module.exports = function () {
    // HP slider

    var $sliderWrap = $('.c-slider'),
        $slider = $sliderWrap.find('.c-slider__slides-wrap'),
        $arrows = $sliderWrap.find('.c-slider__nav'),
        $arrowLeft = $arrows.find('.left'),
        $arrowRight = $arrows.find('.right'),
        windowWidth = $(window).outerWidth();

    function mobileSlider() {
        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 600,
            dots: false,
            prevArrow: $arrowLeft,
            nextArrow: $arrowRight
        });
    }

    function desktopSlider() {
        var $thumbs = $sliderWrap.find('.c-slider__thumbs').children();

        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 400,
            dots: false,
            fade: true,
            arrows: false
        });

        $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $thumbs.removeClass('active');
            $($thumbs[nextSlide]).addClass('active');
        });

        $.each($thumbs, function () {
            $(this).on('click', function () {
                $slider.slick('goTo', $(this).index());
            });
        });
    }

    windowWidth < 768 ? mobileSlider() : desktopSlider();
};

/***/ })
],[1]);