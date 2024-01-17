import { useQuery } from '@apollo/client';
import { GET_LOCAL_TOURNAMENTS } from '../queries/GET_LOCAL_TOURANMENTS';
import { GET_ONLINE_TOURNAMENTS } from '../queries/GET_ONLINE_TOURNAMENTS';
import { GET_UPCOMING_TOURNAMENTS } from '../queries/GET_UPCOMING_TOURNAMENTS';
import { GET_FEATURED_TOURNAMENTS } from '../queries/GET_FEATURED_TOURNAMENTS';
import { Query } from '../../../__generated__/graphql';

export function getTournamentsByRole(role: string, variables: { coordinates?: string, perPage?: number, page?: number }){
	let heading: string = '';
	let loading = false;
	let data: Query = {};

	if(role === 'featured'){
		const query = useQuery(GET_FEATURED_TOURNAMENTS, {
			variables:{
				page: variables.page,
				perPage: variables.perPage,
			}
		});
		heading = 'Featured Tournaments';
		loading = query.loading;
		data = query.data;
	}
	if(role === 'upcoming'){
		const query = useQuery(GET_UPCOMING_TOURNAMENTS, {
			variables: {
				page: variables.page,
				perPage: variables.perPage
			}
		});
		heading = 'Upcoming Tournaments';
		loading = query.loading;
		data = query.data;
	}
	if(role === 'local'){
		const query = useQuery(GET_LOCAL_TOURNAMENTS, {
			variables: {
				coordinates: variables.coordinates,
				page: variables.page,
				perPage: variables.perPage
			}
		});
		heading = 'Tournaments Near You';
		loading = query.loading;
		data = query.data;
	}
	if(role === 'online'){
		const query = useQuery(GET_ONLINE_TOURNAMENTS, {
			variables: {
				page: variables.page,
				perPage: variables.perPage
			}
		});
		heading = 'Online Tournaments';
		loading = query.loading;
		data = query.data;
	}

	return { heading, loading, data };
}