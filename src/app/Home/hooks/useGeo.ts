import axios from "axios";
import { useState, useEffect } from "react";


export function useGeo(){ 
    const [countryCode, setCountryCode] = useState(undefined);
    const [coordinates, setCoordinates] = useState('');

    const getGeoInfo = async () => {
        const { data } = await axios.get("https://ipapi.co/json/")
        setCountryCode(data.country_code);
        setCoordinates(`${data.latitude}, ${data.longitude}`)
    };

    useEffect(() => {
        getGeoInfo();
    }, []);

    return { countryCode, coordinates };
}