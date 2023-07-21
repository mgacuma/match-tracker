import { Badge, Box, Button, ButtonGroup, Card, Center, Container, Divider, Heading, Icon, Image, SimpleGrid, Tag, Text, Wrap, WrapItem } from "@chakra-ui/react";
import dayjs from "dayjs";
import { FiCalendar, FiMapPin, FiUser } from "react-icons/fi";

export function Hero(props: {tournament: any}) {
    
    let games = new Object();
    props.tournament.events.forEach(event => games[event.videogame.name] = true)

    let startDate = dayjs.unix(props.tournament.startAt)
    let endDate = dayjs.unix(props.tournament.endAt)

    let formattedDate = ''
    if(startDate.month() === endDate.month()){
        if(startDate.date() === endDate.date()){
            formattedDate = startDate.format('MMMM D');
        } else {
            formattedDate = startDate.format('MMMM D') + ' - ' + endDate.format('D')
        }
    } else {
        formattedDate = startDate.format('MMMM D') + ' - ' + endDate.format('MMMM D')
    }

    let location = ''
    if(props.tournament.isOnline){
        location = 'Online'
    } else {
        if(!props.tournament?.city){
            location =  props.tournament.addrState
        } else {
            location = props.tournament.city + ', ' + props.tournament.addrState
        }
    }

    return (
        <Card minH='240px' background='white' p={0} borderRadius='16px' flexDirection='row' alignContent='center' justifyContent={'center'}>
            <Container display='flex'  dir="row" p='24px' w='50%'>
                <Image boxSize='96px' objectFit='cover' src={props.tournament.images[0].url} fallback={<Image boxSize='64px' objectFit='cover' />} />
                <Container ml='16px' p={0}>
                    <Heading  size={props.tournament.name?.length > 32 ? 'md' : 'lg'}>{props.tournament.name}</Heading>
                    <Box display='flex' flexDirection='row' mt='16px' alignContent='center'>
                        <Icon as={FiCalendar} verticalAlign="center" viewBox="0 0 25 15" />
                        <Text fontSize='16px' lineHeight='16px' ml='10px' >{formattedDate}</Text>
                    </Box>
                    <Box display='flex' flexDirection='row' mt='12px' alignContent='center'>
                        <Icon as={FiMapPin} verticalAlign="center" viewBox="0 0 25 15" />
                        <Text fontSize='16px' lineHeight='16px' ml='10px' >{location}</Text>
                    </Box>
                    <Box display='flex' flexDirection='row' mt='12px' alignContent='center'>
                        <Icon as={FiUser} verticalAlign="center" viewBox="0 0 25 15" />
                        <Text fontSize='16px' lineHeight='16px' ml='10px' >{props.tournament.numAttendees + ' Attendees'}</Text>
                    </Box>
                </Container>
            </Container>
            <Center py='16px'>
                <Divider orientation='vertical' />
            </Center>
            <Container centerContent w='50%' justifyContent='center' alignContent='center' px='16px' py='16px'>
                <Wrap spacing='10px' justify='center'>
                    {Object.keys(games).sort().map(game => <WrapItem><Tag size='lg'>{game}</Tag></WrapItem> )}
                </Wrap>
            </Container>
        </Card>
    )   
}