// var a=23;
// console.log("value of a ="+a) 

// if(a>10){
//     var a=45;
//     console.log("value of a inside blockof if ="+a)
// }
// console.log("value of a outside block of if ="+a)


// function sum(a,b){
//     return a+b;
// }
// // const a=sum();
// // console.log("a="+a);
// function sumofsum(){
//     console.log(sum(40,30)+sum(10,400));
// }
// sumofsum();


// function info(roll,name,college,branch){
//     return "roll+roll" "name"+name+"college"+college+ "branch"+branch;
//     myinfo{
//         console.log mydata=info("4246","abc","Abes","CSE");
//         console.log(mydata);
//     }
// }

// function generateNumber(){
//     return Math.floor(Math.random()*1000);
// } 
// const randomNumber=generateNumber();

// function findEvenNumber(){
//   const number1=generateNumber();
//   if number1=n%2;
// }
// console.log(randomNumber)


// function generateNumber(){
//     return Math.floor(Math.random() * 1000);
// } 


// const randomNumber = generateNumber();

// function findEvenNumber(){
//     if(num % 2 === 0){
//         console.log (even number) is even`;
//     } else {
//         console.log(odd number) is odd`;
//     }
// }

// console.log(randomNumber);
// findEvenNumber();


// const sum=(a,b)=>{
//     return a+b;
// }
// const result=sum(20,30);


 // IIFE
// (()=>{console.log("hey...usingiife")})();

// callback function

// function sum(a,b);{
//     return a+b;
// }

// function sumWithMsg(clbk,msg){
// const result=clbk(20,40);
// return msg+result;
// }
// sumWithMsg(sum,"hi...Sum");


// function login(msg, error) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(msg);
//     }
// }

// function loginHandler(username, password, clbk) {
//     const myUsername = "raj";
//     const myPassword = "12345";

//     if (username === myUsername && password === myPassword) {
//         clbk("success", null);
//     } else {
//         clbk(null, "username or password is incorrect");
//     }
// }


// loginHandler("raj", "12345", login);



// setTimeout(()=>{
//     console.log("one")
//     setTimeout(()=>{
//         console.log("two")
//         setTimeout(()=>{
//             console.log("three")
//             setTimeout(()=>{
//                 console.log("four")
//                 setTimeout(()=>{
//                     console.log("five")
//                 setTimeout(()=>{
//                     console.log("six")
//                   setTimeout(()=>{
//                     console.log("seven")
//                 setTimeout(()=>{
//                     console.log("eight")},1000)
//                 },1000)      
//                 },1000)
//             setTimeout(()=>{
//                 console.log("nine")
                
//             },1000)
//         },1000)
//             },1000)
            
//         },1000)
//     },1000)

// },1000)


console.log("one")
setTimeout(()=>console.log("two"),1000);
console.log("three")

