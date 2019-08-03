const axios = require('axios');
const config = { headers: { 'user-key': 'ab0bd806b0de4cf2cf4d3dbc43fcfff8' } };
let data;
function getFoodCategories(config) {
    try {
        return new Promise(function (resolve, reject) {
            axios.get('https://developers.zomato.com/api/v2.1/categories', config)
                .then(function (response) {
                    resolve(response);
                });
        });
    } catch (e) {
        console.log(e);
    }
}
function getSurroundingFood(lat, long, radius, entity) {
    try {
        return new Promise(function (resolve, reject) {
            axios.get(`https://developers.zomato.com/api/v2.1/search?entity_type=${entity}&lat=${lat}&long=${long}&radius=${radius}`, config)
                .then(function (response) {
                    resolve(response)
                });
        });
    }
    catch (e) {
        console.log(e);
    }
}
module.exports = {
    getFoodCategories,
    getSurroundingFood
}
