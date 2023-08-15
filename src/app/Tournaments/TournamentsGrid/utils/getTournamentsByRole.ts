import { useQuery } from "@apollo/client";
import { GET_FEATURED_TOURNAMENTS } from "../queries/GET_FEATURED_TOURNAMENTS";
import { GET_UPCOMING_TOURNAMENTS } from "../queries/GET_UPCOMING_TOURNAMENTS";
import { GET_LOCAL_TOURNAMENTS } from "../queries/GET_LOCAL_TOURANMENTS";
import { GET_ONLINE_TOURNAMENTS } from "../queries/GET_ONLINE_TOURNAMENTS";

export function getTournamentsByRole(role: string, coordinates?: string){
    let heading: string = '';
    let loading = false;
    let data = {};

    if(role === 'featured'){
        const query = useQuery(GET_FEATURED_TOURNAMENTS);
        heading = 'Featured Tournaments';
        loading = query.loading;
        data = query.data;
    }
    if(role === 'upcoming'){
        const query = useQuery(GET_UPCOMING_TOURNAMENTS)
        heading = 'Upcoming Tournaments'
        loading = query.loading;
        data = query.data;
    }
    if(role === 'local'){
        const query = useQuery(GET_LOCAL_TOURNAMENTS, {
            variables: {
                coordinates: coordinates
            }
        });
        console.log(query)
        heading = 'Tournaments Near You'
        loading = query.loading;
        data = query.data;
    }
    if(role === 'online'){
        const query = useQuery(GET_ONLINE_TOURNAMENTS)
        heading = 'Online Tournaments'
        loading = query.loading;
        data = query.data;
    }

    return { heading, loading, data }
}