import { Circle, ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Container, Divider, Grid, Paper, Typography } from "@mui/material"
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Phase } from "./models/Phase.type"
import { SetInfo } from "./SetInfo";

export function PhaseAccordion(props: {phase: Phase}){
    const [phase, setPhase] = useState<Phase>();
    
    useEffect(() => {
        axios.get(`https://match-tracker.onrender.com/sets/${props.phase.id}`)
            .then(response => {
                setPhase(response.data.phase);
                console.log(response.data.phase)
            })
    }, []);

    function stateConverter(state: string){
        switch(state){
            case 'CREATED': {
                return 'Coming Up';
            }
            case 'ACTIVE': {
                return 'In progress';
            }
            case 'COMPLETED': {
                return 'Completed';
            }
            default: {
                return 'Status Unknown'
            }
        }
    }

    return(
        <React.Fragment>
            {!phase && 
                <Box display='flex' justifyContent='center' width='100%' >
                        <CircularProgress />
                </Box>
            }
            
            {phase && 
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography width={'80%'}>{phase.name}</Typography>
                        <Typography>{stateConverter(phase.state)}</Typography>
                        
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails>
                        {phase.sets.nodes.length === 0 && <Typography variant='body2'>No Matches Found</Typography> }

                        {phase.sets.nodes.length != 0 && 
                            <Grid container direction='row' xs={12} justifyContent='center'>
                                {phase.sets.nodes.map(node => <SetInfo node={node} />)}
                            </Grid>
                        }
                    </AccordionDetails>
                </Accordion>
            }
        </React.Fragment>
    )
}