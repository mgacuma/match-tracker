import { Box, Button, Card, Checkbox, Container, FormControl, FormLabel, HStack, Heading, IconButton, Input, InputGroup, InputRightElement, Link, Show, Spinner, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { Link as RLink, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { HiEyeOff, HiEye } from 'react-icons/hi';
import { useAuth } from '../AuthProvider/AuthProvider';
import { LoginInputs, LoginInputsErrors } from './models/LoginInputs.type';

export function LoginPage(){
	
	const { signIn, isAuthenticated } = useAuth();
    
	if(isAuthenticated){
		window.location.pathname = '/match-tracker/';
	}

	const [ inputs, setInputs ] = useState<LoginInputs>({username: '', password: ''});

	const [ inputErrors, setInputErrors ] = useState<LoginInputsErrors>({username: false, password: false});

	const [submitting, setSubmitting] = useState(false);

	const [errorMessage, setErrorMessage] = useState('');

	const [searchParams, setSearchParams] = useSearchParams();
	const signUp = searchParams.get('signUp');

	function validateUsername(username: string, errors: LoginInputsErrors, setInputErrors: React.Dispatch<React.SetStateAction<LoginInputsErrors>>){
		if(!inputs.username){
			setInputErrors({...inputErrors, username: true});
		} else {
			setInputErrors({...inputErrors, username: false});
		}
	}

	function validatePassword(
		password: string, 
		errors: LoginInputsErrors, 
		setErrors: React.Dispatch<React.SetStateAction<LoginInputsErrors>>
	){
		if(!inputs.password){
			setErrors({...errors, password: true});
		} else {
			setErrors({...errors, password: false});
		}
	}

	function onSubmit(e: React.FormEvent<HTMLFormElement>){
		e.preventDefault();

		setInputErrors({username: false, password: false});        

		if(inputs.username && inputs.password){
			signIn(inputs.username, inputs.password)
				.then((result) => {
					if(result && result.success){
						window.location.pathname = '/match-tracker/';
					}
				}).catch((err) => {
					console.log('ERROR FIRE');
					setErrorMessage(err.message);
					setInputErrors({username: true, password: true});
					console.log(err.message);
				});
		} else {
			setInputErrors({username: inputs.username ? false : true, password: inputs.password ? false : true});     
			setErrorMessage('');
		}
	}

	const { isOpen, onToggle } = useDisclosure();
  
	const onClickReveal = () => {
		onToggle();
	};
    

	return(
		<Container maxW="lg" py={{ base: '12', md: '24' }} minH='85vh' px={{ base: '0', sm: '8' }}>
			<Card borderRadius='12px' p='32px'>
				<Stack spacing="8">
					<Stack spacing="6">
						<Stack spacing={{ base: '2', md: '3' }} textAlign="center">
							<Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
							<Text color="fg.muted">Don't have an account? <Link as={RLink} to='/signup'>Sign up</Link>
							</Text>
						</Stack>
					</Stack>
					<Box
						px={{ base: '4', sm: '10' }}
					>
						<Stack spacing="6">
							<form className='login-form' onSubmit={onSubmit}>
								<Stack spacing="5">
									<FormControl>
										<FormLabel htmlFor="username">Username</FormLabel>
										<Input 
											id="username" 
											type="text" 
											name='username'
											isInvalid={inputErrors.username}
											errorBorderColor='crimson'
											value={inputs.username}
											onFocus={(event) => {setInputErrors({...inputErrors, username: false}); setErrorMessage('');}}
											onChange={(event) => setInputs({...inputs, username: event.target.value})}
											onBlur={(event) => {setInputErrors({...inputErrors, username: false});validateUsername(event.target.value, inputErrors, setInputErrors); }}
										/>
									</FormControl>
									<FormControl>
										<FormLabel htmlFor="password">Password</FormLabel>
										<InputGroup>
											<Input
												id="password"
												name="password"
												type={isOpen ? 'text' : 'password'}
												autoComplete="current-password"
												isInvalid={inputErrors.password}
												errorBorderColor='crimson'
												value={inputs.password} 
												onFocus={(event) => {setInputErrors({...inputErrors, password: false});}}
												onChange={(event) => setInputs({...inputs, password: event.target.value})} 
												onBlur={(event) => {setInputErrors({...inputErrors, password: false}); validatePassword(event.target.value, inputErrors, setInputErrors); }}
											/>
											<InputRightElement>
												<IconButton
													variant="text"
													type='button'
													aria-label={isOpen ? 'Mask password' : 'Reveal password'}
													icon={isOpen ? <HiEyeOff /> : <HiEye />}
													onClick={onClickReveal}
												/>
											</InputRightElement>
										</InputGroup>
									</FormControl>
									{ (inputErrors.username && inputErrors.password && errorMessage) && <Text color='crimson'>{errorMessage}</Text>}
									{ signUp && <Text color='green.500'>Account created successfully.</Text>}
								</Stack>
								<HStack justify="space-between">
									<Checkbox defaultChecked>Remember me</Checkbox>
									<Button variant="text" size="sm">
                            Forgot password?
									</Button>
								</HStack>
								<Stack spacing="6">
									<Button 
										isLoading={submitting}
										colorScheme='blue'
										spinner={
											<Spinner />
										} 
										type='submit'
									>
										Login
									</Button>
								</Stack>

							</form>
						</Stack>
					</Box>
				</Stack>
			</Card>
		</Container>
	);
}