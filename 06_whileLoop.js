// for printing 1 to 10 numbers
var index =0;
while (index<=10) {
    console.log(index);
    index++;
    
}


const arrayNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
var index = 0;
while (index<arrayNumbers.length) {
    console.log(arrayNumbers[index]);
    index++;
    
}
console.log(`----------------------------------------`);

var index = 0;
var sum =0;

 while (index<arrayNumbers.length)
 {
    const element = arrayNumbers[index]
    if (element%2==0) {
        console.log(element);
        sum = sum + element;
        
    }
    index++;
 }
console.log(sum);
console.log(`-------------------------`);

var index = 0;
var sum =0;

 while (index<arrayNumbers.length)
 {
    const element = arrayNumbers[index]
    if (element%2!=0) {
        console.log(element);
        sum = sum + element;
        
    }
    index++;
 }
console.log(sum);



