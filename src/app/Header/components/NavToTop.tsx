import { Box, Button, Fade, Icon, IconButton } from "@chakra-ui/react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import React from "react";
import { FiChevronUp } from "react-icons/fi";

export function NavToTop() {
    
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const scrollToTop = React.useCallback(() => {
        window.scroll({ top: 0, behavior: "smooth" });
    }, []);
  
    return (
        <Fade in={trigger}>
            <Box onClick={scrollToTop} position='fixed' bottom='32px' right='32px' zIndex={99999}>
                <IconButton icon={<FiChevronUp/>} size='lg' rounded='full' color='#27323d' boxShadow='xl' aria-label="Nav to top" />
            </Box>
        </Fade>
    )
}