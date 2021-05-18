import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authenticationStart = () => {
	return { type: actionTypes.AUTH_START };
};

export const authenticationSuccess = (authData) => {
	return { type: actionTypes.AUTH_SUCCESS, authData: authData };
};

export const authenticationFail = (err) => {
	return { type: actionTypes.AUTH_FAIL, error: err };
};
export const authenticationInit = () => {
	return { type: actionTypes.AUTH_INIT };
};
export const auth = (email, password) => {
	// this returns a dispatch function
	return (dispatch) => {
		dispatch(authenticationStart());
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true,
		};
		axios
			.post(
				"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAHR-T2hgRlEUdMv3BOPeeZNbPDUnOF7bI",
				authData
			)
			.then((response) => {
				console.log(response);
				dispatch(authenticationSuccess(response.data));
			})
			.catch((err) => {
				console.log(err);
				dispatch(authenticationFail(err));
			});
	};
};
