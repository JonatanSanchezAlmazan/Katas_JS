/*Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:*/

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (item in alien) {
    console.log(alien[item]);
}