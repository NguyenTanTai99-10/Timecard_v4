export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"
export const loginAction = (input) => {
    // console.log('loginAction==',input);
    return ({
        type: LOGIN,
        input: input
    })
}
// Company Member
export const COMPANYMEMBER = "COMPANYMEMBER"
export const COMPANYMEMBER_SUCCESS = "COMPANYMEMBER_SUCCESS"
export const COMPANYMEMBER_ERROR = "COMPANYMEMBER_ERROR"
export const companyMenberAction = (input) => {
    // console.log('loginAction==',input);
    return ({
        type: COMPANYMEMBER,
        input: input
    })
}