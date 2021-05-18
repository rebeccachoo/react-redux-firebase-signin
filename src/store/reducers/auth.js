import * as actionTypes from "../actions/actionTypes";

const initialState = {
	data: null,
	loading: false,
	error: null,
};

const authenticationStart = (state, action) => {
	return { ...state, error: null, loading: true };
};
const authenticationSuccess = (state, action) => {
	return {
		...state,
		data: action.authData.expiresIn,
		error: null,
		loading: false,
	};
};
const authenticationFail = (state, action) => {
	return { ...state, error: action.error, loading: false };
};
const authenticationInit = (state, action) => {
	return { data: null, loading: false, error: null };
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return authenticationStart(state, action);
		case actionTypes.AUTH_SUCCESS:
			return authenticationSuccess(state, action);
		case actionTypes.AUTH_FAIL:
			return authenticationFail(state, action);
		case actionTypes.AUTH_INIT:
			return authenticationInit(state, action);
		default:
			return state;
	}
};
export default reducer;
