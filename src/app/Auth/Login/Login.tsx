import { Box, Button, Card, Checkbox, Container, Divider, FormControl, FormLabel, HStack, Heading, IconButton, Input, InputGroup, InputRightElement, Link, Show, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { Link as RLink, useSearchParams } from 'react-router-dom';
import { useState } from "react";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { useAuth } from "../AuthProvider";

export function Login(){
    const { signIn, isAuthenticated } = useAuth();
    
    if(isAuthenticated){
        window.location.pathname = '/match-tracker/'
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [invalidUsername, setInvalidUsername] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();
    const signUp = searchParams.get('signUp')

    function onSubmit(e: React.FormEvent<HTMLButtonElement>){
        e.preventDefault();

        setSearchParams({});

        if(!username){
            setInvalidUsername(true);
            setErrorMessage('Username cannot be empty.');
        } else {
            setInvalidUsername(false);
        }
        if(!password){
            setInvalidPassword(true);
            setErrorMessage('Password cannot be empty.');
        } else {
            setInvalidPassword(false);
        }
        if(!username && !password){
            setErrorMessage('Please enter credentials.')
        }
        
        if(username && password){
            
            signIn(username, password)
                .then((result) => {
                    if(result.success){
                        window.location.pathname = '/match-tracker/';
                    } else {
                        setInvalidUsername(true);
                        setInvalidPassword(true);
                        setErrorMessage(result.message!);
                    }
                })
        }
    }

    const { isOpen, onToggle } = useDisclosure()
  
    const onClickReveal = () => {
      onToggle()
    }
    

    return(
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Card borderRadius='12px' pt='32px'>
            <Stack spacing="8">
                <Stack spacing="6">
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                <Text color="fg.muted">
                    Don't have an account? <Link as={RLink} to='/signup'>Sign up</Link>
                </Text>
                </Stack>
            </Stack>
            <Box
                py={{ base: '0', sm: '8' }}
                px={{ base: '4', sm: '10' }}
                bg={{ base: 'transparent', sm: 'bg.surface' }}
                boxShadow={{ base: 'none', sm: 'md' }}
                borderRadius={{ base: 'none', sm: 'xl' }}
            >
                <Stack spacing="6">
                    <form className='login-form'>
                    <Stack spacing="5">
                        <FormControl>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <Input id="username" isInvalid={invalidUsername} errorBorderColor='crimson' type="text" onChange={(e) => setUsername(e.target.value)}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <InputGroup>
                            <Input
                                id="password"
                                name="password"
                                type={isOpen ? 'text' : 'password'}
                                autoComplete="current-password"
                                required
                                isInvalid={invalidPassword} 
                                errorBorderColor='crimson'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputRightElement>
                                <IconButton
                                variant="text"
                                aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                                icon={isOpen ? <HiEyeOff /> : <HiEye />}
                                onClick={onClickReveal}
                                />
                            </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        { (invalidUsername || invalidPassword) && <Text color='crimson'>{errorMessage}</Text>}
                        { signUp && <Text color='green.500'>Account created successfully.</Text>}
                    </Stack>
                    <HStack justify="space-between">
                        <Checkbox defaultChecked>Remember me</Checkbox>
                        <Button variant="text" size="sm">
                            Forgot password?
                        </Button>
                    </HStack>
                    <Stack spacing="6">
                        <Button type='submit' onClick={onSubmit}
                        >Log in</Button>
                    </Stack>

                    </form>
                </Stack>
            </Box>
            </Stack>
            </Card>
        </Container>
    )
}