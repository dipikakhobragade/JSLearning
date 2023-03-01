function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(
        `This is 1st month of the year i e ${monthNumber} - "January"`
      );
      break;
    case 2:
      console.log(
        `This is 2nd month of the year i e ${monthNumber} - "February"`
      );
      break;
    case 3:
      console.log(`This is 3rd month of the year i e ${monthNumber} - "March"`);
      break;
    case 4:
      console.log(`This is 4th month of the year i e ${monthNumber} - "April"`);
      break;
    case 5:
      console.log(`This is 5th month of the year i e ${monthNumber} - "May"`);
      break;
    case 6:
      console.log(`This is 6th month of the year i e ${monthNumber} - "June"`);
      break;
    case 7:
      console.log(`This is 7th month of the year i e ${monthNumber} - "July"`);
      break;
    case 8:
      console.log(
        `This is 8th month of the year i e ${monthNumber} - "August"`
      );
      break;
    case 9:
      console.log(
        `This is 9th month of the year i e ${monthNumber} - "September"`
      );
      break;
    case 10:
      console.log(
        `This is 10th month of the year i e ${monthNumber} - "October"`
      );
      break;
    case 11:
      console.log(
        `This is 11th month of the year i e ${monthNumber} - "November"`
      );
      break;
    case 12:
      console.log(
        `This is 12th month of the year i e ${monthNumber} - "December"`
      );
      break;

    default:
      console.log(`This is not valid Month - ${monthNumber}`);
      break;
  }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
