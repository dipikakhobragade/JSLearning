var reverseString = function (str) {
  var reverse = ""; // wo
  for (let index = str.length - 1; index >= 0; index--) {
    // 9
    var charAt = str.charAt(index);
    reverse = reverse + charAt; // "w"+"o" ==> "wo"
  }
  return reverse;
};
var result = reverseString("Do it anyhow");
console.log(`Reverse String is: ${result}`);



var reverseString = function (str) {
    var reverse = ""; // wo
    for (let index = str.length - 1; index >= 0; index--) {
      // 9
      var char = str.charAt(index);
      
      if(char == "")
      {
        break;
      }
      reverse = reverse + char;

    }

    return reverse;
  };
  var result = reverseString("Do it anyhow");
  console.log(`Reverse last word is: ${result}`);



  var reverseStr = function(str){ // 
    str = "Do it anyhow"
     var reverse = ""; // wohyna 
    for (let index = str.length-1 ; index >= 0; index--) { var char = str.charAt(index);// o 
    if(char == " "){ break; } 
    reverse = reverse + char; // "w"+"o" ==> "wo"
 } 
    return reverse; } 
    var result = reverseStr("Do it anyhow");
     console.log(`Reverse last word : ${result}`);