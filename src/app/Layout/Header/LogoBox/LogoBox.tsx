import { Box, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export function LogoBox(){
	return(
		<Box>
			<Link as={RouterLink} to='/'><Heading size='lg' fontFamily={'Comfortaa'} fontWeight={700} letterSpacing={-2.5}>matchtracker.gg</Heading></Link>
		</Box>
	);
}