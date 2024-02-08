console.log("====== API getElementsByTagName() to select element by tag name  =====");
const h2Element = document.getElementsByTagName("h2");
console.log(h2Element[1].innerHTML);
h2Element[1].innerHTML = "My Hobbies";

const favColor=document.querySelector("h2");
favColor.style.color="purple";


// console.log("====== API getElementById() to select element by id  =====");
// const elementProfile = document.getElementById("profile");
// console.log(elementProfile.innerHTML);

// console.log("====== API getElementsByClassName() to select element class Name  =====");
// const elementLi =document.getElementsByClassName("liItem");
// console.log(elementLi[1].innerHTML);
// console.log("====== API querySelector() to select element by id  =====");
// const elementProfileByQuery = document.querySelector("#profile");
// console.log(elementProfileByQuery);

// console.log("====== API querySelector() to select element by class  =====");
// const elementByQuery= document.querySelector(".liItem");
// console.log(elementByQuery);

// console.log("====== API querySelectorAll() to select element by class  =====");
// const elementsByQuery = document.querySelectorAll(".liItem");
// console.log(elementsByQuery);

// elementsByQuery[3].innerHTML = "Oracle Database";
// console.log(elementsByQuery[3]);


// console.log("====== Changing the attribute of an element =====");
// const elementMyProfile = document.querySelector("#myProfile");
// elementMyProfile.setAttribute("href", "https://www.linkedin.com/");
// console.log(elementMyProfile);


console.log('=========Changing the CSS properties of an element =====')
const elementTechstack = document.querySelector("#techstack");
elementTechstack.style.color = "red";
// elementTechstack.style.fontFamily = "Arial";

console.log("====== Remove Element =====");
const elementDivProject = document.querySelector("#divProject");
const elementProject = document.querySelector("#project");
elementDivProject.removeChild(elementProject);

console.log("removeChild=document.querySelector");
 const unorderd= document.querySelector("#unorderd");
const list=document.querySelector("#list");
unorderd.removeChild(list)



console.log("====== Adding Element =====");
const elementDiv = document.querySelector("#divProject");
const elementP = document.createElement("p");
const elementText = document.createTextNode("Team Size - 7");
elementP.appendChild(elementText);
elementDiv.appendChild(elementP);

const elementAdress = document.querySelector("#adress")
elementAdress.addEventListener("click",()=>{
    console.log("Listening click event....");
})

// elementAdress.addEventListener("mouseover",()=>{
//     console.log("mouseover....");
// })

function show(){
    console.log("event click.........");
}

// const bodynode =document.querySelector("body");
// const elementh=document.createElement("h3")
// const tNode=document.createTextNode("React")

// elementh.appendChild(tNode);
// bodynode.appendChild(elementh)


const selectbutton = document.querySelector("#myhobbies");
selectbutton.addEventListener("click",()=>{
    const selectDiv=document.querySelector(".div");
    const paragrapTag=document.createElement("p");
    const hobbie=document.createTextNode("programing")
   selectDiv.appendChild(paragrapTag);
   paragrapTag.appendChild(hobbie);
   
})

selectbutton.addEventListener("click",()=>{
    const selectDiv=document.querySelector(".div");
    const paragrapTag=document.createElement("p");
    const hobbie=document.createTextNode("Reading")
   selectDiv.appendChild(paragrapTag);
   paragrapTag.appendChild(hobbie);
   
})
selectbutton.addEventListener("click",()=>{
    const selectDiv=document.querySelector(".div");
    const paragrapTag=document.createElement("p");
    const hobbie=document.createTextNode("Dancing")
   selectDiv.appendChild(paragrapTag);
   paragrapTag.appendChild(hobbie);
   
})




const isprimebutton=document.querySelector("#isprime");

isprimebutton.addEventListener("click",()=>{

const number = prompt("please enter the number",0)
let c=0;
for (let index = 1; index <=number; index++) {
    
    if (number%index==0) {
        c++
    }   
}
if (c==2) {
    alert(`${number}: is prime`);
}
else{
    alert(`${number}: is Not prime`);
}
})