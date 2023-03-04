var string = function (str) {
  var count = 0;
  for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u" ||
      char == "I" ||
      char == "A"
    ) {
      count = count + 1;
    }
  }
  return count;
};

var result = string("Javascript is the language of Internet");
console.log(
  `Total Number of vowel count in "Javascript is the language of Internet" : ${result}`
);
var result = string("I am Angular Developer");
console.log(
  `Total Number of vowel count in "I am Angular Developer" : ${result}`
);
var result = string("Hard work and commitment is the key of success");
console.log(
  `Total Number of vowel count in "Hard work and commitment is the key of success" : ${result}`
);

console.log(`------------------------------------------------------------`);

function lastWordCharCount(str) {
  var lastWordCount = 0;
  for (let index = str.length - 1; index >= 0; index--) {
    var char = str.charAt(index);

    if (char == " ") {
      break;
    }
    lastWordCount = lastWordCount + 1;
  }
  return lastWordCount;
}
var result = lastWordCharCount("Javascript is the language of Internet");
console.log(
  `Last word count in "Javascript is the language of Internet"- ${result}`
);

var result = lastWordCharCount("I am Angular Developer");
console.log(`Last word count in "I am Angular Developer" - ${result}`);

var result = lastWordCharCount(
  "Hard work and commitment is the key of success"
);
console.log(
  `Last word count in "Hard work and commitment is the key of success"- ${result}`
);
