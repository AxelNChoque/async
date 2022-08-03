import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = async (urlAPI) => {
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
};


const postData = async (urlAPI, data) => {
    const response = fetch(urlAPI, {
        method:'PUT',
        mode: 'cors',
        credentials: 'same-origins',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }); 
    return response;
};

const data = {
    "title": "Cama comodamente sospechosa",
    "price": 15000,
    "description": "Es muy commoda y sospechosa"
};

const anotherFunction = async (urlAPI, data) => {
    try{
        const products = await fetchData(`${urlAPI}/products`);
        const response = await postData(`${urlAPI}/products/${products[1].id}`,data);
        
        console.log(response);
        console.log(products);
    } catch (error) {
        console.error(error);
    }
};

anotherFunction(API,data);