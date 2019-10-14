import axios from 'axios';

import ipAddress from './ipAddress';

const api = axios.create({
    baseURL: `http://${ipAddress}:3333`,
});

export default api;