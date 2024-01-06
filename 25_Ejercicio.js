/*Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.*/

const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
];

const halfSellCount = (list) => {
    let count = 0;
    let i = 0;
    let half = 0;
    for (const product of list) {
        count += product.sellCount;
        i++;
        half = count / i;
    }
    return half;
};

const result = halfSellCount(products);
console.log(result);