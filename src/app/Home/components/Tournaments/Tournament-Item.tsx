import { Card, Container, Text, Image, Heading, ButtonGroup, Button, Link, Box, Icon } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom'
import { FiCalendar, FiMapPin, FiUser } from 'react-icons/fi'
import dayjs from "dayjs";

export function TournamentItem(props: {tournament: any}){

    let image

    if(props.tournament.images.length > 0){
        image = props.tournament.images.filter(image => image.type === 'profile' ? 1 : 0)[0];
    }
    
    if(!image){
        image = {url: ''}
    }

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
    

    
    return(
        <Card borderRadius='20px' >
            <Container display='flex' dir="row" pt='18px' px='18px'>
                {image && <Image boxSize='64px' objectFit='cover' src={image.url} fallback={<Image boxSize='64px' objectFit='cover' />} />}
                <Container ml='16px' mr='16px' maxW='69%' p={0}>
                    <Heading  size='sm' isTruncated>{props.tournament.name}</Heading>
                    <Box display='flex' flexDirection='row' mt='8px' alignContent='center'>
                        <Icon as={FiCalendar} verticalAlign="center" viewBox="0 0 25 15" />
                        <Text fontSize='16px' lineHeight='16px' ml='10px' >{formattedDate}</Text>
                    </Box>
                    <Box display='flex' flexDirection='row' mt='4px' alignContent='center'>
                        <Icon as={FiMapPin} verticalAlign="center" viewBox="0 0 25 15" />
                        <Text fontSize='16px' lineHeight='16px' ml='10px' >{location}</Text>
                    </Box>
                    <Box display='flex' flexDirection='row' mt='4px' alignContent='center'>
                        <Icon as={FiUser} verticalAlign="center" viewBox="0 0 25 15" />
                        <Text fontSize='16px' lineHeight='16px' ml='10px' >{props.tournament.numAttendees}</Text>
                    </Box>
                </Container>
            </Container>
            <Container centerContent >
                <ButtonGroup pt='16px' pb='16px'>
                    <Link as={RouterLink} to={`tournament/${props.tournament.id}`}>
                        <Button h='22px' w='122px'>View</Button>
                    </Link>
                    <Link as={RouterLink} to={`tournament/${props.tournament.id}/watch`}>
                        <Button h='22px' w='122px'>Watch</Button>
                    </Link>
                </ButtonGroup>
            </Container>
        </Card>
    )
}