const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`===========Step 1============`);
const newArray = arrayNumbers.filter((element) => {
  return element > 50;
});
console.log(newArray);

//In one line
// const newArray0= arrayNumbers.filter(element=>element>50);
// console.log(newArray0);

console.log(`=============Step2=============`);
const newArray1 = arrayNumbers.filter((element) => {
  return element % 2 == 0;
});
console.log(newArray1);

console.log(`=============Step3=============`);
const newArray2 = arrayNumbers.filter((element) => element % 2 != 0);
console.log(newArray2);

console.log(`=============Step4=============`);
const newArray3 = arrayNumbers.filter((element) => element % 5 == 0);
console.log(newArray3);

console.log(`=============Step5=============`);
const newArray4 = arrayNumbers.filter(
  (element) => element > 20 && element < 50
);
console.log(newArray4);
