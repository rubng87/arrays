let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]

// 1================================================================================================================
// Mostrar por consola la suma de todos los valores


// Primer array==============


let suma = 0;
for(i = 0; i < arrayNumeros1.length; i++) 
suma+=arrayNumeros1[i];
console.log(suma);

// Segundo array=============

let suma2 = 0;
for(i = 0; i < arrayNumeros2.length; i++) 
suma2+=arrayNumeros2[i];
console.log(suma2);


// 2================================================================================================================
// Mostrar por consola el promedio


// Primer array==============
let valorInicial = 0;
let promedio;

for(i = 0; i < arrayNumeros1.length; i++)
 valorInicial += arrayNumeros1[i]
 promedio = valorInicial / arrayNumeros1.length

console.log(promedio);

// Segundo array==============
let valorInicial2 = 0;
let promedio2;

for(i = 0; i < arrayNumeros2.length; i++)
 valorInicial2 += arrayNumeros2[i]
 promedio2 = valorInicial2 / arrayNumeros2.length

console.log(promedio2);

// 3================================================================================================================
// Encontrar los valores maximo y mi­nimo

arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6];
let minimo1 = Math.min(...arrayNumeros1);
let maximo1 = Math.max(...arrayNumeros1);

console.log(minimo1)
console.log(maximo1);

arrayNumeros2 = [4, 2, 7, 1, 6];
let minimo2 = Math.min(...arrayNumeros2);
let maximo2 = Math.max(...arrayNumeros2);

console.log(minimo2)
console.log(maximo2);



 



//5 

let arrayNombres1 = ["Federico", "Kayen", "Lucas", "Monica", "Nicolas", "Ricardo", "Sara", "Stephanie", "Yahved"]
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie"]


let lista_alumnos2 = ["Sara", "Ferran", "Jose", "Pau", "Francisco", "Marta"]


let posicion = 0
let maximo = 1
for(let i = 0; i < arrayNombres1.length; i++) {

    if(arrayNombres1[i].length >= maximo)
    maximo = arrayNombres1[i].length
    posicion = i
}

console.log(posicion)
    // `${arrayNombres1[posicion]} tiene el nombre más largo con ${maximo} letras`);


