function factorialOfWordsCount(str) {
  if (
    str == null ||
    str == undefined ||
    (isNaN(str) && typeof str == "number")
  ) {
    console.log(`Given string ${str} is invalid`);
  } else {
    console.log(`Given string "${str}" is valid`);

    let words = str.split(" ");
    const totalWords = words.length;
    console.log(`Total word count in given string - ${totalWords}`);
    let factorial = 1;

    for (let index = totalWords; index >= 1; index--) {

      factorial = index * factorial;
    
    }

    console.log(`Factorial of "${str}" is ${factorial}`);
    console.log(`-------------------------------------------------------`);
  }
  
}
 factorialOfWordsCount("Revision is the mother of success");
 factorialOfWordsCount("We never fail,we always learn");
 factorialOfWordsCount("Dipika Shamrao Khobragade");
 factorialOfWordsCount("");
 factorialOfWordsCount(null);
factorialOfWordsCount(undefined);
factorialOfWordsCount(NaN);


