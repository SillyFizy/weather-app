import axiosInit from 'axios'

const instance = axiosInit.create({
    baseURL: 'https://api.weatherapi.com/v1/'
});

instance.defaults.headers.common['key'] = 'ea97b12840a04b6cb0e93841241207'

export default instance
