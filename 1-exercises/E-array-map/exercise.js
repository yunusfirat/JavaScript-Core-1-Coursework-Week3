// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multipliedby100(number) {
  return number * 100;
}

var result = numbers.map(multipliedby100);

console.log(result);

var result2 = numbers.map((num) => num * 100);
console.log(result2);

var result3 = numbers.map(function multipliedby100(number) {
  return number * 100;
});

console.log(result3);
