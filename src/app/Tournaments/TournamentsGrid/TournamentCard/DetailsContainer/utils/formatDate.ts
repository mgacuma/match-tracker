import dayjs from 'dayjs';

export function formatDate(startAt: number, endAt: number){
	const startDate = dayjs.unix(startAt);
	const endDate = dayjs.unix(endAt);
	let formattedDate = '';
    
	if(startDate.month() === endDate.month()){
		if(startDate.date() === endDate.date()){
			formattedDate = startDate.format('MMMM D');
		} else {
			formattedDate = startDate.format('MMMM D') + ' - ' + endDate.format('D');
		}
	} else {
		formattedDate = startDate.format('MMMM D') + ' - ' + endDate.format('MMMM D');
	}

	return formattedDate;
}