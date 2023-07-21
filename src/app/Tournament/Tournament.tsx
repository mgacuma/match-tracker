import { Accordion, Box, Card, Center, ChakraComponent, Container, Divider, Heading, Icon, Image, SimpleGrid, Tag, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { GET_TOURNAMENT } from './queries.ts/GET_TOURNAMENT';
import { useQuery } from '@apollo/client';
import { Header } from '../Header/Header';
import { Hero } from './components/Hero/Hero';
import { Event } from './components/Event/Event';

export function Tournament() {
    const { tournamentId }= useParams();

    const { loading, error, data } = useQuery(GET_TOURNAMENT, {
        variables: {
            tournamentId: tournamentId
        }
    });

    const tournament = data?.tournament;
    if(data) {
        const imageSrc = tournament.images?.filter(image => image.type === 'banner' ? 1 : 0)[0]?.url;
        return (
            <Container maxW='100vw' background='black' display='flex' flexDir='column' textColor='white' p={0} minH='100vh' >
                <Header/>
                {imageSrc && <Image src={imageSrc} h='380px' w='100vw' objectFit='cover'/>}
                <Container maxW='980px' mt={imageSrc ? '-150px' : '64px'}>
                    <Box>
                        <Hero tournament={tournament} />
                        {tournament.events?.map(event => <Event event={event} />)}
                    </Box>
                </Container>    
            </Container>
        )
    }
}