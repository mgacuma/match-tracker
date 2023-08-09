import { Box, Button, Card, Checkbox, Container, Divider, FormControl, FormLabel, HStack, Heading, IconButton, Input, InputGroup, InputRightElement, Link, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { Link as RLink } from 'react-router-dom';
import { useState, useContext } from "react";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { useAuth } from "../AuthProvider";

export function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    function onSubmit(e: React.FormEvent<HTMLButtonElement>){
        e.preventDefault();
        
        signIn(username, password)
            .catch(err => {
                console.error(err)
            })
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
                            <Input id="username" type="text" onChange={(e) => setUsername(e.target.value)}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <InputGroup>
                            <InputRightElement>
                                <IconButton
                                variant="text"
                                aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                                icon={isOpen ? <HiEyeOff /> : <HiEye />}
                                onClick={onClickReveal}
                                />
                            </InputRightElement>
                            <Input
                                id="password"
                                name="password"
                                type={isOpen ? 'text' : 'password'}
                                autoComplete="current-password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </InputGroup>
                        </FormControl>
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