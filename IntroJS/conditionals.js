//Difficulty Level: Low

//2
// SI ESTÁ LLUVIENDO, _uso paraguas ☔. ( ACCIÓN )
// SI HACE FRÍO, me abrigo. (ACCIÓN)
// SI es de noche, MIRA LAS ESTRELLAS. (CONDICIÓN)
// SI tengo hambre, COMO UNA EMPANADA. (CONDICIÓN)
// SI estoy aburrida, LEO UN LIBRO. (CONDICIÓN)
// SI ME DAN UN REGALO, digo "gracias". (ACCIÓN)

//4 y 5
// let num1=4
// let num2=5

// if (num1>num2){
//     console.log(num1)
//     }else if (num1==num2){
//         console.log( "The numbers are equal")
//     }
//     else{
//         console.log(num2)
//     }

//     //3

// // if (num1==num2){
// //     console.log("The numbers are equal")
// //     } else{
// //         console.log( "The numbers are diferent")
// //     }

// 6 y 7
// let fecha1 = "2024-9-2"
// let fecha2 = "2023-7-5"

// if (fecha1>fecha2){
//     console.log(`${fecha1}es mayor que ${fecha2}`)
// }else if( fecha1 == fecha2){
// console.log( " Las fechas son iguales ");
// }else{console.log (`${fecha2} es mayor que ${fecha1}`)

// }

// 6
// let number1=5
// let number2=7
// let number3=9
// let maxNumber= Math.max(number1, number2, number3)
// console.log(`el numero ${maxNumber} es el mas grande`)



// //Nivel de dificultad: medio



// 4


// let whatColor = prompt ("Please, enter a color. Red, Green or Blue").toLowerCase()
// switch(whatColor){
//     case "red":
// alert("The color of passion")
// break;
// case "green":
// alert("The color of nature")
// break;
// case "blue":
// alert("The color of the sea.")
// break;
// }


//5
function performOperation() {
  const num1 = Number(prompt("Ingresa el primer número (entre 1 y 100):"));
  const num2 =  Number(prompt("Ingresa el segundo número (entre 1 y 100):"));
  const operation = prompt("Ingresa la operación (suma, resta, multiplicación o división):").toLowerCase();

  let result;
  let operationLiteral;

  switch (operation) {
    case "suma":
      result = num1 + num2;
      operationLiteral = "la suma";
      break;
    case "resta":
      result = num1 - num2;
      operationLiteral = "la resta";
      break;
    case "multiplicación":
      result = num1 * num2;
      operationLiteral = "la multiplicación";
      break;
    case "división":
      result = num1 / num2;
      operationLiteral = "la división";
      break;
    default:
      console.log("Operación no válida. Inténtalo nuevamente.");
      return;
  }

  console.log(`El resultado de ${operationLiteral} de ${num1} y ${num2} es ${result}.`);
}

// Llamar a la función
performOperation();





//6

let person1 = {
  name: "Juan",
  age: 39,
  height: 1.69,
};

let person2 = {
  name: "Rosa",
  age: 32,
  height: 1.55,
};

if (person1.height > person2.height){
  console.log(`${person1.name} is taller than ${person2.name}.`)
}
else if(person1.height < person2.height){
  console.log(`${person2.name} is taller than ${person1.name}`);
}else{
  console.log(`${person1} and ${person2} have the same height`);
}


if (person1.age > person2.age){
  console.log(`${person1.name} is older than ${person2.name}.`)
}
else if(person1.age < person2.age){
  console.log(`${person2.name} is older than ${person1.name}`);
}else{
  console.log(`${person1} and ${person2} have the same age`);
}






//7
// function canYouDrive(){
//   const name= prompt("enter your name")
//   const age= Number(prompt("enter your age"))
//   const height=Number(prompt("enter your height"))
//   const vision=Number(prompt("enter your vision (from 1 to 10)"))
 

// if (age>=18 && height>110 && vision>=8){
//   console.log(`congrats ${name} you are qualified to drive`);
// }
// }
// canYouDrive()



// //8
// function checkAge(){
//   const age= Number(prompt("please enter your age"))

//   if (age >= 0 && age <= 12) {
//     alert("you are child.");
//   } else if (age >= 13 && age <= 18) {
//     alert("you are teen");
//   } else if (age >= 19 && age <= 45) {
//     alert("you are older young");
//   } else if (age > 45 && age <= 100) {
//     alert("you are old");
//   } else  {
//     alert("are you serious??? amazing");
//   } 
// }

// checkAge();







// //9
// let firstValue = Number(prompt("please, put 1, 2 or 3"));
// let numbertree = Number(prompt("please, enter another number"));

// if (firstValue == 1) {
//   alert(`your number is ${numbertree}`);
// } else if (firstValue == 2) {
//   alert(`your number is ${numbertree * 2}`);
// } else if (firstValue == 3) {
//   alert(`your number is ${numbertree * 3}`);
// } else {
//   alert(`That value is not allowed`);
// }


//Difficulty Level: High

//1

// let customerName = prompt("please, enter your name").toLowerCase();
// let entry;
// let pass;

// if (customerName == "amparo") {
//   alert("you are in the list, welcome");
// } else {
//   pass = confirm("do you have pass vip? say true or false");
//   if (pass) {
//     alert("welcomee");
//   } else {
//     entry = confirm("do you have entrance?");
//     if (entry) {
//       useTicket = confirm("do you want to use that?");
//       if (useTicket) {
//         alert("welcomeeee");
//       } else {
//         alert("ok, byeeee");
//       }
//     } else {
//       buyOne = confirm("do you want to buy one?");
//       if (buyOne) {
//         let money = confirm("do you have $1000?");
//         if (money) {
//           alert("ok, buy one and you can enter");
//         } else {
//           alert("i am so sorry you do not have enough money");
//         }
//       } else {
//         alert("ok, byeeeeee");
//       }
//     }
//   }
// }
