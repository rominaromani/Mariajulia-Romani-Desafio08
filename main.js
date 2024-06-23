// 1. Intercambio de Valores: Declara dos variables (a, b) y utiliza una variable auxiliar (temp) para intercambiar sus valores.
let a = 5;
let b = 10;
let temp;

console.log(`Valores antes del intercambio: a = ${a}, b = ${b}`);

temp = a;
a = b;
b = temp;

console.log(`Valores después del intercambio: a = ${a}, b = ${b}`);

// 2. Función que reciba 2 números como entrada y determine cuál es el mayor.

function mayor(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(mayor(5, 10));

// 3. Función que reciba un número y retorne si es un número dado es par o impar.

function parImpar(numero) {
  if (numero % 2 === 0) {
    return 'par';
  } else {
    return 'impar';
  }
}

console.log(parImpar(5));

// 4. Funcion que calcula el precio final de un producto después de aplicar un descuento basado en el precio original y el porcentaje de descuento.

function precioFinal(precio, descuento) {
  return precio - (precio * descuento / 100);
}

console.log(precioFinal(100, 20));

// 5. Función para Calcular Área: Crea una función que reciba el radio de un círculo y devuelva su área.

function areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}

console.log(areaCirculo(5));

// 6. Función para Convertir Temperatura: Crea una función que convierta de Celsius a Fahrenheit.

function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

console.log(celsiusToFahrenheit(0));

// 7. Bucle for: Utiliza un bucle for para imprimir los números del 1 al 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 8. Bucle while: Utiliza un bucle while para pedir al usuario números hasta que ingrese un número negativo.

let numero_8 = 0;

while (numero_8 >= 0) {
  numero_8 = parseInt(prompt('Ingrese un número: '));
}

// 9. Tabla de Multiplicar: Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10.

let numero_9 = parseInt(prompt('Ingrese un número: '));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero_9} x ${i} = ${numero_9 * i}`);
}

// 10. Suma de Números Pares: Calcula la suma de los números pares del 1 al 100.

let suma = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    suma += i;
  }
}

// 11. Objeto Persona: Crea un objeto persona con propiedades como nombre, edad, ciudad y un método presentarse() que muestre un mensaje de presentación.

let persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Buenos Aires',
  presentarse: function() {
    return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}.`;
  }
};

console.log(persona.presentarse());

// 12. Array de Objetos: Crea un array de objetos persona y utiliza un bucle para mostrar la información de cada persona.

let personas = [
  {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Buenos Aires'
  },
  {
    nombre: 'Ana',
    edad: 25,
    ciudad: 'Córdoba'
  },
  {
    nombre: 'Pedro',
    edad: 35,
    ciudad: 'Rosario'
  }
];

for (let i = 0; i < personas.length; i++) {
  console.log(personas[i]);
}

// 13. Función para Calcular Promedio: Crea una función que reciba un array de números y devuelva su promedio.

function promedio(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma / numeros.length;
}

console.log(promedio([1, 2, 3, 4, 5]));
