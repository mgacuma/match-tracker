export type SignUpInputs = {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string
}

export type SignUpInputsErrors = {
    username: boolean,
    email: boolean,
    firstName: boolean,
    lastName: boolean,
    password: boolean
}