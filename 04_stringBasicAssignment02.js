function stringHandsOn() {
  var givenString = "     Hey you are doing good, keep it up       ";
  console.log("Given string:", givenString);
}
stringHandsOn();

console.log("----------------------------------------------------");

var givenString = "     Hey you are doing good, keep it up       ";
var myString = givenString.length;
console.log("My string length is :", myString);

console.log("---------------------------------------------------");

var myStrimAfterTrim = givenString.trim();
console.log(`After removing extra spaces : ${myStrimAfterTrim}`);
var myStrimLength = myStrimAfterTrim.length;
console.log(`Length of strim After removing extra spaces : ${myStrimLength}`);
console.log("---------------------------------------------------");

var calEtraSpace = myString - myStrimLength;
console.log("Total Number of extra spaces :", calEtraSpace);

console.log(`----------------------------------------------------------------`);

var charAtFirstIndex = myStrimAfterTrim.charAt();
var charAtLastIndex = myStrimAfterTrim.charAt(myStrimLength - 1);
console.log("First and Last char is: ", charAtFirstIndex, charAtLastIndex);

console.log(`--------------------------------------------------`);

var myNewString = "Hey you are doing good, keep it up";
var splitResult = myNewString.split(" ");
console.log("Total Number of words in the string :", splitResult);
console.log("Total words:", splitResult.length);
console.log("-------------------------------------------------------");

var indexOfGood = myStrimAfterTrim.indexOf("good");
console.log("Index of Good :", indexOfGood);
console.log("---------------------------------");

var sliceResult = myStrimAfterTrim.slice(22);
console.log("String starting from index22 by slice() is:", sliceResult);

var substringResult = myStrimAfterTrim.substring(22);
console.log("String starting from index22 by substring() is:", substringResult);

console.log("----------------------------------------------------------");

console.log(
  "Is string ends with word up or not: ",
  myStrimAfterTrim.includes("up")
);

console.log(
  "-------------------------------------------------------------------------------"
);

console.log(
  "Is string start with word Hey or not: ",
  myStrimAfterTrim.includes("Hey")
);
