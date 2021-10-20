//--▼ Navigation Menu Toggle ▼--//
$(document).ready(function() {
    $('#menu-button').click(changeNav);

    function changeNav(){
        $('#links').toggle(2000);
        $('#menu-button').toggleClass('turn')
    }
})
//--▲ Navigation Menu Toggle ▲--//