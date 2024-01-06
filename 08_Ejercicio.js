/* Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:*/


const avengers = ['Hulk', 'Thor', 'Captain M.', 'IronMan', 'Captain A.', 'Spiderman'];

function findLongestWord(list) {
    let longer = list[0];
    for (let i = 0; i < list.length; i++) {
        if (list[i].length > longer.length) {
            longer = list[i];
        }
    }
    return longer;
}
const result = findLongestWord(avengers);
console.log(result);