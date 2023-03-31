let student ={
    firstName : "Dipika",
    lastName : "Khobragade",
    isWorking : true,
    age : 34,
    collegeName : "VNIT",
    id: 123456
}
// let isWorking = student.isWorking;
// let age = student.age;
// let collegeName = student.collegeName;
// console.log(`Extracted values from object is : isWorking ${isWorking}, age ${age}, collegeName ${collegeName}`);

let {firstName,isWorking,age,collegeName,id,city ="Pune"} = student; //object Destructuring
console.log(`Extracted values from object is : isWorking ${isWorking}, age ${age}, collegeName ${collegeName}, city ${city}`);


//Array Destructuring
const array = [5,6,7,8];
let [num1,num2,num3,num4,num5 =0,num6]=array;
console.log(num1,num2,num3,num4,num5,num6);
