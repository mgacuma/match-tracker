import { Box } from "@chakra-ui/react";
import { Tournaments } from "./components/Tournaments/Tournaments";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home(){

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

    return(
            <Box>
                <Tournaments featured countryCode={countryCode} coordinates={coordinates} />
                <Tournaments local countryCode={countryCode} coordinates={coordinates} />
                <Tournaments online />
                <Tournaments countryCode={countryCode} coordinates={coordinates} />
            </Box>
    )
}