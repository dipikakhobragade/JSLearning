function myLove() {
  console.log("I love my daughter");
}
myLove();

function angagementAnniversory() {
  console.log("Today is my Angagement Anniversory ");
}
angagementAnniversory();

console.log("--------------------------------------------");

// var firstName = "Dipika";
// var lastName = "Khobragade";
// var collegeName = "IICMR Pune";
function personalDetails(firstName, lastName, collegeName) {
  console.log(
    "First Name :",
    firstName,
    "Last Name: ",
    lastName,
    "College Name:",
    collegeName
  );
}
personalDetails("Dipika","Khobragade","IICMR Pune");

console.log("-----------------------------------------------");

var name1 ="Virat";
var name2 = "Anushka";
var num1 = 1000;
var num2 = 2000;
function swapValueDude(value1,value2){

  console.log("Before swapping:", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After swapping:", value1, value2);


}
swapValueDude(name1,name2);
swapValueDude(num1,num2);

console.log("-----------------------------------------------------");

function addThreeValues(num1,num2,num3) {
   var sum=  num1+num2+num3;
   return sum;
    
}
var sumResult = addThreeValues(10.23,600,40);
console.log("Addition of three values:",sumResult);
var sumResult = addThreeValues("Hello","Good","Morning");
console.log("Addition of three values:",sumResult);
