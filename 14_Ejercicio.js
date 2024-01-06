/*Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:*/

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];


function repeatCounter(list) {
    const obj = {};
    for (const key of list) {
        if (obj[key]) {
            obj[key] += 1;
        } else {
            obj[key] = 1;
        }
    }
    return obj;
}

const result = repeatCounter(counterWords);
console.log(result);