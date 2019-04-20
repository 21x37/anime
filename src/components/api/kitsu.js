import axios from 'axios';

const fetchKitsu = async () => {

    const headers = {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
    };

    const { data } = await axios.get('https://kitsu.io/api/edge/anime', { headers });

    return data;
};

export default fetchKitsu;
