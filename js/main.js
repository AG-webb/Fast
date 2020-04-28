// Header slider
$(document).ready(function() {
    $('.slider-right').slick({
        arrows: false,
        infinite: true,
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: 'ease',
        autoplay: false,
        // start slide
        initialSlide: 0,
        // desctop swipe
        draggable: true,
        // Mobile swipe
        swipe: true,
        touchThreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        vertical: true,
        asNavFor: '.slider-left',
        appendDots: $('.slider-dots'),
    });

    $('.slider-left').slick({
        asNavFor: '.slider-right',
        fade: true,
        arrows: false,
    });
});   

// Slider prev
$('.slider-prev').click( function() {
    $('.slider-right').slick("slickPrev");
});

// Slider next
$('.slider-next').click( function() {
    $('.slider-right').slick("slickNext");
});