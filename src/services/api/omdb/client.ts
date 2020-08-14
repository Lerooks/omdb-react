import axios from 'axios'

const baseURL = process.env.REACT_APP_OMDB_API_URL;
const apiKey = process.env.REACT_APP_OMDB_API_KEY;

const client = axios.create({
    baseURL
});

client.interceptors.request.use(config => {
    config.params.apiKey = apiKey;
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default client