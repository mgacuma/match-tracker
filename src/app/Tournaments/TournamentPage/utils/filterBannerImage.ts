export function filterBannerImage(images: any){
    if(!images){
        return {url: ''}
    }
    const filteredImages = images.filter((image: { type: string; }) => image.type === 'banner' ? 1 : 0);
    if(filteredImages[0]){
        return(filteredImages[0])
    }
    else return {url: ''};
}