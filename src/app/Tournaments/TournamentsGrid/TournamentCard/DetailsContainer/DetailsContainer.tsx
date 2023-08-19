import { Container, Heading, Box, Icon, Image, Text } from '@chakra-ui/react';
import { FiCalendar, FiMapPin, FiUser } from 'react-icons/fi';
import { filterProfileImage } from './utils/filterProfileImage';
import { formatDate } from './utils/formatDate';
import { formatLocation } from './utils/formatLocation';

export function DetailsContainer(props: { tournament: any }){
    
	const image = filterProfileImage(props.tournament?.images);
	const date = formatDate(props.tournament.startAt, props.tournament.endAt);
	const location = formatLocation(props.tournament);
    
	return(
		<Container display='flex' dir="row" pt='18px' px='18px'>
			{image && <Image boxSize='64px' objectFit='cover' src={image.url} fallback={<Image boxSize='64px' objectFit='cover' />} />}
			<Container ml='16px' mr='16px' maxW='69%' p={0}>
				<Heading  size='sm' isTruncated>{props.tournament.name}</Heading>
				<Box display='flex' flexDirection='row' mt='8px' alignContent='center'>
					<Icon as={FiCalendar} verticalAlign="center" viewBox="0 0 25 15" />
					<Text fontSize='16px' lineHeight='16px' ml='10px' >{date}</Text>
				</Box>
				<Box display='flex' flexDirection='row' mt='4px' alignContent='center'>
					<Icon as={FiMapPin} verticalAlign="center" viewBox="0 0 25 15" />
					<Text fontSize='16px' lineHeight='16px' ml='10px' isTruncated >{location}</Text>
				</Box>
				<Box display='flex' flexDirection='row' mt='4px' alignContent='center'>
					<Icon as={FiUser} verticalAlign="center" viewBox="0 0 25 15" />
					<Text fontSize='16px' lineHeight='16px' ml='10px' >{props?.tournament?.numAttendees ? props.tournament.numAttendees : 0}</Text>
				</Box>
			</Container>
		</Container>
	);
}