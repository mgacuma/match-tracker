import { TournamentCard } from '../TournamentCard/TournamentCard';
import { SimpleGrid } from '@chakra-ui/react';
import { Maybe, Tournament } from '../../__generated__/graphql';
import { DocumentNode } from 'graphql';
import { useQuery } from '@apollo/client';
import { SkeletonGrid } from '../SkeletonGrid/SkeletonGrid';

export function TournamentsGrid(props: {query: DocumentNode, coordinates?: string, perPage: number, page: number}){
	const { loading, data, error } = useQuery(props.query, {variables: {coordinates: props.coordinates, page: props.page, perPage: props.perPage}});
	return(
		<>
			{ loading && <SkeletonGrid /> }
			{ data && 
                <> 
                	<SimpleGrid columns={3} p='15px' spacing='30px' >
                		{data.tournaments!.nodes!.map((tournament: Maybe<Tournament>) => <TournamentCard key={tournament!.id} tournament={tournament} />)}
                	</SimpleGrid>
                </>
			}
		</>
	);
}

