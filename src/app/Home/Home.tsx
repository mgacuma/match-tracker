<<<<<<< HEAD
import { Box, VStack, Heading, Container } from "@chakra-ui/react";
import { TournamentsGrid } from "../Tournaments/TournamentsGrid/TournamentsGrid";
import { useGeo } from "./hooks/useGeo";
import { useAuth } from "../Auth/AuthProvider/AuthProvider";
import { TournamentCarousel } from "../Tournaments/TournamentCarousel";
=======
import { Box, VStack } from '@chakra-ui/react';
import { TournamentsGrid } from '../Tournaments/TournamentsGrid/TournamentsGrid';
import { useGeo } from './hooks/useGeo';
>>>>>>> parent of a5ff45ac (Merge pull request #9 from mgacuma/feature-paginate-tournaments)

export function Home(){

	const { countryCode, coordinates } = useGeo();

<<<<<<< HEAD
    const { user } = useAuth();

    return(
            <Box>
                {user && <Heading px='64px' py='32px'>Welcome back 👋🏽, {user.attributes?.name.split(' ')[0]}</Heading>}
                <VStack spacing='64px' px='64px'>
                    <TournamentCarousel role='local' coordinates={coordinates} />
                    <TournamentCarousel role='featured' coordinates={coordinates} />
                    <TournamentCarousel role='upcoming' coordinates={coordinates} />
                    <TournamentCarousel role='online' coordinates={coordinates} />
                </VStack>
            </Box>
    )
=======
	return(
		<Box background=''>
			<VStack spacing='64px' p='64px'>
				<TournamentsGrid role='featured' />
				<TournamentsGrid role='upcoming' />
				<TournamentsGrid role='local' coordinates={coordinates} />
				<TournamentsGrid role='online' />
			</VStack>
		</Box>
	);
>>>>>>> parent of a5ff45ac (Merge pull request #9 from mgacuma/feature-paginate-tournaments)
}