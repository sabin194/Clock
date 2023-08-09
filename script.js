// document.write("Hello World");
// console.log("Hello World");

// variable

// let name="Harry";
// let age =20;
// let amt=56.88;

// console.log(name, age, amt);

// console.log ("Name is "+ name + " age is" + age);

// let username ="Harry";

// username = "New harry";

// console.log(username);

// const pi = 3.1415;

// pi= 6; // NOt ALLOWED

// console.log(pi);

// let i=5;
// let j=5;

// let k= i==j;
// console.log(k);

// && = return boolean



// DATA TYPES 
// let username=undefined;

// console.log(username);


//OBJECT

// let user={
//     name:"Harry",
// age : 20,
// address: "Mitrapark",
// };

// console.log(user);


// ARRAY
// let arr = [1, "Harry", 1.234, { name: "Harry"}];

// arr.push();
// console.log(arr);

// FUNCTIONS

// function addTwoNumbers(){
//     let i= 5,j=6;
//     let k=i+j;

//     console.log(k);
   

// }
// addTwoNumbers();

// function addTwoNumbers(i,j){
    
//     let k=i+j;

//     console.log(k);
   

// }
// addTwoNumbers(1,5);


//ES6
// let addTwoNumbers= (i,j)=>{
    
//      let k=i+j;
//      console.log(k);
     

// }
// addTwoNumbers(44,9);


// let addTwoNumbers= (i,j)=>{
    
//     let k=i+j;
//    return k;
    

// };
// let result = addTwoNumbers(1324,677);
// console.log(result);



// let user= [
//     {
//     name: "Harry",
//     address: "Mitrapark",
//     age: 20,
// },

// {
//     name: "hahaha",
//     address: "hehehhe",
//     age: 22,
// },

// {
//     name: "nananna",
//     address: "nennenenne",
//     age: 21,
// },
// ]


//    let getName=(user)=>{
//         user.forEach((item)=>{
//             if(item.age<=22){
//                 console.log(item.name);
//             }
//         });
//     };

//     getName(user);

//class
// class StudentData{
//      getStudentName(){
//          console.log("This is a student");
//      }
//  }
 
//  let studentObj = new StudentData();
 
//  studentObj.getStudentName();
 
 //constructor
//  class StudentDatas{
//      constructor(name){
//          console.log(name);
//      }
//  }
 
//  let studentObjs = new StudentDatas("Hello There !!");
 
//  //accessing variable inside class
 
//  class hello{
//      userName = "";
//      myAge=0;
 
//      constructor(name,age){
//          this.userName = name;
//          this.myAge=age;
//      }
 
//      getStudentName(){
//          console.log("Hello my name is " + this.userName);
//      }
//      getStudentAge(){
//          console.log("My age is "+ this.myAge);
//      }
//  }
 
//  let myName = new hello("Sabin Dhungel.");
//  myName.getStudentName();
//  let myAge = new hello("",20.);
//  myAge.getStudentAge();
 
//  class visit{
//      placeName = "";
 
//      constructor(name){
//          this.placeName = name;
//      }
//  }
 
 //Date
 
//  let date = new Date();
 
//  let day=[
//      "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
//  ];
 
//  let results = date.getFullYear() + "-" + date.getMonth() + "-" + day[date.getDay()];
 
//  console.log(results);
 
// let date = new Date(); 

// function testTodayDate(){
//      let todayDate = date.getDate();
 
//      let askDate = prompt("What is today's date?");
     
//      let getDate = askDate;
 
//      if(getDate == todayDate){
//          alert("This is today's Date");
     
//      }
//      else{
//          alert("This is not today's Date");
//          testTodayDate();
//      }
//  }
 
//  testTodayDate();

// let headingElem= document.getElementById("heading");
 // headingElem.innerHTML="New Text";
 // console.log(headingElem);

// let showText=()=>{
//     headingElem.innerHTML="New Text";
// }

// let printName= ()=>{
//     document.write("Sabin");
// };
// setTimeout(printName,5000);

// setInterval(printName, 2000);


let setTime =() =>{
let timeElem = document.getElementById("time");

let date = new Date()

let hours = date.getHours();
hours= hours <10 ? "0" + hours : hours;
let minutes = date.getMinutes();
minutes = minutes <10 ? "0" +minutes : minutes;
let seconds = date.getSeconds();
seconds= seconds <10 ? "0" + seconds : seconds;
let result = hours +":" +minutes +":"+ seconds ;

timeElem.innerHTML = result;
};

setInterval(setTime, 1000);

