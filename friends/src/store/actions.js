// import axios from 'axios';

// export const FETCHING = 'FETCHING';
// export const SUCCESS = 'SUCCESS';
// export const ERROR = 'ERROR';

// export const fetch = () => dispatch => {
//         dispatch({ type: FETCHING})
// axios.get('')
// .then(res => {
//         debugger
// }).catch(err => {
//         debugger
// })
// }

import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = creds => dispatch => {
        dispatch({ type: LOGIN_START});
        axios.post('http://localhost:5000/api/login', creds)
        .then(res => console.log(res))
        .catch(err => console.log(err));


}