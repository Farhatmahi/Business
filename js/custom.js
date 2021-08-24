$(document).ready(function(){
    //banner slider
    $('.banner-slider').slick({
        arrows : true,
        prevArrow : '<i class="slick-prev fas fa-chevron-left prev_arrow"></i>',
        nextArrow : '<i class="slick-prev fas fa-chevron-right next_arrow "></i>',
        autoplay : true,
        dots : true,
    },1500)

    //mix it up
    var mixer = mixitup('.portfolio-content');

    //testimonial slider

    $('.testimonial-slider').slick({
        slidesToShow : 2,
        slidesToScroll : 2,
        arrows: false,
        dots : true,
        autoplay: true,
    }, 1500)

})
