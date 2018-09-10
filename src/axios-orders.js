import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgatory-burger-app.firebaseio.com/',
});

export default instance;