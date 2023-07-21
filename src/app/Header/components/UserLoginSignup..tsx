import { ButtonGroup, Button } from "@chakra-ui/react";

export function UserLoginSignup(){
    return(
        <ButtonGroup>
            <Button colorScheme='black' color='white' borderRadius='25px'>Log In</Button>
            <Button background='white' color='black' borderRadius='25px'>Sign Up</Button>
        </ButtonGroup>
    )
}