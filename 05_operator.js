console.log(`=============Arithmetic Operators====================`);
var num1 = 10;
var num2 = 2;
var result = num1+ num2;
console.log(`Addion is ${result}`);

var result = num1- num2;
console.log(`Substraction is ${result}`);

var result = num1  * num2;
console.log(`Multiplication is ${result}`);


result = num1**num2;
console.log(`Exponential is ${result}`);

result = num1/3;
console.log(`Division is ${result}`);

result = num1%3; // Modulus
console.log(`Reminder is ${result}`);

var num = 10 //compound addition
num+= 20 ; // num  = num+20
console.log(`compound Addition ${num}`);

var num3 = 10;
console.log(12==11); //comparison operator
console.log(num3==10);


//Trinary operator
var marks = 70;
var result = marks >= 60 ?"Allow him for interview" : "Do not allow" ;
console.log(result);
var age = 22;
var validAge = age >= 21 ? "Eligible for Marriage" : "Do not Eligible for Marriage " ;
console.log(validAge);
