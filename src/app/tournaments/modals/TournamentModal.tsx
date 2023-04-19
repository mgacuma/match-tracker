import { Avatar, Card, CardContent, CardHeader, CircularProgress, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Tournament } from "../models/Tournament.type";
import  CloseIcon  from '@mui/icons-material/Close'
import { EventInfo } from "../../events/EventInfo";

export function TournamentModal(props: { tournament: Tournament, handleClose: any, loading: boolean}) {
    console.log(props.tournament)
    return(
        <Paper 
            sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)', 
                width: {xs: '95%', md: '85%'}, 
                height: 'auto',
                maxHeight: '80%', 
                maxWidth: 1320,
                backgroundColor: 'whitesmoke', 
                overflow: 'auto',
            }}
        >
            <IconButton
                aria-label="close"
                onClick={props.handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            
            {!props.loading && 
            <Container>
                    <Grid container item xs={12} py={2}>
                            <Grid item>
                                <Typography variant='h5'>
                                    {props.tournament.name}
                                </Typography>
                            </Grid>
                    </Grid>
            </Container>
            }
            
            {!props.loading && props.tournament.events.map(event => <EventInfo event={event} />)}

            {props.loading && 
                <Box display='flex' justifyContent='center' paddingY={4}>
                    <CircularProgress />
                </Box>
            }
            
        </Paper>
    )
}