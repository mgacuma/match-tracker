export function formatName(name: string){
	if(!name) return '';

	const names = name.split(' | ');

	if(!names[1]) return names[0];
	else return names[1];
}