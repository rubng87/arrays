let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]

// 1================================================================================================================
// Mostrar por consola la suma de todos los valores


// Primer array==============


let suma = 0;
for (i = 0; i < arrayNumeros1.length; i++) {
    suma += arrayNumeros1[i];
}
console.log("La suma del primer array es:", suma)

// Segundo array=============

let suma2 = 0;
for (i = 0; i < arrayNumeros2.length; i++) {
    suma2 += arrayNumeros2[i];
}
console.log("La suma del segundo array es:", suma2);


// 2================================================================================================================
// Mostrar por consola el promedio


// Primer array==============

let promedio = 0;

for (i = 0; i < arrayNumeros1.length; i++) {
    promedio += arrayNumeros1[i]
}
promedio = promedio / arrayNumeros1.length
console.log("El promedio del primer array es:", promedio);

// Segundo array==============

let promedio2 = 0;

for (i = 0; i < arrayNumeros2.length; i++)
    promedio2 += arrayNumeros2[i]
promedio2 = promedio2 / arrayNumeros2.length

console.log("El promedio del primer array es:", promedio2);

// 3================================================================================================================
// Encontrar los valores maximo y mi­nimo


// Primer array==============

let maximoValor = arrayNumeros1[0];
let minimoValor = arrayNumeros1[0];

for (i = 0; i < arrayNumeros1.length; i++) {
    if (arrayNumeros1[i] > maximoValor) {
        maximoValor = arrayNumeros1[i];
    }
    if (arrayNumeros1[i] < minimoValor) {
        minimoValor = arrayNumeros1[i];
    }
}
console.log("El maximo valor del primer array es:", maximoValor);
console.log("El minimo valor del primer array es:", minimoValor);


// Segundo array==============


let maximoValor2 = arrayNumeros2[0];
let minimoValor2 = arrayNumeros2[0];

for (i = 0; i < arrayNumeros2.length; i++) {
    if (arrayNumeros2[i] > maximoValor2) {
        maximoValor2 = arrayNumeros2[i];
    }
    if (arrayNumeros2[i] < minimoValor2) {
        minimoValor2 = arrayNumeros2[i];
    }
}
console.log("El maximo valor del primer array es:", maximoValor2);
console.log("El minimo valor del primer array es:", minimoValor2);



// 4================================================================================================================
// Sumar los valores con I­ndice par y restar los impares

// Primer array==============

// Sumar los valores con índice par y restar los impares

let resultadoArrayNumeros1 = 0;
for (let i = 0; i < arrayNumeros1.length; i++) {
    if (i % 2 === 0) { // Si el índice es par
        resultadoArrayNumeros1 += arrayNumeros1[i]; // Sumar el valor
    } else { // Si el índice es impar
        resultadoArrayNumeros1 -= arrayNumeros1[i]; // Restar el valor
    }
}

console.log(resultadoArrayNumeros1);

// Segundo array==============

// Sumar los valores con índice par y restar los impares

let resultadoArrayNumeros2 = 0;
for (let i = 0; i < arrayNumeros2.length; i++) {
    if (i % 2 === 0) { // Si el índice es par
        resultadoArrayNumeros2 += arrayNumeros2[i]; // Sumar el valor
    } else { // Si el índice es impar
        resultadoArrayNumeros2 -= arrayNumeros2[i]; // Restar el valor
    }
}

console.log(resultadoArrayNumeros2);

// Dado estos arrays:
let arrayNombres1 = ["Federicos", "Kayan", "Luca", "Monica", "Nicolas", "Ricardo", "Sara", "Stephanie", "Yahved"]
let arrayNombres2 = ["Clint", "Robert", "James", "Anna", "Ingrid", "John", "Patricia", "Marie"]
// 5================================================================================================================
// Encontrar el elemento con el texto mas largo y guardarlo en la variable varTextoMasLargo
// Si hay mas de un valor, guardarlos en el array arrayTextosMasLargos.

// Primer array==============

let varTextoMasLargo = "";
let arrayTextosMasLargos = [];

for (let i = 0; i < arrayNombres1.length; i++) {
    let nombre = arrayNombres1[i];

    if (nombre.length > varTextoMasLargo.length) {
        varTextoMasLargo = nombre;
        arrayTextosMasLargos = [nombre]; // Reinicia array con texto más largo
    } else if (nombre.length === varTextoMasLargo.length) {
        arrayTextosMasLargos.push(nombre); // Agregar al array si tiene la misma longitud
    }
}

console.log("El elemento más largo es:", varTextoMasLargo);

if (arrayTextosMasLargos.length > 1) {
    console.log("Hay más de un texto con la misma longitud máxima:", arrayTextosMasLargos);
}

// Segundo array==============

let varTextoMasLargo2 = "";
let arrayTextosMasLargos2 = [];

for (let i = 0; i < arrayNombres2.length; i++) {
    let nombre = arrayNombres2[i];

    if (nombre.length > varTextoMasLargo2.length) {
        varTextoMasLargo2 = nombre;
        arrayTextosMasLargos2 = [nombre]; // Reinicia array con texto más largo
    } else if (nombre.length === varTextoMasLargo2.length) {
        arrayTextosMasLargos2.push(nombre); // Agregar al array si tiene la misma longitud
    }
}

console.log("El elemento más largo es:", varTextoMasLargo2);

if (arrayTextosMasLargos2.length > 1) {
    console.log("Hay más de un elemento con la misma longitud máxima:", arrayTextosMasLargos2);
}

// 6================================================================================================================
// Lo mismo para el texto más corto.

// Primer array==============


let varTextoMasCorto = arrayNombres1[0];
let arrayTextosMasCorto = [varTextoMasCorto];

for (let i = 1; i < arrayNombres1.length; i++) {
    let nombre = arrayNombres1[i];

    if (nombre.length < varTextoMasCorto.length) {
        varTextoMasCorto = nombre;
        arrayTextosMasCorto = [nombre];
    } else if (nombre.length === varTextoMasCorto.length) {
        arrayTextosMasCorto.push(nombre);
    }
}

console.log("El nombre más corto es:", varTextoMasCorto);

if (arrayTextosMasCorto.length > 1) {
    console.log("Hay más de un nombre con la misma longitud mínima:", arrayTextosMasCorto);
}

// Segundo array==============


let varTextoMasCorto2 = arrayNombres2[0];
let arrayTextosMasCortos2 = [varTextoMasCorto2];

for (let i = 1; i < arrayNombres2.length; i++) {
    let nombre = arrayNombres2[i];

    if (nombre.length < varTextoMasCorto2.length) {
        varTextoMasCorto2 = nombre;
        arrayTextosMasCortos2 = [nombre];
    } else if (nombre.length === varTextoMasCorto2.length) {
        arrayTextosMasCortos2.push(nombre);
    }
}

console.log("El nombre más corto es:", varTextoMasCorto2);

if (arrayTextosMasCortos2.length > 1) {
    console.log("Hay más de un nombre con la misma longitud mínima:", arrayTextosMasCortos2);
}

// 7================================================================================================================
// Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 8, 5, 4, etc.


// Primer array==============

let longitudNombres = [];

for (let i = 0; i < arrayNombres1.length; i++) { // Usamos for para contar las longitudes
    longitudNombres.push(arrayNombres1[i].length); // Usamos push para agregar la longitud al array
}

console.log("Longitudes de los nombres:", longitudNombres);

// Segundo array==============


let longitudNombres2 = [];


for (let i = 0; i < arrayNombres2.length; i++) { // Usamos for para contar las longitudes
    longitudNombres2.push(arrayNombres2[i].length); // Usamos push para agregar la longitud al array
}

console.log("Longitudes de los nombres:", longitudNombres2);

// 8================================================================================================================
// Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i

// Primer Array

let arrayNombresConI = [];

for (let i = 0; i < arrayNombres1.length; i++) {
    let nombre = arrayNombres1[i];
    // Verificar si el nombre contiene la letra "i"
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] === "i") {
            arrayNombresConI.push(nombre); // Agregar los nombre con "i"
            break; // Parar bucle
        }
    }
}

console.log(`Nombres que contienen la letra "i":`, arrayNombresConI);

// Segundo Array 

let arrayNombresConI2 = [];

for (let i = 0; i < arrayNombres2.length; i++) {
    let nombre = arrayNombres2[i];
    // Verificar si el nombre contiene la letra "i"
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] === "i") {
            arrayNombresConI2.push(nombre); // Agregar los nombre con "i"
            break; // Parar bucle
        }
    }
}

console.log(`Nombres que contienen la letra "i":`, arrayNombresConI2);



// Dado este array:
let arrayMixto = ["Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28]
// 9================================================================================================================
// Debes obtener otro array llamado arrayBidimensional que sea así­:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]


let arrayBidimensional = [];

// Iterar sobre arrayMixto con un incremento de 2 en cada iteración para agrupar elementos
for (let i = 0; i < arrayMixto.length; i += 2) {
    let subArray = [arrayMixto[i], arrayMixto[i + 1]]; // Crear un subarray con dos elementos
    arrayBidimensional.push(subArray); // Agregar el subarray al array bidimensional
}

console.log("Array bidimensional:", arrayBidimensional);


// 10===============================================================================================================
// A partir de un array como el que has obtenido en el ejercicio 9,
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]
// debes resolver los ejercios 1, 2, 3 y 4

// Ejercuicio 1 // Suma de todos los valores

let sumaTotal = 0;

// Iterar sobre cada subarray
for (let i = 0; i < arrayBidimensional.length; i++) {
    let subArray = arrayBidimensional[i];
    sumaTotal += subArray[1]; // Sumar el valor numérico en el subarray
}

console.log("La suma total de los valores numéricos es:", sumaTotal);

// Ejercicio 2 // Mostrar por consola el promedio

arrayBidimensional = [["Marie", 24], ["Pol", 18], ["Judith", 22], ["Eva", 28]];
sumaTotal = 0;

for (let i = 0; i < arrayBidimensional.length; i++) {
    let subArray = arrayBidimensional[i];
    sumaTotal += subArray[1]; // Sumamos todos los numeros 
}

let cantidadSubarrays = arrayBidimensional.length;
promedio = sumaTotal / cantidadSubarrays;

console.log("El valor promedio de los números es:", promedio);

// Ejercicio 3 // Encontrar los valores maximo y mi­nimo


let valorMaximo = Number.MIN_VALUE; // Iniciamos el valor máximo con el valor mínimo posible
let valorMinimo = Number.MAX_VALUE; // Iniciamos el valor mínimo con el valor máximo posible

// Iteramos sobre cada subarray
for (let i = 0; i < arrayBidimensional.length; i++) {
    let subArray = arrayBidimensional[i];
    let numero = subArray[1]; // Accedemos al número en el subarray


    if (numero > valorMaximo) { // Si el número es mayor actualizamos
        valorMaximo = numero;
    }


    if (numero < valorMinimo) { // Si el número es menor actualizamos
        valorMinimo = numero;
    }
}

console.log("Valor máximo:", valorMaximo);
console.log("Valor mínimo:", valorMinimo);

//Ejercicio 4 // Sumar los valores con Indice par y restar los impares

arrayBidimensional = [["Marie", 24], ["Pol", 18], ["Judith", 22], ["Eva", 28]];
let sumaPares = 0;
let restaImpares = 0;

// Iteramos sobre cada subarray
for (let i = 0; i < arrayBidimensional.length; i++) {
    let numero = arrayBidimensional[i][1]; // Obtenemos el número del subarray
    
    if (i % 2 === 0) { // Si el indice es Par Suma
        sumaPares += numero;
    } else { // Si el índice es Impar restamos
        restaImpares -= numero;
    }
}

console.log("Suma de los valores con índice par:", sumaPares);
console.log("Resta de los valores con índice impar:", restaImpares);

