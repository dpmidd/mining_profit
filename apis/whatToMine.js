const requestPromise = require('request-promise')
const getAllCoins = () => {
    const options = {
        uri: 'https://whattomine.com/coins.json',
        json: true // Automatically parses the JSON string in the response
    };
     
    const promise = new Promise((resolve, reject)=>{
        requestPromise(options)
        .then(data => {
            console.log("data: ", data);
            resolve(filter(data));
        })
        .catch(err => {            
            console.log("error: ", err);
            reject(err);
        });
    })

    return promise;
   
}

const filter = (data) => {
// filter your coins
// return
    return {    
        ethereum: data.coins.Ethereum
    }
}

module.exports = {
    getAllCoins
}