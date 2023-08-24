import { useParams } from 'react-router-dom';
import { GET_TOURNAMENT } from './queries.ts/GET_TOURNAMENT';
import { useQuery } from '@apollo/client';
import { EventCard } from './EventCard/EventCard';
import { SkeletonPage } from './SkeletonPage/SkeletonPage';
import { HeroCard } from './HeroCard/HeroCard';
import { Box, Container, Image } from '@chakra-ui/react';
import { filterBannerImage } from './utils/filterBannerImage';
import { Event, Maybe, Tournament } from '../../../__generated__/graphql';

export function TournamentPage() {
	const { tournamentId }= useParams();

	const { loading, error, data } = useQuery(GET_TOURNAMENT, {
		variables: {
			tournamentId: tournamentId
		}
	});

	let tournament: Tournament = {};
	if(data){
		tournament = data.tournament;
	}
    
	const image = filterBannerImage(tournament.images) ;
    
	return (
		<>
			{ loading && <SkeletonPage /> }

			{ data && 
            <Box>
            	{image && <Image id='banner' src={image.url} h='380px' w='100vw' objectFit='cover' fallback={<></>}/>}
            	<Container maxW='980px' mt={image?.url ? '-190px' : '72px'}>
            		<Box>
            			<HeroCard tournament={tournament} />
            			{tournament.events!.map((event: Maybe<Event>) => <EventCard key={event!.name} event={event} />)}
            		</Box>
            	</Container>    
            </Box>
			}
		</>
	);
}