console.log(`-------Define class vehicle with data member------------`);
class Vehicle {
  constructor(modelName, price, color, mileage, company) {
    this.modelName = modelName;
    this.price = price;
    this.color = color;
    this.mileage = mileage;
    this.company = company;
  }
}
const tataNexon = new Vehicle(
  "Tata Nexon",
  "10 lakh",
  "Grey",
  "18kmph",
  "Tata"
);
console.log(tataNexon);
const ciaz = new Vehicle("Ciaz", "12 lakh", "Blue", "21kmph", "Maruti Suzuki");
console.log(ciaz);
const alcazar = new Vehicle("Alcazar", "15 lakh", "Black", "22kmph", "Hyundai");
console.log(alcazar);
const thar = new Vehicle("Thar", "11 lakh", "Red", "20kmph", "Mahindra");
console.log(thar);
const carens = new Vehicle("Carens", "14 lakh", "White", "23kmph", "Kia");
console.log(carens);

console.log(`---------------Add in the Array and traversing using for of loop-----------------------------------------`);
let vehicle1={
    modelName:"Tata Nexon",
    prize:"10 lakh",
    color:"Grey",
    mileage:"18kmph",
    company: "Tata"
}
let vehicle2 = {
    modelName:"Ciaz",
    prize:"12 lakh",
    color:"Blue",
    mileage:"21kmph",
    company: "Maruti Suzuki"

}
let vehicle3 = {
    modelName:"Alcazar",
    prize:"15 lakh",
    color:"Black",
    mileage:"22kmph",
    company: "Hyundai"

}

let vehicle4 = {
    modelName:"Thar",
    prize:"11 lakh",
    color:"Red",
    mileage:"20kmph",
    company: "Mahindra"

}
let vehicle5 ={
    modelName:"Carens",
    prize:"14 lakh",
    color:"White",
    mileage:"23kmph",
    company: "Kia"


}
 const arrayOfVehicle =[vehicle1,vehicle2,vehicle3,vehicle4,vehicle5]
 for (const element of arrayOfVehicle) {
    console.log(`Vehicle Details : ${element.modelName},${element.prize},${element.color},${element.mileage},${element.company}`);
    
 }

console.log(`---------------------Define class college  with data member-------------------------------------------------`);
class College {
    constructor(collegeName,city,department,university)
    {
        this.collegeName = collegeName;
        this.city = city;
        this.department = department;
        this.university = university;
    }
}
const srce = new College("SRCE","Nagpur","E & TC","RTMNU");
console.log(srce);
const coep = new College("COEP","Pune","IT","Pune University");
console.log(coep);
const vnit = new College("VNIT","Mumbai", "MECH","Mumbai University");
console.log(vnit);
const DrBRAmbedkar = new College("Dr B R Ambedkar", "Aurangabad","Law","Marathwada University");
console.log(DrBRAmbedkar);

// const college1 ={
//     collegeName:"SRCE",
//     city:"Nagpur",
//     department:"E & TC",
//     university:"RTMNU"


// 
console.log(`--------------Traversing using for in loop with one Argument------------------`);
function traverseObject(college) {
    const array = [];
  for (const key in college) {
  if (Object.hasOwnProperty.call(college, key)) {
    const element = college[key];
    console.log(`${key} : ${element}`);
    //array.push(key);
    //console.log(array.push(key));
  }
}
    
}
traverseObject(srce);
console.log(`----------------------------------------`);
traverseObject(coep);
console.log(`----------------------------------------`);
traverseObject(vnit);
console.log(`----------------------------------------`);
traverseObject(DrBRAmbedkar);

// const college2 ={
//     collegeName:"COEP",
//     city:"Pune",
//     department:"IT",
//     university:"Pune University"
// }

// function traverseObject(college2) {
//     const array = [];
//   for (const key in college2) {
//   if (Object.hasOwnProperty.call(college2, key)) {
//     const element = college2[key];
//     console.log(`${key} : ${element}`);
//     //array.push(key);
//     //console.log(array.push(key));
//   }
// }
    

// }
// traverseObject(coep);
// traverseObject(vnit)

// const college3 ={
//     collegeName:"VNIT",
//     city:"Mumbai",
//     department:"MECH",
//     university:"Mumbai University"


// }
// const college4 ={
//     collegeName:"Dr B R Ambedkar",
//     city:"Aurangabad",
//     department:"Law",
//     university:"Marathwada University"


// }

console.log(`----------------Prime No-----------`);
const number = 11;
let isPrime = true;
if (number==1) {
    console.log("1 is neither prime nor composite number.");
    
}

else if(number>1){
for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        isPrime = false;
        break;
    }
}
}
if (isPrime) {
    console.log(`${number} is a prime number`);
} else {
    console.log(`${number} is a not prime number`);
}






