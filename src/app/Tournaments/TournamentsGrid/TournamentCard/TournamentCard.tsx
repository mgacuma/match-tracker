import { Card } from '@chakra-ui/react';
import { DetailsContainer } from './DetailsContainer/DetailsContainer';
import { ActionGroup } from './ActionGroup/ActionGroup';

export function TournamentCard(props: { tournament: any }){
	return(
		<Card borderRadius='20px'>
			<DetailsContainer tournament={props.tournament} />
			<ActionGroup tournament={props.tournament} />
		</Card>
	);
}