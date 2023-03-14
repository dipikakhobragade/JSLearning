const employee = {
  id: 1234567,
  name: "Dipika",
  country: "India",
  city: "Mumbai",
};

console.log(`---------in operator---------`);

const isIdAvailable = "id" in employee;
console.log(isIdAvailable);
console.log(`-----------object traversing------------`);
const array = [];
for (const key in employee) {
  if (Object.hasOwnProperty.call(employee, key)) {
    const element = employee[key];
    console.log(key, element);
    //array.push(key);
    //console.log(array.push(key));
  }
}

const keysOfEmployee = Object.keys(employee);
console.log(keysOfEmployee);
const valuesOfEmployee = Object.values(employee);
console.log(valuesOfEmployee);
const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee);
console.log(entriesOfEmployee[0]);
console.log(entriesOfEmployee[0][0]);


console.log(`-------------------object freezing-------`);
const player = { fullName: "Virat Kohli", totalCenturies: 46, isMarries: true };
Object.freeze(player);
player.totalVicket = 120; //Adding new property - Not allowed as object is freezed
delete player.totalCenturies; // deleting property - Not allowed as object is freezed
player.fullName = "King Kohli"; // Updating existing property - Not allowed as object is freezed
console.table(player);

const student = { firstName: "Elon", lastName: "Musk", age: 54 } 
const address = { country : "US", city : "Silicon Valley", PIN: "QA2345" }
const newObject = {};
Object.assign(newObject,address,student);
console.table(Object.assign(student,address));
console.log(newObject);
const mergedObject = Object.assign({},student,address);
console.table(mergedObject);

 // First way 
 const mergedObject1 = Object.assign({}, student, address);
  console.table(mergedObject1); 
  // Second way 
  const newObject1 = {};
   Object.assign(newObject, student, address); 
  console.table(newObject1); 
  // Third way 
  Object.assign(student, address); 
  console.table(student); 
  // Fourth way 
  Object.assign(address, student); 
  console.table(address);

