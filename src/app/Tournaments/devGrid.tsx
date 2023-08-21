import { Heading, SimpleGrid } from "@chakra-ui/react";
import { SkeletonGrid } from "./TournamentsCarousel/TournamentsGrid/SkeletonGrid/SkeletonGrid";
import { TournamentCard } from "./TournamentsCarousel/TournamentsGrid/TournamentCard/TournamentCard";
import { getTournamentsByRole } from "./TournamentsCarousel/TournamentsGrid/utils/getTournamentsByRole";

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