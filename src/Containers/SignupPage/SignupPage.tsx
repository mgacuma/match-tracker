import { Container, Card, Stack, Heading, Box, FormControl, FormLabel, Input, Button, Text, Link, InputGroup, IconButton, InputRightElement, useDisclosure, Spinner, Tooltip } from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import { useState } from 'react';
import { HiEyeOff, HiEye } from 'react-icons/hi';
import { useAuth } from '../../Providers/Auth/AuthProvider';
import { SignUpInputs, SignUpInputsErrors } from './models/SignUpInputs.type';
import { validateFirstName } from './utils/validateFirstName';
import { validateLastName } from './utils/validateLastName';
import { validateUsername } from './utils/validateUsername';
import { validateEmail } from './utils/validateEmail';
import { validatePassword } from './utils/validatePassword';

export function SignupPage(){

	const [ inputs, setInputs ] = useState<SignUpInputs>({
		username: '',
		email: '',
		firstName: '',
		lastName: '',
		password: ''
	});

	const [ inputErrors, setInputErrors ] = useState<SignUpInputsErrors>({
		username: false,
		email: false,
		firstName: false,
		lastName: false,
		password: false
	});

	const [ submitting, setSubmitting ] = useState(false);

	const { signUp } = useAuth();

	function onSubmit(event: React.FormEvent<HTMLFormElement>){
		event.preventDefault();

		if(Object.values(inputErrors).every(item => item === false)){	
			
			setSubmitting(true);
			signUp(inputs.username, inputs.password, {email: inputs.email, name: inputs.firstName + ' ' + inputs.lastName})
				.then(result => {
					setSubmitting(false);
					window.location.assign('/match-tracker/login?signUp=true');
				})
				.catch(err => {
					setSubmitting(false);		
					console.error(err);
				});

		}
	}

	const { isOpen, onToggle } = useDisclosure();
  
	const onClickReveal = () => {
		onToggle();
	};
    
	return(
		<Container maxW="lg" py={{ base: '8', md: '12' }} minH='85vh' px={{ base: '0', sm: '8' }}>
			<Card borderRadius='12px' p='32px'>
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
						px={{ base: '4', sm: '10' }}
					>
						<form onSubmit={onSubmit}>
							<Stack spacing="6">
								<Stack spacing="5">
									<FormControl>
										<FormLabel htmlFor="firstName">First Name</FormLabel>
										<Input 
											id="firstName" 
											type="text" 
											name='firstName'
											isRequired
											isInvalid={inputErrors.firstName}
											errorBorderColor='crimson'
											value={inputs.firstName} 
											onChange={(event) => setInputs({...inputs, firstName: event.target.value})}
											onBlur={(event) => {validateFirstName(event.target.value, inputErrors, setInputErrors);}}
										/>
									</FormControl>
									<FormControl>
										<FormLabel htmlFor="lastName">Last Name</FormLabel>
										<Input 
											id="lastName" 
											type="text" 
											name='lastName'
											isRequired
											isInvalid={inputErrors.lastName}
											errorBorderColor='crimson'
											value={inputs.lastName} 
											onChange={(event) => setInputs({...inputs, lastName: event.target.value})}
											onBlur={(event) => {validateLastName(event.target.value, inputErrors, setInputErrors);}}
										/>									
									</FormControl>
									{!inputErrors.username &&
										<FormControl>
											<FormLabel htmlFor="username">Username</FormLabel>
											<Input 
												id="username" 
												type="text"
												name='username' 
												isRequired
												isInvalid={inputErrors.username}
												errorBorderColor='crimson'
												value={inputs.username} 
												onChange={(event) => setInputs({...inputs, username: event.target.value})}
												onBlur={(event) => {validateUsername(event.target.value, inputErrors, setInputErrors);}}
											/>
										</FormControl>
									}
									{inputErrors.username && 
										<Tooltip label='Username must be at least 8 characters long.'>
											<FormControl>
												<FormLabel htmlFor="username">Username</FormLabel>
												<Input 
													id="username" 
													type="text"
													name='username' 
													isRequired
													isInvalid={inputErrors.username}
													errorBorderColor='crimson'
													value={inputs.username} 
													onChange={(event) => setInputs({...inputs, username: event.target.value})}
													onBlur={(event) => {validateUsername(event.target.value, inputErrors, setInputErrors);}}
												/>
											</FormControl>
										</Tooltip>
									}

									<FormControl>
										<FormLabel htmlFor="email">Email</FormLabel>
										<Input 
											id="email" 
											name='email'
											type="email"
											autoComplete="current-email"
											isRequired 
											isInvalid={inputErrors.email}
											errorBorderColor='crimson'
											value={inputs.email} 
											onChange={(event) => setInputs({...inputs, email: event.target.value})}
											onBlur={(event) => {validateEmail(event.target.value, inputErrors, setInputErrors);}}
										/>
									</FormControl>
									{!inputErrors.password && 
										<FormControl>
											<FormLabel htmlFor="password">Password</FormLabel>
											<InputGroup>
												<Input
													id="password"
													name="password"
													type={isOpen ? 'text' : 'password'}
													autoComplete="current-password"
													isRequired
													isInvalid={inputErrors.password}
													errorBorderColor='crimson'
													value={inputs.password} 
													onChange={(event) => setInputs({...inputs, password: event.target.value})} 
													onBlur={(event) => {validatePassword(event.target.value, inputErrors, setInputErrors);}}
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
									}
									{inputErrors.password &&
										<Tooltip label='Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'>
											<FormControl>
												<FormLabel htmlFor="password">Password</FormLabel>
												<InputGroup>
													<Input
														id="password"
														name="password"
														type={isOpen ? 'text' : 'password'}
														autoComplete="current-password"
														isRequired
														isInvalid={inputErrors.password}
														errorBorderColor='crimson'
														value={inputs.password} 
														onChange={(event) => setInputs({...inputs, password: event.target.value})} 
														onBlur={(event) => {validatePassword(event.target.value, inputErrors, setInputErrors);}}
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
										</Tooltip>
									}
								</Stack>
								<Stack spacing="6">
									<Button 
										isLoading={submitting}
										colorScheme='blue'
										spinner={
											<Spinner />
										} 
										type='submit'
									>
										Create Account
									</Button>
								</Stack>
							</Stack>
						</form>
					</Box>
				</Stack>
			</Card>
		</Container>
	);
}