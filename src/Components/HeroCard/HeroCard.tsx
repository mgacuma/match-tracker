import { Card, Container, Heading, Box, Icon, Center, Divider, Wrap, WrapItem, Tag, Image, Text } from '@chakra-ui/react'
import { FiCalendar, FiMapPin, FiUser } from 'react-icons/fi'
import { formatDate } from '../TournamentCard/DetailsContainer/utils/formatDate'
import { formatLocation } from '../TournamentCard/DetailsContainer/utils/formatLocation'
import { getGamesFromEvents } from './utils/getGamesFromEvents'

export function HeroCard (props: { tournament: any }) {
  const games = getGamesFromEvents(props?.tournament?.events)
	const formattedDate = formatDate(props.tournament.startAt, props.tournament.endAt)
	const location = formatLocation(props.tournament)

	return (
		<Card minH='240px' background='white' p={0} borderRadius='16px' flexDirection='row' alignContent='center' justifyContent={'center'}>
			<Container display='flex' dir="row" p='24px' w='50%'>
				<Image boxSize='96px' objectFit='cover' src={props.tournament.images[0].url} fallback={<Image boxSize='64px' objectFit='cover' />} />
				<Container ml='16px' p={0}>
					<Heading size={props.tournament.name?.length > 32 ? 'md' : 'lg'}>{props.tournament.name}</Heading>
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
						<Text fontSize='16px' lineHeight='16px' ml='10px' >{props.tournament.numAttendees ? props.tournament.numAttendees : '0' + ' Attendees'}</Text>
					</Box>
				</Container>
			</Container>
			<Center py='16px'>
				<Divider orientation='vertical' />
			</Center>
			<Container centerContent w='50%' justifyContent='center' alignContent='center' px='16px' py='16px'>
				<Wrap spacing='10px' justify='center'>
					{Object.keys(games).sort().map(game => <WrapItem><Tag size='lg'>{game}</Tag></WrapItem>)}
				</Wrap>
			</Container>
		</Card>
  )
}
