// Arrow function with no argument and no return value
let show =()=>{
    console.log("Arrow Function");
}
show();
let show_ = ()=> console.log(`Arrow Function`);
show_();

//Arrow function with argument and no return value
let add = (num1,num2)=>{
    console.log(num1+num2);
}
add(10,20);


// Arrow Function with argument and return value

let multiply = (num1,num2)=>{
    const result = num1*num2;
    return result;

}
const multiplyResult = multiply(40,5);
console.log(multiplyResult);

let multiplyResult1 = (num1,num2)=> num1*num2
console.log(multiplyResult1(50,7));
