console.log(`start`);

var num = 10;
if (num > 0) {
  console.log(`inside if`);
  console.log(`num is positive ${num}`);
}
console.log(`End`);

var ageForVote = 10;
if (ageForVote >= 18) {
  console.log(`you are eligible for vote`);
  console.log(`age is : ${ageForVote}`);
}
console.log(`End next time`);

function checkEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  }

  if (num % 2 != 0) {
    return "odd";
  }
}
var result = checkEvenOrOdd(45);
console.log(`45 number is : ${result} `);

var num1 = 5;
if (num1 > 0) {
  console.log(`num is positive ${num1}`);
} else {
  console.log(`num is negative ${num1}`);
}

function maleMarriageEligibility(gender, age, boyName) {
  if (gender == "Male" && age >= 21) {
    console.log("You are eligible");
  } else {
    console.log("Not Eligible");
  }
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Anil");
