const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
// by using Map()
const arrayNumTrans = arrayNumbers.map((element) => {
  return element + 10;
});
console.log(arrayNumTrans);

const arrayNumTrans1 = arrayNumbers.map((element) => {
  return element ** 2;
});
console.log(arrayNumTrans1);

const arrayNumTrans2 = arrayNumbers.map((currentValue, index) => {
  return currentValue + index;
});
console.log(arrayNumTrans2);

console.log(`==============================================================`);
// by using Normal method
const arrayTransformed = [];
arrayNumbers.forEach((currentValue) => {
  arrayTransformed.push(currentValue + 10);
});
console.log(``);
console.log(`1. Add 10 into each element and log new array on console`);
console.log(arrayTransformed);

const arrayTransformed1 = [];
arrayNumbers.forEach((currentValue) => {
  arrayTransformed1.push(currentValue ** 2);
});
console.log(``);
console.log(`2. Square the each array element and log on console`);
console.log(arrayTransformed1);

const arrayTransformed2 = [];
arrayNumbers.forEach((currentValue, index) => {
  arrayTransformed2.push(currentValue + index);
});
console.log(``);
console.log(`3. Index value Added in each array element and log on console`);
console.log(arrayTransformed2);
