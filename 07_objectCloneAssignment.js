const arrayNums =[20,3,4,56,90,400,49]
const newArray = arrayNums; // Shallow Clone
newArray.push(55,66);
console.log(`---------------Step 1----------------------`);
console.log(``);
console.log(`Original Array After Adding ending no.:${arrayNums}`);
console.log(`Shallow Clone Array :${newArray}`);

console.log(`--------------Step 2----------------------------------`);
console.log(``);
arrayNums.push(10,25);
console.log(`Original Array After Adding ending no.:${arrayNums}`);
const clonedArray = [...arrayNums];
console.log(`Deep Clone using Spread Operator :${clonedArray}`);

console.log(`-------------Step 3--------------------`);
console.log(``);
const arrayEven = [2, 30, 14, 8];
const mergeArray = [...arrayNums, ...arrayEven];
console.log(`Merge Array using Spread operator : ${mergeArray} `);

console.log(`------------Step 4--------------------------`);
console.log(``);
const employee_info ={
    emp_id:27,
    emp_name:"John Doe",
    salary :{
        july_month : "40,0000INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street: "Kanchi Pokli,431202",

        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800-4567 32","+91-9096 5678 77"]
}
// const employeeAddress = employee_info.address;
// console.log(`Address :${employeeAddress}`);
// console.table(employee_info.address);
// console.log(employee_info.mobiles);
console.log(
    `A.Address==> Colony : ${employee_info.address.locality.colony},  
    Street : ${employee_info.address.locality.street}, 
    City : ${employee_info.address.city}, 
    State : ${employee_info.address.state}, 
    Country : ${employee_info.address.country} `
  )
  console.log(`B.Mobile Numbers : ${employee_info.mobiles}`);

  console.log(`-------------Step 5-----------------------`);
  console.log(``);

  const newEmployee = JSON.parse(JSON.stringify(employee_info));

newEmployee.salary.july_month = "80k";

console.log(`Original Object Salary ==> ${employee_info.salary.july_month}`);
console.log(`Updated Clone Object Salary ==> ${newEmployee.salary.july_month} `);

const clonedObject = JSON.parse(JSON.stringify(employee_info));
clonedObject.country = "United Kingdom";

console.log(`Original object country : ${employee_info.address.country}`);

console.log(`Updated Clone Object country : ${clonedObject.country}`);










