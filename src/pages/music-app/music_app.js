/*--|▼| Load jQuery |▼|--//
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("jQuery linked");
    } else {
        // jQuery is not loaded
        alert("jQuery not linked");
    }
}
//--|▲| Load jQuery |▲|--*/
//--|▼| Side Navigation |▼|--//
$(document).ready(function(){
    $('.side-btn').click(function(){
        $('.side-nav-links').slideToggle(1500);
        $('.side-btn').toggleClass('change')
    });
});
//--|▲| Side Navigation |▲|--//
//--|▼| Main Section |▼|--//
$(document).ready(function(){
    $('.nav-btn').click(function(){
        $('.side-nav').toggleClass('margin');
        $('.nav-btn').toggleClass('change');
        $('main').toggleClass('max-width');
    });
});
//--|▲| Main Section |▲|--//
//--|▼| Songs Section |▼|--//
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
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
    });
});
//--|▲| Songs Section |▲|--//















//--|▼| Description |▼|--//
//--|▲| Description |▲|--//

/*--▼ Note to Self ▼--*/
/*--► Note to Self ◄--*/

//--|▼|Experimental Code|▼|*****************************************************************************************************************|▼|Experimental Code|▼|--//
// placeCodeHere
//--|▲|Experimental Code|▲|*****************************************************************************************************************|▲|Experimental Code|▲|--//

/*--|▼|Back-up Code|▼|***************************************************************************************************************************|▼|Back-up Code|▼|--//
placeCodeHere
//--|▲|Back-up Code|▲|***************************************************************************************************************************|▲|Back-up Code|▲|--*/