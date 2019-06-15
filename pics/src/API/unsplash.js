import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID 0547f8ffe96f5decc080cd6af7d6e4a288355de7ef9fdc61481405affbe3a9cc'
    }
});