import { TournamentCard } from "./TournamentCard/TournamentCard"
import { SkeletonGrid } from "./SkeletonGrid/SkeletonGrid";
import { getTournamentsByRole } from "./utils/getTournamentsByRole";
import { SimpleGrid } from "@chakra-ui/react";

export function TournamentsGrid(props: {role?: string, coordinates?: string, page?: number, perPage?: number}){
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

