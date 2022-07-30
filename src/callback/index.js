const suma = (a,b) => {
    return a + b;
};

const mult = (a,b) => {
    return a*b;
};

const calc = (num1, num2, callback) => {
    return callback(num1, num2);
};

console.log(calc(2, 3, suma));

console.log(calc(5, 3, mult));

setTimeout(function () {
    console.log('Hola');
}, 5100);

const gretting = (name) =>{
    console.log(`Hola ${name}`);
};

setTimeout(gretting, 2000, 'Axel');

