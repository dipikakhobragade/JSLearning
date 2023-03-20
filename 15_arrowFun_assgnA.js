
let show = () => console.log("Good Morning, Today is Monday");
show();
console.log(`-------------------------------------------------------`);
let multiplyRes = (num1, num2, num3) =>  num1 * num2* num3;
console.log(`Multiplication of num1, num2 and num3`);
console.log(multiplyRes(5, 5, 2));

let multiplyResult = (num1, num2, num3=1) =>  num1 * num2* num3;
console.log(`Multiplication of num1, num2 and num3 =1`);
console.log(multiplyResult(10, 4));


console.log(`-----------------------------------------------------`);
let add = (num1, num2,num3,num4,num5) => {
    const result = num1 + num2 + num3 + num4 + num5;
    return result;
}
const addResult = add(100, 100, 200,349,756);
console.log(`Addition of 5 Numbers -`);
console.log(addResult);
const addResult1 = add("I am "," learning",  " ES6"," features"," in depth");
console.log(`Concat of 5 strings`);
console.log(addResult1);

