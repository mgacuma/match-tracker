<<<<<<< HEAD
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { TournamentCard } from './TournamentCard/TournamentCard';
import { SkeletonGrid } from './SkeletonGrid/SkeletonGrid';
import { getTournamentsByRole } from './utils/getTournamentsByRole';
=======
import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { TournamentCard } from "./TournamentCard/TournamentCard"
import { SkeletonGrid } from "./SkeletonGrid/SkeletonGrid";
import { getTournamentsByRole } from "./utils/getTournamentsByRole";
>>>>>>> parent of a406adfe (its ok for now)

export function TournamentsGrid(props: {
    role: 'local' | 'upcoming' | 'featured' | 'online';
    online?: boolean,
    coordinates?: string
}){
<<<<<<< HEAD
	const { loading, data, heading } = getTournamentsByRole(props.role, props.coordinates);

	return(
		<Container background='white' maxW='container.xl' mx={{sm: '20px', lg: '42px', xl: 'auto'}} borderRadius='20px' p='30px'>
			{ loading && <SkeletonGrid /> }
			{ data && 
                <>
                	<Heading size='xl' color='black' mb='20px'>{heading}</Heading>
                	<SimpleGrid minChildWidth={{sm:'270px', md: '320px'}} spacingX='30px' spacingY='30px' >
                		{data.tournaments.nodes.map((tournament: {id: string}) => <TournamentCard key={tournament.id} tournament={tournament} />)}
                	</SimpleGrid>
                </>
			}
		</Container>
	);
=======
    const { loading, data, heading } = getTournamentsByRole(props.role, props.coordinates);

    return(
        <Container background='white' maxW='container.xl' mx={{sm: '20px', lg: '42px', xl: 'auto'}} borderRadius='20px' p='30px'>
            { loading && <SkeletonGrid /> }
            { data && 
                <>
                    <Heading size='xl' color='black' mb='20px'>{heading}</Heading>
                    <SimpleGrid minChildWidth={{sm:'270px', md: '320px'}} mt='32px' spacingX='30px' spacingY='30px' >
                        {data.tournaments.nodes.map((tournament: {id: string}) => <TournamentCard key={tournament.id} tournament={tournament} />)}
                    </SimpleGrid>
                </>
            }
        </Container>
    )
>>>>>>> parent of a406adfe (its ok for now)
}

