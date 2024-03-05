// Math.random, Math.floor, Math.sqrt, etc

let num1 = 10
let num2 = 2



//% te devuelve el resto si da 0 es PAR si da 1 es INPAR
console.log((num1 % num2));

if(num1 % num2 === 0) {
    console.log(`${num1} es par`);
} else {
    console.log(`${num1} es impar`);
}

if(num1 % 3 === 0) {
    console.log(`${num1} es multiplo de 3`);
} else {
    console.log(`${num1} no es multiplo de 3`);
}

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(num1**num2);
console.log(num1**(1/num2));


let array = [4,6,9,3,23,16,45,72]

let posicionPar = "Números posición par: "
let posicionImpar = "Números posición impar: "

for(let i =0; i < array.length; i++) {
   // console.log(array[i]);
   if(i % 2 == 0) {
    posicionPar += array[i] + ", "

   } else{
    posicionImpar += array[i] + ", "
   }
}
console.log(posicionPar);
console.log(posicionImpar);

let mensajeNumerosPares = "Los número pares son: "
let mensajeNumerosImpares = "Los número impares son: "

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        mensajeNumerosImpares += array[i] + ", "
    } else {
        mensajeNumerosPares += array[i] + ", "
    }

} 

console.log(mensajeNumerosImpares);
console.log(mensajeNumerosPares);

let dividido = 10 / 3    //toFixed para cuando queramos elegir los decimales que queremos ejemplo 2 en este caso
console.log(dividido.toFixed(2));
