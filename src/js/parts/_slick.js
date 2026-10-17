$(function() {

    $('.photo_slider').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 3,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    adaptiveHeight: true,
                    fade: true,
                    dots: true
                }
            }
        ]
    });

    $('.photo_slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.p-slide-number').text(indexSlide);
        });


    $('.doc-slider').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 4,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    adaptiveHeight: true,
                    fade: true,
                    dots: true
                }
            }
        ]
    });

    $('.doc-slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.p-slide-number').text(indexSlide);
        });


    $('.simple_slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 4,
        centermode: false,
        speed: 300,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.simple_slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.p-slide-number').text(indexSlide);
        });

    $('.person_slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 4,
        centermode: false,
        speed: 300,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.person_slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.p-slide-number').text(indexSlide);
        });

    $('.news_slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 3,
        centermode: false,
        speed: 300,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.news_slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.p-slide-number').text(indexSlide);
        });


    $('.slider_mini').slick({
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 2,
        speed: 300,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.slider_mini')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.p-slide-number').text(indexSlide);
        });


});