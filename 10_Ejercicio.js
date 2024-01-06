/* Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:*/

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(list) {
    let sum = 0;
    let count = 0;
    for (let num of list) {
        sum += num;
        count++;
    }
    let average = sum / count;
    return average;
}

const result = average(numbers);
console.log(result);