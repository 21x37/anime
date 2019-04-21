const axios = require('axios');
const parseData = require('./utils/parseData');

const fetchKitsu = async (params) => {

    const headers = {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
    };

    if (params.genre) {
        const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[genres]=${params.genre}`, { headers });
        const data = response.data.data;
        const parsedData = parseData(data);
        return parsedData;
    } else if (params.offset) {
       const response = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${params.offset}`, { headers });
       const data = response.data.data;
       const parsedData = parseData(data);
       return parsedData; 
    } else {
        let response = await axios.get('https://kitsu.io/api/edge/anime', { headers });
        const data = response.data.data;
        const parsedData = parseData(data);
        return parsedData;
    };

};


module.exports = fetchKitsu;