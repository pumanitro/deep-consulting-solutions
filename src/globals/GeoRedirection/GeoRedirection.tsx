import React, {FC} from 'react';
import Geocode from "react-geocode";
import { useHistory } from 'react-router-dom';
import { CITY_DETAIL } from '../../helpers/appUrls';

const errorFunction = () => {
    alert("Geocoder failed");
}

export const GeoRedirection: FC<any> = ({children}) => {
    const history = useHistory();

    if (navigator.geolocation) {
        // According to task I need to redirect user ONLY after permission approval that is why those functions are empty and I listen to state change
        navigator.geolocation.getCurrentPosition(() => {}, () => {});

        navigator.permissions.query({name:'geolocation'}).then(function(result) {
            result.onchange = function() {
                navigator.geolocation.getCurrentPosition(async (position: any) => {
                    if (result.state == 'granted') {
                        let lat = position.coords.latitude;
                        let lng = position.coords.longitude;

                        if (!process.env["REACT_APP_GOOGLE_MAP_API_KEY"]) {
                            console.error('You had not applied "REACT_APP_GOOGLE_MAP_API_KEY" env variable.');
                            return null;
                        }

                        Geocode.setApiKey(process.env["REACT_APP_GOOGLE_MAP_API_KEY"]);
                        Geocode.setLanguage("en");

                        // Get address from latitude & longitude.
                        Geocode.fromLatLng(lat, lng).then(
                            response => {
                                const address = response.results[0].address_components.find((component: any) => component.types.includes('locality'));
                                history.push(CITY_DETAIL(address.long_name));
                            },
                            error => {
                                console.error(error);
                            }
                        );
                    }
                }, errorFunction);
            }
        });
    }



    return children;
}
