import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

const postData = async (urlAPI, data) => {
    const response = await fetch(urlAPI, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return response;
}

const data = {
    "id": 0,
    "title": "Ropero",
    "price": 15000,
    "description": "La inflacion ta cara",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};



const asyncFunction = async (urlAPI, data) => {
    try{
        const daton = await postData(`${urlAPI}/products`,data);
        console.log(daton);
    } catch (error) {
        console.error(error);
    }
};

asyncFunction(`${API}`, data);