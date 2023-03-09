
let firstName = "Dipika";
let lastName = "Khobragade";
let isWorking = true;
let age = 36;
let collegeName = "IICMR";
let id = 123456;


let student = {
    firstName: "Dipika",
    lastName : "Khobragade",
    isWorking : true,
    age : 36,
    collegeName : "IICMR",
    id : 123456
    
    
};
student.mark =
{
    math:80,
    physics:60,
    drawing: 70

}
console.log(student.mark);
console.log(student.address);
console.log(student);
console.log(typeof student);
// dot notation
console.log(student.firstName);
// [] notation
console.log(student["firstName"]);

//update property
student.collegeName = "COEP PUNE";
// add new property

student.city ="Mumbai";
console.log(student);
console.table(student);
student.country ="India";
console.table(student);
//delete the property
delete student.isWorking;
console.log(student);

