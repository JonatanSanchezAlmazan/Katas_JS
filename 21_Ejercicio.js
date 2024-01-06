/*Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto

"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".*/

const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

const usersAge = (list) => {
    let results = ``;
    for (const item of list) {
        if (item.years < 18) {
            results += `Usuario menor de edad ${item.name} y su edad es ${item.years} años \n`;
        } else {
            results += `Usuario mayor de edad ${item.name} y su edad es ${item.years} años \n`;
        }
    }
    return results;
};

const result = usersAge(users);
console.log(result);