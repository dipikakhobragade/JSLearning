


// function factorialOfNum( num){
// let factorial = 1 ;
// for (let index = 5; index >=1; index--) {
//     factorial = factorial*index;
    
    
// }
// return factorial;

function factorialOfNum(num) {
    if (
      num == null ||
      num == undefined ||
      (isNaN(num))|| num == 0
    ) {
      console.log(`Given number "${num}" is invalid`);
    } else {
      console.log(`Given number "${num}" is valid`);

      let factorial = 1;
  
      for (let index = num; index >= 1; index--) {
  
        factorial = index * factorial;
      
      }
  
      console.log(`Factorial of "${num}" is ${factorial}`);
      console.log(`-------------------------------------------------------`);
    }
    
  }
   factorialOfNum(5);
   factorialOfNum(3);
   factorialOfNum(8);
   factorialOfNum(9);
   factorialOfNum(0);
   factorialOfNum(undefined);
   factorialOfNum(null);
   factorialOfNum(NaN);

