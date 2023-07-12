import { Container, background } from "@chakra-ui/react";
import { Header } from "../Header/Header";
import { Tournaments } from "./components/Tournaments/Tournaments";
import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../Footer/Footer";

export function Home(props: {}){

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
            <Container maxW='100vw' background='black' textColor='white' p={0} minH='100vh'>
                <Header />
                <Tournaments featured countryCode={countryCode} coordinates={coordinates} />
                <Tournaments local countryCode={countryCode} coordinates={coordinates} />
                <Tournaments online />
                <Tournaments countryCode={countryCode} coordinates={coordinates} />
                <Footer />
            </Container>

    )
}