import { AppBar, Menu, Toolbar, Typography } from "@mui/material";
import NavToTop from "./NavToTop";

export function NavBar () {
    return (
        <AppBar sx={{height: 64}}>
            <Toolbar>
                <Typography variant='h4'>
                    MatchTracker.gg
                </Typography>
            </Toolbar>
            <NavToTop />
        </AppBar>
    )
}