$(document).ready(function(){
    $(window).scroll(function(){
        // ini bagian sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // ini bagian scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // ini bagian slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // ini bagian removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // ini bagian applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // ini bagian toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // ini bagian typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front-End", "Back-End", "Gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2", {
        strings: ["Front-End", "Back-End","Gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // ini bagian owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});