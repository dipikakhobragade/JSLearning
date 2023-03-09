

const professor ={
    firstName: "Gajanan",
    lastName : "Kharat",
    city : "Pune",
    department : "Computer Technology",
    degree : "BE in Information Technology",
    
    degrees : {
        engineering : 'CSC',
        master : 'MCS',
        PHD :'Adv Computing'

    },

    certificates : [ "Hacker Rank Participation","Certificate in IFE course","Certificate in adv programming"],

    show : function(){

        console.log('total degrees are - CSC,MCS,Adv Computing');
    }



};

console.log(`------Add 5 Properties-----`);
console.log(professor);
console.log(`-----Nested object degrees ------`);
console.log(professor.degrees);
console.log(`--------One Array Added-------`);
console.log(professor.certificates);
console.log(`-----Function Created------`);
professor.show()
console.log(`----- New Property "totalexperience" added`);
professor.totalExperience = "14 years";
console.log(professor);
console.log(`------modified one city value-----`);
professor.city = "Mumbai";
console.log(professor);
console.log(`------new Certification added in array-----`);
console.log(professor.certificates.push("Oracle Certificate"));
console.log(professor.certificates);


