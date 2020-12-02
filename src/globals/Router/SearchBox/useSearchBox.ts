import * as WeatherStackService from "../../../services/WeatherStackService";
import {toast} from "react-toastify";
import { useState } from "react";

export const useSearchBox = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchedCity, setSearchedCity] = useState<null | any>(null);

    const showErrorMessage = () => {
        toast.error("Can't get given city :(", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const searchCity = (cityName: string) => {
        setIsLoading(true);
        (async () => {
            try {
                const resp = await WeatherStackService.getCityWeather(cityName);
                if(resp.location.name !== cityName) {
                    showErrorMessage();
                    return;
                }
                setSearchedCity(resp);
            } catch {
                showErrorMessage();
            } finally {
                setIsLoading(false);
            }
        })();
    };

    return [isLoading, searchedCity, searchCity, setSearchedCity]

}
