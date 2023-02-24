function tcsInterviewEligibility(gradScore, hscScore, sscScore, candidateName) {
  var result =
    gradScore >= 70 || hscScore >= 80 || sscScore > 90
      ? `Congratulation ${candidateName} you are eligible for TCS Interview `
      : `Unfortunately you are not eligible for TCS Interview`;
  console.log(result);
}
tcsInterviewEligibility(80, 86, 90, "Dipika");
tcsInterviewEligibility(70, 65, 55, "Ridvika");
tcsInterviewEligibility(60, 69, 88, "Bhushan");
