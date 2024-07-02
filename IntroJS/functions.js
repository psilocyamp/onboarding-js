//Difficulty Level: Low
//1y2

// function add() {
//     const result = 100*20
// console.log(`The result is ${result}`)
// }
// add()

//3
// function add(factor1 , factor2) {
//     const result = factor1*factor2
// return result// Devuelve el resultado
// }
// // Llama a la función con valores específicos
// const myResult=add(100,20) //al llamar a la función, asigno el resultado a la variable myResult
// console.log(`The result is ${myResult}`)

//4
// const add=function(factor1 , factor2) {
//     const result = factor1*factor2
// return result// Devuelve el resultado.la función anónima devolverá el valor de resultado cuando se llame.
// }
// // Llama a la función con valores específicos
// const myResult=add(100,20) //llamamos a la función anónima con los valores específicos.Guardamos el resultado devuelto por la función anónima en una variable
// console.log(`The result is ${myResult}`)

//Nivel de Dificultad: Medio
//1

// function greet(){
//     const name=prompt("please tell me your name")
//     console.log(`hey, ${name} hello!`)
// }
// greet()

//2

// const anonymous= function(number1,number2){
//     const result = number1*number2
// return result
// }
// const theResult=anonymous(19,98)
// console.log(theResult);

//3

// function area(triangleBase, triangleHeight){
// const triangleArea=0.5*triangleBase*triangleHeight
// return triangleArea
// }
// const base=14
// const height=4
// const result= area(base,height)
// console.log(`The area of the triangle is: ${result}`)

//4

// function perimeter(side1,side2,side3){
//     const triangleSides=side1 + side2+ side3
// return triangleSides
// }
// const base=14
// const height=4
// const side=5
// const result= perimeter(base,height,side)
// console.log(`The perimeter of the triangle is: ${result}`)

//5

// function calcTotalPrice(price, quantity){
// // Calculate the total price before discounts
//     let totalPrice=price*quantity
// // Apply discounts if applicable
// if (quantity >= 10) {
//     totalPrice *= 0.9 // 10% discount
// }
// if(quantity>= 20){
// totalPrice *= 0.8 //20% discount
// }
// console.log(`the total price after discounts:${totalPrice.toFixed(2)}`)//el 2 dentro de tofixed representa la cant de decimales con la q me responde. el tofixed convierte el num en string
// return totalPrice//todo lo q va abajo del return no se lee
// }
// calcTotalPrice(30,4)

//6

// function isAnAdult(){
//     const age= prompt("please tell me your age")
//     if (age >= 18){
//         alert(`You have ${age} you are an adult`)
//     }
//     if (age <= 18){
//         alert(`You have ${age} you are not an adult`)
//     }
// }
// isAnAdult()

//Nivel de Dificultad: Alto

//1

// function incomeLerson(incomeAnnual){
//     if(incomeAnnual < 10000){
//         return incomeAnnual*0.10
//     }
//     else if(incomeAnnual<=20000 ){
//         return incomeAnnual*0.15
//     }
//     else{
//         return incomeAnnual*0.20
//        }
// }
// console.log(incomeLerson (8000));

//2

// function day(dayNumber) {
//   switch (dayNumber) {
//     case 1:
//     case 2:
//     case 3: //usan el mismo return
//     case 4:
//     case 5:
//       return "It is a business day";
//     case 6:
//     case 7:
//       return "It's the weekend";
//     // default:
//     //     return "Invalid value"        esto es por si se ingresa un dia q no esta dentro de la semana
//   }
// }
// console.log(day(7));

//3

// function personalInformationTotal() {
//   const personalInfo = {};
//   const firstName = prompt("please enter your name");

//   if (!firstName) {
//     console.log("the name cannot be empty");
//     return;
//   }
//   personalInfo.firstName = firstName;

//   const lastName = prompt("please enter your last name");

//   if (!lastName) {
//     console.log("the last name cannot be empty");
//     return;
//   }
//   personalInfo.lastName = lastName;

//   const ageUser = Number(prompt("please enter your age"));
//   if (!ageUser) {
//     console.log("the abswer is not valid");
//     return;
//   }
//   personalInfo.ageUser = ageUser;

//   console.log("Personal information:");
//   console.log("Name:", personalInfo.firstName);
//   console.log("Last name:", personalInfo.lastName);
//   console.log("Edad:", personalInfo.ageUser);
// }
// personalInformationTotal();

//4

function greet(name) {
  return `Hello ${name}`;
}
function calculateAge(yearOfBirth,currentYear) {
  const age = currentYear - yearOfBirth;
  return age;
}
function present() {
  const userName = prompt("enter your name:");
  const birthYear = prompt("enter the year of your birth:");
  const currentYear = new Date().getFullYear();
  const userAge= calculateAge(birthYear,currentYear)
  const greeting = greet (userName)


  alert(`${greeting} you ${userAge} years.`);
}

present()