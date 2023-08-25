import { useQuery } from '@apollo/client';
import { UPCOMING_PAGE_INFO } from '../queries/UPCOMING_PAGE_INFO';
import { LOCAL_PAGE_INFO } from '../queries/LOCALS_PAGE_INFO';
import { ONLINE_PAGE_INFO } from '../queries/ONLINE_PAGE_INFO';
import { Query } from '../../../../__generated__/graphql';
import { FEATURED_PAGE_INFO } from '../queries/FEATURED_PAGE_INFO';

export function getTournamentPageInfo(role: string, variables: { coordinates?: string, perPage?: number, page?: number }){
	let heading: string = '';
	let loading = false;
	let data: Query = {};

	if(role === 'featured'){
		const query = useQuery(FEATURED_PAGE_INFO, {
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
		const query = useQuery(UPCOMING_PAGE_INFO, {
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
		const query = useQuery(LOCAL_PAGE_INFO, {
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
		const query = useQuery(ONLINE_PAGE_INFO, {
			variables: {
				page: variables.page,
				perPage: variables.perPage
			}
		});
		heading = 'Online Tournaments';
		loading = query.loading;
		data = query.data;
	}

	return { loading, data, heading };
}