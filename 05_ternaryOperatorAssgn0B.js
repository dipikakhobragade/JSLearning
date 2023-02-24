function maleMarriageEligibility(gender, age, boyName) {
  var result =
    gender == "Male" && age >= 21
      ? `Hey ${boyName} you are eligible for Marriage`
      : `You are not eligible for marriage`;

  return result;
}
var result = maleMarriageEligibility("Male", 25, "Billgates");
console.log(result);
var result = maleMarriageEligibility("Male", 17, "stew Jobs");
console.log("Stew Jobs :", result);

console.log("--------------------------------------------");

function femaleMarriageEligibility(gender, age, girlName) {
  var result =
    gender == "Female" && age >= 18
      ? `Hey ${girlName} you are eligible for Marriage`
      : `You are not eligible for marriage`;

  return result;
}
var result = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log("Jenifer :", result);
var result = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(result);
