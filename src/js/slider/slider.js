var $ = require('jquery');
var slick = require('slick-carousel');

module.exports = function() {
    // HP sliders

    var $sliderWrap = $('.c-slider'),
        windowWidth = $(window).outerWidth();


    $.each($sliderWrap, function() {
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
        }

        windowWidth < 768 ? mobileSlider($slider) : desktopSlider($slider);
    });

};
