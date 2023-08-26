import { SignUpInputsErrors } from '../models/signUpInputsErrors.type';

export function validateUsername(
	username: string, 
	errors: SignUpInputsErrors, 
	setErrors: React.Dispatch<React.SetStateAction<SignUpInputsErrors>>
)
{
	if(!username.match(/(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])/)){
		setErrors({...errors, username: true});
	} else {
		setErrors({...errors, username: false});
	}
}