class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
console.log(``);
console.log(`===================Step1========================`);
const arrayNameTransformed = arrayEmployee.map((element) => {
  return element.emp_name;
});

console.log(arrayNameTransformed);
console.log(``);
console.log(`===================Step2========================`);
const arrayNameTransformed1 = arrayEmployee.map((element) => {
  return element.emp_dept;
});

console.log(arrayNameTransformed1);
console.log(``);
console.log(`===================Step3========================`);
const arrayNameTransformed2 = arrayEmployee.map((element) => {
  return element.emp_id;
});

console.log(arrayNameTransformed2);
console.log("");
console.log(`===================Step4========================`);
const arrayNameTransformed3 = arrayEmployee.map((employee) => {
  if (employee.emp_company == "TCS") {
    // employee.emp_name;
    return console.log(employee.emp_name);
  }
});

// const arrayTransformed = [];
// const arrayCompany=arrayEmployee.map((employee)=>{
// if (employee.empCompany=="TCS") {
//     arrayTransformed.push(employee.emp_name);
// }
// })
// console.log(`The List of Employee Name working In TCS Company : ${arrayTransformed}`);