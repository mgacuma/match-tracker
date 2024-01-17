export function getGamesFromEvents(events: any){
	const games: { [key: string]: any } = {};
	events.forEach((event: { videogame: { name: string; }; }) => games[event.videogame.name] = true);
	return games;
}