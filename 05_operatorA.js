
var java ="JavaScript";
var googleChrome = "Google Chrome";
var devSmart = "Developer Smart";

function squareOfWordLength(word){

    console.log(`The word is: ${word} 
The length of the word is ${word} : ${word.length}  
The Square of the word is ${word}: ${word.length ** 2}`);
console.log(`------------------------------------------`);
    
}
squareOfWordLength(java);
squareOfWordLength(googleChrome);
squareOfWordLength(devSmart);

function string(){
var str = "I am Angular Developer";
var length = str.length;
var totalWord = str.split(" ");
var wordCount = totalWord.length;
console.log(`Given String is: ${str}`);
console.log(`Length of the string is:${length}`);
console.log(`Total word of the String : ${wordCount}`);
console.log(`Result of string length divide by total number of word is : ${length/wordCount}`);
console.log(`Result of string length multiplied by total number of word is : ${length*wordCount}`);


}
string();
