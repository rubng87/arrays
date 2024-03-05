// ARRAYS

let arrayFrutas = ["pera", "kiwi", ,"mango", "uva", "mandarina"]

let array1 = new Array(3)
let array2 = []
console.log(array1.length);

//length <-- para contar los elementos
console.log(arrayFrutas.length);

//para acceder a cada eemento utilizamos su indice
//que empieza a contar desde 0
console.log(arrayFrutas[3]);
console.log(arrayFrutas.at(-1));

let arrayFrutasToString = arrayFrutas.toString() //Convierte lo que es un array en un string
console.log(arrayFrutasToString);
let stringToArray = arrayFrutasToString.split("-")
console.log(stringToArray);

let arrayFrutasJoing = arrayFrutas.join("-")

//PUSH <-- añade un item al final del array
arrayFrutas.push("coco") //añadir elementos al final como en este caso "coco"
console.log(arrayFrutas);

// pop <-- quita el último elemento
let coco = arrayFrutas.pop() //Lo quita y lo guarda si quieres con la variable
console.log(arrayFrutas);
console.log(coco);

// shift <-- quita el primer elemento
let fruta2 = arrayFrutas.shift()
console.log(fruta2);
console.log(arrayFrutas);

// unshift <-- añadir un item al principio
arrayFrutas.unshift("piña")
console.log(arrayFrutas);

for(let i = 1; i < arrayFrutas.length; i = i + 2) { //asi te aseguras que no salga de rango
    console.log(arrayFrutas[i]);
}

// reverse <-- invertir lista
arrayFrutas.reverse()
console.log(arrayFrutas);
let arrayFrutas2 = arrayFrutas.toSorted() //realiza copia orginal pero sin retocar el original
console.log(arrayFrutas2);
console.log(arrayFrutas);


// sort <-- ordenar alfabeticamente
arrayFrutas.sort()
console.log(arrayFrutas);

//Includes <-- te dice si esta el objeto dentro
console.log(arrayFrutas.includes("uva"));
//indexOF <-- te dice en la posición donde está
console.log(arrayFrutas.indexOf("mango"));