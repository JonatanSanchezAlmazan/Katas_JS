/*Completa la función que tomando dos números como argumento devuelva el más alto. */

function sum(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    } else {
        return numberTwo;
    }
};

const result = sum(56, 87);
console.log(result);