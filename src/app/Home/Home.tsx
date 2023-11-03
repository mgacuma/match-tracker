
import { Box, VStack, Heading, Container } from '@chakra-ui/react';
import { useGeo } from './hooks/useGeo';
import { useAuth } from '../Auth/AuthProvider/AuthProvider';
import { TournamentsCarousel } from '../Tournaments/TournamentsCarousel/TournamentCarousel';

export function Home(){
	const { countryCode, coordinates } = useGeo();

	const { user } = useAuth();

	return(
		<Box>
			{user && <Heading px='64px' py='32px'>Welcome back 👋🏽, {user.attributes?.name.split(' ')[0]}</Heading>}
			<VStack spacing='64px' px='64px'>
				<TournamentsCarousel role='local' coordinates={coordinates} />
				<TournamentsCarousel role='featured' coordinates={coordinates} />
				<TournamentsCarousel role='upcoming' coordinates={coordinates} />
				<TournamentsCarousel role='online' coordinates={coordinates} />
			</VStack>
		</Box>
	);
}