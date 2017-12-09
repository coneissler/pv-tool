import axios from 'axios';

const instance = axios.create({
    baseURL: 'xyz'
});

export default instance