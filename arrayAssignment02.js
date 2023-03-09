const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(
  `Total numbers of elements are available in array is: ${arrayNumbers.length}`
);
const firstElement = arrayNumbers[0];
const lastElement = arrayNumbers[arrayNumbers.length - 1];
console.log(
  `First Element is: ${firstElement} and Last element is: ${lastElement}`
);
const lastThirdelement = arrayNumbers[arrayNumbers.length - 3];
console.log(`Last thirst element is: ${lastThirdelement}`);

let evenNumbers = function (arrayNumbers) {
  //even position numbers
  let evenPositionArray = [];
  for (let index = 0; index < arrayNumbers.length; index = index + 2) {
    let element = arrayNumbers[index];
    evenPositionArray.push(element);
  }
  console.log(`Even position numbers are:${evenPositionArray}`);
  let sum = 0;
  for (let index = 0; index < evenPositionArray.length; index++) {
    const element = evenPositionArray[index];
    sum = sum + element;
  }
  console.log(`sum of Even position numbers are:${sum}`);
};
evenNumbers([20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]);

let oddNumbers = function (params) {
  let oddPositionArray = []; //odd position numbers

  for (let index = 1; index < params.length; index = index + 2) {
    let elements = params[index];
    oddPositionArray.push(elements);
  }
  console.log(`Odd position numbers are :${oddPositionArray}`);
  let sum = 0;
  for (let index = 0; index < oddPositionArray.length; index++) {
    const element = oddPositionArray[index];
    sum = sum + element;
  }
  console.log(`Sum of Odd position numbers are :${sum}`);
};
oddNumbers([20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]);

let arraysum = function (arrayNumbers) {
  //sum of all array elements
  let sumofArraynumbers = 0;
  for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sumofArraynumbers = sumofArraynumbers + element;
  }
  console.log(`sum of all elements in Array is: ${sumofArraynumbers}`);
};
arraysum([20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]);

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
let res = multipleNumbers([20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]);
console.log(`These numbers are multiple of 5: ${res}`);

arrayNumbers.includes(115)
  ? console.log(`Number 115 is available in array :${true}`)
  : console.log(`Number 115 is available in array: ${false}`);
arrayNumbers.includes(23)
  ? console.log(`Number 23 is available in array : ${true}`)
  : console.log(`Number 23 is available in array: ${false}`);

console.log(`given Array elements are: ${arrayNumbers}`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(
  `Added 55 and 66 no in given array Before index 3: ${arrayNumbers}`
);
const deletedNumbers = arrayNumbers.splice(4, 3);
console.log(`three elements deleted from the array ${arrayNumbers}`);