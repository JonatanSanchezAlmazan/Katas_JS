/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
];

const replaceVegan = (list) => {
    for (const food of list) {
        if (!food.isVegan) {
            food.name = fruits.shift();
            food.isVegan = true;
        }
    }
    return list;
};

const result = replaceVegan(foodSchedule);
console.log(result);