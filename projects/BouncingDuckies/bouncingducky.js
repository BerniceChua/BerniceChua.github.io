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

/* suggested by Codecademy staff:
 * source: http://jsbin.com/adenus/3/edit
 * http://jsbin.com/alayoy/2/edit
 * $(document).ready(function() {
    $('#container').click(function(e){
  var wrapper = $(this),
      parentOffset = wrapper.offset(),
      relX = e.pageX - parentOffset.left + wrapper.scrollLeft();


 var ducky = $('<div/>')
     .addClass('addDucky')
     .css({
        left: relX,
        bottom:  0
     }),
 duckyHeight = ducky.height(),
 distance = wrapper.height()- (e.pageY-parentOffset.top)-duckyHeight;
 
 
 $(this).append(ducky);
 
 ducky.effect('bounce', {times:10, distance:distance, direction:'down'}, 5000);

 });

});
*/
