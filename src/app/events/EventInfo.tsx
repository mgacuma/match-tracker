import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Paper, Typography } from "@mui/material";
import { Event } from './models/Event.type'
import { PhaseAccordion } from "../phases/PhaseAccordion";

export function EventInfo(props: { event: Event}) {

    return(
        <Container sx={{marginBottom: 2}}>
            <Grid container py={1} xs={12}>
                <Grid item>
                    <Typography variant='h5'>
                        {props.event.name}
                    </Typography>
                </Grid>
            </Grid>
        
            <Grid>
                {props.event.phases && props.event.phases.map(phase => <PhaseAccordion phase={phase} />)}

                {!props.event?.phases && <Typography variant='h6' fontWeight={300}>Nothing to see here :crycat:</Typography> }
            </Grid>

        </Container>
    )
}