import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { Tournament } from "./models/Tournament.type";
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat)

export function TournamentCard(props: {tournament: Tournament, setOpen: any }) {
    const filteredImages = props.tournament.images?.filter(image => image.type === 'banner');
    let bannerUrl = 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png';
    if(filteredImages && filteredImages.length !== 0){
        bannerUrl = filteredImages[0].url!;
    }

    const startAt = dayjs.unix(props.tournament.startAt).format('LLL');
    
    
    return (
        <Card 
            onClick={e => props.setOpen(props.tournament)}
            
            sx={{
                height: 300,
                transition: "transform 0.15s ease-in-out",
                "&:hover": { transform: "scale3d(1.05, 1.05, 1)" }
            }}
        >
            <CardActionArea>
                <CardMedia
                    component='img'
                    alt='tournament banner'
                    height='180px'
                    src={bannerUrl}
                />
                <CardContent>

                    {/* Name */}
                    <Typography gutterBottom variant='h5' component='div' sx={{overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical'
                    }}>
                        {props.tournament.name}
                    </Typography>

                    {/* Location */}
                    {!props.tournament.isOnline && 
                    <Typography>
                        {props.tournament.city && props.tournament.city + ','} {props.tournament.addrState}
                    </Typography>
                    }
                    
                    {props.tournament.isOnline && <Typography>Online</Typography>}

                    {/* Start Time */}
                    <Typography>
                        {startAt}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}