$( document ).ready(function() {
    $("#fader").addClass('blue');
    
    $("#fader").delay(1000).fadeOut(1000, function() {
        $(this).removeClass('blue')
                .addClass('red')
                .delay(5000)
                .fadeIn(500);
    });
});