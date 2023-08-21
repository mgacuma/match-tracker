export function filterProfileImage(images: {url: string, type: string}[]): {type: string, url: string}{
    
    if(!images) return {url: '', type: ''}

    const filteredImages = images.filter((image: {type: string}) => image.type === 'profile' ? 1 : 0);

    if(filteredImages[0]) return filteredImages[0];
    else return {url: '', type: ''}
}