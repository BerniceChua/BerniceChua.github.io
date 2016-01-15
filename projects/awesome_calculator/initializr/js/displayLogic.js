$( document ).ready(function() {
  var calculatorScreen = [];

  $(".number-button").on("click", function(e){
    e.preventDefault();

    var value = this.getAttribute('data-myValue');
    calculatorScreen.push(value);

    // if () {

    // } else {
      $('#screen-form textarea').append(value)
    // }
  });

});
