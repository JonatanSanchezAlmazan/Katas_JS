/*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

pista (cuando eliminamos algo de un array, su longitud se verá afectada)*/

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(list) {
    const obj = {};
    const removeDuplicated = [];
    for (const key of list) {
        if (obj[key]) {
            obj[key] += 1;
        } else {
            obj[key] = 1;
        }
    }
    for (key in obj) {
        removeDuplicated.push(key);
    }
    return removeDuplicated;
}


const result = removeDuplicates(duplicates);
console.log(result);