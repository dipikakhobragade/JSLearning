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
console.log(`=====================Step 1===========================`);
const newArray = arrayEmployee.filter((emp) => {
  if (emp.emp_company == "TCS") {
    return console.log(
      `Employee Name : ${emp.emp_name}, Company Name : ${emp.emp_company}`
    );
  }
});
//console.log(newArray);

console.log(`=====================Step 2===========================`);

let avr = 0;
arrayEmployee.filter((element) => {
  if (element.emp_company == "Wipro") {
    avr = avr + element.emp_salary;
  }
});
console.log(`Average salary of Wipro Employees: ${avr / 2}`);

console.log(`=====================Step 3===========================`);

let sum = 0;
const avrSalary = arrayEmployee.filter((element) => {
  if (element.emp_company == "Wipro" || element.emp_company == "Infy") {
    sum = sum + element.emp_salary;
  }
});
console.log(`Average salary of Wipro and Infy Employee:${sum / 4}`);
