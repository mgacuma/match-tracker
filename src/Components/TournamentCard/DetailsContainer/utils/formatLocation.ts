export function formatLocation(tournament: any){
	let location = '';
    
	if(tournament.isOnline){
		location = 'Online';
	} else {
		if(!tournament?.city){
			location =  tournament.addrState;
		} else {
			location = tournament.city + ', ' + tournament.addrState;
		}
	}

	return location;
}