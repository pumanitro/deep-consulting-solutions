import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://api.weatherstack.com/'
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

// I had to request many times given endpoint because of API account limit
// My actual plan doesn't support bulk quering
// If it will, then this is a correct answer:
/* export const getCitiesWeather = async (cities: string[]) => {
    const resp = await axiosInstance.get('current', getParams(cities.join(';')));
    return resp.data;
}; */
export const getCitiesWeather = async (cities: string[]) => {
    return Promise.all(cities.map(async city => {
        return getCityWeather(city);
    }));
};
