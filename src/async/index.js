const fnAsync = () => {
    return new Promise((resolve,reject) => {
        let i = 2;
        (i == 2)
            ? setTimeout(() => resolve('Async'),2000)
            : reject(new Error('Error'));
    });
};

const anotherFn = async () => {
    const some = await fnAsync();
    console.log(some);
    console.log('Hello');
};

console.log('Before');
anotherFn();
console.log('After');
