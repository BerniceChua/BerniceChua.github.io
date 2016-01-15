$(document).ready(function() {
    $('#container').click(function(e){
        var wrapper = $(this).parent();
        var parentOffset = wrapper.offset(); 
        var relX = e.pageX - parentOffset.left + wrapper.scrollLeft();
        var relY = e.pageY - parentOffset.top + wrapper.scrollTop();
        
        $(this).append($('<div/>').addClass('addDucky').css({
            left: relX,
            top: relY
        }));

        $('.addDucky').effect('bounce', {times:10, distance:800, direction:'down'}, 5000);
    });
});
