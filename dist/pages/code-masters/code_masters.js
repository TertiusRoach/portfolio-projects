
$(document).ready(function(){
    //--▼ Toggle Button ▼--//
    $('.btn').click(function(){
        $('.nav-links').slideToggle(2000);
        $('.btn').toggleClass('change');
    })
    //--▲ Toggle Button ▲--//
    //--▼ Transparent Background ▼--//
    $(window).scroll(function(){
        let position = $(window).scrollTop();

        if(position >= 100){
            $('nav, nav-container').addClass('navBackground')
        } else {
            $('nav, nav-container').removeClass('navBackground')
        }
    })
    //--▲ Transparent Background ▲--//
    //--▼ Smooth Scroll ▼--//
    $('.nav-links a').click(function(link){
        link.preventDefault();

        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop:$(target).offset().top
        },1500);
    })  
    //--▲ Smooth Scroll ▲--//
    //--▼ Owl Carousel (Team) ▼--//
    $('.team-center').owlCarousel({
        loop:true,
        margin:10,
        smartSpeed: 500,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    //--▲ Owl Carousel (Team) ▲--//
    //--▼ Owl Carousel (Customers) ▼--//
    $('.customers-center').owlCarousel({
        loop:true,
        margin:10,
        smartSpeed: 500,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
             },
            1000:{
                items:3
            }
        }
    })
        //--▲ Owl Carousel (Customers) ▲--//
})




















//--◄ Example ▼--//
//--◄ Example ▲--//

//◄ Example
//▲ Example
//► Note to Self ◄//

/*--▼ Removed ▼--//
//--▲ Removed ▲--*/








