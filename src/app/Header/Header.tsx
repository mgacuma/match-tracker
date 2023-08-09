import { Box, Button, Flex, Heading, Hide, Link, Show, Spacer } from "@chakra-ui/react";
import { NavToTop } from "./components/NavToTop";
import { Link as RouterLink } from 'react-router-dom';
import { UserMenu } from "./components/UserMenu";
import { SearchBar } from "./components/SearchBar";
import { useAuth } from "../Auth/AuthProvider";
import { UserAuthGroup } from "./components/UserAuthGroup";

export function Header (props: {}) {

    const { isAuthenticated } = useAuth();

    return(
        <Flex minWidth='max-content' h='96px' alignItems='center' gap='2' px='2.5%'>
            <Box>
                <Link as={RouterLink} to='/'><Heading size='lg' fontFamily={'Comfortaa'} fontWeight={700} letterSpacing={-2.5}>matchtracker.gg</Heading></Link>
            </Box>
            <Hide breakpoint='(max-width: 640px)'>
                <Spacer />
                <Flex dir='row'  gap='12' alignItems='center'>
                    <SearchBar />
                    { !isAuthenticated && <UserAuthGroup /> }
                    { isAuthenticated && <UserMenu /> }
                </Flex>
                <NavToTop />
            </Hide>
        </Flex>
    )
}