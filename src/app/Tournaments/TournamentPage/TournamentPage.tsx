import { useParams } from 'react-router-dom';
import { GET_TOURNAMENT } from './queries.ts/GET_TOURNAMENT';
import { useQuery } from '@apollo/client';
import { EventCard } from './EventCard/EventCard';
import { SkeletonPage } from './SkeletonPage/SkeletonPage';
import { HeroCard } from './HeroCard/HeroCard';
import { Box, Container, Image } from '@chakra-ui/react';
import { filterBannerImage } from './utils/filterBannerImage';

export function TournamentPage() {
    const { tournamentId }= useParams();

    const { loading, error, data } = useQuery(GET_TOURNAMENT, {
        variables: {
            tournamentId: tournamentId
        }
    });

    let tournament;
    if(data){
        tournament = data.tournament;
    }
    
    const image = filterBannerImage(tournament?.images) ;
    
    return (
        <>
        { loading && <SkeletonPage /> }

        { data && 
            <Box>
                {image && <Image src={image.url} h='380px' w='100vw' objectFit='cover'/>}
                <Container maxW='980px' mt={image?.url ? '-190px' : '72px'}>
                    <Box>
                        <HeroCard tournament={tournament} />
                        {tournament.events?.map((event: any) => <EventCard event={event} />)}
                    </Box>
                </Container>    
            </Box>
        }
        </>
    )
}