console.log(`-------------------Step 1---------------------------`);
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNumbers.forEach((currentValue, index) => {
  console.log(`Index of Array : ${index} Element of Array : ${currentValue}`);
});

console.log(`-------------------Step 2---------------------------`);
console.log(`Positive Numbers`);
arrayNumbers.forEach((element) => {
  if (element >= 0) {
    console.log(element);
  }
});
console.log(`-------------------Step 3---------------------------`);
console.log(`Negative Numbers`);
arrayNumbers.forEach((element) => {
  let emptyArray = [];
  if (element < 0) {
    console.log(element);
  }
});
console.log(`-------------------Step 4---------------------------`);

//console.log("Even Numbers");
arrayNumbers.forEach((element) => {
  if (element % 2 == 0) {
    console.log(`Even Numbers : ${element}`);
  }
});

console.log(`-------------------Step 5---------------------------`);
//console.log("Sum of all Elements");
let sum = 0;
arrayNumbers.forEach((element) => {
  sum = sum + element;
});
console.log(`Sum of all Elements ${sum}`);

console.log(`-------------------Step 5---------------------------`);
// console.log("Even index element in the array");
arrayNumbers.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(`Even Index : ${element} `);
  }
});
