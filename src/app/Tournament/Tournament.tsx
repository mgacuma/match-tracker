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


    if(data) return (
        <Container maxW='100vw' background='black' textColor='white' p={0} minH='100vh' centerContent>
            <Header/>
            <Image src={tournament.images.filter(image => image.type === 'banner' ? 1 : 0)[0].url} h='380px' w='100vw' objectFit='cover'/>
            <Hero tournament={tournament} />
            <Card minW='980px' background='white' py='24px' borderRadius='16px' my='30px'>
                <Heading pl='24px'>Events</Heading>
                <Accordion allowMultiple allowToggle mt='16px'>
                    {tournament.events?.length > 0 && tournament.events.map(event => <Event event={event} />)}
                </Accordion>
            </Card>
        </Container>
    )
}