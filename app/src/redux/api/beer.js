import axios from 'axios';
import ENV from '../../env.json';

export const randomBeer = async () => {
    try {
        const res =  await axios.get(`${ENV.API_URL}/beer/random`, {
            headers: {
                'content-type': 'application/json',
            },
        });
        return res;
    } catch (error) {
        return error;
    }
};