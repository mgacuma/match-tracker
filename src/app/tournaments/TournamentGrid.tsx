import { Box, Container, Dialog, DialogTitle, Grid, IconButton, Modal, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { TournamentModal } from "./modals/TournamentModal";
import { Tournament } from "./models/Tournament.type";
import { TournamentCard } from "./TournamentCard";

export function TournamentGrid(props: { tournaments: Tournament[]}){
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tournament, setTournament] = useState<Tournament>();

    async function handleOpen(tournament: Tournament) {
        setLoading(true);
        setOpen(true);
        const { data } = await axios.get(`http://localhost:8080/events/${tournament.id}`);
        if(!data.errors){
            tournament.events = data;
        }
        setTournament(tournament);
        setLoading(false);
    }

    async function handleClose(){
        setTournament(undefined);
        setOpen(false)
    }

    return(
        <Container maxWidth='xl'>
            <Typography variant='h4' paddingBottom={2}>
                Recent Tournaments
            </Typography>

            <Grid container spacing={3} justifyContent='center'>
                {props.tournaments.map(tournament => 
                    <Grid item xs={1} sm={3} minWidth={360} >
                        <TournamentCard setOpen={handleOpen} tournament={tournament} />
                    </Grid>)
                }
            </Grid>

            <Modal open={open} onClose={handleClose}>
                <TournamentModal tournament={tournament!} loading={loading} handleClose={handleClose} />
            </Modal>
        </Container>
    )
}