$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        speed: 600,
        fade: true,
        prevArrow: ' <button type="button" class="slider__arrow left"><img src="../img/06_slider/arowLeft.svg" ></button>',
        nextArrow: '<button type="button" class="slider__arrow right"><img src="../img/06_slider/arowRight.svg"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,

                }
            }
        ]
    });
    });