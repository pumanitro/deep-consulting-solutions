import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import { Spinner } from '../../../components/Spinner/Spinner';

const COUNTRIES_URL = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&q=&rows=15&sort=population';

export const CountriesProvider: FC<any> = ({children}) => {
    const [topCountries, setTopCountries] = useState();

    useEffect(() => {
        (async () => {
            const response = await axios.get(COUNTRIES_URL);
            setTopCountries(response.data.records.map((record: any) => record.fields.accentcity));
        })();
    }, []);

    if(!topCountries) {
        return <Spinner />
    }

    return children({topCountries});

}
