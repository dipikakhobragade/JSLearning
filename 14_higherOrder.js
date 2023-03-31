function doHomeWork(callbacks){
    console.log(`Doing Homework.....`);
    console.log(`Finally Homework is completed......`);
   callbacks();
   let submitHomeWork =function(){
    console.log(`Hey we both completed homework`);
    console.log(`Let us submit please....`);
   }
   return submitHomeWork;
}
function copyHomeWork(){
    console.log(`Copying homework....`);
    console.log(`Thank you, I copied Homework.....`);
}
const submitFunction =doHomeWork(copyHomeWork);
submitFunction();
