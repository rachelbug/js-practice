var add = function(number1, number2) {
	return number1 + number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var bodyMassIndex = function(weight, height) {
  return ( weight / (height * height) ) * 703;
}

var height = prompt("How tall are you in inches?");
var weight = prompt("How much do you weigh in pounds? be honest!");

// var number1 = parseInt(prompt("enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));


alert(bodyMassIndex(weight, height));

alert(subtract(number1,number2));
