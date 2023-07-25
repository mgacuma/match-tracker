import { Box, Button, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import { NavToTop } from "./components/NavToTop";
import { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { UserMenu } from "./components/UserMenu";
import { UserLoginSignup } from "./components/UserLoginSignup.";
import { SearchBar } from "./components/SearchBar";

export function Header (props: {}) {

    const [hasAccount, setHasAccount] = useState<boolean>(true)

    function toggleUser(){
        setHasAccount(!hasAccount)
    }

    return(
        <Flex minWidth='max-content' h='96px' alignItems='center' gap='2' px='2.5%'>
            <Box>
                <Link as={RouterLink} to='/'><Heading size='lg'>Matchtracker.gg</Heading></Link>
            </Box>
            <Spacer />
            <Button onClick={toggleUser} />
            <Flex dir='row'  gap='12' alignItems='center'>
                <SearchBar />
                { !hasAccount && <UserLoginSignup /> }
                { hasAccount && <UserMenu /> }
            </Flex>
            <NavToTop />
        </Flex>
    )
}