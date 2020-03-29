import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    ACTIVE_USER
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload.username,
                id: action.payload._id
            }
        case ACTIVE_USER:
            return {
                ...state,
                user: action.payload.username,
                id: action.payload.userId
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('id', action.payload.user._id);
            localStorage.setItem('user', action.payload.user.username);
            return {
                ...state,
                user: action.payload.user.username,
                id: action.payload.user._id,
                isAuthenticated: true,
                loading: false
            };
        case LOGIN_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('id');
            localStorage.removeItem('user');
            return {
                ...state,
                isAuthenticated: null,
                loading: true,
                user: null,
                error: action.payload
            };
        case LOGOUT:
            localStorage.removeItem('id');
            localStorage.removeItem('user');
            return {
                ...state,
                isAuthenticated: null,
                loading: true,
                user: null
            }
        default:
            return state;
    }
}