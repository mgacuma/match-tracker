import { Accordion, Box, Card, Center, ChakraComponent, Container, Divider, Heading, Icon, Image, SimpleGrid, Skeleton, Tag, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { GET_TOURNAMENT } from './queries.ts/GET_TOURNAMENT';
import { useQuery } from '@apollo/client';
import { Hero } from './components/Hero/Hero';
import { Event } from './components/Event/Event';
import { HeroSkeleton } from './components/Hero/Hero-Skeleton';
import { EventSkeleton } from './components/Event/Event-Skeleton';

export function Tournament() {
    const { tournamentId }= useParams();

    const { loading, error, data } = useQuery(GET_TOURNAMENT, {
        variables: {
            tournamentId: tournamentId
        }
    });

    const tournament = data?.tournament;
    const imageSrc = tournament?.images?.filter((image: { type: string; }) => image.type === 'banner' ? 1 : 0)[0]?.url;
    
    return (
        <>
        { loading && 
            <Container maxW='980px' h='90dvw' mt='64px' >
                <Box>
                    <HeroSkeleton />
                    <EventSkeleton />
                    <EventSkeleton />
                </Box>
            </Container> 
        }

        { data && 
            <Box>
                {imageSrc && <Image src={imageSrc} h='380px' w='100vw' objectFit='cover'/>}
                <Container maxW='980px' mt={imageSrc ? '-190px' : '72px'}>
                    <Box>
                        <Hero tournament={tournament} />
                        {tournament.events?.map((event: any) => <Event event={event} />)}
                    </Box>
                </Container>    
            </Box>
        }
        </>
    )
}