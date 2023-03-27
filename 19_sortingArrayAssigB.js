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
  const emp_radha = new Employee(33, "radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "monika", "IT", 40000, "Wipro");
  const emp_vinay = new Employee(88, "vinay", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "mahi", "HR", 85000, "Infy");
 
  const arrayEmployees=[emp_anil,emp_mahi,emp_monika,emp_radha,emp_rishi,emp_sonali,emp_vinay];
console.log("========================Step1. Employee Ids Sort in Ascending Order=================");
console.log(``);
 const ids= arrayEmployees.sort((a,b)=>{
   return a.emp_id>b.emp_id?1:-1
  })
  ids.filter((element)=>{
   console.log(`Emp id: ${element.emp_id} Emp Name: ${element.emp_name} Emp Dept: ${element.emp_dept}`);
  })

  console.log("=====================Step 2. Employee Department Sort in Ascending Order================");
  console.log(``);
const dpt= arrayEmployees.sort((a,b)=>{
   return a.emp_dept>b.emp_dept?1:-1
  })
  dpt.filter((element)=>{

   console.log(`Emp id: ${element.emp_id} Emp Dept: ${element.emp_dept}  Emp Comp: ${element.emp_company}`);
  })

  console.log("==================Step 3 .Employee Salary  Sort  in Descending Order===================");
  console.log(``);
 const sal= arrayEmployees.sort((a,b)=>{
   return a.emp_salary<b.emp_salary ?1:-1
  });

  sal.filter((element)=>{
   console.log(`Emp Name: ${element.emp_name} Emp Salary: ${element.emp_salary} Emp Comp: ${element.emp_company}`);
  })