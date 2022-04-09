import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-bugger-app-15d9a-default-rtdb.firebaseio.com/'
});

export default instance