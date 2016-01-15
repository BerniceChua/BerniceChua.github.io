$( document ).ready(function() {
  var calculatorScreen = [];

  $(".calculator-button").on("click", function(e){
    e.preventDefault();

    var value = this.getAttribute('data-myValue');
    calculatorScreen.push(value);

    // if () {

    // } else {
      // $('#screen-form textarea').append(value)
    // }
    $('#display-screen').append(value);

  });

  $("#equals").on("click", function(e){
    e.preventDefault();

    var value = this.getAttribute('data-myValue');
    calculatorScreen.push(value);

    console.log(calculatorScreen);
    var expression = math.eval(calculatorScreen.join(""));
    console.log(expression);

     $('#display-screen').append(" = " + expression);
     // $('#display-screen').html(expression);
  });

  $("#clear-screen").on("click", function(e){
    e.preventDefault();

    calculatorScreen = [];
    $('#display-screen').empty();
  });

});
