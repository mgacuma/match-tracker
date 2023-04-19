import { Box, Divider, Grid, Paper, Typography } from "@mui/material"

export function SetInfo(props: { 
        node: {
            id: number,
            fullRoundText: string,
            identifier: string,
            state: number,
            startAt: number,
            completedAt: number,
            winnderId: number,
            slots: {
                id: number,
                entrant: {
                    name: string,
                    initialSeedNum: number
                }
            }[]
        }
    }
    ){
    return (
        <Grid item>
            <Paper sx={{margin: 2}} elevation={4}>
                <Box height={'auto'} width={300} textAlign='center' p={2} textOverflow={'ellipsis'}>
                    <Typography variant="h5">
                        {props.node.fullRoundText}
                    </Typography>
                    <Divider />
                    <Typography variant="h6">
                        {props.node?.slots[0].entrant?.name || 'TBD'}
                    </Typography>
                    <Typography variant="body2">
                        VS
                    </Typography>
                    <Typography variant="h6">
                        {props.node?.slots[1].entrant?.name || 'TBD'}
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    )
    }