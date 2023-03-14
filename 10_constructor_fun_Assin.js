//this is constructor function

function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
  this.showDetails = function () {
    console.log(
      `Bank Details is : Bank Name: ${this.bankName}, location Name is: ${this.location} ifscCode is: ${this.ifscCode} Branch Code is : ${this.branchCode}`
    );
  };
}
const yesBank = new Bank("Yes Bank", "Mumbai", 992288, "YES00009");
yesBank.showDetails();
console.log(``);

const sbiBank = new Bank("Sbi Bank", "Pune", 736383, "SBI00098");
sbiBank.showDetails();
console.log(``);

const mahaBank = new Bank("Maha Bank", "Delhi", 04636, "MAHA09890");
mahaBank.showDetails();
console.log(``);

const hdfcBank = new Bank("Hdfc Bank", "Latur", 764633, "HDFC00965");
hdfcBank.showDetails();
console.log(``);

console.log(`------------------Add Data Member on Prototype Object---------------------`);

Bank.prototype.opneTime = "09.00 AM IST";
Bank.prototype.closeTime = "06.00 PM IST";

console.log(
  `This is Opening Time : ${yesBank.opneTime} and Closing Time: ${yesBank.closeTime}of Yes Bank`
);
console.log(``);
console.log(
  `This is Opening Time : ${sbiBank.opneTime} and Closing Time: ${sbiBank.closeTime} of Sbi Bank`
);
console.log(``);
console.log(
  `This is Opening Time : ${mahaBank.opneTime} and Closing Time: ${mahaBank.closeTime} of Maha Bank`
);
console.log(``);
console.log(
  `This is Opening Time : ${hdfcBank.opneTime} and Closing Time: ${hdfcBank.closeTime} of Hdfc Bank`
);
console.log(``);
