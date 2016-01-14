var add = function(numberArray) {
  return numberArray.reduce(function(sum, eachNumber) {
    return sum + eachNumber;
  });
}
