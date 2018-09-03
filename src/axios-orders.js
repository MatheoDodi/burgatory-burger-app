import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgatory-burger-app.firebaseio.com/',
    timeout: 3000
});

export default instance;