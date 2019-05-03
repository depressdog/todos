let axios = require('axios');

let axiosClient = axios.create({
    baseURL: '//localhost:3000/'
});

export default axiosClient;