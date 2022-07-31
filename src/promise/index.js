const promise = new Promise(function (resolve, reject){
    resolve('Piola');
});

const cow = 15;

const countCows = new Promise (function (resolve, reject) {
    if (cow > 10){
        resolve(`Tenemos ${cow} vacas en la granja`);
    } else {
        reject('No contamos con esa cantidad de vacas');
    }
});

countCows.then((result) => {
    console.log(result);
})  
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Final");
    })


promise.then((result) => {
    console.log(result);
});