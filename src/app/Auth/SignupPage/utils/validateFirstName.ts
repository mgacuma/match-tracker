import { SignUpInputsErrors } from '../models/SignUpInputs.type';

export function validateFirstName(
	name: string, 
	errors: SignUpInputsErrors, 
	setErrors: React.Dispatch<React.SetStateAction<SignUpInputsErrors>>
)
{
	if(!name.match(/^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/)){
		setErrors({...errors, firstName: true});
	} else {
		setErrors({...errors, firstName: false});
	}

}