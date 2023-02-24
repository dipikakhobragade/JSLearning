function greaterNumber(num1, num2) {
  var result = num1 > num2 ? num1 : num2;
  console.log(`Greater number amongst ${num1}, ${num2} is: ${result} `);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("------------------------------------");

function isEvenOrOddNum(num) {
  var result = num % 2 == 0 ? true : false;
  return result;
}
var result = isEvenOrOddNum(29);
console.log(
  `29 is Even or Odd true is for even and false is for odd : ${result}`
);
console.log(
  `44 is Even or Odd true is for even and false is for odd : ${isEvenOrOddNum(
    44
  )}`
);
console.log(
  `0 is Even or Odd true is for even and false is for odd : ${isEvenOrOddNum(
    0
  )}`
);
console.log(
  `101 is Even or Odd true is for even and false is for odd : ${isEvenOrOddNum(
    101
  )}`
);

console.log("---------------------------------------");

function wordLength(word) {
  var worLength = word.length;
  var result = worLength % 2 == 0 ? "Even" : "Odd";
  return result;
}
var result = wordLength("JavaScript");
console.log(`World length of "JavaScript" is : ${wordLength("JavaScript")}`);
console.log(`World length of "Developer" is : ${wordLength("Developer")}`);
console.log(`World length of "Google" is : ${wordLength("Google")}`);
