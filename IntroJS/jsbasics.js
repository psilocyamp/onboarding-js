console.log("Hello World")
//Difficulty Level: Low
let myName = "Amparo"
console.log(myName)

let myLastName="Perez"

let myAge=60;
let myPet="Mini"
let petAge="5"
let fullName= `${myName} ${myLastName}`
let presentationText= `Hello, my name is ${fullName}. I´ve ${myAge}. Also I´ve a pet, his name is ${myPet} and he had ${petAge}`
 console.log(presentationText)

 //Difficulty Level: Medium
let sumAges =(myAge+petAge)
let substractAges=(myAge-petAge)
let productAges=(myAge*petAge)
let divisionAges =(myAge/petAge)

let student={
 name: "Joaquin",
 age: 22,
 hobby: "carpentry",
 pet: "cat",
 petName: "colo"
}
console.table(student )

let pet ={
name:"mini",
mom: "amparo",
age:8,
hobby: "sleeping",
color: "black and white"
}
console.table(pet)

var fruits =["tangerine", "apple", "banana","melon", "watermelon"];
console.table(fruits)

//Difficulty Level: High

let yourAge = prompt ("whats your age? Please only numbers ")
//console.log(yourAge)
if (yourAge >= 18)  {
    alert("You are an adult")
} else {
    alert("You are not an adult")
}

var numbers= [0,1,2,3,4,5]
console.table(numbers)

var family=["pepe","pedro","juan","maria","paola"]

let pepe ={
    name: "pepe",
 age: 22,
 hobby: "tennis",
 pet: "cat",
 petName: "titi"
}
let pedro ={
    name: "pedro",
 age: 27,
 hobby: "voley",
 pet: "dog",
 petName: "jony"
}
let juan ={
    name: "juan",
 age: 72,
 hobby: "tv",
 pet: "snake",
 petName: "pol"
}
let maria ={
    name: "maria",
 age: 42,
 hobby: "basketball",
 pet: "fish",
 petName: "fisher"
}
let paola ={
    name: "pao",
 age: 33,
 hobby: "videogames",
 pet: "cat",
 petName: "kitty"
}
console.table(family)

let randomText = `hola me gusta la ${fruits[0]} como ${numbers[1]} y mi gato se llama ${paola.petName}`

console.log(randomText)