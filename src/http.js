import axiosInit from 'axios'

const instance = axiosInit.create({
    baseURL: 'https://api.weatherapi.com/v1/'
});

instance.defaults.headers.common['key'] = ''

export default instance
