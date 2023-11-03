import { Button, ButtonGroup, Container, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export function ActionGroup(props: { tournament: any }){
	return(
		<Container centerContent >
			<ButtonGroup pt='16px' pb='16px'>
				<Link as={RouterLink} to={`/tournament/${props.tournament.id}`}>
					<Button h='22px' w='122px'>View</Button>
				</Link>
				<Link as={RouterLink} to={`/tournament/${props.tournament.id}/watch`}>
					<Button h='22px' w='122px'>Watch</Button>
				</Link>
			</ButtonGroup>
		</Container>
	);
}