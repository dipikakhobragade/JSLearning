const sbiBank = {
  bankName: "State Bank of India",

  location: "Casa Bella Gold Palava",

  accountNo: 1234578670,

  ifsc: "SBIN0004367",

  interestRate: 10.75,

  showDetails: function () {
    return `Bank Name : ${this.bankName}, Location : ${this.location},Account No.: ${this.accountNo}, IFSC Code:  ${this.ifsc}, Interest Rate : ${this.interestRate}`;
  },
};
let result = sbiBank.showDetails();
console.log(result);

const axisBank = {
  bankName: "Axis Bank",

  location: "Lake Shore Green Palava",

  accountNo: 9865432156,

  ifsc: "AXIS00002345",

  interestRate: 11.5,
  showDetails: function () {
    return `Bank Name : ${this.bankName}, Location : ${this.location},Account No.: ${this.accountNo}, IFSC Code : ${this.ifsc}, Interest Rate : ${this.interestRate}`;
  },
};
let result1 = axisBank.showDetails();
console.log(result1);

let hdfcBank = {
  bankName: "HDFC Bank",

  location: "Casa Aurora Palava Phase 2",

  accountNo: 52337890021,

  ifsc: "HDFC00002367",

  interestRate: 10,
  showDetails: function () {
    return `Bank Name : ${this.bankName}, Location : ${this.location},Account No.: ${this.accountNo}, IFSC Code : ${this.ifsc}, Interest Rate : ${this.interestRate}`;
  },
};
let result2 = hdfcBank.showDetails();
console.log(result2);

const yesBank = {
  bankName: "Yes Bank",

  location: "Urbano Downtown Palava Phase 2",

  accountNo: 2347689145,

  ifsc: "YESB0004597",

  interestRate: 10.5,
  showDetails: function () {
    return `Bank Name : ${this.bankName}, Location : ${this.location},Account No.: ${this.accountNo}, IFSC Code : ${this.ifsc}, Interest Rate : ${this.interestRate}`;
  },
};
let result3 = yesBank.showDetails();
console.log(result3);
