
//Spread Operator ...
const array =[1,2,3,4,5,8,9];
console.log(array);
console.log(...array);

const student ={
    fullName : "Dipika Khobragade",
    age : 35,
    city : "Mumbai"

}
console.log(student);

//...rest parameter

function show(arg1,...arg){
    console.log(arg1,arg);
}
show(2,3,4,5,7,8);