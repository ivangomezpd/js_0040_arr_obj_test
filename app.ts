

// Implementar la funcion sumaArr que recibe un arreglo de numeros y retorna 
// la suma de todos los elementos del arreglo
function sumaArr(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Implementar la funcion mayores que recibe un arreglo de numeros y un numero
// y retorna un arreglo con los elementos que son mayores al numero recibido
function mayores(arr, num) {
    return arr.filter(elemento => elemento > num);
}

// Tenemos el siguiente array de objetos
const personas = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Ana', edad: 15 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'Maria', edad: 25 },
    { nombre: 'Luis', edad: 10 },
    { nombre: 'Laura', edad: 40 },
];

// Implementar la funcion mayoresEdad que recibe el arreglo de personas y un numero
// y nos da otro arreglo con las personas que son mayores al numero recibido
function mayoresEdad(personas, num) {
    return personas.filter(persona => persona.edad > num);
}

// Con el arreglo anterior calcular la media de las edades de las personas
function mediaEdad(personas) {
    const totalEdades = personas.reduce((acc, persona) => acc + persona.edad, 0);
    return totalEdades / personas.length;
}

// Implementar la funcion mayores o iguales a la media usando el array anterior.
function mayoresIgualMedia(personas) {
    const media = mediaEdad(personas);
    return personas.filter(persona => persona.edad >= media);
}

module.exports = {
    sumaArr,
    mayores,
    mayoresEdad,
    mediaEdad,
    mayoresIgualMedia
};
