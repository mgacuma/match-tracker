import { Container, Card, Stack, Heading, Box, FormControl, FormLabel, Input, HStack, Checkbox, Button, Text, Link, InputGroup, IconButton, InputRightElement, useDisclosure, useMergeRefs } from "@chakra-ui/react";
import { Link as RLink } from 'react-router-dom';
import { useState } from "react";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { useAuth } from "../AuthProvider/AuthProvider";

export function SignupPage(){
    const [ email, setEmail ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

    const { signUp, isAuthenticated } = useAuth();

    
    function onSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        signUp(username, password, {email, name})
            .then(result => {
                window.location.assign('/match-tracker/login?signUp=true')
            })
            .catch(err => {
                console.error(err)
            })
    }

    const { isOpen, onToggle } = useDisclosure()
  
    const onClickReveal = () => {
      onToggle()
      window.location.assign('/match-tracker/login')
    }
    
    return(
        <Container maxW="lg" py={{ base: '12', md: '24' }} minH='85vh' px={{ base: '0', sm: '8' }}>
            <Card borderRadius='12px' pt='32px'>
                <Stack spacing="8">
                    <Stack spacing="6">
                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                            <Heading size={{ base: 'xs', md: 'sm' }}>Create an account</Heading>
                            <Text color="fg.muted">
                                Already have an account? <Link as={RLink} to='/login'>Log In</Link>
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
                    <form onSubmit={onSubmit}>
                        <Stack spacing="6">
                            <Stack spacing="5">
                                <FormControl>
                                    <FormLabel htmlFor="name">Username</FormLabel>
                                    <Input id="name" type="text" isRequired onChange={(event) => setUsername(event.target.value)} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="name">Name</FormLabel>
                                    <Input id="name" type="text" isRequired onChange={(event) => setName(event.target.value)} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input id="email" type="email" isRequired onChange={(event) => setEmail(event.target.value)}/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <InputGroup>
                                    <Input
                                        id="password"
                                        name="password"
                                        type={isOpen ? 'text' : 'password'}
                                        autoComplete="current-password"
                                        onChange={(event) => setPassword((event.target.value))}
                                        isRequired
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
                            </Stack>
                            <Stack spacing="6">
                                <Button type='submit' >Create Account</Button>
                            </Stack>
                        </Stack>
                        </form>
                    </Box>
                </Stack>
            </Card>
        </Container>
    )
}