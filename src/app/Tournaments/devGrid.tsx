import { Heading, SimpleGrid } from "@chakra-ui/react";
import { SkeletonGrid } from "./TournamentsGrid/SkeletonGrid/SkeletonGrid";
import { TournamentCard } from "./TournamentsGrid/TournamentCard/TournamentCard";
import { getTournamentsByRole } from "./TournamentsGrid/utils/getTournamentsByRole";

export function DevGrid(props: {role?: string, coordinates?: string, page?: number, perPage?: number}){
    const { loading, data } = getTournamentsByRole(props.role!, {coordinates: props.coordinates, page: props.page, perPage: props.perPage});
    return(
        <>
            { loading && <SkeletonGrid /> }
            { data && 
                <> 
                    <SimpleGrid columns={3} p='15px' spacing='30px' >
                        {data.tournaments.nodes.map((tournament: {id: string}) => <TournamentCard key={tournament.id} tournament={tournament} />)}
                    </SimpleGrid>
                </>
            }
        </>
    )
}