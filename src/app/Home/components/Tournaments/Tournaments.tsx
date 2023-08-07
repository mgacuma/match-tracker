import { Container, Heading, SimpleGrid, Skeleton } from "@chakra-ui/react"
import { TournamentItem } from "./Tournament-Item"
import { useQuery } from "@apollo/client";
import { GET_UPCOMING_TOURNAMENTS } from "../../queries/GET_UPCOMING_TOURNAMENTS";
import { SkeletonTournamentItem } from "./Skeleton-Tournament-Item";
import { GET_LOCAL_TOURNAMENTS } from "../../queries/GET_LOCAL_TOURANMENTS";
import { GET_ONLINE_TOURNAMENTS } from "../../queries/GET_ONLINE_TOURNAMENTS";
import { GET_EVO } from "../../queries/GET_EVO";
import { GET_FEATURED_TOURNAMENTS } from "../../queries/GET_FEATURED_TOURNAMENTS";

export function Tournaments(props: {
    local?: boolean, 
    upcoming?: boolean,
    featured?:boolean, 
    online?: boolean,
    countryCode?: string, 
    coordinates?: string
}){
    let tournaments: {loading: boolean, data: any} = {loading: true, data: undefined}
    let heading

    if(props.featured){
        tournaments = useQuery(GET_FEATURED_TOURNAMENTS)
        heading = 'Featured Tournaments'
    } else if(props.upcoming){
        tournaments = useQuery(GET_UPCOMING_TOURNAMENTS)
        heading = 'Upcoming Tournaments'
    }
    else if(props.local){
        tournaments = useQuery(GET_LOCAL_TOURNAMENTS, {
            variables: {
                coordinates: props.coordinates
            }
        });
        heading = 'Tournaments Near You'
    } else if(props.online){
        tournaments = useQuery(GET_ONLINE_TOURNAMENTS)
        heading = 'Online Tournaments'
    }

    let { loading, data } = tournaments!

    return(
        <Container background='white' maxW='container.xl' mx={{sm: '20px', lg: '42px', xl: 'auto'}} borderRadius='20px' px='30px' py='30px' mb='64px'>
            
            {loading && <Skeleton height='48px' mb='20px' width='440px' />}
            
            {data && <Heading size='xl' color='black' mb='20px'>{heading}</Heading>}

            {loading && 
                <SimpleGrid minChildWidth={{sm:'270px', md: '320px'}} spacingX='30px' spacingY='30px' >
                    <SkeletonTournamentItem />
                    <SkeletonTournamentItem />
                    <SkeletonTournamentItem />
                    <SkeletonTournamentItem />
                    <SkeletonTournamentItem />
                    <SkeletonTournamentItem />
                </SimpleGrid>
            }

            {data && 
                <SimpleGrid minChildWidth={{sm:'270px', md: '320px'}} spacingX='30px' spacingY='30px' >
                    {data.tournaments.nodes.map((tournament: {id: string}) => <TournamentItem key={tournament.id} tournament={tournament} />)}
                </SimpleGrid>
            }
        </Container>
    )
}

