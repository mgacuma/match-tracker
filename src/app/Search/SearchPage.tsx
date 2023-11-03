

import { useLocation } from 'react-router-dom';

import { TournamentsCarousel } from '../Tournaments/TournamentsCarousel/TournamentCarousel';
import { Box, Heading, VStack } from '@chakra-ui/react';

export function SearchPage(){
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const q = queryParams.get('q');
    
	return(
		<Box>
			<VStack spacing='64px' px='64px'>
				<TournamentsCarousel role='search' q={q!} />
			</VStack>
		</Box>
	);
}