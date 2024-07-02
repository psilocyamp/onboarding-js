// //3

// Prueba de escritorio
// Inicialización
// i = 10
// Condición
// La condición es i <= 20.
// Incremento
// i++ (aumenta en 1 en cada iteración).
// Iteraciones
// i = 10

// Se imprime: 'Número actual: 10'
// i incrementa a 11
// i = 11

// Se imprime: 'Número actual: 11'
// i incrementa a 12
// i = 12

// Se imprime: 'Número actual: 12'
// i incrementa a 13
// i = 13

// Se imprime: 'Número actual: 13'
// i incrementa a 14
// i = 14

// Se imprime: 'Número actual: 14'
// i incrementa a 15
// i = 15

// Se imprime: 'Número actual: 15'
// i incrementa a 16
// i = 16

// Se imprime: 'Número actual: 16'
// i incrementa a 17
// i = 17

// Se imprime: 'Número actual: 17'
// i incrementa a 18
// i = 18

// Se imprime: 'Número actual: 18'
// i incrementa a 19
// i = 19

// Se imprime: 'Número actual: 19'
// i incrementa a 20
// i = 20

// Se imprime: 'Número actual: 20'
// i incrementa a 21
// Fin del bucle
// Cuando i incrementa a 21, la condición i <= 20 ya no se cumple, y el bucle termina.

// Salida en pantalla
// La salida en pantalla será:

// Número actual: 10
// Número actual: 11
// Número actual: 12
// Número actual: 13
// Número actual: 14
// Número actual: 15
// Número actual: 16
// Número actual: 17
// Número actual: 18
// Número actual: 19
// Número actual: 20

//4

// Reuni los ingredientes:
// Huevos (generalmente 2 o 3).
// Sal y pimienta al gusto.
// Manteca o aceite.
// Bati los huevos:
// Rompe los huevos en una taza y bati.
// Calenta la sartén:
// Calenta una sartén antiadherente.
// Pone los huevos:
// Pone los huevos batidos en la sartén caliente.
// Cocina y revolve:
// Cocina a fuego medio-bajo.
// Revollve suavemente para formar pliegues.
// Dobla el omelette:
// Doblalo por la mitad.
// Cocina hasta que esté listo:
// Continúa cocinando hasta que esté dorada.
// Servi caliente.

//5

//a) Según el algoritmo, ¿debería apagarse el interruptor de luz en todos los casos?
//si

//b Según el algoritmo, ¿se debe buscar una escalera en todos los casos?
//no

//c ¿Cuál es la condición que debe cumplirse para dejar de desenroscar?
//hasta que la bombilla se desenrosque

//d) Podría “Repetir hasta que la bombilla se desenrosque” ser reemplazado por “Repetir cuatro veces” (o un para que se repita 4 veces)? En su opinión, ¿cuál es la diferencia entre ambas opciones?
// podria, pero no cumpliria la misma funcion, ya que no sabemos cuantas veces hay que repetir la accion para que la bombilla se desenrrosque

//e) ¿Tienes algún comentario sobre el “Go down the ladder” step? ¿Siempre se hace?
//¿Dónde y cómo completaría el procedimiento con los pasos para colocar la bombilla sana?
//no, solo si queda muy alta la bombilla, para colocar una nueva, deberiamos salir de esa condicion, y aplicar la accion para toda la funcion.

// //6
// const number = parseInt(prompt("enter a number between 1 y 100:"));

// if (!isNaN(number) && number >= 1 && number <= 100) {
//   console.log(`numbers between ${number} and 0:`);
//   for (let i = number; i >= 0; i--) {
//     console.log(i);
//   }
// } else {
//   console.log("please, enter a valid number.")
// }

//7

// let number = parseInt(prompt("enter a number between 1 y 10:"))

// if (number && number >= 1 && number <= 10) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`)
//   }

// }

//8

// let userInput
// let sum = 0

// while (true) {
//   userInput = Number(prompt("enter a number (0 to stop):"))

//   const number = parseFloat(userInput)

//   if (isNaN(number)) {
//     console.log("please, enter a valid number.")
//   } else if (number === 0) {
//     break
//   } else {
//     sum += number    //se acumula el num en la variable suma
//   }
// }
// console.log(`the sum is: ${sum}`)

//9

// let userInput
// let sum = 0

// do {
//   userInput = Number(prompt("enter a number (0 to stop):"))

//   if (!isNaN(userInput)) {
//     sum += userInput
//   } else {
//     console.log("please, enter a valid number.")
//   }
// } while (userInput != 0);
// console.log(`the sum is: ${sum}`)



//10


// person={
//   name:"juan",
//   lastName:"lopez",
//   origin:"france",
//   studies:"sociology"
// }
// for (const key in person) {
//   console.log(key)
//   }



//11

// person={
//   name:"juan",
//   lastName:"lopez",
//   origin:"france",
//   studies:"sociology"
// }
// for (const value in person) {
//   console.log(person[value] )   ///para el valor tengo que agregar el nombre del objeto
//   }





//Difficulty Level: Medium


//1

// let userInput
// const secret = 4
// let attempts = 0

// while (true) {
//   userInput = parseFloat(prompt("enter a number from 1 to 10: (if you want to stop, enter 0):"))

//   if (isNaN(userInput)) {
//     console.log("please, enter a valid number")
//   } else if (userInput === 0) {
//     break;
//   } else if (userInput > secret) {
//     console.log("your number is bigger than the secret number.")
//   } else if (userInput < secret) {
//     console.log("your number is smaller than the secret number.")
//   } else {
//     console.log(`awesome, you found the secret number ${secret} in ${attempts} attempts.`)
//     break
//   }

//   attempts++
// }

//2

// const number = parseInt(prompt("enter a number:"))

// console.log(`the prime numbers up to ${number} are:`) // multiplos 

// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {  ///para verificar si el residuo de la división es igual a cero. si es así, significa que i es un multiplo de number
//     console.log(i);
//   }
// }

//3

// const number= parseInt(prompt("enter a number:"))


// function bell() { 
//   return"ding dong"
// }
// const ringBell = bell() 
// for (let i = 0; i < number; i++) {   
//  console.log(ringBell);
//  console.log("--------------");
// }

// bell(number)


//4

// const dateLimit="1997-8-3"
// const dates=["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

// for (let i = 0; i <= dates.length; i++) {
//   if (dates[i] >= dateLimit) {
//     console.log(dates[i]);
//   }

// }


//5

// const colors=["Rojo","Verde","Azul","Violeta","Marrón","Negro","Blanco"]

// for (const eachColor of colors) {//colors a todos juntos
// console.log(eachColor);  //each color se refiere a cada color solo
// }


//6

// const userInput= parseInt(prompt("enter a number:"))
// const colors=["Rojo","Verde","Azul","Violeta","Marrón","Negro","Blanco"]

// for (let i = 0; i < userInput; i++) {   ///// for anidado, para llamar primero al array entero las veces que quiera el user
//   console.log("...................")

// for (let i = 0; i < colors.length; i++) { /// para llamar color por color
//   console.log(colors[i])
// }
// }


//7
// const numbers =[1,2,3,4,5]

// for (const doble of numbers) {
//   console.log(`the number is ${doble} and its double is ${doble*2}`)
// }


//8

// const members = [

//   {
//     member: "father",
//     name: "carlos",
//     age: 25,
//     eyeColor: "blue",
//   }, {
//     member: "mother",
//     name: "lola",
//     age: 20,
//     eyeColor: "green",
//   }, {
//     member: "daughter",
//     name: "ema",
//     age: 5,
//     eyeColor: "brown",
//   }, {
//     member: "cousin",
//     name: "manuel",
//     age: 9,
//     eyeColor: "black",
//   },
//   {
//     member: "uncle",
//     name: "lolo",
//     age: 46,
//     eyeColor: "black",
//   },

// ]


// function presentation(members) {
//   for (let i = 0; i < members.length; i++) {
//     console.log(`my ${members[i].member} is ${members[i].name} and she is ${members[i].age} and her eye color is ${members[i].eyeColor}`)
//   }
// }


// presentation(members)


//1


// let par = 0
// let noPar = 0
// let userInput=1

// while (userInput != 0) {
//   userInput = parseInt(prompt("enter a number: (if you want to stop, enter 0):"))

//   if (isNaN(userInput)) {
//     console.log("please, enter a valid number")
//   } else if (userInput % 2 === 0) {
//     par += userInput    //cuando un numero sea par se va a gardar en la variable par y se va a sumar

//   } else {
//     noPar += userInput  //cuando un numero sea impar se va a gardar en la variable noPar y se va a sumar
//     }
//   }
//   console.log(par)
//   console.log(noPar)


//2

// const numbers = [1, 2, 30, 400, 55, 6, 7, 8, 90, 10]
// let bigger=0
// for (const number of numbers) {    ///// number es cada objeto que va a recorrer numbers

// if (number > bigger) {
//   bigger = number
// }  
// }

// console.log(bigger)

