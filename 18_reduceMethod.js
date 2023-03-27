//addition
const array = [3, 4, 5, 8, 90, 50, 1, 44, 78, 51];
let sumOfArray = array.reduce((runningTotal, value) => {
  return runningTotal + value;
});
console.log(sumOfArray);

//multiplication
let mulOfArray = array.reduce((runningTotal, value) => {
  return runningTotal * value;
});
console.log(mulOfArray);

//find the even no from the given array and sum it
const arrayEven = array.filter((element) => {
  return element % 2 == 0;
});
console.log(arrayEven);

const sumEven = arrayEven.reduce((runningTotal, value) => {
  return runningTotal + value;
});
console.log(sumEven);

//find the odd no from the given array and sum it

const arrayOdd = array.filter((element) => {
  return element % 2 != 0;
});
console.log(arrayOdd);

const sumOdd = arrayOdd.reduce((runningTotal, value) => {
  return runningTotal + value;
});
console.log(sumOdd);

//find the no which are multiple of 3 from the given array and sum it.
console.log(`find the no which are multiple of 3 from the given array and sum it`);
const arrayNum =[3,4,12,8,90,50,1,15,78,21];
const sum = arrayNum.filter((element)=>{
    return element%3==0;

}).reduce((runningTotal,value)=>{
    return runningTotal+value;

});
console.log(sum);

console.log(`find the no which are multiple of 3 from the given array and sum it in one line `);
const arrayNum1 =[3,4,12,8,90,50,1,15,78,21];
const sumOfMultiple3 = arrayNum.filter(element=>element%3==0
).reduce((runningTotal,value)=> runningTotal+value);
console.log(sumOfMultiple3);