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

    //window scroll
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 1000){
            $('.back-to-top').fadeIn()
        }else{
            $('.back-to-top').fadeOut()
        }

         //fixed navbar

         window.addEventListener("scroll", function(){
             var navbar = this.document.querySelector('.navbar')
             navbar.classList.toggle("sticky", window.scrollY > 0)
         })

         if(scrolling > 400){
             $('.navbar ul li.active').removeClass('active')
         }else{
            $('.navbar ul li:first-child').addClass('active')
         }

    })

    $('.back-to-top').click(function(){
        $('body, html').animate({
            scrollTop : 0, 
        },1500)
    })

    //smooth scroll

    var scroll = new SmoothScroll('.navbar a[href*="#"]',{
    speed : 1000,});

   

    

    
    
}
)
