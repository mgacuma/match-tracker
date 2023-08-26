import { SignUpInputsErrors } from '../models/signUpInputsErrors.type';

export function validatePassword(
	password: string, 
	errors: SignUpInputsErrors, 
	setErrors: React.Dispatch<React.SetStateAction<SignUpInputsErrors>>
){
	if(!password.match(/^(?!\s+)(?!.*\s+$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$^*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ])[A-Za-z0-9$^*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ]{8,256}$/)){
		setErrors({...errors, password: true});
	} else {
		setErrors({...errors, password: false});
	}
}