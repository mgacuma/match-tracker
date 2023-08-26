import { SignUpInputsErrors } from '../models/signUpInputsErrors.type';

export function validateLastName(
	name: string, 
	errors: SignUpInputsErrors, 
	setErrors: React.Dispatch<React.SetStateAction<SignUpInputsErrors>>
)
{
	if(!name.match(/^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/)){
		setErrors({...errors, lastName: true});
	} else {
		setErrors({...errors, lastName: false});
	}

}