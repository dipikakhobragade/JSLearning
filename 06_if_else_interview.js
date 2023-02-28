

function tcsInterviewEligibility(gradScore,hscScore,sscScore,candidateName){
    if(gradScore>=70 || hscScore>=80 || sscScore >90){
        console.log(`Congratulation ${candidateName } you are eligible for TCS Interview`);

    } else{
        console.log(`Unfortunately ${candidateName} you are not eligible for interview`);
    }




}
tcsInterviewEligibility(80,86,90,"Dipika");
tcsInterviewEligibility(70,65,55,"Bhushan");
tcsInterviewEligibility(65,79,88,"Ridvika");