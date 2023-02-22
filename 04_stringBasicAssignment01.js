
function stringBasics(){

    console.log(`My dream company is : "Delloite"` );
}
stringBasics();

console.log("---------------------------------------------");


var hobby1 = "Reading ,";
var hobby2 = "Travelling ,";
var hobby3 = "Listening Music";
console.log(` My Hobbies are : ${hobby1} ${hobby2} ${hobby3} `);

var hobby1Lenght = hobby1.length;
var hobby2Lenght = hobby2.length;
var hobby3Lenght = hobby3.length;
 console.log("Total chars of string my hobby1 :",hobby1Lenght);
 console.log("Total chars of string my hobby3 :",hobby2Lenght);
 console.log("Total chars of string my hobby1 :",hobby3Lenght);

 function hobby(hobby1Lenght,hobby2Lenght,hobby3Lenght) {
    var sum = hobby1Lenght+hobby2Lenght+hobby3Lenght;

    return sum;

 }
 var sumResult = hobby(hobby1Lenght,hobby2Lenght,hobby3Lenght);

 console.log("Sum the total number of characters:", sumResult);
