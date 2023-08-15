import { Box, VStack } from "@chakra-ui/react";
import { TournamentsGrid } from "../Tournaments/TournamentsGrid/TournamentsGrid";
import { useGeo } from "./hooks/useGeo";

export function Home(){

    const { countryCode, coordinates } = useGeo();

    return(
            <Box background=''>
                <VStack spacing='64px' p='64px'>
                    <TournamentsGrid role='featured' />
                    <TournamentsGrid role='upcoming' />
                    <TournamentsGrid role='local' coordinates={coordinates} />
                    <TournamentsGrid role='online' />
                </VStack>
            </Box>
    )
}