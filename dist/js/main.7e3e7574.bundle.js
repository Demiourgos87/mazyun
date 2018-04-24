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
var sliders = __webpack_require__(6);

// ----- Call modules here
$(document).ready(function () {
    nav();
    searchHandler();
    sliders();
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
    // HP sliders

    var $sliderWrap = $('.c-slider'),
        windowWidth = $(window).outerWidth();

    $.each($sliderWrap, function () {
        var $current = $(this),
            $slider = $current.find('.c-slider__slides-wrap'),
            $arrows = $current.find('.c-slider__nav'),
            $arrowLeft = $arrows.find('.left'),
            $arrowRight = $arrows.find('.right');

        function mobileSlider(slider) {
            slider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 600,
                dots: false,
                prevArrow: $arrowRight,
                nextArrow: $arrowLeft
            });
        }

        function desktopSlider(slider) {
            var $thumbs = $current.find('.c-slider__thumbs').children();

            if ($current.hasClass('red--text')) {
                slider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    speed: 400,
                    dots: false,
                    fade: true,
                    prevArrow: $arrowRight,
                    nextArrow: $arrowLeft
                });
            } else {
                slider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    speed: 400,
                    dots: false,
                    fade: true,
                    arrows: false
                });
            }

            if ($thumbs.length > 0) {
                console.log('has thumbs');
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
        }

        windowWidth < 768 ? mobileSlider($slider) : desktopSlider($slider);
    });
};

/***/ })
],[1]);