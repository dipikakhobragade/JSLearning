
console.log(`================ Step 1. Reverse Array====================`);
const arrayRollNumbers =[113,45,56,11,32,45,109,799,56,45];
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log(`================Step 2. By Sort method====================`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);

console.log(`================Step 3. Ascending Order====================`);
arrayRollNumbers.sort((a,b)=>{
    return a>b ? 1 : -1;
});
console.log(arrayRollNumbers);
console.log(`================Step 4. Greatest Number ====================`);
const valueAtIndex = arrayRollNumbers[9];
console.log(`The Greatest Number from the array is: ${valueAtIndex}`);
console.log(`================Step 5. Smallest Number====================`);
const valueAtIndex0 = arrayRollNumbers[0];
console.log(`The Smallest Number from the array is: ${valueAtIndex0}`);

console.log(`================Step 6.Removed all Duplicate numbers====================`);
const setOfNums = new Set(arrayRollNumbers);
console.table(setOfNums);