var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const totalNumbersOfElements = arrayNumbers.length;
console.log(`Total Number of element - ${totalNumbersOfElements}`);
console.log(`----------------------------------------`);
const firstElement = arrayNumbers[0];
console.log(`First Element - ${firstElement}`);
const lastElement = arrayNumbers[arrayNumbers.length - 1];
console.log(`Last Element - ${lastElement}`);
console.log(`----------------------------------------------`);
const thirdLastElement = arrayNumbers[arrayNumbers.length - 3];
console.log(`Third Last Element ${thirdLastElement}`);
console.log(`---------------------------------------------`);

let sum = 0;
let evenPositionArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  //1
  const element = arrayNumbers[index];
  sum = sum + element; // sum = 0 + 20
  //console.log(element);
  if (element % 2 == 0) {
    evenPositionArray.push(element);
  }
}
let sum3 = 0;
for (let index = 0; index < evenPositionArray.length; index++) {
  const element = evenPositionArray[index];
  sum3 = sum3 + element;
}
console.log(`Even Position numbers are - ${evenPositionArray}`);
console.log(`sum of Even position numbers are-${sum3}`);
console.log(`------------------------------------------`);

console.log(`Sum of an Array element is- ${sum}`);

console.log(`-------------------------`);

let oddPositionArray = []; //odd position numbers

for (let index = 1; index < arrayNumbers.length; index = index + 2) {
  let elements = arrayNumbers[index];
  oddPositionArray.push(elements);
}
console.log(`Odd position numbers are :${oddPositionArray}`);
let sum1 = 0;
for (let index = 0; index < oddPositionArray.length; index++) {
  const element = oddPositionArray[index];
  sum1 = sum1 + element;
}
console.log(`Sum of Odd position numbers are - ${sum1}`);

console.log(`------------------------------------------`);
let multipleNumbers = function (array) {
  let emptyArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 5 == 0) {
      emptyArray.push(element);
    }
  }
  return emptyArray;
};
let result = multipleNumbers([20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]);
console.log(`Multiple of 5 Numbers are -  ${result}`);

console.log(`---------------------------------------------`);

const is115Available = arrayNumbers.includes(115);
console.log(`Is 115 available - ${is115Available} `);
console.log(`-------------------------------`);
const is23Available = arrayNumbers.includes(23);
console.log(`Is 23 available - ${is23Available} `);
console.log(`--------------------------------------------`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(`Insert number 55 and 66 before index 3 - ${arrayNumbers}`);
console.log(`----------------------------------------------------`);
const deletedNumbers = arrayNumbers.splice(4, 3);
console.log(`Delete 3 elements starting from index 4 - ${arrayNumbers}`);
