/* Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

pista (typeof)*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(list) {
    let sum = 0;
    for (character of list) {
        if (typeof character === "number") {
            sum += character;
        } else {
            sum += character.length
        }
    }
    return sum
}
const result = averageWord(mixedElements);
console.log(result);