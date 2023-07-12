import { Container, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

export function Header (props: {}) {

    return(
        <Container maxW='100%' height='64px' backgroundColor={'gray'}>
            <Link as={RouterLink} to='/'>
                <Heading size='xl'>Matchtracker.gg {}</Heading>
            </Link>
        </Container>
    )
}