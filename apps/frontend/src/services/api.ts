/* TypeScript */
import axios from 'axios';

const baseURL = 'http://localhost:3001';

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    // Optionally include credentials:
    // withCredentials: true,
});

export default api;
