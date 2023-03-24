const array = [3, 4, 5, 6, 1];
           // [5, 6, 7, 8, 3];

const arrayTransformed = [];
array.forEach( (currentValue) => {
    arrayTransformed.push(currentValue+2)
} );
console.log(arrayTransformed);

console.log("Using map()");
const arrayNew = array.map( (element) => {
   return element + 2;
} )
console.log(arrayNew);
console.log(`=========================================`);

const arrayOfNames = ["Rupesh Dhumal", "Rutuja Pawar", "Nayan", "Pralhad"];
const arrayNameTransformed = arrayOfNames.map((element)=>{
   return element.length

});
console.log(arrayNameTransformed);

//we can write in one line also
const arrayNameTrans = arrayOfNames.map(element => element.length

);
console.log(arrayNameTransformed);


console.log(`===========================================`);
console.log("Using map()");
const arrayNew1 = arrayOfNames.map( (element) => {
   return element.length**2;
} )
console.log(arrayNew1);
