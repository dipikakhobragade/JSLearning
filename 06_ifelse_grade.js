function voteEligibility(age) {
  if (age <= 0 || age == undefined || age == null || age > 120) {
    console.log(`Invalid Data : your age ${age} is not valid`);
  }

  if (age >= 18 && age != 200) {
    console.log(`you are Eligible for Vote because  your age is ${age}`);
    console.log(`you are not Eligible for vote because your age is ${age} `);
  }
  // else{
  //     console.log(`you are not Eligible for vote because your age is ${age} `);
  // }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(undefined);
voteEligibility(null);
voteEligibility(0);
voteEligibility(200);

console.log(`-------------------------------------------------`);

function gradeCalculation(marks) {
  if (marks <= 0 || marks >= 100 || (typeof marks != "number") || isNaN(marks)) {
    console.log(`Please provide valid marks : ${marks} is not valid marks`);
  } else{

  if (marks >= 90 && marks <= 100  ) {
    console.log(`Excellent marks ${marks}, Your grade is A+`);
  }

  if (marks >= 70 && marks < 90) {
    console.log(`Excellent marks ${marks}, Your grade is A`);
  }
  if (marks >= 50 && marks < 75) {
    console.log(`Good marks ${marks}, Your grade is B`);
  }
  if (marks >= 35 && marks < 50) {
    console.log(`Marks is ${marks}, Your grade is C, Need Improvement`);
  }
}
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation("91");
gradeCalculation("eighty");
gradeCalculation(null);
gradeCalculation(undefined);
gradeCalculation(NaN);
