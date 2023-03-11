
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
    id : 123456,
    address:{
        city :"Mumbai",
        area : "Palava",
        pincode : 123456,


    },
    school : " Podar School",

    friends : ["Dipika", "Ridvika", "Bhushan"],

    show : function(){

        console.log(`I am show() function`);
    }


    
};
student.show();
//to update object
student.mark =
{
    math:80,
    physics:60,
    drawing: 70


}
console.log(student.friends[2]);
console.log(student.friends[student.friends.length-1]);// right to calculate length
console.log(student.friends);
console.log(student.address.city);
console.log(student.mark);
console.log(student.address);
console.log(student);
console.log(typeof student);
console.log(typeof student.id);
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

