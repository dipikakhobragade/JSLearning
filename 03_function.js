var num1 = 100;
var num2 = 200;

var sweety = "Sweety";
var cutey = "Cutey";

var name1 = "Ridvika";
var name2 = "Bhushan";

function swapVariables(value1, value2) {
  // var value1=num1; var value2=num2;

  console.log("Before swapping:", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After swapping:", value1, value2);
}

swapVariables(num1, num2); //function call or function invoke
swapVariables(sweety, cutey);
swapVariables(name1, name2);

console.log("------------------------------------------");


function display() {
    
}



// function showFullName(){
//     console.log("my Name is pooja madhukar rupanwar");
// }
// showFullName();

// //function with args but no return value
// function showAge(age){
// console.log('My age is',age)
// }
// showAge(23);

// var num1 = 100;
// var num2 = 200;

// var str1 = "Sweety"; // Cutey
// var str2 = "Cutey"; // Sweety

// var name1= "Akshay";
// var name2 = "Sachin";
// function swapVariables(value1, value2) {
//     console.log("Before Swap: ", value1, value2);
//     var temp = value1;
//     value1 = value2;
//     value2 = temp;
//     console.log("After Swap: ", value1, value2);
//     return "Swapping variables successfully completed";
//   }

//   var swapResult = swapVariables(num1, num2); // Function call or Function invoke
//   console.log(swapResult);

//   var swapResult2 =  swapVariables(str1, str2);
//   console.log(swapResult2);
