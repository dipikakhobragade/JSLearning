
console.log(`================First and Last Element selected from array==============`);
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`First Fruit is : "${arraySeasonalFruits[0]}"`);

console.log(`Last Fruit is : "${arraySeasonalFruits[4]}"`);

console.log(`Total Number of fruits - ${arraySeasonalFruits.length}`);

console.log(`=====Add Element "Papaya" before the Element "Banana"=====`);
arraySeasonalFruits.unshift("Papaya");
console.log(arraySeasonalFruits);

console.log(`=======Remove "Mango" from the Array=====`);

arraySeasonalFruits.splice(4,1);
console.log(arraySeasonalFruits);

console.log(`=======Add Element "Pineapple" at the last position=======`);

arraySeasonalFruits.push("Pineapple")
console.log(arraySeasonalFruits);

console.log(`===========Insert an Element "Dragon Fruit" before "Water Melon"===========`);
arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(arraySeasonalFruits);


console.log(`=============Replace an element "Orange" with "Kiwi"============`);
arraySeasonalFruits.splice(2,1,"kiwi");
console.log(arraySeasonalFruits);

console.log(`===========The elements starting from index 1 to 4==========`);
const subArray = arraySeasonalFruits.splice(1,4);
console.log(subArray);

console.log(`============Select only last 3 element===========`);
var arraySeasonalFruits =["Papaya","Banana","Orang","Kiwi","Apple","Dragon Fruit","Water Melon", "Pineapple"];
const arrayFromIndex3 = arraySeasonalFruits.slice(5);
console.log(arrayFromIndex3);




