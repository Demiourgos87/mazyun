var $ = require('jquery');
var slick = require('slick-carousel');

module.exports = function() {
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
            prevArrow: $arrowRight,
            nextArrow: $arrowLeft
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

        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $thumbs.removeClass('active');
            $($thumbs[nextSlide]).addClass('active');
        });

        $.each($thumbs, function() {
            $(this).on('click', function() {
                $slider.slick('goTo', $(this).index());
            });
        });
    }

    windowWidth < 768 ? mobileSlider() : desktopSlider();
};
