import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://api.weatherstack.com/',
    timeout: 1000
});

const getParams = (query: any) => {
    return {
        params: {
            access_key: process.env["REACT_APP_WEATHERSTACK_API_KEY"],
            query
        }
    }
}

export const getCityWeather = async (city: string) => {
    const resp = await axiosInstance.get('current', getParams({city}));
    return resp.data;
};
