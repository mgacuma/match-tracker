import { SignUpInputsErrors } from '../models/SignUpInputs.type';

export function validateEmail(
	email: string, 
	errors: SignUpInputsErrors, 
	setErrors: React.Dispatch<React.SetStateAction<SignUpInputsErrors>>
)
{
	if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i)){
		setErrors({...errors, email: true});
	} else {
		setErrors({...errors, email: false});
	}
}