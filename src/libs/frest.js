'use strict';

const frest = {
    getAll: function (urls) {
        let allPromises = [];
        urls.forEach(currentUrl => {
            allPromises.push(fetch(currentUrl));
        });

        return Promise.all(allPromises).then(responses => Promise.all(responses.map(r => r.json())));
    }
}

// function frest(urls) {

//     let allPromises = [];
//     urls.forEach(currentUrl => {
//         allPromises.push(fetch(currentUrl));
//     });

//     return Promise.all(allPromises).then(responses => Promise.all(responses.map(r => r.json())));
// }

// async function frest_single(url) {
//     return fetch(url).then(response => response.json());
// }

// async function frest_waterfall(urls) {
//     let count = urls.length - 1;
//     let index = 0;
//     var responses = [];
//     while (count >= 0) {
//         let response = await frest_single(urls[index]);
//         responses.push(response);
//         count--;
//         index++;
//     }
//     return await responses;
// }

// async function frest_smart(data) {
//     let responses = [];
//     for (let index = 0; index < data.length; index++) {
//         let request = data[index];
//         if (request.param) {
//             request.url = request.url.replace('{param}', responses[index - 1][request.param]);
//         }
//         let response = await frest_single(request.url);
//         responses.push(response);
//     }
//     return await responses;
// }