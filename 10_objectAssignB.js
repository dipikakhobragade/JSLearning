console.log(`--------------1.Object Created-------------`);
const bankSbi = {
    bankName: "State Bank of India",
    location: "Casa Bella Gold Palava",
    accountNo: 1234578670,
    ifsc: "SBIN0004367",
}
console.log(bankSbi);
console.log(`--------------2.Object Created-------------`);
const bankLocation ={
    street: "M G Road",
    city: "Nagpur",
    pinCode: 567802

}
console.log(bankLocation);
console.log(`--------------3.Clone step 1 and step 2-------------`);
const newObject = {};
Object.assign(newObject, bankSbi, bankLocation); 
console.log(newObject);
// const newBank= {...bankSbi,...bankLocation};
// console.table(newBank)
const rateOfInterest = {
          homeLoanInterest : 10.50,
          personalLoanInterest : 12.40,
          dueInterest : 7

}
console.log(`--------------4.Object Created-------------`);
console.log(rateOfInterest);
console.log(`--------------5.Merge step1, step2 and step 4 Object-------------`);
const sbiDetails = {};
Object.assign(sbiDetails,bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);
console.log(`--------------6. Traverse Merge Object-------------`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key} : ${element}`);
        
    }
}

