function doAssignment(callbacks){
    //Ajay
    console.log(`Solving Assignment`);
    console.log(`step 1 to 10 all are solved now`);
    callbacks();
}
function copyAssignment(){
    //Ajinkya
    console.log(`Thank u Ajju, Let me copy assignment`);
    console.log(`ohh finally copied all assignment`);
}
doAssignment(copyAssignment);


function  greet(){
    console.log(`Good Morning......`);

}
//1 sec=1000ms
//3 sec =3000ms
setInterval(greet,4000);

function firstClass(){
    console.log(`We can return function from another function`);
    function innerFunction(){
        console.log(`Inner Function`);
    }
    return innerFunction;
}
const inner1 = firstClass();
inner1(); //FE

// 2nd way to return the function
function firstClass(){ 
    console.log("We can return function from another function");
     return function(){
         console.log("Inner function"); 
    } // return innerFunction; 
} 
const inner = firstClass();
 inner();