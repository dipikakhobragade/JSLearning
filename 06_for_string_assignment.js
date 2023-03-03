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

var lastWordCharCount = function (str) {
  var lastWord = "";
  for (let index = str.length; index >= 0; index--) {
    var char = str.charAt(index);
    lastWord = lastWord + char;
    if (char == " ") {
      break;
    }
  }
  return lastWord;
};
var result = lastWordCharCount("Javascript is the language of Internet");
console.log(
  `Length of the last word count in "Javascript is the language of Internet"- ${result.length}`
);

var result = lastWordCharCount("I am Angular Developer");
console.log(
  `Length of the last word count in "I am Angular Developer" - ${result.length}`
);

var result = lastWordCharCount(
  "Hard work and commitment is the key of success"
);
console.log(
  `Length of the last word count in "Hard work and commitment is the key of success"- ${result.length}`
);
