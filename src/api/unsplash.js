import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID w4TJ939O5mBLRZXH4I2KGsqBo2fByTZ6A6e9DwUakMM'

    }
});