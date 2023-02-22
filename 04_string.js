var greet = "Good Morning";
console.log(typeof greet);
console.log("Total number of chars available into this string - greet");
var greetLength = greet.length;
console.log(greetLength);

console.log("Find the chars by Index value");
var charAtIndex3 = greet.charAt(3);
console.log(charAtIndex3);

console.log("Find the last chars");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("Last chars of index :", charAtLastIndex);

console.log("Find the index by chars value ");
var indexOfM = greet.indexOf('M');
console.log("Index of chrs M is:",indexOfM);