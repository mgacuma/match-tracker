import { ButtonGroup, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function AuthGroup(){
    return(
        <ButtonGroup>
            <Button 
                as={Link} 
                to={{ pathname: '/login' }}
                colorScheme='black' color='white' borderRadius='25px'
            >Log In</Button>
            <Button as={Link} to={'/signup'} background='white' color='black' borderRadius='25px'>Sign Up</Button>
        </ButtonGroup>
    )
}