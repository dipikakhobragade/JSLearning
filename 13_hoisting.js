console.log(myName); // allowed to access
//console.log(age); not allowed to access
var myName = " Dipika Khobragade";
let age = 36;

show(); // allowed, it is hoisted
function show() {
  console.log("show () function");
}

//greet(); not allowed as it is FE and FE does not hoisted
let greet = function () {
  console.log("Good Morning");
};

greet();
